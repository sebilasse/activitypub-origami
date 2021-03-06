(window["dojoWebpackJsonpapconf2020"] = window["dojoWebpackJsonpapconf2020"] || []).push([["src/cfp/CFP"],{

/***/ "./src/assets/photos/ada-byron.png":
/*!*****************************************!*\
  !*** ./src/assets/photos/ada-byron.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ada-byron.1voz9TMf.png";

/***/ }),

/***/ "./src/assets/photos/margaret-hamilton-web.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/photos/margaret-hamilton-web.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "margaret-hamilton-web.mz1Kdpwp.jpg";

/***/ }),

/***/ "./src/cfp/CFP.m.css":
/*!***************************!*\
  !*** ./src/cfp/CFP.m.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/CFP","root":"CFP-m__root__ecb8b22t5LA","figure":"CFP-m__figure__ecb8b23CLR9","bottom":"CFP-m__bottom__ecb8b21oXgf","portrait":"CFP-m__portrait__ecb8b22IkLm","desc1":"CFP-m__desc1__ecb8b21oa5f","desc2":"CFP-m__desc2__ecb8b21Kkep","m8l":"CFP-m__m8l__ecb8b22j7cy","responsiveCaption":"CFP-m__responsiveCaption__ecb8b21SA4E _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","img":"CFP-m__img__ecb8b23orxp","js":"CFP-m__js__ecb8b21XmUw","ratio16_7":"CFP-m__ratio16_7__ecb8b22iAgt","ratio16_9":"CFP-m__ratio16_9__ecb8b22IoQM"};

/***/ }),

/***/ "./src/cfp/CFP.tsx":
/*!*************************!*\
  !*** ./src/cfp/CFP.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/i18n */ "./node_modules/@dojo/framework/core/middleware/i18n.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppContent.m.css */ "./src/AppContent.m.css");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CFP_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CFP.m.css */ "./src/cfp/CFP.m.css");
/* harmony import */ var _CFP_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CFP_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nls_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nls/main */ "./src/cfp/nls/main.ts");




// import resize from '@dojo/framework/core/middleware/resize';



const snarkdown = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js").default;
const hamilton = __webpack_require__(/*! ../assets/photos/margaret-hamilton-web.jpg */ "./src/assets/photos/margaret-hamilton-web.jpg");
const byron = __webpack_require__(/*! ../assets/photos/ada-byron.png */ "./src/assets/photos/ada-byron.png");
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ icache: _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__["default"], theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_3__["default"], i18n: _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__["default"] /*, resize*/ });
/* harmony default export */ __webpack_exports__["default"] = (factory(function CFP({ middleware: { theme, i18n /*,icache, resize*/ } }) {
    const { messages } = i18n.localize(_nls_main__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const themedCss = theme.classes(_CFP_m_css__WEBPACK_IMPORTED_MODULE_5__);
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["orange"], _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["root"], themedCss.root, theme.isJS() ? themedCss.js : null] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", null, messages.headline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, messages.deadline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["leftColumn"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figure", { classes: themedCss.figure },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { key: "hamilton", classes: [themedCss.img, themedCss.ratio16_7], src: hamilton }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figcaption", { title: messages.hamiltonSpecialInstructions },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { classes: themedCss.responsiveCaption, innerHTML: snarkdown(messages.hamiltonCaption) }),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", null,
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("i", null, messages.hamiltonCredit))))),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["autoColumn"], themedCss.desc1] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.description) }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.cfp) }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { innerHTML: snarkdown(messages.cfpList) })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["autoColumn"], themedCss.desc2] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.registration) }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null,
                messages.codeOfConduct,
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("a", { href: "https://www.contributor-covenant.org/version/1/4/code-of-conduct", target: "_blank" }, "https://www.contributor-covenant.org"))),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["asideColumn"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("blockquote", null,
                "Let's keep things fun",
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("footer", null, "Christopher")),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figure", { classes: [themedCss.figure, themedCss.portrait, themedCss.bottom] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { key: "byron", classes: [themedCss.img], src: byron }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figcaption", { title: messages.byronSpecialInstructions },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { classes: themedCss.responsiveCaption, innerHTML: snarkdown(messages.byronCaption) }),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", null, messages.byronCredit))))));
}));


/***/ }),

/***/ "./src/cfp/nls/main.ts":
/*!*****************************!*\
  !*** ./src/cfp/nls/main.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    locales: {
        de: () => __webpack_require__.e(/*! import() | src/cfp/nls/de/main */ "src/cfp/nls/de/main").then(__webpack_require__.bind(null, /*! ./de/main */ "./src/cfp/nls/de/main.ts")),
        fr: () => __webpack_require__.e(/*! import() | src/cfp/nls/fr/main */ "src/cfp/nls/fr/main").then(__webpack_require__.bind(null, /*! ./fr/main */ "./src/cfp/nls/fr/main.ts"))
    },
    messages: {
        headline: 'Info',
        deadline: `Registration closed`,
        description: `
A conference about the present and future of ActivityPub,
the world’s leading federated social web standard.
<br><br>
Following a successful inaugural conference in [2019](/2019/),
we have expanded APConf 2020 to a four day event that will occur entirely on line
via Big Blue Button.
<br>
This year’s conference will include pre-recorded talks with live question and
answer sessions, birds of a feather sessions, lightning round talks, and a hackathon
that follows the conference.`,
        cfp: `
We *invited* proposals for birds of a feather session topics and 30- 60 minute talks
related to ActivityPub. Topics may include, but are not limited to:`,
        cfpList: `
- projects and implementations
- community management and hosting
- and ActivityPub extensions.`,
        registration: `
To *submit* a BoF, please include your title and a brief summary with your [registration](/#register).
<br><br>
Due to bandwidth limitations of video conferencing software, we ask for those
who wish to participate in the Big Blue Button sessions to register.
<br>
Registration happened on a first-come first-serve basis.
<br>
There is *no registration fee*.
<br>
All of the recorded talks will be uploaded to ConfTube and freely available regardless of registration
a week prior to the conference.`,
        codeOfConduct: `By participating, you agree to follow the terms of our Code of Conduct which can be found here:`,
        hamiltonCaption: `Pioneering computer scientist
Margaret Hamilton stands next to the code that she and her team wrote
to guide the Apollo spacecraft to the moon.`,
        hamiltonCredit: `Draper Laboratory`,
        hamiltonSpecialInstructions: `[CC0]
Retouched / restored by Adam Cuerden, modifications:
dust and scratches removed;
curves tweaked to bring out shadows,
approximately 3 pixels cropped from bottom in order to remove a border.`,
        byronCaption: `The world's First Computer Programmer:
<br>
Ada Lovelace aka Augusta Ada Byron
<br>
– 1843 or 1850`,
        byronCredit: `Daguerreotype by Antoine Claudet`,
        byronSpecialInstructions: `[CC0] wikimedia`
    }
});


/***/ })

}]);
//# sourceMappingURL=CFP.js.map