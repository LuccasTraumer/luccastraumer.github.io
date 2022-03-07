(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\Github\Angular\luccastraumer.github.io\page\src\main.ts */"zUnb");


/***/ }),

/***/ "1brN":
/*!***********************************!*\
  !*** ./src/model/skills.model.ts ***!
  \***********************************/
/*! exports provided: Skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
class Skills {
    constructor(pathImage, nomeSkill, linkDoc) {
        this.pathImage = pathImage;
        this.nomeSkill = nomeSkill;
        this.linkDoc = linkDoc;
    }
}


/***/ }),

/***/ "3bwB":
/*!***********************************************!*\
  !*** ./src/app/resume/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function CardComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.card.nivelEscolaridade, " ");
} }
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, decls: 13, vars: 7, consts: [[1, "content"], [1, "data"], [1, "empresa-inst"], [1, "cargo"], ["class", "nivel-escolaridade", 4, "ngIf"], [1, "descricao"], [1, "nivel-escolaridade"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_p_8_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.card.anoInicio, " - ", ctx.card.anoFinal ? ctx.card.anoFinal : "Present", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.cargoExercido, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.nomeEmpresa || ctx.card.nomeInstituicao, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.nivelEscolaridade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.localizacao, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.descricao, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 10% 5%;\n  box-shadow: -10px 10px 15px -15px #000000;\n  border-radius: 5px;\n  display: flex;\n  flex-flow: column wrap;\n  width: 100%;\n  margin-top: 5%;\n}\n.content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  color: var(--azul);\n  font-weight: bold;\n  font-size: 1rem;\n}\n.content[_ngcontent-%COMP%]   .cargo[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.content[_ngcontent-%COMP%]   .empresa-inst[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0 0 5% 0;\n}\n.content[_ngcontent-%COMP%]   .empresa-inst[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .empresa-inst[_ngcontent-%COMP%]   .nivel-escolaridade[_ngcontent-%COMP%] {\n  padding: 2% 0 0 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    height: 25vh;\n    justify-content: flex-start;\n    padding-top: 15%;\n  }\n  .content[_ngcontent-%COMP%]   .empresa-inst[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n  .content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .content[_ngcontent-%COMP%] {\n    height: 30vh;\n    padding: 5%;\n    overflow: hidden;\n  }\n  .content[_ngcontent-%COMP%]   .empresa-inst[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLHlCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxTQUFBO0FBRk47QUFLSTtFQUNFLGlCQUFBO0FBSE47QUFPRTtFQUNFLG1CQUFBO0FBTEo7QUFTQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7RUFORjtFQVFFO0lBQ0UsV0FBQTtFQU5KO0VBU0U7SUFDRSxVQUFBO0VBUEo7QUFDRjtBQVdBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBVEY7RUFXRTtJQUNFLFlBQUE7RUFUSjtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTAlIDUlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMTBweCAxNXB4IC0xNXB4ICMwMDAwMDA7XHJcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAxNXB4IC0xNXB4ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcblxyXG4gIC5kYXRhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmdvIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAuZW1wcmVzYS1pbnN0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDAgNSUgMDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uaXZlbC1lc2NvbGFyaWRhZGUge1xyXG4gICAgICBwYWRkaW5nOiAyJSAwIDAgMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmljYW8ge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcblxyXG4gICAgLmVtcHJlc2EtaW5zdCB7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmljYW8ge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmVtcHJlc2EtaW5zdCB7XHJcbiAgICAgIG1hcmdpbjogMCA1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "76Sh":
/*!**********************************************!*\
  !*** ./src/app/about/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Constantes */ "Rl2v");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");




class CardComponent {
    constructor() {
        this.resumeFoco = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"];
    }
    ngOnInit() {
    }
    mudarFocoTela(elementoFocado) {
        this.resumeFoco.emit(elementoFocado);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], outputs: { resumeFoco: "resumeFoco" }, decls: 19, vars: 11, consts: [[1, "content"], ["alt", "Imagem Lucas Jesus", 1, "profile-image", 3, "src"], [1, "titulo"], [1, "subtitulo"], [1, "buttons"], [3, "buttonAzulHidden", "textContent", "isItalicText", "click"], [3, "buttonAzulHidden", "isItalicText", "textContent", "click"], [1, "rede-social"], ["href", "", 1, "rede-social__item"], ["alt", "Icone Linkedin", 3, "src"], ["alt", "Icone Github", 3, "src"], ["alt", "Icone Twitter", 3, "src"], ["alt", "Icone Instagram", 3, "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_app_button_click_8_listener() { return ctx.mudarFocoTela("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_app_button_click_9_listener() { return ctx.mudarFocoTela("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.IMAGEM_ABOUT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonAzulHidden", false)("textContent", "Resume")("isItalicText", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonAzulHidden", true)("isItalicText", false)("textContent", "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_LINKEDIN, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_GITHUB, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_TWITTER, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_INSTAGRAM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: column wrap;\n  width: 90%;\n  margin: 0 auto;\n  background: #f4ece6;\n  box-shadow: -10px 10px 15px -15px #000000;\n  border-radius: 5px;\n}\n.content[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 40%;\n  margin: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.5rem;\n  width: -webkit-min-content;\n  width: min-content;\n  background: inherit;\n}\n.content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: var(--azul) solid 1px;\n  width: 35%;\n}\n.content[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%] {\n  background: inherit;\n  display: none;\n  visibility: hidden;\n}\n.content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: inherit;\n  padding: 5%;\n}\n.content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50px;\n  font-weight: bold;\n  text-transform: uppercase;\n  width: 35vw;\n}\n.content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .azul[_ngcontent-%COMP%] {\n  background: var(--azul);\n  color: white;\n}\n.content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .transp[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  background: inherit;\n}\n.content[_ngcontent-%COMP%]   .rede-social[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  width: 100%;\n  margin: 10% 0 3%;\n  align-items: center;\n  text-align: center;\n  padding: 2%;\n}\n.content[_ngcontent-%COMP%]   .rede-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .content[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%] {\n    display: block;\n    visibility: visible;\n    letter-spacing: 2px;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n\n  .rede-social[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBREo7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFITjtBQU1JO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBSk47QUFPSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQVNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFQSjtBQVVNO0VBQ0UsVUFBQTtBQVJSO0FBY0E7RUFFSTtJQUNFLGVBQUE7RUFaSjtFQWVFO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFiSjs7RUFpQkE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFkRjs7RUFpQkE7SUFDRSx1QkFBQTtJQUNBLG9CQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y0ZWNlNjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDEwcHggMTVweCAtMTVweCAjMDAwMDAwO1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggMTVweCAtMTVweCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogNSUgMDtcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXI6IHZhcigtLWF6dWwpIHNvbGlkIDFweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0dWxvIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG5cclxuICAgIGFwcC1idXR0b24ge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB3aWR0aDogMzV2dztcclxuICAgIH1cclxuXHJcbiAgICAuYXp1bCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYW5zcCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVkZS1zb2NpYWwge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwJSAwIDMlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0dWxvIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnJlZGUtc29jaWFsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { resumeFoco: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
const environment = {
    production: false,
};


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _model_dados_redes_sociais_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/dados-redes-sociais.model */ "dgKf");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");
/* harmony import */ var _model_experience_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/experience.model */ "G0Dr");
/* harmony import */ var _model_skills_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/skills.model */ "1brN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









class DataService {
    constructor(http) {
        this.http = http;
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"];
        this.apiGithubRepositories = _utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].apiGithubRepository;
    }
    buscarDadosSkills() {
        const listaSkills = Array();
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_ANGULAR, 'Angular', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_TYPESCRIPT, 'Typescript', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_JAVASCRIPT, 'Javascript', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_CSS, 'CSS', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_JAVA, 'Java', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_NGINX, 'Nginx', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_DOCKER, 'Docker', ''));
        listaSkills.push(new _model_skills_model__WEBPACK_IMPORTED_MODULE_5__["Skills"](_utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ICONE_PYTHON, 'Python', ''));
        return listaSkills;
    }
    buscarDadosExperience() {
        const listaExperiences = Array();
        listaExperiences.push(new _model_experience_model__WEBPACK_IMPORTED_MODULE_4__["Experience"](2020, 'CIANDT', 'Software Develop'));
        listaExperiences.push(new _model_experience_model__WEBPACK_IMPORTED_MODULE_4__["Experience"](2020, 'Technical High School of Campinas\n' +
            '- UNICAMP', 'PADEMT tutor and Mentor', 2021));
        return listaExperiences;
    }
    buscarDadosSocialMedia() {
        const redeSociais = Array();
        redeSociais.push(new _model_dados_redes_sociais_model__WEBPACK_IMPORTED_MODULE_2__["DadosRedesSociais"](this.CONSTANTES.PATH_ICONE_INSTAGRAM, 'Instagram', 'https://www.instagram.com/luccastraumer/', 'Icone Instragram'));
        redeSociais.push(new _model_dados_redes_sociais_model__WEBPACK_IMPORTED_MODULE_2__["DadosRedesSociais"](this.CONSTANTES.PATH_ICONE_LINKEDIN, 'Linkedin', 'https://www.linkedin.com/in/lucassjesus/', 'Icone Linkedin'));
        redeSociais.push(new _model_dados_redes_sociais_model__WEBPACK_IMPORTED_MODULE_2__["DadosRedesSociais"](this.CONSTANTES.PATH_ICONE_TWITTER, 'Twitter', 'https://twitter.com/LuccasTraumer', 'Icone Twitter'));
        redeSociais.push(new _model_dados_redes_sociais_model__WEBPACK_IMPORTED_MODULE_2__["DadosRedesSociais"](this.CONSTANTES.PATH_ICONE_GITHUB, 'Github', 'https://github.com/LuccasTraumer', 'Icone Github'));
        return redeSociais;
    }
    buscarDadosGithub() {
        return this.http.get(this.apiGithubRepositories)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(2));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "76Sh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "JaJ+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");






class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                exports: [
                    _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "G0Dr":
/*!***************************************!*\
  !*** ./src/model/experience.model.ts ***!
  \***************************************/
/*! exports provided: Experience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
class Experience {
    constructor(anoInicio, nomeEmpresa, cargo, anoTermino) {
        this.anoInicio = anoInicio;
        this.anoTermino = anoTermino;
        this.nomeEmpresa = nomeEmpresa;
        this.cargo = cargo;
    }
}


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
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.component */ "76Sh");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");




class AboutComponent {
    constructor() {
        this.elementoFoco = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    pegarNovoFocoCard(elementoFocado) {
        this.elementoFoco.emit(elementoFocado);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], outputs: { elementoFoco: "elementoFoco" }, decls: 12, vars: 6, consts: [[3, "resumeFoco"], [1, "container"], [1, "content"], [1, "titulo"], [1, "subtitulo"], [1, "buttons"], [3, "buttonAzulHidden", "textContent", "isItalicText"], [3, "isItalicText", "textContent", "buttonAzulHidden"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resumeFoco", function AboutComponent_Template_app_card_resumeFoco_0_listener($event) { return ctx.pegarNovoFocoCard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Salve rapa, Salve Massa! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I'm a software developer who is paixoneted for solve problems and eletronics. Actualy I work as a Full stack developer with Angular 8 and Spring boot(Java 8+). My focus is in frontend or mobile developer and that is where I spen most part of my studing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonAzulHidden", false)("textContent", "Resume")("isItalicText", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isItalicText", false)("textContent", "Projects")("buttonAzulHidden", true);
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["app-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n}\n\n.container[_ngcontent-%COMP%] {\n  background: #e6dace;\n  padding: 5%;\n  margin-top: 40%;\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 90% 5% 5% 10%;\n  background: inherit;\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n@media screen and (min-width: 767px) {\n  app-card[_ngcontent-%COMP%] {\n    top: 25%;\n    width: 50%;\n    left: 5%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n    background: #e6dace;\n    height: 80vh;\n    padding: 0 5% 0 5%;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    background: white;\n    right: 0;\n    width: 60%;\n    margin: auto 50%;\n    padding: 10% 5% 5% 10%;\n    height: inherit;\n    display: flex;\n    flex-direction: column;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    display: flex;\n    visibility: visible;\n    justify-content: space-between;\n    width: 100%;\n    background: inherit;\n    padding: 5%;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 2%;\n    margin-right: 5%;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  app-card[_ngcontent-%COMP%] {\n    top: 25%;\n    width: 30%;\n    left: 20%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n    background: #e6dace;\n    height: 100vh;\n    padding: 0 0 0 5%;\n  }\n}\n\n@media screen and (min-width: 1440px) {\n  app-card[_ngcontent-%COMP%] {\n    top: 40%;\n    left: 8%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ047O0FBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUROOztBQUtFO0VBQ0UsbUJBQUE7QUFISjs7QUFPQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VBSkY7O0VBT0E7SUFDRSxTQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBSkY7RUFNRTtJQUNFLGlCQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQUpKO0VBTUk7SUFDRSxlQUFBO0VBSk47RUFPSTtJQUNFLG1CQUFBO0VBTE47RUFRSTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQU5OO0VBUU07SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBTlI7RUFVSTtJQUNFLG1CQUFBO0VBUk47RUFZRTtJQUNFLGFBQUE7RUFWSjtBQUNGOztBQWNBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFaRjs7RUFlQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUFaRjtBQUNGOztBQWVBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsUUFBQTtFQWJGO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZkYWNlO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOTAlIDUlIDUlIDEwJTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcblxyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdHVsbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgPiAqIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCl7XHJcbiAgYXBwLWNhcmQge1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZGFjZTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHBhZGRpbmc6IDAgNSUgMCA1JTtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvIDUwJTtcclxuICAgICAgcGFkZGluZzogMTAlIDUlIDUlIDEwJTtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnRpdHVsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VidGl0dWxvIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG5cclxuICAgICAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQgPiAqIHtcclxuICAgICAgcGFkZGluZzogNSUgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgYXBwLWNhcmQge1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlNmRhY2U7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMCAwIDAgNSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICBhcHAtY2FyZCB7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDglO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, { elementoFoco: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "KVUK":
/*!****************************************************!*\
  !*** ./src/app/modal-hamb/modal-hamb.component.ts ***!
  \****************************************************/
/*! exports provided: ModalHambComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHambComponent", function() { return ModalHambComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



class ModalHambComponent {
    constructor() {
        this.elementoFocado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeActive(textContent) {
        const elementos = document.querySelectorAll('.lista__item');
        elementos.forEach(elemento => {
            elemento.classList.remove('active');
            console.log(elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase()));
            if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
                elemento.classList.add('active');
                this.elementoFocado.emit(textContent.toLocaleLowerCase());
            }
        });
        this.isOpen();
    }
    isOpen() {
        const htmlBodyElement = document.querySelector('body');
        this.isAtivo = !this.isAtivo;
        if (this.isAtivo) {
            htmlBodyElement.classList.add('all-screen');
        }
        else {
            htmlBodyElement.classList.remove('all-screen');
        }
    }
}
ModalHambComponent.ɵfac = function ModalHambComponent_Factory(t) { return new (t || ModalHambComponent)(); };
ModalHambComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalHambComponent, selectors: [["app-modal-hamb"]], inputs: { isAtivo: "isAtivo" }, outputs: { elementoFocado: "elementoFocado" }, decls: 10, vars: 1, consts: [[1, "menu", 3, "ngClass"], [1, "lista"], [1, "lista__item", 3, "click"]], template: function ModalHambComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalHambComponent_Template_li_click_2_listener() { return ctx.changeActive("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalHambComponent_Template_li_click_4_listener() { return ctx.changeActive("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalHambComponent_Template_li_click_6_listener() { return ctx.changeActive("Projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalHambComponent_Template_li_click_8_listener() { return ctx.changeActive("Contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isAtivo ? "animacao" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menu[_ngcontent-%COMP%] {\n  background: var(--bg-marrom);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 0;\n  right: -200%;\n  top: 0;\n  transition: all 0.5s ease-in-out;\n  visibility: hidden;\n}\n.menu[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.animacao[_ngcontent-%COMP%] {\n  right: 0;\n  z-index: 3;\n  position: absolute;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLWhhbWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUtBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoibW9kYWwtaGFtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1tYXJyb20pO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcmlnaHQ6IC0yMDAlO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gIC5saXN0YSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hY2FvIHtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalHambComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-hamb',
                templateUrl: './modal-hamb.component.html',
                styleUrls: ['./modal-hamb.component.scss']
            }]
    }], function () { return []; }, { elementoFocado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isAtivo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ly/V":
/*!**************************************!*\
  !*** ./src/app/resume/model/card.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quadrado/quadrado.component */ "kyqi");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ "sELr");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__["QuadradoComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__["QuadradoComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__["QuadradoComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
                exports: [
                    _quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__["QuadradoComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


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
class Constantes {
}
Constantes.apiGithubRepository = 'https://api.github.com/users/luccastraumer/repos?page=1&per_page=100';
Constantes.apiGithubOwner = 'https://api.github.com/users/luccastraumer';
Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER = '/assets/menu-hamburguer-black-png.png';
Constantes.PATH_ICONE_ENVIAR_MENSAGEM = '/assets/novaPagina/send-message-icon.png';
Constantes.PATH_ICONE_ARROW = '/assets/novaPagina/arrow-1.png';
Constantes.PATH_ICONE_LINKEDIN = '/assets/novaPagina/linkedin-icon.svg';
Constantes.PATH_ICONE_TWITTER = '/assets/novaPagina/twitter-icon.svg';
Constantes.PATH_ICONE_INSTAGRAM = '/assets/novaPagina/instagram-icon.svg';
Constantes.PATH_ICONE_GITHUB = '/assets/novaPagina/github-icon.svg';
Constantes.IMAGEM_ABOUT = '/assets/novaPagina/image-page.jpg';
Constantes.ICONE_ANGULAR = '/assets/novaPagina/icons8-angularjs.svg';
Constantes.ICONE_GCP = '/assets/novaPagina/google-cloud-platform-icon.svg';
Constantes.ICONE_JAVA = '/assets/novaPagina/java-icon.svg';
Constantes.ICONE_JAVASCRIPT = '/assets/novaPagina/javascript-icon.svg';
Constantes.ICONE_NGINX = '/assets/novaPagina/nginx-icon.png';
Constantes.ICONE_PYTHON = '/assets/novaPagina/python-icon.svg';
Constantes.ICONE_TYPESCRIPT = '/assets/novaPagina/typescript-icon.svg';
Constantes.ICONE_DOCKER = '/assets/novaPagina/docker-icon.svg';
Constantes.ICONE_CSS = '/assets/novaPagina/css-icon.png';
Constantes.ICONE_SETA_GITHUB = '/assets/novaPagina/arrow-send-github.png';
Constantes.ICONE_SETA_IMAGENS = '/assets/novaPagina/arrow-volta.png';
Constantes.ICONE_ARROW_HIRE = '/assets/novaPagina/arrow_hire.png';
Constantes.IMAGE_CONTACT_HI = '/assets/novaPagina/contact.hi.png';
Constantes.ICON_EMAIL = '/assets/novaPagina/email-icon.svg';
Constantes.ICON_LOCATION = '/assets/novaPagina/location-icon.svg';
Constantes.SEARCH_ICON = '/assets/novaPagina/search-icon.svg';


/***/ }),

/***/ "S3qR":
/*!*******************************************************!*\
  !*** ./src/app/resume/language/language.component.ts ***!
  \*******************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/quadrado/quadrado.component */ "kyqi");



class LanguageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(); };
LanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 10, vars: 0, consts: [[1, "content"], [1, "titulo"], [1, "lista"], [1, "lista__item"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Languages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Portuguese(native) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__["QuadradoComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  flex-flow: column wrap;\n  width: auto;\n  padding: 5%;\n  box-shadow: -10px 10px 15px -15px #000000;\n  border-radius: 5px;\n}\n.content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n  align-self: flex-start;\n}\n.content[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.content[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  width: 1vw;\n  height: 2vh;\n  margin-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSx5Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFHTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFEUiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAxMHB4IDE1cHggLTE1cHggIzAwMDAwMDtcclxuICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDE1cHggLTE1cHggIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmxpc3RhIHtcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgYXBwLXF1YWRyYWRvIHtcclxuICAgICAgICB3aWR0aDogMXZ3O1xyXG4gICAgICAgIGhlaWdodDogMnZoO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language',
                templateUrl: './language.component.html',
                styleUrls: ['./language.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _about_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about/about.component */ "JaJ+");
/* harmony import */ var _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume/resume.component */ "z7Cr");
/* harmony import */ var _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects/projects.component */ "mFYO");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");









class AppComponent {
    constructor() {
        this.title = 'page';
    }
    mudarElementoPrincipal(elementoFocado) {
        this.elementoEmFoco = elementoFocado;
    }
    isMenuOpen(isOpen) {
        const test = document.querySelector('body');
        this.isOpenMenuHamburguer = isOpen;
        if (isOpen) {
            test.classList.add('all-screen');
        }
        else {
            test.classList.remove('all-screen');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 5, consts: [["id", "header"], [3, "ngClass", "elementoFocado", "isHamburguerAberto"], [1, "about"], [3, "ngClass", "elementoFoco"], ["id", "resume"], [3, "ngClass"], [1, "projects"], [1, "contact"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("elementoFocado", function AppComponent_Template_app_header_elementoFocado_1_listener($event) { return ctx.mudarElementoPrincipal($event); })("isHamburguerAberto", function AppComponent_Template_app_header_isHamburguerAberto_1_listener($event) { return ctx.isMenuOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-about", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("elementoFoco", function AppComponent_Template_app_about_elementoFoco_3_listener($event) { return ctx.mudarElementoPrincipal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-resume", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-projects", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contact", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isOpenMenuHamburguer ? "all-screen" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.elementoEmFoco === "about" ? "" : "out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.elementoEmFoco === "resume" ? "" : "out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.elementoEmFoco === "projects" ? "" : "out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.elementoEmFoco === "contact" ? "" : "out");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _about_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .content[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    background: white;\n    z-index: 2;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0U7SUFDRSxrQkFBQTtFQVZGO0VBYUk7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLE1BQUE7RUFYTjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIge1xyXG59XHJcblxyXG4jcmVzdW1lIHtcclxuXHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgIGFwcC1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VqAo":
/*!******************************************!*\
  !*** ./src/app/resume/model/card-job.ts ***!
  \******************************************/
/*! exports provided: CardJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardJob", function() { return CardJob; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "Ly/V");

class CardJob extends _card__WEBPACK_IMPORTED_MODULE_0__["Card"] {
    constructor(anoInicio, localizacao, descricao, cargo, nomeEmpresa, anoFinal) {
        super();
        this.anoInicio = anoInicio;
        this.localizacao = localizacao;
        this.descricao = descricao;
        this.anoFinal = anoFinal;
        this.cargoExercido = cargo;
        this.nomeEmpresa = nomeEmpresa;
    }
}


/***/ }),

/***/ "VsSX":
/*!************************************************!*\
  !*** ./src/app/resume/model/card-education.ts ***!
  \************************************************/
/*! exports provided: CardEducation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEducation", function() { return CardEducation; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "Ly/V");

class CardEducation extends _card__WEBPACK_IMPORTED_MODULE_0__["Card"] {
    constructor(anoInicio, localizacao, descricao, nivelEscolaridade, nomeInstituicao, anoFinal) {
        super();
        this.anoInicio = anoInicio;
        this.localizacao = localizacao;
        this.descricao = descricao;
        this.anoFinal = anoFinal;
        this.nivelEscolaridade = nivelEscolaridade;
        this.nomeInstituicao = nomeInstituicao;
    }
}


/***/ }),

/***/ "Wm2z":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "mFYO");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "vzVP");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");






class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
                exports: [
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.module */ "FQ1g");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.module */ "i98n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.module */ "Wm2z");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _modal_hamb_modal_hamb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-hamb/modal-hamb.component */ "KVUK");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_8__["AboutModule"],
            _resume_resume_module__WEBPACK_IMPORTED_MODULE_9__["ResumeModule"],
            _projects_projects_module__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
        _modal_hamb_modal_hamb_component__WEBPACK_IMPORTED_MODULE_13__["ModalHambComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _about_about_module__WEBPACK_IMPORTED_MODULE_8__["AboutModule"],
        _resume_resume_module__WEBPACK_IMPORTED_MODULE_9__["ResumeModule"],
        _projects_projects_module__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                    _modal_hamb_modal_hamb_component__WEBPACK_IMPORTED_MODULE_13__["ModalHambComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _about_about_module__WEBPACK_IMPORTED_MODULE_8__["AboutModule"],
                    _resume_resume_module__WEBPACK_IMPORTED_MODULE_9__["ResumeModule"],
                    _projects_projects_module__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/quadrado/quadrado.component */ "kyqi");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/button/button.component */ "sELr");




class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 32, vars: 3, consts: [[1, "content"], [1, "info"], [1, "titulo"], [1, "formulario"], [1, "name"], [1, "nome"], ["type", "text", "name", "", "required", ""], [1, "sobrenome"], ["type", "email", "name", "", "required", ""], ["type", "text", "name", ""], [3, "isItalicText", "textContent", "buttonAzulHidden"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Let's talk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isItalicText", false)("textContent", "SEND")("buttonAzulHidden", false);
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__["QuadradoComponent"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--bg-marrom);\n  padding: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  width: 5vw;\n  height: 1.9vh;\n  margin-right: 5%;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%] {\n  width: 80%;\n  background: white;\n  margin: 5% auto;\n  padding: 5%;\n  box-shadow: -10px 10px 15px -15px #000000;\n  border-radius: 5px;\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--azul);\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 2px solid #000;\n  width: 100%;\n  color: var(--azul);\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid var(--azul);\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5% 0;\n  width: 80%;\n  align-self: center;\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n    width: -webkit-max-content;\n    width: max-content;\n  }\n  .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    display: inherit;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    margin-bottom: 2%;\n  }\n  .content[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n    width: 1.5vw;\n    height: 3.5vh;\n    margin-right: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBSUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLHlDQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UsaUJBQUE7QUFGTjtBQUlNO0VBQ0Usa0JBQUE7QUFGUjtBQU1JO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQU9JO0VBQ0Usb0NBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtBQU5OO0FBU0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUE47QUFZQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFBQSxrQkFBQTtFQVZKO0VBWUk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQkFBQTtFQVZOO0VBYUk7SUFDRSxVQUFBO0VBWE47QUFDRjtBQWdCQTtFQUdNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQWhCTjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbWFycm9tKTtcclxuICBwYWRkaW5nOiA1JSAwO1xyXG5cclxuICAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGFwcC1xdWFkcmFkbyB7XHJcbiAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgIGhlaWdodDogMS45dmg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm11bGFyaW8ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDEwcHggMTVweCAtMTVweCAjMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCAxNXB4IC0xNXB4ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1JSAwO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5jb250ZW50IHtcclxuICAgIC5mb3JtdWxhcmlvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lID4gKiB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIGFwcC1xdWFkcmFkbyB7XHJcbiAgICAgICAgd2lkdGg6IDEuNXZ3O1xyXG4gICAgICAgIGhlaWdodDogMy41dmg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dgKf":
/*!************************************************!*\
  !*** ./src/model/dados-redes-sociais.model.ts ***!
  \************************************************/
/*! exports provided: DadosRedesSociais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosRedesSociais", function() { return DadosRedesSociais; });
class DadosRedesSociais {
    constructor(pathImage, nomeRedeSocial, linkRedeSocial, altRedeSocial) {
        this.pathImage = pathImage;
        this.nomeRedeSocial = nomeRedeSocial;
        this.linkRedeSocial = linkRedeSocial;
        this.altRedeSocial = altRedeSocial;
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/quadrado/quadrado.component */ "kyqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modal_hamb_modal_hamb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-hamb/modal-hamb.component */ "KVUK");





class HeaderComponent {
    constructor() {
        this.elementoFocado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isHamburguerAberto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMenuHamburguerOpen = false;
    }
    ngOnInit() {
        this.changeActive('about');
    }
    changeActive(textContent) {
        const elementos = document.querySelectorAll('.lista__item');
        elementos.forEach(elemento => {
            elemento.classList.remove('active');
            if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
                elemento.classList.add('active');
                this.elementoFocado.emit(textContent.toLocaleLowerCase());
            }
        });
    }
    changeManuHamb() {
        this.isMenuHamburguerOpen = !this.isMenuHamburguerOpen;
        this.isHamburguerAberto.emit(this.isMenuHamburguerOpen);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { elementoFocado: "elementoFocado", isHamburguerAberto: "isHamburguerAberto" }, decls: 29, vars: 2, consts: [[1, "content", "mobile"], [1, "informacoes"], [1, "informacoes__titulo"], [1, "informacoes__subtitulo"], [1, "menu-hamburguer", 3, "ngClass", "click"], [1, "menu-hamburguer__first-line"], [1, "menu-hamburguer__second-line"], [1, "menu-hamburguer__third-line"], [3, "isAtivo", "elementoFocado"], [1, "content", "desktop"], [1, "informacoes__quadrado"], [1, "menu"], [1, "lista"], [1, "lista__item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_7_listener() { return ctx.changeManuHamb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-modal-hamb", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("elementoFocado", function HeaderComponent_Template_app_modal_hamb_elementoFocado_11_listener($event) { return ctx.changeActive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_21_listener() { return ctx.changeActive("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_23_listener() { return ctx.changeActive("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_25_listener() { return ctx.changeActive("Projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_27_listener() { return ctx.changeActive("Contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMenuHamburguerOpen ? "active-hamb" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAtivo", ctx.isMenuHamburguerOpen);
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_1__["QuadradoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _modal_hamb_modal_hamb_component__WEBPACK_IMPORTED_MODULE_3__["ModalHambComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  padding: 5%;\n  display: flex;\n  justify-content: space-between;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 70%;\n  align-items: center;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  width: 5vw;\n  height: 1.9vh;\n}\n.content[_ngcontent-%COMP%]   .informacoes__titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0 0 0 3%;\n  font-size: 1.5rem;\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer[_ngcontent-%COMP%] {\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 2vh;\n  margin: 2% 0 0 0;\n  transition: all 0.5s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer__first-line[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  color: var(--azul);\n  width: 40%;\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer__second-line[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--azul);\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer__third-line[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  width: 40%;\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--azul);\n}\n.content[_ngcontent-%COMP%]   .menu-hamburguer[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.content[_ngcontent-%COMP%]   .active-hamb[_ngcontent-%COMP%] {\n  width: 8%;\n  position: absolute;\n  z-index: 4;\n  right: 0;\n  transition: all 1s ease-in-out;\n  transform: rotate(8deg);\n}\n.content[_ngcontent-%COMP%]   .active-hamb[_ngcontent-%COMP%]   .menu-hamburguer__first-line[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n  width: 80%;\n}\n.content[_ngcontent-%COMP%]   .active-hamb[_ngcontent-%COMP%]   .menu-hamburguer__second-line[_ngcontent-%COMP%] {\n  transform: rotate(310deg);\n  width: 80%;\n  margin: 0 25% 25% 0;\n}\n.content[_ngcontent-%COMP%]   .active-hamb[_ngcontent-%COMP%]   .menu-hamburguer__third-line[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n  width: 50%;\n  visibility: hidden;\n}\n.desktop[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n@media screen and (min-width: 767px) {\n  .content[_ngcontent-%COMP%]   .informacoes__titulo[_ngcontent-%COMP%]:after {\n    content: \" / \";\n    white-space: break-spaces;\n    font-weight: normal;\n  }\n  .content[_ngcontent-%COMP%]   .informacoes__subtitulo[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n  .content[_ngcontent-%COMP%]   .menu-hamburguer[_ngcontent-%COMP%] {\n    width: 5%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n\n  .desktop[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    visibility: visible;\n  }\n  .desktop[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50%;\n    align-items: center;\n    text-align: center;\n  }\n  .desktop[_ngcontent-%COMP%]   .informacoes__titulo[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin: 0 0 0 3%;\n    font-size: 1.5rem;\n  }\n  .desktop[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .desktop[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    text-align: center;\n    margin: 0;\n  }\n  .desktop[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%] {\n    list-style: none;\n    text-transform: uppercase;\n  }\n  .desktop[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%]:hover {\n    color: var(--azul);\n    text-decoration: underline;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFGSjtBQUlJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGTjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFITjtBQU1JO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0FBSk47QUFRRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQU5KO0FBU0U7RUFDRSxVQUFBO0FBUEo7QUFVRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQVJKO0FBVUk7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFSTjtBQVdJO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFUTjtBQVlJO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQWdCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWJGO0FBZ0JBO0VBS007SUFDRSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQWpCTjtFQW9CSTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQWxCTjtFQXNCRTtJQUNFLFNBQUE7RUFwQko7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBdEJGOztFQXlCQTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBdEJGO0VBd0JFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQXRCSjtFQXdCSTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQXRCTjtFQTBCRTtJQUNFLFVBQUE7RUF4Qko7RUEwQkk7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUF4Qk47RUEwQk07SUFDRSxnQkFBQTtJQUNBLHlCQUFBO0VBeEJSO0VBMkJNO0lBQ0Usa0JBQUE7SUFDQSwwQkFBQTtJQUNBLGVBQUE7RUF6QlI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5pbmZvcm1hY29lcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYXBwLXF1YWRyYWRvIHtcclxuICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgaGVpZ2h0OiAxLjl2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXR1bG8ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luOiAwIDAgMCAzJTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS1oYW1idXJndWVyIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaGVpZ2h0OiAydmg7XHJcbiAgICBtYXJnaW46IDIlIDAgMCAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJl9fZmlyc3QtbGluZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19zZWNvbmQtbGluZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aGlyZC1saW5lIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS1oYW1idXJndWVyID4gKiB7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaGFtYnVyZ3Vlcjpob3ZlciA+ICp7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1oYW1iIHtcclxuICAgIHdpZHRoOiA4JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG5cclxuICAgIC5tZW51LWhhbWJ1cmd1ZXJfX2ZpcnN0LWxpbmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaGFtYnVyZ3Vlcl9fc2Vjb25kLWxpbmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTBkZWcpO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IDAgMjUlIDI1JSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWhhbWJ1cmd1ZXJfX3RoaXJkLWxpbmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGVza3RvcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KXtcclxuICAuY29udGVudCB7XHJcblxyXG4gICAgLmluZm9ybWFjb2VzIHtcclxuXHJcbiAgICAgICZfX3RpdHVsbzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgLyBcIjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX3N1YnRpdHVsbyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaGFtYnVyZ3VlciB7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgLm1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3Age1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgIC5pbmZvcm1hY29lcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJl9fdGl0dWxvIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDMlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgLmxpc3RhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pdGVtOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { elementoFocado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isHamburguerAberto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");



class FooterComponent {
    constructor() {
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"];
    }
    ngOnInit() {
    }
    getDate() {
        return new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 4, consts: [[1, "content"], [1, "informacoes"], [1, "email"], [1, "titulo"], ["href", "mailto:lucassj.dev@gmail.com"], [1, "redes-sociais"], [1, "redes-sociais__titulo"], [1, "lista"], [1, "lista__item"], ["href", "#", "target", "_blank"], ["alt", "Icone Twitter", 3, "src"], ["href", "", "target", "_blank"], ["alt", "Icone Linkedin", 3, "src"], ["alt", "Icone Instagram", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " lucassj.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Follow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.getDate(), " by Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_TWITTER, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_LINKEDIN, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_INSTAGRAM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5%;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%] {\n  display: inherit;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-evenly;\n  width: 70%;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   .redes-sociais__titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   .lista__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%]   .informacoes[_ngcontent-%COMP%] {\n    flex-flow: row wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBS007RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFIUjtBQUtRO0VBQ0UsZ0JBQUE7QUFIVjtBQUtVO0VBQ0UsVUFBQTtBQUhaO0FBV0E7RUFFSTtJQUNFLG1CQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgLmluZm9ybWFjb2VzIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogNzAlO1xyXG5cclxuICAgIC50aXR1bG8ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWRlcy1zb2NpYWlzIHtcclxuXHJcbiAgICAgICZfX3RpdHVsbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICAuaW5mb3JtYWNvZXMge1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i98n":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ "z7Cr");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "3bwB");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language/language.component */ "S3qR");







class ResumeModule {
}
ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumeModule_Factory(t) { return new (t || ResumeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _language_language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _language_language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kyqi":
/*!*******************************************************!*\
  !*** ./src/app/shared/quadrado/quadrado.component.ts ***!
  \*******************************************************/
/*! exports provided: QuadradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadradoComponent", function() { return QuadradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class QuadradoComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuadradoComponent.ɵfac = function QuadradoComponent_Factory(t) { return new (t || QuadradoComponent)(); };
QuadradoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuadradoComponent, selectors: [["app-quadrado"]], decls: 1, vars: 0, consts: [[1, "quadrado"]], template: function QuadradoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".quadrado[_ngcontent-%COMP%] {\n  content: \"\";\n  background: var(--azul);\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxxdWFkcmFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoicXVhZHJhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhZHJhZG8ge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXp1bCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuadradoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quadrado',
                templateUrl: './quadrado.component.html',
                styleUrls: ['./quadrado.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mFYO":
/*!*********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_card_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/card-project */ "qaPJ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/quadrado/quadrado.component */ "kyqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "vzVP");








function ProjectsComponent_app_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 5);
} if (rf & 2) {
    const projeto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projeto", projeto_r1);
} }
class ProjectsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnDestroy() {
        this.observable$.unsubscribe();
    }
    ngOnInit() {
        this.listaProjecto = [];
        this.observable$ = this.service.buscarDadosGithub().subscribe(response => {
            const lista = ['tcc-fed-fio-navalha', 'frontend-mentor', 'campact_huffman', 'algorithms'];
            const filtrados = response.filter(projeto => lista.includes(projeto.name));
            filtrados.forEach(item => {
                const projeto = new _models_card_project__WEBPACK_IMPORTED_MODULE_1__["CardProject"](item.name, 'Software Developer', item.description, this.chooseImage(item.name), item.html_url);
                this.listaProjecto.push(projeto);
            });
        });
    }
    chooseImage(nomeProjeto) {
        let index = 0;
        let pathImage = '';
        switch (nomeProjeto) {
            case 'campact_huffman':
                pathImage = 'https://raw.githubusercontent.com/luccastraumer/campact_huffman/main/1000px-Huffman_tree.svg.png';
                break;
            case 'tcc-fed-fio-navalha':
                pathImage = 'https://github.com/LuccasTraumer/tcc-fed-fio-navalha/blob/main/images/buscar.png?raw=true';
                break;
            case 'frontend-mentor':
                const opcoesImagensFrontend = [
                    'https://github.com/LuccasTraumer/frontend-mentor/raw/main/ecommerce-product-page-main/result/desktop.png',
                    'https://github.com/LuccasTraumer/frontend-mentor/raw/main/nft-preview-card-component-main/challenge/image/desktop-results.png',
                    'https://github.com/LuccasTraumer/frontend-mentor/raw/main/sunnyside-agency-landing-page-main/agency/src/assets/screenshot/desktop.png'
                ];
                index = (+(Math.random() * (opcoesImagensFrontend.length - 1) - 1).toFixed(0));
                pathImage = opcoesImagensFrontend[index < 0 ? 0 : index];
                break;
            case 'algorithms':
                const opcoesImagensAlg = [
                    'https://github.com/LuccasTraumer/algorithms/raw/main/queue/assets/Queue-Data-Structures-1024x1024.png',
                    'https://github.com/LuccasTraumer/algorithms/raw/main/stack/assets/push.png',
                    'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/doubly_linked_list/assets/circular-doubly-linked-list.png',
                    'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/linkedlist/assets/image_concept.png',
                ];
                index = (+(Math.random() * (opcoesImagensAlg.length - 1) - 1).toFixed(0));
                pathImage = opcoesImagensAlg[index < 0 ? 0 : index];
                break;
            default:
                pathImage = '';
                break;
        }
        return pathImage;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 1, consts: [[1, "content"], [1, "info"], [1, "titulo"], [1, "description"], [3, "projeto", 4, "ngFor", "ngForOf"], [3, "projeto"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " These are some of my personal projects. Some are school or college assignments. Most of them were made solely and exclusively by me, from their conception to the \"final delivery\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_app_card_8_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaProjecto);
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_3__["QuadradoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--bg-marrom);\n  display: flex;\n  flex-direction: column;\n  padding: 10%;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  margin-right: 5%;\n  width: 5vw;\n  height: 1.9vh;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  text-align: center;\n  letter-spacing: 1.5px;\n}\n@media screen and (min-width: 1440px) {\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n    margin-right: 2%;\n    height: 4vh;\n    width: 2vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBR0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUROO0FBR007RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBRFI7QUFJTTtFQUNFLGlCQUFBO0FBRlI7QUFPSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTE47QUFVQTtFQUtRO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQVhSO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbWFycm9tKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTAlO1xyXG5cclxuICAuaW5mbyB7XHJcblxyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgYXBwLXF1YWRyYWRvIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjl2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDUlIDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICAuaW5mbyB7XHJcblxyXG4gICAgICAudGl0dWxvIHtcclxuICAgICAgICBhcHAtcXVhZHJhZG8ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgIGhlaWdodDogNHZoO1xyXG4gICAgICAgICAgd2lkdGg6IDJ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "qaPJ":
/*!*************************************************!*\
  !*** ./src/app/projects/models/card-project.ts ***!
  \*************************************************/
/*! exports provided: CardProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProject", function() { return CardProject; });
class CardProject {
    constructor(nomeProjeto, cargo, descricao, pathImage, linkRep) {
        this.nomeProjeto = nomeProjeto;
        this.cargo = cargo;
        this.descricao = descricao;
        this.pathImage = pathImage;
        this.linkRepository = linkRep;
    }
}


/***/ }),

/***/ "sELr":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isItalicText ? "italic" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.textContent, " ");
} }
function ButtonComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.textContent, " ");
} }
class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { buttonAzulHidden: "buttonAzulHidden", textContent: "textContent", isItalicText: "isItalicText" }, decls: 2, vars: 2, consts: [["class", "botao azul", 3, "ngClass", 4, "ngIf"], ["class", "botao transp", 4, "ngIf"], [1, "botao", "azul", 3, "ngClass"], [1, "botao", "transp"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_button_0_Template, 2, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_button_1_Template, 2, 1, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonAzulHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonAzulHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".botao[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 50px;\n  font-weight: bold;\n  text-transform: uppercase;\n  width: 100%;\n  padding: 2%;\n  margin-right: 5%;\n}\n\n.azul[_ngcontent-%COMP%] {\n  background: var(--azul);\n  color: white;\n}\n\n.azul[_ngcontent-%COMP%]:hover {\n  background: inherit;\n  color: #111111;\n  border: 1px solid #000;\n}\n\n.transp[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  background: inherit;\n}\n\n.transp[_ngcontent-%COMP%]:hover {\n  background: var(--azul);\n  color: white;\n}\n\n.italic[_ngcontent-%COMP%] {\n  font-weight: initial;\n  font-size: 0.8rem;\n  padding: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90YW8ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmF6dWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmF6dWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLnRyYW5zcCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4udHJhbnNwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1henVsKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { buttonAzulHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isItalicText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
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

/***/ "vzVP":
/*!*************************************************!*\
  !*** ./src/app/projects/card/card.component.ts ***!
  \*************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_card_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/card-project */ "qaPJ");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/quadrado/quadrado.component */ "kyqi");




class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { projeto: "projeto" }, decls: 12, vars: 6, consts: [["target", "_blank", 3, "href"], [1, "content"], [1, "title"], [1, "titulo"], [1, "cargo"], [1, "descricao"], [3, "src", "alt"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.projeto.linkRepository, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projeto.nomeProjeto, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projeto.cargo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projeto.descricao, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.projeto.pathImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Imagem do Projeto ", ctx.projeto.nomeProjeto, "");
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_2__["QuadradoComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: -10px 10px 15px -15px #000000;\n  margin-bottom: 5%;\n  display: flex;\n  flex-flow: column wrap;\n  width: 100%;\n  overflow: hidden;\n  transition: all 10s ease-in-out;\n  border: none;\n}\n\n.content[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  background: var(--azul);\n  height: 13%;\n  width: 5%;\n  display: flex;\n  position: absolute;\n  left: 0;\n  top: 2%;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-left: 15%;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  color: var(--azul);\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 0;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .cargo[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  padding: 10%;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%]:hover {\n  border: 2px solid var(--azul);\n}\n\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    height: 25vh;\n    padding: 10%;\n  }\n  .content[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n    top: 15%;\n    width: 2%;\n  }\n  .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 5% 0;\n    margin-left: 5%;\n  }\n  .content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n    padding: 5%;\n    width: 50%;\n  }\n  .content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0;\n    overflow: hidden;\n  }\n  .content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: inherit;\n  }\n\n  .content[_ngcontent-%COMP%]:last-child {\n    padding: 0;\n  }\n}\n\n@media screen and (min-width: 1440px) {\n  .content[_ngcontent-%COMP%] {\n    height: 40vh;\n  }\n  .content[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n    top: 30%;\n    width: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsT0FBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRE47O0FBSUk7RUFDRSxpQkFBQTtBQUZOOztBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFRSTtFQUNFLFdBQUE7QUFOTjs7QUFXQTtFQUNFLDZCQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBUkY7RUFVRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0VBUko7RUFXRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBVEo7RUFZRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBVko7RUFhRTtJQUNFLFlBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFYSjtFQWFJO0lBQ0UsZUFBQTtFQVhOOztFQWdCQTtJQUNFLFVBQUE7RUFiRjtBQUNGOztBQWdCQTtFQUNFO0lBQ0UsWUFBQTtFQWRGO0VBZ0JFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7RUFkSjtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMTBweCAxNXB4IC0xNXB4ICMwMDAwMDA7XHJcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAxNXB4IC0xNXB4ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEwcyBlYXNlLWluLW91dDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG5cclxuICBhcHAtcXVhZHJhZG8ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXp1bCk7XHJcbiAgICBoZWlnaHQ6IDEzJTtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAyJTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG5cclxuICAgIC50aXR1bG8ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZ28ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmljYW8ge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgY29sb3I6cmdiYSgwLDAsMCwxKTtcclxuICB9XHJcblxyXG4gIGZpZ3VyZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcblxyXG4gICAgYXBwLXF1YWRyYWRvIHtcclxuICAgICAgdG9wOiAxNSU7XHJcbiAgICAgIHdpZHRoOiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiA1JSAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaWNhbyB7XHJcbiAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50Omxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuXHJcbiAgICBhcHAtcXVhZHJhZG8ge1xyXG4gICAgICB0b3A6IDMwJTtcclxuICAgICAgd2lkdGg6IDElO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { projeto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "z7Cr":
/*!***************************************************!*\
  !*** ./src/app/resume/resume/resume.component.ts ***!
  \***************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _model_card_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/card-job */ "VqAo");
/* harmony import */ var _model_card_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/card-education */ "VsSX");
/* harmony import */ var _shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/quadrado/quadrado.component */ "kyqi");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/language.component */ "S3qR");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "3bwB");









function ResumeComponent_app_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 9);
} if (rf & 2) {
    const trabalho_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", trabalho_r2);
} }
function ResumeComponent_app_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 9);
} if (rf & 2) {
    const education_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", education_r3);
} }
class ResumeComponent {
    constructor() { }
    ngOnInit() {
        const descJobs = 'Actualy I work as a Full stack developer with Angular 8 and Spring boot(Java 8+).';
        const ciandt = new _model_card_job__WEBPACK_IMPORTED_MODULE_1__["CardJob"](2019, 'Campinas', descJobs, 'Desenvolvedor Software', 'CIANDT');
        const descCotucaWork = 'I worked as a computer monitor, where I helped students with technical doubts in computer science throughout the course, from Arduino with C ++ to mobile devices with Swift and Database. The contexts and languages ​​used are quite diverse.';
        const cotuca = new _model_card_job__WEBPACK_IMPORTED_MODULE_1__["CardJob"](2020, 'Campinas', descCotucaWork, 'PADEMT tutor', 'COTUCA', 2021);
        this.listaTrabalhos = [ciandt, cotuca];
        const descCotucaEdu = 'Systems Development Course was where I learned most of the Techniques, languages ​​and Methodologies necessary to act as a Software Developer and it was also where I opened the doors to work with what I like most.';
        const cotucaEdu = new _model_card_education__WEBPACK_IMPORTED_MODULE_2__["CardEducation"](2019, 'Campinas', descJobs, 'Techinical', 'COTUCA', 2021);
        const metrocamp = new _model_card_education__WEBPACK_IMPORTED_MODULE_2__["CardEducation"](2021, 'Campinas', 'To apromorated my Skills and get a Degree to Superior Curse', 'Graduating', 'Unimetrocamo Wyden');
        this.listaEnsino = [cotucaEdu, metrocamp];
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 17, vars: 4, consts: [[1, "resume"], [1, "title"], [1, "titulo"], [1, "experience"], [1, "info"], [3, "textContent", "isItalicText"], [3, "card", 4, "ngFor", "ngForOf"], [1, "education"], [1, "language"], [3, "card"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quadrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResumeComponent_app_card_10_Template, 1, 1, "app-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumeComponent_app_card_14_Template, 1, 1, "app-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", "Download CV")("isItalicText", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaTrabalhos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaEnsino);
    } }, directives: [_shared_quadrado_quadrado_component__WEBPACK_IMPORTED_MODULE_3__["QuadradoComponent"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _language_language_component__WEBPACK_IMPORTED_MODULE_6__["LanguageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".resume[_ngcontent-%COMP%] {\n  background: var(--bg-marrom);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5%;\n}\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: inherit;\n  flex-direction: row;\n  align-items: center;\n}\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n  margin-right: 5%;\n  width: 5vw;\n  height: 1.9vh;\n}\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.resume[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-around;\n  padding: 10% 0;\n}\n.resume[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin: 0;\n}\n.resume[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.resume[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n.resume[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 10% 0;\n  width: 100%;\n}\n.resume[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.resume[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (min-width: 1440px) {\n  .resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-quadrado[_ngcontent-%COMP%] {\n    height: 3vh;\n    width: 2vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNOO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBTUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBSk47QUFNTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBSlI7QUFPTTtFQUNFLFVBQUE7QUFMUjtBQVNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUE47QUFXRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFUSjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBVE47QUFhRTtFQUNFLFdBQUE7QUFYSjtBQWVBO0VBR007SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQWROO0FBQ0YiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbWFycm9tKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBhcHAtcXVhZHJhZG8ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICBoZWlnaHQ6IDEuOXZoO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXhwZXJpZW5jZSB7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgcGFkZGluZzogMTAlIDA7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lZHVjYXRpb24ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDEwJSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpe1xyXG4gIC5yZXN1bWUge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgYXBwLXF1YWRyYWRvIHtcclxuICAgICAgICBoZWlnaHQ6IDN2aDtcclxuICAgICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


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