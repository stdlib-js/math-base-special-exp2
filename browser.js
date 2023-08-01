// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t=Math.round,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function e(t){return t!=t}function o(t){return t===n||t===r}var i="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty,a=Object.prototype,f=a.toString,c=a.__defineGetter__,l=a.__defineSetter__,y=a.__lookupGetter__,p=a.__lookupSetter__,b=function(){try{return i({},"x",{}),!0}catch(t){return!1}}()?u:function(t,n,r){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(y.call(t,n)||p.call(t,n)?(e=t.__proto__,t.__proto__=a,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(t,n,r.get),u&&l&&l.call(t,n,r.set),t};function v(t,n,r){b(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,_=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",m=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return A.call(t);r=t[w],i=w,n=null!=(o=t)&&_.call(o,i);try{t[w]=void 0}catch(n){return A.call(t)}return e=A.call(t),n?t[w]=r:delete t[w],e}:function(t){return A.call(t)},U="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(U&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,I=s,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;j=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),r=n,t=(O&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var F,T=j,N="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,n,r;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),r=n,t=(N&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P,x=F,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),r=n,t=(L&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var k,M={uint16:P,uint8:x};(k=new M.uint16(1))[0]=4660;var Y,C,q=52===new M.uint8(k.buffer)[0];!0===q?(Y=1,C=0):(Y=0,C=1);var z={HIGH:Y,LOW:C},B=new T(1),D=new I(B.buffer),J=z.HIGH,K=z.LOW;function Q(t,n,r,e){return B[0]=t,n[e]=D[J],n[e+r]=D[K],n}function R(t){return Q(t,[0,0],1,0)}v(R,"assign",Q);var X,Z,$=!0===q?1:0,tt=new T(1),nt=new I(tt.buffer);function rt(t){return tt[0]=t,nt[$]}!0===q?(X=1,Z=0):(X=0,Z=1);var et={HIGH:X,LOW:Z},ot=new T(1),it=new I(ot.buffer),ut=et.HIGH,at=et.LOW;function ft(t,n){return it[ut]=t,it[at]=n,ot[0]}var ct=[0,0];function lt(t,n,r,i){return e(t)||o(t)?(n[i]=t,n[i+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[i]=4503599627370496*t,n[i+r]=-52,n):(n[i]=t,n[i+r]=0,n)}v((function(t){return lt(t,[0,0],1,0)}),"assign",lt);var yt=[0,0],pt=[0,0];function bt(t,i){var u,a,f,c,l,y;return 0===i||0===t||e(t)||o(t)?t:(lt(t,yt,1,0),i+=yt[1],i+=function(t){var n=rt(t);return(n=(2146435072&n)>>>20)-1023|0}(t=yt[0]),i<-1074?(f=0,c=t,R.assign(f,ct,1,0),l=ct[0],l&=2147483647,y=rt(c),ft(l|=y&=2147483648,ct[1])):i>1023?t<0?r:n:(i<=-1023?(i+=52,a=2220446049250313e-31):a=1,R.assign(t,pt,1,0),u=pt[0],u&=2148532223,a*ft(u|=i+1023<<20,pt[1])))}return function(r){var o,i,u;return e(r)?r:r>1023?n:r<-1022?0:(o=(r-=u=t(r))*function(t){return 0===t?1513.906801156151:1513.906801156151+t*(20.202065669316532+.023093347705734523*t)}(i=r*r),r=1+bt(r=o/(function(t){return 0===t?4368.211668792106:4368.211668792106+t*(233.1842117223149+1*t)}(i)-o),1),bt(r,u))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).exp2=n();
//# sourceMappingURL=browser.js.map
