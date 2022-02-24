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

/***/ "NkQd":
/*!***************************************!*\
  !*** ./src/model/repository-model.ts ***!
  \***************************************/
/*! exports provided: RepositoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryModel", function() { return RepositoryModel; });
class RepositoryModel {
}


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
Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/menu-hamburguer-black-png.png';
Constantes.PATH_ICON_WHITE_MENU_HAMBURGUER = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/remade/page/src/assets/menu-hamburguer-white-png.png';
Constantes.PATH_ICONE_ENVIAR_MENSAGEM = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/send-message-icon.png?raw=true';
Constantes.PATH_ICONE_ARROW = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/arrow-1.png?raw=true';
Constantes.PATH_ICONE_LINKEDIN = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/17042c6f4018cfea0a11f7245696e0764b59fb54/page/src/assets/novaPagina/linkedin-icon.svg';
Constantes.PATH_ICONE_TWITTER = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/17042c6f4018cfea0a11f7245696e0764b59fb54/page/src/assets/novaPagina/twitter-icon.svg';
Constantes.PATH_ICONE_INSTAGRAM = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/17042c6f4018cfea0a11f7245696e0764b59fb54/page/src/assets/novaPagina/instagram-icon.svg';
Constantes.PATH_ICONE_GITHUB = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/17042c6f4018cfea0a11f7245696e0764b59fb54/page/src/assets/novaPagina/github-icon.svg';
Constantes.IMAGEM_ABOUT = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/image-page.png?raw=true';
Constantes.ICONE_ANGULAR = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/a3abee5369e659a8a7a21d8c6f73d4d2192b58be/page/src/assets/novaPagina/icons8-angularjs.svg';
Constantes.ICONE_GCP = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/google-cloud-platform-icon.svg';
Constantes.ICONE_JAVA = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/java-icon.svg';
Constantes.ICONE_JAVASCRIPT = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/javascript-icon.svg';
Constantes.ICONE_NGINX = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/nginx-icon.png?raw=true';
Constantes.ICONE_PYTHON = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/python-icon.svg';
Constantes.ICONE_TYPESCRIPT = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/typescript-icon.svg';
Constantes.ICONE_DOCKER = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b7e4025f8843cf60c4b27166884b71e7e875fcbb/page/src/assets/novaPagina/docker-icon.svg';
Constantes.ICONE_CSS = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/css-icon.png?raw=true';
Constantes.ICONE_SETA_GITHUB = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/arrow-send-github.png?raw=true';
Constantes.ICONE_SETA_IMAGENS = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/arrow-volta.png?raw=true';
Constantes.ICONE_ARROW_HIRE = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/arrow_hire.png?raw=true';
Constantes.IMAGE_CONTACT_HI = 'https://github.com/LuccasTraumer/luccastraumer.github.io/blob/novaPagina/page/src/assets/novaPagina/contact.hi.png?raw=true';
Constantes.ICON_EMAIL = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/45efca40017a6b0f3d6ea8cf7f9414b8a7ab0051/page/src/assets/novaPagina/email-icon.svg';
Constantes.ICON_LOCATION = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/45efca40017a6b0f3d6ea8cf7f9414b8a7ab0051/page/src/assets/novaPagina/location-icon.svg';
Constantes.SEARCH_ICON = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/45efca40017a6b0f3d6ea8cf7f9414b8a7ab0051/page/src/assets/novaPagina/search-icon.svg';


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
/* harmony import */ var _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduce-card/introduce-card.component */ "p6Yz");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");






class AppComponent {
    constructor() {
        this.title = 'page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "introduce"], ["id", "skills"], [1, "projects"], [1, "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-introduce-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_1__["IntroduceCardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], styles: ["@media screen and (min-width: 768px) {\n  .projects[_ngcontent-%COMP%] {\n    height: 60%;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    margin-top: 9%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFBO0VBQ0Y7O0VBRUE7SUFDRSxjQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduce-card/introduce-card.component */ "p6Yz");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_5__["IntroduceCardComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_5__["IntroduceCardComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");



class ContactComponent {
    constructor() {
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"];
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 33, vars: 3, consts: [[1, "content"], [1, "container"], [1, "left"], [1, "up-title"], [1, "title"], [1, "contacts"], [1, "email"], ["alt", "", 3, "src"], [1, "info"], [1, "sub-title"], [1, "location"], [1, "right"], [1, "circle"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Let\u2019s Discuss Your Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " lucassj.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Rua Francisco Mesquita, Campinas 07 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 2021 All Right Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " lucassj.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICON_EMAIL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICON_LOCATION, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.IMAGE_CONTACT_HI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  background: var(--yellow-color);\n  padding: 5% 5% 5% 0;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: 0;\n  top: 5%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 15% 5% 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin: 0 auto;\n  padding: 6% 0 2% 10%;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-block;\n  padding: 5%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: var(--black-color);\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  padding: 5%;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1.5px solid #000;\n  margin: 0 auto;\n  width: 90%;\n}\n.content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  padding: 5%;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 5% 0;\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    top: 10%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 5%;\n  }\n  .content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUdNO0VBQ0UsT0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFGUjtBQU9RO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTFY7QUFPVTtFQUNFLFVBQUE7QUFMWjtBQVFVO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFOWjtBQVFZO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQU5kO0FBY007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWNRO0VBQ0UsV0FBQTtBQVpWO0FBa0JFO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWhCSjtBQW1CRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWpCSjtBQXFCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBQ0EscUNBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQWxCRjtFQW9CRTtJQUNFLFVBQUE7RUFsQko7RUFvQkk7SUFDRSxRQUFBO0VBbEJOO0VBcUJJO0lBQ0UsWUFBQTtFQW5CTjtFQXVCTTtJQUNFLFVBQUE7RUFyQlI7RUEwQkU7SUFDRSxVQUFBO0VBeEJKO0VBMEJJO0lBQ0UsV0FBQTtFQXhCTjtFQXlCTTtJQUNFLFdBQUE7RUF2QlI7O0VBOEJFO0lBQ0UsVUFBQTtFQTNCSjtFQThCRTtJQUNFLFVBQUE7RUE1Qko7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgcGFkZGluZzogNSUgNSUgNSUgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAudXAtdGl0bGUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMTUlIDUlIDA7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhY3RzIHtcclxuXHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA2JSAwIDIlIDEwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG5cclxuICAgICAgICAgICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjkwJTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuY29udGVudCAuY29udGFpbmVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgIC51cC10aXRsZSB7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFjdHMge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuXHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGhyIHtcclxuICAgICAgbWFyZ2luOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");





class HeaderComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"];
        this.menuHambuguerAberto = false;
    }
    ngOnInit() {
    }
    mudarEstadoMenuHamburguer() {
        this.menuHambuguerAberto = !this.menuHambuguerAberto;
    }
    getManuHamburguer() {
        return _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"].PATH_ICON_BLACK_MENU_HAMBURGUER;
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        this.clickMenu();
    }
    clickMenu() {
        this.menuHambuguerAberto = !this.menuHambuguerAberto;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 2, consts: [[1, "content", "mobile"], [1, "logo"], ["alt", "Menu Hamburguer", 3, "src", "click"], [1, "content", "desktop"], [1, "input"], ["type", "search", "value", "Search", "name", "", "id", ""], ["alt", "", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_3_listener() { return ctx.mudarEstadoMenuHamburguer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " LT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getManuHamburguer(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.SEARCH_ICON, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  font-size: 1.5rem;\n  justify-content: space-around;\n  max-width: 85%;\n  padding: 5% 0;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n  content: \"<\";\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::after {\n  content: \">\";\n}\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .desktop[_ngcontent-%COMP%] {\n    display: inline-flex;\n    font-size: 1.8rem;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    width: content-box;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .input[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    position: relative;\n    width: 20%;\n  }\n  .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    padding: 5%;\n    width: 100%;\n  }\n  .input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15%;\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFNQTtFQUNFLGFBQUE7QUFIRjtBQU1BO0VBQ0U7SUFDRSxhQUFBO0VBSEY7O0VBTUE7SUFDRSxlQUFBO0lBQ0EsV0FBQTtFQUhGOztFQU1BO0lBQ0Usb0JBQUE7SUFDQSxpQkFBQTtFQUhGOztFQU1BO0lBQ0Usa0JBQUE7RUFIRjs7RUFNQTtJQUNFLGFBQUE7SUFDQSxxQ0FBQTtFQUhGOztFQU1BO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBSEY7RUFLRTtJQUNFLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUFISjtFQU1FO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQUpKO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogNSUgMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5sb2dvOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJzwnO1xyXG4gIH1cclxuXHJcbiAgLmxvZ286OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICc+JztcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2t0b3Age1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5kZXNrdG9wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogY29udGVudC1ib3g7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTUlO1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"] }]; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






function SkillsComponent_figure_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r2.pathImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", skill_r2.nomeSkill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r2.nomeSkill, " ");
} }
function SkillsComponent_article_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", exp_r3.anoInicio, " - ", exp_r3.anoTermino ? exp_r3.anoTermino : "Present", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r3.cargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r3.nomeEmpresa, " ");
} }
class SkillsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.listaSkills = Array();
        this.listaExperiences = Array();
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"];
    }
    ngOnInit() {
        this.listaSkills = this.dataService.buscarDadosSkills();
        this.listaExperiences = this.dataService.buscarDadosExperience();
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 32, vars: 3, consts: [[1, "content-about", "mobile"], [1, "left-side"], [1, "up-title"], [1, "title"], [1, "description", "desktop"], [1, "container"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "right-side"], [1, "experience"], [1, "hire", "desktop"], [1, "background"], [1, "linha"], ["alt", "", 3, "src"], [3, "src", "alt"], [1, "datas"], [1, "cargo"], [1, "empresa"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Skills & Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A full stack developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Passionate in frontend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ready to solution new problems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ready to learn more another things. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SkillsComponent_figure_18_Template, 4, 3, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SkillsComponent_article_24_Template, 8, 4, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hire Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaExperiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICONE_ARROW_HIRE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".content-about[_ngcontent-%COMP%] {\n  background: var(--yellow-color);\n  padding: 15% 7%;\n  position: relative;\n}\n.content-about[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n.content-about[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: -1%;\n  top: 5%;\n  transform: rotate(-35deg);\n}\n.content-about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 10% 0;\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 5%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  margin: 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 5% 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cargo[_ngcontent-%COMP%] {\n  font-weight: 900;\n  padding: 0 10%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .empresa[_ngcontent-%COMP%] {\n  opacity: 70%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding: 0 5%;\n}\n@media screen and (min-width: 768px) {\n  .content-about[_ngcontent-%COMP%] {\n    align-items: center;\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: repeat(2, 1fr);\n    width: 100%;\n  }\n  .content-about[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .content-about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 2%;\n    top: 10%;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    margin: 0;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border: #111111 1.5px solid;\n    left: -4%;\n    position: absolute;\n    top: -21.5%;\n    width: 2%;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%] {\n    height: 10rem;\n    width: 10rem;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n    background-color: var(--black-color);\n    color: var(--white-color);\n    display: inline-flex;\n    height: inherit;\n    border-radius: 100%;\n    left: 90%;\n    position: relative;\n    text-align: center;\n    width: inherit;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .linha[_ngcontent-%COMP%] {\n    border: 2px solid #fff;\n    border-radius: inherit;\n    margin: 10%;\n    padding: 38%;\n    position: absolute;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-block;\n    position: relative;\n    height: 100%;\n    right: 10%;\n    top: 40%;\n    width: 100%;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 15%;\n    margin: 40% 63%;\n    position: absolute;\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUZKO0FBSUk7RUFDRSxrQkFBQTtBQUZOO0FBSU07RUFDRSxVQUFBO0FBRlI7QUFPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBTEo7QUFPSTtFQUNFLGdCQUFBO0FBTE47QUFRSTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtBQU5OO0FBU0k7RUFDRSxhQUFBO0FBUE47QUFTTTtFQUNFLGNBQUE7QUFQUjtBQVNNO0VBQ0UsU0FBQTtBQVBSO0FBVU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVdNO0VBQ0UsWUFBQTtBQVRSO0FBYUk7RUFDRSxhQUFBO0FBWE47QUFpQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxXQUFBO0VBZEY7RUFnQkU7SUFDRSxjQUFBO0VBZEo7RUFpQkU7SUFDRSxvQkFBQTtFQWZKO0VBbUJJO0lBQ0UsUUFBQTtJQUNBLFFBQUE7RUFqQk47RUFvQkk7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQWxCTjtFQXNCTTtJQUNFLGtCQUFBO0VBcEJSO0VBc0JRO0lBQ0UsMkJBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQXBCVjtFQTBCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBeEJKO0VBMEJJO0lBQ0Usb0NBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBeEJOO0VBMEJNO0lBQ0Usc0JBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUF4QlI7RUEyQk07SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBekJSO0VBNEJNO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUExQlI7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hYm91dCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxNSUgNyU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZGVza3RvcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnVwLXRpdGxlIHtcclxuICAgIGxlZnQ6IC0xJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4cGVyaWVuY2Uge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDUlIDA7XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZ28ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lbXByZXNhIHtcclxuICAgICAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnRpY2xlPnAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuY29udGVudC1hYm91dCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LXNpZGUge1xyXG4gICAgICAudXAtdGl0bGUge1xyXG4gICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBib3JkZXI6ICMxMTExMTEgMS41cHggc29saWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IC00JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMS41JTtcclxuICAgICAgICAgICAgd2lkdGg6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaXJlIHtcclxuICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG5cclxuICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgICAubGluaGEge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICBtYXJnaW46IDEwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDM4JTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgbWFyZ2luOiA0MCUgNjMlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "p6Yz":
/*!************************************************************!*\
  !*** ./src/app/introduce-card/introduce-card.component.ts ***!
  \************************************************************/
/*! exports provided: IntroduceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceCardComponent", function() { return IntroduceCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function IntroduceCardComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rede_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", rede_r1.linkRedeSocial, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rede_r1.pathImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", rede_r1.altRedeSocial);
} }
class IntroduceCardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"];
    }
    ngOnInit() {
        this.redeSociais = this.dataService.buscarDadosSocialMedia();
    }
}
IntroduceCardComponent.ɵfac = function IntroduceCardComponent_Factory(t) { return new (t || IntroduceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
IntroduceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroduceCardComponent, selectors: [["app-introduce-card"]], decls: 27, vars: 4, consts: [[1, "content"], [1, "left"], [1, "up-title"], [1, "titulo"], [1, "descricao"], [1, "contatos"], ["href", "", 1, "link"], ["type", "button", "value", "Let\u2019s talk", 1, "button", "send-message"], ["alt", "Icon enviar mensagem", 3, "src"], ["type", "button", "value", "Portfolio", 1, "button", "portfolio"], ["alt", "Icone Arrow Portfolio", 3, "src"], [1, "redes-sociais"], ["class", "item-rede-social", 4, "ngFor", "ngForOf"], [1, "right"], ["alt", "", 3, "src"], [1, "item-rede-social"], ["target", "_blank", 3, "href"], [3, "src", "alt"]], template: function IntroduceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hello World! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We developer Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hi I\u2019m a Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " creating & developer website, pages and systems all across the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Social Medias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IntroduceCardComponent_li_22_Template, 3, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u201CPeople ignore quality that ignore the cust\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_ENVIAR_MENSAGEM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_ARROW, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.redeSociais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.IMAGEM_ABOUT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--white-color);\n  padding: 15% 7%;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: -1%;\n  top: 7%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin: 10% 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  margin: 10% 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2):before {\n  content: \"__\";\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 20px;\n  display: inherit;\n  justify-content: center;\n  list-style: none;\n  margin: 5% auto;\n  padding: 2% 5%;\n  text-decoration: none;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: inherit;\n  font-weight: 500;\n  letter-spacing: 2px;\n  transition: all 0.5s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  width: 20%;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  background: var(--purple-color);\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child   input[_ngcontent-%COMP%] {\n  color: var(--white-color);\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child:hover {\n  background: #6042f3;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child:hover {\n  background: var(--bg-color);\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  margin: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inherit;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline-flex;\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 1%;\n    top: 17%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: auto;\n    position: relative;\n    text-align: center;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: 1.1rem;\n    font-weight: 900;\n    text-align: start;\n    padding-left: 55%;\n    position: absolute;\n    top: -8%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludHJvZHVjZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQU9JO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFMTjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQVFNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFOUjtBQVVFO0VBQ0UsK0JBQUE7QUFSSjtBQVVJO0VBQ0UseUJBQUE7QUFSTjtBQVdJO0VBQ0UsVUFBQTtBQVROO0FBYUU7RUFDSSxtQkFBQTtBQVhOO0FBY0U7RUFDSSwyQkFBQTtBQVpOO0FBZUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBYk47QUFpQlU7RUFDRSxVQUFBO0FBZlo7QUF1QkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtFQXBCRjtFQXVCSTtJQUNFLFFBQUE7SUFDQSxRQUFBO0VBckJOO0VBeUJFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQXZCSjtFQXlCSTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQXZCTjtFQTBCSTtJQUNFLFVBQUE7RUF4Qk47QUFDRiIsImZpbGUiOiJpbnRyb2R1Y2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgcGFkZGluZzogMTUlIDclO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudXAtdGl0bGUge1xyXG4gICAgbGVmdDogLTElO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvIHtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpY2FvIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMCUgMDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHA6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdfXyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGF0b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAyJSA1JTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhdG9zID4gYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhdG9zID4gYTpmaXJzdC1jaGlsZDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2MDQyZjM7XHJcbiAgfVxyXG5cclxuICAuY29udGF0b3MgPiBhOmxhc3QtY2hpbGQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAucmVkZXMtc29jaWFpcyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW46IDUlIDA7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgLnVwLXRpdGxlIHtcclxuICAgICAgICBsZWZ0OiAxJTtcclxuICAgICAgICB0b3A6IDE3JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1JTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroduceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduce-card',
                templateUrl: './introduce-card.component.html',
                styleUrls: ['./introduce-card.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


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

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Constantes */ "Rl2v");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/repository-model */ "NkQd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function ProjectsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.CONSTANTES.ICONE_SETA_GITHUB, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.image || ctx_r0.preencherImagens(project_r1.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.description.substr(0, 50), " ");
} }
class ProjectsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.CONSTANTES = _utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"];
        this.listRep = ['tcc-fed-fio-navalha',
            'tcc-srv-fio-navalha', 'algorithms', 'AirCnC', 'WazeDev', 'campact_huffman'];
        this.repositories = [];
        this.index = 0;
        this.preencherDadosFrontendMentor();
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return this.dataService
            .buscarDadosGithub()
            .subscribe(data => {
            data.map((repository) => {
                if (this.listRep.indexOf(repository.name) >= 0) {
                    this.repositories.push(repository);
                    this.projectShow = this.repositories[this.index];
                }
            });
        }).unsubscribe;
    }
    preencherDadosFrontendMentor() {
        const ecomerce = new _model_repository_model__WEBPACK_IMPORTED_MODULE_3__["RepositoryModel"]();
        ecomerce.name = 'E-commerce product page';
        ecomerce.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/ecommerce-product-page-main';
        ecomerce.description = 'This is a solution to the E-commerce product page challenge on Frontend Mentor. Frontend ' +
            'Mentor challenges help you improve your coding skills by building realistic projects.';
        ecomerce.image = '../../assets/imageProjects/ecomerce-mobile.png';
        const nftCard = new _model_repository_model__WEBPACK_IMPORTED_MODULE_3__["RepositoryModel"]();
        nftCard.name = 'NFT preview card component';
        nftCard.description = 'This is a solution to the NFT preview card component challenge on Frontend Mentor. Frontend' +
            ' Mentor challenges help you improve your coding skills by building realistic projects.';
        nftCard.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/nft-preview-card-component-main';
        nftCard.image = '../../assets/imageProjects/nft-card-mobile.png';
        const agencia = new _model_repository_model__WEBPACK_IMPORTED_MODULE_3__["RepositoryModel"]();
        agencia.name = 'Sunnyside agency landing page';
        agencia.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/sunnyside-agency-landing-page-main';
        agencia.description = 'This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.' +
            ' Frontend Mentor challenges help you improve your coding skills by building realistic projects.';
        agencia.image = '../../assets/imageProjects/agencia-mobile.png';
        this.repositories.push(ecomerce);
        this.repositories.push(nftCard);
        this.repositories.push(agencia);
    }
    preencherImagens(name) {
        let image = '';
        switch (name) {
            case 'tcc-fed-fio-navalha':
                image = '../../assets/imageProjects/tcc-fed-mobile.png';
                break;
            case 'tcc-srv-fio-navalha':
                image = '../../assets/imageProjects/tcc-srv-mobile.png';
                break;
            case 'algorithms':
                image = '../../assets/imageProjects/lista-dupla-ligada-mobile.png';
                break;
            case 'AirCnC':
                image = '../../assets/imageProjects/aircnc-mobile.png';
                break;
            case 'WazeDev':
                image = '../../assets/imageProjects/wazedev-mobile.png';
                break;
            case 'campact_huffman':
                image = '../../assets/imageProjects/huffman-mobile.png';
                break;
            default:
                break;
        }
        return image;
    }
    voltarProjeto() {
        this.index--;
        if (this.index < 0) {
            this.index = this.repositories.length - 1;
        }
        this.projectShow = this.repositories[this.index];
    }
    avancarProjeto() {
        this.index++;
        if (this.index > this.repositories.length - 1) {
            this.index = 0;
        }
        this.projectShow = this.repositories[this.index];
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 22, vars: 8, consts: [[1, "content"], [1, "up-title"], [1, "title"], [1, "projects", "mobile"], ["target", "_blank", 1, "link", 3, "href"], ["alt", "seta para github", 1, "seta-redirect", 3, "src"], [1, "container"], [1, "voltar", 3, "click"], ["alt", "seta para retroceder", 3, "src"], ["alt", "", 3, "src"], [1, "image-title"], [1, "descricao-image"], [1, "avancar", 3, "click"], ["alt", "seta para avan\u00E7ar", 3, "src"], [1, "projects", "desktop"], ["class", "container-desktop", 4, "ngFor", "ngForOf"], [1, "container-desktop"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Latest Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_9_listener() { return ctx.voltarProjeto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_18_listener() { return ctx.avancarProjeto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 10, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.projectShow.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICONE_SETA_GITHUB, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICONE_SETA_IMAGENS, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.projectShow.image || ctx.preencherImagens(ctx.projectShow.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectShow.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectShow.description.substr(0, 50), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICONE_SETA_IMAGENS, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--white-color);\n  display: block;\n  padding: 5%;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: 1%;\n  top: 8%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 10% 5% 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-flow: column wrap;\n  margin: 0 auto;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: var(--purple-color);\n  border-radius: 50%;\n  margin: 5% 25%;\n  padding: 5%;\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--yellow-color);\n  border-radius: 50%;\n  display: inline-flex;\n  height: 3vh;\n  justify-content: center;\n  opacity: 70%;\n  padding: 5%;\n  width: 25%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  padding: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    display: block;\n    height: 100%;\n    visibility: visible;\n  }\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 6%;\n    top: 8%;\n  }\n  .content[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    position: absolute;\n    visibility: visible;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%] {\n    border-radius: 5% 2%;\n    display: inline-block;\n    height: 100%;\n    margin-right: 5%;\n    overflow-x: hidden;\n    padding: 5% 0;\n    width: 20%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin: 0 70%;\n    width: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin: 15% 0 1rem;\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 5%;\n    width: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    padding: 2% 0;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .descricao-image[_ngcontent-%COMP%] {\n    font-style: italic;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(n+5):nth-child(-n+9) {\n    display: none;\n    visibility: hidden;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(1) {\n    margin-top: 20%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 15%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(3) {\n    margin-top: 10%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(4) {\n    margin-top: 5%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 6%;\n    top: 12%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFFBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFLRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSEo7QUFLSTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUhOO0FBTUk7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBSk47QUFNTTtFQUNFLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSlI7QUFNUTtFQUNFLFdBQUE7QUFKVjtBQVFNO0VBQ0UsaUJBQUE7QUFOUjtBQVFRO0VBQ0UseUJBQUE7QUFOVjtBQVVNO0VBQ0Usa0JBQUE7QUFSUjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBV1E7RUFDRSxhQUFBO0FBVFY7QUFXVTtFQUNFLGdCQUFBO0FBVFo7QUFjTTtFQUNFLGdCQUFBO0FBWlI7QUFrQkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFmRjtFQWlCRTtJQUNFLFFBQUE7SUFDQSxPQUFBO0VBZko7RUFrQkU7SUFDRSxhQUFBO0VBaEJKO0VBa0JJO0lBQ0UsYUFBQTtFQWhCTjtFQW9CRTtJQUNFLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFsQko7RUFvQkk7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQWxCTjtFQW9CTTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBbEJSO0VBcUJNO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBbkJSO0VBcUJRO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VBbkJWO0VBdUJVO0lBQ0UsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7RUFyQlo7RUF3QlU7SUFDRSxrQkFBQTtFQXRCWjtFQTRCSTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQTFCTjtFQTZCSTtJQUNFLGVBQUE7RUEzQk47RUE4Qkk7SUFDRSxlQUFBO0VBNUJOO0VBK0JJO0lBQ0UsZUFBQTtFQTdCTjtFQWdDSTtJQUNFLGNBQUE7RUE5Qk47QUFDRjtBQW1DQTtFQUVJO0lBQ0UsUUFBQTtJQUNBLFFBQUE7RUFsQ0o7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAudXAtdGl0bGUge1xyXG4gICAgbGVmdDogMSU7XHJcbiAgICB0b3A6IDglO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDEwJSA1JSAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5kZXNrdG9wIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgLmNvbnRhaW5lci1kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogNSUgMjUlO1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblxyXG4gICAgICAudm9sdGFyLC5hdmFuY2FyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGhlaWdodDogM3ZoO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDcwJTtcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudm9sdGFyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWd1cmUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUlIDA7XHJcblxyXG4gICAgICAgICAgLmltYWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmFuY2FyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIGxlZnQ6IDYlO1xyXG4gICAgICB0b3A6IDglO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3Age1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlIDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZzogNSUgMDtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgICAgICAubGluayB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNzAlO1xyXG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWd1cmUge1xyXG4gICAgICAgICAgbWFyZ2luOiAxNSUgMCAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgICAuaW1hZ2UtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmljYW8taW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lci1kZXNrdG9wOm50aC1jaGlsZChuKzUpOm50aC1jaGlsZCgtbis5KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXItZGVza3RvcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lci1kZXNrdG9wOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3A6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXItZGVza3RvcDpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5jb250ZW50IHtcclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIGxlZnQ6IDYlO1xyXG4gICAgICB0b3A6IDEyJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


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