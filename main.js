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
    clickButton() {
        this.longDescription = !this.longDescription;
    }
}
CardProjectComponent.ɵfac = function CardProjectComponent_Factory(t) { return new (t || CardProjectComponent)(); };
CardProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardProjectComponent, selectors: [["card-project"]], inputs: { repository: "repository" }, decls: 15, vars: 9, consts: [[1, "container-fluid"], [1, "title"], [1, "descript", 3, "hidden"], [1, "descript", 3, "hidden", "click"], [1, "button"], [3, "insideText", "redirectLink"]], template: function CardProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardProjectComponent_Template_a_click_7_listener() { return ctx.clickButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " mostrar mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardProjectComponent_Template_a_click_11_listener() { return ctx.clickButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " mostrar menos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository.name.split("_").splice(0, 2).join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.longDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx.repository.description.split(" ").splice(0, 5).join(" "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.longDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.longDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx.repository.description.split(" ").splice(0, 8).join(" "), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.longDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insideText", "GITHUB")("redirectLink", ctx.repository.html_url);
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: ["@media screen and (max-width: 425px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    display: block;\n    width: 90vw;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 5%;\n    background-color: var(--bg-contraste);\n    border-radius: 10px;\n    margin-bottom: 5%;\n    flex-wrap: wrap;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    word-wrap: break-word;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 10%;\n    display: grid;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    background-color: var(--bg-contraste);\n    border-radius: 8px;\n    width: 25vw;\n    height: 30vh;\n    font-size: 1.3em;\n    word-wrap: break-word;\n    clear: both;\n    overflow: hidden;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    display: block;\n    width: 100%;\n    height: 20%;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHFDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFDRjtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQUNKO0VBRUU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHFDQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFGRjtFQUlFO0lBQ0UsZ0JBQUE7RUFGSjtFQUtFO0lBQ0UsZUFBQTtFQUhKO0VBTUU7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFKSjtFQU9FO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0VBTEo7QUFDRjtBQVNBO0VBRUk7SUFDRSxjQUFBO0VBUko7QUFDRiIsImZpbGUiOiJjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuZGVzY3JpcHQge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIC5kZXNjcmlwdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
    pathIconBlackMenuHamburguer: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/menu-hamburguer-black-png.png',
    pathIconWhiteMenuHamburguer: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/menu-hamburguer-white-png.png',
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
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], inputs: { isDarkMode: "isDarkMode" }, decls: 29, vars: 12, consts: [[1, "container-fluid"], [1, "conten"], [1, "body"], [1, "text"], [1, "me"], ["alt", "profile icon", "srcset", "", 3, "src", "hidden"], ["alt", "language icon", "srcset", "", 3, "src", "hidden"], ["alt", "location icon", "srcset", "", 3, "src", "hidden"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hello! I'm Lucas. IT Student at the Technical High School of Campinas. @cotuca and Software Engineer Intern at @ciandt. I loved tattos, finance and martial arts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Portugues & English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Campinas, Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.PROFILE_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.PROFILE_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.SOUND_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.SOUND_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.LOCATION_ICON_WHITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.LOCATION_ICON_BLACK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isDarkMode);
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.container-fluid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2%;\n}\n.container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  padding: inherit;\n}\n.container-fluid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: flex;\n  width: inherit;\n  flex-direction: column;\n}\n.container-fluid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: inherit;\n  width: inherit;\n  align-self: center;\n  justify-content: space-between;\n  padding: 5%;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.3rem;\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    align-items: center;\n    max-width: 100vw;\n    width: 100vw;\n    height: 40vh;\n    max-height: 40vh;\n    margin: 0;\n    justify-content: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%] {\n    background-color: var(--bg-contraste);\n    height: inherit;\n    max-width: 60%;\n    border-radius: 50px;\n    justify-content: center;\n    padding: 5%;\n    align-self: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 70%;\n    text-align: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 70vh;\n    border-radius: 0;\n    justify-content: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%] {\n    width: inherit;\n    height: 70%;\n    background-color: var(--bg-contraste);\n    border-radius: 0px;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .conten[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJUTtFQUNFLGFBQUE7QUFGVjtBQVNBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSx1QkFBQTtFQU5GO0VBU0U7SUFDRSxxQ0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQVBKO0VBV0U7SUFDRSxtQkFBQTtFQVRKO0VBV0k7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUFUTjtFQVlJO0lBQ0UsVUFBQTtFQVZOO0VBYUk7SUFDRSxXQUFBO0VBWE47QUFDRjtBQWdCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBZEY7RUFnQkU7SUFDRSxnQkFBQTtFQWRKO0VBaUJFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxxQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQWZKO0VBaUJJO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWZOO0VBaUJNO0lBQ0UsV0FBQTtFQWZSO0VBaUJRO0lBQ0UsY0FBQTtFQWZWO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcblxyXG4gICAgdGJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgIC5jb250ZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWUge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbiB7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICAgIC5ib2R5IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5tZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonTemplateComponent_ng_container_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendToRedirectLink(ctx_r3.event); });
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
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonTemplateComponent_ng_template_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendToRedirectLink(ctx_r5.event); });
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
    sendToRedirectLink($event) {
        if (this.redirectLink !== null || this.redirectLink !== undefined || this.redirectLink.match('#'))
            this.onClickScroll(this.redirectLink);
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
ButtonTemplateComponent.ɵfac = function ButtonTemplateComponent_Factory(t) { return new (t || ButtonTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
ButtonTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonTemplateComponent, selectors: [["button-template"]], inputs: { redirectLink: "redirectLink", insideText: "insideText" }, decls: 5, vars: 2, consts: [[1, "button"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click"]], template: function ButtonTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonTemplateComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonTemplateComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redirectLink !== null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".button[_ngcontent-%COMP%] {\n  background-color: var(--first-color);\n  font-weight: 500;\n  text-align: center;\n  border-radius: 5px;\n}\n.button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bg-contraste);\n}\n@media screen and (min-width: 768px) {\n  .button[_ngcontent-%COMP%] {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1em;\n  }\n}\n@media screen and (max-width: 425px) {\n  .button[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBR0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiYnV0dG9uLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
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





function WorkComponent_card_project_5_Template(rf, ctx) { if (rf & 1) {
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
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["work"]], decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "cards-repositorys"], [3, "repository", 4, "ngFor", "ngForOf"], [3, "repository"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkComponent_card_project_5_Template, 1, 1, "card-project", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__["CardProjectComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2%;\n  margin: 2%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--font-color);\n}\n.container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: inherit;\n  margin: inherit;\n  max-width: 100%;\n  overflow: hidden;\n  height: inherit;\n  gap: 1.5%;\n}\n.container-fluid[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  word-wrap: unset;\n}\n@media screen and (max-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 0%;\n    flex-grow: 1;\n    margin: 0%;\n    height: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n    margin: 2% 0%;\n    height: 22vh;\n    width: 90vw;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n  }\n  .container-fluid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    width: 90%;\n    justify-content: space-between;\n    flex-grow: 2;\n  }\n  .container-fluid[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n    margin: 1%;\n    width: 30%;\n    height: 45%;\n    flex-basis: 300px;\n  }\n}\n@media screen and (min-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin: 0%;\n    width: 100vw;\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    width: -webkit-max-content;\n    width: max-content;\n    max-height: 90%;\n    height: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUE7RUFDRTtJQUNFLFdBQUE7RUFERjtFQUlFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRko7RUFLRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUhKO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFORjtFQVFFO0lBQ0UsVUFBQTtFQU5KO0VBU0U7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0VBUEo7RUFVRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VBUko7QUFDRjtBQVlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQUEsbUJBQUE7RUFWRjtFQVlBO0lBQ0UsMEJBQUE7SUFBQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyJTtcclxuICBtYXJnaW46IDIlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcblxyXG4gIC5jYXJkcy1yZXBvc2l0b3J5cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogaW5oZXJpdDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBnYXA6IDEuNSU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuXHJcblxyXG4gICAgLmNhcmRzLXJlcG9zaXRvcnlzIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMCU7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmQtcHJvamVjdCB7XHJcbiAgICAgIG1hcmdpbjogMiUgMCU7XHJcbiAgICAgIGhlaWdodDogMjJ2aDtcclxuICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1yZXBvc2l0b3J5cyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmQtcHJvamVjdCB7XHJcbiAgICAgIG1hcmdpbjogMSU7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICBmbGV4LWJhc2lzOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuXHJcbiAgLmNhcmRzLXJlcG9zaXRvcnlzIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gIH1cclxufVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss']
            }]
    }], function () { return [{ type: src_service_api_github_service__WEBPACK_IMPORTED_MODULE_1__["ApiGithubService"] }]; }, null); })();


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
Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconBlackMenuHamburguer;
Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pathIconWhiteMenuHamburguer;


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





function SocialMediaComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.socialMedia.linkSocialMedia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.socialMedia.pathImageWhite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isDarkModeOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.socialMedia.pathImageBlack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isDarkModeOn);
} }
function SocialMediaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.socialMedia.pathImageWhite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.isDarkModeOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.socialMedia.pathImageBlack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.isDarkModeOn);
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
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["social-media"]], inputs: { inputSocialMedia: "inputSocialMedia", isDarkModeOn: "isDarkModeOn" }, decls: 4, vars: 2, consts: [[1, "container-fluid"], ["class", "social", 4, "ngIf", "ngIfElse"], ["class", "social"], ["elseTemplate", ""], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "src", "hidden"], ["href", "mailto:lucassj.dev@gmail.com"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialMediaComponent_ng_container_1_Template, 4, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialMediaComponent_ng_template_2_Template, 3, 4, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["show"]], decls: 14, vars: 6, consts: [[1, "headline"], [1, "content", 3, "ngClass"], ["id", "header", 1, "tagline"], [3, "mode"], ["id", "home"], [1, "punchline", 3, "isDarkMode", "mode"], ["id", "about"], [3, "isDarkMode"], ["id", "work"], ["id", "contact"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
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
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "show": a0 }; };
class PersonalHeaderComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
        this.menuIsOpen = false;
        this.pathIconMenu = this.setDark ? _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_MENU_HAMBURGUER : _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_MENU_HAMBURGUER;
        console.log(this.pathIconMenu);
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        this.clickMenu();
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
        this.pathIconMenu = this.setDark ? _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_MENU_HAMBURGUER : _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_MENU_HAMBURGUER;
    }
    clickMenu() {
        this.menuIsOpen = !this.menuIsOpen;
        console.log(this.menuIsOpen);
    }
}
PersonalHeaderComponent.ɵfac = function PersonalHeaderComponent_Factory(t) { return new (t || PersonalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"])); };
PersonalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalHeaderComponent, selectors: [["personal-header"]], outputs: { mode: "mode" }, decls: 50, vars: 7, consts: [[1, "desktop"], [1, "header"], ["href", "#", 1, "logo"], [1, "cont", 3, "ngClass"], [1, "navbar"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "nav-item"], [1, "switch"], ["type", "checkbox", "checked", "", 3, "click"], [1, "slider", "round"], [1, "mobile", "bg"], [1, "menu-hamb", 3, "click"], [3, "src"]], template: function PersonalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_7_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_12_listener() { return ctx.onClickScroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_15_listener() { return ctx.onClickScroll("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_18_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_input_click_22_listener() { return ctx.toggleDarkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_button_click_28_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_33_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_38_listener() { return ctx.onClickScroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_41_listener() { return ctx.onClickScroll("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_a_click_44_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_input_click_48_listener() { return ctx.toggleDarkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.menuIsOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pathIconMenu, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.menuIsOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".mobile[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 7vh;\n  padding: 0;\n  margin: 0;\n  color: var(--font-color);\n  background: var(--bg-contraste);\n  position: fixed;\n}\n.mobile[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--bg-contraste);\n  padding: 0 5%;\n  width: 100%;\n  height: 7vh;\n  justify-content: space-between;\n  align-items: center;\n}\n.mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n.mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before, .desktop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n  content: \"<lucas-jesus/>\";\n  letter-spacing: 10%;\n}\n.mobile[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 20px;\n}\n.mobile[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.mobile[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.mobile[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before, .desktop[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 3px;\n  background-color: var(--bg-contraste);\n  transition: 0.4s;\n}\n.mobile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--first-color);\n}\n.mobile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px var(--first-color);\n}\n.mobile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before, .desktop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.mobile[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.mobile[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before, .desktop[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n@media screen and (min-width: 769px) {\n  .mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    align-items: baseline;\n    justify-content: space-between;\n    padding: 1% 5%;\n    font-weight: 600;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .navbar[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    padding-top: 5px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .desktop[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .mobile[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n    padding: 0 5%;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n  .mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before, .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n    content: \"<LJ>\";\n    letter-spacing: 10%;\n  }\n  .mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: none;\n    z-index: 1;\n    position: absolute;\n    left: 80%;\n  }\n  .mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw;\n  }\n  .mobile[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n    background: var(--bg-contraste);\n    position: absolute;\n    z-index: 0;\n    padding-top: 100%;\n  }\n  .mobile[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    height: 70%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSx3QkFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBRUEsZ0JBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBRUEsZ0JBQUE7QUFMSjtBQVFFO0VBQ0Usb0NBQUE7QUFOSjtBQVNFO0VBQ0Usc0NBQUE7QUFQSjtBQVVFO0VBR0UsMkJBQUE7QUFSSjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjtBQVlFO0VBQ0Usa0JBQUE7QUFWSjtBQWNBO0VBQ0U7SUFDRSxrQkFBQTtFQVhGO0FBQ0Y7QUFjQTtFQUNFO0lBQ0Usa0JBQUE7RUFaRjs7RUFlQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFaRjs7RUFlQTtJQUNFLFNBQUE7RUFaRjs7RUFlQTtJQUNFLGdCQUFBO0VBWkY7QUFDRjtBQWVBO0VBQ0U7SUFDRSxrQkFBQTtFQWJGOztFQWdCQTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBYkY7RUFlRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQWJKO0VBZ0JFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBZEo7RUFnQkk7SUFDRSxVQUFBO0VBZE47RUFtQkU7SUFDRSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VBakJKO0VBbUJJO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFqQk47QUFDRiIsImZpbGUiOiJwZXJzb25hbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLCAuZGVza3RvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICBkaXYgLmxvZ286OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnPGx1Y2FzLWplc3VzLz4nO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwJTtcclxuICB9XHJcblxyXG4gIC5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcblxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tZmlyc3QtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLm1vYmlsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAubW9iaWxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyID4gOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRlc2t0b3Age1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZSwgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBkaXYgLmxvZ286OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICc8TEo+JztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwJTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDgwJTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY29udCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDEwMCU7XHJcblxyXG4gICAgICAubmF2YmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'personal-header',
                templateUrl: './personal-header.component.html',
                styleUrls: ['./personal-header.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }]; }, { mode: [{
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
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 22, vars: 2, consts: [[1, "container-fluid"], [1, "content"], [1, "top"], [1, "name"], ["type", "text", "placeholder", "Your Name"], [1, "email"], ["type", "email", "name", "", "id", "", "placeholder", "Your e-mail"], [1, "message"], ["name", "", "id", "", "cols", "100", "rows", "10", "placeholder", "Your Message"], [1, "button"], [3, "redirectLink", "insideText"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "button-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectLink", "")("insideText", "Send");
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--font-color);\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 90vw;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--bg-contraste);\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.3em;\n}\n.container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-items: center;\n  margin-top: 2%;\n}\n.container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: var(--input-color);\n  border-radius: 5px;\n  padding: 2%;\n  margin-left: 2%;\n  text-indent: 10%;\n  width: 90%;\n  height: 5vh;\n}\n.container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: max-content;\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    height: 95%;\n    width: 100vw;\n    border-radius: 0px;\n    padding: 0%;\n    margin-bottom: 5%;\n    text-align: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    align-items: center;\n    margin-top: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    padding: 2%;\n    margin-left: 2%;\n    text-indent: 10%;\n    width: 90%;\n    height: 5vh;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 20vw;\n    height: 7vh;\n    margin-top: 5%;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n    padding-bottom: 2%;\n    padding-top: 2%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 2%;\n    margin: 0%;\n    width: 60%;\n    max-width: 70%;\n    border-radius: 10px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    align-items: flex-end;\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxxQ0FBQTtBQUNKO0FBR0U7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFJRTtFQUNJLGdCQUFBO0FBRk47QUFLRTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFITjtBQUtNO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhSO0FBTU07RUFDRSwyQkFBQTtFQUFBLG1CQUFBO0FBSlI7QUFVQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBUEY7RUFTRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VBUEo7RUFVRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFSSjtFQVVJO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUFSTjtFQVdJO0lBQ0UsMkJBQUE7SUFBQSxtQkFBQTtFQVROO0VBYUU7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFYSjs7RUFlQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFO0lBQ0UsbUJBQUE7RUFiRjtFQWVFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBYko7RUFnQkU7SUFDRSxnQkFBQTtFQWRKO0VBaUJFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBZko7RUFrQkU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFoQko7RUFrQkk7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWhCTjtFQW9CRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQWxCSjtFQXFCRTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUFuQko7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDkwdnc7XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5lbWFpbCwgLm5hbWUsIC5tZXNzYWdlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDk1JTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1haWwsIC5uYW1lLCAubWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyJTtcclxuXHJcbiAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICB0ZXh0LWluZGVudDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlkID4gZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICBtYXJnaW46IDAlO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
            _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
        _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"]] }); })();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "social-media", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hi, I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lucas Jesus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_template_click_9_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4);
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