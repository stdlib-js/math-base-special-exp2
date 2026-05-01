"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=i(function(X,n){
function q(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}n.exports=q
});var s=i(function(d,v){
function f(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}v.exports=f
});var l=i(function(B,p){
var c=require('@stdlib/constants-float64-max-base2-exponent/dist'),E=require('@stdlib/constants-float64-min-base2-exponent/dist'),N=require('@stdlib/math-base-special-round/dist'),o=require('@stdlib/math-base-special-ldexp/dist'),_=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/constants-float64-pinf/dist'),y=a(),O=s();function P(r){var e,u,t;return _(r)?r:r>c?A:r<E?0:(t=N(r),r-=t,u=r*r,e=r*y(u),r=e/(O(u)-e),r=1+o(r,1),o(r,t))}p.exports=P
});var T=l();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
