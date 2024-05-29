import './polyfills.server.mjs';
import{$ as je,A as D,B as L,C as be,D as H,E as Se,F as Ee,G as we,H as u,I as d,J as p,K as xe,L as x,M as Fe,N as Oe,O as Me,P as b,Q as Ie,R as Te,S as ke,Y as _e,_ as P,a as k,b as ce,ba as Ae,c as _,ca as De,d as ae,da as Pe,e as ue,ea as Ue,f as le,fa as Ve,g as de,ga as Ze,h as pe,ha as Ne,i as fe,j as he,k as me,ka as ze,l as C,m as j,n as c,o as a,oa as $e,p as y,q as z,r as ge,ra as Le,s as A,t as ve,u as ye,v as R,w,x as Ce,y as $,z as Re}from"./chunk-6YPUY4JU.mjs";import{a as v,b as T}from"./chunk-VVCT4QZE.mjs";function q(e,t){let i=!t?.manualCleanup;i&&!t?.injector&&ye(q);let n=i?t?.injector?.get($)??y($):null,r;t?.requireSync?r=H({kind:0}):r=H({kind:1,value:t?.initialValue});let o=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(o.unsubscribe.bind(o)),P(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new me(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var Y={};function it(e,t){if(Y[e]=(Y[e]||0)+1,typeof t=="function")return G(e,(...n)=>T(v({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return G(e,()=>({type:e}));case"props":return G(e,n=>T(v({},n),{type:e}));default:throw new Error("Unexpected config.")}}function ot(){return{_as:"props",_p:void 0}}function G(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var st="@ngrx/store/init",S=(()=>{let t=class t extends _{constructor(){super({type:st})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})(),It=[S],ct=new c("@ngrx/store Internal Root Guard"),He=new c("@ngrx/store Internal Initial State"),X=new c("@ngrx/store Initial State"),at=new c("@ngrx/store Reducer Factory"),qe=new c("@ngrx/store Internal Reducer Factory Provider"),ut=new c("@ngrx/store Initial Reducers"),B=new c("@ngrx/store Internal Initial Reducers"),Ge=new c("@ngrx/store Store Features"),Be=new c("@ngrx/store Internal Store Reducers"),K=new c("@ngrx/store Internal Feature Reducers"),Ke=new c("@ngrx/store Internal Feature Configs"),lt=new c("@ngrx/store Internal Store Features"),Ye=new c("@ngrx/store Internal Feature Reducers Token"),dt=new c("@ngrx/store Feature Reducers"),Qe=new c("@ngrx/store User Provided Meta Reducers"),U=new c("@ngrx/store Meta Reducers"),We=new c("@ngrx/store Internal Resolved Meta Reducers"),Je=new c("@ngrx/store User Runtime Checks Config"),Xe=new c("@ngrx/store Internal User Runtime Checks Config"),F=new c("@ngrx/store Internal Runtime Checks"),ee=new c("@ngrx/store Check if Action types are unique"),Zn=new c("@ngrx/store Root Store Provider"),Nn=new c("@ngrx/store Feature State Provider");function te(e,t={}){let i=Object.keys(e),n={};for(let o=0;o<i.length;o++){let s=i[o];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,m){s=s===void 0?t:s;let l=!1,f={};for(let h=0;h<r.length;h++){let g=r[h],E=n[g],oe=s[g],se=E(oe,m);f[g]=se,l=l||se!==oe}return l?f:s}}function Tt(e,t){return Object.keys(e).filter(i=>i!==t).reduce((i,n)=>Object.assign(i,{[n]:e[n]}),{})}function pt(...e){return function(t){if(e.length===0)return t;let i=e[e.length-1];return e.slice(0,-1).reduceRight((r,o)=>o(r),i(t))}}function ft(e,t){return Array.isArray(t)&&t.length>0&&(e=pt.apply(null,[...t,e])),(i,n)=>{let r=e(i);return(o,s)=>(o=o===void 0?n:o,r(o,s))}}function kt(e){let t=Array.isArray(e)&&e.length>0?pt(...e):i=>i;return(i,n)=>(i=t(i),(r,o)=>(r=r===void 0?n:r,i(r,o)))}var O=class extends k{},V=class extends S{},_t="@ngrx/store/update-reducers",Z=(()=>{let t=class t extends _{get currentReducers(){return this.reducers}constructor(n,r,o,s){super(s(o,r)),this.dispatcher=n,this.initialState=r,this.reducers=o,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((o,{reducers:s,reducerFactory:m,metaReducers:l,initialState:f,key:h})=>{let g=typeof s=="function"?kt(l)(s,f):ft(m,l)(s,f);return o[h]=g,o},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=v(v({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=Tt(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:_t,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(a(V),a(X),a(ut),a(at))},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})(),jt=[Z,{provide:O,useExisting:Z},{provide:V,useExisting:S}],ne=(()=>{let t=class t extends ce{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ce(t)))(o||t)}})(),t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})(),At=[ne],N=class extends k{},et=(()=>{let t=class t extends _{constructor(n,r,o,s){super(s);let l=n.pipe(ue(ae)).pipe(he(r)),f={state:s},h=l.pipe(fe(Dt,f));this.stateSubscription=h.subscribe(({state:g,action:E})=>{this.next(g),o.next(E)}),this.state=q(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=st,t.\u0275fac=function(r){return new(r||t)(a(S),a(O),a(ne),a(X))},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})();function Dt(e={state:void 0},[t,i]){let{state:n}=e;return{state:i(n,t),action:t}}var Pt=[et,{provide:N,useExisting:et}],M=(()=>{let t=class t extends k{constructor(n,r,o){super(),this.actionsObserver=r,this.reducerManager=o,this.source=n,this.state=n.state}select(n,...r){return Vt.call(null,n,...r)(this)}selectSignal(n,r){return P(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(a(N),a(S),a(Z))},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})(),Ut=[M];function Vt(e,t,...i){return function(r){let o;if(typeof e=="string"){let s=[t,...i].filter(Boolean);o=r.pipe(pe(e,...s))}else if(typeof e=="function")o=r.pipe(le(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(de())}}var re="https://ngrx.io/guide/store/configuration/runtime-checks";function tt(e){return e===void 0}function nt(e){return e===null}function ht(e){return Array.isArray(e)}function Zt(e){return typeof e=="string"}function Nt(e){return typeof e=="boolean"}function zt(e){return typeof e=="number"}function mt(e){return typeof e=="object"&&e!==null}function $t(e){return mt(e)&&!ht(e)}function Lt(e){if(!$t(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Q(e){return typeof e=="function"}function Ht(e){return Q(e)&&e.hasOwnProperty("\u0275cmp")}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Gt(e){return e instanceof c?y(e):e}function Bt(e,t){return t.map((i,n)=>{if(e[n]instanceof c){let r=y(e[n]);return{key:i.key,reducerFactory:r.reducerFactory?r.reducerFactory:te,metaReducers:r.metaReducers?r.metaReducers:[],initialState:r.initialState}}return i})}function Kt(e){return e.map(t=>t instanceof c?y(t):t)}function gt(e){return typeof e=="function"?e():e}function Yt(e,t){return e.concat(t)}function Qt(){if(y(M,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Wt(e,t){return function(i,n){let r=t.action(n)?W(n):n,o=e(i,r);return t.state()?W(o):o}}function W(e){Object.freeze(e);let t=Q(e);return Object.getOwnPropertyNames(e).forEach(i=>{if(!i.startsWith("\u0275")&&qt(e,i)&&(!t||i!=="caller"&&i!=="callee"&&i!=="arguments")){let n=e[i];(mt(n)||Q(n))&&!Object.isFrozen(n)&&W(n)}}),e}function Jt(e,t){return function(i,n){if(t.action(n)){let o=J(n);rt(o,"action")}let r=e(i,n);if(t.state()){let o=J(r);rt(o,"state")}return r}}function J(e,t=[]){return(tt(e)||nt(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let o=e[r];return Ht(o)?n:tt(o)||nt(o)||zt(o)||Nt(o)||Zt(o)||ht(o)?!1:Lt(o)?J(o,[...t,r]):{path:[...t,r],value:o}},!1)}function rt(e,t){if(e===!1)return;let i=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${i}". ${re}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=i,n}function Xt(e,t){return function(i,n){if(t.action(n)&&!be.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${re}#strictactionwithinngzone`);return e(i,n)}}function en(e){return _e()?v({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function tn({strictActionSerializability:e,strictStateSerializability:t}){return i=>e||t?Jt(i,{action:n=>e&&!ie(n),state:()=>t}):i}function nn({strictActionImmutability:e,strictStateImmutability:t}){return i=>e||t?Wt(i,{action:n=>e&&!ie(n),state:()=>t}):i}function ie(e){return e.type.startsWith("@ngrx")}function rn({strictActionWithinNgZone:e}){return t=>e?Xt(t,{action:i=>e&&!ie(i)}):t}function on(e){return[{provide:Xe,useValue:e},{provide:Je,useFactory:sn,deps:[Xe]},{provide:F,deps:[Je],useFactory:en},{provide:U,multi:!0,deps:[F],useFactory:nn},{provide:U,multi:!0,deps:[F],useFactory:tn},{provide:U,multi:!0,deps:[F],useFactory:rn}]}function vt(){return[{provide:ee,multi:!0,deps:[F],useFactory:cn}]}function sn(e){return e}function cn(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(Y).filter(([,i])=>i>1).map(([i])=>i);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(i=>`"${i}"`).join(", ")}. ${re}#strictactiontypeuniqueness`)}function an(e={},t={}){return[{provide:ct,useFactory:Qt},{provide:He,useValue:t.initialState},{provide:X,useFactory:gt,deps:[He]},{provide:B,useValue:e},{provide:Be,useExisting:e instanceof c?e:B},{provide:ut,deps:[B,[new z(Be)]],useFactory:Gt},{provide:Qe,useValue:t.metaReducers?t.metaReducers:[]},{provide:We,deps:[U,Qe],useFactory:Yt},{provide:qe,useValue:t.reducerFactory?t.reducerFactory:te},{provide:at,deps:[qe,We],useFactory:ft},It,jt,At,Pt,Ut,on(t.runtimeChecks),vt()]}function un(e,t,i={}){return[{provide:Ke,multi:!0,useValue:e instanceof Object?{}:i},{provide:Ge,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(i instanceof c)&&i.reducerFactory?i.reducerFactory:te,metaReducers:!(i instanceof c)&&i.metaReducers?i.metaReducers:[],initialState:!(i instanceof c)&&i.initialState?i.initialState:void 0}},{provide:lt,deps:[Ke,Ge],useFactory:Bt},{provide:K,multi:!0,useValue:e instanceof Object?e.reducer:t},{provide:Ye,multi:!0,useExisting:t instanceof c?t:K},{provide:dt,multi:!0,deps:[K,[new z(Ye)]],useFactory:Kt},vt()]}var yt=(()=>{let t=class t{constructor(n,r,o,s,m,l){}};t.\u0275fac=function(r){return new(r||t)(a(S),a(O),a(ne),a(M),a(ct,8),a(ee,8))},t.\u0275mod=A({type:t}),t.\u0275inj=j({});let e=t;return e})(),ln=(()=>{let t=class t{constructor(n,r,o,s,m){this.features=n,this.featureReducers=r,this.reducerManager=o;let l=n.map((f,h)=>{let E=r.shift()[h];return T(v({},f),{reducers:E,initialState:gt(f.initialState)})});o.addFeatures(l)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}};t.\u0275fac=function(r){return new(r||t)(a(lt),a(dt),a(Z),a(yt),a(ee,8))},t.\u0275mod=A({type:t}),t.\u0275inj=j({});let e=t;return e})(),Ct=(()=>{let t=class t{static forRoot(n,r){return{ngModule:yt,providers:[...an(n,r)]}}static forFeature(n,r,o={}){return{ngModule:ln,providers:[...un(n,r,o)]}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=A({type:t}),t.\u0275inj=j({});let e=t;return e})();function Rt(...e){let t=e.pop(),i=e.map(n=>n.type);return{reducer:t,types:i}}function bt(e,...t){let i=new Map;for(let n of t)for(let r of n.types){let o=i.get(r);if(o){let s=(m,l)=>n.reducer(o(m,l),l);i.set(r,s)}else i.set(r,n.reducer)}return function(n=e,r){let o=i.get(r.type);return o?o(n,r):n}}var I=it("[App Component] Set Title",ot());var St={production:!1,apiUrl:"http://52.178.5.21:8081"};var pn=(e,t)=>t.title,fn=()=>({title:"Explore the Docs",link:"https://angular.dev"}),hn=()=>({title:"Learn with Tutorials",link:"https://angular.dev/tutorials"}),mn=()=>({title:"CLI Docs",link:"https://angular.dev/tools/cli"}),gn=()=>({title:"Angular Language Service",link:"https://angular.dev/tools/language-service"}),vn=()=>({title:"Angular DevTools",link:"https://angular.dev/tools/devtools"}),yn=(e,t,i,n,r)=>[e,t,i,n,r];function Cn(e,t){if(e&1&&(u(0,"a",22)(1,"span"),x(2),d(),R(),u(3,"svg",33),p(4,"path",34),d()()),e&2){let i=t.$implicit;Se("href",i.link,Re),D(2),Fe(i.title)}}var Et=(()=>{let t=class t{constructor(n,r){this.http=n,this.store=r,this.title$=r.select("title")}ngOnInit(){this.getTitleFromAPI()}getTitleFromAPI(){this.http.get(`${St.apiUrl}/api/title`).subscribe({next:n=>{this.store.dispatch(I({title:n.title}))},error:n=>{this.store.dispatch(I({title:"Error"}))}})}refreshTitle(){this.getTitleFromAPI()}};t.\u0275fac=function(r){return new(r||t)(L(De),L(M))},t.\u0275cmp=ge({type:t,selectors:[["app-root"]],standalone:!0,features:[Me],decls:43,vars:14,consts:[[1,"main"],[1,"content"],[1,"left-side"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 982 239","fill","none",1,"angular-logo"],["clip-path","url(#a)"],["fill","url(#b)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["fill","url(#c)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["id","c","cx","0","cy","0","r","1","gradientTransform","rotate(118.122 171.182 60.81) scale(205.794)","gradientUnits","userSpaceOnUse"],["stop-color","#FF41F8"],["offset",".707","stop-color","#FF41F8","stop-opacity",".5"],["offset","1","stop-color","#FF41F8","stop-opacity","0"],["id","b","x1","0","x2","982","y1","192","y2","192","gradientUnits","userSpaceOnUse"],["stop-color","#F0060B"],["offset","0","stop-color","#F0070C"],["offset",".526","stop-color","#CC26D5"],["offset","1","stop-color","#7702FF"],["id","a"],["fill","#fff","d","M0 0h982v239H0z"],[1,"btn","btn-primary",3,"click"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],["target","_blank","rel","noopener",1,"pill",3,"href"],[1,"social-links"],["href","https://github.com/angular/angular","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://twitter.com/angular","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"]],template:function(r,o){r&1&&(u(0,"main",0)(1,"div",1)(2,"div",2),R(),u(3,"svg",3)(4,"g",4),p(5,"path",5)(6,"path",6),d(),u(7,"defs")(8,"radialGradient",7),p(9,"stop",8)(10,"stop",9)(11,"stop",10),d(),u(12,"linearGradient",11),p(13,"stop",12)(14,"stop",13)(15,"stop",14)(16,"stop",15),d(),u(17,"clipPath",16),p(18,"path",17),d()()(),w(),u(19,"h1"),x(20),Te(21,"async"),d(),u(22,"p")(23,"button",18),xe("click",function(){return o.refreshTitle()}),x(24,"Refresh Title"),d()(),u(25,"p"),x(26,"Congratulations! Your app is running. \u{1F389}"),d()(),p(27,"div",19),u(28,"div",20)(29,"div",21),Ee(30,Cn,5,2,"a",22,pn),d(),u(32,"div",23)(33,"a",24),R(),u(34,"svg",25),p(35,"path",26),d()(),w(),u(36,"a",27),R(),u(37,"svg",28),p(38,"path",29),d()(),w(),u(39,"a",30),R(),u(40,"svg",31),p(41,"path",32),d()()()()()(),w(),p(42,"router-outlet")),r&2&&(D(20),Oe("Hello, ",ke(21,1,o.title$),""),D(10),we(Ie(8,yn,b(3,fn),b(4,hn),b(5,mn),b(6,gn),b(7,vn))))},dependencies:[$e,Ve,Ae],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let e=t;return e})();var wt=[];var Rn="",xt=bt(Rn,Rt(I,(e,{title:t})=>t));var Ft={providers:[Le(wt),Ne(),Pe(Ue()),ve(Ct.forRoot({title:xt}))]};var bn={providers:[ze()]},Ot=je(Ft,bn);var Sn=()=>Ze(Et,Ot),vr=Sn;export{vr as a};
