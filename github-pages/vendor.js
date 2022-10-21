"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[736],{591:(xe,ae,I)=>{I.d(ae,{X:()=>le});var d=I(5529),R=I(5279);class le extends d.xQ{constructor(J){super(),this._value=J}get value(){return this.getValue()}_subscribe(J){const U=super._subscribe(J);return U&&!U.closed&&J.next(this._value),U}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new R.N;return this._value}next(J){super.next(this._value=J)}}},1869:(xe,ae,I)=>{I.d(ae,{d:()=>R});var d=I(3489);class R extends d.L{constructor(ie,J,U){super(),this.parent=ie,this.outerValue=J,this.outerIndex=U,this.index=0}_next(ie){this.parent.notifyNext(this.outerValue,ie,this.outerIndex,this.index++,this)}_error(ie){this.parent.notifyError(ie,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}},6498:(xe,ae,I)=>{I.d(ae,{y:()=>$});var d=I(3489),le=I(7668),ie=I(3292),U=I(3821),oe=I(4843),j=I(2830);let $=(()=>{class O{constructor(W){this._isScalar=!1,W&&(this._subscribe=W)}lift(W){const H=new O;return H.source=this,H.operator=W,H}subscribe(W,H,Q){const{operator:de}=this,re=function J(O,L,W){if(O){if(O instanceof d.L)return O;if(O[le.b])return O[le.b]()}return O||L||W?new d.L(O,L,W):new d.L(ie.c)}(W,H,Q);if(re.add(de?de.call(re,this.source):this.source||j.v.useDeprecatedSynchronousErrorHandling&&!re.syncErrorThrowable?this._subscribe(re):this._trySubscribe(re)),j.v.useDeprecatedSynchronousErrorHandling&&re.syncErrorThrowable&&(re.syncErrorThrowable=!1,re.syncErrorThrown))throw re.syncErrorValue;return re}_trySubscribe(W){try{return this._subscribe(W)}catch(H){j.v.useDeprecatedSynchronousErrorHandling&&(W.syncErrorThrown=!0,W.syncErrorValue=H),function R(O){for(;O;){const{closed:L,destination:W,isStopped:H}=O;if(L||H)return!1;O=W&&W instanceof d.L?W:null}return!0}(W)?W.error(H):console.warn(H)}}forEach(W,H){return new(H=N(H))((Q,de)=>{let re;re=this.subscribe(ve=>{try{W(ve)}catch(ze){de(ze),re&&re.unsubscribe()}},de,Q)})}_subscribe(W){const{source:H}=this;return H&&H.subscribe(W)}[U.L](){return this}pipe(...W){return 0===W.length?this:(0,oe.U)(W)(this)}toPromise(W){return new(W=N(W))((H,Q)=>{let de;this.subscribe(re=>de=re,re=>Q(re),()=>H(de))})}}return O.create=L=>new O(L),O})();function N(O){if(O||(O=j.v.Promise||Promise),!O)throw new Error("no Promise impl found");return O}},3292:(xe,ae,I)=>{I.d(ae,{c:()=>le});var d=I(2830),R=I(2782);const le={closed:!0,next(ie){},error(ie){if(d.v.useDeprecatedSynchronousErrorHandling)throw ie;(0,R.z)(ie)},complete(){}}},826:(xe,ae,I)=>{I.d(ae,{L:()=>R});var d=I(3489);class R extends d.L{notifyNext(ie,J,U,oe,j){this.destination.next(J)}notifyError(ie,J){this.destination.error(ie)}notifyComplete(ie){this.destination.complete()}}},5529:(xe,ae,I)=>{I.d(ae,{xQ:()=>j,Yc:()=>oe});var d=I(6498),R=I(3489),le=I(2654),ie=I(5279);class J extends le.w{constructor(O,L){super(),this.subject=O,this.subscriber=L,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const O=this.subject,L=O.observers;if(this.subject=null,!L||0===L.length||O.isStopped||O.closed)return;const W=L.indexOf(this.subscriber);-1!==W&&L.splice(W,1)}}var U=I(7668);class oe extends R.L{constructor(O){super(O),this.destination=O}}let j=(()=>{class N extends d.y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[U.b](){return new oe(this)}lift(L){const W=new $(this,this);return W.operator=L,W}next(L){if(this.closed)throw new ie.N;if(!this.isStopped){const{observers:W}=this,H=W.length,Q=W.slice();for(let de=0;de<H;de++)Q[de].next(L)}}error(L){if(this.closed)throw new ie.N;this.hasError=!0,this.thrownError=L,this.isStopped=!0;const{observers:W}=this,H=W.length,Q=W.slice();for(let de=0;de<H;de++)Q[de].error(L);this.observers.length=0}complete(){if(this.closed)throw new ie.N;this.isStopped=!0;const{observers:L}=this,W=L.length,H=L.slice();for(let Q=0;Q<W;Q++)H[Q].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(L){if(this.closed)throw new ie.N;return super._trySubscribe(L)}_subscribe(L){if(this.closed)throw new ie.N;return this.hasError?(L.error(this.thrownError),le.w.EMPTY):this.isStopped?(L.complete(),le.w.EMPTY):(this.observers.push(L),new J(this,L))}asObservable(){const L=new d.y;return L.source=this,L}}return N.create=(O,L)=>new $(O,L),N})();class $ extends j{constructor(O,L){super(),this.destination=O,this.source=L}next(O){const{destination:L}=this;L&&L.next&&L.next(O)}error(O){const{destination:L}=this;L&&L.error&&this.destination.error(O)}complete(){const{destination:O}=this;O&&O.complete&&this.destination.complete()}_subscribe(O){const{source:L}=this;return L?this.source.subscribe(O):le.w.EMPTY}}},3489:(xe,ae,I)=>{I.d(ae,{L:()=>oe});var d=I(7043),R=I(3292),le=I(2654),ie=I(7668),J=I(2830),U=I(2782);class oe extends le.w{constructor(N,O,L){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=R.c;break;case 1:if(!N){this.destination=R.c;break}if("object"==typeof N){N instanceof oe?(this.syncErrorThrowable=N.syncErrorThrowable,this.destination=N,N.add(this)):(this.syncErrorThrowable=!0,this.destination=new j(this,N));break}default:this.syncErrorThrowable=!0,this.destination=new j(this,N,O,L)}}[ie.b](){return this}static create(N,O,L){const W=new oe(N,O,L);return W.syncErrorThrowable=!1,W}next(N){this.isStopped||this._next(N)}error(N){this.isStopped||(this.isStopped=!0,this._error(N))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(N){this.destination.next(N)}_error(N){this.destination.error(N),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:N}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=N,this}}class j extends oe{constructor(N,O,L,W){super(),this._parentSubscriber=N;let H,Q=this;(0,d.m)(O)?H=O:O&&(H=O.next,L=O.error,W=O.complete,O!==R.c&&(Q=Object.create(O),(0,d.m)(Q.unsubscribe)&&this.add(Q.unsubscribe.bind(Q)),Q.unsubscribe=this.unsubscribe.bind(this))),this._context=Q,this._next=H,this._error=L,this._complete=W}next(N){if(!this.isStopped&&this._next){const{_parentSubscriber:O}=this;J.v.useDeprecatedSynchronousErrorHandling&&O.syncErrorThrowable?this.__tryOrSetError(O,this._next,N)&&this.unsubscribe():this.__tryOrUnsub(this._next,N)}}error(N){if(!this.isStopped){const{_parentSubscriber:O}=this,{useDeprecatedSynchronousErrorHandling:L}=J.v;if(this._error)L&&O.syncErrorThrowable?(this.__tryOrSetError(O,this._error,N),this.unsubscribe()):(this.__tryOrUnsub(this._error,N),this.unsubscribe());else if(O.syncErrorThrowable)L?(O.syncErrorValue=N,O.syncErrorThrown=!0):(0,U.z)(N),this.unsubscribe();else{if(this.unsubscribe(),L)throw N;(0,U.z)(N)}}}complete(){if(!this.isStopped){const{_parentSubscriber:N}=this;if(this._complete){const O=()=>this._complete.call(this._context);J.v.useDeprecatedSynchronousErrorHandling&&N.syncErrorThrowable?(this.__tryOrSetError(N,O),this.unsubscribe()):(this.__tryOrUnsub(O),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(N,O){try{N.call(this._context,O)}catch(L){if(this.unsubscribe(),J.v.useDeprecatedSynchronousErrorHandling)throw L;(0,U.z)(L)}}__tryOrSetError(N,O,L){if(!J.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{O.call(this._context,L)}catch(W){return J.v.useDeprecatedSynchronousErrorHandling?(N.syncErrorValue=W,N.syncErrorThrown=!0,!0):((0,U.z)(W),!0)}return!1}_unsubscribe(){const{_parentSubscriber:N}=this;this._context=null,this._parentSubscriber=null,N.unsubscribe()}}},2654:(xe,ae,I)=>{I.d(ae,{w:()=>U});var d=I(6688),R=I(7830),le=I(7043);const J=(()=>{function j($){return Error.call(this),this.message=$?`${$.length} errors occurred during unsubscription:\n${$.map((N,O)=>`${O+1}) ${N.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=$,this}return j.prototype=Object.create(Error.prototype),j})();class U{constructor($){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,$&&(this._unsubscribe=$)}unsubscribe(){let $;if(this.closed)return;let{_parentOrParents:N,_unsubscribe:O,_subscriptions:L}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,N instanceof U)N.remove(this);else if(null!==N)for(let W=0;W<N.length;++W)N[W].remove(this);if((0,le.m)(O))try{O.call(this)}catch(W){$=W instanceof J?oe(W.errors):[W]}if((0,d.k)(L)){let W=-1,H=L.length;for(;++W<H;){const Q=L[W];if((0,R.K)(Q))try{Q.unsubscribe()}catch(de){$=$||[],de instanceof J?$=$.concat(oe(de.errors)):$.push(de)}}}if($)throw new J($)}add($){let N=$;if(!$)return U.EMPTY;switch(typeof $){case"function":N=new U($);case"object":if(N===this||N.closed||"function"!=typeof N.unsubscribe)return N;if(this.closed)return N.unsubscribe(),N;if(!(N instanceof U)){const W=N;N=new U,N._subscriptions=[W]}break;default:throw new Error("unrecognized teardown "+$+" added to Subscription.")}let{_parentOrParents:O}=N;if(null===O)N._parentOrParents=this;else if(O instanceof U){if(O===this)return N;N._parentOrParents=[O,this]}else{if(-1!==O.indexOf(this))return N;O.push(this)}const L=this._subscriptions;return null===L?this._subscriptions=[N]:L.push(N),N}remove($){const N=this._subscriptions;if(N){const O=N.indexOf($);-1!==O&&N.splice(O,1)}}}var j;function oe(j){return j.reduce(($,N)=>$.concat(N instanceof J?N.errors:N),[])}U.EMPTY=((j=new U).closed=!0,j)},2830:(xe,ae,I)=>{I.d(ae,{v:()=>R});let d=!1;const R={Promise:void 0,set useDeprecatedSynchronousErrorHandling(le){if(le){const ie=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+ie.stack)}else d&&console.log("RxJS: Back to a better error behavior. Thank you. <3");d=le},get useDeprecatedSynchronousErrorHandling(){return d}}},1762:(xe,ae,I)=>{I.d(ae,{N:()=>U,c:()=>J});var d=I(5529),R=I(6498),le=I(2654),ie=I(4327);class J extends R.y{constructor(O,L){super(),this.source=O,this.subjectFactory=L,this._refCount=0,this._isComplete=!1}_subscribe(O){return this.getSubject().subscribe(O)}getSubject(){const O=this._subject;return(!O||O.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let O=this._connection;return O||(this._isComplete=!1,O=this._connection=new le.w,O.add(this.source.subscribe(new oe(this.getSubject(),this))),O.closed&&(this._connection=null,O=le.w.EMPTY)),O}refCount(){return(0,ie.x)()(this)}}const U=(()=>{const N=J.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:N._subscribe},_isComplete:{value:N._isComplete,writable:!0},getSubject:{value:N.getSubject},connect:{value:N.connect},refCount:{value:N.refCount}}})();class oe extends d.Yc{constructor(O,L){super(O),this.connectable=L}_error(O){this._unsubscribe(),super._error(O)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const O=this.connectable;if(O){this.connectable=null;const L=O._connection;O._refCount=0,O._subject=null,O._connection=null,L&&L.unsubscribe()}}}},1221:(xe,ae,I)=>{I.d(ae,{z:()=>ie});var d=I(1086),R=I(9146);function ie(...J){return function le(){return(0,R.J)(1)}()((0,d.of)(...J))}},8514:(xe,ae,I)=>{I.d(ae,{P:()=>ie});var d=I(6498),R=I(5254),le=I(8896);function ie(J){return new d.y(U=>{let oe;try{oe=J()}catch($){return void U.error($)}return(oe?(0,R.D)(oe):(0,le.c)()).subscribe(U)})}},8896:(xe,ae,I)=>{I.d(ae,{E:()=>R,c:()=>le});var d=I(6498);const R=new d.y(J=>J.complete());function le(J){return J?function ie(J){return new d.y(U=>J.schedule(()=>U.complete()))}(J):R}},5254:(xe,ae,I)=>{I.d(ae,{D:()=>Q});var d=I(6498),R=I(9249),le=I(2654),ie=I(3821),oe=I(6454),j=I(5430),O=I(8955),L=I(8515);function Q(de,re){return re?function H(de,re){if(null!=de){if(function N(de){return de&&"function"==typeof de[ie.L]}(de))return function J(de,re){return new d.y(ve=>{const ze=new le.w;return ze.add(re.schedule(()=>{const ct=de[ie.L]();ze.add(ct.subscribe({next(Dt){ze.add(re.schedule(()=>ve.next(Dt)))},error(Dt){ze.add(re.schedule(()=>ve.error(Dt)))},complete(){ze.add(re.schedule(()=>ve.complete()))}}))})),ze})}(de,re);if((0,O.t)(de))return function U(de,re){return new d.y(ve=>{const ze=new le.w;return ze.add(re.schedule(()=>de.then(ct=>{ze.add(re.schedule(()=>{ve.next(ct),ze.add(re.schedule(()=>ve.complete()))}))},ct=>{ze.add(re.schedule(()=>ve.error(ct)))}))),ze})}(de,re);if((0,L.z)(de))return(0,oe.r)(de,re);if(function W(de){return de&&"function"==typeof de[j.hZ]}(de)||"string"==typeof de)return function $(de,re){if(!de)throw new Error("Iterable cannot be null");return new d.y(ve=>{const ze=new le.w;let ct;return ze.add(()=>{ct&&"function"==typeof ct.return&&ct.return()}),ze.add(re.schedule(()=>{ct=de[j.hZ](),ze.add(re.schedule(function(){if(ve.closed)return;let Dt,Je;try{const We=ct.next();Dt=We.value,Je=We.done}catch(We){return void ve.error(We)}Je?ve.complete():(ve.next(Dt),this.schedule())}))})),ze})}(de,re)}throw new TypeError((null!==de&&typeof de||de)+" is not observable")}(de,re):de instanceof d.y?de:new d.y((0,R.s)(de))}},3009:(xe,ae,I)=>{I.d(ae,{n:()=>ie});var d=I(6498),R=I(3650),le=I(6454);function ie(J,U){return U?(0,le.r)(J,U):new d.y((0,R.V)(J))}},3753:(xe,ae,I)=>{I.d(ae,{R:()=>U});var d=I(6498),R=I(6688),le=I(7043),ie=I(4850);function U(O,L,W,H){return(0,le.m)(W)&&(H=W,W=void 0),H?U(O,L,W).pipe((0,ie.U)(Q=>(0,R.k)(Q)?H(...Q):H(Q))):new d.y(Q=>{oe(O,L,function de(re){Q.next(arguments.length>1?Array.prototype.slice.call(arguments):re)},Q,W)})}function oe(O,L,W,H,Q){let de;if(function N(O){return O&&"function"==typeof O.addEventListener&&"function"==typeof O.removeEventListener}(O)){const re=O;O.addEventListener(L,W,Q),de=()=>re.removeEventListener(L,W,Q)}else if(function $(O){return O&&"function"==typeof O.on&&"function"==typeof O.off}(O)){const re=O;O.on(L,W),de=()=>re.off(L,W)}else if(function j(O){return O&&"function"==typeof O.addListener&&"function"==typeof O.removeListener}(O)){const re=O;O.addListener(L,W),de=()=>re.removeListener(L,W)}else{if(!O||!O.length)throw new TypeError("Invalid event target");for(let re=0,ve=O.length;re<ve;re++)oe(O[re],L,W,H,Q)}H.add(de)}},6787:(xe,ae,I)=>{I.d(ae,{T:()=>J});var d=I(6498),R=I(2866),le=I(9146),ie=I(3009);function J(...U){let oe=Number.POSITIVE_INFINITY,j=null,$=U[U.length-1];return(0,R.K)($)?(j=U.pop(),U.length>1&&"number"==typeof U[U.length-1]&&(oe=U.pop())):"number"==typeof $&&(oe=U.pop()),null===j&&1===U.length&&U[0]instanceof d.y?U[0]:(0,le.J)(oe)((0,ie.n)(U,j))}},1086:(xe,ae,I)=>{I.d(ae,{of:()=>ie});var d=I(2866),R=I(3009),le=I(6454);function ie(...J){let U=J[J.length-1];return(0,d.K)(U)?(J.pop(),(0,le.r)(J,U)):(0,R.n)(J)}},1737:(xe,ae,I)=>{I.d(ae,{_:()=>R});var d=I(6498);function R(ie,J){return new d.y(J?U=>J.schedule(le,0,{error:ie,subscriber:U}):U=>U.error(ie))}function le({error:ie,subscriber:J}){J.error(ie)}},7739:(xe,ae,I)=>{I.d(ae,{H:()=>U});var d=I(6498),R=I(6014),le=I(6688);function ie(j){return!(0,le.k)(j)&&j-parseFloat(j)+1>=0}var J=I(2866);function U(j=0,$,N){let O=-1;return ie($)?O=Number($)<1?1:Number($):(0,J.K)($)&&(N=$),(0,J.K)(N)||(N=R.P),new d.y(L=>{const W=ie(j)?j:+j-N.now();return N.schedule(oe,W,{index:0,period:O,subscriber:L})})}function oe(j){const{index:$,period:N,subscriber:O}=j;if(O.next($),!O.closed){if(-1===N)return O.complete();j.index=$+1,this.schedule(j,N)}}},7221:(xe,ae,I)=>{I.d(ae,{K:()=>ie});var d=I(826),R=I(1869),le=I(9054);function ie(oe){return function($){const N=new J(oe),O=$.lift(N);return N.caught=O}}class J{constructor(j){this.selector=j}call(j,$){return $.subscribe(new U(j,this.selector,this.caught))}}class U extends d.L{constructor(j,$,N){super(j),this.selector=$,this.caught=N}error(j){if(!this.isStopped){let $;try{$=this.selector(j,this.caught)}catch(L){return void super.error(L)}this._unsubscribeAndRecycle();const N=new R.d(this,void 0,void 0);this.add(N);const O=(0,le.D)(this,$,void 0,void 0,N);O!==N&&this.add(O)}}}},1406:(xe,ae,I)=>{I.d(ae,{b:()=>R});var d=I(1709);function R(le,ie){return(0,d.zg)(le,ie,1)}},9177:(xe,ae,I)=>{I.d(ae,{g:()=>$});var d=I(6014),le=I(3489),ie=I(8896),J=I(1086),U=I(1737);class j{constructor(H,Q,de){this.kind=H,this.value=Q,this.error=de,this.hasValue="N"===H}observe(H){switch(this.kind){case"N":return H.next&&H.next(this.value);case"E":return H.error&&H.error(this.error);case"C":return H.complete&&H.complete()}}do(H,Q,de){switch(this.kind){case"N":return H&&H(this.value);case"E":return Q&&Q(this.error);case"C":return de&&de()}}accept(H,Q,de){return H&&"function"==typeof H.next?this.observe(H):this.do(H,Q,de)}toObservable(){switch(this.kind){case"N":return(0,J.of)(this.value);case"E":return(0,U._)(this.error);case"C":return(0,ie.c)()}throw new Error("unexpected notification kind value")}static createNext(H){return typeof H<"u"?new j("N",H):j.undefinedValueNotification}static createError(H){return new j("E",void 0,H)}static createComplete(){return j.completeNotification}}function $(W,H=d.P){const de=function R(W){return W instanceof Date&&!isNaN(+W)}(W)?+W-H.now():Math.abs(W);return re=>re.lift(new N(de,H))}j.completeNotification=new j("C"),j.undefinedValueNotification=new j("N",void 0);class N{constructor(H,Q){this.delay=H,this.scheduler=Q}call(H,Q){return Q.subscribe(new O(H,this.delay,this.scheduler))}}class O extends le.L{constructor(H,Q,de){super(H),this.delay=Q,this.scheduler=de,this.queue=[],this.active=!1,this.errored=!1}static dispatch(H){const Q=H.source,de=Q.queue,re=H.scheduler,ve=H.destination;for(;de.length>0&&de[0].time-re.now()<=0;)de.shift().notification.observe(ve);if(de.length>0){const ze=Math.max(0,de[0].time-re.now());this.schedule(H,ze)}else this.unsubscribe(),Q.active=!1}_schedule(H){this.active=!0,this.destination.add(H.schedule(O.dispatch,this.delay,{source:this,destination:this.destination,scheduler:H}))}scheduleNotification(H){if(!0===this.errored)return;const Q=this.scheduler,de=new L(Q.now()+this.delay,H);this.queue.push(de),!1===this.active&&this._schedule(Q)}_next(H){this.scheduleNotification(j.createNext(H))}_error(H){this.errored=!0,this.queue=[],this.destination.error(H),this.unsubscribe()}_complete(){this.scheduleNotification(j.createComplete()),this.unsubscribe()}}class L{constructor(H,Q){this.time=H,this.notification=Q}}},2198:(xe,ae,I)=>{I.d(ae,{h:()=>R});var d=I(3489);function R(J,U){return function(j){return j.lift(new le(J,U))}}class le{constructor(U,oe){this.predicate=U,this.thisArg=oe}call(U,oe){return oe.subscribe(new ie(U,this.predicate,this.thisArg))}}class ie extends d.L{constructor(U,oe,j){super(U),this.predicate=oe,this.thisArg=j,this.count=0}_next(U){let oe;try{oe=this.predicate.call(this.thisArg,U,this.count++)}catch(j){return void this.destination.error(j)}oe&&this.destination.next(U)}}},4850:(xe,ae,I)=>{I.d(ae,{U:()=>R});var d=I(3489);function R(J,U){return function(j){if("function"!=typeof J)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return j.lift(new le(J,U))}}class le{constructor(U,oe){this.project=U,this.thisArg=oe}call(U,oe){return oe.subscribe(new ie(U,this.project,this.thisArg))}}class ie extends d.L{constructor(U,oe,j){super(U),this.project=oe,this.count=0,this.thisArg=j||this}_next(U){let oe;try{oe=this.project.call(this.thisArg,U,this.count++)}catch(j){return void this.destination.error(j)}this.destination.next(oe)}}},9146:(xe,ae,I)=>{I.d(ae,{J:()=>le});var d=I(1709),R=I(5379);function le(ie=Number.POSITIVE_INFINITY){return(0,d.zg)(R.y,ie)}},1709:(xe,ae,I)=>{I.d(ae,{zg:()=>U});var d=I(9054),R=I(826),le=I(1869),ie=I(4850),J=I(5254);function U($,N,O=Number.POSITIVE_INFINITY){return"function"==typeof N?L=>L.pipe(U((W,H)=>(0,J.D)($(W,H)).pipe((0,ie.U)((Q,de)=>N(W,Q,H,de))),O)):("number"==typeof N&&(O=N),L=>L.lift(new oe($,O)))}class oe{constructor(N,O=Number.POSITIVE_INFINITY){this.project=N,this.concurrent=O}call(N,O){return O.subscribe(new j(N,this.project,this.concurrent))}}class j extends R.L{constructor(N,O,L=Number.POSITIVE_INFINITY){super(N),this.project=O,this.concurrent=L,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(N){this.active<this.concurrent?this._tryNext(N):this.buffer.push(N)}_tryNext(N){let O;const L=this.index++;try{O=this.project(N,L)}catch(W){return void this.destination.error(W)}this.active++,this._innerSub(O,N,L)}_innerSub(N,O,L){const W=new le.d(this,O,L),H=this.destination;H.add(W);const Q=(0,d.D)(this,N,void 0,void 0,W);Q!==W&&H.add(Q)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(N,O,L,W,H){this.destination.next(O)}notifyComplete(N){const O=this.buffer;this.remove(N),this.active--,O.length>0?this._next(O.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},2536:(xe,ae,I)=>{I.d(ae,{O:()=>R});var d=I(1762);function R(ie,J){return function(oe){let j;if(j="function"==typeof ie?ie:function(){return ie},"function"==typeof J)return oe.lift(new le(j,J));const $=Object.create(oe,d.N);return $.source=oe,$.subjectFactory=j,$}}class le{constructor(J,U){this.subjectFactory=J,this.selector=U}call(J,U){const{selector:oe}=this,j=this.subjectFactory(),$=oe(j).subscribe(J);return $.add(U.subscribe(j)),$}}},4327:(xe,ae,I)=>{I.d(ae,{x:()=>R});var d=I(3489);function R(){return function(U){return U.lift(new le(U))}}class le{constructor(U){this.connectable=U}call(U,oe){const{connectable:j}=this;j._refCount++;const $=new ie(U,j),N=oe.subscribe($);return $.closed||($.connection=j.connect()),N}}class ie extends d.L{constructor(U,oe){super(U),this.connectable=oe}_unsubscribe(){const{connectable:U}=this;if(!U)return void(this.connection=null);this.connectable=null;const oe=U._refCount;if(oe<=0)return void(this.connection=null);if(U._refCount=oe-1,oe>1)return void(this.connection=null);const{connection:j}=this,$=U._connection;this.connection=null,$&&(!j||$===j)&&$.unsubscribe()}}},8117:(xe,ae,I)=>{I.d(ae,{B:()=>J});var d=I(2536),R=I(4327),le=I(5529);function ie(){return new le.xQ}function J(){return U=>(0,R.x)()((0,d.O)(ie)(U))}},1059:(xe,ae,I)=>{I.d(ae,{O:()=>le});var d=I(1221),R=I(2866);function le(...ie){const J=ie[ie.length-1];return(0,R.K)(J)?(ie.pop(),U=>(0,d.z)(ie,U,J)):U=>(0,d.z)(ie,U)}},7545:(xe,ae,I)=>{I.d(ae,{w:()=>U});var d=I(826),R=I(1869),le=I(9054),ie=I(4850),J=I(5254);function U($,N){return"function"==typeof N?O=>O.pipe(U((L,W)=>(0,J.D)($(L,W)).pipe((0,ie.U)((H,Q)=>N(L,H,W,Q))))):O=>O.lift(new oe($))}class oe{constructor(N){this.project=N}call(N,O){return O.subscribe(new j(N,this.project))}}class j extends d.L{constructor(N,O){super(N),this.project=O,this.index=0}_next(N){let O;const L=this.index++;try{O=this.project(N,L)}catch(W){return void this.destination.error(W)}this._innerSub(O,N,L)}_innerSub(N,O,L){const W=this.innerSubscription;W&&W.unsubscribe();const H=new R.d(this,O,L),Q=this.destination;Q.add(H),this.innerSubscription=(0,le.D)(this,N,void 0,void 0,H),this.innerSubscription!==H&&Q.add(this.innerSubscription)}_complete(){const{innerSubscription:N}=this;(!N||N.closed)&&super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(N){this.destination.remove(N),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(N,O,L,W,H){this.destination.next(O)}}},2986:(xe,ae,I)=>{I.d(ae,{q:()=>ie});var d=I(3489),R=I(4231),le=I(8896);function ie(oe){return j=>0===oe?(0,le.c)():j.lift(new J(oe))}class J{constructor(j){if(this.total=j,this.total<0)throw new R.W}call(j,$){return $.subscribe(new U(j,this.total))}}class U extends d.L{constructor(j,$){super(j),this.total=$,this.count=0}_next(j){const $=this.total,N=++this.count;N<=$&&(this.destination.next(j),N===$&&(this.destination.complete(),this.unsubscribe()))}}},2994:(xe,ae,I)=>{I.d(ae,{b:()=>ie});var d=I(3489),R=I(7876),le=I(7043);function ie(oe,j,$){return function(O){return O.lift(new J(oe,j,$))}}class J{constructor(j,$,N){this.nextOrObserver=j,this.error=$,this.complete=N}call(j,$){return $.subscribe(new U(j,this.nextOrObserver,this.error,this.complete))}}class U extends d.L{constructor(j,$,N,O){super(j),this._tapNext=R.Z,this._tapError=R.Z,this._tapComplete=R.Z,this._tapError=N||R.Z,this._tapComplete=O||R.Z,(0,le.m)($)?(this._context=this,this._tapNext=$):$&&(this._context=$,this._tapNext=$.next||R.Z,this._tapError=$.error||R.Z,this._tapComplete=$.complete||R.Z)}_next(j){try{this._tapNext.call(this._context,j)}catch($){return void this.destination.error($)}this.destination.next(j)}_error(j){try{this._tapError.call(this._context,j)}catch($){return void this.destination.error($)}this.destination.error(j)}_complete(){try{this._tapComplete.call(this._context)}catch(j){return void this.destination.error(j)}return this.destination.complete()}}},6454:(xe,ae,I)=>{I.d(ae,{r:()=>le});var d=I(6498),R=I(2654);function le(ie,J){return new d.y(U=>{const oe=new R.w;let j=0;return oe.add(J.schedule(function(){j!==ie.length?(U.next(ie[j++]),U.closed||oe.add(this.schedule())):U.complete()})),oe})}},6014:(xe,ae,I)=>{I.d(ae,{P:()=>U});var d=I(2654);class R extends d.w{constructor(j,$){super()}schedule(j,$=0){return this}}let ie=(()=>{class oe{constructor($,N=oe.now){this.SchedulerAction=$,this.now=N}schedule($,N=0,O){return new this.SchedulerAction(this,$).schedule(O,N)}}return oe.now=()=>Date.now(),oe})();class J extends ie{constructor(j,$=ie.now){super(j,()=>J.delegate&&J.delegate!==this?J.delegate.now():$()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(j,$=0,N){return J.delegate&&J.delegate!==this?J.delegate.schedule(j,$,N):super.schedule(j,$,N)}flush(j){const{actions:$}=this;if(this.active)return void $.push(j);let N;this.active=!0;do{if(N=j.execute(j.state,j.delay))break}while(j=$.shift());if(this.active=!1,N){for(;j=$.shift();)j.unsubscribe();throw N}}}const U=new J(class le extends R{constructor(j,$){super(j,$),this.scheduler=j,this.work=$,this.pending=!1}schedule(j,$=0){if(this.closed)return this;this.state=j;const N=this.id,O=this.scheduler;return null!=N&&(this.id=this.recycleAsyncId(O,N,$)),this.pending=!0,this.delay=$,this.id=this.id||this.requestAsyncId(O,this.id,$),this}requestAsyncId(j,$,N=0){return setInterval(j.flush.bind(j,this),N)}recycleAsyncId(j,$,N=0){if(null!==N&&this.delay===N&&!1===this.pending)return $;clearInterval($)}execute(j,$){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const N=this._execute(j,$);if(N)return N;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(j,$){let O,N=!1;try{this.work(j)}catch(L){N=!0,O=!!L&&L||new Error(L)}if(N)return this.unsubscribe(),O}_unsubscribe(){const j=this.id,$=this.scheduler,N=$.actions,O=N.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==O&&N.splice(O,1),null!=j&&(this.id=this.recycleAsyncId($,j,null)),this.delay=null}})},5430:(xe,ae,I)=>{I.d(ae,{hZ:()=>R});const R=function d(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},3821:(xe,ae,I)=>{I.d(ae,{L:()=>d});const d="function"==typeof Symbol&&Symbol.observable||"@@observable"},7668:(xe,ae,I)=>{I.d(ae,{b:()=>d});const d="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},4231:(xe,ae,I)=>{I.d(ae,{W:()=>R});const R=(()=>{function le(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return le.prototype=Object.create(Error.prototype),le})()},5279:(xe,ae,I)=>{I.d(ae,{N:()=>R});const R=(()=>{function le(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return le.prototype=Object.create(Error.prototype),le})()},2782:(xe,ae,I)=>{function d(R){setTimeout(()=>{throw R},0)}I.d(ae,{z:()=>d})},5379:(xe,ae,I)=>{function d(R){return R}I.d(ae,{y:()=>d})},6688:(xe,ae,I)=>{I.d(ae,{k:()=>d});const d=Array.isArray||(R=>R&&"number"==typeof R.length)},8515:(xe,ae,I)=>{I.d(ae,{z:()=>d});const d=R=>R&&"number"==typeof R.length&&"function"!=typeof R},7043:(xe,ae,I)=>{function d(R){return"function"==typeof R}I.d(ae,{m:()=>d})},7830:(xe,ae,I)=>{function d(R){return null!==R&&"object"==typeof R}I.d(ae,{K:()=>d})},8955:(xe,ae,I)=>{function d(R){return!!R&&"function"!=typeof R.subscribe&&"function"==typeof R.then}I.d(ae,{t:()=>d})},2866:(xe,ae,I)=>{function d(R){return R&&"function"==typeof R.schedule}I.d(ae,{K:()=>d})},7876:(xe,ae,I)=>{function d(){}I.d(ae,{Z:()=>d})},4843:(xe,ae,I)=>{I.d(ae,{U:()=>le,z:()=>R});var d=I(7876);function R(...ie){return le(ie)}function le(ie){return ie?1===ie.length?ie[0]:function(U){return ie.reduce((oe,j)=>j(oe),U)}:d.Z}},9249:(xe,ae,I)=>{I.d(ae,{s:()=>O});var d=I(3650),R=I(2782),ie=I(5430),U=I(3821),j=I(8515),$=I(8955),N=I(7830);const O=L=>{if(L&&"function"==typeof L[U.L])return(L=>W=>{const H=L[U.L]();if("function"!=typeof H.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return H.subscribe(W)})(L);if((0,j.z)(L))return(0,d.V)(L);if((0,$.t)(L))return(L=>W=>(L.then(H=>{W.closed||(W.next(H),W.complete())},H=>W.error(H)).then(null,R.z),W))(L);if(L&&"function"==typeof L[ie.hZ])return(L=>W=>{const H=L[ie.hZ]();for(;;){const Q=H.next();if(Q.done){W.complete();break}if(W.next(Q.value),W.closed)break}return"function"==typeof H.return&&W.add(()=>{H.return&&H.return()}),W})(L);{const H=`You provided ${(0,N.K)(L)?"an invalid object":`'${L}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(H)}}},3650:(xe,ae,I)=>{I.d(ae,{V:()=>d});const d=R=>le=>{for(let ie=0,J=R.length;ie<J&&!le.closed;ie++)le.next(R[ie]);le.complete()}},9054:(xe,ae,I)=>{I.d(ae,{D:()=>ie});var d=I(1869),R=I(9249),le=I(6498);function ie(J,U,oe,j,$=new d.d(J,oe,j)){if(!$.closed)return U instanceof le.y?U.subscribe($):(0,R.s)(U)($)}},6895:(xe,ae,I)=>{I.d(ae,{Do:()=>ct,EM:()=>vr,HT:()=>J,JF:()=>Kt,JJ:()=>Kr,K0:()=>oe,Mx:()=>Gr,NF:()=>ho,O5:()=>Yt,Ov:()=>xo,S$:()=>re,V_:()=>N,Ye:()=>Dt,b0:()=>ze,bD:()=>Gt,ez:()=>fo,q:()=>le,sg:()=>nn,tP:()=>ao,uU:()=>Gn,w_:()=>U});var d=I(4650);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let R=null;function le(){return R}function J(y){R||(R=y)}class U{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const oe=new d.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let j=(()=>{class y{historyGo(v){throw new Error("Not implemented")}}return y.\u0275fac=function(v){return new(v||y)},y.\u0275prov=d.Yz7({token:y,factory:function(){return function $(){return(0,d.LFG)(O)}()},providedIn:"platform"}),y})();const N=new d.OlP("Location Initialized");let O=(()=>{class y extends j{constructor(v){super(),this._doc=v,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return le().getBaseHref(this._doc)}onPopState(v){const M=le().getGlobalEventTarget(this._doc,"window");return M.addEventListener("popstate",v,!1),()=>M.removeEventListener("popstate",v)}onHashChange(v){const M=le().getGlobalEventTarget(this._doc,"window");return M.addEventListener("hashchange",v,!1),()=>M.removeEventListener("hashchange",v)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(v){this.location.pathname=v}pushState(v,M,B){L()?this._history.pushState(v,M,B):this.location.hash=B}replaceState(v,M,B){L()?this._history.replaceState(v,M,B):this.location.hash=B}forward(){this._history.forward()}back(){this._history.back()}historyGo(v=0){this._history.go(v)}getState(){return this._history.state}}return y.\u0275fac=function(v){return new(v||y)(d.LFG(oe))},y.\u0275prov=d.Yz7({token:y,factory:function(){return function W(){return new O((0,d.LFG)(oe))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()},providedIn:"platform"}),y})();function L(){return!!window.history.pushState}function H(y,w){if(0==y.length)return w;if(0==w.length)return y;let v=0;return y.endsWith("/")&&v++,w.startsWith("/")&&v++,2==v?y+w.substring(1):1==v?y+w:y+"/"+w}function Q(y){const w=y.match(/#|\?|$/),v=w&&w.index||y.length;return y.slice(0,v-("/"===y[v-1]?1:0))+y.slice(v)}function de(y){return y&&"?"!==y[0]?"?"+y:y}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let re=(()=>{class y{historyGo(v){throw new Error("Not implemented")}}return y.\u0275fac=function(v){return new(v||y)},y.\u0275prov=d.Yz7({token:y,factory:function(){return(0,d.f3M)(ze)},providedIn:"root"}),y})();const ve=new d.OlP("appBaseHref");let ze=(()=>{class y extends re{constructor(v,M){super(),this._platformLocation=v,this._removeListenerFns=[],this._baseHref=M??this._platformLocation.getBaseHrefFromDOM()??(0,d.f3M)(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(v){this._removeListenerFns.push(this._platformLocation.onPopState(v),this._platformLocation.onHashChange(v))}getBaseHref(){return this._baseHref}prepareExternalUrl(v){return H(this._baseHref,v)}path(v=!1){const M=this._platformLocation.pathname+de(this._platformLocation.search),B=this._platformLocation.hash;return B&&v?`${M}${B}`:M}pushState(v,M,B,te){const q=this.prepareExternalUrl(B+de(te));this._platformLocation.pushState(v,M,q)}replaceState(v,M,B,te){const q=this.prepareExternalUrl(B+de(te));this._platformLocation.replaceState(v,M,q)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(v=0){this._platformLocation.historyGo?.(v)}}return y.\u0275fac=function(v){return new(v||y)(d.LFG(j),d.LFG(ve,8))},y.\u0275prov=d.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})(),ct=(()=>{class y extends re{constructor(v,M){super(),this._platformLocation=v,this._baseHref="",this._removeListenerFns=[],null!=M&&(this._baseHref=M)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(v){this._removeListenerFns.push(this._platformLocation.onPopState(v),this._platformLocation.onHashChange(v))}getBaseHref(){return this._baseHref}path(v=!1){let M=this._platformLocation.hash;return null==M&&(M="#"),M.length>0?M.substring(1):M}prepareExternalUrl(v){const M=H(this._baseHref,v);return M.length>0?"#"+M:M}pushState(v,M,B,te){let q=this.prepareExternalUrl(B+de(te));0==q.length&&(q=this._platformLocation.pathname),this._platformLocation.pushState(v,M,q)}replaceState(v,M,B,te){let q=this.prepareExternalUrl(B+de(te));0==q.length&&(q=this._platformLocation.pathname),this._platformLocation.replaceState(v,M,q)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(v=0){this._platformLocation.historyGo?.(v)}}return y.\u0275fac=function(v){return new(v||y)(d.LFG(j),d.LFG(ve,8))},y.\u0275prov=d.Yz7({token:y,factory:y.\u0275fac}),y})(),Dt=(()=>{class y{constructor(v){this._subject=new d.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=v;const M=this._locationStrategy.getBaseHref();this._baseHref=Q(Pt(M)),this._locationStrategy.onPopState(B=>{this._subject.emit({url:this.path(!0),pop:!0,state:B.state,type:B.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(v=!1){return this.normalize(this._locationStrategy.path(v))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(v,M=""){return this.path()==this.normalize(v+de(M))}normalize(v){return y.stripTrailingSlash(function We(y,w){return y&&w.startsWith(y)?w.substring(y.length):w}(this._baseHref,Pt(v)))}prepareExternalUrl(v){return v&&"/"!==v[0]&&(v="/"+v),this._locationStrategy.prepareExternalUrl(v)}go(v,M="",B=null){this._locationStrategy.pushState(B,"",v,M),this._notifyUrlChangeListeners(this.prepareExternalUrl(v+de(M)),B)}replaceState(v,M="",B=null){this._locationStrategy.replaceState(B,"",v,M),this._notifyUrlChangeListeners(this.prepareExternalUrl(v+de(M)),B)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(v=0){this._locationStrategy.historyGo?.(v)}onUrlChange(v){return this._urlChangeListeners.push(v),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(M=>{this._notifyUrlChangeListeners(M.url,M.state)})),()=>{const M=this._urlChangeListeners.indexOf(v);this._urlChangeListeners.splice(M,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(v="",M){this._urlChangeListeners.forEach(B=>B(v,M))}subscribe(v,M,B){return this._subject.subscribe({next:v,error:M,complete:B})}}return y.normalizeQueryParams=de,y.joinWithSlash=H,y.stripTrailingSlash=Q,y.\u0275fac=function(v){return new(v||y)(d.LFG(re))},y.\u0275prov=d.Yz7({token:y,factory:function(){return function Je(){return new Dt((0,d.LFG)(re))}()},providedIn:"root"}),y})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pt(y){return y.replace(/\/index.html$/,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var ut=(()=>((ut=ut||{})[ut.Decimal=0]="Decimal",ut[ut.Percent=1]="Percent",ut[ut.Currency=2]="Currency",ut[ut.Scientific=3]="Scientific",ut))(),Qe=(()=>((Qe=Qe||{})[Qe.Format=0]="Format",Qe[Qe.Standalone=1]="Standalone",Qe))(),ke=(()=>((ke=ke||{})[ke.Narrow=0]="Narrow",ke[ke.Abbreviated=1]="Abbreviated",ke[ke.Wide=2]="Wide",ke[ke.Short=3]="Short",ke))(),tt=(()=>((tt=tt||{})[tt.Short=0]="Short",tt[tt.Medium=1]="Medium",tt[tt.Long=2]="Long",tt[tt.Full=3]="Full",tt))(),Ee=(()=>((Ee=Ee||{})[Ee.Decimal=0]="Decimal",Ee[Ee.Group=1]="Group",Ee[Ee.List=2]="List",Ee[Ee.PercentSign=3]="PercentSign",Ee[Ee.PlusSign=4]="PlusSign",Ee[Ee.MinusSign=5]="MinusSign",Ee[Ee.Exponential=6]="Exponential",Ee[Ee.SuperscriptingExponent=7]="SuperscriptingExponent",Ee[Ee.PerMille=8]="PerMille",Ee[Ee.Infinity=9]="Infinity",Ee[Ee.NaN=10]="NaN",Ee[Ee.TimeSeparator=11]="TimeSeparator",Ee[Ee.CurrencyDecimal=12]="CurrencyDecimal",Ee[Ee.CurrencyGroup=13]="CurrencyGroup",Ee))();function It(y,w){return dt((0,d.cg1)(y)[d.wAp.DateFormat],w)}function it(y,w){return dt((0,d.cg1)(y)[d.wAp.TimeFormat],w)}function Xt(y,w){return dt((0,d.cg1)(y)[d.wAp.DateTimeFormat],w)}function bt(y,w){const v=(0,d.cg1)(y),M=v[d.wAp.NumberSymbols][w];if(typeof M>"u"){if(w===Ee.CurrencyDecimal)return v[d.wAp.NumberSymbols][Ee.Decimal];if(w===Ee.CurrencyGroup)return v[d.wAp.NumberSymbols][Ee.Group]}return M}function pn(y){if(!y[d.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${y[d.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function dt(y,w){for(let v=w;v>-1;v--)if(typeof y[v]<"u")return y[v];throw new Error("Locale data API: locale data undefined")}function Ze(y){const[w,v]=y.split(":");return{hours:+w,minutes:+v}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ht=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Xe={},se=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var F=(()=>((F=F||{})[F.Short=0]="Short",F[F.ShortGMT=1]="ShortGMT",F[F.Long=2]="Long",F[F.Extended=3]="Extended",F))(),x=(()=>((x=x||{})[x.FullYear=0]="FullYear",x[x.Month=1]="Month",x[x.Date=2]="Date",x[x.Hours=3]="Hours",x[x.Minutes=4]="Minutes",x[x.Seconds=5]="Seconds",x[x.FractionalSeconds=6]="FractionalSeconds",x[x.Day=7]="Day",x))(),K=(()=>((K=K||{})[K.DayPeriods=0]="DayPeriods",K[K.Days=1]="Days",K[K.Months=2]="Months",K[K.Eras=3]="Eras",K))();function ee(y,w,v,M){let B=function Nt(y){if(Oe(y))return y;if("number"==typeof y&&!isNaN(y))return new Date(y);if("string"==typeof y){if(y=y.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(y)){const[B,te=1,q=1]=y.split("-").map(Ie=>+Ie);return Le(B,te-1,q)}const v=parseFloat(y);if(!isNaN(y-v))return new Date(v);let M;if(M=y.match(Ht))return function St(y){const w=new Date(0);let v=0,M=0;const B=y[8]?w.setUTCFullYear:w.setFullYear,te=y[8]?w.setUTCHours:w.setHours;y[9]&&(v=Number(y[9]+y[10]),M=Number(y[9]+y[11])),B.call(w,Number(y[1]),Number(y[2])-1,Number(y[3]));const q=Number(y[4]||0)-v,Ie=Number(y[5]||0)-M,mt=Number(y[6]||0),ft=Math.floor(1e3*parseFloat("0."+(y[7]||0)));return te.call(w,q,Ie,mt,ft),w}(M)}const w=new Date(y);if(!Oe(w))throw new Error(`Unable to convert "${y}" into a date`);return w}(y);w=Ve(v,w)||w;let Ie,q=[];for(;w;){if(Ie=se.exec(w),!Ie){q.push(w);break}{q=q.concat(Ie.slice(1));const yt=q.pop();if(!yt)break;w=yt}}let mt=B.getTimezoneOffset();M&&(mt=Jn(M,mt),B=function Rt(y,w,v){const M=v?-1:1,B=y.getTimezoneOffset();return function rt(y,w){return(y=new Date(y.getTime())).setMinutes(y.getMinutes()+w),y}(y,M*(Jn(w,B)-B))}(B,M,!0));let ft="";return q.forEach(yt=>{const qe=function dr(y){if(kn[y])return kn[y];let w;switch(y){case"G":case"GG":case"GGG":w=Pe(K.Eras,ke.Abbreviated);break;case"GGGG":w=Pe(K.Eras,ke.Wide);break;case"GGGGG":w=Pe(K.Eras,ke.Narrow);break;case"y":w=nt(x.FullYear,1,0,!1,!0);break;case"yy":w=nt(x.FullYear,2,0,!0,!0);break;case"yyy":w=nt(x.FullYear,3,0,!1,!0);break;case"yyyy":w=nt(x.FullYear,4,0,!1,!0);break;case"Y":w=cn(1);break;case"YY":w=cn(2,!0);break;case"YYY":w=cn(3);break;case"YYYY":w=cn(4);break;case"M":case"L":w=nt(x.Month,1,1);break;case"MM":case"LL":w=nt(x.Month,2,1);break;case"MMM":w=Pe(K.Months,ke.Abbreviated);break;case"MMMM":w=Pe(K.Months,ke.Wide);break;case"MMMMM":w=Pe(K.Months,ke.Narrow);break;case"LLL":w=Pe(K.Months,ke.Abbreviated,Qe.Standalone);break;case"LLLL":w=Pe(K.Months,ke.Wide,Qe.Standalone);break;case"LLLLL":w=Pe(K.Months,ke.Narrow,Qe.Standalone);break;case"w":w=tn(1);break;case"ww":w=tn(2);break;case"W":w=tn(1,!0);break;case"d":w=nt(x.Date,1);break;case"dd":w=nt(x.Date,2);break;case"c":case"cc":w=nt(x.Day,1);break;case"ccc":w=Pe(K.Days,ke.Abbreviated,Qe.Standalone);break;case"cccc":w=Pe(K.Days,ke.Wide,Qe.Standalone);break;case"ccccc":w=Pe(K.Days,ke.Narrow,Qe.Standalone);break;case"cccccc":w=Pe(K.Days,ke.Short,Qe.Standalone);break;case"E":case"EE":case"EEE":w=Pe(K.Days,ke.Abbreviated);break;case"EEEE":w=Pe(K.Days,ke.Wide);break;case"EEEEE":w=Pe(K.Days,ke.Narrow);break;case"EEEEEE":w=Pe(K.Days,ke.Short);break;case"a":case"aa":case"aaa":w=Pe(K.DayPeriods,ke.Abbreviated);break;case"aaaa":w=Pe(K.DayPeriods,ke.Wide);break;case"aaaaa":w=Pe(K.DayPeriods,ke.Narrow);break;case"b":case"bb":case"bbb":w=Pe(K.DayPeriods,ke.Abbreviated,Qe.Standalone,!0);break;case"bbbb":w=Pe(K.DayPeriods,ke.Wide,Qe.Standalone,!0);break;case"bbbbb":w=Pe(K.DayPeriods,ke.Narrow,Qe.Standalone,!0);break;case"B":case"BB":case"BBB":w=Pe(K.DayPeriods,ke.Abbreviated,Qe.Format,!0);break;case"BBBB":w=Pe(K.DayPeriods,ke.Wide,Qe.Format,!0);break;case"BBBBB":w=Pe(K.DayPeriods,ke.Narrow,Qe.Format,!0);break;case"h":w=nt(x.Hours,1,-12);break;case"hh":w=nt(x.Hours,2,-12);break;case"H":w=nt(x.Hours,1);break;case"HH":w=nt(x.Hours,2);break;case"m":w=nt(x.Minutes,1);break;case"mm":w=nt(x.Minutes,2);break;case"s":w=nt(x.Seconds,1);break;case"ss":w=nt(x.Seconds,2);break;case"S":w=nt(x.FractionalSeconds,1);break;case"SS":w=nt(x.FractionalSeconds,2);break;case"SSS":w=nt(x.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":w=Ue(F.Short);break;case"ZZZZZ":w=Ue(F.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":w=Ue(F.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":w=Ue(F.Long);break;default:return null}return kn[y]=w,w}(yt);ft+=qe?qe(B,v,mt):"''"===yt?"'":yt.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),ft}function Le(y,w,v){const M=new Date(0);return M.setFullYear(y,w,v),M.setHours(0,0,0),M}function Ve(y,w){const v=function Fn(y){return(0,d.cg1)(y)[d.wAp.LocaleId]}(y);if(Xe[v]=Xe[v]||{},Xe[v][w])return Xe[v][w];let M="";switch(w){case"shortDate":M=It(y,tt.Short);break;case"mediumDate":M=It(y,tt.Medium);break;case"longDate":M=It(y,tt.Long);break;case"fullDate":M=It(y,tt.Full);break;case"shortTime":M=it(y,tt.Short);break;case"mediumTime":M=it(y,tt.Medium);break;case"longTime":M=it(y,tt.Long);break;case"fullTime":M=it(y,tt.Full);break;case"short":const B=Ve(y,"shortTime"),te=Ve(y,"shortDate");M=be(Xt(y,tt.Short),[B,te]);break;case"medium":const q=Ve(y,"mediumTime"),Ie=Ve(y,"mediumDate");M=be(Xt(y,tt.Medium),[q,Ie]);break;case"long":const mt=Ve(y,"longTime"),ft=Ve(y,"longDate");M=be(Xt(y,tt.Long),[mt,ft]);break;case"full":const yt=Ve(y,"fullTime"),qe=Ve(y,"fullDate");M=be(Xt(y,tt.Full),[yt,qe])}return M&&(Xe[v][w]=M),M}function be(y,w){return w&&(y=y.replace(/\{([^}]+)}/g,function(v,M){return null!=w&&M in w?w[M]:v})),y}function Ne(y,w,v="-",M,B){let te="";(y<0||B&&y<=0)&&(B?y=1-y:(y=-y,te=v));let q=String(y);for(;q.length<w;)q="0"+q;return M&&(q=q.slice(q.length-w)),te+q}function nt(y,w,v=0,M=!1,B=!1){return function(te,q){let Ie=function en(y,w){switch(y){case x.FullYear:return w.getFullYear();case x.Month:return w.getMonth();case x.Date:return w.getDate();case x.Hours:return w.getHours();case x.Minutes:return w.getMinutes();case x.Seconds:return w.getSeconds();case x.FractionalSeconds:return w.getMilliseconds();case x.Day:return w.getDay();default:throw new Error(`Unknown DateType value "${y}".`)}}(y,te);if((v>0||Ie>-v)&&(Ie+=v),y===x.Hours)0===Ie&&-12===v&&(Ie=12);else if(y===x.FractionalSeconds)return function at(y,w){return Ne(y,3).substring(0,w)}(Ie,w);const mt=bt(q,Ee.MinusSign);return Ne(Ie,w,mt,M,B)}}function Pe(y,w,v=Qe.Format,M=!1){return function(B,te){return function lt(y,w,v,M,B,te){switch(v){case K.Months:return function ye(y,w,v){const M=(0,d.cg1)(y),te=dt([M[d.wAp.MonthsFormat],M[d.wAp.MonthsStandalone]],w);return dt(te,v)}(w,B,M)[y.getMonth()];case K.Days:return function Ye(y,w,v){const M=(0,d.cg1)(y),te=dt([M[d.wAp.DaysFormat],M[d.wAp.DaysStandalone]],w);return dt(te,v)}(w,B,M)[y.getDay()];case K.DayPeriods:const q=y.getHours(),Ie=y.getMinutes();if(te){const ft=function Vn(y){const w=(0,d.cg1)(y);return pn(w),(w[d.wAp.ExtraData][2]||[]).map(M=>"string"==typeof M?Ze(M):[Ze(M[0]),Ze(M[1])])}(w),yt=function bn(y,w,v){const M=(0,d.cg1)(y);pn(M);const te=dt([M[d.wAp.ExtraData][0],M[d.wAp.ExtraData][1]],w)||[];return dt(te,v)||[]}(w,B,M),qe=ft.findIndex(Lt=>{if(Array.isArray(Lt)){const[vt,rn]=Lt,ce=q>=vt.hours&&Ie>=vt.minutes,Ge=q<rn.hours||q===rn.hours&&Ie<rn.minutes;if(vt.hours<rn.hours){if(ce&&Ge)return!0}else if(ce||Ge)return!0}else if(Lt.hours===q&&Lt.minutes===Ie)return!0;return!1});if(-1!==qe)return yt[qe]}return function Re(y,w,v){const M=(0,d.cg1)(y),te=dt([M[d.wAp.DayPeriodsFormat],M[d.wAp.DayPeriodsStandalone]],w);return dt(te,v)}(w,B,M)[q<12?0:1];case K.Eras:return function we(y,w){return dt((0,d.cg1)(y)[d.wAp.Eras],w)}(w,M)[y.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${v}`)}}(B,te,y,w,v,M)}}function Ue(y){return function(w,v,M){const B=-1*M,te=bt(v,Ee.MinusSign),q=B>0?Math.floor(B/60):Math.ceil(B/60);switch(y){case F.Short:return(B>=0?"+":"")+Ne(q,2,te)+Ne(Math.abs(B%60),2,te);case F.ShortGMT:return"GMT"+(B>=0?"+":"")+Ne(q,1,te);case F.Long:return"GMT"+(B>=0?"+":"")+Ne(q,2,te)+":"+Ne(Math.abs(B%60),2,te);case F.Extended:return 0===M?"Z":(B>=0?"+":"")+Ne(q,2,te)+":"+Ne(Math.abs(B%60),2,te);default:throw new Error(`Unknown zone width "${y}"`)}}}function gn(y){return Le(y.getFullYear(),y.getMonth(),y.getDate()+(4-y.getDay()))}function tn(y,w=!1){return function(v,M){let B;if(w){const te=new Date(v.getFullYear(),v.getMonth(),1).getDay()-1,q=v.getDate();B=1+Math.floor((q+te)/7)}else{const te=gn(v),q=function Mt(y){const w=Le(y,0,1).getDay();return Le(y,0,1+(w<=4?4:11)-w)}(te.getFullYear()),Ie=te.getTime()-q.getTime();B=1+Math.round(Ie/6048e5)}return Ne(B,y,bt(M,Ee.MinusSign))}}function cn(y,w=!1){return function(v,M){return Ne(gn(v).getFullYear(),y,bt(M,Ee.MinusSign),w)}}const kn={};function Jn(y,w){y=y.replace(/:/g,"");const v=Date.parse("Jan 01, 1970 00:00:00 "+y)/6e4;return isNaN(v)?w:v}function Oe(y){return y instanceof Date&&!isNaN(y.valueOf())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const pe=/^(\d+)?\.((\d+)(-(\d+))?)?$/,G="0";function jn(y){const w=parseInt(y);if(isNaN(w))throw new Error("Invalid integer literal when parsing "+y);return w}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Gr(y,w){w=encodeURIComponent(w);for(const v of y.split(";")){const M=v.indexOf("="),[B,te]=-1==M?[v,""]:[v.slice(0,M),v.slice(M+1)];if(B.trim()===w)return decodeURIComponent(te)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class zr{constructor(w,v,M,B){this.$implicit=w,this.ngForOf=v,this.index=M,this.count=B}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let nn=(()=>{class y{constructor(v,M,B){this._viewContainer=v,this._template=M,this._differs=B,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(v){this._ngForOf=v,this._ngForOfDirty=!0}set ngForTrackBy(v){this._trackByFn=v}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(v){v&&(this._template=v)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const v=this._ngForOf;!this._differ&&v&&(this._differ=this._differs.find(v).create(this.ngForTrackBy))}if(this._differ){const v=this._differ.diff(this._ngForOf);v&&this._applyChanges(v)}}_applyChanges(v){const M=this._viewContainer;v.forEachOperation((B,te,q)=>{if(null==B.previousIndex)M.createEmbeddedView(this._template,new zr(B.item,this._ngForOf,-1,-1),null===q?void 0:q);else if(null==q)M.remove(null===te?void 0:te);else if(null!==te){const Ie=M.get(te);M.move(Ie,q),_t(Ie,B)}});for(let B=0,te=M.length;B<te;B++){const Ie=M.get(B).context;Ie.index=B,Ie.count=te,Ie.ngForOf=this._ngForOf}v.forEachIdentityChange(B=>{_t(M.get(B.currentIndex),B)})}static ngTemplateContextGuard(v,M){return!0}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.s_b),d.Y36(d.Rgc),d.Y36(d.ZZ4))},y.\u0275dir=d.lG2({type:y,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),y})();function _t(y,w){y.context.$implicit=w.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Yt=(()=>{class y{constructor(v,M){this._viewContainer=v,this._context=new fn,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=M}set ngIf(v){this._context.$implicit=this._context.ngIf=v,this._updateView()}set ngIfThen(v){hr("ngIfThen",v),this._thenTemplateRef=v,this._thenViewRef=null,this._updateView()}set ngIfElse(v){hr("ngIfElse",v),this._elseTemplateRef=v,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(v,M){return!0}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.s_b),d.Y36(d.Rgc))},y.\u0275dir=d.lG2({type:y,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),y})();class fn{constructor(){this.$implicit=null,this.ngIf=null}}function hr(y,w){if(w&&!w.createEmbeddedView)throw new Error(`${y} must be a TemplateRef, but received '${(0,d.AaK)(w)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ao=(()=>{class y{constructor(v){this._viewContainerRef=v,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(v){if(v.ngTemplateOutlet||v.ngTemplateOutletInjector){const M=this._viewContainerRef;if(this._viewRef&&M.remove(M.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:B,ngTemplateOutletContext:te,ngTemplateOutletInjector:q}=this;this._viewRef=M.createEmbeddedView(B,te,q?{injector:q}:void 0)}else this._viewRef=null}else this._viewRef&&v.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.s_b))},y.\u0275dir=d.lG2({type:y,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[d.TTD]}),y})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function yn(y,w){return new d.vHH(2100,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Sr{createSubscription(w,v){return w.subscribe({next:v,error:M=>{throw M}})}dispose(w){w.unsubscribe()}}class Ar{createSubscription(w,v){return w.then(v,M=>{throw M})}dispose(w){}}const ii=new Ar,Wr=new Sr;let xo=(()=>{class y{constructor(v){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=v}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(v){return this._obj?v!==this._obj?(this._dispose(),this.transform(v)):this._latestValue:(v&&this._subscribe(v),this._latestValue)}_subscribe(v){this._obj=v,this._strategy=this._selectStrategy(v),this._subscription=this._strategy.createSubscription(v,M=>this._updateLatestValue(v,M))}_selectStrategy(v){if((0,d.QGY)(v))return ii;if((0,d.F4k)(v))return Wr;throw yn()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(v,M){v===this._obj&&(this._latestValue=M,this._ref.markForCheck())}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.sBO,16))},y.\u0275pipe=d.Yjl({name:"async",type:y,pure:!1,standalone:!0}),y})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const er=new d.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let Gn=(()=>{class y{constructor(v,M){this.locale=v,this.defaultTimezone=M}transform(v,M="mediumDate",B,te){if(null==v||""===v||v!=v)return null;try{return ee(v,M,te||this.locale,B??this.defaultTimezone??void 0)}catch(q){throw yn()}}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.soG,16),d.Y36(er,24))},y.\u0275pipe=d.Yjl({name:"date",type:y,pure:!0,standalone:!0}),y})(),Kr=(()=>{class y{constructor(v){this._locale=v}transform(v,M,B){if(!function Tr(y){return!(null==y||""===y||y!=y)}(v))return null;B=B||this._locale;try{return function mn(y,w,v){return function $e(y,w,v,M,B,te,q=!1){let Ie="",mt=!1;if(isFinite(y)){let ft=function Ut(y){let M,B,te,q,Ie,w=Math.abs(y)+"",v=0;for((B=w.indexOf("."))>-1&&(w=w.replace(".","")),(te=w.search(/e/i))>0?(B<0&&(B=te),B+=+w.slice(te+1),w=w.substring(0,te)):B<0&&(B=w.length),te=0;w.charAt(te)===G;te++);if(te===(Ie=w.length))M=[0],B=1;else{for(Ie--;w.charAt(Ie)===G;)Ie--;for(B-=te,M=[],q=0;te<=Ie;te++,q++)M[q]=Number(w.charAt(te))}return B>22&&(M=M.splice(0,21),v=B-1,B=1),{digits:M,exponent:v,integerLen:B}}(y);q&&(ft=function Mn(y){if(0===y.digits[0])return y;const w=y.digits.length-y.integerLen;return y.exponent?y.exponent+=2:(0===w?y.digits.push(0,0):1===w&&y.digits.push(0),y.integerLen+=2),y}(ft));let yt=w.minInt,qe=w.minFrac,Lt=w.maxFrac;if(te){const ir=te.match(pe);if(null===ir)throw new Error(`${te} is not a valid digit info`);const Bt=ir[1],po=ir[3],xr=ir[5];null!=Bt&&(yt=jn(Bt)),null!=po&&(qe=jn(po)),null!=xr?Lt=jn(xr):null!=po&&qe>Lt&&(Lt=qe)}!function Xn(y,w,v){if(w>v)throw new Error(`The minimum number of digits after fraction (${w}) is higher than the maximum (${v}).`);let M=y.digits,B=M.length-y.integerLen;const te=Math.min(Math.max(w,B),v);let q=te+y.integerLen,Ie=M[q];if(q>0){M.splice(Math.max(y.integerLen,q));for(let qe=q;qe<M.length;qe++)M[qe]=0}else{B=Math.max(0,B),y.integerLen=1,M.length=Math.max(1,q=te+1),M[0]=0;for(let qe=1;qe<q;qe++)M[qe]=0}if(Ie>=5)if(q-1<0){for(let qe=0;qe>q;qe--)M.unshift(0),y.integerLen++;M.unshift(1),y.integerLen++}else M[q-1]++;for(;B<Math.max(0,te);B++)M.push(0);let mt=0!==te;const ft=w+y.integerLen,yt=M.reduceRight(function(qe,Lt,vt,rn){return rn[vt]=(Lt+=qe)<10?Lt:Lt-10,mt&&(0===rn[vt]&&vt>=ft?rn.pop():mt=!1),Lt>=10?1:0},0);yt&&(M.unshift(yt),y.integerLen++)}(ft,qe,Lt);let vt=ft.digits,rn=ft.integerLen;const ce=ft.exponent;let Ge=[];for(mt=vt.every(ir=>!ir);rn<yt;rn++)vt.unshift(0);for(;rn<0;rn++)vt.unshift(0);rn>0?Ge=vt.splice(rn,vt.length):(Ge=vt,vt=[0]);const Dr=[];for(vt.length>=w.lgSize&&Dr.unshift(vt.splice(-w.lgSize,vt.length).join(""));vt.length>w.gSize;)Dr.unshift(vt.splice(-w.gSize,vt.length).join(""));vt.length&&Dr.unshift(vt.join("")),Ie=Dr.join(bt(v,M)),Ge.length&&(Ie+=bt(v,B)+Ge.join("")),ce&&(Ie+=bt(v,Ee.Exponential)+"+"+ce)}else Ie=bt(v,Ee.Infinity);return Ie=y<0&&!mt?w.negPre+Ie+w.negSuf:w.posPre+Ie+w.posSuf,Ie}(y,function Bn(y,w="-"){const v={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},M=y.split(";"),B=M[0],te=M[1],q=-1!==B.indexOf(".")?B.split("."):[B.substring(0,B.lastIndexOf(G)+1),B.substring(B.lastIndexOf(G)+1)],Ie=q[0],mt=q[1]||"";v.posPre=Ie.substring(0,Ie.indexOf("#"));for(let yt=0;yt<mt.length;yt++){const qe=mt.charAt(yt);qe===G?v.minFrac=v.maxFrac=yt+1:"#"===qe?v.maxFrac=yt+1:v.posSuf+=qe}const ft=Ie.split(",");if(v.gSize=ft[1]?ft[1].length:0,v.lgSize=ft[2]||ft[1]?(ft[2]||ft[1]).length:0,te){const yt=B.length-v.posPre.length-v.posSuf.length,qe=te.indexOf("#");v.negPre=te.substring(0,qe).replace(/'/g,""),v.negSuf=te.slice(qe+yt).replace(/'/g,"")}else v.negPre=w+v.posPre,v.negSuf=v.posSuf;return v}(function kt(y,w){return(0,d.cg1)(y)[d.wAp.NumberFormats][w]}(w,ut.Decimal),bt(w,Ee.MinusSign)),w,Ee.Group,Ee.Decimal,v)}(function mr(y){if("string"==typeof y&&!isNaN(Number(y)-parseFloat(y)))return Number(y);if("number"!=typeof y)throw new Error(`${y} is not a number`);return y}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(v),B,M)}catch(te){throw yn()}}}return y.\u0275fac=function(v){return new(v||y)(d.Y36(d.soG,16))},y.\u0275pipe=d.Yjl({name:"number",type:y,pure:!0,standalone:!0}),y})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let fo=(()=>{class y{}return y.\u0275fac=function(v){return new(v||y)},y.\u0275mod=d.oAB({type:y}),y.\u0275inj=d.cJS({}),y})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Gt="browser";function ho(y){return y===Gt}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let vr=(()=>{class y{}return y.\u0275prov=(0,d.Yz7)({token:y,providedIn:"root",factory:()=>new Tt((0,d.LFG)(oe),window)}),y})();class Tt{constructor(w,v){this.document=w,this.window=v,this.offset=()=>[0,0]}setOffset(w){this.offset=Array.isArray(w)?()=>w:w}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(w){this.supportsScrolling()&&this.window.scrollTo(w[0],w[1])}scrollToAnchor(w){if(!this.supportsScrolling())return;const v=function rr(y,w){const v=y.getElementById(w)||y.getElementsByName(w)[0];if(v)return v;if("function"==typeof y.createTreeWalker&&y.body&&(y.body.createShadowRoot||y.body.attachShadow)){const M=y.createTreeWalker(y.body,NodeFilter.SHOW_ELEMENT);let B=M.currentNode;for(;B;){const te=B.shadowRoot;if(te){const q=te.getElementById(w)||te.querySelector(`[name="${w}"]`);if(q)return q}B=M.nextNode()}}return null}(this.document,w);v&&(this.scrollToElement(v),v.focus())}setHistoryScrollRestoration(w){if(this.supportScrollRestoration()){const v=this.window.history;v&&v.scrollRestoration&&(v.scrollRestoration=w)}}scrollToElement(w){const v=w.getBoundingClientRect(),M=v.left+this.window.pageXOffset,B=v.top+this.window.pageYOffset,te=this.offset();this.window.scrollTo(M-te[0],B-te[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const w=Zr(this.window.history)||Zr(Object.getPrototypeOf(this.window.history));return!(!w||!w.writable&&!w.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Zr(y){return Object.getOwnPropertyDescriptor(y,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Kt{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},529:(xe,ae,I)=>{I.d(ae,{JF:()=>Wt,eN:()=>Fn});var d=I(6895),R=I(4650),le=I(1086),ie=I(6498),J=I(1406),U=I(2198),oe=I(4850);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class j{}class ${}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class N{constructor(F){this.normalizedNames=new Map,this.lazyUpdate=null,F?this.lazyInit="string"==typeof F?()=>{this.headers=new Map,F.split("\n").forEach(x=>{const K=x.indexOf(":");if(K>0){const ee=x.slice(0,K),Le=ee.toLowerCase(),Ve=x.slice(K+1).trim();this.maybeSetNormalizedName(ee,Le),this.headers.has(Le)?this.headers.get(Le).push(Ve):this.headers.set(Le,[Ve])}})}:()=>{this.headers=new Map,Object.keys(F).forEach(x=>{let K=F[x];const ee=x.toLowerCase();"string"==typeof K&&(K=[K]),K.length>0&&(this.headers.set(ee,K),this.maybeSetNormalizedName(x,ee))})}:this.headers=new Map}has(F){return this.init(),this.headers.has(F.toLowerCase())}get(F){this.init();const x=this.headers.get(F.toLowerCase());return x&&x.length>0?x[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(F){return this.init(),this.headers.get(F.toLowerCase())||null}append(F,x){return this.clone({name:F,value:x,op:"a"})}set(F,x){return this.clone({name:F,value:x,op:"s"})}delete(F,x){return this.clone({name:F,value:x,op:"d"})}maybeSetNormalizedName(F,x){this.normalizedNames.has(x)||this.normalizedNames.set(x,F)}init(){this.lazyInit&&(this.lazyInit instanceof N?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(F=>this.applyUpdate(F)),this.lazyUpdate=null))}copyFrom(F){F.init(),Array.from(F.headers.keys()).forEach(x=>{this.headers.set(x,F.headers.get(x)),this.normalizedNames.set(x,F.normalizedNames.get(x))})}clone(F){const x=new N;return x.lazyInit=this.lazyInit&&this.lazyInit instanceof N?this.lazyInit:this,x.lazyUpdate=(this.lazyUpdate||[]).concat([F]),x}applyUpdate(F){const x=F.name.toLowerCase();switch(F.op){case"a":case"s":let K=F.value;if("string"==typeof K&&(K=[K]),0===K.length)return;this.maybeSetNormalizedName(F.name,x);const ee=("a"===F.op?this.headers.get(x):void 0)||[];ee.push(...K),this.headers.set(x,ee);break;case"d":const Le=F.value;if(Le){let Ve=this.headers.get(x);if(!Ve)return;Ve=Ve.filter(be=>-1===Le.indexOf(be)),0===Ve.length?(this.headers.delete(x),this.normalizedNames.delete(x)):this.headers.set(x,Ve)}else this.headers.delete(x),this.normalizedNames.delete(x)}}forEach(F){this.init(),Array.from(this.normalizedNames.keys()).forEach(x=>F(this.normalizedNames.get(x),this.headers.get(x)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class L{encodeKey(F){return de(F)}encodeValue(F){return de(F)}decodeKey(F){return decodeURIComponent(F)}decodeValue(F){return decodeURIComponent(F)}}const H=/%(\d[a-f0-9])/gi,Q={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function de(se){return encodeURIComponent(se).replace(H,(F,x)=>Q[x]??F)}function re(se){return`${se}`}class ve{constructor(F={}){if(this.updates=null,this.cloneFrom=null,this.encoder=F.encoder||new L,F.fromString){if(F.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function W(se,F){const x=new Map;return se.length>0&&se.replace(/^\?/,"").split("&").forEach(ee=>{const Le=ee.indexOf("="),[Ve,be]=-1==Le?[F.decodeKey(ee),""]:[F.decodeKey(ee.slice(0,Le)),F.decodeValue(ee.slice(Le+1))],Ne=x.get(Ve)||[];Ne.push(be),x.set(Ve,Ne)}),x}(F.fromString,this.encoder)}else F.fromObject?(this.map=new Map,Object.keys(F.fromObject).forEach(x=>{const K=F.fromObject[x],ee=Array.isArray(K)?K.map(re):[re(K)];this.map.set(x,ee)})):this.map=null}has(F){return this.init(),this.map.has(F)}get(F){this.init();const x=this.map.get(F);return x?x[0]:null}getAll(F){return this.init(),this.map.get(F)||null}keys(){return this.init(),Array.from(this.map.keys())}append(F,x){return this.clone({param:F,value:x,op:"a"})}appendAll(F){const x=[];return Object.keys(F).forEach(K=>{const ee=F[K];Array.isArray(ee)?ee.forEach(Le=>{x.push({param:K,value:Le,op:"a"})}):x.push({param:K,value:ee,op:"a"})}),this.clone(x)}set(F,x){return this.clone({param:F,value:x,op:"s"})}delete(F,x){return this.clone({param:F,value:x,op:"d"})}toString(){return this.init(),this.keys().map(F=>{const x=this.encoder.encodeKey(F);return this.map.get(F).map(K=>x+"="+this.encoder.encodeValue(K)).join("&")}).filter(F=>""!==F).join("&")}clone(F){const x=new ve({encoder:this.encoder});return x.cloneFrom=this.cloneFrom||this,x.updates=(this.updates||[]).concat(F),x}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(F=>this.map.set(F,this.cloneFrom.map.get(F))),this.updates.forEach(F=>{switch(F.op){case"a":case"s":const x=("a"===F.op?this.map.get(F.param):void 0)||[];x.push(re(F.value)),this.map.set(F.param,x);break;case"d":if(void 0===F.value){this.map.delete(F.param);break}{let K=this.map.get(F.param)||[];const ee=K.indexOf(re(F.value));-1!==ee&&K.splice(ee,1),K.length>0?this.map.set(F.param,K):this.map.delete(F.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ct{constructor(){this.map=new Map}set(F,x){return this.map.set(F,x),this}get(F){return this.map.has(F)||this.map.set(F,F.defaultValue()),this.map.get(F)}delete(F){return this.map.delete(F),this}has(F){return this.map.has(F)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Je(se){return typeof ArrayBuffer<"u"&&se instanceof ArrayBuffer}function We(se){return typeof Blob<"u"&&se instanceof Blob}function Pt(se){return typeof FormData<"u"&&se instanceof FormData}class ut{constructor(F,x,K,ee){let Le;if(this.url=x,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=F.toUpperCase(),function Dt(se){switch(se){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||ee?(this.body=void 0!==K?K:null,Le=ee):Le=K,Le&&(this.reportProgress=!!Le.reportProgress,this.withCredentials=!!Le.withCredentials,Le.responseType&&(this.responseType=Le.responseType),Le.headers&&(this.headers=Le.headers),Le.context&&(this.context=Le.context),Le.params&&(this.params=Le.params)),this.headers||(this.headers=new N),this.context||(this.context=new ct),this.params){const Ve=this.params.toString();if(0===Ve.length)this.urlWithParams=x;else{const be=x.indexOf("?");this.urlWithParams=x+(-1===be?"?":be<x.length-1?"&":"")+Ve}}else this.params=new ve,this.urlWithParams=x}serializeBody(){return null===this.body?null:Je(this.body)||We(this.body)||Pt(this.body)||function Jt(se){return typeof URLSearchParams<"u"&&se instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof ve?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Pt(this.body)?null:We(this.body)?this.body.type||null:Je(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof ve?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(F={}){const x=F.method||this.method,K=F.url||this.url,ee=F.responseType||this.responseType,Le=void 0!==F.body?F.body:this.body,Ve=void 0!==F.withCredentials?F.withCredentials:this.withCredentials,be=void 0!==F.reportProgress?F.reportProgress:this.reportProgress;let Ne=F.headers||this.headers,at=F.params||this.params;const nt=F.context??this.context;return void 0!==F.setHeaders&&(Ne=Object.keys(F.setHeaders).reduce((en,Pe)=>en.set(Pe,F.setHeaders[Pe]),Ne)),F.setParams&&(at=Object.keys(F.setParams).reduce((en,Pe)=>en.set(Pe,F.setParams[Pe]),at)),new ut(x,K,Le,{params:at,headers:Ne,context:nt,reportProgress:be,responseType:ee,withCredentials:Ve})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Ce=(()=>((Ce=Ce||{})[Ce.Sent=0]="Sent",Ce[Ce.UploadProgress=1]="UploadProgress",Ce[Ce.ResponseHeader=2]="ResponseHeader",Ce[Ce.DownloadProgress=3]="DownloadProgress",Ce[Ce.Response=4]="Response",Ce[Ce.User=5]="User",Ce))();class Qe{constructor(F,x=200,K="OK"){this.headers=F.headers||new N,this.status=void 0!==F.status?F.status:x,this.statusText=F.statusText||K,this.url=F.url||null,this.ok=this.status>=200&&this.status<300}}class ke extends Qe{constructor(F={}){super(F),this.type=Ce.ResponseHeader}clone(F={}){return new ke({headers:F.headers||this.headers,status:void 0!==F.status?F.status:this.status,statusText:F.statusText||this.statusText,url:F.url||this.url||void 0})}}class tt extends Qe{constructor(F={}){super(F),this.type=Ce.Response,this.body=void 0!==F.body?F.body:null}clone(F={}){return new tt({body:void 0!==F.body?F.body:this.body,headers:F.headers||this.headers,status:void 0!==F.status?F.status:this.status,statusText:F.statusText||this.statusText,url:F.url||this.url||void 0})}}class Ee extends Qe{constructor(F){super(F,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${F.url||"(unknown url)"}`:`Http failure response for ${F.url||"(unknown url)"}: ${F.status} ${F.statusText}`,this.error=F.error||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hn(se,F){return{body:F,headers:se.headers,context:se.context,observe:se.observe,params:se.params,reportProgress:se.reportProgress,responseType:se.responseType,withCredentials:se.withCredentials}}let Fn=(()=>{class se{constructor(x){this.handler=x}request(x,K,ee={}){let Le;if(x instanceof ut)Le=x;else{let Ne,at;Ne=ee.headers instanceof N?ee.headers:new N(ee.headers),ee.params&&(at=ee.params instanceof ve?ee.params:new ve({fromObject:ee.params})),Le=new ut(x,K,void 0!==ee.body?ee.body:null,{headers:Ne,context:ee.context,params:at,reportProgress:ee.reportProgress,responseType:ee.responseType||"json",withCredentials:ee.withCredentials})}const Ve=(0,le.of)(Le).pipe((0,J.b)(Ne=>this.handler.handle(Ne)));if(x instanceof ut||"events"===ee.observe)return Ve;const be=Ve.pipe((0,U.h)(Ne=>Ne instanceof tt));switch(ee.observe||"body"){case"body":switch(Le.responseType){case"arraybuffer":return be.pipe((0,oe.U)(Ne=>{if(null!==Ne.body&&!(Ne.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return Ne.body}));case"blob":return be.pipe((0,oe.U)(Ne=>{if(null!==Ne.body&&!(Ne.body instanceof Blob))throw new Error("Response is not a Blob.");return Ne.body}));case"text":return be.pipe((0,oe.U)(Ne=>{if(null!==Ne.body&&"string"!=typeof Ne.body)throw new Error("Response is not a string.");return Ne.body}));default:return be.pipe((0,oe.U)(Ne=>Ne.body))}case"response":return be;default:throw new Error(`Unreachable: unhandled observe type ${ee.observe}}`)}}delete(x,K={}){return this.request("DELETE",x,K)}get(x,K={}){return this.request("GET",x,K)}head(x,K={}){return this.request("HEAD",x,K)}jsonp(x,K){return this.request("JSONP",x,{params:(new ve).append(K,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(x,K={}){return this.request("OPTIONS",x,K)}patch(x,K,ee={}){return this.request("PATCH",x,hn(ee,K))}post(x,K,ee={}){return this.request("POST",x,hn(ee,K))}put(x,K,ee={}){return this.request("PUT",x,hn(ee,K))}}return se.\u0275fac=function(x){return new(x||se)(R.LFG(j))},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Re{constructor(F,x){this.next=F,this.interceptor=x}handle(F){return this.interceptor.intercept(F,this.next)}}const Ye=new R.OlP("HTTP_INTERCEPTORS");let ye=(()=>{class se{intercept(x,K){return K.handle(x)}}return se.\u0275fac=function(x){return new(x||se)},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const $n=/^\)\]\}',?\n/;let Ln=(()=>{class se{constructor(x){this.xhrFactory=x}handle(x){if("JSONP"===x.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ie.y(K=>{const ee=this.xhrFactory.build();if(ee.open(x.method,x.urlWithParams),x.withCredentials&&(ee.withCredentials=!0),x.headers.forEach((lt,Ue)=>ee.setRequestHeader(lt,Ue.join(","))),x.headers.has("Accept")||ee.setRequestHeader("Accept","application/json, text/plain, */*"),!x.headers.has("Content-Type")){const lt=x.detectContentTypeHeader();null!==lt&&ee.setRequestHeader("Content-Type",lt)}if(x.responseType){const lt=x.responseType.toLowerCase();ee.responseType="json"!==lt?lt:"text"}const Le=x.serializeBody();let Ve=null;const be=()=>{if(null!==Ve)return Ve;const lt=ee.statusText||"OK",Ue=new N(ee.getAllResponseHeaders()),Ot=function Ir(se){return"responseURL"in se&&se.responseURL?se.responseURL:/^X-Request-URL:/m.test(se.getAllResponseHeaders())?se.getResponseHeader("X-Request-URL"):null}(ee)||x.url;return Ve=new ke({headers:Ue,status:ee.status,statusText:lt,url:Ot}),Ve},Ne=()=>{let{headers:lt,status:Ue,statusText:Ot,url:ln}=be(),Mt=null;204!==Ue&&(Mt=typeof ee.response>"u"?ee.responseText:ee.response),0===Ue&&(Ue=Mt?200:0);let gn=Ue>=200&&Ue<300;if("json"===x.responseType&&"string"==typeof Mt){const tn=Mt;Mt=Mt.replace($n,"");try{Mt=""!==Mt?JSON.parse(Mt):null}catch(cn){Mt=tn,gn&&(gn=!1,Mt={error:cn,text:Mt})}}gn?(K.next(new tt({body:Mt,headers:lt,status:Ue,statusText:Ot,url:ln||void 0})),K.complete()):K.error(new Ee({error:Mt,headers:lt,status:Ue,statusText:Ot,url:ln||void 0}))},at=lt=>{const{url:Ue}=be(),Ot=new Ee({error:lt,status:ee.status||0,statusText:ee.statusText||"Unknown Error",url:Ue||void 0});K.error(Ot)};let nt=!1;const en=lt=>{nt||(K.next(be()),nt=!0);let Ue={type:Ce.DownloadProgress,loaded:lt.loaded};lt.lengthComputable&&(Ue.total=lt.total),"text"===x.responseType&&!!ee.responseText&&(Ue.partialText=ee.responseText),K.next(Ue)},Pe=lt=>{let Ue={type:Ce.UploadProgress,loaded:lt.loaded};lt.lengthComputable&&(Ue.total=lt.total),K.next(Ue)};return ee.addEventListener("load",Ne),ee.addEventListener("error",at),ee.addEventListener("timeout",at),ee.addEventListener("abort",at),x.reportProgress&&(ee.addEventListener("progress",en),null!==Le&&ee.upload&&ee.upload.addEventListener("progress",Pe)),ee.send(Le),K.next({type:Ce.Sent}),()=>{ee.removeEventListener("error",at),ee.removeEventListener("abort",at),ee.removeEventListener("load",Ne),ee.removeEventListener("timeout",at),x.reportProgress&&(ee.removeEventListener("progress",en),null!==Le&&ee.upload&&ee.upload.removeEventListener("progress",Pe)),ee.readyState!==ee.DONE&&ee.abort()}})}}return se.\u0275fac=function(x){return new(x||se)(R.LFG(d.JF))},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const an=new R.OlP("XSRF_COOKIE_NAME"),pn=new R.OlP("XSRF_HEADER_NAME");class Vn{}let bn=(()=>{class se{constructor(x,K,ee){this.doc=x,this.platform=K,this.cookieName=ee,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const x=this.doc.cookie||"";return x!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,d.Mx)(x,this.cookieName),this.lastCookieString=x),this.lastToken}}return se.\u0275fac=function(x){return new(x||se)(R.LFG(d.K0),R.LFG(R.Lbi),R.LFG(an))},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})(),_e=(()=>{class se{constructor(x,K){this.tokenService=x,this.headerName=K}intercept(x,K){const ee=x.url.toLowerCase();if("GET"===x.method||"HEAD"===x.method||ee.startsWith("http://")||ee.startsWith("https://"))return K.handle(x);const Le=this.tokenService.getToken();return null!==Le&&!x.headers.has(this.headerName)&&(x=x.clone({headers:x.headers.set(this.headerName,Le)})),K.handle(x)}}return se.\u0275fac=function(x){return new(x||se)(R.LFG(Vn),R.LFG(pn))},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})(),dt=(()=>{class se{constructor(x,K){this.backend=x,this.injector=K,this.chain=null}handle(x){if(null===this.chain){const K=this.injector.get(Ye,[]);this.chain=K.reduceRight((ee,Le)=>new Re(ee,Le),this.backend)}return this.chain.handle(x)}}return se.\u0275fac=function(x){return new(x||se)(R.LFG($),R.LFG(R.zs3))},se.\u0275prov=R.Yz7({token:se,factory:se.\u0275fac}),se})(),cr=(()=>{class se{static disable(){return{ngModule:se,providers:[{provide:_e,useClass:ye}]}}static withOptions(x={}){return{ngModule:se,providers:[x.cookieName?{provide:an,useValue:x.cookieName}:[],x.headerName?{provide:pn,useValue:x.headerName}:[]]}}}return se.\u0275fac=function(x){return new(x||se)},se.\u0275mod=R.oAB({type:se}),se.\u0275inj=R.cJS({providers:[_e,{provide:Ye,useExisting:_e,multi:!0},{provide:Vn,useClass:bn},{provide:an,useValue:"XSRF-TOKEN"},{provide:pn,useValue:"X-XSRF-TOKEN"}]}),se})(),Wt=(()=>{class se{}return se.\u0275fac=function(x){return new(x||se)},se.\u0275mod=R.oAB({type:se}),se.\u0275inj=R.cJS({providers:[Fn,{provide:j,useClass:dt},Ln,{provide:$,useExisting:Ln}],imports:[cr.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4650:(xe,ae,I)=>{I.d(ae,{$8M:()=>Ei,$Z:()=>Af,AFp:()=>Hg,ALo:()=>sg,AaK:()=>j,AsE:()=>ec,BQk:()=>ja,CHM:()=>Dr,CRH:()=>yg,CZH:()=>Za,CqO:()=>Ch,D6c:()=>Ew,EJc:()=>VE,EpF:()=>Dh,F$t:()=>Sh,F4k:()=>_h,FYo:()=>Od,FiY:()=>vs,G48:()=>ow,Gf:()=>gg,GfV:()=>Rd,Gpc:()=>O,HOy:()=>nc,Hsn:()=>Ah,JOm:()=>Vr,KtG:()=>ir,LFG:()=>me,LSH:()=>Bu,Lbi:()=>PE,Lck:()=>xC,MAs:()=>yh,MMx:()=>dc,NdJ:()=>Ql,OlP:()=>Et,PXZ:()=>JE,Q6J:()=>Wl,QGY:()=>ql,QP$:()=>qi,Qsj:()=>gy,R0b:()=>Zn,RDi:()=>Sm,Rgc:()=>$s,SBq:()=>Is,Sil:()=>BE,Suo:()=>mg,TTD:()=>tr,TgZ:()=>Va,VKq:()=>Xp,W1O:()=>Cg,WLB:()=>eg,XFs:()=>_e,Xpm:()=>Ot,Xts:()=>ju,Y36:()=>Oi,YKP:()=>zp,YNc:()=>mh,Yjl:()=>Jn,Yz7:()=>it,ZZ4:()=>Lc,_Bn:()=>Gp,_UZ:()=>Kl,_Vd:()=>Ms,_c5:()=>_w,_uU:()=>Jh,aQg:()=>Vc,c2e:()=>FE,cJS:()=>bt,cg1:()=>rc,dDg:()=>KE,dqk:()=>K,eFA:()=>em,ekj:()=>Jl,eoX:()=>Zg,f3M:()=>vn,g9A:()=>$g,h0i:()=>Yi,hGG:()=>Cw,hij:()=>Ua,iGM:()=>pg,ifc:()=>x,ip1:()=>jg,kL8:()=>mp,lG2:()=>dr,lcZ:()=>ag,lnq:()=>tc,lqb:()=>qo,lri:()=>qg,n5z:()=>aa,oAB:()=>tn,oxw:()=>Ih,qLn:()=>Ss,qOj:()=>Ul,qZA:()=>ka,rWj:()=>Qg,sBO:()=>iw,sIi:()=>Ps,s_b:()=>Ka,soG:()=>Ja,tb:()=>Gg,tp0:()=>Ds,uIk:()=>zl,vHH:()=>Q,vpe:()=>Ur,wAp:()=>Be,xi3:()=>ug,xp6:()=>gf,ynx:()=>Ba,z2F:()=>Xa,zSh:()=>$u,zs3:()=>Zo});var d=I(5529),R=I(2654),le=I(6498),ie=I(6787),J=I(8117);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function U(e){for(let t in e)if(e[t]===U)return t;throw Error("Could not find renamed property on target object.")}function oe(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function j(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(j).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function $(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const N=U({__forward_ref__:U});function O(e){return e.__forward_ref__=O,e.toString=function(){return j(this())},e}function L(e){return W(e)?e():e}function W(e){return"function"==typeof e&&e.hasOwnProperty(N)&&e.__forward_ref__===O}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Q extends Error{constructor(t,n){super(function de(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function re(e){return"string"==typeof e?e:null==e?"":String(e)}function Je(e,t){throw new Q(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ye(e,t){null==e&&function we(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function it(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function bt(e){return{providers:e.providers||[],imports:e.imports||[]}}function kt(e){return lr(e,an)||lr(e,Vn)}function lr(e,t){return e.hasOwnProperty(t)?e[t]:null}function Ln(e){return e&&(e.hasOwnProperty(pn)||e.hasOwnProperty(bn))?e[pn]:null}const an=U({\u0275prov:U}),pn=U({\u0275inj:U}),Vn=U({ngInjectableDef:U}),bn=U({ngInjectorDef:U});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var _e=(()=>((_e=_e||{})[_e.Default=0]="Default",_e[_e.Host=1]="Host",_e[_e.Self=2]="Self",_e[_e.SkipSelf=4]="SkipSelf",_e[_e.Optional=8]="Optional",_e))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let dt;function pt(e){const t=dt;return dt=e,t}function cr(e,t,n){const r=kt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&_e.Optional?null:void 0!==t?t:void Je(j(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ht(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Xe=(()=>((Xe=Xe||{})[Xe.OnPush=0]="OnPush",Xe[Xe.Default=1]="Default",Xe))(),x=(()=>{return(e=x||(x={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",x;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const K=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Ve={},be=[],Ne=U({\u0275cmp:U}),at=U({\u0275dir:U}),nt=U({\u0275pipe:U}),en=U({\u0275mod:U}),Pe=U({\u0275fac:U}),lt=U({__NG_ELEMENT_ID__:U});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ue=0;function Ot(e){return Ht(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Xe.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||be,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||x.Emulated,id:"c"+Ue++,styles:e.styles||be,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=kn(e.inputs,r),o.outputs=kn(e.outputs),s&&s.forEach(c=>c(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(Mt).filter(gn):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Nt).filter(gn):null,o})}function Mt(e){return rt(e)||Rt(e)}function gn(e){return null!==e}function tn(e){return Ht(()=>({type:e.type,bootstrap:e.bootstrap||be,declarations:e.declarations||be,imports:e.imports||be,exports:e.exports||be,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function kn(e,t){if(null==e)return Ve;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const dr=Ot;function Jn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function rt(e){return e[Ne]||null}function Rt(e){return e[at]||null}function Nt(e){return e[nt]||null}function St(e,t){const n=e[en]||null;if(!n&&!0===t)throw new Error(`Type ${j(e)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Yt(e){return Array.isArray(e)&&"object"==typeof e[1]}function fn(e){return Array.isArray(e)&&!0===e[1]}function hr(e){return 0!=(8&e.flags)}function Sn(e){return 2==(2&e.flags)}function _n(e){return 1==(1&e.flags)}function $t(e){return null!==e.template}function To(e){return 0!=(256&e[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function An(e,t){return e.hasOwnProperty(Pe)?e[Pe]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ro{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function tr(){return Kr}function Kr(e){return e.type.prototype.ngOnChanges&&(e.setInput=lo),qr}function qr(){const e=mr(this),t=e?.current;if(t){const n=e.previous;if(n===Ve)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function lo(e,t,n,r){const o=mr(e)||function co(e,t){return e[Tr]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:Ve,current:null}),i=o.current||(o.current={}),s=o.previous,c=this.declaredInputs[n],f=s[c];i[c]=new Ro(f&&f.currentValue,t,s===Ve),e[r]=t}tr.ngInherit=!0;const Tr="__ngSimpleChanges__";function mr(e){return e[Tr]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function At(e){for(;Array.isArray(e);)e=e[0];return e}function vr(e,t){return At(t[e])}function Tt(e,t){return At(t[e.index])}function rr(e,t){return e.data[t]}function or(e,t){return e[t]}function Kt(e,t){const n=t[e];return Yt(n)?n:n[0]}function y(e){return 4==(4&e[2])}function w(e){return 64==(64&e[2])}function M(e,t){return null==t?null:e[t]}function B(e){e[18]=0}function te(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const q={lFrame:Ys(null),bindingsEnabled:!0};function Lt(){return q.bindingsEnabled}function ce(){return q.lFrame.lView}function Ge(){return q.lFrame.tView}function Dr(e){return q.lFrame.contextLView=e,e[8]}function ir(e){return q.lFrame.contextLView=null,e}function Bt(){let e=po();for(;null!==e&&64===e.type;)e=e.parent;return e}function po(){return q.lFrame.currentTNode}function On(e,t){const n=q.lFrame;n.currentTNode=e,n.isParent=t}function li(){return q.lFrame.isParent}function ci(){q.lFrame.isParent=!1}function b(){const e=q.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Z(){return q.lFrame.bindingIndex}function Ct(){return q.lFrame.bindingIndex++}function xt(e){const t=q.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function zn(e,t){const n=q.lFrame;n.bindingIndex=n.bindingRootIndex=e,Po(t)}function Po(e){q.lFrame.currentDirectiveIndex=e}function go(){return q.lFrame.currentQueryIndex}function Xr(e){q.lFrame.currentQueryIndex=e}function ou(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function zs(e,t,n){if(n&_e.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&_e.Host||(o=ou(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=q.lFrame=Ws();return r.currentTNode=t,r.lView=e,!0}function es(e){const t=Ws(),n=e[1];q.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Ws(){const e=q.lFrame,t=null===e?null:e.child;return null===t?Ys(e):t}function Ys(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Ks(){const e=q.lFrame;return q.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const iu=Ks;function ts(){const e=Ks();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function qt(){return q.lFrame.selectedIndex}function Rr(e){q.lFrame.selectedIndex=e}function jt(){const e=q.lFrame;return rr(e.tView,e.selectedIndex)}function fi(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:f,ngAfterViewChecked:_,ngOnDestroy:C}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),c&&((e.contentHooks||(e.contentHooks=[])).push(n,c),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,c)),f&&(e.viewHooks||(e.viewHooks=[])).push(-n,f),_&&((e.viewHooks||(e.viewHooks=[])).push(n,_),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,_)),null!=C&&(e.destroyHooks||(e.destroyHooks=[])).push(n,C)}}function Fo(e,t,n){rs(e,t,3,n)}function hi(e,t,n,r){(3&e[2])===n&&rs(e,t,n,r)}function Lo(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function rs(e,t,n,r){const i=r??-1,s=t.length-1;let c=0;for(let f=void 0!==r?65535&e[18]:0;f<s;f++)if("number"==typeof t[f+1]){if(c=t[f],null!=r&&c>=r)break}else t[f]<0&&(e[18]+=65536),(c<i||-1==i)&&(os(e,n,t,f),e[18]=(4294901760&e[18])+f+2),f++}function os(e,t,n,r){const o=n[r]<0,i=n[r+1],c=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(c)}finally{}}}else try{i.call(c)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Vo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Bo(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{const i=o,s=n[++r];as(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function yo(e){return 3===e||4===e||6===e}function as(e){return 64===e.charCodeAt(0)}function pi(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Zs(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Zs(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const c=e[i++];if("number"==typeof c){if(c===t){s=-1;break}if(c>t){s=i-1;break}}}for(;i<e.length;){const c=e[i];if("number"==typeof c)break;if(c===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Js(e){return-1!==e}function vo(e){return 32767&e}function _r(e,t){let n=function pu(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let us=!0;function gi(e){const t=us;return us=e,t}let gu=0;const ar={};function jo(e,t){const n=yi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,mi(r.data,e),mi(t,null),mi(r.blueprint,null));const o=Ho(e,t),i=e.injectorIndex;if(Js(o)){const s=vo(o),c=_r(o,t),f=c[1].data;for(let _=0;_<8;_++)t[i+_]=c[s+_]|f[s+_]}return t[i+8]=o,i}function mi(e,t){e.push(0,0,0,0,0,0,0,0,t)}function yi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Ho(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Ci(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Uo(e,t,n){!function ta(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(lt)&&(r=n[lt]),null==r&&(r=n[lt]=gu++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function ra(e,t,n){if(n&_e.Optional)return e;Je()}function vi(e,t,n,r){if(n&_e.Optional&&void 0===r&&(r=null),0==(n&(_e.Self|_e.Host))){const o=e[9],i=pt(void 0);try{return o?o.get(t,r,n&_e.Optional):cr(t,r,n&_e.Optional)}finally{pt(i)}}return ra(r,0,n)}function oa(e,t,n,r=_e.Default,o){if(null!==e){if(1024&t[2]){const s=function vu(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const c=ia(i,s,n,r|_e.Self,ar);if(c!==ar)return c;let f=i.parent;if(!f){const _=s[21];if(_){const C=_.get(n,ar,r);if(C!==ar)return C}f=Ci(s),s=s[15]}i=f}return o}(e,t,n,r,ar);if(s!==ar)return s}const i=ia(e,t,n,r,ar);if(i!==ar)return i}return vi(t,n,r,o)}function ia(e,t,n,r,o){const i=function sa(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(lt)?e[lt]:void 0;return"number"==typeof t?t>=0?255&t:yu:t}(n);if("function"==typeof i){if(!zs(t,e,r))return r&_e.Host?ra(o,0,r):vi(t,n,r,o);try{const s=i(r);if(null!=s||r&_e.Optional)return s;Je()}finally{iu()}}else if("number"==typeof i){let s=null,c=yi(e,t),f=-1,_=r&_e.Host?t[16][6]:null;for((-1===c||r&_e.SkipSelf)&&(f=-1===c?Ho(e,t):t[c+8],-1!==f&&ls(r,!1)?(s=t[1],c=vo(f),t=_r(f,t)):c=-1);-1!==c;){const C=t[1];if(_i(i,c,C.data)){const S=mu(c,t,n,s,r,_);if(S!==ar)return S}f=t[c+8],-1!==f&&ls(r,t[1].data[c+8]===_)&&_i(i,c,t)?(s=C,c=vo(f),t=_r(f,t)):c=-1}}return o}function mu(e,t,n,r,o,i){const s=t[1],c=s.data[e+8],C=Di(c,s,n,null==r?Sn(c)&&us:r!=s&&0!=(3&c.type),o&_e.Host&&i===c);return null!==C?$o(t,s,C,c):ar}function Di(e,t,n,r,o){const i=e.providerIndexes,s=t.data,c=1048575&i,f=e.directiveStart,C=i>>20,k=o?c+C:e.directiveEnd;for(let z=r?c:c+C;z<k;z++){const ue=s[z];if(z<f&&n===ue||z>=f&&ue.type===n)return z}if(o){const z=s[f];if(z&&$t(z)&&z.type===n)return f}return null}function $o(e,t,n,r){let o=e[n];const i=t.data;if(function fu(e){return e instanceof Vo}(o)){const s=o;s.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ze(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new Q(-200,`Circular dependency in DI detected for ${e}${n}`)}(function ve(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():re(e)}(i[n]));const c=gi(s.canSeeViewProviders);s.resolving=!0;const f=s.injectImpl?pt(s.injectImpl):null;zs(e,r,_e.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function du(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Kr(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==f&&pt(f),gi(c),s.resolving=!1,iu()}}return o}function _i(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function ls(e,t){return!(e&_e.Self||e&_e.Host&&t)}class eo{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return oa(this._tNode,this._lView,t,r,n)}}function yu(){return new eo(Bt(),ce())}function aa(e){return Ht(()=>{const t=e.prototype.constructor,n=t[Pe]||cs(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[Pe]||cs(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function cs(e){return W(e)?()=>{const t=cs(L(e));return t&&t()}:An(e)}function Ci(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ei(e){return function na(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(yo(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Bt(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pr="__parameters__";function Co(e,t,n){return Ht(()=>{const r=function _o(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return c.annotation=s,c;function c(f,_,C){const S=f.hasOwnProperty(Pr)?f[Pr]:Object.defineProperty(f,Pr,{value:[]})[Pr];for(;S.length<=C;)S.push(null);return(S[C]=S[C]||[]).push(s),f}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Et{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=it({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Qt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Qt(r,t)):t!==e&&t.push(r)}return t}function Fr(e,t){e.forEach(n=>Array.isArray(n)?Fr(n,t):t(n))}function hs(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function zo(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Wo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function Rn(e,t,n){let r=wo(e,t);return r>=0?e[1|r]=n:(r=~r,function Iu(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function wi(e,t){const n=wo(e,t);if(n>=0)return e[1|n]}function wo(e,t){return function fa(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const u={},a="__NG_DI_FLAG__",h="ngTempTokenPath",E=/\n/gm,P="__source";let X;function ge(e){const t=X;return X=e,t}function ot(e,t=_e.Default){if(void 0===X)throw new Q(-203,!1);return null===X?cr(e,void 0,t):X.get(e,t&_e.Optional?null:void 0,t)}function me(e,t=_e.Default){return(function Ze(){return dt}()||ot)(L(e),t)}function vn(e,t=_e.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),me(e,t)}function Yn(e){const t=[];for(let n=0;n<e.length;n++){const r=L(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Q(900,!1);let o,i=_e.Default;for(let s=0;s<r.length;s++){const c=r[s],f=qn(c);"number"==typeof f?-1===f?o=c.token:i|=f:o=c}t.push(me(o,i))}else t.push(me(r))}return t}function Kn(e,t){return e[a]=t,e.prototype[a]=t,e}function qn(e){return e[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const vs=Kn(Co("Optional"),8),Ds=Kn(Co("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ru;function Sm(e){Ru=e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class dd{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function bo(e){return e instanceof dd?e.changingThisBreaksApplicationSecurity:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Bm=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,jm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var sn=(()=>((sn=sn||{})[sn.NONE=0]="NONE",sn[sn.HTML=1]="HTML",sn[sn.STYLE=2]="STYLE",sn[sn.SCRIPT=3]="SCRIPT",sn[sn.URL=4]="URL",sn[sn.RESOURCE_URL=5]="RESOURCE_URL",sn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bu(e){const t=function bs(){const e=ce();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(sn.URL,e)||"":function Es(e,t){const n=function Fm(e){return e instanceof dd&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?bo(e):function Da(e){return(e=String(e)).match(Bm)||e.match(jm)?e:"unsafe:"+e}(re(e))}const ju=new Et("ENVIRONMENT_INITIALIZER"),_d=new Et("INJECTOR",-1),Cd=new Et("INJECTOR_DEF_TYPES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Ed{get(t,n=u){if(n===u){const r=new Error(`NullInjectorError: No provider for ${j(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ey(...e){return{\u0275providers:wd(0,e)}}function wd(e,...t){const n=[],r=new Set;let o;return Fr(t,i=>{const s=i;Hu(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&bd(o,n),n}function bd(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];Fr(o,i=>{t.push(i)})}}function Hu(e,t,n,r){if(!(e=L(e)))return!1;let o=null,i=Ln(e);const s=!i&&rt(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const f=e.ngModule;if(i=Ln(f),!i)return!1;o=f}const c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){const f="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const _ of f)Hu(_,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!c){let _;r.add(o);try{Fr(i.imports,C=>{Hu(C,t,n,r)&&(_||(_=[]),_.push(C))})}finally{}void 0!==_&&bd(_,t)}if(!c){const _=An(o)||(()=>new o);t.push({provide:o,useFactory:_,deps:be},{provide:Cd,useValue:o,multi:!0},{provide:ju,useValue:()=>me(o),multi:!0})}const f=i.providers;null==f||c||Fr(f,C=>{t.push(C)})}}return o!==e&&void 0!==e.providers}const ty=U({provide:String,useValue:U});function Uu(e){return null!==e&&"object"==typeof e&&ty in e}function Ko(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const $u=new Et("Set Injector scope."),Ca={},ry={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Gu;function Ea(){return void 0===Gu&&(Gu=new Ed),Gu}class qo{}class Sd extends qo{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Wu(t,s=>this.processProvider(s)),this.records.set(_d,Ii(void 0,this)),o.has("environment")&&this.records.set(qo,Ii(void 0,this));const i=this.records.get($u);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Cd.multi,be,_e.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=ge(this),r=pt(void 0);try{return t()}finally{ge(n),pt(r)}}get(t,n=u,r=_e.Default){this.assertNotDestroyed();const o=ge(this),i=pt(void 0);try{if(!(r&_e.SkipSelf)){let c=this.records.get(t);if(void 0===c){const f=function uy(e){return"function"==typeof e||"object"==typeof e&&e instanceof Et}(t)&&kt(t);c=f&&this.injectableDefInScope(f)?Ii(zu(t),Ca):null,this.records.set(t,c)}if(null!=c)return this.hydrate(t,c)}return(r&_e.Self?Ea():this.parent).get(t,n=r&_e.Optional&&n===u?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[h]=s[h]||[]).unshift(j(t)),o)throw s;return function pa(e,t,n,r){const o=e[h];throw t[P]&&o.unshift(t[P]),e.message=function Yo(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=j(t);if(Array.isArray(t))o=t.map(j).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let c=t[s];i.push(s+":"+("string"==typeof c?JSON.stringify(c):j(c)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(E,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[h]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{pt(i),ge(o)}}resolveInjectorInitializers(){const t=ge(this),n=pt(void 0);try{const r=this.get(ju.multi,be,_e.Self);for(const o of r)o()}finally{ge(t),pt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(j(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Q(205,!1)}processProvider(t){let n=Ko(t=L(t))?t:L(t&&t.provide);const r=function iy(e){return Uu(e)?Ii(void 0,e.useValue):Ii(Ad(e),Ca)}(t);if(Ko(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Ii(void 0,Ca,!0),o.factory=()=>Yn(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Ca&&(n.value=ry,n.value=n.factory()),"object"==typeof n.value&&n.value&&function ay(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=L(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function zu(e){const t=kt(e),n=null!==t?t.factory:An(e);if(null!==n)return n;if(e instanceof Et)throw new Q(204,!1);if(e instanceof Function)return function oy(e){const t=e.length;if(t>0)throw Wo(t,"?"),new Q(204,!1);const n=function $n(e){const t=e&&(e[an]||e[Vn]);if(t){const n=function Ir(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Q(204,!1)}function Ad(e,t,n){let r;if(Ko(e)){const o=L(e);return An(o)||zu(o)}if(Uu(e))r=()=>L(e.useValue);else if(function Id(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Yn(e.deps||[]));else if(function Md(e){return!(!e||!e.useExisting)}(e))r=()=>me(L(e.useExisting));else{const o=L(e&&(e.useClass||e.provide));if(!function sy(e){return!!e.deps}(e))return An(o)||zu(o);r=()=>new o(...Yn(e.deps))}return r}function Ii(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function ly(e){return!!e.\u0275providers}function Wu(e,t){for(const n of e)Array.isArray(n)?Wu(n,t):ly(n)?Wu(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Td{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fy{resolveComponentFactory(t){throw function dy(e){const t=Error(`No component factory found for ${j(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Ms=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new fy,e})();function hy(){return Si(Bt(),ce())}function Si(e,t){return new Is(Tt(e,t))}let Is=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=hy,e})();function py(e){return e instanceof Is?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Od{}let gy=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function my(){const e=ce(),n=Kt(Bt().index,e);return(Yt(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),yy=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=it({token:e,providedIn:"root",factory:()=>null}),e})();class Rd{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const vy=new Rd("14.1.2"),Yu={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ju(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ss{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Ju(t);for(;n&&Ju(n);)n=Ju(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Xu=new Map;let xy=0;const tl="__ngContext__";function En(e,t){Yt(t)?(e[tl]=t[20],function Ry(e){Xu.set(e[20],e)}(t)):e[tl]=t}function As(e){const t=e[tl];return"number"==typeof t?function kd(e){return Xu.get(e)||null}(t):t||null}function nl(e){const t=As(e);return t?Yt(t)?t:t.lView:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Hy=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(K))();function to(e){return e instanceof Function?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Vr=(()=>((Vr=Vr||{})[Vr.Important=1]="Important",Vr[Vr.DashCase=2]="DashCase",Vr))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ol(e,t){return undefined(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ts(e){const t=e[3];return fn(t)?t[3]:t}function il(e){return Wd(e[13])}function sl(e){return Wd(e[4])}function Wd(e){for(;null!==e&&!fn(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ti(e,t,n,r,o){if(null!=r){let i,s=!1;fn(r)?i=r:Yt(r)&&(s=!0,r=r[0]);const c=At(r);0===e&&null!==n?null==o?Jd(t,n,c):Qo(t,n,c,o||null,!0):1===e&&null!==n?Qo(t,n,c,o||null,!0):2===e?function af(e,t,n){const r=wa(e,t);r&&function iv(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,c,s):3===e&&t.destroyNode(c),null!=i&&function uv(e,t,n,r,o){const i=n[7];i!==At(n)&&Ti(t,e,r,i,o);for(let c=10;c<n.length;c++){const f=n[c];xs(f[1],f,e,t,r,i)}}(t,e,i,n,o)}}function ul(e,t,n){return e.createElement(t,n)}function Kd(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,te(o,-1)),n.splice(r,1)}function ll(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Kd(o,r),t>0&&(e[n-1][4]=r[4]);const i=zo(e,10+t);!function Zy(e,t){xs(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function qd(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&xs(e,t,n,3,null,null),function ev(e){let t=e[13];if(!t)return cl(e[1],e);for(;t;){let n=null;if(Yt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Yt(t)&&cl(t[1],t),t=t[3];null===t&&(t=e),Yt(t)&&cl(t[1],t),n=t&&t[4]}t=n}}(t)}}function cl(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function ov(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Vo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const c=o[i[s]],f=i[s+1];try{f.call(c)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function rv(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],c="function"==typeof s?s(t):At(t[s]),f=r[o=n[i+2]],_=n[i+3];"boolean"==typeof _?c.removeEventListener(n[i],f,_):_>=0?r[o=_]():r[o=-_].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&fn(t[3])){n!==t[3]&&Kd(n,t);const r=t[19];null!==r&&r.detachView(e)}!function Ny(e){Xu.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function Qd(e,t,n){return function Zd(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===x.None||o===x.Emulated)return null}return Tt(r,n)}(e,t.parent,n)}function Qo(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Jd(e,t,n){e.appendChild(t,n)}function Xd(e,t,n,r,o){null!==r?Qo(e,t,n,r,o):Jd(e,t,n)}function wa(e,t){return e.parentNode(t)}function ef(e,t,n){return nf(e,t,n)}let nf=function tf(e,t,n){return 40&e.type?Tt(e,n):null};function ba(e,t,n,r){const o=Qd(e,r,t),i=t[11],c=ef(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let f=0;f<n.length;f++)Xd(i,o,n[f],c,!1);else Xd(i,o,n,c,!1)}function Ma(e,t){if(null!==t){const n=t.type;if(3&n)return Tt(t,e);if(4&n)return fl(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ma(e,r);{const o=e[t.index];return fn(o)?fl(-1,o):At(o)}}if(32&n)return ol(t,e)()||At(e[t.index]);{const r=sf(e,t);return null!==r?Array.isArray(r)?r[0]:Ma(Ts(e[16]),r):Ma(e,t.next)}}return null}function sf(e,t){return null!==t?e[16][6].projection[t.projection]:null}function fl(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ma(r,o)}return t[7]}function hl(e,t,n,r,o,i,s){for(;null!=n;){const c=r[n.index],f=n.type;if(s&&0===t&&(c&&En(At(c),r),n.flags|=4),64!=(64&n.flags))if(8&f)hl(e,t,n.child,r,o,i,!1),Ti(t,e,o,c,i);else if(32&f){const _=ol(n,r);let C;for(;C=_();)Ti(t,e,o,C,i);Ti(t,e,o,c,i)}else 16&f?uf(e,t,r,n,o,i):Ti(t,e,o,c,i);n=s?n.projectionNext:n.next}}function xs(e,t,n,r,o,i){hl(n,r,e.firstChild,t,o,i,!1)}function uf(e,t,n,r,o,i){const s=n[16],f=s[6].projection[r.projection];if(Array.isArray(f))for(let _=0;_<f.length;_++)Ti(t,e,o,f[_],i);else hl(e,t,f,s[3],o,i,!0)}function lf(e,t,n){e.setAttribute(t,"style",n)}function pl(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function cf(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const df="ng-template";function cv(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==cf(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function ff(e){return 4===e.type&&e.value!==df}function dv(e,t,n){return t===(4!==e.type||n?e.value:df)}function fv(e,t,n){let r=4;const o=e.attrs||[],i=function gv(e){for(let t=0;t<e.length;t++)if(yo(e[t]))return t;return e.length}(o);let s=!1;for(let c=0;c<t.length;c++){const f=t[c];if("number"!=typeof f){if(!s)if(4&r){if(r=2|1&r,""!==f&&!dv(e,f,n)||""===f&&1===t.length){if(Cr(r))return!1;s=!0}}else{const _=8&r?f:t[++c];if(8&r&&null!==e.attrs){if(!cv(e.attrs,_,n)){if(Cr(r))return!1;s=!0}continue}const S=hv(8&r?"class":f,o,ff(e),n);if(-1===S){if(Cr(r))return!1;s=!0;continue}if(""!==_){let k;k=S>i?"":o[S+1].toLowerCase();const z=8&r?k:null;if(z&&-1!==cf(z,_,0)||2&r&&_!==k){if(Cr(r))return!1;s=!0}}}}else{if(!s&&!Cr(r)&&!Cr(f))return!1;if(s&&Cr(f))continue;s=!1,r=f|1&r}}return Cr(r)||s}function Cr(e){return 0==(1&e)}function hv(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let c=t[++o];for(;"string"==typeof c;)c=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function mv(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function hf(e,t,n=!1){for(let r=0;r<t.length;r++)if(fv(e,t[r],n))return!0;return!1}function yv(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function pf(e,t){return e?":not("+t.trim()+")":t}function vv(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Cr(s)&&(t+=pf(i,o),o=""),r=s,i=i||!Cr(r);n++}return""!==o&&(t+=pf(i,o)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ke={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gf(e){mf(Ge(),ce(),qt()+e,!1)}function mf(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&Fo(t,i,n)}else{const i=e.preOrderHooks;null!==i&&hi(t,i,0,n)}Rr(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function _f(e,t=null,n=null,r){const o=Cf(e,t,n,r);return o.resolveInjectorInitializers(),o}function Cf(e,t=null,n=null,r,o=new Set){const i=[n||be,ey(e)];return r=r||("object"==typeof e?void 0:j(e)),new Sd(i,t||Ea(),r||null,o)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let Zo=(()=>{class e{static create(n,r){if(Array.isArray(n))return _f({name:""},r,n,"");{const o=n.name??"";return _f({name:o},n.parent,n.providers,o)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=u,e.NULL=new Ed,e.\u0275prov=it({token:e,providedIn:"any",factory:()=>me(_d)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Oi(e,t=_e.Default){const n=ce();return null===n?me(e,t):oa(Bt(),n,L(e),t)}function Af(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Sa(e,t){return e<<17|t<<2}function Er(e){return e>>17&32767}function Dl(e){return 2|e}function no(e){return(131068&e)>>2}function _l(e,t){return-131069&e|t<<2}function Cl(e){return 1|e}function Bf(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Xr(o),s.contentQueries(2,t[i],i)}}}function xa(e,t,n,r,o,i,s,c,f,_,C){const S=t.blueprint.slice();return S[0]=o,S[2]=76|r,(null!==C||e&&1024&e[2])&&(S[2]|=1024),B(S),S[3]=S[15]=e,S[8]=n,S[10]=s||e&&e[10],S[11]=c||e&&e[11],S[12]=f||e&&e[12]||null,S[9]=_||e&&e[9]||null,S[6]=i,S[20]=function Oy(){return xy++}(),S[21]=C,S[16]=2==t.type?e[16]:S,S}function Ri(e,t,n,r,o){let i=e.data[t];if(null===i)i=function xl(e,t,n,r,o){const i=po(),s=li(),f=e.data[t]=function tD(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=f),null!==i&&(s?null==i.child&&null!==f.parent&&(i.child=f):null===i.next&&(i.next=f)),f}(e,t,n,r,o),function Or(){return q.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function xr(){const e=q.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return On(i,!0),i}function Ni(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Oa(e,t,n){es(t);try{const r=e.viewQuery;null!==r&&Bl(1,r,n);const o=e.template;null!==o&&jf(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Bf(e,t),e.staticViewQueries&&Bl(2,e.viewQuery,n);const i=e.components;null!==i&&function Zv(e,t){for(let n=0;n<t.length;n++)yD(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,ts()}}function Os(e,t,n,r){const o=t[2];if(128!=(128&o)){es(t);try{B(t),function Te(e){return q.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&jf(e,t,n,2,r);const s=3==(3&o);if(s){const _=e.preOrderCheckHooks;null!==_&&Fo(t,_,null)}else{const _=e.preOrderHooks;null!==_&&hi(t,_,0,null),Lo(t,0)}if(function gD(e){for(let t=il(e);null!==t;t=sl(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&te(i,1),o[2]|=512}}}(t),function pD(e){for(let t=il(e);null!==t;t=sl(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];w(r)&&Os(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Bf(e,t),s){const _=e.contentCheckHooks;null!==_&&Fo(t,_)}else{const _=e.contentHooks;null!==_&&hi(t,_,1),Lo(t,1)}!function qv(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Rr(~o);else{const i=o,s=n[++r],c=n[++r];zn(s,i),c(2,t[i])}}}finally{Rr(-1)}}(e,t);const c=e.components;null!==c&&function Qv(e,t){for(let n=0;n<t.length;n++)mD(e,t[n])}(t,c);const f=e.viewQuery;if(null!==f&&Bl(2,f,r),s){const _=e.viewCheckHooks;null!==_&&Fo(t,_)}else{const _=e.viewHooks;null!==_&&hi(t,_,2),Lo(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,te(t[3],-1))}finally{ts()}}}function Jv(e,t,n,r){const o=t[10],s=y(t);try{!s&&o.begin&&o.begin(),s&&Oa(e,t,r),Os(e,t,n,r)}finally{!s&&o.end&&o.end()}}function jf(e,t,n,r,o){const i=qt(),s=2&r;try{Rr(-1),s&&t.length>22&&mf(e,t,22,!1),n(r,o)}finally{Rr(i)}}function Hf(e,t,n){if(hr(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Ol(e,t,n){!Lt()||(function sD(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||jo(n,t),En(r,t);const s=n.initialInputs;for(let c=o;c<i;c++){const f=e.data[c],_=$t(f);_&&dD(t,n,f);const C=$o(t,e,c,n);En(C,t),null!==s&&fD(0,c-o,C,f,0,s),_&&(Kt(n.index,t)[8]=C)}}(e,t,n,Tt(n,t)),128==(128&n.flags)&&function aD(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function Jr(){return q.lFrame.currentDirectiveIndex}();try{Rr(i);for(let c=r;c<o;c++){const f=e.data[c],_=t[c];Po(c),(null!==f.hostBindings||0!==f.hostVars||null!==f.hostAttrs)&&Kf(f,_)}}finally{Rr(-1),Po(s)}}(e,t,n))}function Rl(e,t,n=Tt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],c=-1===s?n(t,e):e[s];e[o++]=c}}}function Uf(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Nl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Nl(e,t,n,r,o,i,s,c,f,_){const C=22+r,S=C+o,k=function Xv(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Ke);return n}(C,S),z="function"==typeof _?_():_;return k[1]={type:e,blueprint:k,template:n,queries:null,viewQuery:c,declTNode:t,data:k.slice().fill(null,C),bindingStartIndex:C,expandoStartIndex:S,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:f,consts:z,incompleteFirstPass:!1}}function $f(e,t,n,r){const o=th(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&nh(e).push(r,o.length-1))}function Gf(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function zf(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let c=null,f=null;for(let _=t.directiveStart;_<r;_++){const C=o[_],S=C.inputs,k=null===i||ff(t)?null:hD(S,i);s.push(k),c=Gf(S,_,c),f=Gf(C.outputs,_,f)}null!==c&&(c.hasOwnProperty("class")&&(t.flags|=16),c.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=c,t.outputs=f}function Wf(e,t){const n=Kt(t,e);16&n[2]||(n[2]|=32)}function Pl(e,t,n,r){let o=!1;if(Lt()){const i=function uD(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];hf(n,s.selectors,!1)&&(o||(o=[]),Uo(jo(n,t),e,s.type),$t(s)?(qf(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Qf(n,e.data.length,i.length);for(let C=0;C<i.length;C++){const S=i[C];S.providersResolver&&S.providersResolver(S)}let c=!1,f=!1,_=Ni(e,t,i.length,null);for(let C=0;C<i.length;C++){const S=i[C];n.mergedAttrs=pi(n.mergedAttrs,S.hostAttrs),Zf(e,n,t,_,S),cD(_,S,s),null!==S.contentQueries&&(n.flags|=8),(null!==S.hostBindings||null!==S.hostAttrs||0!==S.hostVars)&&(n.flags|=128);const k=S.type.prototype;!c&&(k.ngOnChanges||k.ngOnInit||k.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),c=!0),!f&&(k.ngOnChanges||k.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),f=!0),_++}zf(e,n)}s&&function lD(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Q(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=pi(n.mergedAttrs,n.attrs),o}function Yf(e,t,n,r,o,i){const s=i.hostBindings;if(s){let c=e.hostBindingOpCodes;null===c&&(c=e.hostBindingOpCodes=[]);const f=~t.index;(function iD(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(c)!=f&&c.push(f),c.push(r,o,s)}}function Kf(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function qf(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function cD(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;$t(t)&&(n[""]=e)}}function Qf(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Zf(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=An(o.type)),s=new Vo(i,$t(o),Oi);e.blueprint[r]=s,n[r]=s,Yf(e,t,0,r,Ni(e,n,o.hostVars,Ke),o)}function dD(e,t,n){const r=Tt(t,e),o=Uf(n),i=e[10],s=Ra(e,xa(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function kr(e,t,n,r,o,i){const s=Tt(e,t);!function Fl(e,t,n,r,o,i,s){if(null==i)e.removeAttribute(t,o,n);else{const c=null==s?re(i):s(i,r||"",o);e.setAttribute(t,o,c,n)}}(t[11],s,i,e.value,n,r,o)}function fD(e,t,n,r,o,i){const s=i[t];if(null!==s){const c=r.setInput;for(let f=0;f<s.length;){const _=s[f++],C=s[f++],S=s[f++];null!==c?r.setInput(n,S,_,C):n[C]=S}}}function hD(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Jf(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function mD(e,t){const n=Kt(t,e);if(w(n)){const r=n[1];48&n[2]?Os(r,n,r.template,n[8]):n[5]>0&&Ll(n)}}function Ll(e){for(let r=il(e);null!==r;r=sl(r))for(let o=10;o<r.length;o++){const i=r[o];if(w(i))if(512&i[2]){const s=i[1];Os(s,i,s.template,i[8])}else i[5]>0&&Ll(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Kt(n[r],e);w(o)&&o[5]>0&&Ll(o)}}function yD(e,t){const n=Kt(t,e),r=n[1];(function vD(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Oa(r,n,n[8])}function Ra(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Vl(e){for(;e;){e[2]|=32;const t=Ts(e);if(To(e)&&!t)return e;e=t}return null}function eh(e){!function Xf(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=nl(n);if(null!==r){const o=r[1];Jv(o,r,o.template,n)}}}(e[8])}function Bl(e,t,n){Xr(0),t(e,n)}const _D=(()=>Promise.resolve(null))();function th(e){return e[7]||(e[7]=[])}function nh(e){return e.cleanup||(e.cleanup=[])}function oh(e,t){const n=e[9],r=n?n.get(Ss,null):null;r&&r.handleError(t)}function jl(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],c=n[i++],f=t[s],_=e.data[s];null!==_.setInput?_.setInput(f,o,r,c):f[c]=o}}function ro(e,t,n){const r=vr(t,e);!function Yd(e,t,n){e.setValue(t,n)}(e[11],r,n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Na(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const c=t[s];"number"==typeof c?i=c:1==i?o=$(o,c):2==i&&(r=$(r,c+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pa(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(At(i)),fn(i))for(let c=10;c<i.length;c++){const f=i[c],_=f[1].firstChild;null!==_&&Pa(f[1],f,_,r)}const s=n.type;if(8&s)Pa(e,t,n.child,r);else if(32&s){const c=ol(n,t);let f;for(;f=c();)r.push(f)}else if(16&s){const c=sf(t,n);if(Array.isArray(c))r.push(...c);else{const f=Ts(t[16]);Pa(f[1],f,c,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Rs{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Pa(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(fn(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(ll(t,r),zo(n,r))}this._attachedToViewContainer=!1}qd(this._lView[1],this._lView)}onDestroy(t){$f(this._lView[1],this._lView,null,t)}markForCheck(){Vl(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function kl(e,t,n){const r=t[10];r.begin&&r.begin();try{Os(e,t,e.template,n)}catch(o){throw oh(t,o),o}finally{r.end&&r.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Q(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Xy(e,t){xs(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Q(902,!1);this._appRef=t}}class CD extends Rs{constructor(t){super(t),this._view=t}detectChanges(){eh(this._view)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Hl extends Ms{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=rt(t);return new Ns(n,this.ngModule)}}function ih(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class wD{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,Yu,r);return o!==Yu||n===Yu?o:this.parentInjector.get(t,n,r)}}class Ns extends Td{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function Dv(e){return e.map(vv).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ih(this.componentDef.inputs)}get outputs(){return ih(this.componentDef.outputs)}create(t,n,r,o){let i=(o=o||this.ngModule)instanceof qo?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new wD(t,i):t,c=s.get(Od,null);if(null===c)throw new Q(407,!1);const f=s.get(yy,null),_=c.createRenderer(null,this.componentDef),C=this.componentDef.selectors[0][0]||"div",S=r?function eD(e,t,n){return e.selectRootElement(t,n===x.ShadowDom)}(_,r,this.componentDef.encapsulation):ul(c.createRenderer(null,this.componentDef),C,function ED(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(C)),k=this.componentDef.onPush?288:272,z=function AD(e,t){return{components:[],scheduler:e||Hy,clean:_D,playerHandler:t||null,flags:0}}(),ue=Nl(0,null,null,1,0,null,null,null,null,null),he=xa(null,ue,z,k,null,null,c,_,f,s,null);let De,Me;es(he);try{const je=function ID(e,t,n,r,o,i){const s=n[1];n[22]=e;const f=Ri(s,22,2,"#host",null),_=f.mergedAttrs=t.hostAttrs;null!==_&&(Na(f,_,!0),null!==e&&(Bo(o,e,_),null!==f.classes&&pl(o,e,f.classes),null!==f.styles&&lf(o,e,f.styles)));const C=r.createRenderer(e,t),S=xa(n,Uf(t),null,t.onPush?32:16,n[22],f,r,C,i||null,null,null);return s.firstCreatePass&&(Uo(jo(f,n),s,t.type),qf(s,f),Qf(f,n.length,1)),Ra(n,S),n[22]=S}(S,this.componentDef,he,c,_);if(S)if(r)Bo(_,S,["ng-version",vy.full]);else{const{attrs:fe,classes:Fe}=function _v(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Cr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);fe&&Bo(_,S,fe),Fe&&Fe.length>0&&pl(_,S,Fe.join(" "))}if(Me=rr(ue,22),void 0!==n){const fe=Me.projection=[];for(let Fe=0;Fe<this.ngContentSelectors.length;Fe++){const st=n[Fe];fe.push(null!=st?Array.from(st):null)}}De=function SD(e,t,n,r,o){const i=n[1],s=function oD(e,t,n){const r=Bt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Zf(e,r,t,Ni(e,t,1,null),n),zf(e,r));const o=$o(t,e,r.directiveStart,r);En(o,t);const i=Tt(r,t);return i&&En(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,null!==o)for(const f of o)f(s,t);if(t.contentQueries){const f=Bt();t.contentQueries(1,s,f.directiveStart)}const c=Bt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Rr(c.index),Yf(n[1],c,0,c.directiveStart,c.directiveEnd,t),Kf(t,s)),s}(je,this.componentDef,he,z,[TD]),Oa(ue,he,null)}finally{ts()}return new MD(this.componentType,De,Si(Me,he),he,Me)}}class MD extends class cy{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new CD(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;jl(i[1],i,o,t,n),Wf(i,this._tNode.index)}}get injector(){return new eo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function TD(){const e=Bt();fi(ce()[1],e)}function Ul(e){let t=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function sh(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if($t(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Q(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=$l(e.inputs),s.declaredInputs=$l(e.declaredInputs),s.outputs=$l(e.outputs);const c=o.hostBindings;c&&ND(e,c);const f=o.viewQuery,_=o.contentQueries;if(f&&OD(e,f),_&&RD(e,_),oe(e.inputs,o.inputs),oe(e.declaredInputs,o.declaredInputs),oe(e.outputs,o.outputs),$t(o)&&o.data.animation){const C=e.data;C.animation=(C.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const c=i[s];c&&c.ngInherit&&c(e),c===Ul&&(n=!1)}}t=Object.getPrototypeOf(t)}!function xD(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=pi(o.hostAttrs,n=pi(n,o.hostAttrs))}}(r)}function $l(e){return e===Ve?{}:e===be?[]:e}function OD(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function RD(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function ND(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Fa=null;function Jo(){if(!Fa){const e=K.Symbol;if(e&&e.iterator)Fa=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Fa=r)}}}return Fa}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ps(e){return!!Gl(e)&&(Array.isArray(e)||!(e instanceof Map)&&Jo()in e)}function Gl(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Br(e,t,n){return e[t]=n}function wn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Xo(e,t,n,r){const o=wn(e,t,n);return wn(e,t+1,r)||o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function zl(e,t,n,r){const o=ce();return wn(o,Ct(),t)&&(Ge(),kr(jt(),o,e,t,n,r)),zl}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vi(e,t,n,r,o,i,s,c){const _=function La(e,t,n,r,o){const i=Xo(e,t,n,r);return wn(e,t+2,o)||i}(e,Z(),n,o,s);return xt(3),_?t+re(n)+r+re(o)+i+re(s)+c:Ke}function ki(e,t,n,r,o,i,s,c,f,_){const S=function ur(e,t,n,r,o,i){const s=Xo(e,t,n,r);return Xo(e,t+2,o,i)||s}(e,Z(),n,o,s,f);return xt(4),S?t+re(n)+r+re(o)+i+re(s)+c+re(f)+_:Ke}function mh(e,t,n,r,o,i,s,c){const f=ce(),_=Ge(),C=e+22,S=_.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function UD(e,t,n,r,o,i,s,c,f){const _=t.consts,C=Ri(t,e,4,s||null,M(_,c));Pl(t,n,C,M(_,f)),fi(t,C);const S=C.tViews=Nl(2,C,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,_);return null!==t.queries&&(t.queries.template(t,C),S.queries=t.queries.embeddedTView(C)),C}(C,_,f,t,n,r,o,i,s):_.data[C];On(S,!1);const k=f[11].createComment("");ba(_,f,k,S),En(k,f),Ra(f,f[C]=Jf(k,f,k,S)),_n(S)&&Ol(_,f,S),null!=s&&Rl(f,S,c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yh(e){return or(function D(){return q.lFrame.contextLView}(),22+e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Wl(e,t,n){const r=ce();return wn(r,Ct(),t)&&function Qn(e,t,n,r,o,i,s,c){const f=Tt(t,n);let C,_=t.inputs;!c&&null!=_&&(C=_[r])?(jl(e,n,C,r,o),Sn(t)&&Wf(n,t.index)):3&t.type&&(r=function nD(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(f,r,o))}(Ge(),jt(),r,e,t,r[11],n,!1),Wl}function Yl(e,t,n,r,o){const s=o?"class":"style";jl(e,n,t.inputs[s],s,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Va(e,t,n,r){const o=ce(),i=Ge(),s=22+e,c=o[11],f=o[s]=ul(c,t,function cu(){return q.lFrame.currentNamespace}()),_=i.firstCreatePass?function GD(e,t,n,r,o,i,s){const c=t.consts,_=Ri(t,e,2,o,M(c,i));return Pl(t,n,_,M(c,s)),null!==_.attrs&&Na(_,_.attrs,!1),null!==_.mergedAttrs&&Na(_,_.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,_),_}(s,i,o,0,t,n,r):i.data[s];On(_,!0);const C=_.mergedAttrs;null!==C&&Bo(c,f,C);const S=_.classes;null!==S&&pl(c,f,S);const k=_.styles;return null!==k&&lf(c,f,k),64!=(64&_.flags)&&ba(i,o,f,_),0===function ft(){return q.lFrame.elementDepthCount}()&&En(f,o),function yt(){q.lFrame.elementDepthCount++}(),_n(_)&&(Ol(i,o,_),Hf(i,_,o)),null!==r&&Rl(o,_),Va}function ka(){let e=Bt();li()?ci():(e=e.parent,On(e,!1));const t=e;!function qe(){q.lFrame.elementDepthCount--}();const n=Ge();return n.firstCreatePass&&(fi(n,e),hr(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function qs(e){return 0!=(16&e.flags)}(t)&&Yl(n,t,ce(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Qs(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&Yl(n,t,ce(),t.stylesWithoutHost,!1),ka}function Kl(e,t,n,r){return Va(e,t,n,r),ka(),Kl
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function Ba(e,t,n){const r=ce(),o=Ge(),i=e+22,s=o.firstCreatePass?function zD(e,t,n,r,o){const i=t.consts,s=M(i,r),c=Ri(t,e,8,"ng-container",s);return null!==s&&Na(c,s,!0),Pl(t,n,c,M(i,o)),null!==t.queries&&t.queries.elementStart(t,c),c}(i,o,r,t,n):o.data[i];On(s,!0);const c=r[i]=r[11].createComment("");return ba(o,r,c,s),En(c,r),_n(s)&&(Ol(o,r,s),Hf(o,s,r)),null!=n&&Rl(r,s),Ba}function ja(){let e=Bt();const t=Ge();return li()?ci():(e=e.parent,On(e,!1)),t.firstCreatePass&&(fi(t,e),hr(e)&&t.queries.elementEnd(e)),ja}function Dh(){return ce()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ql(e){return!!e&&"function"==typeof e.then}function _h(e){return!!e&&"function"==typeof e.subscribe}const Ch=_h;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ql(e,t,n,r){const o=ce(),i=Ge(),s=Bt();return function wh(e,t,n,r,o,i,s,c){const f=_n(r),C=e.firstCreatePass&&nh(e),S=t[8],k=th(t);let z=!0;if(3&r.type||c){const De=Tt(r,t),Me=c?c(De):De,je=k.length,fe=c?st=>c(At(st[r.index])):r.index;let Fe=null;if(!c&&f&&(Fe=function WD(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const c=t[7],f=o[i+2];return c.length>f?c[f]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==Fe)(Fe.__ngLastListenerFn__||Fe).__ngNextListenerFn__=i,Fe.__ngLastListenerFn__=i,z=!1;else{i=Mh(r,t,S,i,!1);const st=n.listen(Me,o,i);k.push(i,st),C&&C.push(o,fe,je,je+1)}}else i=Mh(r,t,S,i,!1);const ue=r.outputs;let he;if(z&&null!==ue&&(he=ue[o])){const De=he.length;if(De)for(let Me=0;Me<De;Me+=2){const Vt=t[he[Me]][he[Me+1]].subscribe(i),ni=k.length;k.push(i,Vt),C&&C.push(o,r.index,ni,-(ni+1))}}}(i,o,o[11],s,e,t,0,r),Ql}function bh(e,t,n,r){try{return!1!==n(r)}catch(o){return oh(e,o),!1}}function Mh(e,t,n,r,o){return function i(s){if(s===Function)return r;Vl(2&e.flags?Kt(e.index,t):t);let f=bh(t,0,r,s),_=i.__ngNextListenerFn__;for(;_;)f=bh(t,0,_,s)&&f,_=_.__ngNextListenerFn__;return o&&!1===f&&(s.preventDefault(),s.returnValue=!1),f}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ih(e=1){return function ns(e){return(q.lFrame.contextLView=function di(e,t){for(;e>0;)t=t[15],e--;return t}(e,q.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function YD(e,t){let n=null;const r=function pv(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?hf(e,i,!0):yv(r,i))return o}else n=o}return n}function Sh(e){const t=ce()[16][6];if(!t.projection){const r=t.projection=Wo(e?e.length:1,null),o=r.slice();let i=t.child;for(;null!==i;){const s=e?YD(i,e):0;null!==s&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i),i=i.next}}}function Ah(e,t=0,n){const r=ce(),o=Ge(),i=Ri(o,22+e,16,null,n||null);null===i.projection&&(i.projection=t),ci(),64!=(64&i.flags)&&function av(e,t,n){uf(t[11],0,t,n,Qd(e,n,t),ef(n.parent||t[6],n,t))}(o,r,i)}function kh(e,t,n,r,o){const i=e[n+1],s=null===t;let c=r?Er(i):no(i),f=!1;for(;0!==c&&(!1===f||s);){const C=e[c+1];QD(e[c],t)&&(f=!0,e[c+1]=r?Cl(C):Dl(C)),c=r?Er(C):no(C)}f&&(e[n+1]=r?Dl(i):Cl(i))}function QD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&wo(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Jl(e,t){return function wr(e,t,n,r){const o=ce(),i=Ge(),s=xt(2);i.firstUpdatePass&&function Yh(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[qt()],s=function Wh(e,t){return t>=e.expandoStartIndex}(e,n);(function Zh(e,t){return 0!=(e.flags&(t?16:32))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */)(i,r)&&null===t&&!s&&(t=!1),t=function i_(e,t,n,r){const o=function Xi(e){const t=q.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=Ls(n=Xl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=Xl(o,e,t,n,r),null===i){let f=function s_(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==no(r))return e[Er(r)]}(e,t,r);void 0!==f&&Array.isArray(f)&&(f=Xl(null,e,t,f[1],r),f=Ls(f,t.attrs,r),function a_(e,t,n,r){e[Er(n?t.classBindings:t.styleBindings)]=r}(e,t,r,f))}else i=function u_(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=Ls(r,e[i].hostAttrs,n);return Ls(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function KD(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,c=Er(s),f=no(s);e[r]=n;let C,_=!1;if(Array.isArray(n)){const S=n;C=S[1],(null===C||wo(S,C)>0)&&(_=!0)}else C=n;if(o)if(0!==f){const k=Er(e[c+1]);e[r+1]=Sa(k,c),0!==k&&(e[k+1]=_l(e[k+1],r)),e[c+1]=function Bv(e,t){return 131071&e|t<<17}(e[c+1],r)}else e[r+1]=Sa(c,0),0!==c&&(e[c+1]=_l(e[c+1],r)),c=r;else e[r+1]=Sa(f,0),0===c?c=r:e[f+1]=_l(e[f+1],r),f=r;_&&(e[r+1]=Dl(e[r+1])),kh(e,C,r,!0),kh(e,C,r,!1),function qD(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&wo(i,t)>=0&&(n[r+1]=Cl(n[r+1]))}(t,C,e,r,i),s=Sa(c,f),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==Ke&&wn(o,s,t)&&function qh(e,t,n,r,o,i,s,c){if(!(3&t.type))return;const f=e.data,_=f[c+1];Ha(function Of(e){return 1==(1&e)}(_)?Qh(f,t,n,o,no(_),s):void 0)||(Ha(i)||function xf(e){return 2==(2&e)}(_)&&(i=Qh(f,null,n,o,c,s)),function lv(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:Vr.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=Vr.Important),e.setStyle(n,r,o,i))}}(r,s,vr(qt(),n),o,i))}(i,i.data[qt()],o,o[11],e,o[s+1]=function d_(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=j(bo(e)))),e}(t,n),r,s)}(e,t,null,!0),Jl}function Xl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let c=n.directiveStylingLast;for(-1===c?c=n.directiveStart:c++;c<s&&(i=t[c],r=Ls(r,i.hostAttrs,o),i!==e);)c++;return null!==e&&(n.directiveStylingLast=c),r}function Ls(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),Rn(e,s,!!n||t[++i]))}return void 0===e?null:e}function Qh(e,t,n,r,o,i){const s=null===t;let c;for(;o>0;){const f=e[o],_=Array.isArray(f),C=_?f[1]:f,S=null===C;let k=n[o+1];k===Ke&&(k=S?be:void 0);let z=S?wi(k,r):C===r?k:void 0;if(_&&!Ha(z)&&(z=wi(f,r)),Ha(z)&&(c=z,s))return c;const ue=e[o+1];o=s?Er(ue):no(ue)}if(null!==t){let f=i?t.residualClasses:t.residualStyles;null!=f&&(c=wi(f,r))}return c}function Ha(e){return void 0!==e}function Jh(e,t=""){const n=ce(),r=Ge(),o=e+22,i=r.firstCreatePass?Ri(r,o,1,t,null):r.data[o],s=n[o]=function al(e,t){return e.createText(t)}(n[11],t);ba(r,n,s,i),On(i,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ua(e,t,n){const r=ce(),o=function Fi(e,t,n,r){return wn(e,Ct(),n)?t+re(n)+r:Ke}(r,e,t,n);return o!==Ke&&ro(r,qt(),o),Ua}function ec(e,t,n,r,o){const i=ce(),s=function Li(e,t,n,r,o,i){const c=Xo(e,Z(),n,o);return xt(2),c?t+re(n)+r+re(o)+i:Ke}(i,e,t,n,r,o);return s!==Ke&&ro(i,qt(),s),ec}function tc(e,t,n,r,o,i,s){const c=ce(),f=Vi(c,e,t,n,r,o,i,s);return f!==Ke&&ro(c,qt(),f),tc}function nc(e,t,n,r,o,i,s,c,f){const _=ce(),C=ki(_,e,t,n,r,o,i,s,c,f);return C!==Ke&&ro(_,qt(),C),nc}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ei=void 0;var O_=["en",[["a","p"],["AM","PM"],ei],[["AM","PM"],ei,ei],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],ei,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],ei,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",ei,"{1} 'at' {0}",ei],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function x_(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Gi={};function rc(e){const t=function R_(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=yp(t);if(n)return n;const r=t.split("-")[0];if(n=yp(r),n)return n;if("en"===r)return O_;throw new Q(701,!1)}function mp(e){return rc(e)[Be.PluralCase]}function yp(e){return e in Gi||(Gi[e]=K.ng&&K.ng.common&&K.ng.common.locales&&K.ng.common.locales[e]),Gi[e]}var Be=(()=>((Be=Be||{})[Be.LocaleId=0]="LocaleId",Be[Be.DayPeriodsFormat=1]="DayPeriodsFormat",Be[Be.DayPeriodsStandalone=2]="DayPeriodsStandalone",Be[Be.DaysFormat=3]="DaysFormat",Be[Be.DaysStandalone=4]="DaysStandalone",Be[Be.MonthsFormat=5]="MonthsFormat",Be[Be.MonthsStandalone=6]="MonthsStandalone",Be[Be.Eras=7]="Eras",Be[Be.FirstDayOfWeek=8]="FirstDayOfWeek",Be[Be.WeekendRange=9]="WeekendRange",Be[Be.DateFormat=10]="DateFormat",Be[Be.TimeFormat=11]="TimeFormat",Be[Be.DateTimeFormat=12]="DateTimeFormat",Be[Be.NumberSymbols=13]="NumberSymbols",Be[Be.NumberFormats=14]="NumberFormats",Be[Be.CurrencyCode=15]="CurrencyCode",Be[Be.CurrencySymbol=16]="CurrencySymbol",Be[Be.CurrencyName=17]="CurrencyName",Be[Be.Currencies=18]="Currencies",Be[Be.Directionality=19]="Directionality",Be[Be.PluralCase=20]="PluralCase",Be[Be.ExtraData=21]="ExtraData",Be))();const zi="en-US";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let vp=zi;function sc(e,t,n,r,o){if(e=L(e),Array.isArray(e))for(let i=0;i<e.length;i++)sc(e[i],t,n,r,o);else{const i=Ge(),s=ce();let c=Ko(e)?e:L(e.provide),f=Ad(e);const _=Bt(),C=1048575&_.providerIndexes,S=_.directiveStart,k=_.providerIndexes>>20;if(Ko(e)||!e.multi){const z=new Vo(f,o,Oi),ue=uc(c,t,o?C:C+k,S);-1===ue?(Uo(jo(_,s),i,c),ac(i,e,t.length),t.push(c),_.directiveStart++,_.directiveEnd++,o&&(_.providerIndexes+=1048576),n.push(z),s.push(z)):(n[ue]=z,s[ue]=z)}else{const z=uc(c,t,C+k,S),ue=uc(c,t,C,C+k),he=z>=0&&n[z],De=ue>=0&&n[ue];if(o&&!De||!o&&!he){Uo(jo(_,s),i,c);const Me=function TC(e,t,n,r,o){const i=new Vo(e,n,Oi);return i.multi=[],i.index=t,i.componentProviders=0,$p(i,o,r&&!n),i}(o?AC:SC,n.length,o,r,f);!o&&De&&(n[ue].providerFactory=Me),ac(i,e,t.length,0),t.push(c),_.directiveStart++,_.directiveEnd++,o&&(_.providerIndexes+=1048576),n.push(Me),s.push(Me)}else ac(i,e,z>-1?z:ue,$p(n[o?ue:z],f,!o&&r));!o&&r&&De&&n[ue].componentProviders++}}}function ac(e,t,n,r){const o=Ko(t),i=function ny(e){return!!e.useClass}(t);if(o||i){const f=(i?L(t.useClass):t).prototype.ngOnDestroy;if(f){const _=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const C=_.indexOf(n);-1===C?_.push(n,[r,f]):_[C+1].push(r,f)}else _.push(n,f)}}}function $p(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function uc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function SC(e,t,n,r){return lc(this.multi,[])}function AC(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,c=$o(n,n[1],this.providerFactory.index,r);i=c.slice(0,s),lc(o,i);for(let f=s;f<c.length;f++)i.push(c[f])}else i=[],lc(o,i);return i}function lc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function Gp(e,t=[]){return n=>{n.providersResolver=(r,o)=>
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function IC(e,t,n){const r=Ge();if(r.firstCreatePass){const o=$t(e);sc(n,r.data,r.blueprint,o,!0),sc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Yi{}class zp{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xC(e,t){return new Wp(e,t??null)}class Wp extends Yi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Hl(this);const r=St(t);this._bootstrapComponents=to(r.bootstrap),this._r3Injector=Cf(t,n,[{provide:Yi,useValue:this},{provide:Ms,useValue:this.componentFactoryResolver}],j(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class cc extends zp{constructor(t){super(),this.moduleType=t}create(t){return new Wp(this.moduleType,t)}}class OC extends Yi{constructor(t,n,r){super(),this.componentFactoryResolver=new Hl(this),this.instance=null;const o=new Sd([...t,{provide:Yi,useValue:this},{provide:Ms,useValue:this.componentFactoryResolver}],n||Ea(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function dc(e,t,n=null){return new OC(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xp(e,t,n,r){return tg(ce(),b(),e,t,n,r)}function eg(e,t,n,r,o){return ng(ce(),b(),e,t,n,r,o)}function Hs(e,t){const n=e[t];return n===Ke?void 0:n}function tg(e,t,n,r,o,i){const s=t+n;return wn(e,s,o)?Br(e,s+1,i?r.call(i,o):r(o)):Hs(e,s+1)}function ng(e,t,n,r,o,i,s){const c=t+n;return Xo(e,c,o,i)?Br(e,c+2,s?r.call(s,o,i):r(o,i)):Hs(e,c+2)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function sg(e,t){const n=Ge();let r;const o=e+22;n.firstCreatePass?(r=function QC(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=An(r.type)),s=pt(Oi);try{const c=gi(!1),f=i();return gi(c),function $D(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,ce(),o,f),f}finally{pt(s)}}function ag(e,t,n){const r=e+22,o=ce(),i=or(o,r);return Us(o,r)?tg(o,b(),t,i.transform,n,i):i.transform(n)}function ug(e,t,n,r){const o=e+22,i=ce(),s=or(i,o);return Us(i,o)?ng(i,b(),t,s.transform,n,r,s):s.transform(n,r)}function Us(e,t){return e[1].data[t].pure}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hc(e){return t=>{setTimeout(e,void 0,t)}}const Ur=class eE extends d.xQ{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const f=t;o=f.next?.bind(f),i=f.error?.bind(f),s=f.complete?.bind(f)}this.__isAsync&&(i=hc(i),o&&(o=hc(o)),s&&(s=hc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof R.w&&t.add(c),c}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function tE(){return this._results[Jo()]()}class pc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Jo(),r=pc.prototype;r[n]||(r[n]=tE)}get changes(){return this._changes||(this._changes=new Ur)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Qt(t);(this._changesDetected=!function bu(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let $s=(()=>{class e{}return e.__NG_ELEMENT_ID__=oE,e})();const nE=$s,rE=class extends nE{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=xa(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Oa(r,o,t),new Rs(o)}};function oE(){return Ya(Bt(),ce())}function Ya(e,t){return 4&e.type?new rE(t,e,Si(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ka=(()=>{class e{}return e.__NG_ELEMENT_ID__=iE,e})();function iE(){return dg(Bt(),ce())}const sE=Ka,lg=class extends sE{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Si(this._hostTNode,this._hostLView)}get injector(){return new eo(this._hostTNode,this._hostLView)}get parentInjector(){const t=Ho(this._hostTNode,this._hostLView);if(Js(t)){const n=_r(t,this._hostLView),r=vo(t);return new eo(n[1].data[r+8],n)}return new eo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=cg(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Eo(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let c;if(s)c=n;else{const S=n||{};c=S.index,r=S.injector,o=S.projectableNodes,i=S.environmentInjector||S.ngModuleRef}const f=s?t:new Ns(rt(t)),_=r||this.parentInjector;if(!i&&null==f.ngModule){const k=(s?_:this.parentInjector).get(qo,null);k&&(i=k)}const C=f.create(_,o,void 0,i);return this.insert(C.hostView,c),C}insert(t,n){const r=t._lView,o=r[1];if(function v(e){return fn(e[3])}(r)){const C=this.indexOf(t);if(-1!==C)this.detach(C);else{const S=r[3],k=new lg(S,S[6],S[3]);k.detach(k.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function tv(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],hs(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function nv(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const c=t[19];null!==c&&c.insertView(e),t[2]|=64}(o,r,s,i);const c=fl(i,s),f=r[11],_=wa(f,s[7]);return null!==_&&function Jy(e,t,n,r,o,i){r[0]=o,r[6]=t,xs(e,r,n,1,o,i)}(o,s[6],f,r,_,c),t.attachToViewContainerRef(),hs(gc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=cg(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=ll(this._lContainer,n);r&&(zo(gc(this._lContainer),n),qd(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=ll(this._lContainer,n);return r&&null!=zo(gc(this._lContainer),n)?new Rs(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function cg(e){return e[8]}function gc(e){return e[8]||(e[8]=[])}function dg(e,t){let n;const r=t[e.index];if(fn(r))n=r;else{let o;if(8&e.type)o=At(r);else{const i=t[11];o=i.createComment("");const s=Tt(e,t);Qo(i,wa(i,s),o,function sv(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Jf(r,t,o,e),Ra(t,n)}return new lg(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class mc{constructor(t){this.queryList=t,this.matches=null}clone(){return new mc(this.queryList)}setDirty(){this.queryList.setDirty()}}class yc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new yc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==_g(t,n).matches&&this.queries[n].setDirty()}}class fg{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class vc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new vc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Dc{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Dc(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,lE(n,i)),this.matchTNodeWithReadOption(t,n,Di(n,t,i,!1,!1))}else r===$s?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Di(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Is||o===Ka||o===$s&&4&n.type)this.addMatch(n.index,-2);else{const i=Di(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function lE(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function dE(e,t,n,r){return-1===n?function cE(e,t){return 11&e.type?Si(e,t):4&e.type?Ya(e,t):null}(t,e):-2===n?function fE(e,t,n){return n===Is?Si(t,e):n===$s?Ya(t,e):n===Ka?dg(t,e):void 0}(e,t,r):$o(e,e[1],n,t)}function hg(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,c=[];for(let f=0;f<s.length;f+=2){const _=s[f];c.push(_<0?null:dE(t,i[_],s[f+1],n.metadata.read))}o.matches=c}return o.matches}function _c(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=hg(e,t,o,n);for(let c=0;c<i.length;c+=2){const f=i[c];if(f>0)r.push(s[c/2]);else{const _=i[c+1],C=t[-f];for(let S=10;S<C.length;S++){const k=C[S];k[17]===k[3]&&_c(k[1],k,_,r)}if(null!==C[9]){const S=C[9];for(let k=0;k<S.length;k++){const z=S[k];_c(z[1],z,_,r)}}}}}return r}function pg(e){const t=ce(),n=Ge(),r=go();Xr(r+1);const o=_g(n,r);if(e.dirty&&y(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?_c(n,t,r,[]):hg(n,t,o,r);e.reset(i,py),e.notifyOnChanges()}return!0}return!1}function gg(e,t,n){const r=Ge();r.firstCreatePass&&(Dg(r,new fg(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),vg(r,ce(),t)}function mg(e,t,n,r){const o=Ge();if(o.firstCreatePass){const i=Bt();Dg(o,new fg(t,n,r),i.index),function pE(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}vg(o,ce(),n)}function yg(){return function hE(e,t){return e[19].queries[t].queryList}(ce(),go())}function vg(e,t,n){const r=new pc(4==(4&n));$f(e,t,r,r.destroy),null===t[19]&&(t[19]=new yc),t[19].queries.push(new mc(r))}function Dg(e,t,n){null===e.queries&&(e.queries=new vc),e.queries.track(new Dc(t,n))}function _g(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Cg(e,t){return Ya(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qi(e){const t=rt(e)||Rt(e)||Nt(e);return null!==t&&t.standalone}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Qa(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const jg=new Et("Application Initializer");let Za=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Qa,this.reject=Qa,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(ql(i))n.push(i);else if(Ch(i)){const s=new Promise((c,f)=>{i.subscribe({complete:c,error:f})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(me(jg,8))},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Hg=new Et("AppId",{providedIn:"root",factory:function Ug(){return`${Mc()}${Mc()}${Mc()}`}});function Mc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const $g=new Et("Platform Initializer"),PE=new Et("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Gg=new Et("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let FE=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ja=new Et("LocaleId",{providedIn:"root",factory:()=>vn(Ja,_e.Optional|_e.SkipSelf)||function LE(){return typeof $localize<"u"&&$localize.locale||zi}()}),VE=new Et("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class kE{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let BE=(()=>{class e{compileModuleSync(n){return new cc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=to(St(n).declarations).reduce((s,c)=>{const f=rt(c);return f&&s.push(new Ns(f)),s},[]);return new kE(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const UE=(()=>Promise.resolve(0))();function Ic(e){typeof Zone>"u"?UE.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Zn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ur(!1),this.onMicrotaskEmpty=new Ur(!1),this.onStable=new Ur(!1),this.onError=new Ur(!1),typeof Zone>"u")throw new Q(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function $E(){let e=K.requestAnimationFrame,t=K.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function WE(e){const t=()=>{!function zE(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(K,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ac(e),e.isCheckStableRunning=!0,Sc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ac(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,c)=>{try{return Yg(e),n.invokeTask(o,i,s,c)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Kg(e)}},onInvoke:(n,r,o,i,s,c,f)=>{try{return Yg(e),n.invoke(o,i,s,c,f)}finally{e.shouldCoalesceRunChangeDetection&&t(),Kg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ac(e),Sc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Zn.isInAngularZone())throw new Q(909,!1)}static assertNotInAngularZone(){if(Zn.isInAngularZone())throw new Q(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,GE,Qa,Qa);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const GE={};function Sc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ac(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Yg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Kg(e){e._nesting--,Sc(e)}class YE{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ur,this.onMicrotaskEmpty=new Ur,this.onStable=new Ur,this.onError=new Ur}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const qg=new Et(""),Qg=new Et("");let Tc,KE=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Tc||(function qE(e){Tc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Zn.assertNotInAngularZone(),Ic(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ic(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(me(Zn),me(Zg),me(Qg))},e.\u0275prov=it({token:e,factory:e.\u0275fac}),e})(),Zg=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Tc?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),So=null;const Jg=new Et("AllowMultipleToken"),xc=new Et("PlatformDestroyListeners");class JE{constructor(t,n){this.name=t,this.token=n}}function em(e,t,n=[]){const r=`Platform: ${t}`,o=new Et(r);return(i=[])=>{let s=Oc();if(!s||s.injector.get(Jg,!1)){const c=[...n,...i,{provide:o,useValue:!0}];e?e(c):function XE(e){if(So&&!So.get(Jg,!1))throw new Q(400,!1);So=e;const t=e.get(nm);(function Xg(e){const t=e.get($g,null);t&&t.forEach(n=>n())})(e)}(function tm(e=[],t){return Zo.create({name:t,providers:[{provide:$u,useValue:"platform"},{provide:xc,useValue:new Set([()=>So=null])},...e]})}(c,r))}return function tw(e){const t=Oc();if(!t)throw new Q(401,!1);return t}()}}function Oc(){return So?.get(nm)??null}let nm=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function nw(e,t){let n;return n="noop"===e?new YE:("zone.js"===e?void 0:e)||new Zn(t),n}(r?.ngZone,function rm(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Zn,useValue:o}];return o.run(()=>{const s=Zo.create({providers:i,parent:this.injector,name:n.moduleType.name}),c=n.create(s),f=c.injector.get(Ss,null);if(!f)throw new Q(402,!1);return o.runOutsideAngular(()=>{const _=o.onError.subscribe({next:C=>{f.handleError(C)}});c.onDestroy(()=>{eu(this._modules,c),_.unsubscribe()})}),function om(e,t,n){try{const r=n();return ql(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(f,o,()=>{const _=c.injector.get(Za);return _.runInitializers(),_.donePromise.then(()=>(function Dp(e){ye(e,"Expected localeId to be defined"),"string"==typeof e&&(vp=e.toLowerCase().replace(/_/g,"-"))}(c.injector.get(Ja,zi)||zi),this._moduleDoBootstrap(c),c))})})}bootstrapModule(n,r=[]){const o=im({},r);return function QE(e,t,n){const r=new cc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Xa);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Q(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Q(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(xc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(me(Zo))},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function im(e,t){return Array.isArray(t)?t.reduce(im,e):{...e,...t}}let Xa=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new le.y(c=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{c.next(this._stable),c.complete()})}),s=new le.y(c=>{let f;this._zone.runOutsideAngular(()=>{f=this._zone.onStable.subscribe(()=>{Zn.assertNotInAngularZone(),Ic(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,c.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{Zn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{c.next(!1)}))});return()=>{f.unsubscribe(),_.unsubscribe()}});this.isStable=(0,ie.T)(i,s.pipe((0,J.B)()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Td;if(!this._injector.get(Za).done)throw!o&&qi(n),new Q(405,false);let s;s=o?n:this._injector.get(Ms).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const c=function ZE(e){return e.isBoundToModule}(s)?void 0:this._injector.get(Yi),_=s.create(Zo.NULL,[],r||s.selector,c),C=_.location.nativeElement,S=_.injector.get(qg,null);return S?.registerApplication(C),_.onDestroy(()=>{this.detachView(_.hostView),eu(this.components,_),S?.unregisterApplication(C)}),this._loadComponent(_),_}tick(){if(this._runningTick)throw new Q(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;eu(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Gg,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>eu(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new Q(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(me(Zn),me(qo),me(Ss))},e.\u0275prov=it({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function eu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let am=!0;function ow(){am=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let iw=(()=>{class e{}return e.__NG_ELEMENT_ID__=sw,e})();function sw(e){return function aw(e,t,n){if(Sn(e)&&!n){const r=Kt(e.index,t);return new Rs(r,r)}return 47&e.type?new Rs(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(Bt(),ce(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class fm{constructor(){}supports(t){return Ps(t)}create(t){return new hw(t)}}const fw=(e,t)=>t;class hw{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||fw}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<pm(r,o,i)?n:r,c=pm(s,o,i),f=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const _=c-o,C=f-o;if(_!=C){for(let k=0;k<_;k++){const z=k<i.length?i[k]:i[k]=0,ue=z+k;C<=ue&&ue<_&&(i[k]=z+1)}i[s.previousIndex]=C-_}}c!==f&&t(s,c,f)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Ps(t))throw new Q(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let c=0;c<this.length;c++)i=t[c],s=this._trackByFn(c,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,c)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,c),r=!0),n=n._next}else o=0,function kD(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Jo()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,c=>{s=this._trackByFn(o,c),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,c,s,o)),Object.is(n.item,c)||this._addIdentityChange(n,c)):(n=this._mismatch(n,c,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new pw(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new hm),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new hm),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class pw{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class gw{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class hm{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new gw,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function pm(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class gm{constructor(){}supports(t){return t instanceof Map||Gl(t)}create(){return new mw}}class mw{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Gl(t)))throw new Q(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new yw(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class yw{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function mm(){return new Lc([new fm])}let Lc=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||mm()),deps:[[e,new Ds,new vs]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Q(901,!1)}}return e.\u0275prov=it({token:e,providedIn:"root",factory:mm}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ym(){return new Vc([new gm])}let Vc=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||ym()),deps:[[e,new Ds,new vs]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Q(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=it({token:e,providedIn:"root",factory:ym}),e})();const _w=em(null,"core",[]);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Cw=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(me(Xa))},e.\u0275mod=tn({type:e}),e.\u0275inj=bt({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ew(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4719:(xe,ae,I)=>{I.d(ae,{Fj:()=>ve,u5:()=>Ge,JJ:()=>Wt,On:()=>Sr});var d=I(4650),R=I(6895),le=I(6498),ie=I(6688),J=I(4850),U=I(7830),oe=I(5254);function $(D,g){return new le.y(p=>{const b=D.length;if(0===b)return void p.complete();const Z=new Array(b);let Te=0,Ct=0;for(let xt=0;xt<b;xt++){const Or=(0,oe.D)(D[xt]);let sr=!1;p.add(Or.subscribe({next:zn=>{sr||(sr=!0,Ct++),Z[xt]=zn},error:zn=>p.error(zn),complete:()=>{Te++,(Te===b||!sr)&&(Ct===b&&p.next(g?g.reduce((zn,Jr,Po)=>(zn[Jr]=Z[Po],zn),{}):Z),p.complete())}}))}})}
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let N=(()=>{class D{constructor(p,b){this._renderer=p,this._elementRef=b,this.onChange=Z=>{},this.onTouched=()=>{}}setProperty(p,b){this._renderer.setProperty(this._elementRef.nativeElement,p,b)}registerOnTouched(p){this.onTouched=p}registerOnChange(p){this.onChange=p}setDisabledState(p){this.setProperty("disabled",p)}}return D.\u0275fac=function(p){return new(p||D)(d.Y36(d.Qsj),d.Y36(d.SBq))},D.\u0275dir=d.lG2({type:D}),D})(),O=(()=>{class D extends N{}return D.\u0275fac=function(){let g;return function(b){return(g||(g=d.n5z(D)))(b||D)}}(),D.\u0275dir=d.lG2({type:D,features:[d.qOj]}),D})();const L=new d.OlP("NgValueAccessor"),Q={provide:L,useExisting:(0,d.Gpc)(()=>ve),multi:!0},re=new d.OlP("CompositionEventMode");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ve=(()=>{class D extends N{constructor(p,b,Z){super(p,b),this._compositionMode=Z,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function de(){const D=(0,R.q)()?(0,R.q)().getUserAgent():"";return/android (\d+)/.test(D.toLowerCase())}())}writeValue(p){this.setProperty("value",p??"")}_handleInput(p){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(p)}_compositionStart(){this._composing=!0}_compositionEnd(p){this._composing=!1,this._compositionMode&&this.onChange(p)}}return D.\u0275fac=function(p){return new(p||D)(d.Y36(d.Qsj),d.Y36(d.SBq),d.Y36(re,8))},D.\u0275dir=d.lG2({type:D,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(p,b){1&p&&d.NdJ("input",function(Te){return b._handleInput(Te.target.value)})("blur",function(){return b.onTouched()})("compositionstart",function(){return b._compositionStart()})("compositionend",function(Te){return b._compositionEnd(Te.target.value)})},features:[d._Bn([Q]),d.qOj]}),D})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Je=new d.OlP("NgValidators"),We=new d.OlP("NgAsyncValidators");function Ye(D){return null!=D}function ye(D){return(0,d.QGY)(D)?(0,oe.D)(D):D}function we(D){let g={};return D.forEach(p=>{g=null!=p?{...g,...p}:g}),0===Object.keys(g).length?null:g}function wt(D,g){return g.map(p=>p(D))}function It(D){return D.map(g=>function zt(D){return!D.validate}(g)?g:p=>g.validate(p))}function Xt(D){return null!=D?function it(D){if(!D)return null;const g=D.filter(Ye);return 0==g.length?null:function(p){return we(wt(p,g))}}(It(D)):null}function kt(D){return null!=D?function bt(D){if(!D)return null;const g=D.filter(Ye);return 0==g.length?null:function(p){return function j(...D){if(1===D.length){const g=D[0];if((0,ie.k)(g))return $(g,null);if((0,U.K)(g)&&Object.getPrototypeOf(g)===Object.prototype){const p=Object.keys(g);return $(p.map(b=>g[b]),p)}}if("function"==typeof D[D.length-1]){const g=D.pop();return $(D=1===D.length&&(0,ie.k)(D[0])?D[0]:D,null).pipe((0,J.U)(p=>g(...p)))}return $(D,null)}(wt(p,g).map(ye)).pipe((0,J.U)(we))}}(It(D)):null}function lr(D,g){return null===D?[g]:Array.isArray(D)?[...D,g]:[D,g]}function Ln(D){return D?Array.isArray(D)?D:[D]:[]}function an(D,g){return Array.isArray(D)?D.includes(g):D===g}function pn(D,g){const p=Ln(g);return Ln(D).forEach(Z=>{an(p,Z)||p.push(Z)}),p}function Vn(D,g){return Ln(g).filter(p=>!an(D,p))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class bn{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(g){this._rawValidators=g||[],this._composedValidatorFn=Xt(this._rawValidators)}_setAsyncValidators(g){this._rawAsyncValidators=g||[],this._composedAsyncValidatorFn=kt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(g){this._onDestroyCallbacks.push(g)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(g=>g()),this._onDestroyCallbacks=[]}reset(g){this.control&&this.control.reset(g)}hasError(g,p){return!!this.control&&this.control.hasError(g,p)}getError(g,p){return this.control?this.control.getError(g,p):null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class _e extends bn{get formDirective(){return null}get path(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class dt extends bn{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Wt=(()=>{class D extends class Ze{constructor(g){this._cd=g}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(p){super(p)}}return D.\u0275fac=function(p){return new(p||D)(d.Y36(dt,2))},D.\u0275dir=d.lG2({type:D,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(p,b){2&p&&d.ekj("ng-untouched",b.isUntouched)("ng-touched",b.isTouched)("ng-pristine",b.isPristine)("ng-dirty",b.isDirty)("ng-valid",b.isValid)("ng-invalid",b.isInvalid)("ng-pending",b.isPending)},features:[d.qOj]}),D})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Mt="VALID",gn="INVALID",tn="PENDING",cn="DISABLED";function dr(D){return Array.isArray(D)?Xt(D):D||null}function rt(D){return Array.isArray(D)?kt(D):D||null}function Rt(D){return null!=D&&!Array.isArray(D)&&"object"==typeof D}function Y(D,g){(function Se(D,g){const p=function $n(D){return D._rawValidators}(D);null!==g.validator?D.setValidators(lr(p,g.validator)):"function"==typeof p&&D.setValidators([p]);const b=function Ir(D){return D._rawAsyncValidators}(D);null!==g.asyncValidator?D.setAsyncValidators(lr(b,g.asyncValidator)):"function"==typeof b&&D.setAsyncValidators([b]);const Z=()=>D.updateValueAndValidity();Ae(g._rawValidators,Z),Ae(g._rawAsyncValidators,Z)})(D,g),g.valueAccessor.writeValue(D.value),D.disabled&&g.valueAccessor.setDisabledState?.(!0),function mn(D,g){g.valueAccessor.registerOnChange(p=>{D._pendingValue=p,D._pendingChange=!0,D._pendingDirty=!0,"change"===D.updateOn&&Mn(D,g)})}(D,g),function Ut(D,g){const p=(b,Z)=>{g.valueAccessor.writeValue(b),Z&&g.viewToModelUpdate(b)};D.registerOnChange(p),g._registerOnDestroy(()=>{D._unregisterOnChange(p)})}(D,g),function Bn(D,g){g.valueAccessor.registerOnTouched(()=>{D._pendingTouched=!0,"blur"===D.updateOn&&D._pendingChange&&Mn(D,g),"submit"!==D.updateOn&&D.markAsTouched()})}(D,g),function $e(D,g){if(g.valueAccessor.setDisabledState){const p=b=>{g.valueAccessor.setDisabledState(b)};D.registerOnDisabledChange(p),g._registerOnDestroy(()=>{D._unregisterOnDisabledChange(p)})}}(D,g)}function Ae(D,g){D.forEach(p=>{p.registerOnValidatorChange&&p.registerOnValidatorChange(g)})}function Mn(D,g){D._pendingDirty&&D.markAsDirty(),D.setValue(D._pendingValue,{emitModelToViewChange:!1}),g.viewToModelUpdate(D._pendingValue),D._pendingChange=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Yt(D,g){const p=D.indexOf(g);p>-1&&D.splice(p,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function fn(D){return"object"==typeof D&&null!==D&&2===Object.keys(D).length&&"value"in D&&"disabled"in D}const oi={provide:dt,useExisting:(0,d.Gpc)(()=>Sr)},yn=(()=>Promise.resolve(null))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Sr=(()=>{class D extends dt{constructor(p,b,Z,Te,Ct){super(),this._changeDetectorRef=Ct,this.control=new class extends class Oe{constructor(g,p){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=g,this._rawAsyncValidators=p,this._composedValidatorFn=dr(this._rawValidators),this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(g){this._rawValidators=this._composedValidatorFn=g}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(g){this._rawAsyncValidators=this._composedAsyncValidatorFn=g}get parent(){return this._parent}get valid(){return this.status===Mt}get invalid(){return this.status===gn}get pending(){return this.status==tn}get disabled(){return this.status===cn}get enabled(){return this.status!==cn}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(g){this._rawValidators=g,this._composedValidatorFn=dr(g)}setAsyncValidators(g){this._rawAsyncValidators=g,this._composedAsyncValidatorFn=rt(g)}addValidators(g){this.setValidators(pn(g,this._rawValidators))}addAsyncValidators(g){this.setAsyncValidators(pn(g,this._rawAsyncValidators))}removeValidators(g){this.setValidators(Vn(g,this._rawValidators))}removeAsyncValidators(g){this.setAsyncValidators(Vn(g,this._rawAsyncValidators))}hasValidator(g){return an(this._rawValidators,g)}hasAsyncValidator(g){return an(this._rawAsyncValidators,g)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(g={}){this.touched=!0,this._parent&&!g.onlySelf&&this._parent.markAsTouched(g)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(g=>g.markAllAsTouched())}markAsUntouched(g={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(p=>{p.markAsUntouched({onlySelf:!0})}),this._parent&&!g.onlySelf&&this._parent._updateTouched(g)}markAsDirty(g={}){this.pristine=!1,this._parent&&!g.onlySelf&&this._parent.markAsDirty(g)}markAsPristine(g={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(p=>{p.markAsPristine({onlySelf:!0})}),this._parent&&!g.onlySelf&&this._parent._updatePristine(g)}markAsPending(g={}){this.status=tn,!1!==g.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!g.onlySelf&&this._parent.markAsPending(g)}disable(g={}){const p=this._parentMarkedDirty(g.onlySelf);this.status=cn,this.errors=null,this._forEachChild(b=>{b.disable({...g,onlySelf:!0})}),this._updateValue(),!1!==g.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...g,skipPristineCheck:p}),this._onDisabledChange.forEach(b=>b(!0))}enable(g={}){const p=this._parentMarkedDirty(g.onlySelf);this.status=Mt,this._forEachChild(b=>{b.enable({...g,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:g.emitEvent}),this._updateAncestors({...g,skipPristineCheck:p}),this._onDisabledChange.forEach(b=>b(!1))}_updateAncestors(g){this._parent&&!g.onlySelf&&(this._parent.updateValueAndValidity(g),g.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(g){this._parent=g}getRawValue(){return this.value}updateValueAndValidity(g={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Mt||this.status===tn)&&this._runAsyncValidator(g.emitEvent)),!1!==g.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!g.onlySelf&&this._parent.updateValueAndValidity(g)}_updateTreeValidity(g={emitEvent:!0}){this._forEachChild(p=>p._updateTreeValidity(g)),this.updateValueAndValidity({onlySelf:!0,emitEvent:g.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cn:Mt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(g){if(this.asyncValidator){this.status=tn,this._hasOwnPendingAsyncValidator=!0;const p=ye(this.asyncValidator(this));this._asyncValidationSubscription=p.subscribe(b=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(b,{emitEvent:g})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(g,p={}){this.errors=g,this._updateControlsErrors(!1!==p.emitEvent)}get(g){let p=g;return null==p||(Array.isArray(p)||(p=p.split(".")),0===p.length)?null:p.reduce((b,Z)=>b&&b._find(Z),this)}getError(g,p){const b=p?this.get(p):this;return b&&b.errors?b.errors[g]:null}hasError(g,p){return!!this.getError(g,p)}get root(){let g=this;for(;g._parent;)g=g._parent;return g}_updateControlsErrors(g){this.status=this._calculateStatus(),g&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(g)}_initObservables(){this.valueChanges=new d.vpe,this.statusChanges=new d.vpe}_calculateStatus(){return this._allControlsDisabled()?cn:this.errors?gn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(tn)?tn:this._anyControlsHaveStatus(gn)?gn:Mt}_anyControlsHaveStatus(g){return this._anyControls(p=>p.status===g)}_anyControlsDirty(){return this._anyControls(g=>g.dirty)}_anyControlsTouched(){return this._anyControls(g=>g.touched)}_updatePristine(g={}){this.pristine=!this._anyControlsDirty(),this._parent&&!g.onlySelf&&this._parent._updatePristine(g)}_updateTouched(g={}){this.touched=this._anyControlsTouched(),this._parent&&!g.onlySelf&&this._parent._updateTouched(g)}_registerOnCollectionChange(g){this._onCollectionChange=g}_setUpdateStrategy(g){Rt(g)&&null!=g.updateOn&&(this._updateOn=g.updateOn)}_parentMarkedDirty(g){return!g&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(g){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */{constructor(g=null,p,b){super(function kn(D){return(Rt(D)?D.validators:D)||null}(p),function Jn(D,g){return(Rt(g)?g.asyncValidators:D)||null}(b,p)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(g),this._setUpdateStrategy(p),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Rt(p)&&(p.nonNullable||p.initialValueIsDefault)&&(this.defaultValue=fn(g)?g.value:g)}setValue(g,p={}){this.value=this._pendingValue=g,this._onChange.length&&!1!==p.emitModelToViewChange&&this._onChange.forEach(b=>b(this.value,!1!==p.emitViewToModelChange)),this.updateValueAndValidity(p)}patchValue(g,p={}){this.setValue(g,p)}reset(g=this.defaultValue,p={}){this._applyFormState(g),this.markAsPristine(p),this.markAsUntouched(p),this.setValue(this.value,p),this._pendingChange=!1}_updateValue(){}_anyControls(g){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(g){this._onChange.push(g)}_unregisterOnChange(g){Yt(this._onChange,g)}registerOnDisabledChange(g){this._onDisabledChange.push(g)}_unregisterOnDisabledChange(g){Yt(this._onDisabledChange,g)}_forEachChild(g){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(g){fn(g)?(this.value=this._pendingValue=g.value,g.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=g}},this._registered=!1,this.update=new d.vpe,this._parent=p,this._setValidators(b),this._setAsyncValidators(Z),this.valueAccessor=function Hn(D,g){if(!g)return null;let p,b,Z;return Array.isArray(g),g.forEach(Te=>{Te.constructor===ve?p=Te:function Ao(D){return Object.getPrototypeOf(D.constructor)===O}(Te)?b=Te:Z=Te}),Z||b||p||null}(0,Te)}ngOnChanges(p){if(this._checkForErrors(),!this._registered||"name"in p){if(this._registered&&(this._checkName(),this.formDirective)){const b=p.name.previousValue;this.formDirective.removeControl({name:b,path:this._getPath(b)})}this._setUpControl()}"isDisabled"in p&&this._updateDisabled(p),function Gr(D,g){if(!D.hasOwnProperty("model"))return!1;const p=D.model;return!!p.isFirstChange()||!Object.is(g,p.currentValue)}(p,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(p){this.viewModel=p,this.update.emit(p)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Y(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(p){yn.then(()=>{this.control.setValue(p,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(p){const b=p.isDisabled.currentValue,Z=0!==b&&(0,d.D6c)(b);yn.then(()=>{Z&&!this.control.disabled?this.control.disable():!Z&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(p){return this._parent?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function T(D,g){return[...g.path,D]}(p,this._parent):[p]}}return D.\u0275fac=function(p){return new(p||D)(d.Y36(_e,9),d.Y36(Je,10),d.Y36(We,10),d.Y36(L,10),d.Y36(d.sBO,8))},D.\u0275dir=d.lG2({type:D,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[d._Bn([oi]),d.qOj,d.TTD]}),D})(),uo=(()=>{class D{}return D.\u0275fac=function(p){return new(p||D)},D.\u0275mod=d.oAB({type:D}),D.\u0275inj=d.cJS({}),D})(),ce=(()=>{class D{}return D.\u0275fac=function(p){return new(p||D)},D.\u0275mod=d.oAB({type:D}),D.\u0275inj=d.cJS({imports:[uo]}),D})(),Ge=(()=>{class D{}return D.\u0275fac=function(p){return new(p||D)},D.\u0275mod=d.oAB({type:D}),D.\u0275inj=d.cJS({imports:[ce]}),D})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1481:(xe,ae,I)=>{I.d(ae,{Dx:()=>F,b2:()=>cr,q6:()=>_e});var d=I(6895),R=I(4650);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class le extends d.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ie extends le{static makeCurrent(){(0,d.HT)(new ie)}onAndCancel(V,T,Y){return V.addEventListener(T,Y,!1),()=>{V.removeEventListener(T,Y,!1)}}dispatchEvent(V,T){V.dispatchEvent(T)}remove(V){V.parentNode&&V.parentNode.removeChild(V)}createElement(V,T){return(T=T||this.getDefaultDocument()).createElement(V)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(V){return V.nodeType===Node.ELEMENT_NODE}isShadowRoot(V){return V instanceof DocumentFragment}getGlobalEventTarget(V,T){return"window"===T?window:"document"===T?V:"body"===T?V.body:null}getBaseHref(V){const T=function U(){return J=J||document.querySelector("base"),J?J.getAttribute("href"):null}();return null==T?null:function j(G){oe=oe||document.createElement("a"),oe.setAttribute("href",G);const V=oe.pathname;return"/"===V.charAt(0)?V:`/${V}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(T)}resetBaseElement(){J=null}getUserAgent(){return window.navigator.userAgent}getCookie(V){return(0,d.Mx)(document.cookie,V)}}let oe,J=null;const $=new R.OlP("TRANSITION_ID"),O=[{provide:R.ip1,useFactory:function N(G,V,T){return()=>{T.get(R.CZH).donePromise.then(()=>{const Y=(0,d.q)(),ne=V.querySelectorAll(`style[ng-transition="${G}"]`);for(let Ae=0;Ae<ne.length;Ae++)Y.remove(ne[Ae])})}},deps:[$,d.K0,R.zs3],multi:!0}];let W=(()=>{class G{build(){return new XMLHttpRequest}}return G.\u0275fac=function(T){return new(T||G)},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const H=new R.OlP("EventManagerPlugins");let Q=(()=>{class G{constructor(T,Y){this._zone=Y,this._eventNameToPlugin=new Map,T.forEach(ne=>ne.manager=this),this._plugins=T.slice().reverse()}addEventListener(T,Y,ne){return this._findPluginFor(Y).addEventListener(T,Y,ne)}addGlobalEventListener(T,Y,ne){return this._findPluginFor(Y).addGlobalEventListener(T,Y,ne)}getZone(){return this._zone}_findPluginFor(T){const Y=this._eventNameToPlugin.get(T);if(Y)return Y;const ne=this._plugins;for(let Ae=0;Ae<ne.length;Ae++){const $e=ne[Ae];if($e.supports(T))return this._eventNameToPlugin.set(T,$e),$e}throw new Error(`No event manager plugin found for event ${T}`)}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(H),R.LFG(R.R0b))},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();class de{constructor(V){this._doc=V}addGlobalEventListener(V,T,Y){const ne=(0,d.q)().getGlobalEventTarget(this._doc,V);if(!ne)throw new Error(`Unsupported event target ${ne} for event ${T}`);return this.addEventListener(ne,T,Y)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let re=(()=>{class G{constructor(){this._stylesSet=new Set}addStyles(T){const Y=new Set;T.forEach(ne=>{this._stylesSet.has(ne)||(this._stylesSet.add(ne),Y.add(ne))}),this.onStylesAdded(Y)}onStylesAdded(T){}getAllStyles(){return Array.from(this._stylesSet)}}return G.\u0275fac=function(T){return new(T||G)},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})(),ve=(()=>{class G extends re{constructor(T){super(),this._doc=T,this._hostNodes=new Map,this._hostNodes.set(T.head,[])}_addStylesToHost(T,Y,ne){T.forEach(Ae=>{const $e=this._doc.createElement("style");$e.textContent=Ae,ne.push(Y.appendChild($e))})}addHost(T){const Y=[];this._addStylesToHost(this._stylesSet,T,Y),this._hostNodes.set(T,Y)}removeHost(T){const Y=this._hostNodes.get(T);Y&&Y.forEach(ze),this._hostNodes.delete(T)}onStylesAdded(T){this._hostNodes.forEach((Y,ne)=>{this._addStylesToHost(T,ne,Y)})}ngOnDestroy(){this._hostNodes.forEach(T=>T.forEach(ze))}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(d.K0))},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();function ze(G){(0,d.q)().remove(G)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ct={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Dt=/%COMP%/g;function Qe(G,V,T){for(let Y=0;Y<V.length;Y++){let ne=V[Y];Array.isArray(ne)?Qe(G,ne,T):(ne=ne.replace(Dt,G),T.push(ne))}return T}function ke(G){return V=>{if("__ngUnwrap__"===V)return G;!1===G(V)&&(V.preventDefault(),V.returnValue=!1)}}let Ee=(()=>{class G{constructor(T,Y,ne){this.eventManager=T,this.sharedStylesHost=Y,this.appId=ne,this.rendererByCompId=new Map,this.defaultRenderer=new hn(T)}createRenderer(T,Y){if(!T||!Y)return this.defaultRenderer;switch(Y.encapsulation){case R.ifc.Emulated:{let ne=this.rendererByCompId.get(Y.id);return ne||(ne=new ye(this.eventManager,this.sharedStylesHost,Y,this.appId),this.rendererByCompId.set(Y.id,ne)),ne.applyToHost(T),ne}case 1:case R.ifc.ShadowDom:return new we(this.eventManager,this.sharedStylesHost,T,Y);default:if(!this.rendererByCompId.has(Y.id)){const ne=Qe(Y.id,Y.styles,[]);this.sharedStylesHost.addStyles(ne),this.rendererByCompId.set(Y.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(Q),R.LFG(ve),R.LFG(R.AFp))},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();class hn{constructor(V){this.eventManager=V,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(V,T){return T?document.createElementNS(ct[T]||T,V):document.createElement(V)}createComment(V){return document.createComment(V)}createText(V){return document.createTextNode(V)}appendChild(V,T){(Ye(V)?V.content:V).appendChild(T)}insertBefore(V,T,Y){V&&(Ye(V)?V.content:V).insertBefore(T,Y)}removeChild(V,T){V&&V.removeChild(T)}selectRootElement(V,T){let Y="string"==typeof V?document.querySelector(V):V;if(!Y)throw new Error(`The selector "${V}" did not match any elements`);return T||(Y.textContent=""),Y}parentNode(V){return V.parentNode}nextSibling(V){return V.nextSibling}setAttribute(V,T,Y,ne){if(ne){T=ne+":"+T;const Ae=ct[ne];Ae?V.setAttributeNS(Ae,T,Y):V.setAttribute(T,Y)}else V.setAttribute(T,Y)}removeAttribute(V,T,Y){if(Y){const ne=ct[Y];ne?V.removeAttributeNS(ne,T):V.removeAttribute(`${Y}:${T}`)}else V.removeAttribute(T)}addClass(V,T){V.classList.add(T)}removeClass(V,T){V.classList.remove(T)}setStyle(V,T,Y,ne){ne&(R.JOm.DashCase|R.JOm.Important)?V.style.setProperty(T,Y,ne&R.JOm.Important?"important":""):V.style[T]=Y}removeStyle(V,T,Y){Y&R.JOm.DashCase?V.style.removeProperty(T):V.style[T]=""}setProperty(V,T,Y){V[T]=Y}setValue(V,T){V.nodeValue=T}listen(V,T,Y){return"string"==typeof V?this.eventManager.addGlobalEventListener(V,T,ke(Y)):this.eventManager.addEventListener(V,T,ke(Y))}}function Ye(G){return"TEMPLATE"===G.tagName&&void 0!==G.content}class ye extends hn{constructor(V,T,Y,ne){super(V),this.component=Y;const Ae=Qe(ne+"-"+Y.id,Y.styles,[]);T.addStyles(Ae),this.contentAttr=function ut(G){return"_ngcontent-%COMP%".replace(Dt,G)}(ne+"-"+Y.id),this.hostAttr=function Ce(G){return"_nghost-%COMP%".replace(Dt,G)}(ne+"-"+Y.id)}applyToHost(V){super.setAttribute(V,this.hostAttr,"")}createElement(V,T){const Y=super.createElement(V,T);return super.setAttribute(Y,this.contentAttr,""),Y}}class we extends hn{constructor(V,T,Y,ne){super(V),this.sharedStylesHost=T,this.hostEl=Y,this.shadowRoot=Y.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Ae=Qe(ne.id,ne.styles,[]);for(let $e=0;$e<Ae.length;$e++){const Se=document.createElement("style");Se.textContent=Ae[$e],this.shadowRoot.appendChild(Se)}}nodeOrShadowRoot(V){return V===this.hostEl?this.shadowRoot:V}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(V,T){return super.appendChild(this.nodeOrShadowRoot(V),T)}insertBefore(V,T,Y){return super.insertBefore(this.nodeOrShadowRoot(V),T,Y)}removeChild(V,T){return super.removeChild(this.nodeOrShadowRoot(V),T)}parentNode(V){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(V)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wt=(()=>{class G extends de{constructor(T){super(T)}supports(T){return!0}addEventListener(T,Y,ne){return T.addEventListener(Y,ne,!1),()=>this.removeEventListener(T,Y,ne)}removeEventListener(T,Y,ne){return T.removeEventListener(Y,ne)}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(d.K0))},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const zt=["alt","control","meta","shift"],it={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Xt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},bt={alt:G=>G.altKey,control:G=>G.ctrlKey,meta:G=>G.metaKey,shift:G=>G.shiftKey};let kt=(()=>{class G extends de{constructor(T){super(T)}supports(T){return null!=G.parseEventName(T)}addEventListener(T,Y,ne){const Ae=G.parseEventName(Y),$e=G.eventCallback(Ae.fullKey,ne,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,d.q)().onAndCancel(T,Ae.domEventName,$e))}static parseEventName(T){const Y=T.toLowerCase().split("."),ne=Y.shift();if(0===Y.length||"keydown"!==ne&&"keyup"!==ne)return null;const Ae=G._normalizeKey(Y.pop());let $e="";if(zt.forEach(Ft=>{const mn=Y.indexOf(Ft);mn>-1&&(Y.splice(mn,1),$e+=Ft+".")}),$e+=Ae,0!=Y.length||0===Ae.length)return null;const Se={};return Se.domEventName=ne,Se.fullKey=$e,Se}static getEventFullKey(T){let Y="",ne=function lr(G){let V=G.key;if(null==V){if(V=G.keyIdentifier,null==V)return"Unidentified";V.startsWith("U+")&&(V=String.fromCharCode(parseInt(V.substring(2),16)),3===G.location&&Xt.hasOwnProperty(V)&&(V=Xt[V]))}return it[V]||V}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(T);return ne=ne.toLowerCase()," "===ne?ne="space":"."===ne&&(ne="dot"),zt.forEach(Ae=>{Ae!=ne&&(0,bt[Ae])(T)&&(Y+=Ae+".")}),Y+=ne,Y}static eventCallback(T,Y,ne){return Ae=>{G.getEventFullKey(Ae)===T&&ne.runGuarded(()=>Y(Ae))}}static _normalizeKey(T){return"esc"===T?"escape":T}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(d.K0))},G.\u0275prov=R.Yz7({token:G,factory:G.\u0275fac}),G})();const _e=(0,R.eFA)(R._c5,"browser",[{provide:R.Lbi,useValue:d.bD},{provide:R.g9A,useValue:function an(){ie.makeCurrent()},multi:!0},{provide:d.K0,useFactory:function Vn(){return(0,R.RDi)(document),document},deps:[]}]),dt=new R.OlP(""),Ze=[{provide:R.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class L{addToWindow(V){R.dqk.getAngularTestability=(Y,ne=!0)=>{const Ae=V.findTestabilityInTree(Y,ne);if(null==Ae)throw new Error("Could not find testability for element.");return Ae},R.dqk.getAllAngularTestabilities=()=>V.getAllTestabilities(),R.dqk.getAllAngularRootElements=()=>V.getAllRootElements(),R.dqk.frameworkStabilizers||(R.dqk.frameworkStabilizers=[]),R.dqk.frameworkStabilizers.push(Y=>{const ne=R.dqk.getAllAngularTestabilities();let Ae=ne.length,$e=!1;const Se=function(Ft){$e=$e||Ft,Ae--,0==Ae&&Y($e)};ne.forEach(function(Ft){Ft.whenStable(Se)})})}findTestabilityInTree(V,T,Y){return null==T?null:V.getTestability(T)??(Y?(0,d.q)().isShadowRoot(T)?this.findTestabilityInTree(V,T.host,!0):this.findTestabilityInTree(V,T.parentElement,!0):null)}},deps:[]},{provide:R.lri,useClass:R.dDg,deps:[R.R0b,R.eoX,R.rWj]},{provide:R.dDg,useClass:R.dDg,deps:[R.R0b,R.eoX,R.rWj]}],pt=[{provide:R.zSh,useValue:"root"},{provide:R.qLn,useFactory:function pn(){return new R.qLn},deps:[]},{provide:H,useClass:wt,multi:!0,deps:[d.K0,R.R0b,R.Lbi]},{provide:H,useClass:kt,multi:!0,deps:[d.K0]},{provide:Ee,useClass:Ee,deps:[Q,ve,R.AFp]},{provide:R.FYo,useExisting:Ee},{provide:re,useExisting:ve},{provide:ve,useClass:ve,deps:[d.K0]},{provide:Q,useClass:Q,deps:[H,R.R0b]},{provide:d.JF,useClass:W,deps:[]},[]];let cr=(()=>{class G{constructor(T){}static withServerTransition(T){return{ngModule:G,providers:[{provide:R.AFp,useValue:T.appId},{provide:$,useExisting:R.AFp},O]}}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(dt,12))},G.\u0275mod=R.oAB({type:G}),G.\u0275inj=R.cJS({providers:[...pt,...Ze],imports:[d.ez,R.hGG]}),G})(),F=(()=>{class G{constructor(T){this._doc=T}getTitle(){return this._doc.title}setTitle(T){this._doc.title=T||""}}return G.\u0275fac=function(T){return new(T||G)(R.LFG(d.K0))},G.\u0275prov=R.Yz7({token:G,factory:function(T){let Y=null;return Y=T?new T:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function se(){return new F((0,R.LFG)(d.K0))}(),Y},providedIn:"root"}),G})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,5418:(xe,ae,I)=>{I.d(ae,{gz:()=>nr,rH:()=>ds,yS:()=>fs,Bz:()=>Iu,lC:()=>vt});var d=I(4650);const le=(()=>{function l(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return l.prototype=Object.create(Error.prototype),l})();var ie=I(2866),J=I(6688),U=I(826),oe=I(9054),j=I(3009);const $={};function N(...l){let u=null,a=null;return(0,ie.K)(l[l.length-1])&&(a=l.pop()),"function"==typeof l[l.length-1]&&(u=l.pop()),1===l.length&&(0,J.k)(l[0])&&(l=l[0]),(0,j.n)(l,a).lift(new O(u))}class O{constructor(u){this.resultSelector=u}call(u,a){return a.subscribe(new L(u,this.resultSelector))}}class L extends U.L{constructor(u,a){super(u),this.resultSelector=a,this.active=0,this.values=[],this.observables=[]}_next(u){this.values.push($),this.observables.push(u)}_complete(){const u=this.observables,a=u.length;if(0===a)this.destination.complete();else{this.active=a,this.toRespond=a;for(let h=0;h<a;h++){const m=u[h];this.add((0,oe.D)(this,m,m,h))}}}notifyComplete(u){0==(this.active-=1)&&this.destination.complete()}notifyNext(u,a,h,m,E){const A=this.values,X=this.toRespond?A[h]===$?--this.toRespond:this.toRespond:0;A[h]=a,0===X&&(this.resultSelector?this._tryResultSelector(A):this.destination.next(A.slice()))}_tryResultSelector(u){let a;try{a=this.resultSelector.apply(this,u)}catch(h){return void this.destination.error(h)}this.destination.next(a)}}var W=I(5254),H=I(1086),Q=I(591),de=I(1221),re=I(8514),ve=I(4843),ze=I(1737),ct=I(6498),Dt=I(8896),Je=I(1762),We=I(5529),Pt=I(6895),Jt=I(2198),ut=I(2986),Ce=I(3489);function Qe(l=null){return u=>u.lift(new ke(l))}class ke{constructor(u){this.defaultValue=u}call(u,a){return a.subscribe(new tt(u,this.defaultValue))}}class tt extends Ce.L{constructor(u,a){super(u),this.defaultValue=a,this.isEmpty=!0}_next(u){this.isEmpty=!1,this.destination.next(u)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function Ee(l=Re){return u=>u.lift(new hn(l))}class hn{constructor(u){this.errorFactory=u}call(u,a){return a.subscribe(new Fn(u,this.errorFactory))}}class Fn extends Ce.L{constructor(u,a){super(u),this.errorFactory=a,this.hasValue=!1}_next(u){this.hasValue=!0,this.destination.next(u)}_complete(){if(this.hasValue)return this.destination.complete();{let u;try{u=this.errorFactory()}catch(a){u=a}this.destination.error(u)}}}function Re(){return new le}var Ye=I(5379);function ye(l,u){const a=arguments.length>=2;return h=>h.pipe(l?(0,Jt.h)((m,E)=>l(m,E,h)):Ye.y,(0,ut.q)(1),a?Qe(u):Ee(()=>new le))}function we(l,u){let a=!1;return arguments.length>=2&&(a=!0),function(m){return m.lift(new wt(l,u,a))}}class wt{constructor(u,a,h=!1){this.accumulator=u,this.seed=a,this.hasSeed=h}call(u,a){return a.subscribe(new zt(u,this.accumulator,this.seed,this.hasSeed))}}class zt extends Ce.L{constructor(u,a,h,m){super(u),this.accumulator=a,this._seed=h,this.hasSeed=m,this.index=0}get seed(){return this._seed}set seed(u){this.hasSeed=!0,this._seed=u}_next(u){if(this.hasSeed)return this._tryNext(u);this.seed=u,this.destination.next(u)}_tryNext(u){const a=this.index++;let h;try{h=this.accumulator(this.seed,u,a)}catch(m){this.destination.error(m)}this.seed=h,this.destination.next(h)}}var It=I(4231);function it(l){return function(a){return 0===l?(0,Dt.c)():a.lift(new Xt(l))}}class Xt{constructor(u){if(this.total=u,this.total<0)throw new It.W}call(u,a){return a.subscribe(new bt(u,this.total))}}class bt extends Ce.L{constructor(u,a){super(u),this.total=a,this.ring=new Array,this.count=0}_next(u){const a=this.ring,h=this.total,m=this.count++;a.length<h?a.push(u):a[m%h]=u}_complete(){const u=this.destination;let a=this.count;if(a>0){const h=this.count>=this.total?this.total:this.count,m=this.ring;for(let E=0;E<h;E++){const A=a++%h;u.next(m[A])}}u.complete()}}function kt(l,u){const a=arguments.length>=2;return h=>h.pipe(l?(0,Jt.h)((m,E)=>l(m,E,h)):Ye.y,it(1),a?Qe(u):Ee(()=>new le))}class $n{constructor(u,a){this.predicate=u,this.inclusive=a}call(u,a){return a.subscribe(new Ir(u,this.predicate,this.inclusive))}}class Ir extends Ce.L{constructor(u,a,h){super(u),this.predicate=a,this.inclusive=h,this.index=0}_next(u){const a=this.destination;let h;try{h=this.predicate(u,this.index++)}catch(m){return void a.error(m)}this.nextOrComplete(u,h)}nextOrComplete(u,a){const h=this.destination;Boolean(a)?h.next(u):(this.inclusive&&h.next(u),h.complete())}}class an{constructor(u){this.value=u}call(u,a){return a.subscribe(new pn(u,this.value))}}class pn extends Ce.L{constructor(u,a){super(u),this.value=a}_next(u){this.destination.next(this.value)}}var Vn=I(2654);function bn(l){return u=>u.lift(new _e(l))}class _e{constructor(u){this.callback=u}call(u,a){return a.subscribe(new dt(u,this.callback))}}class dt extends Ce.L{constructor(u,a){super(u),this.add(new Vn.w(a))}}var Ze=I(4850),pt=I(7545),cr=I(1059),Wt=I(1709),Ht=I(1406),Xe=I(2994),se=I(7221),F=I(4327),x=I(9146),K=I(1481);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ee="primary";class Le{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Ve(l){return new Le(l)}function be(l,u,a){const h=a.path.split("/");if(h.length>l.length||"full"===a.pathMatch&&(u.hasChildren()||h.length<l.length))return null;const m={};for(let E=0;E<h.length;E++){const A=h[E],P=l[E];if(A.startsWith(":"))m[A.substring(1)]=P;else if(A!==P.path)return null}return{consumed:l.slice(0,h.length),posParams:m}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function at(l,u){const a=l?Object.keys(l):void 0,h=u?Object.keys(u):void 0;if(!a||!h||a.length!=h.length)return!1;let m;for(let E=0;E<a.length;E++)if(m=a[E],!nt(l[m],u[m]))return!1;return!0}function nt(l,u){if(Array.isArray(l)&&Array.isArray(u)){if(l.length!==u.length)return!1;const a=[...l].sort(),h=[...u].sort();return a.every((m,E)=>h[E]===m)}return l===u}function en(l){return Array.prototype.concat.apply([],l)}function Pe(l){return l.length>0?l[l.length-1]:null}function Ue(l,u){for(const a in l)l.hasOwnProperty(a)&&u(l[a],a)}function Ot(l){return(0,d.CqO)(l)?l:(0,d.QGY)(l)?(0,W.D)(Promise.resolve(l)):(0,H.of)(l)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const gn={exact:function dr(l,u,a){if(!et(l.segments,u.segments)||!Nt(l.segments,u.segments,a)||l.numberOfChildren!==u.numberOfChildren)return!1;for(const h in u.children)if(!l.children[h]||!dr(l.children[h],u.children[h],a))return!1;return!0},subset:rt},tn={exact:function kn(l,u){return at(l,u)},subset:function Jn(l,u){return Object.keys(u).length<=Object.keys(l).length&&Object.keys(u).every(a=>nt(l[a],u[a]))},ignored:()=>!0};function cn(l,u,a){return gn[a.paths](l.root,u.root,a.matrixParams)&&tn[a.queryParams](l.queryParams,u.queryParams)&&!("exact"===a.fragment&&l.fragment!==u.fragment)}function rt(l,u,a){return Rt(l,u,u.segments,a)}function Rt(l,u,a,h){if(l.segments.length>a.length){const m=l.segments.slice(0,a.length);return!(!et(m,a)||u.hasChildren()||!Nt(m,a,h))}if(l.segments.length===a.length){if(!et(l.segments,a)||!Nt(l.segments,a,h))return!1;for(const m in u.children)if(!l.children[m]||!rt(l.children[m],u.children[m],h))return!1;return!0}{const m=a.slice(0,l.segments.length),E=a.slice(l.segments.length);return!!(et(l.segments,m)&&Nt(l.segments,m,h)&&l.children[ee])&&Rt(l.children[ee],u,E,h)}}function Nt(l,u,a){return u.every((h,m)=>tn[a](l[m].parameters,h.parameters))}class St{constructor(u,a,h){this.root=u,this.queryParams=a,this.fragment=h}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ve(this.queryParams)),this._queryParamMap}toString(){return Y.serialize(this)}}class Oe{constructor(u,a){this.segments=u,this.children=a,this.parent=null,Ue(a,(h,m)=>h.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ne(this)}}class pe{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Ve(this.parameters)),this._parameterMap}toString(){return Ut(this)}}function et(l,u){return l.length===u.length&&l.every((a,h)=>a.path===u[h].path)}let V=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=d.Yz7({token:l,factory:function(){return new T},providedIn:"root"}),l})();class T{parse(u){const a=new fr(u);return new St(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${Ae(u.root,!0)}`,h=function jn(l){const u=Object.keys(l).map(a=>{const h=l[a];return Array.isArray(h)?h.map(m=>`${Se(a)}=${Se(m)}`).join("&"):`${Se(a)}=${Se(h)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);return`${a}${h}${"string"==typeof u.fragment?`#${function Ft(l){return encodeURI(l)}(u.fragment)}`:""}`}}const Y=new T;function ne(l){return l.segments.map(u=>Ut(u)).join("/")}function Ae(l,u){if(!l.hasChildren())return ne(l);if(u){const a=l.children[ee]?Ae(l.children[ee],!1):"",h=[];return Ue(l.children,(m,E)=>{E!==ee&&h.push(`${E}:${Ae(m,!1)}`)}),h.length>0?`${a}(${h.join("//")})`:a}{const a=function G(l,u){let a=[];return Ue(l.children,(h,m)=>{m===ee&&(a=a.concat(u(h,m)))}),Ue(l.children,(h,m)=>{m!==ee&&(a=a.concat(u(h,m)))}),a}(l,(h,m)=>m===ee?[Ae(l.children[ee],!1)]:[`${m}:${Ae(h,!1)}`]);return 1===Object.keys(l.children).length&&null!=l.children[ee]?`${ne(l)}/${a[0]}`:`${ne(l)}/(${a.join("//")})`}}function $e(l){return encodeURIComponent(l).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Se(l){return $e(l).replace(/%3B/gi,";")}function mn(l){return $e(l).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Bn(l){return decodeURIComponent(l)}function Mn(l){return Bn(l.replace(/\+/g,"%20"))}function Ut(l){return`${mn(l.path)}${function Xn(l){return Object.keys(l).map(u=>`;${mn(u)}=${mn(l[u])}`).join("")}(l.parameters)}`}const dn=/^[^\/()?;=#]+/;function Dn(l){const u=l.match(dn);return u?u[0]:""}const $r=/^[^=?&#]+/,Gr=/^[^&#]+/;class fr{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Oe([],{}):new Oe([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let h={};return this.peekStartsWith("(")&&(h=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(h[ee]=new Oe(u,a)),h}parseSegment(){const u=Dn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new d.vHH(4009,!1);return this.capture(u),new pe(Bn(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=Dn(this.remaining);if(!a)return;this.capture(a);let h="";if(this.consumeOptional("=")){const m=Dn(this.remaining);m&&(h=m,this.capture(h))}u[Bn(a)]=Bn(h)}parseQueryParam(u){const a=function gt(l){const u=l.match($r);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let h="";if(this.consumeOptional("=")){const A=function Ao(l){const u=l.match(Gr);return u?u[0]:""}(this.remaining);A&&(h=A,this.capture(h))}const m=Mn(a),E=Mn(h);if(u.hasOwnProperty(m)){let A=u[m];Array.isArray(A)||(A=[A],u[m]=A),A.push(E)}else u[m]=E}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const h=Dn(this.remaining),m=this.remaining[h.length];if("/"!==m&&")"!==m&&";"!==m)throw new d.vHH(4010,!1);let E;h.indexOf(":")>-1?(E=h.slice(0,h.indexOf(":")),this.capture(E),this.capture(":")):u&&(E=ee);const A=this.parseChildren();a[E]=1===Object.keys(A).length?A[ee]:new Oe([],A),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new d.vHH(4011,!1)}}function Hn(l){return l.segments.length>0?new Oe([],{[ee]:l}):l}function In(l){const u={};for(const h of Object.keys(l.children)){const E=In(l.children[h]);(E.segments.length>0||E.hasChildren())&&(u[h]=E)}return function zr(l){if(1===l.numberOfChildren&&l.children[ee]){const u=l.children[ee];return new Oe(l.segments.concat(u.segments),u.children)}return l}(new Oe(l.segments,u))}function nn(l){return l instanceof St}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hr(l,u,a,h,m){if(0===a.length)return $t(u.root,u.root,u.root,h,m);const E=function so(l){if("string"==typeof l[0]&&1===l.length&&"/"===l[0])return new Zi(!0,0,l);let u=0,a=!1;const h=l.reduce((m,E,A)=>{if("object"==typeof E&&null!=E){if(E.outlets){const P={};return Ue(E.outlets,(X,ge)=>{P[ge]="string"==typeof X?X.split("/"):X}),[...m,{outlets:P}]}if(E.segmentPath)return[...m,E.segmentPath]}return"string"!=typeof E?[...m,E]:0===A?(E.split("/").forEach((P,X)=>{0==X&&"."===P||(0==X&&""===P?a=!0:".."===P?u++:""!=P&&m.push(P))}),m):[...m,E]},[]);return new Zi(a,u,h)}(a);return E.toRoot()?$t(u.root,u.root,new Oe([],{}),h,m):function A(X){const ge=function ao(l,u,a,h){if(l.isAbsolute)return new pr(u.root,!0,0);if(-1===h)return new pr(a,a===u.root,0);return function oi(l,u,a){let h=l,m=u,E=a;for(;E>m;){if(E-=m,h=h.parent,!h)throw new d.vHH(4005,!1);m=h.segments.length}return new pr(h,!1,m-E)}(a,h+(Sn(l.commands[0])?0:1),l.numberOfDoubleDots)}(E,u,l.snapshot?._urlSegment,X),ot=ge.processChildren?Ar(ge.segmentGroup,ge.index,E.commands):Sr(ge.segmentGroup,ge.index,E.commands);return $t(u.root,ge.segmentGroup,ot,h,m)}(l.snapshot?._lastPathIndex)}function Sn(l){return"object"==typeof l&&null!=l&&!l.outlets&&!l.segmentPath}function _n(l){return"object"==typeof l&&null!=l&&l.outlets}function $t(l,u,a,h,m){let A,E={};h&&Ue(h,(X,ge)=>{E[ge]=Array.isArray(X)?X.map(ot=>`${ot}`):`${X}`}),A=l===u?a:To(l,u,a);const P=Hn(In(A));return new St(P,E,m)}function To(l,u,a){const h={};return Ue(l.children,(m,E)=>{h[E]=m===u?a:To(m,u,a)}),new Oe(l.segments,h)}class Zi{constructor(u,a,h){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=h,u&&h.length>0&&Sn(h[0]))throw new d.vHH(4003,!1);const m=h.find(_n);if(m&&m!==Pe(h))throw new d.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class pr{constructor(u,a,h){this.segmentGroup=u,this.processChildren=a,this.index=h}}function Sr(l,u,a){if(l||(l=new Oe([],{})),0===l.segments.length&&l.hasChildren())return Ar(l,u,a);const h=function ii(l,u,a){let h=0,m=u;const E={match:!1,pathIndex:0,commandIndex:0};for(;m<l.segments.length;){if(h>=a.length)return E;const A=l.segments[m],P=a[h];if(_n(P))break;const X=`${P}`,ge=h<a.length-1?a[h+1]:null;if(m>0&&void 0===X)break;if(X&&ge&&"object"==typeof ge&&void 0===ge.outlets){if(!uo(X,ge,A))return E;h+=2}else{if(!uo(X,{},A))return E;h++}m++}return{match:!0,pathIndex:m,commandIndex:h}}(l,u,a),m=a.slice(h.commandIndex);if(h.match&&h.pathIndex<l.segments.length){const E=new Oe(l.segments.slice(0,h.pathIndex),{});return E.children[ee]=new Oe(l.segments.slice(h.pathIndex),l.children),Ar(E,0,m)}return h.match&&0===m.length?new Oe(l.segments,{}):h.match&&!l.hasChildren()?Wr(l,u,a):h.match?Ar(l,0,m):Wr(l,u,a)}function Ar(l,u,a){if(0===a.length)return new Oe(l.segments,{});{const h=function yn(l){return _n(l[0])?l[0].outlets:{[ee]:l}}(a),m={};return Ue(h,(E,A)=>{"string"==typeof E&&(E=[E]),null!==E&&(m[A]=Sr(l.children[A],u,E))}),Ue(l.children,(E,A)=>{void 0===h[A]&&(m[A]=E)}),new Oe(l.segments,m)}}function Wr(l,u,a){const h=l.segments.slice(0,u);let m=0;for(;m<a.length;){const E=a[m];if(_n(E)){const X=xo(E.outlets);return new Oe(h,X)}if(0===m&&Sn(a[0])){h.push(new pe(l.segments[u].path,si(a[0]))),m++;continue}const A=_n(E)?E.outlets[ee]:`${E}`,P=m<a.length-1?a[m+1]:null;A&&P&&Sn(P)?(h.push(new pe(A,si(P))),m+=2):(h.push(new pe(A,{})),m++)}return new Oe(h,{})}function xo(l){const u={};return Ue(l,(a,h)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[h]=Wr(new Oe([],{}),0,a))}),u}function si(l){const u={};return Ue(l,(a,h)=>u[h]=`${a}`),u}function uo(l,u,a){return l==a.path&&at(u,a.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Un{constructor(u,a){this.id=u,this.url=a}}class Yr extends Un{constructor(u,a,h="imperative",m=null){super(u,a),this.type=0,this.navigationTrigger=h,this.restoredState=m}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class er extends Un{constructor(u,a,h){super(u,a),this.urlAfterRedirects=h,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Gn extends Un{constructor(u,a,h,m){super(u,a),this.reason=h,this.code=m,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class gr extends Un{constructor(u,a,h,m){super(u,a),this.error=h,this.target=m,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class ai extends Un{constructor(u,a,h,m){super(u,a),this.urlAfterRedirects=h,this.state=m,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Oo extends Un{constructor(u,a,h,m){super(u,a),this.urlAfterRedirects=h,this.state=m,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ui extends Un{constructor(u,a,h,m,E){super(u,a),this.urlAfterRedirects=h,this.state=m,this.shouldActivate=E,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class An extends Un{constructor(u,a,h,m){super(u,a),this.urlAfterRedirects=h,this.state=m,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ro extends Un{constructor(u,a,h,m){super(u,a),this.urlAfterRedirects=h,this.state=m,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class tr{constructor(u){this.route=u,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Kr{constructor(u){this.route=u,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class qr{constructor(u){this.snapshot=u,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lo{constructor(u){this.snapshot=u,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Tr{constructor(u){this.snapshot=u,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class mr{constructor(u){this.snapshot=u,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class co{constructor(u,a,h){this.routerEvent=u,this.position=a,this.anchor=h,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class fo{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Gt(u,this._root);return a?a.children.map(h=>h.value):[]}firstChild(u){const a=Gt(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=yr(u,this._root);return a.length<2?[]:a[a.length-2].children.map(m=>m.value).filter(m=>m!==u)}pathFromRoot(u){return yr(u,this._root).map(a=>a.value)}}function Gt(l,u){if(l===u.value)return u;for(const a of u.children){const h=Gt(l,a);if(h)return h}return null}function yr(l,u){if(l===u.value)return[u];for(const a of u.children){const h=yr(l,a);if(h.length)return h.unshift(u),h}return[]}class Tn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function xn(l){const u={};return l&&l.children.forEach(a=>u[a.value.outlet]=a),u
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class ho extends fo{constructor(u,a){super(u),this.snapshot=a,rr(this,u)}toString(){return this.snapshot.toString()}}function Ji(l,u){const a=function At(l,u){const A=new Tt([],{},{},"",{},ee,u,null,l.root,-1,{});return new Zr("",new Tn(A,[]))}(l,u),h=new Q.X([new pe("",{})]),m=new Q.X({}),E=new Q.X({}),A=new Q.X({}),P=new Q.X(""),X=new nr(h,m,A,P,E,ee,u,a.root);return X.snapshot=a.root,new ho(new Tn(X,[]),a)}class nr{constructor(u,a,h,m,E,A,P,X){this.url=u,this.params=a,this.queryParams=h,this.fragment=m,this.data=E,this.outlet=A,this.component=P,this._futureSnapshot=X}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Ze.U)(u=>Ve(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Ze.U)(u=>Ve(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function No(l,u="emptyOnly"){const a=l.pathFromRoot;let h=0;if("always"!==u)for(h=a.length-1;h>=1;){const m=a[h],E=a[h-1];if(m.routeConfig&&""===m.routeConfig.path)h--;else{if(E.component)break;h--}}return function vr(l){return l.reduce((u,a)=>({params:{...u.params,...a.params},data:{...u.data,...a.data},resolve:{...a.data,...u.resolve,...a.routeConfig?.data,...a._resolvedData}}),{params:{},data:{},resolve:{}})}(a.slice(h))}class Tt{constructor(u,a,h,m,E,A,P,X,ge,ot,me,ht){this.url=u,this.params=a,this.queryParams=h,this.fragment=m,this.data=E,this.outlet=A,this.component=P,this.routeConfig=X,this._urlSegment=ge,this._lastPathIndex=ot,this._correctedLastPathIndex=ht??ot,this._resolve=me}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Ve(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ve(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(h=>h.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Zr extends fo{constructor(u,a){super(a),this.url=u,rr(this,a)}toString(){return or(this._root)}}function rr(l,u){u.value._routerState=l,u.children.forEach(a=>rr(l,a))}function or(l){const u=l.children.length>0?` { ${l.children.map(or).join(", ")} } `:"";return`${l.value}${u}`}function Kt(l){if(l.snapshot){const u=l.snapshot,a=l._futureSnapshot;l.snapshot=a,at(u.queryParams,a.queryParams)||l.queryParams.next(a.queryParams),u.fragment!==a.fragment&&l.fragment.next(a.fragment),at(u.params,a.params)||l.params.next(a.params),function Ne(l,u){if(l.length!==u.length)return!1;for(let a=0;a<l.length;++a)if(!at(l[a],u[a]))return!1;return!0}(u.url,a.url)||l.url.next(a.url),at(u.data,a.data)||l.data.next(a.data)}else l.snapshot=l._futureSnapshot,l.data.next(l._futureSnapshot.data)}function y(l,u){const a=at(l.params,u.params)&&function He(l,u){return et(l,u)&&l.every((a,h)=>at(a.parameters,u[h].parameters))}(l.url,u.url);return a&&!(!l.parent!=!u.parent)&&(!l.parent||y(l.parent,u.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function v(l,u,a){if(a&&l.shouldReuseRoute(u.value,a.value.snapshot)){const h=a.value;h._futureSnapshot=u.value;const m=function M(l,u,a){return u.children.map(h=>{for(const m of a.children)if(l.shouldReuseRoute(h.value,m.value.snapshot))return v(l,h,m);return v(l,h)})}(l,u,a);return new Tn(h,m)}{if(l.shouldAttach(u.value)){const E=l.retrieve(u.value);if(null!==E){const A=E.route;return A.value._futureSnapshot=u.value,A.children=u.children.map(P=>v(l,P)),A}}const h=function B(l){return new nr(new Q.X(l.url),new Q.X(l.params),new Q.X(l.queryParams),new Q.X(l.fragment),new Q.X(l.data),l.outlet,l.component,l)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(u.value),m=u.children.map(E=>v(l,E));return new Tn(h,m)}}const te="ngNavigationCancelingError";function q(l,u){const{redirectTo:a,navigationBehaviorOptions:h}=nn(u)?{redirectTo:u,navigationBehaviorOptions:void 0}:u,m=Ie(!1,0,u);return m.url=a,m.navigationBehaviorOptions=h,m}function Ie(l,u,a){const h=new Error("NavigationCancelingError: "+(l||""));return h[te]=!0,h.cancellationCode=u,a&&(h.url=a),h}function mt(l){return ft(l)&&nn(l.url)}function ft(l){return l&&l[te]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yt{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new qe,this.attachRef=null}}let qe=(()=>{class l{constructor(){this.contexts=new Map}onChildOutletCreated(a,h){const m=this.getOrCreateContext(a);m.outlet=h,this.contexts.set(a,m)}onChildOutletDestroyed(a){const h=this.getContext(a);h&&(h.outlet=null,h.attachRef=null)}onOutletDeactivated(){const a=this.contexts;return this.contexts=new Map,a}onOutletReAttached(a){this.contexts=a}getOrCreateContext(a){let h=this.getContext(a);return h||(h=new yt,this.contexts.set(a,h)),h}getContext(a){return this.contexts.get(a)||null}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Lt=!1;let vt=(()=>{class l{constructor(a,h,m,E,A){this.parentContexts=a,this.location=h,this.changeDetector=E,this.environmentInjector=A,this.activated=null,this._activatedRoute=null,this.activateEvents=new d.vpe,this.deactivateEvents=new d.vpe,this.attachEvents=new d.vpe,this.detachEvents=new d.vpe,this.name=m||ee,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new d.vHH(4012,Lt);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new d.vHH(4012,Lt);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new d.vHH(4012,Lt);this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,h){this.activated=a,this._activatedRoute=h,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,h){if(this.isActivated)throw new d.vHH(4013,Lt);this._activatedRoute=a;const m=this.location,A=a._futureSnapshot.component,P=this.parentContexts.getOrCreateContext(this.name).children,X=new rn(a,P,m.injector);if(h&&function ce(l){return!!l.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(h)){const ge=h.resolveComponentFactory(A);this.activated=m.createComponent(ge,m.length,X)}else this.activated=m.createComponent(A,{index:m.length,injector:X,environmentInjector:h??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return l.\u0275fac=function(a){return new(a||l)(d.Y36(qe),d.Y36(d.s_b),d.$8M("name"),d.Y36(d.sBO),d.Y36(d.lqb))},l.\u0275dir=d.lG2({type:l,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),l})();class rn{constructor(u,a,h){this.route=u,this.childContexts=a,this.parent=h}get(u,a){return u===nr?this.route:u===qe?this.childContexts:this.parent.get(u,a)}}let Ge=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=d.Xpm({type:l,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,h){1&a&&d._UZ(0,"router-outlet")},dependencies:[vt],encapsulation:2}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Dr(l,u){return l.providers&&!l._injector&&(l._injector=(0,d.MMx)(l.providers,u,`Route: ${l.path}`)),l._injector??u}function D(l){const u=l.children&&l.children.map(D),a=u?{...l,children:u}:{...l};return!a.component&&!a.loadComponent&&(u||a.loadChildren)&&a.outlet&&a.outlet!==ee&&(a.component=Ge),a}function g(l){return l.outlet||ee}function p(l,u){const a=l.filter(h=>g(h)===u);return a.push(...l.filter(h=>g(h)!==u)),a}function b(l){if(!l)return null;if(l.routeConfig?._injector)return l.routeConfig._injector;for(let u=l.parent;u;u=u.parent){const a=u.routeConfig;if(a?._loadedInjector)return a._loadedInjector;if(a?._injector)return a._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Te{constructor(u,a,h,m){this.routeReuseStrategy=u,this.futureState=a,this.currState=h,this.forwardEvent=m}activate(u){const a=this.futureState._root,h=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,h,u),Kt(this.futureState.root),this.activateChildRoutes(a,h,u)}deactivateChildRoutes(u,a,h){const m=xn(a);u.children.forEach(E=>{const A=E.value.outlet;this.deactivateRoutes(E,m[A],h),delete m[A]}),Ue(m,(E,A)=>{this.deactivateRouteAndItsChildren(E,h)})}deactivateRoutes(u,a,h){const m=u.value,E=a?a.value:null;if(m===E)if(m.component){const A=h.getContext(m.outlet);A&&this.deactivateChildRoutes(u,a,A.children)}else this.deactivateChildRoutes(u,a,h);else E&&this.deactivateRouteAndItsChildren(a,h)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const h=a.getContext(u.value.outlet),m=h&&u.value.component?h.children:a,E=xn(u);for(const A of Object.keys(E))this.deactivateRouteAndItsChildren(E[A],m);if(h&&h.outlet){const A=h.outlet.detach(),P=h.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:A,route:u,contexts:P})}}deactivateRouteAndOutlet(u,a){const h=a.getContext(u.value.outlet),m=h&&u.value.component?h.children:a,E=xn(u);for(const A of Object.keys(E))this.deactivateRouteAndItsChildren(E[A],m);h&&h.outlet&&(h.outlet.deactivate(),h.children.onOutletDeactivated(),h.attachRef=null,h.resolver=null,h.route=null)}activateChildRoutes(u,a,h){const m=xn(a);u.children.forEach(E=>{this.activateRoutes(E,m[E.value.outlet],h),this.forwardEvent(new mr(E.value.snapshot))}),u.children.length&&this.forwardEvent(new lo(u.value.snapshot))}activateRoutes(u,a,h){const m=u.value,E=a?a.value:null;if(Kt(m),m===E)if(m.component){const A=h.getOrCreateContext(m.outlet);this.activateChildRoutes(u,a,A.children)}else this.activateChildRoutes(u,a,h);else if(m.component){const A=h.getOrCreateContext(m.outlet);if(this.routeReuseStrategy.shouldAttach(m.snapshot)){const P=this.routeReuseStrategy.retrieve(m.snapshot);this.routeReuseStrategy.store(m.snapshot,null),A.children.onOutletReAttached(P.contexts),A.attachRef=P.componentRef,A.route=P.route.value,A.outlet&&A.outlet.attach(P.componentRef,P.route.value),Kt(P.route.value),this.activateChildRoutes(u,null,A.children)}else{const P=b(m.snapshot),X=P?.get(d._Vd)??null;A.attachRef=null,A.route=m,A.resolver=X,A.injector=P,A.outlet&&A.outlet.activateWith(m,A.injector),this.activateChildRoutes(u,null,A.children)}}else this.activateChildRoutes(u,null,h)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ct{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class xt{constructor(u,a){this.component=u,this.route=a}}function Or(l,u,a){const h=l._root;return Jr(h,u?u._root:null,a,[h.value])}function zn(l,u,a){return(b(u)??a).get(l)}function Jr(l,u,a,h,m={canDeactivateChecks:[],canActivateChecks:[]}){const E=xn(u);return l.children.forEach(A=>{(function Po(l,u,a,h,m={canDeactivateChecks:[],canActivateChecks:[]}){const E=l.value,A=u?u.value:null,P=a?a.getContext(l.value.outlet):null;if(A&&E.routeConfig===A.routeConfig){const X=function Xi(l,u,a){if("function"==typeof a)return a(l,u);switch(a){case"pathParamsChange":return!et(l.url,u.url);case"pathParamsOrQueryParamsChange":return!et(l.url,u.url)||!at(l.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!y(l,u)||!at(l.queryParams,u.queryParams);default:return!y(l,u)}}(A,E,E.routeConfig.runGuardsAndResolvers);X?m.canActivateChecks.push(new Ct(h)):(E.data=A.data,E._resolvedData=A._resolvedData),Jr(l,u,E.component?P?P.children:null:a,h,m),X&&P&&P.outlet&&P.outlet.isActivated&&m.canDeactivateChecks.push(new xt(P.outlet.component,A))}else A&&go(u,P,m),m.canActivateChecks.push(new Ct(h)),Jr(l,null,E.component?P?P.children:null:a,h,m)})(A,E[A.value.outlet],a,h.concat([A.value]),m),delete E[A.value.outlet]}),Ue(E,(A,P)=>go(A,a.getContext(P),m)),m}function go(l,u,a){const h=xn(l),m=l.value;Ue(h,(E,A)=>{go(E,m.component?u?u.children.getContext(A):null:u,a)}),a.canDeactivateChecks.push(new xt(m.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,m))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xr(l){return"function"==typeof l}function ns(l){return l instanceof le||"EmptyError"===l?.name}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const di=Symbol("INITIAL_VALUE");function qt(){return(0,pt.w)(l=>N(l.map(u=>u.pipe((0,ut.q)(1),(0,cr.O)(di)))).pipe((0,Ze.U)(u=>{for(const a of u)if(!0!==a){if(a===di)return di;if(!1===a||a instanceof St)return a}return!0}),(0,Jt.h)(u=>u!==di),(0,ut.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Fo(l){return(0,ve.z)((0,Xe.b)(u=>{if(nn(u))throw q(0,u)}),(0,Ze.U)(u=>!0===u))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Lo={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function rs(l,u,a,h,m){const E=os(l,u,a);return E.matched?function hi(l,u,a,h){const m=u.canMatch;if(!m||0===m.length)return(0,H.of)(!0);const E=m.map(A=>{const P=l.get(A),X=function Ks(l){return l&&Xr(l.canMatch)}(P)?P.canMatch(u,a):P(u,a);return Ot(X)});return(0,H.of)(E).pipe(qt(),Fo())}(h=Dr(u,h),u,a).pipe((0,Ze.U)(A=>!0===A?E:{...Lo})):(0,H.of)(E)}function os(l,u,a){if(""===u.path)return"full"===u.pathMatch&&(l.hasChildren()||a.length>0)?{...Lo}:{matched:!0,consumedSegments:[],remainingSegments:a,parameters:{},positionalParamSegments:{}};const m=(u.matcher||be)(a,l,u);if(!m)return{...Lo};const E={};Ue(m.posParams,(P,X)=>{E[X]=P.path});const A=m.consumed.length>0?{...E,...m.consumed[m.consumed.length-1].parameters}:E;return{matched:!0,consumedSegments:m.consumed,remainingSegments:a.slice(m.consumed.length),parameters:A,positionalParamSegments:m.posParams??{}}}function Wn(l,u,a,h,m="corrected"){if(a.length>0&&function hu(l,u,a){return a.some(h=>mo(l,u,h)&&g(h)!==ee)}(l,a,h)){const A=new Oe(u,function fu(l,u,a,h){const m={};m[ee]=h,h._sourceSegment=l,h._segmentIndexShift=u.length;for(const E of a)if(""===E.path&&g(E)!==ee){const A=new Oe([],{});A._sourceSegment=l,A._segmentIndexShift=u.length,m[g(E)]=A}return m}(l,u,h,new Oe(a,l.children)));return A._sourceSegment=l,A._segmentIndexShift=u.length,{segmentGroup:A,slicedSegments:[]}}if(0===a.length&&function ko(l,u,a){return a.some(h=>mo(l,u,h))}(l,a,h)){const A=new Oe(l.segments,function Vo(l,u,a,h,m,E){const A={};for(const P of h)if(mo(l,a,P)&&!m[g(P)]){const X=new Oe([],{});X._sourceSegment=l,X._segmentIndexShift="legacy"===E?l.segments.length:u.length,A[g(P)]=X}return{...m,...A}}(l,u,a,h,l.children,m));return A._sourceSegment=l,A._segmentIndexShift=u.length,{segmentGroup:A,slicedSegments:a}}const E=new Oe(l.segments,l.children);return E._sourceSegment=l,E._segmentIndexShift=u.length,{segmentGroup:E,slicedSegments:a}}function mo(l,u,a){return(!(l.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function qs(l,u,a,h){return!!(g(l)===h||h!==ee&&mo(u,a,l))&&("**"===l.path||os(u,l,a).matched)}function Qs(l,u,a){return 0===u.length&&!l.children[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const is=!1;class ss{constructor(u){this.segmentGroup=u||null}}class Bo{constructor(u){this.urlTree=u}}function yo(l){return(0,ze._)(new ss(l))}function as(l){return(0,ze._)(new Bo(l))}class vo{constructor(u,a,h,m,E){this.injector=u,this.configLoader=a,this.urlSerializer=h,this.urlTree=m,this.config=E,this.allowRedirects=!0}apply(){const u=Wn(this.urlTree.root,[],[],this.config).segmentGroup,a=new Oe(u.segments,u.children);return this.expandSegmentGroup(this.injector,this.config,a,ee).pipe((0,Ze.U)(E=>this.createUrlTree(In(E),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,se.K)(E=>{if(E instanceof Bo)return this.allowRedirects=!1,this.match(E.urlTree);throw E instanceof ss?this.noMatchError(E):E}))}match(u){return this.expandSegmentGroup(this.injector,this.config,u.root,ee).pipe((0,Ze.U)(m=>this.createUrlTree(In(m),u.queryParams,u.fragment))).pipe((0,se.K)(m=>{throw m instanceof ss?this.noMatchError(m):m}))}noMatchError(u){return new d.vHH(4002,is)}createUrlTree(u,a,h){const m=Hn(u);return new St(m,a,h)}expandSegmentGroup(u,a,h,m){return 0===h.segments.length&&h.hasChildren()?this.expandChildren(u,a,h).pipe((0,Ze.U)(E=>new Oe([],E))):this.expandSegment(u,h,a,h.segments,m,!0)}expandChildren(u,a,h){const m=[];for(const E of Object.keys(h.children))"primary"===E?m.unshift(E):m.push(E);return(0,W.D)(m).pipe((0,Ht.b)(E=>{const A=h.children[E],P=p(a,E);return this.expandSegmentGroup(u,P,A,E).pipe((0,Ze.U)(X=>({segment:X,outlet:E})))}),we((E,A)=>(E[A.outlet]=A.segment,E),{}),kt())}expandSegment(u,a,h,m,E,A){return(0,W.D)(h).pipe((0,Ht.b)(P=>this.expandSegmentAgainstRoute(u,a,h,P,m,E,A).pipe((0,se.K)(ge=>{if(ge instanceof ss)return(0,H.of)(null);throw ge}))),ye(P=>!!P),(0,se.K)((P,X)=>{if(ns(P))return Qs(a,m,E)?(0,H.of)(new Oe([],{})):yo(a);throw P}))}expandSegmentAgainstRoute(u,a,h,m,E,A,P){return qs(m,a,E,A)?void 0===m.redirectTo?this.matchSegmentAgainstRoute(u,a,m,E,A):P&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,h,m,E,A):yo(a):yo(a)}expandSegmentAgainstRouteUsingRedirect(u,a,h,m,E,A){return"**"===m.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,h,m,A):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,h,m,E,A)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,h,m){const E=this.applyRedirectCommands([],h.redirectTo,{});return h.redirectTo.startsWith("/")?as(E):this.lineralizeSegments(h,E).pipe((0,Wt.zg)(A=>{const P=new Oe(A,{});return this.expandSegment(u,P,a,A,m,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,h,m,E,A){const{matched:P,consumedSegments:X,remainingSegments:ge,positionalParamSegments:ot}=os(a,m,E);if(!P)return yo(a);const me=this.applyRedirectCommands(X,m.redirectTo,ot);return m.redirectTo.startsWith("/")?as(me):this.lineralizeSegments(m,me).pipe((0,Wt.zg)(ht=>this.expandSegment(u,a,h,ht.concat(ge),A,!1)))}matchSegmentAgainstRoute(u,a,h,m,E){return"**"===h.path?(u=Dr(h,u),h.loadChildren?(h._loadedRoutes?(0,H.of)({routes:h._loadedRoutes,injector:h._loadedInjector}):this.configLoader.loadChildren(u,h)).pipe((0,Ze.U)(P=>(h._loadedRoutes=P.routes,h._loadedInjector=P.injector,new Oe(m,{})))):(0,H.of)(new Oe(m,{}))):rs(a,h,m,u).pipe((0,pt.w)(({matched:A,consumedSegments:P,remainingSegments:X})=>A?this.getChildConfig(u=h._injector??u,h,m).pipe((0,Wt.zg)(ot=>{const me=ot.injector??u,ht=ot.routes,{segmentGroup:vn,slicedSegments:Yn}=Wn(a,P,X,ht),Kn=new Oe(vn.segments,vn.children);if(0===Yn.length&&Kn.hasChildren())return this.expandChildren(me,ht,Kn).pipe((0,Ze.U)(ys=>new Oe(P,ys)));if(0===ht.length&&0===Yn.length)return(0,H.of)(new Oe(P,{}));const qn=g(h)===E;return this.expandSegment(me,Kn,ht,Yn,qn?ee:E,!0).pipe((0,Ze.U)(Yo=>new Oe(P.concat(Yo.segments),Yo.children)))})):yo(a)))}getChildConfig(u,a,h){return a.children?(0,H.of)({routes:a.children,injector:u}):a.loadChildren?void 0!==a._loadedRoutes?(0,H.of)({routes:a._loadedRoutes,injector:a._loadedInjector}):function fi(l,u,a,h){const m=u.canLoad;if(void 0===m||0===m.length)return(0,H.of)(!0);const E=m.map(A=>{const P=l.get(A),X=function zs(l){return l&&Xr(l.canLoad)}(P)?P.canLoad(u,a):P(u,a);return Ot(X)});return(0,H.of)(E).pipe(qt(),Fo())}(u,a,h).pipe((0,Wt.zg)(m=>m?this.configLoader.loadChildren(u,a).pipe((0,Xe.b)(E=>{a._loadedRoutes=E.routes,a._loadedInjector=E.injector})):function Zs(l){return(0,ze._)(Ie(is,3))}())):(0,H.of)({routes:[],injector:u})}lineralizeSegments(u,a){let h=[],m=a.root;for(;;){if(h=h.concat(m.segments),0===m.numberOfChildren)return(0,H.of)(h);if(m.numberOfChildren>1||!m.children[ee])return(0,ze._)(new d.vHH(4e3,is));m=m.children[ee]}}applyRedirectCommands(u,a,h){return this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),u,h)}applyRedirectCreateUrlTree(u,a,h,m){const E=this.createSegmentGroup(u,a.root,h,m);return new St(E,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const h={};return Ue(u,(m,E)=>{if("string"==typeof m&&m.startsWith(":")){const P=m.substring(1);h[E]=a[P]}else h[E]=m}),h}createSegmentGroup(u,a,h,m){const E=this.createSegments(u,a.segments,h,m);let A={};return Ue(a.children,(P,X)=>{A[X]=this.createSegmentGroup(u,P,h,m)}),new Oe(E,A)}createSegments(u,a,h,m){return a.map(E=>E.path.startsWith(":")?this.findPosParam(u,E,m):this.findOrReturn(E,h))}findPosParam(u,a,h){const m=h[a.path.substring(1)];if(!m)throw new d.vHH(4001,is);return m}findOrReturn(u,a){let h=0;for(const m of a){if(m.path===u.path)return a.splice(h),m;h++}return u}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class us{}class Xs{constructor(u,a,h,m,E,A,P,X){this.injector=u,this.rootComponentType=a,this.config=h,this.urlTree=m,this.url=E,this.paramsInheritanceStrategy=A,this.relativeLinkResolution=P,this.urlSerializer=X}recognize(){const u=Wn(this.urlTree.root,[],[],this.config.filter(a=>void 0===a.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,u,ee).pipe((0,Ze.U)(a=>{if(null===a)return null;const h=new Tt([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},ee,this.rootComponentType,null,this.urlTree.root,-1,{}),m=new Tn(h,a),E=new Zr(this.url,m);return this.inheritParamsAndData(E._root),E}))}inheritParamsAndData(u){const a=u.value,h=No(a,this.paramsInheritanceStrategy);a.params=Object.freeze(h.params),a.data=Object.freeze(h.data),u.children.forEach(m=>this.inheritParamsAndData(m))}processSegmentGroup(u,a,h,m){return 0===h.segments.length&&h.hasChildren()?this.processChildren(u,a,h):this.processSegment(u,a,h,h.segments,m)}processChildren(u,a,h){return(0,W.D)(Object.keys(h.children)).pipe((0,Ht.b)(m=>{const E=h.children[m],A=p(a,m);return this.processSegmentGroup(u,A,E,m)}),we((m,E)=>m&&E?(m.push(...E),m):null),function lr(l,u=!1){return a=>a.lift(new $n(l,u))}(m=>null!==m),Qe(null),kt(),(0,Ze.U)(m=>{if(null===m)return null;const E=ta(m);return function ea(l){l.sort((u,a)=>u.value.outlet===ee?-1:a.value.outlet===ee?1:u.value.outlet.localeCompare(a.value.outlet))}(E),E}))}processSegment(u,a,h,m,E){return(0,W.D)(a).pipe((0,Ht.b)(A=>this.processSegmentAgainstRoute(A._injector??u,A,h,m,E)),ye(A=>!!A),(0,se.K)(A=>{if(ns(A))return Qs(h,m,E)?(0,H.of)([]):(0,H.of)(null);throw A}))}processSegmentAgainstRoute(u,a,h,m,E){if(a.redirectTo||!qs(a,h,m,E))return(0,H.of)(null);let A;if("**"===a.path){const P=m.length>0?Pe(m).parameters:{},X=yi(h)+m.length,ge=new Tt(m,P,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Uo(a),g(a),a.component??a._loadedComponent??null,a,mi(h),X,na(a),X);A=(0,H.of)({snapshot:ge,consumedSegments:[],remainingSegments:[]})}else A=rs(h,a,m,u).pipe((0,Ze.U)(({matched:P,consumedSegments:X,remainingSegments:ge,parameters:ot})=>{if(!P)return null;const me=yi(h)+X.length;return{snapshot:new Tt(X,ot,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Uo(a),g(a),a.component??a._loadedComponent??null,a,mi(h),me,na(a),me),consumedSegments:X,remainingSegments:ge}}));return A.pipe((0,pt.w)(P=>{if(null===P)return(0,H.of)(null);const{snapshot:X,consumedSegments:ge,remainingSegments:ot}=P;u=a._injector??u;const me=a._loadedInjector??u,ht=function gu(l){return l.children?l.children:l.loadChildren?l._loadedRoutes:[]}(a),{segmentGroup:vn,slicedSegments:Yn}=Wn(h,ge,ot,ht.filter(qn=>void 0===qn.redirectTo),this.relativeLinkResolution);if(0===Yn.length&&vn.hasChildren())return this.processChildren(me,ht,vn).pipe((0,Ze.U)(qn=>null===qn?null:[new Tn(X,qn)]));if(0===ht.length&&0===Yn.length)return(0,H.of)([new Tn(X,[])]);const Kn=g(a)===E;return this.processSegment(me,ht,vn,Yn,Kn?ee:E).pipe((0,Ze.U)(qn=>null===qn?null:[new Tn(X,qn)]))}))}}function ar(l){const u=l.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function ta(l){const u=[],a=new Set;for(const h of l){if(!ar(h)){u.push(h);continue}const m=u.find(E=>h.value.routeConfig===E.value.routeConfig);void 0!==m?(m.children.push(...h.children),a.add(m)):u.push(h)}for(const h of a){const m=ta(h.children);u.push(new Tn(h.value,m))}return u.filter(h=>!a.has(h))}function mi(l){let u=l;for(;u._sourceSegment;)u=u._sourceSegment;return u}function yi(l){let u=l,a=u._segmentIndexShift??0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift??0;return a-1}function Uo(l){return l.data||{}}function na(l){return l.resolve||{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const vi=Symbol("RouteTitle");function sa(l){return"string"==typeof l.title||null===l.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function _i(l){return(0,pt.w)(u=>{const a=l(u);return a?(0,W.D)(a).pipe((0,Ze.U)(()=>u)):(0,H.of)(u)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ls=(()=>{class l{buildTitle(a){let h,m=a.root;for(;void 0!==m;)h=this.getResolvedTitleForRoute(m)??h,m=m.children.find(E=>E.outlet===ee);return h}getResolvedTitleForRoute(a){return a.data[vi]}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=d.Yz7({token:l,factory:function(){return(0,d.f3M)(eo)},providedIn:"root"}),l})(),eo=(()=>{class l extends ls{constructor(a){super(),this.title=a}updateTitle(a){const h=this.buildTitle(a);void 0!==h&&this.title.setTitle(h)}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(K.Dx))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yu{}class cs extends class aa{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ci=new d.OlP("",{providedIn:"root",factory:()=>({})}),Nr=new d.OlP("ROUTES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Pr=(()=>{class l{constructor(a,h){this.injector=a,this.compiler=h,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(a){if(this.componentLoaders.get(a))return this.componentLoaders.get(a);if(a._loadedComponent)return(0,H.of)(a._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(a);const h=Ot(a.loadComponent()).pipe((0,Xe.b)(E=>{this.onLoadEndListener&&this.onLoadEndListener(a),a._loadedComponent=E}),bn(()=>{this.componentLoaders.delete(a)})),m=new Je.c(h,()=>new We.xQ).pipe((0,F.x)());return this.componentLoaders.set(a,m),m}loadChildren(a,h){if(this.childrenLoaders.get(h))return this.childrenLoaders.get(h);if(h._loadedRoutes)return(0,H.of)({routes:h._loadedRoutes,injector:h._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(h);const E=this.loadModuleFactoryOrRoutes(h.loadChildren).pipe((0,Ze.U)(P=>{this.onLoadEndListener&&this.onLoadEndListener(h);let X,ge,ot=!1;Array.isArray(P)?ge=P:(X=P.create(a).injector,ge=en(X.get(Nr,[],d.XFs.Self|d.XFs.Optional)));return{routes:ge.map(D),injector:X}}),bn(()=>{this.childrenLoaders.delete(h)})),A=new Je.c(E,()=>new We.xQ).pipe((0,F.x)());return this.childrenLoaders.set(h,A),A}loadModuleFactoryOrRoutes(a){return Ot(a()).pipe((0,Wt.zg)(h=>h instanceof d.YKP||Array.isArray(h)?(0,H.of)(h):(0,W.D)(this.compiler.compileModuleAsync(h))))}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(d.zs3),d.LFG(d.Sil))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Do{}class ua{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Co(l){throw l}function Kc(l,u,a){return u.parse("/")}const Du={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Et={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function _u(){const l=(0,d.f3M)(V),u=(0,d.f3M)(qe),a=(0,d.f3M)(Pt.Ye),h=(0,d.f3M)(d.zs3),m=(0,d.f3M)(d.Sil),E=(0,d.f3M)(Nr,{optional:!0})??[],A=(0,d.f3M)(Ci,{optional:!0})??{},P=(0,d.f3M)(eo),X=(0,d.f3M)(ls,{optional:!0}),ge=(0,d.f3M)(Do,{optional:!0}),ot=(0,d.f3M)(yu,{optional:!0}),me=new Cn(null,l,u,a,h,m,en(E));return ge&&(me.urlHandlingStrategy=ge),ot&&(me.routeReuseStrategy=ot),me.titleStrategy=X??P,function qc(l,u){l.errorHandler&&(u.errorHandler=l.errorHandler),l.malformedUriErrorHandler&&(u.malformedUriErrorHandler=l.malformedUriErrorHandler),l.onSameUrlNavigation&&(u.onSameUrlNavigation=l.onSameUrlNavigation),l.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=l.paramsInheritanceStrategy),l.relativeLinkResolution&&(u.relativeLinkResolution=l.relativeLinkResolution),l.urlUpdateStrategy&&(u.urlUpdateStrategy=l.urlUpdateStrategy),l.canceledNavigationResolution&&(u.canceledNavigationResolution=l.canceledNavigationResolution)}(A,me),me}let Cn=(()=>{class l{constructor(a,h,m,E,A,P,X){this.rootComponentType=a,this.urlSerializer=h,this.rootContexts=m,this.location=E,this.config=X,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new We.xQ,this.errorHandler=Co,this.malformedUriErrorHandler=Kc,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>(0,H.of)(void 0),this.urlHandlingStrategy=new ua,this.routeReuseStrategy=new cs,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=A.get(Pr),this.configLoader.onLoadEndListener=ht=>this.triggerEvent(new Kr(ht)),this.configLoader.onLoadStartListener=ht=>this.triggerEvent(new tr(ht)),this.ngModule=A.get(d.h0i),this.console=A.get(d.c2e);const me=A.get(d.R0b);this.isNgZoneEnabled=me instanceof d.R0b&&d.R0b.isInAngularZone(),this.resetConfig(X),this.currentUrlTree=function Mt(){return new St(new Oe([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=Ji(this.currentUrlTree,this.rootComponentType),this.transitions=new Q.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(a){const h=this.events;return a.pipe((0,Jt.h)(m=>0!==m.id),(0,Ze.U)(m=>({...m,extractedUrl:this.urlHandlingStrategy.extract(m.rawUrl)})),(0,pt.w)(m=>{let E=!1,A=!1;return(0,H.of)(m).pipe((0,Xe.b)(P=>{this.currentNavigation={id:P.id,initialUrl:P.rawUrl,extractedUrl:P.extractedUrl,trigger:P.source,extras:P.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,pt.w)(P=>{const X=this.browserUrlTree.toString(),ge=!this.navigated||P.extractedUrl.toString()!==X||X!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ge)&&this.urlHandlingStrategy.shouldProcessUrl(P.rawUrl))return Cu(P.source)&&(this.browserUrlTree=P.extractedUrl),(0,H.of)(P).pipe((0,pt.w)(me=>{const ht=this.transitions.getValue();return h.next(new Yr(me.id,this.serializeUrl(me.extractedUrl),me.source,me.restoredState)),ht!==this.transitions.getValue()?Dt.E:Promise.resolve(me)}),function pu(l,u,a,h){return(0,pt.w)(m=>function Js(l,u,a,h,m){return new vo(l,u,a,h,m).apply()}(l,u,a,m.extractedUrl,h).pipe((0,Ze.U)(E=>({...m,urlAfterRedirects:E}))))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,Xe.b)(me=>{this.currentNavigation={...this.currentNavigation,finalUrl:me.urlAfterRedirects},m.urlAfterRedirects=me.urlAfterRedirects}),function ra(l,u,a,h,m,E){return(0,Wt.zg)(A=>function Yc(l,u,a,h,m,E,A="emptyOnly",P="legacy"){return new Xs(l,u,a,h,m,A,P,E).recognize().pipe((0,pt.w)(X=>null===X?function gi(l){return new ct.y(u=>u.error(l))}(new us):(0,H.of)(X)))}(l,u,a,A.urlAfterRedirects,h.serialize(A.urlAfterRedirects),h,m,E).pipe((0,Ze.U)(P=>({...A,targetSnapshot:P}))))}(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,Xe.b)(me=>{if(m.targetSnapshot=me.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!me.extras.skipLocationChange){const vn=this.urlHandlingStrategy.merge(me.urlAfterRedirects,me.rawUrl);this.setBrowserUrl(vn,me)}this.browserUrlTree=me.urlAfterRedirects}const ht=new ai(me.id,this.serializeUrl(me.extractedUrl),this.serializeUrl(me.urlAfterRedirects),me.targetSnapshot);h.next(ht)}));if(ge&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:ht,extractedUrl:vn,source:Yn,restoredState:Kn,extras:qn}=P,pa=new Yr(ht,this.serializeUrl(vn),Yn,Kn);h.next(pa);const Yo=Ji(vn,this.rootComponentType).snapshot;return m={...P,targetSnapshot:Yo,urlAfterRedirects:vn,extras:{...qn,skipLocationChange:!1,replaceUrl:!1}},(0,H.of)(m)}return this.rawUrlTree=P.rawUrl,P.resolve(null),Dt.E}),(0,Xe.b)(P=>{const X=new Oo(P.id,this.serializeUrl(P.extractedUrl),this.serializeUrl(P.urlAfterRedirects),P.targetSnapshot);this.triggerEvent(X)}),(0,Ze.U)(P=>m={...P,guards:Or(P.targetSnapshot,P.currentSnapshot,this.rootContexts)}),function Rr(l,u){return(0,Wt.zg)(a=>{const{targetSnapshot:h,currentSnapshot:m,guards:{canActivateChecks:E,canDeactivateChecks:A}}=a;return 0===A.length&&0===E.length?(0,H.of)({...a,guardsResult:!0}):function jt(l,u,a,h){return(0,W.D)(l).pipe((0,Wt.zg)(m=>function du(l,u,a,h,m){const E=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!E||0===E.length)return(0,H.of)(!0);const A=E.map(P=>{const X=zn(P,u,m);return Ot(function Ys(l){return l&&Xr(l.canDeactivate)}(X)?X.canDeactivate(l,u,a,h):X(l,u,a,h)).pipe(ye())});return(0,H.of)(A).pipe(qt())}(m.component,m.route,a,u,h)),ye(m=>!0!==m,!0))}(A,h,m,l).pipe((0,Wt.zg)(P=>P&&function ou(l){return"boolean"==typeof l}(P)?function su(l,u,a,h){return(0,W.D)(u).pipe((0,Ht.b)(m=>(0,de.z)(function uu(l,u){return null!==l&&u&&u(new qr(l)),(0,H.of)(!0)}(m.route.parent,h),function au(l,u){return null!==l&&u&&u(new Tr(l)),(0,H.of)(!0)}(m.route,h),function cu(l,u,a){const h=u[u.length-1],E=u.slice(0,u.length-1).reverse().map(A=>function sr(l){const u=l.routeConfig?l.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:l,guards:u}:null}(A)).filter(A=>null!==A).map(A=>(0,re.P)(()=>{const P=A.guards.map(X=>{const ge=zn(X,A.node,a);return Ot(function Ws(l){return l&&Xr(l.canActivateChild)}(ge)?ge.canActivateChild(h,l):ge(h,l)).pipe(ye())});return(0,H.of)(P).pipe(qt())}));return(0,H.of)(E).pipe(qt())}(l,m.path,a),function lu(l,u,a){const h=u.routeConfig?u.routeConfig.canActivate:null;if(!h||0===h.length)return(0,H.of)(!0);const m=h.map(E=>(0,re.P)(()=>{const A=zn(E,u,a);return Ot(function es(l){return l&&Xr(l.canActivate)}(A)?A.canActivate(u,l):A(u,l)).pipe(ye())}));return(0,H.of)(m).pipe(qt())}(l,m.route,a))),ye(m=>!0!==m,!0))}(h,E,l,u):(0,H.of)(P)),(0,Ze.U)(P=>({...a,guardsResult:P})))})}(this.ngModule.injector,P=>this.triggerEvent(P)),(0,Xe.b)(P=>{if(m.guardsResult=P.guardsResult,nn(P.guardsResult))throw q(0,P.guardsResult);const X=new ui(P.id,this.serializeUrl(P.extractedUrl),this.serializeUrl(P.urlAfterRedirects),P.targetSnapshot,!!P.guardsResult);this.triggerEvent(X)}),(0,Jt.h)(P=>!!P.guardsResult||(this.restoreHistory(P),this.cancelNavigationTransition(P,"",3),!1)),_i(P=>{if(P.guards.canActivateChecks.length)return(0,H.of)(P).pipe((0,Xe.b)(X=>{const ge=new An(X.id,this.serializeUrl(X.extractedUrl),this.serializeUrl(X.urlAfterRedirects),X.targetSnapshot);this.triggerEvent(ge)}),(0,pt.w)(X=>{let ge=!1;return(0,H.of)(X).pipe(function oa(l,u){return(0,Wt.zg)(a=>{const{targetSnapshot:h,guards:{canActivateChecks:m}}=a;if(!m.length)return(0,H.of)(a);let E=0;return(0,W.D)(m).pipe((0,Ht.b)(A=>function ia(l,u,a,h){const m=l.routeConfig,E=l._resolve;return void 0!==m?.title&&!sa(m)&&(E[vi]=m.title),function mu(l,u,a,h){const m=function Di(l){return[...Object.keys(l),...Object.getOwnPropertySymbols(l)]}(l);if(0===m.length)return(0,H.of)({});const E={};return(0,W.D)(m).pipe((0,Wt.zg)(A=>function $o(l,u,a,h){const m=zn(l,u,h);return Ot(m.resolve?m.resolve(u,a):m(u,a))}(l[A],u,a,h).pipe(ye(),(0,Xe.b)(P=>{E[A]=P}))),it(1),function Ln(l){return u=>u.lift(new an(l))}(E),(0,se.K)(A=>ns(A)?Dt.E:(0,ze._)(A)))}(E,l,u,h).pipe((0,Ze.U)(A=>(l._resolvedData=A,l.data=No(l,a).resolve,m&&sa(m)&&(l.data[vi]=m.title),null)))}(A.route,h,l,u)),(0,Xe.b)(()=>E++),it(1),(0,Wt.zg)(A=>E===m.length?(0,H.of)(a):Dt.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,Xe.b)({next:()=>ge=!0,complete:()=>{ge||(this.restoreHistory(X),this.cancelNavigationTransition(X,"",2))}}))}),(0,Xe.b)(X=>{const ge=new Ro(X.id,this.serializeUrl(X.extractedUrl),this.serializeUrl(X.urlAfterRedirects),X.targetSnapshot);this.triggerEvent(ge)}))}),_i(P=>{const X=ge=>{const ot=[];ge.routeConfig?.loadComponent&&!ge.routeConfig._loadedComponent&&ot.push(this.configLoader.loadComponent(ge.routeConfig).pipe((0,Xe.b)(me=>{ge.component=me}),(0,Ze.U)(()=>{})));for(const me of ge.children)ot.push(...X(me));return ot};return N(X(P.targetSnapshot.root)).pipe(Qe(),(0,ut.q)(1))}),_i(()=>this.afterPreactivation()),(0,Ze.U)(P=>{const X=function w(l,u,a){const h=v(l,u._root,a?a._root:void 0);return new ho(h,u)}(this.routeReuseStrategy,P.targetSnapshot,P.currentRouterState);return m={...P,targetRouterState:X}}),(0,Xe.b)(P=>{this.currentUrlTree=P.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(P.urlAfterRedirects,P.rawUrl),this.routerState=P.targetRouterState,"deferred"===this.urlUpdateStrategy&&(P.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,P),this.browserUrlTree=P.urlAfterRedirects)}),((l,u,a)=>(0,Ze.U)(h=>(new Te(u,h.targetRouterState,h.currentRouterState,a).activate(l),h)))(this.rootContexts,this.routeReuseStrategy,P=>this.triggerEvent(P)),(0,Xe.b)({next(){E=!0},complete(){E=!0}}),bn(()=>{E||A||this.cancelNavigationTransition(m,"",1),this.currentNavigation?.id===m.id&&(this.currentNavigation=null)}),(0,se.K)(P=>{if(A=!0,ft(P)){mt(P)||(this.navigated=!0,this.restoreHistory(m,!0));const X=new Gn(m.id,this.serializeUrl(m.extractedUrl),P.message,P.cancellationCode);if(h.next(X),mt(P)){const ge=this.urlHandlingStrategy.merge(P.url,this.rawUrlTree),ot={skipLocationChange:m.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Cu(m.source)};this.scheduleNavigation(ge,"imperative",null,ot,{resolve:m.resolve,reject:m.reject,promise:m.promise})}else m.resolve(!1)}else{this.restoreHistory(m,!0);const X=new gr(m.id,this.serializeUrl(m.extractedUrl),P,m.targetSnapshot??void 0);h.next(X);try{m.resolve(this.errorHandler(P))}catch(ge){m.reject(ge)}}return Dt.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next({...this.transitions.value,...a})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const h="popstate"===a.type?"popstate":"hashchange";"popstate"===h&&setTimeout(()=>{const m={replaceUrl:!0},E=a.state?.navigationId?a.state:null;if(E){const P={...E};delete P.navigationId,delete P.\u0275routerPageId,0!==Object.keys(P).length&&(m.state=P)}const A=this.parseUrl(a.url);this.scheduleNavigation(A,h,E,m)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){this.config=a.map(D),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,h={}){const{relativeTo:m,queryParams:E,fragment:A,queryParamsHandling:P,preserveFragment:X}=h,ge=m||this.routerState.root,ot=X?this.currentUrlTree.fragment:A;let me=null;switch(P){case"merge":me={...this.currentUrlTree.queryParams,...E};break;case"preserve":me=this.currentUrlTree.queryParams;break;default:me=E||null}return null!==me&&(me=this.removeEmptyProps(me)),hr(ge,this.currentUrlTree,a,me,ot??null)}navigateByUrl(a,h={skipLocationChange:!1}){const m=nn(a)?a:this.parseUrl(a),E=this.urlHandlingStrategy.merge(m,this.rawUrlTree);return this.scheduleNavigation(E,"imperative",null,h)}navigate(a,h={skipLocationChange:!1}){return function Qc(l){for(let u=0;u<l.length;u++){if(null==l[u])throw new d.vHH(4008,false)}}(a),this.navigateByUrl(this.createUrlTree(a,h),h)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let h;try{h=this.urlSerializer.parse(a)}catch(m){h=this.malformedUriErrorHandler(m,this.urlSerializer,a)}return h}isActive(a,h){let m;if(m=!0===h?{...Du}:!1===h?{...Et}:h,nn(a))return cn(this.currentUrlTree,a,m);const E=this.parseUrl(a);return cn(this.currentUrlTree,E,m)}removeEmptyProps(a){return Object.keys(a).reduce((h,m)=>{const E=a[m];return null!=E&&(h[m]=E),h},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new er(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,h,m,E,A){if(this.disposed)return Promise.resolve(!1);let P,X,ge;A?(P=A.resolve,X=A.reject,ge=A.promise):ge=new Promise((ht,vn)=>{P=ht,X=vn});const ot=++this.navigationId;let me;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(m=this.location.getState()),me=m&&m.\u0275routerPageId?m.\u0275routerPageId:E.replaceUrl||E.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):me=0,this.setTransition({id:ot,targetPageId:me,source:h,restoredState:m,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:E,resolve:P,reject:X,promise:ge,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),ge.catch(ht=>Promise.reject(ht))}setBrowserUrl(a,h){const m=this.urlSerializer.serialize(a),E={...h.extras.state,...this.generateNgRouterState(h.id,h.targetPageId)};this.location.isCurrentPathEqualTo(m)||h.extras.replaceUrl?this.location.replaceState(m,"",E):this.location.go(m,"",E)}restoreHistory(a,h=!1){if("computed"===this.canceledNavigationResolution){const m=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===m?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===m&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(m)}else"replace"===this.canceledNavigationResolution&&(h&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,h,m){const E=new Gn(a.id,this.serializeUrl(a.extractedUrl),h,m);this.triggerEvent(E),a.resolve(!1)}generateNgRouterState(a,h){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:h}:{navigationId:a}}}return l.\u0275fac=function(a){d.$Z()},l.\u0275prov=d.Yz7({token:l,factory:function(){return _u()},providedIn:"root"}),l})();function Cu(l){return"imperative"!==l}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ds=(()=>{class l{constructor(a,h,m,E,A){this.router=a,this.route=h,this.tabIndexAttribute=m,this.renderer=E,this.el=A,this.commands=null,this.onChanges=new We.xQ,this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(a){if(null!=this.tabIndexAttribute)return;const h=this.renderer,m=this.el.nativeElement;null!==a?h.setAttribute(m,"tabindex",a):h.removeAttribute(m,"tabindex")}ngOnChanges(a){this.onChanges.next(this)}set routerLink(a){null!=a?(this.commands=Array.isArray(a)?a:[a],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(){if(null===this.urlTree)return!0;const a={skipLocationChange:(0,d.D6c)(this.skipLocationChange),replaceUrl:(0,d.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,a),!0}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,d.D6c)(this.preserveFragment)})}}return l.\u0275fac=function(a){return new(a||l)(d.Y36(Cn),d.Y36(nr),d.$8M("tabindex"),d.Y36(d.Qsj),d.Y36(d.SBq))},l.\u0275dir=d.lG2({type:l,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(a,h){1&a&&d.NdJ("click",function(){return h.onClick()})},inputs:{queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[d.TTD]}),l})(),fs=(()=>{class l{constructor(a,h,m){this.router=a,this.route=h,this.locationStrategy=m,this.commands=null,this.href=null,this.onChanges=new We.xQ,this.subscription=a.events.subscribe(E=>{E instanceof er&&this.updateTargetUrlAndHref()})}set routerLink(a){this.commands=null!=a?Array.isArray(a)?a:[a]:null}ngOnChanges(a){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(a,h,m,E,A){if(0!==a||h||m||E||A||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)return!0;const P={skipLocationChange:(0,d.D6c)(this.skipLocationChange),replaceUrl:(0,d.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,P),!1}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,d.D6c)(this.preserveFragment)})}}return l.\u0275fac=function(a){return new(a||l)(d.Y36(Cn),d.Y36(nr),d.Y36(Pt.S$))},l.\u0275dir=d.lG2({type:l,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(a,h){1&a&&d.NdJ("click",function(E){return h.onClick(E.button,E.ctrlKey,E.shiftKey,E.altKey,E.metaKey)}),2&a&&d.uIk("target",h.target)("href",h.href,d.LSH)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[d.TTD]}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Eu{}let Eo=(()=>{class l{constructor(a,h,m,E,A){this.router=a,this.injector=m,this.preloadingStrategy=E,this.loader=A}setUpPreloading(){this.subscription=this.router.events.pipe((0,Jt.h)(a=>a instanceof er),(0,Ht.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,h){const m=[];for(const E of h){E.providers&&!E._injector&&(E._injector=(0,d.MMx)(E.providers,a,`Route: ${E.path}`));const A=E._injector??a,P=E._loadedInjector??A;E.loadChildren&&!E._loadedRoutes&&void 0===E.canLoad||E.loadComponent&&!E._loadedComponent?m.push(this.preloadConfig(A,E)):(E.children||E._loadedRoutes)&&m.push(this.processRoutes(P,E.children??E._loadedRoutes))}return(0,W.D)(m).pipe((0,x.J)())}preloadConfig(a,h){return this.preloadingStrategy.preload(h,()=>{let m;m=h.loadChildren&&void 0===h.canLoad?this.loader.loadChildren(a,h):(0,H.of)(null);const E=m.pipe((0,Wt.zg)(A=>null===A?(0,H.of)(void 0):(h._loadedRoutes=A.routes,h._loadedInjector=A.injector,this.processRoutes(A.injector??a,A.routes))));if(h.loadComponent&&!h._loadedComponent){const A=this.loader.loadComponent(h);return(0,W.D)([E,A]).pipe((0,x.J)())}return E})}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(Cn),d.LFG(d.Sil),d.LFG(d.lqb),d.LFG(Eu),d.LFG(Pr))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const wu=new d.OlP("");let bu=(()=>{class l{constructor(a,h,m={}){this.router=a,this.viewportScroller=h,this.options=m,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},m.scrollPositionRestoration=m.scrollPositionRestoration||"disabled",m.anchorScrolling=m.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Yr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof er&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof co&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,h){this.router.triggerEvent(new co(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,h))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return l.\u0275fac=function(a){d.$Z()},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const hs=new d.OlP("ROUTER_FORROOT_GUARD"),zo=new d.OlP(""),Wo=[Pt.Ye,{provide:V,useClass:T},{provide:Cn,useFactory:_u},qe,{provide:nr,useFactory:function ca(l){return l.routerState.root},deps:[Cn]},Pr];function Mu(){return new d.PXZ("Router",Cn)}let Iu=(()=>{class l{constructor(a){}static forRoot(a,h){return{ngModule:l,providers:[Wo,[],wi(a),{provide:hs,useFactory:Rn,deps:[[Cn,new d.FiY,new d.tp0]]},{provide:Ci,useValue:h||{}},h?.useHash?{provide:Pt.S$,useClass:Pt.Do}:{provide:Pt.S$,useClass:Pt.b0},{provide:wu,useFactory:()=>{const l=(0,d.f3M)(Cn),u=(0,d.f3M)(Pt.EM),a=(0,d.f3M)(Ci);return a.scrollOffset&&u.setOffset(a.scrollOffset),new bu(l,u,a)}},h?.preloadingStrategy?gs(h.preloadingStrategy):[],{provide:d.PXZ,multi:!0,useFactory:Mu},h?.initialNavigation?fa(h):[],[{provide:Su,useFactory:wo},{provide:d.tb,multi:!0,useExisting:Su}]]}}static forChild(a){return{ngModule:l,providers:[wi(a)]}}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(hs,8))},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({}),l})();function Rn(l){return"guarded"}function wi(l){return[{provide:Nr,multi:!0,useValue:l}]}function wo(){const l=(0,d.f3M)(d.zs3);return u=>{const a=l.get(d.z2F);if(u!==a.components[0])return;const h=l.get(Cn),m=l.get(ha);1===l.get(ps)&&h.initialNavigation(),l.get(zo,null,d.XFs.Optional)?.setUpPreloading(),l.get(wu,null,d.XFs.Optional)?.init(),h.resetRootComponentType(a.componentTypes[0]),m.next(),m.complete()}}const Su=new d.OlP("");function fa(l){return["disabled"===l.initialNavigation?[{provide:d.ip1,multi:!0,useFactory:()=>{const l=(0,d.f3M)(Cn);return()=>{l.setUpLocationChangeListener()}}},{provide:ps,useValue:2}]:[],"enabledBlocking"===l.initialNavigation?[{provide:ps,useValue:0},{provide:d.ip1,multi:!0,deps:[d.zs3],useFactory:l=>{const u=l.get(Pt.V_,Promise.resolve(null));let a=!1;return()=>u.then(()=>new Promise(m=>{const E=l.get(Cn),A=l.get(ha);(function h(m){l.get(Cn).events.pipe((0,Jt.h)(A=>A instanceof er||A instanceof Gn||A instanceof gr),(0,Ze.U)(A=>A instanceof er||A instanceof Gn&&(0===A.code||1===A.code)&&null),(0,Jt.h)(A=>null!==A),(0,ut.q)(1)).subscribe(()=>{m()})})(()=>{m(!0),a=!0}),E.afterPreactivation=()=>(m(!0),a||A.closed?(0,H.of)(void 0):A),E.initialNavigation()}))}}]:[]]}const ha=new d.OlP("",{factory:()=>new We.xQ}),ps=new d.OlP("",{providedIn:"root",factory:()=>1});function gs(l){return[Eo,{provide:zo,useExisting:Eo},{provide:Eu,useExisting:l}]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1848:(xe,ae,I)=>{I.d(ae,{Wr:()=>Fn});var d=I(6895),R=I(4650),le=I(6498),ie=I(7876);const J=new le.y(ie.Z);var oe=I(8514),j=I(1737),$=I(3753),N=I(1086),O=I(1221),L=I(5529),W=I(6787),H=I(2536),de=I(4850),re=I(2198),ve=I(7545),ze=I(2986),ct=I(2994),Dt=I(9177);
/**
     * @license Angular v14.1.2
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Je="Service workers are disabled or not supported by this browser";class Pt{constructor(Ye){if(this.serviceWorker=Ye,Ye){const we=(0,$.R)(Ye,"controllerchange").pipe((0,de.U)(()=>Ye.controller)),wt=(0,oe.P)(()=>(0,N.of)(Ye.controller)),zt=(0,O.z)(wt,we);this.worker=zt.pipe((0,re.h)(kt=>!!kt)),this.registration=this.worker.pipe((0,ve.w)(()=>Ye.getRegistration()));const bt=(0,$.R)(Ye,"message").pipe((0,de.U)(kt=>kt.data)).pipe((0,re.h)(kt=>kt&&kt.type)).pipe(function Q(Re){return Re?(0,H.O)(()=>new L.xQ,Re):(0,H.O)(new L.xQ)}());bt.connect(),this.events=bt}else this.worker=this.events=this.registration=function We(Re){return(0,oe.P)(()=>(0,j._)(new Error(Re)))}(Je)}postMessage(Ye,ye){return this.worker.pipe((0,ze.q)(1),(0,ct.b)(we=>{we.postMessage({action:Ye,...ye})})).toPromise().then(()=>{})}postMessageWithOperation(Ye,ye,we){const wt=this.waitForOperationCompleted(we),zt=this.postMessage(Ye,ye);return Promise.all([zt,wt]).then(([,It])=>It)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(Ye){let ye;return ye="string"==typeof Ye?we=>we.type===Ye:we=>Ye.includes(we.type),this.events.pipe((0,re.h)(ye))}nextEventOfType(Ye){return this.eventsOfType(Ye).pipe((0,ze.q)(1))}waitForOperationCompleted(Ye){return this.eventsOfType("OPERATION_COMPLETED").pipe((0,re.h)(ye=>ye.nonce===Ye),(0,ze.q)(1),(0,de.U)(ye=>{if(void 0!==ye.result)return ye.result;throw new Error(ye.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Jt=(()=>{class Re{constructor(ye){if(this.sw=ye,this.subscriptionChanges=new L.xQ,!ye.isEnabled)return this.messages=J,this.notificationClicks=J,void(this.subscription=J);this.messages=this.sw.eventsOfType("PUSH").pipe((0,de.U)(wt=>wt.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,de.U)(wt=>wt.data)),this.pushManager=this.sw.registration.pipe((0,de.U)(wt=>wt.pushManager));const we=this.pushManager.pipe((0,ve.w)(wt=>wt.getSubscription()));this.subscription=(0,W.T)(we,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(ye){if(!this.sw.isEnabled)return Promise.reject(new Error(Je));const we={userVisibleOnly:!0};let wt=this.decodeBase64(ye.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),zt=new Uint8Array(new ArrayBuffer(wt.length));for(let It=0;It<wt.length;It++)zt[It]=wt.charCodeAt(It);return we.applicationServerKey=zt,this.pushManager.pipe((0,ve.w)(It=>It.subscribe(we)),(0,ze.q)(1)).toPromise().then(It=>(this.subscriptionChanges.next(It),It))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe((0,ze.q)(1),(0,ve.w)(we=>{if(null===we)throw new Error("Not subscribed to push notifications.");return we.unsubscribe().then(wt=>{if(!wt)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(Je))}decodeBase64(ye){return atob(ye)}}return Re.\u0275fac=function(ye){return new(ye||Re)(R.LFG(Pt))},Re.\u0275prov=R.Yz7({token:Re,factory:Re.\u0275fac}),Re})(),ut=(()=>{class Re{constructor(ye){if(this.sw=ye,!ye.isEnabled)return this.versionUpdates=J,this.available=J,this.activated=J,void(this.unrecoverable=J);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe((0,re.h)(we=>"VERSION_READY"===we.type),(0,de.U)(we=>({type:"UPDATE_AVAILABLE",current:we.currentVersion,available:we.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Je));const ye=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:ye},ye)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Je));const ye=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:ye},ye)}}return Re.\u0275fac=function(ye){return new(ye||Re)(R.LFG(Pt))},Re.\u0275prov=R.Yz7({token:Re,factory:Re.\u0275fac}),Re})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Ce{}const Qe=new R.OlP("NGSW_REGISTER_SCRIPT");function ke(Re,Ye,ye,we){return()=>{if(!(0,d.NF)(we)||!("serviceWorker"in navigator)||!1===ye.enabled)return;let zt;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof ye.registrationStrategy)zt=ye.registrationStrategy();else{const[it,...Xt]=(ye.registrationStrategy||"registerWhenStable:30000").split(":");switch(it){case"registerImmediately":zt=(0,N.of)(null);break;case"registerWithDelay":zt=tt(+Xt[0]||0);break;case"registerWhenStable":zt=Xt[0]?(0,W.T)(Ee(Re),tt(+Xt[0])):Ee(Re);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${ye.registrationStrategy}`)}}Re.get(R.R0b).runOutsideAngular(()=>zt.pipe((0,ze.q)(1)).subscribe(()=>navigator.serviceWorker.register(Ye,{scope:ye.scope}).catch(it=>console.error("Service worker registration failed with:",it))))}}function tt(Re){return(0,N.of)(null).pipe((0,Dt.g)(Re))}function Ee(Re){return Re.get(R.z2F).isStable.pipe((0,re.h)(ye=>ye))}function hn(Re,Ye){return new Pt((0,d.NF)(Ye)&&!1!==Re.enabled?navigator.serviceWorker:void 0)}let Fn=(()=>{class Re{static register(ye,we={}){return{ngModule:Re,providers:[{provide:Qe,useValue:ye},{provide:Ce,useValue:we},{provide:Pt,useFactory:hn,deps:[Ce,R.Lbi]},{provide:R.ip1,useFactory:ke,deps:[R.zs3,Qe,Ce,R.Lbi],multi:!0}]}}}return Re.\u0275fac=function(ye){return new(ye||Re)},Re.\u0275mod=R.oAB({type:Re}),Re.\u0275inj=R.cJS({providers:[Jt,ut]}),Re})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}}]);