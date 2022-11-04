// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t=Math.round,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function e(t){return t!=t}function o(t){return t===n||t===r}var i,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,f=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"";i=u&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return a.call(t);r=t[c],i=c,n=null!=(o=t)&&f.call(o,i);try{t[c]=void 0}catch(n){return a.call(t)}return e=a.call(t),n?t[c]=r:delete t[c],e}:function(t){return a.call(t)};var l,y=i,p="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(p&&r instanceof Uint32Array||"[object Uint32Array]"===y(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")};var d,A=l,_="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;d=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),r=n,t=(_&&r instanceof Float64Array||"[object Float64Array]"===y(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?w:function(){throw new Error("not implemented")};var m,h=d,U="function"==typeof Uint8Array,g="function"==typeof Uint8Array?Uint8Array:null,j="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var t,n,r;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,256,257]),r=n,t=(U&&r instanceof Uint8Array||"[object Uint8Array]"===y(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var I,O=m,S="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,65536,65537]),r=n,t=(S&&r instanceof Uint16Array||"[object Uint16Array]"===y(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T,N={uint16:I,uint8:O};(T=new N.uint16(1))[0]=4660;var H,G,P=52===new N.uint8(T.buffer)[0];!0===P?(H=1,G=0):(H=0,G=1);var x={HIGH:H,LOW:G},L=new h(1),V=new A(L.buffer),W=x.HIGH,k=x.LOW;function M(t,n){return L[0]=n,t[0]=V[W],t[1]=V[k],t}function Y(t,n){return 1===arguments.length?M([0,0],t):M(t,n)}var C,q,z=!0===P?1:0,B=new h(1),D=new A(B.buffer);function J(t){return B[0]=t,D[z]}!0===P?(C=1,q=0):(C=0,q=1);var K={HIGH:C,LOW:q},Q=new h(1),R=new A(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,n){return R[X]=t,R[Z]=n,Q[0]}var tt,nt=[0,0],rt="function"==typeof Object.defineProperty?Object.defineProperty:null,et=Object.defineProperty,ot=Object.prototype,it=ot.toString,ut=ot.__defineGetter__,at=ot.__defineSetter__,ft=ot.__lookupGetter__,ct=ot.__lookupSetter__;function lt(t,n,r,i){return e(t)||o(t)?(n[i]=t,n[i+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[i]=4503599627370496*t,n[i+r]=-52,n):(n[i]=t,n[i+r]=0,n)}tt=function(){try{return rt({},"x",{}),!0}catch(t){return!1}}()?et:function(t,n,r){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===it.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===it.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(ft.call(t,n)||ct.call(t,n)?(e=t.__proto__,t.__proto__=ot,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ut&&ut.call(t,n,r.get),u&&at&&at.call(t,n,r.set),t},tt((function(t){return lt(t,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:lt});var yt=[0,0],pt=[0,0];function bt(t,i){var u,a,f,c,l;return 0===i||0===t||e(t)||o(t)?t:(lt(t,yt,1,0),i+=yt[1],i+=function(t){var n=J(t);return(n=(2146435072&n)>>>20)-1023|0}(t=yt[0]),i<-1074?(f=t,Y(nt,0),c=nt[0],c&=2147483647,l=J(f),$(c|=l&=2147483648,nt[1])):i>1023?t<0?r:n:(i<=-1023?(i+=52,a=2220446049250313e-31):a=1,Y(pt,t),u=pt[0],u&=2148532223,a*$(u|=i+1023<<20,pt[1])))}return function(r){var o,i,u;return e(r)?r:r>1023?n:r<-1022?0:(o=(r-=u=t(r))*function(t){return 0===t?1513.906801156151:1513.906801156151+t*(20.202065669316532+.023093347705734523*t)}(i=r*r),r=1+bt(r=o/(function(t){return 0===t?4368.211668792106:4368.211668792106+t*(233.1842117223149+1*t)}(i)-o),1),bt(r,u))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).exp2=n();
//# sourceMappingURL=browser.js.map
