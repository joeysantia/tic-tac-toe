/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --cell-border-style: 5px solid black;\n    --form-bg-color: #bdb8b8;\n    --main-bg-color: #FFFFFF;\n    --button-hover-color: #7bf77b;\n\n    background: var(--main-bg-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n}\n\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: grey;\n    opacity: 0.2;\n    pointer-events: none;\n    z-index: 1;\n}\n\nh1 {\n    text-align: center;\n    margin-top: 24px;\n    font-size: 3rem;\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 600px;\n    width: 600px;\n    background-size: cover;\n    display: grid;\n    grid-template-columns: repeat(3, 200px);\n    grid-template-rows: repeat(3, 200px);\n}\n\n.cell {\n    font-size: 164px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.disabled-cell {\n    pointer-events: none;\n}\n\n.top-left {\n    border-bottom: 5px solid black;\n    border-right: 5px solid black;    \n}\n\n.top-center {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style); \n}\n\n.top-right {\n    border-bottom: var(--cell-border-style);\n}\n\n.center-left {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style);  \n}\n\n.center-center {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style); \n}\n\n.center-right {\n    border-bottom: var(--cell-border-style);\n}\n\n.bottom-left {\n    border-right: var(--cell-border-style);\n}\n\n.bottom-center {\n    border-right: var(--cell-border-style);\n}\n\nform {\n    width: min-content;\n    height: min-content;\n    position: absolute; \n    padding: 12px 24px 12px 24px;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    background: var(--form-bg-color);\n    box-shadow: 2px 2px 4px;\n\n}\n\nform > p {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-top: 0;\n}\n\nfieldset {\n    padding: 0;\n    margin: 0;\n    border-style: none;\n}\n\nfieldset label {\n    margin-left: 4px;\n}\n\n#x {\n    position: relative;\n    left: 2px;\n}\n\n#playerTwo {\n    position: relative;\n    left: 30px;\n}\nbutton {\n    padding: 8px 24px 8px 24px;\n    font-size: 0.9rem;\n    border-radius: 6px;\n    border-style: solid;\n    box-shadow: 1px 1px 2px grey;\n    font-weight: 700;\n    background: var(--main-bg-color);\n}\n\nbutton:hover {\n    background: var(--button-hover-color);\n    border: 2px solid black;\n}\n/*label[for='player1-name'] {\n    visibility: hidden;\n}*/\n\n.winner-popup {\n    width: 30%;\n    height: 30%;\n    position: absolute; \n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: var(--form-bg-color);\n}\n\n.winner-popup > div {\n    display: flex;\n    gap: 24px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,wBAAwB;IACxB,wBAAwB;IACxB,6BAA6B;;IAE7B,gCAAgC;IAChC,wIAAwI;IACxI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,uCAAuC;IACvC,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;IACvC,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;IACvC,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,gCAAgC;IAChC,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;AAC3B;AACA;;EAEE;;AAEF;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,SAAS;AACb","sourcesContent":[":root {\n    --cell-border-style: 5px solid black;\n    --form-bg-color: #bdb8b8;\n    --main-bg-color: #FFFFFF;\n    --button-hover-color: #7bf77b;\n\n    background: var(--main-bg-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n}\n\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: grey;\n    opacity: 0.2;\n    pointer-events: none;\n    z-index: 1;\n}\n\nh1 {\n    text-align: center;\n    margin-top: 24px;\n    font-size: 3rem;\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 600px;\n    width: 600px;\n    background-size: cover;\n    display: grid;\n    grid-template-columns: repeat(3, 200px);\n    grid-template-rows: repeat(3, 200px);\n}\n\n.cell {\n    font-size: 164px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.disabled-cell {\n    pointer-events: none;\n}\n\n.top-left {\n    border-bottom: 5px solid black;\n    border-right: 5px solid black;    \n}\n\n.top-center {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style); \n}\n\n.top-right {\n    border-bottom: var(--cell-border-style);\n}\n\n.center-left {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style);  \n}\n\n.center-center {\n    border-bottom: var(--cell-border-style);\n    border-right: var(--cell-border-style); \n}\n\n.center-right {\n    border-bottom: var(--cell-border-style);\n}\n\n.bottom-left {\n    border-right: var(--cell-border-style);\n}\n\n.bottom-center {\n    border-right: var(--cell-border-style);\n}\n\nform {\n    width: min-content;\n    height: min-content;\n    position: absolute; \n    padding: 12px 24px 12px 24px;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    background: var(--form-bg-color);\n    box-shadow: 2px 2px 4px;\n\n}\n\nform > p {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-top: 0;\n}\n\nfieldset {\n    padding: 0;\n    margin: 0;\n    border-style: none;\n}\n\nfieldset label {\n    margin-left: 4px;\n}\n\n#x {\n    position: relative;\n    left: 2px;\n}\n\n#playerTwo {\n    position: relative;\n    left: 30px;\n}\nbutton {\n    padding: 8px 24px 8px 24px;\n    font-size: 0.9rem;\n    border-radius: 6px;\n    border-style: solid;\n    box-shadow: 1px 1px 2px grey;\n    font-weight: 700;\n    background: var(--main-bg-color);\n}\n\nbutton:hover {\n    background: var(--button-hover-color);\n    border: 2px solid black;\n}\n/*label[for='player1-name'] {\n    visibility: hidden;\n}*/\n\n.winner-popup {\n    width: 30%;\n    height: 30%;\n    position: absolute; \n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: var(--form-bg-color);\n}\n\n.winner-popup > div {\n    display: flex;\n    gap: 24px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const ticTacToe = (function() {

    let playerOne, playerTwo, computer, headingName
    let xTurn = true
    const body = document.querySelector('body')
    const heading = document.querySelector('h1')
    const overlay = document.querySelector('.overlay')
    const cellGroup = document.querySelectorAll('.cell')

    const playerMaker = (name, symbol) => {
        return {
            name: name,
            symbol: symbol
         }
    }

    const headingSet = () => {
    if (playerTwo) {
        headingName = (playerOne.symbol === 'X' ? playerOne.name : playerTwo.name)
        
    } else {
        headingName = playerOne.name
    }
    heading.textContent = 'Your turn, ' + headingName + '.'
    }

    const headingToggle = () => {
        headingName = (headingName === playerOne.name ? playerTwo.name : playerOne.name)
        heading.textContent = 'Your turn, ' + headingName + '.'
    }

    const computerMove = () => {
        switch (computer.name) {
            case 'easy':    
                let openSpaces = []
                cellGroup.forEach((cell) => {
                    if (!cell.textContent) { openSpaces.push(cell) } 
                })
                openSpaces[Math.floor(Math.random() * openSpaces.length)].textContent = computer.symbol
                break;
            case 'medium':
                alert('Not ready yet - choose easy.')
            case 'hard':
                alert('Not ready yet - choose easy.')
            default: 
                alert('Not ready yet - choose easy.')
        }
    }

    const clickAdd = () => { 
        cellGroup.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (!cell.textContent ) {
                cell.textContent = (xTurn ? 'X' : 'O')
            }

            playerTwo ? xTurn = !xTurn : {}

            if (computer) {
                computerMove()
            } else if (playerTwo) { 
                headingToggle() 
            }

            winnerCheck()

            })
        })
    }

    const clickRemove = () => {
        cellGroup.forEach((cell) => {
            cell.removeEventListener
        })
    }

    const submitFunction = (e) => {
        e.preventDefault()
        

        const playerOneName = document.querySelector('#playerOne-name')
        const playerOneSymbol = document.querySelector('input[name="symbol-choice"]:checked')
        playerOne = playerMaker(playerOneName.value, playerOneSymbol.value)

        if (document.querySelector('input[id="playerTwo"]:checked')) {
            let playerTwoSymbol = (playerOneSymbol.value === 'X' ? 'O' : 'X')
            playerTwo = playerMaker(document.querySelector('#playerTwoName').value, playerTwoSymbol)
        }

        if (document.querySelector('input[id="computer"]:checked')) {
            let computerName = document.querySelector('select[id="difficulty"]')
            let computerSymbol = (playerOneSymbol.value === 'X' ? 'O' : 'X')
            computer = playerMaker(computerName.options[difficulty.selectedIndex].value, computerSymbol)
        }

        const form = document.querySelector('form')
        body.removeChild(form)

        body.removeChild(overlay)

        clickAdd()
        if (computer && playerOne.symbol === 'O') { 
            computerMove()
            xTurn = !xTurn }

        headingSet()
        

        console.log(playerOne)
        console.log(playerTwo)

    }

    const startGame = (function() {

        const form = document.querySelector('form');
        form.addEventListener('submit', submitFunction);

        const fields = document.querySelector('.fields')

        const playerTwoInput = document.querySelector('#playerTwo')
        playerTwoInput.addEventListener('click', (e) => {
            
            if (fields.lastChild !== document.querySelector('#playerTwoName')) { 

                if (fields.lastChild === document.querySelector('#difficulty')) { 
                    fields.removeChild(fields.lastChild)
                    fields.removeChild(fields.lastChild)
                }

            const playerTwoLabel = document.createElement('label')
            playerTwoLabel.textContent = `Enter foe's name:`
            playerTwoLabel.setAttribute('for', 'playerTwoName')
            fields.appendChild(playerTwoLabel)

            const playerTwoInput = document.createElement('input')
            playerTwoInput.setAttribute('type', 'text')
            playerTwoInput.setAttribute('name', 'playerTwoName')
            playerTwoInput.setAttribute('id', 'playerTwoName')
            playerTwoInput.setAttribute('required', 'required')
            fields.appendChild(playerTwoInput)
            
            }

        })

        const computerInput = document.querySelector('#computer')
        computerInput.addEventListener('click', (e) => {

            if (fields.lastChild !== document.querySelector('#difficulty')) {

                if (fields.lastChild === document.querySelector('#playerTwoName')) { 
                    fields.removeChild(fields.lastChild)
                    fields.removeChild(fields.lastChild)
                }

                const difficultyLabel = document.createElement('label')
                difficultyLabel.textContent = 'Choose your difficulty'
                difficultyLabel.setAttribute('for', 'computerDifficulty')
                fields.appendChild(difficultyLabel)

                const difficultyInput = document.createElement('select')
                difficultyInput.setAttribute('name', 'difficulty')
                difficultyInput.setAttribute('id', 'difficulty')
                fields.appendChild(difficultyInput)

                const easy = document.createElement('option')
                easy.setAttribute('value', 'easy')
                easy.textContent = 'Easy'
                difficultyInput.appendChild(easy)

                const medium = document.createElement('option')
                medium.setAttribute('value', 'medium')
                medium.textContent = 'Medium'
                difficultyInput.appendChild(medium)

                const hard = document.createElement('option')
                hard.setAttribute('value', 'hard')
                hard.textContent = 'Hard'
                difficultyInput.appendChild(hard)

                const impossible = document.createElement('option')
                impossible.setAttribute('value', 'impossible')
                impossible.textContent = 'Impossible'
                difficultyInput.appendChild(impossible)
                

            }
        })


    })()

    const winnerCheck = () => {
        let gameboard = []

        const victory = () => { // all possible combinations of a three-in-a-row [ 0 1 2 
                                //                                                 3 4 5
                                //                                                 6 7 8 ]
                        if (
                        (gameboard[0] && gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2]) ||
                        (gameboard[3] && gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5]) ||
                        (gameboard[6] && gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8]) ||
                        (gameboard[0] && gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6]) ||
                        (gameboard[1] && gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7]) ||
                        (gameboard[2] && gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8]) ||
                        (gameboard[0] && gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) ||
                        (gameboard[2] && gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6])
                        ) { return true } 
                        else { return false}
        }

        const tie = () => {
            for (let content in gameboard) {
            if (!gameboard[content]) {
                return false
            }
        } // revisit this - it's calling a tie if there is any textContent at all 
            return true
        }

        cellGroup.forEach((cell) => {
            gameboard.push(cell.textContent)
        })

        if (victory() || tie() ) {

            heading.textContent = 'We have a winner!'

            cellGroup.forEach((cell) => {
                cell.style.pointerEvents = 'none'
            })

            const winnerPopup = document.createElement('div')
            winnerPopup.setAttribute('class', 'winner-popup')
            body.appendChild(winnerPopup)
            
            body.appendChild(overlay)

            const winnerHeading = document.createElement('h2')
            winnerPopup.appendChild(winnerHeading)
            
            const buttonList = document.createElement('div')
            winnerPopup.appendChild(buttonList)

            const rematchButton = document.createElement('button')
            buttonList.appendChild(rematchButton)
            rematchButton.textContent = 'Rematch?'
            rematchButton.addEventListener('click', (e) => {
                body.removeChild(winnerPopup)
                body.removeChild(overlay)
                cellGroup.forEach((cell) => {
                    cell.textContent = ''
                    cell.style.pointerEvents = 'auto'
                })
                xTurn = true 
                headingSet()
                if (computer.symbol === 'X') {
                    computerMove()
                    xTurn = false
                }
            })

            const resetButton = document.createElement('button')
            buttonList.appendChild(resetButton)
            resetButton.textContent = 'Start Over?'
            resetButton.addEventListener('click', (e) => {
                window.location.reload()
            })

            if ( victory() ) {
                winnerHeading.textContent = `You win, ${headingName}` 
            } else if ( tie() ) {
                winnerHeading.textContent = 'Tie!'
            }
        }
        return {gameboard, victory, tie }
    }
    return { playerOne, playerTwo, cellGroup, winnerCheck, computer }
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOzs7QUFHVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSx3REFBd0QsWUFBWTtBQUNwRSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsYUFBYTtBQUNiLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY2VsbC1ib3JkZXItc3R5bGU6IDVweCBzb2xpZCBibGFjaztcXG4gICAgLS1mb3JtLWJnLWNvbG9yOiAjYmRiOGI4O1xcbiAgICAtLW1haW4tYmctY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiAjN2JmNzdiO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyMDBweCk7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZm9udC1zaXplOiAxNjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNhYmxlZC1jZWxsIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b3AtbGVmdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7ICAgIFxcbn1cXG5cXG4udG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWNlbGwtYm9yZGVyLXN0eWxlKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7IFxcbn1cXG5cXG4udG9wLXJpZ2h0IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG4uY2VudGVyLWxlZnQge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpOyAgXFxufVxcblxcbi5jZW50ZXItY2VudGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWNlbGwtYm9yZGVyLXN0eWxlKTsgXFxufVxcblxcbi5jZW50ZXItcmlnaHQge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7XFxufVxcblxcbi5ib3R0b20tbGVmdCB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG4uYm90dG9tLWNlbnRlciB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMTJweCAyNHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweDtcXG5cXG59XFxuXFxuZm9ybSA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQgbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4jeCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMnB4O1xcbn1cXG5cXG4jcGxheWVyVHdvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggZ3JleTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4vKmxhYmVsW2Zvcj0ncGxheWVyMS1uYW1lJ10ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufSovXFxuXFxuLndpbm5lci1wb3B1cCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbn1cXG5cXG4ud2lubmVyLXBvcHVwID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsNkJBQTZCOztJQUU3QixnQ0FBZ0M7SUFDaEMsd0lBQXdJO0lBQ3hJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsdUJBQXVCO0FBQzNCO0FBQ0E7O0VBRUU7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY2VsbC1ib3JkZXItc3R5bGU6IDVweCBzb2xpZCBibGFjaztcXG4gICAgLS1mb3JtLWJnLWNvbG9yOiAjYmRiOGI4O1xcbiAgICAtLW1haW4tYmctY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiAjN2JmNzdiO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyMDBweCk7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZm9udC1zaXplOiAxNjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNhYmxlZC1jZWxsIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b3AtbGVmdCB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7ICAgIFxcbn1cXG5cXG4udG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWNlbGwtYm9yZGVyLXN0eWxlKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7IFxcbn1cXG5cXG4udG9wLXJpZ2h0IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG4uY2VudGVyLWxlZnQge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpOyAgXFxufVxcblxcbi5jZW50ZXItY2VudGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWNlbGwtYm9yZGVyLXN0eWxlKTsgXFxufVxcblxcbi5jZW50ZXItcmlnaHQge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1jZWxsLWJvcmRlci1zdHlsZSk7XFxufVxcblxcbi5ib3R0b20tbGVmdCB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG4uYm90dG9tLWNlbnRlciB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tY2VsbC1ib3JkZXItc3R5bGUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMTJweCAyNHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweDtcXG5cXG59XFxuXFxuZm9ybSA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQgbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4jeCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMnB4O1xcbn1cXG5cXG4jcGxheWVyVHdvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggZ3JleTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4vKmxhYmVsW2Zvcj0ncGxheWVyMS1uYW1lJ10ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufSovXFxuXFxuLndpbm5lci1wb3B1cCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbn1cXG5cXG4ud2lubmVyLXBvcHVwID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCB0aWNUYWNUb2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgcGxheWVyT25lLCBwbGF5ZXJUd28sIGNvbXB1dGVyLCBoZWFkaW5nTmFtZVxuICAgIGxldCB4VHVybiA9IHRydWVcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuICAgIGNvbnN0IGNlbGxHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJylcblxuICAgIGNvbnN0IHBsYXllck1ha2VyID0gKG5hbWUsIHN5bWJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHN5bWJvbDogc3ltYm9sXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGluZ1NldCA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyVHdvKSB7XG4gICAgICAgIGhlYWRpbmdOYW1lID0gKHBsYXllck9uZS5zeW1ib2wgPT09ICdYJyA/IHBsYXllck9uZS5uYW1lIDogcGxheWVyVHdvLm5hbWUpXG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRpbmdOYW1lID0gcGxheWVyT25lLm5hbWVcbiAgICB9XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdZb3VyIHR1cm4sICcgKyBoZWFkaW5nTmFtZSArICcuJ1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRpbmdUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRpbmdOYW1lID0gKGhlYWRpbmdOYW1lID09PSBwbGF5ZXJPbmUubmFtZSA/IHBsYXllclR3by5uYW1lIDogcGxheWVyT25lLm5hbWUpXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnWW91ciB0dXJuLCAnICsgaGVhZGluZ05hbWUgKyAnLidcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY29tcHV0ZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnZWFzeSc6ICAgIFxuICAgICAgICAgICAgICAgIGxldCBvcGVuU3BhY2VzID0gW11cbiAgICAgICAgICAgICAgICBjZWxsR3JvdXAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNlbGwudGV4dENvbnRlbnQpIHsgb3BlblNwYWNlcy5wdXNoKGNlbGwpIH0gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBvcGVuU3BhY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wZW5TcGFjZXMubGVuZ3RoKV0udGV4dENvbnRlbnQgPSBjb21wdXRlci5zeW1ib2xcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vdCByZWFkeSB5ZXQgLSBjaG9vc2UgZWFzeS4nKVxuICAgICAgICAgICAgY2FzZSAnaGFyZCc6XG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vdCByZWFkeSB5ZXQgLSBjaG9vc2UgZWFzeS4nKVxuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vdCByZWFkeSB5ZXQgLSBjaG9vc2UgZWFzeS4nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tBZGQgPSAoKSA9PiB7IFxuICAgICAgICBjZWxsR3JvdXAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY2VsbC50ZXh0Q29udGVudCApIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKHhUdXJuID8gJ1gnIDogJ08nKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbGF5ZXJUd28gPyB4VHVybiA9ICF4VHVybiA6IHt9XG5cbiAgICAgICAgICAgIGlmIChjb21wdXRlcikge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyTW92ZSgpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclR3bykgeyBcbiAgICAgICAgICAgICAgICBoZWFkaW5nVG9nZ2xlKCkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbm5lckNoZWNrKClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgY2VsbEdyb3VwLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEZ1bmN0aW9uID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHBsYXllck9uZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyT25lLW5hbWUnKVxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic3ltYm9sLWNob2ljZVwiXTpjaGVja2VkJylcbiAgICAgICAgcGxheWVyT25lID0gcGxheWVyTWFrZXIocGxheWVyT25lTmFtZS52YWx1ZSwgcGxheWVyT25lU3ltYm9sLnZhbHVlKVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInBsYXllclR3b1wiXTpjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJUd29TeW1ib2wgPSAocGxheWVyT25lU3ltYm9sLnZhbHVlID09PSAnWCcgPyAnTycgOiAnWCcpXG4gICAgICAgICAgICBwbGF5ZXJUd28gPSBwbGF5ZXJNYWtlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyVHdvTmFtZScpLnZhbHVlLCBwbGF5ZXJUd29TeW1ib2wpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJjb21wdXRlclwiXTpjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGxldCBjb21wdXRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbaWQ9XCJkaWZmaWN1bHR5XCJdJylcbiAgICAgICAgICAgIGxldCBjb21wdXRlclN5bWJvbCA9IChwbGF5ZXJPbmVTeW1ib2wudmFsdWUgPT09ICdYJyA/ICdPJyA6ICdYJylcbiAgICAgICAgICAgIGNvbXB1dGVyID0gcGxheWVyTWFrZXIoY29tcHV0ZXJOYW1lLm9wdGlvbnNbZGlmZmljdWx0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSwgY29tcHV0ZXJTeW1ib2wpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZm9ybSlcblxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpXG5cbiAgICAgICAgY2xpY2tBZGQoKVxuICAgICAgICBpZiAoY29tcHV0ZXIgJiYgcGxheWVyT25lLnN5bWJvbCA9PT0gJ08nKSB7IFxuICAgICAgICAgICAgY29tcHV0ZXJNb3ZlKClcbiAgICAgICAgICAgIHhUdXJuID0gIXhUdXJuIH1cblxuICAgICAgICBoZWFkaW5nU2V0KClcbiAgICAgICAgXG5cbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyT25lKVxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJUd28pXG5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRGdW5jdGlvbik7XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkcycpXG5cbiAgICAgICAgY29uc3QgcGxheWVyVHdvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyVHdvJylcbiAgICAgICAgcGxheWVyVHdvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmllbGRzLmxhc3RDaGlsZCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b05hbWUnKSkgeyBcblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZHMubGFzdENoaWxkID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlmZmljdWx0eScpKSB7IFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMucmVtb3ZlQ2hpbGQoZmllbGRzLmxhc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzLnJlbW92ZUNoaWxkKGZpZWxkcy5sYXN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgICAgIHBsYXllclR3b0xhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIGZvZSdzIG5hbWU6YFxuICAgICAgICAgICAgcGxheWVyVHdvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncGxheWVyVHdvTmFtZScpXG4gICAgICAgICAgICBmaWVsZHMuYXBwZW5kQ2hpbGQocGxheWVyVHdvTGFiZWwpXG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgcGxheWVyVHdvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgcGxheWVyVHdvSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3BsYXllclR3b05hbWUnKVxuICAgICAgICAgICAgcGxheWVyVHdvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXJUd29OYW1lJylcbiAgICAgICAgICAgIHBsYXllclR3b0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxuICAgICAgICAgICAgZmllbGRzLmFwcGVuZENoaWxkKHBsYXllclR3b0lucHV0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjb21wdXRlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyJylcbiAgICAgICAgY29tcHV0ZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChmaWVsZHMubGFzdENoaWxkICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlmZmljdWx0eScpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxhc3RDaGlsZCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b05hbWUnKSkgeyBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzLnJlbW92ZUNoaWxkKGZpZWxkcy5sYXN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcy5yZW1vdmVDaGlsZChmaWVsZHMubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5TGFiZWwudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHlvdXIgZGlmZmljdWx0eSdcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29tcHV0ZXJEaWZmaWN1bHR5JylcbiAgICAgICAgICAgICAgICBmaWVsZHMuYXBwZW5kQ2hpbGQoZGlmZmljdWx0eUxhYmVsKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmljdWx0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RpZmZpY3VsdHknKVxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdHknKVxuICAgICAgICAgICAgICAgIGZpZWxkcy5hcHBlbmRDaGlsZChkaWZmaWN1bHR5SW5wdXQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBlYXN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICBlYXN5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZWFzeScpXG4gICAgICAgICAgICAgICAgZWFzeS50ZXh0Q29udGVudCA9ICdFYXN5J1xuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlJbnB1dC5hcHBlbmRDaGlsZChlYXN5KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKVxuICAgICAgICAgICAgICAgIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgICAgIGhhcmQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoYXJkJylcbiAgICAgICAgICAgICAgICBoYXJkLnRleHRDb250ZW50ID0gJ0hhcmQnXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eUlucHV0LmFwcGVuZENoaWxkKGhhcmQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbXBvc3NpYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICBpbXBvc3NpYmxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaW1wb3NzaWJsZScpXG4gICAgICAgICAgICAgICAgaW1wb3NzaWJsZS50ZXh0Q29udGVudCA9ICdJbXBvc3NpYmxlJ1xuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlJbnB1dC5hcHBlbmRDaGlsZChpbXBvc3NpYmxlKVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIH0pKClcblxuICAgIGNvbnN0IHdpbm5lckNoZWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgZ2FtZWJvYXJkID0gW11cblxuICAgICAgICBjb25zdCB2aWN0b3J5ID0gKCkgPT4geyAvLyBhbGwgcG9zc2libGUgY29tYmluYXRpb25zIG9mIGEgdGhyZWUtaW4tYS1yb3cgWyAwIDEgMiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyA0IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNiA3IDggXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGdhbWVib2FyZFswXSAmJiBnYW1lYm9hcmRbMF0gPT09IGdhbWVib2FyZFsxXSAmJiBnYW1lYm9hcmRbMV0gPT09IGdhbWVib2FyZFsyXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChnYW1lYm9hcmRbM10gJiYgZ2FtZWJvYXJkWzNdID09PSBnYW1lYm9hcmRbNF0gJiYgZ2FtZWJvYXJkWzRdID09PSBnYW1lYm9hcmRbNV0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZ2FtZWJvYXJkWzZdICYmIGdhbWVib2FyZFs2XSA9PT0gZ2FtZWJvYXJkWzddICYmIGdhbWVib2FyZFs3XSA9PT0gZ2FtZWJvYXJkWzhdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGdhbWVib2FyZFswXSAmJiBnYW1lYm9hcmRbMF0gPT09IGdhbWVib2FyZFszXSAmJiBnYW1lYm9hcmRbM10gPT09IGdhbWVib2FyZFs2XSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChnYW1lYm9hcmRbMV0gJiYgZ2FtZWJvYXJkWzFdID09PSBnYW1lYm9hcmRbNF0gJiYgZ2FtZWJvYXJkWzRdID09PSBnYW1lYm9hcmRbN10pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZ2FtZWJvYXJkWzJdICYmIGdhbWVib2FyZFsyXSA9PT0gZ2FtZWJvYXJkWzVdICYmIGdhbWVib2FyZFs1XSA9PT0gZ2FtZWJvYXJkWzhdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGdhbWVib2FyZFswXSAmJiBnYW1lYm9hcmRbMF0gPT09IGdhbWVib2FyZFs0XSAmJiBnYW1lYm9hcmRbNF0gPT09IGdhbWVib2FyZFs4XSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChnYW1lYm9hcmRbMl0gJiYgZ2FtZWJvYXJkWzJdID09PSBnYW1lYm9hcmRbNF0gJiYgZ2FtZWJvYXJkWzRdID09PSBnYW1lYm9hcmRbNl0pXG4gICAgICAgICAgICAgICAgICAgICAgICApIHsgcmV0dXJuIHRydWUgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2V9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb250ZW50IGluIGdhbWVib2FyZCkge1xuICAgICAgICAgICAgaWYgKCFnYW1lYm9hcmRbY29udGVudF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyByZXZpc2l0IHRoaXMgLSBpdCdzIGNhbGxpbmcgYSB0aWUgaWYgdGhlcmUgaXMgYW55IHRleHRDb250ZW50IGF0IGFsbCBcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjZWxsR3JvdXAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnB1c2goY2VsbC50ZXh0Q29udGVudClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodmljdG9yeSgpIHx8IHRpZSgpICkge1xuXG4gICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlIGhhdmUgYSB3aW5uZXIhJ1xuXG4gICAgICAgICAgICBjZWxsR3JvdXAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3Qgd2lubmVyUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgd2lubmVyUG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5uZXItcG9wdXAnKVxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh3aW5uZXJQb3B1cClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KVxuXG4gICAgICAgICAgICBjb25zdCB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgd2lubmVyUG9wdXAuYXBwZW5kQ2hpbGQod2lubmVySGVhZGluZylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB3aW5uZXJQb3B1cC5hcHBlbmRDaGlsZChidXR0b25MaXN0KVxuXG4gICAgICAgICAgICBjb25zdCByZW1hdGNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQocmVtYXRjaEJ1dHRvbilcbiAgICAgICAgICAgIHJlbWF0Y2hCdXR0b24udGV4dENvbnRlbnQgPSAnUmVtYXRjaD8nXG4gICAgICAgICAgICByZW1hdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdpbm5lclBvcHVwKVxuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSlcbiAgICAgICAgICAgICAgICBjZWxsR3JvdXAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB4VHVybiA9IHRydWUgXG4gICAgICAgICAgICAgICAgaGVhZGluZ1NldCgpXG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVyLnN5bWJvbCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyTW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHhUdXJuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKVxuICAgICAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgT3Zlcj8nXG4gICAgICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoIHZpY3RvcnkoKSApIHtcbiAgICAgICAgICAgICAgICB3aW5uZXJIZWFkaW5nLnRleHRDb250ZW50ID0gYFlvdSB3aW4sICR7aGVhZGluZ05hbWV9YCBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRpZSgpICkge1xuICAgICAgICAgICAgICAgIHdpbm5lckhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGllISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2dhbWVib2FyZCwgdmljdG9yeSwgdGllIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcGxheWVyT25lLCBwbGF5ZXJUd28sIGNlbGxHcm91cCwgd2lubmVyQ2hlY2ssIGNvbXB1dGVyIH1cbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=