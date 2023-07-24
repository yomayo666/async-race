/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/trimg.jpg */ \"./src/assets/trimg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\nbody {\n  box-sizing: border-box;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: 100vw;\n  background-color: rgba(6, 61, 156, 0.989);\n}\n\n.buttons-game-panel {\n  margin-top: 5px;\n}\n\n.buttons-game-panel > * {\n  text-align: center;\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0.2rem 0.77rem; /* Поля вокруг текста */\n  border-radius: 3px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.race:hover, .reset:hover, .generate:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.race:disabled, .reset:disabled, .generate:disabled {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.race:active, .reset:active, .generate:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.creta-div {\n  margin-top: 5px;\n}\n\n.create-color {\n  height: 21.25px;\n}\n\n.create {\n  display: inline-block; /* Строчно-блочный элемент */\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0.2rem 0.5rem; /* Поля вокруг текста */\n  border-radius: 3px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.create:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.create:disabled {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.create:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.left-or-right {\n  margin-top: 5px;\n  width: 285px;\n  display: flex;\n}\n\n.left-or-right > * {\n  flex: 1;\n  margin-left: 3px;\n  text-align: center;\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  border-radius: 3px; /* Скругляем уголки */\n  cursor: pointer;\n} /*  */\n.left:hover, .right:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.left:active, .right:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.left:disabled, .right:disabled {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.main, .winner {\n  display: inline-block; /* Строчно-блочный элемент */\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0.25rem 1.7rem; /* Поля вокруг текста */\n  text-decoration: none; /* Убираем подчёркивание */\n  border-radius: 1px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.main:hover, .winner:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.main:active, .winner:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.main:disabled, .winner:disabled {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.update-div {\n  margin-top: 2px;\n}\n\n.update-color {\n  height: 21.25px;\n}\n\n.update {\n  display: inline-block; /* Строчно-блочный элемент */\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0.2rem 0.5rem; /* Поля вокруг текста */\n  border-radius: 3px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.update:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.update:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.counter-garag {\n  background-color: rgba(10, 74, 130, 0.5137254902);\n  width: 285px;\n  margin-bottom: 5px;\n}\n\n.div-garage, .div-page {\n  margin-top: 5px;\n  color: white;\n}\n\n.div-garage, .div-page {\n  font-size: 1.1em;\n}\n\n.game-content {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.232);\n}\n\n.game-content button {\n  margin: 0;\n  padding: 0;\n  margin-left: 2px;\n  text-align: center;\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0rem 1%; /* Поля вокруг текста */\n  border-radius: 3px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.game-content button:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.game-content button:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.game-content button:disabled {\n  background-color: rgba(255, 0, 0, 0.623);\n}\n\n.tractor-svg {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  margin-left: 10%;\n  margin-top: 25px;\n  height: 30px;\n}\n\n.game-content .name-car-in-game {\n  margin-left: 10px;\n}\n\n.trakt-container {\n  position: relative;\n}\n\n.game-content .flag {\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 80%;\n  border-left: 2px solid black;\n  margin-top: 19px;\n  padding-bottom: 20px;\n}\n\nhr {\n  margin: 0;\n  padding: 0;\n}\n\n.game-top {\n  height: 25px;\n}\n\n.game-bot {\n  height: 25px;\n}\n\n.winner-panel {\n  display: none;\n}\n\n.show-winner {\n  position: fixed;\n  top: 50%;\n  left: 40%;\n}\n\nh2 {\n  display: none;\n  color: #fff;\n  text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;\n}\n\n.table-winner {\n  color: white;\n  font-weight: 600;\n}\n\nth {\n  color: black;\n  cursor: pointer;\n  font-weight: 700;\n}\n\ntd {\n  padding-top: 15px;\n  padding-left: 5px;\n}\n\nth:hover {\n  color: rgba(255, 0, 0, 0.623);\n}\n\n.left-winner, .right-winner {\n  width: 140px;\n  display: inline-block; /* Строчно-блочный элемент */\n  background: rgba(10, 74, 130, 0.5137254902); /* Серый цвет фона */\n  color: #fff; /* Белый цвет текста */\n  padding: 0.25rem 3rem; /* Поля вокруг текста */\n  text-decoration: none; /* Убираем подчёркивание */\n  border-radius: 1px; /* Скругляем уголки */\n  cursor: pointer;\n}\n\n.left-winner:hover, .right-winner:hover {\n  background-color: rgba(0, 0, 255, 0.616);\n}\n\n.left-winner:active, .right-winner:active {\n  background-color: rgba(255, 0, 0, 0.623);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://asyncrace/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://asyncrace/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://asyncrace/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://asyncrace/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://asyncrace/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://asyncrace/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _assets_trimg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/trimg.jpg */ \"./src/assets/trimg.jpg\");\n\r\n\r\n\n\n//# sourceURL=webpack://asyncrace/./src/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/animation */ \"./src/js/main/animation.js\");\n/* harmony import */ var _main_randerCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/randerCars */ \"./src/js/main/randerCars.js\");\n/* harmony import */ var _main_changePages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/changePages */ \"./src/js/main/changePages.js\");\n/* harmony import */ var _main_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/create */ \"./src/js/main/create.js\");\n/* harmony import */ var _main_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/brand */ \"./src/js/main/brand.js\");\n/* harmony import */ var _main_randomCars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/randomCars */ \"./src/js/main/randomCars.js\");\n/* harmony import */ var _main_leftRightCars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/leftRightCars */ \"./src/js/main/leftRightCars.js\");\n/* harmony import */ var _main_carsGarageCounters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/carsGarageCounters */ \"./src/js/main/carsGarageCounters.js\");\n/* harmony import */ var _main_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/select */ \"./src/js/main/select.js\");\n/* harmony import */ var _main_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/update */ \"./src/js/main/update.js\");\n/* harmony import */ var _main_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/delete */ \"./src/js/main/delete.js\");\n/* harmony import */ var _main_addHungridCars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/addHungridCars */ \"./src/js/main/addHungridCars.js\");\n/* harmony import */ var _main_generateColor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/generateColor */ \"./src/js/main/generateColor.js\");\n/* harmony import */ var _main_startStop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/startStop */ \"./src/js/main/startStop.js\");\n/* harmony import */ var _main_race__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/race */ \"./src/js/main/race.js\");\n/* harmony import */ var _main_reset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/reset */ \"./src/js/main/reset.js\");\n/* harmony import */ var _main_availabilityLeftRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/availabilityLeftRight */ \"./src/js/main/availabilityLeftRight.js\");\n/* harmony import */ var _main_startGame__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/startGame */ \"./src/js/main/startGame.js\");\n/* harmony import */ var _winners_thereIsNewWinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./winners/thereIsNewWinner */ \"./src/js/winners/thereIsNewWinner.js\");\n/* harmony import */ var _winners_addWinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./winners/addWinner */ \"./src/js/winners/addWinner.js\");\n/* harmony import */ var _main_innerCar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/innerCar */ \"./src/js/main/innerCar.js\");\n/* harmony import */ var _winners_findWinnerCar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./winners/findWinnerCar */ \"./src/js/winners/findWinnerCar.js\");\n/* harmony import */ var _winners_updateWinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./winners/updateWinner */ \"./src/js/winners/updateWinner.js\");\n/* harmony import */ var _winnersPanel_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./winnersPanel/getWinnerIdWinsTime */ \"./src/js/winnersPanel/getWinnerIdWinsTime.js\");\n/* harmony import */ var _winnersPanel_sortWinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./winnersPanel/sortWinner */ \"./src/js/winnersPanel/sortWinner.js\");\n/* harmony import */ var _winners_startFindWinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./winners/startFindWinner */ \"./src/js/winners/startFindWinner.js\");\n/* harmony import */ var _winnersPanel_leftRightWinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./winnersPanel/leftRightWinner */ \"./src/js/winnersPanel/leftRightWinner.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main/addHungridCars.js":
/*!***************************************!*\
  !*** ./src/js/main/addHungridCars.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/js/main/create.js\");\n/* harmony import */ var _carsGarageCounters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carsGarageCounters */ \"./src/js/main/carsGarageCounters.js\");\n\r\n\r\ndocument.querySelector('.generate').addEventListener('click', e => {\r\n    (0,_carsGarageCounters__WEBPACK_IMPORTED_MODULE_1__.carsPlusOrMinus)(100)\r\n    for(let i = 0; i < 100; i++){\r\n        (0,_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(100)\r\n    }\r\n})\n\n//# sourceURL=webpack://asyncrace/./src/js/main/addHungridCars.js?");

/***/ }),

/***/ "./src/js/main/animation.js":
/*!**********************************!*\
  !*** ./src/js/main/animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationCar)\n/* harmony export */ });\n/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startStop */ \"./src/js/main/startStop.js\");\n/* harmony import */ var _availabilityLeftRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availabilityLeftRight */ \"./src/js/main/availabilityLeftRight.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset */ \"./src/js/main/reset.js\");\n/* harmony import */ var _winners_startFindWinner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../winners/startFindWinner.js */ \"./src/js/winners/startFindWinner.js\");\n\r\n\r\n\r\n\r\nfunction animationCar(spid, id, race){\r\n    let start = Date.now(); \r\n    let timeLimit = 500000 / spid\r\n    let timer = setInterval(function() {\r\n        let timePassed = Date.now() - start;\r\n        if (timePassed >= timeLimit) {\r\n          clearInterval(timer);\r\n          (0,_availabilityLeftRight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n          if(race === 'race'){\r\n            console.log(id)\r\n            ;(0,_winners_startFindWinner_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, timeLimit)\r\n          }\r\n         \r\n          return;\r\n        }\r\n        //console.log(timer)\r\n        let distPera = 1500 / timeLimit\r\n        draw(distPera);\r\n        document.querySelector('.reset').addEventListener('click', e => {\r\n          (0,_reset__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(timer)\r\n      })\r\n        document.querySelector(`.B[data-id=\"${id}\"]`).addEventListener('click', e => {\r\n            document.querySelector(`.tractor-svg[data-id=\"${id}\"]`).style.left = 1 + '%'\r\n            document.querySelector(`.B[data-id=\"${e.target.dataset.id}\"]`).disabled = true\r\n            document.querySelector(`.A[data-id=\"${e.target.dataset.id}\"]`).disabled = false\r\n            clearInterval(timer)\r\n            ;(0,_availabilityLeftRight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        })\r\n      }, 20);\r\n      let i = 0\r\n      return timer\r\n      function draw(distPera) {  \r\n        i += distPera\r\n        document.querySelector(`.tractor-svg[data-id=\"${id}\"]`).style.left = i + '%'\r\n      }\r\n      \r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/animation.js?");

/***/ }),

/***/ "./src/js/main/availabilityLeftRight.js":
/*!**********************************************!*\
  !*** ./src/js/main/availabilityLeftRight.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ avail)\n/* harmony export */ });\nfunction avail(){\r\n    const nodeList = document.querySelectorAll(\"button.B\")\r\n    let count = 0\r\n    for (let i = 0; i < nodeList.length; i++) {\r\n        if(nodeList[i].disabled === true){\r\n            //console.log(nodeList[i])\r\n            //console.log(nodeList[i].disabled === true)\r\n            count += 1\r\n            //console.log(count)\r\n        }if(count === nodeList.length){\r\n            //console.log('ZZZZZZZZZZZZZZZZZ')\r\n            document.querySelector('.left').disabled = false;\r\n            document.querySelector('.right').disabled = false;\r\n            document.querySelector('.create').disabled = false;\r\n            document.querySelector('.race').disabled = false;\r\n            document.querySelector('.remove').disabled = false;\r\n            document.querySelector('.show-winner').style.display = 'none'\r\n            let removeList = document.querySelectorAll(\"button.remove\")\r\n            for (let i = 0; i < removeList.length; i++) {\r\n                removeList[i].disabled = false\r\n        \r\n           }\r\n      }\r\n    }\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/availabilityLeftRight.js?");

/***/ }),

/***/ "./src/js/main/brand.js":
/*!******************************!*\
  !*** ./src/js/main/brand.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   brand: () => (/* binding */ brand)\n/* harmony export */ });\nconst brand = {\r\n    Audy: ['A8', 'A6', 'A4', 'A5', 'S5', 'RS6', 'A3', 'A7', 'Q8', 'Q7'],\r\n    Honda: ['Pilot', 'CR-V', 'Accord', 'Avancier', 'Capa', 'City', 'Civic', 'Concerto'],\r\n    Lada: ['Vesta', 'Cross', 'Sport', 'Granta', '2131', 'XRAY', '2114', '2121', '2110', 'Niva'],\r\n    Mitsubishi: ['Eclipse', 'ASX', 'Pajero', 'Outlander'],\r\n    Skoda: ['Rapid', 'Superb', 'Octavia', 'Koroq', 'Kodiaq'],\r\n    Toyota: ['Supra', 'Camry', 'Corolla', 'CH-R', 'RAV4', 'Highlander'],\r\n    Nissan:['Ariya','Qashqai', 'Murano', 'Terrano', 'X-Trail'],\r\n    Mazda: ['6', 'CX-30', 'CX-9', 'CX-5'],\r\n    Hyundai: ['Solaris', 'Elantra', 'Sonata', 'i30'],\r\n    BMW: ['M2', '7', '8', '3', '4', 'M5', 'M8'],\r\n    Ford: ['Custom', 'Tourneo', 'Transit', 'Bronco', 'Cougar', 'Contour'],\r\n    Kia: ['K900', 'Rio', 'Carato', 'K5', 'Stinger', 'Picanto'],\r\n    Renault: ['Logan', 'Sandero', 'Arcana', 'Kaptur', 'Duster']\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/brand.js?");

/***/ }),

/***/ "./src/js/main/carsGarageCounters.js":
/*!*******************************************!*\
  !*** ./src/js/main/carsGarageCounters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carsPlusOrMinus: () => (/* binding */ carsPlusOrMinus)\n/* harmony export */ });\nasync function carsGarageCounter(){\r\n        const res = await fetch(`http://127.0.0.1:3000/garage`);\r\n        const rsolt = await res.json();\r\n        document.querySelector('#garage-change').textContent = ` ${rsolt.length}`\r\n        document.querySelector('#garage-change2').textContent = ` ${rsolt.length}`\r\n}\r\ncarsGarageCounter()\r\n\r\nfunction carsPlusOrMinus(num){\r\n    let number = document.querySelector('#garage-change').textContent\r\n    let newValue = Number(number) + num\r\n    document.querySelector('#garage-change').textContent = ` ${newValue}`\r\n    document.querySelector('#garage-change2').textContent = ` ${newValue}`\r\n}       \n\n//# sourceURL=webpack://asyncrace/./src/js/main/carsGarageCounters.js?");

/***/ }),

/***/ "./src/js/main/changePages.js":
/*!************************************!*\
  !*** ./src/js/main/changePages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/js/main/create.js\");\n\r\ndocument.addEventListener('click', e => {\r\n    if(e.target.tagName !== 'BUTTON') return\r\n    if(e.target.className === 'winner'){\r\n        winner()\r\n    }else if(e.target.className === 'main'){\r\n        main()\r\n    }\r\n})\r\nfunction main(){\r\n    document.querySelector('.game-panel').style.display = 'block'\r\n    document.querySelector('.main').disabled = true;\r\n    document.querySelector('.winner').disabled = false;\r\n    document.querySelector('.game-content').style.display = 'block'\r\n    document.querySelector('.winner-panel').style.display = 'none'\r\n\r\n}\r\nfunction winner(){\r\n    document.querySelector('.game-panel').style.display = 'none'\r\n    document.querySelector('.main').disabled = false;\r\n    document.querySelector('.winner').disabled = true;\r\n    document.querySelector('.game-content').style.display = 'none'\r\n    document.querySelector('.winner-panel').style.display = 'block'\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/changePages.js?");

/***/ }),

/***/ "./src/js/main/create.js":
/*!*******************************!*\
  !*** ./src/js/main/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _carsGarageCounters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carsGarageCounters */ \"./src/js/main/carsGarageCounters.js\");\n/* harmony import */ var _randomCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomCars */ \"./src/js/main/randomCars.js\");\n/* harmony import */ var _randerCars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randerCars */ \"./src/js/main/randerCars.js\");\n/* harmony import */ var _generateColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateColor */ \"./src/js/main/generateColor.js\");\n\r\n\r\n\r\n\r\ndocument.querySelector('.create').addEventListener('click', e => {\r\n      (0,_carsGarageCounters__WEBPACK_IMPORTED_MODULE_0__.carsPlusOrMinus)(1)\r\n      create()\r\n})\r\nasync function create(arg = 1){\r\n    let color = document.querySelector('.create-color').value\r\n    let name = document.querySelector('.create-text').value\r\n    console.log(arg)\r\n    //console.log(color)\r\n    //console.log(brand[Kia])\r\n        let data = {    \r\n            name: name === ''? (0,_randomCars__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(): name, \r\n            color: arg === 100? (0,_generateColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(): color\r\n        }\r\n        const response = await fetch('http://127.0.0.1:3000/garage', {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json'\r\n          },\r\n          body: JSON.stringify(data)\r\n        });\r\n        document.querySelector('.create-text').value = ''\r\n        document.querySelector('.show-winner').style.display = 'none'\r\n        let i = parseInt(localStorage.getItem(\"myKeyPage\"));\r\n        (0,_randerCars__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i)\r\n        //console.log(m); \r\n      \r\n}   \r\n\r\n/* // Определяем функцию которая принимает в качестве параметров url и данные которые необходимо обработать:\r\nconst postData = async (url = '', data = {}) => {\r\n    // Формируем запрос\r\n    const response = await fetch(url, {\r\n      // Метод, если не указывать, будет использоваться GET\r\n      method: 'POST',\r\n     // Заголовок запроса\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      },\r\n      // Данные\r\n      body: JSON.stringify(data)\r\n    });\r\n    return response.json(); \r\n  }\r\n\r\n\r\npostData('https://example.com/answer', { answer: 42 })\r\n  .then((data) => {\r\n    console.log(data); \r\n  }); */\n\n//# sourceURL=webpack://asyncrace/./src/js/main/create.js?");

/***/ }),

/***/ "./src/js/main/delete.js":
/*!*******************************!*\
  !*** ./src/js/main/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteCar)\n/* harmony export */ });\n/* harmony import */ var _carsGarageCounters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carsGarageCounters */ \"./src/js/main/carsGarageCounters.js\");\n/* harmony import */ var _randerCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randerCars */ \"./src/js/main/randerCars.js\");\n/* harmony import */ var _winners_deleteWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winners/deleteWinner */ \"./src/js/winners/deleteWinner.js\");\n\r\n\r\n\r\nasync function deleteCar(id){\r\n        const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {\r\n          method: 'DELETE'\r\n        });\r\n        document.querySelector('.show-winner').style.display = 'none'\r\n        ;(0,_carsGarageCounters__WEBPACK_IMPORTED_MODULE_0__.carsPlusOrMinus)(-1)\r\n        let i = parseInt(localStorage.getItem(\"myKeyPage\"))\r\n        ;(0,_randerCars__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i)\r\n        ;(0,_winners_deleteWinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id)\r\n        \r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/delete.js?");

/***/ }),

/***/ "./src/js/main/generateColor.js":
/*!**************************************!*\
  !*** ./src/js/main/generateColor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateColor)\n/* harmony export */ });\nfunction generateColor(){\r\n    return '#' + Math.floor(Math.random() * 16777215).toString(16)\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/generateColor.js?");

/***/ }),

/***/ "./src/js/main/innerCar.js":
/*!*********************************!*\
  !*** ./src/js/main/innerCar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ innerCar)\n/* harmony export */ });\nfunction innerCar(key, name, color){\r\n    let add = `<div class=\"trakt-container${key}\"></div>`\r\n    document.querySelector('.game-content').insertAdjacentHTML('beforeend', add)\r\n    add = '<svg class=\"flag\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 2\"><path d=\"m0 0h3v1H0\" fill=\"#FFD700\"/><path d=\"m0 1h3v1H0\" fill=\"#0057B7\"/></svg>'\r\n    add += `<svg data-id='${key}' id=\"col${key}\"\" class=\"tractor-svg\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z\"/></svg>`\r\n    add += `<div class=\"game-top\" id=\"game-top${key}\"\"></div>`\r\n    add += `<div class=\"game-bot\" id=\"game-bot${key}\"></div>`\r\n    add += `<hr>`\r\n    document.querySelector(`.trakt-container${key}`).insertAdjacentHTML('beforeend', add)\r\n    add =  `<button data-id='${key}' data-name='${name}' data-color='${color}' class=\"select\" >SELECT</button>`\r\n    add += `<button data-id='${key}' class=\"remove\">REMOVE</button>`\r\n    add += `<span class=\"name-car-in-game\">${name}</span>`\r\n    document.querySelector(`#game-top${key}`).insertAdjacentHTML('beforeend', add)\r\n    document.querySelector(`#game-top${key}`).style.marginTop = \"5px\"\r\n    add = `<button data-id='${key}' class=\"A\">A</button>`\r\n    add +=`<button data-id='${key}' class=\"B\" disabled>B</button>`\r\n    document.querySelector(`#game-bot${key}`).insertAdjacentHTML('beforeend', add)\r\n    document.querySelector(`#game-bot${key}`).style.marginTop = \"10px\"\r\n    document.querySelector(`#col${key}`).style.fill = `${color}`;\r\n  }\n\n//# sourceURL=webpack://asyncrace/./src/js/main/innerCar.js?");

/***/ }),

/***/ "./src/js/main/leftRightCars.js":
/*!**************************************!*\
  !*** ./src/js/main/leftRightCars.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ leftOrRight)\n/* harmony export */ });\n/* harmony import */ var _randerCars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randerCars */ \"./src/js/main/randerCars.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ \"./src/js/main/reset.js\");\n\r\n\r\nfunction leftOrRight(res){\r\n    //console.log(i)\r\n    document.querySelector('.left').addEventListener('click', e => {\r\n        let i = parseInt(localStorage.getItem(\"myKeyPage\"))\r\n        if(i > 1){\r\n            (0,_reset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res)\r\n            ;(0,_randerCars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i -= 1)\r\n            document.querySelector('#page-change1').textContent = ` #${i}`\r\n            //console.log(i)\r\n            localStorage.setItem(\"myKeyPage\",JSON.stringify(i))\r\n        }\r\n    })\r\n    document.querySelector('.right').addEventListener('click', e => {\r\n        let i = parseInt(localStorage.getItem(\"myKeyPage\"))\r\n        ;(0,_reset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res)\r\n        ;(0,_randerCars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i += 1)\r\n        //console.log(i)\r\n        document.querySelector('#page-change1').textContent = ` #${i}`\r\n        localStorage.setItem(\"myKeyPage\",JSON.stringify(i))\r\n    })\r\n    //console.log(parseInt(localStorage.getItem(\"myKey\")))\r\n\r\n}leftOrRight()\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/main/leftRightCars.js?");

/***/ }),

/***/ "./src/js/main/race.js":
/*!*****************************!*\
  !*** ./src/js/main/race.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startStop */ \"./src/js/main/startStop.js\");\n/* harmony import */ var _winners_startFindWinner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winners/startFindWinner.js */ \"./src/js/winners/startFindWinner.js\");\n\r\n\r\ndocument.querySelector('.race').addEventListener('click', e => {\r\n    _winners_startFindWinner_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isRun = false\r\n    document.querySelector(`.left`).disabled = true\r\n    document.querySelector(`.right`).disabled = true\r\n    document.querySelector(`.race`).disabled = true\r\n    document.querySelector(`.create`).disabled = true\r\n    const nodeList = document.querySelectorAll(`.A`)\r\n    for (let i = 0; i < nodeList.length; i++) {\r\n        let m = nodeList[i].dataset.id\r\n        document.querySelector(`.remove[data-id=\"${m}\"]`).disabled = true\r\n        document.querySelector(`.A[data-id=\"${m}\"]`).disabled = true\r\n        document.querySelector(`.B[data-id=\"${m}\"]`).disabled = false\r\n        ;(0,_startStop__WEBPACK_IMPORTED_MODULE_0__.staringStopping)(m,'A', 'race')\r\n    }\r\n})  \r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/main/race.js?");

/***/ }),

/***/ "./src/js/main/randerCars.js":
/*!***********************************!*\
  !*** ./src/js/main/randerCars.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCars)\n/* harmony export */ });\n/* harmony import */ var _innerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./innerCar */ \"./src/js/main/innerCar.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ \"./src/js/main/remove.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ \"./src/js/main/select.js\");\n/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startStop */ \"./src/js/main/startStop.js\");\n\r\n\r\n\r\n\r\nasync function renderCars(arg=1){\r\n        const res = await fetch(`http://127.0.0.1:3000/garage?_limit=7&_page=${arg}`);\r\n        const rsolt = await res.json();\r\n        \r\n        //document.querySelector('#page-change2').textContent = ` #${arg}`\r\n        //console.log(rsolt)\r\n        document.querySelector('.game-content').innerHTML = \"\"\r\n        for(let key in rsolt){\r\n          ;(0,_innerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rsolt[key].id, rsolt[key].name, rsolt[key].color)\r\n     \r\n        }\r\n        document.querySelector('.update-text').value = \"\";\r\n        (0,_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        ;(0,_remove__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        ;(0,_startStop__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    \r\n        //updateClick(6)\r\n        //updateClick(3)\r\n    }\r\n\r\n\r\n\r\n          //updateClick(val)\r\n  //console.log(nodeList[i])\r\n/*   }    if(isNaN(parseInt(localStorage.getItem(\"myKeyId\")))){\r\n    renderCars(i)\r\n}else{\r\n    renderCars(parseInt(localStorage.getItem(\"myKeyPage\"))\r\n} */\r\n/* function updateClick(val){\r\n  const nevVal = val\r\n  document.querySelector('.update').addEventListener('click', e => {\r\n     console.log(nevVal)\r\n  })\r\n} */\n\n//# sourceURL=webpack://asyncrace/./src/js/main/randerCars.js?");

/***/ }),

/***/ "./src/js/main/randomCars.js":
/*!***********************************!*\
  !*** ./src/js/main/randomCars.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomCars)\n/* harmony export */ });\n/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand */ \"./src/js/main/brand.js\");\n\r\nfunction randomCars() {\r\n    let keys = Object.keys(_brand__WEBPACK_IMPORTED_MODULE_0__.brand)\r\n    let randomKey = Math.floor(Math.random() * keys.length);\r\n    let key = keys[randomKey]\r\n    let randomValue = Math.floor(Math.random() * _brand__WEBPACK_IMPORTED_MODULE_0__.brand[key].length);\r\n    return `${key} ${_brand__WEBPACK_IMPORTED_MODULE_0__.brand[key][randomValue]}`\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/randomCars.js?");

/***/ }),

/***/ "./src/js/main/remove.js":
/*!*******************************!*\
  !*** ./src/js/main/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeClick)\n/* harmony export */ });\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete */ \"./src/js/main/delete.js\");\n\r\n\r\nfunction removeClick(){\r\n    const nodeList = document.querySelectorAll(\"button.remove\")\r\n    //console.log(nodeList.length)\r\n        for (let i = 0; i < nodeList.length; i++) {\r\n            nodeList[i].addEventListener('click', e => {\r\n                document.querySelector('.update-color').disabled = true;\r\n                document.querySelector('.update-text').disabled = true;\r\n                document.querySelector('.update-text').value = \"\";\r\n                document.querySelector('.update').disabled = true;\r\n                let val = parseInt(e.target.dataset.id)\r\n                ;(0,_delete__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val)\r\n            })\r\n          }\r\n        } \r\n/*         document.querySelector('.update').addEventListener('click', e =>{\r\n            let i = parseInt(localStorage.getItem(\"myKeyIdDelete\"))\r\n            deleteCar(i)\r\n        }) */\n\n//# sourceURL=webpack://asyncrace/./src/js/main/remove.js?");

/***/ }),

/***/ "./src/js/main/reset.js":
/*!******************************!*\
  !*** ./src/js/main/reset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startStop */ \"./src/js/main/startStop.js\");\n\r\nfunction reset(timer){\r\n    document.querySelector(`.left`).disabled = false\r\n    document.querySelector(`.right`).disabled = false\r\n    document.querySelector(`.race`).disabled = false\r\n    document.querySelector(`.reset`).disabled = true\r\n    document.querySelector('.show-winner').style.display = 'none'\r\n    const nodeList = document.querySelectorAll(`.A`)\r\n    for (let i = 0; i < nodeList.length; i++) {\r\n        let m = nodeList[i].dataset.id\r\n        clearInterval(timer)\r\n        document.querySelector(`.remove[data-id=\"${m}\"]`).disabled = false\r\n        document.querySelector(`.A[data-id=\"${m}\"]`).disabled = false\r\n        document.querySelector(`.B[data-id=\"${m}\"]`).disabled = true\r\n        document.querySelector(`.tractor-svg[data-id=\"${m}\"]`).style.left = 1 + '%'\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/main/reset.js?");

/***/ }),

/***/ "./src/js/main/select.js":
/*!*******************************!*\
  !*** ./src/js/main/select.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectClick)\n/* harmony export */ });\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update */ \"./src/js/main/update.js\");\n\r\nfunction selectClick(){\r\n    const nodeList = document.querySelectorAll(\"button.select\")\r\n    //console.log(nodeList.length)\r\n        for (let i = 0; i < nodeList.length; i++) {\r\n            nodeList[i].addEventListener('click', e => {\r\n                document.querySelector('.update-color').value = e.target.dataset.color;\r\n                document.querySelector('.update-color').disabled = false;\r\n                document.querySelector('.update-text').disabled = false;\r\n                document.querySelector('.update-text').value = e.target.dataset.name;\r\n                document.querySelector('.update').disabled = false;\r\n                let val = parseInt(e.target.dataset.id)\r\n                //console.log(val)\r\n                localStorage.setItem(\"myKeyId\",JSON.stringify(val))\r\n            })\r\n          }\r\n        }   \r\ndocument.querySelector('.update').addEventListener('click', e =>{\r\n    let i = parseInt(localStorage.getItem(\"myKeyId\"))\r\n    document.querySelector('.update-color').disabled = true;\r\n    document.querySelector('.update-text').disabled = true;\r\n    document.querySelector('.update').disabled = true;\r\n    (0,_update__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)\r\n})\n\n//# sourceURL=webpack://asyncrace/./src/js/main/select.js?");

/***/ }),

/***/ "./src/js/main/startGame.js":
/*!**********************************!*\
  !*** ./src/js/main/startGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randerCars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randerCars */ \"./src/js/main/randerCars.js\");\n\r\nfunction startGame(i = 1){\r\n    if(isNaN(parseInt(localStorage.getItem(\"myKeyPage\")))){\r\n        localStorage.setItem(\"myKeyPage\",JSON.stringify(i))\r\n        ;(0,_randerCars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)\r\n        document.querySelector('#page-change1').textContent = ` #${i}`\r\n    }else{\r\n        (0,_randerCars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parseInt(localStorage.getItem(\"myKeyPage\")))\r\n        document.querySelector('#page-change1').textContent = ` #${parseInt(localStorage.getItem(\"myKeyPage\"))}`\r\n    }\r\n}startGame()\n\n//# sourceURL=webpack://asyncrace/./src/js/main/startGame.js?");

/***/ }),

/***/ "./src/js/main/startStop.js":
/*!**********************************!*\
  !*** ./src/js/main/startStop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startStop),\n/* harmony export */   patch: () => (/* binding */ patch),\n/* harmony export */   staringStopping: () => (/* binding */ staringStopping)\n/* harmony export */ });\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./src/js/main/animation.js\");\n/* harmony import */ var _availabilityLeftRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availabilityLeftRight */ \"./src/js/main/availabilityLeftRight.js\");\n\r\n\r\n\r\nfunction startStop(){\r\n    let AB = ['A', 'B']\r\n    for(let bul of AB){\r\n        //console.log(bul)\r\n    const nodeList = document.querySelectorAll(`button.${bul}`)\r\n    //console.log(nodeList)\r\n    //console.log(nodeList.length)\r\n        for (let i = 0; i < nodeList.length; i++) {\r\n            nodeList[i].addEventListener('click', e => {\r\n                if(e.target.className == 'A'){\r\n                    e.target.disabled = true\r\n                    //document.querySelector(`.left\"]`).disabled = true\r\n                    document.querySelector(`.left`).disabled = true\r\n                    document.querySelector(`.right`).disabled = true\r\n                    document.querySelector(`.remove[data-id=\"${e.target.dataset.id}\"]`).disabled = true\r\n                    document.querySelector(`.B[data-id=\"${e.target.dataset.id}\"]`).disabled = false\r\n                    document.querySelector(`.race`).disabled = true\r\n                    document.querySelector(`.create`).disabled = true\r\n                }else{\r\n                    document.querySelector(`.B[data-id=\"${e.target.dataset.id}\"]`).disabled = true\r\n                    document.querySelector(`.A[data-id=\"${e.target.dataset.id}\"]`).disabled = false\r\n                    \r\n                    \r\n                    \r\n                }\r\n                let id = parseInt(e.target.dataset.id)\r\n                staringStopping(id, bul)\r\n            })  \r\n          }\r\n        } \r\n    }  \r\nasync function staringStopping(id, bul, race){\r\n    //console.log(id,bul)\r\n    let status\r\n    bul === 'A'? status = 'started': status = 'stopped'\r\n        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {\r\n          method: 'PATCH',\r\n        });\r\n        const rsolt = await response.json();\r\n        console.log(rsolt); \r\n        if(status === 'started'){\r\n            let g = (0,_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rsolt.velocity,  id, race)\r\n            patch(id,'drive', g)      \r\n        }else if(status === 'stopped'){\r\n            //console.log('PP')\r\n            patch(id,'started')\r\n        }\r\n\r\n}   \r\nasync function patch(id,status, g){\r\n    try{\r\n        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {\r\n        method: 'PATCH',\r\n      });\r\n      const rsolt = await response.json();\r\n      //console.log(rsolt); \r\n      //console.log(\"JJJJJJJJJ\")\r\n    } catch (e) {\r\n        console.log('CAR STOP')\r\n        clearInterval(g)\r\n        ;(0,_availabilityLeftRight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        //staringStopping(id, 'stopped')\r\n\r\n            }\r\n      \r\n      \r\n      \r\n}\r\n\r\n\r\n      \r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/main/startStop.js?");

/***/ }),

/***/ "./src/js/main/update.js":
/*!*******************************!*\
  !*** ./src/js/main/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ update)\n/* harmony export */ });\n/* harmony import */ var _randerCars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randerCars */ \"./src/js/main/randerCars.js\");\n\r\nasync function update(id){\r\n  //console.log(id)\r\n    let color = document.querySelector('.update-color').value\r\n    let name = document.querySelector('.update-text').value\r\n    //console.log(color)\r\n    //console.log(brand[Kia])\r\n        let data = {    \r\n            name: name === ''? randomCars(): name, \r\n            color: color\r\n        }\r\n        const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {\r\n          method: 'PUT',\r\n          headers: {\r\n            'Content-Type': 'application/json'\r\n          },\r\n          body: JSON.stringify(data)\r\n        });\r\n        let arg = parseInt(localStorage.getItem(\"myKeyPage\"));\r\n        document.querySelector('.show-winner').style.display = 'none'\r\n        ;(0,_randerCars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arg)\r\n}\r\n\r\n\r\n\r\n\r\n/* import animationCar from \"./animation\"\r\nimport { stopInter } from \"./animation\"\r\nexport default function startStop(){\r\n    const nodeList = document.querySelectorAll(`button.A`)\r\n    //console.log(nodeList.length)\r\n        for (let i = 0; i < nodeList.length; i++) {\r\n            nodeList[i].addEventListener('click', e => {\r\n            e.target.disabled = true\r\n            document.querySelector(`.B[data-id=\"${e.target.dataset.id}\"]`).disabled = false      \r\n            let id = parseInt(e.target.dataset.id)\r\n            staringStopping(id, 'started')\r\n            })  \r\n          }\r\n        } \r\n    let stop */\r\n/* export async function staringStopping(id, status){\r\n        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {\r\n          method: 'PATCH',\r\n        });\r\n        const rsolt = await response.json()\r\n        if(status === 'started'){\r\n            let stop = animationCar(rsolt.velocity,  id)\r\n            console.log(stop)\r\n            patch(id,'drive', stop)\r\n        }\r\n        //patch(id,'drive', stop)\r\n            \r\n        //patch(id, g, 'stopped')       \r\n}   \r\nexport async function patch(id,status,  stop){\r\n    try{\r\n        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {\r\n        method: 'PATCH',\r\n      });\r\n      const rsolt = await response.json();\r\n      console.log(rsolt); \r\n    } catch (e) {\r\n        console.log('CAR STOP')\r\n        clearInterval(stop)\r\n        //staringStopping(id, 'stopped')\r\n\r\n            }\r\n      \r\n      \r\n      \r\n} */\n\n//# sourceURL=webpack://asyncrace/./src/js/main/update.js?");

/***/ }),

/***/ "./src/js/winnersPanel/getWinnerIdWinsTime.js":
/*!****************************************************!*\
  !*** ./src/js/winnersPanel/getWinnerIdWinsTime.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWinner)\n/* harmony export */ });\n/* harmony import */ var _sortWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortWinner */ \"./src/js/winnersPanel/sortWinner.js\");\n\r\nasync function getWinner(page=1, sort='time', order='DESC'){\r\n    const res = await fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=${page}&_sort=${sort}&_order=${order}`);\r\n    const rsolt = await res.json();\r\n    //console.log(rsolt)\r\n    \r\n    document.querySelector('tbody').innerHTML = ''\r\n     for(let key in rsolt){\r\n        getWinnerColorName(Number(key) + 1, rsolt[key].id, rsolt[key].wins, rsolt[key].time)\r\n    }\r\n\r\n}getWinner()\r\n\r\nasync function getWinnerColorName(num, id, wins, time){\r\n    const res = await fetch(`http://127.0.0.1:3000/garage/${id}`);\r\n    const rsolt = await res.json();\r\n    //console.log(rsolt)\r\n    innerWinner(id, num, rsolt.color, rsolt.name, wins, time)\r\n}\r\n\r\nfunction addWinnerHeader(){\r\n    let thead = document.createElement('thead');\r\n    let tbody = document.createElement('tbody');\r\n    document.querySelector('.table-winner').appendChild(thead)\r\n    document.querySelector('.table-winner').appendChild(tbody)\r\n    //document.querySelector('.table-winn')\r\n    let add = `<th calss=\"th-number\">Number</th>`\r\n    add += `<th calss=\"th-car\">Car</th>`    \r\n    add += `<th calss=\"thName\" id=\"name-id-th\">Name</th>`\r\n    add +=`<th calss=\"th-wins\" id=\"the-winner\">Wins</th>`\r\n    add += `<th calss=\"bestSecond\" id=\"th-best-second\">Best time</th>`\r\n    thead.innerHTML = add \r\n\r\n    //document.querySelector('.tbody').innerHTML = ''\r\n}addWinnerHeader()\r\n\r\nfunction innerWinner(id, key, color, name, wins, time  ){\r\n    //console.log('HDHD')\r\n    let add = `<tr class=\"tr${id}\"></tr>`\r\n    document.querySelector('tbody').insertAdjacentHTML('beforeend', add)\r\n    add = `<td class='numberCar${key}'>${key}</td>`\r\n    add += `<td class='colorCar${id}'></td>`\r\n    add += `<td class='nameCar${name}'>${name}</td>`\r\n    add += `<td class='winsCar${wins}'>${wins}</td>`    \r\n    add += `<td class='bestTime${time}'>${time}</td>`\r\n    document.querySelector(`.tr${id}`).insertAdjacentHTML('beforeend', add) \r\n    document.querySelector(`.colorCar${id}`).innerHTML = `<svg class=\"tractor-svg-winner${id}\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z\"/></svg>`\r\n    document.querySelector(`.tractor-svg-winner${id}`).style.fill = `${color}`\r\n} \r\n\r\n\r\n//`<svg data-id='${key}' id=\"col${key}\"\" class=\"tractor-svg\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z\"/></svg>`\n\n//# sourceURL=webpack://asyncrace/./src/js/winnersPanel/getWinnerIdWinsTime.js?");

/***/ }),

/***/ "./src/js/winnersPanel/leftRightWinner.js":
/*!************************************************!*\
  !*** ./src/js/winnersPanel/leftRightWinner.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWinnerIdWinsTime */ \"./src/js/winnersPanel/getWinnerIdWinsTime.js\");\n\r\nlocalStorage.setItem(\"myKeyPageWinner\",JSON.stringify(Number(1)))\r\ndocument.querySelector('.left-winner').addEventListener('click', e =>{\r\n    let i = parseInt(localStorage.getItem(\"myKeyPageWinner\"))\r\n    if(i > 1){\r\n        i -= 1\r\n        localStorage.setItem(\"myKeyPageWinner\",JSON.stringify(i))\r\n        ;(0,_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)\r\n    }\r\n})\r\ndocument.querySelector('.right-winner').addEventListener('click', e =>{\r\n    let i = parseInt(localStorage.getItem(\"myKeyPageWinner\"))\r\n    i += 1\r\n    localStorage.setItem(\"myKeyPageWinner\",JSON.stringify(i))\r\n    ;(0,_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)\r\n})\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/winnersPanel/leftRightWinner.js?");

/***/ }),

/***/ "./src/js/winnersPanel/sortWinner.js":
/*!*******************************************!*\
  !*** ./src/js/winnersPanel/sortWinner.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWinnerIdWinsTime */ \"./src/js/winnersPanel/getWinnerIdWinsTime.js\");\n\r\n\r\n    document.addEventListener('click', e =>{\r\n        if(e.target.matches('#th-best-second')){\r\n            console.log('time')\r\n            ;(0,_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,'time', 'ASC')\r\n        }\r\n    })\r\n    document.addEventListener('click', e =>{\r\n        if(e.target.matches('#the-winner')){\r\n            console.log('wins')\r\n            ;(0,_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,'wins', 'DESC')\r\n        }\r\n    })\r\n    document.addEventListener('click', e =>{\r\n        if(e.target.matches('#name-id-th')){\r\n            console.log('id')\r\n            ;(0,_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,'id', 'DESC')\r\n        }\r\n    })\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/winnersPanel/sortWinner.js?");

/***/ }),

/***/ "./src/js/winners/addWinner.js":
/*!*************************************!*\
  !*** ./src/js/winners/addWinner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWinner)\n/* harmony export */ });\n/* harmony import */ var _winnersPanel_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../winnersPanel/getWinnerIdWinsTime */ \"./src/js/winnersPanel/getWinnerIdWinsTime.js\");\n\r\nasync function addWinner(id, mSec) {\r\n  const second = mSec / 1000;\r\n  //console.log(id, second.toFixed(2));\r\n  const data = {\r\n    id: Number(id),\r\n    wins: 1,\r\n    time: Number(second.toFixed(2)),\r\n    //name: name === ''? randomCars(): name,\r\n  };\r\n  const response = await fetch(\"http://127.0.0.1:3000/winners\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(data),\r\n  });\r\n  //console.log(\"NNNNNNNNNNNNNNNNNNNNNOOOOOOOOOO\")\r\n  //console.log(data);\r\n  console.log('ADD WINNER')\r\n  ;(0,_winnersPanel_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/winners/addWinner.js?");

/***/ }),

/***/ "./src/js/winners/deleteWinner.js":
/*!****************************************!*\
  !*** ./src/js/winners/deleteWinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteWinner)\n/* harmony export */ });\nasync function deleteWinner(id){\r\n    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {\r\n      method: 'DELETE',\r\n    });\r\n}   \n\n//# sourceURL=webpack://asyncrace/./src/js/winners/deleteWinner.js?");

/***/ }),

/***/ "./src/js/winners/findWinnerCar.js":
/*!*****************************************!*\
  !*** ./src/js/winners/findWinnerCar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findWinnerCar)\n/* harmony export */ });\n/* harmony import */ var _showWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showWinner */ \"./src/js/winners/showWinner.js\");\n\r\nasync function findWinnerCar(id, mSec){\r\n    const res = await fetch(`http://127.0.0.1:3000/garage/${id}`);\r\n    const rsolt = await res.json();\r\n    (0,_showWinner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rsolt.name, mSec)\r\n    \r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/winners/findWinnerCar.js?");

/***/ }),

/***/ "./src/js/winners/showWinner.js":
/*!**************************************!*\
  !*** ./src/js/winners/showWinner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showWinner)\n/* harmony export */ });\nfunction showWinner(name, mSec){\r\n    const second = mSec / 1000;\r\n    document.querySelector('.show-winner').textContent = `${name} [${second.toFixed(2)}s]`\r\n    document.querySelector('.show-winner').style.display = 'block'\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/winners/showWinner.js?");

/***/ }),

/***/ "./src/js/winners/startFindWinner.js":
/*!*******************************************!*\
  !*** ./src/js/winners/startFindWinner.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startFindWinner)\n/* harmony export */ });\n/* harmony import */ var _thereIsNewWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thereIsNewWinner */ \"./src/js/winners/thereIsNewWinner.js\");\n/* harmony import */ var _addWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWinner */ \"./src/js/winners/addWinner.js\");\n\r\n\r\n\r\nasync function startFindWinner(id, mSec){\r\n    if(startFindWinner.isRun){\r\n        return false\r\n    }\r\n    (0,_thereIsNewWinner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, mSec)\r\n    document.querySelector('.reset').disabled = false\r\n    return startFindWinner.isRun = true\r\n}\r\n\r\n\n\n//# sourceURL=webpack://asyncrace/./src/js/winners/startFindWinner.js?");

/***/ }),

/***/ "./src/js/winners/thereIsNewWinner.js":
/*!********************************************!*\
  !*** ./src/js/winners/thereIsNewWinner.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thereIsWinner)\n/* harmony export */ });\n/* harmony import */ var _findWinnerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findWinnerCar */ \"./src/js/winners/findWinnerCar.js\");\n/* harmony import */ var _addWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWinner */ \"./src/js/winners/addWinner.js\");\n/* harmony import */ var _updateWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateWinner */ \"./src/js/winners/updateWinner.js\");\n\r\n\r\n\r\nasync function thereIsWinner(id, mSec){\r\n    const res = await fetch(`http://127.0.0.1:3000/winners/${id}`);\r\n    const rsolt = await res.json();\r\n    (0,_findWinnerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, mSec)\r\n    if(rsolt.time === undefined){\r\n        console.log(\"ADDD\")\r\n        ;(0,_addWinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, mSec)\r\n    }else{\r\n        console.log(\"CREATE\")\r\n        ;(0,_updateWinner__WEBPACK_IMPORTED_MODULE_2__.updaeWinner)(id, rsolt.wins, rsolt.time, mSec)\r\n    }\r\n} \n\n//# sourceURL=webpack://asyncrace/./src/js/winners/thereIsNewWinner.js?");

/***/ }),

/***/ "./src/js/winners/updateWinner.js":
/*!****************************************!*\
  !*** ./src/js/winners/updateWinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updaeWinner: () => (/* binding */ updaeWinner)\n/* harmony export */ });\n/* harmony import */ var _winnersPanel_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../winnersPanel/getWinnerIdWinsTime */ \"./src/js/winnersPanel/getWinnerIdWinsTime.js\");\n\r\nasync function updaeWinner(id, win, lastTime, newTimeMS){\r\n    const newSecond = newTimeMS / 1000;\r\n    let newWins = win += 1\r\n    const data = {\r\n        wins: newWins,\r\n        time: Number(newSecond) < lastTime? Number(newSecond.toFixed(2)): lastTime\r\n    }\r\n    const res = await fetch(`http://127.0.0.1:3000/winners/${id}`, {\r\n        method: 'PUT',\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },  \r\n        body: JSON.stringify(data)\r\n    });\r\n    console.log(data)\r\n    ;(0,_winnersPanel_getWinnerIdWinsTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n}\n\n//# sourceURL=webpack://asyncrace/./src/js/winners/updateWinner.js?");

/***/ }),

/***/ "./src/assets/trimg.jpg":
/*!******************************!*\
  !*** ./src/assets/trimg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"trimg.jpg\";\n\n//# sourceURL=webpack://asyncrace/./src/assets/trimg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;