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

/***/ "./src/Utils/Constantes.ts":
/*!*********************************!*\
  !*** ./src/Utils/Constantes.ts ***!
  \*********************************/
/*! exports provided: Constantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constantes", function() { return Constantes; });
/* harmony import */ var src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/enviroment.dev */ "./src/environments/enviroment.dev.ts");

class Constantes {
}
Constantes.iconFacebook = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaFacebook;
Constantes.iconInstagram = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaInstagram;
Constantes.iconTwitter = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaTwitter;
Constantes.iconGithub = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaGithub;
Constantes.iconLinkedin = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaLinkedin;
Constantes.linkFacebook = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
Constantes.linkInstagram = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
Constantes.linkTwitter = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
Constantes.linkGithub = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
Constantes.linkLinkedin = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
Constantes.myPersonalImage = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkMyPersonalImage;
Constantes.backgroundImageHead = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].backgroundImageHead;
Constantes.iconInfo = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconInfo;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/apresentacao/apresentacao.component */ "./src/app/components/apresentacao/apresentacao.component.ts");



class AppComponent {
    constructor() {
        this.title = 'webpage';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-apresentacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_1__["ApresentacaoComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Righteous', cursive;\r\n    color: #fff;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_static_header_static_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/static-header/static-header.component */ "./src/app/components/static-header/static-header.component.ts");
/* harmony import */ var _components_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apresentacao/apresentacao.component */ "./src/app/components/apresentacao/apresentacao.component.ts");
/* harmony import */ var _components_static_header_links_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/static-header/links/links.component */ "./src/app/components/static-header/links/links.component.ts");
/* harmony import */ var _components_head_head_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_portifolio_portifolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/portifolio/portifolio.component */ "./src/app/components/portifolio/portifolio.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_head_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/head/card/card.component */ "./src/app/components/head/card/card.component.ts");
/* harmony import */ var _components_head_rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/head/rounded-image/rounded-image.component */ "./src/app/components/head/rounded-image/rounded-image.component.ts");
/* harmony import */ var _components_head_card_icons_social_medias_icons_social_medias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/head/card/icons-social-medias/icons-social-medias.component */ "./src/app/components/head/card/icons-social-medias/icons-social-medias.component.ts");
/* harmony import */ var _components_head_apresentacao_image_data_apresentacao_image_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/head/apresentacao-image-data/apresentacao-image-data.component */ "./src/app/components/head/apresentacao-image-data/apresentacao-image-data.component.ts");
/* harmony import */ var _components_about_personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about/personal-data-list/personal-data-list.component */ "./src/app/components/about/personal-data-list/personal-data-list.component.ts");
/* harmony import */ var _components_about_list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/about/list-hobbies/list-hobbies.component */ "./src/app/components/about/list-hobbies/list-hobbies.component.ts");
/* harmony import */ var _components_resume_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/resume/timeline/timeline.component */ "./src/app/components/resume/timeline/timeline.component.ts");
/* harmony import */ var _components_portifolio_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/portifolio/list-card/list-card.component */ "./src/app/components/portifolio/list-card/list-card.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_static_header_static_header_component__WEBPACK_IMPORTED_MODULE_4__["StaticHeaderComponent"],
        _components_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_5__["ApresentacaoComponent"],
        _components_static_header_links_links_component__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"],
        _components_head_head_component__WEBPACK_IMPORTED_MODULE_7__["HeadComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
        _components_portifolio_portifolio_component__WEBPACK_IMPORTED_MODULE_10__["PortifolioComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _components_head_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
        _components_head_rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_14__["RoundedImageComponent"],
        _components_head_card_icons_social_medias_icons_social_medias_component__WEBPACK_IMPORTED_MODULE_15__["IconsSocialMediasComponent"],
        _components_head_apresentacao_image_data_apresentacao_image_data_component__WEBPACK_IMPORTED_MODULE_16__["ApresentacaoImageDataComponent"],
        _components_about_personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_17__["PersonalDataListComponent"],
        _components_about_list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_18__["ListHobbiesComponent"],
        _components_resume_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__["TimelineComponent"],
        _components_portifolio_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_20__["ListCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_static_header_static_header_component__WEBPACK_IMPORTED_MODULE_4__["StaticHeaderComponent"],
                    _components_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_5__["ApresentacaoComponent"],
                    _components_static_header_links_links_component__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"],
                    _components_head_head_component__WEBPACK_IMPORTED_MODULE_7__["HeadComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                    _components_portifolio_portifolio_component__WEBPACK_IMPORTED_MODULE_10__["PortifolioComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _components_head_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                    _components_head_rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_14__["RoundedImageComponent"],
                    _components_head_card_icons_social_medias_icons_social_medias_component__WEBPACK_IMPORTED_MODULE_15__["IconsSocialMediasComponent"],
                    _components_head_apresentacao_image_data_apresentacao_image_data_component__WEBPACK_IMPORTED_MODULE_16__["ApresentacaoImageDataComponent"],
                    _components_about_personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_17__["PersonalDataListComponent"],
                    _components_about_list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_18__["ListHobbiesComponent"],
                    _components_resume_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__["TimelineComponent"],
                    _components_portifolio_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_20__["ListCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Utils/Constantes */ "./src/Utils/Constantes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-data-list/personal-data-list.component */ "./src/app/components/about/personal-data-list/personal-data-list.component.ts");
/* harmony import */ var _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-hobbies/list-hobbies.component */ "./src/app/components/about/list-hobbies/list-hobbies.component.ts");





class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
    getIconInfo() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_0__["Constantes"].iconInfo;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 13, vars: 1, consts: [[1, "container-fluid"], [1, "title"], ["alt", "icon image info", "srcset", "", 3, "src"], [1, "font-size1-5rem"], [1, "text"], [1, "personal-data"], [1, "title", "font-size1-5rem"], [1, "lists"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Hello! I'm Lucas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur, obcaecati molestias, cumque at placeat, vel dolorum esse fuga magnam praesentium error nam ab suscipit deserunt blanditiis cum ratione nisi explicabo perspiciatis porro reiciendis dolores laudantium. Cumque fugiat accusamus blanditiis amet. Nihil suscipit beatae animi fugit amet adipisci, nobis pariatur? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-personal-data-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-list-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getIconInfo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_2__["PersonalDataListComponent"], _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__["ListHobbiesComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    justify-content: center;\r\n    background-color: #1e2326;\r\n    overflow: hidden;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    align-self: center;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n}\r\n\r\n.personal-data[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n\r\n.lists[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: column nowrap;\r\n}\r\n\r\n.lists[_ngcontent-%COMP%]   app-list-hobbies[_ngcontent-%COMP%] {\r\n    margin-bottom: 5%;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    .lists[_ngcontent-%COMP%] {\r\n        flex-flow: row wrap;\r\n        padding-left: 0;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 15%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIzMjY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSBpbWcge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kYXRhIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ubGlzdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4ubGlzdHMgYXBwLWxpc3QtaG9iYmllcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5saXN0cyB7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about/list-hobbies/list-hobbies.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/about/list-hobbies/list-hobbies.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListHobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHobbiesComponent", function() { return ListHobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListHobbiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListHobbiesComponent.ɵfac = function ListHobbiesComponent_Factory(t) { return new (t || ListHobbiesComponent)(); };
ListHobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListHobbiesComponent, selectors: [["app-list-hobbies"]], decls: 24, vars: 0, consts: [[1, "interest"], [1, "title"], [1, "all-cards"], [1, "card"], ["alt", "Controlle-game", "id", "Controlle", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3OS44NjIgNDc5Ljg2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzU5Ljg2MiwxNTEuMDQ3Yy0xNy42NzMsMC0zMiwxNC4zMjctMzIsMzJzMTQuMzI3LDMyLDMyLDMyYzE3LjY3MywwLDMyLTE0LjMyNywzMi0zMlMzNzcuNTM1LDE1MS4wNDcsMzU5Ljg2MiwxNTEuMDQ3eiAgICAgTTM1OS44NjIsMTk5LjA0N2MtOC44MzcsMC0xNi03LjE2My0xNi0xNnM3LjE2My0xNiwxNi0xNnMxNiw3LjE2MywxNiwxNlMzNjguNjk4LDE5OS4wNDcsMzU5Ljg2MiwxOTkuMDQ3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzU5Ljg2MiwyNjMuMDQ3Yy0xNy42NzMsMC0zMiwxNC4zMjctMzIsMzJjMCwxNy42NzMsMTQuMzI3LDMyLDMyLDMyYzE3LjY3MywwLDMyLTE0LjMyNywzMi0zMiAgICBDMzkxLjg2MiwyNzcuMzc0LDM3Ny41MzUsMjYzLjA0NywzNTkuODYyLDI2My4wNDd6IE0zNTkuODYyLDMxMS4wNDdjLTguODM3LDAtMTYtNy4xNjMtMTYtMTZzNy4xNjMtMTYsMTYtMTZzMTYsNy4xNjMsMTYsMTYgICAgUzM2OC42OTgsMzExLjA0NywzNTkuODYyLDMxMS4wNDd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMDMuODYyLDIwNy4wNDdjLTE3LjY3MywwLTMyLDE0LjMyNy0zMiwzMnMxNC4zMjcsMzIsMzIsMzJjMTcuNjczLDAsMzItMTQuMzI3LDMyLTMyUzMyMS41MzUsMjA3LjA0NywzMDMuODYyLDIwNy4wNDd6ICAgICBNMzAzLjg2MiwyNTUuMDQ3Yy04LjgzNywwLTE2LTcuMTYzLTE2LTE2czcuMTYzLTE2LDE2LTE2czE2LDcuMTYzLDE2LDE2UzMxMi42OTgsMjU1LjA0NywzMDMuODYyLDI1NS4wNDd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00MTUuODYyLDIwNy4wNDdjLTE3LjY3MywwLTMyLDE0LjMyNy0zMiwzMnMxNC4zMjcsMzIsMzIsMzJjMTcuNjczLDAsMzItMTQuMzI3LDMyLTMyUzQzMy41MzUsMjA3LjA0Nyw0MTUuODYyLDIwNy4wNDd6ICAgICBNNDE1Ljg2MiwyNTUuMDQ3Yy04LjgzNywwLTE2LTcuMTYzLTE2LTE2czcuMTYzLTE2LDE2LTE2czE2LDcuMTYzLDE2LDE2UzQyNC42OTgsMjU1LjA0Nyw0MTUuODYyLDI1NS4wNDd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xODMuODYyLDIwNy4wNDdoLTMydi0zMmMwLTQuNDE4LTMuNTgyLTgtOC04aC00OGMtNC40MTgsMC04LDMuNTgyLTgsOHYzMmgtMzJjLTQuNDE4LDAtOCwzLjU4Mi04LDh2NDggICAgYzAsNC40MTgsMy41ODIsOCw4LDhoMzJ2MzJjMCw0LjQxOCwzLjU4Miw4LDgsOGg0OGM0LjQxOCwwLDgtMy41ODIsOC04di0zMmgzMmM0LjQxOCwwLDgtMy41ODIsOC04di00OCAgICBDMTkxLjg2MiwyMTAuNjI4LDE4OC4yOCwyMDcuMDQ3LDE4My44NjIsMjA3LjA0N3ogTTE3NS44NjIsMjU1LjA0N2gtMzJjLTQuNDE4LDAtOCwzLjU4Mi04LDh2MzJoLTMydi0zMmMwLTQuNDE4LTMuNTgyLTgtOC04aC0zMiAgICB2LTMyaDMyYzQuNDE4LDAsOC0zLjU4Miw4LTh2LTMyaDMydjMyYzAsNC40MTgsMy41ODIsOCw4LDhoMzJWMjU1LjA0N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2MC44MywxMTkuMTAzYy0wLjMyMS0wLjAzOS0wLjY0NC0wLjA1Ny0wLjk2OC0wLjA1NmgtMjQwYy0wLjMyMS0wLjAwMi0wLjY0MiwwLjAxNy0wLjk2LDAuMDU2ICAgIEM1Mi4xNTksMTIwLjE4Ny0xLjA2OCwxNzUuMTcxLDAuMDE2LDI0MS45MTNjMS4wNzEsNjUuOTMsNTQuNzg3LDExOC44MzUsMTIwLjcyNiwxMTguOTAyICAgIGMzMS4yNTQsMC4wOTIsNjEuMzA5LTEyLjAyNCw4My43Ni0zMy43NjhoNzAuNzJjNDguMDk0LDQ2LjI3NywxMjQuNTk2LDQ0LjgwNCwxNzAuODczLTMuMjg5ICAgIGMyMS42NzQtMjIuNTI1LDMzLjc3Ny01Mi41NzIsMzMuNzY3LTgzLjgzMUM0NzkuNjY4LDE3My45NzQsNDI2Ljc3MywxMjAuMjgyLDM2MC44MywxMTkuMTAzeiBNMzU4Ljk5LDM0NC44MjNsLTAuMDA4LTAuMDA4ICAgIGMtMjguMTM3LDAuMDc3LTU1LjEwOC0xMS4yMzgtNzQuNzY4LTMxLjM2OGMtMS41LTEuNTMxLTMuNTUyLTIuMzk1LTUuNjk2LTIuNGgtNzcuMzEyYy0yLjE0MywwLjAwNS00LjE5NiwwLjg2OS01LjY5NiwyLjQgICAgYy00MC41ODgsNDEuMzA3LTEwNi45NzcsNDEuODg5LTE0OC4yODMsMS4zMDFTNS4zMzgsMjA3Ljc3MSw0NS45MjYsMTY2LjQ2NWMxOS41MjItMTkuODY4LDQ2LjE0Ny0zMS4xNTIsNzQtMzEuMzYyICAgIGMwLjI2NywwLDAuNTM1LTAuMDE2LDAuOC0wLjA0OEgzNTguOTljMC4yNjYsMC4wMzIsMC41MzMsMC4wNDgsMC44LDAuMDQ4YzU3LjkxMSwwLjY3NiwxMDQuMzA5LDQ4LjE3LDEwMy42MzMsMTA2LjA4ICAgIEM0NjIuNzU1LDI5OC40NTIsNDE2LjI2MiwzNDQuNTkxLDM1OC45OSwzNDQuODIzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="], ["alt", "headphone-icon", "id", "headphone", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny44NjcgNDc3Ljg2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM4LjkzMywwQzEwNy4wMzYsMC4xNTEsMC4xNTEsMTA3LjAzNiwwLDIzOC45MzN2MTg3LjczM2MwLDI4LjI3NywyMi45MjMsNTEuMiw1MS4yLDUxLjJoNjguMjY3ICAgIGM5LjQyNiwwLDE3LjA2Ny03LjY0MSwxNy4wNjctMTcuMDY3VjI5MC4xMzNjMC05LjQyNi03LjY0MS0xNy4wNjctMTcuMDY3LTE3LjA2N0g1MS4yYy01LjgyOCwwLjA2Mi0xMS42MDIsMS4xMy0xNy4wNjcsMy4xNTcgICAgdi0zNy4yOTFjMC0xMTMuMTA4LDkxLjY5Mi0yMDQuOCwyMDQuOC0yMDQuOHMyMDQuOCw5MS42OTIsMjA0LjgsMjA0Ljh2MzcuMjkxYy01LjQ2NS0yLjAyNy0xMS4yMzktMy4wOTUtMTcuMDY3LTMuMTU3SDM1OC40ICAgIGMtOS40MjYsMC0xNy4wNjcsNy42NDEtMTcuMDY3LDE3LjA2N1Y0NjAuOGMwLDkuNDI2LDcuNjQxLDE3LjA2NywxNy4wNjcsMTcuMDY3aDY4LjI2N2MyOC4yNzcsMCw1MS4yLTIyLjkyMyw1MS4yLTUxLjJWMjM4LjkzMyAgICBDNDc3LjcxNiwxMDcuMDM2LDM3MC44MywwLjE1MSwyMzguOTMzLDB6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="], ["alt", "plane-icon", "id", "plane", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5Ny41MzUsMTQuNDY1Yy0xOS41NjktMTkuNTY4LTUxLjM5NS0xOS4yNDEtNzAuNTU3LDAuNzI2TDMyMi4wOTIsMTI0LjQ4OEw2Ni4xMzEsMzkuNzgxTDEyLjQsOTMuNTEzbDIxMy4zNTIsMTMxLjM2NSAgICBMMTE3Ljc5NiwzMzcuMzcybC02OS4yMzEtMTEuMzY2TDAsMzc0LjU3MWwxMDEuNzgsMzUuNjQ5TDEzNy40MjksNTEybDQ4LjU2NS00OC41NjVsLTExLjM2Ni02OS4yMzFsMTEyLjQ5NC0xMDcuOTU1ICAgIEw0MTguNDg3LDQ5OS42bDUzLjczMi01My43MzJsLTg0LjcwNi0yNTUuOTYxTDQ5Ni44MDgsODUuMDIyQzUxNi43NzYsNjUuODYsNTE3LjEwMywzNC4wMzQsNDk3LjUzNSwxNC40NjV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="], ["alt", "cinematic-icon", "id", "cinematic", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDc0IDc0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJOdW1iZXJzIj48dGV4dCBmaWxsPSJyZ2IoMCwwLDApIiBmb250LWZhbWlseT0iQXJpYWxNVCwgQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3Ljk5NSAtMTguNTQ0KSIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+NDx0c3BhbiB4PSItNS4wMDUiIHk9IjEyNCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MTQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9IjI0OCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MjQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9IjM3MiIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MzQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9IjQ5NiIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+NDQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9IjYyMCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+NTQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9Ijc0NCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+NjQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9Ijg2OCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+NzQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9Ijk5MiIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+ODQ8L3RzcGFuPjx0c3BhbiB4PSItNS4wMDUiIHk9IjExMTYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjk0PC90c3Bhbj48dHNwYW4geD0iLTEwLjAxMSIgeT0iMTI0MCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MTA0PC90c3Bhbj48dHNwYW4gbGV0dGVyLXNwYWNpbmc9Ii0uMDc0ZW0iIHg9Ii05LjM0MyIgeT0iMTM2NCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MTwvdHNwYW4+PHRzcGFuIHg9Ii0uNjY4IiB5PSIxMzY0IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjE0ODgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjEyNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjE2MTIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjEzNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjE3MzYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE0NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjE4NjAiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE1NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjE5ODQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE2NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjIxMDgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE3NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjIyMzIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE4NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjIzNTYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE5NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjI0ODAiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjIwNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjI2MDQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjIxNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjI3MjgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjIyNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjI4NTIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjIzNDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjI5NzYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI0NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjMxMDAiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI1NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjMyMjQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI2NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjMzNDgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI3NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjM0NzIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI4NDwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjM1OTYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI5NDwvdHNwYW4+PC90ZXh0PjwvZz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJJY29ucyI+PHBhdGggZD0ibTUxIDcwaC00NGE1LjAwNiA1LjAwNiAwIDAgMSAtNS01di0zMGE1LjAwNiA1LjAwNiAwIDAgMSA1LTVoNDRhNS4wMDYgNS4wMDYgMCAwIDEgNSA1djMwYTUuMDA2IDUuMDA2IDAgMCAxIC01IDV6bS00NC0zOGEzIDMgMCAwIDAgLTMgM3YzMGEzIDMgMCAwIDAgMyAzaDQ0YTMgMyAwIDAgMCAzLTN2LTMwYTMgMyAwIDAgMCAtMy0zeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im02MSA2MWgtNmExIDEgMCAwIDEgLTEtMXYtMjBhMSAxIDAgMCAxIDEtMWg2YTEgMSAwIDAgMSAxIDF2MjBhMSAxIDAgMCAxIC0xIDF6bS01LTJoNHYtMThoLTR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTcxIDY5YTEgMSAwIDAgMSAtLjYyNS0uMjE5bC0xMC04YTEgMSAwIDAgMSAtLjM3NS0uNzgxdi0yMGExIDEgMCAwIDEgLjM3NS0uNzgxbDEwLThhMSAxIDAgMCAxIDEuNjI1Ljc4MXYzNmExIDEgMCAwIDEgLTEgMXptLTktOS40OCA4IDYuNHYtMzEuODM5bC04IDYuNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDIgMzJhMTQgMTQgMCAxIDEgMTQtMTQgMTQuMDE2IDE0LjAxNiAwIDAgMSAtMTQgMTR6bTAtMjZhMTIgMTIgMCAxIDAgMTIgMTIgMTIuMDE0IDEyLjAxNCAwIDAgMCAtMTItMTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQyIDI2YTggOCAwIDEgMSA4LTggOC4wMDkgOC4wMDkgMCAwIDEgLTggOHptMC0xNGE2IDYgMCAxIDAgNiA2IDYuMDA3IDYuMDA3IDAgMCAwIC02LTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE0IDMyYTEyIDEyIDAgMSAxIDEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEgLTEyIDEyem0wLTIyYTEwIDEwIDAgMSAwIDEwIDEwIDEwLjAxMSAxMC4wMTEgMCAwIDAgLTEwLTEweiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNCAyNmE2IDYgMCAxIDEgNi02IDYuMDA3IDYuMDA3IDAgMCAxIC02IDZ6bTAtMTBhNCA0IDAgMSAwIDQgNCA0IDQgMCAwIDAgLTQtNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTEuODU2IDYuMTY4aDI4LjI4OHYyaC0yOC4yODh6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTkgLS4xNDMgLjE0MyAuOTkgLS43NTYgMy43OCkiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjkgNjBoLTI2YTEgMSAwIDAgMSAtMS0xdi0xOGExIDEgMCAwIDEgMS0xaDI2YTEgMSAwIDAgMSAxIDF2MThhMSAxIDAgMCAxIC0xIDF6bS0yNS0yaDI0di0xNmgtMjR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="], ["alt", "coffe-icon", "id", "coffe", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im03Ljc1NyA2Yy0uMjEgMC0uNDE4LS4wODctLjU2Ny0uMjU4LS4yNzEtLjMxMy0uMjM4LS43ODcuMDc1LTEuMDU4LjE2OC0uMTQ2LjI1LS4zMjkuMjMyLS41MTctLjAxOC0uMjAzLS4xNTUtLjM5Mi0uMzcyLS41MTgtLjY0NC0uMzcyLTEuMDUtLjk4Mi0xLjExNi0xLjY3NC0uMDY0LS42NzMuMjA2LTEuMzI2Ljc0Mi0xLjc5MS4zMTMtLjI3My43ODYtLjI0IDEuMDU5LjA3NC4yNzEuMzEzLjIzOC43ODctLjA3NSAxLjA1OC0uMTY4LjE0Ni0uMjUuMzI5LS4yMzIuNTE3LjAxOS4yMDMuMTU1LjM5Mi4zNzMuNTE4LjY0My4zNzIgMS4wNDkuOTgyIDEuMTE1IDEuNjc0LjA2NC42NzMtLjIwNiAxLjMyNi0uNzQyIDEuNzkyLS4xNDMuMTIyLS4zMTcuMTgzLS40OTIuMTgzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEyLjc1NyA2Yy0uMjEgMC0uNDE4LS4wODctLjU2Ny0uMjU4LS4yNzEtLjMxMy0uMjM4LS43ODcuMDc1LTEuMDU4LjE2OC0uMTQ2LjI1LS4zMjkuMjMyLS41MTctLjAxOS0uMjAzLS4xNTUtLjM5Mi0uMzczLS41MTgtLjY0My0uMzcyLTEuMDQ5LS45ODItMS4xMTUtMS42NzQtLjA2NC0uNjczLjIwNi0xLjMyNi43NDItMS43OTIuMzEzLS4yNzIuNzg2LS4yMzkgMS4wNTguMDc1LjI3MS4zMTMuMjM4Ljc4Ny0uMDc1IDEuMDU4LS4xNjguMTQ2LS4yNS4zMjktLjIzMi41MTcuMDE5LjIwMy4xNTUuMzkyLjM3My41MTguNjQzLjM3MiAxLjA0OS45ODIgMS4xMTUgMS42NzQuMDY0LjY3My0uMjA2IDEuMzI2LS43NDIgMS43OTItLjE0Mi4xMjItLjMxNi4xODMtLjQ5MS4xODN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTcuMjUgMjRoLTE0LjVjLTEuNTE3IDAtMi43NS0xLjIzMy0yLjc1LTIuNzV2LTFjMC0uNDE0LjMzNi0uNzUuNzUtLjc1aDE4LjVjLjQxNCAwIC43NS4zMzYuNzUuNzV2MWMwIDEuNTE3LTEuMjMzIDIuNzUtMi43NSAyLjc1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMuNzkyIDE4LjVoMTIuNDI3Yy41NDctLjUyMSAxLjAzMS0xLjExMiAxLjQzNS0xLjc2Ny4wMjYtLjAzMS4wNDktLjA2NC4wNy0uMDk5LjgzNS0xLjM5OSAxLjI3Ni0zLjAwMiAxLjI3Ni00LjYzNHYtMy43NWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTYuNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1djMuNzVjMCAyLjU1NSAxLjA3NiA0Ljg2IDIuNzkyIDYuNXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMCA5LjI1djJjMS4xMDMgMCAyIC44OTcgMiAyIDAgLjU0LS4yMDYgMS4wMzktLjU5MyAxLjQxOS0uMzY4LjM3NS0uODY3LjU4MS0xLjQwNy41ODFoLS41NjNjLS4yMjUuNjU2LS40OTYgMS4yOTctLjg1NCAxLjg5Ni0uMDIxLjAzNi0uMDQ2LjA2OS0uMDcuMTA0aDEuNDg3YzEuMDgxIDAgMi4wODYtLjQxOSAyLjgyMS0xLjE2Ny43Ni0uNzQ3IDEuMTc5LTEuNzUyIDEuMTc5LTIuODMzIDAtMi4yMDYtMS43OTQtNC00LTR6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="], ["alt", "money-icon", "id", "money", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE3OS4wMDYgMTc5LjAwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iIiBkPSJNMCwzNS4xMjR2MTA4Ljc1OGgxNzkuMDA2VjM1LjEyNEgweiBNODkuNTAzLDEyOS43MTFjLTIyLjIwOSwwLTQwLjE5OS0xOC4wMDgtNDAuMTk5LTQwLjIxMSAgICBTNjcuMyw0OS4yOTUsODkuNTAzLDQ5LjI5NXM0MC4xOTMsMTguMDAyLDQwLjE5Myw0MC4yMDVTMTExLjcxOCwxMjkuNzExLDg5LjUwMywxMjkuNzExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAxMDAwMiI+PC9wYXRoPgoJCTxwYXRoIHN0eWxlPSIiIGQ9Ik0xMDIuMjE4LDg4LjgyYy0xLjkzMy0xLjMzMS01LjYwMy0yLjc1MS0xMS4wMjEtNC4yNjZWNjcuNTI0YzMuMjE2LDAuMTE5LDUuNTYxLDEuMzQ5LDcuMDM1LDMuNzExICAgIGMwLjc5NCwxLjI4MywxLjI3MSwyLjgxLDEuNDI2LDQuNTgzaDYuMTIyYy0wLjEyNS0zLjk1Ni0xLjQxNC03LjEzNi0zLjg5Ni05LjU0MWMtMi40ODItMi40MTEtNi4wNTYtMy43NzEtMTAuNjg3LTQuMTA1di00LjU4MyAgICBoLTMuMzI0djQuNjQ4Yy00LjY4NCwwLjA0OC04LjMzLDEuNDkyLTEwLjkzMSw0LjM0NGMtMi42MDIsMi44NDYtMy44OTYsNi4wMzgtMy44OTYsOS41NzdjMCwzLjk2OCwxLjIwNSw3LjA3MSwzLjYxNiw5LjMwMiAgICBjMi40MTEsMi4yMzgsNi4xNTIsMy44MzcsMTEuMjEyLDQuNzkxdjE5LjA2NGMtMy45NDQtMC4zMjgtNi42NDEtMS44MDgtOC4wOTctNC40MzljLTAuODI5LTEuNDY4LTEuMzM3LTMuODAxLTEuNTE2LTYuOTkzaC02LjE4OCAgICBjMCw0LjAxLDAuNjU2LDcuMTg0LDEuOTg3LDkuNTQ3YzIuNDI5LDQuMzUsNy4wMzUsNi43NiwxMy44MTMsNy4yMDJ2Ni43OWgzLjMyNHYtNi43OWM0LjIxOS0wLjQ2NSw3LjQ0Ny0xLjQxNCw5LjY4NC0yLjg1OCAgICBjNC4wNC0yLjYxMyw2LjA1LTcuMDIzLDYuMDUtMTMuMjIzQzEwNi45MzIsOTQuMjUsMTA1LjM2Myw5MS4wMSwxMDIuMjE4LDg4LjgyeiBNODcuODgsODMuODk3ICAgIGMtMi42MTMtMC41MTMtNC42ODQtMS40MjYtNi4yMjMtMi43MjdjLTEuNTM5LTEuMzA3LTIuMzA5LTMuMTE1LTIuMzA5LTUuNDI0YzAtMS45MDksMC42NS0zLjc0MSwxLjk1MS01LjQ5ICAgIGMxLjMxMy0xLjc0OCwzLjUwMy0yLjY3OSw2LjU4MS0yLjc5OEM4Ny44OCw2Ny40NTgsODcuODgsODMuODk3LDg3Ljg4LDgzLjg5N3ogTTk5LjQ1LDEwNS4xMjEgICAgYy0xLjUxNiwyLjcyNy00LjI2Niw0LjE4My04LjI1Miw0LjM2OFY5MS4wOTNjMi45MDYsMC43OTQsNC45ODgsMS42MjMsNi4yMjMsMi41MThjMi4xMzYsMS41MjIsMy4yMjIsMy43MjksMy4yMjIsNi42NDcgICAgQzEwMC42NDMsMTAyLjA5NiwxMDAuMjQzLDEwMy43MjUsOTkuNDUsMTA1LjEyMXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMTAwMDIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"]], template: function ListHobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Hobbies and Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " cinema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " coffe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".interest[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.interest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.all-cards[_ngcontent-%COMP%] {\r\n    justify-content: start;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 30px;\r\n    justify-content: start;\r\n    padding-right: 5%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: #252a2e;\r\n    border-radius: 10%;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    height: 10vh;\r\n    text-align: center;\r\n    justify-content: center;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    align-self: center;\r\n    padding: 2%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    background-color: #1CB698;\r\n}\r\n\r\n@media only screen and (min-width: 425px) {\r\n    li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2%;\r\n        width: 15%;\r\n    }\r\n}\r\n\r\n@media (min-width: 425px) and (max-width: 768px) {\r\n    li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2%;\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    ul[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n       grid-template-columns: repeat(3, 20%);\r\n    }\r\n\r\n    li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 22%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9saXN0LWhvYmJpZXMvbGlzdC1ob2JiaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtPQUN4QixxQ0FBcUM7SUFDeEM7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvbGlzdC1ob2JiaWVzL2xpc3QtaG9iYmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVyZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW50ZXJlc3QgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsbC1jYXJkcyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmEyZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxudWwgbGkge1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG5saSBpbWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCNjk4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICBsaSBpbWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBsaSBpbWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListHobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-hobbies',
                templateUrl: './list-hobbies.component.html',
                styleUrls: ['./list-hobbies.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about/personal-data-list/personal-data-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/about/personal-data-list/personal-data-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PersonalDataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDataListComponent", function() { return PersonalDataListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PersonalDataListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PersonalDataListComponent.ɵfac = function PersonalDataListComponent_Factory(t) { return new (t || PersonalDataListComponent)(); };
PersonalDataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalDataListComponent, selectors: [["app-personal-data-list"]], decls: 24, vars: 0, consts: [[1, "data-colums"], [1, "font-green"], ["href", "http://github.io/luccastraumer", "target", "_blank", "rel", "noopener noreferrer", 1, ""], [1, "bg-green"]], template: function PersonalDataListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 01-04-1999 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " lucas.jeesus@hotmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "www.google.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 123 London, UK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Job Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "INTERN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".data-colums[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: 0.6fr 0.2fr;\r\n    padding: 2%;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: flex-start;\r\n    width: auto;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    padding-right: 5%;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 6rem;\r\n    border-radius: 5%;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .data-colums[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        text-align: start;\r\n        grid-template-columns: 0.2fr 0.2fr;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9wZXJzb25hbC1kYXRhLWxpc3QvcGVyc29uYWwtZGF0YS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQ0FBa0M7SUFDdEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvcGVyc29uYWwtZGF0YS1saXN0L3BlcnNvbmFsLWRhdGEtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtY29sdW1zIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAwLjJmcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmxpIHN0cm9uZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxudWwgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxudWwgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGF0YS1jb2x1bXMgdWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMC4yZnI7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalDataListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal-data-list',
                templateUrl: './personal-data-list.component.html',
                styleUrls: ['./personal-data-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/apresentacao/apresentacao.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/apresentacao/apresentacao.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApresentacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoComponent", function() { return ApresentacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/components/resume/resume.component.ts");





class ApresentacaoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApresentacaoComponent.ɵfac = function ApresentacaoComponent_Factory(t) { return new (t || ApresentacaoComponent)(); };
ApresentacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApresentacaoComponent, selectors: [["app-apresentacao"]], decls: 14, vars: 0, consts: [[1, "container-fluid"], [1, "header"], [1, "body"], [1, "build", "container-fluid"], [1, "container"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/db094b2aa68a6d98df6338cac2caf93ccaaa80e2/webpage/src/assets/in-building.svg", "alt", "", "srcset", ""], [1, "font-size2rem"]], template: function ApresentacaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "401 IN BUILDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_head_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    grid-area: auto;\r\n    \r\n    justify-content: center;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    display: contents;\r\n}\r\n\r\n.build[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20rem;\r\n}\r\n\r\n.build[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHJlc2VudGFjYW8vYXByZXNlbnRhY2FvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcmVzZW50YWNhby9hcHJlc2VudGFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBncmlkLWFyZWE6IGF1dG87XHJcbiAgICAvKmdyaWQtdGVtcGxhdGUtcm93czogODB2aCAxMDB2aCAxMzB2aCAxMDB2aDsqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJvZHkgZGl2IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG5cclxuLmJ1aWxkIC5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5idWlsZCBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApresentacaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apresentacao',
                templateUrl: './apresentacao.component.html',
                styleUrls: ['./apresentacao.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    background-color: bisque;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " footer\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    background-color: blueviolet;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/apresentacao-image-data/apresentacao-image-data.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/head/apresentacao-image-data/apresentacao-image-data.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApresentacaoImageDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoImageDataComponent", function() { return ApresentacaoImageDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rounded-image/rounded-image.component */ "./src/app/components/head/rounded-image/rounded-image.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "./src/app/components/head/card/card.component.ts");




class ApresentacaoImageDataComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApresentacaoImageDataComponent.ɵfac = function ApresentacaoImageDataComponent_Factory(t) { return new (t || ApresentacaoImageDataComponent)(); };
ApresentacaoImageDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApresentacaoImageDataComponent, selectors: [["app-apresentacao-image-data"]], decls: 3, vars: 0, consts: [[1, "content"]], template: function ApresentacaoImageDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rounded-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_1__["RoundedImageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\napp-rounded-image[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 83.4%;\r\n}\r\n\r\napp-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 13rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkL2FwcmVzZW50YWNhby1pbWFnZS1kYXRhL2FwcmVzZW50YWNhby1pbWFnZS1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9hcHJlc2VudGFjYW8taW1hZ2UtZGF0YS9hcHJlc2VudGFjYW8taW1hZ2UtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtcm91bmRlZC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDgzLjQlO1xyXG59XHJcblxyXG5hcHAtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApresentacaoImageDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apresentacao-image-data',
                templateUrl: './apresentacao-image-data.component.html',
                styleUrls: ['./apresentacao-image-data.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/head/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _icons_social_medias_icons_social_medias_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-social-medias/icons-social-medias.component */ "./src/app/components/head/card/icons-social-medias/icons-social-medias.component.ts");



class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 7, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Software Engineer and Fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icons-social-medias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_icons_social_medias_icons_social_medias_component__WEBPACK_IMPORTED_MODULE_1__["IconsSocialMediasComponent"]], styles: [".card[_ngcontent-%COMP%] {\r\n    background-color: #252A2E;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 5%;\r\n    width: 25rem;\r\n    height: 25rem;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding-top: 45%;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card-subtitle[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 1.2rem;\r\n    font-family: sans-serif, 'Courier New', Courier, monospace;\r\n    font-style: initial;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMERBQTBEO0lBQzFELG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJBMkU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyNXJlbTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDUlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/card/icons-social-medias/icons-social-medias.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/head/card/icons-social-medias/icons-social-medias.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IconsSocialMediasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsSocialMediasComponent", function() { return IconsSocialMediasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Utils/Constantes */ "./src/Utils/Constantes.ts");



class IconsSocialMediasComponent {
    constructor() { }
    ngOnInit() {
    }
    iconFacebook() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconFacebook;
    }
    iconInstagram() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconInstagram;
    }
    iconTwitter() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconTwitter;
    }
    iconLinkedin() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconLinkedin;
    }
    iconGithub() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconGithub;
    }
    linkFacebook() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkFacebook;
    }
    linkInstagram() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkInstagram;
    }
    linkTwitter() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkTwitter;
    }
    linkLinkedin() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkLinkedin;
    }
    linkGithub() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkGithub;
    }
}
IconsSocialMediasComponent.ɵfac = function IconsSocialMediasComponent_Factory(t) { return new (t || IconsSocialMediasComponent)(); };
IconsSocialMediasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsSocialMediasComponent, selectors: [["app-icons-social-medias"]], decls: 11, vars: 6, consts: [["target", "_blank", 1, "card-link", 3, "href"], ["alt", "icone Facebook", 3, "src"], ["href", "linkInstagram()", "target", "_blank", 1, "card-link"], ["alt", "icone Instagram", 3, "src"], ["href", "linkTwitter()", "target", "_blank", 1, "card-link"], ["alt", "icone Twitter", 3, "src"], ["href", "linkLinkedin()", "target", "_blank", 1, "card-link"], ["alt", "icone Linkedin", 3, "src"], ["href", "linkGithub()", "target", "_blank", 1, "card-link"], ["alt", "icone Github", 3, "src"]], template: function IconsSocialMediasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkFacebook(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconFacebook(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconInstagram(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconTwitter(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconLinkedin(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconGithub(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["section[_ngcontent-%COMP%] {\r\n    padding: 10% 5% 5% 5%;\r\n    display: flex;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 10%;\r\n    padding-right: 0%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    background-color: #1CB698;\r\n    border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkL2NhcmQvaWNvbnMtc29jaWFsLW1lZGlhcy9pY29ucy1zb2NpYWwtbWVkaWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9jYXJkL2ljb25zLXNvY2lhbC1tZWRpYXMvaWNvbnMtc29jaWFsLW1lZGlhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMCUgNSUgNSUgNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5zZWN0aW9uIGEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gaW1nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQ0I2OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsSocialMediasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icons-social-medias',
                templateUrl: './icons-social-medias.component.html',
                styleUrls: ['./icons-social-medias.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/head.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/head/head.component.ts ***!
  \***************************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Utils/Constantes */ "./src/Utils/Constantes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apresentacao_image_data_apresentacao_image_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apresentacao-image-data/apresentacao-image-data.component */ "./src/app/components/head/apresentacao-image-data/apresentacao-image-data.component.ts");




class HeadComponent {
    constructor() { }
    ngOnInit() {
    }
    bgImage() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_0__["Constantes"].backgroundImageHead;
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(); };
HeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["app-head"]], decls: 3, vars: 1, consts: [[1, "container-fluid"], ["alt", "background image", "srcset", "", 3, "src"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-apresentacao-image-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bgImage(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_apresentacao_image_data_apresentacao_image_data_component__WEBPACK_IMPORTED_MODULE_2__["ApresentacaoImageDataComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 90vh;\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -2;\r\n    opacity: 10%;\r\n    width: 100%;\r\n    height: 80%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   app-apresentacao-image-data[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n    .container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { \r\n        width: 150%;\r\n        height: 90vh;\r\n    }\r\n\r\n    .container-fluid[_ngcontent-%COMP%]   app-apresentacao-image-data[_ngcontent-%COMP%] {\r\n        margin-top: 5%;\r\n    }\r\n    \r\n}\r\n\r\n@media (min-width: 375px) and (max-width: 425px) {\r\n    .container-fluid[_ngcontent-%COMP%]   app-apresentacao-image-data[_ngcontent-%COMP%] {\r\n        margin-left: 20%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkL2hlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9oZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBvcGFjaXR5OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCBhcHAtYXByZXNlbnRhY2FvLWltYWdlLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5jb250YWluZXItZmx1aWQgaW1nIHsgXHJcbiAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItZmx1aWQgYXBwLWFwcmVzZW50YWNhby1pbWFnZS1kYXRhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCBhcHAtYXByZXNlbnRhY2FvLWltYWdlLWRhdGEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-head',
                templateUrl: './head.component.html',
                styleUrls: ['./head.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/rounded-image/rounded-image.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/head/rounded-image/rounded-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoundedImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundedImageComponent", function() { return RoundedImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Utils/Constantes */ "./src/Utils/Constantes.ts");



class RoundedImageComponent {
    constructor() { }
    ngOnInit() {
    }
    personalImage() {
        return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].myPersonalImage;
    }
}
RoundedImageComponent.ɵfac = function RoundedImageComponent_Factory(t) { return new (t || RoundedImageComponent)(); };
RoundedImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoundedImageComponent, selectors: [["app-rounded-image"]], decls: 2, vars: 1, consts: [[1, "persona-image", "container-fluid"], ["alt", "my-profile-image", "srcset", "", 1, "rounded-circle", "img-fluid", 3, "src"]], template: function RoundedImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.personalImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    width: 30rem;\r\n    margin-left: 1%;\r\n}\r\n\r\n.persona-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border: 12px solid #1CB698;\r\n    max-width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkL3JvdW5kZWQtaW1hZ2Uvcm91bmRlZC1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZC9yb3VuZGVkLWltYWdlL3JvdW5kZWQtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4ucGVyc29uYS1pbWFnZSBpbWd7XHJcbiAgICBib3JkZXI6IDEycHggc29saWQgIzFDQjY5ODtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundedImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rounded-image',
                templateUrl: './rounded-image.component.html',
                styleUrls: ['./rounded-image.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/portifolio/list-card/list-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/portifolio/list-card/list-card.component.ts ***!
  \************************************************************************/
/*! exports provided: ListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCardComponent", function() { return ListCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListCardComponent.ɵfac = function ListCardComponent_Factory(t) { return new (t || ListCardComponent)(); };
ListCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCardComponent, selectors: [["app-list-card"]], decls: 51, vars: 0, consts: [[1, "projetcs"], [1, "image"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/agencia/Screenshot_2020-09-06%20Digital%20Agency.png?token=AD5NGIY6ZESMIOXSZCLN43C7L3JQG", "alt", "", "srcset", "", 1, "card-img-top"], [1, "img__description"], [1, "font-size1-5rem"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK", "alt", "", "srcset", "", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg", "alt", "", "srcset", "", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png", "alt", "", "srcset", "", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/WazeDev/master/psReadme/Web/createDevGif.gif", "alt", "", "srcset", "", 1, "card-img-top"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/mmartins/master/imgs/desktop-feed.jpg", "alt", "", "srcset", "", 1, "card-img-top"]], template: function ListCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "EsDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".projetcs[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 0fr 0fr 0fr;\r\n  -moz-column-gap: 2%;\r\n       column-gap: 2%;\r\n  row-gap: 2%;\r\n  justify-content: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  justify-content: center;\r\n  height: auto;\r\n  border-radius: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 22rem;\r\n  height: 20rem;\r\n  border-radius: 10%;\r\n}\r\n\r\n.img__description[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(28, 182, 152, 0.60);\r\n  color: #fff;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  margin-bottom: 4%;\r\n  border-radius: 10%;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  \r\n  transition: opacity .2s, visibility .2s;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]:hover   .img__description[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.img__description[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\nmargin: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  -webkit-animation: right_to_left 3s ease;\r\n          animation: right_to_left 3s ease;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  -webkit-animation: left_to_right 3s ease;\r\n          animation: left_to_right 3s ease;\r\n}\r\n\r\n@-webkit-keyframes right_to_left {\r\n  from {\r\n    margin-left: 100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@keyframes right_to_left {\r\n  from {\r\n    margin-left: 100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes left_to_right {\r\n  from {\r\n    margin-left: -100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@keyframes left_to_right {\r\n  from {\r\n    margin-left: -100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .projetcs[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    flex-direction: column;\r\n\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    padding: 2%;\r\n  }\r\n  \r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 13rem;\r\n    height: 12rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]:hover   .img__description[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0aWZvbGlvL2xpc3QtY2FyZC9saXN0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQWM7T0FBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHFDQUFxQztFQUNyQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjs7RUFFeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRpZm9saW8vbGlzdC1jYXJkL2xpc3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2pldGNzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMGZyIDBmciAwZnI7XHJcbiAgY29sdW1uLWdhcDogMiU7XHJcbiAgcm93LWdhcDogMiU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMjJyZW07XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjgsIDE4MiwgMTUyLCAwLjYwKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAvKiB0cmFuc2l0aW9uIGVmZmVjdC4gbm90IG5lY2Vzc2FyeSAqL1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB2aXNpYmlsaXR5IC4ycztcclxufVxyXG5cclxuLmltYWdlOmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbWdfX2Rlc2NyaXB0aW9uIGxhYmVsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbm1hcmdpbjogMDtcclxufVxyXG5cclxuaDEsXHJcbmxhYmVsIHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFuaW1hdGlvbjogcmlnaHRfdG9fbGVmdCAzcyBlYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYW5pbWF0aW9uOiBsZWZ0X3RvX3JpZ2h0IDNzIGVhc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmlnaHRfdG9fbGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxlZnRfdG9fcmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnByb2pldGNzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTNyZW07XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlOmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-card',
                templateUrl: './list-card.component.html',
                styleUrls: ['./list-card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/portifolio/portifolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/portifolio/portifolio.component.ts ***!
  \***************************************************************/
/*! exports provided: PortifolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortifolioComponent", function() { return PortifolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_card_list_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-card/list-card.component */ "./src/app/components/portifolio/list-card/list-card.component.ts");



class PortifolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortifolioComponent.ɵfac = function PortifolioComponent_Factory(t) { return new (t || PortifolioComponent)(); };
PortifolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortifolioComponent, selectors: [["app-portifolio"]], decls: 8, vars: 0, consts: [[1, "container-fluid"], [1, "top-data"], ["src", "", "alt", "", "srcset", ""], [1, "font-size2rem"], [1, "list"]], template: function PortifolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recent Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-list-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_1__["ListCardComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    background-color: #1e2326;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0aWZvbGlvL3BvcnRpZm9saW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0aWZvbGlvL3BvcnRpZm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjMyNjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAudG9wLWRhdGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortifolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portifolio',
                templateUrl: './portifolio.component.html',
                styleUrls: ['./portifolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/components/resume/timeline/timeline.component.ts");



class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    background-color: #252a2e;\r\n    height: 100%;\r\n    width: 100;\r\n    padding: 0;\r\n    margin: 5% 0 0 0;\r\n\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   app-timeline[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYTJlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDUlIDAgMCAwO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCBhcHAtdGltZWxpbmUge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume/timeline/timeline.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/resume/timeline/timeline.component.ts ***!
  \******************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 22, vars: 0, consts: [[1, "timeline"], [1, "timeline__item", "timeline__item--year"], [1, "timeline__item"], [1, "timeline__title"], [1, "timeline__blurb"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start of a Dream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In 2018 a had 19y and I worker in Shopping popular for of High class of my city. My job was security and I don't liked but I needed. The click to change my life was decision to make a prove to a Technical School of a best University in my city, to my surprise, I passed and here begini everthing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Learning and Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "In 2019 I made a hard decision in my life, get out of a job or bet in my dream, my father had all suport to I can follow my dream and continue studing. He just studing fundamental school, with this i make two promisse to him first I will his one of the best studants and second I will get a job in a year. (I made)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Fruit of the conquests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In 2020 I started internship on CI&T a big company,where a learn a lot things and still learn, so comprir the second promisse and became a monitor on my course. Monitor are the student with betteres note and know explaing the content show in the course, so the first promisse was completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n\t box-sizing: border-box;\r\n}\r\n body[_ngcontent-%COMP%] {\r\n\t color: #fff;\r\n\t padding: 1rem;\r\n}\r\n h1[_ngcontent-%COMP%] {\r\n\t text-align: center;\r\n\t font-family: 'Raleway', sans-serif;\r\n}\r\n .timeline[_ngcontent-%COMP%] {\r\n\t position: relative;\r\n\t padding: 1rem;\r\n\t margin: 0 auto;\r\n\t max-width: 1300px;\r\n}\r\n .timeline[_ngcontent-%COMP%]:before {\r\n\t content: '';\r\n\t position: absolute;\r\n\t height: 100%;\r\n\t border: 1px solid #1cb698;\r\n\t right: 40px;\r\n\t top: 0;\r\n}\r\n .timeline[_ngcontent-%COMP%]:after {\r\n\t content: \"\";\r\n\t display: table;\r\n\t clear: both;\r\n}\r\n @media screen and (min-width: 700px) {\r\n\t .timeline[_ngcontent-%COMP%] {\r\n\t\t padding: 2rem;\r\n\t}\r\n\t .timeline[_ngcontent-%COMP%]:before {\r\n\t\t left: calc(50% - 1px);\r\n\t\t right: auto;\r\n\t}\r\n}\r\n .timeline__item[_ngcontent-%COMP%] {\r\n\t padding: 1rem;\r\n\t border: 2px solid #1cb698;\r\n\t -o-border-image: linear-gradient(to right, skyblue 0%, #1cb698 100%);\r\n\t    border-image: linear-gradient(to right, skyblue 0%, #1cb698 100%);\r\n\t border-image-slice: 1;\r\n\t position: relative;\r\n\t margin: 1rem 3rem 1rem 1rem;\r\n\t clear: both;\r\n}\r\n .timeline__item[_ngcontent-%COMP%]:after, .timeline__item[_ngcontent-%COMP%]:before {\r\n\t content: '';\r\n\t position: absolute;\r\n}\r\n .timeline__item[_ngcontent-%COMP%]:before {\r\n\t right: -10px;\r\n\t top: calc(50% - 5px);\r\n\t border-style: solid;\r\n\t border-color: #1cb698 #1cb698 transparent transparent;\r\n\t border-width: 10px;\r\n\t transform: rotate(45deg);\r\n}\r\n @media screen and (min-width: 700px) {\r\n\t .timeline__item[_ngcontent-%COMP%] {\r\n\t\t width: 44%;\r\n\t\t margin: 1rem;\r\n\t}\r\n\t .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n) {\r\n\t\t float: right;\r\n\t\t margin: 1rem;\r\n\t\t -o-border-image: linear-gradient(to right, #1cb698 0%, skyblue 100%);\r\n\t\t    border-image: linear-gradient(to right, #1cb698 0%, skyblue 100%);\r\n\t\t border-image-slice: 1;\r\n\t}\r\n\t .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n):before {\r\n\t\t right: auto;\r\n\t\t left: -10px;\r\n\t\t border-color: transparent transparent #1cb698 #1cb698;\r\n\t}\r\n}\r\n .timeline__item--year[_ngcontent-%COMP%] {\r\n\t text-align: center;\r\n\t max-width: 150px;\r\n\t margin: 0 48px 0 auto;\r\n\t font-size: 1.8rem;\r\n\t line-height: 1;\r\n\t -o-border-image: none;\r\n\t    border-image: none;\r\n\t padding: 0.5rem 1rem 1rem;\r\n}\r\n .timeline__item--year[_ngcontent-%COMP%]:before {\r\n\t display: none;\r\n}\r\n @media screen and (min-width: 700px) {\r\n\t .timeline__item--year[_ngcontent-%COMP%] {\r\n\t\t text-align: center;\r\n\t\t margin: 0 auto;\r\n\t}\r\n\t .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n) {\r\n\t\t float: none;\r\n\t\t margin: 0 auto;\r\n\t\t -o-border-image: none;\r\n\t\t    border-image: none;\r\n\t}\r\n\t .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n):before {\r\n\t\t display: none;\r\n\t}\r\n}\r\n .timeline__title[_ngcontent-%COMP%] {\r\n\t margin: 0;\r\n\t font-family: 'Raleway', sans-serif;\r\n\t font-size: 1.5em;\r\n}\r\n .timeline__blurb[_ngcontent-%COMP%] {\r\n\t line-height: 1.5;\r\n\t font-size: 1rem;\r\n\t margin: 0.5rem 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtDQUNDO0VBQ0MsV0FBVztFQUNYLGFBQWE7QUFDZjtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztFQUNYLE1BQU07QUFDUjtDQUNDO0VBQ0MsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7Q0FDQztFQUNDO0dBQ0MsYUFBYTtDQUNmO0VBQ0M7R0FDQyxxQkFBcUI7R0FDckIsV0FBVztDQUNiO0FBQ0Q7Q0FDQztFQUNDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsb0VBQWlFO0tBQWpFLGlFQUFpRTtFQUNqRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7Q0FDQztFQUNDLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7Q0FDQztFQUNDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0NBQ0M7RUFDQztHQUNDLFVBQVU7R0FDVixZQUFZO0NBQ2Q7RUFDQztHQUNDLFlBQVk7R0FDWixZQUFZO0dBQ1osb0VBQWlFO01BQWpFLGlFQUFpRTtHQUNqRSxxQkFBcUI7Q0FDdkI7RUFDQztHQUNDLFdBQVc7R0FDWCxXQUFXO0dBQ1gscURBQXFEO0NBQ3ZEO0FBQ0Q7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7Q0FDQztFQUNDLGFBQWE7QUFDZjtDQUNDO0VBQ0M7R0FDQyxrQkFBa0I7R0FDbEIsY0FBYztDQUNoQjtFQUNDO0dBQ0MsV0FBVztHQUNYLGNBQWM7R0FDZCxxQkFBa0I7TUFBbEIsa0JBQWtCO0NBQ3BCO0VBQ0M7R0FDQyxhQUFhO0NBQ2Y7QUFDRDtDQUNDO0VBQ0MsU0FBUztFQUNULGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG5cdCBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiBib2R5IHtcclxuXHQgY29sb3I6ICNmZmY7XHJcblx0IHBhZGRpbmc6IDFyZW07XHJcbn1cclxuIGgxIHtcclxuXHQgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAudGltZWxpbmUge1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IHBhZGRpbmc6IDFyZW07XHJcblx0IG1hcmdpbjogMCBhdXRvO1xyXG5cdCBtYXgtd2lkdGg6IDEzMDBweDtcclxufVxyXG4gLnRpbWVsaW5lOmJlZm9yZSB7XHJcblx0IGNvbnRlbnQ6ICcnO1xyXG5cdCBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0IGhlaWdodDogMTAwJTtcclxuXHQgYm9yZGVyOiAxcHggc29saWQgIzFjYjY5ODtcclxuXHQgcmlnaHQ6IDQwcHg7XHJcblx0IHRvcDogMDtcclxufVxyXG4gLnRpbWVsaW5lOmFmdGVyIHtcclxuXHQgY29udGVudDogXCJcIjtcclxuXHQgZGlzcGxheTogdGFibGU7XHJcblx0IGNsZWFyOiBib3RoO1xyXG59XHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG5cdCAudGltZWxpbmUge1xyXG5cdFx0IHBhZGRpbmc6IDJyZW07XHJcblx0fVxyXG5cdCAudGltZWxpbmU6YmVmb3JlIHtcclxuXHRcdCBsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XHJcblx0XHQgcmlnaHQ6IGF1dG87XHJcblx0fVxyXG59XHJcbiAudGltZWxpbmVfX2l0ZW0ge1xyXG5cdCBwYWRkaW5nOiAxcmVtO1xyXG5cdCBib3JkZXI6IDJweCBzb2xpZCAjMWNiNjk4O1xyXG5cdCBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgc2t5Ymx1ZSAwJSwgIzFjYjY5OCAxMDAlKTtcclxuXHQgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IG1hcmdpbjogMXJlbSAzcmVtIDFyZW0gMXJlbTtcclxuXHQgY2xlYXI6IGJvdGg7XHJcbn1cclxuIC50aW1lbGluZV9faXRlbTphZnRlciwgLnRpbWVsaW5lX19pdGVtOmJlZm9yZSB7XHJcblx0IGNvbnRlbnQ6ICcnO1xyXG5cdCBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIC50aW1lbGluZV9faXRlbTpiZWZvcmUge1xyXG5cdCByaWdodDogLTEwcHg7XHJcblx0IHRvcDogY2FsYyg1MCUgLSA1cHgpO1xyXG5cdCBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdCBib3JkZXItY29sb3I6ICMxY2I2OTggIzFjYjY5OCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHQgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG5cdCB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcblx0IC50aW1lbGluZV9faXRlbSB7XHJcblx0XHQgd2lkdGg6IDQ0JTtcclxuXHRcdCBtYXJnaW46IDFyZW07XHJcblx0fVxyXG5cdCAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoMm4pIHtcclxuXHRcdCBmbG9hdDogcmlnaHQ7XHJcblx0XHQgbWFyZ2luOiAxcmVtO1xyXG5cdFx0IGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWNiNjk4IDAlLCBza3libHVlIDEwMCUpO1xyXG5cdFx0IGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuXHR9XHJcblx0IC50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZSgybik6YmVmb3JlIHtcclxuXHRcdCByaWdodDogYXV0bztcclxuXHRcdCBsZWZ0OiAtMTBweDtcclxuXHRcdCBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxY2I2OTggIzFjYjY5ODtcclxuXHR9XHJcbn1cclxuIC50aW1lbGluZV9faXRlbS0teWVhciB7XHJcblx0IHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgbWF4LXdpZHRoOiAxNTBweDtcclxuXHQgbWFyZ2luOiAwIDQ4cHggMCBhdXRvO1xyXG5cdCBmb250LXNpemU6IDEuOHJlbTtcclxuXHQgbGluZS1oZWlnaHQ6IDE7XHJcblx0IGJvcmRlci1pbWFnZTogbm9uZTtcclxuXHQgcGFkZGluZzogMC41cmVtIDFyZW0gMXJlbTtcclxufVxyXG4gLnRpbWVsaW5lX19pdGVtLS15ZWFyOmJlZm9yZSB7XHJcblx0IGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcblx0IC50aW1lbGluZV9faXRlbS0teWVhciB7XHJcblx0XHQgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0IG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxuXHQgLnRpbWVsaW5lX19pdGVtLS15ZWFyOm50aC1vZi10eXBlKDJuKSB7XHJcblx0XHQgZmxvYXQ6IG5vbmU7XHJcblx0XHQgbWFyZ2luOiAwIGF1dG87XHJcblx0XHQgYm9yZGVyLWltYWdlOiBub25lO1xyXG5cdH1cclxuXHQgLnRpbWVsaW5lX19pdGVtLS15ZWFyOm50aC1vZi10eXBlKDJuKTpiZWZvcmUge1xyXG5cdFx0IGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59XHJcbiAudGltZWxpbmVfX3RpdGxlIHtcclxuXHQgbWFyZ2luOiAwO1xyXG5cdCBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cdCBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbiAudGltZWxpbmVfX2JsdXJiIHtcclxuXHQgbGluZS1oZWlnaHQ6IDEuNTtcclxuXHQgZm9udC1zaXplOiAxcmVtO1xyXG5cdCBtYXJnaW46IDAuNXJlbSAwIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/static-header/links/links.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/static-header/links/links.component.ts ***!
  \*******************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 21, vars: 0, consts: [[1, "container-fluid"], ["href", "http://", "target", "_blank", "rel", "noopener noreferrer"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portifolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aWMtaGVhZGVyL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljLWhlYWRlci9saW5rcy9saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-links',
                templateUrl: './links.component.html',
                styleUrls: ['./links.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/static-header/static-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/static-header/static-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: StaticHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticHeaderComponent", function() { return StaticHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StaticHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
StaticHeaderComponent.ɵfac = function StaticHeaderComponent_Factory(t) { return new (t || StaticHeaderComponent)(); };
StaticHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaticHeaderComponent, selectors: [["app-static-header"]], decls: 20, vars: 0, consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-lg", "navbar-dark"], ["href", "#", 1, "navbar-brand", "text-uppercase", "font-weight-bold", "letter-spacing3"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "bg-green"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "font-fam-Works", "letter-spacing0-5", "text-uppercase"], ["href", "#", 1, "nav-item", "nav-link", "active"], [1, "sr-only"], ["href", "#", 1, "nav-item", "nav-link"]], template: function StaticHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    width: 150%;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    margin: 0%;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    color: #1CB698;\r\n    font-size: 30px;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n@media only screen and (min-width: 574px) {\r\n    .container-fluid[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding-left: 10%;\r\n        padding-right: 10%;\r\n        margin: 0%;\r\n    }\r\n\r\n    .navbar-brand[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        padding-left: 2%;\r\n        padding-right: 2%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aWMtaGVhZGVyL3N0YXRpYy1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseVJBQXlSO0FBQzdSOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRpYy1oZWFkZXIvc3RhdGljLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICMxQ0I2OTg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmElMjgyNTUsIDI1NSwgMjU1LCAwLjUlMjknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc0cHgpIHtcclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBtYXJnaW46IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-static-header',
                templateUrl: './static-header.component.html',
                styleUrls: ['./static-header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/enviroment.dev.ts":
/*!********************************************!*\
  !*** ./src/environments/enviroment.dev.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    /** ICONS SOCIAL MEDIAS */
    iconSocialMediaFacebook: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/facebook.png',
    iconSocialMediaTwitter: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/twitter.png',
    iconSocialMediaInstagram: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/instagram.png',
    iconSocialMediaGithub: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/github.png',
    iconSocialMediaLinkedin: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/linkedin.png',
    /** LINKS SOCIAL MEDIAS */
    linkSocialMediaFacebook: 'https://www.facebook.com/LuccasTraumer',
    linkSocialMediaTwitter: 'https://twitter.com/LuccasTraumer',
    linkSocialMediaInstagram: 'https://www.instagram.com/luccastraumer/',
    linkSocialMediaGithub: 'https://github.com/LuccasTraumer',
    linkSocialMediaLinkedin: 'https://www.linkedin.com/in/luccastraumer/',
    /** LINKS IMAGES */
    linkMyPersonalImage: 'https://avatars3.githubusercontent.com/u/16438051?s=400&u=fa0224315b18ada8435edf9ee06f2022f726bb6f&v=4',
    backgroundImageHead: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/developer-working-on-his-project.jpg',
    iconInfo: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/2a1c89fad1e8a4710cb38c81fce09747de9bc986/webpage/src/assets/info.svg',
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\Github\luccastraumer.github.io-page\webpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map