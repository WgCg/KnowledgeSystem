webpackJsonp([2],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/hoist/utilA.js
var utilA = __webpack_require__(0);

// CONCATENATED MODULE: ./src/hoist/utilB.js
const utilB = 'util B';
function funcB() {
  console.log('func B');
}
// CONCATENATED MODULE: ./src/hoist/pageB.js



funcB();
__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 3)).then(function(utilC) {
  console.log(utilC);
})

/***/ })

},[2]);