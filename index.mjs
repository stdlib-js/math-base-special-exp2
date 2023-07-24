// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@v0.0.8-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";function r(r){var d,o,a;return i(r)?r:r>s?m:r<t?0:(d=(r-=a=e(r))*function(s){return 0===s?1513.906801156151:1513.906801156151+s*(20.202065669316532+.023093347705734523*s)}(o=r*r),r=d/(function(s){return 0===s?4368.211668792106:4368.211668792106+s*(233.1842117223149+1*s)}(o)-d),r=1+n(r,1),n(r,a))}export{r as default};
//# sourceMappingURL=index.mjs.map
