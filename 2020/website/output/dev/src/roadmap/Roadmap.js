(window["dojoWebpackJsonpapconf2020"] = window["dojoWebpackJsonpapconf2020"] || []).push([["src/roadmap/Roadmap"],{

/***/ "./src/card/Card.m.css":
/*!*****************************!*\
  !*** ./src/card/Card.m.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/Card","root":"Card-m__root__ecb8b23qYSn","depth4":"Card-m__depth4__ecb8b29lIOC","content":"Card-m__content__ecb8b2wAYWL","dark":"Card-m__dark__ecb8b21na8n"};

/***/ }),

/***/ "./src/card/Card.tsx":
/*!***************************!*\
  !*** ./src/card/Card.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _Card_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.m.css */ "./src/card/Card.m.css");
/* harmony import */ var _Card_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_m_css__WEBPACK_IMPORTED_MODULE_2__);



const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"] }).properties();
/* harmony default export */ __webpack_exports__["default"] = (factory(function Card({ middleware: { theme }, properties, children }) {
    const { header, footer, depth = 1 } = properties();
    const themedCss = theme.classes(_Card_m_css__WEBPACK_IMPORTED_MODULE_2__);
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { key: "card", "data-test": "card", classes: [themedCss.root, depth === 4 ? themedCss.depth4 : null] },
        header,
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { key: "content", "data-test": "content", classes: themedCss.content }, children()),
        footer));
}));


/***/ }),

/***/ "./src/card/CardHeader.m.css":
/*!***********************************!*\
  !*** ./src/card/CardHeader.m.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/CardHeader","root":"CardHeader-m__root__ecb8b22odep _ui-m__l__ecb8b2MGqUU _typo__l__ecb8b23jYig","image":"CardHeader-m__image__ecb8b2fr0pX"};

/***/ }),

/***/ "./src/card/CardHeader.tsx":
/*!*********************************!*\
  !*** ./src/card/CardHeader.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _CardHeader_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardHeader.m.css */ "./src/card/CardHeader.m.css");
/* harmony import */ var _CardHeader_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardHeader_m_css__WEBPACK_IMPORTED_MODULE_2__);



const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"] }).properties();
/* harmony default export */ __webpack_exports__["default"] = (factory(function CardHeader({ middleware: { theme }, properties, children }) {
    const themedCss = theme.classes(_CardHeader_m_css__WEBPACK_IMPORTED_MODULE_2__);
    const { title, image } = properties();
    let content = children();
    if (!content.length && title) {
        content = [image && Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { classes: themedCss.image, src: image.src, alt: image.alt || title }), title];
    }
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("header", { key: "card-header", "data-test": "card-header", classes: themedCss.root }, content));
}));


/***/ }),

/***/ "./src/roadmap/Roadmap.m.css":
/*!***********************************!*\
  !*** ./src/roadmap/Roadmap.m.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/Roadmap","root":"Roadmap-m__root__ecb8b21womz","pageContent":"Roadmap-m__pageContent__ecb8b233a3K","header":"Roadmap-m__header__ecb8b21AXjK","timeline":"Roadmap-m__timeline__ecb8b226sjT","timelineEntry":"Roadmap-m__timelineEntry__ecb8b21me2O","cardHeader":"Roadmap-m__cardHeader__ecb8b21OuKE","card":"Roadmap-m__card__ecb8b23u4a5","timelineDate":"Roadmap-m__timelineDate__ecb8b2DHOQ3 _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","released":"Roadmap-m__released__ecb8b21Npuo","timelineDetails":"Roadmap-m__timelineDetails__ecb8b22_tq8","timelineMarker":"Roadmap-m__timelineMarker__ecb8b2gOHlr"};

/***/ }),

/***/ "./src/roadmap/Roadmap.tsx":
/*!*********************************!*\
  !*** ./src/roadmap/Roadmap.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Card */ "./src/card/Card.tsx");
/* harmony import */ var _card_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/CardHeader */ "./src/card/CardHeader.tsx");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppContent.m.css */ "./src/AppContent.m.css");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Roadmap_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Roadmap.m.css */ "./src/roadmap/Roadmap.m.css");
/* harmony import */ var _Roadmap_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Roadmap_m_css__WEBPACK_IMPORTED_MODULE_5__);






const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"] });
/* harmony default export */ __webpack_exports__["default"] = (factory(function Roadmap({ middleware: { theme } }) {
    const themedCss = theme.classes(_Roadmap_m_css__WEBPACK_IMPORTED_MODULE_5__);
    const timelineEntries = [
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Website"), released: true, date: 'June 15' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Deadline for CFP Submissions"), released: true, date: 'July 8' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Approval of Submissions"), released: true, date: 'July 15' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Detailed Planning"), released: true, date: 'August' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Planning Meeting"), released: true, date: 'September 5' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "End of pre-recorded talk submission"), released: false, date: 'September 11' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Deadline for uploads"), released: false, date: 'September 25' },
        { title: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, "Conference Meet and Greet"), released: false, date: 'October 2' }
    ];
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["root"], themedCss.root] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["headline"], themedCss.header] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", null, "What's coming up")),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { key: "timeline", classes: themedCss.timeline }, timelineEntries.map((entry) => (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [themedCss.timelineEntry, entry.released ? themedCss.released : null] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.timelineDate }, entry.date),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.timelineDetails },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.timelineMarker }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { header: Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_card_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], { title: entry.title, classes: { 'apconf2020/CardHeader': { root: [themedCss.cardHeader] } } }), classes: { 'apconf2020/Card': { root: [themedCss.card] } } }))))))));
}));


/***/ })

}]);
//# sourceMappingURL=Roadmap.js.map