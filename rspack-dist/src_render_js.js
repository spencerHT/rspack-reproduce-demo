"use strict";
(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./src/a.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  A: function() { return A; },
  A2: function() { return A2; }
});
const A = '1';
const A2 = '2';

}),
"./src/b.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.A; },
  A: function() { return /* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.A; },
  A2: function() { return /* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.A2; }
});
/* harmony import */var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./src/a.js");





}),
"./src/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/render.css");
/* harmony import */var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ "./src/b.js");



function render() {
    console.log(_b_js__WEBPACK_IMPORTED_MODULE_1__.A);
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}

}),
"./src/render.css": (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__.r(module.exports = {});


}),

}]);