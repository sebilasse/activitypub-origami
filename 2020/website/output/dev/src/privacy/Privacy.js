(window["dojoWebpackJsonpapconf2020"] = window["dojoWebpackJsonpapconf2020"] || []).push([["src/privacy/Privacy"],{

/***/ "./src/assets/photos/low02_apconf_hellekin_002_hd.jpg":
/*!************************************************************!*\
  !*** ./src/assets/photos/low02_apconf_hellekin_002_hd.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low02_apconf_hellekin_002_hd.3sU4FWVk.jpg";

/***/ }),

/***/ "./src/assets/photos/low57_apconf_sl051_hd.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/photos/low57_apconf_sl051_hd.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low57_apconf_sl051_hd.2S343clO.jpg";

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

/***/ "./src/privacy/Privacy.tsx":
/*!*********************************!*\
  !*** ./src/privacy/Privacy.tsx ***!
  \*********************************/
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
/* harmony import */ var _cfp_CFP_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cfp/CFP.m.css */ "./src/cfp/CFP.m.css");
/* harmony import */ var _cfp_CFP_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cfp_CFP_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nls_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nls/main */ "./src/privacy/nls/main.ts");







const snarkdown = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js").default;
const privImg = __webpack_require__(/*! ../assets/photos/low02_apconf_hellekin_002_hd.jpg */ "./src/assets/photos/low02_apconf_hellekin_002_hd.jpg");
const privImg2 = __webpack_require__(/*! ../assets/photos/low57_apconf_sl051_hd.jpg */ "./src/assets/photos/low57_apconf_sl051_hd.jpg");
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ icache: _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__["default"], theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_3__["default"], i18n: _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__["default"] });
/* harmony default export */ __webpack_exports__["default"] = (factory(function CFP({ middleware: { theme, i18n /*,icache, resize*/ } }) {
    const { messages } = i18n.localize(_nls_main__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const themedCss = theme.classes(_cfp_CFP_m_css__WEBPACK_IMPORTED_MODULE_5__);
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["orange"], _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["root"], themedCss.root, theme.isJS() ? themedCss.js : null] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", null, messages.headline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, messages.deadline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["leftColumn"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figure", { classes: themedCss.figure },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { key: "privImg", classes: [themedCss.img, themedCss.ratio16_7], src: privImg }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figcaption", null,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", null,
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("i", null, messages.imgCredit)))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figure", { classes: themedCss.figure },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { key: "privImg2", classes: [themedCss.img, themedCss.ratio16_7], src: privImg2 }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figcaption", null,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", null,
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("i", null, messages.imgCredit2)))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["autoColumnWide"], themedCss.desc1] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.description) }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.overview) })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["autoColumnWide"], themedCss.desc2] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: "serif", innerHTML: snarkdown(messages.info) })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["asideColumn"], _AppContent_m_css__WEBPACK_IMPORTED_MODULE_4__["asideStart"]] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null,
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("em", null, "contact: "),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.m8l },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "activitypub "),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "conf"),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, " @rise ")),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "up.net"),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null)))));
}));


/***/ }),

/***/ "./src/privacy/nls/main.ts":
/*!*********************************!*\
  !*** ./src/privacy/nls/main.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    locales: {
        de: () => __webpack_require__.e(/*! import() | src/privacy/nls/de/main */ "src/privacy/nls/de/main").then(__webpack_require__.bind(null, /*! ./de/main */ "./src/privacy/nls/de/main.ts")),
        fr: () => __webpack_require__.e(/*! import() | src/privacy/nls/fr/main */ "src/privacy/nls/fr/main").then(__webpack_require__.bind(null, /*! ./fr/main */ "./src/privacy/nls/fr/main.ts"))
    },
    messages: {
        headline: 'Privacy',
        deadline: `GDPR §`,
        textHead: `An overview of data protection`,
        description: `
## 1. At the Conference<br>
*Concerns* <br>
Please raise any concerns over privacy via mail to the conf. organisers or contact a moderator in Big Blue Button.<br>
We are happy to help!<br>
	`,
        overview: `
## 2. An overview of data protection<br>
**The following gives a simple overview of what happens to your personal information when you visit our website.<br>
Personal information is any data with which you could be personally identified.
Detailed information on the subject of data protection can be found in our privacy policy found below.**
<br><br>
*Data collection on our website*
<br>
Who is responsible for the data collection on this website?<br>
The data collected on this website are processed by the website operator. The operator's contact details can be found in the website's info section.
<br><br>
**How do we collect your data?**<br>
We try to do not.<br>
Some data might be collected when you provide it to us. This could, for example, be data you enter on the registration form.
Right now we don't set cookies on our site and we neither will use any trackers like Google Analytics, Clicky or similar.
Pixels are there just to watch.
<br><br>
Other data are collected automatically by our IT systems when you visit the website.
These data are primarily technical data such as the browser and operating system you are using or when you accessed the page.
These data are collected automatically as soon as you enter our website.
<br><br>
**What do we use your data for?**<br>
Part of the data is collected to ensure the proper functioning of the website.
<br><br>
**What rights do you have regarding your data?**<br>
You always have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge.
You also have the right to request that it be corrected, blocked, or deleted.
You can contact us at any time using the address given in the legal notice if you have further questions about the issue of privacy and data protection.
You may also, of course, file a complaint with the competent regulatory authorities.
	`,
        info: `
## 3. General information and mandatory information<br>
*Data protection* <br>
The operators of this website take the protection of your personal data very seriously.
We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.
If you use this website, various pieces of personal data will be collected.
Personal information is any data with which you could be personally identified.
This privacy policy explains what information we collect and what we use it for. It also explains how and for what purpose this happens.<br>
Please note that data transmitted via the internet (e.g. via email communication) may be subject to security breaches.
Complete protection of your data from third-party access is not possible.
<br><br>
*Notice concerning the party responsible for this website*<br>
The party responsible for processing data on this website is:<br>
Sebastian Lasse, Germany<br>
Morgan Lemmer Webber, USA
<br><br>
The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing
personal data (names, email addresses, etc.). The redaktor foundation will audit this policy.
<br><br>
*SSL or TLS encryption*<br>
This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential content,
such as the inquiries you send to us as the site operator.
You can recognize an encrypted connection in your browser's address line when it changes from "http://" to "https://" and
the lock icon is displayed in your browser's address bar.<br>
If SSL or TLS encryption is activated, the data you transfer to us currently cannot be read by third parties.
<br><br>
*Revocation of your consent to the processing of your data*<br>
Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect.
An informal email making this request is sufficient. The data processed before we receive your request may still be legally processed.
<br><br>
*Information, blocking, deletion*<br>
As permitted by law, you have the right to be provided at any time with information free of charge about any of your personal data
that is stored as well as its origin, the recipient and the purpose for which it has been processed. You also have the right to have
this data corrected, blocked or deleted. <br>
You can contact us at any time using the address given in our legal notice if you have further questions on the topic of personal data.
<br><br>
## 4. Data collection on our website<br>
*Server log files*<br>
The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files".<br>
These are:
- Browser type and browser version
- Operating system used
- Referrer URL
- Host name of the accessing computer
- Time of the server request
- IP address
These data will not be combined with data from other sources.<br>
The basis for data processing is § 6 (1) (f) GDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
<br><br>
*Processing of data (customer and contract data)*<br>
We collect, process, and use personal data only insofar as it is necessary to establish, or modify legal relationships with us (master data).
This is done based on § 6 (1) (b) GDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
We collect, process and use your personal data when accessing our website (usage data) only to the extent required to enable you to access
our service or to bill you for the same.
Collected customer data shall be deleted after completion of the order or termination of the business relationship. Legal retention periods remain unaffected.
<br><br>
*Data transferred when signing up for services and digital content*<br>
We transmit personally identifiable data to third parties only to the extent required to fulfill the terms of your contract with us,
for example, to banks entrusted to process your payments.
Your data will not be transmitted for any other purpose unless you have given your express permission to do so.
Your data will not be disclosed to third parties for advertising purposes without your express consent.
<br><br>
The basis for data processing is § 6 (1) (b) GDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
<br><br>
#5. eMail
If you registered for the event, we require a valid email address as well as information that allows us to verify that you are the owner of the
specified email address and that you agree to receive this newsletter.
No additional data is collected or is only collected on a voluntary basis. We only use this data to send the requested information
and do not pass it on to third parties.<br>
We will, therefore, process any data you enter onto the contact form only with your consent per § 6 (1) (a) GDPR. <br>
You can revoke consent to the storage of your data and email address as well as their use for sending the newsletter at any time.
The data processed before we receive your request may still be legally processed.
<br><br>
The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel your subscription when said data will be deleted.
Data we have stored for other purposes (e.g. email addresses for the members area) remain unaffected.
<br><br>
*Hamburg, June 14th 2020*
	`,
        imgCredit: `hellekin`,
        imgCredit2: `Sebastian`
    }
});


/***/ })

}]);
//# sourceMappingURL=Privacy.js.map