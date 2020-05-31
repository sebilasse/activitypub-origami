var shimFeatures = {"no-bootstrap":true,"intersection-observer":true,"resize-observer":true,"web-animations":false,"build-fetch":false};
if (window.DojoHasEnvironment && window.DojoHasEnvironment.staticFeatures) {
	Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function (key) {
		shimFeatures[key] = window.DojoHasEnvironment.staticFeatures[key];
	});
}
window.DojoHasEnvironment = { staticFeatures: shimFeatures };(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("redaktor", [], factory);
	else if(typeof exports === 'object')
		exports["redaktor"] = factory();
	else
		root["redaktor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"bootstrap": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bootstrap": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"main":"main","platform/IntersectionObserver":"platform/IntersectionObserver","platform/ResizeObserver":"platform/ResizeObserver","platform/WebAnimations":"platform/WebAnimations","platform/client":"platform/client","platform/fetch":"platform/fetch","platform/pointerEvents":"platform/pointerEvents","src/widgets-apconf/intentButton/nls/ar/common":"src/widgets-apconf/intentButton/nls/ar/common","src/widgets-apconf/intentButton/nls/bg/common":"src/widgets-apconf/intentButton/nls/bg/common","src/widgets-apconf/intentButton/nls/cs/common":"src/widgets-apconf/intentButton/nls/cs/common","src/widgets-apconf/intentButton/nls/de/common":"src/widgets-apconf/intentButton/nls/de/common","src/widgets-apconf/intentButton/nls/eo/common":"src/widgets-apconf/intentButton/nls/eo/common","src/widgets-apconf/intentButton/nls/es/common":"src/widgets-apconf/intentButton/nls/es/common","src/widgets-apconf/intentButton/nls/eu/common":"src/widgets-apconf/intentButton/nls/eu/common","src/widgets-apconf/intentButton/nls/fa/common":"src/widgets-apconf/intentButton/nls/fa/common","src/widgets-apconf/intentButton/nls/fi/common":"src/widgets-apconf/intentButton/nls/fi/common","src/widgets-apconf/intentButton/nls/fr/common":"src/widgets-apconf/intentButton/nls/fr/common","src/widgets-apconf/intentButton/nls/gl/common":"src/widgets-apconf/intentButton/nls/gl/common","src/widgets-apconf/intentButton/nls/he/common":"src/widgets-apconf/intentButton/nls/he/common","src/widgets-apconf/intentButton/nls/hu/common":"src/widgets-apconf/intentButton/nls/hu/common","src/widgets-apconf/intentButton/nls/hy/common":"src/widgets-apconf/intentButton/nls/hy/common","src/widgets-apconf/intentButton/nls/io/common":"src/widgets-apconf/intentButton/nls/io/common","src/widgets-apconf/intentButton/nls/ja/common":"src/widgets-apconf/intentButton/nls/ja/common","src/widgets-apconf/intentButton/nls/ko/common":"src/widgets-apconf/intentButton/nls/ko/common","src/widgets-apconf/intentButton/nls/no/common":"src/widgets-apconf/intentButton/nls/no/common","src/widgets-apconf/intentButton/nls/oc/common":"src/widgets-apconf/intentButton/nls/oc/common","src/widgets-apconf/intentButton/nls/pl/common":"src/widgets-apconf/intentButton/nls/pl/common","src/widgets-apconf/intentButton/nls/pt/common":"src/widgets-apconf/intentButton/nls/pt/common","src/widgets-apconf/intentButton/nls/ru/common":"src/widgets-apconf/intentButton/nls/ru/common","src/widgets-apconf/intentButton/nls/sr-Latn/common":"src/widgets-apconf/intentButton/nls/sr-Latn/common","src/widgets-apconf/intentButton/nls/sr/common":"src/widgets-apconf/intentButton/nls/sr/common","src/widgets-apconf/intentButton/nls/uk/common":"src/widgets-apconf/intentButton/nls/uk/common","src/widgets-apconf/intentButton/nls/zh-CN/common":"src/widgets-apconf/intentButton/nls/zh-CN/common","src/widgets-apconf/intentButton/nls/zh-HK/common":"src/widgets-apconf/intentButton/nls/zh-HK/common","src/widgets-apconf/intentButton/nls/zh-TW/common":"src/widgets-apconf/intentButton/nls/zh-TW/common","src/widgets-apconf/intentButton/twitter/nls/ar/common":"src/widgets-apconf/intentButton/twitter/nls/ar/common","src/widgets-apconf/intentButton/twitter/nls/bg/common":"src/widgets-apconf/intentButton/twitter/nls/bg/common","src/widgets-apconf/intentButton/twitter/nls/cs/common":"src/widgets-apconf/intentButton/twitter/nls/cs/common","src/widgets-apconf/intentButton/twitter/nls/de/common":"src/widgets-apconf/intentButton/twitter/nls/de/common","src/widgets-apconf/intentButton/twitter/nls/eo/common":"src/widgets-apconf/intentButton/twitter/nls/eo/common","src/widgets-apconf/intentButton/twitter/nls/es/common":"src/widgets-apconf/intentButton/twitter/nls/es/common","src/widgets-apconf/intentButton/twitter/nls/eu/common":"src/widgets-apconf/intentButton/twitter/nls/eu/common","src/widgets-apconf/intentButton/twitter/nls/fa/common":"src/widgets-apconf/intentButton/twitter/nls/fa/common","src/widgets-apconf/intentButton/twitter/nls/fi/common":"src/widgets-apconf/intentButton/twitter/nls/fi/common","src/widgets-apconf/intentButton/twitter/nls/fr/common":"src/widgets-apconf/intentButton/twitter/nls/fr/common","src/widgets-apconf/intentButton/twitter/nls/gl/common":"src/widgets-apconf/intentButton/twitter/nls/gl/common","src/widgets-apconf/intentButton/twitter/nls/he/common":"src/widgets-apconf/intentButton/twitter/nls/he/common","src/widgets-apconf/intentButton/twitter/nls/hu/common":"src/widgets-apconf/intentButton/twitter/nls/hu/common","src/widgets-apconf/intentButton/twitter/nls/hy/common":"src/widgets-apconf/intentButton/twitter/nls/hy/common","src/widgets-apconf/intentButton/twitter/nls/io/common":"src/widgets-apconf/intentButton/twitter/nls/io/common","src/widgets-apconf/intentButton/twitter/nls/ja/common":"src/widgets-apconf/intentButton/twitter/nls/ja/common","src/widgets-apconf/intentButton/twitter/nls/ko/common":"src/widgets-apconf/intentButton/twitter/nls/ko/common","src/widgets-apconf/intentButton/twitter/nls/no/common":"src/widgets-apconf/intentButton/twitter/nls/no/common","src/widgets-apconf/intentButton/twitter/nls/oc/common":"src/widgets-apconf/intentButton/twitter/nls/oc/common","src/widgets-apconf/intentButton/twitter/nls/pl/common":"src/widgets-apconf/intentButton/twitter/nls/pl/common","src/widgets-apconf/intentButton/twitter/nls/pt/common":"src/widgets-apconf/intentButton/twitter/nls/pt/common","src/widgets-apconf/intentButton/twitter/nls/ru/common":"src/widgets-apconf/intentButton/twitter/nls/ru/common","src/widgets-apconf/intentButton/twitter/nls/sr-Latn/common":"src/widgets-apconf/intentButton/twitter/nls/sr-Latn/common","src/widgets-apconf/intentButton/twitter/nls/sr/common":"src/widgets-apconf/intentButton/twitter/nls/sr/common","src/widgets-apconf/intentButton/twitter/nls/uk/common":"src/widgets-apconf/intentButton/twitter/nls/uk/common","src/widgets-apconf/intentButton/twitter/nls/zh-CN/common":"src/widgets-apconf/intentButton/twitter/nls/zh-CN/common","src/widgets-apconf/intentButton/twitter/nls/zh-HK/common":"src/widgets-apconf/intentButton/twitter/nls/zh-HK/common","src/widgets-apconf/intentButton/twitter/nls/zh-TW/common":"src/widgets-apconf/intentButton/twitter/nls/zh-TW/common","src/widgets-apconf/shareToMastodon/nls/ar/mastodon":"src/widgets-apconf/shareToMastodon/nls/ar/mastodon","src/widgets-apconf/shareToMastodon/nls/bg/mastodon":"src/widgets-apconf/shareToMastodon/nls/bg/mastodon","src/widgets-apconf/shareToMastodon/nls/cs/mastodon":"src/widgets-apconf/shareToMastodon/nls/cs/mastodon","src/widgets-apconf/shareToMastodon/nls/de/mastodon":"src/widgets-apconf/shareToMastodon/nls/de/mastodon","src/widgets-apconf/shareToMastodon/nls/eo/mastodon":"src/widgets-apconf/shareToMastodon/nls/eo/mastodon","src/widgets-apconf/shareToMastodon/nls/es/mastodon":"src/widgets-apconf/shareToMastodon/nls/es/mastodon","src/widgets-apconf/shareToMastodon/nls/eu/mastodon":"src/widgets-apconf/shareToMastodon/nls/eu/mastodon","src/widgets-apconf/shareToMastodon/nls/fa/mastodon":"src/widgets-apconf/shareToMastodon/nls/fa/mastodon","src/widgets-apconf/shareToMastodon/nls/fi/mastodon":"src/widgets-apconf/shareToMastodon/nls/fi/mastodon","src/widgets-apconf/shareToMastodon/nls/fr/mastodon":"src/widgets-apconf/shareToMastodon/nls/fr/mastodon","src/widgets-apconf/shareToMastodon/nls/gl/mastodon":"src/widgets-apconf/shareToMastodon/nls/gl/mastodon","src/widgets-apconf/shareToMastodon/nls/he/mastodon":"src/widgets-apconf/shareToMastodon/nls/he/mastodon","src/widgets-apconf/shareToMastodon/nls/hu/mastodon":"src/widgets-apconf/shareToMastodon/nls/hu/mastodon","src/widgets-apconf/shareToMastodon/nls/hy/mastodon":"src/widgets-apconf/shareToMastodon/nls/hy/mastodon","src/widgets-apconf/shareToMastodon/nls/io/mastodon":"src/widgets-apconf/shareToMastodon/nls/io/mastodon","src/widgets-apconf/shareToMastodon/nls/ja/mastodon":"src/widgets-apconf/shareToMastodon/nls/ja/mastodon","src/widgets-apconf/shareToMastodon/nls/ko/mastodon":"src/widgets-apconf/shareToMastodon/nls/ko/mastodon","src/widgets-apconf/shareToMastodon/nls/no/mastodon":"src/widgets-apconf/shareToMastodon/nls/no/mastodon","src/widgets-apconf/shareToMastodon/nls/oc/mastodon":"src/widgets-apconf/shareToMastodon/nls/oc/mastodon","src/widgets-apconf/shareToMastodon/nls/pl/mastodon":"src/widgets-apconf/shareToMastodon/nls/pl/mastodon","src/widgets-apconf/shareToMastodon/nls/pt/mastodon":"src/widgets-apconf/shareToMastodon/nls/pt/mastodon","src/widgets-apconf/shareToMastodon/nls/ru/mastodon":"src/widgets-apconf/shareToMastodon/nls/ru/mastodon","src/widgets-apconf/shareToMastodon/nls/sr-Latn/mastodon":"src/widgets-apconf/shareToMastodon/nls/sr-Latn/mastodon","src/widgets-apconf/shareToMastodon/nls/sr/mastodon":"src/widgets-apconf/shareToMastodon/nls/sr/mastodon","src/widgets-apconf/shareToMastodon/nls/uk/mastodon":"src/widgets-apconf/shareToMastodon/nls/uk/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-CN/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-CN/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-HK/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-HK/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-TW/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-TW/mastodon"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"main":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"main":"main","platform/IntersectionObserver":"platform/IntersectionObserver","platform/ResizeObserver":"platform/ResizeObserver","platform/WebAnimations":"platform/WebAnimations","platform/client":"platform/client","platform/fetch":"platform/fetch","platform/pointerEvents":"platform/pointerEvents","src/widgets-apconf/intentButton/nls/ar/common":"src/widgets-apconf/intentButton/nls/ar/common","src/widgets-apconf/intentButton/nls/bg/common":"src/widgets-apconf/intentButton/nls/bg/common","src/widgets-apconf/intentButton/nls/cs/common":"src/widgets-apconf/intentButton/nls/cs/common","src/widgets-apconf/intentButton/nls/de/common":"src/widgets-apconf/intentButton/nls/de/common","src/widgets-apconf/intentButton/nls/eo/common":"src/widgets-apconf/intentButton/nls/eo/common","src/widgets-apconf/intentButton/nls/es/common":"src/widgets-apconf/intentButton/nls/es/common","src/widgets-apconf/intentButton/nls/eu/common":"src/widgets-apconf/intentButton/nls/eu/common","src/widgets-apconf/intentButton/nls/fa/common":"src/widgets-apconf/intentButton/nls/fa/common","src/widgets-apconf/intentButton/nls/fi/common":"src/widgets-apconf/intentButton/nls/fi/common","src/widgets-apconf/intentButton/nls/fr/common":"src/widgets-apconf/intentButton/nls/fr/common","src/widgets-apconf/intentButton/nls/gl/common":"src/widgets-apconf/intentButton/nls/gl/common","src/widgets-apconf/intentButton/nls/he/common":"src/widgets-apconf/intentButton/nls/he/common","src/widgets-apconf/intentButton/nls/hu/common":"src/widgets-apconf/intentButton/nls/hu/common","src/widgets-apconf/intentButton/nls/hy/common":"src/widgets-apconf/intentButton/nls/hy/common","src/widgets-apconf/intentButton/nls/io/common":"src/widgets-apconf/intentButton/nls/io/common","src/widgets-apconf/intentButton/nls/ja/common":"src/widgets-apconf/intentButton/nls/ja/common","src/widgets-apconf/intentButton/nls/ko/common":"src/widgets-apconf/intentButton/nls/ko/common","src/widgets-apconf/intentButton/nls/no/common":"src/widgets-apconf/intentButton/nls/no/common","src/widgets-apconf/intentButton/nls/oc/common":"src/widgets-apconf/intentButton/nls/oc/common","src/widgets-apconf/intentButton/nls/pl/common":"src/widgets-apconf/intentButton/nls/pl/common","src/widgets-apconf/intentButton/nls/pt/common":"src/widgets-apconf/intentButton/nls/pt/common","src/widgets-apconf/intentButton/nls/ru/common":"src/widgets-apconf/intentButton/nls/ru/common","src/widgets-apconf/intentButton/nls/sr-Latn/common":"src/widgets-apconf/intentButton/nls/sr-Latn/common","src/widgets-apconf/intentButton/nls/sr/common":"src/widgets-apconf/intentButton/nls/sr/common","src/widgets-apconf/intentButton/nls/uk/common":"src/widgets-apconf/intentButton/nls/uk/common","src/widgets-apconf/intentButton/nls/zh-CN/common":"src/widgets-apconf/intentButton/nls/zh-CN/common","src/widgets-apconf/intentButton/nls/zh-HK/common":"src/widgets-apconf/intentButton/nls/zh-HK/common","src/widgets-apconf/intentButton/nls/zh-TW/common":"src/widgets-apconf/intentButton/nls/zh-TW/common","src/widgets-apconf/intentButton/twitter/nls/ar/common":"src/widgets-apconf/intentButton/twitter/nls/ar/common","src/widgets-apconf/intentButton/twitter/nls/bg/common":"src/widgets-apconf/intentButton/twitter/nls/bg/common","src/widgets-apconf/intentButton/twitter/nls/cs/common":"src/widgets-apconf/intentButton/twitter/nls/cs/common","src/widgets-apconf/intentButton/twitter/nls/de/common":"src/widgets-apconf/intentButton/twitter/nls/de/common","src/widgets-apconf/intentButton/twitter/nls/eo/common":"src/widgets-apconf/intentButton/twitter/nls/eo/common","src/widgets-apconf/intentButton/twitter/nls/es/common":"src/widgets-apconf/intentButton/twitter/nls/es/common","src/widgets-apconf/intentButton/twitter/nls/eu/common":"src/widgets-apconf/intentButton/twitter/nls/eu/common","src/widgets-apconf/intentButton/twitter/nls/fa/common":"src/widgets-apconf/intentButton/twitter/nls/fa/common","src/widgets-apconf/intentButton/twitter/nls/fi/common":"src/widgets-apconf/intentButton/twitter/nls/fi/common","src/widgets-apconf/intentButton/twitter/nls/fr/common":"src/widgets-apconf/intentButton/twitter/nls/fr/common","src/widgets-apconf/intentButton/twitter/nls/gl/common":"src/widgets-apconf/intentButton/twitter/nls/gl/common","src/widgets-apconf/intentButton/twitter/nls/he/common":"src/widgets-apconf/intentButton/twitter/nls/he/common","src/widgets-apconf/intentButton/twitter/nls/hu/common":"src/widgets-apconf/intentButton/twitter/nls/hu/common","src/widgets-apconf/intentButton/twitter/nls/hy/common":"src/widgets-apconf/intentButton/twitter/nls/hy/common","src/widgets-apconf/intentButton/twitter/nls/io/common":"src/widgets-apconf/intentButton/twitter/nls/io/common","src/widgets-apconf/intentButton/twitter/nls/ja/common":"src/widgets-apconf/intentButton/twitter/nls/ja/common","src/widgets-apconf/intentButton/twitter/nls/ko/common":"src/widgets-apconf/intentButton/twitter/nls/ko/common","src/widgets-apconf/intentButton/twitter/nls/no/common":"src/widgets-apconf/intentButton/twitter/nls/no/common","src/widgets-apconf/intentButton/twitter/nls/oc/common":"src/widgets-apconf/intentButton/twitter/nls/oc/common","src/widgets-apconf/intentButton/twitter/nls/pl/common":"src/widgets-apconf/intentButton/twitter/nls/pl/common","src/widgets-apconf/intentButton/twitter/nls/pt/common":"src/widgets-apconf/intentButton/twitter/nls/pt/common","src/widgets-apconf/intentButton/twitter/nls/ru/common":"src/widgets-apconf/intentButton/twitter/nls/ru/common","src/widgets-apconf/intentButton/twitter/nls/sr-Latn/common":"src/widgets-apconf/intentButton/twitter/nls/sr-Latn/common","src/widgets-apconf/intentButton/twitter/nls/sr/common":"src/widgets-apconf/intentButton/twitter/nls/sr/common","src/widgets-apconf/intentButton/twitter/nls/uk/common":"src/widgets-apconf/intentButton/twitter/nls/uk/common","src/widgets-apconf/intentButton/twitter/nls/zh-CN/common":"src/widgets-apconf/intentButton/twitter/nls/zh-CN/common","src/widgets-apconf/intentButton/twitter/nls/zh-HK/common":"src/widgets-apconf/intentButton/twitter/nls/zh-HK/common","src/widgets-apconf/intentButton/twitter/nls/zh-TW/common":"src/widgets-apconf/intentButton/twitter/nls/zh-TW/common","src/widgets-apconf/shareToMastodon/nls/ar/mastodon":"src/widgets-apconf/shareToMastodon/nls/ar/mastodon","src/widgets-apconf/shareToMastodon/nls/bg/mastodon":"src/widgets-apconf/shareToMastodon/nls/bg/mastodon","src/widgets-apconf/shareToMastodon/nls/cs/mastodon":"src/widgets-apconf/shareToMastodon/nls/cs/mastodon","src/widgets-apconf/shareToMastodon/nls/de/mastodon":"src/widgets-apconf/shareToMastodon/nls/de/mastodon","src/widgets-apconf/shareToMastodon/nls/eo/mastodon":"src/widgets-apconf/shareToMastodon/nls/eo/mastodon","src/widgets-apconf/shareToMastodon/nls/es/mastodon":"src/widgets-apconf/shareToMastodon/nls/es/mastodon","src/widgets-apconf/shareToMastodon/nls/eu/mastodon":"src/widgets-apconf/shareToMastodon/nls/eu/mastodon","src/widgets-apconf/shareToMastodon/nls/fa/mastodon":"src/widgets-apconf/shareToMastodon/nls/fa/mastodon","src/widgets-apconf/shareToMastodon/nls/fi/mastodon":"src/widgets-apconf/shareToMastodon/nls/fi/mastodon","src/widgets-apconf/shareToMastodon/nls/fr/mastodon":"src/widgets-apconf/shareToMastodon/nls/fr/mastodon","src/widgets-apconf/shareToMastodon/nls/gl/mastodon":"src/widgets-apconf/shareToMastodon/nls/gl/mastodon","src/widgets-apconf/shareToMastodon/nls/he/mastodon":"src/widgets-apconf/shareToMastodon/nls/he/mastodon","src/widgets-apconf/shareToMastodon/nls/hu/mastodon":"src/widgets-apconf/shareToMastodon/nls/hu/mastodon","src/widgets-apconf/shareToMastodon/nls/hy/mastodon":"src/widgets-apconf/shareToMastodon/nls/hy/mastodon","src/widgets-apconf/shareToMastodon/nls/io/mastodon":"src/widgets-apconf/shareToMastodon/nls/io/mastodon","src/widgets-apconf/shareToMastodon/nls/ja/mastodon":"src/widgets-apconf/shareToMastodon/nls/ja/mastodon","src/widgets-apconf/shareToMastodon/nls/ko/mastodon":"src/widgets-apconf/shareToMastodon/nls/ko/mastodon","src/widgets-apconf/shareToMastodon/nls/no/mastodon":"src/widgets-apconf/shareToMastodon/nls/no/mastodon","src/widgets-apconf/shareToMastodon/nls/oc/mastodon":"src/widgets-apconf/shareToMastodon/nls/oc/mastodon","src/widgets-apconf/shareToMastodon/nls/pl/mastodon":"src/widgets-apconf/shareToMastodon/nls/pl/mastodon","src/widgets-apconf/shareToMastodon/nls/pt/mastodon":"src/widgets-apconf/shareToMastodon/nls/pt/mastodon","src/widgets-apconf/shareToMastodon/nls/ru/mastodon":"src/widgets-apconf/shareToMastodon/nls/ru/mastodon","src/widgets-apconf/shareToMastodon/nls/sr-Latn/mastodon":"src/widgets-apconf/shareToMastodon/nls/sr-Latn/mastodon","src/widgets-apconf/shareToMastodon/nls/sr/mastodon":"src/widgets-apconf/shareToMastodon/nls/sr/mastodon","src/widgets-apconf/shareToMastodon/nls/uk/mastodon":"src/widgets-apconf/shareToMastodon/nls/uk/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-CN/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-CN/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-HK/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-HK/mastodon","src/widgets-apconf/shareToMastodon/nls/zh-TW/mastodon":"src/widgets-apconf/shareToMastodon/nls/zh-TW/mastodon"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["dojoWebpackJsonpredaktor"] = window["dojoWebpackJsonpredaktor"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@dojo/framework/has/has.mjs":
/*!**************************************************!*\
  !*** ./node_modules/@dojo/framework/has/has.mjs ***!
  \**************************************************/
/*! exports provided: testCache, testFunctions, load, normalize, exists, add, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCache", function() { return testCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testFunctions", function() { return testFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");

/**
 * A cache of results of feature tests
 */
const testCache = {};
/**
 * A cache of the un-resolved feature tests
 */
const testFunctions = {};
/* Grab the staticFeatures if there are available */
const { staticFeatures } = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].DojoHasEnvironment || {};
/* Cleaning up the DojoHasEnviornment */
if ('DojoHasEnvironment' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    delete _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].DojoHasEnvironment;
}
/**
 * Custom type guard to narrow the `staticFeatures` to either a map or a function that
 * returns a map.
 *
 * @param value The value to guard for
 */
function isStaticFeatureFunction(value) {
    return typeof value === 'function';
}
/**
 * The cache of asserted features that were available in the global scope when the
 * module loaded
 */
const staticCache = staticFeatures
    ? isStaticFeatureFunction(staticFeatures)
        ? staticFeatures.apply(_shim_global__WEBPACK_IMPORTED_MODULE_0__["default"])
        : staticFeatures
    : {}; /* Providing an empty cache, if none was in the environment

/**
* AMD plugin function.
*
* Conditional loads modules based on a has feature test value.
*
* @param resourceId Gives the resolved module id to load.
* @param require The loader require function with respect to the module that contained the plugin resource in its
*                dependency list.
* @param load Callback to loader that consumes result of plugin demand.
*/
function load(resourceId, require, load, config) {
    resourceId ? require([resourceId], load) : load();
}
/**
 * AMD plugin function.
 *
 * Resolves resourceId into a module id based on possibly-nested tenary expression that branches on has feature test
 * value(s).
 *
 * @param resourceId The id of the module
 * @param normalize Resolves a relative module id into an absolute module id
 */
function normalize(resourceId, normalize) {
    const tokens = resourceId.match(/[\?:]|[^:\?]*/g) || [];
    let i = 0;
    function get(skip) {
        const term = tokens[i++];
        if (term === ':') {
            // empty string module name, resolves to null
            return null;
        }
        else {
            // postfixed with a ? means it is a feature to branch on, the term is the name of the feature
            if (tokens[i++] === '?') {
                if (!skip && has(term)) {
                    // matched the feature, get the first value from the options
                    return get();
                }
                else {
                    // did not match, get the second value, passing over the first
                    get(true);
                    return get(skip);
                }
            }
            // a module
            return term;
        }
    }
    const id = get();
    return id && normalize(id);
}
/**
 * Check if a feature has already been registered
 *
 * @param feature the name of the feature
 */
function exists(feature) {
    const normalizedFeature = feature.toLowerCase();
    return Boolean(normalizedFeature in staticCache || normalizedFeature in testCache || testFunctions[normalizedFeature]);
}
/**
 * Register a new test for a named feature.
 *
 * @example
 * has.add('dom-addeventlistener', !!document.addEventListener);
 *
 * @example
 * has.add('touch-events', function () {
 *    return 'ontouchstart' in document
 * });
 *
 * @param feature the name of the feature
 * @param value the value reported of the feature, or a function that will be executed once on first test
 * @param overwrite if an existing value should be overwritten. Defaults to false.
 */
function add(feature, value, overwrite = false) {
    const normalizedFeature = feature.toLowerCase();
    if (exists(normalizedFeature) && !overwrite && !(normalizedFeature in staticCache)) {
        throw new TypeError(`Feature "${feature}" exists and overwrite not true.`);
    }
    if (typeof value === 'function') {
        testFunctions[normalizedFeature] = value;
    }
    else {
        testCache[normalizedFeature] = value;
        delete testFunctions[normalizedFeature];
    }
}
/**
 * Return the current value of a named feature.
 *
 * @param feature The name of the feature to test.
 */
function has(feature) {
    let result;
    const normalizedFeature = feature.toLowerCase();
    if (normalizedFeature in staticCache) {
        result = staticCache[normalizedFeature];
    }
    else if (testFunctions[normalizedFeature]) {
        result = testCache[normalizedFeature] = testFunctions[normalizedFeature].call(null);
        delete testFunctions[normalizedFeature];
    }
    else if (normalizedFeature in testCache) {
        result = testCache[normalizedFeature];
    }
    else {
        throw new TypeError(`Attempt to detect unregistered has feature "${feature}"`);
    }
    return result;
}
/*
 * Out of the box feature tests
 */
add('public-path', undefined);
/* flag for dojo debug, default to false */
add('dojo-debug', false);
/* Detects if the environment is "browser like" */
add('host-browser', typeof document !== 'undefined' && typeof location !== 'undefined');
/* Detects if the environment appears to be NodeJS */
add('host-node', function () {
    if (typeof process === 'object' && process.versions && process.versions.node) {
        return process.versions.node;
    }
});
add('fetch', 'fetch' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"] && typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].fetch === 'function', true);
add('es6-array', () => {
    return (['from', 'of'].every((key) => key in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Array) &&
        ['findIndex', 'find', 'copyWithin'].every((key) => key in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Array.prototype));
}, true);
add('es6-array-fill', () => {
    if ('fill' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Array.prototype) {
        /* Some versions of Safari do not properly implement this */
        return [1].fill(9, Number.POSITIVE_INFINITY)[0] === 1;
    }
    return false;
}, true);
add('es7-array', () => 'includes' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Array.prototype, true);
/* Map */
add('es6-map', () => {
    if (typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Map === 'function') {
        /*
    IE11 and older versions of Safari are missing critical ES6 Map functionality
    We wrap this in a try/catch because sometimes the Map constructor exists, but does not
    take arguments (iOS 8.4)
     */
        try {
            const map = new _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Map([[0, 1]]);
            return (map.has(0) &&
                typeof map.keys === 'function' &&
                has('es6-symbol') &&
                typeof map.values === 'function' &&
                typeof map.entries === 'function');
        }
        catch (e) {
            /* istanbul ignore next: not testing on iOS at the moment */
            return false;
        }
    }
    return false;
}, true);
/* Math */
add('es6-math', () => {
    return [
        'clz32',
        'sign',
        'log10',
        'log2',
        'log1p',
        'expm1',
        'cosh',
        'sinh',
        'tanh',
        'acosh',
        'asinh',
        'atanh',
        'trunc',
        'fround',
        'cbrt',
        'hypot'
    ].every((name) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Math[name] === 'function');
}, true);
add('es6-math-imul', () => {
    if ('imul' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Math) {
        /* Some versions of Safari on ios do not properly implement this */
        return Math.imul(0xffffffff, 5) === -5;
    }
    return false;
}, true);
/* Object */
add('es6-object', () => {
    return (has('es6-symbol') &&
        ['assign', 'is', 'getOwnPropertySymbols', 'setPrototypeOf'].every((name) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Object[name] === 'function'));
}, true);
add('es2017-object', () => {
    return ['values', 'entries', 'getOwnPropertyDescriptors'].every((name) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Object[name] === 'function');
}, true);
/* Observable */
add('es-observable', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Observable !== 'undefined', true);
/* Promise */
add('es6-promise', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise !== 'undefined' && has('es6-symbol'), true);
add('es2018-promise-finally', () => has('es6-promise') && typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise.prototype.finally !== 'undefined', true);
/* Set */
add('es6-set', () => {
    if (typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Set === 'function') {
        /* IE11 and older versions of Safari are missing critical ES6 Set functionality */
        const set = new _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Set([1]);
        return set.has(1) && 'keys' in set && typeof set.keys === 'function' && has('es6-symbol');
    }
    return false;
}, true);
/* String */
add('es6-string', () => {
    return ([
        /* static methods */
        'fromCodePoint'
    ].every((key) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].String[key] === 'function') &&
        [
            /* instance methods */
            'codePointAt',
            'normalize',
            'repeat',
            'startsWith',
            'endsWith',
            'includes'
        ].every((key) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].String.prototype[key] === 'function'));
}, true);
add('es6-string-raw', () => {
    function getCallSite(callSite, ...substitutions) {
        const result = [...callSite];
        result.raw = callSite.raw;
        return result;
    }
    if ('raw' in _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].String) {
        let b = 1;
        let callSite = getCallSite `a\n${b}`;
        callSite.raw = ['a\\n'];
        const supportsTrunc = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].String.raw(callSite, 42) === 'a\\n';
        return supportsTrunc;
    }
    return false;
}, true);
add('es2017-string', () => {
    return ['padStart', 'padEnd'].every((key) => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].String.prototype[key] === 'function');
}, true);
/* Symbol */
add('es6-symbol', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol !== 'undefined' && typeof Symbol() === 'symbol', true);
/* WeakMap */
add('es6-weakmap', () => {
    if (typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].WeakMap !== 'undefined') {
        /* IE11 and older versions of Safari are missing critical ES6 Map functionality */
        const key1 = {};
        const key2 = {};
        const map = new _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].WeakMap([[key1, 1]]);
        Object.freeze(key1);
        return map.get(key1) === 1 && map.set(key2, 2) === map && has('es6-symbol');
    }
    return false;
}, true);
/* Miscellaneous features */
add('microtasks', () => has('es6-promise') || has('host-node') || has('dom-mutationobserver'), true);
add('postmessage', () => {
    // If window is undefined, and we have postMessage, it probably means we're in a web worker. Web workers have
    // post message but it doesn't work how we expect it to, so it's best just to pretend it doesn't exist.
    return typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].window !== 'undefined' && typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].postMessage === 'function';
}, true);
add('raf', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].requestAnimationFrame === 'function', true);
add('setimmediate', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].setImmediate !== 'undefined', true);
/* DOM Features */
add('dom-mutationobserver', () => {
    if (has('host-browser') && Boolean(_shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].MutationObserver || _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].WebKitMutationObserver)) {
        // IE11 has an unreliable MutationObserver implementation where setProperty() does not
        // generate a mutation event, observers can crash, and the queue does not drain
        // reliably. The following feature test was adapted from
        // https://gist.github.com/t10ko/4aceb8c71681fdb275e33efe5e576b14
        const example = document.createElement('div');
        /* tslint:disable-next-line:variable-name */
        const HostMutationObserver = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].MutationObserver || _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].WebKitMutationObserver;
        const observer = new HostMutationObserver(function () { });
        observer.observe(example, { attributes: true });
        example.style.setProperty('display', 'block');
        return Boolean(observer.takeRecords().length);
    }
    return false;
}, true);
add('dom-webanimation', () => has('host-browser') && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].Animation !== undefined && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].KeyframeEffect !== undefined, true);
add('abort-controller', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].AbortController !== 'undefined');
add('abort-signal', () => typeof _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].AbortSignal !== 'undefined');
add('dom-intersection-observer', () => has('host-browser') && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].IntersectionObserver !== undefined, true);
add('dom-resize-observer', () => has('host-browser') && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].ResizeObserver !== undefined, true);
add('dom-pointer-events', () => has('host-browser') && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].onpointerdown !== undefined, true);
add('build-elide', false);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@dojo/framework/shim/Promise.mjs?7a0f":
/*!*******************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/Promise.mjs ***!
  \*******************************************************/
/*! exports provided: ShimPromise, isThenable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShimPromise", function() { return ShimPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _support_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support/queue */ "./node_modules/@dojo/framework/shim/support/queue.mjs");
/* harmony import */ var _Symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Symbol */ "./node_modules/@dojo/framework/shim/Symbol.mjs");
/* harmony import */ var _has_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../has/has */ "./node_modules/@dojo/framework/has/has.mjs");




let ShimPromise = _global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise;
const isThenable = function isThenable(value) {
    return value && typeof value.then === 'function';
};
if (!Object(_has_has__WEBPACK_IMPORTED_MODULE_3__["default"])('es6-promise')) {
    _global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise = ShimPromise = (_a = class Promise {
            /**
             * Creates a new Promise.
             *
             * @constructor
             *
             * @param executor
             * The executor function is called immediately when the Promise is instantiated. It is responsible for
             * starting the asynchronous operation when it is invoked.
             *
             * The executor must call either the passed `resolve` function when the asynchronous operation has completed
             * successfully, or the `reject` function when the operation fails.
             */
            constructor(executor) {
                /**
                 * The current state of this promise.
                 */
                this.state = 1 /* Pending */;
                this[Symbol.toStringTag] = 'Promise';
                /**
                 * If true, the resolution of this promise is chained ("locked in") to another promise.
                 */
                let isChained = false;
                /**
                 * Whether or not this promise is in a resolved state.
                 */
                const isResolved = () => {
                    return this.state !== 1 /* Pending */ || isChained;
                };
                /**
                 * Callbacks that should be invoked once the asynchronous operation has completed.
                 */
                let callbacks = [];
                /**
                 * Initially pushes callbacks onto a queue for execution once this promise settles. After the promise settles,
                 * enqueues callbacks for execution on the next event loop turn.
                 */
                let whenFinished = function (callback) {
                    if (callbacks) {
                        callbacks.push(callback);
                    }
                };
                /**
                 * Settles this promise.
                 *
                 * @param newState The resolved state for this promise.
                 * @param {T|any} value The resolved value for this promise.
                 */
                const settle = (newState, value) => {
                    // A promise can only be settled once.
                    if (this.state !== 1 /* Pending */) {
                        return;
                    }
                    this.state = newState;
                    this.resolvedValue = value;
                    whenFinished = _support_queue__WEBPACK_IMPORTED_MODULE_1__["queueMicroTask"];
                    // Only enqueue a callback runner if there are callbacks so that initially fulfilled Promises don't have to
                    // wait an extra turn.
                    if (callbacks && callbacks.length > 0) {
                        Object(_support_queue__WEBPACK_IMPORTED_MODULE_1__["queueMicroTask"])(function () {
                            if (callbacks) {
                                let count = callbacks.length;
                                for (let i = 0; i < count; ++i) {
                                    callbacks[i].call(null);
                                }
                                callbacks = null;
                            }
                        });
                    }
                };
                /**
                 * Resolves this promise.
                 *
                 * @param newState The resolved state for this promise.
                 * @param {T|any} value The resolved value for this promise.
                 */
                const resolve = (newState, value) => {
                    if (isResolved()) {
                        return;
                    }
                    if (isThenable(value)) {
                        value.then(settle.bind(null, 0 /* Fulfilled */), settle.bind(null, 2 /* Rejected */));
                        isChained = true;
                    }
                    else {
                        settle(newState, value);
                    }
                };
                this.then = (onFulfilled, onRejected) => {
                    return new Promise((resolve, reject) => {
                        // whenFinished initially queues up callbacks for execution after the promise has settled. Once the
                        // promise has settled, whenFinished will schedule callbacks for execution on the next turn through the
                        // event loop.
                        whenFinished(() => {
                            const callback = this.state === 2 /* Rejected */ ? onRejected : onFulfilled;
                            if (typeof callback === 'function') {
                                try {
                                    resolve(callback(this.resolvedValue));
                                }
                                catch (error) {
                                    reject(error);
                                }
                            }
                            else if (this.state === 2 /* Rejected */) {
                                reject(this.resolvedValue);
                            }
                            else {
                                resolve(this.resolvedValue);
                            }
                        });
                    });
                };
                try {
                    executor(resolve.bind(null, 0 /* Fulfilled */), resolve.bind(null, 2 /* Rejected */));
                }
                catch (error) {
                    settle(2 /* Rejected */, error);
                }
            }
            static all(iterable) {
                return new this(function (resolve, reject) {
                    const values = [];
                    let complete = 0;
                    let total = 0;
                    let populating = true;
                    function fulfill(index, value) {
                        values[index] = value;
                        ++complete;
                        finish();
                    }
                    function finish() {
                        if (populating || complete < total) {
                            return;
                        }
                        resolve(values);
                    }
                    function processItem(index, item) {
                        ++total;
                        if (isThenable(item)) {
                            // If an item Promise rejects, this Promise is immediately rejected with the item
                            // Promise's rejection error.
                            item.then(fulfill.bind(null, index), reject);
                        }
                        else {
                            Promise.resolve(item).then(fulfill.bind(null, index));
                        }
                    }
                    let i = 0;
                    for (const value of iterable) {
                        processItem(i, value);
                        i++;
                    }
                    populating = false;
                    finish();
                });
            }
            static race(iterable) {
                return new this(function (resolve, reject) {
                    for (const item of iterable) {
                        if (item instanceof Promise) {
                            // If a Promise item rejects, this Promise is immediately rejected with the item
                            // Promise's rejection error.
                            item.then(resolve, reject);
                        }
                        else {
                            Promise.resolve(item).then(resolve);
                        }
                    }
                });
            }
            static reject(reason) {
                return new this(function (resolve, reject) {
                    reject(reason);
                });
            }
            static resolve(value) {
                return new this(function (resolve) {
                    resolve(value);
                });
            }
            catch(onRejected) {
                return this.then(undefined, onRejected);
            }
        },
        _a[Symbol.species] = ShimPromise,
        _a);
    // this cast is needed in order to omit finally in the class declaration; this was done so the finally code
    // is not duplicated and always added in the conditional below
}
if (!Object(_has_has__WEBPACK_IMPORTED_MODULE_3__["default"])('es2018-promise-finally')) {
    _global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise.prototype.finally = function (onFinally) {
        return this.then(onFinally && ((value) => Promise.resolve(onFinally()).then(() => value)), onFinally &&
            ((reason) => Promise.resolve(onFinally()).then(() => {
                throw reason;
            })));
    };
}
/* harmony default export */ __webpack_exports__["default"] = (ShimPromise);
var _a;


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/Symbol.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/Symbol.mjs ***!
  \******************************************************/
/*! exports provided: Symbol, isSymbol, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony import */ var _has_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../has/has */ "./node_modules/@dojo/framework/has/has.mjs");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _support_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support/util */ "./node_modules/@dojo/framework/shim/support/util.mjs");



let Symbol = _global__WEBPACK_IMPORTED_MODULE_1__["default"].Symbol;
if (false) {}
/**
 * A custom guard function that determines if an object is a symbol or not
 * @param  {any}       value The value to check to see if it is a symbol or not
 * @return {is symbol}       Returns true if a symbol or not (and narrows the type guard)
 */
function isSymbol(value) {
    return (value && (typeof value === 'symbol' || value['@@toStringTag'] === 'Symbol')) || false;
}
/**
 * Fill any missing well known symbols if the native Symbol is missing them
 */
[
    'hasInstance',
    'isConcatSpreadable',
    'iterator',
    'species',
    'replace',
    'search',
    'split',
    'match',
    'toPrimitive',
    'toStringTag',
    'unscopables',
    'observable'
].forEach((wellKnown) => {
    if (!Symbol[wellKnown]) {
        Object.defineProperty(Symbol, wellKnown, Object(_support_util__WEBPACK_IMPORTED_MODULE_2__["getValueDescriptor"])(Symbol.for(wellKnown), false, false));
    }
});
/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/global.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/global.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const globalObject = (function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
})();
/* harmony default export */ __webpack_exports__["default"] = (globalObject);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@dojo/framework/shim/support/queue.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/support/queue.mjs ***!
  \*************************************************************/
/*! exports provided: queueTask, queueAnimationTask, queueMicroTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueTask", function() { return queueTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueAnimationTask", function() { return queueAnimationTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueMicroTask", function() { return queueMicroTask; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _has_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../has/has */ "./node_modules/@dojo/framework/has/has.mjs");


function executeTask(item) {
    if (item && item.isActive && item.callback) {
        item.callback();
    }
}
function getQueueHandle(item, destructor) {
    return {
        destroy: function () {
            this.destroy = function () { };
            item.isActive = false;
            item.callback = null;
            if (destructor) {
                destructor();
            }
        }
    };
}
let checkMicroTaskQueue;
let microTasks;
/**
 * Schedules a callback to the macrotask queue.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
const queueTask = (function () {
    let destructor;
    let enqueue;
    // Since the IE implementation of `setImmediate` is not flawless, we will test for `postMessage` first.
    if (true) {
        const queue = [];
        _global__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('message', function (event) {
            // Confirm that the event was triggered by the current window and by this particular implementation.
            if (event.source === _global__WEBPACK_IMPORTED_MODULE_0__["default"] && event.data === 'dojo-queue-message') {
                event.stopPropagation();
                if (queue.length) {
                    executeTask(queue.shift());
                }
            }
        });
        enqueue = function (item) {
            queue.push(item);
            _global__WEBPACK_IMPORTED_MODULE_0__["default"].postMessage('dojo-queue-message', '*');
        };
    }
    else {}
    function queueTask(callback) {
        const item = {
            isActive: true,
            callback: callback
        };
        const id = enqueue(item);
        return getQueueHandle(item, destructor &&
            function () {
                destructor(id);
            });
    }
    // TODO: Use aspect.before when it is available.
    return true
        ? queueTask
        : undefined;
})();
// When no mechanism for registering microtasks is exposed by the environment, microtasks will
// be queued and then executed in a single macrotask before the other macrotasks are executed.
if (false) {}
/**
 * Schedules an animation task with `window.requestAnimationFrame` if it exists, or with `queueTask` otherwise.
 *
 * Since requestAnimationFrame's behavior does not match that expected from `queueTask`, it is not used there.
 * However, at times it makes more sense to delegate to requestAnimationFrame; hence the following method.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
const queueAnimationTask = (function () {
    if (false) {}
    function queueAnimationTask(callback) {
        const item = {
            isActive: true,
            callback: callback
        };
        const rafId = requestAnimationFrame(executeTask.bind(null, item));
        return getQueueHandle(item, function () {
            cancelAnimationFrame(rafId);
        });
    }
    // TODO: Use aspect.before when it is available.
    return true
        ? queueAnimationTask
        : undefined;
})();
/**
 * Schedules a callback to the microtask queue.
 *
 * Any callbacks registered with `queueMicroTask` will be executed before the next macrotask. If no native
 * mechanism for scheduling macrotasks is exposed, then any callbacks will be fired before any macrotask
 * registered with `queueTask` or `queueAnimationTask`.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
let queueMicroTask = (function () {
    let enqueue;
    if (false) {}
    else if (true) {
        enqueue = function (item) {
            _global__WEBPACK_IMPORTED_MODULE_0__["default"].Promise.resolve(item).then(executeTask);
        };
    }
    else {}
    return function (callback) {
        const item = {
            isActive: true,
            callback: callback
        };
        enqueue(item);
        return getQueueHandle(item);
    };
})();


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/support/util.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/support/util.mjs ***!
  \************************************************************/
/*! exports provided: getValueDescriptor, wrapNative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueDescriptor", function() { return getValueDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNative", function() { return wrapNative; });
/**
 * Helper function to generate a value property descriptor
 *
 * @param value        The value the property descriptor should be set to
 * @param enumerable   If the property should be enumberable, defaults to false
 * @param writable     If the property should be writable, defaults to true
 * @param configurable If the property should be configurable, defaults to true
 * @return             The property descriptor object
 */
function getValueDescriptor(value, enumerable = false, writable = true, configurable = true) {
    return {
        value: value,
        enumerable: enumerable,
        writable: writable,
        configurable: configurable
    };
}
function wrapNative(nativeFunction) {
    return function (target, ...args) {
        return nativeFunction.apply(target, args);
    };
}


/***/ }),

/***/ "./node_modules/@dojo/webpack-contrib/bootstrap-plugin/async.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@dojo/webpack-contrib/bootstrap-plugin/async.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! @dojo/framework/has/has */ "./node_modules/@dojo/framework/has/has.mjs");
__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs?7a0f");
__webpack_require__(/*! ./common */ "./node_modules/@dojo/webpack-contrib/bootstrap-plugin/common.js");

var modules = [];

if (has.default('build-serve')) {
	modules.push(__webpack_require__.e(/*! import() | platform/client */ "platform/client").then(__webpack_require__.t.bind(null, /*! ../webpack-hot-client/client */ "./node_modules/@dojo/webpack-contrib/webpack-hot-client/client.js", 7)));
}

if (has.default("intersection-observer") && !has.default('dom-intersection-observer')) {
	modules.push(
		__webpack_require__.e(/*! import() | platform/IntersectionObserver */ "platform/IntersectionObserver").then(__webpack_require__.bind(null, /*! @dojo/framework/shim/IntersectionObserver */ "./node_modules/@dojo/framework/shim/IntersectionObserver.mjs?7bb5"))
	);
}

if (has.default("no-bootstrap") && !true) {
	modules.push(__webpack_require__.e(/*! import() | platform/fetch */ "platform/fetch").then(__webpack_require__.bind(null, /*! @dojo/framework/shim/fetch */ "./node_modules/@dojo/framework/shim/fetch.mjs")));
}

if (has.default("web-animations") && !has.default('dom-webanimation')) {
	modules.push(__webpack_require__.e(/*! import() | platform/WebAnimations */ "platform/WebAnimations").then(__webpack_require__.bind(null, /*! @dojo/framework/shim/WebAnimations */ "./node_modules/@dojo/framework/shim/WebAnimations.mjs")));
}

if (has.default("resize-observer") && !has.default('dom-resize-observer')) {
	modules.push(__webpack_require__.e(/*! import() | platform/ResizeObserver */ "platform/ResizeObserver").then(__webpack_require__.bind(null, /*! @dojo/framework/shim/ResizeObserver */ "./node_modules/@dojo/framework/shim/ResizeObserver.mjs?cfb6")));
}

if (!has.default('dom-pointer-events')) {
	modules.push(__webpack_require__.e(/*! import() | platform/pointerEvents */ "platform/pointerEvents").then(__webpack_require__.bind(null, /*! @dojo/framework/shim/pointerEvents */ "./node_modules/@dojo/framework/shim/pointerEvents.mjs")));
}

Promise.all(modules).then(function() {
	__webpack_require__.e(/*! import() | main */ "main").then(__webpack_require__.bind(null, /*! ./src/main.ts */ "./src/main.ts"));
});


/***/ }),

/***/ "./node_modules/@dojo/webpack-contrib/bootstrap-plugin/common.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dojo/webpack-contrib/bootstrap-plugin/common.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! @dojo/framework/has/has */ "./node_modules/@dojo/framework/has/has.mjs");
var global = __webpack_require__(/*! @dojo/framework/shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");

if (!has.exists('build-time-render')) {
	has.add('build-time-render', false, false);
}

if (!has.exists('build-serve')) {
	has.add('build-serve', false, false);
}

if (global.default.__public_path__ || global.default.__public_origin__) {
	var publicPath = global.default.__public_origin__ || window.location.origin;
	if (global.default.__public_path__) {
		publicPath = origin + global.default.__public_path__;
		has.add('public-path', global.default.__public_path__, true);
	}
	__webpack_require__.p = publicPath;
}


/***/ }),

/***/ "./node_modules/eventsource-polyfill/dist/browserify-eventsource.js":
/*!**************************************************************************!*\
  !*** ./node_modules/eventsource-polyfill/dist/browserify-eventsource.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
   * CommonJS module that exports EventSource polyfill version 0.9.6
   * This module is intended for browser side use
   * =====================================================================
   * THIS IS A POLYFILL MODULE, SO IT HAS SIDE EFFECTS
   * IT AUTOMATICALLY CHECKS IF window OBJECT DEFINES EventSource
   * AND ADD THE EXPORTED ONE IN CASE IT IS UNDEFINED
   * =====================================================================
   * Supported by sc AmvTek srl
   * :email: devel@amvtek.com
 */


var PolyfillEventSource = __webpack_require__(/*! ./eventsource.js */ "./node_modules/eventsource-polyfill/dist/eventsource.js").EventSource;
module.exports = PolyfillEventSource;

// Add EventSource to window if it is missing...
if (window && !window.EventSource){
    window.EventSource = PolyfillEventSource;
    if (console){
	console.log("polyfill-eventsource added missing EventSource to window");
    }
}


/***/ }),

/***/ "./node_modules/eventsource-polyfill/dist/eventsource.js":
/*!***************************************************************!*\
  !*** ./node_modules/eventsource-polyfill/dist/eventsource.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
   * EventSource polyfill version 0.9.6
   * Supported by sc AmvTek srl
   * :email: devel@amvtek.com
 */
;(function (global) {

    if (global.EventSource && !global._eventSourceImportPrefix){
        return;
    }

    var evsImportName = (global._eventSourceImportPrefix||'')+"EventSource";

    var EventSource = function (url, options) {

        if (!url || typeof url != 'string') {
            throw new SyntaxError('Not enough arguments');
        }

        this.URL = url;
        this.setOptions(options);
        var evs = this;
        setTimeout(function(){evs.poll()}, 0);
    };

    EventSource.prototype = {

        CONNECTING: 0,

        OPEN: 1,

        CLOSED: 2,

        defaultOptions: {

            loggingEnabled: false,

            loggingPrefix: "eventsource",

            interval: 500, // milliseconds

            bufferSizeLimit: 256*1024, // bytes

            silentTimeout: 300000, // milliseconds

            getArgs:{
                'evs_buffer_size_limit': 256*1024
            },

            xhrHeaders:{
                'Accept': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest'
            }
        },

        setOptions: function(options){

            var defaults = this.defaultOptions;
            var option;

            // set all default options...
            for (option in defaults){

                if ( defaults.hasOwnProperty(option) ){
                    this[option] = defaults[option];
                }
            }

            // override with what is in options
            for (option in options){

                if (option in defaults && options.hasOwnProperty(option)){
                    this[option] = options[option];
                }
            }

            // if getArgs option is enabled
            // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
            if (this.getArgs && this.bufferSizeLimit) {

                this.getArgs['evs_buffer_size_limit'] = this.bufferSizeLimit;
            }

            // if console is not available, force loggingEnabled to false
            if (typeof console === "undefined" || typeof console.log === "undefined") {

                this.loggingEnabled = false;
            }
        },

        log: function(message) {

            if (this.loggingEnabled) {

                console.log("[" + this.loggingPrefix +"]:" + message)
            }
        },

        poll: function() {

            try {

                if (this.readyState == this.CLOSED) {
                    return;
                }

                this.cleanup();
                this.readyState = this.CONNECTING;
                this.cursor = 0;
                this.cache = '';
                this._xhr = new this.XHR(this);
                this.resetNoActivityTimer();

            }
            catch (e) {

                // in an attempt to silence the errors
                this.log('There were errors inside the pool try-catch');
                this.dispatchEvent('error', { type: 'error', data: e.message });
            }
        },

        pollAgain: function (interval) {

            // schedule poll to be called after interval milliseconds
            var evs = this;
            evs.readyState = evs.CONNECTING;
            evs.dispatchEvent('error', {
                type: 'error',
                data: "Reconnecting "
            });
            this._pollTimer = setTimeout(function(){evs.poll()}, interval||0);
        },


        cleanup: function() {

            this.log('evs cleaning up')

            if (this._pollTimer){
                clearInterval(this._pollTimer);
                this._pollTimer = null;
            }

            if (this._noActivityTimer){
                clearInterval(this._noActivityTimer);
                this._noActivityTimer = null;
            }

            if (this._xhr){
                this._xhr.abort();
                this._xhr = null;
            }
        },

        resetNoActivityTimer: function(){

            if (this.silentTimeout){

                if (this._noActivityTimer){
                    clearInterval(this._noActivityTimer);
                }
                var evs = this;
                this._noActivityTimer = setTimeout(
                        function(){ evs.log('Timeout! silentTImeout:'+evs.silentTimeout); evs.pollAgain(); },
                        this.silentTimeout
                        );
            }
        },

        close: function () {

            this.readyState = this.CLOSED;
            this.log('Closing connection. readyState: '+this.readyState);
            this.cleanup();
        },

        ondata: function() {

            var request = this._xhr;

            if (request.isReady() && !request.hasError() ) {
                // reset the timer, as we have activity
                this.resetNoActivityTimer();

                // move this EventSource to OPEN state...
                if (this.readyState == this.CONNECTING) {
                    this.readyState = this.OPEN;
                    this.dispatchEvent('open', { type: 'open' });
                }

                var buffer = request.getBuffer();

                if (buffer.length > this.bufferSizeLimit) {
                    this.log('buffer.length > this.bufferSizeLimit');
                    this.pollAgain();
                }

                if (this.cursor == 0 && buffer.length > 0){

                    // skip byte order mark \uFEFF character if it starts the stream
                    if (buffer.substring(0,1) == '\uFEFF'){
                        this.cursor = 1;
                    }
                }

                var lastMessageIndex = this.lastMessageIndex(buffer);
                if (lastMessageIndex[0] >= this.cursor){

                    var newcursor = lastMessageIndex[1];
                    var toparse = buffer.substring(this.cursor, newcursor);
                    this.parseStream(toparse);
                    this.cursor = newcursor;
                }

                // if request is finished, reopen the connection
                if (request.isDone()) {
                    this.log('request.isDone(). reopening the connection');
                    this.pollAgain(this.interval);
                }
            }
            else if (this.readyState !== this.CLOSED) {

                this.log('this.readyState !== this.CLOSED');
                this.pollAgain(this.interval);

                //MV: Unsure why an error was previously dispatched
            }
        },

        parseStream: function(chunk) {

            // normalize line separators (\r\n,\r,\n) to \n
            // remove white spaces that may precede \n
            chunk = this.cache + this.normalizeToLF(chunk);

            var events = chunk.split('\n\n');

            var i, j, eventType, datas, line, retry;

            for (i=0; i < (events.length - 1); i++) {

                eventType = 'message';
                datas = [];
                parts = events[i].split('\n');

                for (j=0; j < parts.length; j++) {

                    line = this.trimWhiteSpace(parts[j]);

                    if (line.indexOf('event') == 0) {

                        eventType = line.replace(/event:?\s*/, '');
                    }
                    else if (line.indexOf('retry') == 0) {

                        retry = parseInt(line.replace(/retry:?\s*/, ''));
                        if(!isNaN(retry)) {
                            this.interval = retry;
                        }
                    }
                    else if (line.indexOf('data') == 0) {

                        datas.push(line.replace(/data:?\s*/, ''));
                    }
                    else if (line.indexOf('id:') == 0) {

                        this.lastEventId = line.replace(/id:?\s*/, '');
                    }
                    else if (line.indexOf('id') == 0) { // this resets the id

                        this.lastEventId = null;
                    }
                }

                if (datas.length) {
                    // dispatch a new event
                    var event = new MessageEvent(eventType, datas.join('\n'), window.location.origin, this.lastEventId);
                    this.dispatchEvent(eventType, event);
                }
            }

            this.cache = events[events.length - 1];
        },

        dispatchEvent: function (type, event) {
            var handlers = this['_' + type + 'Handlers'];

            if (handlers) {

                for (var i = 0; i < handlers.length; i++) {
                    handlers[i].call(this, event);
                }
            }

            if (this['on' + type]) {
                this['on' + type].call(this, event);
            }

        },

        addEventListener: function (type, handler) {
            if (!this['_' + type + 'Handlers']) {
                this['_' + type + 'Handlers'] = [];
            }

            this['_' + type + 'Handlers'].push(handler);
        },

        removeEventListener: function (type, handler) {
            var handlers = this['_' + type + 'Handlers'];
            if (!handlers) {
                return;
            }
            for (var i = handlers.length - 1; i >= 0; --i) {
                if (handlers[i] === handler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        },

        _pollTimer: null,

        _noactivityTimer: null,

        _xhr: null,

        lastEventId: null,

        cache: '',

        cursor: 0,

        onerror: null,

        onmessage: null,

        onopen: null,

        readyState: 0,

        // ===================================================================
        // helpers functions
        // those are attached to prototype to ease reuse and testing...

        urlWithParams: function (baseURL, params) {

            var encodedArgs = [];

            if (params){

                var key, urlarg;
                var urlize = encodeURIComponent;

                for (key in params){
                    if (params.hasOwnProperty(key)) {
                        urlarg = urlize(key)+'='+urlize(params[key]);
                        encodedArgs.push(urlarg);
                    }
                }
            }

            if (encodedArgs.length > 0){

                if (baseURL.indexOf('?') == -1)
                    return baseURL + '?' + encodedArgs.join('&');
                return baseURL + '&' + encodedArgs.join('&');
            }
            return baseURL;
        },

        lastMessageIndex: function(text) {

            var ln2 =text.lastIndexOf('\n\n');
            var lr2 = text.lastIndexOf('\r\r');
            var lrln2 = text.lastIndexOf('\r\n\r\n');

            if (lrln2 > Math.max(ln2, lr2)) {
                return [lrln2, lrln2+4];
            }
            return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
        },

        trimWhiteSpace: function(str) {
            // to remove whitespaces left and right of string

            var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
            return str.replace(reTrim, '');
        },

        normalizeToLF: function(str) {

            // replace \r and \r\n with \n
            return str.replace(/\r\n|\r/g, '\n');
        }

    };

    if (!isOldIE()){

        EventSource.isPolyfill = "XHR";

        // EventSource will send request using XMLHttpRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XMLHttpRequest();
            this._request = request;
            evs._xhr = this;

            // set handlers
            request.onreadystatechange = function(){
                if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
                    if (request.status == 200 || (request.status>=300 && request.status<400)){
                        evs.ondata();
                    }
                    else {
                        request._failed = true;
                        evs.readyState = evs.CLOSED;
                        evs.dispatchEvent('error', {
                            type: 'error',
                            data: "The server responded with "+request.status
                        });
                        evs.close();
                    }
                }
            };

            request.onprogress = function () {
            };

            request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true);

            var headers = evs.xhrHeaders; // maybe null
            for (var header in headers) {
                if (headers.hasOwnProperty(header)){
                    request.setRequestHeader(header, headers[header]);
                }
            }
            if (evs.lastEventId) {
                request.setRequestHeader('Last-Event-Id', evs.lastEventId);
            }

            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: false,

            _request: null,

            _failed: false, // true if we have had errors...

            isReady: function() {


                return this._request.readyState >= 2;
            },

            isDone: function() {

                return (this._request.readyState == 4);
            },

            hasError: function() {

                return (this._failed || (this._request.status >= 400));
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request ) {
                    this._request.abort();
                }
            }
        };
    }
    else {

	EventSource.isPolyfill = "IE_8-9";

        // patch EventSource defaultOptions
        var defaults = EventSource.prototype.defaultOptions;
        defaults.xhrHeaders = null; // no headers will be sent
        defaults.getArgs['evs_preamble'] = 2048 + 8;

        // EventSource will send request using Internet Explorer XDomainRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XDomainRequest();
            this._request = request;

            // set handlers
            request.onprogress = function(){
                request._ready = true;
                evs.ondata();
            };

            request.onload = function(){
                this._loaded = true;
                evs.ondata();
            };

            request.onerror = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest error"
                });
            };

            request.ontimeout = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest timed out"
                });
            };

            // XDomainRequest does not allow setting custom headers
            // If EventSource has enabled the use of GET arguments
            // we add parameters to URL so that server can adapt the stream...
            var reqGetArgs = {};
            if (evs.getArgs) {

                // copy evs.getArgs in reqGetArgs
                var defaultArgs = evs.getArgs;
                    for (var key in defaultArgs) {
                        if (defaultArgs.hasOwnProperty(key)){
                            reqGetArgs[key] = defaultArgs[key];
                        }
                    }
                if (evs.lastEventId){
                    reqGetArgs['evs_last_event_id'] = evs.lastEventId;
                }
            }
            // send the request

            request.open('GET', evs.urlWithParams(evs.URL,reqGetArgs));
            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: true,

            _request: null,

            _ready: false, // true when progress events are dispatched

            _loaded: false, // true when request has been loaded

            _failed: false, // true if when request is in error

            isReady: function() {

                return this._request._ready;
            },

            isDone: function() {

                return this._request._loaded;
            },

            hasError: function() {

                return this._request._failed;
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request){
                    this._request.abort();
                }
            }
        };
    }

    function MessageEvent(type, data, origin, lastEventId) {

        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.data = data || null;
        this.origin = origin || '';
        this.lastEventId = lastEventId || '';
        this.type = type || 'message';
    }

    function isOldIE () {

        //return true if we are in IE8 or IE9
        return (window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)) ? true : false;
    }

    global[evsImportName] = EventSource;
})(this);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi eventsource-polyfill ./src/main.css @dojo/webpack-contrib/bootstrap-plugin/async ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! eventsource-polyfill */"./node_modules/eventsource-polyfill/dist/browserify-eventsource.js");
__webpack_require__(/*! /Users/sebi/Desktop/showcase2/apconf/src/main.css */"./src/main.css");
module.exports = __webpack_require__(/*! @dojo/webpack-contrib/bootstrap-plugin/async */"./node_modules/@dojo/webpack-contrib/bootstrap-plugin/async.js");


/***/ })

/******/ });
});
//# sourceMappingURL=bootstrap.js.map