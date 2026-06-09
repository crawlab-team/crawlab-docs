import{c as Oa}from"./commonjsHelpers-725317a4.js";function Q_(fr,qn){for(var zn=0;zn<qn.length;zn++){const Cr=qn[zn];if(typeof Cr!="string"&&!Array.isArray(Cr)){for(const ue in Cr)if(ue!=="default"&&!(ue in fr)){const te=Object.getOwnPropertyDescriptor(Cr,ue);te&&Object.defineProperty(fr,ue,te.get?te:{enumerable:!0,get:()=>Cr[ue]})}}}return Object.freeze(Object.defineProperty(fr,Symbol.toStringTag,{value:"Module"}))}var Lb={};/*! RapiDoc 9.3.4 | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */(()=>{var fr,qn,zn={656:(te,re,z)=>{const L=window,J=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),me=new WeakMap;class ge{constructor(t,r,n){if(this._$cssResult$=!0,n!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(J&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=me.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&me.set(r,t))}return t}toString(){return this.cssText}}const S=e=>new ge(typeof e=="string"?e:e+"",void 0,he),H=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,a,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new ge(r,e,he)},oe=J?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return S(r)})(e):e;var pe;const ne=window,ye=ne.trustedTypes,we=ye?ye.emptyScript:"",ce=ne.reactiveElementPolyfillSupport,ie={toAttribute(e,t){switch(t){case Boolean:e=e?we:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ae=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:ae};class q extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const a=this._$Ep(n,r);a!==void 0&&(this._$Ev.set(a,n),t.push(a))}),t}static createProperty(t,r=G){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,a=this.getPropertyDescriptor(t,n,r);a!==void 0&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(a){const o=this[t];this[r]=a,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const a of n)this.createProperty(a,r[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const a of n)r.unshift(oe(a))}else t!==void 0&&r.push(oe(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((n,a)=>{J?n.adoptedStyleSheets=a.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):a.forEach(o=>{const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,n.appendChild(i)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=G){var a;const o=this.constructor._$Ep(t,n);if(o!==void 0&&n.reflect===!0){const i=(((a=n.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?n.converter:ie).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$El=null}}_$AK(t,r){var n;const a=this.constructor,o=a._$Ev.get(t);if(o!==void 0&&this._$El!==o){const i=a.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:ie;this._$El=o,this[o]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let a=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ae)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,o)=>this[o]=a),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(a=>{var o;return(o=a.hostUpdate)===null||o===void 0?void 0:o.call(a)}),this.update(n)):this._$Ek()}catch(a){throw r=!1,this._$Ek(),a}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var a;return(a=n.hostUpdated)===null||a===void 0?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var M;q.finalized=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},ce==null||ce({ReactiveElement:q}),((pe=ne.reactiveElementVersions)!==null&&pe!==void 0?pe:ne.reactiveElementVersions=[]).push("1.6.1");const Z=window,ee=Z.trustedTypes,W=ee?ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,K=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+K,Ce=`<${fe}>`,Le=document,Pe=(e="")=>Le.createComment(e),Ie=e=>e===null||typeof e!="object"&&typeof e!="function",Be=Array.isArray,nt=e=>Be(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,Ne=/>/g,_e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,qe=/"/g,Ye=/^(?:script|style|textarea|title)$/i,it=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),y=it(1),Qe=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),xt=new WeakMap,rt=Le.createTreeWalker(Le,129,null,!1),Qt=(e,t)=>{const r=e.length-1,n=[];let a,o=t===2?"<svg>":"",i=Oe;for(let l=0;l<r;l++){const c=e[l];let h,d,f=-1,m=0;for(;m<c.length&&(i.lastIndex=m,d=i.exec(c),d!==null);)m=i.lastIndex,i===Oe?d[1]==="!--"?i=Fe:d[1]!==void 0?i=Ne:d[2]!==void 0?(Ye.test(d[2])&&(a=RegExp("</"+d[2],"g")),i=_e):d[3]!==void 0&&(i=_e):i===_e?d[0]===">"?(i=a??Oe,f=-1):d[1]===void 0?f=-2:(f=i.lastIndex-d[2].length,h=d[1],i=d[3]===void 0?_e:d[3]==='"'?qe:at):i===qe||i===at?i=_e:i===Fe||i===Ne?i=Oe:(i=_e,a=void 0);const v=i===_e&&e[l+1].startsWith("/>")?" ":"";o+=i===Oe?c+Ce:f>=0?(n.push(h),c.slice(0,f)+"$lit$"+c.slice(f)+K+v):c+K+(f===-2?(n.push(void 0),l):v)}const s=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[W!==void 0?W.createHTML(s):s,n]};class Wt{constructor({strings:t,_$litType$:r},n){let a;this.parts=[];let o=0,i=0;const s=t.length-1,l=this.parts,[c,h]=Qt(t,r);if(this.el=Wt.createElement(c,n),rt.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(a=rt.nextNode())!==null&&l.length<s;){if(a.nodeType===1){if(a.hasAttributes()){const d=[];for(const f of a.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(K)){const m=h[i++];if(d.push(f),m!==void 0){const v=a.getAttribute(m.toLowerCase()+"$lit$").split(K),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:w[2],strings:v,ctor:w[1]==="."?Fs:w[1]==="?"?Ds:w[1]==="@"?u:qr})}else l.push({type:6,index:o})}for(const f of d)a.removeAttribute(f)}if(Ye.test(a.tagName)){const d=a.textContent.split(K),f=d.length-1;if(f>0){a.textContent=ee?ee.emptyScript:"";for(let m=0;m<f;m++)a.append(d[m],Pe()),rt.nextNode(),l.push({type:2,index:++o});a.append(d[f],Pe())}}}else if(a.nodeType===8)if(a.data===fe)l.push({type:2,index:o});else{let d=-1;for(;(d=a.data.indexOf(K,d+1))!==-1;)l.push({type:7,index:o}),d+=K.length-1}o++}}static createElement(t,r){const n=Le.createElement("template");return n.innerHTML=t,n}}function qt(e,t,r=e,n){var a,o,i,s;if(t===Qe)return t;let l=n!==void 0?(a=r._$Co)===null||a===void 0?void 0:a[n]:r._$Cl;const c=Ie(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=qt(e,l._$AS(e,t.values),l,n)),t}class mr{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:n},parts:a}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Le).importNode(n,!0);rt.currentNode=o;let i=rt.nextNode(),s=0,l=0,c=a[0];for(;c!==void 0;){if(s===c.index){let h;c.type===2?h=new Rt(i,i.nextSibling,this,t):c.type===1?h=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(h=new g(i,this,t)),this.u.push(h),c=a[++l]}s!==(c==null?void 0:c.index)&&(i=rt.nextNode(),s++)}return o}p(t){let r=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Rt{constructor(t,r,n,a){var o;this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=a,this._$Cm=(o=a==null?void 0:a.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qt(this,t,r),Ie(t)?t===Ue||t==null||t===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):t!==this._$AH&&t!==Qe&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nt(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==Ue&&Ie(this._$AH)?this._$AA.nextSibling.data=t:this.T(Le.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:a}=t,o=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Wt.createElement(a.h,this.options)),a);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(n);else{const i=new mr(o,this),s=i.v(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(t){let r=xt.get(t.strings);return r===void 0&&xt.set(t.strings,r=new Wt(t)),r}k(t){Be(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,a=0;for(const o of t)a===r.length?r.push(n=new Rt(this.O(Pe()),this.O(Pe()),this,this.options)):n=r[a],n._$AI(o),a++;a<r.length&&(this._$AR(n&&n._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class qr{constructor(t,r,n,a,o){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,a){const o=this.strings;let i=!1;if(o===void 0)t=qt(this,t,r,0),i=!Ie(t)||t!==this._$AH&&t!==Qe,i&&(this._$AH=t);else{const s=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=qt(this,s[n+l],r,l),c===Qe&&(c=this._$AH[l]),i||(i=!Ie(c)||c!==this._$AH[l]),c===Ue?t=Ue:t!==Ue&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}i&&!a&&this.j(t)}j(t){t===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fs extends qr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ue?void 0:t}}const gr=ee?ee.emptyScript:"";class Ds extends qr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Ue?this.element.setAttribute(this.name,gr):this.element.removeAttribute(this.name)}}class u extends qr{constructor(t,r,n,a,o){super(t,r,n,a,o),this.type=5}_$AI(t,r=this){var n;if((t=(n=qt(this,t,r,0))!==null&&n!==void 0?n:Ue)===Qe)return;const a=this._$AH,o=t===Ue&&a!==Ue||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==Ue&&(a===Ue||o);o&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class g{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){qt(this,t)}}const b=Z.litHtmlPolyfillSupport;b==null||b(Wt,Rt),((M=Z.litHtmlVersions)!==null&&M!==void 0?M:Z.litHtmlVersions=[]).push("2.6.1");var j,P;class R extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((n,a,o)=>{var i,s;const l=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:a;let c=l._$litPart$;if(c===void 0){const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=c=new Rt(a.insertBefore(Pe(),h),h,void 0,o??{})}return c._$AI(n),c})(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Qe}}R.finalized=!0,R._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:R});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:R});function Te(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}((P=globalThis.litElementVersions)!==null&&P!==void 0?P:globalThis.litElementVersions=[]).push("3.2.0");let Re={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const ct=/[&<>"']/,Je=new RegExp(ct.source,"g"),dt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fb=new RegExp(dt.source,"g"),Db={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ou=e=>Db[e];function jt(e,t){if(t){if(ct.test(e))return e.replace(Je,Ou)}else if(dt.test(e))return e.replace(Fb,Ou);return e}const Bb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Tu(e){return e.replace(Bb,(t,r)=>(r=r.toLowerCase())==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):"")}const Nb=/(^|[^\[])\^/g;function ot(e,t){e=typeof e=="string"?e:e.source,t=t||"";const r={replace:(n,a)=>(a=(a=a.source||a).replace(Nb,"$1"),e=e.replace(n,a),r),getRegex:()=>new RegExp(e,t)};return r}const qb=/[^\w:]/g,zb=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Cu(e,t,r){if(e){let n;try{n=decodeURIComponent(Tu(r)).replace(qb,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!zb.test(r)&&(r=function(n,a){Fo[" "+n]||(Ub.test(n)?Fo[" "+n]=n+"/":Fo[" "+n]=Bo(n,"/",!0));const o=(n=Fo[" "+n]).indexOf(":")===-1;return a.substring(0,2)==="//"?o?a:n.replace(Mb,"$1")+a:a.charAt(0)==="/"?o?a:n.replace(Hb,"$1")+a:n+a}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Fo={},Ub=/^[^:]+:\/*[^/]*$/,Mb=/^([^:]+:)[\s\S]*$/,Hb=/^([^:]+:\/*[^/]*)[\s\S]*$/,Do={exec:function(){}};function sr(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function ju(e,t){const r=e.replace(/\|/g,(a,o,i)=>{let s=!1,l=o;for(;--l>=0&&i[l]==="\\";)s=!s;return s?"|":" |"}).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function Bo(e,t,r){const n=e.length;if(n===0)return"";let a=0;for(;a<n;){const o=e.charAt(n-a-1);if(o!==t||r){if(o===t||!r)break;a++}else a++}return e.slice(0,n-a)}function Iu(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function _u(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function Pu(e,t,r,n){const a=t.href,o=t.title?jt(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){n.state.inLink=!0;const s={type:"link",raw:r,href:a,title:o,text:i,tokens:n.inlineTokens(i)};return n.state.inLink=!1,s}return{type:"image",raw:r,href:a,title:o,text:jt(i)}}class Bs{constructor(t){this.options=t||Re}space(t){const r=this.rules.block.newline.exec(t);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(t){const r=this.rules.block.code.exec(t);if(r){const n=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Bo(n,`
`)}}}fences(t){const r=this.rules.block.fences.exec(t);if(r){const n=r[0],a=function(o,i){const s=o.match(/^(\s+)(?:```)/);if(s===null)return i;const l=s[1];return i.split(`
`).map(c=>{const h=c.match(/^\s+/);if(h===null)return c;const[d]=h;return d.length>=l.length?c.slice(l.length):c}).join(`
`)}(n,r[3]||"");return{type:"code",raw:n,lang:r[2]?r[2].trim().replace(this.rules.inline._escapes,"$1"):r[2],text:a}}}heading(t){const r=this.rules.block.heading.exec(t);if(r){let n=r[2].trim();if(/#$/.test(n)){const a=Bo(n,"#");this.options.pedantic?n=a.trim():a&&!/ $/.test(a)||(n=a.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const r=this.rules.block.hr.exec(t);if(r)return{type:"hr",raw:r[0]}}blockquote(t){const r=this.rules.block.blockquote.exec(t);if(r){const n=r[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(n);return this.lexer.state.top=a,{type:"blockquote",raw:r[0],tokens:o,text:n}}}list(t){let r=this.rules.block.list.exec(t);if(r){let n,a,o,i,s,l,c,h,d,f,m,v,w=r[1].trim();const x=w.length>1,p={type:"list",raw:"",ordered:x,start:x?+w.slice(0,-1):"",loose:!1,items:[]};w=x?`\\d{1,9}\\${w.slice(-1)}`:`\\${w}`,this.options.pedantic&&(w=x?w:"[*+-]");const k=new RegExp(`^( {0,3}${w})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(v=!1,r=k.exec(t))&&!this.rules.block.hr.test(t);){if(n=r[0],t=t.substring(n.length),h=r[2].split(`
`,1)[0].replace(/^\t+/,C=>" ".repeat(3*C.length)),d=t.split(`
`,1)[0],this.options.pedantic?(i=2,m=h.trimLeft()):(i=r[2].search(/[^ ]/),i=i>4?1:i,m=h.slice(i),i+=r[1].length),l=!1,!h&&/^ *$/.test(d)&&(n+=d+`
`,t=t.substring(d.length+1),v=!0),!v){const C=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),F=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;t&&(f=t.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!O.test(d))&&!U.test(d)&&!C.test(d)&&!F.test(t);){if(d.search(/[^ ]/)>=i||!d.trim())m+=`
`+d.slice(i);else{if(l||h.search(/[^ ]/)>=4||O.test(h)||U.test(h)||F.test(h))break;m+=`
`+d}l||d.trim()||(l=!0),n+=f+`
`,t=t.substring(f.length+1),h=d.slice(i)}}p.loose||(c?p.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(m),a&&(o=a[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),p.items.push({type:"list_item",raw:n,task:!!a,checked:o,loose:!1,text:m}),p.raw+=n}p.items[p.items.length-1].raw=n.trimRight(),p.items[p.items.length-1].text=m.trimRight(),p.raw=p.raw.trimRight();const $=p.items.length;for(s=0;s<$;s++)if(this.lexer.state.top=!1,p.items[s].tokens=this.lexer.blockTokens(p.items[s].text,[]),!p.loose){const C=p.items[s].tokens.filter(O=>O.type==="space"),F=C.length>0&&C.some(O=>/\n.*\n/.test(O.raw));p.loose=F}if(p.loose)for(s=0;s<$;s++)p.items[s].loose=!0;return p}}html(t){const r=this.rules.block.html.exec(t);if(r){const n={type:"html",raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(r[0]):jt(r[0]);n.type="paragraph",n.text=a,n.tokens=this.lexer.inline(a)}return n}}def(t){const r=this.rules.block.def.exec(t);if(r){const n=r[1].toLowerCase().replace(/\s+/g," "),a=r[2]?r[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline._escapes,"$1"):r[3];return{type:"def",tag:n,raw:r[0],href:a,title:o}}}table(t){const r=this.rules.block.table.exec(t);if(r){const n={type:"table",header:ju(r[1]).map(a=>({text:a})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=r[0];let a,o,i,s,l=n.align.length;for(a=0;a<l;a++)/^ *-+: *$/.test(n.align[a])?n.align[a]="right":/^ *:-+: *$/.test(n.align[a])?n.align[a]="center":/^ *:-+ *$/.test(n.align[a])?n.align[a]="left":n.align[a]=null;for(l=n.rows.length,a=0;a<l;a++)n.rows[a]=ju(n.rows[a],n.header.length).map(c=>({text:c}));for(l=n.header.length,o=0;o<l;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(l=n.rows.length,o=0;o<l;o++)for(s=n.rows[o],i=0;i<s.length;i++)s[i].tokens=this.lexer.inline(s[i].text);return n}}}lheading(t){const r=this.rules.block.lheading.exec(t);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(t){const r=this.rules.block.paragraph.exec(t);if(r){const n=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const r=this.rules.block.text.exec(t);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(t){const r=this.rules.inline.escape.exec(t);if(r)return{type:"escape",raw:r[0],text:jt(r[1])}}tag(t){const r=this.rules.inline.tag.exec(t);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):jt(r[0]):r[0]}}link(t){const r=this.rules.inline.link.exec(t);if(r){const n=r[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=Bo(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{const i=function(s,l){if(s.indexOf(l[1])===-1)return-1;const c=s.length;let h=0,d=0;for(;d<c;d++)if(s[d]==="\\")d++;else if(s[d]===l[0])h++;else if(s[d]===l[1]&&(h--,h<0))return d;return-1}(r[2],"()");if(i>-1){const s=(r[0].indexOf("!")===0?5:4)+r[1].length+i;r[2]=r[2].substring(0,i),r[0]=r[0].substring(0,s).trim(),r[3]=""}}let a=r[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);i&&(a=i[1],o=i[3])}else o=r[3]?r[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(n)?a.slice(1):a.slice(1,-1)),Pu(r,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}}reflink(t,r){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let a=(n[2]||n[1]).replace(/\s+/g," ");if(a=r[a.toLowerCase()],!a){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Pu(n,a,n[0],this.lexer)}}emStrong(t,r,n=""){let a=this.rules.inline.emStrong.lDelim.exec(t);if(!a||a[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=a[1]||a[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const i=a[0].length-1;let s,l,c=i,h=0;const d=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,r=r.slice(-1*t.length+i);(a=d.exec(r))!=null;){if(s=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!s)continue;if(l=s.length,a[3]||a[4]){c+=l;continue}if((a[5]||a[6])&&i%3&&!((i+l)%3)){h+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+h);const f=t.slice(0,i+a.index+(a[0].length-s.length)+l);if(Math.min(i,l)%2){const v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}const m=f.slice(2,-2);return{type:"strong",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(t){const r=this.rules.inline.code.exec(t);if(r){let n=r[2].replace(/\n/g," ");const a=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return a&&o&&(n=n.substring(1,n.length-1)),n=jt(n,!0),{type:"codespan",raw:r[0],text:n}}}br(t){const r=this.rules.inline.br.exec(t);if(r)return{type:"br",raw:r[0]}}del(t){const r=this.rules.inline.del.exec(t);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(t,r){const n=this.rules.inline.autolink.exec(t);if(n){let a,o;return n[2]==="@"?(a=jt(this.options.mangle?r(n[1]):n[1]),o="mailto:"+a):(a=jt(n[1]),o=a),{type:"link",raw:n[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}url(t,r){let n;if(n=this.rules.inline.url.exec(t)){let a,o;if(n[2]==="@")a=jt(this.options.mangle?r(n[0]):n[0]),o="mailto:"+a;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);a=jt(n[0]),o=n[1]==="www."?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t,r){const n=this.rules.inline.text.exec(t);if(n){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):jt(n[0]):n[0]:jt(this.options.smartypants?r(n[0]):n[0]),{type:"text",raw:n[0],text:a}}}}const Ee={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Do,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Ee.def=ot(Ee.def).replace("label",Ee._label).replace("title",Ee._title).getRegex(),Ee.bullet=/(?:[*+-]|\d{1,9}[.)])/,Ee.listItemStart=ot(/^( *)(bull) */).replace("bull",Ee.bullet).getRegex(),Ee.list=ot(Ee.list).replace(/bull/g,Ee.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ee.def.source+")").getRegex(),Ee._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ee._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Ee.html=ot(Ee.html,"i").replace("comment",Ee._comment).replace("tag",Ee._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ee.paragraph=ot(Ee._paragraph).replace("hr",Ee.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ee._tag).getRegex(),Ee.blockquote=ot(Ee.blockquote).replace("paragraph",Ee.paragraph).getRegex(),Ee.normal=sr({},Ee),Ee.gfm=sr({},Ee.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Ee.gfm.table=ot(Ee.gfm.table).replace("hr",Ee.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ee._tag).getRegex(),Ee.gfm.paragraph=ot(Ee._paragraph).replace("hr",Ee.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ee.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ee._tag).getRegex(),Ee.pedantic=sr({},Ee.normal,{html:ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ee._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Do,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ot(Ee.normal._paragraph).replace("hr",Ee.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ee.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const xe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Do,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Do,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Wb(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ru(e){let t,r,n="";const a=e.length;for(t=0;t<a;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}xe._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",xe.punctuation=ot(xe.punctuation).replace(/punctuation/g,xe._punctuation).getRegex(),xe.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,xe.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,xe._comment=ot(Ee._comment).replace("(?:-->|$)","-->").getRegex(),xe.emStrong.lDelim=ot(xe.emStrong.lDelim).replace(/punct/g,xe._punctuation).getRegex(),xe.emStrong.rDelimAst=ot(xe.emStrong.rDelimAst,"g").replace(/punct/g,xe._punctuation).getRegex(),xe.emStrong.rDelimUnd=ot(xe.emStrong.rDelimUnd,"g").replace(/punct/g,xe._punctuation).getRegex(),xe._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,xe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,xe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,xe.autolink=ot(xe.autolink).replace("scheme",xe._scheme).replace("email",xe._email).getRegex(),xe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,xe.tag=ot(xe.tag).replace("comment",xe._comment).replace("attribute",xe._attribute).getRegex(),xe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,xe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,xe.link=ot(xe.link).replace("label",xe._label).replace("href",xe._href).replace("title",xe._title).getRegex(),xe.reflink=ot(xe.reflink).replace("label",xe._label).replace("ref",Ee._label).getRegex(),xe.nolink=ot(xe.nolink).replace("ref",Ee._label).getRegex(),xe.reflinkSearch=ot(xe.reflinkSearch,"g").replace("reflink",xe.reflink).replace("nolink",xe.nolink).getRegex(),xe.normal=sr({},xe),xe.pedantic=sr({},xe.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ot(/^!?\[(label)\]\((.*?)\)/).replace("label",xe._label).getRegex(),reflink:ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xe._label).getRegex()}),xe.gfm=sr({},xe.normal,{escape:ot(xe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),xe.gfm.url=ot(xe.gfm.url,"i").replace("email",xe.gfm._extended_email).getRegex(),xe.breaks=sr({},xe.gfm,{br:ot(xe.br).replace("{2,}","*").getRegex(),text:ot(xe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class jr{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Re,this.options.tokenizer=this.options.tokenizer||new Bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:Ee.normal,inline:xe.normal};this.options.pedantic?(r.block=Ee.pedantic,r.inline=xe.pedantic):this.options.gfm&&(r.block=Ee.gfm,this.options.breaks?r.inline=xe.breaks:r.inline=xe.gfm),this.tokenizer.rules=r}static get rules(){return{block:Ee,inline:xe}}static lex(t,r){return new jr(r).lex(t)}static lexInline(t,r){return new jr(r).inlineTokens(t)}lex(t){let r;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(t,r=[]){let n,a,o,i;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,(s,l,c)=>l+"    ".repeat(c.length));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>!!(n=s.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),a=r[r.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?r.push(n):(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),a=r[r.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(a.raw+=`
`+n.raw,a.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),r.push(n);else{if(o=t,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(h){c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(s=Math.min(s,c))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o)))a=r[r.length-1],i&&a.type==="paragraph"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):r.push(n),i=o.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),a=r[r.length-1],a&&a.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):r.push(n);else if(t){const s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let n,a,o,i,s,l,c=t;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)h.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,i.index)+"["+_u("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,i.index)+"["+_u("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,i.index+i[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>!!(n=h.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),a=r[r.length-1],a&&n.type==="text"&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),a=r[r.length-1],a&&n.type==="text"&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(n=this.tokenizer.emStrong(t,c,l))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.autolink(t,Ru))t=t.substring(n.raw.length),r.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,Ru))){if(o=t,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const d=t.slice(1);let f;this.options.extensions.startInline.forEach(function(m){f=m.call({lexer:this},d),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(o=t.substring(0,h+1))}if(n=this.tokenizer.inlineText(o,Wb))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),s=!0,a=r[r.length-1],a&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else t=t.substring(n.raw.length),r.push(n);return r}}class Ns{constructor(t){this.options=t||Re}code(t,r,n){const a=(r||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(t,a);o!=null&&o!==t&&(n=!0,t=o)}return t=t.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+jt(a)+'">'+(n?t:jt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:jt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,r,n,a){return this.options.headerIds?`<h${r} id="${this.options.headerPrefix+a.slug(n)}">${t}</h${r}>
`:`<h${r}>${t}</h${r}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,r,n){const a=r?"ol":"ul";return"<"+a+(r&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+a+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,r){return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,r){const n=r.header?"th":"td";return(r.align?`<${n} align="${r.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,r,n){if((t=Cu(this.options.sanitize,this.options.baseUrl,t))===null)return n;let a='<a href="'+t+'"';return r&&(a+=' title="'+r+'"'),a+=">"+n+"</a>",a}image(t,r,n){if((t=Cu(this.options.sanitize,this.options.baseUrl,t))===null)return n;let a=`<img src="${t}" alt="${n}"`;return r&&(a+=` title="${r}"`),a+=this.options.xhtml?"/>":">",a}text(t){return t}}class Lu{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,r,n){return""+n}image(t,r,n){return""+n}br(){return""}}class Fu{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,r){let n=t,a=0;if(this.seen.hasOwnProperty(n)){a=this.seen[t];do a++,n=t+"-"+a;while(this.seen.hasOwnProperty(n))}return r||(this.seen[t]=a,this.seen[n]=0),n}slug(t,r={}){const n=this.serialize(t);return this.getNextSafeSlug(n,r.dryrun)}}class yr{constructor(t){this.options=t||Re,this.options.renderer=this.options.renderer||new Ns,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Lu,this.slugger=new Fu}static parse(t,r){return new yr(r).parse(t)}static parseInline(t,r){return new yr(r).parseInline(t)}parse(t,r=!0){let n,a,o,i,s,l,c,h,d,f,m,v,w,x,p,k,$,C,F,O="";const U=t.length;for(n=0;n<U;n++)if(f=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(F=this.options.extensions.renderers[f.type].call({parser:this},f),F!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)))O+=F||"";else switch(f.type){case"space":continue;case"hr":O+=this.renderer.hr();continue;case"heading":O+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Tu(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case"code":O+=this.renderer.code(f.text,f.lang,f.escaped);continue;case"table":for(h="",c="",i=f.header.length,a=0;a<i;a++)c+=this.renderer.tablecell(this.parseInline(f.header[a].tokens),{header:!0,align:f.align[a]});for(h+=this.renderer.tablerow(c),d="",i=f.rows.length,a=0;a<i;a++){for(l=f.rows[a],c="",s=l.length,o=0;o<s;o++)c+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(c)}O+=this.renderer.table(h,d);continue;case"blockquote":d=this.parse(f.tokens),O+=this.renderer.blockquote(d);continue;case"list":for(m=f.ordered,v=f.start,w=f.loose,i=f.items.length,d="",a=0;a<i;a++)p=f.items[a],k=p.checked,$=p.task,x="",p.task&&(C=this.renderer.checkbox(k),w?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=C+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=C+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:C}):x+=C),x+=this.parse(p.tokens,w),d+=this.renderer.listitem(x,$,k);O+=this.renderer.list(d,m,v);continue;case"html":O+=this.renderer.html(f.text);continue;case"paragraph":O+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case"text":for(d=f.tokens?this.parseInline(f.tokens):f.text;n+1<U&&t[n+1].type==="text";)f=t[++n],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);O+=r?this.renderer.paragraph(d):d;continue;default:{const A='Token with "'+f.type+'" type was not found.';if(this.options.silent)return void console.error(A);throw new Error(A)}}return O}parseInline(t,r){r=r||this.renderer;let n,a,o,i="";const s=t.length;for(n=0;n<s;n++)if(a=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(o=this.options.extensions.renderers[a.type].call({parser:this},a),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))i+=o||"";else switch(a.type){case"escape":case"text":i+=r.text(a.text);break;case"html":i+=r.html(a.text);break;case"link":i+=r.link(a.href,a.title,this.parseInline(a.tokens,r));break;case"image":i+=r.image(a.href,a.title,a.text);break;case"strong":i+=r.strong(this.parseInline(a.tokens,r));break;case"em":i+=r.em(this.parseInline(a.tokens,r));break;case"codespan":i+=r.codespan(a.text);break;case"br":i+=r.br();break;case"del":i+=r.del(this.parseInline(a.tokens,r));break;default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return i}}function le(e,t,r){if(e==null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(r=t,t=null),Iu(t=sr({},le.defaults,t||{})),r){const a=t.highlight;let o;try{o=jr.lex(e,t)}catch(l){return r(l)}const i=function(l){let c;if(!l)try{t.walkTokens&&le.walkTokens(o,t.walkTokens),c=yr.parse(o,t)}catch(h){l=h}return t.highlight=a,l?r(l):r(null,c)};if(!a||a.length<3||(delete t.highlight,!o.length))return i();let s=0;return le.walkTokens(o,function(l){l.type==="code"&&(s++,setTimeout(()=>{a(l.text,l.lang,function(c,h){if(c)return i(c);h!=null&&h!==l.text&&(l.text=h,l.escaped=!0),s--,s===0&&i()})},0))}),void(s===0&&i())}function n(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+jt(a.message+"",!0)+"</pre>";throw a}try{const a=jr.lex(e,t);if(t.walkTokens){if(t.async)return Promise.all(le.walkTokens(a,t.walkTokens)).then(()=>yr.parse(a,t)).catch(n);le.walkTokens(a,t.walkTokens)}return yr.parse(a,t)}catch(a){n(a)}}le.options=le.setOptions=function(e){var t;return sr(le.defaults,e),t=le.defaults,Re=t,le},le.getDefaults=Te,le.defaults=Re,le.use=function(...e){const t=le.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(r=>{const n=sr({},r);if(n.async=le.defaults.async||n.async,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const o=t.renderers[a.name];t.renderers[a.name]=o?function(...i){let s=a.renderer.apply(this,i);return s===!1&&(s=o.apply(this,i)),s}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[a.level]?t[a.level].unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),n.extensions=t),r.renderer){const a=le.defaults.renderer||new Ns;for(const o in r.renderer){const i=a[o];a[o]=(...s)=>{let l=r.renderer[o].apply(a,s);return l===!1&&(l=i.apply(a,s)),l}}n.renderer=a}if(r.tokenizer){const a=le.defaults.tokenizer||new Bs;for(const o in r.tokenizer){const i=a[o];a[o]=(...s)=>{let l=r.tokenizer[o].apply(a,s);return l===!1&&(l=i.apply(a,s)),l}}n.tokenizer=a}if(r.walkTokens){const a=le.defaults.walkTokens;n.walkTokens=function(o){let i=[];return i.push(r.walkTokens.call(this,o)),a&&(i=i.concat(a.call(this,o))),i}}le.setOptions(n)})},le.walkTokens=function(e,t){let r=[];for(const n of e)switch(r=r.concat(t.call(le,n)),n.type){case"table":for(const a of n.header)r=r.concat(le.walkTokens(a.tokens,t));for(const a of n.rows)for(const o of a)r=r.concat(le.walkTokens(o.tokens,t));break;case"list":r=r.concat(le.walkTokens(n.items,t));break;default:le.defaults.extensions&&le.defaults.extensions.childTokens&&le.defaults.extensions.childTokens[n.type]?le.defaults.extensions.childTokens[n.type].forEach(function(a){r=r.concat(le.walkTokens(n[a],t))}):n.tokens&&(r=r.concat(le.walkTokens(n.tokens,t)))}return r},le.parseInline=function(e,t){if(e==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");Iu(t=sr({},le.defaults,t||{}));try{const r=jr.lexInline(e,t);return t.walkTokens&&le.walkTokens(r,t.walkTokens),yr.parseInline(r,t)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+jt(r.message+"",!0)+"</pre>";throw r}},le.Parser=yr,le.parser=yr.parse,le.Renderer=Ns,le.TextRenderer=Lu,le.Lexer=jr,le.lexer=jr.lex,le.Tokenizer=Bs,le.Slugger=Fu,le.parse=le,le.options,le.setOptions,le.use,le.walkTokens,le.parseInline,yr.parse,jr.lex;var Vb=z(660),ht=z.n(Vb);z(251),z(358),z(46),z(503),z(277),z(874),z(366),z(57),z(16);const zr=H`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,Un=H`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}


input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  background-color: var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}`,Ta=H`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,Ca=H`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,qs=H`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container {
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,No=H`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,ja=H`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  padding: 4px 4px 0 4px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`,zs=H`
.nav-bar-info:focus-visible,
.nav-bar-tag:focus-visible,
.nav-bar-path:focus-visible {
  outline: 1px solid;
  box-shadow: none;
  outline-offset: -4px;
}
.nav-bar-expand-all:focus-visible,
.nav-bar-collapse-all:focus-visible,
.nav-bar-tag-icon:focus-visible {
  outline: 1px solid;
  box-shadow: none;
  outline-offset: 2px;
}
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}
.nav-bar-paths-under-tag {
  overflow:hidden;
  transition: max-height .2s ease-out, visibility .3s;
}
.collapsed .nav-bar-paths-under-tag {
  visibility: hidden;
}

.nav-bar-expand-all {
  transform: rotate(90deg); 
  cursor:pointer; 
  margin-right:10px;
}
.nav-bar-collapse-all {
  transform: rotate(270deg); 
  cursor:pointer;
}
.nav-bar-expand-all:hover, .nav-bar-collapse-all:hover {
  color: var(--primary-color);
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius:4px; 
  color: var(--nav-text-color);
  background: transparent;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.left-bar.active,
.nav-bar-h2.left-bar.active,
.nav-bar-info.left-bar.active,
.nav-bar-tag.left-bar.active,
.nav-bar-path.left-bar.active,
.nav-bar-section.left-bar.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1.colored-block.active,
.nav-bar-h2.colored-block.active,
.nav-bar-info.colored-block.active,
.nav-bar-tag.colored-block.active,
.nav-bar-path.colored-block.active,
.nav-bar-section.colored-block.operations.active {
  background-color: var(--nav-accent-color);
  color: var(--nav-accent-text-color);
  border-radius: 0;
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,Us=H`
#api-info {
  font-size: calc(var(--font-size-regular) - 1px);
  margin-top: 8px;
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,Mn=H`

`,Ia=/[\s#:?&={}]/g,cn="_rapidoc_api_key";function _a(e){return new Promise(t=>setTimeout(t,e))}function Pa(e,t){const r=t.target,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout(()=>{r.innerText="Copy"},5e3)}catch(a){console.error("Unable to copy",a)}document.body.removeChild(n)}function Ra(e,t,r="includes"){return r==="includes"?`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(`${t.method} ${t.path}`)}function Ms(e,t=new Set){return e&&Object.keys(e).forEach(r=>{var n;if(t.add(r),e[r].properties)Ms(e[r].properties,t);else if((n=e[r].items)!==null&&n!==void 0&&n.properties){var a;Ms((a=e[r].items)===null||a===void 0?void 0:a.properties,t)}}),t}function Du(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function Bu(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}function Me(e){return e&&e.t&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qo=function(e){return e&&e.Math==Math&&e},Ae=qo(typeof globalThis=="object"&&globalThis)||qo(typeof window=="object"&&window)||qo(typeof self=="object"&&self)||qo(typeof Ae=="object"&&Ae)||function(){return this}()||Function("return this")(),st=function(e){try{return!!e()}catch{return!0}},zo=!st(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),Gb=zo,Nu=Function.prototype,qu=Nu.apply,zu=Nu.call,La=typeof Reflect=="object"&&Reflect.apply||(Gb?zu.bind(qu):function(){return zu.apply(qu,arguments)}),Uu=zo,Mu=Function.prototype,Kb=Mu.bind,Hs=Mu.call,Jb=Uu&&Kb.bind(Hs,Hs),tt=Uu?function(e){return e&&Jb(e)}:function(e){return e&&function(){return Hs.apply(e,arguments)}},wt=function(e){return typeof e=="function"},pn={},Lt=!st(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Yb=zo,Uo=Function.prototype.call,zt=Yb?Uo.bind(Uo):function(){return Uo.apply(Uo,arguments)},Fa={},Hu={}.propertyIsEnumerable,Wu=Object.getOwnPropertyDescriptor,Zb=Wu&&!Hu.call({1:2},1);Fa.f=Zb?function(e){var t=Wu(this,e);return!!t&&t.enumerable}:Hu;var Ur,Mo,Mr=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Vu=tt,Qb=Vu({}.toString),Xb=Vu("".slice),un=function(e){return Xb(Qb(e),8,-1)},e0=tt,t0=st,r0=un,Ws=Ae.Object,n0=e0("".split),Vs=t0(function(){return!Ws("z").propertyIsEnumerable(0)})?function(e){return r0(e)=="String"?n0(e,""):Ws(e)}:Ws,a0=Ae.TypeError,Da=function(e){if(e==null)throw a0("Can't call method on "+e);return e},o0=Vs,i0=Da,lr=function(e){return o0(i0(e))},s0=wt,At=function(e){return typeof e=="object"?e!==null:s0(e)},Et={},Gs=Et,Ks=Ae,l0=wt,Gu=function(e){return l0(e)?e:void 0},Xt=function(e,t){return arguments.length<2?Gu(Gs[e])||Gu(Ks[e]):Gs[e]&&Gs[e][t]||Ks[e]&&Ks[e][t]},Ft=tt({}.isPrototypeOf),Ho=Xt("navigator","userAgent")||"",Ku=Ae,Js=Ho,Ju=Ku.process,Yu=Ku.Deno,Zu=Ju&&Ju.versions||Yu&&Yu.version,Qu=Zu&&Zu.v8;Qu&&(Mo=(Ur=Qu.split("."))[0]>0&&Ur[0]<4?1:+(Ur[0]+Ur[1])),!Mo&&Js&&(!(Ur=Js.match(/Edge\/(\d+)/))||Ur[1]>=74)&&(Ur=Js.match(/Chrome\/(\d+)/))&&(Mo=+Ur[1]);var Wo=Mo,Xu=Wo,c0=st,Ys=!!Object.getOwnPropertySymbols&&!c0(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Xu&&Xu<41}),ed=Ys&&!Symbol.sham&&typeof Symbol.iterator=="symbol",p0=Xt,u0=wt,d0=Ft,h0=ed,f0=Ae.Object,Zs=h0?function(e){return typeof e=="symbol"}:function(e){var t=p0("Symbol");return u0(t)&&d0(t.prototype,f0(e))},m0=Ae.String,Vo=function(e){try{return m0(e)}catch{return"Object"}},g0=wt,y0=Vo,v0=Ae.TypeError,dn=function(e){if(g0(e))return e;throw v0(y0(e)+" is not a function")},b0=dn,Qs=function(e,t){var r=e[t];return r==null?void 0:b0(r)},Xs=zt,el=wt,tl=At,x0=Ae.TypeError,Go={exports:{}},td=Ae,w0=Object.defineProperty,rl=Ae.i||function(e,t){try{w0(td,e,{value:t,configurable:!0,writable:!0})}catch{td[e]=t}return t}("__core-js_shared__",{}),rd=rl;(Go.exports=function(e,t){return rd[e]||(rd[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var $0=Da,k0=Ae.Object,Ir=function(e){return k0($0(e))},S0=Ir,A0=tt({}.hasOwnProperty),It=Object.hasOwn||function(e,t){return A0(S0(e),t)},E0=tt,O0=0,T0=Math.random(),C0=E0(1 .toString),Ko=function(e){return"Symbol("+(e===void 0?"":e)+")_"+C0(++O0+T0,36)},j0=Ae,I0=Go.exports,nd=It,_0=Ko,ad=Ys,od=ed,Ba=I0("wks"),hn=j0.Symbol,id=hn&&hn.for,P0=od?hn:hn&&hn.withoutSetter||_0,pt=function(e){if(!nd(Ba,e)||!ad&&typeof Ba[e]!="string"){var t="Symbol."+e;ad&&nd(hn,e)?Ba[e]=hn[e]:Ba[e]=od&&id?id(t):P0(t)}return Ba[e]},R0=zt,sd=At,ld=Zs,L0=Qs,F0=pt,D0=Ae.TypeError,B0=F0("toPrimitive"),N0=function(e,t){if(!sd(e)||ld(e))return e;var r,n=L0(e,B0);if(n){if(t===void 0&&(t="default"),r=R0(n,e,t),!sd(r)||ld(r))return r;throw D0("Can't convert object to primitive value")}return t===void 0&&(t="number"),function(a,o){var i,s;if(o==="string"&&el(i=a.toString)&&!tl(s=Xs(i,a))||el(i=a.valueOf)&&!tl(s=Xs(i,a))||o!=="string"&&el(i=a.toString)&&!tl(s=Xs(i,a)))return s;throw x0("Can't convert object to primitive value")}(e,t)},q0=Zs,Jo=function(e){var t=N0(e,"string");return q0(t)?t:t+""},cd=At,nl=Ae.document,z0=cd(nl)&&cd(nl.createElement),al=function(e){return z0?nl.createElement(e):{}},U0=al,pd=!Lt&&!st(function(){return Object.defineProperty(U0("div"),"a",{get:function(){return 7}}).a!=7}),M0=Lt,H0=zt,W0=Fa,V0=Mr,G0=lr,K0=Jo,J0=It,Y0=pd,ud=Object.getOwnPropertyDescriptor;pn.f=M0?ud:function(e,t){if(e=G0(e),t=K0(t),Y0)try{return ud(e,t)}catch{}if(J0(e,t))return V0(!H0(W0.f,e,t),e[t])};var Z0=st,Q0=wt,X0=/#|\.prototype\./,Na=function(e,t){var r=tx[ex(e)];return r==nx||r!=rx&&(Q0(t)?Z0(t):!!t)},ex=Na.normalize=function(e){return String(e).replace(X0,".").toLowerCase()},tx=Na.data={},rx=Na.NATIVE="N",nx=Na.POLYFILL="P",dd=Na,ax=dn,ox=zo,ix=tt(tt.bind),fn=function(e,t){return ax(e),t===void 0?e:ox?ix(e,t):function(){return e.apply(t,arguments)}},Vt={},hd=Lt&&st(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),fd=Ae,sx=At,lx=fd.String,cx=fd.TypeError,Ut=function(e){if(sx(e))return e;throw cx(lx(e)+" is not an object")},px=Lt,ux=pd,dx=hd,Yo=Ut,md=Jo,hx=Ae.TypeError,ol=Object.defineProperty,fx=Object.getOwnPropertyDescriptor;Vt.f=px?dx?function(e,t,r){if(Yo(e),t=md(t),Yo(r),typeof e=="function"&&t==="prototype"&&"value"in r&&"writable"in r&&!r.writable){var n=fx(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return ol(e,t,r)}:ol:function(e,t,r){if(Yo(e),t=md(t),Yo(r),ux)try{return ol(e,t,r)}catch{}if("get"in r||"set"in r)throw hx("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var mx=Vt,gx=Mr,Hr=Lt?function(e,t,r){return mx.f(e,t,gx(1,r))}:function(e,t,r){return e[t]=r,e},Zo=Ae,yx=La,vx=tt,bx=wt,xx=pn.f,wx=dd,Hn=Et,$x=fn,Wn=Hr,gd=It,kx=function(e){var t=function(r,n,a){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,a)}return yx(e,this,arguments)};return t.prototype=e.prototype,t},We=function(e,t){var r,n,a,o,i,s,l,c,h=e.target,d=e.global,f=e.stat,m=e.proto,v=d?Zo:f?Zo[h]:(Zo[h]||{}).prototype,w=d?Hn:Hn[h]||Wn(Hn,h,{})[h],x=w.prototype;for(a in t)r=!wx(d?a:h+(f?".":"#")+a,e.forced)&&v&&gd(v,a),i=w[a],r&&(s=e.noTargetGet?(c=xx(v,a))&&c.value:v[a]),o=r&&s?s:t[a],r&&typeof i==typeof o||(l=e.bind&&r?$x(o,Zo):e.wrap&&r?kx(o):m&&bx(o)?vx(o):o,(e.sham||o&&o.sham||i&&i.sham)&&Wn(l,"sham",!0),Wn(w,a,l),m&&(gd(Hn,n=h+"Prototype")||Wn(Hn,n,{}),Wn(Hn[n],a,o),e.real&&x&&!x[a]&&Wn(x,a,o)))},Sx=Math.ceil,Ax=Math.floor,Qo=function(e){var t=+e;return t!=t||t===0?0:(t>0?Ax:Sx)(t)},Ex=Qo,Ox=Math.max,Tx=Math.min,Xo=function(e,t){var r=Ex(e);return r<0?Ox(r+t,0):Tx(r,t)},Cx=Qo,jx=Math.min,yd=function(e){return e>0?jx(Cx(e),9007199254740991):0},Ix=yd,Wr=function(e){return Ix(e.length)},_x=lr,Px=Xo,Rx=Wr,vd=function(e){return function(t,r,n){var a,o=_x(t),i=Rx(o),s=Px(n,i);if(e&&r!=r){for(;i>s;)if((a=o[s++])!=a)return!0}else for(;i>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},il={includes:vd(!0),indexOf:vd(!1)},qa={},sl=It,Lx=lr,Fx=il.indexOf,Dx=qa,bd=tt([].push),xd=function(e,t){var r,n=Lx(e),a=0,o=[];for(r in n)!sl(Dx,r)&&sl(n,r)&&bd(o,r);for(;t.length>a;)sl(n,r=t[a++])&&(~Fx(o,r)||bd(o,r));return o},ll=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Bx=xd,Nx=ll,za=Object.keys||function(e){return Bx(e,Nx)},qx=Ir,wd=za;We({target:"Object",stat:!0,forced:st(function(){wd(1)})},{keys:function(e){return wd(qx(e))}});var $d=Et.Object.keys;const kd=Me($d);var zx=un,Ua=Array.isArray||function(e){return zx(e)=="Array"},Sd={};Sd[pt("toStringTag")]="z";var cl=String(Sd)==="[object z]",Ux=Ae,Mx=cl,Hx=wt,ei=un,Wx=pt("toStringTag"),Vx=Ux.Object,Gx=ei(function(){return arguments}())=="Arguments",Vr=Mx?ei:function(e){var t,r,n;return e===void 0?"Undefined":e===null?"Null":typeof(r=function(a,o){try{return a[o]}catch{}}(t=Vx(e),Wx))=="string"?r:Gx?ei(t):(n=ei(t))=="Object"&&Hx(t.callee)?"Arguments":n},Kx=Vr,Jx=Ae.String,mn=function(e){if(Kx(e)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return Jx(e)},ti={},Yx=Lt,Zx=hd,Qx=Vt,Xx=Ut,ew=lr,tw=za;ti.f=Yx&&!Zx?Object.defineProperties:function(e,t){Xx(e);for(var r,n=ew(t),a=tw(t),o=a.length,i=0;o>i;)Qx.f(e,r=a[i++],n[r]);return e};var ri,Ad=Xt("document","documentElement"),rw=Go.exports,nw=Ko,Ed=rw("keys"),ni=function(e){return Ed[e]||(Ed[e]=nw(e))},aw=Ut,ow=ti,Od=ll,iw=qa,sw=Ad,lw=al,Td=ni("IE_PROTO"),pl=function(){},Cd=function(e){return"<script>"+e+"<\/script>"},jd=function(e){e.write(Cd("")),e.close();var t=e.parentWindow.Object;return e=null,t},ai=function(){try{ri=new ActiveXObject("htmlfile")}catch{}var e,t;ai=typeof document<"u"?document.domain&&ri?jd(ri):((t=lw("iframe")).style.display="none",sw.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Cd("document.F=Object")),e.close(),e.F):jd(ri);for(var r=Od.length;r--;)delete ai.prototype[Od[r]];return ai()};iw[Td]=!0;var Ma=Object.create||function(e,t){var r;return e!==null?(pl.prototype=aw(e),r=new pl,pl.prototype=null,r[Td]=e):r=ai(),t===void 0?r:ow.f(r,t)},Ha={},cw=xd,pw=ll.concat("length","prototype");Ha.f=Object.getOwnPropertyNames||function(e){return cw(e,pw)};var ul={},uw=Jo,dw=Vt,hw=Mr,Vn=function(e,t,r){var n=uw(t);n in e?dw.f(e,n,hw(0,r)):e[n]=r},Id=Xo,fw=Wr,mw=Vn,gw=Ae.Array,yw=Math.max,_d=function(e,t,r){for(var n=fw(e),a=Id(t,n),o=Id(r===void 0?n:r,n),i=gw(yw(o-a,0)),s=0;a<o;a++,s++)mw(i,s,e[a]);return i.length=s,i},vw=un,bw=lr,Pd=Ha.f,xw=_d,Rd=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];ul.f=function(e){return Rd&&vw(e)=="Window"?function(t){try{return Pd(t)}catch{return xw(Rd)}}(e):Pd(bw(e))};var oi={};oi.f=Object.getOwnPropertySymbols;var dl=tt([].slice),ww=Hr,Wa=function(e,t,r,n){n&&n.enumerable?e[t]=r:ww(e,t,r)},ii={},$w=pt;ii.f=$w;var Ld=Et,kw=It,Sw=ii,Aw=Vt.f,yt=function(e){var t=Ld.Symbol||(Ld.Symbol={});kw(t,e)||Aw(t,e,{value:Sw.f(e)})},Ew=Vr,Ow=cl?{}.toString:function(){return"[object "+Ew(this)+"]"},Tw=cl,Cw=Vt.f,jw=Hr,Iw=It,_w=Ow,Fd=pt("toStringTag"),gn=function(e,t,r,n){if(e){var a=r?e:e.prototype;Iw(a,Fd)||Cw(a,Fd,{configurable:!0,value:t}),n&&!Tw&&jw(a,"toString",_w)}},Pw=wt,hl=rl,Rw=tt(Function.toString);Pw(hl.inspectSource)||(hl.inspectSource=function(e){return Rw(e)});var si,Va,li,fl=hl.inspectSource,Lw=wt,Fw=fl,Dd=Ae.WeakMap,Bd=Lw(Dd)&&/native code/.test(Fw(Dd)),Dw=Bd,Nd=Ae,ml=tt,Bw=At,Nw=Hr,gl=It,yl=rl,qw=ni,zw=qa,vl=Nd.TypeError,Uw=Nd.WeakMap;if(Dw||yl.state){var yn=yl.state||(yl.state=new Uw),Mw=ml(yn.get),qd=ml(yn.has),Hw=ml(yn.set);si=function(e,t){if(qd(yn,e))throw new vl("Object already initialized");return t.facade=e,Hw(yn,e,t),t},Va=function(e){return Mw(yn,e)||{}},li=function(e){return qd(yn,e)}}else{var Gn=qw("state");zw[Gn]=!0,si=function(e,t){if(gl(e,Gn))throw new vl("Object already initialized");return t.facade=e,Nw(e,Gn,t),t},Va=function(e){return gl(e,Gn)?e[Gn]:{}},li=function(e){return gl(e,Gn)}}var vr={set:si,get:Va,has:li,enforce:function(e){return li(e)?Va(e):si(e,{})},getterFor:function(e){return function(t){var r;if(!Bw(t)||(r=Va(t)).type!==e)throw vl("Incompatible receiver, "+e+" required");return r}}},Ww=tt,Vw=st,zd=wt,Gw=Vr,Kw=fl,Ud=function(){},Jw=[],Md=Xt("Reflect","construct"),bl=/^\s*(?:class|function)\b/,Yw=Ww(bl.exec),Zw=!bl.exec(Ud),Ga=function(e){if(!zd(e))return!1;try{return Md(Ud,Jw,e),!0}catch{return!1}},Hd=function(e){if(!zd(e))return!1;switch(Gw(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Zw||!!Yw(bl,Kw(e))}catch{return!0}};Hd.sham=!0;var ci=!Md||Vw(function(){var e;return Ga(Ga.call)||!Ga(Object)||!Ga(function(){e=!0})||e})?Hd:Ga,Qw=Ae,Wd=Ua,Xw=ci,e1=At,t1=pt("species"),Vd=Qw.Array,xl=function(e,t){return new(function(r){var n;return Wd(r)&&(n=r.constructor,(Xw(n)&&(n===Vd||Wd(n.prototype))||e1(n)&&(n=n[t1])===null)&&(n=void 0)),n===void 0?Vd:n}(e))(t===0?0:t)},r1=fn,n1=Vs,a1=Ir,o1=Wr,i1=xl,Gd=tt([].push),Gr=function(e){var t=e==1,r=e==2,n=e==3,a=e==4,o=e==6,i=e==7,s=e==5||o;return function(l,c,h,d){for(var f,m,v=a1(l),w=n1(v),x=r1(c,h),p=o1(w),k=0,$=d||i1,C=t?$(l,p):r||i?$(l,0):void 0;p>k;k++)if((s||k in w)&&(m=x(f=w[k],k,v),e))if(t)C[k]=m;else if(m)switch(e){case 3:return!0;case 5:return f;case 6:return k;case 2:Gd(C,f)}else switch(e){case 4:return!1;case 7:Gd(C,f)}return o?-1:n||a?a:C}},Kr={forEach:Gr(0),map:Gr(1),filter:Gr(2),some:Gr(3),every:Gr(4),find:Gr(5),findIndex:Gr(6),filterReject:Gr(7)},Kn=We,wl=Ae,s1=Xt,l1=La,Ka=zt,c1=tt,Jn=Lt,vn=Ys,$l=st,$t=It,p1=Ua,u1=wt,d1=At,h1=Ft,kl=Zs,Sl=Ut,f1=Ir,pi=lr,Al=Jo,Kd=mn,El=Mr,Ja=Ma,Jd=za,m1=Ha,Yd=ul,Ol=oi,Zd=pn,Qd=Vt,g1=ti,Xd=Fa,y1=dl,Tl=Wa,Ya=Go.exports,eh=qa,th=Ko,rh=pt,v1=ii,b1=yt,x1=gn,nh=vr,ui=Kr.forEach,Mt=ni("hidden"),ah=rh("toPrimitive"),w1=nh.set,oh=nh.getterFor("Symbol"),cr=Object.prototype,Jr=wl.Symbol,bn=Jr&&Jr.prototype,ih=wl.TypeError,Cl=wl.QObject,Za=s1("JSON","stringify"),sh=Zd.f,Yr=Qd.f,lh=Yd.f,$1=Xd.f,ch=c1([].push),_r=Ya("symbols"),Qa=Ya("op-symbols"),jl=Ya("string-to-symbol-registry"),Il=Ya("symbol-to-string-registry"),k1=Ya("wks"),_l=!Cl||!Cl.prototype||!Cl.prototype.findChild,Pl=Jn&&$l(function(){return Ja(Yr({},"a",{get:function(){return Yr(this,"a",{value:7}).a}})).a!=7})?function(e,t,r){var n=sh(cr,t);n&&delete cr[t],Yr(e,t,r),n&&e!==cr&&Yr(cr,t,n)}:Yr,Rl=function(e,t){var r=_r[e]=Ja(bn);return w1(r,{type:"Symbol",tag:e,description:t}),Jn||(r.description=t),r},di=function(e,t,r){e===cr&&di(Qa,t,r),Sl(e);var n=Al(t);return Sl(r),$t(_r,n)?(r.enumerable?($t(e,Mt)&&e[Mt][n]&&(e[Mt][n]=!1),r=Ja(r,{enumerable:El(0,!1)})):($t(e,Mt)||Yr(e,Mt,El(1,{})),e[Mt][n]=!0),Pl(e,n,r)):Yr(e,n,r)},Ll=function(e,t){Sl(e);var r=pi(t),n=Jd(r).concat(Fl(r));return ui(n,function(a){Jn&&!Ka(ph,r,a)||di(e,a,r[a])}),e},ph=function(e){var t=Al(e),r=Ka($1,this,t);return!(this===cr&&$t(_r,t)&&!$t(Qa,t))&&(!(r||!$t(this,t)||!$t(_r,t)||$t(this,Mt)&&this[Mt][t])||r)},uh=function(e,t){var r=pi(e),n=Al(t);if(r!==cr||!$t(_r,n)||$t(Qa,n)){var a=sh(r,n);return!a||!$t(_r,n)||$t(r,Mt)&&r[Mt][n]||(a.enumerable=!0),a}},dh=function(e){var t=lh(pi(e)),r=[];return ui(t,function(n){$t(_r,n)||$t(eh,n)||ch(r,n)}),r},Fl=function(e){var t=e===cr,r=lh(t?Qa:pi(e)),n=[];return ui(r,function(a){!$t(_r,a)||t&&!$t(cr,a)||ch(n,_r[a])}),n};if(vn||(Tl(bn=(Jr=function(){if(h1(bn,this))throw ih("Symbol is not a constructor");var e=arguments.length&&arguments[0]!==void 0?Kd(arguments[0]):void 0,t=th(e),r=function(n){this===cr&&Ka(r,Qa,n),$t(this,Mt)&&$t(this[Mt],t)&&(this[Mt][t]=!1),Pl(this,t,El(1,n))};return Jn&&_l&&Pl(cr,t,{configurable:!0,set:r}),Rl(t,e)}).prototype,"toString",function(){return oh(this).tag}),Tl(Jr,"withoutSetter",function(e){return Rl(th(e),e)}),Xd.f=ph,Qd.f=di,g1.f=Ll,Zd.f=uh,m1.f=Yd.f=dh,Ol.f=Fl,v1.f=function(e){return Rl(rh(e),e)},Jn&&Yr(bn,"description",{configurable:!0,get:function(){return oh(this).description}})),Kn({global:!0,wrap:!0,forced:!vn,sham:!vn},{Symbol:Jr}),ui(Jd(k1),function(e){b1(e)}),Kn({target:"Symbol",stat:!0,forced:!vn},{for:function(e){var t=Kd(e);if($t(jl,t))return jl[t];var r=Jr(t);return jl[t]=r,Il[r]=t,r},keyFor:function(e){if(!kl(e))throw ih(e+" is not a symbol");if($t(Il,e))return Il[e]},useSetter:function(){_l=!0},useSimple:function(){_l=!1}}),Kn({target:"Object",stat:!0,forced:!vn,sham:!Jn},{create:function(e,t){return t===void 0?Ja(e):Ll(Ja(e),t)},defineProperty:di,defineProperties:Ll,getOwnPropertyDescriptor:uh}),Kn({target:"Object",stat:!0,forced:!vn},{getOwnPropertyNames:dh,getOwnPropertySymbols:Fl}),Kn({target:"Object",stat:!0,forced:$l(function(){Ol.f(1)})},{getOwnPropertySymbols:function(e){return Ol.f(f1(e))}}),Za&&Kn({target:"JSON",stat:!0,forced:!vn||$l(function(){var e=Jr();return Za([e])!="[null]"||Za({a:e})!="{}"||Za(Object(e))!="{}"})},{stringify:function(e,t,r){var n=y1(arguments),a=t;if((d1(t)||e!==void 0)&&!kl(e))return p1(t)||(t=function(o,i){if(u1(a)&&(i=Ka(a,this,o,i)),!kl(i))return i}),n[1]=t,l1(Za,null,n)}}),!bn[ah]){var S1=bn.valueOf;Tl(bn,ah,function(e){return Ka(S1,this)})}x1(Jr,"Symbol"),eh[Mt]=!0;var A1=Et.Object.getOwnPropertySymbols;const hi=Me(A1);var E1=st,O1=Wo,T1=pt("species"),Xa=function(e){return O1>=51||!E1(function(){var t=[];return(t.constructor={})[T1]=function(){return{foo:1}},t[e](Boolean).foo!==1})},C1=Kr.filter;We({target:"Array",proto:!0,forced:!Xa("filter")},{filter:function(e){return C1(this,e,arguments.length>1?arguments[1]:void 0)}});var j1=Et,er=function(e){return j1[e+"Prototype"]},I1=er("Array").filter,_1=Ft,P1=I1,Dl=Array.prototype,hh=function(e){var t=e.filter;return e===Dl||_1(Dl,e)&&t===Dl.filter?P1:t};const R1=Me(hh);var fh={exports:{}},L1=We,F1=st,D1=lr,mh=pn.f,gh=Lt,B1=F1(function(){mh(1)});L1({target:"Object",stat:!0,forced:!gh||B1,sham:!gh},{getOwnPropertyDescriptor:function(e,t){return mh(D1(e),t)}});var yh=Et.Object,N1=fh.exports=function(e,t){return yh.getOwnPropertyDescriptor(e,t)};yh.getOwnPropertyDescriptor.sham&&(N1.sham=!0);var q1=fh.exports;const vh=Me(q1);var xn,bh,xh,Yn={},Bl=Lt,z1=It,wh=Function.prototype,U1=Bl&&Object.getOwnPropertyDescriptor,Nl=z1(wh,"name"),M1={EXISTS:Nl,PROPER:Nl&&function(){}.name==="something",CONFIGURABLE:Nl&&(!Bl||Bl&&U1(wh,"name").configurable)},H1=!st(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),W1=Ae,V1=It,G1=wt,K1=Ir,J1=H1,$h=ni("IE_PROTO"),ql=W1.Object,Y1=ql.prototype,zl=J1?ql.getPrototypeOf:function(e){var t=K1(e);if(V1(t,$h))return t[$h];var r=t.constructor;return G1(r)&&t instanceof r?r.prototype:t instanceof ql?Y1:null},Z1=st,Q1=wt,X1=Ma,kh=zl,e$=Wa,Ul=pt("iterator"),Sh=!1;[].keys&&("next"in(xh=[].keys())?(bh=kh(kh(xh)))!==Object.prototype&&(xn=bh):Sh=!0);var t$=xn==null||Z1(function(){var e={};return xn[Ul].call(e)!==e});Q1((xn=t$?{}:X1(xn))[Ul])||e$(xn,Ul,function(){return this});var Ah={IteratorPrototype:xn,BUGGY_SAFARI_ITERATORS:Sh},r$=Ah.IteratorPrototype,n$=Ma,a$=Mr,o$=gn,i$=Yn,s$=function(){return this},Eh=function(e,t,r,n){var a=t+" Iterator";return e.prototype=n$(r$,{next:a$(+!n,r)}),o$(e,a,!1,!0),i$[a]=s$,e},Oh=Ae,l$=wt,c$=Oh.String,p$=Oh.TypeError,u$=tt,d$=Ut,h$=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=u$(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch{}return function(n,a){return d$(n),function(o){if(typeof o=="object"||l$(o))return o;throw p$("Can't set "+c$(o)+" as a prototype")}(a),t?e(n,a):n.__proto__=a,n}}():void 0),f$=We,m$=zt,g$=Eh,y$=zl,v$=gn,Th=Wa,Ch=Yn,b$=M1.PROPER,fi=Ah.BUGGY_SAFARI_ITERATORS,Ml=pt("iterator"),x$=function(){return this},jh=function(e,t,r,n,a,o,i){g$(r,t,n);var s,l,c,h=function(p){if(p===a&&w)return w;if(!fi&&p in m)return m[p];switch(p){case"keys":case"values":case"entries":return function(){return new r(this,p)}}return function(){return new r(this)}},d=t+" Iterator",f=!1,m=e.prototype,v=m[Ml]||m["@@iterator"]||a&&m[a],w=!fi&&v||h(a),x=t=="Array"&&m.entries||v;if(x&&(s=y$(x.call(new e)))!==Object.prototype&&s.next&&(v$(s,d,!0,!0),Ch[d]=x$),b$&&a=="values"&&v&&v.name!=="values"&&(f=!0,w=function(){return m$(v,this)}),a)if(l={values:h("values"),keys:o?w:h("keys"),entries:h("entries")},i)for(c in l)(fi||f||!(c in m))&&Th(m,c,l[c]);else f$({target:t,proto:!0,forced:fi||f},l);return i&&m[Ml]!==w&&Th(m,Ml,w,{name:a}),Ch[t]=w,l},w$=lr,Ih=Yn,_h=vr;Vt.f;var $$=jh,k$=_h.set,S$=_h.getterFor("Array Iterator");$$(Array,"Array",function(e,t){k$(this,{type:"Array Iterator",target:w$(e),index:0,kind:t})},function(){var e=S$(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}},"values"),Ih.Arguments=Ih.Array;var A$=Ae,E$=Vr,O$=Hr,Ph=Yn,Rh=pt("toStringTag");for(var Hl in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Lh=A$[Hl],Wl=Lh&&Lh.prototype;Wl&&E$(Wl)!==Rh&&O$(Wl,Rh,Hl),Ph[Hl]=Ph.Array}var T$=st,Fh=function(e,t){var r=[][e];return!!r&&T$(function(){r.call(null,t||function(){return 1},1)})},C$=Kr.forEach,Dh=Fh("forEach")?[].forEach:function(e){return C$(this,e,arguments.length>1?arguments[1]:void 0)};We({target:"Array",proto:!0,forced:[].forEach!=Dh},{forEach:Dh});var j$=er("Array").forEach,I$=Vr,_$=It,P$=Ft,R$=j$,Vl=Array.prototype,L$={DOMTokenList:!0,NodeList:!0};const Bh=Me(function(e){var t=e.forEach;return e===Vl||P$(Vl,e)&&t===Vl.forEach||_$(L$,I$(e))?R$:t});var F$=Xt,D$=Ha,B$=oi,N$=Ut,q$=tt([].concat),Nh=F$("Reflect","ownKeys")||function(e){var t=D$.f(N$(e)),r=B$.f;return r?q$(t,r(e)):t},z$=Nh,U$=lr,M$=pn,H$=Vn;We({target:"Object",stat:!0,sham:!Lt},{getOwnPropertyDescriptors:function(e){for(var t,r,n=U$(e),a=M$.f,o=z$(n),i={},s=0;o.length>s;)(r=a(n,t=o[s++]))!==void 0&&H$(i,t,r);return i}});var W$=Et.Object.getOwnPropertyDescriptors;const qh=Me(W$);var zh={exports:{}},V$=We,G$=Lt,Uh=ti.f;V$({target:"Object",stat:!0,forced:Object.defineProperties!==Uh,sham:!G$},{defineProperties:Uh});var Mh=Et.Object,K$=zh.exports=function(e,t){return Mh.defineProperties(e,t)};Mh.defineProperties.sham&&(K$.sham=!0);var J$=zh.exports;const Y$=Me(J$);var Hh={exports:{}},Z$=We,Q$=Lt,Wh=Vt.f;Z$({target:"Object",stat:!0,forced:Object.defineProperty!==Wh,sham:!Q$},{defineProperty:Wh});var Vh=Et.Object,X$=Hh.exports=function(e,t,r){return Vh.defineProperty(e,t,r)};Vh.defineProperty.sham&&(X$.sham=!0);var ek=Hh.exports;const mi=Me(ek);function tk(e,t,r){return t in e?mi(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Gh(e,t){var r=kd(e);if(hi){var n=hi(e);t&&(n=R1(n).call(n,function(a){return vh(e,a).enumerable})),r.push.apply(r,n)}return r}function ut(e){for(var t=1;t<arguments.length;t++){var r,n,a=arguments[t]!=null?arguments[t]:{};t%2?Bh(r=Gh(Object(a),!0)).call(r,function(o){tk(e,o,a[o])}):qh?Y$(e,qh(a)):Bh(n=Gh(Object(a))).call(n,function(o){mi(e,o,vh(a,o))})}return e}var Kh=Lt,rk=tt,nk=zt,ak=st,Gl=za,ok=oi,ik=Fa,sk=Ir,lk=Vs,Zn=Object.assign,Jh=Object.defineProperty,ck=rk([].concat),pk=!Zn||ak(function(){if(Kh&&Zn({b:1},Zn(Jh({},"a",{enumerable:!0,get:function(){Jh(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(a){t[a]=a}),Zn({},e)[r]!=7||Gl(Zn({},t)).join("")!=n})?function(e,t){for(var r=sk(e),n=arguments.length,a=1,o=ok.f,i=ik.f;n>a;)for(var s,l=lk(arguments[a++]),c=o?ck(Gl(l),o(l)):Gl(l),h=c.length,d=0;h>d;)s=c[d++],Kh&&!nk(i,l,s)||(r[s]=l[s]);return r}:Zn,Yh=pk;We({target:"Object",stat:!0,forced:Object.assign!==Yh},{assign:Yh});var uk=Et.Object.assign;const tr=Me(uk);var dk=At,hk=un,fk=pt("match"),mk=Ae.TypeError,Zh=function(e){if(function(t){var r;return dk(t)&&((r=t[fk])!==void 0?!!r:hk(t)=="RegExp")}(e))throw mk("The method doesn't accept regular expressions");return e},gk=pt("match"),Qh=function(e){var t=/./;try{"/./"[e](t)}catch{try{return t[gk]=!1,"/./"[e](t)}catch{}}return!1},yk=We,Xh=tt,vk=yd,ef=mn,bk=Zh,xk=Da,wk=Qh,tf=Xh("".startsWith),$k=Xh("".slice),kk=Math.min;yk({target:"String",proto:!0,forced:!wk("startsWith")},{startsWith:function(e){var t=ef(xk(this));bk(e);var r=vk(kk(arguments.length>1?arguments[1]:void 0,t.length)),n=ef(e);return tf?tf(t,n,r):$k(t,r,r+n.length)===n}});var Sk=er("String").startsWith,Ak=Ft,Ek=Sk,Kl=String.prototype;const rf=Me(function(e){var t=e.startsWith;return typeof e=="string"||e===Kl||Ak(Kl,e)&&t===Kl.startsWith?Ek:t});var Gt={},Jl={exports:{}};(function(e,t){(function(r){var n=t&&!t.nodeType&&t,a=e&&!e.nodeType&&e,o=typeof Oa=="object"&&Oa;o.global!==o&&o.window!==o&&o.self!==o||(r=o);var i,s,l=2147483647,c=36,h=/^xn--/,d=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},v=Math.floor,w=String.fromCharCode;function x(T){throw RangeError(m[T])}function p(T,_){for(var B=T.length,E=[];B--;)E[B]=_(T[B]);return E}function k(T,_){var B=T.split("@"),E="";return B.length>1&&(E=B[0]+"@",T=B[1]),E+p((T=T.replace(f,".")).split("."),_).join(".")}function $(T){for(var _,B,E=[],I=0,N=T.length;I<N;)(_=T.charCodeAt(I++))>=55296&&_<=56319&&I<N?(64512&(B=T.charCodeAt(I++)))==56320?E.push(((1023&_)<<10)+(1023&B)+65536):(E.push(_),I--):E.push(_);return E}function C(T){return p(T,function(_){var B="";return _>65535&&(B+=w((_-=65536)>>>10&1023|55296),_=56320|1023&_),B+w(_)}).join("")}function F(T,_){return T+22+75*(T<26)-((_!=0)<<5)}function O(T,_,B){var E=0;for(T=B?v(T/700):T>>1,T+=v(T/_);T>455;E+=c)T=v(T/35);return v(E+36*T/(T+38))}function U(T){var _,B,E,I,N,X,ve,V,D,Q,be,se=[],je=T.length,de=0,De=128,Ge=72;for((B=T.lastIndexOf("-"))<0&&(B=0),E=0;E<B;++E)T.charCodeAt(E)>=128&&x("not-basic"),se.push(T.charCodeAt(E));for(I=B>0?B+1:0;I<je;){for(N=de,X=1,ve=c;I>=je&&x("invalid-input"),((V=(be=T.charCodeAt(I++))-48<10?be-22:be-65<26?be-65:be-97<26?be-97:c)>=c||V>v((l-de)/X))&&x("overflow"),de+=V*X,!(V<(D=ve<=Ge?1:ve>=Ge+26?26:ve-Ge));ve+=c)X>v(l/(Q=c-D))&&x("overflow"),X*=Q;Ge=O(de-N,_=se.length+1,N==0),v(de/_)>l-De&&x("overflow"),De+=v(de/_),de%=_,se.splice(de++,0,De)}return C(se)}function A(T){var _,B,E,I,N,X,ve,V,D,Q,be,se,je,de,De,Ge=[];for(se=(T=$(T)).length,_=128,B=0,N=72,X=0;X<se;++X)(be=T[X])<128&&Ge.push(w(be));for(E=I=Ge.length,I&&Ge.push("-");E<se;){for(ve=l,X=0;X<se;++X)(be=T[X])>=_&&be<ve&&(ve=be);for(ve-_>v((l-B)/(je=E+1))&&x("overflow"),B+=(ve-_)*je,_=ve,X=0;X<se;++X)if((be=T[X])<_&&++B>l&&x("overflow"),be==_){for(V=B,D=c;!(V<(Q=D<=N?1:D>=N+26?26:D-N));D+=c)De=V-Q,de=c-Q,Ge.push(w(F(Q+De%de,0))),V=v(De/de);Ge.push(w(F(V,0))),N=O(B,je,E==I),B=0,++E}++B,++_}return Ge.join("")}if(i={version:"1.3.2",ucs2:{decode:$,encode:C},decode:U,encode:A,toASCII:function(T){return k(T,function(_){return d.test(_)?"xn--"+A(_):_})},toUnicode:function(T){return k(T,function(_){return h.test(_)?U(_.slice(4).toLowerCase()):_})}},n&&a)if(e.exports==n)a.exports=i;else for(s in i)i.hasOwnProperty(s)&&(n[s]=i[s]);else r.punycode=i})(this)})(Jl,Jl.exports);var eo={};function Ok(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var to=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};eo.decode=eo.parse=function(e,t,r,n){t=t||"&",r=r||"=";var a={};if(typeof e!="string"||e.length===0)return a;var o=/\+/g;e=e.split(t);var i=1e3;n&&typeof n.maxKeys=="number"&&(i=n.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var l=0;l<s;++l){var c,h,d,f,m=e[l].replace(o,"%20"),v=m.indexOf(r);v>=0?(c=m.substr(0,v),h=m.substr(v+1)):(c=m,h=""),d=decodeURIComponent(c),f=decodeURIComponent(h),Ok(a,d)?Array.isArray(a[d])?a[d].push(f):a[d]=[a[d],f]:a[d]=f}return a},eo.encode=eo.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(a){var o=encodeURIComponent(to(a))+r;return Array.isArray(e[a])?e[a].map(function(i){return o+encodeURIComponent(to(i))}).join(t):o+encodeURIComponent(to(e[a]))}).join(t):n?encodeURIComponent(to(n))+r+encodeURIComponent(to(e)):""};var Tk=Jl.exports,Yl=function(e){return typeof e=="string"},nf=function(e){return typeof e=="object"&&e!==null},gi=function(e){return e===null},Ck=function(e){return e==null};function rr(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}Gt.parse=ro,Gt.resolve=function(e,t){return ro(e,!1,!0).resolve(t)},Gt.resolveObject=function(e,t){return e?ro(e,!1,!0).resolveObject(t):t},Gt.format=function(e){return Yl(e)&&(e=ro(e)),e instanceof rr?e.format():rr.prototype.format.call(e)},Gt.Url=rr;var jk=/^([a-z0-9.+-]+:)/i,Ik=/:[0-9]*$/,_k=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Pk=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),Zl=["'"].concat(Pk),af=["%","/","?",";","#"].concat(Zl),of=["/","?","#"],sf=/^[+a-z0-9A-Z_-]{0,63}$/,Rk=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Lk={javascript:!0,"javascript:":!0},Ql={javascript:!0,"javascript:":!0},Qn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Xl=eo;function ro(e,t,r){if(e&&nf(e)&&e instanceof rr)return e;var n=new rr;return n.parse(e,t,r),n}rr.prototype.parse=function(e,t,r){if(!Yl(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),a=n!==-1&&n<e.indexOf("#")?"?":"#",o=e.split(a);o[0]=o[0].replace(/\\/g,"/");var i=e=o.join(a);if(i=i.trim(),!r&&e.split("#").length===1){var s=_k.exec(i);if(s)return this.path=i,this.href=i,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?Xl.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=jk.exec(i);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,i=i.substr(l.length)}if(r||l||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var h=i.substr(0,2)==="//";!h||l&&Ql[l]||(i=i.substr(2),this.slashes=!0)}if(!Ql[l]&&(h||l&&!Qn[l])){for(var d,f,m=-1,v=0;v<of.length;v++)(w=i.indexOf(of[v]))!==-1&&(m===-1||w<m)&&(m=w);for((f=m===-1?i.lastIndexOf("@"):i.lastIndexOf("@",m))!==-1&&(d=i.slice(0,f),i=i.slice(f+1),this.auth=decodeURIComponent(d)),m=-1,v=0;v<af.length;v++){var w;(w=i.indexOf(af[v]))!==-1&&(m===-1||w<m)&&(m=w)}m===-1&&(m=i.length),this.host=i.slice(0,m),i=i.slice(m),this.parseHost(),this.hostname=this.hostname||"";var x=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!x)for(var p=this.hostname.split(/\./),k=(v=0,p.length);v<k;v++){var $=p[v];if($&&!$.match(sf)){for(var C="",F=0,O=$.length;F<O;F++)$.charCodeAt(F)>127?C+="x":C+=$[F];if(!C.match(sf)){var U=p.slice(0,v),A=p.slice(v+1),T=$.match(Rk);T&&(U.push(T[1]),A.unshift(T[2])),A.length&&(i="/"+A.join(".")+i),this.hostname=U.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),x||(this.hostname=Tk.toASCII(this.hostname));var _=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+_,this.href+=this.host,x&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),i[0]!=="/"&&(i="/"+i))}if(!Lk[c])for(v=0,k=Zl.length;v<k;v++){var E=Zl[v];if(i.indexOf(E)!==-1){var I=encodeURIComponent(E);I===E&&(I=escape(E)),i=i.split(E).join(I)}}var N=i.indexOf("#");N!==-1&&(this.hash=i.substr(N),i=i.slice(0,N));var X=i.indexOf("?");if(X!==-1?(this.search=i.substr(X),this.query=i.substr(X+1),t&&(this.query=Xl.parse(this.query)),i=i.slice(0,X)):t&&(this.search="",this.query={}),i&&(this.pathname=i),Qn[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){_=this.pathname||"";var ve=this.search||"";this.path=_+ve}return this.href=this.format(),this},rr.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",a=!1,o="";this.host?a=e+this.host:this.hostname&&(a=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&nf(this.query)&&Object.keys(this.query).length&&(o=Xl.stringify(this.query));var i=this.search||o&&"?"+o||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||Qn[t])&&a!==!1?(a="//"+(a||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):a||(a=""),n&&n.charAt(0)!=="#"&&(n="#"+n),i&&i.charAt(0)!=="?"&&(i="?"+i),t+a+(r=r.replace(/[?#]/g,function(s){return encodeURIComponent(s)}))+(i=i.replace("#","%23"))+n},rr.prototype.resolve=function(e){return this.resolveObject(ro(e,!1,!0)).format()},rr.prototype.resolveObject=function(e){if(Yl(e)){var t=new rr;t.parse(e,!1,!0),e=t}for(var r=new rr,n=Object.keys(this),a=0;a<n.length;a++){var o=n[a];r[o]=this[o]}if(r.hash=e.hash,e.href==="")return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),s=0;s<i.length;s++){var l=i[s];l!=="protocol"&&(r[l]=e[l])}return Qn[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!Qn[e.protocol]){for(var c=Object.keys(e),h=0;h<c.length;h++){var d=c[h];r[d]=e[d]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||Ql[e.protocol])r.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),f[0]!==""&&f.unshift(""),f.length<2&&f.unshift(""),r.pathname=f.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",v=r.search||"";r.path=m+v}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var w=r.pathname&&r.pathname.charAt(0)==="/",x=e.host||e.pathname&&e.pathname.charAt(0)==="/",p=x||w||r.host&&e.pathname,k=p,$=r.pathname&&r.pathname.split("/")||[],C=(f=e.pathname&&e.pathname.split("/")||[],r.protocol&&!Qn[r.protocol]);if(C&&(r.hostname="",r.port=null,r.host&&($[0]===""?$[0]=r.host:$.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(f[0]===""?f[0]=e.host:f.unshift(e.host)),e.host=null),p=p&&(f[0]===""||$[0]==="")),x)r.host=e.host||e.host===""?e.host:r.host,r.hostname=e.hostname||e.hostname===""?e.hostname:r.hostname,r.search=e.search,r.query=e.query,$=f;else if(f.length)$||($=[]),$.pop(),$=$.concat(f),r.search=e.search,r.query=e.query;else if(!Ck(e.search))return C&&(r.hostname=r.host=$.shift(),(T=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=T.shift(),r.host=r.hostname=T.shift())),r.search=e.search,r.query=e.query,gi(r.pathname)&&gi(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!$.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var F=$.slice(-1)[0],O=(r.host||e.host||$.length>1)&&(F==="."||F==="..")||F==="",U=0,A=$.length;A>=0;A--)(F=$[A])==="."?$.splice(A,1):F===".."?($.splice(A,1),U++):U&&($.splice(A,1),U--);if(!p&&!k)for(;U--;U)$.unshift("..");!p||$[0]===""||$[0]&&$[0].charAt(0)==="/"||$.unshift(""),O&&$.join("/").substr(-1)!=="/"&&$.push("");var T,_=$[0]===""||$[0]&&$[0].charAt(0)==="/";return C&&(r.hostname=r.host=_?"":$.length?$.shift():"",(T=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=T.shift(),r.host=r.hostname=T.shift())),(p=p||r.host&&$.length)&&!_&&$.unshift(""),$.length?r.pathname=$.join("/"):(r.pathname=null,r.path=null),gi(r.pathname)&&gi(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},rr.prototype.parseHost=function(){var e=this.host,t=Ik.exec(e);t&&((t=t[0])!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Fk=We,Dk=Ae,Bk=st,Nk=Ua,qk=At,zk=Ir,Uk=Wr,lf=Vn,Mk=xl,Hk=Xa,Wk=Wo,cf=pt("isConcatSpreadable"),pf=Dk.TypeError,Vk=Wk>=51||!Bk(function(){var e=[];return e[cf]=!1,e.concat()[0]!==e}),Gk=Hk("concat"),Kk=function(e){if(!qk(e))return!1;var t=e[cf];return t!==void 0?!!t:Nk(e)};Fk({target:"Array",proto:!0,forced:!Vk||!Gk},{concat:function(e){var t,r,n,a,o,i=zk(this),s=Mk(i,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(Kk(o=t===-1?i:arguments[t])){if(l+(a=Uk(o))>9007199254740991)throw pf("Maximum allowed index exceeded");for(r=0;r<a;r++,l++)r in o&&lf(s,l,o[r])}else{if(l>=9007199254740991)throw pf("Maximum allowed index exceeded");lf(s,l++,o)}return s.length=l,s}}),yt("asyncIterator"),yt("hasInstance"),yt("isConcatSpreadable"),yt("iterator"),yt("match"),yt("matchAll"),yt("replace"),yt("search"),yt("species"),yt("split"),yt("toPrimitive"),yt("toStringTag"),yt("unscopables"),gn(Ae.JSON,"JSON",!0);var Jk=Et.Symbol;yt("asyncDispose"),yt("dispose"),yt("matcher"),yt("metadata"),yt("observable"),yt("patternMatch"),yt("replaceAll");const wn=Me(Jk);var ec=tt,Yk=Qo,Zk=mn,Qk=Da,Xk=ec("".charAt),uf=ec("".charCodeAt),eS=ec("".slice),tS=function(e){return function(t,r){var n,a,o=Zk(Qk(t)),i=Yk(r),s=o.length;return i<0||i>=s?e?"":void 0:(n=uf(o,i))<55296||n>56319||i+1===s||(a=uf(o,i+1))<56320||a>57343?e?Xk(o,i):n:e?eS(o,i,i+2):a-56320+(n-55296<<10)+65536}},rS=tS(!0),nS=mn,df=vr,aS=jh,oS=df.set,iS=df.getterFor("String Iterator");aS(String,"String",function(e){oS(this,{type:"String Iterator",string:nS(e),index:0})},function(){var e,t=iS(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=rS(r,n),t.index+=e.length,{value:e,done:!1})});var sS=Vr,hf=Qs,lS=Yn,cS=pt("iterator"),no=function(e){if(e!=null)return hf(e,cS)||hf(e,"@@iterator")||lS[sS(e)]};const tc=Me(no);We({target:"Array",stat:!0},{isArray:Ua});var pS=Et.Array.isArray;const rc=Me(pS);var uS=We,dS=Ae,ff=Ua,hS=ci,fS=At,mf=Xo,mS=Wr,gS=lr,yS=Vn,vS=pt,bS=dl,xS=Xa("slice"),wS=vS("species"),nc=dS.Array,$S=Math.max;uS({target:"Array",proto:!0,forced:!xS},{slice:function(e,t){var r,n,a,o=gS(this),i=mS(o),s=mf(e,i),l=mf(t===void 0?i:t,i);if(ff(o)&&(r=o.constructor,(hS(r)&&(r===nc||ff(r.prototype))||fS(r)&&(r=r[wS])===null)&&(r=void 0),r===nc||r===void 0))return bS(o,s,l);for(n=new(r===void 0?nc:r)($S(l-s,0)),a=0;s<l;s++,a++)s in o&&yS(n,a,o[s]);return n.length=a,n}});var kS=er("Array").slice,SS=Ft,AS=kS,ac=Array.prototype,gf=function(e){var t=e.slice;return e===ac||SS(ac,e)&&t===ac.slice?AS:t};const ES=Me(gf);var OS=zt,yf=Ut,TS=Qs,vf=function(e,t,r){var n,a;yf(e);try{if(!(n=TS(e,"return"))){if(t==="throw")throw r;return r}n=OS(n,e)}catch(o){a=!0,n=o}if(t==="throw")throw r;if(a)throw n;return yf(n),r},CS=Ut,jS=vf,IS=Yn,_S=pt("iterator"),PS=Array.prototype,bf=function(e){return e!==void 0&&(IS.Array===e||PS[_S]===e)},RS=zt,LS=dn,FS=Ut,DS=Vo,BS=no,NS=Ae.TypeError,oc=function(e,t){var r=arguments.length<2?BS(e):t;if(LS(r))return FS(RS(r,e));throw NS(DS(e)+" is not iterable")},qS=fn,zS=zt,US=Ir,MS=function(e,t,r,n){try{return n?t(CS(r)[0],r[1]):t(r)}catch(a){jS(e,"throw",a)}},HS=bf,WS=ci,VS=Wr,xf=Vn,GS=oc,KS=no,wf=Ae.Array,$f=pt("iterator"),kf=!1;try{var JS=0,Sf={next:function(){return{done:!!JS++}},return:function(){kf=!0}};Sf[$f]=function(){return this},Array.from(Sf,function(){throw 2})}catch{}var Af=function(e,t){if(!t&&!kf)return!1;var r=!1;try{var n={};n[$f]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch{}return r};We({target:"Array",stat:!0,forced:!Af(function(e){Array.from(e)})},{from:function(e){var t=US(e),r=WS(this),n=arguments.length,a=n>1?arguments[1]:void 0,o=a!==void 0;o&&(a=qS(a,n>2?arguments[2]:void 0));var i,s,l,c,h,d,f=KS(t),m=0;if(!f||this==wf&&HS(f))for(i=VS(t),s=r?new this(i):wf(i);i>m;m++)d=o?a(t[m],m):t[m],xf(s,m,d);else for(h=(c=GS(t,f)).next,s=r?new this:[];!(l=zS(h,c)).done;m++)d=o?MS(c,a,[l.value,m],!0):l.value,xf(s,m,d);return s.length=m,s}});var Ef=Et.Array.from;const Of=Me(Ef);function ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function sc(e,t){var r;if(e){if(typeof e=="string")return ic(e,t);var n=ES(r=Object.prototype.toString.call(e)).call(r,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Of(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ic(e,t):void 0}}function $n(e,t){var r=wn!==void 0&&tc(e)||e["@@iterator"];if(!r){if(rc(e)||(r=sc(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||r.return==null||r.return()}finally{if(s)throw o}}}}var YS=ii.f("iterator");const ZS=Me(YS);function lt(e){return(lt=typeof wn=="function"&&typeof ZS=="symbol"?function(t){return typeof t}:function(t){return t&&typeof wn=="function"&&t.constructor===wn&&t!==wn.prototype?"symbol":typeof t})(e)}function pr(e,t){return function(r){if(rc(r))return r}(e)||function(r,n){var a=r==null?null:wn!==void 0&&tc(r)||r["@@iterator"];if(a!=null){var o,i,s=[],l=!0,c=!1;try{for(a=a.call(r);!(l=(o=a.next()).done)&&(s.push(o.value),!n||s.length!==n);l=!0);}catch(h){c=!0,i=h}finally{try{l||a.return==null||a.return()}finally{if(c)throw i}}return s}}(e,t)||sc(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var Tf=It,QS=Nh,XS=pn,eA=Vt,tA=tt("".replace),rA=String(Error("zxcasd").stack),Cf=/\n\s*at [^:]*:[^\n]*/,nA=Cf.test(rA),aA=At,oA=Hr,iA=fn,sA=zt,lA=Ut,cA=Vo,pA=bf,uA=Wr,jf=Ft,dA=oc,hA=no,If=vf,fA=Ae.TypeError,yi=function(e,t){this.stopped=e,this.result=t},_f=yi.prototype,Xn=function(e,t,r){var n,a,o,i,s,l,c,h=r&&r.that,d=!(!r||!r.AS_ENTRIES),f=!(!r||!r.IS_ITERATOR),m=!(!r||!r.INTERRUPTED),v=iA(t,h),w=function(p){return n&&If(n,"normal",p),new yi(!0,p)},x=function(p){return d?(lA(p),m?v(p[0],p[1],w):v(p[0],p[1])):m?v(p,w):v(p)};if(f)n=e;else{if(!(a=hA(e)))throw fA(cA(e)+" is not iterable");if(pA(a)){for(o=0,i=uA(e);i>o;o++)if((s=x(e[o]))&&jf(_f,s))return s;return new yi(!1)}n=dA(e,a)}for(l=n.next;!(c=sA(l,n)).done;){try{s=x(c.value)}catch(p){If(n,"throw",p)}if(typeof s=="object"&&s&&jf(_f,s))return s}return new yi(!1)},mA=mn,gA=Mr,yA=!st(function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",gA(1,7)),e.stack!==7)}),vA=We,bA=Ae,xA=Ft,wA=zl,vi=h$,Pf=Ma,bi=Hr,lc=Mr,$A=function(e,t){if(nA&&typeof e=="string")for(;t--;)e=tA(e,Cf,"");return e},kA=function(e,t){aA(t)&&"cause"in t&&oA(e,"cause",t.cause)},SA=Xn,AA=function(e,t){return e===void 0?arguments.length<2?"":t:mA(e)},EA=yA,OA=pt("toStringTag"),xi=bA.Error,TA=[].push,ao=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,a=xA(cc,this);vi?r=vi(new xi,a?wA(this):cc):(r=a?this:Pf(cc),bi(r,OA,"Error")),t!==void 0&&bi(r,"message",AA(t)),EA&&bi(r,"stack",$A(r.stack,1)),kA(r,n);var o=[];return SA(e,TA,{that:o}),bi(r,"errors",o),r};vi?vi(ao,xi):function(e,t,r){for(var n=QS(t),a=eA.f,o=XS.f,i=0;i<n.length;i++){var s=n[i];Tf(e,s)||r&&Tf(r,s)||a(e,s,o(t,s))}}(ao,xi,{name:!0});var cc=ao.prototype=Pf(xi.prototype,{constructor:lc(1,ao),message:lc(1,""),name:lc(1,"AggregateError")});vA({global:!0},{AggregateError:ao});var oo,ea,Rf,pc,Lf=Ae.Promise,CA=Wa,wi=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:CA(e,n,t[n],r);return e},jA=Xt,IA=Vt,_A=Lt,Ff=pt("species"),PA=Ft,RA=Ae.TypeError,$i=function(e,t){if(PA(t,e))return e;throw RA("Incorrect invocation")},LA=ci,FA=Vo,DA=Ae.TypeError,Df=Ut,BA=pt("species"),Bf=function(e,t){var r,n=Df(e).constructor;return n===void 0||(r=Df(n)[BA])==null?t:function(a){if(LA(a))return a;throw DA(FA(a)+" is not a constructor")}(r)},NA=Ae.TypeError,Nf=function(e,t){if(e<t)throw NA("Not enough arguments");return e},qf=/(?:ipad|iphone|ipod).*applewebkit/i.test(Ho),uc=un(Ae.process)=="process",Kt=Ae,qA=La,zA=fn,zf=wt,UA=It,MA=st,Uf=Ad,HA=dl,Mf=al,WA=Nf,VA=qf,GA=uc,dc=Kt.setImmediate,hc=Kt.clearImmediate,KA=Kt.process,fc=Kt.Dispatch,JA=Kt.Function,Hf=Kt.MessageChannel,YA=Kt.String,mc=0,io={};try{oo=Kt.location}catch{}var gc=function(e){if(UA(io,e)){var t=io[e];delete io[e],t()}},yc=function(e){return function(){gc(e)}},Wf=function(e){gc(e.data)},Vf=function(e){Kt.postMessage(YA(e),oo.protocol+"//"+oo.host)};dc&&hc||(dc=function(e){WA(arguments.length,1);var t=zf(e)?e:JA(e),r=HA(arguments,1);return io[++mc]=function(){qA(t,void 0,r)},ea(mc),mc},hc=function(e){delete io[e]},GA?ea=function(e){KA.nextTick(yc(e))}:fc&&fc.now?ea=function(e){fc.now(yc(e))}:Hf&&!VA?(pc=(Rf=new Hf).port2,Rf.port1.onmessage=Wf,ea=zA(pc.postMessage,pc)):Kt.addEventListener&&zf(Kt.postMessage)&&!Kt.importScripts&&oo&&oo.protocol!=="file:"&&!MA(Vf)?(ea=Vf,Kt.addEventListener("message",Wf,!1)):ea="onreadystatechange"in Mf("script")?function(e){Uf.appendChild(Mf("script")).onreadystatechange=function(){Uf.removeChild(this),gc(e)}}:function(e){setTimeout(yc(e),0)});var so,kn,lo,ta,vc,bc,xc,Gf,Kf={set:dc,clear:hc},ZA=Ae,QA=/ipad|iphone|ipod/i.test(Ho)&&ZA.Pebble!==void 0,XA=/web0s(?!.*chrome)/i.test(Ho),Sn=Ae,Jf=fn,eE=pn.f,wc=Kf.set,tE=qf,rE=QA,nE=XA,$c=uc,Yf=Sn.MutationObserver||Sn.WebKitMutationObserver,Zf=Sn.document,Qf=Sn.process,ki=Sn.Promise,Xf=eE(Sn,"queueMicrotask"),em=Xf&&Xf.value;em||(so=function(){var e,t;for($c&&(e=Qf.domain)&&e.exit();kn;){t=kn.fn,kn=kn.next;try{t()}catch(r){throw kn?ta():lo=void 0,r}}lo=void 0,e&&e.enter()},tE||$c||nE||!Yf||!Zf?!rE&&ki&&ki.resolve?((xc=ki.resolve(void 0)).constructor=ki,Gf=Jf(xc.then,xc),ta=function(){Gf(so)}):$c?ta=function(){Qf.nextTick(so)}:(wc=Jf(wc,Sn),ta=function(){wc(so)}):(vc=!0,bc=Zf.createTextNode(""),new Yf(so).observe(bc,{characterData:!0}),ta=function(){bc.data=vc=!vc}));var aE=em||function(e){var t={fn:e,next:void 0};lo&&(lo.next=t),kn||(kn=t,ta()),lo=t},ra={},tm=dn,oE=function(e){var t,r;this.promise=new e(function(n,a){if(t!==void 0||r!==void 0)throw TypeError("Bad Promise constructor");t=n,r=a}),this.resolve=tm(t),this.reject=tm(r)};ra.f=function(e){return new oE(e)};var iE=Ut,sE=At,lE=ra,rm=function(e,t){if(iE(e),sE(t)&&t.constructor===e)return t;var r=lE.f(e);return(0,r.resolve)(t),r.promise},cE=Ae,Si=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}},nm=function(){this.head=null,this.tail=null};nm.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var kc,am,Sc,Ai,om,pE=typeof window=="object",Ei=We,Pr=Ae,uE=Xt,Zr=zt,Ac=Lf,dE=wi,hE=gn,Ec=dn,Oi=wt,fE=At,mE=$i,gE=fl,im=Xn,yE=Af,vE=Bf,sm=Kf.set,Oc=aE,bE=rm,lm=ra,Tc=Si,xE=nm,Cc=vr,wE=dd,$E=pE,Ti=uc,cm=Wo,kE=pt("species"),br="Promise",pm=Cc.getterFor(br),SE=Cc.set,AE=Cc.getterFor(br),EE=Ac&&Ac.prototype,xr=Ac,Ci=EE,um=Pr.TypeError,jc=Pr.document,Ic=Pr.process,na=lm.f,OE=na,TE=!!(jc&&jc.createEvent&&Pr.dispatchEvent),dm=Oi(Pr.PromiseRejectionEvent),ji=wE(br,function(){var e=gE(xr),t=e!==String(xr);if(!t&&cm===66||!Ci.finally)return!0;if(cm>=51&&/native code/.test(e))return!1;var r=new xr(function(a){a(1)}),n=function(a){a(function(){},function(){})};return(r.constructor={})[kE]=n,!(r.then(function(){})instanceof n)||!t&&$E&&!dm}),CE=ji||!yE(function(e){xr.all(e).catch(function(){})}),hm=function(e){var t;return!(!fE(e)||!Oi(t=e.then))&&t},fm=function(e,t){var r,n,a,o=t.value,i=t.state==1,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,h=e.domain;try{s?(i||(t.rejection===2&&IE(t),t.rejection=1),s===!0?r=o:(h&&h.enter(),r=s(o),h&&(h.exit(),a=!0)),r===e.promise?c(um("Promise-chain cycle")):(n=hm(r))?Zr(n,r,l,c):l(r)):c(o)}catch(d){h&&!a&&h.exit(),c(d)}},mm=function(e,t){e.notified||(e.notified=!0,Oc(function(){for(var r,n=e.reactions;r=n.get();)fm(r,e);e.notified=!1,t&&!e.rejection&&jE(e)}))},gm=function(e,t,r){var n,a;TE?((n=jc.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),Pr.dispatchEvent(n)):n={promise:t,reason:r},!dm&&(a=Pr["on"+e])?a(n):e==="unhandledrejection"&&function(o,i){var s=cE.console;s&&s.error&&(arguments.length==1?s.error(o):s.error(o,i))}("Unhandled promise rejection",r)},jE=function(e){Zr(sm,Pr,function(){var t,r=e.facade,n=e.value;if(ym(e)&&(t=Tc(function(){Ti?Ic.emit("unhandledRejection",n,r):gm("unhandledrejection",r,n)}),e.rejection=Ti||ym(e)?2:1,t.error))throw t.value})},ym=function(e){return e.rejection!==1&&!e.parent},IE=function(e){Zr(sm,Pr,function(){var t=e.facade;Ti?Ic.emit("rejectionHandled",t):gm("rejectionhandled",t,e.value)})},aa=function(e,t,r){return function(n){e(t,n,r)}},oa=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,mm(e,!0))},_c=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw um("Promise can't be resolved itself");var n=hm(t);n?Oc(function(){var a={done:!1};try{Zr(n,t,aa(_c,a,e),aa(oa,a,e))}catch(o){oa(a,o,e)}}):(e.value=t,e.state=1,mm(e,!1))}catch(a){oa({done:!1},a,e)}}};ji&&(Ci=(xr=function(e){mE(this,Ci),Ec(e),Zr(kc,this);var t=pm(this);try{e(aa(_c,t),aa(oa,t))}catch(r){oa(t,r)}}).prototype,(kc=function(e){SE(this,{type:br,done:!1,notified:!1,parent:!1,reactions:new xE,rejection:!1,state:0,value:void 0})}).prototype=dE(Ci,{then:function(e,t){var r=AE(this),n=na(vE(this,xr));return r.parent=!0,n.ok=!Oi(e)||e,n.fail=Oi(t)&&t,n.domain=Ti?Ic.domain:void 0,r.state==0?r.reactions.add(n):Oc(function(){fm(n,r)}),n.promise},catch:function(e){return this.then(void 0,e)}}),am=function(){var e=new kc,t=pm(e);this.promise=e,this.resolve=aa(_c,t),this.reject=aa(oa,t)},lm.f=na=function(e){return e===xr||e===Sc?new am(e):OE(e)}),Ei({global:!0,wrap:!0,forced:ji},{Promise:xr}),hE(xr,br,!1,!0),Ai=jA(br),om=IA.f,_A&&Ai&&!Ai[Ff]&&om(Ai,Ff,{configurable:!0,get:function(){return this}}),Sc=uE(br),Ei({target:br,stat:!0,forced:ji},{reject:function(e){var t=na(this);return Zr(t.reject,void 0,e),t.promise}}),Ei({target:br,stat:!0,forced:!0},{resolve:function(e){return bE(this===Sc?xr:this,e)}}),Ei({target:br,stat:!0,forced:CE},{all:function(e){var t=this,r=na(t),n=r.resolve,a=r.reject,o=Tc(function(){var i=Ec(t.resolve),s=[],l=0,c=1;im(e,function(h){var d=l++,f=!1;c++,Zr(i,t,h).then(function(m){f||(f=!0,s[d]=m,--c||n(s))},a)}),--c||n(s)});return o.error&&a(o.value),r.promise},race:function(e){var t=this,r=na(t),n=r.reject,a=Tc(function(){var o=Ec(t.resolve);im(e,function(i){Zr(o,t,i).then(r.resolve,n)})});return a.error&&n(a.value),r.promise}});var _E=zt,PE=dn,RE=ra,LE=Si,FE=Xn;We({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=RE.f(t),n=r.resolve,a=r.reject,o=LE(function(){var i=PE(t.resolve),s=[],l=0,c=1;FE(e,function(h){var d=l++,f=!1;c++,_E(i,t,h).then(function(m){f||(f=!0,s[d]={status:"fulfilled",value:m},--c||n(s))},function(m){f||(f=!0,s[d]={status:"rejected",reason:m},--c||n(s))})}),--c||n(s)});return o.error&&a(o.value),r.promise}});var DE=dn,BE=Xt,NE=zt,qE=ra,zE=Si,UE=Xn;We({target:"Promise",stat:!0},{any:function(e){var t=this,r=BE("AggregateError"),n=qE.f(t),a=n.resolve,o=n.reject,i=zE(function(){var s=DE(t.resolve),l=[],c=0,h=1,d=!1;UE(e,function(f){var m=c++,v=!1;h++,NE(s,t,f).then(function(w){v||d||(d=!0,a(w))},function(w){v||d||(v=!0,l[m]=w,--h||o(new r(l,"No one promise resolved")))})}),--h||o(new r(l,"No one promise resolved"))});return i.error&&o(i.value),n.promise}});var vm=Lf,ME=Xt,HE=wt,WE=Bf,bm=rm;We({target:"Promise",proto:!0,real:!0,forced:!!vm&&st(function(){vm.prototype.finally.call({then:function(){}},function(){})})},{finally:function(e){var t=WE(this,ME("Promise")),r=HE(e);return this.then(r?function(n){return bm(t,e()).then(function(){return n})}:e,r?function(n){return bm(t,e()).then(function(){throw n})}:e)}});var xm=Et.Promise,VE=xm,GE=ra,KE=Si;We({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=GE.f(this),r=KE(e);return(r.error?t.reject:t.resolve)(r.value),t.promise}});const wm=Me(VE);function $m(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):wm.resolve(l).then(n,a)}function Pc(e){return function(){var t=this,r=arguments;return new wm(function(n,a){var o=e.apply(t,r);function i(l){$m(o,n,a,i,s,"next",l)}function s(l){$m(o,n,a,i,s,"throw",l)}i(void 0)})}}var km={exports:{}};(function(e){var t=function(r){var n,a=Object.prototype,o=a.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function h(V,D,Q){return Object.defineProperty(V,D,{value:Q,enumerable:!0,configurable:!0,writable:!0}),V[D]}try{h({},"")}catch{h=function(D,Q,be){return D[Q]=be}}function d(V,D,Q,be){var se,je,de,De,Ge=D&&D.prototype instanceof k?D:k,bt=Object.create(Ge.prototype),Ct=new N(be||[]);return bt._invoke=(se=V,je=Q,de=Ct,De=m,function(Ke,or){if(De===w)throw new Error("Generator is already running");if(De===x){if(Ke==="throw")throw or;return ve()}for(de.method=Ke,de.arg=or;;){var Dr=de.delegate;if(Dr){var dr=B(Dr,de);if(dr){if(dr===p)continue;return dr}}if(de.method==="next")de.sent=de._sent=de.arg;else if(de.method==="throw"){if(De===m)throw De=x,de.arg;de.dispatchException(de.arg)}else de.method==="return"&&de.abrupt("return",de.arg);De=w;var He=f(se,je,de);if(He.type==="normal"){if(De=de.done?x:v,He.arg===p)continue;return{value:He.arg,done:de.done}}He.type==="throw"&&(De=x,de.method="throw",de.arg=He.arg)}}),bt}function f(V,D,Q){try{return{type:"normal",arg:V.call(D,Q)}}catch(be){return{type:"throw",arg:be}}}r.wrap=d;var m="suspendedStart",v="suspendedYield",w="executing",x="completed",p={};function k(){}function $(){}function C(){}var F={};h(F,s,function(){return this});var O=Object.getPrototypeOf,U=O&&O(O(X([])));U&&U!==a&&o.call(U,s)&&(F=U);var A=C.prototype=k.prototype=Object.create(F);function T(V){["next","throw","return"].forEach(function(D){h(V,D,function(Q){return this._invoke(D,Q)})})}function _(V,D){function Q(se,je,de,De){var Ge=f(V[se],V,je);if(Ge.type!=="throw"){var bt=Ge.arg,Ct=bt.value;return Ct&&typeof Ct=="object"&&o.call(Ct,"__await")?D.resolve(Ct.u).then(function(Ke){Q("next",Ke,de,De)},function(Ke){Q("throw",Ke,de,De)}):D.resolve(Ct).then(function(Ke){bt.value=Ke,de(bt)},function(Ke){return Q("throw",Ke,de,De)})}De(Ge.arg)}var be;this._invoke=function(se,je){function de(){return new D(function(De,Ge){Q(se,je,De,Ge)})}return be=be?be.then(de,de):de()}}function B(V,D){var Q=V.iterator[D.method];if(Q===n){if(D.delegate=null,D.method==="throw"){if(V.iterator.return&&(D.method="return",D.arg=n,B(V,D),D.method==="throw"))return p;D.method="throw",D.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var be=f(Q,V.iterator,D.arg);if(be.type==="throw")return D.method="throw",D.arg=be.arg,D.delegate=null,p;var se=be.arg;return se?se.done?(D[V.resultName]=se.value,D.next=V.nextLoc,D.method!=="return"&&(D.method="next",D.arg=n),D.delegate=null,p):se:(D.method="throw",D.arg=new TypeError("iterator result is not an object"),D.delegate=null,p)}function E(V){var D={tryLoc:V[0]};1 in V&&(D.catchLoc=V[1]),2 in V&&(D.finallyLoc=V[2],D.afterLoc=V[3]),this.tryEntries.push(D)}function I(V){var D=V.completion||{};D.type="normal",delete D.arg,V.completion=D}function N(V){this.tryEntries=[{tryLoc:"root"}],V.forEach(E,this),this.reset(!0)}function X(V){if(V){var D=V[s];if(D)return D.call(V);if(typeof V.next=="function")return V;if(!isNaN(V.length)){var Q=-1,be=function se(){for(;++Q<V.length;)if(o.call(V,Q))return se.value=V[Q],se.done=!1,se;return se.value=n,se.done=!0,se};return be.next=be}}return{next:ve}}function ve(){return{value:n,done:!0}}return $.prototype=C,h(A,"constructor",C),h(C,"constructor",$),$.displayName=h(C,c,"GeneratorFunction"),r.isGeneratorFunction=function(V){var D=typeof V=="function"&&V.constructor;return!!D&&(D===$||(D.displayName||D.name)==="GeneratorFunction")},r.mark=function(V){return Object.setPrototypeOf?Object.setPrototypeOf(V,C):(V.__proto__=C,h(V,c,"GeneratorFunction")),V.prototype=Object.create(A),V},r.awrap=function(V){return{u:V}},T(_.prototype),h(_.prototype,l,function(){return this}),r.AsyncIterator=_,r.async=function(V,D,Q,be,se){se===void 0&&(se=Promise);var je=new _(d(V,D,Q,be),se);return r.isGeneratorFunction(D)?je:je.next().then(function(de){return de.done?de.value:je.next()})},T(A),h(A,c,"Generator"),h(A,s,function(){return this}),h(A,"toString",function(){return"[object Generator]"}),r.keys=function(V){var D=[];for(var Q in V)D.push(Q);return D.reverse(),function be(){for(;D.length;){var se=D.pop();if(se in V)return be.value=se,be.done=!1,be}return be.done=!0,be}},r.values=X,N.prototype={constructor:N,reset:function(V){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!V)for(var D in this)D.charAt(0)==="t"&&o.call(this,D)&&!isNaN(+D.slice(1))&&(this[D]=n)},stop:function(){this.done=!0;var V=this.tryEntries[0].completion;if(V.type==="throw")throw V.arg;return this.rval},dispatchException:function(V){if(this.done)throw V;var D=this;function Q(Ge,bt){return je.type="throw",je.arg=V,D.next=Ge,bt&&(D.method="next",D.arg=n),!!bt}for(var be=this.tryEntries.length-1;be>=0;--be){var se=this.tryEntries[be],je=se.completion;if(se.tryLoc==="root")return Q("end");if(se.tryLoc<=this.prev){var de=o.call(se,"catchLoc"),De=o.call(se,"finallyLoc");if(de&&De){if(this.prev<se.catchLoc)return Q(se.catchLoc,!0);if(this.prev<se.finallyLoc)return Q(se.finallyLoc)}else if(de){if(this.prev<se.catchLoc)return Q(se.catchLoc,!0)}else{if(!De)throw new Error("try statement without catch or finally");if(this.prev<se.finallyLoc)return Q(se.finallyLoc)}}}},abrupt:function(V,D){for(var Q=this.tryEntries.length-1;Q>=0;--Q){var be=this.tryEntries[Q];if(be.tryLoc<=this.prev&&o.call(be,"finallyLoc")&&this.prev<be.finallyLoc){var se=be;break}}se&&(V==="break"||V==="continue")&&se.tryLoc<=D&&D<=se.finallyLoc&&(se=null);var je=se?se.completion:{};return je.type=V,je.arg=D,se?(this.method="next",this.next=se.finallyLoc,p):this.complete(je)},complete:function(V,D){if(V.type==="throw")throw V.arg;return V.type==="break"||V.type==="continue"?this.next=V.arg:V.type==="return"?(this.rval=this.arg=V.arg,this.method="return",this.next="end"):V.type==="normal"&&D&&(this.next=D),p},finish:function(V){for(var D=this.tryEntries.length-1;D>=0;--D){var Q=this.tryEntries[D];if(Q.finallyLoc===V)return this.complete(Q.completion,Q.afterLoc),I(Q),p}},catch:function(V){for(var D=this.tryEntries.length-1;D>=0;--D){var Q=this.tryEntries[D];if(Q.tryLoc===V){var be=Q.completion;if(be.type==="throw"){var se=be.arg;I(Q)}return se}}throw new Error("illegal catch attempt")},delegateYield:function(V,D,Q){return this.delegate={iterator:X(V),resultName:D,nextLoc:Q},this.method==="next"&&(this.arg=n),p}},r}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(km);const wr=Me(km.exports);var JE=il.includes;We({target:"Array",proto:!0},{includes:function(e){return JE(this,e,arguments.length>1?arguments[1]:void 0)}});var YE=er("Array").includes,ZE=We,QE=Zh,XE=Da,Sm=mn,eO=Qh,tO=tt("".indexOf);ZE({target:"String",proto:!0,forced:!eO("includes")},{includes:function(e){return!!~tO(Sm(XE(this)),Sm(QE(e)),arguments.length>1?arguments[1]:void 0)}});var rO=er("String").includes,Am=Ft,nO=YE,aO=rO,Rc=Array.prototype,Lc=String.prototype;const co=Me(function(e){var t=e.includes;return e===Rc||Am(Rc,e)&&t===Rc.includes?nO:typeof e=="string"||e===Lc||Am(Lc,e)&&t===Lc.includes?aO:t});var oO=er("Array").entries,iO=Vr,sO=It,lO=Ft,cO=oO,Fc=Array.prototype,pO={DOMTokenList:!0,NodeList:!0};const Em=Me(function(e){var t=e.entries;return e===Fc||lO(Fc,e)&&t===Fc.entries||sO(pO,iO(e))?cO:t}),Om=Me(Ef);var uO=We,dO=Xt,hO=La,po=tt,fO=st,mO=Ae.Array,Ii=dO("JSON","stringify"),_i=po(/./.exec),Tm=po("".charAt),gO=po("".charCodeAt),yO=po("".replace),vO=po(1 .toString),bO=/[\uD800-\uDFFF]/g,Cm=/^[\uD800-\uDBFF]$/,jm=/^[\uDC00-\uDFFF]$/,xO=function(e,t,r){var n=Tm(r,t-1),a=Tm(r,t+1);return _i(Cm,e)&&!_i(jm,a)||_i(jm,e)&&!_i(Cm,n)?"\\u"+vO(gO(e,0),16):e},wO=fO(function(){return Ii("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ii("\uDEAD")!=='"\\udead"'});Ii&&uO({target:"JSON",stat:!0,forced:wO},{stringify:function(e,t,r){for(var n=0,a=arguments.length,o=mO(a);n<a;n++)o[n]=arguments[n];var i=hO(Ii,null,o);return typeof i=="string"?yO(i,bO,xO):i}});var Dc=Et,$O=La;Dc.JSON||(Dc.JSON={stringify:JSON.stringify});const Pi=Me(function(e,t,r){return $O(Dc.JSON.stringify,null,arguments)});var kO=Kr.map;We({target:"Array",proto:!0,forced:!Xa("map")},{map:function(e){return kO(this,e,arguments.length>1?arguments[1]:void 0)}});var SO=er("Array").map,AO=Ft,EO=SO,Bc=Array.prototype;const Ze=Me(function(e){var t=e.map;return e===Bc||AO(Bc,e)&&t===Bc.map?EO:t}),Ve=Me($d);var OO=er("Array").concat,TO=Ft,CO=OO,Nc=Array.prototype;const $e=Me(function(e){var t=e.concat;return e===Nc||TO(Nc,e)&&t===Nc.concat?CO:t});var jO=Lt,Im=tt,IO=za,_O=lr,PO=Im(Fa.f),RO=Im([].push),_m=function(e){return function(t){for(var r,n=_O(t),a=IO(n),o=a.length,i=0,s=[];o>i;)r=a[i++],jO&&!PO(n,r)||RO(s,e?[r,n[r]]:n[r]);return s}},LO=[_m(!0),_m(!1)][0];We({target:"Object",stat:!0},{entries:function(e){return LO(e)}});var FO=Et.Object.entries;const Pm=Me(FO),nr=Me(hh);(function(){(function(e){(function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,a="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch{return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(A){return A&&s.indexOf(Object.prototype.toString.call(A))>-1};function c(A){if(typeof A!="string"&&(A=String(A)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(A))throw new TypeError("Invalid character in header field name");return A.toLowerCase()}function h(A){return typeof A!="string"&&(A=String(A)),A}function d(A){var T={next:function(){var _=A.shift();return{done:_===void 0,value:_}}};return n&&(T[Symbol.iterator]=function(){return T}),T}function f(A){this.map={},A instanceof f?A.forEach(function(T,_){this.append(_,T)},this):Array.isArray(A)?A.forEach(function(T){this.append(T[0],T[1])},this):A&&Object.getOwnPropertyNames(A).forEach(function(T){this.append(T,A[T])},this)}function m(A){if(A.bodyUsed)return Promise.reject(new TypeError("Already read"));A.bodyUsed=!0}function v(A){return new Promise(function(T,_){A.onload=function(){T(A.result)},A.onerror=function(){_(A.error)}})}function w(A){var T=new FileReader,_=v(T);return T.readAsArrayBuffer(A),_}function x(A){if(A.slice)return A.slice(0);var T=new Uint8Array(A.byteLength);return T.set(new Uint8Array(A)),T.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(A){var T;this._bodyInit=A,A?typeof A=="string"?this._bodyText=A:a&&Blob.prototype.isPrototypeOf(A)?this._bodyBlob=A:o&&FormData.prototype.isPrototypeOf(A)?this._bodyFormData=A:r&&URLSearchParams.prototype.isPrototypeOf(A)?this._bodyText=A.toString():i&&a&&(T=A)&&DataView.prototype.isPrototypeOf(T)?(this._bodyArrayBuffer=x(A.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(A)||l(A))?this._bodyArrayBuffer=x(A):this._bodyText=A=Object.prototype.toString.call(A):this._bodyText="",this.headers.get("content-type")||(typeof A=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(A)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var A=m(this);if(A)return A;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var A,T,_,B=m(this);if(B)return B;if(this._bodyBlob)return A=this._bodyBlob,T=new FileReader,_=v(T),T.readAsText(A),_;if(this._bodyArrayBuffer)return Promise.resolve(function(E){for(var I=new Uint8Array(E),N=new Array(I.length),X=0;X<I.length;X++)N[X]=String.fromCharCode(I[X]);return N.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(C)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(A,T){A=c(A),T=h(T);var _=this.map[A];this.map[A]=_?_+", "+T:T},f.prototype.delete=function(A){delete this.map[c(A)]},f.prototype.get=function(A){return A=c(A),this.has(A)?this.map[A]:null},f.prototype.has=function(A){return this.map.hasOwnProperty(c(A))},f.prototype.set=function(A,T){this.map[c(A)]=h(T)},f.prototype.forEach=function(A,T){for(var _ in this.map)this.map.hasOwnProperty(_)&&A.call(T,this.map[_],_,this)},f.prototype.keys=function(){var A=[];return this.forEach(function(T,_){A.push(_)}),d(A)},f.prototype.values=function(){var A=[];return this.forEach(function(T){A.push(T)}),d(A)},f.prototype.entries=function(){var A=[];return this.forEach(function(T,_){A.push([_,T])}),d(A)},n&&(f.prototype[Symbol.iterator]=f.prototype.entries);var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function $(A,T){var _,B,E=(T=T||{}).body;if(A instanceof $){if(A.bodyUsed)throw new TypeError("Already read");this.url=A.url,this.credentials=A.credentials,T.headers||(this.headers=new f(A.headers)),this.method=A.method,this.mode=A.mode,this.signal=A.signal,E||A._bodyInit==null||(E=A._bodyInit,A.bodyUsed=!0)}else this.url=String(A);if(this.credentials=T.credentials||this.credentials||"same-origin",!T.headers&&this.headers||(this.headers=new f(T.headers)),this.method=(_=T.method||this.method||"GET",B=_.toUpperCase(),k.indexOf(B)>-1?B:_),this.mode=T.mode||this.mode||null,this.signal=T.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&E)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(E)}function C(A){var T=new FormData;return A.trim().split("&").forEach(function(_){if(_){var B=_.split("="),E=B.shift().replace(/\+/g," "),I=B.join("=").replace(/\+/g," ");T.append(decodeURIComponent(E),decodeURIComponent(I))}}),T}function F(A,T){T||(T={}),this.type="default",this.status=T.status===void 0?200:T.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in T?T.statusText:"OK",this.headers=new f(T.headers),this.url=T.url||"",this._initBody(A)}$.prototype.clone=function(){return new $(this,{body:this._bodyInit})},p.call($.prototype),p.call(F.prototype),F.prototype.clone=function(){return new F(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},F.error=function(){var A=new F(null,{status:0,statusText:""});return A.type="error",A};var O=[301,302,303,307,308];F.redirect=function(A,T){if(O.indexOf(T)===-1)throw new RangeError("Invalid status code");return new F(null,{status:T,headers:{location:A}})},t.DOMException=e.DOMException;try{new t.DOMException}catch{t.DOMException=function(T,_){this.message=T,this.name=_;var B=Error(T);this.stack=B.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function U(A,T){return new Promise(function(_,B){var E=new $(A,T);if(E.signal&&E.signal.aborted)return B(new t.DOMException("Aborted","AbortError"));var I=new XMLHttpRequest;function N(){I.abort()}I.onload=function(){var X,ve,V={status:I.status,statusText:I.statusText,headers:(X=I.getAllResponseHeaders()||"",ve=new f,X.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(Q){var be=Q.split(":"),se=be.shift().trim();if(se){var je=be.join(":").trim();ve.append(se,je)}}),ve)};V.url="responseURL"in I?I.responseURL:V.headers.get("X-Request-URL");var D="response"in I?I.response:I.responseText;_(new F(D,V))},I.onerror=function(){B(new TypeError("Network request failed"))},I.ontimeout=function(){B(new TypeError("Network request failed"))},I.onabort=function(){B(new t.DOMException("Aborted","AbortError"))},I.open(E.method,E.url,!0),E.credentials==="include"?I.withCredentials=!0:E.credentials==="omit"&&(I.withCredentials=!1),"responseType"in I&&a&&(I.responseType="blob"),E.headers.forEach(function(X,ve){I.setRequestHeader(ve,X)}),E.signal&&(E.signal.addEventListener("abort",N),I.onreadystatechange=function(){I.readyState===4&&E.signal.removeEventListener("abort",N)}),I.send(E._bodyInit===void 0?null:E._bodyInit)})}U.polyfill=!0,e.fetch||(e.fetch=U,e.Headers=f,e.Request=$,e.Response=F),t.Headers=f,t.Request=$,t.Response=F,t.fetch=U,Object.defineProperty(t,"t",{value:!0})})({})})(typeof self<"u"?self:this)})();var Rm=typeof Symbol<"u"&&Symbol,DO="Function.prototype.bind called on incompatible ",qc=Array.prototype.slice,BO=Object.prototype.toString,zc=Function.prototype.bind||function(e){var t=this;if(typeof t!="function"||BO.call(t)!=="[object Function]")throw new TypeError(DO+t);for(var r,n=qc.call(arguments,1),a=function(){if(this instanceof r){var c=t.apply(this,n.concat(qc.call(arguments)));return Object(c)===c?c:this}return t.apply(e,n.concat(qc.call(arguments)))},o=Math.max(0,t.length-n.length),i=[],s=0;s<o;s++)i.push("$"+s);if(r=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r},NO=zc.call(Function.call,Object.prototype.hasOwnProperty),uo=SyntaxError,Lm=Function,ia=TypeError,Uc=function(e){try{return Lm('"use strict"; return ('+e+").constructor;")()}catch{}},An=Object.getOwnPropertyDescriptor;if(An)try{An({},"")}catch{An=null}var Mc=function(){throw new ia},qO=An?function(){try{return Mc}catch{try{return An(arguments,"callee").get}catch{return Mc}}}():Mc,sa=typeof Rm=="function"&&typeof Symbol=="function"&&typeof Rm("foo")=="symbol"&&typeof Symbol("bar")=="symbol"&&function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),r=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;for(t in e[t]=42,e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var n=Object.getOwnPropertySymbols(e);if(n.length!==1||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,t);if(a.value!==42||a.enumerable!==!0)return!1}return!0}(),Qr=Object.getPrototypeOf||function(e){return e.__proto__},la={},zO=typeof Uint8Array>"u"?void 0:Qr(Uint8Array),ca={"%AggregateError%":typeof AggregateError>"u"?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":sa?Qr([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":la,"%AsyncGenerator%":la,"%AsyncGeneratorFunction%":la,"%AsyncIteratorPrototype%":la,"%Atomics%":typeof Atomics>"u"?void 0:Atomics,"%BigInt%":typeof BigInt>"u"?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?void 0:Float32Array,"%Float64Array%":typeof Float64Array>"u"?void 0:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?void 0:FinalizationRegistry,"%Function%":Lm,"%GeneratorFunction%":la,"%Int8Array%":typeof Int8Array>"u"?void 0:Int8Array,"%Int16Array%":typeof Int16Array>"u"?void 0:Int16Array,"%Int32Array%":typeof Int32Array>"u"?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":sa?Qr(Qr([][Symbol.iterator]())):void 0,"%JSON%":typeof JSON=="object"?JSON:void 0,"%Map%":typeof Map>"u"?void 0:Map,"%MapIteratorPrototype%":typeof Map<"u"&&sa?Qr(new Map()[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?void 0:Promise,"%Proxy%":typeof Proxy>"u"?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?void 0:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?void 0:Set,"%SetIteratorPrototype%":typeof Set<"u"&&sa?Qr(new Set()[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":sa?Qr(""[Symbol.iterator]()):void 0,"%Symbol%":sa?Symbol:void 0,"%SyntaxError%":uo,"%ThrowTypeError%":qO,"%TypedArray%":zO,"%TypeError%":ia,"%Uint8Array%":typeof Uint8Array>"u"?void 0:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?void 0:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?void 0:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?void 0:WeakMap,"%WeakRef%":typeof WeakRef>"u"?void 0:WeakRef,"%WeakSet%":typeof WeakSet>"u"?void 0:WeakSet},UO=function e(t){var r;if(t==="%AsyncFunction%")r=Uc("async function () {}");else if(t==="%GeneratorFunction%")r=Uc("function* () {}");else if(t==="%AsyncGeneratorFunction%")r=Uc("async function* () {}");else if(t==="%AsyncGenerator%"){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(t==="%AsyncIteratorPrototype%"){var a=e("%AsyncGenerator%");a&&(r=Qr(a.prototype))}return ca[t]=r,r},Fm={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Ri=zc,Li=NO,MO=Ri.call(Function.call,Array.prototype.concat),HO=Ri.call(Function.apply,Array.prototype.splice),Dm=Ri.call(Function.call,String.prototype.replace),Fi=Ri.call(Function.call,String.prototype.slice),WO=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,VO=/\\(\\)?/g,GO=function(e){var t=Fi(e,0,1),r=Fi(e,-1);if(t==="%"&&r!=="%")throw new uo("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&t!=="%")throw new uo("invalid intrinsic syntax, expected opening `%`");var n=[];return Dm(e,WO,function(a,o,i,s){n[n.length]=i?Dm(s,VO,"$1"):o||a}),n},KO=function(e,t){var r,n=e;if(Li(Fm,n)&&(n="%"+(r=Fm[n])[0]+"%"),Li(ca,n)){var a=ca[n];if(a===la&&(a=UO(n)),a===void 0&&!t)throw new ia("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:a}}throw new uo("intrinsic "+e+" does not exist!")},Hc=function(e,t){if(typeof e!="string"||e.length===0)throw new ia("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new ia('"allowMissing" argument must be a boolean');var r=GO(e),n=r.length>0?r[0]:"",a=KO("%"+n+"%",t),o=a.name,i=a.value,s=!1,l=a.alias;l&&(n=l[0],HO(r,MO([0,1],l)));for(var c=1,h=!0;c<r.length;c+=1){var d=r[c],f=Fi(d,0,1),m=Fi(d,-1);if((f==='"'||f==="'"||f==="`"||m==='"'||m==="'"||m==="`")&&f!==m)throw new uo("property names with quotes must have matching quotes");if(d!=="constructor"&&h||(s=!0),Li(ca,o="%"+(n+="."+d)+"%"))i=ca[o];else if(i!=null){if(!(d in i)){if(!t)throw new ia("base intrinsic for "+e+" exists, but the property is not available.");return}if(An&&c+1>=r.length){var v=An(i,d);i=(h=!!v)&&"get"in v&&!("originalValue"in v.get)?v.get:i[d]}else h=Li(i,d),i=i[d];h&&!s&&(ca[o]=i)}}return i},Bm={exports:{}};(function(e){var t=zc,r=Hc,n=r("%Function.prototype.apply%"),a=r("%Function.prototype.call%"),o=r("%Reflect.apply%",!0)||t.call(a,n),i=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch{s=null}e.exports=function(h){var d=o(t,a,arguments);if(i&&s){var f=i(d,"length");f.configurable&&s(d,"length",{value:1+l(0,h.length-(arguments.length-1))})}return d};var c=function(){return o(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c})(Bm);var Nm=Hc,qm=Bm.exports,JO=qm(Nm("String.prototype.indexOf"));const YO=function(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"t",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),r}(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Wc=typeof Map=="function"&&Map.prototype,Vc=Object.getOwnPropertyDescriptor&&Wc?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Di=Wc&&Vc&&typeof Vc.get=="function"?Vc.get:null,ZO=Wc&&Map.prototype.forEach,Gc=typeof Set=="function"&&Set.prototype,Kc=Object.getOwnPropertyDescriptor&&Gc?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Bi=Gc&&Kc&&typeof Kc.get=="function"?Kc.get:null,QO=Gc&&Set.prototype.forEach,ho=typeof WeakMap=="function"&&WeakMap.prototype?WeakMap.prototype.has:null,fo=typeof WeakSet=="function"&&WeakSet.prototype?WeakSet.prototype.has:null,zm=typeof WeakRef=="function"&&WeakRef.prototype?WeakRef.prototype.deref:null,XO=Boolean.prototype.valueOf,e2=Object.prototype.toString,t2=Function.prototype.toString,r2=String.prototype.match,Jc=String.prototype.slice,Xr=String.prototype.replace,n2=String.prototype.toUpperCase,Um=String.prototype.toLowerCase,Mm=RegExp.prototype.test,Hm=Array.prototype.concat,$r=Array.prototype.join,a2=Array.prototype.slice,Wm=Math.floor,Yc=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Zc=Object.getOwnPropertySymbols,Qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,mo=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Dt=typeof Symbol=="function"&&Symbol.toStringTag?Symbol.toStringTag:null,Vm=Object.prototype.propertyIsEnumerable,Gm=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Km(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||Mm.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var n=e<0?-Wm(-e):Wm(e);if(n!==e){var a=String(n),o=Jc.call(t,a.length+1);return Xr.call(a,r,"$&_")+"."+Xr.call(Xr.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Xr.call(t,r,"$&_")}var Xc=YO.custom,ep=Xc&&Ym(Xc)?Xc:null;function Jm(e,t,r){var n=(r.quoteStyle||t)==="double"?'"':"'";return n+e+n}function o2(e){return Xr.call(String(e),/"/g,"&quot;")}function tp(e){return!(tn(e)!=="[object Array]"||Dt&&typeof e=="object"&&Dt in e)}function Ym(e){if(mo)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!Qc)return!1;try{return Qc.call(e),!0}catch{}return!1}var i2=Object.prototype.hasOwnProperty||function(e){return e in this};function en(e,t){return i2.call(e,t)}function tn(e){return e2.call(e)}function Zm(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function Qm(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return Qm(Jc.call(e,0,t.maxStringLength),t)+n}return Jm(Xr.call(Xr.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,s2),"single",t)}function s2(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+n2.call(t.toString(16))}function go(e){return"Object("+e+")"}function rp(e){return e+" { ? }"}function Xm(e,t,r,n){return e+" ("+t+") {"+(n?np(r,n):$r.call(r,", "))+"}"}function np(e,t){if(e.length===0)return"";var r=`
`+t.prev+t.base;return r+$r.call(e,","+r)+`
`+t.prev}function Ni(e,t){var r=tp(e),n=[];if(r){n.length=e.length;for(var a=0;a<e.length;a++)n[a]=en(e,a)?t(e[a],e):""}var o,i=typeof Zc=="function"?Zc(e):[];if(mo){o={};for(var s=0;s<i.length;s++)o["$"+i[s]]=i[s]}for(var l in e)en(e,l)&&(r&&String(Number(l))===l&&l<e.length||mo&&o["$"+l]instanceof Symbol||(Mm.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if(typeof Zc=="function")for(var c=0;c<i.length;c++)Vm.call(e,i[c])&&n.push("["+t(i[c])+"]: "+t(e[i[c]],e));return n}var ap=Hc,pa=function(e,t){var r=Nm(e,!!t);return typeof r=="function"&&JO(e,".prototype.")>-1?qm(r):r},l2=function e(t,r,n,a){var o=r||{};if(en(o,"quoteStyle")&&o.quoteStyle!=="single"&&o.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(en(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=!en(o,"customInspect")||o.customInspect;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(en(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(en(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=o.numericSeparator;if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return Qm(t,o);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var l=String(t);return s?Km(t,l):l}if(typeof t=="bigint"){var c=String(t)+"n";return s?Km(t,c):c}var h=o.depth===void 0?5:o.depth;if(n===void 0&&(n=0),n>=h&&h>0&&typeof t=="object")return tp(t)?"[Array]":"[Object]";var d=function(E,I){var N;if(E.indent==="	")N="	";else{if(!(typeof E.indent=="number"&&E.indent>0))return null;N=$r.call(Array(E.indent+1)," ")}return{base:N,prev:$r.call(Array(I+1),N)}}(o,n);if(a===void 0)a=[];else if(Zm(a,t)>=0)return"[Circular]";function f(E,I,N){if(I&&(a=a2.call(a)).push(I),N){var X={depth:o.depth};return en(o,"quoteStyle")&&(X.quoteStyle=o.quoteStyle),e(E,X,n+1,a)}return e(E,o,n+1,a)}if(typeof t=="function"){var m=function(E){if(E.name)return E.name;var I=r2.call(t2.call(E),/^function\s*([\w$]+)/);return I?I[1]:null}(t),v=Ni(t,f);return"[Function"+(m?": "+m:" (anonymous)")+"]"+(v.length>0?" { "+$r.call(v,", ")+" }":"")}if(Ym(t)){var w=mo?Xr.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):Qc.call(t);return typeof t!="object"||mo?w:go(w)}if(function(E){return!(!E||typeof E!="object")&&(typeof HTMLElement<"u"&&E instanceof HTMLElement||typeof E.nodeName=="string"&&typeof E.getAttribute=="function")}(t)){for(var x="<"+Um.call(String(t.nodeName)),p=t.attributes||[],k=0;k<p.length;k++)x+=" "+p[k].name+"="+Jm(o2(p[k].value),"double",o);return x+=">",t.childNodes&&t.childNodes.length&&(x+="..."),x+"</"+Um.call(String(t.nodeName))+">"}if(tp(t)){if(t.length===0)return"[]";var $=Ni(t,f);return d&&!function(E){for(var I=0;I<E.length;I++)if(Zm(E[I],`
`)>=0)return!1;return!0}($)?"["+np($,d)+"]":"[ "+$r.call($,", ")+" ]"}if(function(E){return!(tn(E)!=="[object Error]"||Dt&&typeof E=="object"&&Dt in E)}(t)){var C=Ni(t,f);return"cause"in t&&!Vm.call(t,"cause")?"{ ["+String(t)+"] "+$r.call(Hm.call("[cause]: "+f(t.cause),C),", ")+" }":C.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+$r.call(C,", ")+" }"}if(typeof t=="object"&&i){if(ep&&typeof t[ep]=="function")return t[ep]();if(i!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(function(E){if(!Di||!E||typeof E!="object")return!1;try{Di.call(E);try{Bi.call(E)}catch{return!0}return E instanceof Map}catch{}return!1}(t)){var F=[];return ZO.call(t,function(E,I){F.push(f(I,t,!0)+" => "+f(E,t))}),Xm("Map",Di.call(t),F,d)}if(function(E){if(!Bi||!E||typeof E!="object")return!1;try{Bi.call(E);try{Di.call(E)}catch{return!0}return E instanceof Set}catch{}return!1}(t)){var O=[];return QO.call(t,function(E){O.push(f(E,t))}),Xm("Set",Bi.call(t),O,d)}if(function(E){if(!ho||!E||typeof E!="object")return!1;try{ho.call(E,ho);try{fo.call(E,fo)}catch{return!0}return E instanceof WeakMap}catch{}return!1}(t))return rp("WeakMap");if(function(E){if(!fo||!E||typeof E!="object")return!1;try{fo.call(E,fo);try{ho.call(E,ho)}catch{return!0}return E instanceof WeakSet}catch{}return!1}(t))return rp("WeakSet");if(function(E){if(!zm||!E||typeof E!="object")return!1;try{return zm.call(E),!0}catch{}return!1}(t))return rp("WeakRef");if(function(E){return!(tn(E)!=="[object Number]"||Dt&&typeof E=="object"&&Dt in E)}(t))return go(f(Number(t)));if(function(E){if(!E||typeof E!="object"||!Yc)return!1;try{return Yc.call(E),!0}catch{}return!1}(t))return go(f(Yc.call(t)));if(function(E){return!(tn(E)!=="[object Boolean]"||Dt&&typeof E=="object"&&Dt in E)}(t))return go(XO.call(t));if(function(E){return!(tn(E)!=="[object String]"||Dt&&typeof E=="object"&&Dt in E)}(t))return go(f(String(t)));if(!function(E){return!(tn(E)!=="[object Date]"||Dt&&typeof E=="object"&&Dt in E)}(t)&&!function(E){return!(tn(E)!=="[object RegExp]"||Dt&&typeof E=="object"&&Dt in E)}(t)){var U=Ni(t,f),A=Gm?Gm(t)===Object.prototype:t instanceof Object||t.constructor===Object,T=t instanceof Object?"":"null prototype",_=!A&&Dt&&Object(t)===t&&Dt in t?Jc.call(tn(t),8,-1):T?"Object":"",B=(A||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"")+(_||T?"["+$r.call(Hm.call([],_||[],T||[]),": ")+"] ":"");return U.length===0?B+"{}":d?B+"{"+np(U,d)+"}":B+"{ "+$r.call(U,", ")+" }"}return String(t)},c2=ap("%TypeError%"),qi=ap("%WeakMap%",!0),zi=ap("%Map%",!0),p2=pa("WeakMap.prototype.get",!0),u2=pa("WeakMap.prototype.set",!0),d2=pa("WeakMap.prototype.has",!0),h2=pa("Map.prototype.get",!0),f2=pa("Map.prototype.set",!0),m2=pa("Map.prototype.has",!0),op=function(e,t){for(var r,n=e;(r=n.next)!==null;n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},g2=String.prototype.replace,y2=/%20/g,eg="RFC3986",tg={default:eg,formatters:{RFC1738:function(e){return g2.call(e,y2,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:eg},v2=tg,ip=Object.prototype.hasOwnProperty,En=Array.isArray,kr=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),rg=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)e[n]!==void 0&&(r[n]=e[n]);return r},ng={arrayToObject:rg,assign:function(e,t){return Object.keys(t).reduce(function(r,n){return r[n]=t[n],r},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],o=a.obj[a.prop],i=Object.keys(o),s=0;s<i.length;++s){var l=i[s],c=o[l];typeof c=="object"&&c!==null&&r.indexOf(c)===-1&&(t.push({obj:o,prop:l}),r.push(c))}return function(h){for(;h.length>1;){var d=h.pop(),f=d.obj[d.prop];if(En(f)){for(var m=[],v=0;v<f.length;++v)f[v]!==void 0&&m.push(f[v]);d.obj[d.prop]=m}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},encode:function(e,t,r,n,a){if(e.length===0)return e;var o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),r==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var i="",s=0;s<o.length;++s){var l=o.charCodeAt(s);l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||a===v2.RFC1738&&(l===40||l===41)?i+=o.charAt(s):l<128?i+=kr[l]:l<2048?i+=kr[192|l>>6]+kr[128|63&l]:l<55296||l>=57344?i+=kr[224|l>>12]+kr[128|l>>6&63]+kr[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(s)),i+=kr[240|l>>18]+kr[128|l>>12&63]+kr[128|l>>6&63]+kr[128|63&l])}return i},isBuffer:function(e){return!(!e||typeof e!="object"||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},maybeMap:function(e,t){if(En(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if(typeof r!="object"){if(En(t))t.push(r);else{if(!t||typeof t!="object")return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!ip.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||typeof t!="object")return[t].concat(r);var a=t;return En(t)&&!En(r)&&(a=rg(t,n)),En(t)&&En(r)?(r.forEach(function(o,i){if(ip.call(t,i)){var s=t[i];s&&typeof s=="object"&&o&&typeof o=="object"?t[i]=e(s,o,n):t.push(o)}else t[i]=o}),t):Object.keys(r).reduce(function(o,i){var s=r[i];return ip.call(o,i)?o[i]=e(o[i],s,n):o[i]=s,o},a)}},ag=function(){var e,t,r,n={assert:function(a){if(!n.has(a))throw new c2("Side channel does not contain "+l2(a))},get:function(a){if(qi&&a&&(typeof a=="object"||typeof a=="function")){if(e)return p2(e,a)}else if(zi){if(t)return h2(t,a)}else if(r)return(o=op(r,a))&&o.value;var o},has:function(a){if(qi&&a&&(typeof a=="object"||typeof a=="function")){if(e)return d2(e,a)}else if(zi){if(t)return m2(t,a)}else if(r)return!!op(r,a);return!1},set:function(a,o){var i,s,l,c;qi&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new qi),u2(e,a,o)):zi?(t||(t=new zi),f2(t,a,o)):(r||(r={key:{},next:null}),l=o,(c=op(i=r,s=a))?c.value=l:i.next={key:s,next:i.next,value:l})}};return n},sp=ng,yo=tg,b2=Object.prototype.hasOwnProperty,og={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},On=Array.isArray,x2=String.prototype.split,w2=Array.prototype.push,ig=function(e,t){w2.apply(e,On(t)?t:[t])},$2=Date.prototype.toISOString,sg=yo.default,_t={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:sp.encode,encodeValuesOnly:!1,format:sg,formatter:yo.formatters[sg],indices:!1,serializeDate:function(e){return $2.call(e)},skipNulls:!1,strictNullHandling:!1},lp={},k2=function e(t,r,n,a,o,i,s,l,c,h,d,f,m,v,w){for(var x,p=t,k=w,$=0,C=!1;(k=k.get(lp))!==void 0&&!C;){var F=k.get(t);if($+=1,F!==void 0){if(F===$)throw new RangeError("Cyclic object value");C=!0}k.get(lp)===void 0&&($=0)}if(typeof s=="function"?p=s(r,p):p instanceof Date?p=h(p):n==="comma"&&On(p)&&(p=sp.maybeMap(p,function(D){return D instanceof Date?h(D):D})),p===null){if(a)return i&&!m?i(r,_t.encoder,v,"key",d):r;p=""}if(typeof(x=p)=="string"||typeof x=="number"||typeof x=="boolean"||typeof x=="symbol"||typeof x=="bigint"||sp.isBuffer(p)){if(i){var O=m?r:i(r,_t.encoder,v,"key",d);if(n==="comma"&&m){for(var U=x2.call(String(p),","),A="",T=0;T<U.length;++T)A+=(T===0?"":",")+f(i(U[T],_t.encoder,v,"value",d));return[f(O)+"="+A]}return[f(O)+"="+f(i(p,_t.encoder,v,"value",d))]}return[f(r)+"="+f(String(p))]}var _,B=[];if(p===void 0)return B;if(n==="comma"&&On(p))_=[{value:p.length>0?p.join(",")||null:void 0}];else if(On(s))_=s;else{var E=Object.keys(p);_=l?E.sort(l):E}for(var I=0;I<_.length;++I){var N=_[I],X=typeof N=="object"&&N.value!==void 0?N.value:p[N];if(!o||X!==null){var ve=On(p)?typeof n=="function"?n(r,N):r:r+(c?"."+N:"["+N+"]");w.set(t,$);var V=ag();V.set(lp,w),ig(B,e(X,ve,n,a,o,i,s,l,c,h,d,f,m,v,V))}}return B},ua=ng,cp=Object.prototype.hasOwnProperty,S2=Array.isArray,Tt={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:ua.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},A2=function(e){return e.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},lg=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},E2=function(e,t,r,n){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(a),s=i?a.slice(0,i.index):a,l=[];if(s){if(!r.plainObjects&&cp.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&(i=o.exec(a))!==null&&c<r.depth;){if(c+=1,!r.plainObjects&&cp.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+a.slice(i.index)+"]"),function(h,d,f,m){for(var v=m?d:lg(d,f),w=h.length-1;w>=0;--w){var x,p=h[w];if(p==="[]"&&f.parseArrays)x=[].concat(v);else{x=f.plainObjects?Object.create(null):{};var k=p.charAt(0)==="["&&p.charAt(p.length-1)==="]"?p.slice(1,-1):p,$=parseInt(k,10);f.parseArrays||k!==""?!isNaN($)&&p!==k&&String($)===k&&$>=0&&f.parseArrays&&$<=f.arrayLimit?(x=[])[$]=v:k!=="__proto__"&&(x[k]=v):x={0:v}}v=x}return v}(l,t,r,n)}},O2=function(e,t){var r=function(c){if(!c)return Tt;if(c.decoder!==null&&c.decoder!==void 0&&typeof c.decoder!="function")throw new TypeError("Decoder has to be a function.");if(c.charset!==void 0&&c.charset!=="utf-8"&&c.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var h=c.charset===void 0?Tt.charset:c.charset;return{allowDots:c.allowDots===void 0?Tt.allowDots:!!c.allowDots,allowPrototypes:typeof c.allowPrototypes=="boolean"?c.allowPrototypes:Tt.allowPrototypes,allowSparse:typeof c.allowSparse=="boolean"?c.allowSparse:Tt.allowSparse,arrayLimit:typeof c.arrayLimit=="number"?c.arrayLimit:Tt.arrayLimit,charset:h,charsetSentinel:typeof c.charsetSentinel=="boolean"?c.charsetSentinel:Tt.charsetSentinel,comma:typeof c.comma=="boolean"?c.comma:Tt.comma,decoder:typeof c.decoder=="function"?c.decoder:Tt.decoder,delimiter:typeof c.delimiter=="string"||ua.isRegExp(c.delimiter)?c.delimiter:Tt.delimiter,depth:typeof c.depth=="number"||c.depth===!1?+c.depth:Tt.depth,ignoreQueryPrefix:c.ignoreQueryPrefix===!0,interpretNumericEntities:typeof c.interpretNumericEntities=="boolean"?c.interpretNumericEntities:Tt.interpretNumericEntities,parameterLimit:typeof c.parameterLimit=="number"?c.parameterLimit:Tt.parameterLimit,parseArrays:c.parseArrays!==!1,plainObjects:typeof c.plainObjects=="boolean"?c.plainObjects:Tt.plainObjects,strictNullHandling:typeof c.strictNullHandling=="boolean"?c.strictNullHandling:Tt.strictNullHandling}}(t);if(e===""||e==null)return r.plainObjects?Object.create(null):{};for(var n=typeof e=="string"?function(c,h){var d,f={},m=h.ignoreQueryPrefix?c.replace(/^\?/,""):c,v=h.parameterLimit===1/0?void 0:h.parameterLimit,w=m.split(h.delimiter,v),x=-1,p=h.charset;if(h.charsetSentinel)for(d=0;d<w.length;++d)w[d].indexOf("utf8=")===0&&(w[d]==="utf8=%E2%9C%93"?p="utf-8":w[d]==="utf8=%26%2310003%3B"&&(p="iso-8859-1"),x=d,d=w.length);for(d=0;d<w.length;++d)if(d!==x){var k,$,C=w[d],F=C.indexOf("]="),O=F===-1?C.indexOf("="):F+1;O===-1?(k=h.decoder(C,Tt.decoder,p,"key"),$=h.strictNullHandling?null:""):(k=h.decoder(C.slice(0,O),Tt.decoder,p,"key"),$=ua.maybeMap(lg(C.slice(O+1),h),function(U){return h.decoder(U,Tt.decoder,p,"value")})),$&&h.interpretNumericEntities&&p==="iso-8859-1"&&($=A2($)),C.indexOf("[]=")>-1&&($=S2($)?[$]:$),cp.call(f,k)?f[k]=ua.combine(f[k],$):f[k]=$}return f}(e,r):e,a=r.plainObjects?Object.create(null):{},o=Object.keys(n),i=0;i<o.length;++i){var s=o[i],l=E2(s,n[s],r,typeof e=="string");a=ua.merge(a,l,r)}return r.allowSparse===!0?a:ua.compact(a)},cg=function(e,t){var r,n=e,a=function(m){if(!m)return _t;if(m.encoder!==null&&m.encoder!==void 0&&typeof m.encoder!="function")throw new TypeError("Encoder has to be a function.");var v=m.charset||_t.charset;if(m.charset!==void 0&&m.charset!=="utf-8"&&m.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var w=yo.default;if(m.format!==void 0){if(!b2.call(yo.formatters,m.format))throw new TypeError("Unknown format option provided.");w=m.format}var x=yo.formatters[w],p=_t.filter;return(typeof m.filter=="function"||On(m.filter))&&(p=m.filter),{addQueryPrefix:typeof m.addQueryPrefix=="boolean"?m.addQueryPrefix:_t.addQueryPrefix,allowDots:m.allowDots===void 0?_t.allowDots:!!m.allowDots,charset:v,charsetSentinel:typeof m.charsetSentinel=="boolean"?m.charsetSentinel:_t.charsetSentinel,delimiter:m.delimiter===void 0?_t.delimiter:m.delimiter,encode:typeof m.encode=="boolean"?m.encode:_t.encode,encoder:typeof m.encoder=="function"?m.encoder:_t.encoder,encodeValuesOnly:typeof m.encodeValuesOnly=="boolean"?m.encodeValuesOnly:_t.encodeValuesOnly,filter:p,format:w,formatter:x,serializeDate:typeof m.serializeDate=="function"?m.serializeDate:_t.serializeDate,skipNulls:typeof m.skipNulls=="boolean"?m.skipNulls:_t.skipNulls,sort:typeof m.sort=="function"?m.sort:null,strictNullHandling:typeof m.strictNullHandling=="boolean"?m.strictNullHandling:_t.strictNullHandling}}(t);typeof a.filter=="function"?n=(0,a.filter)("",n):On(a.filter)&&(r=a.filter);var o,i=[];if(typeof n!="object"||n===null)return"";o=t&&t.arrayFormat in og?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=og[o];r||(r=Object.keys(n)),a.sort&&r.sort(a.sort);for(var l=ag(),c=0;c<r.length;++c){var h=r[c];a.skipNulls&&n[h]===null||ig(i,k2(n[h],h,s,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,l))}var d=i.join(a.delimiter),f=a.addQueryPrefix===!0?"?":"";return a.charsetSentinel&&(a.charset==="iso-8859-1"?f+="utf8=%26%2310003%3B&":f+="utf8=%E2%9C%93&"),d.length>0?f+d:""};function pg(e){return e==null}var Ot={isNothing:pg,isObject:function(e){return typeof e=="object"&&e!==null},toArray:function(e){return Array.isArray(e)?e:pg(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return e===0&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,a,o;if(t)for(r=0,n=(o=Object.keys(t)).length;r<n;r+=1)e[a=o[r]]=t[a];return e}};function ug(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+=`

`+e.mark.snippet),n+" "+r):n}function vo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=ug(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}vo.prototype=Object.create(Error.prototype),vo.prototype.constructor=vo,vo.prototype.toString=function(e){return this.name+": "+ug(this,e)};var Nt=vo;function pp(e,t,r,n,a){var o="",i="",s=Math.floor(a/2)-1;return n-t>s&&(t=n-s+(o=" ... ").length),r-n>s&&(r=n+s-(i=" ...").length),{str:o+e.slice(t,r).replace(/\t/g,"→")+i,pos:n-t+o.length}}function up(e,t){return Ot.repeat(" ",t-e.length)+e}var T2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],C2=["scalar","sequence","mapping"],Pt=function(e,t){if(t=t||{},Object.keys(t).forEach(function(a){if(T2.indexOf(a)===-1)throw new Nt('Unknown option "'+a+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(a){return a},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=(r=t.styleAliases||null,n={},r!==null&&Object.keys(r).forEach(function(a){r[a].forEach(function(o){n[String(o)]=a})}),n),C2.indexOf(this.kind)===-1)throw new Nt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.');var r,n};function dg(e,t){var r=[];return e[t].forEach(function(n){var a=r.length;r.forEach(function(o,i){o.tag===n.tag&&o.kind===n.kind&&o.multi===n.multi&&(a=i)}),r[a]=n}),r}function dp(e){return this.extend(e)}dp.prototype.extend=function(e){var t=[],r=[];if(e instanceof Pt)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Nt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach(function(a){if(!(a instanceof Pt))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Nt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Nt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof Pt))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(dp.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=dg(n,"implicit"),n.compiledExplicit=dg(n,"explicit"),n.compiledTypeMap=function(){var a,o,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(a=0,o=arguments.length;a<o;a+=1)arguments[a].forEach(s);return i}(n.compiledImplicit,n.compiledExplicit),n};var hg=dp,fg=new Pt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),mg=new Pt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),gg=new Pt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),yg=new hg({explicit:[fg,mg,gg]}),vg=new Pt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")},construct:function(){return null},predicate:function(e){return e===null},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),bg=new Pt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")},construct:function(e){return e==="true"||e==="True"||e==="TRUE"},predicate:function(e){return Object.prototype.toString.call(e)==="[object Boolean]"},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function j2(e){return 48<=e&&e<=55}function I2(e){return 48<=e&&e<=57}var xg=new Pt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r,n=e.length,a=0,o=!1;if(!n)return!1;if((t=e[a])!=="-"&&t!=="+"||(t=e[++a]),t==="0"){if(a+1===n)return!0;if((t=e[++a])==="b"){for(a++;a<n;a++)if((t=e[a])!=="_"){if(t!=="0"&&t!=="1")return!1;o=!0}return o&&t!=="_"}if(t==="x"){for(a++;a<n;a++)if((t=e[a])!=="_"){if(!(48<=(r=e.charCodeAt(a))&&r<=57||65<=r&&r<=70||97<=r&&r<=102))return!1;o=!0}return o&&t!=="_"}if(t==="o"){for(a++;a<n;a++)if((t=e[a])!=="_"){if(!j2(e.charCodeAt(a)))return!1;o=!0}return o&&t!=="_"}}if(t==="_")return!1;for(;a<n;a++)if((t=e[a])!=="_"){if(!I2(e.charCodeAt(a)))return!1;o=!0}return!(!o||t==="_")},construct:function(e){var t,r=e,n=1;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),(t=r[0])!=="-"&&t!=="+"||(t==="-"&&(n=-1),t=(r=r.slice(1))[0]),r==="0")return 0;if(t==="0"){if(r[1]==="b")return n*parseInt(r.slice(2),2);if(r[1]==="x")return n*parseInt(r.slice(2),16);if(r[1]==="o")return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1==0&&!Ot.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),_2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),P2=/^[-+]?[0-9]+e/,wg=new Pt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return e!==null&&!(!_2.test(e)||e[e.length-1]==="_")},construct:function(e){var t,r;return r=(t=e.replace(/_/g,"").toLowerCase())[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:r*parseFloat(t,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!=0||Ot.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ot.isNegativeZero(e))return"-0.0";return r=e.toString(10),P2.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),$g=yg.extend({implicit:[vg,bg,xg,wg]}),kg=$g,Sg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ag=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),Eg=new Pt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return e!==null&&(Sg.exec(e)!==null||Ag.exec(e)!==null)},construct:function(e){var t,r,n,a,o,i,s,l,c=0,h=null;if((t=Sg.exec(e))===null&&(t=Ag.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(r,n,a));if(o=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(h=6e4*(60*+t[10]+ +(t[11]||0)),t[9]==="-"&&(h=-h)),l=new Date(Date.UTC(r,n,a,o,i,s,c)),h&&l.setTime(l.getTime()-h),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),Og=new Pt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return e==="<<"||e===null}}),hp=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`,Tg=new Pt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r,n=0,a=e.length,o=hp;for(r=0;r<a;r++)if(!((t=o.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),a=n.length,o=hp,i=0,s=[];for(t=0;t<a;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|o.indexOf(n.charAt(t));return(r=a%4*6)==0?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):r===18?(s.push(i>>10&255),s.push(i>>2&255)):r===12&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"},represent:function(e){var t,r,n="",a=0,o=e.length,i=hp;for(t=0;t<o;t++)t%3==0&&t&&(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]),a=(a<<8)+e[t];return(r=o%3)==0?(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]):r===2?(n+=i[a>>10&63],n+=i[a>>4&63],n+=i[a<<2&63],n+=i[64]):r===1&&(n+=i[a>>2&63],n+=i[a<<4&63],n+=i[64],n+=i[64]),n}}),R2=Object.prototype.hasOwnProperty,L2=Object.prototype.toString,Cg=new Pt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,a,o,i=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],o=!1,L2.call(n)!=="[object Object]")return!1;for(a in n)if(R2.call(n,a)){if(o)return!1;o=!0}if(!o||i.indexOf(a)!==-1)return!1;i.push(a)}return!0},construct:function(e){return e!==null?e:[]}}),F2=Object.prototype.toString,jg=new Pt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1){if(n=i[t],F2.call(n)!=="[object Object]"||(a=Object.keys(n)).length!==1)return!1;o[t]=[a[0],n[a[0]]]}return!0},construct:function(e){if(e===null)return[];var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1)n=i[t],a=Object.keys(n),o[t]=[a[0],n[a[0]]];return o}}),D2=Object.prototype.hasOwnProperty,Ig=new Pt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(e===null)return!0;var t,r=e;for(t in r)if(D2.call(r,t)&&r[t]!==null)return!1;return!0},construct:function(e){return e!==null?e:{}}}),fp=kg.extend({implicit:[Eg,Og],explicit:[Tg,Cg,jg,Ig]}),rn=Object.prototype.hasOwnProperty,B2=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,N2=/[\x85\u2028\u2029]/,q2=/[,\[\]\{\}]/,_g=/^(?:!|!!|![a-z\-]+!)$/i,Pg=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Rg(e){return Object.prototype.toString.call(e)}function Sr(e){return e===10||e===13}function Tn(e){return e===9||e===32}function Ht(e){return e===9||e===32||e===10||e===13}function da(e){return e===44||e===91||e===93||e===123||e===125}function z2(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function Lg(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function U2(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var Fg=new Array(256),Dg=new Array(256),ha=0;ha<256;ha++)Fg[ha]=Lg(ha)?1:0,Dg[ha]=Lg(ha);function M2(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||fp,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Bg(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=function(n,a){if(a=Object.create(a||null),!n.buffer)return null;a.maxLength||(a.maxLength=79),typeof a.indent!="number"&&(a.indent=1),typeof a.linesBefore!="number"&&(a.linesBefore=3),typeof a.linesAfter!="number"&&(a.linesAfter=2);for(var o,i=/\r?\n|\r|\0/g,s=[0],l=[],c=-1;o=i.exec(n.buffer);)l.push(o.index),s.push(o.index+o[0].length),n.position<=o.index&&c<0&&(c=s.length-2);c<0&&(c=s.length-1);var h,d,f="",m=Math.min(n.line+a.linesAfter,l.length).toString().length,v=a.maxLength-(a.indent+m+3);for(h=1;h<=a.linesBefore&&!(c-h<0);h++)d=pp(n.buffer,s[c-h],l[c-h],n.position-(s[c]-s[c-h]),v),f=Ot.repeat(" ",a.indent)+up((n.line-h+1).toString(),m)+" | "+d.str+`
`+f;for(d=pp(n.buffer,s[c],l[c],n.position,v),f+=Ot.repeat(" ",a.indent)+up((n.line+1).toString(),m)+" | "+d.str+`
`,f+=Ot.repeat("-",a.indent+m+3+d.pos)+`^
`,h=1;h<=a.linesAfter&&!(c+h>=l.length);h++)d=pp(n.buffer,s[c+h],l[c+h],n.position-(s[c]-s[c+h]),v),f+=Ot.repeat(" ",a.indent)+up((n.line+h+1).toString(),m)+" | "+d.str+`
`;return f.replace(/\n$/,"")}(r),new Nt(t,r)}function Se(e,t){throw Bg(e,t)}function Ui(e,t){e.onWarning&&e.onWarning.call(null,Bg(e,t))}var Ng={YAML:function(e,t,r){var n,a,o;e.version!==null&&Se(e,"duplication of %YAML directive"),r.length!==1&&Se(e,"YAML directive accepts exactly one argument"),(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))===null&&Se(e,"ill-formed argument of the YAML directive"),a=parseInt(n[1],10),o=parseInt(n[2],10),a!==1&&Se(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=o<2,o!==1&&o!==2&&Ui(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,a;r.length!==2&&Se(e,"TAG directive accepts exactly two arguments"),n=r[0],a=r[1],_g.test(n)||Se(e,"ill-formed tag handle (first argument) of the TAG directive"),rn.call(e.tagMap,n)&&Se(e,'there is a previously declared suffix for "'+n+'" tag handle'),Pg.test(a)||Se(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{Se(e,"tag prefix is malformed: "+a)}e.tagMap[n]=a}};function nn(e,t,r,n){var a,o,i,s;if(t<r){if(s=e.input.slice(t,r),n)for(a=0,o=s.length;a<o;a+=1)(i=s.charCodeAt(a))===9||32<=i&&i<=1114111||Se(e,"expected valid JSON character");else B2.test(s)&&Se(e,"the stream contains non-printable characters");e.result+=s}}function qg(e,t,r,n){var a,o,i,s;for(Ot.isObject(r)||Se(e,"cannot merge mappings; the provided source object is unacceptable"),i=0,s=(a=Object.keys(r)).length;i<s;i+=1)o=a[i],rn.call(t,o)||(t[o]=r[o],n[o]=!0)}function fa(e,t,r,n,a,o,i,s,l){var c,h;if(Array.isArray(a))for(c=0,h=(a=Array.prototype.slice.call(a)).length;c<h;c+=1)Array.isArray(a[c])&&Se(e,"nested arrays are not supported inside keys"),typeof a=="object"&&Rg(a[c])==="[object Object]"&&(a[c]="[object Object]");if(typeof a=="object"&&Rg(a)==="[object Object]"&&(a="[object Object]"),a=String(a),t===null&&(t={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(c=0,h=o.length;c<h;c+=1)qg(e,t,o[c],r);else qg(e,t,o,r);else e.json||rn.call(r,a)||!rn.call(t,a)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,Se(e,"duplicated mapping key")),a==="__proto__"?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[a]=o,delete r[a];return t}function mp(e){var t;(t=e.input.charCodeAt(e.position))===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Se(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function kt(e,t,r){for(var n=0,a=e.input.charCodeAt(e.position);a!==0;){for(;Tn(a);)a===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&a===35)do a=e.input.charCodeAt(++e.position);while(a!==10&&a!==13&&a!==0);if(!Sr(a))break;for(mp(e),a=e.input.charCodeAt(e.position),n++,e.lineIndent=0;a===32;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return r!==-1&&n!==0&&e.lineIndent<r&&Ui(e,"deficient indentation"),n}function Mi(e){var t,r=e.position;return!((t=e.input.charCodeAt(r))!==45&&t!==46||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,(t=e.input.charCodeAt(r))!==0&&!Ht(t)))}function gp(e,t){t===1?e.result+=" ":t>1&&(e.result+=Ot.repeat(`
`,t-1))}function zg(e,t){var r,n,a=e.tag,o=e.anchor,i=[],s=!1;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),n=e.input.charCodeAt(e.position);n!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Se(e,"tab characters must not be used in indentation")),n===45)&&Ht(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,kt(e,!0,-1)&&e.lineIndent<=t)i.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,ma(e,t,3,!1,!0),i.push(e.result),kt(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&n!==0)Se(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=a,e.anchor=o,e.kind="sequence",e.result=i,!0)}function H2(e){var t,r,n,a,o=!1,i=!1;if((a=e.input.charCodeAt(e.position))!==33)return!1;if(e.tag!==null&&Se(e,"duplication of a tag property"),(a=e.input.charCodeAt(++e.position))===60?(o=!0,a=e.input.charCodeAt(++e.position)):a===33?(i=!0,r="!!",a=e.input.charCodeAt(++e.position)):r="!",t=e.position,o){do a=e.input.charCodeAt(++e.position);while(a!==0&&a!==62);e.position<e.length?(n=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):Se(e,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!Ht(a);)a===33&&(i?Se(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),_g.test(r)||Se(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),q2.test(n)&&Se(e,"tag suffix cannot contain flow indicator characters")}n&&!Pg.test(n)&&Se(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch{Se(e,"tag name is malformed: "+n)}return o?e.tag=n:rn.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:r==="!"?e.tag="!"+n:r==="!!"?e.tag="tag:yaml.org,2002:"+n:Se(e,'undeclared tag handle "'+r+'"'),!0}function W2(e){var t,r;if((r=e.input.charCodeAt(e.position))!==38)return!1;for(e.anchor!==null&&Se(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!Ht(r)&&!da(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&Se(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function ma(e,t,r,n,a){var o,i,s,l,c,h,d,f,m,v=1,w=!1,x=!1;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=i=s=r===4||r===3,n&&kt(e,!0,-1)&&(w=!0,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)),v===1)for(;H2(e)||W2(e);)kt(e,!0,-1)?(w=!0,s=o,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)):s=!1;if(s&&(s=w||a),v!==1&&r!==4||(f=r===1||r===2?t:t+1,m=e.position-e.lineStart,v===1?s&&(zg(e,m)||function(p,k,$){var C,F,O,U,A,T,_,B=p.tag,E=p.anchor,I={},N=Object.create(null),X=null,ve=null,V=null,D=!1,Q=!1;if(p.firstTabInLine!==-1)return!1;for(p.anchor!==null&&(p.anchorMap[p.anchor]=I),_=p.input.charCodeAt(p.position);_!==0;){if(D||p.firstTabInLine===-1||(p.position=p.firstTabInLine,Se(p,"tab characters must not be used in indentation")),C=p.input.charCodeAt(p.position+1),O=p.line,_!==63&&_!==58||!Ht(C)){if(U=p.line,A=p.lineStart,T=p.position,!ma(p,$,2,!1,!0))break;if(p.line===O){for(_=p.input.charCodeAt(p.position);Tn(_);)_=p.input.charCodeAt(++p.position);if(_===58)Ht(_=p.input.charCodeAt(++p.position))||Se(p,"a whitespace character is expected after the key-value separator within a block mapping"),D&&(fa(p,I,N,X,ve,null,U,A,T),X=ve=V=null),Q=!0,D=!1,F=!1,X=p.tag,ve=p.result;else{if(!Q)return p.tag=B,p.anchor=E,!0;Se(p,"can not read an implicit mapping pair; a colon is missed")}}else{if(!Q)return p.tag=B,p.anchor=E,!0;Se(p,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else _===63?(D&&(fa(p,I,N,X,ve,null,U,A,T),X=ve=V=null),Q=!0,D=!0,F=!0):D?(D=!1,F=!0):Se(p,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),p.position+=1,_=C;if((p.line===O||p.lineIndent>k)&&(D&&(U=p.line,A=p.lineStart,T=p.position),ma(p,k,4,!0,F)&&(D?ve=p.result:V=p.result),D||(fa(p,I,N,X,ve,V,U,A,T),X=ve=V=null),kt(p,!0,-1),_=p.input.charCodeAt(p.position)),(p.line===O||p.lineIndent>k)&&_!==0)Se(p,"bad indentation of a mapping entry");else if(p.lineIndent<k)break}return D&&fa(p,I,N,X,ve,null,U,A,T),Q&&(p.tag=B,p.anchor=E,p.kind="mapping",p.result=I),Q}(e,m,f))||function(p,k){var $,C,F,O,U,A,T,_,B,E,I,N,X=!0,ve=p.tag,V=p.anchor,D=Object.create(null);if((N=p.input.charCodeAt(p.position))===91)U=93,_=!1,O=[];else{if(N!==123)return!1;U=125,_=!0,O={}}for(p.anchor!==null&&(p.anchorMap[p.anchor]=O),N=p.input.charCodeAt(++p.position);N!==0;){if(kt(p,!0,k),(N=p.input.charCodeAt(p.position))===U)return p.position++,p.tag=ve,p.anchor=V,p.kind=_?"mapping":"sequence",p.result=O,!0;X?N===44&&Se(p,"expected the node content, but found ','"):Se(p,"missed comma between flow collection entries"),I=null,A=T=!1,N===63&&Ht(p.input.charCodeAt(p.position+1))&&(A=T=!0,p.position++,kt(p,!0,k)),$=p.line,C=p.lineStart,F=p.position,ma(p,k,1,!1,!0),E=p.tag,B=p.result,kt(p,!0,k),N=p.input.charCodeAt(p.position),!T&&p.line!==$||N!==58||(A=!0,N=p.input.charCodeAt(++p.position),kt(p,!0,k),ma(p,k,1,!1,!0),I=p.result),_?fa(p,O,D,E,B,I,$,C,F):A?O.push(fa(p,null,D,E,B,I,$,C,F)):O.push(B),kt(p,!0,k),(N=p.input.charCodeAt(p.position))===44?(X=!0,N=p.input.charCodeAt(++p.position)):X=!1}Se(p,"unexpected end of the stream within a flow collection")}(e,f)?x=!0:(i&&function(p,k){var $,C,F,O,U,A=1,T=!1,_=!1,B=k,E=0,I=!1;if((O=p.input.charCodeAt(p.position))===124)C=!1;else{if(O!==62)return!1;C=!0}for(p.kind="scalar",p.result="";O!==0;)if((O=p.input.charCodeAt(++p.position))===43||O===45)A===1?A=O===43?3:2:Se(p,"repeat of a chomping mode identifier");else{if(!((F=48<=(U=O)&&U<=57?U-48:-1)>=0))break;F===0?Se(p,"bad explicit indentation width of a block scalar; it cannot be less than one"):_?Se(p,"repeat of an indentation width identifier"):(B=k+F-1,_=!0)}if(Tn(O)){do O=p.input.charCodeAt(++p.position);while(Tn(O));if(O===35)do O=p.input.charCodeAt(++p.position);while(!Sr(O)&&O!==0)}for(;O!==0;){for(mp(p),p.lineIndent=0,O=p.input.charCodeAt(p.position);(!_||p.lineIndent<B)&&O===32;)p.lineIndent++,O=p.input.charCodeAt(++p.position);if(!_&&p.lineIndent>B&&(B=p.lineIndent),Sr(O))E++;else{if(p.lineIndent<B){A===3?p.result+=Ot.repeat(`
`,T?1+E:E):A===1&&T&&(p.result+=`
`);break}for(C?Tn(O)?(I=!0,p.result+=Ot.repeat(`
`,T?1+E:E)):I?(I=!1,p.result+=Ot.repeat(`
`,E+1)):E===0?T&&(p.result+=" "):p.result+=Ot.repeat(`
`,E):p.result+=Ot.repeat(`
`,T?1+E:E),T=!0,_=!0,E=0,$=p.position;!Sr(O)&&O!==0;)O=p.input.charCodeAt(++p.position);nn(p,$,p.position,!1)}}return!0}(e,f)||function(p,k){var $,C,F;if(($=p.input.charCodeAt(p.position))!==39)return!1;for(p.kind="scalar",p.result="",p.position++,C=F=p.position;($=p.input.charCodeAt(p.position))!==0;)if($===39){if(nn(p,C,p.position,!0),($=p.input.charCodeAt(++p.position))!==39)return!0;C=p.position,p.position++,F=p.position}else Sr($)?(nn(p,C,F,!0),gp(p,kt(p,!1,k)),C=F=p.position):p.position===p.lineStart&&Mi(p)?Se(p,"unexpected end of the document within a single quoted scalar"):(p.position++,F=p.position);Se(p,"unexpected end of the stream within a single quoted scalar")}(e,f)||function(p,k){var $,C,F,O,U,A,T;if((A=p.input.charCodeAt(p.position))!==34)return!1;for(p.kind="scalar",p.result="",p.position++,$=C=p.position;(A=p.input.charCodeAt(p.position))!==0;){if(A===34)return nn(p,$,p.position,!0),p.position++,!0;if(A===92){if(nn(p,$,p.position,!0),Sr(A=p.input.charCodeAt(++p.position)))kt(p,!1,k);else if(A<256&&Fg[A])p.result+=Dg[A],p.position++;else if((U=(T=A)===120?2:T===117?4:T===85?8:0)>0){for(F=U,O=0;F>0;F--)(U=z2(A=p.input.charCodeAt(++p.position)))>=0?O=(O<<4)+U:Se(p,"expected hexadecimal character");p.result+=U2(O),p.position++}else Se(p,"unknown escape sequence");$=C=p.position}else Sr(A)?(nn(p,$,C,!0),gp(p,kt(p,!1,k)),$=C=p.position):p.position===p.lineStart&&Mi(p)?Se(p,"unexpected end of the document within a double quoted scalar"):(p.position++,C=p.position)}Se(p,"unexpected end of the stream within a double quoted scalar")}(e,f)?x=!0:function(p){var k,$,C;if((C=p.input.charCodeAt(p.position))!==42)return!1;for(C=p.input.charCodeAt(++p.position),k=p.position;C!==0&&!Ht(C)&&!da(C);)C=p.input.charCodeAt(++p.position);return p.position===k&&Se(p,"name of an alias node must contain at least one character"),$=p.input.slice(k,p.position),rn.call(p.anchorMap,$)||Se(p,'unidentified alias "'+$+'"'),p.result=p.anchorMap[$],kt(p,!0,-1),!0}(e)?(x=!0,e.tag===null&&e.anchor===null||Se(e,"alias node should not have any properties")):function(p,k,$){var C,F,O,U,A,T,_,B,E=p.kind,I=p.result;if(Ht(B=p.input.charCodeAt(p.position))||da(B)||B===35||B===38||B===42||B===33||B===124||B===62||B===39||B===34||B===37||B===64||B===96||(B===63||B===45)&&(Ht(C=p.input.charCodeAt(p.position+1))||$&&da(C)))return!1;for(p.kind="scalar",p.result="",F=O=p.position,U=!1;B!==0;){if(B===58){if(Ht(C=p.input.charCodeAt(p.position+1))||$&&da(C))break}else if(B===35){if(Ht(p.input.charCodeAt(p.position-1)))break}else{if(p.position===p.lineStart&&Mi(p)||$&&da(B))break;if(Sr(B)){if(A=p.line,T=p.lineStart,_=p.lineIndent,kt(p,!1,-1),p.lineIndent>=k){U=!0,B=p.input.charCodeAt(p.position);continue}p.position=O,p.line=A,p.lineStart=T,p.lineIndent=_;break}}U&&(nn(p,F,O,!1),gp(p,p.line-A),F=O=p.position,U=!1),Tn(B)||(O=p.position+1),B=p.input.charCodeAt(++p.position)}return nn(p,F,O,!1),!!p.result||(p.kind=E,p.result=I,!1)}(e,f,r===1)&&(x=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):v===0&&(x=s&&zg(e,m))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Se(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((d=e.implicitTypes[l]).resolve(e.result)){e.result=d.construct(e.result),e.tag=d.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(rn.call(e.typeMap[e.kind||"fallback"],e.tag))d=e.typeMap[e.kind||"fallback"][e.tag];else for(d=null,l=0,c=(h=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,h[l].tag.length)===h[l].tag){d=h[l];break}d||Se(e,"unknown tag !<"+e.tag+">"),e.result!==null&&d.kind!==e.kind&&Se(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+d.kind+'", not "'+e.kind+'"'),d.resolve(e.result,e.tag)?(e.result=d.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Se(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||x}function V2(e){var t,r,n,a,o=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(a=e.input.charCodeAt(e.position))!==0&&(kt(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||a!==37));){for(i=!0,a=e.input.charCodeAt(++e.position),t=e.position;a!==0&&!Ht(a);)a=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&Se(e,"directive name must not be less than one character in length");a!==0;){for(;Tn(a);)a=e.input.charCodeAt(++e.position);if(a===35){do a=e.input.charCodeAt(++e.position);while(a!==0&&!Sr(a));break}if(Sr(a))break;for(t=e.position;a!==0&&!Ht(a);)a=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}a!==0&&mp(e),rn.call(Ng,r)?Ng[r](e,r,n):Ui(e,'unknown document directive "'+r+'"')}kt(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,kt(e,!0,-1)):i&&Se(e,"directives end mark is expected"),ma(e,e.lineIndent-1,4,!1,!0),kt(e,!0,-1),e.checkLineBreaks&&N2.test(e.input.slice(o,e.position))&&Ui(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Mi(e)?e.input.charCodeAt(e.position)===46&&(e.position+=3,kt(e,!0,-1)):e.position<e.length-1&&Se(e,"end of the stream or a document separator is expected")}function Ug(e,t){t=t||{},(e=String(e)).length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new M2(e,t),n=e.indexOf("\0");for(n!==-1&&(r.position=n,Se(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)V2(r);return r.documents}var Mg={loadAll:function(e,t,r){t!==null&&typeof t=="object"&&r===void 0&&(r=t,t=null);var n=Ug(e,r);if(typeof t!="function")return n;for(var a=0,o=n.length;a<o;a+=1)t(n[a])},load:function(e,t){var r=Ug(e,t);if(r.length!==0){if(r.length===1)return r[0];throw new Nt("expected a single document in the stream, but found more")}}},Hg=Object.prototype.toString,Wg=Object.prototype.hasOwnProperty,G2={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},K2=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],J2=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Y2(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new Nt("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+Ot.repeat("0",n-t.length)+t}function Z2(e){this.schema=e.schema||fp,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Ot.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(t,r){var n,a,o,i,s,l,c;if(r===null)return{};for(n={},o=0,i=(a=Object.keys(r)).length;o<i;o+=1)s=a[o],l=String(r[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),(c=t.compiledTypeMap.fallback[s])&&Wg.call(c.styleAliases,l)&&(l=c.styleAliases[l]),n[s]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Vg(e,t){for(var r,n=Ot.repeat(" ",t),a=0,o=-1,i="",s=e.length;a<s;)(o=e.indexOf(`
`,a))===-1?(r=e.slice(a),a=s):(r=e.slice(a,o+1),a=o+1),r.length&&r!==`
`&&(i+=n),i+=r;return i}function yp(e,t){return`
`+Ot.repeat(" ",e.indent*t)}function Hi(e){return e===32||e===9}function bo(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function Gg(e){return bo(e)&&e!==65279&&e!==13&&e!==10}function Kg(e,t,r){var n=Gg(e),a=n&&!Hi(e);return(r?n:n&&e!==44&&e!==91&&e!==93&&e!==123&&e!==125)&&e!==35&&!(t===58&&!a)||Gg(t)&&!Hi(t)&&e===35||t===58&&a}function xo(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Jg(e){return/^\n* /.test(e)}function Q2(e,t,r,n,a){e.dump=function(){if(t.length===0)return e.quotingType===2?'""':"''";if(!e.noCompatMode&&(K2.indexOf(t)!==-1||J2.test(t)))return e.quotingType===2?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,r),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(function(l,c,h,d,f,m,v,w){var x,p,k,$=0,C=null,F=!1,O=!1,U=d!==-1,A=-1,T=bo(p=xo(l,0))&&p!==65279&&!Hi(p)&&p!==45&&p!==63&&p!==58&&p!==44&&p!==91&&p!==93&&p!==123&&p!==125&&p!==35&&p!==38&&p!==42&&p!==33&&p!==124&&p!==61&&p!==62&&p!==39&&p!==34&&p!==37&&p!==64&&p!==96&&!Hi(k=xo(l,l.length-1))&&k!==58;if(c||v)for(x=0;x<l.length;$>=65536?x+=2:x++){if(!bo($=xo(l,x)))return 5;T=T&&Kg($,C,w),C=$}else{for(x=0;x<l.length;$>=65536?x+=2:x++){if(($=xo(l,x))===10)F=!0,U&&(O=O||x-A-1>d&&l[A+1]!==" ",A=x);else if(!bo($))return 5;T=T&&Kg($,C,w),C=$}O=O||U&&x-A-1>d&&l[A+1]!==" "}return F||O?h>9&&Jg(l)?5:v?m===2?5:2:O?4:3:!T||v||f(l)?m===2?5:2:1}(t,s,e.indent,i,function(l){return function(c,h){var d,f;for(d=0,f=c.implicitTypes.length;d<f;d+=1)if(c.implicitTypes[d].resolve(h))return!0;return!1}(e,l)},e.quotingType,e.forceQuotes&&!n,a)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Yg(t,e.indent)+Zg(Vg(t,o));case 4:return">"+Yg(t,e.indent)+Zg(Vg(function(l,c){for(var h,d,f,m=/(\n+)([^\n]*)/g,v=(f=(f=l.indexOf(`
`))!==-1?f:l.length,m.lastIndex=f,Qg(l.slice(0,f),c)),w=l[0]===`
`||l[0]===" ";d=m.exec(l);){var x=d[1],p=d[2];h=p[0]===" ",v+=x+(w||h||p===""?"":`
`)+Qg(p,c),w=h}return v}(t,i),o));case 5:return'"'+function(l){for(var c,h="",d=0,f=0;f<l.length;d>=65536?f+=2:f++)d=xo(l,f),!(c=G2[d])&&bo(d)?(h+=l[f],d>=65536&&(h+=l[f+1])):h+=c||Y2(d);return h}(t)+'"';default:throw new Nt("impossible error: invalid scalar style")}}()}function Yg(e,t){var r=Jg(e)?String(t):"",n=e[e.length-1]===`
`;return r+(!n||e[e.length-2]!==`
`&&e!==`
`?n?"":"-":"+")+`
`}function Zg(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Qg(e,t){if(e===""||e[0]===" ")return e;for(var r,n,a=/ [^ ]/g,o=0,i=0,s=0,l="";r=a.exec(e);)(s=r.index)-o>t&&(n=i>o?i:s,l+=`
`+e.slice(o,n),o=n+1),i=s;return l+=`
`,e.length-o>t&&i>o?l+=e.slice(o,i)+`
`+e.slice(i+1):l+=e.slice(o),l.slice(1)}function Xg(e,t,r,n){var a,o,i,s="",l=e.tag;for(a=0,o=r.length;a<o;a+=1)i=r[a],e.replacer&&(i=e.replacer.call(r,String(a),i)),(Rr(e,t+1,i,!0,!0,!1,!0)||i===void 0&&Rr(e,t+1,null,!0,!0,!1,!0))&&(n&&s===""||(s+=yp(e,t)),e.dump&&e.dump.charCodeAt(0)===10?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function ey(e,t,r){var n,a,o,i,s,l;for(o=0,i=(a=r?e.explicitTypes:e.implicitTypes).length;o<i;o+=1)if(((s=a[o]).instanceOf||s.predicate)&&(!s.instanceOf||typeof t=="object"&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,Hg.call(s.represent)==="[object Function]")n=s.represent(t,l);else{if(!Wg.call(s.represent,l))throw new Nt("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function Rr(e,t,r,n,a,o,i){e.tag=null,e.dump=r,ey(e,r,!1)||ey(e,r,!0);var s,l=Hg.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var h,d,f=l==="[object Object]"||l==="[object Array]";if(f&&(d=(h=e.duplicates.indexOf(r))!==-1),(e.tag!==null&&e.tag!=="?"||d||e.indent!==2&&t>0)&&(a=!1),d&&e.usedDuplicates[h])e.dump="*ref_"+h;else{if(f&&d&&!e.usedDuplicates[h]&&(e.usedDuplicates[h]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(function(m,v,w,x){var p,k,$,C,F,O,U="",A=m.tag,T=Object.keys(w);if(m.sortKeys===!0)T.sort();else if(typeof m.sortKeys=="function")T.sort(m.sortKeys);else if(m.sortKeys)throw new Nt("sortKeys must be a boolean or a function");for(p=0,k=T.length;p<k;p+=1)O="",x&&U===""||(O+=yp(m,v)),C=w[$=T[p]],m.replacer&&(C=m.replacer.call(w,$,C)),Rr(m,v+1,$,!0,!0,!0)&&((F=m.tag!==null&&m.tag!=="?"||m.dump&&m.dump.length>1024)&&(m.dump&&m.dump.charCodeAt(0)===10?O+="?":O+="? "),O+=m.dump,F&&(O+=yp(m,v)),Rr(m,v+1,C,!0,F)&&(m.dump&&m.dump.charCodeAt(0)===10?O+=":":O+=": ",U+=O+=m.dump));m.tag=A,m.dump=U||"{}"}(e,t,e.dump,a),d&&(e.dump="&ref_"+h+e.dump)):(function(m,v,w){var x,p,k,$,C,F="",O=m.tag,U=Object.keys(w);for(x=0,p=U.length;x<p;x+=1)C="",F!==""&&(C+=", "),m.condenseFlow&&(C+='"'),$=w[k=U[x]],m.replacer&&($=m.replacer.call(w,k,$)),Rr(m,v,k,!1,!1)&&(m.dump.length>1024&&(C+="? "),C+=m.dump+(m.condenseFlow?'"':"")+":"+(m.condenseFlow?"":" "),Rr(m,v,$,!1,!1)&&(F+=C+=m.dump));m.tag=O,m.dump="{"+F+"}"}(e,t,e.dump),d&&(e.dump="&ref_"+h+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!i&&t>0?Xg(e,t-1,e.dump,a):Xg(e,t,e.dump,a),d&&(e.dump="&ref_"+h+e.dump)):(function(m,v,w){var x,p,k,$="",C=m.tag;for(x=0,p=w.length;x<p;x+=1)k=w[x],m.replacer&&(k=m.replacer.call(w,String(x),k)),(Rr(m,v,k,!1,!1)||k===void 0&&Rr(m,v,null,!1,!1))&&($!==""&&($+=","+(m.condenseFlow?"":" ")),$+=m.dump);m.tag=C,m.dump="["+$+"]"}(e,t,e.dump),d&&(e.dump="&ref_"+h+" "+e.dump));else{if(l!=="[object String]"){if(l==="[object Undefined]"||e.skipInvalid)return!1;throw new Nt("unacceptable kind of an object to dump "+l)}e.tag!=="?"&&Q2(e,e.dump,t,o,c)}e.tag!==null&&e.tag!=="?"&&(s=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s=e.tag[0]==="!"?"!"+s:s.slice(0,18)==="tag:yaml.org,2002:"?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function X2(e,t){var r,n,a=[],o=[];for(vp(e,a,o),r=0,n=o.length;r<n;r+=1)t.duplicates.push(a[o[r]]);t.usedDuplicates=new Array(n)}function vp(e,t,r){var n,a,o;if(e!==null&&typeof e=="object")if((a=t.indexOf(e))!==-1)r.indexOf(a)===-1&&r.push(a);else if(t.push(e),Array.isArray(e))for(a=0,o=e.length;a<o;a+=1)vp(e[a],t,r);else for(a=0,o=(n=Object.keys(e)).length;a<o;a+=1)vp(e[n[a]],t,r)}function bp(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var ty={Type:Pt,Schema:hg,FAILSAFE_SCHEMA:yg,JSON_SCHEMA:$g,CORE_SCHEMA:kg,DEFAULT_SCHEMA:fp,load:Mg.load,loadAll:Mg.loadAll,dump:function(e,t){var r=new Z2(t=t||{});r.noRefs||X2(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),Rr(r,0,n,!0,!0)?r.dump+`
`:""},YAMLException:Nt,types:{binary:Tg,float:wg,map:gg,null:vg,pairs:jg,set:Ig,timestamp:Eg,bool:bg,int:xg,merge:Og,omap:Cg,seq:mg,str:fg},safeLoad:bp("safeLoad","load"),safeLoadAll:bp("safeLoadAll","loadAll"),safeDump:bp("safeDump","dump")};const eT=typeof globalThis<"u"?globalThis:typeof self<"u"?self:window,{FormData:ry,Blob:Wi,File:ny}=eT;function Cn(e){return function(t){if(rc(t))return ic(t)}(e)||function(t){if(wn!==void 0&&tc(t)!=null||t["@@iterator"]!=null)return Of(t)}(e)||sc(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}const ur=Me(gf);var tT=function(e){return":/?#[]@!$&'()*+,;=".indexOf(e)>-1},rT=function(e){return/^[a-z0-9\-._~]+$/i.test(e)};function ga(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.escape,a=arguments.length>2?arguments[2]:void 0;return typeof e=="number"&&(e=e.toString()),typeof e=="string"&&e.length&&n?a?JSON.parse(e):Ze(t=Cn(e)).call(t,function(o){var i,s;if(rT(o)||tT(o)&&n==="unsafe")return o;var l=new TextEncoder;return Ze(i=Ze(s=Om(l.encode(o))).call(s,function(c){var h;return ur(h="0".concat(c.toString(16).toUpperCase())).call(h,-2)})).call(i,function(c){return"%".concat(c)}).join("")}).join(""):e}function xp(e){var t=e.value;return Array.isArray(t)?function(r){var n=r.key,a=r.value,o=r.style,i=r.explode,s=r.escape,l=function(f){return ga(f,{escape:s})};if(o==="simple")return Ze(a).call(a,function(f){return l(f)}).join(",");if(o==="label")return".".concat(Ze(a).call(a,function(f){return l(f)}).join("."));if(o==="matrix")return Ze(a).call(a,function(f){return l(f)}).reduce(function(f,m){var v,w,x;return!f||i?$e(w=$e(x="".concat(f||"",";")).call(x,n,"=")).call(w,m):$e(v="".concat(f,",")).call(v,m)},"");if(o==="form"){var c=i?"&".concat(n,"="):",";return Ze(a).call(a,function(f){return l(f)}).join(c)}if(o==="spaceDelimited"){var h=i?"".concat(n,"="):"";return Ze(a).call(a,function(f){return l(f)}).join(" ".concat(h))}if(o==="pipeDelimited"){var d=i?"".concat(n,"="):"";return Ze(a).call(a,function(f){return l(f)}).join("|".concat(d))}}(e):lt(t)==="object"?function(r){var n=r.key,a=r.value,o=r.style,i=r.explode,s=r.escape,l=function(h){return ga(h,{escape:s})},c=Ve(a);return o==="simple"?c.reduce(function(h,d){var f,m,v,w=l(a[d]),x=i?"=":",",p=h?"".concat(h,","):"";return $e(f=$e(m=$e(v="".concat(p)).call(v,d)).call(m,x)).call(f,w)},""):o==="label"?c.reduce(function(h,d){var f,m,v,w=l(a[d]),x=i?"=":".",p=h?"".concat(h,"."):".";return $e(f=$e(m=$e(v="".concat(p)).call(v,d)).call(m,x)).call(f,w)},""):o==="matrix"&&i?c.reduce(function(h,d){var f,m,v=l(a[d]),w=h?"".concat(h,";"):";";return $e(f=$e(m="".concat(w)).call(m,d,"=")).call(f,v)},""):o==="matrix"?c.reduce(function(h,d){var f,m,v=l(a[d]),w=h?"".concat(h,","):";".concat(n,"=");return $e(f=$e(m="".concat(w)).call(m,d,",")).call(f,v)},""):o==="form"?c.reduce(function(h,d){var f,m,v,w,x=l(a[d]),p=h?$e(f="".concat(h)).call(f,i?"&":","):"",k=i?"=":",";return $e(m=$e(v=$e(w="".concat(p)).call(w,d)).call(v,k)).call(m,x)},""):void 0}(e):function(r){var n,a=r.key,o=r.value,i=r.style,s=r.escape,l=function(c){return ga(c,{escape:s})};return i==="simple"?l(o):i==="label"?".".concat(l(o)):i==="matrix"?$e(n=";".concat(a,"=")).call(n,l(o)):i==="form"||i==="deepObject"?l(o):void 0}(e)}var nT=function(e,t){t.body=e},wp={serializeRes:ay,mergeInQueryOrForm:py};function Vi(e){return $p.apply(this,arguments)}function $p(){return $p=Pc(wr.mark(function e(t){var r,n,a,o,i,s=arguments;return wr.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(r=s.length>1&&s[1]!==void 0?s[1]:{},lt(t)==="object"&&(t=(r=t).url),r.headers=r.headers||{},wp.mergeInQueryOrForm(r),r.headers&&Ve(r.headers).forEach(function(c){var h=r.headers[c];typeof h=="string"&&(r.headers[c]=h.replace(/\n+/g," "))}),!r.requestInterceptor){l.next=12;break}return l.next=8,r.requestInterceptor(r);case 8:if(l.t0=l.sent,l.t0){l.next=11;break}l.t0=r;case 11:r=l.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof ry&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),l.prev=14,l.next=17,(r.userFetch||fetch)(r.url,r);case 17:return a=l.sent,l.next=20,wp.serializeRes(a,t,r);case 20:if(a=l.sent,!r.responseInterceptor){l.next=28;break}return l.next=24,r.responseInterceptor(a);case 24:if(l.t1=l.sent,l.t1){l.next=27;break}l.t1=a;case 27:a=l.t1;case 28:l.next=39;break;case 30:if(l.prev=30,l.t2=l.catch(14),a){l.next=34;break}throw l.t2;case 34:throw(o=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,o.statusCode=a.status,o.responseError=l.t2,o;case 39:if(a.ok){l.next=45;break}throw(i=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,i.statusCode=a.status,i.response=a,i;case 45:return l.abrupt("return",a);case 46:case"end":return l.stop()}},e,null,[[14,30]])})),$p.apply(this,arguments)}var aT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/(json|xml|yaml|text)\b/.test(e)};function oT(e,t){return t&&(t.indexOf("application/json")===0||t.indexOf("+json")>0)?JSON.parse(e):ty.load(e)}function ay(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.loadSpec,a=n!==void 0&&n,o={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:oy(e.headers)},i=o.headers["content-type"],s=a||aT(i),l=s?e.text:e.blob||e.buffer;return l.call(e).then(function(c){if(o.text=c,o.data=c,s)try{var h=oT(c,i);o.body=h,o.obj=h}catch(d){o.parseError=d}return o})}function iT(e){return co(e).call(e,", ")?e.split(", "):e}function oy(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return typeof Em(e)!="function"?{}:Om(Em(e).call(e)).reduce(function(t,r){var n=pr(r,2),a=n[0],o=n[1];return t[a]=iT(o),t},{})}function kp(e,t){return t||typeof navigator>"u"||(t=navigator),t&&t.product==="ReactNative"?!(!e||lt(e)!=="object"||typeof e.uri!="string"):ny!==void 0&&e instanceof ny||Wi!==void 0&&e instanceof Wi||!!ArrayBuffer.isView(e)||e!==null&&lt(e)==="object"&&typeof e.pipe=="function"}function iy(e,t){return Array.isArray(e)&&e.some(function(r){return kp(r,t)})}var sT={form:",",spaceDelimited:"%20",pipeDelimited:"|"},lT={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function sy(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=t.collectionFormat,a=t.allowEmptyValue,o=t.serializationOption,i=t.encoding,s=lt(t)!=="object"||Array.isArray(t)?t:t.value,l=r?function(v){return v.toString()}:function(v){return encodeURIComponent(v)},c=l(e);if(s===void 0&&a)return[[c,""]];if(kp(s)||iy(s))return[[c,s]];if(o)return ly(e,s,r,o);if(i){if([lt(i.style),lt(i.explode),lt(i.allowReserved)].some(function(v){return v!=="undefined"})){var h=i.style,d=i.explode,f=i.allowReserved;return ly(e,s,r,{style:h,explode:d,allowReserved:f})}if(i.contentType){if(i.contentType==="application/json"){var m=typeof s=="string"?s:Pi(s);return[[c,l(m)]]}return[[c,l(s.toString())]]}return lt(s)!=="object"?[[c,l(s)]]:Array.isArray(s)&&s.every(function(v){return lt(v)!=="object"})?[[c,Ze(s).call(s,l).join(",")]]:[[c,l(Pi(s))]]}return lt(s)!=="object"?[[c,l(s)]]:Array.isArray(s)?n==="multi"?[[c,Ze(s).call(s,l)]]:[[c,Ze(s).call(s,l).join(lT[n||"csv"])]]:[[c,""]]}function ly(e,t,r,n){var a,o,i,s=n.style||"form",l=n.explode===void 0?s==="form":n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),h=function(f){return ga(f,{escape:c})},d=r?function(f){return f}:function(f){return ga(f,{escape:c})};return lt(t)!=="object"?[[d(e),h(t)]]:Array.isArray(t)?l?[[d(e),Ze(t).call(t,h)]]:[[d(e),Ze(t).call(t,h).join(sT[s])]]:s==="deepObject"?Ze(o=Ve(t)).call(o,function(f){var m;return[d($e(m="".concat(e,"[")).call(m,f,"]")),h(t[f])]}):l?Ze(i=Ve(t)).call(i,function(f){return[d(f),h(t[f])]}):[[d(e),Ze(a=Ve(t)).call(a,function(f){var m;return[$e(m="".concat(d(f),",")).call(m,h(t[f]))]}).join(",")]]}function cT(e){return Pm(e).reduce(function(t,r){var n,a=pr(r,2),o=$n(sy(a[0],a[1],!0));try{for(o.s();!(n=o.n()).done;){var i=pr(n.value,2),s=i[0],l=i[1];if(Array.isArray(l)){var c,h=$n(l);try{for(h.s();!(c=h.n()).done;){var d=c.value;if(ArrayBuffer.isView(d)){var f=new Wi([d]);t.append(s,f)}else t.append(s,d)}}catch(v){h.e(v)}finally{h.f()}}else if(ArrayBuffer.isView(l)){var m=new Wi([l]);t.append(s,m)}else t.append(s,l)}}catch(v){o.e(v)}finally{o.f()}return t},new ry)}function cy(e){var t=Ve(e).reduce(function(r,n){var a,o=$n(sy(n,e[n]));try{for(o.s();!(a=o.n()).done;){var i=pr(a.value,2),s=i[0],l=i[1];r[s]=l}}catch(c){o.e(c)}finally{o.f()}return r},{});return cg(t,{encode:!1,indices:!1})||""}function py(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.url,r=t===void 0?"":t,n=e.query,a=e.form,o=function(){for(var p=arguments.length,k=new Array(p),$=0;$<p;$++)k[$]=arguments[$];var C=nr(k).call(k,function(F){return F}).join("&");return C?"?".concat(C):""};if(a){var i=Ve(a).some(function(p){var k=a[p].value;return kp(k)||iy(k)}),s=e.headers["content-type"]||e.headers["Content-Type"];if(i||/multipart\/form-data/i.test(s)){var l=cT(e.form);nT(l,e)}else e.body=cy(a);delete e.form}if(n){var c=r.split("?"),h=pr(c,2),d=h[0],f=h[1],m="";if(f){var v=O2(f),w=Ve(n);w.forEach(function(p){return delete v[p]}),m=cg(v,{encode:!0})}var x=o(m,cy(n));e.url=d+x,delete e.query}return e}function uy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dy(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),mi(e,n.key,n)}}function hy(e,t,r){return t&&dy(e.prototype,t),r&&dy(e,r),mi(e,"prototype",{writable:!1}),e}var pT=We,uT=Kr.find,fy=!0;"find"in[]&&Array(1).find(function(){fy=!1}),pT({target:"Array",proto:!0,forced:fy},{find:function(e){return uT(this,e,arguments.length>1?arguments[1]:void 0)}});var dT=er("Array").find,hT=Ft,fT=dT,Sp=Array.prototype;const mT=Me(function(e){var t=e.find;return e===Sp||hT(Sp,e)&&t===Sp.find?fT:t}),jn=Me(xm);var gT=We,yT=Ae,vT=Xo,bT=Qo,xT=Wr,wT=Ir,$T=xl,kT=Vn,ST=Xa("splice"),AT=yT.TypeError,ET=Math.max,OT=Math.min;gT({target:"Array",proto:!0,forced:!ST},{splice:function(e,t){var r,n,a,o,i,s,l=wT(this),c=xT(l),h=vT(e,c),d=arguments.length;if(d===0?r=n=0:d===1?(r=0,n=c-h):(r=d-2,n=OT(ET(bT(t),0),c-h)),c+r-n>9007199254740991)throw AT("Maximum allowed length exceeded");for(a=$T(l,n),o=0;o<n;o++)(i=h+o)in l&&kT(a,o,l[i]);if(a.length=n,r<n){for(o=h;o<c-n;o++)s=o+r,(i=o+n)in l?l[s]=l[i]:delete l[s];for(o=c;o>c-n+r;o--)delete l[o-1]}else if(r>n)for(o=c-n;o>h;o--)s=o+r-1,(i=o+n-1)in l?l[s]=l[i]:delete l[s];for(o=0;o<r;o++)l[o+h]=arguments[o+2];return l.length=c-n+r,a}});var TT=er("Array").splice,CT=Ft,jT=TT,Ap=Array.prototype;const IT=Me(function(e){var t=e.splice;return e===Ap||CT(Ap,e)&&t===Ap.splice?jT:t});var Gi,_T=globalThis&&globalThis.__extends||(Gi=function(e,t){return Gi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a])},Gi(e,t)},function(e,t){function r(){this.constructor=e}Gi(e,t),e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}),PT=Object.prototype.hasOwnProperty;function Ep(e,t){return PT.call(e,t)}function Op(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);for(var n in t=[],e)Ep(e,n)&&t.push(n);return t}function Jt(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function Tp(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function In(e){return e.indexOf("/")===-1&&e.indexOf("~")===-1?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function my(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function Cp(e){if(e===void 0)return!0;if(e){if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(Cp(e[t]))return!0}else if(typeof e=="object"){var n=Op(e),a=n.length;for(t=0;t<a;t++)if(Cp(e[n[t]]))return!0}}return!1}function gy(e,t){var r=[e];for(var n in t){var a=typeof t[n]=="object"?JSON.stringify(t[n],null,2):t[n];a!==void 0&&r.push(n+": "+a)}return r.join(`
`)}var yy=function(e){function t(r,n,a,o,i){var s=this.constructor,l=e.call(this,gy(r,{name:n,index:a,operation:o,tree:i}))||this;return l.name=n,l.index=a,l.operation=o,l.tree=i,Object.setPrototypeOf(l,s.prototype),l.message=gy(r,{name:n,index:a,operation:o,tree:i}),l}return _T(t,e),t}(Error),ft=yy,RT=Jt,ya={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=wo(r,this.path);n&&(n=Jt(n));var a=_n(r,{op:"remove",path:this.from}).removed;return _n(r,{op:"add",path:this.path,value:a}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=wo(r,this.from);return _n(r,{op:"add",path:this.path,value:Jt(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:$o(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},LT={add:function(e,t,r){return Tp(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:ya.move,copy:ya.copy,test:ya.test,_get:ya._get};function wo(e,t){if(t=="")return e;var r={op:"_get",path:t};return _n(e,r),r.value}function _n(e,t,r,n,a,o){if(r===void 0&&(r=!1),n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=0),r&&(typeof r=="function"?r(t,0,e,t.path):Ki(t,0)),t.path===""){var i={newDocument:e};if(t.op==="add")return i.newDocument=t.value,i;if(t.op==="replace")return i.newDocument=t.value,i.removed=e,i;if(t.op==="move"||t.op==="copy")return i.newDocument=wo(e,t.from),t.op==="move"&&(i.removed=e),i;if(t.op==="test"){if(i.test=$o(e,t.value),i.test===!1)throw new ft("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i.newDocument=e,i}if(t.op==="remove")return i.removed=e,i.newDocument=null,i;if(t.op==="_get")return t.value=e,i;if(r)throw new ft("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",o,t,e);return i}n||(e=Jt(e));var s=(t.path||"").split("/"),l=e,c=1,h=s.length,d=void 0,f=void 0,m=void 0;for(m=typeof r=="function"?r:Ki;;){if((f=s[c])&&f.indexOf("~")!=-1&&(f=my(f)),a&&f=="__proto__")throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&d===void 0&&(l[f]===void 0?d=s.slice(0,c).join("/"):c==h-1&&(d=t.path),d!==void 0&&m(t,0,e,d)),c++,Array.isArray(l)){if(f==="-")f=l.length;else{if(r&&!Tp(f))throw new ft("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",o,t,e);Tp(f)&&(f=~~f)}if(c>=h){if(r&&t.op==="add"&&f>l.length)throw new ft("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",o,t,e);if((i=LT[t.op].call(t,l,f,e)).test===!1)throw new ft("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}}else if(c>=h){if((i=ya[t.op].call(t,l,f,e)).test===!1)throw new ft("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}if(l=l[f],r&&c<h&&(!l||typeof l!="object"))throw new ft("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",o,t,e)}}function an(e,t,r,n,a){if(n===void 0&&(n=!0),a===void 0&&(a=!0),r&&!Array.isArray(t))throw new ft("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=Jt(e));for(var o=new Array(t.length),i=0,s=t.length;i<s;i++)o[i]=_n(e,t[i],r,!0,a,i),e=o[i].newDocument;return o.newDocument=e,o}function Ki(e,t,r,n){if(typeof e!="object"||e===null||Array.isArray(e))throw new ft("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!ya[e.op])throw new ft("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if(typeof e.path!="string")throw new ft("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(e.path.indexOf("/")!==0&&e.path.length>0)throw new ft('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if((e.op==="move"||e.op==="copy")&&typeof e.from!="string")throw new ft("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&e.value===void 0)throw new ft("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&Cp(e.value))throw new ft("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r){if(e.op=="add"){var a=e.path.split("/").length,o=n.split("/").length;if(a!==o+1&&a!==o)throw new ft("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if(e.op==="replace"||e.op==="remove"||e.op==="_get"){if(e.path!==n)throw new ft("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if(e.op==="move"||e.op==="copy"){var i=vy([{op:"_get",path:e.from,value:void 0}],r);if(i&&i.name==="OPERATION_PATH_UNRESOLVABLE")throw new ft("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}}function vy(e,t,r){try{if(!Array.isArray(e))throw new ft("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)an(Jt(t),Jt(e),r||!0);else{r=r||Ki;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(a){if(a instanceof ft)return a;throw a}}function $o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r,n,a,o=Array.isArray(e),i=Array.isArray(t);if(o&&i){if((n=e.length)!=t.length)return!1;for(r=n;r--!=0;)if(!$o(e[r],t[r]))return!1;return!0}if(o!=i)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;r--!=0;)if(!$o(e[a=s[r]],t[a]))return!1;return!0}return e!=e&&t!=t}const FT=Object.freeze(Object.defineProperty({__proto__:null,JsonPatchError:ft,deepClone:RT,getValueByPointer:wo,applyOperation:_n,applyPatch:an,applyReducer:function(e,t,r){var n=_n(e,t);if(n.test===!1)throw new ft("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:Ki,validate:vy,_areEquals:$o},Symbol.toStringTag,{value:"Module"}));var jp=new WeakMap,DT=function(e){this.observers=new Map,this.obj=e},BT=function(e,t){this.callback=e,this.observer=t};function Ip(e,t){t===void 0&&(t=!1);var r=jp.get(e.object);_p(r.value,e.object,e.patches,"",t),e.patches.length&&an(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function _p(e,t,r,n,a){if(t!==e){typeof t.toJSON=="function"&&(t=t.toJSON());for(var o=Op(t),i=Op(e),s=!1,l=i.length-1;l>=0;l--){var c=e[d=i[l]];if(!Ep(t,d)||t[d]===void 0&&c!==void 0&&Array.isArray(t)===!1)Array.isArray(e)===Array.isArray(t)?(a&&r.push({op:"test",path:n+"/"+In(d),value:Jt(c)}),r.push({op:"remove",path:n+"/"+In(d)}),s=!0):(a&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var h=t[d];typeof c=="object"&&c!=null&&typeof h=="object"&&h!=null&&Array.isArray(c)===Array.isArray(h)?_p(c,h,r,n+"/"+In(d),a):c!==h&&(a&&r.push({op:"test",path:n+"/"+In(d),value:Jt(c)}),r.push({op:"replace",path:n+"/"+In(d),value:Jt(h)}))}}if(s||o.length!=i.length)for(l=0;l<o.length;l++){var d;Ep(e,d=o[l])||t[d]===void 0||r.push({op:"add",path:n+"/"+In(d),value:Jt(t[d])})}}}const NT=Object.freeze(Object.defineProperty({__proto__:null,unobserve:function(e,t){t.unobserve()},observe:function(e,t){var r,n,a=(n=e,jp.get(n));if(a){var o=function(l,c){return l.observers.get(c)}(a,t);r=o&&o.observer}else a=new DT(e),jp.set(e,a);if(r)return r;if(r={},a.value=Jt(e),t){r.callback=t,r.next=null;var i=function(){Ip(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(i)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=[],r.object=e,r.unobserve=function(){Ip(r),clearTimeout(r.next),function(l,c){l.observers.delete(c.callback)}(a,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},a.observers.set(t,new BT(t,r)),r},generate:Ip,compare:function(e,t,r){r===void 0&&(r=!1);var n=[];return _p(e,t,n,"",r),n}},Symbol.toStringTag,{value:"Module"}));Object.assign({},FT,NT,{JsonPatchError:yy,deepClone:Jt,escapePathComponent:In,unescapePathComponent:my});var qT=function(e){return t=e,!(!t||typeof t!="object"||function(r){var n=Object.prototype.toString.call(r);return n==="[object RegExp]"||n==="[object Date]"||r.$$typeof===zT}(e));var t},zT=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function ko(e,t){return t.clone!==!1&&t.isMergeableObject(e)?va((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function UT(e,t,r){return e.concat(t).map(function(n){return ko(n,r)})}function by(e){return Object.keys(e).concat((t=e,Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(r){return t.propertyIsEnumerable(r)}):[]));var t}function xy(e,t){try{return t in e}catch{return!1}}function va(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||UT,r.isMergeableObject=r.isMergeableObject||qT,r.cloneUnlessOtherwiseSpecified=ko;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(a,o,i){var s={};return i.isMergeableObject(a)&&by(a).forEach(function(l){s[l]=ko(a[l],i)}),by(o).forEach(function(l){var c,h;xy(c=a,h=l)&&(!Object.hasOwnProperty.call(c,h)||!Object.propertyIsEnumerable.call(c,h))||(xy(a,l)&&i.isMergeableObject(o[l])?s[l]=function(d,f){if(!f.customMerge)return va;var m=f.customMerge(d);return typeof m=="function"?m:va}(l,i)(a[l],o[l],i):s[l]=ko(o[l],i))}),s}(e,t,r):ko(t,r)}va.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,n){return va(r,n,t)},{})};var MT=va;const Xe={add:function(e,t){return{op:"add",path:e,value:t}},replace:Ji,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(function(r,n){return n!==void 0&&r?r[n]:r},e)},applyPatch:function(e,t,r){if(r=r||{},(t=ut(ut({},t),{},{path:t.path&&wy(t.path)})).op==="merge"){var n=Lp(e,t.path);tr(n,t.value),an(e,[Ji(t.path,n)])}else if(t.op==="mergeDeep"){var a=Lp(e,t.path),o=MT(a,t.value);e=an(e,[Ji(t.path,o)]).newDocument}else if(t.op==="add"&&t.path===""&&Pn(t.value))an(e,Ve(t.value).reduce(function(l,c){return l.push({op:"add",path:"/".concat(wy(c)),value:t.value[c]}),l},[]));else if(t.op==="replace"&&t.path===""){var i=t.value;r.allowMetaPatches&&t.meta&&Yi(t)&&(Array.isArray(t.value)||Pn(t.value))&&(i=ut(ut({},i),t.meta)),e=i}else if(an(e,[t]),r.allowMetaPatches&&t.meta&&Yi(t)&&(Array.isArray(t.value)||Pn(t.value))){var s=ut(ut({},Lp(e,t.path)),t.meta);an(e,[Ji(t.path,s)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:So,fullyNormalizeArray:function(e){return Sy(So(ky(e)))},normalizeArray:ky,isPromise:function(e){return Pn(e)&&Ay(e.then)},forEachNew:function(e,t){try{return $y(e,Rp,t)}catch(r){return r}},forEachNewPrimitive:function(e,t){try{return $y(e,Pp,t)}catch(r){return r}},isJsonPatch:Ey,isContextPatch:function(e){return Zi(e)&&e.type==="context"},isPatch:Zi,isMutation:Oy,isAdditiveMutation:Yi,isGenerator:function(e){return Object.prototype.toString.call(e)==="[object GeneratorFunction]"},isFunction:Ay,isObject:Pn,isError:function(e){return e instanceof Error}};function wy(e){return Array.isArray(e)?e.length<1?"":"/".concat(Ze(e).call(e,function(t){return(t+"").replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")):e}function Ji(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function $y(e,t,r){var n;return Sy(So(Ze(n=nr(e).call(e,Yi)).call(n,function(a){return t(a.value,r,a.path)})||[]))}function Pp(e,t,r){return r=r||[],Array.isArray(e)?Ze(e).call(e,function(a,o){return Pp(a,t,$e(r).call(r,o))}):Pn(e)?Ze(n=Ve(e)).call(n,function(a){return Pp(e[a],t,$e(r).call(r,a))}):t(e,r[r.length-1],r);var n}function Rp(e,t,r){var n=[];if((r=r||[]).length>0){var a=t(e,r[r.length-1],r);a&&(n=$e(n).call(n,a))}if(Array.isArray(e)){var o=Ze(e).call(e,function(l,c){return Rp(l,t,$e(r).call(r,c))});o&&(n=$e(n).call(n,o))}else if(Pn(e)){var i,s=Ze(i=Ve(e)).call(i,function(l){return Rp(e[l],t,$e(r).call(r,l))});s&&(n=$e(n).call(n,s))}return So(n)}function ky(e){return Array.isArray(e)?e:[e]}function So(e){var t;return $e(t=[]).apply(t,Cn(Ze(e).call(e,function(r){return Array.isArray(r)?So(r):r})))}function Sy(e){return nr(e).call(e,function(t){return t!==void 0})}function Pn(e){return e&&lt(e)==="object"}function Ay(e){return e&&typeof e=="function"}function Ey(e){if(Zi(e)){var t=e.op;return t==="add"||t==="remove"||t==="replace"}return!1}function Oy(e){return Ey(e)||Zi(e)&&e.type==="mutation"}function Yi(e){return Oy(e)&&(e.op==="add"||e.op==="replace"||e.op==="merge"||e.op==="mergeDeep")}function Zi(e){return e&&lt(e)==="object"}function Lp(e,t){try{return wo(e,t)}catch(r){return console.error(r),{}}}var Qi={exports:{}},HT=st(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}),WT=st,VT=At,GT=un,Ty=HT,Xi=Object.isExtensible,Cy=WT(function(){Xi(1)})||Ty?function(e){return!!VT(e)&&(!Ty||GT(e)!="ArrayBuffer")&&(!Xi||Xi(e))}:Xi,KT=!st(function(){return Object.isExtensible(Object.preventExtensions({}))}),JT=We,YT=tt,ZT=qa,QT=At,Fp=It,XT=Vt.f,jy=Ha,eC=ul,Dp=Cy,tC=KT,Iy=!1,Lr=Ko("meta"),rC=0,Bp=function(e){XT(e,Lr,{value:{objectID:"O"+rC++,weakData:{}}})},nC=Qi.exports={enable:function(){nC.enable=function(){},Iy=!0;var e=jy.f,t=YT([].splice),r={};r[Lr]=1,e(r).length&&(jy.f=function(n){for(var a=e(n),o=0,i=a.length;o<i;o++)if(a[o]===Lr){t(a,o,1);break}return a},JT({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:eC.f}))},fastKey:function(e,t){if(!QT(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Fp(e,Lr)){if(!Dp(e))return"F";if(!t)return"E";Bp(e)}return e[Lr].objectID},getWeakData:function(e,t){if(!Fp(e,Lr)){if(!Dp(e))return!0;if(!t)return!1;Bp(e)}return e[Lr].weakData},onFreeze:function(e){return tC&&Iy&&Dp(e)&&!Fp(e,Lr)&&Bp(e),e}};ZT[Lr]=!0;var aC=We,oC=Ae,iC=Qi.exports,sC=st,lC=Hr,cC=Xn,pC=$i,uC=wt,dC=At,hC=gn,fC=Vt.f,mC=Kr.forEach,gC=Lt,yC=vr.set,vC=vr.getterFor,bC=tt,_y=wi,es=Qi.exports.getWeakData,xC=Ut,Np=At,wC=$i,$C=Xn,Py=It,kC=vr.set,SC=vr.getterFor,AC=Kr.find,EC=Kr.findIndex,OC=bC([].splice),TC=0,ts=function(e){return e.frozen||(e.frozen=new Ry)},Ry=function(){this.entries=[]},qp=function(e,t){return AC(e.entries,function(r){return r[0]===t})};Ry.prototype={get:function(e){var t=qp(this,e);if(t)return t[1]},has:function(e){return!!qp(this,e)},set:function(e,t){var r=qp(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=EC(this.entries,function(r){return r[0]===e});return~t&&OC(this.entries,t,1),!!~t}};var Ao,CC={getConstructor:function(e,t,r,n){var a=e(function(l,c){wC(l,o),kC(l,{type:t,id:TC++,frozen:void 0}),c!=null&&$C(c,l[n],{that:l,AS_ENTRIES:r})}),o=a.prototype,i=SC(t),s=function(l,c,h){var d=i(l),f=es(xC(c),!0);return f===!0?ts(d).set(c,h):f[d.id]=h,l};return _y(o,{delete:function(l){var c=i(this);if(!Np(l))return!1;var h=es(l);return h===!0?ts(c).delete(l):h&&Py(h,c.id)&&delete h[c.id]},has:function(l){var c=i(this);if(!Np(l))return!1;var h=es(l);return h===!0?ts(c).has(l):h&&Py(h,c.id)}}),_y(o,r?{get:function(l){var c=i(this);if(Np(l)){var h=es(l);return h===!0?ts(c).get(l):h?h[c.id]:void 0}},set:function(l,c){return s(this,l,c)}}:{add:function(l){return s(this,l,!0)}}),a}},Ly=Ae,rs=tt,jC=wi,IC=Qi.exports,Fy=CC,ns=At,as=Cy,os=vr.enforce,_C=Bd,PC=!Ly.ActiveXObject&&"ActiveXObject"in Ly,Dy=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},RC=function(e,t,r){var n,a=e.indexOf("Map")!==-1,o=e.indexOf("Weak")!==-1,i=a?"set":"add",s=oC[e],l=s&&s.prototype,c={};if(gC&&uC(s)&&(o||l.forEach&&!sC(function(){new s().entries().next()}))){var h=(n=t(function(f,m){yC(pC(f,h),{type:e,collection:new s}),m!=null&&cC(m,f[i],{that:f,AS_ENTRIES:a})})).prototype,d=vC(e);mC(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(f){var m=f=="add"||f=="set";!(f in l)||o&&f=="clear"||lC(h,f,function(v,w){var x=d(this).collection;if(!m&&o&&!dC(v))return f=="get"&&void 0;var p=x[f](v===0?0:v,w);return m?this:p})}),o||fC(h,"size",{configurable:!0,get:function(){return d(this).collection.size}})}else n=r.getConstructor(t,e,a,i),iC.enable();return hC(n,e,!1,!0),c[e]=n,aC({global:!0,forced:!0},c),o||r.setStrong(n,e,a),n}("WeakMap",Dy,Fy);if(_C&&PC){Ao=Fy.getConstructor(Dy,"WeakMap",!0),IC.enable();var Eo=RC.prototype,By=rs(Eo.delete),is=rs(Eo.has),Ny=rs(Eo.get),qy=rs(Eo.set);jC(Eo,{delete:function(e){if(ns(e)&&!as(e)){var t=os(this);return t.frozen||(t.frozen=new Ao),By(this,e)||t.frozen.delete(e)}return By(this,e)},has:function(e){if(ns(e)&&!as(e)){var t=os(this);return t.frozen||(t.frozen=new Ao),is(this,e)||t.frozen.has(e)}return is(this,e)},get:function(e){if(ns(e)&&!as(e)){var t=os(this);return t.frozen||(t.frozen=new Ao),is(this,e)?Ny(this,e):t.frozen.get(e)}return Ny(this,e)},set:function(e,t){if(ns(e)&&!as(e)){var r=os(this);r.frozen||(r.frozen=new Ao),is(this,e)?qy(this,e,t):r.frozen.set(e,t)}else qy(this,e,t);return this}})}const LC=Me(Et.WeakMap);var FC=st,DC=pt("iterator"),BC=!FC(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach(function(n,a){t.delete("b"),r+=a+n}),!e.toJSON||!t.sort||e.href!=="http://a/c%20d?a=1&c=3"||t.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!t[DC]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("http://тест").host!=="xn--e1aybc"||new URL("http://a#б").hash!=="#%D0%B1"||r!=="a1c3"||new URL("http://x",void 0).host!=="x"}),zy=_d,NC=Math.floor,zp=function(e,t){var r=e.length,n=NC(r/2);return r<8?qC(e,t):zC(e,zp(zy(e,0,n),t),zp(zy(e,n),t),t)},qC=function(e,t){for(var r,n,a=e.length,o=1;o<a;){for(n=o,r=e[o];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==o++&&(e[n]=r)}return e},zC=function(e,t,r,n){for(var a=t.length,o=r.length,i=0,s=0;i<a||s<o;)e[i+s]=i<a&&s<o?n(t[i],r[s])<=0?t[i++]:r[s++]:i<a?t[i++]:r[s++];return e},Up=We,ss=Ae,Mp=Xt,ls=zt,Ar=tt,Uy=BC,My=Wa,UC=wi,MC=gn,HC=Eh,Hp=vr,Hy=$i,Wp=wt,WC=It,VC=fn,GC=Vr,KC=Ut,Wy=At,Yt=mn,JC=Ma,Vy=Mr,Vp=oc,YC=no,ba=Nf,ZC=zp,QC=pt("iterator"),Gy=Hp.set,Er=Hp.getterFor("URLSearchParams"),XC=Hp.getterFor("URLSearchParamsIterator"),Ky=Mp("fetch"),cs=Mp("Request"),Oo=Mp("Headers"),Gp=cs&&cs.prototype,Jy=Oo&&Oo.prototype,ej=ss.RegExp,tj=ss.TypeError,Yy=ss.decodeURIComponent,rj=ss.encodeURIComponent,nj=Ar("".charAt),Zy=Ar([].join),Rn=Ar([].push),Kp=Ar("".replace),aj=Ar([].shift),Qy=Ar([].splice),Xy=Ar("".split),oj=Ar("".slice),ij=/\+/g,ev=Array(4),sj=function(e){return ev[e-1]||(ev[e-1]=ej("((?:%[\\da-f]{2}){"+e+"})","gi"))},lj=function(e){try{return Yy(e)}catch{return e}},tv=function(e){var t=Kp(e,ij," "),r=4;try{return Yy(t)}catch{for(;r;)t=Kp(t,sj(r--),lj);return t}},cj=/[!'()~]|%20/g,pj={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},uj=function(e){return pj[e]},rv=function(e){return Kp(rj(e),cj,uj)},Jp=HC(function(e,t){Gy(this,{type:"URLSearchParamsIterator",iterator:Vp(Er(e).entries),kind:t})},"Iterator",function(){var e=XC(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value=t==="keys"?n.key:t==="values"?n.value:[n.key,n.value]),r},!0),nv=function(e){this.entries=[],this.url=null,e!==void 0&&(Wy(e)?this.parseObject(e):this.parseQuery(typeof e=="string"?nj(e,0)==="?"?oj(e,1):e:Yt(e)))};nv.prototype={type:"URLSearchParams",bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,o,i,s,l=YC(e);if(l)for(r=(t=Vp(e,l)).next;!(n=ls(r,t)).done;){if(o=(a=Vp(KC(n.value))).next,(i=ls(o,a)).done||(s=ls(o,a)).done||!ls(o,a).done)throw tj("Expected sequence with length 2");Rn(this.entries,{key:Yt(i.value),value:Yt(s.value)})}else for(var c in e)WC(e,c)&&Rn(this.entries,{key:c,value:Yt(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=Xy(e,"&"),a=0;a<n.length;)(t=n[a++]).length&&(r=Xy(t,"="),Rn(this.entries,{key:tv(aj(r)),value:tv(Zy(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],Rn(r,rv(e.key)+"="+rv(e.value));return Zy(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var Yp=function(){Hy(this,To);var e=arguments.length>0?arguments[0]:void 0;Gy(this,new nv(e))},To=Yp.prototype;if(UC(To,{append:function(e,t){ba(arguments.length,2);var r=Er(this);Rn(r.entries,{key:Yt(e),value:Yt(t)}),r.updateURL()},delete:function(e){ba(arguments.length,1);for(var t=Er(this),r=t.entries,n=Yt(e),a=0;a<r.length;)r[a].key===n?Qy(r,a,1):a++;t.updateURL()},get:function(e){ba(arguments.length,1);for(var t=Er(this).entries,r=Yt(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){ba(arguments.length,1);for(var t=Er(this).entries,r=Yt(e),n=[],a=0;a<t.length;a++)t[a].key===r&&Rn(n,t[a].value);return n},has:function(e){ba(arguments.length,1);for(var t=Er(this).entries,r=Yt(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){ba(arguments.length,1);for(var r,n=Er(this),a=n.entries,o=!1,i=Yt(e),s=Yt(t),l=0;l<a.length;l++)(r=a[l]).key===i&&(o?Qy(a,l--,1):(o=!0,r.value=s));o||Rn(a,{key:i,value:s}),n.updateURL()},sort:function(){var e=Er(this);ZC(e.entries,function(t,r){return t.key>r.key?1:-1}),e.updateURL()},forEach:function(e){for(var t,r=Er(this).entries,n=VC(e,arguments.length>1?arguments[1]:void 0),a=0;a<r.length;)n((t=r[a++]).value,t.key,this)},keys:function(){return new Jp(this,"keys")},values:function(){return new Jp(this,"values")},entries:function(){return new Jp(this,"entries")}},{enumerable:!0}),My(To,QC,To.entries,{name:"entries"}),My(To,"toString",function(){return Er(this).serialize()},{enumerable:!0}),MC(Yp,"URLSearchParams"),Up({global:!0,forced:!Uy},{URLSearchParams:Yp}),!Uy&&Wp(Oo)){var dj=Ar(Jy.has),hj=Ar(Jy.set),av=function(e){if(Wy(e)){var t,r=e.body;if(GC(r)==="URLSearchParams")return t=e.headers?new Oo(e.headers):new Oo,dj(t,"content-type")||hj(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),JC(e,{body:Vy(0,Yt(r)),headers:Vy(0,t)})}return e};if(Wp(Ky)&&Up({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Ky(e,arguments.length>1?av(arguments[1]):{})}}),Wp(cs)){var Zp=function(e){return Hy(this,Gp),new cs(e,arguments.length>1?av(arguments[1]):{})};Gp.constructor=Zp,Zp.prototype=Gp,Up({global:!0,forced:!0},{Request:Zp})}}const ov=Me(Et.URLSearchParams);function iv(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];this.message=a[0],t&&t.apply(this,a)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var sv={exports:{}},fj=sv.exports=function(e){return new ar(e)};function ar(e){this.value=e}function lv(e,t,r){var n=[],a=[],o=!0;return function i(s){var l=r?cv(s):s,c={},h=!0,d={node:l,node_:s,path:[].concat(n),parent:a[a.length-1],parents:a,key:n.slice(-1)[0],isRoot:n.length===0,level:n.length,circular:null,update:function(v,w){d.isRoot||(d.parent.node[d.key]=v),d.node=v,w&&(h=!1)},delete:function(v){delete d.parent.node[d.key],v&&(h=!1)},remove:function(v){pv(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],v&&(h=!1)},keys:null,before:function(v){c.before=v},after:function(v){c.after=v},pre:function(v){c.pre=v},post:function(v){c.post=v},stop:function(){o=!1},block:function(){h=!1}};if(!o)return d;function f(){if(typeof d.node=="object"&&d.node!==null){d.keys&&d.node_===d.node||(d.keys=ps(d.node)),d.isLeaf=d.keys.length==0;for(var v=0;v<a.length;v++)if(a[v].node_===s){d.circular=a[v];break}}else d.isLeaf=!0,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot}f();var m=t.call(d,d.node);return m!==void 0&&d.update&&d.update(m),c.before&&c.before.call(d,d.node),h&&(typeof d.node!="object"||d.node===null||d.circular||(a.push(d),f(),us(d.keys,function(v,w){n.push(v),c.pre&&c.pre.call(d,d.node[v],v);var x=i(d.node[v]);r&&ds.call(d.node,v)&&(d.node[v]=x.node),x.isLast=w==d.keys.length-1,x.isFirst=w==0,c.post&&c.post.call(d,x),n.pop()}),a.pop()),c.after&&c.after.call(d,d.node)),d}(e).node}function cv(e){if(typeof e=="object"&&e!==null){var t;if(pv(e))t=[];else if(xa(e)==="[object Date]")t=new Date(e.getTime?e.getTime():e);else if(xa(e)==="[object RegExp]")t=new RegExp(e);else if(function(a){return xa(a)==="[object Error]"}(e))t={message:e.message};else if(function(a){return xa(a)==="[object Boolean]"}(e))t=new Boolean(e);else if(function(a){return xa(a)==="[object Number]"}(e))t=new Number(e);else if(function(a){return xa(a)==="[object String]"}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return us(ps(e),function(a){t[a]=e[a]}),t}return e}ar.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!ds.call(t,n)){t=void 0;break}t=t[n]}return t},ar.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!ds.call(t,n))return!1;t=t[n]}return!0},ar.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var a=e[n];ds.call(r,a)||(r[a]={}),r=r[a]}return r[e[n]]=t,t},ar.prototype.map=function(e){return lv(this.value,e,!0)},ar.prototype.forEach=function(e){return this.value=lv(this.value,e,!1),this.value},ar.prototype.reduce=function(e,t){var r=arguments.length===1,n=r?this.value:t;return this.forEach(function(a){this.isRoot&&r||(n=e.call(this,n,a))}),n},ar.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},ar.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},ar.prototype.clone=function(){var e=[],t=[];return function r(n){for(var a=0;a<e.length;a++)if(e[a]===n)return t[a];if(typeof n=="object"&&n!==null){var o=cv(n);return e.push(n),t.push(o),us(ps(n),function(i){o[i]=r(n[i])}),e.pop(),t.pop(),o}return n}(this.value)};var ps=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function xa(e){return Object.prototype.toString.call(e)}var pv=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},us=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};us(ps(ar.prototype),function(e){fj[e]=function(t){var r=[].slice.call(arguments,1),n=new ar(t);return n[e].apply(n,r)}});var ds=Object.hasOwnProperty||function(e,t){return t in e},mj=["properties"],gj=["properties"],yj=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],vj=["schema/example","items/example"];function uv(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return mj.indexOf(t)>-1&&gj.indexOf(r)===-1||yj.indexOf(n)>-1||vj.some(function(a){return n.indexOf(a)>-1})}function Qp(e,t){var r,n=pr(e.split("#"),2),a=n[0],o=n[1],i=Gt.resolve(a||"",t||"");return o?$e(r="".concat(i,"#")).call(r,o):i}var bj=/^([a-z]+:\/\/|\/\/)/i,wa=iv("JSONRefError",function(e,t,r){this.originalError=r,tr(this,t||{})}),Fr={},dv=new LC,xj=[function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="examples"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="examples"&&e[6]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="examples"&&e[7]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[4]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"}],wj={key:"$ref",plugin:function(e,t,r,n){var a,o=n.getInstance(),i=ur(r).call(r,0,-1);if(!uv(i)&&(a=i,!xj.some(function(p){return p(a)}))){var s=n.getContext(r).baseDoc;if(typeof e!="string")return new wa("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:s,fullPath:r});var l,c,h,d=mv(e),f=d[0],m=d[1]||"";try{l=s||f?fv(f,s):null}catch(p){return Xp(p,{pointer:m,$ref:e,basePath:l,fullPath:r})}if(function(p,k,$,C){var F,O,U=dv.get(C);U||(U={},dv.set(C,U));var A,T=(A=$).length===0?"":"/".concat(Ze(A).call(A,bv).join("/")),_=$e(F="".concat(k||"<specmap-base>","#")).call(F,p),B=T.replace(/allOf\/\d+\/?/g,"");if(k===C.contextTree.get([]).baseDoc&&ru(B,p))return!0;var E="",I=$.some(function(N){var X;return E=$e(X="".concat(E,"/")).call(X,bv(N)),U[E]&&U[E].some(function(ve){return ru(ve,_)||ru(_,ve)})});if(I)return!0;U[B]=$e(O=U[B]||[]).call(O,_)}(m,l,i,n)&&!o.useCircularStructures){var v=Qp(e,l);return e===v?null:Xe.replace(r,v)}if(l==null?(h=tu(m),(c=n.get(h))===void 0&&(c=new wa("Could not resolve reference: ".concat(e),{pointer:m,$ref:e,baseDoc:s,fullPath:r}))):c=(c=gv(l,m)).l!=null?c.l:c.catch(function(p){throw Xp(p,{pointer:m,$ref:e,baseDoc:s,fullPath:r})}),c instanceof Error)return[Xe.remove(r),c];var w=Qp(e,l),x=Xe.replace(i,c,{$$ref:w});if(l&&l!==s)return[x,Xe.context(i,{baseDoc:l})];try{if(!function(p,k){var $=[p];return k.path.reduce(function(C,F){return $.push(C[F]),C[F]},p),function C(F){return Xe.isObject(F)&&($.indexOf(F)>=0||Ve(F).some(function(O){return C(F[O])}))}(k.value)}(n.state,x)||o.useCircularStructures)return x}catch{return null}}}},hv=tr(wj,{docCache:Fr,absoluteify:fv,clearCache:function(e){e!==void 0?delete Fr[e]:Ve(Fr).forEach(function(t){delete Fr[t]})},JSONRefError:wa,wrapError:Xp,getDoc:yv,split:mv,extractFromDoc:gv,fetchJSON:function(e){return fetch(e,{headers:{Accept:"application/json, application/yaml"},loadSpec:!0}).then(function(t){return t.text()}).then(function(t){return ty.load(t)})},extract:eu,jsonPointerToArray:tu,unescapeJsonPointerToken:vv});function fv(e,t){if(!bj.test(e)){var r;if(!t)throw new wa($e(r="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(r,t,"'"));return Gt.resolve(t,e)}return e}function Xp(e,t){var r,n;return r=e&&e.response&&e.response.body?$e(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):e.message,new wa("Could not resolve reference: ".concat(r),t,e)}function mv(e){return(e+"").split("#")}function gv(e,t){var r=Fr[e];if(r&&!Xe.isPromise(r))try{var n=eu(t,r);return tr(jn.resolve(n),{l:n})}catch(a){return jn.reject(a)}return yv(e).then(function(a){return eu(t,a)})}function yv(e){var t=Fr[e];return t?Xe.isPromise(t)?t:jn.resolve(t):(Fr[e]=hv.fetchJSON(e).then(function(r){return Fr[e]=r,r}),Fr[e])}function eu(e,t){var r=tu(e);if(r.length<1)return t;var n=Xe.getIn(t,r);if(n===void 0)throw new wa("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return n}function tu(e){var t;if(typeof e!="string")throw new TypeError("Expected a string, got a ".concat(lt(e)));return e[0]==="/"&&(e=e.substr(1)),e===""?[]:Ze(t=e.split("/")).call(t,vv)}function vv(e){return typeof e!="string"?e:new ov("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function bv(e){var t,r=new ov([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return ur(t=r.toString()).call(t,1)}function ru(e,t){if(!(r=t)||r==="/"||r==="#")return!0;var r,n=e.charAt(t.length),a=ur(t).call(t,-1);return e.indexOf(t)===0&&(!n||n==="/"||n==="#")&&a!=="#"}const $j={key:"allOf",plugin:function(e,t,r,n,a){if(!a.meta||!a.meta.$$ref){var o=ur(r).call(r,0,-1);if(!uv(o)){if(!Array.isArray(e)){var i=new TypeError("allOf must be an array");return i.fullPath=r,i}var s=!1,l=a.value;if(o.forEach(function(f){l&&(l=l[f])}),l=ut({},l),Ve(l).length!==0){delete l.allOf;var c,h,d=[];return d.push(n.replace(o,{})),e.forEach(function(f,m){if(!n.isObject(f)){if(s)return null;s=!0;var v=new TypeError("Elements in allOf must be objects");return v.fullPath=r,d.push(v)}d.push(n.mergeDeep(o,f));var w=function(x,p){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},$=k.specmap,C=k.getBaseUrlForNodePath,F=C===void 0?function(T){var _;return $.getContext($e(_=[]).call(_,Cn(p),Cn(T))).baseDoc}:C,O=k.targetKeys,U=O===void 0?["$ref","$$ref"]:O,A=[];return sv.exports(x).forEach(function(){if(co(U).call(U,this.key)&&typeof this.node=="string"){var T=this.path,_=$e(p).call(p,this.path),B=Qp(this.node,F(T));A.push($.replace(_,B))}}),A}(f,ur(r).call(r,0,-1),{getBaseUrlForNodePath:function(x){var p;return n.getContext($e(p=[]).call(p,Cn(r),[m],Cn(x))).baseDoc},specmap:n});d.push.apply(d,Cn(w))}),l.example&&d.push(n.remove($e(c=[]).call(c,o,"example"))),d.push(n.mergeDeep(o,l)),l.$$ref||d.push(n.remove($e(h=[]).call(h,o,"$$ref"))),d}}}}},kj={key:"parameters",plugin:function(e,t,r,n){if(Array.isArray(e)&&e.length){var a=tr([],e),o=ur(r).call(r,0,-1),i=ut({},Xe.getIn(n.spec,o));return e.forEach(function(s,l){try{a[l].default=n.parameterMacro(i,s)}catch(h){var c=new Error(h);return c.fullPath=r,c}}),Xe.replace(r,a)}return Xe.replace(r,e)}},Sj={key:"properties",plugin:function(e,t,r,n){var a=ut({},e);for(var o in e)try{a[o].default=n.modelPropertyMacro(a[o])}catch(s){var i=new Error(s);return i.fullPath=r,i}return Xe.replace(r,a)}};var Aj=function(){function e(t){uy(this,e),this.root=nu(t||{})}return hy(e,[{key:"set",value:function(t,r){var n=this.getParent(t,!0);if(n){var a=t[t.length-1],o=n.children;o[a]?hs(o[a],r,n):o[a]=nu(r,n)}else hs(this.root,r,null)}},{key:"get",value:function(t){if((t=t||[]).length<1)return this.root.value;for(var r,n,a=this.root,o=0;o<t.length&&(n=t[o],(r=a.children)[n]);o+=1)a=r[n];return a&&a.protoValue}},{key:"getParent",value:function(t,r){return!t||t.length<1?null:t.length<2?this.root:ur(t).call(t,0,-1).reduce(function(n,a){if(!n)return n;var o=n.children;return!o[a]&&r&&(o[a]=nu(null,n)),o[a]},this.root)}}]),e}();function nu(e,t){return hs({children:{}},e,t)}function hs(e,t,r){return e.value=t||{},e.protoValue=r?ut(ut({},r.protoValue),e.value):e.value,Ve(e.children).forEach(function(n){var a=e.children[n];e.children[n]=hs(a,a.value,e)}),e}var xv=function(){},Ej=function(){function e(t){var r,n,a=this;uy(this,e),tr(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new Aj,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:tr(Object.create(this),Xe,{getInstance:function(){return a}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=nr(r=Ze(n=this.plugins).call(n,this.wrapPlugin.bind(this))).call(r,Xe.isFunction),this.patches.push(Xe.add([],this.spec)),this.patches.push(Xe.context([],this.context)),this.updatePatches(this.patches)}return hy(e,[{key:"debug",value:function(t){if(this.debugLevel===t){for(var r,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];(r=console).log.apply(r,a)}}},{key:"verbose",value:function(t){if(this.debugLevel==="verbose"){for(var r,n,a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];(r=console).log.apply(r,$e(n=["[".concat(t,"]   ")]).call(n,o))}}},{key:"wrapPlugin",value:function(t,r){var n,a,o,i=this.pathDiscriminator,s=null;return t[this.pluginProp]?(s=t,n=t[this.pluginProp]):Xe.isFunction(t)?n=t:Xe.isObject(t)&&(a=t,o=function(l,c){return!Array.isArray(l)||l.every(function(h,d){return h===c[d]})},n=wr.mark(function l(c,h){var d,f,m,v,w,x;return wr.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:x=function(k,$,C){var F,O,U,A,T,_,B,E,I,N,X,ve,V;return wr.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(Xe.isObject(k)){D.next=6;break}if(a.key!==$[$.length-1]){D.next=4;break}return D.next=4,a.plugin(k,a.key,$,h);case 4:D.next=30;break;case 6:F=$.length-1,O=$[F],U=$.indexOf("properties"),A=O==="properties"&&F===U,T=h.allowMetaPatches&&f[k.$$ref],_=0,B=Ve(k);case 12:if(!(_<B.length)){D.next=30;break}if(E=B[_],I=k[E],N=$e($).call($,E),X=Xe.isObject(I),ve=k.$$ref,T){D.next=22;break}if(!X){D.next=22;break}return h.allowMetaPatches&&ve&&(f[ve]=!0),D.delegateYield(x(I,N,C),"t0",22);case 22:if(A||E!==a.key){D.next=27;break}if(V=o(i,$),i&&!V){D.next=27;break}return D.next=27,a.plugin(I,E,N,h,C);case 27:_++,D.next=12;break;case 30:case"end":return D.stop()}},d)},d=wr.mark(x),f={},m=$n(nr(c).call(c,Xe.isAdditiveMutation)),p.prev=4,m.s();case 6:if((v=m.n()).done){p.next=11;break}return w=v.value,p.delegateYield(x(w.value,w.path,w),"t0",9);case 9:p.next=6;break;case 11:p.next=16;break;case 13:p.prev=13,p.t1=p.catch(4),m.e(p.t1);case 16:return p.prev=16,m.f(),p.finish(16);case 19:case"end":return p.stop()}},l,null,[[4,13,16,19]])})),tr(n.bind(s),{pluginName:t.name||r,isGenerator:Xe.isGenerator(n)})}},{key:"nextPlugin",value:function(){var t,r=this;return mT(t=this.wrappedPlugins).call(t,function(n){return r.getMutationsForPlugin(n).length>0})}},{key:"nextPromisedPatch",value:function(){var t;if(this.promisedPatches.length>0)return jn.race(Ze(t=this.promisedPatches).call(t,function(r){return r.value}))}},{key:"getPluginHistory",value:function(t){var r=this.constructor.getPluginName(t);return this.pluginHistory[r]||[]}},{key:"getPluginRunCount",value:function(t){return this.getPluginHistory(t).length}},{key:"getPluginHistoryTip",value:function(t){var r=this.getPluginHistory(t);return r&&r[r.length-1]||{}}},{key:"getPluginMutationIndex",value:function(t){var r=this.getPluginHistoryTip(t).mutationIndex;return typeof r!="number"?-1:r}},{key:"updatePluginHistory",value:function(t,r){var n=this.constructor.getPluginName(t);this.pluginHistory[n]=this.pluginHistory[n]||[],this.pluginHistory[n].push(r)}},{key:"updatePatches",value:function(t){var r=this;Xe.normalizeArray(t).forEach(function(n){if(n instanceof Error)r.errors.push(n);else try{if(!Xe.isObject(n))return void r.debug("updatePatches","Got a non-object patch",n);if(r.showDebug&&r.allPatches.push(n),Xe.isPromise(n.value))return r.promisedPatches.push(n),void r.promisedPatchThen(n);if(Xe.isContextPatch(n))return void r.setContext(n.path,n.value);if(Xe.isMutation(n))return void r.updateMutations(n)}catch(a){console.error(a),r.errors.push(a)}})}},{key:"updateMutations",value:function(t){lt(t.value)==="object"&&!Array.isArray(t.value)&&this.allowMetaPatches&&(t.value=ut({},t.value));var r=Xe.applyPatch(this.state,t,{allowMetaPatches:this.allowMetaPatches});r&&(this.mutations.push(t),this.state=r)}},{key:"removePromisedPatch",value:function(t){var r,n=this.promisedPatches.indexOf(t);n<0?this.debug("Tried to remove a promisedPatch that isn't there!"):IT(r=this.promisedPatches).call(r,n,1)}},{key:"promisedPatchThen",value:function(t){var r=this;return t.value=t.value.then(function(n){var a=ut(ut({},t),{},{value:n});r.removePromisedPatch(t),r.updatePatches(a)}).catch(function(n){r.removePromisedPatch(t),r.updatePatches(n)}),t.value}},{key:"getMutations",value:function(t,r){var n;return t=t||0,typeof r!="number"&&(r=this.mutations.length),ur(n=this.mutations).call(n,t,r)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(t){var r=this.getPluginMutationIndex(t);return this.getMutations(r+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(t){return Xe.getIn(this.state,t)}},{key:"_getContext",value:function(t){return this.contextTree.get(t)}},{key:"setContext",value:function(t,r){return this.contextTree.set(t,r)}},{key:"_hasRun",value:function(t){return this.getPluginRunCount(this.getCurrentPlugin())>(t||0)}},{key:"dispatch",value:function(){var t,r=this,n=this,a=this.nextPlugin();if(!a){var o=this.nextPromisedPatch();if(o)return o.then(function(){return r.dispatch()}).catch(function(){return r.dispatch()});var i={spec:this.state,errors:this.errors};return this.showDebug&&(i.patches=this.allPatches),jn.resolve(i)}if(n.pluginCount=n.pluginCount||{},n.pluginCount[a]=(n.pluginCount[a]||0)+1,n.pluginCount[a]>100)return jn.resolve({spec:n.state,errors:$e(t=n.errors).call(t,new Error("We've reached a hard limit of ".concat(100," plugin runs")))});if(a!==this.currentPlugin&&this.promisedPatches.length){var s,l=Ze(s=this.promisedPatches).call(s,function(h){return h.value});return jn.all(Ze(l).call(l,function(h){return h.then(xv,xv)})).then(function(){return r.dispatch()})}return function(){n.currentPlugin=a;var h=n.getCurrentMutations(),d=n.mutations.length-1;try{if(a.isGenerator){var f,m=$n(a(h,n.getLib()));try{for(m.s();!(f=m.n()).done;)c(f.value)}catch(v){m.e(v)}finally{m.f()}}else c(a(h,n.getLib()))}catch(v){console.error(v),c([tr(Object.create(v),{plugin:a})])}finally{n.updatePluginHistory(a,{mutationIndex:d})}return n.dispatch()}();function c(h){h&&(h=Xe.fullyNormalizeArray(h),n.updatePatches(h,a))}}}],[{key:"getPluginName",value:function(t){return t.pluginName}},{key:"getPatchesOfType",value:function(t,r){return nr(t).call(t,r)}}]),e}(),Ln={refs:hv,allOf:$j,parameters:kj,properties:Sj},wv=function(e){return String.prototype.toLowerCase.call(e)},$v=function(e){return e.replace(/[^\w]/gi,"_")};function kv(e){var t=e.openapi;return!!t&&rf(t).call(t,"3")}function fs(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=n.v2OperationIdCompatibilityMode;if(!e||lt(e)!=="object")return null;var o=(e.operationId||"").replace(/\s/g,"");return o.length?$v(e.operationId):Oj(t,r,{v2OperationIdCompatibilityMode:a})}function Oj(e,t){var r,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.v2OperationIdCompatibilityMode;if(a){var o,i,s=$e(o="".concat(t.toLowerCase(),"_")).call(o,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return(s=s||$e(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return $e(r="".concat(wv(t))).call(r,$v(e))}function Sv(e,t){var r;return $e(r="".concat(wv(t),"-")).call(r,e)}function Tj(e,t){return e&&e.paths&&Av(e,function(r){var n=r.pathName,a=r.method,o=r.operation;if(!o||lt(o)!=="object")return!1;var i=o.operationId;return[fs(o,n,a),Sv(n,a),i].some(function(s){return s&&s===t})},!0)||null}function Av(e,t,r){if(!e||lt(e)!=="object"||!e.paths||lt(e.paths)!=="object")return null;var n=e.paths;for(var a in n)for(var o in n[a])if(o.toUpperCase()!=="PARAMETERS"){var i=n[a][o];if(i&&lt(i)==="object"){var s={spec:e,pathName:a,method:o.toUpperCase(),operation:i},l=t(s);if(r&&l)return s}}}function Ev(e){var t=e.spec,r=t.paths,n={};if(!r||t.$$normalized)return e;for(var a in r){var o,i=r[a];if(i!=null&&co(o=["object","function"]).call(o,lt(i))){var s=i.parameters,l=function(h){var d,f=i[h];if(f==null||!co(d=["object","function"]).call(d,lt(f)))return"continue";var m=fs(f,a,h);if(m){n[m]?n[m].push(f):n[m]=[f];var v=n[m];if(v.length>1)v.forEach(function(_,B){var E;_.p=_.p||_.operationId,_.operationId=$e(E="".concat(m)).call(E,B+1)});else if(f.operationId!==void 0){var w=v[0];w.p=w.p||f.operationId,w.operationId=m}}if(h!=="parameters"){var x=[],p={};for(var k in t)k!=="produces"&&k!=="consumes"&&k!=="security"||(p[k]=t[k],x.push(p));if(s&&(p.parameters=s,x.push(p)),x.length){var $,C=$n(x);try{for(C.s();!($=C.n()).done;){var F=$.value;for(var O in F)if(f[O]){if(O==="parameters"){var U,A=$n(F[O]);try{var T=function(){var _=U.value;f[O].some(function(B){return B.name&&B.name===_.name||B.$ref&&B.$ref===_.$ref||B.$$ref&&B.$$ref===_.$$ref||B===_})||f[O].push(_)};for(A.s();!(U=A.n()).done;)T()}catch(_){A.e(_)}finally{A.f()}}}else f[O]=F[O]}}catch(_){C.e(_)}finally{C.f()}}}};for(var c in i)l(c)}}return t.$$normalized=!0,e}function Ov(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.requestInterceptor,n=t.responseInterceptor,a=e.withCredentials?"include":"same-origin";return function(o){return e({url:o,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:"application/json, application/yaml"},credentials:a}).then(function(i){return i.body})}}function Tv(e){var t=e.fetch,r=e.spec,n=e.url,a=e.mode,o=e.allowMetaPatches,i=o===void 0||o,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,h=e.requestInterceptor,d=e.responseInterceptor,f=e.skipNormalization,m=e.useCircularStructures,v=e.http,w=e.baseDoc;return w=w||n,v=t||v||Vi,r?x(r):Ov(v,{requestInterceptor:h,responseInterceptor:d})(w).then(x);function x(p){w&&(Ln.refs.docCache[w]=p),Ln.refs.fetchJSON=Ov(v,{requestInterceptor:h,responseInterceptor:d});var k,$,C=[Ln.refs];return typeof c=="function"&&C.push(Ln.parameters),typeof l=="function"&&C.push(Ln.properties),a!=="strict"&&C.push(Ln.allOf),(k={spec:p,context:{baseDoc:w},plugins:C,allowMetaPatches:i,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:m},new Ej(k).dispatch()).then(f?($=Pc(wr.mark(function F(O){return wr.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",O);case 1:case"end":return U.stop()}},F)})),function(F){return $.apply(this,arguments)}):Ev)}}var au=Array.isArray,Cj=typeof Oa=="object"&&Oa&&Oa.Object===Object&&Oa,jj=typeof self=="object"&&self&&self.Object===Object&&self,ou=Cj||jj||Function("return this")(),Co=ou.Symbol,Cv=Co,jv=Object.prototype,Ij=jv.hasOwnProperty,_j=jv.toString,jo=Cv?Cv.toStringTag:void 0,Pj=Object.prototype.toString,Rj=function(e){var t=Ij.call(e,jo),r=e[jo];try{e[jo]=void 0;var n=!0}catch{}var a=_j.call(e);return n&&(t?e[jo]=r:delete e[jo]),a},Iv=Co?Co.toStringTag:void 0,_v=function(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Iv&&Iv in Object(e)?Rj(e):function(t){return Pj.call(t)}(e)},Lj=_v,iu=function(e){return typeof e=="symbol"||function(t){return t!=null&&typeof t=="object"}(e)&&Lj(e)=="[object Symbol]"},Fj=au,Dj=iu,Bj=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nj=/^\w*$/,Pv=function(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")},qj=_v,zj=Pv,su=ou.i,Rv=function(){var e=/[^.]+$/.exec(su&&su.keys&&su.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Uj=Function.prototype.toString,Mj=function(e){if(!zj(e))return!1;var t=qj(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Hj=function(e){return!!Rv&&Rv in e},Wj=Pv,Vj=/^\[object .+?Constructor\]$/,Gj=Function.prototype,Kj=Object.prototype,Jj=Gj.toString,Yj=Kj.hasOwnProperty,Zj=RegExp("^"+Jj.call(Yj).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qj=function(e){return!(!Wj(e)||Hj(e))&&(Mj(e)?Zj:Vj).test(function(t){if(t!=null){try{return Uj.call(t)}catch{}try{return t+""}catch{}}return""}(e))},Lv=function(e,t){var r=function(n,a){return n==null?void 0:n[a]}(e,t);return Qj(r)?r:void 0},ms=Lv(Object,"create"),Fv=ms,Xj=ms,eI=Object.prototype.hasOwnProperty,tI=ms,rI=Object.prototype.hasOwnProperty,nI=ms,aI=function(){this.v=Fv?Fv(null):{},this.size=0},oI=function(e){var t=this.has(e)&&delete this.v[e];return this.size-=t?1:0,t},iI=function(e){var t=this.v;if(Xj){var r=t[e];return r==="__lodash_hash_undefined__"?void 0:r}return eI.call(t,e)?t[e]:void 0},sI=function(e){var t=this.v;return tI?t[e]!==void 0:rI.call(t,e)},lI=function(e,t){var r=this.v;return this.size+=this.has(e)?0:1,r[e]=nI&&t===void 0?"__lodash_hash_undefined__":t,this};function $a(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$a.prototype.clear=aI,$a.prototype.delete=oI,$a.prototype.get=iI,$a.prototype.has=sI,$a.prototype.set=lI;var cI=$a,pI=function(e,t){return e===t||e!=e&&t!=t},gs=function(e,t){for(var r=e.length;r--;)if(pI(e[r][0],t))return r;return-1},uI=gs,dI=Array.prototype.splice,hI=gs,fI=gs,mI=gs,gI=function(){this.v=[],this.size=0},yI=function(e){var t=this.v,r=uI(t,e);return!(r<0||(r==t.length-1?t.pop():dI.call(t,r,1),--this.size,0))},vI=function(e){var t=this.v,r=hI(t,e);return r<0?void 0:t[r][1]},bI=function(e,t){var r=this.v,n=mI(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ka(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ka.prototype.clear=gI,ka.prototype.delete=yI,ka.prototype.get=vI,ka.prototype.has=function(e){return fI(this.v,e)>-1},ka.prototype.set=bI;var xI=ka,wI=Lv(ou,"Map"),Dv=cI,$I=xI,kI=wI,SI=function(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null},ys=function(e,t){var r=e.v;return SI(t)?r[typeof t=="string"?"string":"hash"]:r.map},AI=ys,EI=ys,OI=ys,TI=ys,CI=function(e,t){var r=TI(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Sa(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Sa.prototype.clear=function(){this.size=0,this.v={hash:new Dv,map:new(kI||$I),string:new Dv}},Sa.prototype.delete=function(e){var t=AI(this,e).delete(e);return this.size-=t?1:0,t},Sa.prototype.get=function(e){return EI(this,e).get(e)},Sa.prototype.has=function(e){return OI(this,e).has(e)},Sa.prototype.set=CI;var Bv=Sa;function lu(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(lu.Cache||Bv),r}lu.Cache=Bv;var jI=lu,II=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_I=/\\(\\)?/g,PI=function(e){var t=jI(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(II,function(o,i,s,l){a.push(s?l.replace(_I,"$1"):i||o)}),a},function(n){return r.size===500&&r.clear(),n}),r=t.cache;return t}(),RI=PI,LI=function(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},FI=au,DI=iu,Nv=Co?Co.prototype:void 0,qv=Nv?Nv.toString:void 0,BI=function e(t){if(typeof t=="string")return t;if(FI(t))return LI(t,e)+"";if(DI(t))return qv?qv.call(t):"";var r=t+"";return r=="0"&&1/t==-1/0?"-0":r},NI=au,qI=function(e,t){if(Fj(e))return!1;var r=typeof e;return!(r!="number"&&r!="symbol"&&r!="boolean"&&e!=null&&!Dj(e))||Nj.test(e)||!Bj.test(e)||t!=null&&e in Object(t)},zI=RI,UI=iu,MI=function(e,t){return NI(e)?e:qI(e,t)?[e]:zI(function(r){return r==null?"":BI(r)}(e))},HI=function(e){if(typeof e=="string"||UI(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},WI=function(e,t){for(var r=0,n=(t=MI(t,e)).length;e!=null&&r<n;)e=e[HI(t[r++])];return r&&r==n?e:void 0},Io=function(e,t,r){var n=e==null?void 0:WI(e,t);return n===void 0?r:n};function cu(){return cu=Pc(wr.mark(function e(t,r){var n,a,o,i,s,l,c,h,d,f,m,v,w=arguments;return wr.wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return n=w.length>2&&w[2]!==void 0?w[2]:{},a=n.returnEntireTree,o=n.baseDoc,i=n.requestInterceptor,s=n.responseInterceptor,l=n.parameterMacro,c=n.modelPropertyMacro,h=n.useCircularStructures,d={pathDiscriminator:r,baseDoc:o,requestInterceptor:i,responseInterceptor:s,parameterMacro:l,modelPropertyMacro:c,useCircularStructures:h},f=Ev({spec:t}),m=f.spec,x.next=6,Tv(ut(ut({},d),{},{spec:m,allowMetaPatches:!0,skipNormalization:!0}));case 6:return v=x.sent,!a&&Array.isArray(r)&&r.length&&(v.spec=Io(v.spec,r)||null),x.abrupt("return",v);case 9:case"end":return x.stop()}},e)})),cu.apply(this,arguments)}var VI=function(){return null},GI=function(e){var t=e.spec,r=e.cb,n=r===void 0?VI:r,a=e.defaultTag,o=a===void 0?"default":a,i=e.v2OperationIdCompatibilityMode,s={},l={};return Av(t,function(c){var h,d=c.pathName,f=c.method,m=c.operation;(m.tags?(h=m.tags,Array.isArray(h)?h:[h]):[o]).forEach(function(v){if(typeof v=="string"){l[v]=l[v]||{};var w,x=l[v],p=fs(m,d,f,{v2OperationIdCompatibilityMode:i}),k=n({spec:t,pathName:d,method:f,operation:m,operationId:p});if(s[p])s[p]+=1,x[$e(w="".concat(p)).call(w,s[p])]=k;else if(x[p]!==void 0){var $,C,F=s[p]||1;s[p]=F+1,x[$e($="".concat(p)).call($,s[p])]=k;var O=x[p];delete x[p],x[$e(C="".concat(p)).call(C,F)]=O}else x[p]=k}})}),l},KI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,a=t.operationId;return function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.requestInterceptor,l=e.responseInterceptor,c=e.userFetch;return e.execute(ut({spec:e.spec,requestInterceptor:s,responseInterceptor:l,userFetch:c,pathName:r,method:n,parameters:o,operationId:a},i))}}},JI=We,YI=il.indexOf,ZI=Fh,pu=tt([].indexOf),zv=!!pu&&1/pu([1],1,-0)<0,QI=ZI("indexOf");JI({target:"Array",proto:!0,forced:zv||!QI},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return zv?pu(this,e,t)||0:YI(this,e,t)}});var XI=er("Array").indexOf,e_=Ft,t_=XI,uu=Array.prototype;const Uv=Me(function(e){var t=e.indexOf;return e===uu||e_(uu,e)&&t===uu.indexOf?t_:t});var r_=function(e,t,r){var n=r||{},a=n.encode||a_;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!vs.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!vs.test(o))throw new TypeError("argument val is invalid");var i,s=e+"="+o;if(n.maxAge!=null){var l=n.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(l)}if(n.domain){if(!vs.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!vs.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){var c=n.expires;if(i=c,!(n_.call(i)==="[object Date]"||i instanceof Date)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+c.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():n.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s},n_=Object.prototype.toString,vs=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a_(e){return encodeURIComponent(e)}function Mv(e){return Object.prototype.toString.call(e)==="[object Object]"}function Hv(e){var t,r;return Mv(e)!==!1&&((t=e.constructor)===void 0||Mv(r=t.prototype)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1)}const o_={body:function(e){var t=e.req,r=e.value;t.body=r},header:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},n!==void 0&&(t.headers[r.name]=n)},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},r===!1&&n.type==="boolean"&&(r="false"),r===0&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&r!==void 0){var a=n.name;t.query[a]=t.query[a]||{},t.query[a].allowEmptyValue=!0}},path:function(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.split("{".concat(n.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,n=e.parameter;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function bs(e,t){return co(t).call(t,"application/json")?typeof e=="string"?e:Pi(e):e.toString()}var i_=["accept","authorization","content-type"];const s_=Object.freeze(Object.defineProperty({__proto__:null,path:function(e){var t=e.req,r=e.value,n=e.parameter,a=n.name,o=n.style,i=n.explode,s=n.content;if(s){var l=Ve(s)[0];t.url=t.url.split("{".concat(a,"}")).join(ga(bs(r,l),{escape:!0}))}else{var c=xp({key:n.name,value:r,style:o||"simple",explode:i||!1,escape:!0});t.url=t.url.split("{".concat(a,"}")).join(c)}},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},n.content){var a=Ve(n.content)[0];t.query[n.name]=bs(r,a)}else if(r===!1&&(r="false"),r===0&&(r="0"),r){var o=n.style,i=n.explode,s=n.allowReserved;t.query[n.name]={value:r,serializationOption:{style:o,explode:i,allowReserved:s}}}else if(n.allowEmptyValue&&r!==void 0){var l=n.name;t.query[l]=t.query[l]||{},t.query[l].allowEmptyValue=!0}},header:function(e){var t=e.req,r=e.parameter,n=e.value;if(t.headers=t.headers||{},!(i_.indexOf(r.name.toLowerCase())>-1))if(r.content){var a=Ve(r.content)[0];t.headers[r.name]=bs(n,a)}else n!==void 0&&(t.headers[r.name]=xp({key:r.name,value:n,style:r.style||"simple",explode:r.explode!==void 0&&r.explode,escape:!1}))},cookie:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{};var a=lt(n);if(r.content){var o,i=Ve(r.content)[0];t.headers.Cookie=$e(o="".concat(r.name,"=")).call(o,bs(n,i))}else if(a!=="undefined"){var s=a==="object"&&!Array.isArray(n)&&r.explode?"":"".concat(r.name,"=");t.headers.Cookie=s+xp({key:r.name,value:n,escape:!1,style:r.style||"form",explode:r.explode!==void 0&&r.explode})}}},Symbol.toStringTag,{value:"Module"}));We({global:!0},{globalThis:Ae});const Wv=Me(Ae);var Vv=(Wv!==void 0?Wv:typeof self<"u"?self:window).btoa,l_=["http","fetch","spec","operationId","pathName","method","parameters","securities"],Gv=function(e){return Array.isArray(e)?e:[]},c_=iv("OperationNotFoundError",function(e,t,r){this.originalError=r,tr(this,t||{})}),p_={buildRequest:Kv};function Kv(e){var t,r,n=e.spec,a=e.operationId,o=e.responseContentType,i=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,h=e.userFetch,d=e.server,f=e.serverVariables,m=e.http,v=e.signal,w=e.parameters,x=e.parameterBuilders,p=kv(n);x||(x=p?s_:o_);var k={url:"",credentials:m&&m.withCredentials?"include":"same-origin",headers:{},cookies:{}};v&&(k.signal=v),s&&(k.requestInterceptor=s),l&&(k.responseInterceptor=l),h&&(k.userFetch=h);var $=Tj(n,a);if(!$)throw new c_("Operation ".concat(a," not found"));var C=$.operation,F=C===void 0?{}:C,O=$.method,U=$.pathName;if(k.url+=Jv({spec:n,scheme:i,contextUrl:c,server:d,serverVariables:f,pathName:U,method:O}),!a)return delete k.cookies,k;k.url+=U,k.method="".concat(O).toUpperCase(),w=w||{};var A=n.paths[U]||{};o&&(k.headers.accept=o);var T=function(E){var I={};E.forEach(function(X){I[X.in]||(I[X.in]={}),I[X.in][X.name]=X});var N=[];return Ve(I).forEach(function(X){Ve(I[X]).forEach(function(ve){N.push(I[X][ve])})}),N}($e(t=$e(r=[]).call(r,Gv(F.parameters))).call(t,Gv(A.parameters)));T.forEach(function(E){var I,N,X,ve,V=x[E.in];if(E.in==="body"&&E.schema&&E.schema.properties&&(I=w),(I=E&&E.name&&w[E.name])===void 0)I=E&&E.name&&w[$e(N="".concat(E.in,".")).call(N,E.name)];else if((X=E.name,ve=T,nr(ve).call(ve,function(Q){return Q.name===X})).length>1){var D;console.warn($e(D="Parameter '".concat(E.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(D,E.name,"' and the passed-in parameter values did not define an 'in' value."))}if(I!==null){if(E.default!==void 0&&I===void 0&&(I=E.default),I===void 0&&E.required&&!E.allowEmptyValue)throw new Error("Required parameter ".concat(E.name," is not provided"));if(p&&E.schema&&E.schema.type==="object"&&typeof I=="string")try{I=JSON.parse(I)}catch{throw new Error("Could not parse object parameter value string as JSON")}V&&V({req:k,parameter:E,value:I,operation:F,spec:n})}});var _=ut(ut({},e),{},{operation:F});if((k=p?function(E,I){var N,X,ve,V,D,Q,be,se,je,de,De,Ge,bt,Ct=E.operation,Ke=E.requestBody,or=E.securities,Dr=E.spec,dr=E.attachContentTypeForEmptyPayload,He=E.requestContentType;V=(ve=(N={request:I,securities:or,operation:Ct,spec:Dr}).securities)===void 0?{}:ve,Q=(D=N.operation)===void 0?{}:D,be=N.spec,se=ut({},X=N.request),je=V.authorized,de=je===void 0?{}:je,De=Q.security||be.security||[],Ge=de&&!!Ve(de).length,bt=Io(be,["components","securitySchemes"])||{},se.headers=se.headers||{},se.query=se.query||{},I=Ve(V).length&&Ge&&De&&(!Array.isArray(Q.security)||Q.security.length)?(De.forEach(function(Zt){Ve(Zt).forEach(function(Br){var hr=de[Br],gt=bt[Br];if(hr){var ir=hr.value||hr,Tr=gt.type;if(hr){if(Tr==="apiKey")gt.in==="query"&&(se.query[gt.name]=ir),gt.in==="header"&&(se.headers[gt.name]=ir),gt.in==="cookie"&&(se.cookies[gt.name]=ir);else if(Tr==="http"){if(/^basic$/i.test(gt.scheme)){var Bn,Nr=ir.username||"",Ea=ir.password||"",Ro=Vv($e(Bn="".concat(Nr,":")).call(Bn,Ea));se.headers.Authorization="Basic ".concat(Ro)}/^bearer$/i.test(gt.scheme)&&(se.headers.Authorization="Bearer ".concat(ir))}else if(Tr==="oauth2"||Tr==="openIdConnect"){var Ls,Lo=hr.token||{},Nn=Lo[gt["x-tokenName"]||"access_token"],ln=Lo.token_type;ln&&ln.toLowerCase()!=="bearer"||(ln="Bearer"),se.headers.Authorization=$e(Ls="".concat(ln," ")).call(Ls,Nn)}}}})}),se):X;var js=Ct.requestBody||{},sn=Ve(js.content||{}),Is=He&&sn.indexOf(He)>-1;if(Ke||dr){if(He&&Is)I.headers["Content-Type"]=He;else if(!He){var Po=sn[0];Po&&(I.headers["Content-Type"]=Po,He=Po)}}else He&&Is&&(I.headers["Content-Type"]=He);if(!E.responseContentType&&Ct.responses){var _s,Ps=nr(_s=Pm(Ct.responses)).call(_s,function(Zt){var Br=pr(Zt,2),hr=Br[0],gt=Br[1],ir=parseInt(hr,10);return ir>=200&&ir<300&&Hv(gt.content)}).reduce(function(Zt,Br){var hr=pr(Br,2)[1];return $e(Zt).call(Zt,Ve(hr.content))},[]);Ps.length>0&&(I.headers.accept=Ps.join(", "))}if(Ke)if(He){if(sn.indexOf(He)>-1)if(He==="application/x-www-form-urlencoded"||He==="multipart/form-data")if(lt(Ke)==="object"){var Rs=(js.content[He]||{}).encoding||{};I.form={},Ve(Ke).forEach(function(Zt){I.form[Zt]={value:Ke[Zt],encoding:Rs[Zt]||{}}})}else I.form=Ke;else I.body=Ke}else I.body=Ke;return I}(_,k):function(E,I){var N,X,ve,V,D,Q,be,se,je,de,De,Ge,bt,Ct,Ke,or,Dr,dr=E.spec,He=E.operation,js=E.securities,sn=E.requestContentType,Is=E.responseContentType,Po=E.attachContentTypeForEmptyPayload;if(Q=(D=(ve={request:I,securities:js,operation:He,spec:dr}).securities)===void 0?{}:D,se=(be=ve.operation)===void 0?{}:be,je=ve.spec,de=ut({},V=ve.request),De=Q.authorized,Ge=De===void 0?{}:De,bt=Q.specSecurity,Ct=bt===void 0?[]:bt,Ke=se.security||Ct,or=Ge&&!!Ve(Ge).length,Dr=je.securityDefinitions,de.headers=de.headers||{},de.query=de.query||{},(I=Ve(Q).length&&or&&Ke&&(!Array.isArray(se.security)||se.security.length)?(Ke.forEach(function(gt){Ve(gt).forEach(function(ir){var Tr=Ge[ir];if(Tr){var Bn=Tr.token,Nr=Tr.value||Tr,Ea=Dr[ir],Ro=Ea.type,Ls=Ea["x-tokenName"]||"access_token",Lo=Bn&&Bn[Ls],Nn=Bn&&Bn.token_type;if(Tr){if(Ro==="apiKey"){var ln=Ea.in==="query"?"query":"headers";de[ln]=de[ln]||{},de[ln][Ea.name]=Nr}else if(Ro==="basic")if(Nr.header)de.headers.authorization=Nr.header;else{var Pb,Y_=Nr.username||"",Z_=Nr.password||"";Nr.base64=Vv($e(Pb="".concat(Y_,":")).call(Pb,Z_)),de.headers.authorization="Basic ".concat(Nr.base64)}else if(Ro==="oauth2"&&Lo){var Rb;Nn=Nn&&Nn.toLowerCase()!=="bearer"?Nn:"Bearer",de.headers.authorization=$e(Rb="".concat(Nn," ")).call(Rb,Lo)}}}})}),de):V).body||I.form||Po)if(sn)I.headers["Content-Type"]=sn;else if(Array.isArray(He.consumes)){var _s=pr(He.consumes,1);I.headers["Content-Type"]=_s[0]}else if(Array.isArray(dr.consumes)){var Ps=pr(dr.consumes,1);I.headers["Content-Type"]=Ps[0]}else He.parameters&&nr(N=He.parameters).call(N,function(gt){return gt.type==="file"}).length?I.headers["Content-Type"]="multipart/form-data":He.parameters&&nr(X=He.parameters).call(X,function(gt){return gt.in==="formData"}).length&&(I.headers["Content-Type"]="application/x-www-form-urlencoded");else if(sn){var Rs,Zt,Br=He.parameters&&nr(Rs=He.parameters).call(Rs,function(gt){return gt.in==="body"}).length>0,hr=He.parameters&&nr(Zt=He.parameters).call(Zt,function(gt){return gt.in==="formData"}).length>0;(Br||hr)&&(I.headers["Content-Type"]=sn)}return!Is&&Array.isArray(He.produces)&&He.produces.length>0&&(I.headers.accept=He.produces.join(", ")),I}(_,k)).cookies&&Ve(k.cookies).length){var B=Ve(k.cookies).reduce(function(E,I){var N=k.cookies[I];return E+(E?"&":"")+r_(I,N)},"");k.headers.Cookie=B}return k.cookies&&delete k.cookies,py(k),k}var du=function(e){return e?e.replace(/\W/g,""):null};function Jv(e){return kv(e.spec)?function(t){var r=t.spec,n=t.pathName,a=t.method,o=t.server,i=t.contextUrl,s=t.serverVariables,l=s===void 0?{}:s,c=Io(r,["paths",n,(a||"").toLowerCase(),"servers"])||Io(r,["paths",n,"servers"])||Io(r,["servers"]),h="",d=null;if(o&&c&&c.length){var f=Ze(c).call(c,function(v){return v.url});f.indexOf(o)>-1&&(h=o,d=c[f.indexOf(o)])}if(!h&&c&&c.length){h=c[0].url;var m=pr(c,1);d=m[0]}return h.indexOf("{")>-1&&function(v){for(var w,x=[],p=/{([^}]+)}/g;w=p.exec(v);)x.push(w[1]);return x}(h).forEach(function(v){if(d.variables&&d.variables[v]){var w=d.variables[v],x=l[v]||w.default,p=new RegExp("{".concat(v,"}"),"g");h=h.replace(p,x)}}),function(){var v,w,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",k=x&&p?Gt.parse(Gt.resolve(p,x)):Gt.parse(x),$=Gt.parse(p),C=du(k.protocol)||du($.protocol)||"",F=k.host||$.host,O=k.pathname||"";return(v=C&&F?$e(w="".concat(C,"://")).call(w,F+O):O)[v.length-1]==="/"?ur(v).call(v,0,-1):v}(h,i)}(e):function(t){var r,n,a=t.spec,o=t.scheme,i=t.contextUrl,s=i===void 0?"":i,l=Gt.parse(s),c=Array.isArray(a.schemes)?a.schemes[0]:null,h=o||c||du(l.protocol)||"http",d=a.host||l.host||"",f=a.basePath||"";return(r=h&&d?$e(n="".concat(h,"://")).call(n,d+f):f)[r.length-1]==="/"?ur(r).call(r,0,-1):r}(e)}function mt(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e=="string"?r.url=e:r=e,!(this instanceof mt))return new mt(r);tr(this,r);var n=this.resolve().then(function(){return t.disableInterfaces||tr(t,mt.makeApisTagOperation(t)),t});return n.client=this,n}function Yv(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}mt.http=Vi,mt.makeHttp=function(e,t,r){return r=r||function(n){return n},t=t||function(n){return n},function(n){return typeof n=="string"&&(n={url:n}),wp.mergeInQueryOrForm(n),n=t(n),r(e(n))}}.bind(null,mt.http),mt.resolve=Tv,mt.resolveSubtree=function(e,t){return cu.apply(this,arguments)},mt.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,a=e.operationId,o=e.pathName,i=e.method,s=e.parameters,l=e.securities,c=function(f,m){if(f==null)return{};var v,w,x=function(k,$){if(k==null)return{};var C,F,O={},U=kd(k);for(F=0;F<U.length;F++)C=U[F],Uv($).call($,C)>=0||(O[C]=k[C]);return O}(f,m);if(hi){var p=hi(f);for(w=0;w<p.length;w++)v=p[w],Uv(m).call(m,v)>=0||Object.prototype.propertyIsEnumerable.call(f,v)&&(x[v]=f[v])}return x}(e,l_),h=t||r||Vi;o&&i&&!a&&(a=Sv(o,i));var d=p_.buildRequest(ut({spec:n,operationId:a,parameters:s,securities:l,http:h},c));return d.body&&(Hv(d.body)||Array.isArray(d.body))&&(d.body=Pi(d.body)),h(d)},mt.serializeRes=ay,mt.serializeHeaders=oy,mt.clearCache=function(){Ln.refs.clearCache()},mt.makeApisTagOperation=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=KI(e);return{apis:GI({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},mt.buildRequest=Kv,mt.helpers={opId:fs},mt.getBaseUrl=Jv,mt.prototype={http:Vi,execute:function(e){return this.applyDefaults(),mt.execute(ut({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:typeof this.url=="string"?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt.resolve(ut({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},t)).then(function(r){return e.originalSpec=e.spec,e.spec=r.spec,e.errors=r.errors,e})}},mt.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&rf(t).call(t,"http")){var r=Gt.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}},mt.helpers;const et={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(e.length===0)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:Yv,sanitiseAll:function(e){return Yv(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,(t,r)=>r.toUpperCase())},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r=null){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch{n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map(a=>({[a]:e(t[a],r)})))}};function u_(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}const d_=function e(t,r,n,a){var o,i,s;if(n.depth===void 0&&(n=u_()),t==null||(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&t.allOf.length===1&&((o=t={...t.allOf[0],...t})==null||delete o.allOf),t!=null&&t.anyOf&&Array.isArray(t.anyOf)&&t.anyOf.length===1&&((i=t={...t.anyOf[0],...t})==null||delete i.anyOf),t!=null&&t.oneOf&&Array.isArray(t.oneOf)&&t.oneOf.length===1&&((s=t={...t.oneOf[0],...t})==null||delete s.oneOf)),a(t,r,n),n.seen.has(t)))return t;if(typeof t=="object"&&t!==null&&n.seen.set(t,!0),n.top=!1,n.depth++,(t==null?void 0:t.items)!==void 0&&(n.property="items",e(t.items,t,n,a)),t!=null&&t.additionalItems&&typeof t.additionalItems=="object"&&(n.property="additionalItems",e(t.additionalItems,t,n,a)),t!=null&&t.additionalProperties&&typeof t.additionalProperties=="object"&&(n.property="additionalProperties",e(t.additionalProperties,t,n,a)),t==null?void 0:t.properties)for(const l in t.properties){const c=t.properties[l];n.property=`properties/${l}`,e(c,t,n,a)}if(t!=null&&t.patternProperties)for(const l in t.patternProperties){const c=t.patternProperties[l];n.property=`patternProperties/${l}`,e(c,t,n,a)}if(t!=null&&t.allOf)for(const l in t.allOf){const c=t.allOf[l];n.property=`allOf/${l}`,e(c,t,n,a)}if(t!=null&&t.anyOf)for(const l in t.anyOf){const c=t.anyOf[l];n.property=`anyOf/${l}`,e(c,t,n,a)}if(t!=null&&t.oneOf)for(const l in t.oneOf){const c=t.oneOf[l];n.property=`oneOf/${l}`,e(c,t,n,a)}return t!=null&&t.not&&(n.property="not",e(t.not,t,n,a)),n.depth--,t};function hu(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),typeof e!="object")return;const n=t.path;for(const a in e){if(t.key=a,t.path=`${t.path}/${encodeURIComponent(a)}`,t.identityPath=t.seen.get(e[a]),t.identity=t.identityPath!==void 0,e.hasOwnProperty(a)&&r(e,a,t),typeof e[a]=="object"&&!t.identity){t.identityDetection&&!Array.isArray(e[a])&&e[a]!==null&&t.seen.set(e[a],t.path);const o={};o.parent=e,o.path=t.path,o.depth=t.depth?t.depth+1:1,o.pkey=a,o.payload=t.payload,o.seen=t.seen,o.identity=!1,o.identityDetection=t.identityDetection,hu(e[a],o,r)}t.path=n}}let Zv;function fu(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function xs(e,t){d_(e,{},{},(r,n)=>{(function(a){if(a["x-required"]&&Array.isArray(a["x-required"])&&(a.required||(a.required=[]),a.required=a.required.concat(a["x-required"]),delete a["x-required"]),a["x-anyOf"]&&(a.anyOf=a["x-anyOf"],delete a["x-anyOf"]),a["x-oneOf"]&&(a.oneOf=a["x-oneOf"],delete a["x-oneOf"]),a["x-not"]&&(a.not=a["x-not"],delete a["x-not"]),typeof a["x-nullable"]=="boolean"&&(a.nullable=a["x-nullable"],delete a["x-nullable"]),typeof a["x-discriminator"]=="object"&&typeof a["x-discriminator"].propertyName=="string"){a.discriminator=a["x-discriminator"],delete a["x-discriminator"];for(const o in a.discriminator.mapping){const i=a.discriminator.mapping[o];i.startsWith("#/definitions/")&&(a.discriminator.mapping[o]=i.replace("#/definitions/","#/components/schemas/"))}}})(r),function(a,o,i){if(a.nullable&&i.patches++,a.discriminator&&typeof a.discriminator=="string"&&(a.discriminator={propertyName:a.discriminator}),a.items&&Array.isArray(a.items)&&(a.items.length===0?a.items={}:a.items.length===1?a.items=a.items[0]:a.items={anyOf:a.items}),a.type&&Array.isArray(a.type)){if(i.patches++,i.warnings.push("(Patchable) schema type must not be an array"),a.type.length===0)delete a.type;else{a.oneOf||(a.oneOf=[]);for(const s of a.type){const l={};if(s==="null")a.nullable=!0;else{l.type=s;for(const c of et.arrayProperties)a.prop!==void 0&&(l[c]=a[c],delete a[c])}l.type&&a.oneOf.push(l)}delete a.type,a.oneOf.length===0?delete a.oneOf:a.oneOf.length<2&&(a.type=a.oneOf[0].type,Object.keys(a.oneOf[0]).length>1&&(i.patches++,i.warnings.push("Lost properties from oneOf")),delete a.oneOf)}a.type&&Array.isArray(a.type)&&a.type.length===1&&(a.type=a.type[0])}a.type&&a.type==="null"&&(delete a.type,a.nullable=!0),a.type!=="array"||a.items||(a.items={}),a.type==="file"&&(a.type="string",a.format="binary"),typeof a.required=="boolean"&&(a.required&&a.name&&(o.required===void 0&&(o.required=[]),Array.isArray(o.required)&&o.required.push(a.name)),delete a.required),a.xml&&typeof a.xml.namespace=="string"&&(a.xml.namespace||delete a.xml.namespace),a.allowEmptyValue&&(delete a.allowEmptyValue,i.patches++,i.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(r,n,t)})}function Qv(e){for(const t in e)for(const r in e[t]){const n=et.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function h_(e,t){if(e.type==="basic"&&(e.type="http",e.scheme="basic"),e.type==="oauth2"){const r={};let n=e.flow;e.flow==="application"&&(n="clientCredentials"),e.flow==="accessCode"&&(n="authorizationCode"),typeof e.authorizationUrl=="string"&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),typeof e.tokenUrl=="string"&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function Xv(e){return e&&!e["x-s2o-delete"]}function eb(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&e.items.type!=="array"){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}e.type==="array"?(e.collectionFormat==="ssv"?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):e.collectionFormat==="pipes"?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):e.collectionFormat==="multi"?e.explode=!0:e.collectionFormat==="tsv"?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const r of et.parameterTypeProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r]);for(const r of et.arrayProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r])}function ws(e,t,r,n,a,o,i){const s={};let l,c=!0;t&&t.consumes&&typeof t.consumes=="string"&&(t.consumes=[t.consumes],i.patches++,i.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(o.consumes)||delete o.consumes;const h=((t?t.consumes:null)||o.consumes||[]).filter(et.uniqueOnly);if(e&&(e.name||e.in)){typeof e["x-deprecated"]=="boolean"&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),e["x-example"]!==void 0&&(e.example=e["x-example"],delete e["x-example"]),e.in==="body"||e.type||(e.type="string",i.patches++,i.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),e.type==="file"&&(e["x-s2o-originalType"]=e.type,l=e.type),e.description===null&&delete e.description;let d=e.collectionFormat;if(e.type!=="array"||d||(d="csv"),d&&(e.type!=="array"&&(delete e.collectionFormat,i.patches++,i.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),d!=="csv"||e.in!=="query"&&e.in!=="cookie"||(e.style="form",e.explode=!1),d!=="csv"||e.in!=="path"&&e.in!=="header"||(e.style="simple"),d==="ssv"&&(e.in==="query"?e.style="spaceDelimited":i.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),d==="pipes"&&(e.in==="query"?e.style="pipeDelimited":i.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),d==="multi"&&(e.explode=!0),d==="tsv"&&(i.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&e.type!=="body"&&e.in!=="formData")if(e.items&&e.schema)i.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&i.patches++,e.schema&&typeof e.schema=="object"||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,hu(e.schema.items,null,(f,m)=>{m==="collectionFormat"&&typeof f[m]=="string"&&(d&&f[m]!==d&&i.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete f[m])}));for(const f of et.parameterTypeProperties)e[f]!==void 0&&(e.schema[f]=e[f]),delete e[f]}e.schema&&xs(e.schema,i),e["x-ms-skip-url-encoding"]&&e.in==="query"&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&e.in==="formData"){c=!1,s.content={};let d="application/x-www-form-urlencoded";if(h.length&&h.indexOf("multipart/form-data")>=0&&(d="multipart/form-data"),s.content[d]={},e.schema)s.content[d].schema=e.schema;else{s.content[d].schema={},s.content[d].schema.type="object",s.content[d].schema.properties={},s.content[d].schema.properties[e.name]={};const f=s.content[d].schema,m=s.content[d].schema.properties[e.name];e.description&&(m.description=e.description),e.example&&(m.example=e.example),e.type&&(m.type=e.type);for(const v of et.parameterTypeProperties)e[v]!==void 0&&(m[v]=e[v]);e.required===!0&&(f.required||(f.required=[]),f.required.push(e.name),s.required=!0),e.default!==void 0&&(m.default=e.default),m.properties&&(m.properties=e.properties),e.allOf&&(m.allOf=e.allOf),e.type==="array"&&e.items&&(m.items=e.items,m.items.collectionFormat&&delete m.items.collectionFormat),l!=="file"&&e["x-s2o-originalType"]!=="file"||(m.type="string",m.format="binary"),fu(e,m)}}else e&&e.type==="file"&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",fu(e,s));if(e&&e.in==="body"){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?et.sanitiseAll(t.operationId):"")+et.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),h.length||h.push("application/json");for(const d of h)s.content[d]={},s.content[d].schema=et.clone(e.schema||{}),xs(s.content[d].schema,i);fu(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const d=t.operationId||a;i.warnings.push(`Operation ${d} has multiple requestBodies`)}else t.requestBody||(t=function(d,f){const m={};for(const v of Object.keys(d))m[v]=d[v],v==="parameters"&&(m.requestBody={},f.rbname&&(m[f.rbname]=""));return m.requestBody={},m}(t,i),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=et.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const d of et.parameterTypeProperties)delete e[d];e.in!=="path"||e.required!==void 0&&e.required===!0||(e.required=!0,i.patches++,i.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${a}]`))}return t}function tb(e,t,r,n){if(!e)return!1;if(e.description||typeof e!="object"||Array.isArray(e)||(n.patches++,n.warnings.push("(Patchable) response.description is mandatory")),e.schema!==void 0){xs(e.schema,n),t&&t.produces&&typeof t.produces=="string"&&(t.produces=[t.produces],n.patches++,n.warnings.push("(Patchable) operation.produces must be an array")),r.produces&&!Array.isArray(r.produces)&&delete r.produces;const a=((t?t.produces:null)||r.produces||[]).filter(et.uniqueOnly);a.length||a.push("*/*"),e.content={};for(const o of a){if(e.content[o]={},e.content[o].schema=et.clone(e.schema),e.examples&&e.examples[o]){const i={};i.value=e.examples[o],e.content[o].examples={},e.content[o].examples.response=i,delete e.examples[o]}e.content[o].schema.type==="file"&&(e.content[o].schema={type:"string",format:"binary"})}delete e.schema}for(const a in e.examples)e.content||(e.content={}),e.content[a]||(e.content[a]={}),e.content[a].examples={},e.content[a].examples.response={},e.content[a].examples.response.value=e.examples[a];if(delete e.examples,e.headers)for(const a in e.headers)a.toLowerCase()==="status code"?(delete e.headers[a],n.patches++,n.warnings.push('(Patchable) "Status Code" is not a valid header')):eb(e.headers[a],n)}function rb(e,t,r,n,a){for(const o in e){const i=e[o];i&&i["x-trace"]&&typeof i["x-trace"]=="object"&&(i.trace=i["x-trace"],delete i["x-trace"]),i&&i["x-summary"]&&typeof i["x-summary"]=="string"&&(i.summary=i["x-summary"],delete i["x-summary"]),i&&i["x-description"]&&typeof i["x-description"]=="string"&&(i.description=i["x-description"],delete i["x-description"]),i&&i["x-servers"]&&Array.isArray(i["x-servers"])&&(i.servers=i["x-servers"],delete i["x-servers"]);for(const s in i)if(et.httpMethods.indexOf(s)>=0||s==="x-amazon-apigateway-any-method"){let l=i[s];if(l&&l.parameters&&Array.isArray(l.parameters)){if(i.parameters)for(const c of i.parameters)l.parameters.find(h=>h.name===c.name&&h.in===c.in)||c.in!=="formData"&&c.in!=="body"&&c.type!=="file"||(l=ws(c,l,i,s,o,a,r));for(const c of l.parameters)l=ws(c,l,i,s,`${s}: ${o}`,a,r);l.parameters&&(l.parameters=l.parameters.filter(Xv))}if(l&&l.security&&Qv(l.security),typeof l=="object"){if(!l.responses){const c={description:"Default response"};l.responses={default:c}}for(const c in l.responses)tb(l.responses[c],l,a,r)}if(l&&l["x-servers"]&&Array.isArray(l["x-servers"]))l.servers=l["x-servers"],delete l["x-servers"];else if(l&&l.schemes&&l.schemes.length){for(const c of l.schemes)if((!a.schemes||a.schemes.indexOf(c)<0)&&(l.servers||(l.servers=[]),Array.isArray(a.servers)))for(const h of a.servers){const d=et.clone(h);l.servers.push(d)}}if(l){if(delete l.consumes,delete l.produces,delete l.schemes,l["x-ms-examples"]){for(const c in l["x-ms-examples"]){const h=l["x-ms-examples"][c],d=et.sanitiseAll(c);if(h.parameters)for(const f in h.parameters){const m=h.parameters[f];for(const v of(l.parameters||[]).concat(i.parameters||[]))v.name!==f||v.example||(v.examples||(v.examples={}),v.examples[c]={value:m})}if(h.responses)for(const f in h.responses){if(h.responses[f].headers)for(const m in h.responses[f].headers){const v=h.responses[f].headers[m];for(const w in l.responses[f].headers)w===m&&(l.responses[f].headers[w].example=v)}if(h.responses[f].body&&(a.components.examples[d]={value:et.clone(h.responses[f].body)},l.responses[f]&&l.responses[f].content))for(const m in l.responses[f].content){const v=l.responses[f].content[m];v.examples||(v.examples={}),v.examples[c]={$ref:`#/components/examples/${d}`}}}}delete l["x-ms-examples"]}if(l.parameters&&l.parameters.length===0&&delete l.parameters,l.requestBody){const c=l.operationId?et.sanitiseAll(l.operationId):et.camelize(et.sanitiseAll(s+o)),h=et.sanitise(l.requestBody["x-s2o-name"]||c||"");delete l.requestBody["x-s2o-name"];const d=JSON.stringify(l.requestBody),f=et.createHash(d);if(!n[f]){const v={};v.name=h,v.body=l.requestBody,v.refs=[],n[f]=v}const m=`#/${t}/${encodeURIComponent(o)}/${s}/requestBody`;n[f].refs.push(m)}}}if(i&&i.parameters){for(const s in i.parameters)ws(i.parameters[s],null,i,null,o,a,r);Array.isArray(i.parameters)&&(i.parameters=i.parameters.filter(Xv))}}}function nb(e){return e&&e.url&&typeof e.url=="string"&&(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e}function ab(e,t){e.info!==void 0&&e.info!==null||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),(typeof e.info!="object"||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(e.info.title===void 0&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),e.info.version===void 0?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):typeof e.info.version!="string"&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function ob(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function f_(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&typeof e.openapi=="string"&&e.openapi.startsWith("3."))return t.openapi=et.circularClone(e),ab(t.openapi,t),ob(t.openapi,t),t;if(e.swagger!=="2.0")return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=et.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,hu(t.openapi,{},(r,n,a)=>{r[n]===null&&!n.startsWith("x-")&&n!=="default"&&a.path.indexOf("/example")<0&&delete r[n]}),e.host)(e.schemes||[]).forEach(r=>{const n={},a=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${a}`,nb(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)});else if(e.basePath){const r={};r.url=e.basePath,nb(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const a=n.url.match(/\{\w+\}/g);for(const o in r.parameters){const i=r.parameters[o];o.startsWith("x-")||(delete i.required,delete i.type,delete i.in,i.default===void 0&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=a[o].replace("{","").replace("}","")),n.variables[i.name]=i,delete i.name)}t.openapi.servers||(t.openapi.servers=[]),r.useSchemePrefix===!1?t.openapi.servers.push(n):e.schemes.forEach(o=>{t.openapi.servers.push({...n,url:`${o}://${n.url}`})}),delete t.openapi["x-ms-parameterized-host"]}return ab(t.openapi,t),ob(t.openapi,t),typeof t.openapi.consumes=="string"&&(t.openapi.consumes=[t.openapi.consumes]),typeof t.openapi.produces=="string"&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(r){const n=r.openapi,a={};Zv={schemas:{}},n.security&&Qv(n.security);for(const o in n.components.securitySchemes){const i=et.sanitise(o);if(o!==i){if(n.components.securitySchemes[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised securityScheme name ${i}`,pointer:`/components/securitySchemes/${i}`}),r;n.components.securitySchemes[i]=n.components.securitySchemes[o],delete n.components.securitySchemes[o]}h_(n.components.securitySchemes[i],r)}for(const o in n.components.schemas){const i=et.sanitiseAll(o);let s=0;if(o!==i){for(;n.components.schemas[i+s];)s=s?++s:2;n.components.schemas[i+s]=n.components.schemas[o],delete n.components.schemas[o]}Zv.schemas[o]=i+s,xs(n.components.schemas[`${i}${s}`],r)}for(const o in n.components.parameters){const i=et.sanitise(o);if(o!==i){if(n.components.parameters[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised parameter name ${i}`,pointer:`/components/parameters/${i}`}),r;n.components.parameters[i]=n.components.parameters[o],delete n.components.parameters[o]}ws(n.components.parameters[i],null,null,null,i,n,r)}for(const o in n.components.responses){const i=et.sanitise(o);if(o!==i){if(n.components.responses[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised response name ${i}`,pointer:`/components/responses/${i}`}),r;n.components.responses[i]=n.components.responses[o],delete n.components.responses[o]}const s=n.components.responses[i];if(tb(s,null,n,r),s.headers)for(const l in s.headers)l.toLowerCase()==="status code"?(delete s.headers[l],r.patches++,r.warnings.push('(Patchable) "Status Code" is not a valid header')):eb(s.headers[l],r)}for(const o in n.components.requestBodies){const i=n.components.requestBodies[o],s=JSON.stringify(i),l=et.createHash(s),c={};c.name=o,c.body=i,c.refs=[],a[l]=c}rb(n.paths,"paths",r,a,n),n["x-ms-paths"]&&rb(n["x-ms-paths"],"x-ms-paths",r,a,n);for(const o in n.components.parameters)n.components.parameters[o]["x-s2o-delete"]&&delete n.components.parameters[o];return delete n.consumes,delete n.produces,delete n.schemes,n.components.requestBodies={},n.components.responses&&Object.keys(n.components.responses).length===0&&delete n.components.responses,n.components.parameters&&Object.keys(n.components.parameters).length===0&&delete n.components.parameters,n.components.examples&&Object.keys(n.components.examples).length===0&&delete n.components.examples,n.components.requestBodies&&Object.keys(n.components.requestBodies).length===0&&delete n.components.requestBodies,n.components.securitySchemes&&Object.keys(n.components.securitySchemes).length===0&&delete n.components.securitySchemes,n.components.headers&&Object.keys(n.components.headers).length===0&&delete n.components.headers,n.components.schemas&&Object.keys(n.components.schemas).length===0&&delete n.components.schemas,n.components&&Object.keys(n.components).length===0&&delete n.components,r}(t)}function m_(e){return e.ok&&e.text&&e.parseError&&e.parseError.name==="YAMLException"&&(!e.headers["content-type"]||e.headers["content-type"].match("text/plain"))&&(e.body=e.text),e}const ib=function(e){return new Promise(async t=>{try{const r=await mt.resolve(e,m_);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const n=f_(r.spec);n.errors&&n.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=n.errors),n.warnings&&n.warnings.length>0&&(r.warnings=n.warnings),r.resolvedSpec=r.spec,r.spec=n.openapi,t(r)}}catch(r){t(r)}})};async function mu(e,t=!1,r=!1,n="",a="",o="",i="",s=""){var l,c;let h;try{var d,f;let O;if(this.requestUpdate(),O=typeof e=="string"?await ib({url:e,allowMetaPatches:!1}):await ib({spec:e,allowMetaPatches:!1}),await _a(0),(d=O.resolvedSpec)!==null&&d!==void 0&&d.jsonSchemaViewer&&(f=O.resolvedSpec)!==null&&f!==void 0&&f.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:O.resolvedSpec}}));const U=Object.entries(O.resolvedSpec.schemaAndExamples).map(A=>({show:!0,expanded:!0,selectedExample:null,name:A[0],elementId:A[0].replace(Ia,"-"),...A[1]}));return{specLoadError:!1,isSpecLoading:!1,info:O.resolvedSpec.info,schemaAndExamples:U}}var m,v,w,x;if(!O.spec||!(O.spec.components||O.spec.info||O.spec.servers||O.spec.tags||O.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",O),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:(m=O.response)!==null&&m!==void 0&&m.url?`${(v=O.response)===null||v===void 0?void 0:v.url} ┃ ${(w=O.response)===null||w===void 0?void 0:w.status}  ${(x=O.response)===null||x===void 0?void 0:x.statusText}`:"Unable to load the Spec",version:" "},tags:[]};h=O.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:h}}))}catch(O){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",O)}const p=function(O,U,A=!1,T=!1){const _=["get","put","post","delete","patch","head","options"],B=O.tags&&Array.isArray(O.tags)?O.tags.map(N=>({show:!0,elementId:`tag--${N.name.replace(Ia,"-")}`,name:N.name,description:N.description||"",headers:N.description?gu(N.description):[],paths:[],expanded:N["x-tag-expanded"]!==!1})):[],E=O.paths||{};if(O.webhooks)for(const[N,X]of Object.entries(O.webhooks))X._type="webhook",E[N]=X;for(const N in E){const X=E[N].parameters,ve={servers:E[N].servers||[],parameters:E[N].parameters||[]},V=E[N]._type==="webhook";_.forEach(D=>{if(E[N][D]){const Q=O.paths[N][D],be=Q.tags||[];if(be.length===0)if(A){const se=N.replace(/^\/+|\/+$/g,""),je=se.indexOf("/");je===-1?be.push(se):be.push(se.substr(0,je))}else be.push("General ⦂");be.forEach(se=>{let je,de;var De,Ge;O.tags&&(de=O.tags.find(Ke=>Ke.name.toLowerCase()===se.toLowerCase())),je=B.find(Ke=>Ke.name===se),je||(je={show:!0,elementId:`tag--${se.replace(Ia,"-")}`,name:se,description:((De=de)===null||De===void 0?void 0:De.description)||"",headers:(Ge=de)!==null&&Ge!==void 0&&Ge.description?gu(de.description):[],paths:[],expanded:!de||de["x-tag-expanded"]!==!1},B.push(je));let bt=(Q.summary||Q.description||`${D.toUpperCase()} ${N}`).trim();bt.length>100&&([bt]=bt.split(/[.|!|?]\s|[\r?\n]/));let Ct=[];if(Ct=X?Q.parameters?X.filter(Ke=>{if(!Q.parameters.some(or=>Ke.name===or.name&&Ke.in===or.in))return Ke}).concat(Q.parameters):X.slice(0):Q.parameters?Q.parameters.slice(0):[],Q.callbacks)for(const[Ke,or]of Object.entries(Q.callbacks)){const Dr=Object.entries(or).filter(dr=>typeof dr[1]=="object")||[];Q.callbacks[Ke]=Object.fromEntries(Dr)}je.paths.push({show:!0,expanded:!1,isWebhook:V,expandedAtLeastOnce:!1,summary:Q.summary||"",description:Q.description||"",externalDocs:Q.externalDocs,shortSummary:bt,method:D,path:N,operationId:Q.operationId,elementId:`${D}-${N.replace(Ia,"-")}`,servers:Q.servers?ve.servers.concat(Q.servers):ve.servers,parameters:Ct,requestBody:Q.requestBody,responses:Q.responses,callbacks:Q.callbacks,deprecated:Q.deprecated,security:Q.security,xBadges:Q["x-badges"]||void 0,xCodeSamples:Q["x-codeSamples"]||Q["x-code-samples"]||""})})}})}const I=B.filter(N=>N.paths&&N.paths.length>0);return I.forEach(N=>{U==="method"?N.paths.sort((X,ve)=>_.indexOf(X.method).toString().localeCompare(_.indexOf(ve.method))):U==="summary"?N.paths.sort((X,ve)=>X.shortSummary.localeCompare(ve.shortSummary)):U==="path"&&N.paths.sort((X,ve)=>X.path.localeCompare(ve.path)),N.firstPathId=N.paths[0].elementId}),T?I.sort((N,X)=>N.name.localeCompare(X.name)):I}(h,n,t,r),k=function(O){if(!O.components)return[];const U=[];for(const A in O.components){const T=[];for(const I in O.components[A]){const N={show:!0,id:`${A.toLowerCase()}-${I.toLowerCase()}`.replace(Ia,"-"),name:I,component:O.components[A][I]};T.push(N)}let _=A,B=A;switch(A){case"schemas":B="Schemas",_="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":B="Responses",_="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":B="Parameters",_="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":B="Examples",_="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":B="Request Bodies",_="Describes common request bodies that are used across the API operations.";break;case"headers":B="Headers",_='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":B="Security Schemes",_="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":B="Links",_="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":B="Callbacks",_="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:B=A,_=A}const E={show:!0,name:B,description:_,subComponents:T};U.push(E)}return U||[]}(h),$=(l=h.info)!==null&&l!==void 0&&l.description?gu(h.info.description):[],C=[];if((c=h.components)!==null&&c!==void 0&&c.securitySchemes){const O=new Set;Object.entries(h.components.securitySchemes).forEach(U=>{if(!O.has(U[0])){O.add(U[0]);const A={securitySchemeId:U[0],...U[1]};A.value="",A.finalKeyValue="",U[1].type==="apiKey"||U[1].type==="http"?(A.in=U[1].in||"header",A.name=U[1].name||"Authorization",A.user="",A.password=""):U[1].type==="oauth2"&&(A.in="header",A.name="Authorization",A.clientId="",A.clientSecret=""),C.push(A)}})}a&&o&&i&&C.push({securitySchemeId:cn,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:a,in:o,value:i,finalKeyValue:i}),C.forEach(O=>{O.type==="http"?O.typeDisplay=O.scheme==="basic"?"HTTP Basic":"HTTP Bearer":O.type==="apiKey"?O.typeDisplay=`API Key (${O.name})`:O.type==="oauth2"?O.typeDisplay=`OAuth (${O.securitySchemeId})`:O.typeDisplay=O.type||"None"});let F=[];return h.servers&&Array.isArray(h.servers)?(h.servers.forEach(O=>{let U=O.url.trim();U.startsWith("http")||U.startsWith("//")||U.startsWith("{")||window.location.origin.startsWith("http")&&(O.url=window.location.origin+O.url,U=O.url),O.variables&&Object.entries(O.variables).forEach(A=>{const T=new RegExp(`{${A[0]}}`,"g");U=U.replace(T,A[1].default||""),A[1].value=A[1].default||""}),O.computedUrl=U}),s&&h.servers.push({url:s,computedUrl:s})):s?h.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?h.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:h.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],F=h.servers,{specLoadError:!1,isSpecLoading:!1,info:h.info,infoDescriptionHeaders:$,tags:p,components:k,externalDocs:h.externalDocs,securitySchemes:C,servers:F}}function gu(e){return le.lexer(e).filter(r=>r.type==="heading"&&r.depth<=2)||[]}const sb=1,g_=2,lb=3,cb=4,yu=e=>(...t)=>({_$litDirective$:e,values:t});class vu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}class bu extends vu{constructor(t){if(super(t),this.it=Ue,t.type!==g_)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ue||t==null)return this._t=void 0,this.it=t;if(t===Qe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}bu.directiveName="unsafeHTML",bu.resultType=1;const ze=yu(bu);var pb=z(764).lW;const ub="rapidoc";function Fn(e,t="",r="",n=""){var a,o;const i=(a=this.resolvedSpec.securitySchemes)===null||a===void 0?void 0:a.find(c=>c.securitySchemeId===e);if(!i)return!1;let s="";if(((o=i.scheme)===null||o===void 0?void 0:o.toLowerCase())==="basic")t&&(s=`Basic ${pb.from(`${t}:${r}`,"utf8").toString("base64")}`);else if(n){var l;i.value=n,s=`${((l=i.scheme)===null||l===void 0?void 0:l.toLowerCase())==="bearer"?"Bearer ":""}${n}`}return!!s&&(i.finalKeyValue=s,this.requestUpdate(),!0)}function xu(){var e;(e=this.resolvedSpec.securitySchemes)===null||e===void 0||e.forEach(t=>{t.user="",t.password="",t.value="",t.finalKeyValue=""}),this.requestUpdate()}function wu(){return JSON.parse(localStorage.getItem(ub))||{}}function db(e){localStorage.setItem(ub,JSON.stringify(e))}function y_(){const e=wu.call(this);Object.values(e).forEach(t=>{Fn.call(this,t.securitySchemeId,t.username,t.password,t.value)})}function hb(e){let t="";const r=this.resolvedSpec.securitySchemes.find(n=>n.securitySchemeId===e);if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&r.type==="http"&&r.scheme.toLowerCase()==="basic"){const a=n.querySelector(".api-key-user").value.trim(),o=n.querySelector(".api-key-password").value.trim();Fn.call(this,e,a,o)}else t=n.querySelector(".api-key-input").value.trim(),Fn.call(this,e,"","",t);if(this.persistAuth==="true"){const a=wu.call(this);a[e]=r,db.call(this,a)}}}}function fb(e,t,r="Bearer"){const n=this.resolvedSpec.securitySchemes.find(a=>a.securitySchemeId===e);n.finalKeyValue=`${r.toLowerCase()==="bearer"?"Bearer":r.toLowerCase()==="mac"?"MAC":r} ${t}`,this.requestUpdate()}async function $u(e,t,r,n,a,o,i,s,l="header",c=null,h=null,d=null){const f=s?s.querySelector(".oauth-resp-display"):void 0,m=new URLSearchParams,v=new Headers;m.append("grant_type",a),a==="authorization_code"&&(m.append("client_id",t),m.append("client_secret",r)),a!=="client_credentials"&&a!=="password"&&m.append("redirect_uri",n),o&&(m.append("code",o),m.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),l==="header"?v.set("Authorization",`Basic ${pb.from(`${t}:${r}`,"utf8").toString("base64")}`):(m.append("client_id",t),m.append("client_secret",r)),a==="password"&&(m.append("username",h),m.append("password",d)),c&&m.append("scope",c);try{const w=await fetch(e,{method:"POST",headers:v,body:m}),x=await w.json();if(!w.ok)return f&&(f.innerHTML=`<span style="color:var(--red)">${x.error_description||x.error_description||"Unable to get access token"}</span>`),!1;if(x.token_type&&x.access_token)return fb.call(this,i,x.access_token,x.token_type),f&&(f.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch{return f&&(f.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function v_(e,t,r,n,a,o,i,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&(e.data.responseType==="code"?$u.call(this,r,n,a,o,i,e.data.code,l,c,s):e.data.responseType==="token"&&fb.call(this,l,e.data.access_token,e.data.token_type)))}async function b_(e,t,r,n,a){const o=a.target.closest(".oauth-flow"),i=o.querySelector(".oauth-client-id")?o.querySelector(".oauth-client-id").value.trim():"",s=o.querySelector(".oauth-client-secret")?o.querySelector(".oauth-client-secret").value.trim():"",l=o.querySelector(".api-key-user")?o.querySelector(".api-key-user").value.trim():"",c=o.querySelector(".api-key-password")?o.querySelector(".api-key-password").value.trim():"",h=o.querySelector(".oauth-send-client-secret-in")?o.querySelector(".oauth-send-client-secret-in").value.trim():"header",d=[...o.querySelectorAll(".scope-checkbox:checked")],f=o.querySelector(`#${e}-pkce`),m=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,v=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,w=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let x,p="",k="";if([...o.parentNode.querySelectorAll(".oauth-resp-display")].forEach($=>{$.innerHTML=""}),t==="authorizationCode"||t==="implicit"){const $=new URL(r);t==="authorizationCode"?(p="authorization_code",k="code"):t==="implicit"&&(k="token");const C=new URLSearchParams($.search),F=d.map(O=>O.value).join(" ");F&&C.set("scope",F),C.set("client_id",i),C.set("redirect_uri",w.toString()),C.set("response_type",k),C.set("state",m),C.set("nonce",v),f&&f.checked&&(C.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),C.set("code_challenge_method","S256")),C.set("show_dialog",!0),$.search=C.toString(),sessionStorage.getItem("winMessageEventActive")==="true"&&window.postMessage({fake:!0},this),setTimeout(()=>{x=window.open($.toString()),x?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",O=>v_.call(this,O,x,n,i,s,w.toString(),p,h,e,o),{once:!0})):console.error(`RapiDoc: Unable to open ${$.toString()} in a new window`)},10)}else if(t==="clientCredentials"){p="client_credentials";const $=d.map(C=>C.value).join(" ");$u.call(this,n,i,s,w.toString(),p,"",e,o,h,$)}else if(t==="password"){p="password";const $=d.map(C=>C.value).join(" ");$u.call(this,n,i,s,w.toString(),p,"",e,o,h,$,l,c)}}function x_(e,t,r,n,a,o=[],i="header"){let{authorizationUrl:s,tokenUrl:l,refreshUrl:c}=a;const h=a["x-pkce-only"]||!1,d=v=>v.indexOf("://")>0||v.indexOf("//")===0,f=new URL(this.selectedServer.computedUrl).origin;let m;return c&&!d(c)&&(c=`${f}/${c.replace(/^\//,"")}`),l&&!d(l)&&(l=`${f}/${l.replace(/^\//,"")}`),s&&!d(s)&&(s=`${f}/${s.replace(/^\//,"")}`),m=e==="authorizationCode"?"Authorization Code Flow":e==="clientCredentials"?"Client Credentials Flow":e==="implicit"?"Implicit Flow":e==="password"?"Password Flow":e,y`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${m}</div>
      ${s?y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${s} </span></div>`:""}
      ${l?y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${c?y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?y`
          ${a.scopes?y`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(a.scopes).map((v,w)=>y`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${w}" ?checked="${o.includes(v[0])}" value="${v[0]}">
                    <label for="${n}${e}${w}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${v[0]}</span>
                        ${v[0]!==v[1]?` - ${v[1]||""}`:""}
                    </label>
                  </div>
                `)}
              </div>
            `:""}
          ${e==="password"?y`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${e==="authorizationCode"?y`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked ?disabled=${h}>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${e==="authorizationCode"||e==="clientCredentials"||e==="password"?y`
                <input
                  type="password" part="textbox textbox-auth-client-secret"
                  value = "${r||""}" placeholder="client-secret" spellcheck="false"
                  class="oauth2 ${e} ${n}
                  oauth-client-secret"
                  style = "margin:0 5px;${h?"display:none;":""}"
                >
                <select style="margin-right:5px;${h?"display:none;":""}" class="${e} ${n} oauth-send-client-secret-in">
                  <option value = 'header' .selected = ${i==="header"} > Authorization Header </option>
                  <option value = 'request-body' .selected = ${i==="request-body"}> Request Body </option>
                </select>`:""}
            ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?y`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${v=>{b_.call(this,n,e,s,l,v)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function w_(e){var t;const r=(t=this.resolvedSpec.securitySchemes)===null||t===void 0?void 0:t.find(n=>n.securitySchemeId===e);if(r.user="",r.password="",r.value="",r.finalKeyValue="",this.persistAuth==="true"){const n=wu.call(this);delete n[r.securitySchemeId],db.call(this,n)}this.requestUpdate()}function mb(){var e;if(!this.resolvedSpec)return"";const t=(e=this.resolvedSpec.securitySchemes)===null||e===void 0?void 0:e.filter(r=>r.finalKeyValue);return t?y`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?y`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{xu.call(this)}}>CLEAR ALL API KEYS</button>`:y`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?y`
        <table role="presentation" id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(r=>y`
            <tr id="security-scheme-${r.securitySchemeId}" class="${r.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${r.typeDisplay}</span>
                  ${r.finalKeyValue?y`
                      <span class='blue-text'>  ${r.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{w_.call(this,r.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${r.description?y`
                    <div class="m-markdown">
                      ${ze(le(r.description||""))}
                    </div>`:""}

                ${r.type.toLowerCase()==="apikey"||r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="bearer"?y`
                    <div style="margin-bottom:5px">
                      ${r.type.toLowerCase()==="apikey"?y`Send <code>${r.name}</code> in <code>${r.in}</code>`:y`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${r.in!=="cookie"?y`
                          <input type = "text" value = "${r.value}" class="${r.type} ${r.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${n=>{hb.call(this,r.securitySchemeId,n)}}">
                            ${r.finalKeyValue?"UPDATE":"SET"}
                          </button>`:y`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="basic"?y`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${r.user}" placeholder="username" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${r.password}" placeholder="password" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${n=>{hb.call(this,r.securitySchemeId,n)}}"
                        part = "btn btn-outline"
                      >
                        ${r.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${r.type.toLowerCase()==="oauth2"?y`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(r.flows).map(n=>x_.call(this,n,r.flows[n]["x-client-id"]||r["x-client-id"]||"",r.flows[n]["x-client-secret"]||r["x-client-secret"]||"",r.securitySchemeId,r.flows[n],r.flows[n]["x-default-scopes"]||r["x-default-scopes"],r.flows[n]["x-receive-token-in"]||r["x-receive-token-in"]))}
                  </td>
                </tr>
                `:""}
          `)}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function gb(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return Array.isArray(e)?e.length===0?"":(e.forEach(r=>{const n=[],a=[];Object.keys(r).length===0?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(r).forEach(o=>{let i="";const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===o);r[o]&&Array.isArray(r[o])&&(i=r[o].join(", ")),s&&(a.push(s.typeDisplay),n.push({...s,scopes:i}))}),t.push({securityTypes:a.length>1?`${a[0]} + ${a.length-1} more`:a[0],securityDefs:n}))}),y`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" style="stroke:var(--fg3)"> <rect x="5" y="11" width="14" height="10" rx="2" /> <circle cx="12" cy="16" r="1" /> <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
          ${t.map((r,n)=>y`
          ${r.securityTypes?y`
              ${n!==0?y`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${this.updateRoute==="true"&&this.allowAuthentication==="true"?y`<a part="anchor anchor-operation-security" href="#auth"> ${r.securityTypes} </a>`:y`${r.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${r.securityDefs.length>1?y`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${r.securityDefs.map((a,o)=>{const i=y`${a.scopes!==""?y`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${a.scopes.split(",").map((s,l)=>y`${l===0?"":"┃"}<span>${s}</span>`)}
                            </div>
                          </div>`:""}`;return y`
                      ${a.type==="oauth2"?y`
                          <div>
                            ${r.securityDefs.length>1?y`<b>${o+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${a.securitySchemeId}</span> in <b>Authorization header</b>
                            ${i}
                          </div>`:a.type==="http"?y`
                            <div>
                              ${r.securityDefs.length>1?y`<b>${o+1}.</b> &nbsp;`:y`Requires`}
                              ${a.scheme==="basic"?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${i}
                            </div>`:y`
                            <div>
                              ${r.securityDefs.length>1?y`<b>${o+1}.</b> &nbsp;`:y`Requires`}
                              Token in <b>${a.name} ${a.in}</b>
                              ${i}
                            </div>`}`})}
                  </div>
                </div>
              </div>
            `:""}
        `)}
      </div>
    `):""}return""}function yb(e){return y`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${t=>{if(!t.target.classList.contains("tab-btn"))return;const r=t.target.dataset.tab,n=[...t.currentTarget.querySelectorAll(".tab-btn")],a=[...t.currentTarget.querySelectorAll(".tab-content")];n.forEach(o=>o.classList[o.dataset.tab===r?"add":"remove"]("active")),a.forEach(o=>{o.style.display=o.dataset.tab===r?"block":"none"})}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map((t,r)=>y`<button class="tab-btn ${r===0?"active":""}" data-tab = '${t.lang}${r}'> ${t.label||t.lang} </button>`)}
    </div>
    ${e.map((t,r)=>{var n,a,o;return y`
      <div class="tab-content m-markdown" style= "display:${r===0?"block":"none"}" data-tab = '${t.lang}${r}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${i=>{Pa(t.source,i)}}'> Copy </button>
        <pre><code class="language">${ht().languages[(n=t.lang)===null||n===void 0?void 0:n.toLowerCase()]?ze(ht().highlight(t.source,ht().languages[(a=t.lang)===null||a===void 0?void 0:a.toLowerCase()],(o=t.lang)===null||o===void 0?void 0:o.toLowerCase())):t.source}</code></pre>
      </div>`})}
  </div>  
  </section>`}function vb(e){return y`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map(t=>y`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${t[0]}
        ${Object.entries(t[1]).map(r=>y`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(r[1]).map(n=>{var a,o,i;return y`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${n[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${n[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${r[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${n[0]||""}", 
                      path = "${r[0]||""}" 
                      .parameters = "${((a=n[1])===null||a===void 0?void 0:a.parameters)||""}" 
                      .request_body = "${((o=n[1])===null||o===void 0?void 0:o.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":"true"}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                      > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${(i=n[1])===null||i===void 0?void 0:i.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":"true"}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `})}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `}const $_={},$s=yu(class extends vu{constructor(){super(...arguments),this.ot=$_}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,a)=>n===this.ot[a]))return Qe}else if(this.ot===t)return Qe;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),k_={},ku=yu(class extends vu{constructor(e){if(super(e),e.type!==lb&&e.type!==sb&&e.type!==cb)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Qe||t===Ue)return t;const r=e.element,n=e.name;if(e.type===lb){if(t===r[n])return Qe}else if(e.type===cb){if(!!t===r.hasAttribute(n))return Qe}else if(e.type===sb&&r.getAttribute(n)===t+"")return Qe;return((a,o=k_)=>{a._$AH=o})(e),t}});var S_=z(131),A_=z.n(S_);const ks=H`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function Dn(e){return e===void 0?"":e===null?"null":e===""?"∅":typeof e=="boolean"||typeof e=="number"?`${e}`:Array.isArray(e)?e.map(t=>t===null?"null":t===""?"∅":t.toString().replace(/^ +| +$/g,r=>"●".repeat(r.length))||"").join(", "):e.toString().replace(/^ +| +$/g,t=>"●".repeat(t.length))||""}function on(e){if(!e)return;let t="",r="";if(e.$ref){const i=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(i+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(e.length===2?" or ":"┃"):e.type,(e.format||e.enum||e.const)&&(t=t.replace("string",e.enum?"enum":e.const?"const":e.format)),e.nullable&&(t+="┃null")):t=e.const?"const":Object.keys(e).length===0?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:Dn(e.default),description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if(n.type==="{recursive}"?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):n.type!=="{missing-type-info}"&&n.type!=="any"||(n.description=n.description||""),n.allowedValues=e.const?e.const:Array.isArray(e.enum)?e.enum.map(i=>Dn(i)).join("┃"):"",t==="array"&&e.items){var a,o;const i=(a=e.items)===null||a===void 0?void 0:a.type,s=Dn(e.items.default);n.arrayType=`${e.type} of ${Array.isArray(i)?i.join(""):i}`,n.default=s,n.allowedValues=e.items.const?e.const:Array.isArray((o=e.items)===null||o===void 0?void 0:o.enum)?e.items.enum.map(l=>Dn(l)).join("┃"):""}return t.match(/integer|number/g)&&(e.minimum===void 0&&e.exclusiveMinimum===void 0||(r+=e.minimum!==void 0?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),e.maximum===void 0&&e.exclusiveMaximum===void 0||(r+=e.maximum!==void 0?`${r?"┃":""}Max ${e.maximum}`:`${r?"┃":""}Less than ${e.exclusiveMaximum}`),e.multipleOf!==void 0&&(r+=`${r?"┃":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(e.minLength!==void 0&&e.maxLength!==void 0?r+=`${r?"┃":""}${e.minLength} to ${e.maxLength} chars`:e.minLength!==void 0?r+=`${r?"┃":""}Min ${e.minLength} chars`:e.maxLength!==void 0&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function Ss(e){return typeof e=="boolean"||typeof e=="number"?{Example:{value:`${e}`}}:e===""?{Example:{value:""}}:e&&{Example:{value:e}}}function bb(e,t="string"){if(!e)return{exampleVal:"",exampleList:[]};if(e.constructor===Object){const a=Object.values(e).filter(o=>o["x-example-show-value"]!==!1).map(o=>({value:typeof o.value=="boolean"||typeof o.value=="number"?`${o.value}`:o.value||"",printableValue:Dn(o.value),summary:o.summary||"",description:o.description||""}));return{exampleVal:a.length>0?a[0].value.toString():"",exampleList:a}}if(Array.isArray(e)||(e=e?[e]:[]),e.length===0)return{exampleVal:"",exampleList:[]};if(t==="array"){const[a]=e,o=e.map(i=>({value:i,printableValue:Dn(i)}));return{exampleVal:a,exampleList:o}}const r=e[0].toString(),n=e.map(a=>({value:a.toString(),printableValue:Dn(a)}));return{exampleVal:r,exampleList:n}}function As(e){const t=e.examples?e.examples[0]:e.example===null?null:e.example||void 0;if(t==="")return"";if(t===null)return null;if(t===0)return 0;if(t===!1)return!1;if(t instanceof Date)switch(e.format.toLowerCase()){case"date":return t.toISOString().split("T")[0];case"time":return t.toISOString().split("T")[1];default:return t.toISOString()}if(t)return t;if(Object.keys(e).length===0)return null;if(e.$ref)return e.$ref;if(e.const===!1||e.const===0||e.const===null||e.const===""||e.const)return e.const;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const n=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),a=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),o=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?a||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return n?n>=o?n:o%n==0?o:Math.ceil(o/n)*n:o}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.const)return e.const;if(e.pattern)return e.pattern;if(!e.format){const n=Number.isNaN(e.minLength)?void 0:Number(e.minLength),a=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),o=n||(a>6?6:a||void 0);return o?"A".repeat(o):"string"}{const n=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[n.substr(0,8),n.substr(8,4),`4000-8${n.substr(13,3)}`,n.substr(16,12)].join("-");default:return""}}}return"?"}function Su(e,t=1){const r="  ".repeat(t);let n="";if(t===1&&typeof e!="object")return`
${r}${e.toString()}`;for(const a in e){const o=e[a]["::XML_TAG"]||a;let i="";i=Array.isArray(e[a])?o[0]["::XML_TAG"]||`${a}`:o,a.startsWith("::")||(n=Array.isArray(e[a])||typeof e[a]=="object"?`${n}
${r}<${i}>${Su(e[a],t+1)}
${r}</${i}>`:`${n}
${r}<${i}>${e[a].toString()}</${i}>`)}return n}function Es(e,t){var r,n;if(typeof t=="object"&&t!==null){var a,o;e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description),(r=e.xml)!==null&&r!==void 0&&r.name&&(t["::XML_TAG"]=(a=e.xml)===null||a===void 0?void 0:a.name),(n=e.xml)!==null&&n!==void 0&&n.wrapped&&(t["::XML_WRAP"]=(o=e.xml)===null||o===void 0?void 0:o.wrapped.toString())}}function xb(e){if(typeof e=="object"&&e!==null){delete e["::TITLE"],delete e["::DESCRIPTION"],delete e["::XML_TAG"],delete e["::XML_WRAP"];for(const t in e)xb(e[t])}}function wb(e,t,r){for(const n in t)t[n][r]=e}function _o(e,t,r){let n=0;const a={};for(const o in e){for(const i in r)if(a[`example-${n}`]={...e[o]},a[`example-${n}`][t]=r[i],n++,n>=10)break;if(n>=10)break}return a}function Or(e,t={}){let r={};if(e){if(e.allOf){var n,a;const x={};if(!(e.allOf.length!==1||(n=e.allOf[0])!==null&&n!==void 0&&n.properties||(a=e.allOf[0])!==null&&a!==void 0&&a.items))return e.allOf[0].$ref?"{  }":e.allOf[0].readOnly&&t.includeReadOnly?As(e.allOf[0]):void 0;e.allOf.forEach(p=>{if(p.type==="object"||p.properties||p.allOf||p.anyOf||p.oneOf){const k=Or(p,t);Object.assign(x,k)}else if(p.type==="array"||p.items){const k=[Or(p,t)];Object.assign(x,k)}else{if(!p.type)return"";{const k=`prop${Object.keys(x).length}`;x[k]=As(p)}}}),r=x}else if(e.oneOf){const x={};if(e.properties)for(const p in e.properties){var o;e.properties[p].properties||(o=e.properties[p].properties)!==null&&o!==void 0&&o.items?x[p]=Or(e.properties[p],t):x[p]=As(e.properties[p])}if(e.oneOf.length>0){let p=0;for(const k in e.oneOf){const $=Or(e.oneOf[k],t);for(const C in $){let F;if(Object.keys(x).length>0){if($[C]===null||typeof $[C]!="object")continue;F=Object.assign($[C],x)}else F=$[C];r[`example-${p}`]=F,Es(e.oneOf[k],r[`example-${p}`]),p++}}}}else if(e.anyOf){let x;if(e.type==="object"||e.properties){x={"example-0":{}};for(const k in e.properties){if(e.example){x=e;break}e.properties[k].deprecated&&!t.includeDeprecated||e.properties[k].readOnly&&!t.includeReadOnly||e.properties[k].writeOnly&&!t.includeWriteOnly||(x=_o(x,k,Or(e.properties[k],t)))}}let p=0;for(const k in e.anyOf){const $=Or(e.anyOf[k],t);for(const C in $){if(x!==void 0)for(const F in x)r[`example-${p}`]={...x[F],...$[C]};else r[`example-${p}`]=$[C];Es(e.anyOf[k],r[`example-${p}`]),p++}}}else if(e.type==="object"||e.properties)if(r["example-0"]={},Es(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const x in e.properties){var i,s,l,c,h,d,f;if(((i=e.properties[x])===null||i===void 0||!i.deprecated||t.includeDeprecated)&&((s=e.properties[x])===null||s===void 0||!s.readOnly||t.includeReadOnly)&&((l=e.properties[x])===null||l===void 0||!l.writeOnly||t.includeWriteOnly))if(((c=e.properties[x])===null||c===void 0?void 0:c.type)==="array"||(h=e.properties[x])!==null&&h!==void 0&&h.items)if(e.properties[x].example)wb(e.properties[x].example,r,x);else if((d=e.properties[x])!==null&&d!==void 0&&(f=d.items)!==null&&f!==void 0&&f.example)wb([e.properties[x].items.example],r,x);else{const p=Or(e.properties[x].items,t);if(t.useXmlTagForProp){var m,v;const k=((m=e.properties[x].xml)===null||m===void 0?void 0:m.name)||x;(v=e.properties[x].xml)!==null&&v!==void 0&&v.wrapped?r=_o(r,k,JSON.parse(`{ "${k}" : { "${k}" : ${JSON.stringify(p["example-0"])} } }`)):r=_o(r,k,p)}else{const k=[];for(const $ in p)k[$]=[p[$]];r=_o(r,x,k)}}else r=_o(r,x,Or(e.properties[x],t))}else{if(e.type!=="array"&&!e.items)return{"example-0":As(e)};var w;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if((w=e.items)!==null&&w!==void 0&&w.example)r["example-0"]=[e.items.example];else{const x=Or(e.items,t);let p=0;for(const k in x)r[`example-${p}`]=[x[k]],Es(e.items,r[`example-${p}`]),p++}else r["example-0"]=[]}return r}}function $b(e,t=0){var r;let n=(e.description||e.title)&&(e.minItems||e.maxItems)?'<span class="descr-expand-toggle">➔</span>':"";if(e.title?n=e.description?`${n} <b>${e.title}:</b> ${e.description}<br/>`:`${n} ${e.title}<br/>`:e.description&&(n=`${n} ${e.description}<br/>`),e.minItems&&(n=`${n} <b>Min Items:</b> ${e.minItems}`),e.maxItems&&(n=`${n} <b>Max Items:</b> ${e.maxItems}`),t>0&&(r=e.items)!==null&&r!==void 0&&r.description){let a="";e.items.minProperties&&(a=`<b>Min Properties:</b> ${e.items.minProperties}`),e.items.maxProperties&&(a=`${a} <b>Max Properties:</b> ${e.items.maxProperties}`),n=`${n} ⮕ ${a} [ ${e.items.description} ] `}return n}function vt(e,t,r=0,n=""){if(e){if(e.allOf){const s={};if(e.allOf.length===1&&!e.allOf[0].properties&&!e.allOf[0].items)return`${on(e.allOf[0]).html}`;e.allOf.map((l,c)=>{if(l.type==="object"||l.properties||l.allOf||l.anyOf||l.oneOf){const h=(l.anyOf||l.oneOf)&&c>0?c:"",d=vt(l,{},r+1,h);Object.assign(s,d)}else if(l.type==="array"||l.items){const h=vt(l,{},r+1);Object.assign(s,h)}else{if(!l.type)return"";{const h=`prop${Object.keys(s).length}`,d=on(l);s[h]=`${d.html}`}}}),t=s}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"",e.type==="object"||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const c in e.properties)e.required&&e.required.includes(c)?t[`${c}*`]=vt(e.properties[c],{},r+1):t[c]=vt(e.properties[c],{},r+1)}const s={},l=e.anyOf?"anyOf":"oneOf";e[l].forEach((c,h)=>{if(c.type==="object"||c.properties||c.allOf||c.anyOf||c.oneOf){const d=vt(c,{});s[`::OPTION~${h+1}${c.title?`~${c.title}`:""}`]=d,s[`::OPTION~${h+1}${c.title?`~${c.title}`:""}`]["::readwrite"]="",s["::type"]="xxx-of-option"}else if(c.type==="array"||c.items){const d=vt(c,{});s[`::OPTION~${h+1}${c.title?`~${c.title}`:""}`]=d,s[`::OPTION~${h+1}${c.title?`~${c.title}`:""}`]["::readwrite"]="",s["::type"]="xxx-of-array"}else{const d=`::OPTION~${h+1}${c.title?`~${c.title}`:""}`;s[d]=`${on(c).html}`,s["::type"]="xxx-of-option"}}),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=s,t["::type"]="object"}else if(Array.isArray(e.type)){const s=JSON.parse(JSON.stringify(e)),l=[],c=[];let h;var a;if(s.type.forEach(d=>{var f,m;d.match(/integer|number|string|null|boolean/g)?l.push(d):d==="array"&&typeof((f=s.items)===null||f===void 0?void 0:f.type)=="string"&&(m=s.items)!==null&&m!==void 0&&m.type.match(/integer|number|string|null|boolean/g)?s.items.type==="string"&&s.items.format?l.push(`[${s.items.format}]`):l.push(`[${s.items.type}]`):c.push(d)}),l.length>0&&(s.type=l.join(l.length===2?" or ":"┃"),h=on(s),c.length===0))return`${((a=h)===null||a===void 0?void 0:a.html)||""}`;if(c.length>0){var o;t["::type"]="object";const d={"::type":"xxx-of-option"};c.forEach((f,m)=>{if(f==="null")d[`::OPTION~${m+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${f},`)){s.type=Array.isArray(f)?f.join("┃"):f;const v=on(s);d[`::OPTION~${m+1}`]=v.html}else if(f==="object"){const v={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const w in e.properties)e.required&&e.required.includes(w)?v[`${w}*`]=vt(e.properties[w],{},r+1):v[w]=vt(e.properties[w],{},r+1);d[`::OPTION~${m+1}`]=v}else f==="array"&&(d[`::OPTION~${m+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":vt(e.items,{},r+1)})}),d[`::OPTION~${c.length+1}`]=((o=h)===null||o===void 0?void 0:o.html)||"",t["::ONE~OF"]=d}}else if(e.type==="object"||e.properties){t["::title"]=e.title||"",t["::description"]=$b(e,r),t["::type"]="object",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="object or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const s in e.properties)e.required&&e.required.includes(s)?t[`${s}*`]=vt(e.properties[s],{},r+1):t[s]=vt(e.properties[s],{},r+1);for(const s in e.patternProperties)t[`[pattern: ${s}]`]=vt(e.patternProperties[s],t,r+1);e.additionalProperties&&(t["[any-key]"]=vt(e.additionalProperties,{}))}else{if(e.type!=="array"&&!e.items){const s=on(e);return s!=null&&s.html?`${s.html}`:""}var i;t["::title"]=e.title||"",t["::description"]=$b(e,r),t["::type"]="array",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="array or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",(i=e.items)!==null&&i!==void 0&&i.items&&(t["::array-type"]=e.items.items.type),t["::props"]=vt(e.items,{},r+1)}return t}}function Aa(e,t,r="",n="",a=!0,o=!0,i="json",s=!1){const l=[];if(r)for(const d in r){let f="",m="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")f=typeof r[d].value=="string"?r[d].value:JSON.stringify(r[d].value,void 0,2),m="text";else if(f=r[d].value,typeof r[d].value=="string")try{const v=r[d].value;f=JSON.parse(v),m="json"}catch{m="text",f=r[d].value}}else f=r[d].value,m="text";l.push({exampleId:d,exampleSummary:r[d].summary||d,exampleDescription:r[d].description||"",exampleType:t,exampleValue:f,exampleFormat:m})}else if(n){let d="",f="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")d=typeof n=="string"?n:JSON.stringify(n,void 0,2),f="text";else if(typeof n=="object")d=n,f="json";else if(typeof n=="string")try{d=JSON.parse(n),f="json"}catch{f="text",d=n}}else d=n,f="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:d,exampleFormat:f})}if(l.length===0||s===!0)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:t!=null&&t.toLowerCase().includes("json")&&typeof e.example=="object"?"json":"text"});else if(t!=null&&t.toLowerCase().includes("json")||t!=null&&t.toLowerCase().includes("text")||t!=null&&t.toLowerCase().includes("*/*")||t!=null&&t.toLowerCase().includes("xml")){let d="",f="",m="",v="";var c,h;t!=null&&t.toLowerCase().includes("xml")?(d=(c=e.xml)!==null&&c!==void 0&&c.name?`<${e.xml.name} ${e.xml.namespace?`xmlns="${e.xml.namespace}"`:""}>`:"<root>",f=(h=e.xml)!==null&&h!==void 0&&h.name?`</${e.xml.name}>`:"</root>",m="text"):m=i;const w=Or(e,{includeReadOnly:a,includeWriteOnly:o,deprecated:!0,useXmlTagForProp:t==null?void 0:t.toLowerCase().includes("xml")});let x=0;for(const p in w){if(!w[p])continue;const k=w[p]["::TITLE"]||"Example "+ ++x,$=w[p]["::DESCRIPTION"]||"";t!=null&&t.toLowerCase().includes("xml")?v=`<?xml version="1.0" encoding="UTF-8"?>
${d}${Su(w[p],1)}
${f}`:(xb(w[p]),v=i==="text"?JSON.stringify(w[p],null,2):w[p]),l.push({exampleId:p,exampleSummary:k,exampleDescription:$,exampleType:t,exampleFormat:m,exampleValue:v})}}else t!=null&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function E_(e){return e==="application/json"?"json":e==="application/xml"?"xml":null}function O_(e){if(e.schema)return[e.schema,null,null];if(e.content){for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,E_(t),e.content[t]]}return[null,null,null]}customElements.define("json-tree",class extends R{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[zr,ks,Un,H`
      :host{
        display:flex;
      }
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        min-height: 40px;
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket {
        padding-left:12px;
        overflow: hidden;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,Mn]}render(){return y`
      <div class = "json-tree"  @click='${e=>{e.target.classList.contains("btn-copy")?Pa(JSON.stringify(this.data,null,2),e):this.toggleExpand(e)}}'>
        <div class='toolbar'> 
          <button class="toolbar-btn btn-copy" part="btn btn-fill btn-copy"> Copy </button>
        </div>
          ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(e===null)return y`<div class="null" style="display:inline;">null</div>`;if(typeof e=="object"&&!(e instanceof Date)){const r=Array.isArray(e)?"array":"pure_object";return Object.keys(e).length===0?y`${Array.isArray(e)?"[ ],":"{ },"}`:y`
      <div class="open-bracket expanded ${r==="array"?"array":"object"}" > ${r==="array"?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map((n,a,o)=>y`
          <div class="item"> 
            ${r==="pure_object"?y`"${n}":`:""}
            ${this.generateTree(e[n],a===o.length-1)}
          </div>`)}
      </div>
      <div class="close-bracket">${r==="array"?"]":"}"}${t?"":","}</div>
      `}return typeof e=="string"||e instanceof Date?y`<span class="${typeof e}">"${e}"</span>${t?"":","}`:y`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;e.target.classList.contains("open-bracket")&&(t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{"))}});const kb=H`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
  transition: max-height 0.3s ease-out;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-all-descr .key {
  overflow:hidden;
}
.expanded-all-descr .key-descr .descr-expand-toggle {
  display:none;
}

.key-descr .descr-expand-toggle {
  display:inline-block;
  user-select:none;
  color: var(--fg);
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform .2s ease;
}

.expanded-descr .key-descr .descr-expand-toggle {
  transform: rotate(270deg)
}

.key-descr .descr-expand-toggle:hover {
  color: var(--primary-color);
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
  font-family: var(--font-regular);
  color: var(--primary-color);
  font-size: calc(var(--font-size-small) - 1px);
  margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.cons {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;customElements.define("schema-tree",class extends R{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[zr,kb,ks,H`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-all-descr .tr:not(.expanded-descr) {
        overflow: hidden;
        max-height:calc(var(--font-size-small) + 8px);
      }
      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }
      .inside-bracket.xxx-of-option {
        border-left: 1px solid transparent;
      }
      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        overflow: hidden;
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }`,Mn]}render(){var e,t,r;return y`
      <div class="tree ${this.schemaDescriptionExpanded==="true"?"expanded-all-descr":"collapsed-all-descr"}" @click="${n=>this.handleAllEvents(n)}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?y`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item schema-multiline-toggle'> 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>`:""}
        </div>
        <span part="schema-description" class='m-markdown'> ${ze(le(((r=this.data)===null||r===void 0?void 0:r["::description"])||""))}</span>
        ${this.data?y`
            ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:y`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||(e==null?void 0:e["::readwrite"])==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||(e==null?void 0:e["::readwrite"])==="writeonly"))return;if(!e)return y`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${t==="array"?y`<span class='mono-font'> [ ] </span>`:t==="object"?y`<span class='mono-font'> { } </span>`:y`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(Object.keys(e).length===0)return y`<span class="key object">${n}:{ }</span>`;let c="",h="";n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF")?c=n.replace("::","").replace("~"," "):n.startsWith("::OPTION")?[,c,h]=n.split("~"):c=n;const d=400-12*i;let f="",m="";const v=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?o:o+1,w=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1;if(e["::type"]==="object")t==="array"?(f=o<this.schemaExpandLevel?y`<span class="open-bracket array-of-object" >[{</span>`:y`<span class="open-bracket array-of-object">[{...}]</span>`,m="}]"):(f=o<this.schemaExpandLevel?y`<span class="open-bracket object">{</span>`:y`<span class="open-bracket object">{...}</span>`,m="}");else if(e["::type"]==="array")if(t==="array"){const N=r!=="object"?r:"";f=o<this.schemaExpandLevel?y`<span class="open-bracket array-of-array" data-array-type="${N}">[[ ${N} </span>`:y`<span class="open-bracket array-of-array"  data-array-type="${N}">[[...]]</span>`,m="]]"}else f=o<this.schemaExpandLevel?y`<span class="open-bracket array">[</span>`:y`<span class="open-bracket array">[...]</span>`,m="]";var x;if(typeof e=="object")return y`
        <div class="tr ${o<this.schemaExpandLevel||(x=e["::type"])!==null&&x!==void 0&&x.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${d}px'>
            ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?y`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${h}</span>`:c==="::props"||c==="::ARRAY~OF"?"":o>0?y`<span class="key-label" title="${s==="readonly"?"Read-Only":s==="writeonly"?"Write-Only":""}">
                      ${e["::deprecated"]?"✗":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?y`<span style="color:var(--red)">*</span>`:""}${s==="readonly"?y` 🆁`:s==="writeonly"?y` 🆆`:s}:
                    </span>`:""}
            ${f}
          </div>
          <div class='td key-descr m-markdown-small'>${ze(le(a||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"?0:12}px;'>
          ${Array.isArray(e)&&e[0]?y`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",v,w,e[0]["::readwrite"])}`:y`
              ${Object.keys(e).map(N=>{var X;return y`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(N)?e[N]["::type"]==="array"||e[N]["::type"]==="object"?y`${this.generateTree(e[N]["::type"]==="array"?e[N]["::props"]:e[N],e[N]["::type"],e[N]["::array-type"]||"",N,e[N]["::description"],v,w,e[N]["::readwrite"]?e[N]["::readwrite"]:"")}`:"":y`${this.generateTree(e[N]["::type"]==="array"?e[N]["::props"]:e[N],e[N]["::type"],e[N]["::array-type"]||"",N,((X=e[N])===null||X===void 0?void 0:X["::description"])||"",v,w,e[N]["::readwrite"]?e[N]["::readwrite"]:"")}`}
              `})}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":y`<div class='close-bracket'> ${m} </div>`}
      `;const[p,k,$,C,F,O,U,A,T]=e.split("~|~");if(k==="🆁"&&this.schemaHideReadOnly==="true"||k==="🆆"&&this.schemaHideWriteOnly==="true")return;const _=p.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),B=$||C||F||O?`<span class="descr-expand-toggle ${this.schemaDescriptionExpanded==="true"?"expanded-descr":""}">➔</span>`:"";let E="",I="";return t==="array"?s==="readonly"?(E="🆁",I="Read-Only"):s==="writeonly"&&(E="🆆",I="Write-Only"):k==="🆁"?(E="🆁",I="Read-Only"):k==="🆆"&&(E="🆆",I="Write-Only"),y`
      <div class = "tr primitive" title="${T?"Deprecated":""}">
        <div class="td key ${T}" style='min-width:${d}px'>
          ${T?y`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?y`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?y`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${h}</span>`:y`<span class="key-label">${c}:</span>`}
          <span class="${_}" title="${I}"> 
            ${t==="array"?`[${p}]`:`${p}`}
            ${E}
          </span>
        </div>
        <div class='td key-descr'>
          ${a||A||U?y`${y`<span class="m-markdown-small">
                ${ze(le(t==="array"?`${B} ${a}`:A?`${B} <b>${A}:</b> ${U}`:`${B} ${U}`))}
              </span>`}`:""}  
          ${$?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${$}</div>`:""}
          ${C?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${C}</div>`:""}
          ${F?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>${p==="const"?"Value":"Allowed"}: </span>${F}</div>`:""}
          ${O?y`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${O}</div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("open-bracket"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends R{render(){let e="";return Array.isArray(this.value)&&(e=y`${this.value.filter(t=>typeof t=="string"&&t.trim()!=="").map(t=>y`<span class='tag'>${t}</span>`)}`),y`
      <div class='tags'>
        ${e}
        <input type="text" class='editor' @paste="${t=>this.afterPaste(t)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){e==="value"&&r&&t!==r&&(this.value=r.split(",").filter(n=>n.trim()!=="")),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter(n=>n.trim()!==""):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){e.keyCode===13?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):e.keyCode===8&&e.target.value.length===0&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[H`
      .tags {
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor {
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor:focus-visible {
        outline: 1px solid;
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends R{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},webhook:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},curlSyntax:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[Ca,Un,zr,Ta,ks,ja,No,H`
        *, *:before, *:after { box-sizing: border-box; }
        :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
        :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
        tag-input:focus-within { outline: 1px solid;}
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,Mn]}render(){return y`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||this.callback==="true"?"read-mode":"view-mode"}">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${$s([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("path"))}
        ${$s([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("query"))}
        ${this.requestBodyTemplate()}
        ${$s([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("header"))}
        ${$s([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("cookie"))}
        ${this.allowTry==="false"?"":y`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}async updated(){this.showCurlBeforeTry==="true"&&this.applyCURLSyntax(this.shadowRoot),this.webhook==="true"&&(this.allowTry="false")}async saveExampleState(){this.renderStyle==="focused"&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach(e=>{e.dataset.user_example=e.value}),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(e=>{e.dataset.user_example=e.value}),this.requestUpdate())}async updateExamplesFromDataAttr(){this.renderStyle==="focused"&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach(e=>{e.value=e.dataset.user_example||e.dataset.example}),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(e=>{e.value=e.dataset.user_example||e.dataset.example}),this.requestUpdate())}renderExample(e,t,r){var n;return y`
      ${t==="array"?"[":""}
      <a
        part="anchor anchor-param-example"
        style="display:inline-block; min-width:24px; text-align:center"
        class="${this.allowTry==="true"?"":"inactive-link"}"
        data-example-type="${t==="array"?t:"string"}"
        data-example="${e.value&&Array.isArray(e.value)?(n=e.value)===null||n===void 0?void 0:n.join("~|~"):e.value||""}"
        @click="${a=>{const o=a.target.closest("table").querySelector(`[data-pname="${r}"]`);o&&(o.value=a.target.dataset.exampleType==="array"?a.target.dataset.example.split("~|~"):a.target.dataset.example)}}"
      > ${e.printableValue||e.value} </a>
      ${t==="array"?"] ":""}
    `}renderShortFormatExamples(e,t,r){return y`${e.map((n,a)=>y`
      ${a===0?"":"┃"}
      ${this.renderExample(n,t,r)}`)}`}renderLongFormatExamples(e,t,r){return y` <ul style="list-style-type: disclosure-closed;">
      ${e.map(n=>{var a,o;return y`
          <li>
            ${this.renderExample(n,t,r)}
            ${((a=n.summary)===null||a===void 0?void 0:a.length)>0?y`<span>&lpar;${n.summary}&rpar;</span>`:""}
            ${((o=n.description)===null||o===void 0?void 0:o.length)>0?y`<p>${ze(le(n.description))}</p>`:""}
          </li>
        `})}
    </ul>`}exampleListTemplate(e,t,r=[]){return y` ${r.length>0?y`<span style="font-weight:bold">Examples: </span>
          ${n=r,n.some(a=>{var o,i;return((o=a.summary)===null||o===void 0?void 0:o.length)>0||((i=a.description)===null||i===void 0?void 0:i.length)>0})?this.renderLongFormatExamples(r,t,e):this.renderShortFormatExamples(r,t,e)}`:""}`;var n}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter(a=>a.in===e):[];if(t.length===0)return"";let r="";e==="path"?r="PATH PARAMETERS":e==="query"?r="QUERY-STRING PARAMETERS":e==="header"?r="REQUEST HEADERS":e==="cookie"&&(r="COOKIES");const n=[];for(const a of t){const[o,i,s]=O_(a);if(!o)continue;const l=on(o);if(!l)continue;const c=vt(o,{});let h="form",d=!0,f=!1;e==="query"&&(a.style&&"form spaceDelimited pipeDelimited".includes(a.style)?h=a.style:i&&(h=i),typeof a.explode=="boolean"&&(d=a.explode),typeof a.allowReserved=="boolean"&&(f=a.allowReserved));const m=bb(a.examples||Ss(a.example)||Ss(s==null?void 0:s.example)||(s==null?void 0:s.examples)||Ss(l.examples)||Ss(l.example),l.type);m.exampleVal||l.type!=="object"||(m.exampleVal=Aa(o,i||"json","","",this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true",!0,"text")[0].exampleValue);const v="read focused".includes(this.renderStyle)?"200px":"160px";n.push(y`
      <tr title="${a.deprecated?"Deprecated":""}"> 
        <td rowspan="${this.allowTry==="true"?"1":"2"}" style="width:${v}; min-width:100px;">
          <div class="param-name ${a.deprecated?"deprecated":""}" >
            ${a.deprecated?y`<span style='color:var(--red);'>✗</span>`:""}
            ${a.required?y`<span style='color:var(--red)'>*</span>`:""}
            ${a.name}
          </div>
          <div class="param-type">
            ${l.type==="array"?`${l.arrayType}`:`${l.format?l.format:l.type}`}
          </div>
        </td>  
        ${this.allowTry==="true"?y`
            <td style="min-width:100px;" colspan="${l.default||l.constrain||l.allowedValues||l.pattern?"1":"2"}">
              ${l.type==="array"?y`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${a.name}"
                    data-example = "${Array.isArray(m.exampleVal)?m.exampleVal.join("~|~"):m.exampleVal}"
                    data-param-serialize-style = "${h}"
                    data-param-serialize-explode = "${d}"
                    data-param-allow-reserved = "${f}"
                    data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${a["x-fill-example"]==="no"?[]:ku(this.fillRequestFieldsWithExample==="true"?Array.isArray(m.exampleVal)?m.exampleVal:[m.exampleVal]:[])}"
                  >
                  </tag-input>`:l.type==="object"?y`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${w=>{if(w.target.tagName.toLowerCase()==="button"){const x={...this.activeParameterSchemaTabs};x[a.name]=w.target.dataset.tab,this.activeParameterSchemaTabs=x}}}">
                        <button class="tab-btn ${this.activeParameterSchemaTabs[a.name]==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${this.activeParameterSchemaTabs[a.name]!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${this.activeParameterSchemaTabs[a.name]==="example"?y`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${a.name}"
                            data-example = "${m.exampleVal}"
                            data-param-serialize-style = "${h}"
                            data-param-serialize-explode = "${d}"
                            data-param-allow-reserved = "${f}"
                            data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                            spellcheck = "false"
                            .textContent="${a["x-fill-example"]==="no"?"":ku(this.fillRequestFieldsWithExample==="true"?m.exampleVal:"")}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                            @input=${w=>{const x=this.getRequestPanel(w);this.liveCURLSyntaxUpdate(x)}}
                          ></textarea>
                        </div>`:y`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${c}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                                file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                                anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>`:y`
                    <input type="${l.format==="password"?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${a.name}" 
                      data-example="${Array.isArray(m.exampleVal)?m.exampleVal.join("~|~"):m.exampleVal}"
                      data-param-allow-reserved = "${f}"
                      data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${a["x-fill-example"]==="no"?"":ku(this.fillRequestFieldsWithExample==="true"?m.exampleVal:"")}"
                      @input=${w=>{const x=this.getRequestPanel(w);this.liveCURLSyntaxUpdate(x)}}
                    />`}
            </td>`:""}
        ${l.default||l.constrain||l.allowedValues||l.pattern?y`
            <td colspan="${this.allowTry==="true"?"1":"2"}">
              <div class="param-constraint">
                ${l.default?y`<span style="font-weight:bold">Default: </span>${l.default}<br/>`:""}
                ${l.pattern?y`<span style="font-weight:bold">Pattern: </span>${l.pattern}<br/>`:""}
                ${l.constrain?y`${l.constrain}<br/>`:""}
                ${l.allowedValues&&l.allowedValues.split("┃").map((w,x)=>y`
                  ${x>0?"┃":y`<span style="font-weight:bold">Allowed: </span>`}
                  ${y`
                    <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                      data-type="${l.type==="array"?l.type:"string"}"
                      data-enum="${w.trim()}"
                      @click="${p=>{const k=p.target.closest("table").querySelector(`[data-pname="${a.name}"]`);k&&(p.target.dataset.type==="array"?k.value=[p.target.dataset.enum]:k.value=p.target.dataset.enum)}}"
                    >${w}</a>`}`)}
              </div>
            </td>`:y`<td></td>`}
      </tr>
      <tr>
        ${this.allowTry==="true"?y`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${ze(le(a.description||""))}</span>
          ${this.exampleListTemplate.call(this,a.name,l.type,m.exampleList)}
        </td>
      </tr>
    `)}return y`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table role="presentation" class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}async beforeNavigationFocusedMode(){}async afterNavigationFocusedMode(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.updateExamplesFromDataAttr(),this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout(r=>{const n=r.closest(".example-panel").querySelector(".request-body-param");r.closest(".example-panel").querySelector(".request-body-param-user-input").value=n.innerText;const a=this.getRequestPanel({target:r});this.liveCURLSyntaxUpdate(a)},0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout(r=>{const n=r.closest(".request-body-container").querySelector(".request-body-param");n&&(r.closest(".request-body-container").querySelector(".request-body-param-user-input").value=n.innerText)},0,t)}requestBodyTemplate(){if(!this.request_body||Object.keys(this.request_body).length===0)return"";let e="",t="",r="",n="",a="";const o=[],{content:i}=this.request_body;for(const s in i)o.push({mimeType:s,schema:i[s].schema,example:i[s].example,examples:i[s].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=s);return e=o.length===1?"":y`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${s=>this.onMimeTypeChange(s)}'>
          ${o.map(s=>y`
            <option value = '${s.mimeType}' ?selected = '${s.mimeType===this.selectedRequestBodyType}'>
              ${s.mimeType}
            </option> `)}
        </select>
      `,o.forEach(s=>{let l,c=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))s.mimeType===this.selectedRequestBodyType&&(c=Aa(s.schema,s.mimeType,s.examples,s.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=c.length>0?c[0].exampleId:""),a=y`
            ${a}
            <div class = 'example-panel border-top pad-top-8'>
              ${c.length===1?"":y`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${h=>this.onSelectExample(h)}'>
                    ${c.map(h=>y`<option value="${h.exampleId}" ?selected=${h.exampleId===this.selectedRequestBodyExample} > 
                      ${h.exampleSummary.length>80?h.exampleId:h.exampleSummary?h.exampleSummary:h.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${c.filter(h=>h.exampleId===this.selectedRequestBodyExample).map(h=>y`
                <div class="example ${h.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${h.exampleId}'>
                  ${h.exampleSummary&&h.exampleSummary.length>80?y`<div style="padding: 4px 0"> ${h.exampleSummary} </div>`:""}
                  ${h.exampleDescription?y`<div class="m-markdown-small" style="padding: 4px 0"> ${ze(le(h.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${s.mimeType.substring(s.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${h.exampleFormat==="text"?h.exampleValue:JSON.stringify(h.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    data-example = "${h.exampleFormat==="text"?h.exampleValue:JSON.stringify(h.exampleValue,null,2)}"
                    data-example-format = "${h.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${this.fillRequestFieldsWithExample==="true"?h.exampleFormat==="text"?h.exampleValue:JSON.stringify(h.exampleValue,null,2):""}"
                    @input=${d=>{const f=this.getRequestPanel(d);this.liveCURLSyntaxUpdate(f)}}
                  ></textarea>
                </div>  
              `)}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(s.mimeType===this.selectedRequestBodyType){const h=Aa(s.schema,s.mimeType,s.examples,s.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1);s.schema&&(r=this.formDataTemplate(s.schema,s.mimeType,h[0]?h[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&s.mimeType===this.selectedRequestBodyType&&(t=y`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${s.mimeType}" spellcheck="false" />
            </div>  
          `);(s.mimeType.includes("json")||s.mimeType.includes("xml")||s.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(l=vt(s.schema,{}),this.schemaStyle==="table"?n=y`
            ${n}
            <schema-table
              class = '${s.mimeType.substring(s.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};'
              .data = '${l}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:this.schemaStyle==="tree"&&(n=y`
            ${n}
            <schema-tree
              class = "${s.mimeType.substring(s.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};"
              .data = "${l}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))}),y`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?y`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?y`<div class="m-markdown" style="margin-bottom:12px">${ze(le(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?y`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${s=>{s.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=s.target.dataset.tab)}}">
                <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${y`<div class="tab-content col" style="display:${this.activeSchemaTab==="example"?"block":"none"};"> ${a}</div>`}
              ${y`<div class="tab-content col" style="display:${this.activeSchemaTab==="example"?"none":"block"};"> ${n}</div>`}
            </div>`:y`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const a=vt(t,{}),o=Aa(t,"json",t.examples,t.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1);return y`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${i=>{if(i.target.classList.contains("v-tab-btn")){const{tab:s}=i.target.dataset;if(s){const l=i.target.closest(".tab-panel"),c=l.querySelector(`.v-tab-btn[data-tab="${s}"]`),h=[...l.querySelectorAll(`.v-tab-btn:not([data-tab="${s}"])`)],d=l.querySelector(`.tab-content[data-tab="${s}"]`),f=[...l.querySelectorAll(`.tab-content:not([data-tab="${s}"])`)];c.classList.add("active"),d.style.display="block",h.forEach(m=>{m.classList.remove("active")}),f.forEach(m=>{m.style.display="none"})}}i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}">
          <button class="v-tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${y`
        <div class="tab-content col" data-tab = 'example' style="display:${this.activeSchemaTab==="example"?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${((n=o[0])===null||n===void 0?void 0:n.exampleValue)||""}"
            .textContent = "${this.fillRequestFieldsWithExample==="true"?o[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${y`
        <div class="tab-content col" data-tab = 'schema' style="display:${this.activeSchemaTab!=="example"?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${a}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const i in e.properties){var a,o;const s=e.properties[i];if(s.readOnly)continue;const l=s.examples||s.example||"",c=s.type,h=on(s),d="read focused".includes(this.renderStyle)?"200px":"160px",f=bb(h.examples||h.example,h.type);n.push(y`
        <tr title="${s.deprecated?"Deprecated":""}"> 
          <td style="width:${d}; min-width:100px;">
            <div class="param-name ${s.deprecated?"deprecated":""}">
              ${i}${(a=e.required)!==null&&a!==void 0&&a.includes(i)||s.required?y`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${h.type}</div>
          </td>  
          <td 
            style="${c==="object"?"width:100%; padding:0;":this.allowTry==="true"?"":"display:none;"} min-width:100px;" 
            colspan="${c==="object"?2:1}">
            ${c==="array"?((o=s.items)===null||o===void 0?void 0:o.format)==="binary"?y`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${m=>this.onAddRemoveFileInput(m,i,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${i}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:y`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${i}"
                    data-example = "${Array.isArray(l)?l.join("~|~"):l}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(l)?Array.isArray(l[0])?l[0]:[l[0]]:[l]}"
                  >
                  </tag-input>
                `:y`
                ${c==="object"?this.formDataParamAsObjectTemplate.call(this,i,s,t):y`
                    ${this.allowTry==="true"?y`<input
                          .value = "${this.fillRequestFieldsWithExample==="true"?f.exampleVal:""}"
                          spellcheck = "false"
                          type = "${s.format==="binary"?"file":s.format==="password"?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${i}"
                          data-example = "${Array.isArray(l)?l[0]:l}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${c==="object"?"":y`
              <td>
                ${h.default||h.constrain||h.allowedValues||h.pattern?y`
                    <div class="param-constraint">
                      ${h.default?y`<span style="font-weight:bold">Default: </span>${h.default}<br/>`:""}
                      ${h.pattern?y`<span style="font-weight:bold">Pattern: </span>${h.pattern}<br/>`:""}
                      ${h.constrain?y`${h.constrain}<br/>`:""}
                      ${h.allowedValues&&h.allowedValues.split("┃").map((m,v)=>y`
                        ${v>0?"┃":y`<span style="font-weight:bold">Allowed: </span>`}
                        ${y`
                          <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                            data-type="${h.type==="array"?h.type:"string"}"
                            data-enum="${m.trim()}"
                            @click="${w=>{const x=w.target.closest("table").querySelector(`[data-pname="${i}"]`);x&&(w.target.dataset.type==="array"?x.value=[w.target.dataset.enum]:x.value=w.target.dataset.enum)}}"
                          > 
                            ${m} 
                          </a>`}`)}
                    </div>`:""}
              </td>`}
        </tr>
        ${c==="object"?"":y`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${ze(le(s.description||""))}</span>
                ${this.exampleListTemplate.call(this,i,h.type,f.exampleList)}
              </td>
            </tr>
          `}`)}return y`
        <table role="presentation" style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return y`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?y`<span class="m-markdown-small">${ze(le(e.description))}</span>`:""}
    `}curlSyntaxTemplate(e="flex"){return y`
      <div class="col m-markdown" style="flex:1; display:${e}; position:relative; max-width: 100%;">
        <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{Pa(this.curlSyntax.replace(/\\$/,""),t)}}' part="btn btn-fill"> Copy </button>
        <pre style="white-space:pre"><code>${ze(ht().highlight(this.curlSyntax.trim().replace(/\\$/,""),ht().languages.shell,"shell"))}</code></pre>
      </div>
      `}apiResponseTabTemplate(){let e="",t="";if(!this.responseIsBlob)if(this.responseHeaders.includes("application/x-ndjson")){e="json";const r=this.responseText.split(`
`).map(n=>ht().highlight(n,ht().languages[e],e)).join(`
`);t=y`<code>${ze(r)}</code>`}else this.responseHeaders.includes("json")?(e="json",t=y`<code>${ze(ht().highlight(this.responseText,ht().languages[e],e))}</code>`):this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?(e="html",t=y`<code>${ze(ht().highlight(this.responseText,ht().languages[e],e))}</code>`):(e="text",t=y`<code>${this.responseText}</code>`);return y`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${r=>{r.target.classList.contains("tab-btn")!==!1&&(this.activeResponseTab=r.target.dataset.tab)}}">
          <button class="tab-btn ${this.activeResponseTab==="response"?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${this.activeResponseTab==="headers"?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          ${this.showCurlBeforeTry==="true"?"":y`<button class="tab-btn ${this.activeResponseTab==="curl"?"active":""}" data-tab = 'curl'>CURL</button>`}
        </div>
        ${this.responseIsBlob?y`
            <div class="tab-content col" style="flex:1; display:${this.activeResponseTab==="response"?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${r=>{Du(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${this.responseBlobType==="view"?y`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${r=>{Bu(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:y`
            <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab==="response"?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${r=>{Pa(this.responseText,r)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${t}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab==="headers"?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${r=>{Pa(this.responseHeaders,r)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${ze(ht().highlight(this.responseHeaders,ht().languages.css,"css"))}</code></pre>
        </div>
        ${this.showCurlBeforeTry==="true"?"":this.curlSyntaxTemplate(this.activeResponseTab==="curl"?"flex":"none")}
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=y`
        <select style="min-width:100px;" @change='${a=>{this.serverUrl=a.target.value}}'>
          ${this.servers.map(a=>y`<option value = "${a.url}"> ${a.url} - ${a.description} </option>`)}
        </select>
      `);const n=y`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?y`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return y`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);" part="wrap-request-btn">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${((e=this.security)===null||e===void 0?void 0:e.length)>0?y`
              ${this.api_keys.length>0?y`<div style="color:var(--blue); overflow:hidden;"> 
                    ${this.api_keys.length===1?`${(t=this.api_keys[0])===null||t===void 0?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:y`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:y`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?y`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
      ${this.showCurlBeforeTry==="true"?this.curlSyntaxTemplate():""}
    </div>
    ${this.responseMessage===""?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.dataset.example&&(t.tagName.toUpperCase()==="TAG-INPUT"?t.value=t.dataset.example.split("~|~"):t.value=t.dataset.example)})}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.value=""})}buildFetchURL(e){let t;const r=[...e.querySelectorAll("[data-ptype='path']")],n=[...e.querySelectorAll("[data-ptype='query']")],a=[...e.querySelectorAll("[data-ptype='query-object']")];t=this.path,r.map(l=>{t=t.replace(`{${l.dataset.pname}}`,encodeURIComponent(l.value))});const o=new Map,i=[];n.length>0&&n.forEach(l=>{const c=new URLSearchParams;if(l.dataset.paramAllowReserved==="true"&&i.push(l.dataset.pname),l.dataset.array==="false")l.value!==""&&c.append(l.dataset.pname,l.value);else{const{paramSerializeStyle:h,paramSerializeExplode:d}=l.dataset;let f=l.value&&Array.isArray(l.value)?l.value:[];f=Array.isArray(f)?f.filter(m=>m!==""):[],f.length>0&&(h==="spaceDelimited"?c.append(l.dataset.pname,f.join(" ").replace(/^\s|\s$/g,"")):h==="pipeDelimited"?c.append(l.dataset.pname,f.join("|").replace(/^\||\|$/g,"")):d==="true"?f.forEach(m=>{c.append(l.dataset.pname,m)}):c.append(l.dataset.pname,f.join(",").replace(/^,|,$/g,"")))}c.toString()&&o.set(l.dataset.pname,c)}),a.length>0&&a.map(l=>{const c=new URLSearchParams;try{let h={};const{paramSerializeStyle:d,paramSerializeExplode:f}=l.dataset;if(h=Object.assign(h,JSON.parse(l.value.replace(/\s+/g," "))),l.dataset.paramAllowReserved==="true"&&i.push(l.dataset.pname),"json xml".includes(d))d==="json"?c.append(l.dataset.pname,JSON.stringify(h)):d==="xml"&&c.append(l.dataset.pname,Su(h));else for(const m in h)typeof h[m]=="object"?Array.isArray(h[m])&&(d==="spaceDelimited"?c.append(m,h[m].join(" ")):d==="pipeDelimited"?c.append(m,h[m].join("|")):f==="true"?h[m].forEach(v=>{c.append(m,v)}):c.append(m,h[m])):c.append(m,h[m])}catch{console.error("RapiDoc: unable to parse %s into object",l.value)}c.toString()&&o.set(l.dataset.pname,c)});let s="";return o.size&&(o.forEach((l,c)=>{i.includes(c)?(s+=`${c}=`,s+=l.getAll(c).join(`&${c}=`),s+="&"):s+=`${l.toString()}&`}),s=s.slice(0,-1)),s.length!==0&&(t=`${t}${t.includes("?")?"&":"?"}${s}`),this.api_keys.filter(l=>l.in==="query").forEach(l=>{t=`${t}${t.includes("?")?"&":"?"}${l.name}=${encodeURIComponent(l.finalKeyValue)}`}),t=`${this.serverUrl.replace(/\/$/,"")}${t}`,t}buildFetchHeaders(e){var t;const r=(t=this.closest(".expanded-req-resp-container, .req-resp-container"))===null||t===void 0?void 0:t.getElementsByTagName("api-response")[0],n=[...e.querySelectorAll("[data-ptype='header']")],a=e.querySelector(".request-body-container"),o=r==null?void 0:r.selectedMimeType,i=new Headers;if(o?i.append("Accept",o):this.accept&&i.append("Accept",this.accept),this.api_keys.filter(s=>s.in==="header").forEach(s=>{i.append(s.name,s.finalKeyValue)}),n.map(s=>{s.value&&i.append(s.dataset.pname,s.value)}),a){const s=a.dataset.selectedRequestBodyType;s.includes("form-data")||i.append("Content-Type",s)}return i}buildFetchBodyOptions(e){const t=e.querySelector(".request-body-container"),r={method:this.method.toUpperCase()};if(t){const n=t.dataset.selectedRequestBodyType;if(n.includes("form-urlencoded")){const a=e.querySelector("[data-ptype='dynamic-form']");if(a){const o=a.value,i=new URLSearchParams;let s,l=!0;if(o)try{s=JSON.parse(o)}catch(c){l=!1,console.warn("RapiDoc: Invalid JSON provided",c)}else l=!1;if(l){for(const c in s)i.append(c,JSON.stringify(s[c]));r.body=i}}else{const o=[...e.querySelectorAll("[data-ptype='form-urlencode']")],i=new URLSearchParams;o.filter(s=>s.type!=="file").forEach(s=>{if(s.dataset.array==="false")s.value&&i.append(s.dataset.pname,s.value);else{const l=s.value&&Array.isArray(s.value)?s.value.join(","):"";i.append(s.dataset.pname,l)}}),r.body=i}}else if(n.includes("form-data")){const a=new FormData;[...e.querySelectorAll("[data-ptype='form-data']")].forEach(o=>{o.dataset.array==="false"?o.type==="file"&&o.files[0]?a.append(o.dataset.pname,o.files[0],o.files[0].name):o.value&&a.append(o.dataset.pname,o.value):o.value&&Array.isArray(o.value)&&a.append(o.dataset.pname,o.value.join(","))}),r.body=a}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(n)){const a=e.querySelector(".request-body-param-file");a!=null&&a.files[0]&&(r.body=a.files[0])}else if(n.includes("json")||n.includes("xml")||n.includes("text")){const a=e.querySelector(".request-body-param-user-input");a!=null&&a.value&&(r.body=a.value)}}return r}async onTryClick(e){const t=e.target,r=t.closest(".request-panel"),n=this.buildFetchURL(r),a=this.buildFetchBodyOptions(r),o=this.buildFetchHeaders(r);this.responseUrl="",this.responseHeaders=[],this.curlSyntax=this.generateCURLSyntax(n,o,a,r),this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.fetchCredentials&&(a.credentials=this.fetchCredentials);const i=new AbortController,{signal:s}=i;a.headers=o;const l={url:n,...a};this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:l,controller:i}}));const c={method:l.method,headers:l.headers,credentials:l.credentials,body:l.body},h=new Request(l.url,c);let d,f;try{let m,v,w;t.disabled=!0,this.responseText="⌛",this.responseMessage="",this.requestUpdate();const x=performance.now();d=await fetch(h,{signal:s});const p=performance.now();f=d.clone(),t.disabled=!1,this.responseMessage=y`${d.statusText?`${d.statusText}:${d.status}`:d.status} <div style="color:var(--light-fg)"> Took ${Math.round(p-x)} milliseconds </div>`,this.responseUrl=d.url;const k={};d.headers.forEach((C,F)=>{k[F]=C,this.responseHeaders=`${this.responseHeaders}${F}: ${C}
`});const $=d.headers.get("content-type");if((await d.clone().text()).length===0)this.responseText="";else if($){if($==="application/x-ndjson")this.responseText=await d.text();else if($.includes("json"))if(/charset=[^"']+/.test($)){const C=$.split("charset=")[1],F=await d.arrayBuffer();try{w=new TextDecoder(C).decode(F)}catch{w=new TextDecoder("utf-8").decode(F)}try{v=JSON.parse(w),this.responseText=JSON.stringify(v,null,2)}catch{this.responseText=w}}else v=await d.json(),this.responseText=JSON.stringify(v,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test($)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test($)?(this.responseIsBlob=!0,this.responseBlobType="view"):(w=await d.text(),$.includes("xml")?this.responseText=A_()(w,{textNodesOnSameLine:!0,indentor:"  "}):this.responseText=w);if(this.responseIsBlob){const C=d.headers.get("content-disposition");this.respContentDisposition=C?C.split("filename=")[1].replace(/"|'/g,""):"filename",m=await d.blob(),this.responseBlobUrl=URL.createObjectURL(m)}}else w=await d.text(),this.responseText=w;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:h,response:f,responseHeaders:k,responseBody:v||w||m,responseStatus:f.ok}}))}catch(m){t.disabled=!1,m.name==="AbortError"?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:m,request:h}})),this.responseMessage="Request Aborted",this.responseText="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:m,request:h}})),this.responseMessage=`${m.message} (CORS or Network Issue)`)}this.requestUpdate()}liveCURLSyntaxUpdate(e){this.applyCURLSyntax(e),this.requestUpdate()}onGenerateCURLClick(e){const t=this.getRequestPanel(e);this.applyCURLSyntax(t)}getRequestPanel(e){return e.target.closest(".request-panel")}applyCURLSyntax(e){const t=this.buildFetchURL(e),r=this.buildFetchBodyOptions(e),n=this.buildFetchHeaders(e);this.curlSyntax=this.generateCURLSyntax(t,n,r,e)}generateCURLSyntax(e,t,r,n){let a,o="",i="",s="",l="";const c=n.querySelector(".request-body-container");if(e.startsWith("http")===!1?a=new URL(e,window.location.href).href:a=e,o=`curl -X ${this.method.toUpperCase()} "${a}" \\
`,i=Array.from(t).map(([h,d])=>` -H "${h}: ${d}"`).join(`\\
`),i&&(i=`${i} \\
`),r.body instanceof URLSearchParams)s=` -d ${r.body.toString()} \\
`;else if(r.body instanceof File)s=` --data-binary @${r.body.name} \\
`;else if(r.body instanceof FormData)l=Array.from(r.body).reduce((h,[d,f])=>{if(f instanceof File)return[...h,` -F "${d}=@${f.name}"`];const m=f.match(/([^,],)/gm);if(m){const v=m.map(w=>`-F "${d}[]=${w}"`);return[...h,...v]}return[...h,` -F "${d}=${f}"`]},[]).join(`\\
`);else if(c&&c.dataset.selectedRequestBodyType){const h=c.dataset.selectedRequestBodyType,d=n.querySelector(".request-body-param-user-input");if(d!=null&&d.value){if(r.body=d.value,h.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(d.value))}' \\
`}catch{}s||(s=` -d '${d.value.replace(/'/g,`'"'"'`)}' \\
`)}}return`${o}${i}${s}${l}`}onAddRemoveFileInput(e,t,r){if(e.target.tagName.toLowerCase()!=="button")return;if(e.target.classList.contains("file-input-remove-btn"))return void e.target.closest(".input-set").remove();const n=e.target.closest(".file-input-container"),a=document.createElement("div");a.setAttribute("class","input-set row");const o=document.createElement("input");o.type="file",o.style="width:200px; margin-top:2px;",o.setAttribute("data-pname",t),o.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),o.setAttribute("data-array","false"),o.setAttribute("data-file-array","true");const i=document.createElement("button");i.setAttribute("class","file-input-remove-btn"),i.innerHTML="&#x2715;",a.appendChild(o),a.appendChild(i),n.insertBefore(a,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.curlSyntax="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends R{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[zr,kb,H`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key .key-label {
        font-size: var(--font-size-mono);
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-all-descr .tr:not(.expanded-descr) {
        max-height: calc(var(--font-size-small) + var(--font-size-small));
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,Mn]}render(){var e,t,r;return y`
      <div class="table ${this.schemaDescriptionExpanded==="true"?"expanded-all-descr":"collapsed-all-descr"}" @click="${n=>this.handleAllEvents(n)}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?y`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item schema-multiline-toggle' > 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        <span part="schema-description" class='m-markdown'> ${ze(le(((r=this.data)===null||r===void 0?void 0:r["::description"])||""))} </span>
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?y`
              ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l,c;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||e&&e["::readwrite"]==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||e&&e["::readwrite"]==="writeonly"))return;if(!e)return y`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(o+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${t==="array"?y`<span class='mono-font'> [ ] </span>`:t==="object"?y`<span class='mono-font'> { } </span>`:y`<span class='mono-font'> schema undefined </span>`}
      </div>`;const h=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?o:o+1,d=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1,f=16*d;if(Object.keys(e).length===0)return y`<span class="td key object" style='padding-left:${f}px'>${n}</span>`;let m="",v="",w=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))m=n.replace("::","").replace("~"," "),w=!0;else if(n.startsWith("::OPTION")){const I=n.split("~");m=I[1],v=I[2]}else m=n;let x="";if(e["::type"]==="object"?x=t==="array"?"array of object":e["::dataTypeLabel"]||e["::type"]:e["::type"]==="array"&&(x=t==="array"?"array of array "+(r!=="object"?`of ${r}`:""):e["::dataTypeLabel"]||e["::type"]),typeof e=="object")return y`
        ${h>=0&&n?y`
            <div class='tr ${h<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${m}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${f}px'>
                ${m||v?y`
                    <span class='obj-toggle ${h<this.schemaExpandLevel?"expanded":"collapsed"}' data-obj='${m}'>
                      ${o<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?y`<span class="xxx-of-key" style="margin-left:-6px">${m}</span><span class="${w?"xxx-of-key":"xxx-of-descr"}">${v}</span>`:m.endsWith("*")?y`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${m.substring(0,m.length-1)}</span><span style='color:var(--red);'>*</span>`:y`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${m==="::props"?"":m}</span>`}
                ${e["::type"]==="xxx-of"&&t==="array"?y`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${e["::readwrite"]==="readonly"?"Read-Only":e["::readwrite"]==="writeonly"?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":x}
                ${e["::readwrite"]==="readonly"?" 🆁":e["::readwrite"]==="writeonly"?" 🆆":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${ze(le(a||""))}</div>
            </div>`:y`
            ${e["::type"]==="array"&&t==="array"?y`
                <div class='tr'> 
                  <div class='td key'></div> 
                  <div class='td key-type'>
                    ${r&&r!=="object"?`${t} of ${r}`:t}
                  </div> 
                  <div class='td key-descr'></div> 
                </div>`:""}`}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?y`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",h,d,"")}`:y`
            ${Object.keys(e).map(I=>{var N;return y`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(I)?e[I]["::type"]==="array"||e[I]["::type"]==="object"?y`${this.generateTree(e[I]["::type"]==="array"?e[I]["::props"]:e[I],e[I]["::type"],e[I]["::array-type"]||"",I,e[I]["::description"],h,d,e[I]["::readwrite"]?e[I]["::readwrite"]:"")}`:"":y`${this.generateTree(e[I]["::type"]==="array"?e[I]["::props"]:e[I],e[I]["::type"],e[I]["::array-type"]||"",I,((N=e[I])===null||N===void 0?void 0:N["::description"])||"",h,d,e[I]["::readwrite"]?e[I]["::readwrite"]:"")}`}
            `})}
          `}
        <div>
      `;const[p,k,$,C,F,O,U,A,T]=e.split("~|~");if(k==="🆁"&&this.schemaHideReadOnly==="true"||k==="🆆"&&this.schemaHideWriteOnly==="true")return;const _=p.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),B=$||C||F||O?'<span class="descr-expand-toggle">➔</span>':"";let E="";return E=t==="array"?y` 
        <div class='td key-type ${_}' title="${s==="readonly"?"Read-Only":k==="writeonly"?"Write-Only":""}">
          [${p}] ${s==="readonly"?"🆁":s==="writeonly"?"🆆":""}
        </div>`:y` 
        <div class='td key-type ${_}' title="${k==="🆁"?"Read-Only":k==="🆆"?"Write-Only":""}">
          ${p} ${k}
        </div>`,y`
      <div class = "tr primitive" title="${T?"Deprecated":""}">
        <div class="td key ${T}" style='padding-left:${f}px'>
          ${T?y`<span style='color:var(--red);'>✗</span>`:""}
          ${(c=m)!==null&&c!==void 0&&c.endsWith("*")?y`
              <span class="key-label">${m.substring(0,m.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?y`<span class='xxx-of-key'>${m}</span><span class="xxx-of-descr">${v}</span>`:y`${m?y`<span class="key-label"> ${m}</span>`:y`<span class="xxx-of-descr">${A}</span>`}`}
        </div>
        ${E}
        <div class='td key-descr' style='font-size: var(--font-size-small)'>
          ${y`<span class="m-markdown-small">
            ${ze(le(t==="array"?`${B} ${a}`:A?`${B} <b>${A}:</b> ${U}`:`${B} ${U}`))}
          </span>`}
          ${$?y`<div class='' style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${$}</div>`:""}
          ${C?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${C}</div>`:""}
          ${F?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>${p==="const"?"Value":"Allowed"}: </span>${F}</div>`:""}
          ${O?y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${O}</div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("obj-toggle"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function T_(e){const t=new le.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${e}--${o.slug(a)}">${r}</h${n}>`,t}function C_(e){const t=e.target.closest(".tag-container").querySelector(".tag-description"),r=e.target.closest(".tag-container").querySelector(".tag-icon");t&&r&&(t.classList.contains("expanded")?(t.style.maxHeight=0,t.classList.replace("expanded","collapsed"),r.classList.replace("expanded","collapsed")):(t.style.maxHeight=`${t.scrollHeight}px`,t.classList.replace("collapsed","expanded"),r.classList.replace("collapsed","expanded")))}function Au(e,t="",r=""){var n,a,o,i,s,l,c,h,d;const f=new Set;for(const k in e.responses)for(const $ in(m=e.responses[k])===null||m===void 0?void 0:m.content){var m;f.add($.trim())}const v=[...f].join(", "),w=this.resolvedSpec.securitySchemes.filter(k=>{var $;return k.finalKeyValue&&(($=e.security)===null||$===void 0?void 0:$.some(C=>k.securitySchemeId in C))})||[],x=this.resolvedSpec.securitySchemes.find(k=>k.securitySchemeId===cn&&k.value!=="-");x&&w.push(x);const p=e.xCodeSamples?yb.call(this,e.xCodeSamples):"";return y`
    ${this.renderStyle==="read"?y`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${this.renderStyle==="focused"&&t!=="General ⦂"?y`
          <div class="tag-container" part="section-operation-tag"> 
            <span class="upper" style="font-weight:bold; font-size:18px;"> ${t} </span>
            ${r?y`
                <svg class="tag-icon collapsed" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" fill="none" style="stroke:var(--primary-color); vertical-align:top; cursor:pointer"
                @click="${k=>{C_.call(this,k)}}"
                >
                  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path><path d="M18 4v17"></path><path d="M15 18l3 3l3 -3"></path>
                </svg>
                <div class="tag-description collapsed" style="max-height:0px; overflow:hidden; margin-top:16px; border:1px solid var(--border-color)"> 
                  <div class="m-markdown" style="padding:8px"> ${ze(le(r))}</div>  
                </div>`:""}  
          </div>
        `:""}
      ${e.deprecated?y`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${y`
        ${e.xBadges&&((n=e.xBadges)===null||n===void 0?void 0:n.length)>0?y`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map(k=>y`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${k.color}, var(--input-bg)); color:var(--${k.color}); border:1px solid var(--${k.color})">${k.label}</span>`)}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
        ${e.isWebhook?y`<span part="section-operation-webhook" style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:y`
            <div part="section-operation-webhook-method" class="mono-font regular-font-size" style="text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)"> 
              <span part="label-operation-method" class="regular-font upper method-fg bold-text ${e.method}">${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?y`<div class="m-markdown"> ${ze(le(e.description))}</div>`:""}
      ${gb.call(this,e.security)}
      ${(a=e.externalDocs)!==null&&a!==void 0&&a.url||(o=e.externalDocs)!==null&&o!==void 0&&o.description?y`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${ze(le(((i=e.externalDocs)===null||i===void 0?void 0:i.description)||""))} </div>
            ${(s=e.externalDocs)!==null&&s!==void 0&&s.url?y`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${(l=e.externalDocs)===null||l===void 0?void 0:l.url}" target="_blank">
                  ${(c=e.externalDocs)===null||c===void 0?void 0:c.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>`:""}
          </div>`:""}
      ${p}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${w}"
          .servers = "${e.servers}"
          server-url = "${((h=e.servers)===null||h===void 0||(d=h[0])===null||d===void 0?void 0:d.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${v}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?vb.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function j_(){return this.resolvedSpec?y`
  ${this.resolvedSpec.tags.map(e=>y`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${ze(`
          <div class="m-markdown regular-font">
          ${le(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:T_(e.elementId)}:void 0)}
        </div>`)}
      </div>
    </section>
    <section class="regular-font section-gap--read-mode" part="section-operations-in-tag">
      ${e.paths.map(t=>Au.call(this,t))}
    </section>
    `)}
`:""}function I_(e){return y`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${this.schemaStyle==="table"?y`
      <schema-table
        .data = '${vt(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-table>`:y`
      <schema-tree
        .data = '${vt(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}function __(e,t){return e.id.indexOf("schemas-")!==-1?I_.call(this,e):y`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${y`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?y`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function P_(){return this.resolvedSpec?y`
  ${this.resolvedSpec.components.map(e=>y`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${ze(`<div class='m-markdown regular-font'>${le(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter(t=>t.expanded!==!1).map(t=>__.call(this,t,e.name))}
    </div>
    `)}
`:""}function R_(){const e=new le.Renderer;return e.heading=(t,r,n,a)=>`<h${r} class="observe-me" id="overview--${a.slug(n)}">${t}</h${r}>`,e}function Os(){var e,t,r,n;return y`
    <section id="overview" part="section-overview"
      class="observe-me ${this.renderStyle==="view"?"section-gap":"section-gap--read-mode"}">
      ${(e=this.resolvedSpec)!==null&&e!==void 0&&e.info?y`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?y`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${(t=this.resolvedSpec.info.contact)!==null&&t!==void 0&&t.email?y`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${(r=this.resolvedSpec.info.contact)!==null&&r!==void 0&&r.url?y`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?y`<span>License: 
                ${this.resolvedSpec.info.license.url?y`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?y`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&this.allowSpecFileDownload==="true"?y`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="min-width:170px" part="btn btn-outline" @click='${a=>{Du(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${(n=this.specUrl)!==null&&n!==void 0&&n.trim().toLowerCase().endsWith("json")?y`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${a=>{Bu(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?y`${ze(`
                <div class="m-markdown regular-font">
                ${le(this.resolvedSpec.info.description,this.infoDescriptionHeadingsInNavBar==="true"?{renderer:R_()}:void 0)}
              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function Eu(e){var t;const r=(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.find(n=>n.url===e);return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function Sb(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach(a=>{const o=new RegExp(`{${a.dataset.var}}`,"g");n=n.replace(o,a.value)}),t.computedUrl=n,this.requestUpdate()}function L_(){return this.selectedServer&&this.selectedServer.variables?y`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table' role='presentation'>
      ${Object.entries(this.selectedServer.variables).map(e=>y`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?y`
            <select
              data-var = "${e[0]}"
              @input = ${t=>{Sb.call(this,t,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map(t=>e[1].default===t[1]?y`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:y`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`)}
            </select>`:y`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${t=>{Sb.call(this,t,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?y`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${ze(le(e[1].description))} </span></td></tr>`:""}
      `)}
    </table>
    `:""}function Ab(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":y`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&((e=this.resolvedSpec.servers)===null||e===void 0?void 0:e.length)!==0?y`
          ${(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.map((n,a)=>y`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${a}'
              value = '${n.url}'
              @change = ${()=>{Eu.call(this,n.url)}}
              .checked = '${this.selectedServer.url===n.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${a}'>
                ${n.url} ${n.description?y`- <span class='regular-font'>${n.description} </span>`:""}
              </label>
            <br/>
          `)}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${((r=this.selectedServer)===null||r===void 0?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${L_.call(this)}
  </section>`}function Eb(e,t="toggle"){const r=e==null?void 0:e.closest(".nav-bar-tag-and-paths"),n=r==null?void 0:r.querySelector(".nav-bar-paths-under-tag");if(r){const a=r.classList.contains("expanded");!a||t!=="toggle"&&t!=="collapse"?a||t!=="toggle"&&t!=="expand"||(r.classList.replace("collapsed","expanded"),n.style.maxHeight=`${n.scrollHeight}px`):(n.style.maxHeight=0,r.classList.replace("expanded","collapsed"))}}function Ob(e){var t,r,n,a;if(e.type!=="click"&&(e.type!=="keyup"||e.keyCode!==13))return;const o=e.target;e.stopPropagation(),((t=o.dataset)===null||t===void 0?void 0:t.action)==="navigate"?this.scrollToEventTarget(e,!1):((r=o.dataset)===null||r===void 0?void 0:r.action)==="expand-all"||((n=o.dataset)===null||n===void 0?void 0:n.action)==="collapse-all"?function(i,s="expand-all"){if(i.type!=="click"&&(i.type!=="keyup"||i.keyCode!==13))return;const l=[...i.target.closest(".nav-scroll").querySelectorAll(".nav-bar-tag-and-paths")];s==="expand-all"?l.forEach(c=>{const h=c.querySelector(".nav-bar-paths-under-tag");c.classList.replace("collapsed","expanded"),h.style.maxHeight=`${h==null?void 0:h.scrollHeight}px`}):l.forEach(c=>{c.classList.replace("expanded","collapsed"),c.querySelector(".nav-bar-paths-under-tag").style.maxHeight=0})}(e,o.dataset.action):((a=o.dataset)===null||a===void 0?void 0:a.action)==="expand-collapse-tag"&&Eb(o,"toggle")}function F_(){var e,t,r,n;return!this.resolvedSpec||this.resolvedSpec.specLoadError?y`
      <nav class='nav-bar' part='section-navbar'>
        <slot name='nav-logo' class='logo'></slot>
      </nav>
    `:y`
  <nav class='nav-bar ${this.renderStyle}' part='section-navbar'>
    <slot name='nav-logo' class='logo'></slot>
    ${this.allowSearch==="false"&&this.allowAdvancedSearch==="false"?"":y`
        <div style='display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${this.allowAdvancedSearch==="false"?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}' part='section-navbar-search'>
          ${this.allowSearch==="false"?"":y`
              <div style = 'display:flex; flex:1; line-height:22px;'>
                <input id = 'nav-bar-search' 
                  part = 'textbox textbox-nav-filter'
                  style = 'width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)'
                  type = 'text'
                  placeholder = 'Filter' 
                  @change = '${this.onSearchChange}'
                  spellcheck = 'false'
                >
                <div style='margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;'>&#x21a9;</div>
              </div>  
              ${this.matchPaths?y`
                  <button @click = '${this.onClearSearch}' class='m-btn thin-border' style='margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;' part='btn btn-outline btn-clear-filter'>
                    CLEAR
                  </button>`:""}
            `}
          ${this.allowAdvancedSearch==="false"||this.matchPaths?"":y`
              <button class='m-btn primary' part='btn btn-fill btn-search' style='margin-left:5px; padding:6px 8px; width:75px' @click='${this.onShowSearchModalClicked}'>
                SEARCH
              </button>
            `}
        </div>
      `}
    ${y`<nav class='nav-scroll' tabindex='-1' part='section-navbar-scroll' @click='${a=>Ob.call(this,a)}' @keyup='${a=>Ob.call(this,a)}' >
      ${this.showInfo!=="false"&&this.resolvedSpec.info?y`
          ${this.infoDescriptionHeadingsInNavBar==="true"?y`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?y`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-content-id='overview' data-action='navigate' tabindex='0' part='section-navbar-item section-navbar-overview'> 
                    ${((e=this.resolvedSpec.info)===null||e===void 0||(t=e.title)===null||t===void 0?void 0:t.trim())||"Overview"}
                  </div>`:""}
              <div class='overview-headers'>
                ${this.resolvedSpec.infoDescriptionHeaders.map(a=>y`
                  <div
                    class='nav-bar-h${a.depth} ${this.navActiveItemMarker}' 
                    id='link-overview--${new le.Slugger().slug(a.text)}'
                    data-action='navigate' 
                    data-content-id='overview--${new le.Slugger().slug(a.text)}' 
                  >
                    ${a.text}
                  </div>`)}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?y`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:y`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-action='navigate' data-content-id='overview' tabindex='0'> 
              ${((r=this.resolvedSpec.info)===null||r===void 0||(n=r.title)===null||n===void 0?void 0:n.trim())||"Overview"}
            </div>`}
        `:""}
    
      ${this.allowServerSelection==="false"?"":y`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-servers' data-action='navigate' data-content-id='servers' tabindex='0' part='section-navbar-item section-navbar-servers'> API Servers </div>`}
      ${this.allowAuthentication!=="false"&&this.resolvedSpec.securitySchemes?y`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-auth' data-action='navigate' data-content-id='auth' tabindex='0' part='section-navbar-item section-navbar-auth'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-action='navigate' data-content-id='${this.renderStyle==="focused"?"":"operations-top"}' part='section-navbar-item section-navbar-operations-top'>
        <div style='font-size:16px; display:flex; margin-left:10px;'>
          ${this.renderStyle==="focused"?y`
              <div class='nav-bar-expand-all'
                data-action='expand-all'
                tabindex='0' 
                title='Expand all'
              >▸</div>
              <div class='nav-bar-collapse-all'
                data-action='collapse-all'
                tabindex='0' 
                title='Collapse all'
              >▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(a=>a.paths.filter(o=>Ra(this.matchPaths,o,this.matchType)).length).map(a=>{var o;return y`
          <div class='nav-bar-tag-and-paths ${this.renderStyle==="read"||a.expanded?"expanded":"collapsed"}' >
            ${a.name==="General ⦂"?y`<hr style='border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;'/>`:y`
                <div 
                  class='nav-bar-tag ${this.navActiveItemMarker}'
                  part='section-navbar-item section-navbar-tag'
                  id='link-${a.elementId}'
                  data-action='${this.renderStyle==="read"||this.onNavTagClick==="show-description"?"navigate":"expand-collapse-tag"}'
                  data-content-id='${(this.renderStyle==="read"?`${a.elementId}`:this.onNavTagClick==="show-description")?`${a.elementId}`:""}'
                  data-first-path-id='${a.firstPathId}'
                  tabindex='0'
                >
                  <div style="pointer-events:none;">${a.name}</div>
                  <div class='nav-bar-tag-icon' tabindex='0' data-action='expand-collapse-tag'></div>
                </div>
              `}
            ${this.infoDescriptionHeadingsInNavBar==="true"?y`
                ${this.renderStyle==="focused"&&this.onNavTagClick==="expand-collapse"?"":y`
                    <div class='tag-headers'>
                      ${a.headers.map(i=>y`
                      <div
                        class='nav-bar-h${i.depth} ${this.navActiveItemMarker}'
                        part='section-navbar-item section-navbar-h${i.depth}'
                        id='link-${a.elementId}--${new le.Slugger().slug(i.text)}'
                        data-action='navigate'
                        data-content-id='${a.elementId}--${new le.Slugger().slug(i.text)}'
                        tabindex='0'
                      > ${i.text}</div>`)}
                    </div>`}`:""}
            <div class='nav-bar-paths-under-tag' style='max-height:${a.expanded||this.renderStyle==="read"?50*(((o=a.paths)===null||o===void 0?void 0:o.length)||1):0}px;'>
              <!-- Paths in each tag (endpoints) -->
              ${a.paths.filter(i=>!this.matchPaths||Ra(this.matchPaths,i,this.matchType)).map(i=>y`
              <div 
                class='nav-bar-path ${this.navActiveItemMarker} ${this.usePathInNavBar==="true"?"small-font":""}'
                part='section-navbar-item section-navbar-path'
                data-action='navigate'
                data-content-id='${i.elementId}'
                id='link-${i.elementId}'
                tabindex='0'
              >
                <span style = 'display:flex; pointer-events: none; align-items:start; ${i.deprecated?"filter:opacity(0.5)":""}'>
                  ${y`<span class='nav-method ${this.showMethodInNavBar} ${i.method}' style='pointer-events: none;'>
                      ${this.showMethodInNavBar==="as-colored-block"?i.method.substring(0,3).toUpperCase():i.method.toUpperCase()}
                    </span>`}
                  ${i.isWebhook?y`<span style='font-weight:bold; pointer-events: none; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)'>WEBHOOK</span>`:""}
                  ${this.usePathInNavBar==="true"?y`<span style='pointer-events: none;' class='mono-font'>${i.path}</span>`:i.summary||i.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `})}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&this.showComponents==="true"&&this.renderStyle==="focused"?y`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(a=>a.subComponents.length?y`
              <div class='nav-bar-tag'
                part='section-navbar-item section-navbar-tag'
                data-action='navigate' 
                data-content-id='cmp--${a.name.toLowerCase()}' 
                id='link-cmp--${a.name.toLowerCase()}'
              >
                ${a.name}
              </div>
              ${a.subComponents.filter(o=>o.expanded!==!1).map(o=>y`
                <div class='nav-bar-path' data-action='navigate' data-content-id='cmp--${o.id}' id='link-cmp--${o.id}'>
                  <span> ${o.name} </span>
                </div>`)}`:"")}`:""}
    </nav>`}
</nav>
`}function D_(e){const t=new le.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${e}--${o.slug(a)}">${r}</h${n}>`,t}function Ts(e){return y`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function Tb(){var e;if(this.showInfo==="true")return Ts(Os.call(this));const t=this.resolvedSpec.tags[0],r=(e=this.resolvedSpec.tags[0])===null||e===void 0?void 0:e.paths[0];return Ts(t&&r?Au.call(this,r,t.name):"")}function B_(e){return y`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${this.onNavTagClick==="show-description"&&e.description?y`
        <div class="m-markdown">
          ${ze(`
            <div class="m-markdown regular-font">
              ${le(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:D_(e.elementId)}:void 0)}
            </div>`)}
        </div>`:""}
  `}function N_(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,a=0;if(e.startsWith("overview")&&this.showInfo==="true")t=Os.call(this);else if(e==="auth"&&this.allowAuthentication==="true")t=mb.call(this);else if(e==="servers"&&this.allowServerSelection==="true")t=Ab.call(this);else if(e==="operations-top")t=y`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&this.showComponents==="true")t=P_.call(this);else if(e.startsWith("tag--")){const o=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find(i=>i.elementId===o),t=n?Ts.call(this,B_.call(this,n)):Tb.call(this)}else{for(a=0;a<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[a],r=this.resolvedSpec.tags[a].paths.find(o=>`${o.elementId}`===e),!r);a+=1);r?(Eb(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=Ts.call(this,Au.call(this,r,n.name||"",n.description||""))):t=Tb.call(this)}return t}function q_(e){if(e.expanded)e.expanded=!1,this.updateRoute==="true"&&this.replaceHistoryState("");else if(e.expanded=!0,this.updateRoute==="true"){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&this.replaceHistoryState(e.elementId)}this.requestUpdate()}function z_(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];t==="expand-all"?r.map(n=>{n.classList.replace("collapsed","expanded")}):r.map(n=>{n.classList.replace("expanded","collapsed")})}function Cb(e,t="expand-all"){z_.call(this,e.target.closest(".operations-root"),t)}function jb(e,t=!1){return y`
  <summary @click="${r=>{q_.call(this,e,r)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?y`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?y`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?y`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function Ib(e){var t,r,n,a,o,i,s;const l=new Set;for(const v in e.responses)for(const w in(c=e.responses[v])===null||c===void 0?void 0:c.content){var c;l.add(w.trim())}const h=[...l].join(", "),d=this.resolvedSpec.securitySchemes.filter(v=>{var w;return v.finalKeyValue&&((w=e.security)===null||w===void 0?void 0:w.some(x=>v.securitySchemeId in x))})||[],f=this.resolvedSpec.securitySchemes.find(v=>v.securitySchemeId===cn&&v.value!=="-");f&&d.push(f);const m=e.xCodeSamples?yb(e.xCodeSamples):"";return y`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?y`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?y`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&((t=e.xBadges)===null||t===void 0?void 0:t.length)>0?y`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map(v=>y`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${v.color}, var(--input-bg)); color:var(--${v.color}); border:1px solid var(--${v.color})">${v.label}</span>`)}
          </div>
          `:""}

      ${e.description?y`<div part="section-endpoint-body-description" class="m-markdown"> ${ze(le(e.description))}</div>`:""}
      ${(r=e.externalDocs)!==null&&r!==void 0&&r.url||(n=e.externalDocs)!==null&&n!==void 0&&n.description?y`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${ze(le(((a=e.externalDocs)===null||a===void 0?void 0:a.description)||""))} </div>
            ${(o=e.externalDocs)!==null&&o!==void 0&&o.url?y`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${(i=e.externalDocs)===null||i===void 0?void 0:i.url}" target="_blank"> 
                  ${(s=e.externalDocs)===null||s===void 0?void 0:s.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>`:""}
          </div>`:""}
      <slot name="${e.elementId}"></slot>
      ${gb.call(this,e.security)}
      ${m}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${d}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${h}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </api-request>

          ${e.callbacks?vb.call(this,e.callbacks):""}
        </div>  

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses="${e.responses}"
          active-schema-tab = "${this.defaultSchemaTab}" 
          render-style="${this.renderStyle}" 
          schema-style="${this.schemaStyle}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
          textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
  </div>`}function U_(e=!0,t=!0,r=!1){return this.resolvedSpec?y`
    ${e?y`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${n=>Cb(n,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${n=>Cb(n,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map(n=>y`
      ${t?y` 
          <div class='regular-font section-gap section-tag ${n.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{n.expanded=!n.expanded,this.requestUpdate()}}">
              <div id='${n.elementId}' class="sub-title tag" style="color:var(--primary-color)">${n.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${n.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${ze(le(n.description||""))}
              </div>
              ${n.paths.filter(a=>!this.matchPaths||Ra(this.matchPaths,a,this.matchType)).map(a=>y`
                <section part="section-endpoint" id='${a.elementId}' class='m-endpoint regular-font ${a.method} ${r||a.expanded?"expanded":"collapsed"}'>
                  ${jb.call(this,a,r)}      
                  ${r||a.expanded?Ib.call(this,a):""}
                </section>`)}
            </div>
          </div>`:y`
          <div class='section-tag-body'>
          ${n.paths.filter(a=>!this.matchPaths||Ra(this.matchPaths,a,this.matchType)).map(a=>y`
            <section id='${a.elementId}' class='m-endpoint regular-font ${a.method} ${r||a.expanded?"expanded":"collapsed"}'>
              ${jb.call(this,a,r)}      
              ${r||a.expanded?Ib.call(this,a):""}
            </section>`)}
          </div>
        `}
  `)}`:""}function Cs(){return y`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",y`
  <div style=${e}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${this.allowSpecUrlLoad==="false"?"":y`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSpecUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${this.allowSpecFileLoad==="false"?"":y`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSpecFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${this.allowSearch==="false"||"read focused".includes(this.renderStyle)?"":y`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${this.allowAdvancedSearch==="false"||"read focused".includes(this.renderStyle)?"":y`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;var e}customElements.define("api-response",class extends R{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},webhook:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[zr,Ta,ja,Ca,Un,ks,H`
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,Mn]}render(){return y`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const a={};for(const i in(e=this.responses[n])===null||e===void 0?void 0:e.content){var e,t;const s=this.responses[n].content[i];this.selectedMimeType||(this.selectedMimeType=i);const l=vt(s.schema,{}),c=Aa(s.schema,i,s.examples,s.example,this.callback!=="true"&&this.webhook!=="true",this.callback==="true"||this.webhook==="true",i.includes("json")?"json":"text");a[i]={description:this.responses[n].description,examples:c,selectedExample:((t=c[0])===null||t===void 0?void 0:t.exampleId)||"",schemaTree:l}}const o=[];for(const i in(r=this.responses[n])===null||r===void 0?void 0:r.headers){var r;o.push({name:i,...this.responses[n].headers[i]})}this.headersForEachRespStatus[n]=o,this.mimeResponsesForEachStatus[n]=a}return y`
      ${Object.keys(this.responses).length>1?y`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(n=>y`
            ${n==="$$ref"?"":y`
                <button 
                  @click="${()=>{this.selectedStatus=n,this.responses[n].content&&Object.keys(this.responses[n].content)[0]?this.selectedMimeType=Object.keys(this.responses[n].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===n?"primary":""}'
                  part="btn ${this.selectedStatus===n?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${n} 
                </button>`}`)}`:y`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(n=>{var a,o;return y`
        <div style = 'display: ${n===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${ze(le(((a=this.responses[n])===null||a===void 0?void 0:a.description)||""))}</span>
            ${this.headersForEachRespStatus[n]&&((o=this.headersForEachRespStatus[n])===null||o===void 0?void 0:o.length)>0?y`${this.responseHeaderListTemplate(this.headersForEachRespStatus[n])}`:""}
          </div>
          ${Object.keys(this.mimeResponsesForEachStatus[n]).length===0?"":y`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${i=>{i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}" >
                  <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${Object.keys(this.mimeResponsesForEachStatus[n]).length===1?y`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[n])[0]} </span>`:y`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[n]))}`}
                </div>
                ${this.activeSchemaTab==="example"?y`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`:y`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`})}
    `}responseHeaderListTemplate(e){return y`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table role="presentation" style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map(t=>{var r,n;return y`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${((r=t.schema)===null||r===void 0?void 0:r.type)||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${ze(le(t.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${((n=t.schema)===null||n===void 0?void 0:n.example)||""}
            </td>
          </tr>
        `})}
    </table>`}mimeTypeDropdownTemplate(e){return y`
      <select aria-label='mime types' @change="${t=>{this.selectedMimeType=t.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map(t=>y`<option value='${t}' ?selected = '${t===this.selectedMimeType}'> ${t} </option>`)}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"})}mimeExampleTemplate(e){return e?y`
      ${e.examples.length===1?y`
          ${e.examples[0].exampleFormat==="json"?y`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?y`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?y`<div class="m-markdown-small" style="padding: 4px 0"> ${ze(le(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:y`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?y`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?y`<div class="m-markdown-small" style="padding: 4px 0"> ${ze(le(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:y`
          <span class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>
            <select aria-label='response examples' style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t)}'>
              ${e.examples.map(t=>y`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`)}
            </select>
            ${e.examples.map(t=>y`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?y`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?y`<div class="m-markdown-small"  style="padding: 4px 0"> ${ze(le(t.exampleDescription||""))} </div>`:""}
                ${t.exampleFormat==="json"?y`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:y`<pre>${t.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `:y`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?y`
      ${this.schemaStyle==="table"?y`
          <schema-table
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-table> `:y`
          <schema-tree
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`:y`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const M_=H`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function H_(){var e;return document.addEventListener("close",()=>{this.showAdvancedSearchDialog=!1}),document.addEventListener("open",this.onOpenSearchDialog),y`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${t=>this.onAdvancedSearch(t,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${(e=this.advancedSearchMatches)===null||e===void 0?void 0:e.map(t=>y`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${t.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${t.elementId}'
        tabindex = '0'
        @click="${r=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(r,!0)}}"
      > 
        <span class="upper bold-text method-fg ${t.method}">${t.method}</span> 
        <span>${t.path}</span>
        <span class="regular-font gray-text">${t.summary}</span>
      </div>
    `)}
    </dialog-box>
  `}customElements.define("dialog-box",class extends R{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[M_]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{e.code==="Escape"&&this.onClose()})}attributeChangedCallback(e,t,r){t!==r&&(e==="heading"&&(this.heading=r),e==="show"&&(this.show=r,r==="true"&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return y`
    ${this.show==="true"?y`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const ke={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(e.indexOf("#")===0&&(e=e.slice(1,7)),e.length!==3&&e.length!==4||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return .299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function St(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function Bt(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:e==="dark"?"#f76b39":"#ff591e",a=ke.color.invert(n),o=ke.color.opacity(n,"0.4");if(e==="dark"){const i=t.bg1?t.bg1:"#2a2b2c",s=t.fg1?t.fg1:"#bbb",l=t.bg2?t.bg2:ke.color.brightness(i,5),c=t.bg3?t.bg3:ke.color.brightness(i,17),h=t.bg3?t.bg3:ke.color.brightness(i,35),d=t.fg2?t.fg2:ke.color.brightness(s,-15),f=t.fg3?t.fg3:ke.color.brightness(s,-20),m=t.fg3?t.fg3:ke.color.brightness(s,-65),v=t.inlineCodeFg?t.inlineCodeFg:"#aaa",w="#bbb",x="#eee",p=t.headerColor?t.headerColor:ke.color.brightness(i,10),k=t.navBgColor?t.navBgColor:ke.color.brightness(i,10),$=t.navTextColor?t.navTextColor:ke.color.opacity(ke.color.invert(k),"0.50"),C=t.navHoverBgColor?t.navHoverBgColor:ke.color.brightness(k,-15),F=t.navHoverTextColor?t.navHoverTextColor:ke.color.invert(k),O=t.navAccentColor?t.navAccentColor:ke.color.brightness(n,25);r={bg1:i,bg2:l,bg3:c,lightBg:h,fg1:s,fg2:d,fg3:f,lightFg:m,inlineCodeFg:v,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:w,selectionFg:x,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:k,navTextColor:$,navHoverBgColor:C,navHoverTextColor:F,navAccentColor:O,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:ke.color.invert(O),headerColor:p,headerColorInvert:ke.color.invert(p),headerColorDarker:ke.color.brightness(p,-20),headerColorBorder:ke.color.brightness(p,10),borderColor:t.borderColor||ke.color.brightness(i,20),lightBorderColor:t.lightBorderColor||ke.color.brightness(i,15),codeBorderColor:t.codeBorderColor||ke.color.brightness(i,30),inputBg:t.inputBg||ke.color.brightness(i,-5),placeHolder:t.placeHolder||ke.color.opacity(s,"0.3"),hoverColor:t.hoverColor||ke.color.brightness(i,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:ke.color.brightness(i,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||ke.color.brightness(i,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||ke.color.brightness(i,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||ke.color.brightness(i,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||ke.color.brightness(i,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||ke.color.brightness(i,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||ke.color.opacity(ke.color.brightness(i,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const i=t.bg1?t.bg1:"#fafbfc",s=t.fg1?t.fg1:"#444444",l=t.bg2?t.bg2:ke.color.brightness(i,-5),c=t.bg3?t.bg3:ke.color.brightness(i,-15),h=t.bg3?t.bg3:ke.color.brightness(i,-45),d=t.fg2?t.fg2:ke.color.brightness(s,17),f=t.fg3?t.fg3:ke.color.brightness(s,30),m=t.fg3?t.fg3:ke.color.brightness(s,70),v=t.inlineCodeFg?t.inlineCodeFg:"brown",w="#444",x="#eee",p=t.headerColor?t.headerColor:ke.color.brightness(i,-180),k=t.navBgColor?t.navBgColor:ke.color.brightness(i,-200),$=t.navTextColor?t.navTextColor:ke.color.opacity(ke.color.invert(k),"0.65"),C=t.navHoverBgColor?t.navHoverBgColor:ke.color.brightness(k,-15),F=t.navHoverTextColor?t.navHoverTextColor:ke.color.invert(k),O=t.navAccentColor?t.navAccentColor:ke.color.brightness(n,25);r={bg1:i,bg2:l,bg3:c,lightBg:h,fg1:s,fg2:d,fg3:f,lightFg:m,inlineCodeFg:v,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:w,selectionFg:x,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:k,navTextColor:$,navHoverBgColor:C,navHoverTextColor:F,navAccentColor:O,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:ke.color.invert(O),headerColor:p,headerColorInvert:ke.color.invert(p),headerColorDarker:ke.color.brightness(p,-20),headerColorBorder:ke.color.brightness(p,10),borderColor:t.borderColor||ke.color.brightness(i,-38),lightBorderColor:t.lightBorderColor||ke.color.brightness(i,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||ke.color.brightness(i,10),placeHolder:t.placeHolder||ke.color.brightness(m,20),hoverColor:t.hoverColor||ke.color.brightness(i,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||ke.color.opacity(ke.color.brightness(i,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return y`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${this.navItemSpacing==="relaxed"?"10px 16px 10px 10px":this.navItemSpacing==="compact"?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${this.fontSize==="default"?"12px":this.fontSize==="large"?"13px":"14px"};
    --font-size-mono: ${this.fontSize==="default"?"13px":this.fontSize==="large"?"14px":"15px"};
    --font-size-regular: ${this.fontSize==="default"?"14px":this.fontSize==="large"?"15px":"16px"};
    --dialog-z-index: 1000;

    --focus-shadow: 0 0 0 1px transparent, 0 0 0 3px ${r.primaryColorTrans};

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};
    --nav-accent-text-color:${r.navAccentTextColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function _b(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";this.persistAuth==="true"&&y_.call(this);const a={bg1:St(this.bgColor)?this.bgColor:"",fg1:St(this.textColor)?this.textColor:"",headerColor:St(this.headerColor)?this.headerColor:"",primaryColor:St(this.primaryColor)?this.primaryColor:"",navBgColor:St(this.navBgColor)?this.navBgColor:"",navTextColor:St(this.navTextColor)?this.navTextColor:"",navHoverBgColor:St(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:St(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:St(this.navAccentColor)?this.navAccentColor:"",navAccentTextColor:St(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?y`
        ${this.theme==="dark"?Bt.call(this,"dark",a):Bt.call(this,"light",a)}
        <div style='display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
      `:y`
      ${this.theme==="dark"?Bt.call(this,"dark",a):Bt.call(this,"light",a)}
      <!-- Header -->
      ${Cs.call(this)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div style='margin:24px; text-align: center;'>
          <h1 style='color: var(--red)'> ${this.resolvedSpec.info.title} </h1>
          <div style='font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?y`
      ${this.theme==="dark"?Bt.call(this,"dark",a):Bt.call(this,"light",a)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          <div class='loader'></div>
        </div>
      </main>
    `:y`
    ${this.theme==="dark"?Bt.call(this,"dark",a):Bt.call(this,"light",a)}

    <!-- Header -->
    ${this.showHeader==="false"?"":Cs.call(this)}
    
    <!-- Advanced Search -->
    ${this.allowAdvancedSearch==="false"?"":H_.call(this)}

    <div id='the-main-body' class='body ${this.cssClasses}' dir='${this.pageDirection}' >
      <!-- Side Nav -->
      ${this.renderStyle!=="read"&&this.renderStyle!=="focused"||this.showSideNav!=="true"||!this.resolvedSpec?"":F_.call(this)}

      <!-- Main Content -->
      <main class='main-content regular-font' tabindex='-1' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          ${this.loading===!0?y`<div class='loader'></div>`:y`
              ${this.loadFailed===!0?y`<div style='text-align: center;margin: 16px;'> Unable to load the Spec</div>`:y`
                  <div class='operations-root' @click='${o=>{this.handleHref(o)}}'>
                  ${this.renderStyle==="focused"?y`${N_.call(this)}`:y`
                      ${this.showInfo==="true"?Os.call(this):""}
                      ${this.allowServerSelection==="true"?Ab.call(this):""}
                      ${this.allowAuthentication==="true"?mb.call(this):""}
                      <div id='operations-top' class='observe-me'>
                        <slot name='operations-top'></slot>
                      </div>  
                      ${this.renderStyle==="read"?j_.call(this):U_.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name='footer'></slot>
      </main>
    </div>  
  `}class W_ extends R{constructor(){super();const t={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!1,this.intersectionObserver=new IntersectionObserver(r=>{this.onIntersect(r)},t)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navAccentTextColor:{type:String,attribute:"nav-accent-text-color"},navActiveItemMarker:{type:String,attribute:"nav-active-item-marker"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[zr,Un,Ta,Ca,qs,No,ja,zs,Us,H`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
    .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body { 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body .tag-description {
        background: var(--code-bg);
        border-radius: var(--border-radius);
        transition: max-height .2s ease-out;
      }
      .expanded-endpoint-body .tag-icon {
        transition: transform .2s ease-out;
      }
      .expanded-endpoint-body .tag-icon.expanded {
        transform: rotate(180deg);
      }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }
      .colored-block .nav-method.as-colored-block {
        outline: 1px solid;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${S(this.fontSize==="default"?"300px":this.fontSize==="large"?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,Mn]}connectedCallback(){super.connectedCallback();const t=this.parentElement;if(t&&(t.offsetWidth===0&&t.style.width===""&&(t.style.width="100vw"),t.offsetHeight===0&&t.style.height===""&&(t.style.height="100vh"),t.tagName==="BODY"&&(t.style.marginTop||(t.style.marginTop="0"),t.style.marginRight||(t.style.marginRight="0"),t.style.marginBottom||(t.style.marginBottom="0"),t.style.marginLeft||(t.style.marginLeft="0"))),this.loadFonts!=="false"){const r={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},n=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",r);r.weight="600";const a=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",r);n.load().then(o=>{document.fonts.add(o)}),a.load().then(o=>{document.fonts.add(o)})}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="focused"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"default, never,".includes(`${this.schemaHideReadOnly},`)||(this.schemaHideReadOnly="default"),this.schemaHideWriteOnly&&"default, never,".includes(`${this.schemaHideWriteOnly},`)||(this.schemaHideWriteOnly="default"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="400px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.navActiveItemMarker&&"left-bar, colored-block".includes(`${this.navActiveItemMarker},`)||(this.navActiveItemMarker="left-bar"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),le.setOptions({highlight:(r,n)=>ht().languages[n]?ht().highlight(r,ht().languages[n],n):r}),window.addEventListener("hashchange",()=>{this.scrollToPath(this.getElementIDFromURL())},!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const t=new le.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${o.slug(a)}">${r}</h${n}>`,t}render(){const t=document.querySelector(`link[href*="${this.cssFile}"]`);return t&&this.shadowRoot.appendChild(t.cloneNode()),_b.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach(t=>{this.intersectionObserver.observe(t)})}attributeChangedCallback(t,r,n){if(t==="spec-url"&&r!==n&&window.setTimeout(async()=>{await this.loadSpec(n),this.gotoPath&&!window.location.hash&&this.scrollToPath(this.gotoPath)},0),t==="render-style"&&(n==="read"?window.setTimeout(()=>{this.observeExpandedContent()},100):this.intersectionObserver.disconnect()),t==="api-key-name"||t==="api-key-location"||t==="api-key-value"){let a=!1,o="",i="",s="";if(t==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(o=n,i=this.getAttribute("api-key-location"),s=this.getAttribute("api-key-value"),a=!0):t==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(i=n,o=this.getAttribute("api-key-name"),s=this.getAttribute("api-key-value"),a=!0):t==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(s=n,i=this.getAttribute("api-key-location"),o=this.getAttribute("api-key-name"),a=!0),a&&this.resolvedSpec){const l=this.resolvedSpec.securitySchemes.find(c=>c.securitySchemeId===cn);l?(l.name=o,l.in=i,l.value=s,l.finalKeyValue=s):this.resolvedSpec.securitySchemes.push({securitySchemeId:cn,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:o,in:i,value:s,finalKeyValue:s}),this.requestUpdate()}}super.attributeChangedCallback(t,r,n)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSpecFileChange(t){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const r=t.target.files[0],n=new FileReader;n.onload=()=>{try{const a=JSON.parse(n.result);this.loadSpec(a),this.shadowRoot.getElementById("spec-url").value=""}catch{console.error("RapiDoc: Unable to read or parse json")}},n.readAsText(r)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(t){this.matchPaths=t.target.value,this.resolvedSpec.tags.forEach(r=>r.paths.filter(n=>{this.matchPaths&&Ra(this.matchPaths,n,this.matchType)&&(r.expanded=!0)})),this.resolvedSpec.components.forEach(r=>r.subComponents.filter(n=>{n.expanded=!1,this.matchPaths&&!function(a,o){return o.name.toLowerCase().includes(a.toLowerCase())}(this.matchPaths,n)||(n.expanded=!0)})),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach(t=>t.subComponents.filter(r=>{r.expanded=!0}))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(t){const r=t.detail.querySelector("input");await _a(0),r&&r.focus()}async loadSpec(t){if(t){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const r=await mu.call(this,t,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(r)}catch(r){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${r.message}`)}}}async afterSpecParsedAndValidated(t){for(this.resolvedSpec=t,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(o=>o.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const r=new CustomEvent("spec-loaded",{detail:t});this.dispatchEvent(r),this.intersectionObserver.disconnect(),this.renderStyle==="read"&&(await _a(100),this.observeExpandedContent()),this.isIntersectionObserverActive=!0;const n=this.getElementIDFromURL();if(n)this.renderStyle==="view"?this.expandAndGotoOperation(n,!0,!0):this.scrollToPath(n);else if(this.renderStyle==="focused"&&!this.gotoPath){var a;const o=this.showInfo?"overview":(a=this.resolvedSpec.tags[0])===null||a===void 0?void 0:a.paths[0];this.scrollToPath(o)}}getComponentBaseURL(){const{href:t}=window.location,r=this.routePrefix.replace(/(#|\/)$/,"");if(!r)return t.split("#")[0];const n=t.lastIndexOf(r);return n===-1?t:t.slice(0,n)}getElementIDFromURL(){const t=this.getComponentBaseURL();return window.location.href.replace(t+this.routePrefix,"")}replaceHistoryState(t){const r=this.getComponentBaseURL();window.history.replaceState(null,null,`${r}${this.routePrefix||"#"}${t}`)}expandAndGotoOperation(t,r=!0){if(!this.resolvedSpec)return;let n=!0;const a=t.indexOf("#")===-1?t:t.substring(1);if(a.startsWith("overview")||a==="servers"||a==="auth")n=!1;else for(let s=0;s<((o=this.resolvedSpec.tags)===null||o===void 0?void 0:o.length);s++){var o,i;const l=this.resolvedSpec.tags[s],c=(i=l.paths)===null||i===void 0?void 0:i.find(h=>h.elementId===t);c&&(c.expanded&&l.expanded?n=!1:(c.expanded=!0,l.expanded=!0))}r&&(n&&this.requestUpdate(),window.setTimeout(()=>{const s=this.shadowRoot.getElementById(a);s&&(s.scrollIntoView({behavior:"auto",block:"start"}),this.updateRoute==="true"&&this.replaceHistoryState(a))},n?150:0))}isValidTopId(t){return t.startsWith("overview")||t==="servers"||t==="auth"}isValidPathId(t){var r,n,a,o;return!(t!=="overview"||!this.showInfo)||!(t!=="servers"||!this.allowServerSelection)||!(t!=="auth"||!this.allowAuthentication)||(t.startsWith("tag--")?(a=this.resolvedSpec)===null||a===void 0||(o=a.tags)===null||o===void 0?void 0:o.find(i=>i.elementId===t):(r=this.resolvedSpec)===null||r===void 0||(n=r.tags)===null||n===void 0?void 0:n.find(i=>i.paths.find(s=>s.elementId===t)))}onIntersect(t){this.isIntersectionObserverActive!==!1&&t.forEach(r=>{if(r.isIntersecting&&r.intersectionRatio>0){const n=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),a=this.shadowRoot.getElementById(`link-${r.target.id}`);a&&(this.updateRoute==="true"&&this.replaceHistoryState(r.target.id),a.scrollIntoView({behavior:"auto",block:"center"}),a.classList.add("active"),a.part.add("section-navbar-active-item")),n&&n!==a&&(n.classList.remove("active"),n.part.remove("section-navbar-active-item"))}})}handleHref(t){if(t.target.tagName.toLowerCase()==="a"&&t.target.getAttribute("href").startsWith("#")){const r=this.shadowRoot.getElementById(t.target.getAttribute("href").replace("#",""));r&&r.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(t,r=!0){if(t.type!=="click"&&(t.type!=="keyup"||t.keyCode!==13))return;const n=t.target;if(n.dataset.contentId){if(this.isIntersectionObserverActive=!1,this.renderStyle==="focused"){const a=this.shadowRoot.querySelector("api-request");a&&a.beforeNavigationFocusedMode()}this.scrollToPath(n.dataset.contentId,!0,r),setTimeout(()=>{this.isIntersectionObserverActive=!0},300)}}async scrollToPath(t,r=!0,n=!0){if(this.renderStyle==="focused"&&(this.focusedElementId=t,await _a(0)),this.renderStyle==="view")this.expandAndGotoOperation(t,r,!0);else{let a=!1;const o=this.shadowRoot.getElementById(t);if(o?(a=!0,o.scrollIntoView({behavior:"auto",block:"start"})):a=!1,a){if(this.renderStyle==="focused"){const s=this.shadowRoot.querySelector("api-request");s&&s.afterNavigationFocusedMode();const l=this.shadowRoot.querySelector("api-response");l&&l.resetSelection()}this.updateRoute==="true"&&this.replaceHistoryState(t);const i=this.shadowRoot.getElementById(`link-${t}`);if(i){n&&i.scrollIntoView({behavior:"auto",block:"center"}),await _a(0);const s=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");s&&(s.classList.remove("active"),s.part.remove("active"),s.part.remove("section-navbar-active-item")),i.classList.add("active"),i.part.add("section-navbar-active-item")}}}}setHttpUserNameAndPassword(t,r,n){return Fn.call(this,t,r,n)}setApiKey(t,r){return Fn.call(this,t,"","",r)}removeAllSecurityKeys(){return xu.call(this)}setApiServer(t){return Eu.call(this,t)}onAdvancedSearch(t,r){const n=t.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{let a;a=n.type==="text"?n:n.closest(".advanced-search-options").querySelector("input[type=text]");const o=[...n.closest(".advanced-search-options").querySelectorAll("input:checked")].map(i=>i.id);this.advancedSearchMatches=function(i,s,l=[]){if(!i.trim()||l.length===0)return;const c=[];return s.forEach(h=>{h.paths.forEach(d=>{let f="";var m;if(l.includes("search-api-path")&&(f=d.path),l.includes("search-api-descr")&&(f=`${f} ${d.summary||d.description||""}`),l.includes("search-api-params")&&(f=`${f} ${((m=d.parameters)===null||m===void 0?void 0:m.map(p=>p.name).join(" "))||""}`),l.includes("search-api-request-body")&&d.requestBody){let p=new Set;for(const k in(v=d.requestBody)===null||v===void 0?void 0:v.content){var v,w,x;(w=d.requestBody.content[k].schema)!==null&&w!==void 0&&w.properties&&(p=Ms((x=d.requestBody.content[k].schema)===null||x===void 0?void 0:x.properties)),f=`${f} ${[...p].join(" ")}`}}l.includes("search-api-resp-descr")&&(f=`${f} ${Object.values(d.responses).map(p=>p.description||"").join(" ")}`),f.toLowerCase().includes(i.trim().toLowerCase())&&c.push({elementId:d.elementId,method:d.method,path:d.path,summary:d.summary||d.description||"",deprecated:d.deprecated})})}),c}(a.value,this.resolvedSpec.tags,o)},r)}}customElements.define("rapi-doc",W_),customElements.define("rapi-doc-mini",class extends R{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[zr,Un,Ta,Ca,qs,No,ja,zs,Us,H`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),this.loadFonts!=="false"){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then(n=>{document.fonts.add(n)}),r.load().then(n=>{document.fonts.add(n)})}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded=this.pathsExpanded==="true",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),le.setOptions({highlight:(e,t)=>ht().languages[t]?ht().highlight(e,ht().languages[t],t):e})}render(){return _b.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if(e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),e==="api-key-name"||e==="api-key-location"||e==="api-key-value"){let n=!1,a="",o="",i="";if(e==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(a=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,a=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-name"),n=!0),n&&this.resolvedSpec){const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===cn);s?(s.name=a,s.in=o,s.value=i,s.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:cn,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:a,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await mu.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}setHttpUserNameAndPassword(e,t,r){return Fn.call(this,e,t,r)}setApiKey(e,t){return Fn.call(this,e,"","",t)}removeAllSecurityKeys(){return xu.call(this)}setApiServer(e){return Eu.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(r=>r.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class V_ extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",t=>this.receiveStorage(t),!0)}receiveAuthParms(){let t={};if(document.location.search){const r=new URLSearchParams(document.location.search);t={code:r.get("code"),error:r.get("error"),state:r.get("state"),responseType:"code"}}else window.location.hash&&(t={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"});window.opener?window.opener.postMessage(t,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(t))}relayAuthParams(t){if(window.parent&&t.key==="rapidoc-oauth-data"){const r=JSON.parse(t.newValue);window.parent.postMessage(r,this.target)}}parseQueryString(t,r){const n=t.split("&");for(let a=0;a<n.length;a++){const o=n[a].split("=");if(decodeURIComponent(o[0])===r)return decodeURIComponent(o[1])}}}function G_(){return y`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(e=>y`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${t=>{this.scrollToEventTarget(t,!1)}}'
        > 
          ${e.name}
        </div>`)}
    </nav>  
  </nav>
  `}function K_(){return y`
    ${this.showInfo==="true"?Os.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(e=>{var t;const r=Aa(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=(t=r[0])===null||t===void 0?void 0:t.exampleId,y`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${ze(le(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${vt(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?y`<select style="min-width:100px; max-width:100%" @change='${n=>this.onSelectExample(n,e)}'>
                    ${r.map(n=>y`
                      <option value="${n.exampleId}" ?selected=${n.exampleId===e.selectedExample}> 
                        ${n.exampleSummary.length>80?n.exampleId:n.exampleSummary}
                      </option>`)}
                  </select>`:y`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map(n=>y`
                <json-tree 
                  .data = "${n.exampleValue}"
                  data-example = "${n.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${n.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`})}
    </div>
  `}function J_(e=!1){if(!this.resolvedSpec)return"";const t={bg1:St(this.bgColor)?this.bgColor:"",fg1:St(this.textColor)?this.textColor:"",headerColor:St(this.headerColor)?this.headerColor:"",primaryColor:St(this.primaryColor)?this.primaryColor:"",navBgColor:St(this.navBgColor)?this.navBgColor:"",navTextColor:St(this.navTextColor)?this.navTextColor:"",navHoverBgColor:St(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:St(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:St(this.navAccentColor)?this.navAccentColor:"",navAccenttextColor:St(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?y`
        ${this.theme==="dark"?Bt.call(this,"dark",t):Bt.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:y`
      ${this.theme==="dark"?Bt.call(this,"dark",t):Bt.call(this,"light",t)}
      <!-- Header -->
      ${Cs.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?y`
      ${this.theme==="dark"?Bt.call(this,"dark",t):Bt.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:y`
    ${this.theme==="dark"?Bt.call(this,"dark",t):Bt.call(this,"light",t)}

    <!-- Header -->
    ${this.showHeader==="false"?"":Cs.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${G_.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading===!0?y`<div class="loader"></div>`:y`
              ${this.loadFailed===!0?y`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:y`
                  <div class="operations-root" @click="${r=>{this.handleHref(r)}}">
                    ${K_.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",V_),customElements.define("json-schema-viewer",class extends R{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[zr,Un,Ta,Ca,qs,No,ja,zs,Us,H`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(e.offsetWidth===0&&e.style.width===""&&(e.style.width="100vw"),e.offsetHeight===0&&e.style.height===""&&(e.style.height="100vh"),e.tagName==="BODY"&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),this.loadFonts!=="false"){const t={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",t);t.weight="600";const n=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",t);r.load().then(a=>{document.fonts.add(a)}),n.load().then(a=>{document.fonts.add(a)})}this.renderStyle="focused",this.pathsExpanded=this.pathsExpanded==="true",this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),le.setOptions({highlight:(t,r)=>ht().languages[r]?ht().highlight(t,ht().languages[r],r):t})}render(){return J_.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await mu.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"})}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(te,re)=>{re.byteLength=function(oe){var pe=S(oe),ne=pe[0],ye=pe[1];return 3*(ne+ye)/4-ye},re.toByteArray=function(oe){var pe,ne,ye=S(oe),we=ye[0],ce=ye[1],ie=new J(function(q,M,Z){return 3*(M+Z)/4-Z}(0,we,ce)),ae=0,G=ce>0?we-4:we;for(ne=0;ne<G;ne+=4)pe=L[oe.charCodeAt(ne)]<<18|L[oe.charCodeAt(ne+1)]<<12|L[oe.charCodeAt(ne+2)]<<6|L[oe.charCodeAt(ne+3)],ie[ae++]=pe>>16&255,ie[ae++]=pe>>8&255,ie[ae++]=255&pe;return ce===2&&(pe=L[oe.charCodeAt(ne)]<<2|L[oe.charCodeAt(ne+1)]>>4,ie[ae++]=255&pe),ce===1&&(pe=L[oe.charCodeAt(ne)]<<10|L[oe.charCodeAt(ne+1)]<<4|L[oe.charCodeAt(ne+2)]>>2,ie[ae++]=pe>>8&255,ie[ae++]=255&pe),ie},re.fromByteArray=function(oe){for(var pe,ne=oe.length,ye=ne%3,we=[],ce=16383,ie=0,ae=ne-ye;ie<ae;ie+=ce)we.push(H(oe,ie,ie+ce>ae?ae:ie+ce));return ye===1?(pe=oe[ne-1],we.push(z[pe>>2]+z[pe<<4&63]+"==")):ye===2&&(pe=(oe[ne-2]<<8)+oe[ne-1],we.push(z[pe>>10]+z[pe>>4&63]+z[pe<<2&63]+"=")),we.join("")};for(var z=[],L=[],J=typeof Uint8Array<"u"?Uint8Array:Array,he="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",me=0,ge=he.length;me<ge;++me)z[me]=he[me],L[he.charCodeAt(me)]=me;function S(oe){var pe=oe.length;if(pe%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var ne=oe.indexOf("=");return ne===-1&&(ne=pe),[ne,ne===pe?0:4-ne%4]}function H(oe,pe,ne){for(var ye,we,ce=[],ie=pe;ie<ne;ie+=3)ye=(oe[ie]<<16&16711680)+(oe[ie+1]<<8&65280)+(255&oe[ie+2]),ce.push(z[(we=ye)>>18&63]+z[we>>12&63]+z[we>>6&63]+z[63&we]);return ce.join("")}L["-".charCodeAt(0)]=62,L["_".charCodeAt(0)]=63},764:(te,re,z)=>{const L=z(742),J=z(645),he=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;re.lW=S,re.h2=50;const me=2147483647;function ge(u){if(u>me)throw new RangeError('The value "'+u+'" is invalid for option "size"');const g=new Uint8Array(u);return Object.setPrototypeOf(g,S.prototype),g}function S(u,g,b){if(typeof u=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pe(u)}return H(u,g,b)}function H(u,g,b){if(typeof u=="string")return function(R,Y){if(typeof Y=="string"&&Y!==""||(Y="utf8"),!S.isEncoding(Y))throw new TypeError("Unknown encoding: "+Y);const Te=0|ce(R,Y);let Re=ge(Te);const ct=Re.write(R,Y);return ct!==Te&&(Re=Re.slice(0,ct)),Re}(u,g);if(ArrayBuffer.isView(u))return function(R){if(Rt(R,Uint8Array)){const Y=new Uint8Array(R);return ye(Y.buffer,Y.byteOffset,Y.byteLength)}return ne(R)}(u);if(u==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u);if(Rt(u,ArrayBuffer)||u&&Rt(u.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Rt(u,SharedArrayBuffer)||u&&Rt(u.buffer,SharedArrayBuffer)))return ye(u,g,b);if(typeof u=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const j=u.valueOf&&u.valueOf();if(j!=null&&j!==u)return S.from(j,g,b);const P=function(R){if(S.isBuffer(R)){const Y=0|we(R.length),Te=ge(Y);return Te.length===0||R.copy(Te,0,0,Y),Te}if(R.length!==void 0)return typeof R.length!="number"||qr(R.length)?ge(0):ne(R);if(R.type==="Buffer"&&Array.isArray(R.data))return ne(R.data)}(u);if(P)return P;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof u[Symbol.toPrimitive]=="function")return S.from(u[Symbol.toPrimitive]("string"),g,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u)}function oe(u){if(typeof u!="number")throw new TypeError('"size" argument must be of type number');if(u<0)throw new RangeError('The value "'+u+'" is invalid for option "size"')}function pe(u){return oe(u),ge(u<0?0:0|we(u))}function ne(u){const g=u.length<0?0:0|we(u.length),b=ge(g);for(let j=0;j<g;j+=1)b[j]=255&u[j];return b}function ye(u,g,b){if(g<0||u.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(u.byteLength<g+(b||0))throw new RangeError('"length" is outside of buffer bounds');let j;return j=g===void 0&&b===void 0?new Uint8Array(u):b===void 0?new Uint8Array(u,g):new Uint8Array(u,g,b),Object.setPrototypeOf(j,S.prototype),j}function we(u){if(u>=me)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+me.toString(16)+" bytes");return 0|u}function ce(u,g){if(S.isBuffer(u))return u.length;if(ArrayBuffer.isView(u)||Rt(u,ArrayBuffer))return u.byteLength;if(typeof u!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof u);const b=u.length,j=arguments.length>2&&arguments[2]===!0;if(!j&&b===0)return 0;let P=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return Wt(u).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*b;case"hex":return b>>>1;case"base64":return qt(u).length;default:if(P)return j?-1:Wt(u).length;g=(""+g).toLowerCase(),P=!0}}function ie(u,g,b){let j=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0)<=(g>>>=0))return"";for(u||(u="utf8");;)switch(u){case"hex":return Be(this,g,b);case"utf8":case"utf-8":return Ce(this,g,b);case"ascii":return Pe(this,g,b);case"latin1":case"binary":return Ie(this,g,b);case"base64":return fe(this,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nt(this,g,b);default:if(j)throw new TypeError("Unknown encoding: "+u);u=(u+"").toLowerCase(),j=!0}}function ae(u,g,b){const j=u[g];u[g]=u[b],u[b]=j}function G(u,g,b,j,P){if(u.length===0)return-1;if(typeof b=="string"?(j=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),qr(b=+b)&&(b=P?0:u.length-1),b<0&&(b=u.length+b),b>=u.length){if(P)return-1;b=u.length-1}else if(b<0){if(!P)return-1;b=0}if(typeof g=="string"&&(g=S.from(g,j)),S.isBuffer(g))return g.length===0?-1:q(u,g,b,j,P);if(typeof g=="number")return g&=255,typeof Uint8Array.prototype.indexOf=="function"?P?Uint8Array.prototype.indexOf.call(u,g,b):Uint8Array.prototype.lastIndexOf.call(u,g,b):q(u,[g],b,j,P);throw new TypeError("val must be string, number or Buffer")}function q(u,g,b,j,P){let R,Y=1,Te=u.length,Re=g.length;if(j!==void 0&&((j=String(j).toLowerCase())==="ucs2"||j==="ucs-2"||j==="utf16le"||j==="utf-16le")){if(u.length<2||g.length<2)return-1;Y=2,Te/=2,Re/=2,b/=2}function ct(Je,dt){return Y===1?Je[dt]:Je.readUInt16BE(dt*Y)}if(P){let Je=-1;for(R=b;R<Te;R++)if(ct(u,R)===ct(g,Je===-1?0:R-Je)){if(Je===-1&&(Je=R),R-Je+1===Re)return Je*Y}else Je!==-1&&(R-=R-Je),Je=-1}else for(b+Re>Te&&(b=Te-Re),R=b;R>=0;R--){let Je=!0;for(let dt=0;dt<Re;dt++)if(ct(u,R+dt)!==ct(g,dt)){Je=!1;break}if(Je)return R}return-1}function M(u,g,b,j){b=Number(b)||0;const P=u.length-b;j?(j=Number(j))>P&&(j=P):j=P;const R=g.length;let Y;for(j>R/2&&(j=R/2),Y=0;Y<j;++Y){const Te=parseInt(g.substr(2*Y,2),16);if(qr(Te))return Y;u[b+Y]=Te}return Y}function Z(u,g,b,j){return mr(Wt(g,u.length-b),u,b,j)}function ee(u,g,b,j){return mr(function(P){const R=[];for(let Y=0;Y<P.length;++Y)R.push(255&P.charCodeAt(Y));return R}(g),u,b,j)}function W(u,g,b,j){return mr(qt(g),u,b,j)}function K(u,g,b,j){return mr(function(P,R){let Y,Te,Re;const ct=[];for(let Je=0;Je<P.length&&!((R-=2)<0);++Je)Y=P.charCodeAt(Je),Te=Y>>8,Re=Y%256,ct.push(Re),ct.push(Te);return ct}(g,u.length-b),u,b,j)}function fe(u,g,b){return g===0&&b===u.length?L.fromByteArray(u):L.fromByteArray(u.slice(g,b))}function Ce(u,g,b){b=Math.min(u.length,b);const j=[];let P=g;for(;P<b;){const R=u[P];let Y=null,Te=R>239?4:R>223?3:R>191?2:1;if(P+Te<=b){let Re,ct,Je,dt;switch(Te){case 1:R<128&&(Y=R);break;case 2:Re=u[P+1],(192&Re)==128&&(dt=(31&R)<<6|63&Re,dt>127&&(Y=dt));break;case 3:Re=u[P+1],ct=u[P+2],(192&Re)==128&&(192&ct)==128&&(dt=(15&R)<<12|(63&Re)<<6|63&ct,dt>2047&&(dt<55296||dt>57343)&&(Y=dt));break;case 4:Re=u[P+1],ct=u[P+2],Je=u[P+3],(192&Re)==128&&(192&ct)==128&&(192&Je)==128&&(dt=(15&R)<<18|(63&Re)<<12|(63&ct)<<6|63&Je,dt>65535&&dt<1114112&&(Y=dt))}}Y===null?(Y=65533,Te=1):Y>65535&&(Y-=65536,j.push(Y>>>10&1023|55296),Y=56320|1023&Y),j.push(Y),P+=Te}return function(R){const Y=R.length;if(Y<=Le)return String.fromCharCode.apply(String,R);let Te="",Re=0;for(;Re<Y;)Te+=String.fromCharCode.apply(String,R.slice(Re,Re+=Le));return Te}(j)}S.TYPED_ARRAY_SUPPORT=function(){try{const u=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(u,g),u.foo()===42}catch{return!1}}(),S.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(S.prototype,"parent",{enumerable:!0,get:function(){if(S.isBuffer(this))return this.buffer}}),Object.defineProperty(S.prototype,"offset",{enumerable:!0,get:function(){if(S.isBuffer(this))return this.byteOffset}}),S.poolSize=8192,S.from=function(u,g,b){return H(u,g,b)},Object.setPrototypeOf(S.prototype,Uint8Array.prototype),Object.setPrototypeOf(S,Uint8Array),S.alloc=function(u,g,b){return function(j,P,R){return oe(j),j<=0?ge(j):P!==void 0?typeof R=="string"?ge(j).fill(P,R):ge(j).fill(P):ge(j)}(u,g,b)},S.allocUnsafe=function(u){return pe(u)},S.allocUnsafeSlow=function(u){return pe(u)},S.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==S.prototype},S.compare=function(u,g){if(Rt(u,Uint8Array)&&(u=S.from(u,u.offset,u.byteLength)),Rt(g,Uint8Array)&&(g=S.from(g,g.offset,g.byteLength)),!S.isBuffer(u)||!S.isBuffer(g))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===g)return 0;let b=u.length,j=g.length;for(let P=0,R=Math.min(b,j);P<R;++P)if(u[P]!==g[P]){b=u[P],j=g[P];break}return b<j?-1:j<b?1:0},S.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},S.concat=function(u,g){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return S.alloc(0);let b;if(g===void 0)for(g=0,b=0;b<u.length;++b)g+=u[b].length;const j=S.allocUnsafe(g);let P=0;for(b=0;b<u.length;++b){let R=u[b];if(Rt(R,Uint8Array))P+R.length>j.length?(S.isBuffer(R)||(R=S.from(R)),R.copy(j,P)):Uint8Array.prototype.set.call(j,R,P);else{if(!S.isBuffer(R))throw new TypeError('"list" argument must be an Array of Buffers');R.copy(j,P)}P+=R.length}return j},S.byteLength=ce,S.prototype._isBuffer=!0,S.prototype.swap16=function(){const u=this.length;if(u%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<u;g+=2)ae(this,g,g+1);return this},S.prototype.swap32=function(){const u=this.length;if(u%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<u;g+=4)ae(this,g,g+3),ae(this,g+1,g+2);return this},S.prototype.swap64=function(){const u=this.length;if(u%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<u;g+=8)ae(this,g,g+7),ae(this,g+1,g+6),ae(this,g+2,g+5),ae(this,g+3,g+4);return this},S.prototype.toString=function(){const u=this.length;return u===0?"":arguments.length===0?Ce(this,0,u):ie.apply(this,arguments)},S.prototype.toLocaleString=S.prototype.toString,S.prototype.equals=function(u){if(!S.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u||S.compare(this,u)===0},S.prototype.inspect=function(){let u="";const g=re.h2;return u=this.toString("hex",0,g).replace(/(.{2})/g,"$1 ").trim(),this.length>g&&(u+=" ... "),"<Buffer "+u+">"},he&&(S.prototype[he]=S.prototype.inspect),S.prototype.compare=function(u,g,b,j,P){if(Rt(u,Uint8Array)&&(u=S.from(u,u.offset,u.byteLength)),!S.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(g===void 0&&(g=0),b===void 0&&(b=u?u.length:0),j===void 0&&(j=0),P===void 0&&(P=this.length),g<0||b>u.length||j<0||P>this.length)throw new RangeError("out of range index");if(j>=P&&g>=b)return 0;if(j>=P)return-1;if(g>=b)return 1;if(this===u)return 0;let R=(P>>>=0)-(j>>>=0),Y=(b>>>=0)-(g>>>=0);const Te=Math.min(R,Y),Re=this.slice(j,P),ct=u.slice(g,b);for(let Je=0;Je<Te;++Je)if(Re[Je]!==ct[Je]){R=Re[Je],Y=ct[Je];break}return R<Y?-1:Y<R?1:0},S.prototype.includes=function(u,g,b){return this.indexOf(u,g,b)!==-1},S.prototype.indexOf=function(u,g,b){return G(this,u,g,b,!0)},S.prototype.lastIndexOf=function(u,g,b){return G(this,u,g,b,!1)},S.prototype.write=function(u,g,b,j){if(g===void 0)j="utf8",b=this.length,g=0;else if(b===void 0&&typeof g=="string")j=g,b=this.length,g=0;else{if(!isFinite(g))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");g>>>=0,isFinite(b)?(b>>>=0,j===void 0&&(j="utf8")):(j=b,b=void 0)}const P=this.length-g;if((b===void 0||b>P)&&(b=P),u.length>0&&(b<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");j||(j="utf8");let R=!1;for(;;)switch(j){case"hex":return M(this,u,g,b);case"utf8":case"utf-8":return Z(this,u,g,b);case"ascii":case"latin1":case"binary":return ee(this,u,g,b);case"base64":return W(this,u,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return K(this,u,g,b);default:if(R)throw new TypeError("Unknown encoding: "+j);j=(""+j).toLowerCase(),R=!0}},S.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Le=4096;function Pe(u,g,b){let j="";b=Math.min(u.length,b);for(let P=g;P<b;++P)j+=String.fromCharCode(127&u[P]);return j}function Ie(u,g,b){let j="";b=Math.min(u.length,b);for(let P=g;P<b;++P)j+=String.fromCharCode(u[P]);return j}function Be(u,g,b){const j=u.length;(!g||g<0)&&(g=0),(!b||b<0||b>j)&&(b=j);let P="";for(let R=g;R<b;++R)P+=Fs[u[R]];return P}function nt(u,g,b){const j=u.slice(g,b);let P="";for(let R=0;R<j.length-1;R+=2)P+=String.fromCharCode(j[R]+256*j[R+1]);return P}function Oe(u,g,b){if(u%1!=0||u<0)throw new RangeError("offset is not uint");if(u+g>b)throw new RangeError("Trying to access beyond buffer length")}function Fe(u,g,b,j,P,R){if(!S.isBuffer(u))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>P||g<R)throw new RangeError('"value" argument is out of bounds');if(b+j>u.length)throw new RangeError("Index out of range")}function Ne(u,g,b,j,P){Ue(g,j,P,u,b,7);let R=Number(g&BigInt(4294967295));u[b++]=R,R>>=8,u[b++]=R,R>>=8,u[b++]=R,R>>=8,u[b++]=R;let Y=Number(g>>BigInt(32)&BigInt(4294967295));return u[b++]=Y,Y>>=8,u[b++]=Y,Y>>=8,u[b++]=Y,Y>>=8,u[b++]=Y,b}function _e(u,g,b,j,P){Ue(g,j,P,u,b,7);let R=Number(g&BigInt(4294967295));u[b+7]=R,R>>=8,u[b+6]=R,R>>=8,u[b+5]=R,R>>=8,u[b+4]=R;let Y=Number(g>>BigInt(32)&BigInt(4294967295));return u[b+3]=Y,Y>>=8,u[b+2]=Y,Y>>=8,u[b+1]=Y,Y>>=8,u[b]=Y,b+8}function at(u,g,b,j,P,R){if(b+j>u.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function qe(u,g,b,j,P){return g=+g,b>>>=0,P||at(u,0,b,4),J.write(u,g,b,j,23,4),b+4}function Ye(u,g,b,j,P){return g=+g,b>>>=0,P||at(u,0,b,8),J.write(u,g,b,j,52,8),b+8}S.prototype.slice=function(u,g){const b=this.length;(u=~~u)<0?(u+=b)<0&&(u=0):u>b&&(u=b),(g=g===void 0?b:~~g)<0?(g+=b)<0&&(g=0):g>b&&(g=b),g<u&&(g=u);const j=this.subarray(u,g);return Object.setPrototypeOf(j,S.prototype),j},S.prototype.readUintLE=S.prototype.readUIntLE=function(u,g,b){u>>>=0,g>>>=0,b||Oe(u,g,this.length);let j=this[u],P=1,R=0;for(;++R<g&&(P*=256);)j+=this[u+R]*P;return j},S.prototype.readUintBE=S.prototype.readUIntBE=function(u,g,b){u>>>=0,g>>>=0,b||Oe(u,g,this.length);let j=this[u+--g],P=1;for(;g>0&&(P*=256);)j+=this[u+--g]*P;return j},S.prototype.readUint8=S.prototype.readUInt8=function(u,g){return u>>>=0,g||Oe(u,1,this.length),this[u]},S.prototype.readUint16LE=S.prototype.readUInt16LE=function(u,g){return u>>>=0,g||Oe(u,2,this.length),this[u]|this[u+1]<<8},S.prototype.readUint16BE=S.prototype.readUInt16BE=function(u,g){return u>>>=0,g||Oe(u,2,this.length),this[u]<<8|this[u+1]},S.prototype.readUint32LE=S.prototype.readUInt32LE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+16777216*this[u+3]},S.prototype.readUint32BE=S.prototype.readUInt32BE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),16777216*this[u]+(this[u+1]<<16|this[u+2]<<8|this[u+3])},S.prototype.readBigUInt64LE=gr(function(u){xt(u>>>=0,"offset");const g=this[u],b=this[u+7];g!==void 0&&b!==void 0||rt(u,this.length-8);const j=g+256*this[++u]+65536*this[++u]+this[++u]*2**24,P=this[++u]+256*this[++u]+65536*this[++u]+b*2**24;return BigInt(j)+(BigInt(P)<<BigInt(32))}),S.prototype.readBigUInt64BE=gr(function(u){xt(u>>>=0,"offset");const g=this[u],b=this[u+7];g!==void 0&&b!==void 0||rt(u,this.length-8);const j=g*2**24+65536*this[++u]+256*this[++u]+this[++u],P=this[++u]*2**24+65536*this[++u]+256*this[++u]+b;return(BigInt(j)<<BigInt(32))+BigInt(P)}),S.prototype.readIntLE=function(u,g,b){u>>>=0,g>>>=0,b||Oe(u,g,this.length);let j=this[u],P=1,R=0;for(;++R<g&&(P*=256);)j+=this[u+R]*P;return P*=128,j>=P&&(j-=Math.pow(2,8*g)),j},S.prototype.readIntBE=function(u,g,b){u>>>=0,g>>>=0,b||Oe(u,g,this.length);let j=g,P=1,R=this[u+--j];for(;j>0&&(P*=256);)R+=this[u+--j]*P;return P*=128,R>=P&&(R-=Math.pow(2,8*g)),R},S.prototype.readInt8=function(u,g){return u>>>=0,g||Oe(u,1,this.length),128&this[u]?-1*(255-this[u]+1):this[u]},S.prototype.readInt16LE=function(u,g){u>>>=0,g||Oe(u,2,this.length);const b=this[u]|this[u+1]<<8;return 32768&b?4294901760|b:b},S.prototype.readInt16BE=function(u,g){u>>>=0,g||Oe(u,2,this.length);const b=this[u+1]|this[u]<<8;return 32768&b?4294901760|b:b},S.prototype.readInt32LE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},S.prototype.readInt32BE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},S.prototype.readBigInt64LE=gr(function(u){xt(u>>>=0,"offset");const g=this[u],b=this[u+7];g!==void 0&&b!==void 0||rt(u,this.length-8);const j=this[u+4]+256*this[u+5]+65536*this[u+6]+(b<<24);return(BigInt(j)<<BigInt(32))+BigInt(g+256*this[++u]+65536*this[++u]+this[++u]*16777216)}),S.prototype.readBigInt64BE=gr(function(u){xt(u>>>=0,"offset");const g=this[u],b=this[u+7];g!==void 0&&b!==void 0||rt(u,this.length-8);const j=(g<<24)+65536*this[++u]+256*this[++u]+this[++u];return(BigInt(j)<<BigInt(32))+BigInt(this[++u]*16777216+65536*this[++u]+256*this[++u]+b)}),S.prototype.readFloatLE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),J.read(this,u,!0,23,4)},S.prototype.readFloatBE=function(u,g){return u>>>=0,g||Oe(u,4,this.length),J.read(this,u,!1,23,4)},S.prototype.readDoubleLE=function(u,g){return u>>>=0,g||Oe(u,8,this.length),J.read(this,u,!0,52,8)},S.prototype.readDoubleBE=function(u,g){return u>>>=0,g||Oe(u,8,this.length),J.read(this,u,!1,52,8)},S.prototype.writeUintLE=S.prototype.writeUIntLE=function(u,g,b,j){u=+u,g>>>=0,b>>>=0,!j&&Fe(this,u,g,b,Math.pow(2,8*b)-1,0);let P=1,R=0;for(this[g]=255&u;++R<b&&(P*=256);)this[g+R]=u/P&255;return g+b},S.prototype.writeUintBE=S.prototype.writeUIntBE=function(u,g,b,j){u=+u,g>>>=0,b>>>=0,!j&&Fe(this,u,g,b,Math.pow(2,8*b)-1,0);let P=b-1,R=1;for(this[g+P]=255&u;--P>=0&&(R*=256);)this[g+P]=u/R&255;return g+b},S.prototype.writeUint8=S.prototype.writeUInt8=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,1,255,0),this[g]=255&u,g+1},S.prototype.writeUint16LE=S.prototype.writeUInt16LE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,2,65535,0),this[g]=255&u,this[g+1]=u>>>8,g+2},S.prototype.writeUint16BE=S.prototype.writeUInt16BE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,2,65535,0),this[g]=u>>>8,this[g+1]=255&u,g+2},S.prototype.writeUint32LE=S.prototype.writeUInt32LE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,4,4294967295,0),this[g+3]=u>>>24,this[g+2]=u>>>16,this[g+1]=u>>>8,this[g]=255&u,g+4},S.prototype.writeUint32BE=S.prototype.writeUInt32BE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,4,4294967295,0),this[g]=u>>>24,this[g+1]=u>>>16,this[g+2]=u>>>8,this[g+3]=255&u,g+4},S.prototype.writeBigUInt64LE=gr(function(u,g=0){return Ne(this,u,g,BigInt(0),BigInt("0xffffffffffffffff"))}),S.prototype.writeBigUInt64BE=gr(function(u,g=0){return _e(this,u,g,BigInt(0),BigInt("0xffffffffffffffff"))}),S.prototype.writeIntLE=function(u,g,b,j){if(u=+u,g>>>=0,!j){const Te=Math.pow(2,8*b-1);Fe(this,u,g,b,Te-1,-Te)}let P=0,R=1,Y=0;for(this[g]=255&u;++P<b&&(R*=256);)u<0&&Y===0&&this[g+P-1]!==0&&(Y=1),this[g+P]=(u/R>>0)-Y&255;return g+b},S.prototype.writeIntBE=function(u,g,b,j){if(u=+u,g>>>=0,!j){const Te=Math.pow(2,8*b-1);Fe(this,u,g,b,Te-1,-Te)}let P=b-1,R=1,Y=0;for(this[g+P]=255&u;--P>=0&&(R*=256);)u<0&&Y===0&&this[g+P+1]!==0&&(Y=1),this[g+P]=(u/R>>0)-Y&255;return g+b},S.prototype.writeInt8=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,1,127,-128),u<0&&(u=255+u+1),this[g]=255&u,g+1},S.prototype.writeInt16LE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,2,32767,-32768),this[g]=255&u,this[g+1]=u>>>8,g+2},S.prototype.writeInt16BE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,2,32767,-32768),this[g]=u>>>8,this[g+1]=255&u,g+2},S.prototype.writeInt32LE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,4,2147483647,-2147483648),this[g]=255&u,this[g+1]=u>>>8,this[g+2]=u>>>16,this[g+3]=u>>>24,g+4},S.prototype.writeInt32BE=function(u,g,b){return u=+u,g>>>=0,b||Fe(this,u,g,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[g]=u>>>24,this[g+1]=u>>>16,this[g+2]=u>>>8,this[g+3]=255&u,g+4},S.prototype.writeBigInt64LE=gr(function(u,g=0){return Ne(this,u,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),S.prototype.writeBigInt64BE=gr(function(u,g=0){return _e(this,u,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),S.prototype.writeFloatLE=function(u,g,b){return qe(this,u,g,!0,b)},S.prototype.writeFloatBE=function(u,g,b){return qe(this,u,g,!1,b)},S.prototype.writeDoubleLE=function(u,g,b){return Ye(this,u,g,!0,b)},S.prototype.writeDoubleBE=function(u,g,b){return Ye(this,u,g,!1,b)},S.prototype.copy=function(u,g,b,j){if(!S.isBuffer(u))throw new TypeError("argument should be a Buffer");if(b||(b=0),j||j===0||(j=this.length),g>=u.length&&(g=u.length),g||(g=0),j>0&&j<b&&(j=b),j===b||u.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(j<0)throw new RangeError("sourceEnd out of bounds");j>this.length&&(j=this.length),u.length-g<j-b&&(j=u.length-g+b);const P=j-b;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(g,b,j):Uint8Array.prototype.set.call(u,this.subarray(b,j),g),P},S.prototype.fill=function(u,g,b,j){if(typeof u=="string"){if(typeof g=="string"?(j=g,g=0,b=this.length):typeof b=="string"&&(j=b,b=this.length),j!==void 0&&typeof j!="string")throw new TypeError("encoding must be a string");if(typeof j=="string"&&!S.isEncoding(j))throw new TypeError("Unknown encoding: "+j);if(u.length===1){const R=u.charCodeAt(0);(j==="utf8"&&R<128||j==="latin1")&&(u=R)}}else typeof u=="number"?u&=255:typeof u=="boolean"&&(u=Number(u));if(g<0||this.length<g||this.length<b)throw new RangeError("Out of range index");if(b<=g)return this;let P;if(g>>>=0,b=b===void 0?this.length:b>>>0,u||(u=0),typeof u=="number")for(P=g;P<b;++P)this[P]=u;else{const R=S.isBuffer(u)?u:S.from(u,j),Y=R.length;if(Y===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(P=0;P<b-g;++P)this[P+g]=R[P%Y]}return this};const it={};function y(u,g,b){it[u]=class extends b{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${u}]`,this.stack,delete this.name}get code(){return u}set code(j){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:j,writable:!0})}toString(){return`${this.name} [${u}]: ${this.message}`}}}function Qe(u){let g="",b=u.length;const j=u[0]==="-"?1:0;for(;b>=j+4;b-=3)g=`_${u.slice(b-3,b)}${g}`;return`${u.slice(0,b)}${g}`}function Ue(u,g,b,j,P,R){if(u>b||u<g){const Y=typeof g=="bigint"?"n":"";let Te;throw Te=R>3?g===0||g===BigInt(0)?`>= 0${Y} and < 2${Y} ** ${8*(R+1)}${Y}`:`>= -(2${Y} ** ${8*(R+1)-1}${Y}) and < 2 ** ${8*(R+1)-1}${Y}`:`>= ${g}${Y} and <= ${b}${Y}`,new it.ERR_OUT_OF_RANGE("value",Te,u)}(function(Y,Te,Re){xt(Te,"offset"),Y[Te]!==void 0&&Y[Te+Re]!==void 0||rt(Te,Y.length-(Re+1))})(j,P,R)}function xt(u,g){if(typeof u!="number")throw new it.ERR_INVALID_ARG_TYPE(g,"number",u)}function rt(u,g,b){throw Math.floor(u)!==u?(xt(u,b),new it.ERR_OUT_OF_RANGE(b||"offset","an integer",u)):g<0?new it.ERR_BUFFER_OUT_OF_BOUNDS:new it.ERR_OUT_OF_RANGE(b||"offset",`>= ${b?1:0} and <= ${g}`,u)}y("ERR_BUFFER_OUT_OF_BOUNDS",function(u){return u?`${u} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),y("ERR_INVALID_ARG_TYPE",function(u,g){return`The "${u}" argument must be of type number. Received type ${typeof g}`},TypeError),y("ERR_OUT_OF_RANGE",function(u,g,b){let j=`The value of "${u}" is out of range.`,P=b;return Number.isInteger(b)&&Math.abs(b)>4294967296?P=Qe(String(b)):typeof b=="bigint"&&(P=String(b),(b>BigInt(2)**BigInt(32)||b<-(BigInt(2)**BigInt(32)))&&(P=Qe(P)),P+="n"),j+=` It must be ${g}. Received ${P}`,j},RangeError);const Qt=/[^+/0-9A-Za-z-_]/g;function Wt(u,g){let b;g=g||1/0;const j=u.length;let P=null;const R=[];for(let Y=0;Y<j;++Y){if(b=u.charCodeAt(Y),b>55295&&b<57344){if(!P){if(b>56319){(g-=3)>-1&&R.push(239,191,189);continue}if(Y+1===j){(g-=3)>-1&&R.push(239,191,189);continue}P=b;continue}if(b<56320){(g-=3)>-1&&R.push(239,191,189),P=b;continue}b=65536+(P-55296<<10|b-56320)}else P&&(g-=3)>-1&&R.push(239,191,189);if(P=null,b<128){if((g-=1)<0)break;R.push(b)}else if(b<2048){if((g-=2)<0)break;R.push(b>>6|192,63&b|128)}else if(b<65536){if((g-=3)<0)break;R.push(b>>12|224,b>>6&63|128,63&b|128)}else{if(!(b<1114112))throw new Error("Invalid code point");if((g-=4)<0)break;R.push(b>>18|240,b>>12&63|128,b>>6&63|128,63&b|128)}}return R}function qt(u){return L.toByteArray(function(g){if((g=(g=g.split("=")[0]).trim().replace(Qt,"")).length<2)return"";for(;g.length%4!=0;)g+="=";return g}(u))}function mr(u,g,b,j){let P;for(P=0;P<j&&!(P+b>=g.length||P>=u.length);++P)g[P+b]=u[P];return P}function Rt(u,g){return u instanceof g||u!=null&&u.constructor!=null&&u.constructor.name!=null&&u.constructor.name===g.name}function qr(u){return u!=u}const Fs=function(){const u="0123456789abcdef",g=new Array(256);for(let b=0;b<16;++b){const j=16*b;for(let P=0;P<16;++P)g[j+P]=u[b]+u[P]}return g}();function gr(u){return typeof BigInt>"u"?Ds:u}function Ds(){throw new Error("BigInt not supported")}},645:(te,re)=>{re.read=function(z,L,J,he,me){var ge,S,H=8*me-he-1,oe=(1<<H)-1,pe=oe>>1,ne=-7,ye=J?me-1:0,we=J?-1:1,ce=z[L+ye];for(ye+=we,ge=ce&(1<<-ne)-1,ce>>=-ne,ne+=H;ne>0;ge=256*ge+z[L+ye],ye+=we,ne-=8);for(S=ge&(1<<-ne)-1,ge>>=-ne,ne+=he;ne>0;S=256*S+z[L+ye],ye+=we,ne-=8);if(ge===0)ge=1-pe;else{if(ge===oe)return S?NaN:1/0*(ce?-1:1);S+=Math.pow(2,he),ge-=pe}return(ce?-1:1)*S*Math.pow(2,ge-he)},re.write=function(z,L,J,he,me,ge){var S,H,oe,pe=8*ge-me-1,ne=(1<<pe)-1,ye=ne>>1,we=me===23?Math.pow(2,-24)-Math.pow(2,-77):0,ce=he?0:ge-1,ie=he?1:-1,ae=L<0||L===0&&1/L<0?1:0;for(L=Math.abs(L),isNaN(L)||L===1/0?(H=isNaN(L)?1:0,S=ne):(S=Math.floor(Math.log(L)/Math.LN2),L*(oe=Math.pow(2,-S))<1&&(S--,oe*=2),(L+=S+ye>=1?we/oe:we*Math.pow(2,1-ye))*oe>=2&&(S++,oe/=2),S+ye>=ne?(H=0,S=ne):S+ye>=1?(H=(L*oe-1)*Math.pow(2,me),S+=ye):(H=L*Math.pow(2,ye-1)*Math.pow(2,me),S=0));me>=8;z[J+ce]=255&H,ce+=ie,H/=256,me-=8);for(S=S<<me|H,pe+=me;pe>0;z[J+ce]=255&S,ce+=ie,S/=256,pe-=8);z[J+ce-ie]|=128*ae}},874:()=>{(function(te){var re="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",z={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},L={bash:z,environment:{pattern:RegExp("\\$"+re),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+re),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};te.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+re),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:L},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:z}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:L},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:L.entity}}],environment:{pattern:RegExp("\\$?"+re),alias:"constant"},variable:L.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},z.inside=te.languages.bash;for(var J=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],he=L.variable[1].inside,me=0;me<J.length;me++)he[J[me]]=te.languages.bash[J[me]];te.languages.sh=te.languages.bash,te.languages.shell=te.languages.bash})(Prism)},16:()=>{(function(te){function re(Ye,it){return Ye.replace(/<<(\d+)>>/g,function(y,Qe){return"(?:"+it[+Qe]+")"})}function z(Ye,it,y){return RegExp(re(Ye,it),y||"")}function L(Ye,it){for(var y=0;y<it;y++)Ye=Ye.replace(/<<self>>/g,function(){return"(?:"+Ye+")"});return Ye.replace(/<<self>>/g,"[^\\s\\S]")}var J="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",he="class enum interface record struct",me="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",ge="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function S(Ye){return"\\b(?:"+Ye.trim().replace(/ /g,"|")+")\\b"}var H=S(he),oe=RegExp(S(J+" "+he+" "+me+" "+ge)),pe=S(he+" "+me+" "+ge),ne=S(J+" "+he+" "+ge),ye=L(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),we=L(/\((?:[^()]|<<self>>)*\)/.source,2),ce=/@?\b[A-Za-z_]\w*\b/.source,ie=re(/<<0>>(?:\s*<<1>>)?/.source,[ce,ye]),ae=re(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[pe,ie]),G=/\[\s*(?:,\s*)*\]/.source,q=re(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[ae,G]),M=re(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[ye,we,G]),Z=re(/\(<<0>>+(?:,<<0>>+)+\)/.source,[M]),ee=re(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[Z,ae,G]),W={keyword:oe,punctuation:/[<>()?,.:[\]]/},K=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,fe=/"(?:\\.|[^\\"\r\n])*"/.source,Ce=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;te.languages.csharp=te.languages.extend("clike",{string:[{pattern:z(/(^|[^$\\])<<0>>/.source,[Ce]),lookbehind:!0,greedy:!0},{pattern:z(/(^|[^@$\\])<<0>>/.source,[fe]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:z(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[ae]),lookbehind:!0,inside:W},{pattern:z(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[ce,ee]),lookbehind:!0,inside:W},{pattern:z(/(\busing\s+)<<0>>(?=\s*=)/.source,[ce]),lookbehind:!0},{pattern:z(/(\b<<0>>\s+)<<1>>/.source,[H,ie]),lookbehind:!0,inside:W},{pattern:z(/(\bcatch\s*\(\s*)<<0>>/.source,[ae]),lookbehind:!0,inside:W},{pattern:z(/(\bwhere\s+)<<0>>/.source,[ce]),lookbehind:!0},{pattern:z(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[q]),lookbehind:!0,inside:W},{pattern:z(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[ee,ne,ce]),inside:W}],keyword:oe,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),te.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),te.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:z(/([(,]\s*)<<0>>(?=\s*:)/.source,[ce]),lookbehind:!0,alias:"punctuation"}}),te.languages.insertBefore("csharp","class-name",{namespace:{pattern:z(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[ce]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:z(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[we]),lookbehind:!0,alias:"class-name",inside:W},"return-type":{pattern:z(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[ee,ae]),inside:W,alias:"class-name"},"constructor-invocation":{pattern:z(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[ee]),lookbehind:!0,inside:W,alias:"class-name"},"generic-method":{pattern:z(/<<0>>\s*<<1>>(?=\s*\()/.source,[ce,ye]),inside:{function:z(/^<<0>>/.source,[ce]),generic:{pattern:RegExp(ye),alias:"class-name",inside:W}}},"type-list":{pattern:z(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[H,ie,ce,ee,oe.source,we,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:z(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[ie,we]),lookbehind:!0,greedy:!0,inside:te.languages.csharp},keyword:oe,"class-name":{pattern:RegExp(ee),greedy:!0,inside:W},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var Le=fe+"|"+K,Pe=re(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[Le]),Ie=L(re(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Pe]),2),Be=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,nt=re(/<<0>>(?:\s*\(<<1>>*\))?/.source,[ae,Ie]);te.languages.insertBefore("csharp","class-name",{attribute:{pattern:z(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[Be,nt]),lookbehind:!0,greedy:!0,inside:{target:{pattern:z(/^<<0>>(?=\s*:)/.source,[Be]),alias:"keyword"},"attribute-arguments":{pattern:z(/\(<<0>>*\)/.source,[Ie]),inside:te.languages.csharp},"class-name":{pattern:RegExp(ae),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var Oe=/:[^}\r\n]+/.source,Fe=L(re(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Pe]),2),Ne=re(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Fe,Oe]),_e=L(re(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[Le]),2),at=re(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[_e,Oe]);function qe(Ye,it){return{interpolation:{pattern:z(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[Ye]),lookbehind:!0,inside:{"format-string":{pattern:z(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[it,Oe]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:te.languages.csharp}}},string:/[\s\S]+/}}te.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:z(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[Ne]),lookbehind:!0,greedy:!0,inside:qe(Ne,Fe)},{pattern:z(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[at]),lookbehind:!0,greedy:!0,inside:qe(at,_e)}],char:{pattern:RegExp(K),greedy:!0}}),te.languages.dotnet=te.languages.cs=te.languages.csharp})(Prism)},251:()=>{(function(te){var re=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;te.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+re.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+re.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+re.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+re.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:re,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},te.languages.css.atrule.inside.rest=te.languages.css;var z=te.languages.markup;z&&(z.tag.addInlined("style","css"),z.tag.addAttribute("style","css"))})(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{(function(te){function re(H){return RegExp("(^(?:"+H+"):[ 	]*(?![ 	]))[^]+","i")}te.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:te.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:re(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:te.languages.csp},{pattern:re(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:te.languages.hpkp},{pattern:re(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:te.languages.hsts},{pattern:re(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var z,L=te.languages,J={"application/javascript":L.javascript,"application/json":L.json||L.javascript,"application/xml":L.xml,"text/xml":L.xml,"text/html":L.html,"text/css":L.css,"text/plain":L.plain},he={"application/json":!0,"application/xml":!0};function me(H){var oe=H.replace(/^[a-z]+\//,"");return"(?:"+H+"|"+("\\w+/(?:[\\w.-]+\\+)+"+oe+"(?![+\\w.-])")+")"}for(var ge in J)if(J[ge]){z=z||{};var S=he[ge]?me(ge):ge;z[ge.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+S+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:J[ge]}}z&&te.languages.insertBefore("http","header",z)})(Prism)},503:()=>{(function(te){var re=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,z=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,L={pattern:RegExp(/(^|[^\w.])/.source+z+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};te.languages.java=te.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[L,{pattern:RegExp(/(^|[^\w.])/.source+z+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:L.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+z+/[A-Z]\w*\b/.source),lookbehind:!0,inside:L.inside}],keyword:re,function:[te.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),te.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),te.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":L,keyword:re,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+z+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:L.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+z+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:L.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return re.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{(function(te){var re=/[*&][^\s[\]{},]+/,z=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,L="(?:"+z.source+"(?:[ 	]+"+re.source+")?|"+re.source+"(?:[ 	]+"+z.source+")?)",J=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),he=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function me(ge,S){S=(S||"").replace(/m/g,"")+"m";var H=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return L}).replace(/<<value>>/g,function(){return ge});return RegExp(H,S)}te.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return L})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return L}).replace(/<<key>>/g,function(){return"(?:"+J+"|"+he+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:me(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:me(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:me(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:me(he),lookbehind:!0,greedy:!0},number:{pattern:me(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:z,important:re,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},te.languages.yml=te.languages.yaml})(Prism)},660:(te,re,z)=>{var L=function(J){var he=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,me=0,ge={},S={manual:J.Prism&&J.Prism.manual,disableWorkerMessageHandler:J.Prism&&J.Prism.disableWorkerMessageHandler,util:{encode:function G(q){return q instanceof H?new H(q.type,G(q.content),q.alias):Array.isArray(q)?q.map(G):q.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(G){return Object.prototype.toString.call(G).slice(8,-1)},objId:function(G){return G.__id||Object.defineProperty(G,"__id",{value:++me}),G.__id},clone:function G(q,M){var Z,ee;switch(M=M||{},S.util.type(q)){case"Object":if(ee=S.util.objId(q),M[ee])return M[ee];for(var W in Z={},M[ee]=Z,q)q.hasOwnProperty(W)&&(Z[W]=G(q[W],M));return Z;case"Array":return ee=S.util.objId(q),M[ee]?M[ee]:(Z=[],M[ee]=Z,q.forEach(function(K,fe){Z[fe]=G(K,M)}),Z);default:return q}},getLanguage:function(G){for(;G;){var q=he.exec(G.className);if(q)return q[1].toLowerCase();G=G.parentElement}return"none"},setLanguage:function(G,q){G.className=G.className.replace(RegExp(he,"gi"),""),G.classList.add("language-"+q)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(Z){var G=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(Z.stack)||[])[1];if(G){var q=document.getElementsByTagName("script");for(var M in q)if(q[M].src==G)return q[M]}return null}},isActive:function(G,q,M){for(var Z="no-"+q;G;){var ee=G.classList;if(ee.contains(q))return!0;if(ee.contains(Z))return!1;G=G.parentElement}return!!M}},languages:{plain:ge,plaintext:ge,text:ge,txt:ge,extend:function(G,q){var M=S.util.clone(S.languages[G]);for(var Z in q)M[Z]=q[Z];return M},insertBefore:function(G,q,M,Z){var ee=(Z=Z||S.languages)[G],W={};for(var K in ee)if(ee.hasOwnProperty(K)){if(K==q)for(var fe in M)M.hasOwnProperty(fe)&&(W[fe]=M[fe]);M.hasOwnProperty(K)||(W[K]=ee[K])}var Ce=Z[G];return Z[G]=W,S.languages.DFS(S.languages,function(Le,Pe){Pe===Ce&&Le!=G&&(this[Le]=W)}),W},DFS:function G(q,M,Z,ee){ee=ee||{};var W=S.util.objId;for(var K in q)if(q.hasOwnProperty(K)){M.call(q,K,q[K],Z||K);var fe=q[K],Ce=S.util.type(fe);Ce!=="Object"||ee[W(fe)]?Ce!=="Array"||ee[W(fe)]||(ee[W(fe)]=!0,G(fe,M,K,ee)):(ee[W(fe)]=!0,G(fe,M,null,ee))}}},plugins:{},highlightAll:function(G,q){S.highlightAllUnder(document,G,q)},highlightAllUnder:function(G,q,M){var Z={callback:M,container:G,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};S.hooks.run("before-highlightall",Z),Z.elements=Array.prototype.slice.apply(Z.container.querySelectorAll(Z.selector)),S.hooks.run("before-all-elements-highlight",Z);for(var ee,W=0;ee=Z.elements[W++];)S.highlightElement(ee,q===!0,Z.callback)},highlightElement:function(G,q,M){var Z=S.util.getLanguage(G),ee=S.languages[Z];S.util.setLanguage(G,Z);var W=G.parentElement;W&&W.nodeName.toLowerCase()==="pre"&&S.util.setLanguage(W,Z);var K={element:G,language:Z,grammar:ee,code:G.textContent};function fe(Le){K.highlightedCode=Le,S.hooks.run("before-insert",K),K.element.innerHTML=K.highlightedCode,S.hooks.run("after-highlight",K),S.hooks.run("complete",K),M&&M.call(K.element)}if(S.hooks.run("before-sanity-check",K),(W=K.element.parentElement)&&W.nodeName.toLowerCase()==="pre"&&!W.hasAttribute("tabindex")&&W.setAttribute("tabindex","0"),!K.code)return S.hooks.run("complete",K),void(M&&M.call(K.element));if(S.hooks.run("before-highlight",K),K.grammar)if(q&&J.Worker){var Ce=new Worker(S.filename);Ce.onmessage=function(Le){fe(Le.data)},Ce.postMessage(JSON.stringify({language:K.language,code:K.code,immediateClose:!0}))}else fe(S.highlight(K.code,K.grammar,K.language));else fe(S.util.encode(K.code))},highlight:function(G,q,M){var Z={code:G,grammar:q,language:M};if(S.hooks.run("before-tokenize",Z),!Z.grammar)throw new Error('The language "'+Z.language+'" has no grammar.');return Z.tokens=S.tokenize(Z.code,Z.grammar),S.hooks.run("after-tokenize",Z),H.stringify(S.util.encode(Z.tokens),Z.language)},tokenize:function(G,q){var M=q.rest;if(M){for(var Z in M)q[Z]=M[Z];delete q.rest}var ee=new ne;return ye(ee,ee.head,G),pe(G,ee,q,ee.head,0),function(W){for(var K=[],fe=W.head.next;fe!==W.tail;)K.push(fe.value),fe=fe.next;return K}(ee)},hooks:{all:{},add:function(G,q){var M=S.hooks.all;M[G]=M[G]||[],M[G].push(q)},run:function(G,q){var M=S.hooks.all[G];if(M&&M.length)for(var Z,ee=0;Z=M[ee++];)Z(q)}},Token:H};function H(G,q,M,Z){this.type=G,this.content=q,this.alias=M,this.length=0|(Z||"").length}function oe(G,q,M,Z){G.lastIndex=q;var ee=G.exec(M);if(ee&&Z&&ee[1]){var W=ee[1].length;ee.index+=W,ee[0]=ee[0].slice(W)}return ee}function pe(G,q,M,Z,ee,W){for(var K in M)if(M.hasOwnProperty(K)&&M[K]){var fe=M[K];fe=Array.isArray(fe)?fe:[fe];for(var Ce=0;Ce<fe.length;++Ce){if(W&&W.cause==K+","+Ce)return;var Le=fe[Ce],Pe=Le.inside,Ie=!!Le.lookbehind,Be=!!Le.greedy,nt=Le.alias;if(Be&&!Le.pattern.global){var Oe=Le.pattern.toString().match(/[imsuy]*$/)[0];Le.pattern=RegExp(Le.pattern.source,Oe+"g")}for(var Fe=Le.pattern||Le,Ne=Z.next,_e=ee;Ne!==q.tail&&!(W&&_e>=W.reach);_e+=Ne.value.length,Ne=Ne.next){var at=Ne.value;if(q.length>G.length)return;if(!(at instanceof H)){var qe,Ye=1;if(Be){if(!(qe=oe(Fe,_e,G,Ie))||qe.index>=G.length)break;var it=qe.index,y=qe.index+qe[0].length,Qe=_e;for(Qe+=Ne.value.length;it>=Qe;)Qe+=(Ne=Ne.next).value.length;if(_e=Qe-=Ne.value.length,Ne.value instanceof H)continue;for(var Ue=Ne;Ue!==q.tail&&(Qe<y||typeof Ue.value=="string");Ue=Ue.next)Ye++,Qe+=Ue.value.length;Ye--,at=G.slice(_e,Qe),qe.index-=_e}else if(!(qe=oe(Fe,0,at,Ie)))continue;it=qe.index;var xt=qe[0],rt=at.slice(0,it),Qt=at.slice(it+xt.length),Wt=_e+at.length;W&&Wt>W.reach&&(W.reach=Wt);var qt=Ne.prev;if(rt&&(qt=ye(q,qt,rt),_e+=rt.length),we(q,qt,Ye),Ne=ye(q,qt,new H(K,Pe?S.tokenize(xt,Pe):xt,nt,xt)),Qt&&ye(q,Ne,Qt),Ye>1){var mr={cause:K+","+Ce,reach:Wt};pe(G,q,M,Ne.prev,_e,mr),W&&mr.reach>W.reach&&(W.reach=mr.reach)}}}}}}function ne(){var G={value:null,prev:null,next:null},q={value:null,prev:G,next:null};G.next=q,this.head=G,this.tail=q,this.length=0}function ye(G,q,M){var Z=q.next,ee={value:M,prev:q,next:Z};return q.next=ee,Z.prev=ee,G.length++,ee}function we(G,q,M){for(var Z=q.next,ee=0;ee<M&&Z!==G.tail;ee++)Z=Z.next;q.next=Z,Z.prev=q,G.length-=ee}if(J.Prism=S,H.stringify=function G(q,M){if(typeof q=="string")return q;if(Array.isArray(q)){var Z="";return q.forEach(function(Ce){Z+=G(Ce,M)}),Z}var ee={type:q.type,content:G(q.content,M),tag:"span",classes:["token",q.type],attributes:{},language:M},W=q.alias;W&&(Array.isArray(W)?Array.prototype.push.apply(ee.classes,W):ee.classes.push(W)),S.hooks.run("wrap",ee);var K="";for(var fe in ee.attributes)K+=" "+fe+'="'+(ee.attributes[fe]||"").replace(/"/g,"&quot;")+'"';return"<"+ee.tag+' class="'+ee.classes.join(" ")+'"'+K+">"+ee.content+"</"+ee.tag+">"},!J.document)return J.addEventListener&&(S.disableWorkerMessageHandler||J.addEventListener("message",function(G){var q=JSON.parse(G.data),M=q.language,Z=q.code,ee=q.immediateClose;J.postMessage(S.highlight(Z,S.languages[M],M)),ee&&J.close()},!1)),S;var ce=S.util.currentScript();function ie(){S.manual||S.highlightAll()}if(ce&&(S.filename=ce.src,ce.hasAttribute("data-manual")&&(S.manual=!0)),!S.manual){var ae=document.readyState;ae==="loading"||ae==="interactive"&&ce&&ce.defer?document.addEventListener("DOMContentLoaded",ie):window.requestAnimationFrame?window.requestAnimationFrame(ie):window.setTimeout(ie,16)}return S}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});te.exports&&(te.exports=L),z.g!==void 0&&(z.g.Prism=L),L.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},L.languages.markup.tag.inside["attr-value"].inside.entity=L.languages.markup.entity,L.languages.markup.doctype.inside["internal-subset"].inside=L.languages.markup,L.hooks.add("wrap",function(J){J.type==="entity"&&(J.attributes.title=J.content.replace(/&amp;/,"&"))}),Object.defineProperty(L.languages.markup.tag,"addInlined",{value:function(J,he){var me={};me["language-"+he]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:L.languages[he]},me.cdata=/^<!\[CDATA\[|\]\]>$/i;var ge={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:me}};ge["language-"+he]={pattern:/[\s\S]+/,inside:L.languages[he]};var S={};S[J]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return J}),"i"),lookbehind:!0,greedy:!0,inside:ge},L.languages.insertBefore("markup","cdata",S)}}),Object.defineProperty(L.languages.markup.tag,"addAttribute",{value:function(J,he){L.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+J+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[he,"language-"+he],inside:L.languages[he]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),L.languages.html=L.languages.markup,L.languages.mathml=L.languages.markup,L.languages.svg=L.languages.markup,L.languages.xml=L.languages.extend("markup",{}),L.languages.ssml=L.languages.xml,L.languages.atom=L.languages.xml,L.languages.rss=L.languages.xml,function(J){var he=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;J.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+he.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+he.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+he.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+he.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:he,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},J.languages.css.atrule.inside.rest=J.languages.css;var me=J.languages.markup;me&&(me.tag.addInlined("style","css"),me.tag.addAttribute("style","css"))}(L),L.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},L.languages.javascript=L.languages.extend("clike",{"class-name":[L.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),L.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,L.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:L.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:L.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:L.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:L.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:L.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),L.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:L.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),L.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),L.languages.markup&&(L.languages.markup.tag.addInlined("script","javascript"),L.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),L.languages.js=L.languages.javascript,function(){if(L!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var J={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},he="data-src-status",me="loading",ge="loaded",S='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';L.hooks.add("before-highlightall",function(oe){oe.selector+=", "+S}),L.hooks.add("before-sanity-check",function(oe){var pe=oe.element;if(pe.matches(S)){oe.code="",pe.setAttribute(he,me);var ne=pe.appendChild(document.createElement("CODE"));ne.textContent="Loading…";var ye=pe.getAttribute("data-src"),we=oe.language;if(we==="none"){var ce=(/\.(\w+)$/.exec(ye)||[,"none"])[1];we=J[ce]||ce}L.util.setLanguage(ne,we),L.util.setLanguage(pe,we);var ie=L.plugins.autoloader;ie&&ie.loadLanguages(we),function(ae,G,q){var M=new XMLHttpRequest;M.open("GET",ae,!0),M.onreadystatechange=function(){M.readyState==4&&(M.status<400&&M.responseText?G(M.responseText):M.status>=400?q("✖ Error "+M.status+" while fetching file: "+M.statusText):q("✖ Error: File does not exist or is empty"))},M.send(null)}(ye,function(ae){pe.setAttribute(he,ge);var G=function(ee){var W=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(ee||"");if(W){var K=Number(W[1]),fe=W[2],Ce=W[3];return fe?Ce?[K,Number(Ce)]:[K,void 0]:[K,K]}}(pe.getAttribute("data-range"));if(G){var q=ae.split(/\r\n?|\n/g),M=G[0],Z=G[1]==null?q.length:G[1];M<0&&(M+=q.length),M=Math.max(0,Math.min(M-1,q.length)),Z<0&&(Z+=q.length),Z=Math.max(0,Math.min(Z,q.length)),ae=q.slice(M,Z).join(`
`),pe.hasAttribute("data-start")||pe.setAttribute("data-start",String(M+1))}ne.textContent=ae,L.highlightElement(ne)},function(ae){pe.setAttribute(he,"failed"),ne.textContent=ae})}}),L.plugins.fileHighlight={highlight:function(oe){for(var pe,ne=(oe||document).querySelectorAll(S),ye=0;pe=ne[ye++];)L.highlightElement(pe)}};var H=!1;L.fileHighlight=function(){H||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),H=!0),L.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},464:te=>{var re,z="";te.exports=function(L,J){if(typeof L!="string")throw new TypeError("expected a string");if(J===1)return L;if(J===2)return L+L;var he=L.length*J;if(re!==L||re===void 0)re=L,z="";else if(z.length>=he)return z.substr(0,he);for(;he>z.length&&J>1;)1&J&&(z+=L),J>>=1,L+=L;return z=(z+=L).substr(0,he)}},131:(te,re,z)=>{var L=z(464),J=function(S){return/<\/+[^>]+>/.test(S)},he=function(S){return/<[^>]+\/>/.test(S)};function me(S){return S.split(/(<\/?[^>]+>)/g).filter(function(H){return H.trim()!==""}).map(function(H){return{value:H,type:ge(H)}})}function ge(S){return J(S)?"ClosingTag":function(H){return function(oe){return/<[^>!]+>/.test(oe)}(H)&&!J(H)&&!he(H)}(S)?"OpeningTag":he(S)?"SelfClosingTag":"Text"}te.exports=function(S){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},oe=H.indentor,pe=H.textNodesOnSameLine,ne=0,ye=[];oe=oe||"    ";var we=me(S).map(function(ce,ie,ae){var G=ce.value,q=ce.type;q==="ClosingTag"&&ne--;var M=L(oe,ne),Z=M+G;if(q==="OpeningTag"&&ne++,pe){var ee=ae[ie-1],W=ae[ie-2];q==="ClosingTag"&&ee.type==="Text"&&W.type==="OpeningTag"&&(Z=""+M+W.value+ee.value+G,ye.push(ie-2,ie-1))}return Z});return ye.forEach(function(ce){return we[ce]=null}),we.filter(function(ce){return!!ce}).join(`
`)}}},Cr={};function ue(te){var re=Cr[te];if(re!==void 0){if(re.error!==void 0)throw re.error;return re.exports}var z=Cr[te]={exports:{}};try{var L={id:te,module:z,factory:zn[te],require:ue};ue.i.forEach(function(J){J(L)}),z=L.module,L.factory.call(z.exports,z,z.exports,L.require)}catch(J){throw z.error=J,J}return z.exports}ue.m=zn,ue.c=Cr,ue.i=[],ue.n=te=>{var re=te&&te.__esModule?()=>te.default:()=>te;return ue.d(re,{a:re}),re},ue.d=(te,re)=>{for(var z in re)ue.o(re,z)&&!ue.o(te,z)&&Object.defineProperty(te,z,{enumerable:!0,get:re[z]})},ue.hu=te=>te+"."+ue.h()+".hot-update.js",ue.hmrF=()=>"main."+ue.h()+".hot-update.json",ue.h=()=>"fdf734afd7a6f574c7ff",ue.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),ue.o=(te,re)=>Object.prototype.hasOwnProperty.call(te,re),fr={},qn="rapidoc:",ue.l=(te,re,z,L)=>{if(fr[te])fr[te].push(re);else{var J,he;if(z!==void 0)for(var me=document.getElementsByTagName("script"),ge=0;ge<me.length;ge++){var S=me[ge];if(S.getAttribute("src")==te||S.getAttribute("data-webpack")==qn+z){J=S;break}}J||(he=!0,(J=document.createElement("script")).charset="utf-8",J.timeout=120,ue.nc&&J.setAttribute("nonce",ue.nc),J.setAttribute("data-webpack",qn+z),J.src=te),fr[te]=[re];var H=(pe,ne)=>{J.onerror=J.onload=null,clearTimeout(oe);var ye=fr[te];if(delete fr[te],J.parentNode&&J.parentNode.removeChild(J),ye&&ye.forEach(we=>we(ne)),pe)return pe(ne)},oe=setTimeout(H.bind(null,void 0,{type:"timeout",target:J}),12e4);J.onerror=H.bind(null,J.onerror),J.onload=H.bind(null,J.onload),he&&document.head.appendChild(J)}},(()=>{var te,re,z,L={},J=ue.c,he=[],me=[],ge="idle",S=0,H=[];function oe(ie){ge=ie;for(var ae=[],G=0;G<me.length;G++)ae[G]=me[G].call(null,ie);return Promise.all(ae)}function pe(){--S==0&&oe("ready").then(function(){if(S===0){var ie=H;H=[];for(var ae=0;ae<ie.length;ae++)ie[ae]()}})}function ne(ie){if(ge!=="idle")throw new Error("check() is only allowed in idle status");return oe("check").then(ue.hmrM).then(function(ae){return ae?oe("prepare").then(function(){var G=[];return re=[],Promise.all(Object.keys(ue.hmrC).reduce(function(q,M){return ue.hmrC[M](ae.c,ae.r,ae.m,q,re,G),q},[])).then(function(){return q=function(){return ie?we(ie):oe("ready").then(function(){return G})},S===0?q():new Promise(function(M){H.push(function(){M(q())})});var q})}):oe(ce()?"ready":"idle").then(function(){return null})})}function ye(ie){return ge!=="ready"?Promise.resolve().then(function(){throw new Error("apply() is only allowed in ready status (state: "+ge+")")}):we(ie)}function we(ie){ie=ie||{},ce();var ae=re.map(function(K){return K(ie)});re=void 0;var G=ae.map(function(K){return K.error}).filter(Boolean);if(G.length>0)return oe("abort").then(function(){throw G[0]});var q=oe("dispose");ae.forEach(function(K){K.dispose&&K.dispose()});var M,Z=oe("apply"),ee=function(K){M||(M=K)},W=[];return ae.forEach(function(K){if(K.apply){var fe=K.apply(ee);if(fe)for(var Ce=0;Ce<fe.length;Ce++)W.push(fe[Ce])}}),Promise.all([q,Z]).then(function(){return M?oe("fail").then(function(){throw M}):z?we(ie).then(function(K){return W.forEach(function(fe){K.indexOf(fe)<0&&K.push(fe)}),K}):oe("idle").then(function(){return W})})}function ce(){if(z)return re||(re=[]),Object.keys(ue.hmrI).forEach(function(ie){z.forEach(function(ae){ue.hmrI[ie](ae,re)})}),z=void 0,!0}ue.hmrD=L,ue.i.push(function(ie){var ae,G,q,M,Z=ie.module,ee=function(W,K){var fe=J[K];if(!fe)return W;var Ce=function(Ie){if(fe.hot.active){if(J[Ie]){var Be=J[Ie].parents;Be.indexOf(K)===-1&&Be.push(K)}else he=[K],te=Ie;fe.children.indexOf(Ie)===-1&&fe.children.push(Ie)}else console.warn("[HMR] unexpected require("+Ie+") from disposed module "+K),he=[];return W(Ie)},Le=function(Ie){return{configurable:!0,enumerable:!0,get:function(){return W[Ie]},set:function(Be){W[Ie]=Be}}};for(var Pe in W)Object.prototype.hasOwnProperty.call(W,Pe)&&Pe!=="e"&&Object.defineProperty(Ce,Pe,Le(Pe));return Ce.e=function(Ie){return function(Be){switch(ge){case"ready":oe("prepare");case"prepare":return S++,Be.then(pe,pe),Be;default:return Be}}(W.e(Ie))},Ce}(ie.require,ie.id);Z.hot=(ae=ie.id,G=Z,M={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:q=te!==ae,_requireSelf:function(){he=G.parents.slice(),te=q?void 0:ae,ue(ae)},active:!0,accept:function(W,K,fe){if(W===void 0)M._selfAccepted=!0;else if(typeof W=="function")M._selfAccepted=W;else if(typeof W=="object"&&W!==null)for(var Ce=0;Ce<W.length;Ce++)M._acceptedDependencies[W[Ce]]=K||function(){},M._acceptedErrorHandlers[W[Ce]]=fe;else M._acceptedDependencies[W]=K||function(){},M._acceptedErrorHandlers[W]=fe},decline:function(W){if(W===void 0)M._selfDeclined=!0;else if(typeof W=="object"&&W!==null)for(var K=0;K<W.length;K++)M._declinedDependencies[W[K]]=!0;else M._declinedDependencies[W]=!0},dispose:function(W){M._disposeHandlers.push(W)},addDisposeHandler:function(W){M._disposeHandlers.push(W)},removeDisposeHandler:function(W){var K=M._disposeHandlers.indexOf(W);K>=0&&M._disposeHandlers.splice(K,1)},invalidate:function(){switch(this._selfInvalidated=!0,ge){case"idle":re=[],Object.keys(ue.hmrI).forEach(function(W){ue.hmrI[W](ae,re)}),oe("ready");break;case"ready":Object.keys(ue.hmrI).forEach(function(W){ue.hmrI[W](ae,re)});break;case"prepare":case"check":case"dispose":case"apply":(z=z||[]).push(ae)}},check:ne,apply:ye,status:function(W){if(!W)return ge;me.push(W)},addStatusHandler:function(W){me.push(W)},removeStatusHandler:function(W){var K=me.indexOf(W);K>=0&&me.splice(K,1)},data:L[ae]},te=void 0,M),Z.parents=he,Z.children=[],he=[],ie.require=ee}),ue.hmrC={},ue.hmrI={}})(),ue.p="",(()=>{var te,re,z,L,J,he=ue.hmrS_jsonp=ue.hmrS_jsonp||{179:0},me={};function ge(H,oe){return te=oe,new Promise((pe,ne)=>{me[H]=pe;var ye=ue.p+ue.hu(H),we=new Error;ue.l(ye,ce=>{if(me[H]){me[H]=void 0;var ie=ce&&(ce.type==="load"?"missing":ce.type),ae=ce&&ce.target&&ce.target.src;we.message="Loading hot update chunk "+H+` failed.
(`+ie+": "+ae+")",we.name="ChunkLoadError",we.type=ie,we.request=ae,ne(we)}})})}function S(H){function oe(Pe){for(var Ie=[Pe],Be={},nt=Ie.map(function(it){return{chain:[it],id:it}});nt.length>0;){var Oe=nt.pop(),Fe=Oe.id,Ne=Oe.chain,_e=ue.c[Fe];if(_e&&(!_e.hot._selfAccepted||_e.hot._selfInvalidated)){if(_e.hot._selfDeclined)return{type:"self-declined",chain:Ne,moduleId:Fe};if(_e.hot._main)return{type:"unaccepted",chain:Ne,moduleId:Fe};for(var at=0;at<_e.parents.length;at++){var qe=_e.parents[at],Ye=ue.c[qe];if(Ye){if(Ye.hot._declinedDependencies[Fe])return{type:"declined",chain:Ne.concat([qe]),moduleId:Fe,parentId:qe};Ie.indexOf(qe)===-1&&(Ye.hot._acceptedDependencies[Fe]?(Be[qe]||(Be[qe]=[]),pe(Be[qe],[Fe])):(delete Be[qe],Ie.push(qe),nt.push({chain:Ne.concat([qe]),id:qe})))}}}}return{type:"accepted",moduleId:Pe,outdatedModules:Ie,outdatedDependencies:Be}}function pe(Pe,Ie){for(var Be=0;Be<Ie.length;Be++){var nt=Ie[Be];Pe.indexOf(nt)===-1&&Pe.push(nt)}}ue.f&&delete ue.f.jsonpHmr,re=void 0;var ne={},ye=[],we={},ce=function(Pe){console.warn("[HMR] unexpected require("+Pe.id+") to disposed module")};for(var ie in z)if(ue.o(z,ie)){var ae,G=z[ie],q=!1,M=!1,Z=!1,ee="";switch((ae=G?oe(ie):{type:"disposed",moduleId:ie}).chain&&(ee=`
Update propagation: `+ae.chain.join(" -> ")),ae.type){case"self-declined":H.onDeclined&&H.onDeclined(ae),H.ignoreDeclined||(q=new Error("Aborted because of self decline: "+ae.moduleId+ee));break;case"declined":H.onDeclined&&H.onDeclined(ae),H.ignoreDeclined||(q=new Error("Aborted because of declined dependency: "+ae.moduleId+" in "+ae.parentId+ee));break;case"unaccepted":H.onUnaccepted&&H.onUnaccepted(ae),H.ignoreUnaccepted||(q=new Error("Aborted because "+ie+" is not accepted"+ee));break;case"accepted":H.onAccepted&&H.onAccepted(ae),M=!0;break;case"disposed":H.onDisposed&&H.onDisposed(ae),Z=!0;break;default:throw new Error("Unexception type "+ae.type)}if(q)return{error:q};if(M)for(ie in we[ie]=G,pe(ye,ae.outdatedModules),ae.outdatedDependencies)ue.o(ae.outdatedDependencies,ie)&&(ne[ie]||(ne[ie]=[]),pe(ne[ie],ae.outdatedDependencies[ie]));Z&&(pe(ye,[ae.moduleId]),we[ie]=ce)}z=void 0;for(var W,K=[],fe=0;fe<ye.length;fe++){var Ce=ye[fe],Le=ue.c[Ce];Le&&(Le.hot._selfAccepted||Le.hot._main)&&we[Ce]!==ce&&!Le.hot._selfInvalidated&&K.push({module:Ce,require:Le.hot._requireSelf,errorHandler:Le.hot._selfAccepted})}return{dispose:function(){var Pe;L.forEach(function(qe){delete he[qe]}),L=void 0;for(var Ie,Be=ye.slice();Be.length>0;){var nt=Be.pop(),Oe=ue.c[nt];if(Oe){var Fe={},Ne=Oe.hot._disposeHandlers;for(fe=0;fe<Ne.length;fe++)Ne[fe].call(null,Fe);for(ue.hmrD[nt]=Fe,Oe.hot.active=!1,delete ue.c[nt],delete ne[nt],fe=0;fe<Oe.children.length;fe++){var _e=ue.c[Oe.children[fe]];_e&&(Pe=_e.parents.indexOf(nt))>=0&&_e.parents.splice(Pe,1)}}}for(var at in ne)if(ue.o(ne,at)&&(Oe=ue.c[at]))for(W=ne[at],fe=0;fe<W.length;fe++)Ie=W[fe],(Pe=Oe.children.indexOf(Ie))>=0&&Oe.children.splice(Pe,1)},apply:function(Pe){for(var Ie in we)ue.o(we,Ie)&&(ue.m[Ie]=we[Ie]);for(var Be=0;Be<J.length;Be++)J[Be](ue);for(var nt in ne)if(ue.o(ne,nt)){var Oe=ue.c[nt];if(Oe){W=ne[nt];for(var Fe=[],Ne=[],_e=[],at=0;at<W.length;at++){var qe=W[at],Ye=Oe.hot._acceptedDependencies[qe],it=Oe.hot._acceptedErrorHandlers[qe];if(Ye){if(Fe.indexOf(Ye)!==-1)continue;Fe.push(Ye),Ne.push(it),_e.push(qe)}}for(var y=0;y<Fe.length;y++)try{Fe[y].call(null,W)}catch(rt){if(typeof Ne[y]=="function")try{Ne[y](rt,{moduleId:nt,dependencyId:_e[y]})}catch(Qt){H.onErrored&&H.onErrored({type:"accept-error-handler-errored",moduleId:nt,dependencyId:_e[y],error:Qt,originalError:rt}),H.ignoreErrored||(Pe(Qt),Pe(rt))}else H.onErrored&&H.onErrored({type:"accept-errored",moduleId:nt,dependencyId:_e[y],error:rt}),H.ignoreErrored||Pe(rt)}}}for(var Qe=0;Qe<K.length;Qe++){var Ue=K[Qe],xt=Ue.module;try{Ue.require(xt)}catch(rt){if(typeof Ue.errorHandler=="function")try{Ue.errorHandler(rt,{moduleId:xt,module:ue.c[xt]})}catch(Qt){H.onErrored&&H.onErrored({type:"self-accept-error-handler-errored",moduleId:xt,error:Qt,originalError:rt}),H.ignoreErrored||(Pe(Qt),Pe(rt))}else H.onErrored&&H.onErrored({type:"self-accept-errored",moduleId:xt,error:rt}),H.ignoreErrored||Pe(rt)}}return ye}}}self.webpackHotUpdaterapidoc=(H,oe,pe)=>{for(var ne in oe)ue.o(oe,ne)&&(z[ne]=oe[ne],te&&te.push(ne));pe&&J.push(pe),me[H]&&(me[H](),me[H]=void 0)},ue.hmrI.jsonp=function(H,oe){z||(z={},J=[],L=[],oe.push(S)),ue.o(z,H)||(z[H]=ue.m[H])},ue.hmrC.jsonp=function(H,oe,pe,ne,ye,we){ye.push(S),re={},L=oe,z=pe.reduce(function(ce,ie){return ce[ie]=!1,ce},{}),J=[],H.forEach(function(ce){ue.o(he,ce)&&he[ce]!==void 0?(ne.push(ge(ce,we)),re[ce]=!0):re[ce]=!1}),ue.f&&(ue.f.jsonpHmr=function(ce,ie){re&&ue.o(re,ce)&&!re[ce]&&(ie.push(ge(ce)),re[ce]=!0)})},ue.hmrM=()=>{if(typeof fetch>"u")throw new Error("No browser support: need fetch API");return fetch(ue.p+ue.hmrF()).then(H=>{if(H.status!==404){if(!H.ok)throw new Error("Failed to fetch update manifest "+H.statusText);return H.json()}})}})(),ue(656)})();const eP=Q_({__proto__:null,default:Lb},[Lb]);export{eP as r};
