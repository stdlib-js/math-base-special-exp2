<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# exp2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base `2` [exponential function][exponential-function].



<section class="usage">

## Usage

```javascript
import exp2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp2@deno/mod.js';
```

#### exp2( x )

Evaluates the base `2` [exponential function][exponential-function].

```javascript
var v = exp2( 3.0 );
// returns 8.0

v = exp2( -9.0 );
// returns ~0.002

v = exp2( 0.0 );
// returns 1.0

v = exp2( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import exp2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp2@deno/mod.js';

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( '2^%d = %d', x, exp2( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/exp10`][@stdlib/math/base/special/exp10]</span><span class="delimiter">: </span><span class="description">base 10 exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">binary logarithm (base 2).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-exp2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-exp2

[test-image]: https://github.com/stdlib-js/math-base-special-exp2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-exp2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-exp2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-exp2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-exp2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-exp2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-exp2/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-exp2/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-exp2/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-exp2/blob/main/branches.md

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math-base-special-exp/tree/deno

[@stdlib/math/base/special/exp10]: https://github.com/stdlib-js/math-base-special-exp10/tree/deno

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math-base-special-log2/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
