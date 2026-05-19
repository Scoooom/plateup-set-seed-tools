const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/equivalentSeeds-CPo9DDVe.js","assets/utils-B5Xod2s6.js","assets/RandomSeedRerollManip-Bf-AIyRK.js","assets/shop-CwFKfDxB.js","assets/prng-CQg0oPk0.js","assets/seedSearcher-DHkfj7fN.js","assets/ReferenceRecords-DmubTSHG.js","assets/run-Boxq33nT.js","assets/runsCache-CjJTt6dl.js","assets/extends-CF3RwP-h.js","assets/UnlockSelect-DGtkGPqJ.js","assets/versusSeeds-DotQ0Rvs.js","assets/seedSearcherNormal-DZ01fpJk.js","assets/branchingRerolls-CIOs6Z1C.js","assets/GhostBlueprints-Cmh4GMAa.js","assets/SeedConfigForm-Cis8FDsC.js","assets/cardPaths-G3a-uTsF.js","assets/CardPaths-C-LV-gob.js","assets/cards-Bqw03VUD.js","assets/getCardPaths-Bk52VIc-.js","assets/weeklyExport-qzAD-iHM.js","assets/weekly-DY21HSdx.js","assets/weekly-lxzc1d_n.js","assets/GroupSizes-BoyiyvrA.js","assets/Dig-BydIxI_1.js","assets/SaveScumCabinetLayouts-ByGD5v22.js","assets/SaveScumCabinetLayouts-DNmO9lBD.css","assets/AutoRig-eSM58rYX.js","assets/dinerSpawnTiles-q6S4s2ig.js"])))=>i.map(i=>d[i]);
var hl=Object.defineProperty;var pl=(e,a,s)=>a in e?hl(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;var V=(e,a,s)=>pl(e,typeof a!="symbol"?a+"":a,s);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();var Ne,h,ss,ea,le,wa,ls,aa,rs,Pe={},ts=[],_l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,We=Array.isArray;function H(e,a){for(var s in a)e[s]=a[s];return e}function ns(e){var a=e.parentNode;a&&a.removeChild(e)}function P(e,a,s){var l,r,t,n={};for(t in a)t=="key"?l=a[t]:t=="ref"?r=a[t]:n[t]=a[t];if(arguments.length>2&&(n.children=arguments.length>3?Ne.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(t in e.defaultProps)n[t]===void 0&&(n[t]=e.defaultProps[t]);return Se(e,n,l,r,null)}function Se(e,a,s,l,r){var t={type:e,props:a,key:s,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++ss,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(t),t}function os(){return{current:null}}function N(e){return e.children}function A(e,a){this.props=e,this.context=a}function de(e,a){if(a==null)return e.__?de(e.__,e.__i+1):null;for(var s;a<e.__k.length;a++)if((s=e.__k[a])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?de(e):null}function is(e){var a,s;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,a=0;a<e.__k.length;a++)if((s=e.__k[a])!=null&&s.__e!=null){e.__e=e.__c.base=s.__e;break}return is(e)}}function sa(e){(!e.__d&&(e.__d=!0)&&le.push(e)&&!$e.__r++||wa!==h.debounceRendering)&&((wa=h.debounceRendering)||ls)($e)}function $e(){var e,a,s,l,r,t,n,i,u;for(le.sort(aa);e=le.shift();)e.__d&&(a=le.length,l=void 0,t=(r=(s=e).__v).__e,i=[],u=[],(n=s.__P)&&((l=H({},r)).__v=r.__v+1,h.vnode&&h.vnode(l),fa(n,l,r,s.__n,n.ownerSVGElement!==void 0,32&r.__u?[t]:null,i,t??de(r),!!(32&r.__u),u),l.__.__k[l.__i]=l,cs(i,l,u),l.__e!=t&&is(l)),le.length>a&&le.sort(aa));$e.__r=0}function Fs(e,a,s,l,r,t,n,i,u,c,d){var F,_,f,v,g,p=l&&l.__k||ts,m=a.length;for(s.__d=u,ml(s,a,p),u=s.__d,F=0;F<m;F++)(f=s.__k[F])!=null&&typeof f!="boolean"&&typeof f!="function"&&(_=f.__i===-1?Pe:p[f.__i]||Pe,f.__i=F,fa(e,f,_,r,t,n,i,u,c,d),v=f.__e,f.ref&&_.ref!=f.ref&&(_.ref&&ha(_.ref,null,f),d.push(f.ref,f.__c||v,f)),g==null&&v!=null&&(g=v),65536&f.__u||_.__k===f.__k?u=us(f,u,e):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:v&&(u=v.nextSibling),f.__d=void 0,f.__u&=-196609);s.__d=u,s.__e=g}function ml(e,a,s){var l,r,t,n,i,u=a.length,c=s.length,d=c,F=0;for(e.__k=[],l=0;l<u;l++)(r=e.__k[l]=(r=a[l])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?Se(null,r,null,null,r):We(r)?Se(N,{children:r},null,null,null):r.__b>0?Se(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,i=vl(r,s,n=l+F,d),r.__i=i,t=null,i!==-1&&(d--,(t=s[i])&&(t.__u|=131072)),t==null||t.__v===null?(i==-1&&F--,typeof r.type!="function"&&(r.__u|=65536)):i!==n&&(i===n+1?F++:i>n?d>u-n?F+=i-n:F--:F=i<n&&i==n-1?i-n:0,i!==l+F&&(r.__u|=65536))):(t=s[l])&&t.key==null&&t.__e&&(t.__e==e.__d&&(e.__d=de(t)),la(t,t,!1),s[l]=null,d--);if(d)for(l=0;l<c;l++)(t=s[l])!=null&&!(131072&t.__u)&&(t.__e==e.__d&&(e.__d=de(t)),la(t,t))}function us(e,a,s){var l,r;if(typeof e.type=="function"){for(l=e.__k,r=0;l&&r<l.length;r++)l[r]&&(l[r].__=e,a=us(l[r],a,s));return a}return e.__e!=a&&(s.insertBefore(e.__e,a||null),a=e.__e),a&&a.nextSibling}function W(e,a){return a=a||[],e==null||typeof e=="boolean"||(We(e)?e.some(function(s){W(s,a)}):a.push(e)),a}function vl(e,a,s,l){var r=e.key,t=e.type,n=s-1,i=s+1,u=a[s];if(u===null||u&&r==u.key&&t===u.type)return s;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;n>=0||i<a.length;){if(n>=0){if((u=a[n])&&!(131072&u.__u)&&r==u.key&&t===u.type)return n;n--}if(i<a.length){if((u=a[i])&&!(131072&u.__u)&&r==u.key&&t===u.type)return i;i++}}return-1}function ka(e,a,s){a[0]==="-"?e.setProperty(a,s??""):e[a]=s==null?"":typeof s!="number"||_l.test(a)?s:s+"px"}function Oe(e,a,s,l,r){var t;e:if(a==="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(a in l)s&&a in s||ka(e.style,a,"");if(s)for(a in s)l&&s[a]===l[a]||ka(e.style,a,s[a])}else if(a[0]==="o"&&a[1]==="n")t=a!==(a=a.replace(/(PointerCapture)$|Capture$/,"$1")),a=a.toLowerCase()in e?a.toLowerCase().slice(2):a.slice(2),e.l||(e.l={}),e.l[a+t]=s,s?l?s.u=l.u:(s.u=Date.now(),e.addEventListener(a,t?Ea:Pa,t)):e.removeEventListener(a,t?Ea:Pa,t);else{if(r)a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!=="width"&&a!=="height"&&a!=="href"&&a!=="list"&&a!=="form"&&a!=="tabIndex"&&a!=="download"&&a!=="rowSpan"&&a!=="colSpan"&&a!=="role"&&a in e)try{e[a]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&a[4]!=="-"?e.removeAttribute(a):e.setAttribute(a,s))}}function Pa(e){var a=this.l[e.type+!1];if(e.t){if(e.t<=a.u)return}else e.t=Date.now();return a(h.event?h.event(e):e)}function Ea(e){return this.l[e.type+!0](h.event?h.event(e):e)}function fa(e,a,s,l,r,t,n,i,u,c){var d,F,_,f,v,g,p,m,y,C,x,O,z,oe,ie,L=a.type;if(a.constructor!==void 0)return null;128&s.__u&&(u=!!(32&s.__u),t=[i=a.__e=s.__e]),(d=h.__b)&&d(a);e:if(typeof L=="function")try{if(m=a.props,y=(d=L.contextType)&&l[d.__c],C=d?y?y.props.value:d.__:l,s.__c?p=(F=a.__c=s.__c).__=F.__E:("prototype"in L&&L.prototype.render?a.__c=F=new L(m,C):(a.__c=F=new A(m,C),F.constructor=L,F.render=yl),y&&y.sub(F),F.props=m,F.state||(F.state={}),F.context=C,F.__n=l,_=F.__d=!0,F.__h=[],F._sb=[]),F.__s==null&&(F.__s=F.state),L.getDerivedStateFromProps!=null&&(F.__s==F.state&&(F.__s=H({},F.__s)),H(F.__s,L.getDerivedStateFromProps(m,F.__s))),f=F.props,v=F.state,F.__v=a,_)L.getDerivedStateFromProps==null&&F.componentWillMount!=null&&F.componentWillMount(),F.componentDidMount!=null&&F.__h.push(F.componentDidMount);else{if(L.getDerivedStateFromProps==null&&m!==f&&F.componentWillReceiveProps!=null&&F.componentWillReceiveProps(m,C),!F.__e&&(F.shouldComponentUpdate!=null&&F.shouldComponentUpdate(m,F.__s,C)===!1||a.__v===s.__v)){for(a.__v!==s.__v&&(F.props=m,F.state=F.__s,F.__d=!1),a.__e=s.__e,a.__k=s.__k,a.__k.forEach(function(M){M&&(M.__=a)}),x=0;x<F._sb.length;x++)F.__h.push(F._sb[x]);F._sb=[],F.__h.length&&n.push(F);break e}F.componentWillUpdate!=null&&F.componentWillUpdate(m,F.__s,C),F.componentDidUpdate!=null&&F.__h.push(function(){F.componentDidUpdate(f,v,g)})}if(F.context=C,F.props=m,F.__P=e,F.__e=!1,O=h.__r,z=0,"prototype"in L&&L.prototype.render){for(F.state=F.__s,F.__d=!1,O&&O(a),d=F.render(F.props,F.state,F.context),oe=0;oe<F._sb.length;oe++)F.__h.push(F._sb[oe]);F._sb=[]}else do F.__d=!1,O&&O(a),d=F.render(F.props,F.state,F.context),F.state=F.__s;while(F.__d&&++z<25);F.state=F.__s,F.getChildContext!=null&&(l=H(H({},l),F.getChildContext())),_||F.getSnapshotBeforeUpdate==null||(g=F.getSnapshotBeforeUpdate(f,v)),Fs(e,We(ie=d!=null&&d.type===N&&d.key==null?d.props.children:d)?ie:[ie],a,s,l,r,t,n,i,u,c),F.base=a.__e,a.__u&=-161,F.__h.length&&n.push(F),p&&(F.__E=F.__=null)}catch(M){a.__v=null,u||t!=null?(a.__e=i,a.__u|=u?160:32,t[t.indexOf(i)]=null):(a.__e=s.__e,a.__k=s.__k),h.__e(M,a,s)}else t==null&&a.__v===s.__v?(a.__k=s.__k,a.__e=s.__e):a.__e=gl(s.__e,a,s,l,r,t,n,u,c);(d=h.diffed)&&d(a)}function cs(e,a,s){a.__d=void 0;for(var l=0;l<s.length;l++)ha(s[l],s[++l],s[++l]);h.__c&&h.__c(a,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(t){t.call(r)})}catch(t){h.__e(t,r.__v)}})}function gl(e,a,s,l,r,t,n,i,u){var c,d,F,_,f,v,g,p=s.props,m=a.props,y=a.type;if(y==="svg"&&(r=!0),t!=null){for(c=0;c<t.length;c++)if((f=t[c])&&"setAttribute"in f==!!y&&(y?f.localName===y:f.nodeType===3)){e=f,t[c]=null;break}}if(e==null){if(y===null)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),t=null,i=!1}if(y===null)p===m||i&&e.data===m||(e.data=m);else{if(t=t&&Ne.call(e.childNodes),p=s.props||Pe,!i&&t!=null)for(p={},c=0;c<e.attributes.length;c++)p[(f=e.attributes[c]).name]=f.value;for(c in p)f=p[c],c=="children"||(c=="dangerouslySetInnerHTML"?F=f:c==="key"||c in m||Oe(e,c,null,f,r));for(c in m)f=m[c],c=="children"?_=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?v=f:c=="checked"?g=f:c==="key"||i&&typeof f!="function"||p[c]===f||Oe(e,c,f,p[c],r);if(d)i||F&&(d.__html===F.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),a.__k=[];else if(F&&(e.innerHTML=""),Fs(e,We(_)?_:[_],a,s,l,r&&y!=="foreignObject",t,n,t?t[0]:s.__k&&de(s,0),i,u),t!=null)for(c=t.length;c--;)t[c]!=null&&ns(t[c]);i||(c="value",v!==void 0&&(v!==e[c]||y==="progress"&&!v||y==="option"&&v!==p[c])&&Oe(e,c,v,p[c],!1),c="checked",g!==void 0&&g!==e[c]&&Oe(e,c,g,p[c],!1))}return e}function ha(e,a,s){try{typeof e=="function"?e(a):e.current=a}catch(l){h.__e(l,s)}}function la(e,a,s){var l,r;if(h.unmount&&h.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||ha(l,null,a)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){h.__e(t,a)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(r=0;r<l.length;r++)l[r]&&la(l[r],a,s||typeof e.type!="function");s||e.__e==null||ns(e.__e),e.__=e.__e=e.__d=void 0}function yl(e,a,s){return this.constructor(e,s)}function fe(e,a,s){var l,r,t,n;h.__&&h.__(e,a),r=(l=typeof s=="function")?null:s&&s.__k||a.__k,t=[],n=[],fa(a,e=(!l&&s||a).__k=P(N,null,[e]),r||Pe,Pe,a.ownerSVGElement!==void 0,!l&&s?[s]:r?null:a.firstChild?Ne.call(a.childNodes):null,t,!l&&s?s:r?r.__e:a.firstChild,l,n),cs(t,e,n)}function ds(e,a){fe(e,a,ds)}function bl(e,a,s){var l,r,t,n,i=H({},e.props);for(t in e.type&&e.type.defaultProps&&(n=e.type.defaultProps),a)t=="key"?l=a[t]:t=="ref"?r=a[t]:i[t]=a[t]===void 0&&n!==void 0?n[t]:a[t];return arguments.length>2&&(i.children=arguments.length>3?Ne.call(arguments,2):s),Se(e.type,i,l||e.key,r||e.ref,null)}function G(e,a){var s={__c:a="__cC"+rs++,__:e,Consumer:function(l,r){return l.children(r)},Provider:function(l){var r,t;return this.getChildContext||(r=[],(t={})[a]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&r.some(function(i){i.__e=!0,sa(i)})},this.sub=function(n){r.push(n);var i=n.componentWillUnmount;n.componentWillUnmount=function(){r.splice(r.indexOf(n),1),i&&i.call(n)}}),l.children}};return s.Provider.__=s.Consumer.contextType=s}Ne=ts.slice,h={__e:function(e,a,s,l){for(var r,t,n;a=a.__;)if((r=a.__c)&&!r.__)try{if((t=r.constructor)&&t.getDerivedStateFromError!=null&&(r.setState(t.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,l||{}),n=r.__d),n)return r.__E=r}catch(i){e=i}throw e}},ss=0,ea=function(e){return e!=null&&e.constructor==null},A.prototype.setState=function(e,a){var s;s=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof e=="function"&&(e=e(H({},s),this.props)),e&&H(s,e),e!=null&&this.__v&&(a&&this._sb.push(a),sa(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),sa(this))},A.prototype.render=N,le=[],ls=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,aa=function(e,a){return e.__v.__b-a.__v.__b},$e.__r=0,rs=0;const Tl="modulepreload",Sl=function(e){return"/plateup-set-seed-tools/"+e},Ra={},E=function(a,s,l){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(s.map(u=>{if(u=Sl(u),u in Ra)return;Ra[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const F=document.createElement("link");if(F.rel=c?"stylesheet":Tl,c||(F.as="script"),F.crossOrigin="",F.href=u,i&&F.setAttribute("nonce",i),document.head.appendChild(F),c)return new Promise((_,f)=>{F.addEventListener("load",_),F.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function t(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return r.then(n=>{for(const i of n||[])i.status==="rejected"&&t(i.reason);return a().catch(t)})};var q,k,Ke,Na,he=0,fs=[],De=[],Ba=h.__b,Ia=h.__r,xa=h.diffed,Oa=h.__c,Da=h.unmount;function re(e,a){h.__h&&h.__h(k,e,he||a),he=0;var s=k.__H||(k.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({__V:De}),s.__[e]}function pe(e){return he=1,pa(ms,e)}function pa(e,a,s){var l=re(q++,2);if(l.t=e,!l.__c&&(l.__=[s?s(a):ms(void 0,a),function(i){var u=l.__N?l.__N[0]:l.__[0],c=l.t(u,i);u!==c&&(l.__N=[c,l.__[1]],l.__c.setState({}))}],l.__c=k,!k.u)){var r=function(i,u,c){if(!l.__c.__H)return!0;var d=l.__c.__H.__.filter(function(_){return _.__c});if(d.every(function(_){return!_.__N}))return!t||t.call(this,i,u,c);var F=!1;return d.forEach(function(_){if(_.__N){var f=_.__[0];_.__=_.__N,_.__N=void 0,f!==_.__[0]&&(F=!0)}}),!(!F&&l.__c.props===i)&&(!t||t.call(this,i,u,c))};k.u=!0;var t=k.shouldComponentUpdate,n=k.componentWillUpdate;k.componentWillUpdate=function(i,u,c){if(this.__e){var d=t;t=void 0,r(i,u,c),t=d}n&&n.call(this,i,u,c)},k.shouldComponentUpdate=r}return l.__N||l.__}function _e(e,a){var s=re(q++,3);!h.__s&&_a(s.__H,a)&&(s.__=e,s.i=a,k.__H.__h.push(s))}function te(e,a){var s=re(q++,4);!h.__s&&_a(s.__H,a)&&(s.__=e,s.i=a,k.__h.push(s))}function j(e){return he=5,U(function(){return{current:e}},[])}function hs(e,a,s){he=6,te(function(){return typeof e=="function"?(e(a()),function(){return e(null)}):e?(e.current=a(),function(){return e.current=null}):void 0},s==null?s:s.concat(e))}function U(e,a){var s=re(q++,7);return _a(s.__H,a)?(s.__V=e(),s.i=a,s.__h=e,s.__V):s.__}function ae(e,a){return he=8,U(function(){return e},a)}function B(e){var a=k.context[e.__c],s=re(q++,9);return s.c=e,a?(s.__==null&&(s.__=!0,a.sub(k)),a.props.value):e.__}function ps(e,a){h.useDebugValue&&h.useDebugValue(a?a(e):e)}function Cl(e){var a=re(q++,10),s=pe();return a.__=e,k.componentDidCatch||(k.componentDidCatch=function(l,r){a.__&&a.__(l,r),s[1](l)}),[s[0],function(){s[1](void 0)}]}function _s(){var e=re(q++,11);if(!e.__){for(var a=k.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;var s=a.__m||(a.__m=[0,0]);e.__="P"+s[0]+"-"+s[1]++}return e.__}function wl(){for(var e;e=fs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Le),e.__H.__h.forEach(ra),e.__H.__h=[]}catch(a){e.__H.__h=[],h.__e(a,e.__v)}}h.__b=function(e){k=null,Ba&&Ba(e)},h.__r=function(e){Ia&&Ia(e),q=0;var a=(k=e.__c).__H;a&&(Ke===k?(a.__h=[],k.__h=[],a.__.forEach(function(s){s.__N&&(s.__=s.__N),s.__V=De,s.__N=s.i=void 0})):(a.__h.forEach(Le),a.__h.forEach(ra),a.__h=[],q=0)),Ke=k},h.diffed=function(e){xa&&xa(e);var a=e.__c;a&&a.__H&&(a.__H.__h.length&&(fs.push(a)!==1&&Na===h.requestAnimationFrame||((Na=h.requestAnimationFrame)||kl)(wl)),a.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.__V!==De&&(s.__=s.__V),s.i=void 0,s.__V=De})),Ke=k=null},h.__c=function(e,a){a.some(function(s){try{s.__h.forEach(Le),s.__h=s.__h.filter(function(l){return!l.__||ra(l)})}catch(l){a.some(function(r){r.__h&&(r.__h=[])}),a=[],h.__e(l,s.__v)}}),Oa&&Oa(e,a)},h.unmount=function(e){Da&&Da(e);var a,s=e.__c;s&&s.__H&&(s.__H.__.forEach(function(l){try{Le(l)}catch(r){a=r}}),s.__H=void 0,a&&h.__e(a,s.__v))};var La=typeof requestAnimationFrame=="function";function kl(e){var a,s=function(){clearTimeout(l),La&&cancelAnimationFrame(a),setTimeout(e)},l=setTimeout(s,100);La&&(a=requestAnimationFrame(s))}function Le(e){var a=k,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),k=a}function ra(e){var a=k;e.__c=e.__(),k=a}function _a(e,a){return!e||e.length!==a.length||a.some(function(s,l){return s!==e[l]})}function ms(e,a){return typeof a=="function"?a(e):a}function vs(e,a){for(var s in a)e[s]=a[s];return e}function ta(e,a){for(var s in e)if(s!=="__source"&&!(s in a))return!0;for(var l in a)if(l!=="__source"&&e[l]!==a[l])return!0;return!1}function Ae(e){this.props=e}function gs(e,a){function s(r){var t=this.props.ref,n=t==r.ref;return!n&&t&&(t.call?t(null):t.current=null),a?!a(this.props,r)||!n:ta(this.props,r)}function l(r){return this.shouldComponentUpdate=s,P(e,r)}return l.displayName="Memo("+(e.displayName||e.name)+")",l.prototype.isReactComponent=!0,l.__f=!0,l}(Ae.prototype=new A).isPureReactComponent=!0,Ae.prototype.shouldComponentUpdate=function(e,a){return ta(this.props,e)||ta(this.state,a)};var $a=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$a&&$a(e)};var Pl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ma(e){function a(s){var l=vs({},s);return delete l.ref,e(l,s.ref||null)}return a.$$typeof=Pl,a.render=a,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(e.displayName||e.name)+")",a}var Aa=function(e,a){return e==null?null:W(W(e).map(a))},va={map:Aa,forEach:Aa,count:function(e){return e?W(e).length:0},only:function(e){var a=W(e);if(a.length!==1)throw"Children.only";return a[0]},toArray:W},El=h.__e;h.__e=function(e,a,s,l){if(e.then){for(var r,t=a;t=t.__;)if((r=t.__c)&&r.__c)return a.__e==null&&(a.__e=s.__e,a.__k=s.__k),r.__c(e,a)}El(e,a,s,l)};var Ma=h.unmount;function ys(e,a,s){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),e.__c.__H=null),(e=vs({},e)).__c!=null&&(e.__c.__P===s&&(e.__c.__P=a),e.__c=null),e.__k=e.__k&&e.__k.map(function(l){return ys(l,a,s)})),e}function bs(e,a,s){return e&&s&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(l){return bs(l,a,s)}),e.__c&&e.__c.__P===a&&(e.__e&&s.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=s)),e}function ce(){this.__u=0,this.t=null,this.__b=null}function Ts(e){var a=e.__.__c;return a&&a.__a&&a.__a(e)}function b(e){var a,s,l;function r(t){if(a||(a=e()).then(function(n){s=n.default||n},function(n){l=n}),l)throw l;if(!s)throw a;return P(s,t)}return r.displayName="Lazy",r.__f=!0,r}function ue(){this.u=null,this.o=null}h.unmount=function(e){var a=e.__c;a&&a.__R&&a.__R(),a&&32&e.__u&&(e.type=null),Ma&&Ma(e)},(ce.prototype=new A).__c=function(e,a){var s=a.__c,l=this;l.t==null&&(l.t=[]),l.t.push(s);var r=Ts(l.__v),t=!1,n=function(){t||(t=!0,s.__R=null,r?r(i):i())};s.__R=n;var i=function(){if(!--l.__u){if(l.state.__a){var u=l.state.__a;l.__v.__k[0]=bs(u,u.__c.__P,u.__c.__O)}var c;for(l.setState({__a:l.__b=null});c=l.t.pop();)c.forceUpdate()}};l.__u++||32&a.__u||l.setState({__a:l.__b=l.__v.__k[0]}),e.then(n,n)},ce.prototype.componentWillUnmount=function(){this.t=[]},ce.prototype.render=function(e,a){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=ys(this.__b,s,l.__O=l.__P)}this.__b=null}var r=a.__a&&P(N,null,e.fallback);return r&&(r.__u&=-33),[P(N,null,a.__a?null:e.children),r]};var Ua=function(e,a,s){if(++s[1]===s[0]&&e.o.delete(a),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(s=e.u;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;e.u=s=s[2]}};function Rl(e){return this.getChildContext=function(){return e.context},e.children}function Nl(e){var a=this,s=e.i;a.componentWillUnmount=function(){fe(null,a.l),a.l=null,a.i=null},a.i&&a.i!==s&&a.componentWillUnmount(),a.l||(a.i=s,a.l={nodeType:1,parentNode:s,childNodes:[],appendChild:function(l){this.childNodes.push(l),a.i.appendChild(l)},insertBefore:function(l,r){this.childNodes.push(l),a.i.appendChild(l)},removeChild:function(l){this.childNodes.splice(this.childNodes.indexOf(l)>>>1,1),a.i.removeChild(l)}}),fe(P(Rl,{context:a.context},e.__v),a.l)}function Ss(e,a){var s=P(Nl,{__v:e,i:a});return s.containerInfo=a,s}(ue.prototype=new A).__a=function(e){var a=this,s=Ts(a.__v),l=a.o.get(e);return l[0]++,function(r){var t=function(){a.props.revealOrder?(l.push(r),Ua(a,e,l)):r()};s?s(t):t()}},ue.prototype.render=function(e){this.u=null,this.o=new Map;var a=W(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&a.reverse();for(var s=a.length;s--;)this.o.set(a[s],this.u=[1,0,this.u]);return e.children},ue.prototype.componentDidUpdate=ue.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(a,s){Ua(e,s,a)})};var Cs=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Bl=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Il=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,xl=/[A-Z0-9]/g,Ol=typeof document<"u",Dl=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ws(e,a,s){return a.__k==null&&(a.textContent=""),fe(e,a),typeof s=="function"&&s(),e?e.__c:null}function ks(e,a,s){return ds(e,a),typeof s=="function"&&s(),e?e.__c:null}A.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(A.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(a){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:a})}})});var Va=h.event;function Ll(){}function $l(){return this.cancelBubble}function Al(){return this.defaultPrevented}h.event=function(e){return Va&&(e=Va(e)),e.persist=Ll,e.isPropagationStopped=$l,e.isDefaultPrevented=Al,e.nativeEvent=e};var ga,Ml={enumerable:!1,configurable:!0,get:function(){return this.class}},Ha=h.vnode;h.vnode=function(e){typeof e.type=="string"&&function(a){var s=a.props,l=a.type,r={};for(var t in s){var n=s[t];if(!(t==="value"&&"defaultValue"in s&&n==null||Ol&&t==="children"&&l==="noscript"||t==="class"||t==="className")){var i=t.toLowerCase();t==="defaultValue"&&"value"in s&&s.value==null?t="value":t==="download"&&n===!0?n="":i==="ondoubleclick"?t="ondblclick":i!=="onchange"||l!=="input"&&l!=="textarea"||Dl(s.type)?i==="onfocus"?t="onfocusin":i==="onblur"?t="onfocusout":Il.test(t)?t=i:l.indexOf("-")===-1&&Bl.test(t)?t=t.replace(xl,"-$&").toLowerCase():n===null&&(n=void 0):i=t="oninput",i==="oninput"&&r[t=i]&&(t="oninputCapture"),r[t]=n}}l=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=W(s.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),l=="select"&&r.defaultValue!=null&&(r.value=W(s.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),s.class&&!s.className?(r.class=s.class,Object.defineProperty(r,"className",Ml)):(s.className&&!s.class||s.class&&s.className)&&(r.class=r.className=s.className),a.props=r}(e),e.$$typeof=Cs,Ha&&Ha(e)};var Wa=h.__r;h.__r=function(e){Wa&&Wa(e),ga=e.__c};var qa=h.diffed;h.diffed=function(e){qa&&qa(e);var a=e.props,s=e.__e;s!=null&&e.type==="textarea"&&"value"in a&&a.value!==s.value&&(s.value=a.value==null?"":a.value),ga=null};var Ps={ReactCurrentDispatcher:{current:{readContext:function(e){return ga.__n[e.__c].props.value}}}},Ul="17.0.2";function Es(e){return P.bind(null,e)}function me(e){return!!e&&e.$$typeof===Cs}function Rs(e){return me(e)&&e.type===N}function Ns(e){return me(e)?bl.apply(null,arguments):e}function Bs(e){return!!e.__k&&(fe(null,e),!0)}function Is(e){return e&&(e.base||e.nodeType===1&&e)||null}var xs=function(e,a){return e(a)},Os=function(e,a){return e(a)},Ds=N;function ya(e){e()}function Ls(e){return e}function $s(){return[!1,ya]}var As=te,Ms=me;function Us(e,a){var s=a(),l=pe({h:{__:s,v:a}}),r=l[0].h,t=l[1];return te(function(){r.__=s,r.v=a,Je(r)&&t({h:r})},[e,s,a]),_e(function(){return Je(r)&&t({h:r}),e(function(){Je(r)&&t({h:r})})},[e]),s}function Je(e){var a,s,l=e.v,r=e.__;try{var t=l();return!((a=r)===(s=t)&&(a!==0||1/a==1/s)||a!=a&&s!=s)}catch{return!0}}var Vl={useState:pe,useId:_s,useReducer:pa,useEffect:_e,useLayoutEffect:te,useInsertionEffect:As,useTransition:$s,useDeferredValue:Ls,useSyncExternalStore:Us,startTransition:ya,useRef:j,useImperativeHandle:hs,useMemo:U,useCallback:ae,useContext:B,useDebugValue:ps,version:"17.0.2",Children:va,render:ws,hydrate:ks,unmountComponentAtNode:Bs,createPortal:Ss,createElement:P,createContext:G,createFactory:Es,cloneElement:Ns,createRef:os,Fragment:N,isValidElement:me,isElement:Ms,isFragment:Rs,findDOMNode:Is,Component:A,PureComponent:Ae,memo:gs,forwardRef:ma,flushSync:Os,unstable_batchedUpdates:xs,StrictMode:Ds,Suspense:ce,SuspenseList:ue,lazy:b,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ps};const Hl=Object.freeze(Object.defineProperty({__proto__:null,Children:va,Component:A,Fragment:N,PureComponent:Ae,StrictMode:Ds,Suspense:ce,SuspenseList:ue,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ps,cloneElement:Ns,createContext:G,createElement:P,createFactory:Es,createPortal:Ss,createRef:os,default:Vl,findDOMNode:Is,flushSync:Os,forwardRef:ma,hydrate:ks,isElement:Ms,isFragment:Rs,isValidElement:me,lazy:b,memo:gs,render:ws,startTransition:ya,unmountComponentAtNode:Bs,unstable_batchedUpdates:xs,useCallback:ae,useContext:B,useDebugValue:ps,useDeferredValue:Ls,useEffect:_e,useErrorBoundary:Cl,useId:_s,useImperativeHandle:hs,useInsertionEffect:As,useLayoutEffect:te,useMemo:U,useReducer:pa,useRef:j,useState:pe,useSyncExternalStore:Us,useTransition:$s,version:Ul},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},Ee.apply(this,arguments)}var Y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Y||(Y={}));const ja="popstate";function Wl(e){e===void 0&&(e={});function a(l,r){let{pathname:t,search:n,hash:i}=l.location;return na("",{pathname:t,search:n,hash:i},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function s(l,r){return typeof r=="string"?r:Me(r)}return jl(a,s,null,e)}function I(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Vs(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function ql(){return Math.random().toString(36).substr(2,8)}function Ga(e,a){return{usr:e.state,key:e.key,idx:a}}function na(e,a,s,l){return s===void 0&&(s=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?ve(a):a,{state:s,key:a&&a.key||l||ql()})}function Me(e){let{pathname:a="/",search:s="",hash:l=""}=e;return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function ve(e){let a={};if(e){let s=e.indexOf("#");s>=0&&(a.hash=e.substr(s),e=e.substr(0,s));let l=e.indexOf("?");l>=0&&(a.search=e.substr(l),e=e.substr(0,l)),e&&(a.pathname=e)}return a}function jl(e,a,s,l){l===void 0&&(l={});let{window:r=document.defaultView,v5Compat:t=!1}=l,n=r.history,i=Y.Pop,u=null,c=d();c==null&&(c=0,n.replaceState(Ee({},n.state,{idx:c}),""));function d(){return(n.state||{idx:null}).idx}function F(){i=Y.Pop;let p=d(),m=p==null?null:p-c;c=p,u&&u({action:i,location:g.location,delta:m})}function _(p,m){i=Y.Push;let y=na(g.location,p,m);c=d()+1;let C=Ga(y,c),x=g.createHref(y);try{n.pushState(C,"",x)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;r.location.assign(x)}t&&u&&u({action:i,location:g.location,delta:1})}function f(p,m){i=Y.Replace;let y=na(g.location,p,m);c=d();let C=Ga(y,c),x=g.createHref(y);n.replaceState(C,"",x),t&&u&&u({action:i,location:g.location,delta:0})}function v(p){let m=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof p=="string"?p:Me(p);return y=y.replace(/ $/,"%20"),I(m,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,m)}let g={get action(){return i},get location(){return e(r,n)},listen(p){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(ja,F),u=p,()=>{r.removeEventListener(ja,F),u=null}},createHref(p){return a(r,p)},createURL:v,encodeLocation(p){let m=v(p);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:_,replace:f,go(p){return n.go(p)}};return g}var za;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(za||(za={}));function Gl(e,a,s){s===void 0&&(s="/");let l=typeof a=="string"?ve(a):a,r=ba(l.pathname||"/",s);if(r==null)return null;let t=Hs(e);zl(t);let n=null;for(let i=0;n==null&&i<t.length;++i){let u=tr(r);n=sr(t[i],u)}return n}function Hs(e,a,s,l){a===void 0&&(a=[]),s===void 0&&(s=[]),l===void 0&&(l="");let r=(t,n,i)=>{let u={relativePath:i===void 0?t.path||"":i,caseSensitive:t.caseSensitive===!0,childrenIndex:n,route:t};u.relativePath.startsWith("/")&&(I(u.relativePath.startsWith(l),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(l.length));let c=Q([l,u.relativePath]),d=s.concat(u);t.children&&t.children.length>0&&(I(t.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hs(t.children,a,d,c)),!(t.path==null&&!t.index)&&a.push({path:c,score:er(c,t.index),routesMeta:d})};return e.forEach((t,n)=>{var i;if(t.path===""||!((i=t.path)!=null&&i.includes("?")))r(t,n);else for(let u of Ws(t.path))r(t,n,u)}),a}function Ws(e){let a=e.split("/");if(a.length===0)return[];let[s,...l]=a,r=s.endsWith("?"),t=s.replace(/\?$/,"");if(l.length===0)return r?[t,""]:[t];let n=Ws(l.join("/")),i=[];return i.push(...n.map(u=>u===""?t:[t,u].join("/"))),r&&i.push(...n),i.map(u=>e.startsWith("/")&&u===""?"/":u)}function zl(e){e.sort((a,s)=>a.score!==s.score?s.score-a.score:ar(a.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}const Kl=/^:[\w-]+$/,Jl=3,Yl=2,Ql=1,Xl=10,Zl=-2,Ka=e=>e==="*";function er(e,a){let s=e.split("/"),l=s.length;return s.some(Ka)&&(l+=Zl),a&&(l+=Yl),s.filter(r=>!Ka(r)).reduce((r,t)=>r+(Kl.test(t)?Jl:t===""?Ql:Xl),l)}function ar(e,a){return e.length===a.length&&e.slice(0,-1).every((l,r)=>l===a[r])?e[e.length-1]-a[a.length-1]:0}function sr(e,a){let{routesMeta:s}=e,l={},r="/",t=[];for(let n=0;n<s.length;++n){let i=s[n],u=n===s.length-1,c=r==="/"?a:a.slice(r.length)||"/",d=lr({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},c);if(!d)return null;Object.assign(l,d.params);let F=i.route;t.push({params:l,pathname:Q([r,d.pathname]),pathnameBase:Fr(Q([r,d.pathnameBase])),route:F}),d.pathnameBase!=="/"&&(r=Q([r,d.pathnameBase]))}return t}function lr(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[s,l]=rr(e.path,e.caseSensitive,e.end),r=a.match(s);if(!r)return null;let t=r[0],n=t.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:l.reduce((c,d,F)=>{let{paramName:_,isOptional:f}=d;if(_==="*"){let g=i[F]||"";n=t.slice(0,t.length-g.length).replace(/(.)\/+$/,"$1")}const v=i[F];return f&&!v?c[_]=void 0:c[_]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:t,pathnameBase:n,pattern:e}}function rr(e,a,s){a===void 0&&(a=!1),s===void 0&&(s=!0),Vs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,i,u)=>(l.push({paramName:i,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,a?void 0:"i"),l]}function tr(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Vs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function ba(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,l=e.charAt(s);return l&&l!=="/"?null:e.slice(s)||"/"}function nr(e,a){a===void 0&&(a="/");let{pathname:s,search:l="",hash:r=""}=typeof e=="string"?ve(e):e;return{pathname:s?s.startsWith("/")?s:or(s,a):a,search:ur(l),hash:cr(r)}}function or(e,a){let s=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?s.length>1&&s.pop():r!=="."&&s.push(r)}),s.length>1?s.join("/"):"/"}function Ye(e,a,s,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ir(e){return e.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function qs(e,a){let s=ir(e);return a?s.map((l,r)=>r===e.length-1?l.pathname:l.pathnameBase):s.map(l=>l.pathnameBase)}function js(e,a,s,l){l===void 0&&(l=!1);let r;typeof e=="string"?r=ve(e):(r=Ee({},e),I(!r.pathname||!r.pathname.includes("?"),Ye("?","pathname","search",r)),I(!r.pathname||!r.pathname.includes("#"),Ye("#","pathname","hash",r)),I(!r.search||!r.search.includes("#"),Ye("#","search","hash",r)));let t=e===""||r.pathname==="",n=t?"/":r.pathname,i;if(n==null)i=s;else{let F=a.length-1;if(!l&&n.startsWith("..")){let _=n.split("/");for(;_[0]==="..";)_.shift(),F-=1;r.pathname=_.join("/")}i=F>=0?a[F]:"/"}let u=nr(r,i),c=n&&n!=="/"&&n.endsWith("/"),d=(t||n===".")&&s.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Q=e=>e.join("/").replace(/\/\/+/g,"/"),Fr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ur=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gs=["post","put","patch","delete"];new Set(Gs);const fr=["get",...Gs];new Set(fr);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},Re.apply(this,arguments)}const Ta=G(null),hr=G(null),ne=G(null),qe=G(null),se=G({outlet:null,matches:[],isDataRoute:!1}),zs=G(null);function pr(e,a){let{relative:s}=a===void 0?{}:a;Be()||I(!1);let{basename:l,navigator:r}=B(ne),{hash:t,pathname:n,search:i}=Ys(e,{relative:s}),u=n;return l!=="/"&&(u=n==="/"?l:Q([l,n])),r.createHref({pathname:u,search:i,hash:t})}function Be(){return B(qe)!=null}function Ie(){return Be()||I(!1),B(qe).location}function Ks(e){B(ne).static||te(e)}function Js(){let{isDataRoute:e}=B(se);return e?Nr():_r()}function _r(){Be()||I(!1);let e=B(Ta),{basename:a,future:s,navigator:l}=B(ne),{matches:r}=B(se),{pathname:t}=Ie(),n=JSON.stringify(qs(r,s.v7_relativeSplatPath)),i=j(!1);return Ks(()=>{i.current=!0}),ae(function(c,d){if(d===void 0&&(d={}),!i.current)return;if(typeof c=="number"){l.go(c);return}let F=js(c,JSON.parse(n),t,d.relative==="path");e==null&&a!=="/"&&(F.pathname=F.pathname==="/"?a:Q([a,F.pathname])),(d.replace?l.replace:l.push)(F,d.state,d)},[a,l,n,t,e])}const mr=G(null);function vr(e){let a=B(se).outlet;return a&&P(mr.Provider,{value:e},a)}function Ys(e,a){let{relative:s}=a===void 0?{}:a,{future:l}=B(ne),{matches:r}=B(se),{pathname:t}=Ie(),n=JSON.stringify(qs(r,l.v7_relativeSplatPath));return U(()=>js(e,JSON.parse(n),t,s==="path"),[e,n,t,s])}function gr(e,a){return yr(e,a)}function yr(e,a,s,l){Be()||I(!1);let{navigator:r}=B(ne),{matches:t}=B(se),n=t[t.length-1],i=n?n.params:{};n&&n.pathname;let u=n?n.pathnameBase:"/";n&&n.route;let c=Ie(),d;if(a){var F;let p=typeof a=="string"?ve(a):a;u==="/"||(F=p.pathname)!=null&&F.startsWith(u)||I(!1),d=p}else d=c;let _=d.pathname||"/",f=_;if(u!=="/"){let p=u.replace(/^\//,"").split("/");f="/"+_.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=Gl(e,{pathname:f}),g=wr(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:Q([u,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:Q([u,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),t,s,l);return a&&g?P(qe.Provider,{value:{location:Re({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Y.Pop}},g):g}function br(){let e=Rr(),a=dr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),s=e instanceof Error?e.stack:null;return P(N,null,P("h2",null,"Unexpected Application Error!"),P("h3",{style:{fontStyle:"italic"}},a),s?P("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},s):null,null)}const Tr=P(br,null);class Sr extends A{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?P(se.Provider,{value:this.props.routeContext},P(zs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cr(e){let{routeContext:a,match:s,children:l}=e,r=B(Ta);return r&&r.static&&r.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=s.route.id),P(se.Provider,{value:a},l)}function wr(e,a,s,l){var r;if(a===void 0&&(a=[]),s===void 0&&(s=null),l===void 0&&(l=null),e==null){var t;if((t=s)!=null&&t.errors)e=s.matches;else return null}let n=e,i=(r=s)==null?void 0:r.errors;if(i!=null){let d=n.findIndex(F=>F.route.id&&(i==null?void 0:i[F.route.id]));d>=0||I(!1),n=n.slice(0,Math.min(n.length,d+1))}let u=!1,c=-1;if(s&&l&&l.v7_partialHydration)for(let d=0;d<n.length;d++){let F=n[d];if((F.route.HydrateFallback||F.route.hydrateFallbackElement)&&(c=d),F.route.id){let{loaderData:_,errors:f}=s,v=F.route.loader&&_[F.route.id]===void 0&&(!f||f[F.route.id]===void 0);if(F.route.lazy||v){u=!0,c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}return n.reduceRight((d,F,_)=>{let f,v=!1,g=null,p=null;s&&(f=i&&F.route.id?i[F.route.id]:void 0,g=F.route.errorElement||Tr,u&&(c<0&&_===0?(v=!0,p=null):c===_&&(v=!0,p=F.route.hydrateFallbackElement||null)));let m=a.concat(n.slice(0,_+1)),y=()=>{let C;return f?C=g:v?C=p:F.route.Component?C=P(F.route.Component,null):F.route.element?C=F.route.element:C=d,P(Cr,{match:F,routeContext:{outlet:d,matches:m,isDataRoute:s!=null},children:C})};return s&&(F.route.ErrorBoundary||F.route.errorElement||_===0)?P(Sr,{location:s.location,revalidation:s.revalidation,component:g,error:f,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var Qs=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qs||{}),Ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ue||{});function kr(e){let a=B(Ta);return a||I(!1),a}function Pr(e){let a=B(hr);return a||I(!1),a}function Er(e){let a=B(se);return a||I(!1),a}function Xs(e){let a=Er(),s=a.matches[a.matches.length-1];return s.route.id||I(!1),s.route.id}function Rr(){var e;let a=B(zs),s=Pr(Ue.UseRouteError),l=Xs(Ue.UseRouteError);return a!==void 0?a:(e=s.errors)==null?void 0:e[l]}function Nr(){let{router:e}=kr(Qs.UseNavigateStable),a=Xs(Ue.UseNavigateStable),s=j(!1);return Ks(()=>{s.current=!0}),ae(function(r,t){t===void 0&&(t={}),s.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Re({fromRouteId:a},t)))},[e,a])}function Sa(e){return vr(e.context)}function S(e){I(!1)}function Br(e){let{basename:a="/",children:s=null,location:l,navigationType:r=Y.Pop,navigator:t,static:n=!1,future:i}=e;Be()&&I(!1);let u=a.replace(/^\/*/,"/"),c=U(()=>({basename:u,navigator:t,static:n,future:Re({v7_relativeSplatPath:!1},i)}),[u,i,t,n]);typeof l=="string"&&(l=ve(l));let{pathname:d="/",search:F="",hash:_="",state:f=null,key:v="default"}=l,g=U(()=>{let p=ba(d,u);return p==null?null:{location:{pathname:p,search:F,hash:_,state:f,key:v},navigationType:r}},[u,d,F,_,f,v,r]);return g==null?null:P(ne.Provider,{value:c},P(qe.Provider,{children:s,value:g}))}function Ir(e){let{children:a,location:s}=e;return gr(oa(a),s)}new Promise(()=>{});function oa(e,a){a===void 0&&(a=[]);let s=[];return va.forEach(e,(l,r)=>{if(!me(l))return;let t=[...a,r];if(l.type===N){s.push.apply(s,oa(l.props.children,t));return}l.type!==S&&I(!1),!l.props.index||!l.props.children||I(!1);let n={id:l.props.id||t.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(n.children=oa(l.props.children,t)),s.push(n)}),s}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},ia.apply(this,arguments)}function xr(e,a){if(e==null)return{};var s={},l=Object.keys(e),r,t;for(t=0;t<l.length;t++)r=l[t],!(a.indexOf(r)>=0)&&(s[r]=e[r]);return s}function Or(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dr(e,a){return e.button===0&&(!a||a==="_self")&&!Or(e)}function Fa(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,s)=>{let l=e[s];return a.concat(Array.isArray(l)?l.map(r=>[s,r]):[[s,l]])},[]))}function Lr(e,a){let s=Fa(e);return a&&a.forEach((l,r)=>{s.has(r)||a.getAll(r).forEach(t=>{s.append(r,t)})}),s}const $r=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ar="6";try{window.__reactRouterVersion=Ar}catch{}const Mr="startTransition",Ja=Hl[Mr];function Ur(e){let{basename:a,children:s,future:l,window:r}=e,t=j();t.current==null&&(t.current=Wl({window:r,v5Compat:!0}));let n=t.current,[i,u]=pe({action:n.action,location:n.location}),{v7_startTransition:c}=l||{},d=ae(F=>{c&&Ja?Ja(()=>u(F)):u(F)},[u,c]);return te(()=>n.listen(d),[n,d]),P(Br,{basename:a,children:s,location:i.location,navigationType:i.action,navigator:n,future:l})}const Vr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=ma(function(a,s){let{onClick:l,relative:r,reloadDocument:t,replace:n,state:i,target:u,to:c,preventScrollReset:d,unstable_viewTransition:F}=a,_=xr(a,$r),{basename:f}=B(ne),v,g=!1;if(typeof c=="string"&&Hr.test(c)&&(v=c,Vr))try{let C=new URL(window.location.href),x=c.startsWith("//")?new URL(C.protocol+c):new URL(c),O=ba(x.pathname,f);x.origin===C.origin&&O!=null?c=O+x.search+x.hash:g=!0}catch{}let p=pr(c,{relative:r}),m=Wr(c,{replace:n,state:i,target:u,preventScrollReset:d,relative:r,unstable_viewTransition:F});function y(C){l&&l(C),C.defaultPrevented||m(C)}return P("a",ia({},_,{href:v||p,onClick:g||t?l:y,ref:s,target:u}))});var Ya;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ya||(Ya={}));var Qa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qa||(Qa={}));function Wr(e,a){let{target:s,replace:l,state:r,preventScrollReset:t,relative:n,unstable_viewTransition:i}=a===void 0?{}:a,u=Js(),c=Ie(),d=Ys(e,{relative:n});return ae(F=>{if(Dr(F,s)){F.preventDefault();let _=l!==void 0?l:Me(c)===Me(d);u(e,{replace:_,state:r,preventScrollReset:t,relative:n,unstable_viewTransition:i})}},[c,u,d,l,r,s,e,t,n,i])}function qr(e){let a=j(Fa(e)),s=j(!1),l=Ie(),r=U(()=>Lr(l.search,s.current?null:a.current),[l.search]),t=Js(),n=ae((i,u)=>{const c=Fa(typeof i=="function"?i(r):i);s.current=!0,t("?"+c,u)},[t,r]);return[r,n]}var jr=0;function o(e,a,s,l,r,t){var n,i,u={};for(i in a)i=="ref"?n=a[i]:u[i]=a[i];var c={type:e,props:u,key:s,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--jr,__i:-1,__u:0,__source:r,__self:t};if(typeof e=="function"&&(n=e.defaultProps))for(i in n)u[i]===void 0&&(u[i]=n[i]);return h.vnode&&h.vnode(c),c}const Gr=()=>o(N,{children:[o("h2",{children:"Set Seed Tools:"}),o("ul",{children:[o("li",{children:o(R,{to:"branching-rerolls.html",children:"Blueprint Rerolls"})}),o("li",{children:o(R,{to:"turbo-seed-searcher.html",children:"Turbo Seed Searcher"})}),o("li",{children:o(R,{to:"normal-seed-searcher.html",children:"Non-Turbo Seed Searcher"})}),o("li",{children:[o(R,{to:"versus-seeds.html",children:"Versus Seed Generator"})," (Limit card choice butterfly effect)"]}),o("li",{children:o(R,{to:"weekly-export.html",children:"Weekly Speedrun Data Export"})}),o("li",{children:"Incomplete/very buggy:"}),o("ul",{children:[o("li",{children:["Alternative SRC Leaderboard Views:",o("ul",{children:[o("li",{children:o(R,{to:"opportunities.html",children:"Set Seed Opportunities"})}),o("li",{children:o(R,{to:"merged-leaderboards.html",children:"Merged Leaderboards"})}),o("li",{children:o(R,{to:"surprising-records.html",children:"Surprising Records"})}),o("li",{children:o(R,{to:"beaten-runs.html",children:"Cross-Version Beaten Runs"})})]})]}),o("li",{children:[o(R,{to:"dig.html",children:"Dig"})," - Given a day, reroll count, and other restrictions, find specific blueprints of interest"]}),o("li",{children:o(R,{to:"card-paths.html",children:"Card Paths"})}),o("li",{children:o(R,{to:"weekly.html",children:"Weekly Speedrun"})}),!1,o("li",{children:o(R,{to:"seed-info.html",children:"Group Sizes"})})]})]}),o("h2",{children:"Notes/Weird Mechanics?"}),o("ul",{children:[o("li",{children:o(R,{to:"141-notes.html",children:"Version 1.4.1 Notes"})}),o("li",{children:o(R,{to:"tables.html",children:"Table Placement Order"})}),o("li",{children:o(R,{to:"https://www.desmos.com/calculator/5xhs2vgpri",children:"Controller vs Keyboard Interaction Radius"})}),o("li",{children:o(R,{to:"robotMop",children:"Why does the robot mop get stuck?"})}),o("li",{children:o(R,{to:"equivalentSeeds",children:"Equivalent Seeds"})}),o("li",{children:o(R,{to:"coffee.html",children:"Coffee Eating Times"})}),o("li",{children:o(R,{to:"ice-cream.html",children:"Ice Cream"})}),o("li",{children:o(R,{to:"scumming.html",children:"Save Scum Cabinet Layouts"})}),o("li",{children:o(R,{to:"TODO.html",children:"TODO"})}),o("li",{children:o(R,{to:"randomRerollManip.html",children:"Random Seed Reroll Manipulation?"})}),!1]})]}),zr="1.4.3-FF8F",Kr=()=>o("div",{children:["Game data from version ",zr]}),Zs="ws".split(""),el="ad".split(""),Jr=" kop".split("");Zs.push("");el.push("");let Ce=Zs.flatMap(e=>el.map(a=>e+a));for(const e of Jr)Ce=[...Ce,...Ce.map(a=>a+e)];Ce=Ce.filter(e=>e).map(e=>Array.from(e).sort().join(""));const $=(...e)=>o(N,{children:e.map((a,s)=>o(N,{children:[" ",o("a",{href:a,children:["(",s+1,")"]})]}))}),Yr=()=>o(N,{children:[o("div",{children:"My notes from reading the discussion about the board split (up to ~8/8), with links to some relevant messages (Please don't use number of links as a proxy for support-- there were many messages saying similar things, I just took a selection). Mostly summary, but keep in mind it also includes some of my own thoughts and may be colored by my interpretations, mis-interpretations, and/or opinions."}),o("br",{}),o("table",{children:[o("thead",{children:o("tr",{children:[o("td",{children:"Qs/Aspects"}),o("td",{colSpan:3,children:"Different takes?"}),o("td",{children:"Other/my thoughts"})]})}),o("tbody",{children:[o("tr",{children:[o("th",{children:'How much additional "work" would a board split result in?'}),o("td",{children:["Low: (Lean no split slightly) Verifiers' additional work is mostly from people improving times because the new version is faster-- a board split won't ",o("i",{children:"create"})," a significant number of extra runs beyond what was already going to be submitted",$("https://discord.com/channels/839124832171851786/981256908801454152/1271148711648563301")]}),o("td",{children:["Medium: (Lean no split more) lots of new runs to fill in empty leaderboards will be submitted even if they were slower than a WR by the same runner/group on the older, slower version-- high load for verifiers, but not for runners (because incentive to re-run old categories is just more fun!)",$("https://discord.com/channels/839124832171851786/981256908801454152/1271305624222830623")]}),o("td",{children:["High: (Lean no split strongly) lots of new runs to fill in empty leaderboards will be submitted even if they were slower than a pre-split WR/PB-- high load for verifiers AND runners (because re-running old categories for WRs feels forced by bureaucracy rather than rewarding)",$("https://discord.com/channels/839124832171851786/981256908801454152/1271127386775097439","https://discord.com/channels/839124832171851786/981256908801454152/1270906564261183509")]}),o("td",{children:["For context, as of 1.1.9 PlateUp had 434 runnable categories (accounting for player and set seed restrictions on some map settings) and now, 12 months since the 1.1.7 board split, about a quarter of the leaderboards are still empty.",o("br",{})," Due to the introduction of Tacos, 1.2.0 PlateUp has added 31 new categories for Tacos as a starting dish for a total of 465 categories. A board split would mean introducing 465 completely empty leaderboards. (Actually potentially 570, pending certain mod approvals)",o("br",{}),"Probably doesn't make sense to directly compare version-based board splits on other games to this potential board split because the number of unique leaderboards we have is so large."]})]}),o("tr",{children:[o("th",{children:"What makes a record/placement valuable? (How would a board split's effects on existing runs make people feel generally?)"}),o("td",{children:["The placement number: (Lean split) The lower the placement, the less relevant the run. Splitting leaderboards will prevent people from submitting runs that beat pre-split runs, therefore their placements are protected. Achievements and recognition of hard work on the older, slower versions are preserved",$("https://discord.com/channels/839124832171851786/981256908801454152/1271186528193871895"),o("br",{}),"New runs get their own high placements, without detracting from old runs' placements."]}),o("td",{children:["Visibility of records: (Lean no split) Because old records are not in the default view, they will tend only to be seen by people who are specifically looking for old records as opposed to anyone checking the leaderboard, and that makes pre-split records feel less valuable/appreciated.",$("https://discord.com/channels/839124832171851786/981256908801454152/1270972841621196861"),o("br",{}),'New runs feel "forced" to regain spots on the default, high visibility leaderboards.']}),o("td",{children:["Competition: (Lean no split) A submitted time feels valuable because of the context of runs you are faster/slower than (because people can ",o("i",{children:"try"})," to beat your time, but they haven't succeeded yet?) Splitting the board means pre-split runs are no longer compared against post-split runs-- loss of that competition potential devalues the pre-split, stale leaderboards.",$("https://discord.com/channels/839124832171851786/981256908801454152/1270908721232478232"),o("br",{}),`New runs feel "forced" to re-establish competition(?). New runs feel less valuable because there's less historical context ("I beat X run", "I came X close to beating Y run", etc.)`]}),o("td",{children:"Slight asymmetry here: If no split, can use SRC to view a modified leaderboard for a specific version range, although requires additional viewer knowledge or admin configuration to add helper variables. If split, SRC does not support the ability to view a merged leaderboard."})]}),o("tr",{children:[o("th",{children:"Split depending on how different the game is:"}),o("td",{children:["So many changes that it's effectively a different game: (Lean split) Claw, portioning, etc. change the way the game is played in such a significant way that 1.2.0 runs are incomparable to 1.1.9 and lower runs. Not splitting could confuse people who are looking at the leaderboards if they're unfamiliar with the game and its version history.",$("https://discord.com/channels/839124832171851786/981256908801454152/1271176627954520074","https://discord.com/channels/839124832171851786/981256908801454152/1271198352788422757","https://discord.com/channels/839124832171851786/981256908801454152/1271198027389997087")]}),o("td",{children:["Not so much that it's a different game: (Lean no split) Claw, portioning, etc. change some strats used, but the core game mechanics are largely unchanged, so board should not be split on only gameplay differences.",$("https://discord.com/channels/839124832171851786/981256908801454152/1271170972375842848","https://discord.com/channels/839124832171851786/981256908801454152/1271275756395433994")]}),o("td",{rowSpan:2,children:["It's not about the magnitude of changes: (Lean?) It's okay to have runs beat by the new version; the new version is available for everyone to play, so if my run on 1.1.9 is beat by someone on 1.2.0, I have equal access and ability to retake my placement. (Similar to new strategies being developed over time?)",$("https://discord.com/channels/839124832171851786/981256908801454152/1270934223334801449","https://discord.com/channels/839124832171851786/981256908801454152/1271320478337863821")]})]}),o("tr",{children:[o("th",{children:"Split depending on whether and how much the game changes affect speedrun times"}),o("td",{children:["Should split if run times faster: (Lean split) It's unfair that runs on the old version could be beaten mostly by virtue of game changes rather than runner skill/strat improvements. 1.2.0 changes expected to make all runs faster, so should split.",$("https://discord.com/channels/839124832171851786/981256908801454152/1270931483615559711","https://discord.com/channels/839124832171851786/981256908801454152/1270981152529715274")]}),o("td",{children:["Board should only be split when game changes make runs slower: (Lean no split) If it becomes discouragingly difficult to beat times from versions which are no longer playable, then could lose active speedrunning community. Costs and negative side-effects of a board split are only worth to avoid such an outcome. Claw, portioning, etc. changes all expected to make runs faster, so lean no split.",$("https://discord.com/channels/839124832171851786/981256908801454152/1270908721232478232","https://discord.com/channels/839124832171851786/981256908801454152/1270953726210740274","https://discord.com/channels/839124832171851786/981256908801454152/1270972841621196861","https://discord.com/channels/839124832171851786/981256908801454152/1271170972375842848")]}),o("td",{children:'I think the 1.1.6b and 1.1.7 board splits fit into the latter category as they both made the "meta" strategies for random seed runs more difficult to achieve (Pre-1.1.6b meta involved restarting entire runs looking for metal table upgrades and hoping to get sides, then 1.1.6b cut the probability of getting a side card in half. 1.1.7 similarly hit the ice cream/coffee dessert strat that took over after that board split.)'})]}),o("tr",{children:[o("th",{children:"Effects on newer runners (Related to motivation/reward of placements?)"}),o("td",{children:["A fresh leaderboard encourages new runners to submit runs because there will be many leaderboards with no or few submitted runs; strong incentive because there's a high/guaranteed chance of getting a high placement.",$("https://discord.com/channels/839124832171851786/981256908801454152/1271305624222830623","https://discord.com/channels/839124832171851786/981256908801454152/1271363756273832089")]}),o("td",{children:["A leaderboard with many runs encourages new runners to submit runs because there's less pressure to place/submit runs if you are middle of the pack among a large pack",$("https://discord.com/channels/839124832171851786/981256908801454152/1270934603305058411","https://discord.com/channels/839124832171851786/981256908801454152/1271170977740619807","https://discord.com/channels/839124832171851786/981256908801454152/1271320478337863821")]})]})]})]}),o("p",{children:["My personal takeaways:",o("ol",{children:[o("li",{children:["SRC sucks. It doesn't fit our needs, and forces us as a community to make hard decisions because SRC's lacks the ability to categorize and display things the way we'd like, and SRC isn't about to take urgent feature requests from us as one random community on their site. But we're stuck with it because (?) ",o("br",{}),"The game developer chose it? ",o("br",{}),"It's just that common across other games' speedrunning communities?",o("br",{})," It'd be very difficult to migrate to and/or build an alternative?"]}),o("li",{children:`Wish I could just vote for "delay decision". Haven't had a chance to play the new version yet. If we vote board split now, the consequences are hard to reverse, but we could always wait for a few weeks/months to allow people (incl. me) with not as much free time to actually play, discover strategies, and still decide to split the board later. It would not be difficult to script a retroactive board split update based on submitted runs' Patch variables...`})]})]})]}),Qr={"Eating Time":["Leisurely Eating"],"Double Courses":["All You Can Eat","Double Helpings"],Dessert:["Ice Cream"],Starter:["Carrot Soup"],Theme:["Affordable"],"Group Sizes":["Individual Dining","Simple Table","Medium Groups","Large Groups"],"Leftover Bags":["Auto Leftover Bags"],Knife:["Sharp Knife"],ws:["Workstation"]},Xa=[[]];{const e=Object.entries(Qr);for(const[a,s]of e){let l=[];for(const r of s)l.push(...Xa.map(t=>[...t,r]));Xa.push(...l)}}var Fe=(e=>(e[e.Generic=0]="Generic",e[e.Dish=1]="Dish",e[e.PrimaryTheme=3]="PrimaryTheme",e[e.SecondaryTheme=4]="SecondaryTheme",e[e.Franchise=5]="Franchise",e[e.Special=6]="Special",e))(Fe||{}),J=(e=>(e[e.Base=0]="Base",e[e.Main=1]="Main",e[e.Extra=2]="Extra",e[e.Side=3]="Side",e[e.Starter=4]="Starter",e[e.Dessert=5]="Dessert",e[e.Null=6]="Null",e))(J||{});const Xr=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:1972879238:620897674,380220741:925796718:-266993023,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,1972879238,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,1972879238:2087693779,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,2087693779,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238:620897674,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238:620897674,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779:620897674,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779:620897674,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779:620897674,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-905438738:-266993023,False,False,5,1,3\r
-133939790,Pies,1,,,1972879238:-523839730:620897674,925796718:-484165118:380220741:-266993023,True,False,0,1,8\r
-1992316049,Mushroom Pies,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718,False,False,2,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-452101383:-1573812073,False,False,2,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779:620897674,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779:620897674,1193867305:-712909563:380220741,True,False,0,-1,3\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,10\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,8\r
-959076098,Steak,1,,,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,1972879238,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,2087693779,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,2087693779,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,8\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,2,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741:-266993023,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2\r
1642577536,Herd Mentality,0,,,,,False,False,6,0,0\r
-1737101581,Health and Safety,0,,,,,False,False,6,0,0\r
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0\r
73422455,Tipping Culture,0,,,,,False,False,6,0,0\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718:-266993023,False,False,5,1,3\r
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,3\r
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,2\r
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0\r
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0\r
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0\r
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0\r
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0\r
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0\r
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0\r
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0\r
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0\r
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0\r
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0\r
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0\r
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0\r
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0\r
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0\r
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0\r
319209671,Community,6,,,,,False,False,6,1,0\r
536093200,Nut Roast,1,1551533879,,2087693779:1972879238:620897674,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pies,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,1972879238:620897674,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,2087693779,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,1972879238,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,2,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741:-266993023,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,2,1,0\r
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0\r
-2106646073,Couples,6,,,,,False,False,6,0,0\r
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0\r
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0\r
251686519,Double Brew,0,746549422,,,,False,False,6,0,0\r
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0\r
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0\r
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1\r
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0\r
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0\r
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,5,1,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,5,1,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023:-266993023,False,False,5,1,3\r
1316998108,Sponge Cake,1,1113735761,,1972879238:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,1972879238:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,1972879238:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,1972879238:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779:620897674,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,8\r
803049136,Lasagne,1,-1501485763:1651927267,,1972879238:1972879238:-523839730:620897674,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,10\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779:620897674,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,8\r
1764920765,Spaghetti,1,,,1972879238:2087693779:620897674,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
934171642,Sundaes,1,,373996608,,-1533430406:602693523,False,False,0,0,0\r
-690833761,Giant Sundaes,1,934171642,,,,False,False,5,1,0\r
431260200,Sundae Syrups,1,934171642,,,825737084:483880621,False,False,2,1,0\r
1879652468,Sundae Toppings,1,934171642,,2087693779,148543530:1834063794,False,False,2,1,0\r
-1272159363,Sandwiches,1,,,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563:-266993023,True,False,0,1,3\r
641008296,Club Sandwiches,1,-72176411:-778718372,,,-1506824829:961148621:-1963699221,True,False,1,2,5\r
-1795285445,Giant Sandwiches,1,-1272159363,,,,True,False,1,2,3\r
-72176411,Toast Sandwich,1,-1272159363,,1972879238,,True,False,1,1,5\r
-469306490,Sandwich - Cheese,1,-1272159363,,2087693779,-117339838,False,False,2,1,0\r
525953646,Sandwich - Eggs,1,-1272159363,,2087693779:1972879238,961148621,False,False,2,1,0\r
-778718372,Sandwich - Mayo,1,-1272159363,,2087693779:-523839730,961148621:-1963699221,False,False,2,1,0\r
368792675,Sandwich - Toppers,1,-1272159363,,,-1434800013:-74499940,False,False,2,1,0\r
506626805,Tacos,1,,,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
675343178,Tacos - Cheese,1,506626805,,2087693779,-117339838,False,False,2,1,0\r
-2122069505,Tacos - Lettuce,1,506626805,,2087693779,1193867305,False,False,2,1,0\r
706991842,Tacos - Onion,1,506626805,,2087693779,-2042103798,False,False,2,1,0\r
-1656665053,Tacos - Tomato,1,506626805,,2087693779,-712909563,False,False,2,1,0\r
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0\r
-347199069,All You Can Eat,0,,,,,False,False,6,2,0\r
233335391,Personalised Waiting,0,,,,,False,False,6,0,0\r
-1815978981,Closing Time?,0,,,,,False,False,6,0,0\r
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0\r
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0\r
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0\r
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0\r
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0\r
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0\r
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0\r
165138001,Photographic Memory,0,,,,,False,False,6,0,0\r
-28708234,Empathy,0,,,,,False,False,6,0,0\r
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0\r
1530184692,Instant Service,0,,1989028383:746549422,,,False,False,6,0,0\r
113582858,Discounts,0,,,,,False,False,6,0,0\r
-913531466,Victorian Standards,0,,,,,False,False,6,0,0\r
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0\r
-491994319,Splash Zone,0,,,,,False,False,6,0,0\r
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0\r
73387665,Advertising,0,1765310572,,,,False,False,6,0,0\r
1765310572,Advertising,0,,,,,False,False,6,0,0\r
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0\r
1914014233,Simplicity,0,,,,,False,False,6,0,0\r
-534291083,High Expectations,0,,,,,False,False,6,0,0\r
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0\r
1103452725,High Quality,0,,,,,False,False,6,0,0\r
-1857686620,Affordable,3,,,,,False,False,6,0,0\r
1293847744,Charming,3,,,,,False,False,6,0,0\r
-1323758054,Exclusive,3,,,,,False,False,6,0,0\r
-1641333859,Formal,3,,,,,False,False,6,0,0\r
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0\r
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0\r
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0\r
1298492736,Grabber,5,,,,,False,False,6,-2,0\r
1173444265,Wash Basin,5,,,,,False,False,6,-2,0\r
-1096314451,Savings,5,,,,,False,False,6,-2,0\r
2022427578,Reincarnation,5,,,,,False,False,6,-2,0\r
-401283600,Preparation Time,5,,,,,False,False,6,-2,0\r
-357483693,Double Homework,5,,,,,False,False,6,-2,0\r
868780472,Catalogue,5,,,,,False,False,6,-2,0\r
-1418317596,Coupons,5,,,,,False,False,6,-2,0\r
-98765415,Supplier Error,5,,,,,False,False,6,-2,0\r
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0\r
1543829883,Second Helpings,5,,,,,False,False,6,-2,0\r
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0\r
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0\r
1818403570,Conveyors,5,,,,,False,False,6,-2,0\r
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0\r
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0\r
-220105135,Flower Pots,5,,,,,False,False,6,-2,0\r
-178381693,Metal Table,5,,,,,False,False,6,0,0\r
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0\r
`,Zr=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779:620897674,1193867305:-712909563:380220741,True,False,0,-1,3\r
550743424,Pizza,1,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,5,-2,1\r
-1778969928,Burgers,1,1972879238:620897674,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,1972879238:620897674,-1506824829:380220741,True,False,0,1,5\r
-1272159363,Sandwiches,1,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563,True,False,0,1,3\r
-133939790,Pies,1,1972879238:-523839730:620897674,925796718:-484165118:380220741,True,False,0,1,8\r
1113735761,Cakes,0,1972879238:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,5,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779:620897674,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
934171642,Sundaes,1,,-1533430406:602693523,False,False,5,0,0\r
1743900205,Fish,1,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`,X=Xr.trim().split(/\r?\n/).filter(e=>e).map(e=>{var ie,L;const[a,s,l,r,t,n,i,u,c,d,F,_]=e.split(","),f=Number(a),v=Number(l),g=r!=null&&r.length?r.split(":").map(M=>Number(M)):[],p=t.length?t.split(":").map(M=>Number(M)):[],m=n!=null&&n.length?(ie=n==null?void 0:n.split(":"))==null?void 0:ie.map(M=>Number(M)):[],y=i!=null&&i.length?(L=i==null?void 0:i.split(":"))==null?void 0:L.map(M=>Number(M)):[],C=u==="True",x=c==="True",O=Number(d),z=Number(F),oe=Number(_);return{ID:f,Name:s,UnlockGroup:v,Requires:g,BlockedBy:p,RequiredProcesses:m,IngredientProviders:y,isMain:C,isStarterOrSide:x,DishType:O,CustomerMultiplier:z,DishValue:oe}});function Zt(e,a=!0){const s=a&&e.some(l=>l.Name==="Community"||l.Name==="Lake");return X.filter(l=>{if(e.some(r=>r.ID===l.ID)||l.BlockedBy.some(r=>e.some(t=>t.ID===r))||l.Requires.some(r=>!e.some(t=>t.ID===r)))return!1;if(l.isStarterOrSide)if(e.some(r=>r.isMain)){if(e.length&&e[0].DishType===J.Dessert)debugger}else return!1;return!(!s&&l.DishType===J.Base)}).sort((l,r)=>l.ID-r.ID)}const al=[{ID:447437163,Name:"Country",UnlockGroup:Fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:J.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:J.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:J.Null,CustomerMultiplier:0,DishValue:0},X.filter(e=>e.Name==="Community")[0],X.filter(e=>e.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:J.Null,CustomerMultiplier:0,DishValue:0},X.filter(e=>e.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:Fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:J.Null,CustomerMultiplier:0,DishValue:0}],en=[...al].slice(3).sort((e,a)=>e.Name<a.Name?-1:1),an=["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Sundaes"].map(e=>X.filter(a=>a.Name===e)[0]),sl=Zr.trim().split(`\r
`).filter(e=>e).map(e=>{var x,O;const[a,s,l,r,t,n,i,u,c,d]=e.split(","),F=Number(a),_=Number(l),f=r!=null&&r.length?(x=r==null?void 0:r.split(":"))==null?void 0:x.map(z=>Number(z)):[],v=t!=null&&t.length?(O=t==null?void 0:t.split(":"))==null?void 0:O.map(z=>Number(z)):[],g=n==="True",p=i==="True",m=Number(u),y=Number(c),C=Number(d);return{ID:F,Name:s,UnlockGroup:_,Requires:[],BlockedBy:[],RequiredProcesses:f,IngredientProviders:v,isMain:g,isStarterOrSide:p,DishType:m,CustomerMultiplier:y,DishValue:C}}).sort((e,a)=>e.Name<a.Name?-1:1),T={};for(const e of sl)T[e.Name]=e;for(const e of X)T[e.Name]=e;for(const e of al)T[e.Name]=e;T.Coffee=T["Black Coffee"];T.Community.AKA="Autumn";T["Christmas Rush"].AKA="North Pole";T.Couples.AKA="Romantic";T["Cherry Pie"]=T["Cherry Pies"];T["Mushroom Pie"]=T["Mushroom Pies"];for(const e of X)e.AKA&&(T[e.AKA]=e);{T.Sandwiches.DishValue=3,T["Sundaes I: Scoops"]={...T.Sundaes,Name:"Sundaes I: Scoops",DishValue:3},T["Sundaes II: Homemade"]={...T.Sundaes,Name:"Sundaes II: Homemade",CustomerMultiplier:T.Sundaes.CustomerMultiplier+1,IngredientProviders:[-1857890774,-1857890774,-2133205155,120342736,-217313684,1872560572,783588616,602693523],DishValue:5},T.Sundaes.altVersions=[T["Sundaes I: Scoops"],T["Sundaes II: Homemade"]],T["Spaghetti I: Traditional"]={...T.Spaghetti,Name:"Spaghetti I: Traditional",CustomerMultiplier:T.Spaghetti.CustomerMultiplier-1},T["Spaghetti II: Extra Starch"]={...T.Spaghetti,Name:"Spaghetti II: Extra Starch",IngredientProviders:[...T.Spaghetti.IngredientProviders,1159228054],DishValue:T.Spaghetti.DishValue+1},T.Spaghetti.altVersions=[T["Spaghetti I: Traditional"],T["Spaghetti II: Extra Starch"]];for(const e of["Sundaes I: Scoops","Sundaes II: Homemade","Spaghetti I: Traditional","Spaghetti II: Extra Starch"])sl.push(T[e])}const Qe=new Map;var es;for(const e of X)Qe.has(e.ID)?(es=Qe.get(e.ID))==null||es.push(e):Qe.set(e.ID,[e]);const et=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120,-1440053805\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60,505496455\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60,505496455:-1440053805:-1357906425\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60,\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20,-1632826946\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20,-1855909480\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20,2127051779\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20,\r
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20,2127051779:-1855909480:-1632826946\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20,\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120,-1723340146\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20,\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60,-2147057861\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60,-1723340146\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20,-1495393751:1776760557\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250,\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250,-2147057861\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250,\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250,-1723340146\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20,\r
-17368064,False,False,,False,False,,,0,0,0,False,False,20,\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20,-1029710921\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60,-1462602185\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60,-1238047163\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60,-331651461\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60,-1238047163:-331651461\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60,-1906799936\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250,\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20,-1573577293:-1857890774\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20,\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40,-1857890774\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30,\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30,\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40,\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40,\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40,\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30,\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30,\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40,\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40,\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30,\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100,\r
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40,\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30,\r
-1380985631,False,False,Banner,False,False,,,8192,0,0,False,False,0,\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0,\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40,\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40,\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60,\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60,\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40,\r
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40,\r
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100,\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40,\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30,\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40,\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30,\r
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30,\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60,\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60,\r
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60,\r
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60,\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20,\r
-2100580689,False,False,,False,False,,,0,0,0,False,False,20,\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60,459840623\r
892856538,False,False,,False,False,,,0,0,0,False,False,20,\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20,\r
188952245,False,False,,False,False,,,0,0,0,False,False,20,\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,1266458729\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,-1448690107\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5,\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20,-1448690107:1266458729\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20,\r
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60,\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60,\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60,\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120,\r
1630557157,False,False,,False,False,,,0,0,0,False,False,20,\r
-1324288299,False,False,,False,False,,,0,0,0,False,False,20,\r
-374077567,False,False,,False,False,,,0,0,0,False,False,20,\r
147181555,False,False,,False,False,,,0,0,0,False,False,20,\r
31731938,False,False,,False,False,,,0,0,0,False,False,20,\r
1419995156,False,False,,False,False,,,0,0,0,False,False,20,\r
34773971,False,False,,False,False,,,0,0,0,False,False,20,\r
-1424385600,False,False,,False,False,,,0,0,0,False,False,20,\r
377065033,False,False,,False,False,,,0,0,0,False,False,20,\r
-483535085,False,False,,False,False,,,0,0,0,False,False,0,\r
1553046198,False,False,,False,False,,,0,0,0,False,False,20,\r
1063254979,False,False,,False,False,,,0,0,0,False,False,20,\r
1732122842,False,False,,False,False,,,0,0,0,False,False,20,\r
-1936421857,False,False,,False,False,,,0,0,0,False,False,20,\r
2041631136,False,False,,False,False,,,0,0,0,False,False,20,\r
949631021,False,False,,False,False,,,0,0,0,False,False,60,\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20,\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120,1446975727\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120,-729493805\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120,-729493805\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60,1586911545\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40,1446975727:1586911545:-729493805\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0,\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120,\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60,\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60,\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60,-246383526\r
944301512,False,False,,False,False,,,0,0,0,False,False,20,\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120,\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60,-1311702572\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0,\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0,\r
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20,\r
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60,\r
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60,\r
269523389,True,False,Bone-in Meat,True,False,,,288,0,0,False,False,60,\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60,\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60,\r
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60,\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60,\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60,\r
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60,\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60,\r
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60,\r
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60,\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60,\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60,\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60,\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60,\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60,\r
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60,\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60,\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60,\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60,\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60,\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60,\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60,\r
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60,\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60,\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60,\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60,\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60,\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60,\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60,\r
-101564005,False,False,,False,False,,,0,0,0,False,False,20,\r
-897970831,False,False,,False,False,,,0,0,0,False,False,20,\r
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5,\r
946079892,False,False,,False,False,,,0,0,0,False,False,60,\r
1171429989,False,False,,False,False,,,0,0,0,False,False,60,\r
161402590,False,False,,False,False,,,0,0,0,False,False,60,\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20,\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20,\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20,\r
1270423542,False,False,,False,False,,,0,0,0,False,False,20,\r
-1474018107,False,False,,False,False,,,0,0,0,False,False,20,\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20,\r
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20,739504637\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20,\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20,\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60,\r
-1291027873,False,False,,False,False,,,0,0,0,False,False,20,\r
-214921468,False,False,,False,False,,,0,0,0,False,False,20,\r
-2135829561,False,False,,False,False,,,0,0,0,False,False,20,\r
-372462424,False,False,,False,False,,,0,0,0,False,False,20,\r
933445633,False,False,,False,False,,,0,0,0,False,False,20,\r
-1555334152,False,False,,False,False,,,0,0,0,False,False,20,\r
1980900762,False,False,,False,False,,,0,0,0,False,False,20,\r
1855052205,False,False,,False,False,,,0,0,0,False,False,20,\r
-68388422,False,False,,False,False,,,0,0,0,False,False,20,\r
-1200192498,False,False,,False,False,,,0,0,0,False,False,20,\r
-194750543,False,False,,False,False,,,0,0,0,False,False,20,\r
1911132834,False,False,,False,False,,,0,0,0,False,False,20,\r
1365126444,False,False,,False,False,,,0,0,0,False,False,20,\r
-1265562836,False,False,,False,False,,,0,0,0,False,False,20,\r
-2046940874,False,False,,False,False,,,0,0,0,False,False,20,\r
-923570273,False,False,,False,False,,,0,0,0,False,False,20,\r
-488268556,False,False,,False,False,,,0,0,0,False,False,20,\r
-548432204,False,False,,False,False,,,0,0,0,False,False,20,\r
-758567246,False,False,,False,False,,,0,0,0,False,False,20,\r
532701855,False,False,,False,False,,,0,0,0,False,False,20,\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20,-1573577293\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60,\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20,-759808000\r
-262439022,False,False,,False,False,,,0,0,0,False,False,20,\r
1890408483,False,False,,False,False,,,0,0,0,False,False,20,\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20,\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60,\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60,\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60,\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60,\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60,\r
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0,\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40,\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0,\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5,-34659638\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60,-203679687\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60,-2019409936\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60,-3721951\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20,-34659638:-203679687:-2019409936:-3721951\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20,\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20,\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20,\r
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60,\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60,\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60,\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60,\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60,1860904347\r
-214126192,False,True,Wash Basin,False,False,,620897674,16,0,0,False,False,60,-823922901\r
1083874952,True,False,Sink,False,False,,620897674,17,0,0,False,False,20,1860904347:1467371088:-214126192:-823922901\r
1467371088,False,True,Power Sink,False,False,,620897674,16,0,0,False,False,60,-214126192\r
1860904347,False,True,Soaking Sink,False,False,,620897674,16,0,0,False,False,20,1467371088\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20,\r
2073091578,False,False,,False,False,,,0,0,0,False,False,20,\r
-469149429,False,False,,False,False,,,0,0,0,False,False,20,\r
834743908,False,False,,False,False,,,0,0,0,False,False,20,\r
951367272,False,False,,False,False,,,0,0,0,False,False,20,\r
1771016910,False,False,,False,False,,,0,0,0,False,False,60,\r
-2122624266,False,False,,False,False,,,0,0,0,False,False,20,\r
-404095277,False,False,,False,False,,,0,0,0,False,False,20,\r
-1949016360,False,False,,False,False,,,0,0,0,False,False,20,\r
-581219245,False,False,,False,False,,,0,0,0,False,False,60,\r
-148578487,False,False,,False,False,,,0,0,0,False,False,20,\r
-1125517450,False,False,,False,False,,,0,0,0,False,False,20,\r
-233558851,False,False,,False,False,,,0,0,0,False,False,20,\r
-342718019,False,False,,False,False,,,0,0,0,False,False,20,\r
174737401,False,False,,False,False,,,0,0,0,False,False,20,\r
310022384,False,False,,False,False,,,0,0,0,False,False,20,\r
-1425710426,False,False,,False,False,,,0,0,0,False,False,60,\r
-1807971648,False,False,,False,False,,,0,0,0,False,False,60,\r
268640447,False,False,,False,False,,,0,0,0,False,False,60,\r
1199575543,False,False,,False,False,,,0,0,0,False,False,60,\r
-1451048989,False,False,,False,False,,,0,0,0,False,False,60,\r
-1820794030,False,False,,False,False,,,0,0,0,False,False,60,\r
871235082,False,False,,False,False,,,0,0,0,False,False,20,\r
387240739,False,False,,False,False,,,0,0,0,False,False,20,\r
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20,\r
-626547002,False,False,,False,False,,,0,0,0,False,False,60,\r
359655899,False,False,,False,False,,,0,0,0,False,False,20,\r
-232172209,False,False,,False,False,,,0,0,0,False,False,20,\r
-1528441435,False,False,,False,False,,,0,0,0,False,False,20,\r
564388954,False,False,,False,False,,,0,0,0,False,False,20,\r
1363960331,False,False,,False,False,,,0,0,0,False,False,20,\r
-760874610,False,False,,False,False,,,0,0,0,False,False,20,\r
1823459359,False,False,,False,False,,,0,0,0,False,False,20,\r
1659152562,False,False,,False,False,,,0,0,0,False,False,20,\r
477050702,False,False,,False,False,,,0,0,0,False,False,20,\r
1485375733,False,False,,False,False,,,0,0,0,False,False,20,\r
-1114059052,False,False,,False,False,,,0,0,0,False,False,20,\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20,\r
-62256073,False,False,,False,False,,,0,0,0,False,False,20,\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20,\r
-1260306608,False,False,,False,False,,,0,0,0,False,False,20,\r
1425494045,False,False,,False,False,,,0,0,0,False,False,20,\r
-1614041568,False,False,,False,False,,,0,0,0,False,False,20,\r
-1051912790,False,False,,False,False,,,0,0,0,False,False,20,\r
1010867759,False,False,,False,False,,,0,0,0,False,False,20,\r
-720353319,False,False,,False,False,,,0,0,0,False,False,60,\r
-1997868587,False,False,,False,False,,,0,0,0,False,False,60,\r
-1920103064,False,False,,False,False,,,0,0,0,False,False,60,\r
-1235624607,False,False,,False,False,,,0,0,0,False,False,60,\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0,\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0,\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0,\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0,\r
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60,\r
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60,\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60,\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60,\r
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60,\r
-1382019219,False,False,,False,False,,,0,0,0,False,False,20,\r
-1403625488,False,False,,False,False,,,0,0,0,False,False,20,\r
-1673904972,False,False,,False,False,,,0,0,0,False,False,20,\r
1752654754,False,False,,False,False,,,0,0,0,False,False,20,\r
-1748395084,False,False,,False,False,,,0,0,0,False,False,20,\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60,\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60,\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60,\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20,\r
-697441390,False,False,,False,False,,,64,0,0,False,False,20,\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0,\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0,\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60,\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60,\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60,\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60,\r
-184765154,False,False,,False,False,,,0,0,0,False,False,20,\r
-707206359,False,False,,False,False,,,0,0,0,False,False,20,\r
1134699240,False,False,,False,False,,,0,0,0,False,False,20,\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0,\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0,\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0,\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0,\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0,\r
645876063,False,False,,False,False,,,0,0,0,False,False,60,\r
-916942203,False,False,,False,False,,,0,0,0,False,False,20,\r
345407921,False,False,,False,False,,,0,0,0,False,False,20,\r
-509190559,False,False,,False,False,,,0,0,0,False,False,20,\r
1274763392,False,False,,False,False,,,0,0,0,False,False,20,\r
965503721,False,False,,False,False,,,0,0,0,False,False,20,\r
260380903,False,False,,False,False,,,0,0,0,False,False,20,\r
-89571330,False,False,,False,False,,,0,0,0,False,False,20,\r
2114150010,False,False,,False,False,,,0,0,0,False,False,20,\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60,\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20,\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20,\r
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60,\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60,\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60,\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60,\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60,\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120,\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120,\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120,\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120,\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60,\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60,\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20,\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-1552572658,False,False,Candles,False,False,,,8192,0,0,False,False,0,\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0,\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False,False,0,\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40,\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60,\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60,\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60,\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60,\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60,\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60,\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20,\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20,\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60,\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120,\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120,\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60,\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20,\r
-1835366879,False,False,,False,False,,,0,0,0,False,False,20,\r
2031496644,False,False,,False,False,,,0,0,0,False,False,20,\r
1391464545,False,False,,False,False,,,0,0,0,False,False,20,\r
477535207,False,False,,False,False,,,0,0,0,False,False,20,\r
923307040,False,False,,False,False,,,0,0,0,False,False,20,\r
-1090855913,False,False,,False,False,,,0,0,0,False,False,20,\r
50273892,False,False,,False,False,,,0,0,0,False,False,20,\r
-70663877,False,False,,False,False,,,0,0,0,False,False,20,\r
-2123542635,False,False,,False,False,,,0,0,0,False,False,20,\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60,\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60,\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120,\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60,\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60,\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60,\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20,\r
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20,\r
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20,\r
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20,\r
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20,\r
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20,\r
509800268,False,False,Dish Source Cabinet,False,False,,,0,0,0,False,False,60,\r
1436010410,False,False,,False,False,,,0,0,0,False,False,20,\r
-400359294,False,False,,False,False,,,0,0,0,False,False,20,\r
-1082709460,False,False,,False,False,,,0,0,0,False,False,20,\r
-307800946,False,False,,False,False,,,0,0,0,False,False,20,\r
2095304286,False,False,,False,False,,,0,0,0,False,False,20,\r
585649337,False,False,,False,False,,,0,0,0,False,False,20,\r
-773196462,True,False,Buffet,False,False,,,8,0,0,False,False,120,\r
638034870,False,False,Service Counter,False,False,,,8,0,0,False,False,60,\r
-364231730,False,False,,False,False,,,0,0,0,False,False,60,\r
-121110359,False,False,,False,False,,,0,0,0,False,False,60,\r
825737084,True,False,Chocolate Syrup,True,False,,,288,0,0,False,False,60,\r
483880621,True,False,Strawberry Syrup,True,False,,,288,0,0,False,False,60,\r
602693523,True,False,Sundae Glasses,True,False,,,288,0,0,False,False,60,\r
1872560572,True,False,Strawberries,True,False,,,288,0,0,False,False,60,\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60,\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60,\r
-1673135814,True,False,Ham,True,False,,,288,0,0,False,False,60,\r
-74499940,True,False,Pickle,True,False,,,288,0,0,False,False,60,\r
1895329114,False,False,,False,False,,,0,0,0,False,False,60,\r
-1889835507,False,False,Present Stack,False,False,,,8192,0,0,False,False,0,\r
-380823608,False,False,Tinsel,False,False,,,8192,0,0,False,False,0,\r
-602487625,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-302306254,False,False,Wreath,False,False,,,8192,0,0,False,False,0,\r
-1492497486,False,False,,False,False,,,0,0,0,False,False,60,\r
-771033261,False,False,,False,False,,,0,0,0,False,False,60,\r
-1082534766,False,False,,False,False,,,0,0,0,False,False,60,\r
416689423,False,False,,False,False,,,0,0,0,False,False,60,\r
1595436560,False,False,,False,False,,,0,0,0,False,False,60,\r
-1985766917,False,False,,False,False,,,0,0,0,False,False,60,\r
2029957333,False,False,,False,False,,,0,0,0,False,False,60,\r
1621490890,False,False,,False,False,,,0,0,0,False,False,60,\r
708507454,False,False,,False,False,,,0,0,0,False,False,60,\r
684514756,False,False,,False,False,,,0,0,0,False,False,60,\r
1178498897,False,False,,False,False,,,0,0,0,False,False,60,\r
1668340088,False,False,,False,False,,,0,0,0,False,False,60,\r
-450635801,False,False,,False,False,,,0,0,0,False,False,60,\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60,\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60,\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60,\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60,\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60,\r
`,at=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],st=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],je=et.trim().split(`\r
`).map(e=>{const a=e.split(",");let s={};for(let l=0;l<a.length;l++){let r;switch(st[l]){case"number":r=Number(a[l]);break;case"boolean":r=a[l]==="True";break;case"number[]":a[l]===""?r=[]:r=a[l].split(":").map(t=>Number(t));break;default:r=a[l]}s[at[l]]=r}return s});class sn{constructor(a){V(this,"Staple");V(this,"Tags");V(this,"StapleWhenMissing");V(this,"Appliance");V(this,"IsRemoved");V(this,"Filter");V(this,"DecorationRequired");V(this,"SellAsUpgrade");this.Appliance=a,this.Tags=a.ShoppingTags,this.DecorationRequired=a.ThemeRequired,this.SellAsUpgrade=a.IsPurchasableAsUpgrade,this.Filter=a.ShopRequirementFilter,this.StapleWhenMissing=a.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(a){return a&1?this.Staple!==0:a&this.Tags?this.Staple===0:!1}}var lt=(e=>(e[e.NonStaple=0]="NonStaple",e[e.FixedStaple=1]="FixedStaple",e[e.BonusStaple=2]="BonusStaple",e[e.WhenMissing=3]="WhenMissing",e))(lt||{}),rt=(e=>(e[e.None=0]="None",e[e.Basic=1]="Basic",e[e.Decoration=2]="Decoration",e[e.Technology=4]="Technology",e[e.FrontOfHouse=8]="FrontOfHouse",e[e.Plumbing=16]="Plumbing",e[e.Cooking=32]="Cooking",e[e.Automation=64]="Automation",e[e.Christmas=128]="Christmas",e[e.Misc=256]="Misc",e[e.Office=512]="Office",e[e.BlueprintUpgrader=1024]="BlueprintUpgrader",e[e.BlueprintStore=2048]="BlueprintStore",e[e.Halloween=4096]="Halloween",e[e.SpecialEvent=8192]="SpecialEvent",e))(rt||{});const ln={DefaultShoppingTag:892};var tt=(e=>(e[e.None=0]="None",e[e.RefreshableProvider=1]="RefreshableProvider",e))(tt||{}),nt=(e=>(e[e.Null=0]="Null",e[e.Exclusive=1]="Exclusive",e[e.Affordable=2]="Affordable",e[e.Charming=4]="Charming",e[e.Formal=8]="Formal",e[e.Kitchen=16]="Kitchen",e))(nt||{});const ua=new Map,ot=new Map;for(const e of je)ua.set(e.ID,e),ot.set(e.Name,e);const K=new Map,it=new Map,Ft=new Map;var as;{let e=!0;const a=je.filter(l=>l.Upgrades.length);for(const l of a)for(const r of l.Upgrades)K.has(r)||K.set(r,new Set),(as=K.get(r))==null||as.add(l.ID);for(;e;){e=!1;for(const[l,r]of K){const t=r.size;for(const n of r)for(const i of K.get(n)??[])r.add(i);t!==r.size&&(e=!0)}}for(const[l,r]of K)r.delete(l),Ft.set(l,Array.from(r));const s=Array.from(K.entries()).map(l=>{var r;return`${(r=ua.get(l[0]))==null?void 0:r.Name}:${Array.from(l[1]).map(t=>{var n;return(n=ua.get(t))==null?void 0:n.Name}).join(", ")}`});for(const l of K)it.set(l[0],Array.from(l[1]));console.log(s)}const ut=je.filter(e=>e.Name==="Booking Desk"||e.Name==="Blueprint Cabinet").sort((e,a)=>e.Name<a.Name?1:-1),rn=je;var ct=Symbol.for("preact-signals");function Ge(){if(Z>1)Z--;else{for(var e,a=!1;we!==void 0;){var s=we;for(we=void 0,ca++;s!==void 0;){var l=s.o;if(s.o=void 0,s.f&=-3,!(8&s.f)&&tl(s))try{s.c()}catch(r){a||(e=r,a=!0)}s=l}}if(ca=0,Z--,a)throw e}}function ll(e){if(Z>0)return e();Z++;try{return e()}finally{Ge()}}var w=void 0,we=void 0,Z=0,ca=0,Ve=0;function rl(e){if(w!==void 0){var a=e.n;if(a===void 0||a.t!==w)return a={i:0,S:e,p:w.s,n:void 0,t:w,e:void 0,x:void 0,r:a},w.s!==void 0&&(w.s.n=a),w.s=a,e.n=a,32&w.f&&e.S(a),a;if(a.i===-1)return a.i=0,a.n!==void 0&&(a.n.p=a.p,a.p!==void 0&&(a.p.n=a.n),a.p=w.s,a.n=void 0,w.s.n=a,w.s=a),a}}function D(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}D.prototype.brand=ct;D.prototype.h=function(){return!0};D.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};D.prototype.U=function(e){if(this.t!==void 0){var a=e.e,s=e.x;a!==void 0&&(a.x=s,e.e=void 0),s!==void 0&&(s.e=a,e.x=void 0),e===this.t&&(this.t=s)}};D.prototype.subscribe=function(e){var a=this;return ye(function(){var s=a.value,l=w;w=void 0;try{e(s)}finally{w=l}})};D.prototype.valueOf=function(){return this.value};D.prototype.toString=function(){return this.value+""};D.prototype.toJSON=function(){return this.value};D.prototype.peek=function(){var e=w;w=void 0;try{return this.value}finally{w=e}};Object.defineProperty(D.prototype,"value",{get:function(){var e=rl(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ca>100)throw new Error("Cycle detected");this.v=e,this.i++,Ve++,Z++;try{for(var a=this.t;a!==void 0;a=a.x)a.t.N()}finally{Ge()}}}});function ke(e){return new D(e)}function tl(e){for(var a=e.s;a!==void 0;a=a.n)if(a.S.i!==a.i||!a.S.h()||a.S.i!==a.i)return!0;return!1}function nl(e){for(var a=e.s;a!==void 0;a=a.n){var s=a.S.n;if(s!==void 0&&(a.r=s),a.S.n=a,a.i=-1,a.n===void 0){e.s=a;break}}}function ol(e){for(var a=e.s,s=void 0;a!==void 0;){var l=a.p;a.i===-1?(a.S.U(a),l!==void 0&&(l.n=a.n),a.n!==void 0&&(a.n.p=l)):s=a,a.S.n=a.r,a.r!==void 0&&(a.r=void 0),a=l}e.s=s}function ge(e){D.call(this,void 0),this.x=e,this.s=void 0,this.g=Ve-1,this.f=4}(ge.prototype=new D).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ve))return!0;if(this.g=Ve,this.f|=1,this.i>0&&!tl(this))return this.f&=-2,!0;var e=w;try{nl(this),w=this;var a=this.x();(16&this.f||this.v!==a||this.i===0)&&(this.v=a,this.f&=-17,this.i++)}catch(s){this.v=s,this.f|=16,this.i++}return w=e,ol(this),this.f&=-2,!0};ge.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var a=this.s;a!==void 0;a=a.n)a.S.S(a)}D.prototype.S.call(this,e)};ge.prototype.U=function(e){if(this.t!==void 0&&(D.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var a=this.s;a!==void 0;a=a.n)a.S.U(a)}};ge.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ge.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=rl(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function da(e){return new ge(e)}function il(e){var a=e.u;if(e.u=void 0,typeof a=="function"){Z++;var s=w;w=void 0;try{a()}catch(l){throw e.f&=-2,e.f|=8,Ca(e),l}finally{w=s,Ge()}}}function Ca(e){for(var a=e.s;a!==void 0;a=a.n)a.S.U(a);e.x=void 0,e.s=void 0,il(e)}function dt(e){if(w!==this)throw new Error("Out-of-order effect");ol(this),w=e,this.f&=-2,8&this.f&&Ca(this),Ge()}function xe(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}xe.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var a=this.x();typeof a=="function"&&(this.u=a)}finally{e()}};xe.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,il(this),nl(this),Z++;var e=w;return w=this,dt.bind(this,e)};xe.prototype.N=function(){2&this.f||(this.f|=2,this.o=we,we=this)};xe.prototype.d=function(){this.f|=8,1&this.f||Ca(this)};function ye(e){var a=new xe(e);try{a.c()}catch(s){throw a.d(),s}return a.d.bind(a)}var ze,Xe;function be(e,a){h[e]=a.bind(null,h[e]||function(){})}function He(e){Xe&&Xe(),Xe=e&&e.S()}function Fl(e){var a=this,s=e.data,l=ul(s);l.value=s;var r=U(function(){for(var t=a,n=a.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}var i=da(function(){var c=l.value.value;return c===0?0:c===!0?"":c||""}),u=da(function(){var c;return ea(i.value)||((c=a.base)==null?void 0:c.nodeType)!==3});return a.__$u.c=function(){var c;!ea(r.peek())&&((c=a.base)==null?void 0:c.nodeType)===3?a.base.data=r.peek():(a.__$f|=1,a.setState({}))},ye(function(){ee||(ee=this.N),this.N=fl,u.value&&t.base&&(t.base.data=i.value)}),i},[]);return r.value}Fl.displayName="_st";Object.defineProperties(D.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Fl},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});be("__b",function(e,a){if(typeof a.type=="string"){var s,l=a.props;for(var r in l)if(r!=="children"){var t=l[r];t instanceof D&&(s||(a.__np=s={}),s[r]=t,l[r]=t.peek())}}e(a)});be("__r",function(e,a){He();var s,l=a.__c;l&&(l.__$f&=-2,(s=l.__$u)===void 0&&(l.__$u=s=function(r){var t;return ye(function(){t=this}),t.c=function(){l.__$f|=1,l.setState({})},t}())),ze=l,He(s),e(a)});be("__e",function(e,a,s,l){He(),ze=void 0,e(a,s,l)});be("diffed",function(e,a){He(),ze=void 0;var s;if(typeof a.type=="string"&&(s=a.__e)){var l=a.__np,r=a.props;if(l){var t=s.U;if(t)for(var n in t){var i=t[n];i!==void 0&&!(n in l)&&(i.d(),t[n]=void 0)}else s.U=t={};for(var u in l){var c=t[u],d=l[u];c===void 0?(c=ft(s,u,d,r),t[u]=c):c.o(d,r)}}}e(a)});function ft(e,a,s,l){var r=a in e&&e.ownerSVGElement===void 0,t=ke(s);return{o:function(n,i){t.value=n,l=i},d:ye(function(){ee||(ee=this.N),this.N=fl;var n=t.value.value;l[a]!==n&&(l[a]=n,r?e[a]=n:n?e.setAttribute(a,n):e.removeAttribute(a))})}}be("unmount",function(e,a){if(typeof a.type=="string"){var s=a.__e;if(s){var l=s.U;if(l){s.U=void 0;for(var r in l){var t=l[r];t&&t.d()}}}}else{var n=a.__c;if(n){var i=n.__$u;i&&(n.__$u=void 0,i.d())}}e(a)});be("__h",function(e,a,s,l){(l<3||l===9)&&(a.__$f|=2),e(a,s,l)});A.prototype.shouldComponentUpdate=function(e,a){var s=this.__$u;if(!(s&&s.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var l in a)return!0;for(var r in e)if(r!=="__source"&&e[r]!==this.props[r])return!0;for(var t in this.props)if(!(t in e))return!0;return!1};function ul(e){return U(function(){return ke(e)},[])}function tn(e){var a=j(e);return a.current=e,ze.__$f|=4,U(function(){return da(function(){return a.current()})},[])}var ee,cl=[],dl=[],ht=typeof requestAnimationFrame>"u"?setTimeout:requestAnimationFrame,pt=function(e){queueMicrotask(function(){queueMicrotask(e)})};function _t(){ll(function(){for(var e;e=cl.shift();)ee.call(e)})}function mt(){cl.push(this)===1&&(h.requestAnimationFrame||ht)(_t)}function vt(){ll(function(){for(var e;e=dl.shift();)ee.call(e)})}function fl(){dl.push(this)===1&&(h.requestAnimationFrame||pt)(vt)}function Za(e){var a=j(e);a.current=e,_e(function(){return ye(function(){return ee||(ee=this.N),this.N=mt,a.current()})},[])}function gt(e,a,s){let l;console.log("loading persistentsignal for:",{defaultState:e,ID:a});const r=localStorage.getItem(a);return r===null?l=ke(e):s?l=ke(s(JSON.parse(r))):l=ke(JSON.parse(r)),ye(()=>{console.log("saving persistentsignal state"),localStorage.setItem(a,JSON.stringify(l.value))}),l}const nn=(e,a,s)=>{const l=ul(e);return Za(()=>{console.log("loading persistentsignal for:",{defaultState:e,ID:a});const r=localStorage.getItem(a);r===null||(l.value=JSON.parse(r))}),Za(()=>{console.log("saving persistentsignal state"),localStorage.setItem(a,JSON.stringify(l.value))}),l},on=(e,a,s)=>{const[l,r]=pe();_e(()=>{const n=localStorage.getItem(a);n===null||r(s?s(JSON.parse(n)):JSON.parse(n))},[a]);const t=ae(n=>{typeof n=="function"?r(i=>{const u=n(i??e);return localStorage.setItem(a,JSON.stringify(u)),u}):(r(n),localStorage.setItem(a,JSON.stringify(n)))},[a,r]);return[l??e,t]},yt={seed:"az",day:1,cards:[],initialRerollConfig:[],solo:!1,appliances:ut,searchDepth:2,simpleBPSettings:"full"},Ze=gt(yt,"BRANCH_CONFIG",e=>({...e,searchDepth:Math.min(e.searchDepth,2)}));b(()=>Te);b(()=>Te);b(()=>Te);const Te=Promise.resolve(()=>o(N,{}));b(()=>Promise.resolve(()=>o(N,{})));b(()=>Te);const bt=b(()=>E(()=>import("./equivalentSeeds-CPo9DDVe.js"),__vite__mapDeps([0,1]))),Tt=b(()=>E(()=>import("./RandomSeedRerollManip-Bf-AIyRK.js"),__vite__mapDeps([2,3,1,4]))),St=b(()=>Te),Ct=b(()=>E(()=>import("./seedSearcher-DHkfj7fN.js"),__vite__mapDeps([5,6,7,1,4,8,9,10]))),wt=b(()=>E(()=>import("./versusSeeds-DotQ0Rvs.js"),__vite__mapDeps([11,10,9,7,1,4]))),kt=b(()=>E(()=>import("./seedSearcherNormal-DZ01fpJk.js"),__vite__mapDeps([12,10,9,6,7,1,4,8]))),Pt=b(()=>E(()=>import("./branchingRerolls-CIOs6Z1C.js"),__vite__mapDeps([13,3,1,4,14,15,10,9]))),Et=b(()=>E(()=>import("./cardPaths-G3a-uTsF.js"),__vite__mapDeps([16,17,18,4,19,7,1,10,9]))),Rt=b(()=>E(()=>import("./weeklyExport-qzAD-iHM.js"),__vite__mapDeps([20,21,1,18,4,17,19,7,10,9,3]))),Nt=b(()=>E(()=>import("./weekly-lxzc1d_n.js"),__vite__mapDeps([22,3,1,4,14,21,18]))),Bt=b(()=>E(()=>import("./coffeeEatingTime-SzVwfRIH.js"),[]));b(()=>Te);const It=b(()=>E(()=>import("./GroupSizes-BoyiyvrA.js"),__vite__mapDeps([23,7,1,4,15,10,9]))),xt=b(()=>E(()=>import("./BreakfastAuto-CABqYiIs.js"),[])),Ot=b(()=>E(()=>import("./todo-Dz7V-aSP.js"),[]));b(()=>Promise.resolve(()=>o(N,{})));const Dt=b(()=>E(()=>import("./Dig-BydIxI_1.js"),__vite__mapDeps([24,15,10,9,1,19,3,4]))),Lt=b(()=>E(()=>import("./runsCache-CjJTt6dl.js").then(e=>e.L),__vite__mapDeps([8,9])).then(e=>e.Opportunities)),$t=b(()=>E(()=>import("./runsCache-CjJTt6dl.js").then(e=>e.L),__vite__mapDeps([8,9])).then(e=>e.MergedRecords)),At=b(()=>E(()=>import("./runsCache-CjJTt6dl.js").then(e=>e.L),__vite__mapDeps([8,9])).then(e=>e.RecordsAnalysis)),Mt=b(()=>E(()=>import("./runsCache-CjJTt6dl.js").then(e=>e.L),__vite__mapDeps([8,9])).then(e=>e.BeatenRuns)),Ut=b(()=>E(()=>import("./IceCreamActions-BvEBqghd.js"),[])),Vt=b(()=>E(()=>import("./Update141Notes-DsoifWB0.js"),[])),Ht=b(()=>E(()=>import("./SaveScumCabinetLayouts-ByGD5v22.js"),__vite__mapDeps([25,1,26]))),Wt=()=>o(N,{children:"..."}),qt=b(()=>E(()=>import("./AutoRig-eSM58rYX.js"),__vite__mapDeps([27,15,10,9]))),jt=b(()=>E(()=>import("./CourseOrders-r9GhXFOh.js"),[])),Gt=b(()=>E(()=>import("./largeTableOrder-D3kEbac2.js"),[])),zt=b(()=>E(()=>import("./dinerSpawnTiles-q6S4s2ig.js"),__vite__mapDeps([28,1,4]))),Kt=()=>o(N,{children:[o("div",{children:o(R,{to:"/plateup-set-seed-tools/",children:"<-- All Tools"})}),o(Sa,{})]}),Jt=()=>o(N,{children:[o(Sa,{}),o(Kr,{})]}),Yt=()=>o(ce,{fallback:o(Wt,{}),children:o(Sa,{})});function Qt(){const[e]=qr();return _e(()=>{if(e.has("cards")){const a=e.get("cards").split(",").map(s=>T[s]).filter(s=>s);Ze.value={...Ze.value,seed:e.get("seed")??Ze.value.seed,cards:a}}},[e]),o(N,{children:[o(Ir,{children:o(S,{element:o(Yt,{}),children:o(S,{path:"/plateup-set-seed-tools/",children:[o(S,{index:!0,element:o(Gr,{})}),o(S,{path:"boardSplitNotes.html",element:o(Yr,{})}),!1,o(S,{element:o(Kt,{}),children:[o(S,{path:"equivalentSeeds",element:o(bt,{})}),o(S,{path:"opportunities.html",element:o(Lt,{})}),o(S,{path:"merged-leaderboards.html",element:o($t,{})}),o(S,{path:"surprising-records.html",element:o(At,{})}),o(S,{path:"beaten-runs.html",element:o(Mt,{})}),o(S,{path:"randomRerollManip.html",element:o(Tt,{})}),o(S,{path:"TODO.html",element:o(Ot,{})}),o(S,{element:o(Jt,{}),children:[o(S,{path:"dig.html",element:o(Dt,{})}),o(S,{path:"researchProbabilities.html",element:o(St,{})}),o(S,{path:"breakfast-auto.html",element:o(xt,{})}),o(S,{path:"turbo-seed-searcher.html",element:o(Ct,{})}),o(S,{path:"versus-seeds.html",element:o(wt,{})}),o(S,{path:"normal-seed-searcher.html",element:o(kt,{})}),o(S,{path:"branching-rerolls.html",element:o(Pt,{})}),o(S,{path:"build-a-rig.html",element:o(qt,{})}),o(S,{path:"card-paths.html",element:o(Et,{})}),o(S,{path:"weekly-export.html",element:o(Rt,{})}),o(S,{path:"weekly.html",element:o(Nt,{})}),o(S,{path:"coffee.html",element:o(Bt,{})}),o(S,{path:"ice-cream.html",element:o(Ut,{})}),o(S,{path:"141-notes.html",element:o(Vt,{})}),o(S,{path:"course-orders.html",element:o(jt,{})}),o(S,{path:"tables.html",element:o(Gt,{})}),o(S,{path:"diner-spawn-tiles.html",element:o(zt,{})}),o(S,{path:"scumming.html",element:o(Ht,{})}),o(S,{path:"seed-info.html",element:o(It,{})})]})]})]})})}),o("div",{class:"blankPadding"})]})}fe(o(Ur,{children:o(Qt,{})}),document.getElementById("app"));export{rn as A,ke as B,sn as C,J as D,da as E,U as F,ut as G,yt as H,it as I,ua as J,R as L,en as R,al as S,ae as T,Fe as U,j as _,tn as a,o as b,on as c,sl as d,nn as e,ot as f,N as g,pe as h,X as i,an as j,Zt as k,nt as l,lt as m,T as n,rt as o,_e as p,tt as q,ln as r,Ze as s,pa as t,ul as u,zr as v,Vl as w,gt as x,te as y,Za as z};
