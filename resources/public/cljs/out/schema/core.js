// Compiled by ClojureScript 1.9.227 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * Produce a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   If this is a composite schema, should let-bind (subschema-walker sub-schema) for each
 *   subschema outside the returned fn.  Within the returned fn, should break down data
 *   into constituents, call the let-bound subschema walkers on each component, and then
 *   reassemble the components into a walked version of the data (or an ErrorContainer
 *   describing the validaiton failures).
 * 
 *   Attempting to walk a value that already contains a utils/ErrorContainer produces undefined
 *   behavior.
 * 
 *   User code should never call `walker` directly.  Instead, it should call `start-walker`
 *   below.
 */
schema.core.walker = (function schema$core$walker(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$walker$arity$1 == null)))){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__25414__auto__ = (((this$ == null))?null:this$);
var m__25415__auto__ = (schema.core.walker[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,this$);
} else {
var m__25415__auto____$1 = (schema.core.walker["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.walker",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__25414__auto__ = (((this$ == null))?null:this$);
var m__25415__auto__ = (schema.core.explain[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,this$);
} else {
var m__25415__auto____$1 = (schema.core.explain["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * The function to call within 'walker' implementations to create walkers for subschemas.
 * Can be dynamically bound (using start-walker below) to create different walking behaviors.
 * 
 * For the curious, implemented using dynamic binding rather than making walker take a
 * subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
 * seem to require mind-bending things like fixed-point combinators that way, but are
 * simple this way.
 */
schema.core.subschema_walker = (function schema$core$subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
 * The entry point for creating walkers.  Binds the provided walker to subschema-walker,
 * then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
 * More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
 * that wraps walker with additional behavior.
 */
schema.core.start_walker = (function schema$core$start_walker(sub_walker,schema__$1){
var subschema_walker30093 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return schema.core.subschema_walker.call(null,schema__$1);
}finally {schema.core.subschema_walker = subschema_walker30093;
}});
/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.core.start_walker.call(null,schema.utils.memoize_id.call(null,schema.core.walker),schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var temp__4657__auto___30094 = schema.core.check.call(null,schema__$1,value);
if(cljs.core.truth_(temp__4657__auto___30094)){
var error_30095 = temp__4657__auto___30094;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_30095)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_30095], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4655__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4655__auto__)){
var more_schema = temp__4655__auto__;
return schema.core.subschema_walker.call(null,more_schema);
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__24751__auto__ = ((((x == null)) || (cljs.core.not.call(null,(function (){var or__24751__auto__ = (this$ === x.constructor);
if(or__24751__auto__){
return or__24751__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = this$;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return class_walker.call(null,x);
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4655__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4655__auto__)){
var more_schema = temp__4655__auto__;
return schema.core.explain.call(null,more_schema);
} else {
return this$;
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30097,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30099 = (((k30097 instanceof cljs.core.Keyword))?k30097.fqn:null);
switch (G__30099) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30097,else__25376__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.AnythingSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30096){
var self__ = this;
var G__30096__$1 = this;
return (new cljs.core.RecordIter((0),G__30096__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30096){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30100 = cljs.core.keyword_identical_QMARK_;
var expr__30101 = k__25381__auto__;
if(cljs.core.truth_(pred__30100.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__30101))){
return (new schema.core.AnythingSchema(G__30096,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30096),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30096){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__30096,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__30098){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__30098),null,cljs.core.dissoc.call(null,G__30098,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30105,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30107 = (((k30105 instanceof cljs.core.Keyword))?k30105.fqn:null);
switch (G__30107) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30105,else__25376__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.EqSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30104){
var self__ = this;
var G__30104__$1 = this;
return (new cljs.core.RecordIter((0),G__30104__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30104){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30108 = cljs.core.keyword_identical_QMARK_;
var expr__30109 = k__25381__auto__;
if(cljs.core.truth_(pred__30108.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__30109))){
return (new schema.core.EqSchema(G__30104,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30104),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30104){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__30104,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.call(null,self__.v,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = self__.v;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = self__.v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__30106){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__30106),null,cljs.core.dissoc.call(null,G__30106,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30113,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30115 = (((k30113 instanceof cljs.core.Keyword))?k30113.fqn:null);
switch (G__30115) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30113,else__25376__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Isa{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30112){
var self__ = this;
var G__30112__$1 = this;
return (new cljs.core.RecordIter((0),G__30112__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30112){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30116 = cljs.core.keyword_identical_QMARK_;
var expr__30117 = k__25381__auto__;
if(cljs.core.truth_(pred__30116.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30117))){
return (new schema.core.Isa(G__30112,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30116.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__30117))){
return (new schema.core.Isa(self__.h,G__30112,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30112),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30112){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__30112,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__24751__auto__ = (function (){var and__24739__auto__ = self__.h;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.isa_QMARK_.call(null,self__.h,child,self__.parent);
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.isa_QMARK_.call(null,child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = child;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = self__.parent;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = self__.parent;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__30114){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30114),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__30114),null,cljs.core.dissoc.call(null,G__30114,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args30120 = [];
var len__25826__auto___30123 = arguments.length;
var i__25827__auto___30124 = (0);
while(true){
if((i__25827__auto___30124 < len__25826__auto___30123)){
args30120.push((arguments[i__25827__auto___30124]));

var G__30125 = (i__25827__auto___30124 + (1));
i__25827__auto___30124 = G__30125;
continue;
} else {
}
break;
}

var G__30122 = args30120.length;
switch (G__30122) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30120.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30128,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30130 = (((k30128 instanceof cljs.core.Keyword))?k30128.fqn:null);
switch (G__30130) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30128,else__25376__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.EnumSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30127){
var self__ = this;
var G__30127__$1 = this;
return (new cljs.core.RecordIter((0),G__30127__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30127){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30131 = cljs.core.keyword_identical_QMARK_;
var expr__30132 = k__25381__auto__;
if(cljs.core.truth_(pred__30131.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__30132))){
return (new schema.core.EnumSchema(G__30127,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30127),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30127){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__30127,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,self__.vs,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
var x__25585__auto__ = self__.vs;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__30129){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__30129),null,cljs.core.dissoc.call(null,G__30129,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__25833__auto__ = [];
var len__25826__auto___30136 = arguments.length;
var i__25827__auto___30137 = (0);
while(true){
if((i__25827__auto___30137 < len__25826__auto___30136)){
args__25833__auto__.push((arguments[i__25827__auto___30137]));

var G__30138 = (i__25827__auto___30137 + (1));
i__25827__auto___30137 = G__30138;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq30135){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30135));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30140,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30142 = (((k30140 instanceof cljs.core.Keyword))?k30140.fqn:null);
switch (G__30142) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30140,else__25376__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Predicate{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30139){
var self__ = this;
var G__30139__$1 = this;
return (new cljs.core.RecordIter((0),G__30139__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30139){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30143 = cljs.core.keyword_identical_QMARK_;
var expr__30144 = k__25381__auto__;
if(cljs.core.truth_(pred__30143.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__30144))){
return (new schema.core.Predicate(G__30139,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30143.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__30144))){
return (new schema.core.Predicate(self__.p_QMARK_,G__30139,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30139),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30139){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__30139,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4655__auto__ = (function (){try{if(cljs.core.truth_(self__.p_QMARK_.call(null,x))){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e30146){if((e30146 instanceof Object)){
var e = e30146;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e30146;

}
}})();
if(cljs.core.truth_(temp__4655__auto__)){
var reason = temp__4655__auto__;
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4655__auto__,this$__$1){
return (function (){
var x__25585__auto__ = self__.pred_name;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
});})(reason,temp__4655__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = self__.pred_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__30141){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__30141),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__30141),null,cljs.core.dissoc.call(null,G__30141,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args30148 = [];
var len__25826__auto___30151 = arguments.length;
var i__25827__auto___30152 = (0);
while(true){
if((i__25827__auto___30152 < len__25826__auto___30151)){
args30148.push((arguments[i__25827__auto___30152]));

var G__30153 = (i__25827__auto___30152 + (1));
i__25827__auto___30152 = G__30153;
continue;
} else {
}
break;
}

var G__30150 = args30148.length;
switch (G__30150) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30148.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,p_QMARK_);
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30156,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30158 = (((k30156 instanceof cljs.core.Keyword))?k30156.fqn:null);
switch (G__30158) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30156,else__25376__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Protocol{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30155){
var self__ = this;
var G__30155__$1 = this;
return (new cljs.core.RecordIter((0),G__30155__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30155){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30159 = cljs.core.keyword_identical_QMARK_;
var expr__30160 = k__25381__auto__;
if(cljs.core.truth_(pred__30159.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30160))){
return (new schema.core.Protocol(G__30155,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30155),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30155){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__30155,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.protocol_name.call(null,this$__$1);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.protocol_name.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__30157){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30157),null,cljs.core.dissoc.call(null,G__30157,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not.call(null,cljs.core.re_find.call(null,this$__$1,x))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.explain.call(null,this$__$1);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core30163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core30163 = (function (meta30164){
this.meta30164 = meta30164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core30163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30165,meta30164__$1){
var self__ = this;
var _30165__$1 = this;
return (new schema.core.t_schema$core30163(meta30164__$1));
});

schema.core.t_schema$core30163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30165){
var self__ = this;
var _30165__$1 = this;
return self__.meta30164;
});

schema.core.t_schema$core30163.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core30163.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if((x instanceof RegExp)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.t_schema$core30163.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core30163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30164","meta30164",-1276674699,null)], null);
});

schema.core.t_schema$core30163.cljs$lang$type = true;

schema.core.t_schema$core30163.cljs$lang$ctorStr = "schema.core/t_schema$core30163";

schema.core.t_schema$core30163.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"schema.core/t_schema$core30163");
});

schema.core.__GT_t_schema$core30163 = (function schema$core$__GT_t_schema$core30163(meta30164){
return (new schema.core.t_schema$core30163(meta30164));
});

}

return (new schema.core.t_schema$core30163(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30167,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30169 = (((k30167 instanceof cljs.core.Keyword))?k30167.fqn:null);
switch (G__30169) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30167,else__25376__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Maybe{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30166){
var self__ = this;
var G__30166__$1 = this;
return (new cljs.core.RecordIter((0),G__30166__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30166){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30170 = cljs.core.keyword_identical_QMARK_;
var expr__30171 = k__25381__auto__;
if(cljs.core.truth_(pred__30170.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__30171))){
return (new schema.core.Maybe(G__30166,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30166),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30166){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__30166,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = schema.core.subschema_walker.call(null,self__.schema);
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
return sub_walker.call(null,x);
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__30168){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__30168),null,cljs.core.dissoc.call(null,G__30168,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30175,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30177 = (((k30175 instanceof cljs.core.Keyword))?k30175.fqn:null);
switch (G__30177) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30175,else__25376__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.NamedSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30174){
var self__ = this;
var G__30174__$1 = this;
return (new cljs.core.RecordIter((0),G__30174__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30174){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30178 = cljs.core.keyword_identical_QMARK_;
var expr__30179 = k__25381__auto__;
if(cljs.core.truth_(pred__30178.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__30179))){
return (new schema.core.NamedSchema(G__30174,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30178.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__30179))){
return (new schema.core.NamedSchema(self__.schema,G__30174,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30174),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30174){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__30174,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = schema.core.subschema_walker.call(null,self__.schema);
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name.call(null,self__.name,sub_walker.call(null,x));
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = self__.name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__30176){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__30176),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__30176),null,cljs.core.dissoc.call(null,G__30176,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30183,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30185 = (((k30183 instanceof cljs.core.Keyword))?k30183.fqn:null);
switch (G__30185) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30183,else__25376__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Either{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30182){
var self__ = this;
var G__30182__$1 = this;
return (new cljs.core.RecordIter((0),G__30182__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30182){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30186 = cljs.core.keyword_identical_QMARK_;
var expr__30187 = k__25381__auto__;
if(cljs.core.truth_(pred__30186.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__30187))){
return (new schema.core.Either(G__30182,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30182),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30182){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__30182,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq.call(null,sub_walkers);
while(true){
if(cljs.core.not.call(null,sub_walkers__$1)){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),x__25585__auto__);
})(),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first.call(null,sub_walkers__$1).call(null,x);
if(cljs.core.not.call(null,schema.utils.error_QMARK_.call(null,res))){
return res;
} else {
var G__30190 = cljs.core.next.call(null,sub_walkers__$1);
sub_walkers__$1 = G__30190;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__30184){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__30184),null,cljs.core.dissoc.call(null,G__30184,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 */
schema.core.either = (function schema$core$either(var_args){
var args__25833__auto__ = [];
var len__25826__auto___30192 = arguments.length;
var i__25827__auto___30193 = (0);
while(true){
if((i__25827__auto___30193 < len__25826__auto___30192)){
args__25833__auto__.push((arguments[i__25827__auto___30193]));

var G__30194 = (i__25827__auto___30193 + (1));
i__25827__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq30191){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30191));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30196,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30198 = (((k30196 instanceof cljs.core.Keyword))?k30196.fqn:null);
switch (G__30198) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30196,else__25376__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Both{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30195){
var self__ = this;
var G__30195__$1 = this;
return (new cljs.core.RecordIter((0),G__30195__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30195){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30199 = cljs.core.keyword_identical_QMARK_;
var expr__30200 = k__25381__auto__;
if(cljs.core.truth_(pred__30199.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__30200))){
return (new schema.core.Both(G__30195,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30195),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30195){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__30195,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.call(null,((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x__$1))){
return x__$1;
} else {
return sub_walker.call(null,x__$1);
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__30197){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__30197),null,cljs.core.dissoc.call(null,G__30197,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 */
schema.core.both = (function schema$core$both(var_args){
var args__25833__auto__ = [];
var len__25826__auto___30204 = arguments.length;
var i__25827__auto___30205 = (0);
while(true){
if((i__25827__auto___30205 < len__25826__auto___30204)){
args__25833__auto__.push((arguments[i__25827__auto___30205]));

var G__30206 = (i__25827__auto___30205 + (1));
i__25827__auto___30205 = G__30206;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq30203){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30203));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30208,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30210 = (((k30208 instanceof cljs.core.Keyword))?k30208.fqn:null);
switch (G__30210) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30208,else__25376__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30207){
var self__ = this;
var G__30207__$1 = this;
return (new cljs.core.RecordIter((0),G__30207__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30207){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30211 = cljs.core.keyword_identical_QMARK_;
var expr__30212 = k__25381__auto__;
if(cljs.core.truth_(pred__30211.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__30212))){
return (new schema.core.ConditionalSchema(G__30207,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30207),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30207){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__30207,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.call(null,((function (this$__$1){
return (function (p__30214){
var vec__30215 = p__30214;
var pred = cljs.core.nth.call(null,vec__30215,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__30215,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.subschema_walker.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (preds_and_walkers,this$__$1){
return (function (p__30218){
var vec__30219 = p__30218;
var pred = cljs.core.nth.call(null,vec__30219,(0),null);
return pred.call(null,x);
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30222 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__30222,(0),null);
var match = cljs.core.nth.call(null,vec__30222,(1),null);
return match.call(null,x);
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (temp__4655__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4655__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__30225){
var vec__30226 = p__30225;
var pred = cljs.core.nth.call(null,vec__30226,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__30226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__30209){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__30209),null,cljs.core.dissoc.call(null,G__30209,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__25833__auto__ = [];
var len__25826__auto___30247 = arguments.length;
var i__25827__auto___30248 = (0);
while(true){
if((i__25827__auto___30248 < len__25826__auto___30247)){
args__25833__auto__.push((arguments[i__25827__auto___30248]));

var G__30249 = (i__25827__auto___30248 + (1));
i__25827__auto___30248 = G__30249;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args; got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__25531__auto__ = (function schema$core$iter__30231(s__30232){
return (new cljs.core.LazySeq(null,(function (){
var s__30232__$1 = s__30232;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30232__$1);
if(temp__4657__auto__){
var s__30232__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30232__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30232__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30234 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30233 = (0);
while(true){
if((i__30233 < size__25530__auto__)){
var vec__30241 = cljs.core._nth.call(null,c__25529__auto__,i__30233);
var pred = cljs.core.nth.call(null,vec__30241,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__30241,(1),null);
cljs.core.chunk_append.call(null,b__30234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__30250 = (i__30233 + (1));
i__30233 = G__30250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30234),schema$core$iter__30231.call(null,cljs.core.chunk_rest.call(null,s__30232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30234),null);
}
} else {
var vec__30244 = cljs.core.first.call(null,s__30232__$2);
var pred = cljs.core.nth.call(null,vec__30244,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__30244,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__30231.call(null,cljs.core.rest.call(null,s__30232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq30230){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30230));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
/**
 * A sentinel value representing missing portions of the input data.
 */
schema.core._PLUS_missing_PLUS_ = new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325);

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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30252,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30254 = (((k30252 instanceof cljs.core.Keyword))?k30252.fqn:null);
switch (G__30254) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30252,else__25376__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.RequiredKey{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30251){
var self__ = this;
var G__30251__$1 = this;
return (new cljs.core.RecordIter((0),G__30251__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30251){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30255 = cljs.core.keyword_identical_QMARK_;
var expr__30256 = k__25381__auto__;
if(cljs.core.truth_(pred__30255.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__30256))){
return (new schema.core.RequiredKey(G__30251,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30251),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30251){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__30251,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__30253){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__30253),null,cljs.core.dissoc.call(null,G__30253,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30260,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30262 = (((k30260 instanceof cljs.core.Keyword))?k30260.fqn:null);
switch (G__30262) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30260,else__25376__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.OptionalKey{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30259){
var self__ = this;
var G__30259__$1 = this;
return (new cljs.core.RecordIter((0),G__30259__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30259){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30263 = cljs.core.keyword_identical_QMARK_;
var expr__30264 = k__25381__auto__;
if(cljs.core.truth_(pred__30263.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__30264))){
return (new schema.core.OptionalKey(G__30259,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30259),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30259){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__30259,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__30261){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__30261),null,cljs.core.dissoc.call(null,G__30261,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__24751__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
var x__25585__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.core.explicit_schema_key.call(null,kspec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
}
} else {
return schema.core.explain.call(null,kspec);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30268,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30270 = (((k30268 instanceof cljs.core.Keyword))?k30268.fqn:null);
switch (G__30270) {
case "kspec":
return self__.kspec;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30268,else__25376__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.MapEntry{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30267){
var self__ = this;
var G__30267__$1 = this;
return (new cljs.core.RecordIter((0),G__30267__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30267){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30271 = cljs.core.keyword_identical_QMARK_;
var expr__30272 = k__25381__auto__;
if(cljs.core.truth_(pred__30271.call(null,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),expr__30272))){
return (new schema.core.MapEntry(G__30267,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30271.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__30272))){
return (new schema.core.MapEntry(self__.kspec,G__30267,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30267),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30267){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__30267,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = schema.core.subschema_walker.call(null,self__.val_schema);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,self__.kspec))){
var optional_QMARK_ = schema.core.optional_key_QMARK_.call(null,self__.kspec);
var k = schema.core.explicit_schema_key.call(null,self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x)))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
var x__25585__auto__ = cljs.core._EQ_;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),new cljs.core.Symbol(null,"count","count",-514511684,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),(2)),x__25585__auto__);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__30274 = x;
var xk = cljs.core.nth.call(null,vec__30274,(0),null);
var xv = cljs.core.nth.call(null,vec__30274,(1),null);
if(cljs.core._EQ_.call(null,xk,k)){
} else {
throw (new Error("Assert failed: (= xk k)"));
}

var vres = val_walker.call(null,xv);
var temp__4655__auto__ = schema.utils.error_val.call(null,vres);
if(cljs.core.truth_(temp__4655__auto__)){
var ve = temp__4655__auto__;
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = schema.core.subschema_walker.call(null,self__.kspec);
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x)))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
var x__25585__auto__ = cljs.core._EQ_;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),new cljs.core.Symbol(null,"count","count",-514511684,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),(2)),x__25585__auto__);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = key_walker.call(null,cljs.core.key.call(null,x));
var out_ke = schema.utils.error_val.call(null,out_k);
var out_v = val_walker.call(null,cljs.core.val.call(null,x));
var out_ve = schema.utils.error_val.call(null,out_v);
if(cljs.core.truth_((function (){var or__24751__auto__ = out_ke;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24751__auto__ = out_ke;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.key.call(null,x);
}
})(),(function (){var or__24751__auto__ = out_ve;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.explain_kspec.call(null,self__.kspec);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.core.explain.call(null,self__.val_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kspec","kspec",489299279,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__30269){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__30269),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__30269),null,cljs.core.dissoc.call(null,G__30269,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.preserve_map_type = (function schema$core$preserve_map_type(original,walker_result){
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.utils.record_QMARK_.call(null,original);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,schema.utils.error_QMARK_.call(null,walker_result));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.into.call(null,original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function schema$core$map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?schema.core.subschema_walker.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,map_schema,extra_keys_schema))):null);
var explicit_schema = cljs.core.dissoc.call(null,map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function schema$core$map_walker_$_iter__30306(s__30307){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__30307__$1 = s__30307;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30307__$1);
if(temp__4657__auto__){
var s__30307__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30307__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30307__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30309 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30308 = (0);
while(true){
if((i__30308 < size__25530__auto__)){
var vec__30316 = cljs.core._nth.call(null,c__25529__auto__,i__30308);
var k = cljs.core.nth.call(null,vec__30316,(0),null);
var v = cljs.core.nth.call(null,vec__30316,(1),null);
cljs.core.chunk_append.call(null,b__30309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null));

var G__30333 = (i__30308 + (1));
i__30308 = G__30333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30309),schema$core$map_walker_$_iter__30306.call(null,cljs.core.chunk_rest.call(null,s__30307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30309),null);
}
} else {
var vec__30319 = cljs.core.first.call(null,s__30307__$2);
var k = cljs.core.nth.call(null,vec__30319,(0),null);
var v = cljs.core.nth.call(null,vec__30319,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null),schema$core$map_walker_$_iter__30306.call(null,cljs.core.rest.call(null,s__30307__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__25531__auto__.call(null,explicit_schema);
})());
var err_conj = schema.utils.result_builder.call(null,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,explicit_schema),cljs.core.count.call(null,explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__30278_SHARP_){
return (cljs.core.count.call(null,p1__30278_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,explicit_schema)))))))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_.call(null,x))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type.call(null,x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq.call(null,explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,explicit_walkers__$1)){
return cljs.core.reduce.call(null,(cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
return err_conj.call(null,out__$1,extra_walker.call(null,e));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__30322){
var vec__30323 = p__30322;
var k = cljs.core.nth.call(null,vec__30323,(0),null);
var _ = cljs.core.nth.call(null,vec__30323,(1),null);
return err_conj.call(null,out__$1,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null)));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.call(null,((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__30326){
var vec__30327 = p__30326;
var k = cljs.core.nth.call(null,vec__30327,(0),null);
var v = cljs.core.nth.call(null,vec__30327,(1),null);
return ok_key.call(null,k);
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__30330 = cljs.core.first.call(null,explicit_walkers__$1);
var wk = cljs.core.nth.call(null,vec__30330,(0),null);
var wv = cljs.core.nth.call(null,vec__30330,(1),null);
var G__30334 = cljs.core.conj.call(null,ok_key,wk);
var G__30335 = cljs.core.next.call(null,explicit_walkers__$1);
var G__30336 = err_conj.call(null,out,wv.call(null,(function (){var or__24751__auto__ = cljs.core.find.call(null,x,wk);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})()));
ok_key = G__30334;
explicit_walkers__$1 = G__30335;
out = G__30336;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function schema$core$map_explain_$_iter__30353(s__30354){
return (new cljs.core.LazySeq(null,(function (){
var s__30354__$1 = s__30354;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30354__$1);
if(temp__4657__auto__){
var s__30354__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30354__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30354__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30356 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30355 = (0);
while(true){
if((i__30355 < size__25530__auto__)){
var vec__30363 = cljs.core._nth.call(null,c__25529__auto__,i__30355);
var k = cljs.core.nth.call(null,vec__30363,(0),null);
var v = cljs.core.nth.call(null,vec__30363,(1),null);
cljs.core.chunk_append.call(null,b__30356,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))));

var G__30369 = (i__30355 + (1));
i__30355 = G__30369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30356),schema$core$map_explain_$_iter__30353.call(null,cljs.core.chunk_rest.call(null,s__30354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30356),null);
}
} else {
var vec__30366 = cljs.core.first.call(null,s__30354__$2);
var k = cljs.core.nth.call(null,vec__30366,(0),null);
var v = cljs.core.nth.call(null,vec__30366,(1),null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))),schema$core$map_explain_$_iter__30353.call(null,cljs.core.rest.call(null,s__30354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

var sub_walker = schema.core.subschema_walker.call(null,cljs.core.first.call(null,this$__$1));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__24751__auto__ = ((cljs.core.set_QMARK_.call(null,x))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var vec__30370 = cljs.core.juxt.call(null,cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.call(null,sub_walker,x));
var good = cljs.core.nth.call(null,vec__30370,(0),null);
var bad = cljs.core.nth.call(null,vec__30370,(1),null);
if(cljs.core.seq.call(null,bad)){
return schema.utils.error.call(null,cljs.core.set.call(null,bad));
} else {
return cljs.core.set.call(null,good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30374,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30376 = (((k30374 instanceof cljs.core.Keyword))?k30374.fqn:null);
switch (G__30376) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30374,else__25376__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.One{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30373){
var self__ = this;
var G__30373__$1 = this;
return (new cljs.core.RecordIter((0),G__30373__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30373){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30377 = cljs.core.keyword_identical_QMARK_;
var expr__30378 = k__25381__auto__;
if(cljs.core.truth_(pred__30377.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__30378))){
return (new schema.core.One(G__30373,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30377.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__30378))){
return (new schema.core.One(self__.schema,G__30373,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30377.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__30378))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__30373,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30373),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30373){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__30373,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__30375){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__30375),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__30375),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__30375),null,cljs.core.dissoc.call(null,G__30375,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__30390 = cljs.core.split_with.call(null,(function (p1__30381_SHARP_){
return ((p1__30381_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__30381_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__30390,(0),null);
var more = cljs.core.nth.call(null,vec__30390,(1),null);
var vec__30393 = cljs.core.split_with.call(null,((function (vec__30390,required,more){
return (function (p1__30382_SHARP_){
var and__24739__auto__ = (p1__30382_SHARP_ instanceof schema.core.One);
if(and__24739__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__30382_SHARP_);
} else {
return and__24739__auto__;
}
});})(vec__30390,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__30393,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__30393,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__30390,required,more,vec__30393,optional,more__$1){
return (function (p1__30383_SHARP_){
return !((p1__30383_SHARP_ instanceof schema.core.One));
});})(vec__30390,required,more,vec__30393,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__30396 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__30396,(0),null);
var multi = cljs.core.nth.call(null,vec__30396,(1),null);
var single_walkers = cljs.core.vec.call(null,(function (){var iter__25531__auto__ = ((function (vec__30396,singles,multi,this$__$1){
return (function schema$core$iter__30399(s__30400){
return (new cljs.core.LazySeq(null,((function (vec__30396,singles,multi,this$__$1){
return (function (){
var s__30400__$1 = s__30400;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30400__$1);
if(temp__4657__auto__){
var s__30400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30400__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30400__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30402 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30401 = (0);
while(true){
if((i__30401 < size__25530__auto__)){
var s = cljs.core._nth.call(null,c__25529__auto__,i__30401);
cljs.core.chunk_append.call(null,b__30402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null));

var G__30429 = (i__30401 + (1));
i__30401 = G__30429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30402),schema$core$iter__30399.call(null,cljs.core.chunk_rest.call(null,s__30400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30402),null);
}
} else {
var s = cljs.core.first.call(null,s__30400__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null),schema$core$iter__30399.call(null,cljs.core.rest.call(null,s__30400__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30396,singles,multi,this$__$1))
,null,null));
});})(vec__30396,singles,multi,this$__$1))
;
return iter__25531__auto__.call(null,singles);
})());
var multi_walker = (cljs.core.truth_(multi)?schema.core.subschema_walker.call(null,multi):null);
var err_conj = schema.utils.result_builder.call(null,((function (vec__30396,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,m),null));
});})(vec__30396,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__24751__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,single_walkers__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30403 = temp__4655__auto__;
var first_single = cljs.core.nth.call(null,vec__30403,(0),null);
var single_walker = cljs.core.nth.call(null,vec__30403,(1),null);
if(cljs.core.empty_QMARK_.call(null,x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__25531__auto__ = ((function (single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function schema$core$iter__30406(s__30407){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__30407__$1 = s__30407;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30407__$1);
if(temp__4657__auto__){
var s__30407__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30407__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30407__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30409 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30408 = (0);
while(true){
if((i__30408 < size__25530__auto__)){
var vec__30416 = cljs.core._nth.call(null,c__25529__auto__,i__30408);
var single = cljs.core.nth.call(null,vec__30416,(0),null);
if(cljs.core.not.call(null,single.optional_QMARK_)){
cljs.core.chunk_append.call(null,b__30409,single.name);

var G__30430 = (i__30408 + (1));
i__30408 = G__30430;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30409),schema$core$iter__30406.call(null,cljs.core.chunk_rest.call(null,s__30407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30409),null);
}
} else {
var vec__30419 = cljs.core.first.call(null,s__30407__$2);
var single = cljs.core.nth.call(null,vec__30419,(0),null);
if(cljs.core.not.call(null,single.optional_QMARK_)){
return cljs.core.cons.call(null,single.name,schema$core$iter__30406.call(null,cljs.core.rest.call(null,s__30407__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__25531__auto__.call(null,single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,vec__30403,first_single,single_walker,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
}
} else {
var G__30431 = cljs.core.next.call(null,single_walkers__$1);
var G__30432 = cljs.core.rest.call(null,x__$1);
var G__30433 = err_conj.call(null,out,schema.utils.wrap_error_name.call(null,first_single.name,single_walker.call(null,cljs.core.first.call(null,x__$1))));
single_walkers__$1 = G__30431;
x__$1 = G__30432;
out = G__30433;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.call(null,err_conj,out,cljs.core.map.call(null,multi_walker,x__$1));
} else {
if(cljs.core.seq.call(null,x__$1)){
return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.count.call(null,x__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,temp__4655__auto__,or__24751__auto__,vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__30396,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__30422 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__30422,(0),null);
var multi = cljs.core.nth.call(null,vec__30422,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__25531__auto__ = ((function (vec__30422,singles,multi,this$__$1){
return (function schema$core$iter__30425(s__30426){
return (new cljs.core.LazySeq(null,((function (vec__30422,singles,multi,this$__$1){
return (function (){
var s__30426__$1 = s__30426;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30426__$1);
if(temp__4657__auto__){
var s__30426__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30426__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__30426__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__30428 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__30427 = (0);
while(true){
if((i__30427 < size__25530__auto__)){
var s = cljs.core._nth.call(null,c__25529__auto__,i__30427);
cljs.core.chunk_append.call(null,b__30428,(function (){var x__25585__auto__ = (cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})());

var G__30434 = (i__30427 + (1));
i__30427 = G__30434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30428),schema$core$iter__30425.call(null,cljs.core.chunk_rest.call(null,s__30426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30428),null);
}
} else {
var s = cljs.core.first.call(null,s__30426__$2);
return cljs.core.cons.call(null,(function (){var x__25585__auto__ = (cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})(),schema$core$iter__30425.call(null,cljs.core.rest.call(null,s__30426__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30422,singles,multi,this$__$1))
,null,null));
});})(vec__30422,singles,multi,this$__$1))
;
return iter__25531__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30436,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30438 = (((k30436 instanceof cljs.core.Keyword))?k30436.fqn:null);
switch (G__30438) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30436,else__25376__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.Record{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30435){
var self__ = this;
var G__30435__$1 = this;
return (new cljs.core.RecordIter((0),G__30435__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30435){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30439 = cljs.core.keyword_identical_QMARK_;
var expr__30440 = k__25381__auto__;
if(cljs.core.truth_(pred__30439.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__30440))){
return (new schema.core.Record(G__30435,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30439.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__30440))){
return (new schema.core.Record(self__.klass,G__30435,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30435),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30435){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__30435,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = schema.core.subschema_walker.call(null,self__.schema);
var pred_checker = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var evf = temp__4657__auto__;
return schema.core.subschema_walker.call(null,schema.core.pred.call(null,evf));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__24751__auto__ = (((r instanceof self__.klass))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = self__.klass;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.utils.value_name.call(null,r);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var res = map_checker.call(null,r);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,res))){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?pred_checker.call(null,r):null);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,pred_res))){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass));
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__30437){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__30437),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__30437),null,cljs.core.dissoc.call(null,G__30437,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A Record instance of type klass, whose elements match map schema 'schema'.
 */
schema.core.record = (function schema$core$record(klass,schema__$1){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__30448 = cljs.core.split_with.call(null,(function (p1__30443_SHARP_){
return (p1__30443_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__30448,(0),null);
var more = cljs.core.nth.call(null,vec__30448,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__30448,required,more){
return (function (p1__30444_SHARP_){
return schema.core.explain.call(null,p1__30444_SHARP_.schema);
});})(vec__30448,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25373__auto__,k__25374__auto__){
var self__ = this;
var this__25373__auto____$1 = this;
return cljs.core._lookup.call(null,this__25373__auto____$1,k__25374__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25375__auto__,k30452,else__25376__auto__){
var self__ = this;
var this__25375__auto____$1 = this;
var G__30454 = (((k30452 instanceof cljs.core.Keyword))?k30452.fqn:null);
switch (G__30454) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30452,else__25376__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25387__auto__,writer__25388__auto__,opts__25389__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
var pr_pair__25390__auto__ = ((function (this__25387__auto____$1){
return (function (keyval__25391__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,cljs.core.pr_writer,""," ","",opts__25389__auto__,keyval__25391__auto__);
});})(this__25387__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25388__auto__,pr_pair__25390__auto__,"#schema.core.FnSchema{",", ","}",opts__25389__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30451){
var self__ = this;
var G__30451__$1 = this;
return (new cljs.core.RecordIter((0),G__30451__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25371__auto__){
var self__ = this;
var this__25371__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25367__auto__){
var self__ = this;
var this__25367__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25368__auto__){
var self__ = this;
var this__25368__auto____$1 = this;
var h__25186__auto__ = self__.__hash;
if(!((h__25186__auto__ == null))){
return h__25186__auto__;
} else {
var h__25186__auto____$1 = cljs.core.hash_imap.call(null,this__25368__auto____$1);
self__.__hash = h__25186__auto____$1;

return h__25186__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25369__auto__,other__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = other__25370__auto__;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = (this__25369__auto____$1.constructor === other__25370__auto__.constructor);
if(and__24739__auto____$1){
return cljs.core.equiv_map.call(null,this__25369__auto____$1,other__25370__auto__);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__25383__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25382__auto____$1),self__.__meta),k__25383__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25383__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25380__auto__,k__25381__auto__,G__30451){
var self__ = this;
var this__25380__auto____$1 = this;
var pred__30455 = cljs.core.keyword_identical_QMARK_;
var expr__30456 = k__25381__auto__;
if(cljs.core.truth_(pred__30455.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__30456))){
return (new schema.core.FnSchema(G__30451,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30455.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__30456))){
return (new schema.core.FnSchema(self__.output_schema,G__30451,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25381__auto__,G__30451),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25385__auto__){
var self__ = this;
var this__25385__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25372__auto__,G__30451){
var self__ = this;
var this__25372__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__30451,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25378__auto__,entry__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25379__auto__)){
return cljs.core._assoc.call(null,this__25378__auto____$1,cljs.core._nth.call(null,entry__25379__auto__,(0)),cljs.core._nth.call(null,entry__25379__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25378__auto____$1,entry__25379__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_.call(null,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.utils.value_name.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__25407__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__30453){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__30453),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__30453),null,cljs.core.dissoc.call(null,G__30453,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){

return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
schema.core.schema_name = (function schema$core$schema_name(schema__$1){

return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__24751__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var m__29963__auto__ = cljs.core.meta.call(null,f);
var k__29964__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4655__auto__ = cljs.core.find.call(null,m__29963__auto__,k__29964__auto__);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__29965__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__29965__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__29964__auto__,m__29963__auto__)));
}
}
});

//# sourceMappingURL=core.js.map?rel=1478445824902