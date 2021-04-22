(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\Github\Angular\luccastraumer.github.io\page\src\main.ts */"zUnb");


/***/ }),

/***/ "12Nz":
/*!*************************************************************!*\
  !*** ./src/app/work/card-project/card-project.component.ts ***!
  \*************************************************************/
/*! exports provided: CardProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProjectComponent", function() { return CardProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../button/button-template/button-template.component */ "M1xF");



class CardProjectComponent {
    constructor() {
        this.longDescription = true;
    }
    ngOnInit() {
    }
    clickButton(event) {
        this.longDescription = !this.longDescription;
    }
}
CardProjectComponent.ɵfac = function CardProjectComponent_Factory(t) { return new (t || CardProjectComponent)(); };
CardProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardProjectComponent, selectors: [["card-project"]], inputs: { repository: "repository" }, decls: 6, vars: 4, consts: [[1, "container-fluid"], [1, "title"], [1, "button"], [3, "insideText", "redirectLink"]], template: function CardProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository.name.split("_").splice(0, 2).join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx.repository.description.split(" ").splice(0, 7).join(" "), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insideText", "GITHUB")("redirectLink", "{{repository.html_url}}");
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: ["@media screen and (max-width: 425px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    display: flex;\n    width: 90vw;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 5%;\n    background-color: var(--bg-contraste);\n    border-radius: 10px;\n    margin-bottom: 5%;\n    flex-wrap: wrap;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    word-wrap: break-word;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 1% 5%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    background-color: var(--bg-contraste);\n    border-radius: 8px;\n    width: 100%;\n    height: 100%;\n    font-size: 1.5em;\n    word-wrap: break-word;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 20%;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHFDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFDRjtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQUNKO0VBRUU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHFDQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7RUFGRjtFQUlFO0lBQ0UsZ0JBQUE7RUFGSjtFQUtFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFISjtFQU1FO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0VBSko7QUFDRiIsImZpbGUiOiJjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgLmRlc2NyaXB0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'card-project',
                templateUrl: './card-project.component.html',
                styleUrls: ['./card-project.component.scss']
            }]
    }], function () { return []; }, { repository: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5mO9":
/*!*****************************************!*\
  !*** ./src/model/social-media.model.ts ***!
  \*****************************************/
/*! exports provided: SocialMediaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaModel", function() { return SocialMediaModel; });
class SocialMediaModel {
}


/***/ }),

/***/ "AytR":
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
    production: false,
    linkGithub: 'https://github.com/LuccasTraumer',
    linkLinkedin: 'https://www.linkedin.com/in/luccastraumer/',
    linkInstagram: 'https://www.instagram.com/luccastraumer/',
    personalEmail: 'lucassj.dev@gmail.com',
    pathIconWhiteEmail: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/email-icon-bg-white.png',
    pathIconWhiteGithub: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/github-icon-bg-white-svg.png',
    pathIconWhiteLinkedin: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/linkedin-icon-bg-white.png',
    pathIconWhiteInstagram: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/instagram-icon-bg-white.png',
    pathIconBlackEmail: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/email-icon.png',
    pathIconBlackGithub: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/github-icon-bg-black-svg.png',
    pathIconBlackLinkedin: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/linkedin-icon-bg-black.png',
    pathIconBlackInstagram: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/icons-social/instagram-icon-bg-black.png',
    pathIconBlackLocation: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/location-icon-bg-black.png',
    pathIconBlackSound: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/sound-icon-bg-black.png',
    pathIconBlackProfile: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/profile-icon-bg-black.png',
    pathIconWhiteLocation: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/location-icon-bg-white.png',
    pathIconWhiteSound: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/sound-icon-bg-white.png',
    pathIconWhiteProfile: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/about-icons/profile-icon-bg-white.png',
    apiGithubRepository: 'https://api.github.com/users/luccastraumer/repos?page=1&per_page=100',
    apiGithubOwner: 'https://api.github.com/users/luccastraumer',
};


/***/ }),

/***/ "BjQp":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "W6Uj");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "sJxD");





class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]], exports: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]
                ],
                exports: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "CGHZ":
/*!*****************************************************!*\
  !*** ./src/app/social-media/social-media.module.ts ***!
  \*****************************************************/
/*! exports provided: SocialMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaModule", function() { return SocialMediaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-media/social-media.component */ "TG4V");




class SocialMediaModule {
}
SocialMediaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialMediaModule });
SocialMediaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialMediaModule_Factory(t) { return new (t || SocialMediaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialMediaModule, { declarations: [_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "JaJ+");




class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "HE3o":
/*!*********************************************!*\
  !*** ./src/app/building/building.module.ts ***!
  \*********************************************/
/*! exports provided: BuildingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingModule", function() { return BuildingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-page/building-page.component */ "hIAi");




class BuildingModule {
}
BuildingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BuildingModule });
BuildingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BuildingModule_Factory(t) { return new (t || BuildingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BuildingModule, { declarations: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JaJ+":
/*!************************************************!*\
  !*** ./src/app/about/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.PROFILE_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.PROFILE_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.SOUND_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.SOUND_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.LOCATION_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.LOCATION_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AboutComponent {
    constructor() {
        this.LOCATION_ICON_BLACK = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_LOCATION;
        this.PROFILE_ICON_BLACK = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_PROFILE;
        this.SOUND_ICON_BLACK = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_SOUND;
        this.PROFILE_ICON_WHITE = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_PROFILE;
        this.LOCATION_ICON_WHITE = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_LOCATION;
        this.SOUND_ICON_WHITE = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_SOUND;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], inputs: { isDarkMode: "isDarkMode" }, decls: 32, vars: 6, consts: [[1, "container-fluid"], [1, "conten"], [1, "title-section"], [1, "body"], [1, "text"], [1, "me"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["alt", "profile icon", "srcset", "", 3, "src"], ["alt", "language icon", "srcset", "", 3, "src"], ["alt", "location icon", "srcset", "", 3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hello! I'm Lucas. IT Student at the Technical High School of Campinas. @cotuca and Software Engineer Intern at @ciandt. I loved tattos, finance and martial arts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_ng_container_13_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AboutComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AboutComponent_ng_container_20_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AboutComponent_ng_template_21_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Portugues & English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AboutComponent_ng_container_27_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AboutComponent_ng_template_28_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Campinas, Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDarkMode)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDarkMode)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDarkMode)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    background-color: var(--bg-contraste);\n    display: flex;\n    padding: 5%;\n    align-items: center;\n    max-width: 80vw;\n    width: 65vw;\n    height: 40vh;\n    max-height: 40vh;\n    border-radius: 50px;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: inherit;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 70%;\n    text-align: center;\n    font-weight: 600;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: inherit;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: flex;\n    width: inherit;\n    flex-direction: column;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: inherit;\n    width: 100%;\n    align-self: center;\n    justify-content: space-between;\n    padding: 5%;\n    font-size: 1rem;\n    font-weight: 500;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 1.3rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    width: 90vw;\n    height: 70vh;\n    border-radius: 0;\n    display: flex;\n    justify-content: center;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n    font-weight: 600;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 70%;\n    background-color: var(--bg-contraste);\n    border-radius: 10px;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: inherit;\n    padding: inherit;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: flex;\n    width: inherit;\n    flex-direction: column;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: inherit;\n    width: inherit;\n    align-self: center;\n    justify-content: space-between;\n    padding: 5%;\n    font-size: 0.8rem;\n    font-weight: 500;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0VBQ0Y7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUNKO0VBRUU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBQUo7RUFFSTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBQU47RUFHSTtJQUNFLFVBQUE7RUFETjtFQUlJO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBRk47RUFJTTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUFGUjtFQUlRO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFGVjtFQUlVO0lBQ0UsYUFBQTtFQUZaO0FBQ0Y7QUFVQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0VBUkY7RUFVRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQVJKO0VBV0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBVEo7RUFZRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0EscUNBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFWSjtFQVlJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFWTjtFQVlNO0lBQ0UsV0FBQTtFQVZSO0VBWVE7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUFWVjtFQVlVO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtFQVZaO0VBWVk7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFWZDtFQVljO0lBQ0UsYUFBQTtFQVZoQjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gICAgd2lkdGg6IDY1dnc7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuXHJcbiAgICAudGl0bGUtc2VjdGlvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWUge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiBpbmhlcml0O1xyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG5cclxuICAgIC50aXRsZS1zZWN0aW9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICAgIC5ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLm1lIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcblxyXG4gICAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, { isDarkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "M1xF":
/*!*********************************************************************!*\
  !*** ./src/app/button/button-template/button-template.component.ts ***!
  \*********************************************************************/
/*! exports provided: ButtonTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTemplateComponent", function() { return ButtonTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ButtonTemplateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.redirectLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.insideText);
} }
function ButtonTemplateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.insideText);
} }
class ButtonTemplateComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    ngOnInit() {
        if (this.redirectLink.match('#'))
            this.onClickScroll(this.redirectLink);
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
ButtonTemplateComponent.ɵfac = function ButtonTemplateComponent_Factory(t) { return new (t || ButtonTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
ButtonTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonTemplateComponent, selectors: [["button-template"]], inputs: { redirectLink: "redirectLink", insideText: "insideText" }, decls: 5, vars: 2, consts: [[1, "button"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer"]], template: function ButtonTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonTemplateComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonTemplateComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redirectLink !== null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@media screen and (min-width: 768px) {\n  .button[_ngcontent-%COMP%] {\n    background-color: var(--first-color);\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    border-radius: 5px;\n    font-size: 1em;\n    font-weight: 500;\n  }\n  .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--bg-contraste);\n  }\n}\n@media screen and (max-width: 425px) {\n  .button[_ngcontent-%COMP%] {\n    background-color: var(--first-color);\n    display: block;\n    text-align: center;\n    border-radius: 5px;\n    font-weight: 500;\n  }\n  .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--bg-contraste);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLG9DQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQUNGO0VBQ0U7SUFDRSwwQkFBQTtFQUNKO0FBQ0Y7QUFHQTtFQUNFO0lBQ0Usb0NBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBREY7RUFHRTtJQUNFLDBCQUFBO0VBREo7QUFDRiIsImZpbGUiOiJidXR0b24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button-template',
                templateUrl: './button-template.component.html',
                styleUrls: ['./button-template.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, { redirectLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], insideText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OUCW":
/*!*********************************************!*\
  !*** ./src/app/work/work/work.component.ts ***!
  \*********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_service_api_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/api-github.service */ "Qx/p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-project/card-project.component */ "12Nz");





function WorkComponent_card_project_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-project", 3);
} if (rf & 2) {
    const repository_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repository", repository_r1);
} }
class WorkComponent {
    constructor(serviceApi) {
        this.serviceApi = serviceApi;
        this.listRep = ['AirCnC', 'WazeDev', 'mmartins', 'campact_huffman', 'twitter_data_covid-19', 'remade_random_websites'];
        this.repositories = [];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.dataApi = this.serviceApi.getRepository(this.listRep);
        const objObservable = this.dataApi.subscribe(data => {
            data.map((repository) => {
                if (this.listRep.indexOf(repository.name) >= 0) {
                    this.repositories.push(repository);
                }
            });
        }).unsubscribe;
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_api_github_service__WEBPACK_IMPORTED_MODULE_1__["ApiGithubService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["work"]], decls: 5, vars: 1, consts: [[1, "container-fluid"], [1, "cards-repositorys"], [3, "repository", 4, "ngFor", "ngForOf"], [3, "repository"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkComponent_card_project_4_Template, 1, 1, "card-project", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__["CardProjectComponent"]], styles: ["@media screen and (max-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 5%;\n    margin: 2%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 3em;\n    padding: 5%;\n    overflow-x: hidden;\n    flex-grow: 1;\n  }\n}\n@media screen and (min-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 2%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    padding: inherit;\n    margin: inherit;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    width: 95%;\n    max-height: 90%;\n    height: 85%;\n    height: inherit;\n    overflow: hidden;\n  }\n  .container-fluid[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n    margin: 1%;\n    width: 40%;\n    height: 50%;\n  }\n}\n@media screen and (min-width: 1028px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 2%;\n    margin: 2%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    padding: inherit;\n    margin: inherit;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    width: 90%;\n    height: inherit;\n    overflow: hidden;\n    justify-content: space-between;\n  }\n  .container-fluid[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n    margin: 1%;\n    width: 30%;\n    height: 45%;\n    flex-grow: 1;\n    flex-basis: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtFQUNGO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFDSjtBQUNGO0FBR0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx3QkFBQTtFQURGO0VBR0E7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFERjtFQUlBO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0VBSkY7RUFNRTtJQUNFLFVBQUE7RUFKSjtFQU9FO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDhCQUFBO0VBTEo7RUFRRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoid29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcblxyXG4gICAgLmNhcmRzLXJlcG9zaXRvcnlzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDNlbTtcclxuICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG5cclxuICAuY2FyZHMtcmVwb3NpdG9yeXMge1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgY2FyZC1wcm9qZWN0IHtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjhweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtcmVwb3NpdG9yeXMge1xyXG4gICAgICBwYWRkaW5nOiBpbmhlcml0O1xyXG4gICAgICBtYXJnaW46IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkLXByb2plY3Qge1xyXG4gICAgICBtYXJnaW46IDElO1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1JTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmbGV4LWJhc2lzOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss']
            }]
    }], function () { return [{ type: src_service_api_github_service__WEBPACK_IMPORTED_MODULE_1__["ApiGithubService"] }]; }, null); })();


/***/ }),

/***/ "QFL/":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "hZ7r");




class NotFoundModule {
}
NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotFoundModule });
NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Qx/p":
/*!*******************************************!*\
  !*** ./src/service/api-github.service.ts ***!
  \*******************************************/
/*! exports provided: ApiGithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGithubService", function() { return ApiGithubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ApiGithubService {
    constructor(http) {
        this.http = http;
        this.apiGithubRepositories = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].apiGithubRepository;
    }
    getRepository(listaRep) {
        return this.makeRequestRepository();
    }
    makeRequestRepository() {
        return this.http.get(this.apiGithubRepositories)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        alert(errorMessage);
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
ApiGithubService.ɵfac = function ApiGithubService_Factory(t) { return new (t || ApiGithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiGithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGithubService, factory: ApiGithubService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Rl2v":
/*!*********************************!*\
  !*** ./src/utils/Constantes.ts ***!
  \*********************************/
/*! exports provided: Constantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constantes", function() { return Constantes; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

class Constantes {
}
Constantes.LINK_GITHUB = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].linkGithub;
Constantes.LINK_INSTAGRAM = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].linkInstagram;
Constantes.LINK_LINKEDIN = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].linkLinkedin;
Constantes.PERSONAL_EMAIL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].personalEmail;
Constantes.PATH_ICON_BLACK_GITHUB = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackGithub;
Constantes.PATH_ICON_BLACK_LINKEDIN = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackLinkedin;
Constantes.PATH_ICON_BLACK_EMAIL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackEmail;
Constantes.PATH_ICON_BLACK_INSTAGRAM = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackInstagram;
Constantes.PATH_ICON_WHITE_INSTAGRAM = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteInstagram;
Constantes.PATH_ICON_WHITE_EMAIL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteEmail;
Constantes.PATH_ICON_WHITE_LINKEDIN = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteLinkedin;
Constantes.PATH_ICON_WHITE_GITHUB = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteGithub;
Constantes.PATH_ICON_BLACK_LOCATION = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackLocation;
Constantes.PATH_ICON_BLACK_SOUND = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackSound;
Constantes.PATH_ICON_BLACK_PROFILE = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackProfile;
Constantes.PATH_ICON_WHITE_LOCATION = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteLocation;
Constantes.PATH_ICON_WHITE_SOUND = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteSound;
Constantes.PATH_ICON_WHITE_PROFILE = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteProfile;
Constantes.apiGithubRepository = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiGithubRepository;
Constantes.apiGithubOwner = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiGithubOwner;


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TG4V":
/*!*********************************************************************!*\
  !*** ./src/app/social-media/social-media/social-media.component.ts ***!
  \*********************************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/Constantes */ "Rl2v");
/* harmony import */ var src_model_social_media_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/social-media.model */ "5mO9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SocialMediaComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.socialMedia.pathImageWhite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaComponent_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.socialMedia.pathImageBlack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialMediaComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SocialMediaComponent_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.socialMedia.linkSocialMedia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDarkModeOn)("ngIfElse", _r4);
} }
function SocialMediaComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.socialMedia.pathImageWhite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.socialMedia.pathImageBlack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialMediaComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialMediaComponent_ng_template_2_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isDarkModeOn)("ngIfElse", _r7);
} }
class SocialMediaComponent {
    constructor() {
        this.socialMedia = new src_model_social_media_model__WEBPACK_IMPORTED_MODULE_2__["SocialMediaModel"]();
        this.isDarkModeOn = false;
    }
    ngOnInit() {
        this.selectSocialMedia();
    }
    selectSocialMedia() {
        switch (this.inputSocialMedia) {
            case 'instagram':
                this.socialMedia.linkSocialMedia = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].LINK_INSTAGRAM;
                this.socialMedia.pathImageWhite = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_INSTAGRAM;
                this.socialMedia.pathImageBlack = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_INSTAGRAM;
                break;
            case 'linkedin':
                this.socialMedia.linkSocialMedia = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].LINK_LINKEDIN;
                this.socialMedia.pathImageWhite = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_LINKEDIN;
                this.socialMedia.pathImageBlack = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_LINKEDIN;
                break;
            case 'github':
                this.socialMedia.linkSocialMedia = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].LINK_GITHUB;
                this.socialMedia.pathImageWhite = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_GITHUB;
                this.socialMedia.pathImageBlack = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_GITHUB;
                break;
            case 'email':
                this.socialMedia.linkSocialMedia = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PERSONAL_EMAIL;
                this.socialMedia.pathImageWhite = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_EMAIL;
                this.socialMedia.pathImageBlack = src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_EMAIL;
                break;
        }
    }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(); };
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["social-media"]], inputs: { inputSocialMedia: "inputSocialMedia", isDarkModeOn: "isDarkModeOn" }, decls: 4, vars: 2, consts: [[1, "container-fluid"], ["class", "social", 4, "ngIf", "ngIfElse"], ["class", "social"], ["elseTemplate", ""], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [4, "ngIf", "ngIfElse"], [3, "src"], ["href", "mailto:lucassj.dev@gmail.com"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialMediaComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialMediaComponent_ng_template_2_Template, 4, 2, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputSocialMedia !== "email")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n}\n\n@media screen and (min-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FBQUo7O0FBSUE7RUFFSTtJQUNFLFVBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InNvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogM2VtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'social-media',
                templateUrl: './social-media.component.html',
                styleUrls: ['./social-media.component.scss']
            }]
    }], function () { return []; }, { inputSocialMedia: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDarkModeOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Tu//":
/*!**************************************************!*\
  !*** ./src/app/view-page/show/show.component.ts ***!
  \**************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _personal_header_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../personal-header/personal-header/personal-header.component */ "Vazs");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/home/home.component */ "cPhq");
/* harmony import */ var _about_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/about/about.component */ "JaJ+");
/* harmony import */ var _work_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../work/work/work.component */ "OUCW");
/* harmony import */ var _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contact/contact/contact.component */ "W6Uj");
/* harmony import */ var _personal_footer_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../personal-footer/personal-footer/personal-footer.component */ "c5N7");









const _c0 = function (a0) { return { "dark-theme": a0 }; };
class ShowComponent {
    constructor() {
    }
    receiveMode($event) {
        this.isDarkModeOn = $event;
        console.log(this.isDarkModeOn);
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["show"]], decls: 14, vars: 6, consts: [[1, "container-fluid"], [1, "content", 3, "ngClass"], ["id", "header"], [3, "mode"], ["id", "home"], [3, "isDarkMode", "mode"], ["id", "about"], [3, "isDarkMode"], ["id", "work"], ["id", "contact"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "personal-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function ShowComponent_Template_personal_header_mode_3_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "home", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function ShowComponent_Template_home_mode_5_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "about", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "work", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "personal-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isDarkModeOn));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkMode", ctx.isDarkModeOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkMode", ctx.isDarkModeOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkMode", ctx.isDarkModeOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _personal_header_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _work_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"], _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _personal_footer_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_7__["PersonalFooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  padding: inherit;\n  margin: inherit;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  padding: 0%;\n  margin: 0%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogaW5oZXJpdDtcclxuICBtYXJnaW46IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'show',
                templateUrl: './show.component.html',
                styleUrls: ['./show.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Vazs":
/*!******************************************************************************!*\
  !*** ./src/app/personal-header/personal-header/personal-header.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalHeaderComponent", function() { return PersonalHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class PersonalHeaderComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
        sessionStorage.setItem('darkModeOn', `${this.setDark}`);
    }
}
PersonalHeaderComponent.ɵfac = function PersonalHeaderComponent_Factory(t) { return new (t || PersonalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
PersonalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalHeaderComponent, selectors: [["personal-header"]], outputs: { mode: "mode" }, decls: 25, vars: 0, consts: [[1, "navbar", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "nav-item"], [1, "switch"], ["type", "checkbox", "checked", "", 3, "click"], [1, "slider", "round"]], template: function PersonalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_8_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_13_listener() { return ctx.onClickScroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_16_listener() { return ctx.onClickScroll("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_19_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_input_click_23_listener() { return ctx.toggleDarkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\n  background-color: var(--bg-contraste);\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  font-weight: bold;\n  position: fixed;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  transition: all 1s step-start;\n}\n@media screen and (max-width: 425px) {\n  div[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]::before {\n    content: \"LJ\";\n    letter-spacing: 10%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    padding: 0.5rem 5rem;\n    height: 7vh;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    align-items: baseline;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-grow: 0;\n  }\n\n  div[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]::before {\n    content: \"<lucas-jesus/>\";\n  }\n\n  .switch[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 20px;\n  }\n\n  .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider[_ngcontent-%COMP%] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--font-color);\n    transition: 0.4s;\n  }\n\n  .slider[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    height: 15px;\n    width: 15px;\n    left: 4px;\n    bottom: 3px;\n    background-color: var(--bg-contraste);\n    transition: 0.4s;\n  }\n\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n    background-color: var(--first-color);\n  }\n\n  input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n    box-shadow: 0 0 1px var(--first-color);\n  }\n\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(26px);\n  }\n\n  \n  .slider.round[_ngcontent-%COMP%] {\n    border-radius: 34px;\n  }\n\n  .slider.round[_ngcontent-%COMP%]:before {\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQUNGO0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUdBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLDBCQUFBO0FBQUo7QUFHRTtFQUNFLDZCQUFBO0FBREo7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQUhGOztFQU1BO0lBQ0UscUJBQUE7RUFIRjs7RUFNQTtJQUNFLFlBQUE7RUFIRjs7RUFPQTtJQUNFLHlCQUFBO0VBSkY7O0VBT0E7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFKRjs7RUFPQTtJQUNFLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtFQUpGOztFQU9BO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLG1DQUFBO0lBRUEsZ0JBQUE7RUFKRjs7RUFPQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxxQ0FBQTtJQUVBLGdCQUFBO0VBSkY7O0VBT0E7SUFDRSxvQ0FBQTtFQUpGOztFQU9BO0lBQ0Usc0NBQUE7RUFKRjs7RUFPQTtJQUdFLDJCQUFBO0VBSkY7O0VBT0Esb0JBQUE7RUFDQTtJQUNFLG1CQUFBO0VBSkY7O0VBT0E7SUFDRSxrQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoicGVyc29uYWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGxpIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICBhOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgc3RlcC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgZGl2IC5uYXZiYXItYnJhbmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnTEonO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAuNXJlbSA1cmVtO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbiAgfVxyXG5cclxuICBkaXYgLm5hdmJhci1icmFuZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICc8bHVjYXMtamVzdXMvPic7XHJcbiAgfVxyXG5cclxuICAuc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWZpcnN0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgfVxyXG5cclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'personal-header',
                templateUrl: './personal-header.component.html',
                styleUrls: ['./personal-header.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "W6Uj":
/*!******************************************************!*\
  !*** ./src/app/contact/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../button/button-template/button-template.component */ "M1xF");



class ContactComponent {
    constructor() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 19, vars: 2, consts: [[1, "container-fluid"], [1, "content"], [1, "top"], [1, "email"], ["type", "email", "name", "", "id", "", "placeholder", "Your e-mail"], [1, "name"], ["type", "text", "placeholder", "Your Name"], [1, "message"], ["name", "", "id", "", "cols", "10", "rows", "8", "placeholder", "Your Message"], [1, "button"], [3, "redirectLink", "insideText"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "button-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectLink", "")("insideText", "Send");
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: ["@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    background-color: var(--bg-contraste);\n    display: flex;\n    flex-direction: column;\n    height: 95%;\n    width: 90vw;\n    border-radius: 10px;\n    padding: 5%;\n    text-align: center;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: 600;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    align-items: center;\n    margin-top: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    background-color: var(--bg-color);\n    border-radius: 5px;\n    padding: 2%;\n    margin-left: 2%;\n    text-indent: 10%;\n    width: 90%;\n    height: 5vh;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 20vw;\n    height: 7vh;\n    margin-top: 5%;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n    padding-bottom: 2%;\n    padding-top: 2%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: 90vw;\n    align-items: center;\n    color: var(--font-color);\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 1.3em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 2%;\n    margin: 0%;\n    background-color: var(--bg-contraste);\n    width: 60%;\n    max-width: 70%;\n    border-radius: 10px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 2%;\n    font-weight: 600;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    align-items: flex-start;\n    margin-top: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    background-color: var(--bg-color-input);\n    border-radius: 5px;\n    padding: 2%;\n    margin-left: 2%;\n    text-indent: 7%;\n    width: 90%;\n    height: 5vh;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    align-items: flex-end;\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtFQUNGO0VBQ0U7SUFDRSxnQkFBQTtFQUNKO0VBRUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBQUo7RUFFSTtJQUNFLGlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUFBTjtFQUdJO0lBQ0UsMkJBQUE7SUFBQSxtQkFBQTtFQUROO0VBS0U7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFISjs7RUFRQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0VBTkY7RUFRRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFOSjtFQVNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFQSjtFQVVFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQVJKO0VBV0U7SUFDRSxhQUFBO0VBVEo7RUFZRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7RUFWSjtFQVlJO0lBQ0UsdUNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBVk47RUFhSTtJQUNFLFdBQUE7SUFDQSwyQkFBQTtJQUFBLG1CQUFBO0VBWE47RUFlRTtJQUNFLFVBQUE7RUFiSjtFQWdCRTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUFkSjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtYWlsLCAubmFtZSwgLm1lc3NhZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlkID4gZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICBtYXJnaW46IDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtYWlsLCAubmFtZSwgLm1lc3NhZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWlucHV0KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiA3JTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-page/view-page.module */ "wiPO");
/* harmony import */ var _building_building_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building/building.module */ "HE3o");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.module */ "QFL/");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-scrollreveal */ "faXT");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
            _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
            _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
            ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_7__["NgsRevealModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
        _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
        _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
        ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_7__["NgsRevealModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
                    _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
                    _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
                    ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_7__["NgsRevealModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c5N7":
/*!******************************************************************************!*\
  !*** ./src/app/personal-footer/personal-footer/personal-footer.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalFooterComponent", function() { return PersonalFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_media_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../social-media/social-media/social-media.component */ "TG4V");



class PersonalFooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
}
PersonalFooterComponent.ɵfac = function PersonalFooterComponent_Factory(t) { return new (t || PersonalFooterComponent)(); };
PersonalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalFooterComponent, selectors: [["personal-footer"]], inputs: { isDarkMode: "isDarkMode" }, decls: 11, vars: 9, consts: [[1, "container-fluid"], [1, "name"], [1, "social-medias"], [3, "isDarkModeOn", "inputSocialMedia"], [1, "credit"]], template: function PersonalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, "; Made with love by Lucas Jesus. ");
    } }, directives: [_social_media_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: var(--bg-contraste);\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  color: var(--font-color);\n  font-weight: bold;\n  letter-spacing: 1px;\n  flex-wrap: wrap;\n  width: 100vw;\n}\n.container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin-bottom: 1%;\n}\n.container-fluid[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%] {\n  display: flex;\n  height: 40%;\n}\n.container-fluid[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-size: 0.9em;\n  letter-spacing: 1.2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hbC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFESiIsImZpbGUiOiJwZXJzb25hbC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtbWVkaWFzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICB9XHJcblxyXG4gIC5jcmVkaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'personal-footer',
                templateUrl: './personal-footer.component.html',
                styleUrls: ['./personal-footer.component.scss']
            }]
    }], function () { return []; }, { isDarkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/button-template/button-template.component */ "M1xF");
/* harmony import */ var _social_media_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../social-media/social-media/social-media.component */ "TG4V");





class HomeComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.sentences = ['Angular Developer', 'Fullstack Developer', 'Javascript & Typescript', 'in love for mobile dev', 'in love for frontend dev'];
        this.index = 1;
        this.isDarkMode = false;
        this.sentence = this.sentences[this.index];
        setInterval(() => {
            this.sentence = this.index > this.sentences.length - 1 ? this.sentences[this.index = 0] : this.sentences[this.index++];
        }, 3000);
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], inputs: { isDarkMode: "isDarkMode" }, decls: 15, vars: 11, consts: [[1, "container-fluid"], [1, "text"], [1, "button"], [3, "redirectLink", "insideText", "click"], [1, "social-medias"], [3, "isDarkModeOn", "inputSocialMedia"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hi, I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_template_click_9_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "social-media", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "social-media", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "social-media", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "social-media", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sentence, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectLink", null)("insideText", "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkModeOn", ctx.isDarkMode)("inputSocialMedia", "email");
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__["ButtonTemplateComponent"], _social_media_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_3__["SocialMediaComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 5% 0 1% 0;\n  margin-top: 5%;\n  height: 100vh;\n  align-items: center;\n  color: var(--font-color);\n}\n.container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 25%;\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: inherit;\n  text-align: center;\n  font-weight: bold;\n  font-size: 3rem;\n}\n.container-fluid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--first-color);\n}\n.container-fluid[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%] {\n  display: inherit;\n  justify-content: center;\n  width: inherit;\n  padding: 10%;\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 20% 0 5% 0;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%] {\n    padding: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFISjtBQU9BO0VBQ0U7SUFDRSxtQkFBQTtFQUpGO0VBT0U7SUFDRSxlQUFBO0VBTEo7RUFRRTtJQUNFLFlBQUE7RUFOSjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNSUgMCAxJSAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcblxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLW1lZGlhcyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiAyMCUgMCA1JSAwO1xyXG5cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLW1lZGlhcyB7XHJcbiAgICAgIHBhZGRpbmc6IDQwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, { isDarkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-media/social-media.module */ "CGHZ");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.module */ "sJxD");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]
                ],
                exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fXhS":
/*!***********************************************************!*\
  !*** ./src/app/personal-header/personal-header.module.ts ***!
  \***********************************************************/
/*! exports provided: PersonalHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalHeaderModule", function() { return PersonalHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-header/personal-header.component */ "Vazs");




class PersonalHeaderModule {
}
PersonalHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalHeaderModule });
PersonalHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalHeaderModule_Factory(t) { return new (t || PersonalHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalHeaderModule, { declarations: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "g+tZ":
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work/work.component */ "OUCW");
/* harmony import */ var _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-project/card-project.component */ "12Nz");
/* harmony import */ var src_service_api_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/service/api-github.service */ "Qx/p");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/button.module */ "sJxD");








class WorkModule {
}
WorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkModule });
WorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkModule_Factory(t) { return new (t || WorkModule)(); }, providers: [src_service_api_github_service__WEBPACK_IMPORTED_MODULE_4__["ApiGithubService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkModule, { declarations: [_work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"], _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__["CardProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]], exports: [_work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"], _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__["CardProjectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]
                ],
                providers: [src_service_api_github_service__WEBPACK_IMPORTED_MODULE_4__["ApiGithubService"]],
                exports: [_work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "giJY":
/*!***********************************************************!*\
  !*** ./src/app/personal-footer/personal-footer.module.ts ***!
  \***********************************************************/
/*! exports provided: PersonalFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalFooterModule", function() { return PersonalFooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-footer/personal-footer.component */ "c5N7");
/* harmony import */ var _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-media/social-media.module */ "CGHZ");





class PersonalFooterModule {
}
PersonalFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalFooterModule });
PersonalFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalFooterModule_Factory(t) { return new (t || PersonalFooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalFooterModule, { declarations: [_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_2__["PersonalFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"]], exports: [_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_2__["PersonalFooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalFooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_2__["PersonalFooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediaModule"]
                ],
                exports: [_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_2__["PersonalFooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hIAi":
/*!*******************************************************************!*\
  !*** ./src/app/building/building-page/building-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: BuildingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingPageComponent", function() { return BuildingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BuildingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BuildingPageComponent.ɵfac = function BuildingPageComponent_Factory(t) { return new (t || BuildingPageComponent)(); };
BuildingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingPageComponent, selectors: [["building-page"]], decls: 5, vars: 0, consts: [[1, "build", "container-fluid"], [1, "container"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/db094b2aa68a6d98df6338cac2caf93ccaaa80e2/webpage/src/assets/in-building.svg", "alt", "", "srcset", ""], [1, "font-size2rem"]], template: function BuildingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "401 IN BUILDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".build[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n}\r\n\r\n.build[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJidWlsZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVpbGQgLmNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG59XHJcblxyXG4uYnVpbGQgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'building-page',
                templateUrl: './building-page.component.html',
                styleUrls: ['./building-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hZ7r":
/*!**********************************************************************!*\
  !*** ./src/app/not-found/not-found-page/not-found-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
    imgNotFound() {
        return 'Constantes.iconNotFoundPage';
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["not-found-page"]], decls: 5, vars: 1, consts: [[1, "container-fluid"], [1, "img"], ["alt", "", "srcset", "", 3, "src"], [1, "text"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgNotFound(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  font-family: 'Righteous', cursive;\r\n  color: #fff;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  border-radius: 30%;\r\n  transition: 0.3s;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]:hover {\r\n  background-color: #252a2e;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30rem;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  font-size: 7rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover {\r\n  color: #1CB698;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      width: 15rem;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      font-size: 2.5rem;\r\n      transition: 0.3s;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTtNQUNJLHNCQUFzQjtNQUN0Qix1QkFBdUI7RUFDM0I7O0VBRUE7TUFDSSxZQUFZO0VBQ2hCOztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjtBQUNGIiwiZmlsZSI6Im5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgLmltZyB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgLmltZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmEyZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAuaW1nIGltZyB7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIC50ZXh0IHtcclxuICBmb250LXNpemU6IDdyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAudGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICMxQ0I2OTg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCAuaW1nIGltZ3tcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sJxD":
/*!*****************************************!*\
  !*** ./src/app/button/button.module.ts ***!
  \*****************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-template/button-template.component */ "M1xF");




class ButtonModule {
}
ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__["ButtonTemplateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__["ButtonTemplateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__["ButtonTemplateComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_2__["ButtonTemplateComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _view_page_show_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-page/show/show.component */ "Tu//");






const routes = [
    {
        path: 'home',
        component: _view_page_show_show_component__WEBPACK_IMPORTED_MODULE_3__["ShowComponent"],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    },
    {
        path: 'navbarNavAltMarkup',
        redirectTo: 'home'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                anchorScrolling: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        anchorScrolling: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wiPO":
/*!***********************************************!*\
  !*** ./src/app/view-page/view-page.module.ts ***!
  \***********************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show/show.component */ "Tu//");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.module */ "FQ1g");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.module */ "BjQp");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _personal_header_personal_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../personal-header/personal-header.module */ "fXhS");
/* harmony import */ var _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social-media/social-media.module */ "CGHZ");
/* harmony import */ var _work_work_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../work/work.module */ "g+tZ");
/* harmony import */ var _personal_footer_personal_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../personal-footer/personal-footer.module */ "giJY");











class ViewPageModule {
}
ViewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewPageModule });
ViewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewPageModule_Factory(t) { return new (t || ViewPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"],
            _personal_header_personal_header_module__WEBPACK_IMPORTED_MODULE_6__["PersonalHeaderModule"],
            _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_7__["SocialMediaModule"],
            _work_work_module__WEBPACK_IMPORTED_MODULE_8__["WorkModule"],
            _personal_footer_personal_footer_module__WEBPACK_IMPORTED_MODULE_9__["PersonalFooterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewPageModule, { declarations: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"],
        _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"],
        _personal_header_personal_header_module__WEBPACK_IMPORTED_MODULE_6__["PersonalHeaderModule"],
        _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_7__["SocialMediaModule"],
        _work_work_module__WEBPACK_IMPORTED_MODULE_8__["WorkModule"],
        _personal_footer_personal_footer_module__WEBPACK_IMPORTED_MODULE_9__["PersonalFooterModule"]], exports: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                    _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"],
                    _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"],
                    _personal_header_personal_header_module__WEBPACK_IMPORTED_MODULE_6__["PersonalHeaderModule"],
                    _social_media_social_media_module__WEBPACK_IMPORTED_MODULE_7__["SocialMediaModule"],
                    _work_work_module__WEBPACK_IMPORTED_MODULE_8__["WorkModule"],
                    _personal_footer_personal_footer_module__WEBPACK_IMPORTED_MODULE_9__["PersonalFooterModule"]
                ],
                exports: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map