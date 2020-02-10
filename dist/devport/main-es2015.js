(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"about-page\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div>\n  <app-navbar [home]=\"home\" [portfolio]=\"portfolio\" [contact]=\"contact\" [services]=\"services\"></app-navbar>\n  <!-- <app-page-header></app-page-header> -->\n  <div #home><app-home></app-home></div>\n  <div #services><app-services></app-services></div>\n  <div #portfolio><app-projects></app-projects></div>\n  <div #contact><app-contact></app-contact></div>\n</div>\n\n<!-- <div [@routeAnimations]=\"o && o.activatedRouteData \n      && o.activatedRouteData['animation']\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"contact-page\">\n\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"sendEmail()\" class=\"contact-form\" *ngIf=\"!inquiryResponse\">\n\n    <div class=\"contact-header\">Interested in working together?</div>\n\n    <input type=\"text\" class=\"contact-input\" placeholder=\"Name\" formControlName=\"name\">\n    <input type=\"text\" class=\"contact-input\" placeholder=\"Email\" formControlName=\"email\">\n    <textarea class=\"contact-message\" placeholder=\"Message\" rows=\"3\" formControlName=\"message\"></textarea>\n\n    <button class=\"contact-btn\">Send Inquiry</button>\n\n    <div class=\"form-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </form>\n\n  <div class=\"inquiry-response\" *ngIf=\"inquiryResponse\">{{ inquiryResponse }}</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"home-page\">\n  <div class=\"header\">\n    <!-- <h2>\n      <span *ngFor=\"let letter of nameChars; index as i\" class=\"letter\" [ngClass]=\"['letter', ('letter' + i)]\">{{ letter }}</span>\n    </h2> -->\n    <h2>Hi, I'm Todd</h2>\n    <h4 class=\"job-title\">Developer | Programmer | Designer</h4>\n  </div>\n\n  <img src=\"assets/images/spacetaller.png\" class=\"home-bg\">\n\n  <!-- <div class=\"quick-links\">\n    <img src=\"assets/svgs/nav-arrow.svg\" alt=\"Learn More\" class=\"nav-btn\" (click)=\"toggleScreen()\">\n  </div> -->\n</div>\n\n<div class=\"home-info-page\" [@slideUp]=\"landingScreen ? 'out' : 'vis'\" [style.display]=\"landingScreen ? 'none' : 'block'\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div [ngClass]=\"menuClicked ? 'menu menu-active' : 'menu'\" (click)=\"toggleMenu()\" (window:scroll)=\"pageListen()\">\n  <svg viewBox=\"0 15 125 105\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"\n      M 40 40\n      C 40,40 30,45 40,50\n      H 100\n      C 100,50 110,45 100,40\n      H 40\n      L 40 40\n    Z\" style=\"fill: white; stroke: none\"/>\n\n    <path d=\"\n      M 40 60\n      C 40,60 30,65 40,70\n      H 100\n      C 100,70 110,65 100,60\n      H 40\n      L 40 60\n    \" style=\"fill: white; stroke: none\"/>\n    <path d=\"\n      M 40 80\n      C 40,80 30,85 40,90\n      H 100\n      C 100,90 110,85 100,80\n      H 40\n    Z\" style=\"fill: white; stroke: none\"/>\n    <circle [ngClass]=\"menuClicked ? 'circle circle-active' : 'circle'\" cx=57.5 cy=65 r=47 style=\"fill: none\"/>\n  </svg>\n\n</div>\n  \n\n<div class=\"navbar\">\n  <div class=\"logo\">\n    <img src=\"/assets/images/devport-logo.png\" alt=\"Todd Johnson\" id=\"port-logo\" routerLink=\"/\">\n  </div>\n\n  <div [ngClass]=\"menuClicked ? 'sidenav sidenav-active' : 'sidenav'\">\n    <div class=\"opts\">\n      <a [class]=\"opt.isActive ? 'opt opt-active' : 'opt'\" (click)=\"toggleMenu()\" *ngFor=\"let opt of navOpts;\" [@navOptHov]=\"(opt.isHov | async) ? 'hov' : 'nohov'\" (click)=\"navScroll(opt)\">{{ opt.title }}</a>\n      <!-- <a class=\"opt\" (click)=\"toggleMenu()\" *ngFor=\"let opt of navOpts;\" [@navOptHov]=\"(opt.isHov | async) ? 'hov' : 'nohov'\" (mouseenter)=\"triggerHover(opt)\" (mouseleave)=\"offHover(opt)\" [routerLink]=\"opt.path\" routerLinkActive=\"opt-active\">{{ opt.title }}</a> -->\n      <a href=\"https://github.com/toddjohnson407\" target=\"_blank\" class=\"opt\"><img src=\"/assets/images/GitHub-Mark-Light-64px.png\" class=\"github\" alt=\"Github\"></a>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-header/page-header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-header/page-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"page-header\" [style.display]=\"!showHeader ? 'none' : 'flex'\">\n  <div class=\"page-title\">{{currentHeader}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"projects-page\">\n\n  <div class=\"projects-intro\">\n\n    <div class=\"projects-info\">\n      <div class=\"info-header\">\n        <div>If you're curious.</div>\n        <div>This is what I've been working on lately. You'll find projects for my professional clients as well as some personal ones. Feel free to take a look.</div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"project-card\" id=\"atl-card\">\n    <div class=\"project-header\">\n      <div class=\"project-title\">1080° Sweep</div>\n      <div class=\"project-description\">A web based software oriented towards personal leadership development. Designed with a variety of tools from assessment taking, goal tracking, to competency based analysis.</div>\n    </div>\n\n    <div class=\"overlay-images\">\n      <img src=\"assets/images/1080alframed.png\" alt=\"Assets and Liabilities\">\n      <img src=\"assets/images/1080goalframed.png\" alt=\"Goal Tracking\">\n    </div>\n\n    <a href=\"https://www.1080sweep.com\" target=\"_blank\" class=\"learn-more\">View Site</a>\n  </div>\n  \n  <div class=\"project-card\" id=\"sub-out-card\">\n    <div class=\"project-header\">\n      <div class=\"project-title\">Sub Out</div>\n      <div class=\"project-description\">A mobile application designed for coaches of recreational sports. It allows coaches to automatically track their substitutions during a game using a custom roster.</div>\n    </div>\n    \n    <div class=\"project-images\">\n      <img src=\"assets/images/newteam1.png\" alt=\"New Team\" class=\"app-image\">\n      <img src=\"assets/images/allteams.png\" alt=\"New Team\" class=\"app-image\">\n      <img src=\"assets/images/newteam2.png\" alt=\"New Team\" class=\"app-image\">\n    </div>\n  </div>\n  \n  \n  <div class=\"project-card\" id=\"fj-card\">\n    <div class=\"project-header\">\n      <div class=\"project-title\">Farnsworth Johnson</div>\n      <div class=\"project-description\">An informational site for a law firm. Design focus was on displaying concise information in an efficient format.</div>\n    </div>\n    \n    <div class=\"project-images\" id=\"fj-card\">\n      <img src=\"assets/images/farnsworthjohnsonframed.png\" alt=\"Farnsworth Johnson\">\n    </div>\n\n    <a href=\"http://www.farnsworthjohnson.com\" target=\"_blank\" class=\"learn-more\">View Site</a>\n  </div>\n  \n</div>\n\n\n\n\n\n<!-- <div>Icons made by <a href=\"https://www.flaticon.com/authors/itim2101\" title=\"itim2101\">itim2101</a> from <a href=\"https://www.flaticon.com/\"     title=\"Flaticon\">www.flaticon.com</a></div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"services-page\">\n\n  <div class=\"services-header\">\n    <div class=\"services-title\">What I do.</div>\n    <div class=\"services-intro\">I like to build websites and mobile apps. </div>\n  </div>\n\n  <div class=\"services-ctn\">\n    <div class=\"service\" *ngFor=\"let service of services\">\n      <div>\n        <div class=\"service-img\"><img [src]=\"service.image\" alt=\"Innovation\"></div>\n        <div class=\"service-name\">{{ service.title }}</div>\n      </div>\n    </div>\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  height: 100vh;\n  width: 100%;\n  background: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5kaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcGluaztcbn0iLCJkaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcGluaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: optHov, slideUpAnimation, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optHov", function() { return optHov; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpAnimation", function() { return slideUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

/**
 * This file is used to store custom reusable Angular animations
 */

/** navbar opt hover animation */
const optHov = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('navOptHov', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hov', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'rotateY(360deg)',
        backgroundColor: '#ffffff',
        color: 'rgb(250, 105, 100)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nohov', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        color: 'white',
        backgroundColor: 'rgb(250, 105, 100)',
        transform: 'rotateY(0deg)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hov => nohov', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('nohov => hov', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms')
    ])
]);
const slideUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('vis', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(-100%)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => vis', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('vis => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms')])
]);
/** page transition animation */
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Contact => *, About => Portfolio, About => Services, About => Home, Portfolio => Services, Portfolio => Home, Services => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => *, * => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'Home' } },
    { path: 'portfolio', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], data: { animation: 'Portfolio' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], data: { animation: 'Contact' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], data: { animation: 'About' } },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], data: { animation: 'Services' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  background: #fa6964;\n}\n*:focus {\n  outline: none;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSUUsbUJBQUE7QUNIRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FER0E7RUFDRSx1QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4qIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAxMDUsIDEwMCk7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbiIsIioge1xuICBiYWNrZ3JvdW5kOiAjZmE2OTY0O1xufVxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'devport';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"],
            _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_12__["PageHeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-page {\n  width: 100%;\n  padding: 48px 0;\n  background: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.contact-form {\n  background: #ffff;\n  padding: 48px;\n  border-radius: 8px;\n  width: 800px;\n  max-width: 60%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.contact-form > * {\n  width: 80%;\n  font-size: 110%;\n}\n\n.contact-form > .contact-header {\n  color: #fa6964;\n  font-weight: bold;\n  margin-bottom: 24px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  font-size: 135%;\n}\n\n.contact-form > .contact-input {\n  border: none;\n  margin-bottom: 16px;\n  height: 125%;\n  display: block;\n  border-bottom: 2px solid grey;\n  padding-bottom: 8px;\n  color: #fa6964;\n  font-weight: bold;\n}\n\n.contact-form > .contact-input:focus {\n  outline: none;\n  border-bottom: 2px solid #fa6964;\n}\n\n.contact-form > button.contact-btn {\n  display: block;\n  background: white;\n  cursor: pointer;\n  padding: 8px 16px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  border: 3px solid #fa6964;\n  border-radius: 8px;\n  margin-top: 36px;\n  color: #fa6964;\n  font-weight: bold;\n}\n\n.contact-form > button.contact-btn:focus {\n  outline: none;\n}\n\n.contact-form > div.form-error {\n  color: #fa6964;\n  font-size: 90%;\n  text-align: center;\n  margin: 16px auto 0;\n}\n\n.contact-message {\n  color: #fa6964;\n  font-weight: bold;\n  border: none;\n  border-bottom: 2px solid grey;\n  resize: none;\n  padding-bottom: 8px;\n  box-sizing: border-box;\n}\n\n.contact-message:focus {\n  outline: none;\n  border-bottom: 2px solid #fa6964;\n}\n\ninput:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {\n  color: #fa6964;\n}\n\ninput:focus::-moz-placeholder, textarea:focus::-moz-placeholder {\n  color: #fa6964;\n}\n\ninput:focus::-ms-input-placeholder, textarea:focus::-ms-input-placeholder {\n  color: #fa6964;\n}\n\ninput:focus::placeholder, textarea:focus::placeholder {\n  color: #fa6964;\n}\n\n.inquiry-response {\n  max-width: 60%;\n  border-radius: 8px;\n  background: #ffff;\n  color: #fa6964;\n  padding: 24px;\n  font-size: 135%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FGOztBREVFO0VBQVEsVUFBQTtFQUFZLGVBQUE7QUNFdEI7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0U7RUFHRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURQSTtFQUFVLGFBQUE7RUFBZSxnQ0FBQTtBQ1c3Qjs7QURBRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURWSTtFQUFVLGFBQUE7QUNhZDs7QURERTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBR0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURMRTtFQUFVLGFBQUE7RUFBZSxnQ0FBQTtBQ1MzQjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QURKQTtFQUNFLGNBQUE7QUNHRjs7QURKQTtFQUNFLGNBQUE7QUNHRjs7QURKQTtFQUNFLGNBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhY3QtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmID4gKiB7IHdpZHRoOiA4MCU7IGZvbnQtc2l6ZTogMTEwJTsgfVxuXG4gICYgPiAuY29udGFjdC1oZWFkZXIge1xuICAgIGNvbG9yOiByZ2IoMjUwLCAxMDUsIDEwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTM1JTtcbiAgfVxuXG4gICYgPiAuY29udGFjdC1pbnB1dCB7XG5cbiAgICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTAsIDEwNSwgMTAwKTsgfVxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGhlaWdodDogMTI1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGNvbG9yOiByZ2IoMjUwLCAxMDUsIDEwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmID4gYnV0dG9uLmNvbnRhY3QtYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTAsIDEwNSwgMTAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICBjb2xvcjogcmdiKDI1MCwgMTA1LCAxMDApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgJiA+IGRpdi5mb3JtLWVycm9yIHtcbiAgICBjb2xvcjogcmdiKDI1MCwgMTA1LCAxMDApO1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE2cHggYXV0byAwO1xuICB9XG59XG5cbi5jb250YWN0LW1lc3NhZ2Uge1xuICBjb2xvcjogcmdiKDI1MCwgMTA1LCAxMDApO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTAsIDEwNSwgMTAwKTsgfVxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuXG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDI1MCwgMTA1LCAxMDApO1xufVxuXG4uaW5xdWlyeS1yZXNwb25zZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogcmdiKDI1MCwgMTA1LCAxMDApO1xuICBwYWRkaW5nOiAyNHB4O1xuICBmb250LXNpemU6IDEzNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLmNvbnRhY3QtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWN0LWZvcm0gPiAqIHtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxMTAlO1xufVxuLmNvbnRhY3QtZm9ybSA+IC5jb250YWN0LWhlYWRlciB7XG4gIGNvbG9yOiAjZmE2OTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTM1JTtcbn1cbi5jb250YWN0LWZvcm0gPiAuY29udGFjdC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAxMjUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjZmE2OTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWN0LWZvcm0gPiAuY29udGFjdC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmE2OTY0O1xufVxuLmNvbnRhY3QtZm9ybSA+IGJ1dHRvbi5jb250YWN0LWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmYTY5NjQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgY29sb3I6ICNmYTY5NjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhY3QtZm9ybSA+IGJ1dHRvbi5jb250YWN0LWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY29udGFjdC1mb3JtID4gZGl2LmZvcm0tZXJyb3Ige1xuICBjb2xvcjogI2ZhNjk2NDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMDtcbn1cblxuLmNvbnRhY3QtbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmE2OTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNvbnRhY3QtbWVzc2FnZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmE2OTY0O1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmE2OTY0O1xufVxuXG4uaW5xdWlyeS1yZXNwb25zZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogI2ZhNjk2NDtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1zaXplOiAxMzUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);





let ContactComponent = class ContactComponent {
    constructor(fb, cookieService) {
        this.fb = fb;
        this.cookieService = cookieService;
        this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            message: [''],
        });
    }
    ngOnInit() {
        this.contactStatus = this.cookieService.get('contactStatus');
        if (!this.contactStatus) {
            this.contactStatus = 'not contacted';
            this.cookieService.set('contactStatus', this.contactStatus, 1, undefined, undefined, false, 'Lax');
        }
    }
    /** Sends inquiry email to me if the form passes validation */
    sendEmail() {
        let emailData = {
            usersName: this.contactForm.get('name').value,
            usersEmail: this.contactForm.get('email').value,
            usersMessage: this.contactForm.get('message').value,
        };
        let error = this.formError(emailData);
        if (!error) {
            if (this.errorMessage)
                this.errorMessage = null;
            emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send('default_service', 'inquiry_template', emailData, 'user_jNFuefEFTbVTttVQlDw20').then(res => {
                this.contactStatus = 'contacted';
                this.cookieService.set('contactStatus', this.contactStatus, 1, undefined, undefined, false, 'Lax');
                this.inquiryResponse = 'Thanks for the message! I\'ll get back to you as soon as I can.';
            }).catch(err => {
                this.inquiryResponse = 'It looks like there\'s some server isses. Come back and try again later, sorry for the inconvenience.';
            });
        }
        else if (error === 'already contacted') {
            if (this.errorMessage)
                this.errorMessage = null;
            this.inquiryResponse = 'It looks like you\'ve already contacted me. I\'ll get back to you as soon as I can.';
        }
        else
            this.errorMessage = error;
    }
    /** Validates the inquiry form and returns a validation message if invalid */
    formError({ usersName, usersEmail, usersMessage }) {
        if (!usersName || !usersEmail || !usersMessage)
            return 'Please fill out all the fields above.';
        if (this.contactStatus === 'contacted')
            return 'already contacted';
        return null;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-page {\n  padding: 32px;\n  box-sizing: border-box;\n  font-family: \"Raleway\";\n  color: white;\n  background: #fa6964;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.home-page img.home-bg {\n  max-height: 60vh;\n  max-width: 100%;\n  margin-bottom: 48px;\n}\n.home-page h2, .home-page h4 {\n  padding: 0;\n  margin: 0;\n}\n.home-page h4 {\n  font-weight: normal;\n  font-size: 200%;\n  letter-spacing: 4.5px;\n  text-align: center;\n}\n.home-page h2 {\n  margin-bottom: 24px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  font-size: 250%;\n}\n.home-page > .header {\n  margin: 24px 0 24px;\n  width: 100%;\n  flex-wrap: nowrap;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.home-page > .quick-links {\n  margin-top: 24px;\n}\n.home-page > .quick-links > a.opt {\n  border: 2px solid white;\n  padding: 24px;\n  margin: 0 24px;\n  font-size: 125%;\n  color: white;\n  text-decoration: none;\n}\n.home-page > .quick-links > a.opt:hover {\n  cursor: pointer;\n  text-decoration: none;\n}\n.home-info-page {\n  height: 100vh;\n  width: 100%;\n  background: aqua;\n}\n.nav-btn {\n  width: 60px;\n  padding: 0px;\n  -webkit-transition: padding 450ms;\n  transition: padding 450ms;\n}\n.nav-btn:hover {\n  cursor: pointer;\n  padding: 12px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBdURBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUdBLGFBQUE7RUFDQSxXQUFBO0FDeERGO0FETEU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ09KO0FESkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ01KO0FESEU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDS0o7QURGRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNJSjtBRERFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ0VKO0FERUU7RUFDRSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NOO0FEQU07RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNFUjtBRGNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0VBS0EsWUFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNmRjtBRGdCRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogMzJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAxMDUsIDEwMCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIFxuICAmIGltZy5ob21lLWJnIHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5cbiAgJiBoMiwgaDQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJiBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwMCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDQuNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgJiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgfVxuXG4gICYgPiAuaGVhZGVyIHtcbiAgICBtYXJnaW46IDI0cHggMCAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIH1cblxuICAmID4gLnF1aWNrLWxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICYgPiBhLm9wdCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBtYXJnaW46IDAgMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTI1JTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyBiYWNrZ3JvdW5kOiAjRjdBQjk2O1xuICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAxMDUsIDEwMCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZS1pbmZvLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYXF1YTtcbn1cblxuLm5hdi1idG4ge1xuICB3aWR0aDogNjBweDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyByaWdodDogY2FsYyg1MHZ3IC0gKDYwcHggLyAyKSk7XG4gIC8vIGJvdHRvbTogMTIlO1xuICAvLyB6LWluZGV4OiAxNjtcbiAgcGFkZGluZzogMHB4O1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDQ1MG1zO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICB9XG59XG5cbi8vIGJhY2tncm91bmQ6IHJnYig4OSwgMjE3LCAyNDMpO1xuLy8gYmFja2dyb3VuZDogI0U4QzRCQztcbi8vIGJhY2tncm91bmQ6ICM4M0RBRDI7XG4vLyBiYWNrZ3JvdW5kOiAjRjQ1NTRGO1xuLy8gYmFja2dyb3VuZDogIzQyQ0RCMjtcblxuLy8gZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInO1xuLy8gZm9udC1mYW1pbHk6ICdHb2NoaSBIYW5kJztcbi8vIGZvbnQtZmFtaWx5OiAnSGFuZGxlZSc7XG4vLyBmb250LWZhbWlseTogJ0xvbmcgQ2FuZyc7XG4vLyBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xuLy8gZm9udC1mYW1pbHk6ICdBbm5pZSBVc2UgWW91ciBUZWxlc2NvcGUnO1xuLy8gZm9udC1mYW1pbHk6ICdUaGUgR2lybCBOZXh0IERvb3InO1xuXG4vLyBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nO1xuLy8gZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuLy8gZm9udC1mYW1pbHk6ICdEaWRhY3QgR290aGljJztcbi8vIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZSc7XG4vLyBmb250LWZhbWlseTogJ1JhbGV3YXknOyIsIi5ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZhNjk2NDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSBpbWcuaG9tZS1iZyB7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cbi5ob21lLXBhZ2UgaDIsIC5ob21lLXBhZ2UgaDQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uaG9tZS1wYWdlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsZXR0ZXItc3BhY2luZzogNC41cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLXBhZ2UgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNTAlO1xufVxuLmhvbWUtcGFnZSA+IC5oZWFkZXIge1xuICBtYXJnaW46IDI0cHggMCAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5ob21lLXBhZ2UgPiAucXVpY2stbGlua3Mge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmhvbWUtcGFnZSA+IC5xdWljay1saW5rcyA+IGEub3B0IHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbjogMCAyNHB4O1xuICBmb250LXNpemU6IDEyNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhvbWUtcGFnZSA+IC5xdWljay1saW5rcyA+IGEub3B0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ob21lLWluZm8tcGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBhcXVhO1xufVxuXG4ubmF2LWJ0biB7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgNDUwbXM7XG59XG4ubmF2LWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



let HomeComponent = class HomeComponent {
    constructor() {
        /** Array of quick link options with a title and path route */
        this.quickOpts = [
            { title: 'Portfolio', path: '/portfolio' },
            { title: 'Services', path: '/services' },
            { title: 'Learn More', path: '/about' },
            { title: 'Contact', path: '/contact' }
        ];
        /** Array of characters for my name */
        this.nameChars = 'Todd'.split('');
        /** Tracks whether the user is on the initial landing screen */
        this.landingScreen = true;
        // this.nameChars = 'Todd'.split('');
    }
    ngOnInit() {
        // this.nameCharRefs = this.nameChars.map((char, ind) => ({ letter: char, class: 'letter' + ind,  }))
    }
    toggleScreen() {
        this.landingScreen = !this.landingScreen;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideUpAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-top: 24px;\n  margin-right: 24px;\n  z-index: 1000;\n}\n.menu > svg {\n  width: 45px;\n}\n.menu > svg:hover {\n  cursor: pointer;\n}\n.menu > svg > path:nth-child(1) {\n  -webkit-transform-origin: 40px 40px;\n          transform-origin: 40px 40px;\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.menu > svg > path:nth-child(2) {\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out;\n  height: auto;\n}\n.menu > svg > path:nth-child(3) {\n  -webkit-transform-origin: 40px 90px;\n          transform-origin: 40px 90px;\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.menu.menu-active > svg {\n  z-index: 11;\n}\n.menu.menu-active > svg > circle.circle {\n  stroke: white;\n  stroke-width: 0px;\n}\n.menu.menu-active > svg > circle.circle.circle-active {\n  -webkit-transition: stroke-width 1s;\n  transition: stroke-width 1s;\n  stroke-width: 5px;\n}\n.menu.menu-active > svg > path:nth-child(1) {\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.menu.menu-active > svg > path:nth-child(2) {\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n}\n.menu.menu-active > svg > path:nth-child(3) {\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.navbar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 12 0px;\n}\n.navbar > .sidenav {\n  height: 100%;\n  width: 0;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  right: 0;\n  background: #383330;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.navbar > .sidenav.sidenav-active {\n  width: 250px;\n}\n@media all and (max-width: 700px) {\n  .navbar > .sidenav.sidenav-active {\n    width: 100%;\n  }\n}\n.navbar > .sidenav > .opts {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-family: \"Raleway\";\n  font-size: 135%;\n  font-weight: bold;\n  letter-spacing: 3px;\n}\n.navbar > .sidenav > .opts > a.opt {\n  padding: 8px;\n  text-overflow: clip;\n  white-space: nowrap;\n  background: initial !important;\n  color: white !important;\n  margin: 24px 0;\n  text-decoration: none;\n}\n.navbar > .sidenav > .opts > a.opt:hover {\n  cursor: pointer;\n  text-decoration: none;\n}\n.navbar > .logo {\n  margin-left: 24px;\n  margin: 8px 0 0 24px;\n}\n.navbar > .logo > img {\n  outline: none;\n  width: 85px;\n}\n.navbar > .logo > img:hover {\n  cursor: pointer;\n  opacity: 0.75;\n}\n.navbar > .logo > img:focus {\n  outline: none;\n}\n.opt-active {\n  -webkit-transition: border 1s;\n  transition: border 1s;\n  border: 2px solid white !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGO0FERUU7RUFhRSxXQUFBO0FDWko7QURBSTtFQUNFLGVBQUE7QUNFTjtBRFVJO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSx3QkFBQTtFQUFBLDhDQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ1JOO0FEVUk7RUFDRSw0Q0FBQTtFQUFBLG9DQUFBO0VBQ0EsWUFBQTtBQ1JOO0FEVUk7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQUEsOENBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDUk47QURhSTtFQVNFLFdBQUE7QUNuQk47QURXTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ1RSO0FEVVE7RUFDRSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsaUJBQUE7QUNSVjtBRFlNO0VBQ0Usd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQUEsOENBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDVlI7QURZTTtFQUNFLDRDQUFBO0VBQUEsb0NBQUE7RUFDQSxVQUFBO0FDVlI7QURZTTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSx3QkFBQTtFQUFBLDhDQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ1ZSO0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ2JGO0FEZUU7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ2JKO0FEZUk7RUFFRSxZQUFBO0FDZE47QURlTTtFQUhGO0lBSUksV0FBQTtFQ1pOO0FBQ0Y7QURlSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNiTjtBRGNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDWlI7QURhUTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ1hWO0FEa0JFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ2hCSjtBRGlCSTtFQU1FLGFBQUE7RUFDQSxXQUFBO0FDcEJOO0FEY007RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ1pSO0FEY007RUFBVSxhQUFBO0FDWGhCO0FEa0JBO0VBQ0UsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgei1pbmRleDogMTAwMDtcbiAgJiA+IHN2ZyB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gICAmID4gcGF0aDpudGgtY2hpbGQoMikge1xuICAgIC8vICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gICB9XG4gICAgLy8gICAmID4gcGF0aDpudGgtY2hpbGQoMykge1xuICAgIC8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1cHgsIC00MCUpIHJvdGF0ZSg5MGRlZyk7XG4gICAgLy8gICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgLy8gICB9XG4gICAgfVxuICAgIHdpZHRoOiA0NXB4O1xuICAgICYgPiBwYXRoOm50aC1jaGlsZCgxKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgJiA+IHBhdGg6bnRoLWNoaWxkKDIpIHtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgJiA+IHBhdGg6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggOTBweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxuXG4gICYubWVudS1hY3RpdmUge1xuICAgICYgPiBzdmcge1xuICAgICAgJiA+IGNpcmNsZS5jaXJjbGUge1xuICAgICAgICBzdHJva2U6IHdoaXRlO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDBweDtcbiAgICAgICAgJi5jaXJjbGUtYWN0aXZlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJva2Utd2lkdGggMXM7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHotaW5kZXg6IDExO1xuICAgICAgJiA+IHBhdGg6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAmID4gcGF0aDpudGgtY2hpbGQoMikge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAmID4gcGF0aDpudGgtY2hpbGQoMykge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMiAwcHg7XG5cbiAgJiA+IC5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTYsIDUxLCA0OCk7IFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuXG4gICAgJi5zaWRlbmF2LWFjdGl2ZSB7XG4gICAgICBcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiAub3B0cyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gICAgICBmb250LXNpemU6IDEzNSU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAmID4gYS5vcHQge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgJiA+IC5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBtYXJnaW46IDhweCAwIDAgMjRweDtcbiAgICAmID4gaW1nIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICB9XG4gICAgICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZSB9XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgd2lkdGg6IDg1cHg7XG4gICAgfVxuICB9XG59XG5cbi5vcHQtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDFzO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59IiwiLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5tZW51ID4gc3ZnIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG4ubWVudSA+IHN2Zzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZW51ID4gc3ZnID4gcGF0aDpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG4ubWVudSA+IHN2ZyA+IHBhdGg6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWVudSA+IHN2ZyA+IHBhdGg6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA5MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuLm1lbnUubWVudS1hY3RpdmUgPiBzdmcge1xuICB6LWluZGV4OiAxMTtcbn1cbi5tZW51Lm1lbnUtYWN0aXZlID4gc3ZnID4gY2lyY2xlLmNpcmNsZSB7XG4gIHN0cm9rZTogd2hpdGU7XG4gIHN0cm9rZS13aWR0aDogMHB4O1xufVxuLm1lbnUubWVudS1hY3RpdmUgPiBzdmcgPiBjaXJjbGUuY2lyY2xlLmNpcmNsZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBzdHJva2Utd2lkdGggMXM7XG4gIHN0cm9rZS13aWR0aDogNXB4O1xufVxuLm1lbnUubWVudS1hY3RpdmUgPiBzdmcgPiBwYXRoOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLm1lbnUubWVudS1hY3RpdmUgPiBzdmcgPiBwYXRoOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMDtcbn1cbi5tZW51Lm1lbnUtYWN0aXZlID4gc3ZnID4gcGF0aDpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMiAwcHg7XG59XG4ubmF2YmFyID4gLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMzgzMzMwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ubmF2YmFyID4gLnNpZGVuYXYuc2lkZW5hdi1hY3RpdmUge1xuICB3aWR0aDogMjUwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubmF2YmFyID4gLnNpZGVuYXYuc2lkZW5hdi1hY3RpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubmF2YmFyID4gLnNpZGVuYXYgPiAub3B0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC1zaXplOiAxMzUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5uYXZiYXIgPiAuc2lkZW5hdiA+IC5vcHRzID4gYS5vcHQge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMjRweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyID4gLnNpZGVuYXYgPiAub3B0cyA+IGEub3B0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyID4gLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luOiA4cHggMCAwIDI0cHg7XG59XG4ubmF2YmFyID4gLmxvZ28gPiBpbWcge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogODVweDtcbn1cbi5uYXZiYXIgPiAubG9nbyA+IGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43NTtcbn1cbi5uYXZiYXIgPiAubG9nbyA+IGltZzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5vcHQtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDFzO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let NavbarComponent = class NavbarComponent {
    constructor() {
        this.menuClicked = false;
        this.toggleMenu = () => this.menuClicked = !this.menuClicked;
    }
    ngOnInit() {
        this.navOpts = [
            { title: 'Home', isActive: true, element: this.home, path: '/', isHov: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false) },
            { title: 'Services', isActive: false, element: this.services, path: '/services', isHov: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false) },
            { title: 'Portfolio', isActive: false, element: this.portfolio, path: '/portfolio', isHov: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false) },
            { title: 'Contact', isActive: false, element: this.contact, path: '/contact', isHov: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false) }
        ];
    }
    /** Scrolls to the given section of the website */
    navScroll(navOpt) {
        let { element } = navOpt;
        let prevActive = this.navOpts.findIndex(({ isActive }) => isActive);
        if (prevActive !== -1)
            this.navOpts[prevActive].isActive = false;
        navOpt.isActive = true;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.pageListen();
    }
    /** Listens to each page element to determine when it's active */
    pageListen() {
        let fromTop = window.scrollY;
        console.log('scrollY:', fromTop);
        if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
            let prevActive = this.navOpts.findIndex(({ isActive }, index) => isActive && index !== 3);
            if (prevActive !== -1)
                this.navOpts[prevActive].isActive = false;
            this.navOpts[3].isActive = true;
        }
        else if (fromTop > this.navOpts[0].element.offsetTop) {
            this.navOpts.forEach(({ element: sect, title }, index) => {
                if (sect.offsetTop <= fromTop + 30 &&
                    sect.offsetTop + sect.offsetHeight > fromTop + 30) {
                    console.log(title, sect.offsetHeight, sect.offsetTop);
                    this.navOpts[index]['isActive'] = true;
                }
                else
                    this.navOpts[index]['isActive'] = false;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "home", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "portfolio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "contact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "services", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["optHov"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/page-header/page-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header {\n  height: 20vh;\n  width: 100%;\n  background: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.page-header > .page-title {\n  font-size: 300%;\n  color: #ffff;\n  letter-spacing: 4px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RKO0FER0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmID4gLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAzMDAlO1xuICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfSIsIi5wYWdlLWhlYWRlciB7XG4gIGhlaWdodDogMjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhZ2UtaGVhZGVyID4gLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDMwMCU7XG4gIGNvbG9yOiAjZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let PageHeaderComponent = class PageHeaderComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showHeader = true;
        this.headers = [
            {
                title: 'My Portfolio',
                url: '/portfolio'
            },
            {
                title: 'Contact',
                url: '/contact'
            },
            {
                title: 'About',
                url: '/about'
            },
            {
                title: 'Services',
                url: '/services'
            }
        ];
    }
    ngOnInit() {
        this.currentHeader = 'Test Header Title';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((event) => {
            this.showHeader = event.url === '/' ? false : true;
            if (this.showHeader)
                this.currentHeader = this.headers.find(({ url }) => url === event.url)['title'] || null;
        });
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-header/page-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-header.component.scss */ "./src/app/page-header/page-header.component.scss")).default]
    })
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.projects-page {\n  width: 100%;\n}\n\ndiv.projects-intro {\n  width: 100%;\n}\n\ndiv.projects-intro > .projects-info {\n  height: 40vh;\n  background: #ffff;\n  background: #5a5858;\n}\n\ndiv.projects-intro > .projects-info > .info-header {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\ndiv.projects-intro > .projects-info > .info-header div {\n  text-align: center;\n  color: white;\n}\n\ndiv.projects-intro > .projects-info > .info-header > div:nth-child(1) {\n  font-size: 220%;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\ndiv.projects-intro > .projects-info > .info-header div:nth-child(2) {\n  margin-top: 8px;\n  font-size: 110%;\n  max-width: 80%;\n  letter-spacing: 1px;\n  width: 500px;\n}\n\ndiv.projects-intro > .projects-info > .info-header img {\n  margin: 0 0 48px;\n  width: 80px;\n}\n\na.learn-more {\n  padding: 8px 16px;\n  border: 2px solid white;\n  border-radius: 4px;\n  font-size: 125%;\n  font-weight: bold;\n  color: white;\n  margin-top: 48px;\n}\n\ndiv.project-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: white;\n  width: 100%;\n  min-height: 110vh;\n  height: 100%;\n  padding: 24px 0;\n  box-sizing: border-box;\n}\n\ndiv.project-card > .project-header {\n  color: #ffff;\n  margin: 0 0 48px;\n  text-align: center;\n}\n\ndiv.project-card > .project-header > .project-title {\n  font-size: 300%;\n  font-weight: bold;\n  margin-bottom: 24px;\n  font-variant: small-caps;\n}\n\ndiv.project-card > .project-header > .project-description {\n  font-size: 120%;\n  width: 55%;\n  margin: auto;\n}\n\ndiv.project-card > .project-images {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  width: 100%;\n}\n\ndiv.project-card > .project-images > img {\n  width: 200px;\n  margin: 0 24px;\n}\n\n.overlay-images {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n\n@media all and (min-width: 1100px) {\n  .overlay-images > :first-child {\n    width: 50%;\n  }\n  .overlay-images > :last-child {\n    margin-left: -100px;\n    width: 35%;\n  }\n}\n\n@media all and (max-width: 1099px) {\n  .overlay-images > img {\n    width: 80%;\n    margin: 24px 0;\n  }\n}\n\n#sub-out-card {\n  background: #00C8AA;\n}\n\n#atl-card {\n  background: #019CBB;\n}\n\n#fj-card {\n  background: #02804D;\n}\n\n#fj-card img {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUVFLFdBQUE7QUNERjs7QURHRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNETjs7QURHTTtFQUFNLGtCQUFBO0VBQW9CLFlBQUE7QUNDaEM7O0FEQU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VSOztBREFNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNFUjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRE9BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURRRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEU0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDUE47O0FEU0k7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNQTjs7QURXRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ1RKOztBRFVJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNSTjs7QURjQTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDWkY7O0FEY0U7RUFDRTtJQUFtQixVQUFBO0VDWHJCO0VEWUU7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUNWSjtBQUNGOztBRFlFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ1ZKO0FBQ0Y7O0FEZUE7RUFBZ0IsbUJBQUE7QUNYaEI7O0FEWUE7RUFBWSxtQkFBQTtBQ1JaOztBRFNBO0VBQ0UsbUJBQUE7QUNORjs7QURPRTtFQUNFLFVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5kaXYucHJvamVjdHMtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYucHJvamVjdHMtaW50cm8ge1xuXG4gIHdpZHRoOiAxMDAlO1xuXG4gICYgPiAucHJvamVjdHMtaW5mbyB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODgsIDg4KTtcblxuICAgICYgPiAuaW5mby1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBcbiAgICAgIGRpdiB7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyB9XG4gICAgICAmID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjIwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cbiAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDQ4cHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmEubGVhcm4tbW9yZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEyNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cblxuXG5kaXYucHJvamVjdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZDogd2hpdGU7IFxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTEwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmID4gLnByb2plY3QtaGVhZGVyIHtcblxuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBtYXJnaW46IDAgMCA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICYgPiAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDMwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gICAgfVxuICAgICYgPiAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICB3aWR0aDogNTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYgPiAucHJvamVjdC1pbWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYgPiBpbWcge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgbWFyZ2luOiAwIDI0cHg7XG4gICAgfVxuICB9XG59XG5cblxuLm92ZXJsYXktaW1hZ2VzIHtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIFxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHsgIFxuICAgICYgPiA6Zmlyc3QtY2hpbGQgeyB3aWR0aDogNTAlIH1cbiAgICAmID4gOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwOTlweCkge1xuICAgICYgPiBpbWcge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogMjRweCAwO1xuICAgIH1cbiAgfVxuICBcbn1cblxuI3N1Yi1vdXQtY2FyZCB7IGJhY2tncm91bmQ6ICMwMEM4QUE7IH1cbiNhdGwtY2FyZCB7IGJhY2tncm91bmQ6ICMwMTlDQkI7IH1cbiNmai1jYXJkIHtcbiAgYmFja2dyb3VuZDogIzAyODA0RDtcbiAgJiBpbWcge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbiIsImRpdi5wcm9qZWN0cy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5wcm9qZWN0cy1pbnRybyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuZGl2LnByb2plY3RzLWludHJvID4gLnByb2plY3RzLWluZm8ge1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNWE1ODU4O1xufVxuZGl2LnByb2plY3RzLWludHJvID4gLnByb2plY3RzLWluZm8gPiAuaW5mby1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2LnByb2plY3RzLWludHJvID4gLnByb2plY3RzLWluZm8gPiAuaW5mby1oZWFkZXIgZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5kaXYucHJvamVjdHMtaW50cm8gPiAucHJvamVjdHMtaW5mbyA+IC5pbmZvLWhlYWRlciA+IGRpdjpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDIyMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5kaXYucHJvamVjdHMtaW50cm8gPiAucHJvamVjdHMtaW5mbyA+IC5pbmZvLWhlYWRlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDExMCU7XG4gIG1heC13aWR0aDogODAlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogNTAwcHg7XG59XG5kaXYucHJvamVjdHMtaW50cm8gPiAucHJvamVjdHMtaW5mbyA+IC5pbmZvLWhlYWRlciBpbWcge1xuICBtYXJnaW46IDAgMCA0OHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuYS5sZWFybi1tb3JlIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTI1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuZGl2LnByb2plY3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDExMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmRpdi5wcm9qZWN0LWNhcmQgPiAucHJvamVjdC1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmY7XG4gIG1hcmdpbjogMCAwIDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi5wcm9qZWN0LWNhcmQgPiAucHJvamVjdC1oZWFkZXIgPiAucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cbmRpdi5wcm9qZWN0LWNhcmQgPiAucHJvamVjdC1oZWFkZXIgPiAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgd2lkdGg6IDU1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuZGl2LnByb2plY3QtY2FyZCA+IC5wcm9qZWN0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5wcm9qZWN0LWNhcmQgPiAucHJvamVjdC1pbWFnZXMgPiBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCAyNHB4O1xufVxuXG4ub3ZlcmxheS1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gIC5vdmVybGF5LWltYWdlcyA+IDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAub3ZlcmxheS1pbWFnZXMgPiA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgLm92ZXJsYXktaW1hZ2VzID4gaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMjRweCAwO1xuICB9XG59XG5cbiNzdWItb3V0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMDBDOEFBO1xufVxuXG4jYXRsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMDE5Q0JCO1xufVxuXG4jZmotY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMwMjgwNEQ7XG59XG4jZmotY2FyZCBpbWcge1xuICB3aWR0aDogNjAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.services-page {\n  width: 100%;\n  background: #5a5858;\n}\ndiv.services-page > .services-header {\n  width: 100%;\n  height: 40vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: bold;\n}\ndiv.services-page > .services-header > .services-title {\n  text-align: center;\n  font-size: 220%;\n  margin-bottom: 8px;\n}\ndiv.services-page > .services-header > .services-intro {\n  font-size: 110%;\n  margin-top: 8px;\n}\ndiv.services-page > .services-ctn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: stretch;\n          justify-content: stretch;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  overflow: hidden;\n}\n@media all and (max-width: 1099px) {\n  div.services-page > .services-ctn {\n    flex-wrap: wrap;\n  }\n}\ndiv.services-page > .services-ctn > .service {\n  height: 60vh;\n  background: #00C7AA;\n  width: 100%;\n  min-width: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-weight: bold;\n  font-size: 175%;\n  padding: 24px;\n  color: white;\n}\n@media all and (max-width: 1099px) {\n  div.services-page > .services-ctn > .service {\n    height: 50vh;\n  }\n}\ndiv.services-page > .services-ctn > .service:nth-child(2) {\n  background: #fa6964;\n}\ndiv.services-page > .services-ctn > .service:nth-child(3) {\n  background: #fadd5f;\n}\ndiv.services-page > .services-ctn > .service > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 30vh;\n}\ndiv.services-page > .services-ctn > .service .service-img {\n  margin-bottom: 24px;\n}\ndiv.services-page > .services-ctn > .service .service-img > img {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2Rkam9obnNvbi9zb3VyY2UvZGV2cG9ydC9zcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBQUE7RUFHQSxtQkFBQTtBQ0hGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEo7QURLSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSE47QURNSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSk47QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTko7QURPSTtFQU5GO0lBT0ksZUFBQTtFQ0pKO0FBQ0Y7QURPSTtFQUNFLFlBQUE7RUFJQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUdBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNYTjtBRExNO0VBRkY7SUFHSSxZQUFBO0VDUU47QUFDRjtBREpNO0VBQWdCLG1CQUFBO0FDT3RCO0FETk07RUFBZ0IsbUJBQUE7QUNTdEI7QURFTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER007RUFDRSxtQkFBQTtBQ0RSO0FERVE7RUFBVSxZQUFBO0FDQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRpdi5zZXJ2aWNlcy1wYWdlIHtcbiAgLy8gaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gYmFja2dyb3VuZDogcmdiKDI1MCwgMTA1LCAxMDApO1xuICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiKDkwLCA4OCwgODgpO1xuXG4gICYgPiAuc2VydmljZXMtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJiA+IC5zZXJ2aWNlcy10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIyMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJiA+IC5zZXJ2aWNlcy1pbnRybyB7XG4gICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgJiA+IC5zZXJ2aWNlcy1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIFxuICAgIFxuICAgICYgPiAuc2VydmljZSB7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgfVxuICAgICAgYmFja2dyb3VuZDogIzAwQzdBQTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtiYWNrZ3JvdW5kOiByZ2IoMjUwLCAxMDUsIDEwMCk7fVxuICAgICAgJjpudGgtY2hpbGQoMykge2JhY2tncm91bmQ6IHJnYigyNTAsIDIyMSwgOTUpO31cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTc1JTtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICYgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICB9XG5cbiAgICAgICYgLnNlcnZpY2UtaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgJiA+IGltZyB7IHdpZHRoOiAyMDBweDsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cblxuLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSA1JSwgMCA1MCUsIDMwJSA5NSUsIDcwJSA5NSUsIDEwMCUgNTAlLCA3MCUgNSUpOyIsImRpdi5zZXJ2aWNlcy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM1YTU4NTg7XG59XG5kaXYuc2VydmljZXMtcGFnZSA+IC5zZXJ2aWNlcy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdi5zZXJ2aWNlcy1wYWdlID4gLnNlcnZpY2VzLWhlYWRlciA+IC5zZXJ2aWNlcy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMjAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5kaXYuc2VydmljZXMtcGFnZSA+IC5zZXJ2aWNlcy1oZWFkZXIgPiAuc2VydmljZXMtaW50cm8ge1xuICBmb250LXNpemU6IDExMCU7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbmRpdi5zZXJ2aWNlcy1wYWdlID4gLnNlcnZpY2VzLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTA5OXB4KSB7XG4gIGRpdi5zZXJ2aWNlcy1wYWdlID4gLnNlcnZpY2VzLWN0biB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5kaXYuc2VydmljZXMtcGFnZSA+IC5zZXJ2aWNlcy1jdG4gPiAuc2VydmljZSB7XG4gIGhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZDogIzAwQzdBQTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNzUlO1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcbiAgZGl2LnNlcnZpY2VzLXBhZ2UgPiAuc2VydmljZXMtY3RuID4gLnNlcnZpY2Uge1xuICAgIGhlaWdodDogNTB2aDtcbiAgfVxufVxuZGl2LnNlcnZpY2VzLXBhZ2UgPiAuc2VydmljZXMtY3RuID4gLnNlcnZpY2U6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogI2ZhNjk2NDtcbn1cbmRpdi5zZXJ2aWNlcy1wYWdlID4gLnNlcnZpY2VzLWN0biA+IC5zZXJ2aWNlOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6ICNmYWRkNWY7XG59XG5kaXYuc2VydmljZXMtcGFnZSA+IC5zZXJ2aWNlcy1jdG4gPiAuc2VydmljZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzB2aDtcbn1cbmRpdi5zZXJ2aWNlcy1wYWdlID4gLnNlcnZpY2VzLWN0biA+IC5zZXJ2aWNlIC5zZXJ2aWNlLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5kaXYuc2VydmljZXMtcGFnZSA+IC5zZXJ2aWNlcy1jdG4gPiAuc2VydmljZSAuc2VydmljZS1pbWcgPiBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() {
        this.services = [
            { title: 'Web Development', image: 'assets/images/webdesign.png' },
            { title: 'Mobile Development', image: 'assets/images/mobiledesign.png' },
            { title: 'Database Design', image: 'assets/images/databasedesign.png' },
        ];
    }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    rootDomain: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/toddjohnson/source/devport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map