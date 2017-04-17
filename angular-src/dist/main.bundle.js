webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "html, body {\r\n  height: 100%;\r\n}\r\n\r\n.vertical-center {\r\n  min-height: 100%;  /* Fallback for vh unit */\r\n  min-height: 100vh; /* You might also want to use\r\n                        'height' property instead.\r\n\r\n                        Note that for percentage values of\r\n                        'height' or 'min-height' properties,\r\n                        the 'height' of the parent element\r\n                        should be specified explicitly.\r\n\r\n                        In this case the parent of '.vertical-center'\r\n                        is the <body> element */\r\n\r\n  /* Make it a flex container */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n  /* Align the bootstrap's container vertically */\r\n    -webkit-box-align : center;\r\n       -ms-flex-align : center;\r\n          align-items : center;\r\n\r\n  /* In legacy web browsers such as Firefox 9\r\n     we need to specify the width of the flex container */\r\n  width: 100%;\r\n\r\n  /* Also 'margin: 0 auto' doesn't have any effect on flex items in such web browsers\r\n     hence the bootstrap's container won't be aligned to the center anymore.\r\n\r\n     Therefore, we should use the following declarations to get it centered again */\r\n         -webkit-box-pack : center;\r\n            -ms-flex-pack : center;\r\n          justify-content : center;\r\n}\r\n\r\n.jumbotron {\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\r\n  <div class=\"jumbotron\">\r\n  <app-quotes></app-quotes>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<h2>{{quote.quote}}</h2>\r\n<h3><em>{{quote.author}}</em></h3>\r\n<hr />\r\n<p><a (click)=\"this.showQuote()\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">New Quote</a> <a (click)=\"this.createTweet()\" class=\"btn btn-info btn-lg\" href=\"{{this._tweet}}\" role=\"button\" target=\"_blank\"><i class=\"fa fa-twitter fa-1x\" aria-hidden=\"true\"></i> tweet</a></p>\r\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesService = (function () {
    function QuotesService(http) {
        this.http = http;
    }
    QuotesService.prototype.getQuote = function () {
        return this.http.get('http://quotes.stormconsultancy.co.uk/random.json')
            .map(function (res) { return res.json(); });
    };
    return QuotesService;
}());
QuotesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuotesService);

var _a;
//# sourceMappingURL=quotes.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(138)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_quotes_quotes_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_quotes_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_quotes_quotes_component__["a" /* QuotesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_quotes_service__["a" /* QuotesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quote; });
var Quote = (function () {
    function Quote() {
    }
    return Quote;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tweet; });
var Tweet = (function () {
    function Tweet() {
    }
    return Tweet;
}());

//# sourceMappingURL=tweet.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_quote__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_tweet__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quotes_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotesComponent = (function () {
    function QuotesComponent(quote, quotesService, tweet) {
        this.quote = quote;
        this.quotesService = quotesService;
        this.tweet = tweet;
        this.twitter_uri = "https://twitter.com/intent/tweet?text=";
        this.twishort_uri = "http://twishort.com/post?text=";
        this.hashtag = " #programming_quotes";
    }
    QuotesComponent.prototype.ngOnInit = function () {
        this.showQuote();
    };
    QuotesComponent.prototype.showQuote = function () {
        var _this = this;
        this.quotesService.getQuote()
            .subscribe(function (data) {
            _this.quote.quote = data.quote;
            _this.quote.author = data.author;
        });
    };
    QuotesComponent.prototype.createTweet = function () {
        this.tweet.quote = this.quote.quote;
        this.tweet.encodedQuote = encodeURIComponent(this.quote.quote);
        this.tweet.hashtag = this.hashtag;
        this.tweet.encodedHashtag = encodeURIComponent(this.tweet.hashtag);
        this.tweet.author = this.quote.author;
        this.tweet.uri = this.twitter_uri;
        this._unencodedTweet = this.quote.quote + ' - ' + this.quote.author + this.tweet.hashtag;
        if (this._unencodedTweet.length < 140) {
            this._tweet = this.twitter_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
        }
        else {
            this._tweet = this.twishort_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
        }
    };
    return QuotesComponent;
}());
QuotesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-quotes',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__classes_quote__["a" /* Quote */], __WEBPACK_IMPORTED_MODULE_2__classes_tweet__["a" /* Tweet */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_quote__["a" /* Quote */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_quote__["a" /* Quote */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_quotes_service__["a" /* QuotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_quotes_service__["a" /* QuotesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__classes_tweet__["a" /* Tweet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__classes_tweet__["a" /* Tweet */]) === "function" && _c || Object])
], QuotesComponent);

var _a, _b, _c;
//# sourceMappingURL=quotes.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map