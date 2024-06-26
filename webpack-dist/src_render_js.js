"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_render_js"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   A2: () => (/* binding */ A2)
/* harmony export */ });
const A = '1';
const A2 = '2';

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   A2: () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.A2)
/* harmony export */ });
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./src/a.js");





/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/render.css");
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ "./src/b.js");



function render() {
    console.log(_b_js__WEBPACK_IMPORTED_MODULE_1__.A);
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}

/***/ })

}]);