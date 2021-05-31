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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: ["@media screen and (max-width: 650px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    display: block;\n    width: 90vw;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 5%;\n    background-color: var(--bg-contraste);\n    border-radius: 10px;\n    margin-bottom: 5%;\n    flex-wrap: wrap;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    word-wrap: break-word;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 650px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 10%;\n    display: grid;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    background-color: var(--bg-contraste);\n    border-radius: 8px;\n    width: 25vw;\n    height: 30vh;\n    font-size: 1.3em;\n    word-wrap: break-word;\n    clear: both;\n    overflow: hidden;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n  .container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    display: block;\n    width: 100%;\n    height: 20%;\n    align-items: center;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHFDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFDRjtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQUNKO0VBRUU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHFDQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFGRjtFQUlFO0lBQ0UsZ0JBQUE7RUFGSjtFQUtFO0lBQ0UsZUFBQTtFQUhKO0VBTUU7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFKSjtFQU9FO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0VBTEo7QUFDRjtBQVNBO0VBRUk7SUFDRSxjQUFBO0VBUko7QUFDRiIsImZpbGUiOiJjYXJkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuZGVzY3JpcHQge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIC5kZXNjcmlwdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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

/***/ "1M2X":
/*!**************************************************************************!*\
  !*** ./src/app/personal-header/switch-toggle/switch-toggle.component.ts ***!
  \**************************************************************************/
/*! exports provided: SwitchToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchToggleComponent", function() { return SwitchToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SwitchToggleComponent {
    constructor() {
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
    }
    ngOnInit() {
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
}
SwitchToggleComponent.ɵfac = function SwitchToggleComponent_Factory(t) { return new (t || SwitchToggleComponent)(); };
SwitchToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchToggleComponent, selectors: [["switch-toggle"]], outputs: { mode: "mode" }, decls: 3, vars: 0, consts: [[1, "switch"], ["type", "checkbox", "checked", "", 3, "click"], [1, "slider", "round"]], template: function SwitchToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchToggleComponent_Template_input_click_1_listener() { return ctx.toggleDarkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 20px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 3px;\n  background-color: var(--bg-contraste);\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--first-color);\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px var(--first-color);\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzd2l0Y2gtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUVBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFFQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBRUE7RUFHRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3dpdGNoLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICBib3R0b206IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLWZpcnN0LWNvbG9yKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'switch-toggle',
                templateUrl: './switch-toggle.component.html',
                styleUrls: ['./switch-toggle.component.scss']
            }]
    }], function () { return []; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_service_api_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/api-github.service */ "Qx/p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__["CardProjectComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2%;\n  margin: 2%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--font-color);\n}\n.container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: inherit;\n  max-width: 100%;\n  overflow: hidden;\n  height: inherit;\n  gap: 1.5%;\n  justify-content: space-between;\n  margin-bottom: 5%;\n}\n.container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1;\n}\n.container-fluid[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  word-wrap: unset;\n}\n@media screen and (max-width: 1024px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 5%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 0%;\n    margin: 0%;\n    height: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child   *[_ngcontent-%COMP%]:last-child {\n    flex-grow: 2;\n  }\n}\n@media screen and (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n  }\n  .container-fluid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 2%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    width: 90%;\n    justify-content: space-between;\n    flex-grow: 1;\n  }\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin: 0%;\n    width: 100vw;\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%] {\n    width: -webkit-max-content;\n    width: max-content;\n    max-height: 90%;\n    height: 85%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .cards-repositorys[_ngcontent-%COMP%]   card-project[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsT0FBQTtBQUNOO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBS0E7RUFDRTtJQUNFLFdBQUE7RUFGRjtFQUtFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFISjtFQU1FO0lBQ0UsWUFBQTtFQUpKO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFQRjtFQVVFO0lBQ0UsVUFBQTtFQVJKO0VBV0U7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0VBVEo7QUFDRjtBQWFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQUEsbUJBQUE7RUFYRjtFQWNBO0lBQ0UsMEJBQUE7SUFBQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBWkY7RUFjRTtJQUNFLGlCQUFBO0VBWko7QUFDRiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyJTtcclxuICBtYXJnaW46IDIlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcblxyXG4gIC5jYXJkcy1yZXBvc2l0b3J5cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBnYXA6IDEuNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgICBjYXJkLXByb2plY3Qge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG5cclxuXHJcbiAgICAuY2FyZHMtcmVwb3NpdG9yeXMge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1yZXBvc2l0b3J5cyAqOmxhc3QtY2hpbGQgKjpsYXN0LWNoaWxkIHtcclxuICAgICAgZmxleC1ncm93OiAyO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRzLXJlcG9zaXRvcnlzIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcblxyXG5cclxuICAuY2FyZHMtcmVwb3NpdG9yeXMge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcblxyXG4gICAgY2FyZC1wcm9qZWN0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _background_stars_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-stars/background/background.component */ "izgg");




class AppComponent {
    constructor() {
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
        this.title = 'page';
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
    receiveMode($event) {
        this.toggleDarkTheme();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], outputs: { mode: "mode" }, decls: 2, vars: 0, consts: [[3, "mode"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "background", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function AppComponent_Template_background_mode_1_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _background_stars_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], styles: [".container-my[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1teSB7XHJcbiAgLnN0YXJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/Constantes */ "Rl2v");
/* harmony import */ var src_model_social_media_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/social-media.model */ "5mO9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _personal_header_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../personal-header/personal-header/personal-header.component */ "Vazs");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/home/home.component */ "cPhq");
/* harmony import */ var _about_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/about/about.component */ "JaJ+");
/* harmony import */ var _work_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../work/work/work.component */ "OUCW");
/* harmony import */ var _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contact/contact/contact.component */ "W6Uj");
/* harmony import */ var _personal_footer_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../personal-footer/personal-footer/personal-footer.component */ "c5N7");









const _c0 = function (a0) { return { "dark-theme": a0 }; };
class ShowComponent {
    constructor() {
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
    }
    receiveMode($event) {
        console.log($event);
        this.isDarkModeOn = $event;
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["show"]], outputs: { mode: "mode" }, decls: 14, vars: 6, consts: [[1, "headline"], [1, "content", 3, "ngClass"], ["id", "header", 1, "tagline"], [3, "mode"], ["id", "home"], [1, "punchline", 3, "isDarkMode", "mode"], ["id", "about"], [3, "isDarkMode"], ["id", "work"], ["id", "contact"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _personal_header_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _work_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"], _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _personal_footer_personal_footer_personal_footer_component__WEBPACK_IMPORTED_MODULE_7__["PersonalFooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  padding: inherit;\n  margin: inherit;\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  padding: 0%;\n  margin: 0%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoic2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBwYWRkaW5nOiBpbmhlcml0O1xyXG4gIG1hcmdpbjogaW5oZXJpdDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMCU7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'show',
                templateUrl: './show.component.html',
                styleUrls: ['./show.component.scss']
            }]
    }], function () { return []; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../switch-toggle/switch-toggle.component */ "1M2X");
/* harmony import */ var _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hamburguer-menu/hamburguer-menu.component */ "fwWE");






const _c0 = function (a0) { return { "show": a0 }; };
class PersonalHeaderComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
        this.menuIsOpen = false;
        this.pathIconMenuWhite = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_WHITE_MENU_HAMBURGUER;
        this.pathIconMenuBlack = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].PATH_ICON_BLACK_MENU_HAMBURGUER;
    }
    receiveMode($event) {
        this.toggleDarkTheme();
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        this.clickMenu();
    }
    clickMenu() {
        this.menuIsOpen = !this.menuIsOpen;
    }
}
PersonalHeaderComponent.ɵfac = function PersonalHeaderComponent_Factory(t) { return new (t || PersonalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"])); };
PersonalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalHeaderComponent, selectors: [["personal-header"]], outputs: { mode: "mode" }, decls: 31, vars: 10, consts: [[1, "desktop"], [1, "header"], ["href", "#", 1, "logo"], [1, "cont", 3, "ngClass"], [1, "navbar"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "nav-item"], [3, "mode"], [1, "mobile", "bg"], [1, "menu-hamb", 3, "click"], [3, "src", "hidden"]], template: function PersonalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "switch-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function PersonalHeaderComponent_Template_switch_toggle_mode_21_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalHeaderComponent_Template_button_click_26_listener() { return ctx.clickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "hamburguer-menu", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function PersonalHeaderComponent_Template_hamburguer_menu_mode_30_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.menuIsOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pathIconMenuWhite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.setDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pathIconMenuBlack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.setDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.menuIsOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_3__["SwitchToggleComponent"], _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_4__["HamburguerMenuComponent"]], styles: [".mobile[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 7vh;\n  padding: 0;\n  margin: 0;\n  color: var(--font-color);\n  background: var(--bg-contraste);\n  position: fixed;\n}\n.mobile[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--bg-contraste);\n  padding: 0 5%;\n  width: 100%;\n  height: 7vh;\n  justify-content: space-between;\n  align-items: center;\n}\n.mobile[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n.mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before, .desktop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n  content: \"<lucas-jesus/>\";\n  letter-spacing: 10%;\n}\n@media screen and (min-width: 769px) {\n  .mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    align-items: baseline;\n    justify-content: space-between;\n    padding: 1% 5%;\n    font-weight: 600;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .navbar[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n    padding-top: 5px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .desktop[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .mobile[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n    padding: 0 5%;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n  .mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before, .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n    content: \"<LJ>\";\n    letter-spacing: 10%;\n  }\n  .mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: none;\n    z-index: 1;\n    position: absolute;\n    left: 80%;\n  }\n  .mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw;\n  }\n  .mobile[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n    background: var(--bg-contraste);\n    position: absolute;\n    z-index: 0;\n    overflow-y: hidden;\n    max-height: 100vh;\n    max-width: 45vw;\n    width: 40vw;\n    margin-top: 100vh;\n    padding: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFHRTtFQUNFLHdCQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFO0lBQ0Usa0JBQUE7RUFKRjs7RUFPQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFKRjs7RUFPQTtJQUNFLFNBQUE7RUFKRjs7RUFPQTtJQUNFLGdCQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7SUFDRSxrQkFBQTtFQUxGOztFQVFBO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFMRjtFQU9FO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBTEo7RUFRRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQU5KO0VBUUk7SUFDRSxVQUFBO0VBTk47RUFXRTtJQUNFLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFFQSxXQUFBO0lBQ0EsaUJBQUE7SUFFQSxXQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJwZXJzb25hbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLCAuZGVza3RvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIGRpdiAubG9nbzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICc8bHVjYXMtamVzdXMvPic7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAubW9iaWxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZGVza3RvcCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLCAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGRpdiAubG9nbzo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJzxMSj4nO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogODAlO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb250IHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1dnc7XHJcblxyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgICAgbWFyZ2luLXRvcDogMTAwdmg7XHJcblxyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../button/button-template/button-template.component */ "M1xF");



class ContactComponent {
    constructor() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 15, vars: 2, consts: [[1, "container-fluid"], [1, "content"], [1, "top"], [1, "name"], ["type", "text", "placeholder", "Your Name"], [1, "email"], ["type", "email", "name", "", "id", "", "placeholder", "Your e-mail"], ["rows", "10", "placeholder", "Your Message"], [1, "button"], [3, "redirectLink", "insideText"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectLink", "")("insideText", "Send");
    } }, directives: [_button_button_template_button_template_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTemplateComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  max-width: 65vw;\n  height: 90vh;\n}\n.container-fluid[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  background-color: var(--bg-contraste);\n  padding: 5%;\n  align-items: center;\n  text-align: center;\n  border-radius: 10px;\n  width: 100%;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  justify-content: space-between;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 5vh;\n  max-width: 20vw;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: start;\n  width: 100%;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  width: 85%;\n  height: 60%;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: var(--bg-color);\n  border-radius: 5px;\n  margin-bottom: 2%;\n}\n.container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  max-width: 20vw;\n  justify-content: flex-start;\n  padding-left: 8%;\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n    padding: 0%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    background-color: var(--bg-contraste);\n    width: 100%;\n    border-radius: 0px;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    max-width: 30vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUVNO0VBQ0UsVUFBQTtBQUFSO0FBSUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFGTjtBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUxOO0FBUUk7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVNJO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFQTjtBQWFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBVkY7RUFZRTtJQUNFLGNBQUE7RUFWSjtFQVlJO0lBQ0UsVUFBQTtFQVZOO0VBZUU7SUFDRSxxQ0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQWJKO0VBZUk7SUFDRSxlQUFBO0VBYk47QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgbWF4LXdpZHRoOiA2NXZ3O1xyXG4gIGhlaWdodDogOTB2aDtcclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29udHJhc3RlKTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudG9wIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICBtYXgtd2lkdGg6IDIwdnc7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LCB0ZXh0YXJlYSAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1heC13aWR0aDogMjB2dztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogMCU7XHJcblxyXG4gICAgLnRvcCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbnRyYXN0ZSk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-page/view-page.module */ "wiPO");
/* harmony import */ var _building_building_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building/building.module */ "HE3o");
/* harmony import */ var _background_stars_background_stars_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background-stars/background-stars.module */ "kZyu");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
            _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
            _background_stars_background_stars_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundStarsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageModule"],
        _building_building_module__WEBPACK_IMPORTED_MODULE_5__["BuildingModule"],
        _background_stars_background_stars_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundStarsModule"]] }); })();
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
                    _background_stars_background_stars_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundStarsModule"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-header/personal-header.component */ "Vazs");
/* harmony import */ var _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch-toggle/switch-toggle.component */ "1M2X");
/* harmony import */ var _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburguer-menu/hamburguer-menu.component */ "fwWE");






class PersonalHeaderModule {
}
PersonalHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalHeaderModule });
PersonalHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalHeaderModule_Factory(t) { return new (t || PersonalHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalHeaderModule, { declarations: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"], _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_3__["SwitchToggleComponent"], _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_4__["HamburguerMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"], _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_3__["SwitchToggleComponent"], _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_4__["HamburguerMenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_personal_header_personal_header_component__WEBPACK_IMPORTED_MODULE_2__["PersonalHeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fwWE":
/*!******************************************************************************!*\
  !*** ./src/app/personal-header/hamburguer-menu/hamburguer-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: HamburguerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburguerMenuComponent", function() { return HamburguerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../switch-toggle/switch-toggle.component */ "1M2X");




class HamburguerMenuComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
        this.menuIsOpen = false;
    }
    ngOnInit() {
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        // this.clickMenu()
    }
    receiveMode($event) {
        this.toggleDarkTheme();
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
}
HamburguerMenuComponent.ɵfac = function HamburguerMenuComponent_Factory(t) { return new (t || HamburguerMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
HamburguerMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HamburguerMenuComponent, selectors: [["hamburguer-menu"]], outputs: { mode: "mode" }, decls: 18, vars: 0, consts: [[3, "click"], [1, "switch"], [3, "mode"]], template: function HamburguerMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_a_click_4_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_a_click_7_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_a_click_10_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_a_click_13_listener() { return ctx.onClickScroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "switch-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mode", function HamburguerMenuComponent_Template_switch_toggle_mode_17_listener($event) { return ctx.receiveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_switch_toggle_switch_toggle_component__WEBPACK_IMPORTED_MODULE_2__["SwitchToggleComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n\nnav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nnav[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nnav[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoYW1idXJndWVyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDTiIsImZpbGUiOiJoYW1idXJndWVyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBhcnRpY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HamburguerMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hamburguer-menu',
                templateUrl: './hamburguer-menu.component.html',
                styleUrls: ['./hamburguer-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work/work.component */ "OUCW");
/* harmony import */ var _card_project_card_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-project/card-project.component */ "12Nz");
/* harmony import */ var src_service_api_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/service/api-github.service */ "Qx/p");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


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

/***/ "izgg":
/*!*********************************************************************!*\
  !*** ./src/app/background-stars/background/background.component.ts ***!
  \*********************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BackgroundComponent {
    constructor() {
        this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDark = false;
    }
    ngOnInit() {
    }
    toggleDarkTheme() {
        this.setDark = !this.setDark;
        this.mode.emit(this.setDark);
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["background"]], outputs: { mode: "mode" }, decls: 3, vars: 0, consts: [["id", "stars", 1, "stars"], ["id", "stars2", 1, "stars"], ["id", "stars3", 1, "stars"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    } }, styles: ["#stars[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  background: transparent;\n  animation: animStar 50s linear infinite;\n  box-shadow: 779px 1331px var(--font-color), 324px 42px var(--font-color), 303px 586px var(--font-color), 1312px 276px var(--font-color), 451px 625px var(--font-color), 521px 1931px var(--font-color), 1087px 1871px var(--font-color), 36px 1546px var(--font-color), 132px 934px var(--font-color), 1698px 901px var(--font-color), 1418px 664px var(--font-color), 1448px 1157px var(--font-color), 1084px 232px var(--font-color), 347px 1776px var(--font-color), 1722px 243px var(--font-color), 1629px 835px var(--font-color), 479px 969px var(--font-color), 1231px 960px var(--font-color), 586px 384px var(--font-color), 164px 527px var(--font-color), 8px 646px var(--font-color), 1150px 1126px var(--font-color), 665px 1357px var(--font-color), 1556px 1982px var(--font-color), 1260px 1961px var(--font-color), 1675px 1741px var(--font-color), 1843px 1514px var(--font-color), 718px 1628px var(--font-color), 242px 1343px var(--font-color), 1497px 1880px var(--font-color), 1364px 230px var(--font-color), 1739px 1302px var(--font-color), 636px 959px var(--font-color), 304px 686px var(--font-color), 614px 751px var(--font-color), 1935px 816px var(--font-color), 1428px 60px var(--font-color), 355px 335px var(--font-color), 1594px 158px var(--font-color), 90px 60px var(--font-color), 1553px 162px var(--font-color), 1239px 1825px var(--font-color), 1945px 587px var(--font-color), 749px 1785px var(--font-color), 1987px 1172px var(--font-color), 1301px 1237px var(--font-color), 1039px 342px var(--font-color), 1585px 1481px var(--font-color), 995px 1048px var(--font-color), 524px 932px var(--font-color), 214px 413px var(--font-color), 1701px 1300px var(--font-color), 1037px 1613px var(--font-color), 1871px 996px var(--font-color), 1360px 1635px var(--font-color), 1110px 1313px var(--font-color), 412px 1783px var(--font-color), 1949px 177px var(--font-color), 903px 1854px var(--font-color), 700px 1936px var(--font-color), 378px 125px var(--font-color), 308px 834px var(--font-color), 1118px 962px var(--font-color), 1350px 1929px var(--font-color), 781px 1811px var(--font-color), 561px 137px var(--font-color), 757px 1148px var(--font-color), 1670px 1979px var(--font-color), 343px 739px var(--font-color), 945px 795px var(--font-color), 576px 1903px var(--font-color), 1078px 1436px var(--font-color), 1583px 450px var(--font-color), 1366px 474px var(--font-color), 297px 1873px var(--font-color), 192px 162px var(--font-color), 1624px 1633px var(--font-color), 59px 453px var(--font-color), 82px 1872px var(--font-color), 1933px 498px var(--font-color), 1966px 1974px var(--font-color), 1975px 1688px var(--font-color), 779px 314px var(--font-color), 1858px 1543px var(--font-color), 73px 1507px var(--font-color), 1693px 975px var(--font-color), 1683px 108px var(--font-color), 1768px 1654px var(--font-color), 654px 14px var(--font-color), 494px 171px var(--font-color), 1689px 1895px var(--font-color), 1660px 263px var(--font-color), 1031px 903px var(--font-color), 1203px 1393px var(--font-color), 1333px 1421px var(--font-color), 1113px 41px var(--font-color), 1206px 1645px var(--font-color), 1325px 1635px var(--font-color), 142px 388px var(--font-color), 572px 215px var(--font-color), 1535px 296px var(--font-color), 1419px 407px var(--font-color), 1379px 1003px var(--font-color), 329px 469px var(--font-color), 1791px 1652px var(--font-color), 935px 1802px var(--font-color), 1330px 1820px var(--font-color), 421px 1933px var(--font-color), 828px 365px var(--font-color), 275px 316px var(--font-color), 707px 960px var(--font-color), 1605px 1554px var(--font-color), 625px 58px var(--font-color), 717px 1697px var(--font-color), 1669px 246px var(--font-color), 1925px 322px var(--font-color), 1154px 1803px var(--font-color), 1929px 295px var(--font-color), 1248px 240px var(--font-color), 1045px 1755px var(--font-color), 166px 942px var(--font-color), 1888px 1773px var(--font-color), 678px 1963px var(--font-color), 1370px 569px var(--font-color), 1974px 1400px var(--font-color), 1786px 460px var(--font-color), 51px 307px var(--font-color), 784px 1400px var(--font-color), 730px 1258px var(--font-color), 1712px 393px var(--font-color), 416px 170px var(--font-color), 1797px 1932px var(--font-color), 572px 219px var(--font-color), 1557px 1856px var(--font-color), 218px 8px var(--font-color), 348px 1334px var(--font-color), 469px 413px var(--font-color), 385px 1738px var(--font-color), 1357px 1818px var(--font-color), 240px 942px var(--font-color), 248px 1847px var(--font-color), 1535px 806px var(--font-color), 236px 1514px var(--font-color), 1429px 1556px var(--font-color), 73px 1633px var(--font-color), 1398px 1121px var(--font-color), 671px 1301px var(--font-color), 1404px 1663px var(--font-color), 740px 1018px var(--font-color), 1600px 377px var(--font-color), 785px 514px var(--font-color), 112px 1084px var(--font-color), 1915px 1887px var(--font-color), 1463px 1848px var(--font-color), 687px 1115px var(--font-color), 1268px 1768px var(--font-color), 1729px 1425px var(--font-color), 1284px 1022px var(--font-color), 801px 974px var(--font-color), 1975px 1317px var(--font-color), 1354px 834px var(--font-color), 1446px 1484px var(--font-color), 1283px 1786px var(--font-color), 11px 523px var(--font-color), 1842px 236px var(--font-color), 1355px 654px var(--font-color), 429px 7px var(--font-color), 1033px 1128px var(--font-color), 157px 297px var(--font-color), 545px 635px var(--font-color), 52px 1080px var(--font-color), 827px 1520px var(--font-color), 1121px 490px var(--font-color), 9px 309px var(--font-color), 1744px 1586px var(--font-color), 1014px 417px var(--font-color), 1534px 524px var(--font-color), 958px 552px var(--font-color), 1403px 1496px var(--font-color), 387px 703px var(--font-color), 1522px 548px var(--font-color), 1355px 282px var(--font-color), 1532px 601px var(--font-color), 1838px 790px var(--font-color), 290px 259px var(--font-color), 295px 598px var(--font-color), 1601px 539px var(--font-color), 1561px 1272px var(--font-color), 34px 1922px var(--font-color), 1024px 543px var(--font-color), 467px 369px var(--font-color), 722px 333px var(--font-color), 1976px 1255px var(--font-color), 766px 983px var(--font-color), 1582px 1285px var(--font-color), 12px 512px var(--font-color), 617px 1410px var(--font-color), 682px 577px var(--font-color), 1334px 1438px var(--font-color), 439px 327px var(--font-color), 1617px 1661px var(--font-color), 673px 129px var(--font-color), 794px 941px var(--font-color), 1386px 1902px var(--font-color), 37px 1353px var(--font-color), 1467px 1353px var(--font-color), 416px 18px var(--font-color), 187px 344px var(--font-color), 200px 1898px var(--font-color), 1491px 1619px var(--font-color), 811px 347px var(--font-color), 924px 1827px var(--font-color), 945px 217px var(--font-color), 1735px 1228px var(--font-color), 379px 1890px var(--font-color), 79px 761px var(--font-color), 825px 1837px var(--font-color), 1980px 1558px var(--font-color), 1308px 1573px var(--font-color), 1488px 1726px var(--font-color), 382px 1208px var(--font-color), 522px 595px var(--font-color), 1277px 1898px var(--font-color), 354px 552px var(--font-color), 161px 1784px var(--font-color), 614px 251px var(--font-color), 526px 1576px var(--font-color), 17px 212px var(--font-color), 179px 996px var(--font-color), 467px 1208px var(--font-color), 1944px 1838px var(--font-color), 1140px 1093px var(--font-color), 858px 1007px var(--font-color), 200px 1064px var(--font-color), 423px 1964px var(--font-color), 1945px 439px var(--font-color), 1377px 689px var(--font-color), 1120px 1437px var(--font-color), 1876px 668px var(--font-color), 907px 1324px var(--font-color), 343px 1976px var(--font-color), 1816px 1501px var(--font-color), 1849px 177px var(--font-color), 647px 91px var(--font-color), 1984px 1012px var(--font-color), 1336px 1300px var(--font-color), 128px 648px var(--font-color), 305px 1060px var(--font-color), 1324px 826px var(--font-color), 1263px 1314px var(--font-color), 1801px 629px var(--font-color), 1614px 1555px var(--font-color), 1634px 90px var(--font-color), 1603px 452px var(--font-color), 891px 1984px var(--font-color), 1556px 1906px var(--font-color), 121px 68px var(--font-color), 1676px 1714px var(--font-color), 516px 936px var(--font-color), 1947px 1492px var(--font-color), 1455px 1519px var(--font-color), 45px 602px var(--font-color), 205px 1039px var(--font-color), 793px 172px var(--font-color), 1562px 1739px var(--font-color), 1056px 110px var(--font-color), 1512px 379px var(--font-color), 1795px 1621px var(--font-color), 1848px 607px var(--font-color), 262px 1719px var(--font-color), 477px 991px var(--font-color), 483px 883px var(--font-color), 1239px 1197px var(--font-color), 1496px 647px var(--font-color), 1649px 25px var(--font-color), 1491px 1946px var(--font-color), 119px 996px var(--font-color), 179px 1472px var(--font-color), 1341px 808px var(--font-color), 1565px 1700px var(--font-color), 407px 1544px var(--font-color), 1754px 357px var(--font-color), 1288px 981px var(--font-color), 902px 1997px var(--font-color), 1755px 1668px var(--font-color), 186px 877px var(--font-color), 1202px 1882px var(--font-color), 461px 1213px var(--font-color), 1400px 748px var(--font-color), 1969px 1899px var(--font-color), 809px 522px var(--font-color), 514px 1219px var(--font-color), 374px 275px var(--font-color), 938px 1973px var(--font-color), 357px 552px var(--font-color), 144px 1722px var(--font-color), 1572px 912px var(--font-color), 402px 1858px var(--font-color), 1544px 1195px var(--font-color), 667px 1257px var(--font-color), 727px 1496px var(--font-color), 993px 232px var(--font-color), 1772px 313px var(--font-color), 1040px 1590px var(--font-color), 1204px 1973px var(--font-color), 1268px 79px var(--font-color), 1555px 1048px var(--font-color), 986px 1707px var(--font-color), 978px 1710px var(--font-color), 713px 360px var(--font-color), 407px 863px var(--font-color), 461px 736px var(--font-color), 284px 1608px var(--font-color), 103px 430px var(--font-color), 1283px 1319px var(--font-color), 977px 1186px var(--font-color), 1966px 1516px var(--font-color), 1287px 1129px var(--font-color), 70px 1098px var(--font-color), 1189px 889px var(--font-color), 1126px 1734px var(--font-color), 309px 1292px var(--font-color), 879px 764px var(--font-color), 65px 473px var(--font-color), 1003px 1959px var(--font-color), 658px 791px var(--font-color), 402px 1576px var(--font-color), 35px 622px var(--font-color), 529px 1589px var(--font-color), 164px 666px var(--font-color), 1876px 1290px var(--font-color), 1541px 526px var(--font-color), 270px 1297px var(--font-color), 440px 865px var(--font-color), 1500px 802px var(--font-color), 182px 1754px var(--font-color), 1264px 892px var(--font-color), 272px 1249px var(--font-color), 1289px 1535px var(--font-color), 190px 1646px var(--font-color), 955px 242px var(--font-color), 1456px 1597px var(--font-color), 1727px 1983px var(--font-color), 635px 801px var(--font-color), 226px 455px var(--font-color), 1396px 1710px var(--font-color), 849px 1863px var(--font-color), 237px 1264px var(--font-color), 839px 140px var(--font-color), 1122px 735px var(--font-color), 1280px 15px var(--font-color), 1318px 242px var(--font-color), 1819px 1148px var(--font-color), 333px 1392px var(--font-color), 1949px 553px var(--font-color), 1878px 1332px var(--font-color), 467px 548px var(--font-color), 1812px 1082px var(--font-color), 1067px 193px var(--font-color), 243px 156px var(--font-color), 483px 1616px var(--font-color), 1714px 933px var(--font-color), 759px 1800px var(--font-color), 1822px 995px var(--font-color), 1877px 572px var(--font-color), 581px 1084px var(--font-color), 107px 732px var(--font-color), 642px 1837px var(--font-color), 166px 1493px var(--font-color), 1555px 198px var(--font-color), 819px 307px var(--font-color), 947px 345px var(--font-color), 827px 224px var(--font-color), 927px 1394px var(--font-color), 540px 467px var(--font-color), 1093px 405px var(--font-color), 1140px 927px var(--font-color), 130px 529px var(--font-color), 33px 1980px var(--font-color), 1147px 1663px var(--font-color), 1616px 1436px var(--font-color), 528px 710px var(--font-color), 798px 1100px var(--font-color), 505px 1480px var(--font-color), 899px 641px var(--font-color), 1909px 1949px var(--font-color), 1311px 964px var(--font-color), 979px 1301px var(--font-color), 1393px 969px var(--font-color), 1793px 1886px var(--font-color), 292px 357px var(--font-color), 1196px 1718px var(--font-color), 1290px 1994px var(--font-color), 537px 1973px var(--font-color), 1181px 1674px var(--font-color), 1740px 1566px var(--font-color), 1307px 265px var(--font-color), 922px 522px var(--font-color), 1892px 472px var(--font-color), 384px 1746px var(--font-color), 392px 1098px var(--font-color), 647px 548px var(--font-color), 390px 1498px var(--font-color), 1246px 138px var(--font-color), 730px 876px var(--font-color), 192px 1472px var(--font-color), 1790px 1789px var(--font-color), 928px 311px var(--font-color), 1253px 1647px var(--font-color), 747px 1921px var(--font-color), 1561px 1025px var(--font-color), 1533px 1292px var(--font-color), 1985px 195px var(--font-color), 728px 729px var(--font-color), 1712px 1936px var(--font-color), 512px 1717px var(--font-color), 1528px 483px var(--font-color), 313px 1642px var(--font-color), 281px 1849px var(--font-color), 1212px 799px var(--font-color), 435px 1191px var(--font-color), 1422px 611px var(--font-color), 1718px 1964px var(--font-color), 411px 944px var(--font-color), 210px 636px var(--font-color), 1502px 1295px var(--font-color), 1434px 349px var(--font-color), 769px 60px var(--font-color), 747px 1053px var(--font-color), 789px 504px var(--font-color), 1436px 1264px var(--font-color), 1893px 1225px var(--font-color), 1394px 1788px var(--font-color), 1108px 1317px var(--font-color), 1673px 1395px var(--font-color), 854px 1010px var(--font-color), 1705px 80px var(--font-color), 1858px 148px var(--font-color), 1729px 344px var(--font-color), 1388px 664px var(--font-color), 895px 406px var(--font-color), 1479px 157px var(--font-color), 1441px 1157px var(--font-color), 552px 1900px var(--font-color), 516px 364px var(--font-color), 1647px 189px var(--font-color), 1427px 1071px var(--font-color), 785px 729px var(--font-color), 1080px 1710px var(--font-color), 504px 204px var(--font-color), 1177px 1622px var(--font-color), 657px 34px var(--font-color), 1296px 1099px var(--font-color), 248px 180px var(--font-color), 1212px 1568px var(--font-color), 667px 1562px var(--font-color), 695px 841px var(--font-color), 1608px 1247px var(--font-color), 751px 882px var(--font-color), 87px 167px var(--font-color), 607px 1368px var(--font-color), 1363px 1203px var(--font-color), 1836px 317px var(--font-color), 1668px 1703px var(--font-color), 830px 1154px var(--font-color), 1721px 1398px var(--font-color), 1601px 1280px var(--font-color), 976px 874px var(--font-color), 1743px 254px var(--font-color), 1020px 1815px var(--font-color), 1670px 1766px var(--font-color), 1890px 735px var(--font-color), 1379px 136px var(--font-color), 1864px 695px var(--font-color), 206px 965px var(--font-color), 1404px 1932px var(--font-color), 1923px 1360px var(--font-color), 247px 682px var(--font-color), 519px 1708px var(--font-color), 645px 750px var(--font-color), 1164px 1204px var(--font-color), 834px 323px var(--font-color), 172px 1350px var(--font-color), 213px 972px var(--font-color), 1837px 190px var(--font-color), 285px 1806px var(--font-color), 1047px 1299px var(--font-color), 1548px 825px var(--font-color), 1730px 324px var(--font-color), 1346px 1909px var(--font-color), 772px 270px var(--font-color), 345px 1190px var(--font-color), 478px 1433px var(--font-color), 1479px 25px var(--font-color), 1994px 1830px var(--font-color), 1744px 732px var(--font-color), 20px 1635px var(--font-color), 690px 1795px var(--font-color), 1594px 569px var(--font-color), 579px 245px var(--font-color), 1398px 733px var(--font-color), 408px 1352px var(--font-color), 1774px 120px var(--font-color), 1152px 1370px var(--font-color), 1698px 1810px var(--font-color), 710px 1450px var(--font-color), 665px 286px var(--font-color), 493px 1720px var(--font-color), 786px 5px var(--font-color), 637px 1140px var(--font-color), 764px 324px var(--font-color), 927px 310px var(--font-color), 938px 1424px var(--font-color), 1884px 744px var(--font-color), 913px 462px var(--font-color), 1831px 1936px var(--font-color), 1527px 249px var(--font-color), 36px 1381px var(--font-color), 1597px 581px var(--font-color), 1530px 355px var(--font-color), 949px 459px var(--font-color), 799px 828px var(--font-color), 242px 1471px var(--font-color), 654px 797px var(--font-color), 796px 594px var(--font-color), 1365px 678px var(--font-color), 752px 23px var(--font-color), 1630px 541px var(--font-color), 982px 72px var(--font-color), 1733px 1831px var(--font-color), 21px 412px var(--font-color), 775px 998px var(--font-color), 335px 1945px var(--font-color), 264px 583px var(--font-color), 158px 1311px var(--font-color), 528px 164px var(--font-color), 1978px 574px var(--font-color), 717px 1203px var(--font-color), 734px 1591px var(--font-color), 1555px 820px var(--font-color), 16px 1943px var(--font-color), 1625px 1177px var(--font-color), 1236px 690px var(--font-color), 1585px 1590px var(--font-color), 1737px 1728px var(--font-color), 721px 698px var(--font-color), 1804px 1186px var(--font-color), 166px 980px var(--font-color), 1850px 230px var(--font-color), 330px 1712px var(--font-color), 95px 797px var(--font-color), 1948px 1078px var(--font-color), 469px 939px var(--font-color), 1269px 1899px var(--font-color), 955px 1220px var(--font-color), 1137px 1075px var(--font-color), 312px 1293px var(--font-color), 986px 1762px var(--font-color), 1103px 1238px var(--font-color), 428px 1993px var(--font-color), 355px 570px var(--font-color), 977px 1836px var(--font-color), 1395px 1092px var(--font-color), 276px 913px var(--font-color), 1743px 656px var(--font-color), 773px 502px var(--font-color), 1686px 1322px var(--font-color), 1516px 1945px var(--font-color), 1334px 501px var(--font-color), 266px 156px var(--font-color), 455px 655px var(--font-color), 798px 72px var(--font-color), 1059px 1259px var(--font-color), 1402px 1687px var(--font-color), 236px 1329px var(--font-color), 1455px 786px var(--font-color), 146px 1228px var(--font-color), 1851px 823px var(--font-color), 1062px 100px var(--font-color), 1220px 953px var(--font-color), 20px 1826px var(--font-color), 36px 1063px var(--font-color), 1525px 338px var(--font-color), 790px 1521px var(--font-color), 741px 1099px var(--font-color), 288px 1489px var(--font-color), 700px 1060px var(--font-color), 390px 1071px var(--font-color), 411px 1036px var(--font-color), 1853px 1072px var(--font-color), 1446px 1085px var(--font-color), 1164px 874px var(--font-color), 924px 925px var(--font-color), 291px 271px var(--font-color), 1257px 1964px var(--font-color), 1580px 1352px var(--font-color), 1507px 1216px var(--font-color), 211px 956px var(--font-color), 985px 1195px var(--font-color), 975px 1640px var(--font-color), 518px 101px var(--font-color), 663px 1395px var(--font-color), 914px 532px var(--font-color), 145px 1320px var(--font-color), 69px 1397px var(--font-color), 982px 523px var(--font-color), 257px 725px var(--font-color), 1599px 831px var(--font-color), 1636px 1513px var(--font-color), 1250px 1158px var(--font-color), 1132px 604px var(--font-color), 183px 102px var(--font-color), 1057px 318px var(--font-color), 1247px 1835px var(--font-color), 1983px 1110px var(--font-color), 1077px 1455px var(--font-color), 921px 1770px var(--font-color), 806px 1350px var(--font-color), 1938px 1992px var(--font-color), 855px 1260px var(--font-color), 902px 1345px var(--font-color), 658px 1908px var(--font-color), 1845px 679px var(--font-color), 712px 1482px var(--font-color), 595px 950px var(--font-color), 1784px 1992px var(--font-color), 1847px 1785px var(--font-color), 691px 1004px var(--font-color), 175px 1179px var(--font-color), 1666px 1911px var(--font-color), 41px 61px var(--font-color), 971px 1080px var(--font-color), 1830px 1450px var(--font-color), 1351px 1518px var(--font-color), 1257px 99px var(--font-color), 1395px 1498px var(--font-color), 1117px 252px var(--font-color), 1779px 597px var(--font-color), 1346px 729px var(--font-color), 1108px 1144px var(--font-color), 402px 691px var(--font-color), 72px 496px var(--font-color), 1673px 1604px var(--font-color), 1497px 974px var(--font-color), 1865px 1664px var(--font-color), 88px 806px var(--font-color), 918px 77px var(--font-color), 244px 1118px var(--font-color), 256px 1820px var(--font-color), 1851px 1840px var(--font-color), 605px 1851px var(--font-color), 634px 383px var(--font-color), 865px 37px var(--font-color), 943px 1024px var(--font-color), 1951px 177px var(--font-color), 1097px 523px var(--font-color), 985px 1700px var(--font-color), 1243px 122px var(--font-color), 768px 1070px var(--font-color), 468px 194px var(--font-color), 320px 1867px var(--font-color), 1850px 185px var(--font-color), 380px 1616px var(--font-color), 468px 1294px var(--font-color), 1122px 1743px var(--font-color), 884px 299px var(--font-color), 1300px 1917px var(--font-color), 1860px 396px var(--font-color), 1270px 990px var(--font-color), 529px 733px var(--font-color), 1975px 1347px var(--font-color), 1885px 685px var(--font-color), 226px 506px var(--font-color), 651px 878px var(--font-color), 1323px 680px var(--font-color), 1284px 680px var(--font-color), 238px 1967px var(--font-color), 911px 174px var(--font-color), 1111px 521px var(--font-color), 1150px 85px var(--font-color), 794px 502px var(--font-color), 484px 1856px var(--font-color), 1809px 368px var(--font-color), 112px 953px var(--font-color), 590px 1009px var(--font-color), 1655px 311px var(--font-color), 100px 1026px var(--font-color), 1803px 352px var(--font-color), 865px 306px var(--font-color), 1077px 1019px var(--font-color), 1335px 872px var(--font-color), 1647px 1298px var(--font-color), 1233px 1387px var(--font-color), 698px 1036px var(--font-color), 659px 1860px var(--font-color), 388px 1412px var(--font-color), 1212px 458px var(--font-color), 755px 1468px var(--font-color), 696px 1654px var(--font-color), 1144px 60px var(--font-color);\n}\n\n#stars[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 2000px;\n  width: 1px;\n  height: 1px;\n  background: transparent;\n  box-shadow: 779px 1331px var(--font-color), 324px 42px var(--font-color), 303px 586px var(--font-color), 1312px 276px var(--font-color), 451px 625px var(--font-color), 521px 1931px var(--font-color), 1087px 1871px var(--font-color), 36px 1546px var(--font-color), 132px 934px var(--font-color), 1698px 901px var(--font-color), 1418px 664px var(--font-color), 1448px 1157px var(--font-color), 1084px 232px var(--font-color), 347px 1776px var(--font-color), 1722px 243px var(--font-color), 1629px 835px var(--font-color), 479px 969px var(--font-color), 1231px 960px var(--font-color), 586px 384px var(--font-color), 164px 527px var(--font-color), 8px 646px var(--font-color), 1150px 1126px var(--font-color), 665px 1357px var(--font-color), 1556px 1982px var(--font-color), 1260px 1961px var(--font-color), 1675px 1741px var(--font-color), 1843px 1514px var(--font-color), 718px 1628px var(--font-color), 242px 1343px var(--font-color), 1497px 1880px var(--font-color), 1364px 230px var(--font-color), 1739px 1302px var(--font-color), 636px 959px var(--font-color), 304px 686px var(--font-color), 614px 751px var(--font-color), 1935px 816px var(--font-color), 1428px 60px var(--font-color), 355px 335px var(--font-color), 1594px 158px var(--font-color), 90px 60px var(--font-color), 1553px 162px var(--font-color), 1239px 1825px var(--font-color), 1945px 587px var(--font-color), 749px 1785px var(--font-color), 1987px 1172px var(--font-color), 1301px 1237px var(--font-color), 1039px 342px var(--font-color), 1585px 1481px var(--font-color), 995px 1048px var(--font-color), 524px 932px var(--font-color), 214px 413px var(--font-color), 1701px 1300px var(--font-color), 1037px 1613px var(--font-color), 1871px 996px var(--font-color), 1360px 1635px var(--font-color), 1110px 1313px var(--font-color), 412px 1783px var(--font-color), 1949px 177px var(--font-color), 903px 1854px var(--font-color), 700px 1936px var(--font-color), 378px 125px var(--font-color), 308px 834px var(--font-color), 1118px 962px var(--font-color), 1350px 1929px var(--font-color), 781px 1811px var(--font-color), 561px 137px var(--font-color), 757px 1148px var(--font-color), 1670px 1979px var(--font-color), 343px 739px var(--font-color), 945px 795px var(--font-color), 576px 1903px var(--font-color), 1078px 1436px var(--font-color), 1583px 450px var(--font-color), 1366px 474px var(--font-color), 297px 1873px var(--font-color), 192px 162px var(--font-color), 1624px 1633px var(--font-color), 59px 453px var(--font-color), 82px 1872px var(--font-color), 1933px 498px var(--font-color), 1966px 1974px var(--font-color), 1975px 1688px var(--font-color), 779px 314px var(--font-color), 1858px 1543px var(--font-color), 73px 1507px var(--font-color), 1693px 975px var(--font-color), 1683px 108px var(--font-color), 1768px 1654px var(--font-color), 654px 14px var(--font-color), 494px 171px var(--font-color), 1689px 1895px var(--font-color), 1660px 263px var(--font-color), 1031px 903px var(--font-color), 1203px 1393px var(--font-color), 1333px 1421px var(--font-color), 1113px 41px var(--font-color), 1206px 1645px var(--font-color), 1325px 1635px var(--font-color), 142px 388px var(--font-color), 572px 215px var(--font-color), 1535px 296px var(--font-color), 1419px 407px var(--font-color), 1379px 1003px var(--font-color), 329px 469px var(--font-color), 1791px 1652px var(--font-color), 935px 1802px var(--font-color), 1330px 1820px var(--font-color), 421px 1933px var(--font-color), 828px 365px var(--font-color), 275px 316px var(--font-color), 707px 960px var(--font-color), 1605px 1554px var(--font-color), 625px 58px var(--font-color), 717px 1697px var(--font-color), 1669px 246px var(--font-color), 1925px 322px var(--font-color), 1154px 1803px var(--font-color), 1929px 295px var(--font-color), 1248px 240px var(--font-color), 1045px 1755px var(--font-color), 166px 942px var(--font-color), 1888px 1773px var(--font-color), 678px 1963px var(--font-color), 1370px 569px var(--font-color), 1974px 1400px var(--font-color), 1786px 460px var(--font-color), 51px 307px var(--font-color), 784px 1400px var(--font-color), 730px 1258px var(--font-color), 1712px 393px var(--font-color), 416px 170px var(--font-color), 1797px 1932px var(--font-color), 572px 219px var(--font-color), 1557px 1856px var(--font-color), 218px 8px var(--font-color), 348px 1334px var(--font-color), 469px 413px var(--font-color), 385px 1738px var(--font-color), 1357px 1818px var(--font-color), 240px 942px var(--font-color), 248px 1847px var(--font-color), 1535px 806px var(--font-color), 236px 1514px var(--font-color), 1429px 1556px var(--font-color), 73px 1633px var(--font-color), 1398px 1121px var(--font-color), 671px 1301px var(--font-color), 1404px 1663px var(--font-color), 740px 1018px var(--font-color), 1600px 377px var(--font-color), 785px 514px var(--font-color), 112px 1084px var(--font-color), 1915px 1887px var(--font-color), 1463px 1848px var(--font-color), 687px 1115px var(--font-color), 1268px 1768px var(--font-color), 1729px 1425px var(--font-color), 1284px 1022px var(--font-color), 801px 974px var(--font-color), 1975px 1317px var(--font-color), 1354px 834px var(--font-color), 1446px 1484px var(--font-color), 1283px 1786px var(--font-color), 11px 523px var(--font-color), 1842px 236px var(--font-color), 1355px 654px var(--font-color), 429px 7px var(--font-color), 1033px 1128px var(--font-color), 157px 297px var(--font-color), 545px 635px var(--font-color), 52px 1080px var(--font-color), 827px 1520px var(--font-color), 1121px 490px var(--font-color), 9px 309px var(--font-color), 1744px 1586px var(--font-color), 1014px 417px var(--font-color), 1534px 524px var(--font-color), 958px 552px var(--font-color), 1403px 1496px var(--font-color), 387px 703px var(--font-color), 1522px 548px var(--font-color), 1355px 282px var(--font-color), 1532px 601px var(--font-color), 1838px 790px var(--font-color), 290px 259px var(--font-color), 295px 598px var(--font-color), 1601px 539px var(--font-color), 1561px 1272px var(--font-color), 34px 1922px var(--font-color), 1024px 543px var(--font-color), 467px 369px var(--font-color), 722px 333px var(--font-color), 1976px 1255px var(--font-color), 766px 983px var(--font-color), 1582px 1285px var(--font-color), 12px 512px var(--font-color), 617px 1410px var(--font-color), 682px 577px var(--font-color), 1334px 1438px var(--font-color), 439px 327px var(--font-color), 1617px 1661px var(--font-color), 673px 129px var(--font-color), 794px 941px var(--font-color), 1386px 1902px var(--font-color), 37px 1353px var(--font-color), 1467px 1353px var(--font-color), 416px 18px var(--font-color), 187px 344px var(--font-color), 200px 1898px var(--font-color), 1491px 1619px var(--font-color), 811px 347px var(--font-color), 924px 1827px var(--font-color), 945px 217px var(--font-color), 1735px 1228px var(--font-color), 379px 1890px var(--font-color), 79px 761px var(--font-color), 825px 1837px var(--font-color), 1980px 1558px var(--font-color), 1308px 1573px var(--font-color), 1488px 1726px var(--font-color), 382px 1208px var(--font-color), 522px 595px var(--font-color), 1277px 1898px var(--font-color), 354px 552px var(--font-color), 161px 1784px var(--font-color), 614px 251px var(--font-color), 526px 1576px var(--font-color), 17px 212px var(--font-color), 179px 996px var(--font-color), 467px 1208px var(--font-color), 1944px 1838px var(--font-color), 1140px 1093px var(--font-color), 858px 1007px var(--font-color), 200px 1064px var(--font-color), 423px 1964px var(--font-color), 1945px 439px var(--font-color), 1377px 689px var(--font-color), 1120px 1437px var(--font-color), 1876px 668px var(--font-color), 907px 1324px var(--font-color), 343px 1976px var(--font-color), 1816px 1501px var(--font-color), 1849px 177px var(--font-color), 647px 91px var(--font-color), 1984px 1012px var(--font-color), 1336px 1300px var(--font-color), 128px 648px var(--font-color), 305px 1060px var(--font-color), 1324px 826px var(--font-color), 1263px 1314px var(--font-color), 1801px 629px var(--font-color), 1614px 1555px var(--font-color), 1634px 90px var(--font-color), 1603px 452px var(--font-color), 891px 1984px var(--font-color), 1556px 1906px var(--font-color), 121px 68px var(--font-color), 1676px 1714px var(--font-color), 516px 936px var(--font-color), 1947px 1492px var(--font-color), 1455px 1519px var(--font-color), 45px 602px var(--font-color), 205px 1039px var(--font-color), 793px 172px var(--font-color), 1562px 1739px var(--font-color), 1056px 110px var(--font-color), 1512px 379px var(--font-color), 1795px 1621px var(--font-color), 1848px 607px var(--font-color), 262px 1719px var(--font-color), 477px 991px var(--font-color), 483px 883px var(--font-color), 1239px 1197px var(--font-color), 1496px 647px var(--font-color), 1649px 25px var(--font-color), 1491px 1946px var(--font-color), 119px 996px var(--font-color), 179px 1472px var(--font-color), 1341px 808px var(--font-color), 1565px 1700px var(--font-color), 407px 1544px var(--font-color), 1754px 357px var(--font-color), 1288px 981px var(--font-color), 902px 1997px var(--font-color), 1755px 1668px var(--font-color), 186px 877px var(--font-color), 1202px 1882px var(--font-color), 461px 1213px var(--font-color), 1400px 748px var(--font-color), 1969px 1899px var(--font-color), 809px 522px var(--font-color), 514px 1219px var(--font-color), 374px 275px var(--font-color), 938px 1973px var(--font-color), 357px 552px var(--font-color), 144px 1722px var(--font-color), 1572px 912px var(--font-color), 402px 1858px var(--font-color), 1544px 1195px var(--font-color), 667px 1257px var(--font-color), 727px 1496px var(--font-color), 993px 232px var(--font-color), 1772px 313px var(--font-color), 1040px 1590px var(--font-color), 1204px 1973px var(--font-color), 1268px 79px var(--font-color), 1555px 1048px var(--font-color), 986px 1707px var(--font-color), 978px 1710px var(--font-color), 713px 360px var(--font-color), 407px 863px var(--font-color), 461px 736px var(--font-color), 284px 1608px var(--font-color), 103px 430px var(--font-color), 1283px 1319px var(--font-color), 977px 1186px var(--font-color), 1966px 1516px var(--font-color), 1287px 1129px var(--font-color), 70px 1098px var(--font-color), 1189px 889px var(--font-color), 1126px 1734px var(--font-color), 309px 1292px var(--font-color), 879px 764px var(--font-color), 65px 473px var(--font-color), 1003px 1959px var(--font-color), 658px 791px var(--font-color), 402px 1576px var(--font-color), 35px 622px var(--font-color), 529px 1589px var(--font-color), 164px 666px var(--font-color), 1876px 1290px var(--font-color), 1541px 526px var(--font-color), 270px 1297px var(--font-color), 440px 865px var(--font-color), 1500px 802px var(--font-color), 182px 1754px var(--font-color), 1264px 892px var(--font-color), 272px 1249px var(--font-color), 1289px 1535px var(--font-color), 190px 1646px var(--font-color), 955px 242px var(--font-color), 1456px 1597px var(--font-color), 1727px 1983px var(--font-color), 635px 801px var(--font-color), 226px 455px var(--font-color), 1396px 1710px var(--font-color), 849px 1863px var(--font-color), 237px 1264px var(--font-color), 839px 140px var(--font-color), 1122px 735px var(--font-color), 1280px 15px var(--font-color), 1318px 242px var(--font-color), 1819px 1148px var(--font-color), 333px 1392px var(--font-color), 1949px 553px var(--font-color), 1878px 1332px var(--font-color), 467px 548px var(--font-color), 1812px 1082px var(--font-color), 1067px 193px var(--font-color), 243px 156px var(--font-color), 483px 1616px var(--font-color), 1714px 933px var(--font-color), 759px 1800px var(--font-color), 1822px 995px var(--font-color), 1877px 572px var(--font-color), 581px 1084px var(--font-color), 107px 732px var(--font-color), 642px 1837px var(--font-color), 166px 1493px var(--font-color), 1555px 198px var(--font-color), 819px 307px var(--font-color), 947px 345px var(--font-color), 827px 224px var(--font-color), 927px 1394px var(--font-color), 540px 467px var(--font-color), 1093px 405px var(--font-color), 1140px 927px var(--font-color), 130px 529px var(--font-color), 33px 1980px var(--font-color), 1147px 1663px var(--font-color), 1616px 1436px var(--font-color), 528px 710px var(--font-color), 798px 1100px var(--font-color), 505px 1480px var(--font-color), 899px 641px var(--font-color), 1909px 1949px var(--font-color), 1311px 964px var(--font-color), 979px 1301px var(--font-color), 1393px 969px var(--font-color), 1793px 1886px var(--font-color), 292px 357px var(--font-color), 1196px 1718px var(--font-color), 1290px 1994px var(--font-color), 537px 1973px var(--font-color), 1181px 1674px var(--font-color), 1740px 1566px var(--font-color), 1307px 265px var(--font-color), 922px 522px var(--font-color), 1892px 472px var(--font-color), 384px 1746px var(--font-color), 392px 1098px var(--font-color), 647px 548px var(--font-color), 390px 1498px var(--font-color), 1246px 138px var(--font-color), 730px 876px var(--font-color), 192px 1472px var(--font-color), 1790px 1789px var(--font-color), 928px 311px var(--font-color), 1253px 1647px var(--font-color), 747px 1921px var(--font-color), 1561px 1025px var(--font-color), 1533px 1292px var(--font-color), 1985px 195px var(--font-color), 728px 729px var(--font-color), 1712px 1936px var(--font-color), 512px 1717px var(--font-color), 1528px 483px var(--font-color), 313px 1642px var(--font-color), 281px 1849px var(--font-color), 1212px 799px var(--font-color), 435px 1191px var(--font-color), 1422px 611px var(--font-color), 1718px 1964px var(--font-color), 411px 944px var(--font-color), 210px 636px var(--font-color), 1502px 1295px var(--font-color), 1434px 349px var(--font-color), 769px 60px var(--font-color), 747px 1053px var(--font-color), 789px 504px var(--font-color), 1436px 1264px var(--font-color), 1893px 1225px var(--font-color), 1394px 1788px var(--font-color), 1108px 1317px var(--font-color), 1673px 1395px var(--font-color), 854px 1010px var(--font-color), 1705px 80px var(--font-color), 1858px 148px var(--font-color), 1729px 344px var(--font-color), 1388px 664px var(--font-color), 895px 406px var(--font-color), 1479px 157px var(--font-color), 1441px 1157px var(--font-color), 552px 1900px var(--font-color), 516px 364px var(--font-color), 1647px 189px var(--font-color), 1427px 1071px var(--font-color), 785px 729px var(--font-color), 1080px 1710px var(--font-color), 504px 204px var(--font-color), 1177px 1622px var(--font-color), 657px 34px var(--font-color), 1296px 1099px var(--font-color), 248px 180px var(--font-color), 1212px 1568px var(--font-color), 667px 1562px var(--font-color), 695px 841px var(--font-color), 1608px 1247px var(--font-color), 751px 882px var(--font-color), 87px 167px var(--font-color), 607px 1368px var(--font-color), 1363px 1203px var(--font-color), 1836px 317px var(--font-color), 1668px 1703px var(--font-color), 830px 1154px var(--font-color), 1721px 1398px var(--font-color), 1601px 1280px var(--font-color), 976px 874px var(--font-color), 1743px 254px var(--font-color), 1020px 1815px var(--font-color), 1670px 1766px var(--font-color), 1890px 735px var(--font-color), 1379px 136px var(--font-color), 1864px 695px var(--font-color), 206px 965px var(--font-color), 1404px 1932px var(--font-color), 1923px 1360px var(--font-color), 247px 682px var(--font-color), 519px 1708px var(--font-color), 645px 750px var(--font-color), 1164px 1204px var(--font-color), 834px 323px var(--font-color), 172px 1350px var(--font-color), 213px 972px var(--font-color), 1837px 190px var(--font-color), 285px 1806px var(--font-color), 1047px 1299px var(--font-color), 1548px 825px var(--font-color), 1730px 324px var(--font-color), 1346px 1909px var(--font-color), 772px 270px var(--font-color), 345px 1190px var(--font-color), 478px 1433px var(--font-color), 1479px 25px var(--font-color), 1994px 1830px var(--font-color), 1744px 732px var(--font-color), 20px 1635px var(--font-color), 690px 1795px var(--font-color), 1594px 569px var(--font-color), 579px 245px var(--font-color), 1398px 733px var(--font-color), 408px 1352px var(--font-color), 1774px 120px var(--font-color), 1152px 1370px var(--font-color), 1698px 1810px var(--font-color), 710px 1450px var(--font-color), 665px 286px var(--font-color), 493px 1720px var(--font-color), 786px 5px var(--font-color), 637px 1140px var(--font-color), 764px 324px var(--font-color), 927px 310px var(--font-color), 938px 1424px var(--font-color), 1884px 744px var(--font-color), 913px 462px var(--font-color), 1831px 1936px var(--font-color), 1527px 249px var(--font-color), 36px 1381px var(--font-color), 1597px 581px var(--font-color), 1530px 355px var(--font-color), 949px 459px var(--font-color), 799px 828px var(--font-color), 242px 1471px var(--font-color), 654px 797px var(--font-color), 796px 594px var(--font-color), 1365px 678px var(--font-color), 752px 23px var(--font-color), 1630px 541px var(--font-color), 982px 72px var(--font-color), 1733px 1831px var(--font-color), 21px 412px var(--font-color), 775px 998px var(--font-color), 335px 1945px var(--font-color), 264px 583px var(--font-color), 158px 1311px var(--font-color), 528px 164px var(--font-color), 1978px 574px var(--font-color), 717px 1203px var(--font-color), 734px 1591px var(--font-color), 1555px 820px var(--font-color), 16px 1943px var(--font-color), 1625px 1177px var(--font-color), 1236px 690px var(--font-color), 1585px 1590px var(--font-color), 1737px 1728px var(--font-color), 721px 698px var(--font-color), 1804px 1186px var(--font-color), 166px 980px var(--font-color), 1850px 230px var(--font-color), 330px 1712px var(--font-color), 95px 797px var(--font-color), 1948px 1078px var(--font-color), 469px 939px var(--font-color), 1269px 1899px var(--font-color), 955px 1220px var(--font-color), 1137px 1075px var(--font-color), 312px 1293px var(--font-color), 986px 1762px var(--font-color), 1103px 1238px var(--font-color), 428px 1993px var(--font-color), 355px 570px var(--font-color), 977px 1836px var(--font-color), 1395px 1092px var(--font-color), 276px 913px var(--font-color), 1743px 656px var(--font-color), 773px 502px var(--font-color), 1686px 1322px var(--font-color), 1516px 1945px var(--font-color), 1334px 501px var(--font-color), 266px 156px var(--font-color), 455px 655px var(--font-color), 798px 72px var(--font-color), 1059px 1259px var(--font-color), 1402px 1687px var(--font-color), 236px 1329px var(--font-color), 1455px 786px var(--font-color), 146px 1228px var(--font-color), 1851px 823px var(--font-color), 1062px 100px var(--font-color), 1220px 953px var(--font-color), 20px 1826px var(--font-color), 36px 1063px var(--font-color), 1525px 338px var(--font-color), 790px 1521px var(--font-color), 741px 1099px var(--font-color), 288px 1489px var(--font-color), 700px 1060px var(--font-color), 390px 1071px var(--font-color), 411px 1036px var(--font-color), 1853px 1072px var(--font-color), 1446px 1085px var(--font-color), 1164px 874px var(--font-color), 924px 925px var(--font-color), 291px 271px var(--font-color), 1257px 1964px var(--font-color), 1580px 1352px var(--font-color), 1507px 1216px var(--font-color), 211px 956px var(--font-color), 985px 1195px var(--font-color), 975px 1640px var(--font-color), 518px 101px var(--font-color), 663px 1395px var(--font-color), 914px 532px var(--font-color), 145px 1320px var(--font-color), 69px 1397px var(--font-color), 982px 523px var(--font-color), 257px 725px var(--font-color), 1599px 831px var(--font-color), 1636px 1513px var(--font-color), 1250px 1158px var(--font-color), 1132px 604px var(--font-color), 183px 102px var(--font-color), 1057px 318px var(--font-color), 1247px 1835px var(--font-color), 1983px 1110px var(--font-color), 1077px 1455px var(--font-color), 921px 1770px var(--font-color), 806px 1350px var(--font-color), 1938px 1992px var(--font-color), 855px 1260px var(--font-color), 902px 1345px var(--font-color), 658px 1908px var(--font-color), 1845px 679px var(--font-color), 712px 1482px var(--font-color), 595px 950px var(--font-color), 1784px 1992px var(--font-color), 1847px 1785px var(--font-color), 691px 1004px var(--font-color), 175px 1179px var(--font-color), 1666px 1911px var(--font-color), 41px 61px var(--font-color), 971px 1080px var(--font-color), 1830px 1450px var(--font-color), 1351px 1518px var(--font-color), 1257px 99px var(--font-color), 1395px 1498px var(--font-color), 1117px 252px var(--font-color), 1779px 597px var(--font-color), 1346px 729px var(--font-color), 1108px 1144px var(--font-color), 402px 691px var(--font-color), 72px 496px var(--font-color), 1673px 1604px var(--font-color), 1497px 974px var(--font-color), 1865px 1664px var(--font-color), 88px 806px var(--font-color), 918px 77px var(--font-color), 244px 1118px var(--font-color), 256px 1820px var(--font-color), 1851px 1840px var(--font-color), 605px 1851px var(--font-color), 634px 383px var(--font-color), 865px 37px var(--font-color), 943px 1024px var(--font-color), 1951px 177px var(--font-color), 1097px 523px var(--font-color), 985px 1700px var(--font-color), 1243px 122px var(--font-color), 768px 1070px var(--font-color), 468px 194px var(--font-color), 320px 1867px var(--font-color), 1850px 185px var(--font-color), 380px 1616px var(--font-color), 468px 1294px var(--font-color), 1122px 1743px var(--font-color), 884px 299px var(--font-color), 1300px 1917px var(--font-color), 1860px 396px var(--font-color), 1270px 990px var(--font-color), 529px 733px var(--font-color), 1975px 1347px var(--font-color), 1885px 685px var(--font-color), 226px 506px var(--font-color), 651px 878px var(--font-color), 1323px 680px var(--font-color), 1284px 680px var(--font-color), 238px 1967px var(--font-color), 911px 174px var(--font-color), 1111px 521px var(--font-color), 1150px 85px var(--font-color), 794px 502px var(--font-color), 484px 1856px var(--font-color), 1809px 368px var(--font-color), 112px 953px var(--font-color), 590px 1009px var(--font-color), 1655px 311px var(--font-color), 100px 1026px var(--font-color), 1803px 352px var(--font-color), 865px 306px var(--font-color), 1077px 1019px var(--font-color), 1335px 872px var(--font-color), 1647px 1298px var(--font-color), 1233px 1387px var(--font-color), 698px 1036px var(--font-color), 659px 1860px var(--font-color), 388px 1412px var(--font-color), 1212px 458px var(--font-color), 755px 1468px var(--font-color), 696px 1654px var(--font-color), 1144px 60px var(--font-color);\n}\n\n#stars2[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  background: transparent;\n  animation: animStar 100s linear infinite;\n  box-shadow: 1048px 320px var(--font-color), 1075px 1663px var(--font-color), 332px 1364px var(--font-color), 878px 340px var(--font-color), 569px 1032px var(--font-color), 1022px 1684px var(--font-color), 1046px 1007px var(--font-color), 121px 979px var(--font-color), 1044px 1069px var(--font-color), 463px 381px var(--font-color), 423px 112px var(--font-color), 523px 1179px var(--font-color), 779px 654px var(--font-color), 1398px 694px var(--font-color), 1085px 1464px var(--font-color), 1599px 1869px var(--font-color), 801px 1882px var(--font-color), 779px 1231px var(--font-color), 552px 932px var(--font-color), 1057px 1196px var(--font-color), 282px 1280px var(--font-color), 496px 1986px var(--font-color), 1833px 1120px var(--font-color), 1802px 1293px var(--font-color), 6px 1696px var(--font-color), 412px 1902px var(--font-color), 605px 438px var(--font-color), 24px 1212px var(--font-color), 234px 1320px var(--font-color), 544px 344px var(--font-color), 1107px 170px var(--font-color), 1603px 196px var(--font-color), 905px 648px var(--font-color), 68px 1458px var(--font-color), 649px 1969px var(--font-color), 744px 675px var(--font-color), 1127px 478px var(--font-color), 714px 1814px var(--font-color), 1486px 526px var(--font-color), 270px 1636px var(--font-color), 1931px 149px var(--font-color), 1807px 378px var(--font-color), 8px 390px var(--font-color), 1415px 699px var(--font-color), 1473px 1211px var(--font-color), 1590px 141px var(--font-color), 270px 1705px var(--font-color), 69px 1423px var(--font-color), 1108px 1053px var(--font-color), 1946px 128px var(--font-color), 371px 371px var(--font-color), 1490px 220px var(--font-color), 357px 1885px var(--font-color), 363px 363px var(--font-color), 1896px 1256px var(--font-color), 1979px 1050px var(--font-color), 947px 1342px var(--font-color), 1754px 242px var(--font-color), 514px 974px var(--font-color), 65px 1477px var(--font-color), 1840px 547px var(--font-color), 950px 695px var(--font-color), 459px 1150px var(--font-color), 1124px 1502px var(--font-color), 481px 940px var(--font-color), 680px 839px var(--font-color), 797px 1169px var(--font-color), 1977px 1491px var(--font-color), 734px 1724px var(--font-color), 210px 298px var(--font-color), 816px 628px var(--font-color), 686px 770px var(--font-color), 1721px 267px var(--font-color), 1663px 511px var(--font-color), 1481px 1141px var(--font-color), 582px 248px var(--font-color), 1308px 953px var(--font-color), 628px 657px var(--font-color), 897px 1535px var(--font-color), 270px 931px var(--font-color), 791px 467px var(--font-color), 1336px 1732px var(--font-color), 1013px 1653px var(--font-color), 1911px 956px var(--font-color), 587px 816px var(--font-color), 83px 456px var(--font-color), 930px 1478px var(--font-color), 1587px 1694px var(--font-color), 614px 1200px var(--font-color), 302px 1782px var(--font-color), 1711px 1432px var(--font-color), 443px 904px var(--font-color), 1666px 714px var(--font-color), 1588px 1167px var(--font-color), 273px 1075px var(--font-color), 1679px 461px var(--font-color), 721px 664px var(--font-color), 1202px 10px var(--font-color), 166px 1126px var(--font-color), 331px 1628px var(--font-color), 430px 1565px var(--font-color), 1585px 509px var(--font-color), 640px 38px var(--font-color), 822px 837px var(--font-color), 1760px 1664px var(--font-color), 1122px 1458px var(--font-color), 398px 131px var(--font-color), 689px 285px var(--font-color), 460px 652px var(--font-color), 1627px 365px var(--font-color), 348px 1648px var(--font-color), 819px 1946px var(--font-color), 981px 1917px var(--font-color), 323px 76px var(--font-color), 979px 684px var(--font-color), 887px 536px var(--font-color), 1348px 1596px var(--font-color), 1055px 666px var(--font-color), 1402px 1797px var(--font-color), 1300px 1055px var(--font-color), 937px 238px var(--font-color), 1474px 1815px var(--font-color), 1144px 1710px var(--font-color), 1629px 1087px var(--font-color), 911px 919px var(--font-color), 771px 819px var(--font-color), 403px 720px var(--font-color), 163px 736px var(--font-color), 1062px 238px var(--font-color), 1774px 818px var(--font-color), 1874px 1178px var(--font-color), 1177px 699px var(--font-color), 1244px 1244px var(--font-color), 1371px 58px var(--font-color), 564px 1515px var(--font-color), 1824px 487px var(--font-color), 929px 702px var(--font-color), 394px 1348px var(--font-color), 1161px 641px var(--font-color), 219px 1841px var(--font-color), 358px 941px var(--font-color), 140px 1759px var(--font-color), 1019px 1345px var(--font-color), 274px 436px var(--font-color), 1433px 1605px var(--font-color), 1798px 1426px var(--font-color), 294px 1848px var(--font-color), 1681px 1877px var(--font-color), 1344px 1824px var(--font-color), 1439px 1632px var(--font-color), 161px 1012px var(--font-color), 1308px 588px var(--font-color), 1789px 582px var(--font-color), 721px 1910px var(--font-color), 318px 218px var(--font-color), 607px 319px var(--font-color), 495px 535px var(--font-color), 1552px 1575px var(--font-color), 1562px 67px var(--font-color), 403px 926px var(--font-color), 1096px 1800px var(--font-color), 1814px 1709px var(--font-color), 1882px 1831px var(--font-color), 533px 46px var(--font-color), 823px 969px var(--font-color), 530px 165px var(--font-color), 1030px 352px var(--font-color), 1681px 313px var(--font-color), 338px 115px var(--font-color), 1607px 211px var(--font-color), 1718px 1184px var(--font-color), 1589px 659px var(--font-color), 278px 355px var(--font-color), 464px 1464px var(--font-color), 1165px 277px var(--font-color), 950px 694px var(--font-color), 1746px 293px var(--font-color), 793px 911px var(--font-color), 528px 773px var(--font-color), 1883px 1694px var(--font-color), 748px 182px var(--font-color), 1924px 1531px var(--font-color), 100px 636px var(--font-color), 1473px 1445px var(--font-color), 1264px 1244px var(--font-color), 850px 1377px var(--font-color), 987px 1976px var(--font-color), 933px 1761px var(--font-color), 922px 1270px var(--font-color), 500px 396px var(--font-color), 1324px 8px var(--font-color), 1967px 1814px var(--font-color), 1072px 1401px var(--font-color), 961px 37px var(--font-color), 156px 81px var(--font-color), 1915px 502px var(--font-color), 1076px 1846px var(--font-color), 152px 1669px var(--font-color), 986px 1529px var(--font-color), 1667px 1137px var(--font-color);\n}\n\n#stars2[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 2000px;\n  width: 2px;\n  height: 2px;\n  background: transparent;\n  box-shadow: 1448px 320px var(--font-color), 1775px 1663px var(--font-color), 332px 1364px var(--font-color), 878px 340px var(--font-color), 569px 1832px var(--font-color), 1422px 1684px var(--font-color), 1946px 1907px var(--font-color), 121px 979px var(--font-color), 1044px 1069px var(--font-color), 463px 381px var(--font-color), 423px 112px var(--font-color), 523px 1179px var(--font-color), 779px 654px var(--font-color), 1398px 694px var(--font-color), 1085px 1464px var(--font-color), 1599px 1869px var(--font-color), 801px 1882px var(--font-color), 779px 1231px var(--font-color), 552px 932px var(--font-color), 1057px 1196px var(--font-color), 282px 1280px var(--font-color), 496px 1986px var(--font-color), 1833px 1120px var(--font-color), 1802px 1293px var(--font-color), 6px 1696px var(--font-color), 412px 1902px var(--font-color), 605px 438px var(--font-color), 24px 1212px var(--font-color), 234px 1320px var(--font-color), 544px 344px var(--font-color), 1107px 170px var(--font-color), 1603px 196px var(--font-color), 905px 648px var(--font-color), 68px 1458px var(--font-color), 649px 1969px var(--font-color), 744px 675px var(--font-color), 1127px 478px var(--font-color), 714px 1814px var(--font-color), 1486px 526px var(--font-color), 270px 1636px var(--font-color), 1931px 149px var(--font-color), 1807px 378px var(--font-color), 8px 390px var(--font-color), 1415px 699px var(--font-color), 1473px 1211px var(--font-color), 1590px 141px var(--font-color), 270px 1705px var(--font-color), 69px 1423px var(--font-color), 1108px 1053px var(--font-color), 1946px 128px var(--font-color), 371px 371px var(--font-color), 1490px 220px var(--font-color), 357px 1885px var(--font-color), 363px 363px var(--font-color), 1896px 1256px var(--font-color), 1979px 1050px var(--font-color), 947px 1342px var(--font-color), 1754px 242px var(--font-color), 514px 974px var(--font-color), 65px 1477px var(--font-color), 1840px 547px var(--font-color), 950px 695px var(--font-color), 459px 1150px var(--font-color), 1124px 1502px var(--font-color), 481px 940px var(--font-color), 680px 839px var(--font-color), 797px 1169px var(--font-color), 1977px 1491px var(--font-color), 734px 1724px var(--font-color), 210px 298px var(--font-color), 816px 628px var(--font-color), 686px 770px var(--font-color), 1721px 267px var(--font-color), 1663px 511px var(--font-color), 1481px 1141px var(--font-color), 582px 248px var(--font-color), 1308px 953px var(--font-color), 628px 657px var(--font-color), 897px 1535px var(--font-color), 270px 931px var(--font-color), 791px 467px var(--font-color), 1336px 1732px var(--font-color), 1013px 1653px var(--font-color), 1911px 956px var(--font-color), 587px 816px var(--font-color), 83px 456px var(--font-color), 930px 1478px var(--font-color), 1587px 1694px var(--font-color), 614px 1200px var(--font-color), 302px 1782px var(--font-color), 1711px 1432px var(--font-color), 443px 904px var(--font-color), 1666px 714px var(--font-color), 1588px 1167px var(--font-color), 273px 1075px var(--font-color), 1679px 461px var(--font-color), 721px 664px var(--font-color), 1202px 10px var(--font-color), 166px 1126px var(--font-color), 331px 1628px var(--font-color), 430px 1565px var(--font-color), 1585px 509px var(--font-color), 640px 38px var(--font-color), 822px 837px var(--font-color), 1760px 1664px var(--font-color), 1122px 1458px var(--font-color), 398px 131px var(--font-color), 689px 285px var(--font-color), 460px 652px var(--font-color), 1627px 365px var(--font-color), 348px 1648px var(--font-color), 819px 1946px var(--font-color), 981px 1917px var(--font-color), 323px 76px var(--font-color), 979px 684px var(--font-color), 887px 536px var(--font-color), 1348px 1596px var(--font-color), 1055px 666px var(--font-color), 1402px 1797px var(--font-color), 1300px 1055px var(--font-color), 937px 238px var(--font-color), 1474px 1815px var(--font-color), 1144px 1710px var(--font-color), 1629px 1087px var(--font-color), 911px 919px var(--font-color), 771px 819px var(--font-color), 403px 720px var(--font-color), 163px 736px var(--font-color), 1062px 238px var(--font-color), 1774px 818px var(--font-color), 1874px 1178px var(--font-color), 1177px 699px var(--font-color), 1244px 1244px var(--font-color), 1371px 58px var(--font-color), 564px 1515px var(--font-color), 1824px 487px var(--font-color), 929px 702px var(--font-color), 394px 1348px var(--font-color), 1161px 641px var(--font-color), 219px 1841px var(--font-color), 358px 941px var(--font-color), 140px 1759px var(--font-color), 1019px 1345px var(--font-color), 274px 436px var(--font-color), 1433px 1605px var(--font-color), 1798px 1426px var(--font-color), 294px 1848px var(--font-color), 1681px 1877px var(--font-color), 1344px 1824px var(--font-color), 1439px 1632px var(--font-color), 161px 1012px var(--font-color), 1308px 588px var(--font-color), 1789px 582px var(--font-color), 721px 1910px var(--font-color), 318px 218px var(--font-color), 607px 319px var(--font-color), 495px 535px var(--font-color), 1552px 1575px var(--font-color), 1562px 67px var(--font-color), 403px 926px var(--font-color), 1096px 1800px var(--font-color), 1814px 1709px var(--font-color), 1882px 1831px var(--font-color), 533px 46px var(--font-color), 823px 969px var(--font-color), 530px 165px var(--font-color), 1030px 352px var(--font-color), 1681px 313px var(--font-color), 338px 115px var(--font-color), 1607px 211px var(--font-color), 1718px 1184px var(--font-color), 1589px 659px var(--font-color), 278px 355px var(--font-color), 464px 1464px var(--font-color), 1165px 277px var(--font-color), 950px 694px var(--font-color), 1746px 293px var(--font-color), 793px 911px var(--font-color), 528px 773px var(--font-color), 1883px 1694px var(--font-color), 748px 182px var(--font-color), 1924px 1531px var(--font-color), 100px 636px var(--font-color), 1473px 1445px var(--font-color), 1264px 1244px var(--font-color), 850px 1377px var(--font-color), 987px 1976px var(--font-color), 933px 1761px var(--font-color), 922px 1270px var(--font-color), 500px 396px var(--font-color), 1324px 8px var(--font-color), 1967px 1814px var(--font-color), 1072px 1401px var(--font-color), 961px 37px var(--font-color), 156px 81px var(--font-color), 1915px 502px var(--font-color), 1076px 1846px var(--font-color), 152px 1669px var(--font-color), 986px 1529px var(--font-color), 1667px 1137px var(--font-color);\n}\n\n#stars3[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  background: transparent;\n  animation: animStar 150s linear infinte;\n  box-shadow: 387px 1878px var(--font-color), 760px 1564px var(--font-color), 1487px 999px var(--font-color), 948px 1828px var(--font-color), 1977px 1001px var(--font-color), 1284px 1963px var(--font-color), 656px 284px var(--font-color), 1268px 1635px var(--font-color), 1820px 598px var(--font-color), 642px 1900px var(--font-color), 296px 57px var(--font-color), 921px 1620px var(--font-color), 476px 1858px var(--font-color), 658px 613px var(--font-color), 1171px 1363px var(--font-color), 1419px 283px var(--font-color), 1037px 731px var(--font-color), 503px 663px var(--font-color), 1562px 463px var(--font-color), 383px 1197px var(--font-color), 1171px 1233px var(--font-color), 876px 1768px var(--font-color), 856px 1615px var(--font-color), 1375px 1924px var(--font-color), 1725px 918px var(--font-color), 952px 119px var(--font-color), 768px 1212px var(--font-color), 992px 1462px var(--font-color), 1929px 717px var(--font-color), 1947px 755px var(--font-color), 1818px 1123px var(--font-color), 1896px 1672px var(--font-color), 460px 198px var(--font-color), 256px 271px var(--font-color), 752px 544px var(--font-color), 1222px 1859px var(--font-color), 1851px 443px var(--font-color), 313px 1858px var(--font-color), 709px 446px var(--font-color), 1546px 697px var(--font-color), 674px 1155px var(--font-color), 1112px 130px var(--font-color), 355px 1790px var(--font-color), 1496px 974px var(--font-color), 1696px 480px var(--font-color), 1316px 1265px var(--font-color), 1645px 1063px var(--font-color), 1182px 237px var(--font-color), 427px 1582px var(--font-color), 859px 253px var(--font-color), 458px 939px var(--font-color), 1517px 1644px var(--font-color), 1943px 60px var(--font-color), 212px 1650px var(--font-color), 966px 1786px var(--font-color), 473px 712px var(--font-color), 130px 76px var(--font-color), 1417px 1186px var(--font-color), 909px 1580px var(--font-color), 1913px 762px var(--font-color), 204px 1143px var(--font-color), 1998px 1057px var(--font-color), 1468px 1301px var(--font-color), 144px 1676px var(--font-color), 21px 1601px var(--font-color), 382px 1362px var(--font-color), 912px 753px var(--font-color), 1488px 1405px var(--font-color), 802px 156px var(--font-color), 174px 550px var(--font-color), 338px 1366px var(--font-color), 1197px 774px var(--font-color), 602px 486px var(--font-color), 682px 1877px var(--font-color), 348px 1503px var(--font-color), 407px 1139px var(--font-color), 950px 1400px var(--font-color), 922px 1139px var(--font-color), 1697px 293px var(--font-color), 1238px 1281px var(--font-color), 1038px 1197px var(--font-color), 376px 1889px var(--font-color), 1255px 1680px var(--font-color), 1008px 1316px var(--font-color), 1538px 1447px var(--font-color), 1186px 874px var(--font-color), 1967px 640px var(--font-color), 1341px 19px var(--font-color), 29px 1732px var(--font-color), 16px 1650px var(--font-color), 1021px 1075px var(--font-color), 723px 424px var(--font-color), 1175px 41px var(--font-color), 494px 1957px var(--font-color), 1296px 431px var(--font-color), 175px 1507px var(--font-color), 831px 121px var(--font-color), 498px 1947px var(--font-color), 617px 880px var(--font-color), 240px 403px var(--font-color);\n}\n\n#stars3[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 2000px;\n  width: 3px;\n  height: 3px;\n  background: transparent;\n  box-shadow: 387px 1878px var(--font-color), 760px 1564px var(--font-color), 1487px 999px var(--font-color), 948px 1828px var(--font-color), 1977px 1001px var(--font-color), 1284px 1963px var(--font-color), 656px 284px var(--font-color), 1268px 1635px var(--font-color), 1820px 598px var(--font-color), 642px 1900px var(--font-color), 296px 57px var(--font-color), 921px 1620px var(--font-color), 476px 1858px var(--font-color), 658px 613px var(--font-color), 1171px 1363px var(--font-color), 1419px 283px var(--font-color), 1037px 731px var(--font-color), 503px 663px var(--font-color), 1562px 463px var(--font-color), 383px 1197px var(--font-color), 1171px 1233px var(--font-color), 876px 1768px var(--font-color), 856px 1615px var(--font-color), 1375px 1924px var(--font-color), 1725px 918px var(--font-color), 952px 119px var(--font-color), 768px 1212px var(--font-color), 992px 1462px var(--font-color), 1929px 717px var(--font-color), 1947px 755px var(--font-color), 1818px 1123px var(--font-color), 1896px 1672px var(--font-color), 460px 198px var(--font-color), 256px 271px var(--font-color), 752px 544px var(--font-color), 1222px 1859px var(--font-color), 1851px 443px var(--font-color), 313px 1858px var(--font-color), 709px 446px var(--font-color), 1546px 697px var(--font-color), 674px 1155px var(--font-color), 1112px 130px var(--font-color), 355px 1790px var(--font-color), 1496px 974px var(--font-color), 1696px 480px var(--font-color), 1316px 1265px var(--font-color), 1645px 1063px var(--font-color), 1182px 237px var(--font-color), 427px 1582px var(--font-color), 859px 253px var(--font-color), 458px 939px var(--font-color), 1517px 1644px var(--font-color), 1943px 60px var(--font-color), 212px 1650px var(--font-color), 966px 1786px var(--font-color), 473px 712px var(--font-color), 130px 76px var(--font-color), 1417px 1186px var(--font-color), 909px 1580px var(--font-color), 1913px 762px var(--font-color), 204px 1143px var(--font-color), 1998px 1057px var(--font-color), 1468px 1301px var(--font-color), 144px 1676px var(--font-color), 21px 1601px var(--font-color), 382px 1362px var(--font-color), 912px 753px var(--font-color), 1488px 1405px var(--font-color), 802px 156px var(--font-color), 174px 550px var(--font-color), 338px 1366px var(--font-color), 1197px 774px var(--font-color), 602px 486px var(--font-color), 682px 1877px var(--font-color), 348px 1503px var(--font-color), 407px 1139px var(--font-color), 950px 1400px var(--font-color), 922px 1139px var(--font-color), 1697px 293px var(--font-color), 1238px 1281px var(--font-color), 1038px 1197px var(--font-color), 376px 1889px var(--font-color), 1255px 1680px var(--font-color), 1008px 1316px var(--font-color), 1538px 1447px var(--font-color), 1186px 874px var(--font-color), 1967px 640px var(--font-color), 1341px 19px var(--font-color), 29px 1732px var(--font-color), 16px 1650px var(--font-color), 1021px 1075px var(--font-color), 723px 424px var(--font-color), 1175px 41px var(--font-color), 494px 1957px var(--font-color), 1296px 431px var(--font-color), 175px 1507px var(--font-color), 831px 121px var(--font-color), 498px 1947px var(--font-color), 617px 880px var(--font-color), 240px 403px var(--font-color);\n}\n\n@keyframes animStar {\n  from {\n    transform: translateY(0px);\n  }\n  to {\n    transform: translateY(-2000px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsNDByQkFBQTtBQUNGOztBQWtMQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNDByQkFBQTtBQS9LRjs7QUFrV0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0dU1BQUE7QUEvVkY7O0FBb1pBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw0dU1BQUE7QUFqWkY7O0FBc2NBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbW9HQUFBO0FBbmNGOztBQStkQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbW9HQUFBO0FBNWRGOztBQXlmQTtFQUNFO0lBQ0ksMEJBQUE7RUF0Zko7RUF3ZkE7SUFDSSw4QkFBQTtFQXRmSjtBQUNGIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RhcnMge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYW5pbWF0aW9uOiBhbmltU3RhciA1MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIGJveC1zaGFkb3c6IDc3OXB4IDEzMzFweCB2YXIoLS1mb250LWNvbG9yKSwgMzI0cHggNDJweCB2YXIoLS1mb250LWNvbG9yKSwgMzAzcHggNTg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMxMnB4IDI3NnB4IHZhcigtLWZvbnQtY29sb3IpLCA0NTFweCA2MjVweCB2YXIoLS1mb250LWNvbG9yKSwgNTIxcHggMTkzMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDg3cHggMTg3MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM2cHggMTU0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzJweCA5MzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTY5OHB4IDkwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDE4cHggNjY0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ0OHB4IDExNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTA4NHB4IDIzMnB4IHZhcigtLWZvbnQtY29sb3IpLCAzNDdweCAxNzc2cHggdmFyKC0tZm9udC1jb2xvciksIDE3MjJweCAyNDNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjI5cHggODM1cHggdmFyKC0tZm9udC1jb2xvciksIDQ3OXB4IDk2OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjMxcHggOTYwcHggdmFyKC0tZm9udC1jb2xvciksIDU4NnB4IDM4NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2NHB4IDUyN3B4IHZhcigtLWZvbnQtY29sb3IpLCA4cHggNjQ2cHggdmFyKC0tZm9udC1jb2xvciksIDExNTBweCAxMTI2cHggdmFyKC0tZm9udC1jb2xvciksIDY2NXB4IDEzNTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTU2cHggMTk4MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjYwcHggMTk2MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjc1cHggMTc0MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4NDNweCAxNTE0cHggdmFyKC0tZm9udC1jb2xvciksIDcxOHB4IDE2MjhweCB2YXIoLS1mb250LWNvbG9yKSwgMjQycHggMTM0M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk3cHggMTg4MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNjRweCAyMzBweCB2YXIoLS1mb250LWNvbG9yKSwgMTczOXB4IDEzMDJweCB2YXIoLS1mb250LWNvbG9yKSwgNjM2cHggOTU5cHggdmFyKC0tZm9udC1jb2xvciksIDMwNHB4IDY4NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDYxNHB4IDc1MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTM1cHggODE2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MjhweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNTVweCAzMzVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTk0cHggMTU4cHggdmFyKC0tZm9udC1jb2xvciksIDkwcHggNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1M3B4IDE2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjM5cHggMTgyNXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NDVweCA1ODdweCB2YXIoLS1mb250LWNvbG9yKSwgNzQ5cHggMTc4NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTg3cHggMTE3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzAxcHggMTIzN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMzlweCAzNDJweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4NXB4IDE0ODFweCB2YXIoLS1mb250LWNvbG9yKSwgOTk1cHggMTA0OHB4IHZhcigtLWZvbnQtY29sb3IpLCA1MjRweCA5MzJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyMTRweCA0MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTcwMXB4IDEzMDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTAzN3B4IDE2MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3MXB4IDk5NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNjBweCAxNjM1cHggdmFyKC0tZm9udC1jb2xvciksIDExMTBweCAxMzEzcHggdmFyKC0tZm9udC1jb2xvciksIDQxMnB4IDE3ODNweCB2YXIoLS1mb250LWNvbG9yKSwgMTk0OXB4IDE3N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkwM3B4IDE4NTRweCB2YXIoLS1mb250LWNvbG9yKSwgNzAwcHggMTkzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAzNzhweCAxMjVweCB2YXIoLS1mb250LWNvbG9yKSwgMzA4cHggODM0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTExOHB4IDk2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzUwcHggMTkyOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3ODFweCAxODExcHggdmFyKC0tZm9udC1jb2xvciksIDU2MXB4IDEzN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc1N3B4IDExNDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTY3MHB4IDE5NzlweCB2YXIoLS1mb250LWNvbG9yKSwgMzQzcHggNzM5cHggdmFyKC0tZm9udC1jb2xvciksIDk0NXB4IDc5NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDU3NnB4IDE5MDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTA3OHB4IDE0MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4M3B4IDQ1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzY2cHggNDc0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjk3cHggMTg3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTJweCAxNjJweCB2YXIoLS1mb250LWNvbG9yKSwgMTYyNHB4IDE2MzNweCB2YXIoLS1mb250LWNvbG9yKSwgNTlweCA0NTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MnB4IDE4NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTkzM3B4IDQ5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTY2cHggMTk3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc1cHggMTY4OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc3OXB4IDMxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODU4cHggMTU0M3B4IHZhcigtLWZvbnQtY29sb3IpLCA3M3B4IDE1MDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTY5M3B4IDk3NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2ODNweCAxMDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTc2OHB4IDE2NTRweCB2YXIoLS1mb250LWNvbG9yKSwgNjU0cHggMTRweCB2YXIoLS1mb250LWNvbG9yKSwgNDk0cHggMTcxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY4OXB4IDE4OTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2MHB4IDI2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDMxcHggOTAzcHggdmFyKC0tZm9udC1jb2xvciksIDEyMDNweCAxMzkzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMzM3B4IDE0MjFweCB2YXIoLS1mb250LWNvbG9yKSwgMTExM3B4IDQxcHggdmFyKC0tZm9udC1jb2xvciksIDEyMDZweCAxNjQ1cHggdmFyKC0tZm9udC1jb2xvciksIDEzMjVweCAxNjM1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQycHggMzg4cHggdmFyKC0tZm9udC1jb2xvciksIDU3MnB4IDIxNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTM1cHggMjk2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MTlweCA0MDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc5cHggMTAwM3B4IHZhcigtLWZvbnQtY29sb3IpLCAzMjlweCA0NjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTc5MXB4IDE2NTJweCB2YXIoLS1mb250LWNvbG9yKSwgOTM1cHggMTgwMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMzBweCAxODIwcHggdmFyKC0tZm9udC1jb2xvciksIDQyMXB4IDE5MzNweCB2YXIoLS1mb250LWNvbG9yKSwgODI4cHggMzY1cHggdmFyKC0tZm9udC1jb2xvciksIDI3NXB4IDMxNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDcwN3B4IDk2MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjA1cHggMTU1NHB4IHZhcigtLWZvbnQtY29sb3IpLCA2MjVweCA1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MTdweCAxNjk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY2OXB4IDI0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTI1cHggMzIycHggdmFyKC0tZm9udC1jb2xvciksIDExNTRweCAxODAzcHggdmFyKC0tZm9udC1jb2xvciksIDE5MjlweCAyOTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjQ4cHggMjQwcHggdmFyKC0tZm9udC1jb2xvciksIDEwNDVweCAxNzU1cHggdmFyKC0tZm9udC1jb2xvciksIDE2NnB4IDk0MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODg4cHggMTc3M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY3OHB4IDE5NjNweCB2YXIoLS1mb250LWNvbG9yKSwgMTM3MHB4IDU2OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc0cHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzg2cHggNDYwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTFweCAzMDdweCB2YXIoLS1mb250LWNvbG9yKSwgNzg0cHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MzBweCAxMjU4cHggdmFyKC0tZm9udC1jb2xvciksIDE3MTJweCAzOTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MTZweCAxNzBweCB2YXIoLS1mb250LWNvbG9yKSwgMTc5N3B4IDE5MzJweCB2YXIoLS1mb250LWNvbG9yKSwgNTcycHggMjE5cHggdmFyKC0tZm9udC1jb2xvciksIDE1NTdweCAxODU2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjE4cHggOHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNDhweCAxMzM0cHggdmFyKC0tZm9udC1jb2xvciksIDQ2OXB4IDQxM3B4IHZhcigtLWZvbnQtY29sb3IpLCAzODVweCAxNzM4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTM1N3B4IDE4MThweCB2YXIoLS1mb250LWNvbG9yKSwgMjQwcHggOTQycHggdmFyKC0tZm9udC1jb2xvciksIDI0OHB4IDE4NDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzNXB4IDgwNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIzNnB4IDE1MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTQyOXB4IDE1NTZweCB2YXIoLS1mb250LWNvbG9yKSwgNzNweCAxNjMzcHggdmFyKC0tZm9udC1jb2xvciksIDEzOThweCAxMTIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjcxcHggMTMwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDA0cHggMTY2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NDBweCAxMDE4cHggdmFyKC0tZm9udC1jb2xvciksIDE2MDBweCAzNzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3ODVweCA1MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEycHggMTA4NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTE1cHggMTg4N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDYzcHggMTg0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY4N3B4IDExMTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTI2OHB4IDE3NjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTcyOXB4IDE0MjVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjg0cHggMTAyMnB4IHZhcigtLWZvbnQtY29sb3IpLCA4MDFweCA5NzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTk3NXB4IDEzMTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTM1NHB4IDgzNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDZweCAxNDg0cHggdmFyKC0tZm9udC1jb2xvciksIDEyODNweCAxNzg2cHggdmFyKC0tZm9udC1jb2xvciksIDExcHggNTIzcHggdmFyKC0tZm9udC1jb2xvciksIDE4NDJweCAyMzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzU1cHggNjU0cHggdmFyKC0tZm9udC1jb2xvciksIDQyOXB4IDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTAzM3B4IDExMjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTU3cHggMjk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTQ1cHggNjM1cHggdmFyKC0tZm9udC1jb2xvciksIDUycHggMTA4MHB4IHZhcigtLWZvbnQtY29sb3IpLCA4MjdweCAxNTIwcHggdmFyKC0tZm9udC1jb2xvciksIDExMjFweCA0OTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5cHggMzA5cHggdmFyKC0tZm9udC1jb2xvciksIDE3NDRweCAxNTg2cHggdmFyKC0tZm9udC1jb2xvciksIDEwMTRweCA0MTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzNHB4IDUyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk1OHB4IDU1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDAzcHggMTQ5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAzODdweCA3MDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTUyMnB4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNTVweCAyODJweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzMnB4IDYwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxODM4cHggNzkwcHggdmFyKC0tZm9udC1jb2xvciksIDI5MHB4IDI1OXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI5NXB4IDU5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjAxcHggNTM5cHggdmFyKC0tZm9udC1jb2xvciksIDE1NjFweCAxMjcycHggdmFyKC0tZm9udC1jb2xvciksIDM0cHggMTkyMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMjRweCA1NDNweCB2YXIoLS1mb250LWNvbG9yKSwgNDY3cHggMzY5cHggdmFyKC0tZm9udC1jb2xvciksIDcyMnB4IDMzM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc2cHggMTI1NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc2NnB4IDk4M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNTgycHggMTI4NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMnB4IDUxMnB4IHZhcigtLWZvbnQtY29sb3IpLCA2MTdweCAxNDEwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjgycHggNTc3cHggdmFyKC0tZm9udC1jb2xvciksIDEzMzRweCAxNDM4cHggdmFyKC0tZm9udC1jb2xvciksIDQzOXB4IDMyN3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNjE3cHggMTY2MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY3M3B4IDEyOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OTRweCA5NDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTM4NnB4IDE5MDJweCB2YXIoLS1mb250LWNvbG9yKSwgMzdweCAxMzUzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ2N3B4IDEzNTNweCB2YXIoLS1mb250LWNvbG9yKSwgNDE2cHggMThweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3cHggMzQ0cHggdmFyKC0tZm9udC1jb2xvciksIDIwMHB4IDE4OThweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDkxcHggMTYxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA4MTFweCAzNDdweCB2YXIoLS1mb250LWNvbG9yKSwgOTI0cHggMTgyN3B4IHZhcigtLWZvbnQtY29sb3IpLCA5NDVweCAyMTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzM1cHggMTIyOHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNzlweCAxODkwcHggdmFyKC0tZm9udC1jb2xvciksIDc5cHggNzYxcHggdmFyKC0tZm9udC1jb2xvciksIDgyNXB4IDE4MzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTgwcHggMTU1OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzA4cHggMTU3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDg4cHggMTcyNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM4MnB4IDEyMDhweCB2YXIoLS1mb250LWNvbG9yKSwgNTIycHggNTk1cHggdmFyKC0tZm9udC1jb2xvciksIDEyNzdweCAxODk4cHggdmFyKC0tZm9udC1jb2xvciksIDM1NHB4IDU1MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MXB4IDE3ODRweCB2YXIoLS1mb250LWNvbG9yKSwgNjE0cHggMjUxcHggdmFyKC0tZm9udC1jb2xvciksIDUyNnB4IDE1NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTdweCAyMTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzlweCA5OTZweCB2YXIoLS1mb250LWNvbG9yKSwgNDY3cHggMTIwOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ0cHggMTgzOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTQwcHggMTA5M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDg1OHB4IDEwMDdweCB2YXIoLS1mb250LWNvbG9yKSwgMjAwcHggMTA2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA0MjNweCAxOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NDVweCA0MzlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc3cHggNjg5cHggdmFyKC0tZm9udC1jb2xvciksIDExMjBweCAxNDM3cHggdmFyKC0tZm9udC1jb2xvciksIDE4NzZweCA2NjhweCB2YXIoLS1mb250LWNvbG9yKSwgOTA3cHggMTMyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM0M3B4IDE5NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTgxNnB4IDE1MDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTg0OXB4IDE3N3B4IHZhcigtLWZvbnQtY29sb3IpLCA2NDdweCA5MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5ODRweCAxMDEycHggdmFyKC0tZm9udC1jb2xvciksIDEzMzZweCAxMzAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyOHB4IDY0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMDVweCAxMDYwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMyNHB4IDgyNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjYzcHggMTMxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODAxcHggNjI5cHggdmFyKC0tZm9udC1jb2xvciksIDE2MTRweCAxNTU1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYzNHB4IDkwcHggdmFyKC0tZm9udC1jb2xvciksIDE2MDNweCA0NTJweCB2YXIoLS1mb250LWNvbG9yKSwgODkxcHggMTk4NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTU2cHggMTkwNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyMXB4IDY4cHggdmFyKC0tZm9udC1jb2xvciksIDE2NzZweCAxNzE0cHggdmFyKC0tZm9udC1jb2xvciksIDUxNnB4IDkzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ3cHggMTQ5MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NTVweCAxNTE5cHggdmFyKC0tZm9udC1jb2xvciksIDQ1cHggNjAycHggdmFyKC0tZm9udC1jb2xvciksIDIwNXB4IDEwMzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzkzcHggMTcycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU2MnB4IDE3MzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTA1NnB4IDExMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTEycHggMzc5cHggdmFyKC0tZm9udC1jb2xvciksIDE3OTVweCAxNjIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTg0OHB4IDYwN3B4IHZhcigtLWZvbnQtY29sb3IpLCAyNjJweCAxNzE5cHggdmFyKC0tZm9udC1jb2xvciksIDQ3N3B4IDk5MXB4IHZhcigtLWZvbnQtY29sb3IpLCA0ODNweCA4ODNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM5cHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk2cHggNjQ3cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDlweCAyNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDkxcHggMTk0NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExOXB4IDk5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzlweCAxNDcycHggdmFyKC0tZm9udC1jb2xvciksIDEzNDFweCA4MDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTU2NXB4IDE3MDBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MDdweCAxNTQ0cHggdmFyKC0tZm9udC1jb2xvciksIDE3NTRweCAzNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4OHB4IDk4MXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MDJweCAxOTk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTc1NXB4IDE2NjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTg2cHggODc3cHggdmFyKC0tZm9udC1jb2xvciksIDEyMDJweCAxODgycHggdmFyKC0tZm9udC1jb2xvciksIDQ2MXB4IDEyMTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDAwcHggNzQ4cHggdmFyKC0tZm9udC1jb2xvciksIDE5NjlweCAxODk5cHggdmFyKC0tZm9udC1jb2xvciksIDgwOXB4IDUyMnB4IHZhcigtLWZvbnQtY29sb3IpLCA1MTRweCAxMjE5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzc0cHggMjc1cHggdmFyKC0tZm9udC1jb2xvciksIDkzOHB4IDE5NzNweCB2YXIoLS1mb250LWNvbG9yKSwgMzU3cHggNTUycHggdmFyKC0tZm9udC1jb2xvciksIDE0NHB4IDE3MjJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTcycHggOTEycHggdmFyKC0tZm9udC1jb2xvciksIDQwMnB4IDE4NThweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0NHB4IDExOTVweCB2YXIoLS1mb250LWNvbG9yKSwgNjY3cHggMTI1N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDcyN3B4IDE0OTZweCB2YXIoLS1mb250LWNvbG9yKSwgOTkzcHggMjMycHggdmFyKC0tZm9udC1jb2xvciksIDE3NzJweCAzMTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTA0MHB4IDE1OTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjA0cHggMTk3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjY4cHggNzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1NXB4IDEwNDhweCB2YXIoLS1mb250LWNvbG9yKSwgOTg2cHggMTcwN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk3OHB4IDE3MTBweCB2YXIoLS1mb250LWNvbG9yKSwgNzEzcHggMzYwcHggdmFyKC0tZm9udC1jb2xvciksIDQwN3B4IDg2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA0NjFweCA3MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyODRweCAxNjA4cHggdmFyKC0tZm9udC1jb2xvciksIDEwM3B4IDQzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjgzcHggMTMxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA5NzdweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTk2NnB4IDE1MTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4N3B4IDExMjlweCB2YXIoLS1mb250LWNvbG9yKSwgNzBweCAxMDk4cHggdmFyKC0tZm9udC1jb2xvciksIDExODlweCA4ODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTI2cHggMTczNHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMDlweCAxMjkycHggdmFyKC0tZm9udC1jb2xvciksIDg3OXB4IDc2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA2NXB4IDQ3M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMDNweCAxOTU5cHggdmFyKC0tZm9udC1jb2xvciksIDY1OHB4IDc5MXB4IHZhcigtLWZvbnQtY29sb3IpLCA0MDJweCAxNTc2cHggdmFyKC0tZm9udC1jb2xvciksIDM1cHggNjIycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTI5cHggMTU4OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjRweCA2NjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3NnB4IDEyOTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0MXB4IDUyNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI3MHB4IDEyOTdweCB2YXIoLS1mb250LWNvbG9yKSwgNDQwcHggODY1cHggdmFyKC0tZm9udC1jb2xvciksIDE1MDBweCA4MDJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgycHggMTc1NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyNjRweCA4OTJweCB2YXIoLS1mb250LWNvbG9yKSwgMjcycHggMTI0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjg5cHggMTUzNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTBweCAxNjQ2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTU1cHggMjQycHggdmFyKC0tZm9udC1jb2xvciksIDE0NTZweCAxNTk3cHggdmFyKC0tZm9udC1jb2xvciksIDE3MjdweCAxOTgzcHggdmFyKC0tZm9udC1jb2xvciksIDYzNXB4IDgwMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIyNnB4IDQ1NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzk2cHggMTcxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA4NDlweCAxODYzcHggdmFyKC0tZm9udC1jb2xvciksIDIzN3B4IDEyNjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MzlweCAxNDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyMnB4IDczNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjgwcHggMTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTMxOHB4IDI0MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MTlweCAxMTQ4cHggdmFyKC0tZm9udC1jb2xvciksIDMzM3B4IDEzOTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTk0OXB4IDU1M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxODc4cHggMTMzMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ2N3B4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODEycHggMTA4MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDY3cHggMTkzcHggdmFyKC0tZm9udC1jb2xvciksIDI0M3B4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ4M3B4IDE2MTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxNHB4IDkzM3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NTlweCAxODAwcHggdmFyKC0tZm9udC1jb2xvciksIDE4MjJweCA5OTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODc3cHggNTcycHggdmFyKC0tZm9udC1jb2xvciksIDU4MXB4IDEwODRweCB2YXIoLS1mb250LWNvbG9yKSwgMTA3cHggNzMycHggdmFyKC0tZm9udC1jb2xvciksIDY0MnB4IDE4MzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjZweCAxNDkzcHggdmFyKC0tZm9udC1jb2xvciksIDE1NTVweCAxOThweCB2YXIoLS1mb250LWNvbG9yKSwgODE5cHggMzA3cHggdmFyKC0tZm9udC1jb2xvciksIDk0N3B4IDM0NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDgyN3B4IDIyNHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjdweCAxMzk0cHggdmFyKC0tZm9udC1jb2xvciksIDU0MHB4IDQ2N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDkzcHggNDA1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE0MHB4IDkyN3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMzBweCA1MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMzNweCAxOTgwcHggdmFyKC0tZm9udC1jb2xvciksIDExNDdweCAxNjYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYxNnB4IDE0MzZweCB2YXIoLS1mb250LWNvbG9yKSwgNTI4cHggNzEwcHggdmFyKC0tZm9udC1jb2xvciksIDc5OHB4IDExMDBweCB2YXIoLS1mb250LWNvbG9yKSwgNTA1cHggMTQ4MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDg5OXB4IDY0MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTA5cHggMTk0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzExcHggOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDk3OXB4IDEzMDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzkzcHggOTY5cHggdmFyKC0tZm9udC1jb2xvciksIDE3OTNweCAxODg2cHggdmFyKC0tZm9udC1jb2xvciksIDI5MnB4IDM1N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMTk2cHggMTcxOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyOTBweCAxOTk0cHggdmFyKC0tZm9udC1jb2xvciksIDUzN3B4IDE5NzNweCB2YXIoLS1mb250LWNvbG9yKSwgMTE4MXB4IDE2NzRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzQwcHggMTU2NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzA3cHggMjY1cHggdmFyKC0tZm9udC1jb2xvciksIDkyMnB4IDUyMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODkycHggNDcycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzg0cHggMTc0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAzOTJweCAxMDk4cHggdmFyKC0tZm9udC1jb2xvciksIDY0N3B4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzOTBweCAxNDk4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTI0NnB4IDEzOHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MzBweCA4NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTkycHggMTQ3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzkwcHggMTc4OXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkyOHB4IDMxMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjUzcHggMTY0N3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NDdweCAxOTIxcHggdmFyKC0tZm9udC1jb2xvciksIDE1NjFweCAxMDI1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTUzM3B4IDEyOTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTk4NXB4IDE5NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjhweCA3MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxMnB4IDE5MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA1MTJweCAxNzE3cHggdmFyKC0tZm9udC1jb2xvciksIDE1MjhweCA0ODNweCB2YXIoLS1mb250LWNvbG9yKSwgMzEzcHggMTY0MnB4IHZhcigtLWZvbnQtY29sb3IpLCAyODFweCAxODQ5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTIxMnB4IDc5OXB4IHZhcigtLWZvbnQtY29sb3IpLCA0MzVweCAxMTkxcHggdmFyKC0tZm9udC1jb2xvciksIDE0MjJweCA2MTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxOHB4IDE5NjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MTFweCA5NDRweCB2YXIoLS1mb250LWNvbG9yKSwgMjEwcHggNjM2cHggdmFyKC0tZm9udC1jb2xvciksIDE1MDJweCAxMjk1cHggdmFyKC0tZm9udC1jb2xvciksIDE0MzRweCAzNDlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NjlweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpLCA3NDdweCAxMDUzcHggdmFyKC0tZm9udC1jb2xvciksIDc4OXB4IDUwNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDM2cHggMTI2NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4OTNweCAxMjI1cHggdmFyKC0tZm9udC1jb2xvciksIDEzOTRweCAxNzg4cHggdmFyKC0tZm9udC1jb2xvciksIDExMDhweCAxMzE3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY3M3B4IDEzOTVweCB2YXIoLS1mb250LWNvbG9yKSwgODU0cHggMTAxMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzA1cHggODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTg1OHB4IDE0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE3MjlweCAzNDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTM4OHB4IDY2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA4OTVweCA0MDZweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ3OXB4IDE1N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDFweCAxMTU3cHggdmFyKC0tZm9udC1jb2xvciksIDU1MnB4IDE5MDBweCB2YXIoLS1mb250LWNvbG9yKSwgNTE2cHggMzY0cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDdweCAxODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDI3cHggMTA3MXB4IHZhcigtLWZvbnQtY29sb3IpLCA3ODVweCA3MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTA4MHB4IDE3MTBweCB2YXIoLS1mb250LWNvbG9yKSwgNTA0cHggMjA0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE3N3B4IDE2MjJweCB2YXIoLS1mb250LWNvbG9yKSwgNjU3cHggMzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTI5NnB4IDEwOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ4cHggMTgwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTIxMnB4IDE1NjhweCB2YXIoLS1mb250LWNvbG9yKSwgNjY3cHggMTU2MnB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTVweCA4NDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTYwOHB4IDEyNDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NTFweCA4ODJweCB2YXIoLS1mb250LWNvbG9yKSwgODdweCAxNjdweCB2YXIoLS1mb250LWNvbG9yKSwgNjA3cHggMTM2OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzYzcHggMTIwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MzZweCAzMTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2OHB4IDE3MDNweCB2YXIoLS1mb250LWNvbG9yKSwgODMwcHggMTE1NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzIxcHggMTM5OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MDFweCAxMjgwcHggdmFyKC0tZm9udC1jb2xvciksIDk3NnB4IDg3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzQzcHggMjU0cHggdmFyKC0tZm9udC1jb2xvciksIDEwMjBweCAxODE1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY3MHB4IDE3NjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTg5MHB4IDczNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzc5cHggMTM2cHggdmFyKC0tZm9udC1jb2xvciksIDE4NjRweCA2OTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyMDZweCA5NjVweCB2YXIoLS1mb250LWNvbG9yKSwgMTQwNHB4IDE5MzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTkyM3B4IDEzNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ3cHggNjgycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTE5cHggMTcwOHB4IHZhcigtLWZvbnQtY29sb3IpLCA2NDVweCA3NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTE2NHB4IDEyMDRweCB2YXIoLS1mb250LWNvbG9yKSwgODM0cHggMzIzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTcycHggMTM1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyMTNweCA5NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzN3B4IDE5MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyODVweCAxODA2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTA0N3B4IDEyOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0OHB4IDgyNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzMwcHggMzI0cHggdmFyKC0tZm9udC1jb2xvciksIDEzNDZweCAxOTA5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzcycHggMjcwcHggdmFyKC0tZm9udC1jb2xvciksIDM0NXB4IDExOTBweCB2YXIoLS1mb250LWNvbG9yKSwgNDc4cHggMTQzM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDc5cHggMjVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTk0cHggMTgzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzQ0cHggNzMycHggdmFyKC0tZm9udC1jb2xvciksIDIwcHggMTYzNXB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTBweCAxNzk1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU5NHB4IDU2OXB4IHZhcigtLWZvbnQtY29sb3IpLCA1NzlweCAyNDVweCB2YXIoLS1mb250LWNvbG9yKSwgMTM5OHB4IDczM3B4IHZhcigtLWZvbnQtY29sb3IpLCA0MDhweCAxMzUycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTc3NHB4IDEyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTUycHggMTM3MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjk4cHggMTgxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MTBweCAxNDUwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjY1cHggMjg2cHggdmFyKC0tZm9udC1jb2xvciksIDQ5M3B4IDE3MjBweCB2YXIoLS1mb250LWNvbG9yKSwgNzg2cHggNXB4IHZhcigtLWZvbnQtY29sb3IpLCA2MzdweCAxMTQwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzY0cHggMzI0cHggdmFyKC0tZm9udC1jb2xvciksIDkyN3B4IDMxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MzhweCAxNDI0cHggdmFyKC0tZm9udC1jb2xvciksIDE4ODRweCA3NDRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5MTNweCA0NjJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzMXB4IDE5MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTUyN3B4IDI0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAzNnB4IDEzODFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTk3cHggNTgxcHggdmFyKC0tZm9udC1jb2xvciksIDE1MzBweCAzNTVweCB2YXIoLS1mb250LWNvbG9yKSwgOTQ5cHggNDU5cHggdmFyKC0tZm9udC1jb2xvciksIDc5OXB4IDgyOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI0MnB4IDE0NzFweCB2YXIoLS1mb250LWNvbG9yKSwgNjU0cHggNzk3cHggdmFyKC0tZm9udC1jb2xvciksIDc5NnB4IDU5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzY1cHggNjc4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzUycHggMjNweCB2YXIoLS1mb250LWNvbG9yKSwgMTYzMHB4IDU0MXB4IHZhcigtLWZvbnQtY29sb3IpLCA5ODJweCA3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzMzcHggMTgzMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIxcHggNDEycHggdmFyKC0tZm9udC1jb2xvciksIDc3NXB4IDk5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMzVweCAxOTQ1cHggdmFyKC0tZm9udC1jb2xvciksIDI2NHB4IDU4M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1OHB4IDEzMTFweCB2YXIoLS1mb250LWNvbG9yKSwgNTI4cHggMTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NzhweCA1NzRweCB2YXIoLS1mb250LWNvbG9yKSwgNzE3cHggMTIwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDczNHB4IDE1OTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1NXB4IDgyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNnB4IDE5NDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTYyNXB4IDExNzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM2cHggNjkwcHggdmFyKC0tZm9udC1jb2xvciksIDE1ODVweCAxNTkwcHggdmFyKC0tZm9udC1jb2xvciksIDE3MzdweCAxNzI4cHggdmFyKC0tZm9udC1jb2xvciksIDcyMXB4IDY5OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MDRweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksIDE2NnB4IDk4MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODUwcHggMjMwcHggdmFyKC0tZm9udC1jb2xvciksIDMzMHB4IDE3MTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5NXB4IDc5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ4cHggMTA3OHB4IHZhcigtLWZvbnQtY29sb3IpLCA0NjlweCA5MzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTI2OXB4IDE4OTlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5NTVweCAxMjIwcHggdmFyKC0tZm9udC1jb2xvciksIDExMzdweCAxMDc1cHggdmFyKC0tZm9udC1jb2xvciksIDMxMnB4IDEyOTNweCB2YXIoLS1mb250LWNvbG9yKSwgOTg2cHggMTc2MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMDNweCAxMjM4cHggdmFyKC0tZm9udC1jb2xvciksIDQyOHB4IDE5OTNweCB2YXIoLS1mb250LWNvbG9yKSwgMzU1cHggNTcwcHggdmFyKC0tZm9udC1jb2xvciksIDk3N3B4IDE4MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzk1cHggMTA5MnB4IHZhcigtLWZvbnQtY29sb3IpLCAyNzZweCA5MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTc0M3B4IDY1NnB4IHZhcigtLWZvbnQtY29sb3IpLCA3NzNweCA1MDJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjg2cHggMTMyMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTE2cHggMTk0NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzM0cHggNTAxcHggdmFyKC0tZm9udC1jb2xvciksIDI2NnB4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ1NXB4IDY1NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OThweCA3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDU5cHggMTI1OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDAycHggMTY4N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIzNnB4IDEzMjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ1NXB4IDc4NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDZweCAxMjI4cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCA4MjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMDYycHggMTAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyMjBweCA5NTNweCB2YXIoLS1mb250LWNvbG9yKSwgMjBweCAxODI2cHggdmFyKC0tZm9udC1jb2xvciksIDM2cHggMTA2M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1MjVweCAzMzhweCB2YXIoLS1mb250LWNvbG9yKSwgNzkwcHggMTUyMXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NDFweCAxMDk5cHggdmFyKC0tZm9udC1jb2xvciksIDI4OHB4IDE0ODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3MDBweCAxMDYwcHggdmFyKC0tZm9udC1jb2xvciksIDM5MHB4IDEwNzFweCB2YXIoLS1mb250LWNvbG9yKSwgNDExcHggMTAzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODUzcHggMTA3MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDZweCAxMDg1cHggdmFyKC0tZm9udC1jb2xvciksIDExNjRweCA4NzRweCB2YXIoLS1mb250LWNvbG9yKSwgOTI0cHggOTI1cHggdmFyKC0tZm9udC1jb2xvciksIDI5MXB4IDI3MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyNTdweCAxOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE1ODBweCAxMzUycHggdmFyKC0tZm9udC1jb2xvciksIDE1MDdweCAxMjE2cHggdmFyKC0tZm9udC1jb2xvciksIDIxMXB4IDk1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk4NXB4IDExOTVweCB2YXIoLS1mb250LWNvbG9yKSwgOTc1cHggMTY0MHB4IHZhcigtLWZvbnQtY29sb3IpLCA1MThweCAxMDFweCB2YXIoLS1mb250LWNvbG9yKSwgNjYzcHggMTM5NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkxNHB4IDUzMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDVweCAxMzIwcHggdmFyKC0tZm9udC1jb2xvciksIDY5cHggMTM5N3B4IHZhcigtLWZvbnQtY29sb3IpLCA5ODJweCA1MjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyNTdweCA3MjVweCB2YXIoLS1mb250LWNvbG9yKSwgMTU5OXB4IDgzMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjM2cHggMTUxM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjUwcHggMTE1OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMzJweCA2MDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzcHggMTAycHggdmFyKC0tZm9udC1jb2xvciksIDEwNTdweCAzMThweCB2YXIoLS1mb250LWNvbG9yKSwgMTI0N3B4IDE4MzVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTgzcHggMTExMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc3cHggMTQ1NXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjFweCAxNzcwcHggdmFyKC0tZm9udC1jb2xvciksIDgwNnB4IDEzNTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTM4cHggMTk5MnB4IHZhcigtLWZvbnQtY29sb3IpLCA4NTVweCAxMjYwcHggdmFyKC0tZm9udC1jb2xvciksIDkwMnB4IDEzNDVweCB2YXIoLS1mb250LWNvbG9yKSwgNjU4cHggMTkwOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4NDVweCA2NzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzEycHggMTQ4MnB4IHZhcigtLWZvbnQtY29sb3IpLCA1OTVweCA5NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTc4NHB4IDE5OTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODQ3cHggMTc4NXB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTFweCAxMDA0cHggdmFyKC0tZm9udC1jb2xvciksIDE3NXB4IDExNzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2NnB4IDE5MTFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MXB4IDYxcHggdmFyKC0tZm9udC1jb2xvciksIDk3MXB4IDEwODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzMHB4IDE0NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTM1MXB4IDE1MThweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjU3cHggOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTM5NXB4IDE0OThweCB2YXIoLS1mb250LWNvbG9yKSwgMTExN3B4IDI1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzc5cHggNTk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTM0NnB4IDcyOXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTA4cHggMTE0NHB4IHZhcigtLWZvbnQtY29sb3IpLCA0MDJweCA2OTFweCB2YXIoLS1mb250LWNvbG9yKSwgNzJweCA0OTZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjczcHggMTYwNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk3cHggOTc0cHggdmFyKC0tZm9udC1jb2xvciksIDE4NjVweCAxNjY0cHggdmFyKC0tZm9udC1jb2xvciksIDg4cHggODA2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTE4cHggNzdweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ0cHggMTExOHB4IHZhcigtLWZvbnQtY29sb3IpLCAyNTZweCAxODIwcHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCAxODQwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjA1cHggMTg1MXB4IHZhcigtLWZvbnQtY29sb3IpLCA2MzRweCAzODNweCB2YXIoLS1mb250LWNvbG9yKSwgODY1cHggMzdweCB2YXIoLS1mb250LWNvbG9yKSwgOTQzcHggMTAyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NTFweCAxNzdweCB2YXIoLS1mb250LWNvbG9yKSwgMTA5N3B4IDUyM3B4IHZhcigtLWZvbnQtY29sb3IpLCA5ODVweCAxNzAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyNDNweCAxMjJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NjhweCAxMDcwcHggdmFyKC0tZm9udC1jb2xvciksIDQ2OHB4IDE5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMjBweCAxODY3cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTBweCAxODVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAzODBweCAxNjE2cHggdmFyKC0tZm9udC1jb2xvciksIDQ2OHB4IDEyOTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyMnB4IDE3NDNweCB2YXIoLS1mb250LWNvbG9yKSwgODg0cHggMjk5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMwMHB4IDE5MTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTg2MHB4IDM5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjcwcHggOTkwcHggdmFyKC0tZm9udC1jb2xvciksIDUyOXB4IDczM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NzVweCAxMzQ3cHggdmFyKC0tZm9udC1jb2xvciksIDE4ODVweCA2ODVweCB2YXIoLS1mb250LWNvbG9yKSwgMjI2cHggNTA2cHggdmFyKC0tZm9udC1jb2xvciksIDY1MXB4IDg3OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMjNweCA2ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4NHB4IDY4MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyMzhweCAxOTY3cHggdmFyKC0tZm9udC1jb2xvciksIDkxMXB4IDE3NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMTFweCA1MjFweCB2YXIoLS1mb250LWNvbG9yKSwgMTE1MHB4IDg1cHggdmFyKC0tZm9udC1jb2xvciksIDc5NHB4IDUwMnB4IHZhcigtLWZvbnQtY29sb3IpLCA0ODRweCAxODU2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTgwOXB4IDM2OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTJweCA5NTNweCB2YXIoLS1mb250LWNvbG9yKSwgNTkwcHggMTAwOXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjU1cHggMzExcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTAwcHggMTAyNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODAzcHggMzUycHggdmFyKC0tZm9udC1jb2xvciksIDg2NXB4IDMwNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc3cHggMTAxOXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMzVweCA4NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTY0N3B4IDEyOThweCB2YXIoLS1mb250LWNvbG9yKSwgMTIzM3B4IDEzODdweCB2YXIoLS1mb250LWNvbG9yKSwgNjk4cHggMTAzNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY1OXB4IDE4NjBweCB2YXIoLS1mb250LWNvbG9yKSwgMzg4cHggMTQxMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjEycHggNDU4cHggdmFyKC0tZm9udC1jb2xvciksIDc1NXB4IDE0NjhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA2OTZweCAxNjU0cHggdmFyKC0tZm9udC1jb2xvciksIDExNDRweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4jc3RhcnM6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMDBweDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDc3OXB4IDEzMzFweCB2YXIoLS1mb250LWNvbG9yKSwgMzI0cHggNDJweCB2YXIoLS1mb250LWNvbG9yKSwgMzAzcHggNTg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMxMnB4IDI3NnB4IHZhcigtLWZvbnQtY29sb3IpLCA0NTFweCA2MjVweCB2YXIoLS1mb250LWNvbG9yKSwgNTIxcHggMTkzMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDg3cHggMTg3MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM2cHggMTU0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzJweCA5MzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTY5OHB4IDkwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDE4cHggNjY0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ0OHB4IDExNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTA4NHB4IDIzMnB4IHZhcigtLWZvbnQtY29sb3IpLCAzNDdweCAxNzc2cHggdmFyKC0tZm9udC1jb2xvciksIDE3MjJweCAyNDNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjI5cHggODM1cHggdmFyKC0tZm9udC1jb2xvciksIDQ3OXB4IDk2OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjMxcHggOTYwcHggdmFyKC0tZm9udC1jb2xvciksIDU4NnB4IDM4NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2NHB4IDUyN3B4IHZhcigtLWZvbnQtY29sb3IpLCA4cHggNjQ2cHggdmFyKC0tZm9udC1jb2xvciksIDExNTBweCAxMTI2cHggdmFyKC0tZm9udC1jb2xvciksIDY2NXB4IDEzNTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTU2cHggMTk4MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjYwcHggMTk2MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjc1cHggMTc0MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4NDNweCAxNTE0cHggdmFyKC0tZm9udC1jb2xvciksIDcxOHB4IDE2MjhweCB2YXIoLS1mb250LWNvbG9yKSwgMjQycHggMTM0M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk3cHggMTg4MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNjRweCAyMzBweCB2YXIoLS1mb250LWNvbG9yKSwgMTczOXB4IDEzMDJweCB2YXIoLS1mb250LWNvbG9yKSwgNjM2cHggOTU5cHggdmFyKC0tZm9udC1jb2xvciksIDMwNHB4IDY4NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDYxNHB4IDc1MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTM1cHggODE2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MjhweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNTVweCAzMzVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTk0cHggMTU4cHggdmFyKC0tZm9udC1jb2xvciksIDkwcHggNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1M3B4IDE2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjM5cHggMTgyNXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NDVweCA1ODdweCB2YXIoLS1mb250LWNvbG9yKSwgNzQ5cHggMTc4NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTg3cHggMTE3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzAxcHggMTIzN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMzlweCAzNDJweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4NXB4IDE0ODFweCB2YXIoLS1mb250LWNvbG9yKSwgOTk1cHggMTA0OHB4IHZhcigtLWZvbnQtY29sb3IpLCA1MjRweCA5MzJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyMTRweCA0MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTcwMXB4IDEzMDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTAzN3B4IDE2MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3MXB4IDk5NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNjBweCAxNjM1cHggdmFyKC0tZm9udC1jb2xvciksIDExMTBweCAxMzEzcHggdmFyKC0tZm9udC1jb2xvciksIDQxMnB4IDE3ODNweCB2YXIoLS1mb250LWNvbG9yKSwgMTk0OXB4IDE3N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkwM3B4IDE4NTRweCB2YXIoLS1mb250LWNvbG9yKSwgNzAwcHggMTkzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAzNzhweCAxMjVweCB2YXIoLS1mb250LWNvbG9yKSwgMzA4cHggODM0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTExOHB4IDk2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzUwcHggMTkyOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3ODFweCAxODExcHggdmFyKC0tZm9udC1jb2xvciksIDU2MXB4IDEzN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc1N3B4IDExNDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTY3MHB4IDE5NzlweCB2YXIoLS1mb250LWNvbG9yKSwgMzQzcHggNzM5cHggdmFyKC0tZm9udC1jb2xvciksIDk0NXB4IDc5NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDU3NnB4IDE5MDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTA3OHB4IDE0MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4M3B4IDQ1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzY2cHggNDc0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjk3cHggMTg3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTJweCAxNjJweCB2YXIoLS1mb250LWNvbG9yKSwgMTYyNHB4IDE2MzNweCB2YXIoLS1mb250LWNvbG9yKSwgNTlweCA0NTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MnB4IDE4NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTkzM3B4IDQ5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTY2cHggMTk3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc1cHggMTY4OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc3OXB4IDMxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODU4cHggMTU0M3B4IHZhcigtLWZvbnQtY29sb3IpLCA3M3B4IDE1MDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTY5M3B4IDk3NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2ODNweCAxMDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTc2OHB4IDE2NTRweCB2YXIoLS1mb250LWNvbG9yKSwgNjU0cHggMTRweCB2YXIoLS1mb250LWNvbG9yKSwgNDk0cHggMTcxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY4OXB4IDE4OTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2MHB4IDI2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDMxcHggOTAzcHggdmFyKC0tZm9udC1jb2xvciksIDEyMDNweCAxMzkzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMzM3B4IDE0MjFweCB2YXIoLS1mb250LWNvbG9yKSwgMTExM3B4IDQxcHggdmFyKC0tZm9udC1jb2xvciksIDEyMDZweCAxNjQ1cHggdmFyKC0tZm9udC1jb2xvciksIDEzMjVweCAxNjM1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQycHggMzg4cHggdmFyKC0tZm9udC1jb2xvciksIDU3MnB4IDIxNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTM1cHggMjk2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MTlweCA0MDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc5cHggMTAwM3B4IHZhcigtLWZvbnQtY29sb3IpLCAzMjlweCA0NjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTc5MXB4IDE2NTJweCB2YXIoLS1mb250LWNvbG9yKSwgOTM1cHggMTgwMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMzBweCAxODIwcHggdmFyKC0tZm9udC1jb2xvciksIDQyMXB4IDE5MzNweCB2YXIoLS1mb250LWNvbG9yKSwgODI4cHggMzY1cHggdmFyKC0tZm9udC1jb2xvciksIDI3NXB4IDMxNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDcwN3B4IDk2MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjA1cHggMTU1NHB4IHZhcigtLWZvbnQtY29sb3IpLCA2MjVweCA1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MTdweCAxNjk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY2OXB4IDI0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTI1cHggMzIycHggdmFyKC0tZm9udC1jb2xvciksIDExNTRweCAxODAzcHggdmFyKC0tZm9udC1jb2xvciksIDE5MjlweCAyOTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjQ4cHggMjQwcHggdmFyKC0tZm9udC1jb2xvciksIDEwNDVweCAxNzU1cHggdmFyKC0tZm9udC1jb2xvciksIDE2NnB4IDk0MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODg4cHggMTc3M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY3OHB4IDE5NjNweCB2YXIoLS1mb250LWNvbG9yKSwgMTM3MHB4IDU2OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc0cHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzg2cHggNDYwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTFweCAzMDdweCB2YXIoLS1mb250LWNvbG9yKSwgNzg0cHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MzBweCAxMjU4cHggdmFyKC0tZm9udC1jb2xvciksIDE3MTJweCAzOTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MTZweCAxNzBweCB2YXIoLS1mb250LWNvbG9yKSwgMTc5N3B4IDE5MzJweCB2YXIoLS1mb250LWNvbG9yKSwgNTcycHggMjE5cHggdmFyKC0tZm9udC1jb2xvciksIDE1NTdweCAxODU2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjE4cHggOHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNDhweCAxMzM0cHggdmFyKC0tZm9udC1jb2xvciksIDQ2OXB4IDQxM3B4IHZhcigtLWZvbnQtY29sb3IpLCAzODVweCAxNzM4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTM1N3B4IDE4MThweCB2YXIoLS1mb250LWNvbG9yKSwgMjQwcHggOTQycHggdmFyKC0tZm9udC1jb2xvciksIDI0OHB4IDE4NDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzNXB4IDgwNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIzNnB4IDE1MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTQyOXB4IDE1NTZweCB2YXIoLS1mb250LWNvbG9yKSwgNzNweCAxNjMzcHggdmFyKC0tZm9udC1jb2xvciksIDEzOThweCAxMTIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjcxcHggMTMwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDA0cHggMTY2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NDBweCAxMDE4cHggdmFyKC0tZm9udC1jb2xvciksIDE2MDBweCAzNzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3ODVweCA1MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEycHggMTA4NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTE1cHggMTg4N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDYzcHggMTg0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY4N3B4IDExMTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTI2OHB4IDE3NjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTcyOXB4IDE0MjVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjg0cHggMTAyMnB4IHZhcigtLWZvbnQtY29sb3IpLCA4MDFweCA5NzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTk3NXB4IDEzMTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTM1NHB4IDgzNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDZweCAxNDg0cHggdmFyKC0tZm9udC1jb2xvciksIDEyODNweCAxNzg2cHggdmFyKC0tZm9udC1jb2xvciksIDExcHggNTIzcHggdmFyKC0tZm9udC1jb2xvciksIDE4NDJweCAyMzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzU1cHggNjU0cHggdmFyKC0tZm9udC1jb2xvciksIDQyOXB4IDdweCB2YXIoLS1mb250LWNvbG9yKSwgMTAzM3B4IDExMjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTU3cHggMjk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTQ1cHggNjM1cHggdmFyKC0tZm9udC1jb2xvciksIDUycHggMTA4MHB4IHZhcigtLWZvbnQtY29sb3IpLCA4MjdweCAxNTIwcHggdmFyKC0tZm9udC1jb2xvciksIDExMjFweCA0OTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5cHggMzA5cHggdmFyKC0tZm9udC1jb2xvciksIDE3NDRweCAxNTg2cHggdmFyKC0tZm9udC1jb2xvciksIDEwMTRweCA0MTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzNHB4IDUyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk1OHB4IDU1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDAzcHggMTQ5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAzODdweCA3MDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTUyMnB4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzNTVweCAyODJweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzMnB4IDYwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxODM4cHggNzkwcHggdmFyKC0tZm9udC1jb2xvciksIDI5MHB4IDI1OXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI5NXB4IDU5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjAxcHggNTM5cHggdmFyKC0tZm9udC1jb2xvciksIDE1NjFweCAxMjcycHggdmFyKC0tZm9udC1jb2xvciksIDM0cHggMTkyMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMjRweCA1NDNweCB2YXIoLS1mb250LWNvbG9yKSwgNDY3cHggMzY5cHggdmFyKC0tZm9udC1jb2xvciksIDcyMnB4IDMzM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc2cHggMTI1NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDc2NnB4IDk4M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNTgycHggMTI4NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMnB4IDUxMnB4IHZhcigtLWZvbnQtY29sb3IpLCA2MTdweCAxNDEwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjgycHggNTc3cHggdmFyKC0tZm9udC1jb2xvciksIDEzMzRweCAxNDM4cHggdmFyKC0tZm9udC1jb2xvciksIDQzOXB4IDMyN3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNjE3cHggMTY2MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY3M3B4IDEyOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OTRweCA5NDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTM4NnB4IDE5MDJweCB2YXIoLS1mb250LWNvbG9yKSwgMzdweCAxMzUzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ2N3B4IDEzNTNweCB2YXIoLS1mb250LWNvbG9yKSwgNDE2cHggMThweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3cHggMzQ0cHggdmFyKC0tZm9udC1jb2xvciksIDIwMHB4IDE4OThweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDkxcHggMTYxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA4MTFweCAzNDdweCB2YXIoLS1mb250LWNvbG9yKSwgOTI0cHggMTgyN3B4IHZhcigtLWZvbnQtY29sb3IpLCA5NDVweCAyMTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzM1cHggMTIyOHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNzlweCAxODkwcHggdmFyKC0tZm9udC1jb2xvciksIDc5cHggNzYxcHggdmFyKC0tZm9udC1jb2xvciksIDgyNXB4IDE4MzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTgwcHggMTU1OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzA4cHggMTU3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDg4cHggMTcyNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM4MnB4IDEyMDhweCB2YXIoLS1mb250LWNvbG9yKSwgNTIycHggNTk1cHggdmFyKC0tZm9udC1jb2xvciksIDEyNzdweCAxODk4cHggdmFyKC0tZm9udC1jb2xvciksIDM1NHB4IDU1MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MXB4IDE3ODRweCB2YXIoLS1mb250LWNvbG9yKSwgNjE0cHggMjUxcHggdmFyKC0tZm9udC1jb2xvciksIDUyNnB4IDE1NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTdweCAyMTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzlweCA5OTZweCB2YXIoLS1mb250LWNvbG9yKSwgNDY3cHggMTIwOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ0cHggMTgzOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTQwcHggMTA5M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDg1OHB4IDEwMDdweCB2YXIoLS1mb250LWNvbG9yKSwgMjAwcHggMTA2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA0MjNweCAxOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NDVweCA0MzlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc3cHggNjg5cHggdmFyKC0tZm9udC1jb2xvciksIDExMjBweCAxNDM3cHggdmFyKC0tZm9udC1jb2xvciksIDE4NzZweCA2NjhweCB2YXIoLS1mb250LWNvbG9yKSwgOTA3cHggMTMyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDM0M3B4IDE5NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTgxNnB4IDE1MDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTg0OXB4IDE3N3B4IHZhcigtLWZvbnQtY29sb3IpLCA2NDdweCA5MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5ODRweCAxMDEycHggdmFyKC0tZm9udC1jb2xvciksIDEzMzZweCAxMzAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyOHB4IDY0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMDVweCAxMDYwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMyNHB4IDgyNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjYzcHggMTMxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODAxcHggNjI5cHggdmFyKC0tZm9udC1jb2xvciksIDE2MTRweCAxNTU1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYzNHB4IDkwcHggdmFyKC0tZm9udC1jb2xvciksIDE2MDNweCA0NTJweCB2YXIoLS1mb250LWNvbG9yKSwgODkxcHggMTk4NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTU2cHggMTkwNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyMXB4IDY4cHggdmFyKC0tZm9udC1jb2xvciksIDE2NzZweCAxNzE0cHggdmFyKC0tZm9udC1jb2xvciksIDUxNnB4IDkzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ3cHggMTQ5MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NTVweCAxNTE5cHggdmFyKC0tZm9udC1jb2xvciksIDQ1cHggNjAycHggdmFyKC0tZm9udC1jb2xvciksIDIwNXB4IDEwMzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzkzcHggMTcycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU2MnB4IDE3MzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTA1NnB4IDExMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTEycHggMzc5cHggdmFyKC0tZm9udC1jb2xvciksIDE3OTVweCAxNjIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTg0OHB4IDYwN3B4IHZhcigtLWZvbnQtY29sb3IpLCAyNjJweCAxNzE5cHggdmFyKC0tZm9udC1jb2xvciksIDQ3N3B4IDk5MXB4IHZhcigtLWZvbnQtY29sb3IpLCA0ODNweCA4ODNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM5cHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk2cHggNjQ3cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDlweCAyNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDkxcHggMTk0NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExOXB4IDk5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzlweCAxNDcycHggdmFyKC0tZm9udC1jb2xvciksIDEzNDFweCA4MDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTU2NXB4IDE3MDBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MDdweCAxNTQ0cHggdmFyKC0tZm9udC1jb2xvciksIDE3NTRweCAzNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4OHB4IDk4MXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MDJweCAxOTk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTc1NXB4IDE2NjhweCB2YXIoLS1mb250LWNvbG9yKSwgMTg2cHggODc3cHggdmFyKC0tZm9udC1jb2xvciksIDEyMDJweCAxODgycHggdmFyKC0tZm9udC1jb2xvciksIDQ2MXB4IDEyMTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDAwcHggNzQ4cHggdmFyKC0tZm9udC1jb2xvciksIDE5NjlweCAxODk5cHggdmFyKC0tZm9udC1jb2xvciksIDgwOXB4IDUyMnB4IHZhcigtLWZvbnQtY29sb3IpLCA1MTRweCAxMjE5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzc0cHggMjc1cHggdmFyKC0tZm9udC1jb2xvciksIDkzOHB4IDE5NzNweCB2YXIoLS1mb250LWNvbG9yKSwgMzU3cHggNTUycHggdmFyKC0tZm9udC1jb2xvciksIDE0NHB4IDE3MjJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTcycHggOTEycHggdmFyKC0tZm9udC1jb2xvciksIDQwMnB4IDE4NThweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0NHB4IDExOTVweCB2YXIoLS1mb250LWNvbG9yKSwgNjY3cHggMTI1N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDcyN3B4IDE0OTZweCB2YXIoLS1mb250LWNvbG9yKSwgOTkzcHggMjMycHggdmFyKC0tZm9udC1jb2xvciksIDE3NzJweCAzMTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTA0MHB4IDE1OTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjA0cHggMTk3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjY4cHggNzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1NXB4IDEwNDhweCB2YXIoLS1mb250LWNvbG9yKSwgOTg2cHggMTcwN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk3OHB4IDE3MTBweCB2YXIoLS1mb250LWNvbG9yKSwgNzEzcHggMzYwcHggdmFyKC0tZm9udC1jb2xvciksIDQwN3B4IDg2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA0NjFweCA3MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyODRweCAxNjA4cHggdmFyKC0tZm9udC1jb2xvciksIDEwM3B4IDQzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjgzcHggMTMxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA5NzdweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTk2NnB4IDE1MTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4N3B4IDExMjlweCB2YXIoLS1mb250LWNvbG9yKSwgNzBweCAxMDk4cHggdmFyKC0tZm9udC1jb2xvciksIDExODlweCA4ODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTI2cHggMTczNHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMDlweCAxMjkycHggdmFyKC0tZm9udC1jb2xvciksIDg3OXB4IDc2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA2NXB4IDQ3M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMDNweCAxOTU5cHggdmFyKC0tZm9udC1jb2xvciksIDY1OHB4IDc5MXB4IHZhcigtLWZvbnQtY29sb3IpLCA0MDJweCAxNTc2cHggdmFyKC0tZm9udC1jb2xvciksIDM1cHggNjIycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTI5cHggMTU4OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjRweCA2NjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3NnB4IDEyOTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0MXB4IDUyNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI3MHB4IDEyOTdweCB2YXIoLS1mb250LWNvbG9yKSwgNDQwcHggODY1cHggdmFyKC0tZm9udC1jb2xvciksIDE1MDBweCA4MDJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgycHggMTc1NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyNjRweCA4OTJweCB2YXIoLS1mb250LWNvbG9yKSwgMjcycHggMTI0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjg5cHggMTUzNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTBweCAxNjQ2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTU1cHggMjQycHggdmFyKC0tZm9udC1jb2xvciksIDE0NTZweCAxNTk3cHggdmFyKC0tZm9udC1jb2xvciksIDE3MjdweCAxOTgzcHggdmFyKC0tZm9udC1jb2xvciksIDYzNXB4IDgwMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIyNnB4IDQ1NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzk2cHggMTcxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA4NDlweCAxODYzcHggdmFyKC0tZm9udC1jb2xvciksIDIzN3B4IDEyNjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MzlweCAxNDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyMnB4IDczNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjgwcHggMTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTMxOHB4IDI0MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MTlweCAxMTQ4cHggdmFyKC0tZm9udC1jb2xvciksIDMzM3B4IDEzOTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTk0OXB4IDU1M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxODc4cHggMTMzMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ2N3B4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODEycHggMTA4MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDY3cHggMTkzcHggdmFyKC0tZm9udC1jb2xvciksIDI0M3B4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ4M3B4IDE2MTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxNHB4IDkzM3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NTlweCAxODAwcHggdmFyKC0tZm9udC1jb2xvciksIDE4MjJweCA5OTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODc3cHggNTcycHggdmFyKC0tZm9udC1jb2xvciksIDU4MXB4IDEwODRweCB2YXIoLS1mb250LWNvbG9yKSwgMTA3cHggNzMycHggdmFyKC0tZm9udC1jb2xvciksIDY0MnB4IDE4MzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjZweCAxNDkzcHggdmFyKC0tZm9udC1jb2xvciksIDE1NTVweCAxOThweCB2YXIoLS1mb250LWNvbG9yKSwgODE5cHggMzA3cHggdmFyKC0tZm9udC1jb2xvciksIDk0N3B4IDM0NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDgyN3B4IDIyNHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjdweCAxMzk0cHggdmFyKC0tZm9udC1jb2xvciksIDU0MHB4IDQ2N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDkzcHggNDA1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE0MHB4IDkyN3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMzBweCA1MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMzNweCAxOTgwcHggdmFyKC0tZm9udC1jb2xvciksIDExNDdweCAxNjYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYxNnB4IDE0MzZweCB2YXIoLS1mb250LWNvbG9yKSwgNTI4cHggNzEwcHggdmFyKC0tZm9udC1jb2xvciksIDc5OHB4IDExMDBweCB2YXIoLS1mb250LWNvbG9yKSwgNTA1cHggMTQ4MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDg5OXB4IDY0MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTA5cHggMTk0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzExcHggOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDk3OXB4IDEzMDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzkzcHggOTY5cHggdmFyKC0tZm9udC1jb2xvciksIDE3OTNweCAxODg2cHggdmFyKC0tZm9udC1jb2xvciksIDI5MnB4IDM1N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMTk2cHggMTcxOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyOTBweCAxOTk0cHggdmFyKC0tZm9udC1jb2xvciksIDUzN3B4IDE5NzNweCB2YXIoLS1mb250LWNvbG9yKSwgMTE4MXB4IDE2NzRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNzQwcHggMTU2NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzA3cHggMjY1cHggdmFyKC0tZm9udC1jb2xvciksIDkyMnB4IDUyMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODkycHggNDcycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzg0cHggMTc0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAzOTJweCAxMDk4cHggdmFyKC0tZm9udC1jb2xvciksIDY0N3B4IDU0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzOTBweCAxNDk4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTI0NnB4IDEzOHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MzBweCA4NzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTkycHggMTQ3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzkwcHggMTc4OXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkyOHB4IDMxMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjUzcHggMTY0N3B4IHZhcigtLWZvbnQtY29sb3IpLCA3NDdweCAxOTIxcHggdmFyKC0tZm9udC1jb2xvciksIDE1NjFweCAxMDI1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTUzM3B4IDEyOTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTk4NXB4IDE5NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjhweCA3MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxMnB4IDE5MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA1MTJweCAxNzE3cHggdmFyKC0tZm9udC1jb2xvciksIDE1MjhweCA0ODNweCB2YXIoLS1mb250LWNvbG9yKSwgMzEzcHggMTY0MnB4IHZhcigtLWZvbnQtY29sb3IpLCAyODFweCAxODQ5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTIxMnB4IDc5OXB4IHZhcigtLWZvbnQtY29sb3IpLCA0MzVweCAxMTkxcHggdmFyKC0tZm9udC1jb2xvciksIDE0MjJweCA2MTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxOHB4IDE5NjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MTFweCA5NDRweCB2YXIoLS1mb250LWNvbG9yKSwgMjEwcHggNjM2cHggdmFyKC0tZm9udC1jb2xvciksIDE1MDJweCAxMjk1cHggdmFyKC0tZm9udC1jb2xvciksIDE0MzRweCAzNDlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NjlweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpLCA3NDdweCAxMDUzcHggdmFyKC0tZm9udC1jb2xvciksIDc4OXB4IDUwNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDM2cHggMTI2NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4OTNweCAxMjI1cHggdmFyKC0tZm9udC1jb2xvciksIDEzOTRweCAxNzg4cHggdmFyKC0tZm9udC1jb2xvciksIDExMDhweCAxMzE3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY3M3B4IDEzOTVweCB2YXIoLS1mb250LWNvbG9yKSwgODU0cHggMTAxMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzA1cHggODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTg1OHB4IDE0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE3MjlweCAzNDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTM4OHB4IDY2NHB4IHZhcigtLWZvbnQtY29sb3IpLCA4OTVweCA0MDZweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ3OXB4IDE1N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDFweCAxMTU3cHggdmFyKC0tZm9udC1jb2xvciksIDU1MnB4IDE5MDBweCB2YXIoLS1mb250LWNvbG9yKSwgNTE2cHggMzY0cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDdweCAxODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDI3cHggMTA3MXB4IHZhcigtLWZvbnQtY29sb3IpLCA3ODVweCA3MjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTA4MHB4IDE3MTBweCB2YXIoLS1mb250LWNvbG9yKSwgNTA0cHggMjA0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE3N3B4IDE2MjJweCB2YXIoLS1mb250LWNvbG9yKSwgNjU3cHggMzRweCB2YXIoLS1mb250LWNvbG9yKSwgMTI5NnB4IDEwOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ4cHggMTgwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTIxMnB4IDE1NjhweCB2YXIoLS1mb250LWNvbG9yKSwgNjY3cHggMTU2MnB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTVweCA4NDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTYwOHB4IDEyNDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NTFweCA4ODJweCB2YXIoLS1mb250LWNvbG9yKSwgODdweCAxNjdweCB2YXIoLS1mb250LWNvbG9yKSwgNjA3cHggMTM2OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzYzcHggMTIwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MzZweCAzMTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2OHB4IDE3MDNweCB2YXIoLS1mb250LWNvbG9yKSwgODMwcHggMTE1NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzIxcHggMTM5OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MDFweCAxMjgwcHggdmFyKC0tZm9udC1jb2xvciksIDk3NnB4IDg3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzQzcHggMjU0cHggdmFyKC0tZm9udC1jb2xvciksIDEwMjBweCAxODE1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY3MHB4IDE3NjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTg5MHB4IDczNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzc5cHggMTM2cHggdmFyKC0tZm9udC1jb2xvciksIDE4NjRweCA2OTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyMDZweCA5NjVweCB2YXIoLS1mb250LWNvbG9yKSwgMTQwNHB4IDE5MzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTkyM3B4IDEzNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ3cHggNjgycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTE5cHggMTcwOHB4IHZhcigtLWZvbnQtY29sb3IpLCA2NDVweCA3NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTE2NHB4IDEyMDRweCB2YXIoLS1mb250LWNvbG9yKSwgODM0cHggMzIzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTcycHggMTM1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyMTNweCA5NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzN3B4IDE5MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyODVweCAxODA2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTA0N3B4IDEyOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTU0OHB4IDgyNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzMwcHggMzI0cHggdmFyKC0tZm9udC1jb2xvciksIDEzNDZweCAxOTA5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzcycHggMjcwcHggdmFyKC0tZm9udC1jb2xvciksIDM0NXB4IDExOTBweCB2YXIoLS1mb250LWNvbG9yKSwgNDc4cHggMTQzM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNDc5cHggMjVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTk0cHggMTgzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzQ0cHggNzMycHggdmFyKC0tZm9udC1jb2xvciksIDIwcHggMTYzNXB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTBweCAxNzk1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU5NHB4IDU2OXB4IHZhcigtLWZvbnQtY29sb3IpLCA1NzlweCAyNDVweCB2YXIoLS1mb250LWNvbG9yKSwgMTM5OHB4IDczM3B4IHZhcigtLWZvbnQtY29sb3IpLCA0MDhweCAxMzUycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTc3NHB4IDEyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTUycHggMTM3MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjk4cHggMTgxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MTBweCAxNDUwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjY1cHggMjg2cHggdmFyKC0tZm9udC1jb2xvciksIDQ5M3B4IDE3MjBweCB2YXIoLS1mb250LWNvbG9yKSwgNzg2cHggNXB4IHZhcigtLWZvbnQtY29sb3IpLCA2MzdweCAxMTQwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzY0cHggMzI0cHggdmFyKC0tZm9udC1jb2xvciksIDkyN3B4IDMxMHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MzhweCAxNDI0cHggdmFyKC0tZm9udC1jb2xvciksIDE4ODRweCA3NDRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5MTNweCA0NjJweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzMXB4IDE5MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTUyN3B4IDI0OXB4IHZhcigtLWZvbnQtY29sb3IpLCAzNnB4IDEzODFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTk3cHggNTgxcHggdmFyKC0tZm9udC1jb2xvciksIDE1MzBweCAzNTVweCB2YXIoLS1mb250LWNvbG9yKSwgOTQ5cHggNDU5cHggdmFyKC0tZm9udC1jb2xvciksIDc5OXB4IDgyOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI0MnB4IDE0NzFweCB2YXIoLS1mb250LWNvbG9yKSwgNjU0cHggNzk3cHggdmFyKC0tZm9udC1jb2xvciksIDc5NnB4IDU5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzY1cHggNjc4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzUycHggMjNweCB2YXIoLS1mb250LWNvbG9yKSwgMTYzMHB4IDU0MXB4IHZhcigtLWZvbnQtY29sb3IpLCA5ODJweCA3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzMzcHggMTgzMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIxcHggNDEycHggdmFyKC0tZm9udC1jb2xvciksIDc3NXB4IDk5OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMzVweCAxOTQ1cHggdmFyKC0tZm9udC1jb2xvciksIDI2NHB4IDU4M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1OHB4IDEzMTFweCB2YXIoLS1mb250LWNvbG9yKSwgNTI4cHggMTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NzhweCA1NzRweCB2YXIoLS1mb250LWNvbG9yKSwgNzE3cHggMTIwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDczNHB4IDE1OTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1NXB4IDgyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNnB4IDE5NDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTYyNXB4IDExNzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM2cHggNjkwcHggdmFyKC0tZm9udC1jb2xvciksIDE1ODVweCAxNTkwcHggdmFyKC0tZm9udC1jb2xvciksIDE3MzdweCAxNzI4cHggdmFyKC0tZm9udC1jb2xvciksIDcyMXB4IDY5OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4MDRweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksIDE2NnB4IDk4MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODUwcHggMjMwcHggdmFyKC0tZm9udC1jb2xvciksIDMzMHB4IDE3MTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5NXB4IDc5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ4cHggMTA3OHB4IHZhcigtLWZvbnQtY29sb3IpLCA0NjlweCA5MzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTI2OXB4IDE4OTlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5NTVweCAxMjIwcHggdmFyKC0tZm9udC1jb2xvciksIDExMzdweCAxMDc1cHggdmFyKC0tZm9udC1jb2xvciksIDMxMnB4IDEyOTNweCB2YXIoLS1mb250LWNvbG9yKSwgOTg2cHggMTc2MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMDNweCAxMjM4cHggdmFyKC0tZm9udC1jb2xvciksIDQyOHB4IDE5OTNweCB2YXIoLS1mb250LWNvbG9yKSwgMzU1cHggNTcwcHggdmFyKC0tZm9udC1jb2xvciksIDk3N3B4IDE4MzZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzk1cHggMTA5MnB4IHZhcigtLWZvbnQtY29sb3IpLCAyNzZweCA5MTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTc0M3B4IDY1NnB4IHZhcigtLWZvbnQtY29sb3IpLCA3NzNweCA1MDJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjg2cHggMTMyMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTE2cHggMTk0NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzM0cHggNTAxcHggdmFyKC0tZm9udC1jb2xvciksIDI2NnB4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQ1NXB4IDY1NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OThweCA3MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDU5cHggMTI1OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDAycHggMTY4N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDIzNnB4IDEzMjlweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ1NXB4IDc4NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDZweCAxMjI4cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCA4MjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMDYycHggMTAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyMjBweCA5NTNweCB2YXIoLS1mb250LWNvbG9yKSwgMjBweCAxODI2cHggdmFyKC0tZm9udC1jb2xvciksIDM2cHggMTA2M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1MjVweCAzMzhweCB2YXIoLS1mb250LWNvbG9yKSwgNzkwcHggMTUyMXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NDFweCAxMDk5cHggdmFyKC0tZm9udC1jb2xvciksIDI4OHB4IDE0ODlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3MDBweCAxMDYwcHggdmFyKC0tZm9udC1jb2xvciksIDM5MHB4IDEwNzFweCB2YXIoLS1mb250LWNvbG9yKSwgNDExcHggMTAzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODUzcHggMTA3MnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0NDZweCAxMDg1cHggdmFyKC0tZm9udC1jb2xvciksIDExNjRweCA4NzRweCB2YXIoLS1mb250LWNvbG9yKSwgOTI0cHggOTI1cHggdmFyKC0tZm9udC1jb2xvciksIDI5MXB4IDI3MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyNTdweCAxOTY0cHggdmFyKC0tZm9udC1jb2xvciksIDE1ODBweCAxMzUycHggdmFyKC0tZm9udC1jb2xvciksIDE1MDdweCAxMjE2cHggdmFyKC0tZm9udC1jb2xvciksIDIxMXB4IDk1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk4NXB4IDExOTVweCB2YXIoLS1mb250LWNvbG9yKSwgOTc1cHggMTY0MHB4IHZhcigtLWZvbnQtY29sb3IpLCA1MThweCAxMDFweCB2YXIoLS1mb250LWNvbG9yKSwgNjYzcHggMTM5NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDkxNHB4IDUzMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDVweCAxMzIwcHggdmFyKC0tZm9udC1jb2xvciksIDY5cHggMTM5N3B4IHZhcigtLWZvbnQtY29sb3IpLCA5ODJweCA1MjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyNTdweCA3MjVweCB2YXIoLS1mb250LWNvbG9yKSwgMTU5OXB4IDgzMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjM2cHggMTUxM3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjUwcHggMTE1OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMzJweCA2MDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzcHggMTAycHggdmFyKC0tZm9udC1jb2xvciksIDEwNTdweCAzMThweCB2YXIoLS1mb250LWNvbG9yKSwgMTI0N3B4IDE4MzVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTgzcHggMTExMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc3cHggMTQ1NXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjFweCAxNzcwcHggdmFyKC0tZm9udC1jb2xvciksIDgwNnB4IDEzNTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTM4cHggMTk5MnB4IHZhcigtLWZvbnQtY29sb3IpLCA4NTVweCAxMjYwcHggdmFyKC0tZm9udC1jb2xvciksIDkwMnB4IDEzNDVweCB2YXIoLS1mb250LWNvbG9yKSwgNjU4cHggMTkwOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE4NDVweCA2NzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzEycHggMTQ4MnB4IHZhcigtLWZvbnQtY29sb3IpLCA1OTVweCA5NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTc4NHB4IDE5OTJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODQ3cHggMTc4NXB4IHZhcigtLWZvbnQtY29sb3IpLCA2OTFweCAxMDA0cHggdmFyKC0tZm9udC1jb2xvciksIDE3NXB4IDExNzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2NnB4IDE5MTFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0MXB4IDYxcHggdmFyKC0tZm9udC1jb2xvciksIDk3MXB4IDEwODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzMHB4IDE0NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMTM1MXB4IDE1MThweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjU3cHggOTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTM5NXB4IDE0OThweCB2YXIoLS1mb250LWNvbG9yKSwgMTExN3B4IDI1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzc5cHggNTk3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTM0NnB4IDcyOXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTA4cHggMTE0NHB4IHZhcigtLWZvbnQtY29sb3IpLCA0MDJweCA2OTFweCB2YXIoLS1mb250LWNvbG9yKSwgNzJweCA0OTZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjczcHggMTYwNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDk3cHggOTc0cHggdmFyKC0tZm9udC1jb2xvciksIDE4NjVweCAxNjY0cHggdmFyKC0tZm9udC1jb2xvciksIDg4cHggODA2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTE4cHggNzdweCB2YXIoLS1mb250LWNvbG9yKSwgMjQ0cHggMTExOHB4IHZhcigtLWZvbnQtY29sb3IpLCAyNTZweCAxODIwcHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCAxODQwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjA1cHggMTg1MXB4IHZhcigtLWZvbnQtY29sb3IpLCA2MzRweCAzODNweCB2YXIoLS1mb250LWNvbG9yKSwgODY1cHggMzdweCB2YXIoLS1mb250LWNvbG9yKSwgOTQzcHggMTAyNHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NTFweCAxNzdweCB2YXIoLS1mb250LWNvbG9yKSwgMTA5N3B4IDUyM3B4IHZhcigtLWZvbnQtY29sb3IpLCA5ODVweCAxNzAwcHggdmFyKC0tZm9udC1jb2xvciksIDEyNDNweCAxMjJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NjhweCAxMDcwcHggdmFyKC0tZm9udC1jb2xvciksIDQ2OHB4IDE5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMjBweCAxODY3cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTBweCAxODVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAzODBweCAxNjE2cHggdmFyKC0tZm9udC1jb2xvciksIDQ2OHB4IDEyOTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyMnB4IDE3NDNweCB2YXIoLS1mb250LWNvbG9yKSwgODg0cHggMjk5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMwMHB4IDE5MTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTg2MHB4IDM5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjcwcHggOTkwcHggdmFyKC0tZm9udC1jb2xvciksIDUyOXB4IDczM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NzVweCAxMzQ3cHggdmFyKC0tZm9udC1jb2xvciksIDE4ODVweCA2ODVweCB2YXIoLS1mb250LWNvbG9yKSwgMjI2cHggNTA2cHggdmFyKC0tZm9udC1jb2xvciksIDY1MXB4IDg3OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMjNweCA2ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTI4NHB4IDY4MHB4IHZhcigtLWZvbnQtY29sb3IpLCAyMzhweCAxOTY3cHggdmFyKC0tZm9udC1jb2xvciksIDkxMXB4IDE3NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMTFweCA1MjFweCB2YXIoLS1mb250LWNvbG9yKSwgMTE1MHB4IDg1cHggdmFyKC0tZm9udC1jb2xvciksIDc5NHB4IDUwMnB4IHZhcigtLWZvbnQtY29sb3IpLCA0ODRweCAxODU2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTgwOXB4IDM2OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTJweCA5NTNweCB2YXIoLS1mb250LWNvbG9yKSwgNTkwcHggMTAwOXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjU1cHggMzExcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTAwcHggMTAyNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxODAzcHggMzUycHggdmFyKC0tZm9udC1jb2xvciksIDg2NXB4IDMwNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc3cHggMTAxOXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMzVweCA4NzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTY0N3B4IDEyOThweCB2YXIoLS1mb250LWNvbG9yKSwgMTIzM3B4IDEzODdweCB2YXIoLS1mb250LWNvbG9yKSwgNjk4cHggMTAzNnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY1OXB4IDE4NjBweCB2YXIoLS1mb250LWNvbG9yKSwgMzg4cHggMTQxMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjEycHggNDU4cHggdmFyKC0tZm9udC1jb2xvciksIDc1NXB4IDE0NjhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA2OTZweCAxNjU0cHggdmFyKC0tZm9udC1jb2xvciksIDExNDRweCA2MHB4IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4jc3RhcnMyIHtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogYW5pbVN0YXIgMTAwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYm94LXNoYWRvdzogMTA0OHB4IDMyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc1cHggMTY2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAzMzJweCAxMzY0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgODc4cHggMzQwcHggdmFyKC0tZm9udC1jb2xvciksIDU2OXB4IDEwMzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTAyMnB4IDE2ODRweCB2YXIoLS1mb250LWNvbG9yKSwgMTA0NnB4IDEwMDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjFweCA5NzlweCB2YXIoLS1mb250LWNvbG9yKSwgMTA0NHB4IDEwNjlweCB2YXIoLS1mb250LWNvbG9yKSwgNDYzcHggMzgxcHggdmFyKC0tZm9udC1jb2xvciksIDQyM3B4IDExMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDUyM3B4IDExNzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzc5cHggNjU0cHggdmFyKC0tZm9udC1jb2xvciksIDEzOThweCA2OTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTA4NXB4IDE0NjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTk5cHggMTg2OXB4IHZhcigtLWZvbnQtY29sb3IpLCA4MDFweCAxODgycHggdmFyKC0tZm9udC1jb2xvciksIDc3OXB4IDEyMzFweCB2YXIoLS1mb250LWNvbG9yKSwgNTUycHggOTMycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTA1N3B4IDExOTZweCB2YXIoLS1mb250LWNvbG9yKSwgMjgycHggMTI4MHB4IHZhcigtLWZvbnQtY29sb3IpLCA0OTZweCAxOTg2cHggdmFyKC0tZm9udC1jb2xvciksIDE4MzNweCAxMTIwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTgwMnB4IDEyOTNweCB2YXIoLS1mb250LWNvbG9yKSwgNnB4IDE2OTZweCB2YXIoLS1mb250LWNvbG9yKSwgNDEycHggMTkwMnB4IHZhcigtLWZvbnQtY29sb3IpLCA2MDVweCA0MzhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyNHB4IDEyMTJweCB2YXIoLS1mb250LWNvbG9yKSwgMjM0cHggMTMyMHB4IHZhcigtLWZvbnQtY29sb3IpLCA1NDRweCAzNDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEwN3B4IDE3MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MDNweCAxOTZweCB2YXIoLS1mb250LWNvbG9yKSwgOTA1cHggNjQ4cHggdmFyKC0tZm9udC1jb2xvciksIDY4cHggMTQ1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA2NDlweCAxOTY5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNzQ0cHggNjc1cHggdmFyKC0tZm9udC1jb2xvciksIDExMjdweCA0NzhweCB2YXIoLS1mb250LWNvbG9yKSwgNzE0cHggMTgxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDg2cHggNTI2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjcwcHggMTYzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTMxcHggMTQ5cHggdmFyKC0tZm9udC1jb2xvciksIDE4MDdweCAzNzhweCB2YXIoLS1mb250LWNvbG9yKSwgOHB4IDM5MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0MTVweCA2OTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ3M3B4IDEyMTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTU5MHB4IDE0MXB4IHZhcigtLWZvbnQtY29sb3IpLCAyNzBweCAxNzA1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjlweCAxNDIzcHggdmFyKC0tZm9udC1jb2xvciksIDExMDhweCAxMDUzcHggdmFyKC0tZm9udC1jb2xvciksIDE5NDZweCAxMjhweCB2YXIoLS1mb250LWNvbG9yKSwgMzcxcHggMzcxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ5MHB4IDIyMHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNTdweCAxODg1cHggdmFyKC0tZm9udC1jb2xvciksIDM2M3B4IDM2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxODk2cHggMTI1NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NzlweCAxMDUwcHggdmFyKC0tZm9udC1jb2xvciksIDk0N3B4IDEzNDJweCB2YXIoLS1mb250LWNvbG9yKSwgMTc1NHB4IDI0MnB4IHZhcigtLWZvbnQtY29sb3IpLCA1MTRweCA5NzRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA2NXB4IDE0NzdweCB2YXIoLS1mb250LWNvbG9yKSwgMTg0MHB4IDU0N3B4IHZhcigtLWZvbnQtY29sb3IpLCA5NTBweCA2OTVweCB2YXIoLS1mb250LWNvbG9yKSwgNDU5cHggMTE1MHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExMjRweCAxNTAycHggdmFyKC0tZm9udC1jb2xvciksIDQ4MXB4IDk0MHB4IHZhcigtLWZvbnQtY29sb3IpLCA2ODBweCA4MzlweCB2YXIoLS1mb250LWNvbG9yKSwgNzk3cHggMTE2OXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5NzdweCAxNDkxcHggdmFyKC0tZm9udC1jb2xvciksIDczNHB4IDE3MjRweCB2YXIoLS1mb250LWNvbG9yKSwgMjEwcHggMjk4cHggdmFyKC0tZm9udC1jb2xvciksIDgxNnB4IDYyOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY4NnB4IDc3MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzIxcHggMjY3cHggdmFyKC0tZm9udC1jb2xvciksIDE2NjNweCA1MTFweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ4MXB4IDExNDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA1ODJweCAyNDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTMwOHB4IDk1M3B4IHZhcigtLWZvbnQtY29sb3IpLCA2MjhweCA2NTdweCB2YXIoLS1mb250LWNvbG9yKSwgODk3cHggMTUzNXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI3MHB4IDkzMXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OTFweCA0NjdweCB2YXIoLS1mb250LWNvbG9yKSwgMTMzNnB4IDE3MzJweCB2YXIoLS1mb250LWNvbG9yKSwgMTAxM3B4IDE2NTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTExcHggOTU2cHggdmFyKC0tZm9udC1jb2xvciksIDU4N3B4IDgxNnB4IHZhcigtLWZvbnQtY29sb3IpLCA4M3B4IDQ1NnB4IHZhcigtLWZvbnQtY29sb3IpLCA5MzBweCAxNDc4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU4N3B4IDE2OTRweCB2YXIoLS1mb250LWNvbG9yKSwgNjE0cHggMTIwMHB4IHZhcigtLWZvbnQtY29sb3IpLCAzMDJweCAxNzgycHggdmFyKC0tZm9udC1jb2xvciksIDE3MTFweCAxNDMycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDQzcHggOTA0cHggdmFyKC0tZm9udC1jb2xvciksIDE2NjZweCA3MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4OHB4IDExNjdweCB2YXIoLS1mb250LWNvbG9yKSwgMjczcHggMTA3NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2NzlweCA0NjFweCB2YXIoLS1mb250LWNvbG9yKSwgNzIxcHggNjY0cHggdmFyKC0tZm9udC1jb2xvciksIDEyMDJweCAxMHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjZweCAxMTI2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzMxcHggMTYyOHB4IHZhcigtLWZvbnQtY29sb3IpLCA0MzBweCAxNTY1cHggdmFyKC0tZm9udC1jb2xvciksIDE1ODVweCA1MDlweCB2YXIoLS1mb250LWNvbG9yKSwgNjQwcHggMzhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MjJweCA4MzdweCB2YXIoLS1mb250LWNvbG9yKSwgMTc2MHB4IDE2NjRweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyMnB4IDE0NThweCB2YXIoLS1mb250LWNvbG9yKSwgMzk4cHggMTMxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjg5cHggMjg1cHggdmFyKC0tZm9udC1jb2xvciksIDQ2MHB4IDY1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjI3cHggMzY1cHggdmFyKC0tZm9udC1jb2xvciksIDM0OHB4IDE2NDhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4MTlweCAxOTQ2cHggdmFyKC0tZm9udC1jb2xvciksIDk4MXB4IDE5MTdweCB2YXIoLS1mb250LWNvbG9yKSwgMzIzcHggNzZweCB2YXIoLS1mb250LWNvbG9yKSwgOTc5cHggNjg0cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgODg3cHggNTM2cHggdmFyKC0tZm9udC1jb2xvciksIDEzNDhweCAxNTk2cHggdmFyKC0tZm9udC1jb2xvciksIDEwNTVweCA2NjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTQwMnB4IDE3OTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzAwcHggMTA1NXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MzdweCAyMzhweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ3NHB4IDE4MTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTE0NHB4IDE3MTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjI5cHggMTA4N3B4IHZhcigtLWZvbnQtY29sb3IpLCA5MTFweCA5MTlweCB2YXIoLS1mb250LWNvbG9yKSwgNzcxcHggODE5cHggdmFyKC0tZm9udC1jb2xvciksIDQwM3B4IDcyMHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2M3B4IDczNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDYycHggMjM4cHggdmFyKC0tZm9udC1jb2xvciksIDE3NzRweCA4MThweCB2YXIoLS1mb250LWNvbG9yKSwgMTg3NHB4IDExNzhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTc3cHggNjk5cHggdmFyKC0tZm9udC1jb2xvciksIDEyNDRweCAxMjQ0cHggdmFyKC0tZm9udC1jb2xvciksIDEzNzFweCA1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA1NjRweCAxNTE1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTgyNHB4IDQ4N3B4IHZhcigtLWZvbnQtY29sb3IpLCA5MjlweCA3MDJweCB2YXIoLS1mb250LWNvbG9yKSwgMzk0cHggMTM0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTYxcHggNjQxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjE5cHggMTg0MXB4IHZhcigtLWZvbnQtY29sb3IpLCAzNThweCA5NDFweCB2YXIoLS1mb250LWNvbG9yKSwgMTQwcHggMTc1OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDE5cHggMTM0NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI3NHB4IDQzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDMzcHggMTYwNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzk4cHggMTQyNnB4IHZhcigtLWZvbnQtY29sb3IpLCAyOTRweCAxODQ4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY4MXB4IDE4NzdweCB2YXIoLS1mb250LWNvbG9yKSwgMTM0NHB4IDE4MjRweCB2YXIoLS1mb250LWNvbG9yKSwgMTQzOXB4IDE2MzJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjFweCAxMDEycHggdmFyKC0tZm9udC1jb2xvciksIDEzMDhweCA1ODhweCB2YXIoLS1mb250LWNvbG9yKSwgMTc4OXB4IDU4MnB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjFweCAxOTEwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzE4cHggMjE4cHggdmFyKC0tZm9udC1jb2xvciksIDYwN3B4IDMxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA0OTVweCA1MzVweCB2YXIoLS1mb250LWNvbG9yKSwgMTU1MnB4IDE1NzVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTYycHggNjdweCB2YXIoLS1mb250LWNvbG9yKSwgNDAzcHggOTI2cHggdmFyKC0tZm9udC1jb2xvciksIDEwOTZweCAxODAwcHggdmFyKC0tZm9udC1jb2xvciksIDE4MTRweCAxNzA5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTg4MnB4IDE4MzFweCB2YXIoLS1mb250LWNvbG9yKSwgNTMzcHggNDZweCB2YXIoLS1mb250LWNvbG9yKSwgODIzcHggOTY5cHggdmFyKC0tZm9udC1jb2xvciksIDUzMHB4IDE2NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMzBweCAzNTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTY4MXB4IDMxM3B4IHZhcigtLWZvbnQtY29sb3IpLCAzMzhweCAxMTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTYwN3B4IDIxMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE3MThweCAxMTg0cHggdmFyKC0tZm9udC1jb2xvciksIDE1ODlweCA2NTlweCB2YXIoLS1mb250LWNvbG9yKSwgMjc4cHggMzU1cHggdmFyKC0tZm9udC1jb2xvciksIDQ2NHB4IDE0NjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTY1cHggMjc3cHggdmFyKC0tZm9udC1jb2xvciksIDk1MHB4IDY5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzQ2cHggMjkzcHggdmFyKC0tZm9udC1jb2xvciksIDc5M3B4IDkxMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDUyOHB4IDc3M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxODgzcHggMTY5NHB4IHZhcigtLWZvbnQtY29sb3IpLCA3NDhweCAxODJweCB2YXIoLS1mb250LWNvbG9yKSwgMTkyNHB4IDE1MzFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMDBweCA2MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ3M3B4IDE0NDVweCB2YXIoLS1mb250LWNvbG9yKSwgMTI2NHB4IDEyNDRweCB2YXIoLS1mb250LWNvbG9yKSwgODUwcHggMTM3N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDk4N3B4IDE5NzZweCB2YXIoLS1mb250LWNvbG9yKSwgOTMzcHggMTc2MXB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjJweCAxMjcwcHggdmFyKC0tZm9udC1jb2xvciksIDUwMHB4IDM5NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMjRweCA4cHggdmFyKC0tZm9udC1jb2xvciksIDE5NjdweCAxODE0cHggdmFyKC0tZm9udC1jb2xvciksIDEwNzJweCAxNDAxcHggdmFyKC0tZm9udC1jb2xvciksIDk2MXB4IDM3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTU2cHggODFweCB2YXIoLS1mb250LWNvbG9yKSwgMTkxNXB4IDUwMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDc2cHggMTg0NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTJweCAxNjY5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTg2cHggMTUyOXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjY3cHggMTEzN3B4IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4jc3RhcnMyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMDAwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAxNDQ4cHggMzIwcHggdmFyKC0tZm9udC1jb2xvciksIDE3NzVweCAxNjYzcHggdmFyKC0tZm9udC1jb2xvciksIDMzMnB4IDEzNjRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4NzhweCAzNDBweCB2YXIoLS1mb250LWNvbG9yKSwgNTY5cHggMTgzMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDIycHggMTY4NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQ2cHggMTkwN3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyMXB4IDk3OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDQ0cHggMTA2OXB4IHZhcigtLWZvbnQtY29sb3IpLCA0NjNweCAzODFweCB2YXIoLS1mb250LWNvbG9yKSwgNDIzcHggMTEycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTIzcHggMTE3OXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NzlweCA2NTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTM5OHB4IDY5NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDg1cHggMTQ2NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1OTlweCAxODY5cHggdmFyKC0tZm9udC1jb2xvciksIDgwMXB4IDE4ODJweCB2YXIoLS1mb250LWNvbG9yKSwgNzc5cHggMTIzMXB4IHZhcigtLWZvbnQtY29sb3IpLCA1NTJweCA5MzJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMDU3cHggMTE5NnB4IHZhcigtLWZvbnQtY29sb3IpLCAyODJweCAxMjgwcHggdmFyKC0tZm9udC1jb2xvciksIDQ5NnB4IDE5ODZweCB2YXIoLS1mb250LWNvbG9yKSwgMTgzM3B4IDExMjBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODAycHggMTI5M3B4IHZhcigtLWZvbnQtY29sb3IpLCA2cHggMTY5NnB4IHZhcigtLWZvbnQtY29sb3IpLCA0MTJweCAxOTAycHggdmFyKC0tZm9udC1jb2xvciksIDYwNXB4IDQzOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDI0cHggMTIxMnB4IHZhcigtLWZvbnQtY29sb3IpLCAyMzRweCAxMzIwcHggdmFyKC0tZm9udC1jb2xvciksIDU0NHB4IDM0NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTA3cHggMTcwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYwM3B4IDE5NnB4IHZhcigtLWZvbnQtY29sb3IpLCA5MDVweCA2NDhweCB2YXIoLS1mb250LWNvbG9yKSwgNjhweCAxNDU4cHggdmFyKC0tZm9udC1jb2xvciksIDY0OXB4IDE5NjlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA3NDRweCA2NzVweCB2YXIoLS1mb250LWNvbG9yKSwgMTEyN3B4IDQ3OHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MTRweCAxODE0cHggdmFyKC0tZm9udC1jb2xvciksIDE0ODZweCA1MjZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyNzBweCAxNjM2cHggdmFyKC0tZm9udC1jb2xvciksIDE5MzFweCAxNDlweCB2YXIoLS1mb250LWNvbG9yKSwgMTgwN3B4IDM3OHB4IHZhcigtLWZvbnQtY29sb3IpLCA4cHggMzkwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQxNXB4IDY5OXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDczcHggMTIxMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTkwcHggMTQxcHggdmFyKC0tZm9udC1jb2xvciksIDI3MHB4IDE3MDVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA2OXB4IDE0MjNweCB2YXIoLS1mb250LWNvbG9yKSwgMTEwOHB4IDEwNTNweCB2YXIoLS1mb250LWNvbG9yKSwgMTk0NnB4IDEyOHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNzFweCAzNzFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDkwcHggMjIwcHggdmFyKC0tZm9udC1jb2xvciksIDM1N3B4IDE4ODVweCB2YXIoLS1mb250LWNvbG9yKSwgMzYzcHggMzYzcHggdmFyKC0tZm9udC1jb2xvciksIDE4OTZweCAxMjU2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTk3OXB4IDEwNTBweCB2YXIoLS1mb250LWNvbG9yKSwgOTQ3cHggMTM0MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzU0cHggMjQycHggdmFyKC0tZm9udC1jb2xvciksIDUxNHB4IDk3NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDY1cHggMTQ3N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxODQwcHggNTQ3cHggdmFyKC0tZm9udC1jb2xvciksIDk1MHB4IDY5NXB4IHZhcigtLWZvbnQtY29sb3IpLCA0NTlweCAxMTUwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTEyNHB4IDE1MDJweCB2YXIoLS1mb250LWNvbG9yKSwgNDgxcHggOTQwcHggdmFyKC0tZm9udC1jb2xvciksIDY4MHB4IDgzOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3OTdweCAxMTY5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTk3N3B4IDE0OTFweCB2YXIoLS1mb250LWNvbG9yKSwgNzM0cHggMTcyNHB4IHZhcigtLWZvbnQtY29sb3IpLCAyMTBweCAyOThweCB2YXIoLS1mb250LWNvbG9yKSwgODE2cHggNjI4cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNjg2cHggNzcwcHggdmFyKC0tZm9udC1jb2xvciksIDE3MjFweCAyNjdweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2M3B4IDUxMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDgxcHggMTE0MXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDU4MnB4IDI0OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMzA4cHggOTUzcHggdmFyKC0tZm9udC1jb2xvciksIDYyOHB4IDY1N3B4IHZhcigtLWZvbnQtY29sb3IpLCA4OTdweCAxNTM1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjcwcHggOTMxcHggdmFyKC0tZm9udC1jb2xvciksIDc5MXB4IDQ2N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMzM2cHggMTczMnB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDEzcHggMTY1M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE5MTFweCA5NTZweCB2YXIoLS1mb250LWNvbG9yKSwgNTg3cHggODE2cHggdmFyKC0tZm9udC1jb2xvciksIDgzcHggNDU2cHggdmFyKC0tZm9udC1jb2xvciksIDkzMHB4IDE0NzhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTg3cHggMTY5NHB4IHZhcigtLWZvbnQtY29sb3IpLCA2MTRweCAxMjAwcHggdmFyKC0tZm9udC1jb2xvciksIDMwMnB4IDE3ODJweCB2YXIoLS1mb250LWNvbG9yKSwgMTcxMXB4IDE0MzJweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA0NDNweCA5MDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTY2NnB4IDcxNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTg4cHggMTE2N3B4IHZhcigtLWZvbnQtY29sb3IpLCAyNzNweCAxMDc1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTY3OXB4IDQ2MXB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjFweCA2NjRweCB2YXIoLS1mb250LWNvbG9yKSwgMTIwMnB4IDEwcHggdmFyKC0tZm9udC1jb2xvciksIDE2NnB4IDExMjZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAzMzFweCAxNjI4cHggdmFyKC0tZm9udC1jb2xvciksIDQzMHB4IDE1NjVweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4NXB4IDUwOXB4IHZhcigtLWZvbnQtY29sb3IpLCA2NDBweCAzOHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDgyMnB4IDgzN3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNzYwcHggMTY2NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTIycHggMTQ1OHB4IHZhcigtLWZvbnQtY29sb3IpLCAzOThweCAxMzFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA2ODlweCAyODVweCB2YXIoLS1mb250LWNvbG9yKSwgNDYwcHggNjUycHggdmFyKC0tZm9udC1jb2xvciksIDE2MjdweCAzNjVweCB2YXIoLS1mb250LWNvbG9yKSwgMzQ4cHggMTY0OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDgxOXB4IDE5NDZweCB2YXIoLS1mb250LWNvbG9yKSwgOTgxcHggMTkxN3B4IHZhcigtLWZvbnQtY29sb3IpLCAzMjNweCA3NnB4IHZhcigtLWZvbnQtY29sb3IpLCA5NzlweCA2ODRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA4ODdweCA1MzZweCB2YXIoLS1mb250LWNvbG9yKSwgMTM0OHB4IDE1OTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTA1NXB4IDY2NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDAycHggMTc5N3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEzMDBweCAxMDU1cHggdmFyKC0tZm9udC1jb2xvciksIDkzN3B4IDIzOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDc0cHggMTgxNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMTQ0cHggMTcxMHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MjlweCAxMDg3cHggdmFyKC0tZm9udC1jb2xvciksIDkxMXB4IDkxOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NzFweCA4MTlweCB2YXIoLS1mb250LWNvbG9yKSwgNDAzcHggNzIwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTYzcHggNzM2cHggdmFyKC0tZm9udC1jb2xvciksIDEwNjJweCAyMzhweCB2YXIoLS1mb250LWNvbG9yKSwgMTc3NHB4IDgxOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxODc0cHggMTE3OHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExNzdweCA2OTlweCB2YXIoLS1mb250LWNvbG9yKSwgMTI0NHB4IDEyNDRweCB2YXIoLS1mb250LWNvbG9yKSwgMTM3MXB4IDU4cHggdmFyKC0tZm9udC1jb2xvciksIDU2NHB4IDE1MTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODI0cHggNDg3cHggdmFyKC0tZm9udC1jb2xvciksIDkyOXB4IDcwMnB4IHZhcigtLWZvbnQtY29sb3IpLCAzOTRweCAxMzQ4cHggdmFyKC0tZm9udC1jb2xvciksIDExNjFweCA2NDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAyMTlweCAxODQxcHggdmFyKC0tZm9udC1jb2xvciksIDM1OHB4IDk0MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDBweCAxNzU5cHggdmFyKC0tZm9udC1jb2xvciksIDEwMTlweCAxMzQ1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMjc0cHggNDM2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MzNweCAxNjA1cHggdmFyKC0tZm9udC1jb2xvciksIDE3OThweCAxNDI2cHggdmFyKC0tZm9udC1jb2xvciksIDI5NHB4IDE4NDhweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNjgxcHggMTg3N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMzQ0cHggMTgyNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDM5cHggMTYzMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2MXB4IDEwMTJweCB2YXIoLS1mb250LWNvbG9yKSwgMTMwOHB4IDU4OHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzg5cHggNTgycHggdmFyKC0tZm9udC1jb2xvciksIDcyMXB4IDE5MTBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAzMThweCAyMThweCB2YXIoLS1mb250LWNvbG9yKSwgNjA3cHggMzE5cHggdmFyKC0tZm9udC1jb2xvciksIDQ5NXB4IDUzNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNTUycHggMTU3NXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE1NjJweCA2N3B4IHZhcigtLWZvbnQtY29sb3IpLCA0MDNweCA5MjZweCB2YXIoLS1mb250LWNvbG9yKSwgMTA5NnB4IDE4MDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTgxNHB4IDE3MDlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODgycHggMTgzMXB4IHZhcigtLWZvbnQtY29sb3IpLCA1MzNweCA0NnB4IHZhcigtLWZvbnQtY29sb3IpLCA4MjNweCA5NjlweCB2YXIoLS1mb250LWNvbG9yKSwgNTMwcHggMTY1cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTAzMHB4IDM1MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjgxcHggMzEzcHggdmFyKC0tZm9udC1jb2xvciksIDMzOHB4IDExNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjA3cHggMjExcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTcxOHB4IDExODRweCB2YXIoLS1mb250LWNvbG9yKSwgMTU4OXB4IDY1OXB4IHZhcigtLWZvbnQtY29sb3IpLCAyNzhweCAzNTVweCB2YXIoLS1mb250LWNvbG9yKSwgNDY0cHggMTQ2NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExNjVweCAyNzdweCB2YXIoLS1mb250LWNvbG9yKSwgOTUwcHggNjk0cHggdmFyKC0tZm9udC1jb2xvciksIDE3NDZweCAyOTNweCB2YXIoLS1mb250LWNvbG9yKSwgNzkzcHggOTExcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNTI4cHggNzczcHggdmFyKC0tZm9udC1jb2xvciksIDE4ODNweCAxNjk0cHggdmFyKC0tZm9udC1jb2xvciksIDc0OHB4IDE4MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTI0cHggMTUzMXB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEwMHB4IDYzNnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDczcHggMTQ0NXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjY0cHggMTI0NHB4IHZhcigtLWZvbnQtY29sb3IpLCA4NTBweCAxMzc3cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTg3cHggMTk3NnB4IHZhcigtLWZvbnQtY29sb3IpLCA5MzNweCAxNzYxcHggdmFyKC0tZm9udC1jb2xvciksIDkyMnB4IDEyNzBweCB2YXIoLS1mb250LWNvbG9yKSwgNTAwcHggMzk2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTMyNHB4IDhweCB2YXIoLS1mb250LWNvbG9yKSwgMTk2N3B4IDE4MTRweCB2YXIoLS1mb250LWNvbG9yKSwgMTA3MnB4IDE0MDFweCB2YXIoLS1mb250LWNvbG9yKSwgOTYxcHggMzdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTZweCA4MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTE1cHggNTAycHggdmFyKC0tZm9udC1jb2xvciksIDEwNzZweCAxODQ2cHggdmFyKC0tZm9udC1jb2xvciksIDE1MnB4IDE2NjlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5ODZweCAxNTI5cHggdmFyKC0tZm9udC1jb2xvciksIDE2NjdweCAxMTM3cHggdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbiNzdGFyczMge1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYW5pbWF0aW9uOiBhbmltU3RhciAxNTBzIGxpbmVhciBpbmZpbnRlO1xyXG4gIGJveC1zaGFkb3c6IDM4N3B4IDE4NzhweCB2YXIoLS1mb250LWNvbG9yKSwgNzYwcHggMTU2NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDg3cHggOTk5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTQ4cHggMTgyOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc3cHggMTAwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjg0cHggMTk2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA2NTZweCAyODRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjY4cHggMTYzNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxODIwcHggNTk4cHggdmFyKC0tZm9udC1jb2xvciksIDY0MnB4IDE5MDBweCB2YXIoLS1mb250LWNvbG9yKSwgMjk2cHggNTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5MjFweCAxNjIwcHggdmFyKC0tZm9udC1jb2xvciksIDQ3NnB4IDE4NThweCB2YXIoLS1mb250LWNvbG9yKSwgNjU4cHggNjEzcHggdmFyKC0tZm9udC1jb2xvciksIDExNzFweCAxMzYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQxOXB4IDI4M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDM3cHggNzMxcHggdmFyKC0tZm9udC1jb2xvciksIDUwM3B4IDY2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNTYycHggNDYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzgzcHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMTcxcHggMTIzM3B4IHZhcigtLWZvbnQtY29sb3IpLCA4NzZweCAxNzY4cHggdmFyKC0tZm9udC1jb2xvciksIDg1NnB4IDE2MTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc1cHggMTkyNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzI1cHggOTE4cHggdmFyKC0tZm9udC1jb2xvciksIDk1MnB4IDExOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NjhweCAxMjEycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTkycHggMTQ2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTI5cHggNzE3cHggdmFyKC0tZm9udC1jb2xvciksIDE5NDdweCA3NTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTgxOHB4IDExMjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODk2cHggMTY3MnB4IHZhcigtLWZvbnQtY29sb3IpLCA0NjBweCAxOThweCB2YXIoLS1mb250LWNvbG9yKSwgMjU2cHggMjcxcHggdmFyKC0tZm9udC1jb2xvciksIDc1MnB4IDU0NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyMjJweCAxODU5cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCA0NDNweCB2YXIoLS1mb250LWNvbG9yKSwgMzEzcHggMTg1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MDlweCA0NDZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTQ2cHggNjk3cHggdmFyKC0tZm9udC1jb2xvciksIDY3NHB4IDExNTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTExMnB4IDEzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNTVweCAxNzkwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ5NnB4IDk3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjk2cHggNDgwcHggdmFyKC0tZm9udC1jb2xvciksIDEzMTZweCAxMjY1cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDVweCAxMDYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE4MnB4IDIzN3B4IHZhcigtLWZvbnQtY29sb3IpLCA0MjdweCAxNTgycHggdmFyKC0tZm9udC1jb2xvciksIDg1OXB4IDI1M3B4IHZhcigtLWZvbnQtY29sb3IpLCA0NThweCA5MzlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTE3cHggMTY0NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQzcHggNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMjEycHggMTY1MHB4IHZhcigtLWZvbnQtY29sb3IpLCA5NjZweCAxNzg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDczcHggNzEycHggdmFyKC0tZm9udC1jb2xvciksIDEzMHB4IDc2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MTdweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksIDkwOXB4IDE1ODBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTEzcHggNzYycHggdmFyKC0tZm9udC1jb2xvciksIDIwNHB4IDExNDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTk5OHB4IDEwNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ2OHB4IDEzMDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDRweCAxNjc2cHggdmFyKC0tZm9udC1jb2xvciksIDIxcHggMTYwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAzODJweCAxMzYycHggdmFyKC0tZm9udC1jb2xvciksIDkxMnB4IDc1M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0ODhweCAxNDA1cHggdmFyKC0tZm9udC1jb2xvciksIDgwMnB4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzRweCA1NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMzM4cHggMTM2NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExOTdweCA3NzRweCB2YXIoLS1mb250LWNvbG9yKSwgNjAycHggNDg2cHggdmFyKC0tZm9udC1jb2xvciksIDY4MnB4IDE4NzdweCB2YXIoLS1mb250LWNvbG9yKSwgMzQ4cHggMTUwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQwN3B4IDExMzlweCB2YXIoLS1mb250LWNvbG9yKSwgOTUwcHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjJweCAxMTM5cHggdmFyKC0tZm9udC1jb2xvciksIDE2OTdweCAyOTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM4cHggMTI4MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDM4cHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAzNzZweCAxODg5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTI1NXB4IDE2ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTAwOHB4IDEzMTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzOHB4IDE0NDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTg2cHggODc0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NjdweCA2NDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTM0MXB4IDE5cHggdmFyKC0tZm9udC1jb2xvciksIDI5cHggMTczMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2cHggMTY1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDIxcHggMTA3NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjNweCA0MjRweCB2YXIoLS1mb250LWNvbG9yKSwgMTE3NXB4IDQxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDk0cHggMTk1N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjk2cHggNDMxcHggdmFyKC0tZm9udC1jb2xvciksIDE3NXB4IDE1MDdweCB2YXIoLS1mb250LWNvbG9yKSwgODMxcHggMTIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDk4cHggMTk0N3B4IHZhcigtLWZvbnQtY29sb3IpLCA2MTdweCA4ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMjQwcHggNDAzcHggdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbiNzdGFyczM6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMDBweDtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDM4N3B4IDE4NzhweCB2YXIoLS1mb250LWNvbG9yKSwgNzYwcHggMTU2NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNDg3cHggOTk5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTQ4cHggMTgyOHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTc3cHggMTAwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMjg0cHggMTk2M3B4IHZhcigtLWZvbnQtY29sb3IpLCA2NTZweCAyODRweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjY4cHggMTYzNXB4IHZhcigtLWZvbnQtY29sb3IpLCAxODIwcHggNTk4cHggdmFyKC0tZm9udC1jb2xvciksIDY0MnB4IDE5MDBweCB2YXIoLS1mb250LWNvbG9yKSwgMjk2cHggNTdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICA5MjFweCAxNjIwcHggdmFyKC0tZm9udC1jb2xvciksIDQ3NnB4IDE4NThweCB2YXIoLS1mb250LWNvbG9yKSwgNjU4cHggNjEzcHggdmFyKC0tZm9udC1jb2xvciksIDExNzFweCAxMzYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQxOXB4IDI4M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMDM3cHggNzMxcHggdmFyKC0tZm9udC1jb2xvciksIDUwM3B4IDY2M3B4IHZhcigtLWZvbnQtY29sb3IpLCAxNTYycHggNDYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMzgzcHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMTcxcHggMTIzM3B4IHZhcigtLWZvbnQtY29sb3IpLCA4NzZweCAxNzY4cHggdmFyKC0tZm9udC1jb2xvciksIDg1NnB4IDE2MTVweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMzc1cHggMTkyNHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzI1cHggOTE4cHggdmFyKC0tZm9udC1jb2xvciksIDk1MnB4IDExOXB4IHZhcigtLWZvbnQtY29sb3IpLCA3NjhweCAxMjEycHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgOTkycHggMTQ2MnB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTI5cHggNzE3cHggdmFyKC0tZm9udC1jb2xvciksIDE5NDdweCA3NTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTgxOHB4IDExMjNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxODk2cHggMTY3MnB4IHZhcigtLWZvbnQtY29sb3IpLCA0NjBweCAxOThweCB2YXIoLS1mb250LWNvbG9yKSwgMjU2cHggMjcxcHggdmFyKC0tZm9udC1jb2xvciksIDc1MnB4IDU0NHB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDEyMjJweCAxODU5cHggdmFyKC0tZm9udC1jb2xvciksIDE4NTFweCA0NDNweCB2YXIoLS1mb250LWNvbG9yKSwgMzEzcHggMTg1OHB4IHZhcigtLWZvbnQtY29sb3IpLCA3MDlweCA0NDZweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTQ2cHggNjk3cHggdmFyKC0tZm9udC1jb2xvciksIDY3NHB4IDExNTVweCB2YXIoLS1mb250LWNvbG9yKSwgMTExMnB4IDEzMHB4IHZhcigtLWZvbnQtY29sb3IpLCAzNTVweCAxNzkwcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTQ5NnB4IDk3NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxNjk2cHggNDgwcHggdmFyKC0tZm9udC1jb2xvciksIDEzMTZweCAxMjY1cHggdmFyKC0tZm9udC1jb2xvciksIDE2NDVweCAxMDYzcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTE4MnB4IDIzN3B4IHZhcigtLWZvbnQtY29sb3IpLCA0MjdweCAxNTgycHggdmFyKC0tZm9udC1jb2xvciksIDg1OXB4IDI1M3B4IHZhcigtLWZvbnQtY29sb3IpLCA0NThweCA5MzlweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNTE3cHggMTY0NHB4IHZhcigtLWZvbnQtY29sb3IpLCAxOTQzcHggNjBweCB2YXIoLS1mb250LWNvbG9yKSwgMjEycHggMTY1MHB4IHZhcigtLWZvbnQtY29sb3IpLCA5NjZweCAxNzg2cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDczcHggNzEycHggdmFyKC0tZm9udC1jb2xvciksIDEzMHB4IDc2cHggdmFyKC0tZm9udC1jb2xvciksIDE0MTdweCAxMTg2cHggdmFyKC0tZm9udC1jb2xvciksIDkwOXB4IDE1ODBweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxOTEzcHggNzYycHggdmFyKC0tZm9udC1jb2xvciksIDIwNHB4IDExNDNweCB2YXIoLS1mb250LWNvbG9yKSwgMTk5OHB4IDEwNTdweCB2YXIoLS1mb250LWNvbG9yKSwgMTQ2OHB4IDEzMDFweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxNDRweCAxNjc2cHggdmFyKC0tZm9udC1jb2xvciksIDIxcHggMTYwMXB4IHZhcigtLWZvbnQtY29sb3IpLCAzODJweCAxMzYycHggdmFyKC0tZm9udC1jb2xvciksIDkxMnB4IDc1M3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE0ODhweCAxNDA1cHggdmFyKC0tZm9udC1jb2xvciksIDgwMnB4IDE1NnB4IHZhcigtLWZvbnQtY29sb3IpLCAxNzRweCA1NTBweCB2YXIoLS1mb250LWNvbG9yKSwgMzM4cHggMTM2NnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDExOTdweCA3NzRweCB2YXIoLS1mb250LWNvbG9yKSwgNjAycHggNDg2cHggdmFyKC0tZm9udC1jb2xvciksIDY4MnB4IDE4NzdweCB2YXIoLS1mb250LWNvbG9yKSwgMzQ4cHggMTUwM3B4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDQwN3B4IDExMzlweCB2YXIoLS1mb250LWNvbG9yKSwgOTUwcHggMTQwMHB4IHZhcigtLWZvbnQtY29sb3IpLCA5MjJweCAxMTM5cHggdmFyKC0tZm9udC1jb2xvciksIDE2OTdweCAyOTNweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMjM4cHggMTI4MXB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDM4cHggMTE5N3B4IHZhcigtLWZvbnQtY29sb3IpLCAzNzZweCAxODg5cHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgMTI1NXB4IDE2ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMTAwOHB4IDEzMTZweCB2YXIoLS1mb250LWNvbG9yKSwgMTUzOHB4IDE0NDdweCB2YXIoLS1mb250LWNvbG9yKSxcclxuICAxMTg2cHggODc0cHggdmFyKC0tZm9udC1jb2xvciksIDE5NjdweCA2NDBweCB2YXIoLS1mb250LWNvbG9yKSwgMTM0MXB4IDE5cHggdmFyKC0tZm9udC1jb2xvciksIDI5cHggMTczMnB4IHZhcigtLWZvbnQtY29sb3IpLFxyXG4gIDE2cHggMTY1MHB4IHZhcigtLWZvbnQtY29sb3IpLCAxMDIxcHggMTA3NXB4IHZhcigtLWZvbnQtY29sb3IpLCA3MjNweCA0MjRweCB2YXIoLS1mb250LWNvbG9yKSwgMTE3NXB4IDQxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDk0cHggMTk1N3B4IHZhcigtLWZvbnQtY29sb3IpLCAxMjk2cHggNDMxcHggdmFyKC0tZm9udC1jb2xvciksIDE3NXB4IDE1MDdweCB2YXIoLS1mb250LWNvbG9yKSwgODMxcHggMTIxcHggdmFyKC0tZm9udC1jb2xvciksXHJcbiAgNDk4cHggMTk0N3B4IHZhcigtLWZvbnQtY29sb3IpLCA2MTdweCA4ODBweCB2YXIoLS1mb250LWNvbG9yKSwgMjQwcHggNDAzcHggdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1TdGFyIHtcclxuICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return []; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "kZyu":
/*!*************************************************************!*\
  !*** ./src/app/background-stars/background-stars.module.ts ***!
  \*************************************************************/
/*! exports provided: BackgroundStarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundStarsModule", function() { return BackgroundStarsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/background.component */ "izgg");




class BackgroundStarsModule {
}
BackgroundStarsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackgroundStarsModule });
BackgroundStarsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackgroundStarsModule_Factory(t) { return new (t || BackgroundStarsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackgroundStarsModule, { declarations: [_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundStarsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




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