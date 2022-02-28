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
Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER = '/assets/menu-hamburguer-black-png.png';
Constantes.PATH_ICONE_ENVIAR_MENSAGEM = '/assets/novaPagina/send-message-icon.png';
Constantes.PATH_ICONE_ARROW = '/assets/novaPagina/arrow-1.png';
Constantes.PATH_ICONE_LINKEDIN = '/assets/novaPagina/linkedin-icon.svg';
Constantes.PATH_ICONE_TWITTER = '/assets/novaPagina/twitter-icon.svg';
Constantes.PATH_ICONE_INSTAGRAM = '/assets/novaPagina/instagram-icon.svg';
Constantes.PATH_ICONE_GITHUB = '/assets/novaPagina/github-icon.svg';
Constantes.IMAGEM_ABOUT = '/assets/novaPagina/image-page.png';
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
/* harmony import */ var _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduce-card/introduce-card.component */ "p6Yz");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");







class AppComponent {
    constructor() {
        this.title = 'page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "header"], [1, "introduce"], ["id", "skills"], ["id", "projects"], ["id", "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-introduce-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _introduce_card_introduce_card_component__WEBPACK_IMPORTED_MODULE_2__["IntroduceCardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["@media screen and (min-width: 768px) {\n  #projects[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  #projects[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxXQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICNwcm9qZWN0cyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgI3Byb2plY3RzIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TQ/0":
/*!**************************************************************!*\
  !*** ./src/app/hamburguer-menu/hamburguer-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: HamburguerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburguerMenuComponent", function() { return HamburguerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");




class HamburguerMenuComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.fecharMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        this.fecharMenu.emit(false);
    }
}
HamburguerMenuComponent.ɵfac = function HamburguerMenuComponent_Factory(t) { return new (t || HamburguerMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
HamburguerMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HamburguerMenuComponent, selectors: [["app-hamburguer-menu"]], outputs: { fecharMenu: "fecharMenu" }, decls: 8, vars: 0, consts: [[1, "content"], [3, "click"]], template: function HamburguerMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_li_click_2_listener() { return ctx.onClickScroll("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_li_click_4_listener() { return ctx.onClickScroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburguerMenuComponent_Template_li_click_6_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhhbWJ1cmd1ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUFKIiwiZmlsZSI6ImhhbWJ1cmd1ZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HamburguerMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hamburguer-menu',
                templateUrl: './hamburguer-menu.component.html',
                styleUrls: ['./hamburguer-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, { fecharMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hamburguer-menu/hamburguer-menu.component */ "TQ/0");













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
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_11__["HamburguerMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
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
                    _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_11__["HamburguerMenuComponent"],
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
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 34, vars: 3, consts: [[1, "content"], [1, "container"], [1, "left"], [1, "up-title"], [1, "title"], [1, "contacts"], [1, "email"], ["alt", "Icone de Email", 3, "src"], [1, "info"], [1, "sub-title"], ["href", "mailto:lucassj.dev@gmail.com"], [1, "location"], ["alt", "Icone de Localiza\u00E7\u00E3o", 3, "src"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5665139893254!2d-47.02963508444839!3d-22.89246634311681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf73d16a6ce1%3A0xf6c9d2f62dcf1be1!2sIguatemi%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1645902339142!5m2!1spt-BR!2sbr"), "width", "300", "height", "200", "allowfullscreen", "", "loading", "lazy", 2, "border", "0", "border-radius", "10px"], [1, "right"], [1, "circle"], ["alt", "Icone para solicitar contato", 3, "src"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " lucassj.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Rua Francisco Mesquita, Campinas 07 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 2021 All Right Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " lucassj.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICON_EMAIL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICON_LOCATION, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.IMAGE_CONTACT_HI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  background: var(--yellow-color);\n  padding: 5% 5% 5% 0;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: 0;\n  top: 5%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 15% 5% 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin: 0 auto;\n  padding: 6% 0 2% 10%;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-block;\n  padding: 5%;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: var(--black-color);\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  padding: 5%;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1.5px solid #000;\n  margin: 0 auto;\n  width: 90%;\n}\n.content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  padding: 5%;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 5% 0;\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    top: 6%;\n    left: 0;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 5%;\n  }\n  .content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    top: 12%;\n    left: 12%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUdNO0VBQ0UsT0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFGUjtBQU9RO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTFY7QUFPVTtFQUNFLFVBQUE7QUFMWjtBQVFVO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFOWjtBQVFZO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQU5kO0FBY007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWNRO0VBQ0UsV0FBQTtBQVpWO0FBa0JFO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWhCSjtBQW1CRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWpCSjtBQXFCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBQ0EscUNBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQWxCRjtFQW9CRTtJQUNFLFVBQUE7RUFsQko7RUFvQkk7SUFDRSxPQUFBO0lBQ0EsT0FBQTtFQWxCTjtFQXFCSTtJQUNFLFlBQUE7RUFuQk47RUF1Qk07SUFDRSxVQUFBO0VBckJSO0VBMEJFO0lBQ0UsVUFBQTtFQXhCSjtFQTBCSTtJQUNFLFdBQUE7RUF4Qk47RUF5Qk07SUFDRSxXQUFBO0VBdkJSOztFQThCRTtJQUNFLFVBQUE7RUEzQko7RUE4QkU7SUFDRSxVQUFBO0VBNUJKO0FBQ0Y7QUFnQ0E7RUFFSTtJQUNFLFFBQUE7SUFDQSxTQUFBO0VBL0JKO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIHBhZGRpbmc6IDUlIDUlIDUlIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgLnVwLXRpdGxlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDE1JSA1JSAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0cyB7XHJcblxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogNiUgMCAyJSAxMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICAgICAgICAgIC5zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmNvbnRlbnQgLmNvbnRhaW5lcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHBhZGRpbmc6IDUlIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAudXAtdGl0bGUge1xyXG4gICAgICAgIHRvcDogNiU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDAgNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0cyB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaHIge1xyXG4gICAgICBtYXJnaW46IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5jb250ZW50IHtcclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIHRvcDogMTIlO1xyXG4gICAgICBsZWZ0OiAxMiU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hamburguer-menu/hamburguer-menu.component */ "TQ/0");






const _c0 = function (a0) { return { "show": a0 }; };
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
    menuEstaAberto() {
        return this.menuHambuguerAberto;
    }
    getManuHamburguer() {
        return _utils_Constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"].PATH_ICON_BLACK_MENU_HAMBURGUER;
    }
    clickMenu() {
        this.menuHambuguerAberto = !this.menuHambuguerAberto;
    }
    onClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
        this.clickMenu();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 5, consts: [[1, "content", "mobile"], [1, "logo"], ["alt", "Menu Hamburguer", 3, "src", "click"], [1, "cont", 3, "ngClass"], [3, "fecharMenu"], [1, "content", "desktop"], [3, "click"], [1, "input"], ["type", "search", "placeholder", "Search"], ["alt", "Icone de Busca", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_3_listener() { return ctx.mudarEstadoMenuHamburguer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-hamburguer-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fecharMenu", function HeaderComponent_Template_app_hamburguer_menu_fecharMenu_5_listener() { return ctx.mudarEstadoMenuHamburguer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_7_listener() { return ctx.onClickScroll("introduce"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " LT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_11_listener() { return ctx.onClickScroll("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_13_listener() { return ctx.onClickScroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_15_listener() { return ctx.onClickScroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getManuHamburguer(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.menuEstaAberto()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.SEARCH_ICON, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _hamburguer_menu_hamburguer_menu_component__WEBPACK_IMPORTED_MODULE_3__["HamburguerMenuComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  font-size: 1.5rem;\n  justify-content: space-around;\n  max-width: 85%;\n  padding: 5% 0;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n  content: \"<\";\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::after {\n  content: \">\";\n}\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.content[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n  background: var(--bg-contraste);\n  position: absolute;\n  z-index: 1;\n  max-height: 20vh;\n  max-width: 45vw;\n  width: 60vw;\n  padding: 10%;\n}\n.desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    padding: 2% 0;\n  }\n\n  .desktop[_ngcontent-%COMP%] {\n    display: inline-flex;\n    font-size: 1.5rem;\n    position: static;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    width: content-box;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 0 10%;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    position: relative;\n    width: 20%;\n  }\n  .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    padding: 2%;\n    width: 90%;\n  }\n  .input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15%;\n    width: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFLRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUVBLFlBQUE7QUFMSjtBQVNBO0VBQ0UsYUFBQTtBQU5GO0FBU0E7RUFDRTtJQUNFLGFBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQU5GOztFQVNBO0lBQ0Usb0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBTkY7O0VBU0E7SUFDRSxrQkFBQTtFQU5GOztFQVNBO0lBQ0UsYUFBQTtFQU5GO0VBUUU7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFQU5KO0VBU0U7SUFDRSxlQUFBO0VBUEo7O0VBV0E7SUFDRSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFSRjtFQVVFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQVJKO0VBV0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXgtd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiA1JSAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ286OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnPCc7XHJcbiAgfVxyXG5cclxuICAubG9nbzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJz4nO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY29udCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb250cmFzdGUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDQ1dnc7XHJcblxyXG4gICAgd2lkdGg6IDYwdnc7XHJcblxyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2t0b3Age1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIlIDA7XHJcbiAgfVxyXG5cclxuICAuZGVza3RvcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiBjb250ZW50LWJveDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgbGk6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTUlO1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Icone ", skill_r2.nomeSkill, "");
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
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 32, vars: 3, consts: [[1, "content-about", "mobile"], [1, "left-side"], [1, "up-title"], [1, "title"], [1, "description", "desktop"], [1, "container"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "right-side"], [1, "experience"], [1, "hire", "desktop"], [1, "background"], [1, "linha"], ["alt", "Icone de Contratar", 3, "src"], [3, "src", "alt"], [1, "datas"], [1, "cargo"], [1, "empresa"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".content-about[_ngcontent-%COMP%] {\n  background: var(--yellow-color);\n  padding: 15% 7%;\n  position: relative;\n}\n.content-about[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n.content-about[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: -1%;\n  top: 5%;\n  transform: rotate(-35deg);\n}\n.content-about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 10% 0;\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content-about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 5%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  margin: 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 5% 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cargo[_ngcontent-%COMP%] {\n  font-weight: 900;\n  padding: 0 10%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .empresa[_ngcontent-%COMP%] {\n  opacity: 70%;\n}\n.content-about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding: 0 5%;\n}\n@media screen and (min-width: 768px) {\n  .content-about[_ngcontent-%COMP%] {\n    align-items: center;\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: repeat(2, 1fr);\n    width: 100%;\n  }\n  .content-about[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .content-about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 2%;\n    top: 10%;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    margin: 0;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .content-about[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border: #111111 1.5px solid;\n    left: -4%;\n    position: absolute;\n    top: -21.5%;\n    width: 2%;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%] {\n    height: 10rem;\n    width: 10rem;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n    background-color: var(--black-color);\n    color: var(--white-color);\n    display: inline-flex;\n    height: inherit;\n    border-radius: 100%;\n    left: 90%;\n    position: relative;\n    text-align: center;\n    width: inherit;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .linha[_ngcontent-%COMP%] {\n    border: 2px solid #fff;\n    border-radius: inherit;\n    margin: 10%;\n    padding: 38%;\n    position: absolute;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-block;\n    position: relative;\n    height: 100%;\n    right: 10%;\n    top: 40%;\n    width: 100%;\n  }\n  .content-about[_ngcontent-%COMP%]   .hire[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 15%;\n    margin: 40% 63%;\n    position: absolute;\n    width: 15%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 3%;\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUZKO0FBSUk7RUFDRSxrQkFBQTtBQUZOO0FBSU07RUFDRSxVQUFBO0FBRlI7QUFPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBTEo7QUFPSTtFQUNFLGdCQUFBO0FBTE47QUFRSTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtBQU5OO0FBU0k7RUFDRSxhQUFBO0FBUE47QUFTTTtFQUNFLGNBQUE7QUFQUjtBQVNNO0VBQ0UsU0FBQTtBQVBSO0FBVU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVdNO0VBQ0UsWUFBQTtBQVRSO0FBYUk7RUFDRSxhQUFBO0FBWE47QUFpQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxXQUFBO0VBZEY7RUFnQkU7SUFDRSxjQUFBO0VBZEo7RUFpQkU7SUFDRSxvQkFBQTtFQWZKO0VBbUJJO0lBQ0UsUUFBQTtJQUNBLFFBQUE7RUFqQk47RUFvQkk7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQWxCTjtFQXNCTTtJQUNFLGtCQUFBO0VBcEJSO0VBc0JRO0lBQ0UsMkJBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQXBCVjtFQTBCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBeEJKO0VBMEJJO0lBQ0Usb0NBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBeEJOO0VBMEJNO0lBQ0Usc0JBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUF4QlI7RUEyQk07SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBekJSO0VBNEJNO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUExQlI7QUFDRjtBQWdDQTtFQUVJO0lBQ0UsUUFBQTtJQUNBLFFBQUE7RUEvQko7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hYm91dCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxNSUgNyU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZGVza3RvcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnVwLXRpdGxlIHtcclxuICAgIGxlZnQ6IC0xJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4cGVyaWVuY2Uge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDUlIDA7XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZ28ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lbXByZXNhIHtcclxuICAgICAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnRpY2xlPnAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuY29udGVudC1hYm91dCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LXNpZGUge1xyXG4gICAgICAudXAtdGl0bGUge1xyXG4gICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBib3JkZXI6ICMxMTExMTEgMS41cHggc29saWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IC00JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMS41JTtcclxuICAgICAgICAgICAgd2lkdGg6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaXJlIHtcclxuICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG5cclxuICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgICAubGluaGEge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICBtYXJnaW46IDEwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDM4JTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgbWFyZ2luOiA0MCUgNjMlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLnVwLXRpdGxlIHtcclxuICAgICAgbGVmdDogMyU7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






function IntroduceCardComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
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
IntroduceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroduceCardComponent, selectors: [["app-introduce-card"]], decls: 27, vars: 4, consts: [[1, "content"], [1, "left"], [1, "up-title"], [1, "titulo"], [1, "descricao"], [1, "contatos"], ["href", "", 1, "link"], ["type", "button", "value", "Let\u2019s talk", 1, "button", "send-message"], ["alt", "Icon enviar mensagem", 3, "src"], ["type", "button", "value", "Portfolio", 1, "button", "portfolio"], ["alt", "Icone Arrow Portfolio", 3, "src"], [1, "redes-sociais"], ["class", "item-rede-social", 4, "ngFor", "ngForOf"], [1, "right"], ["id", "hexagon", 1, "hexagon"], ["alt", "Minha imagem", 3, "src"], [1, "item-rede-social"], ["target", "_blank", 3, "href"], [3, "src", "alt"]], template: function IntroduceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hello World! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We developer Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Hi I\u2019m a Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " creating & developer website, pages and systems all across the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Social Medias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IntroduceCardComponent_li_21_Template, 3, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u201CPeople ignore quality that ignore the cust\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_ENVIAR_MENSAGEM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.PATH_ICONE_ARROW, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.redeSociais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.IMAGEM_ABOUT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--white-color);\n  padding: 15% 7%;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: -1%;\n  top: 7%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin: 10% 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  margin: 10% 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2):before {\n  content: \"__\";\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 20px;\n  display: inherit;\n  justify-content: center;\n  list-style: none;\n  margin: 5% auto;\n  padding: 2% 5%;\n  text-decoration: none;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: inherit;\n  font-weight: 500;\n  letter-spacing: 2px;\n  transition: all 0.5s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  width: 20%;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  background: var(--purple-color);\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child   input[_ngcontent-%COMP%] {\n  color: var(--white-color);\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child:hover {\n  background: #6042f3;\n}\n.content[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child:hover {\n  background: var(--bg-color);\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  margin: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inherit;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  transition: all 0.5s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .redes-sociais[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  background: var(--yellow-color);\n  border-radius: 50%;\n  width: 65%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    display: inline-flex;\n    width: 100%;\n  }\n  .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 0;\n    top: 17%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    flex-flow: wrap column;\n    \n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    font-weight: 900;\n    text-align: start;\n    padding-left: 55%;\n    align-self: flex-end;\n    width: 90%;\n    padding-right: 5%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%] {\n    background-color: var(--yellow-color);\n    content: \"\";\n    width: 25vw;\n    height: 10vh;\n    position: absolute;\n    top: 5vh;\n    border-radius: 10px;\n    box-sizing: border-box;\n    transition: all 0.5s ease-in-out;\n    border: 0.4vh solid transparent;\n    left: 38%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 100%;\n    position: absolute;\n    z-index: 1;\n    width: 80%;\n    height: 80%;\n    transition: all 0.5s ease-in-out;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:before, .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:after {\n    content: \"\";\n    height: 100.5%;\n    width: 106.7%;\n    position: absolute;\n    top: -0.1vh;\n    left: -0.6vh;\n    background-color: var(--yellow-color);\n    border-radius: inherit;\n    border: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover {\n    transform: rotate(25deg);\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: rotate(-20deg);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 3%;\n    top: 25%;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    \n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%] {\n    background-color: var(--yellow-color);\n    content: \"\";\n    width: 20vw;\n    height: 35vh;\n    position: absolute;\n    top: 5vh;\n    border-radius: 10px;\n    box-sizing: border-box;\n    transition: all 0.5s ease-in-out;\n    border: 0.4vh solid transparent;\n    left: 38%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 100%;\n    position: absolute;\n    z-index: 1;\n    width: 80%;\n    height: 80%;\n    transition: all 0.5s ease-in-out;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:before, .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:after {\n    content: \"\";\n    height: 100.5%;\n    width: 106.7%;\n    position: absolute;\n    top: -0.1vh;\n    left: -0.6vh;\n    background-color: var(--yellow-color);\n    border-radius: inherit;\n    border: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:before {\n    transform: rotate(60deg);\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:after {\n    transform: rotate(-60deg);\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover {\n    transform: rotate(25deg);\n  }\n  .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: rotate(-20deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludHJvZHVjZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQU9JO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFMTjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQVFNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFOUjtBQVVFO0VBQ0UsK0JBQUE7QUFSSjtBQVVJO0VBQ0UseUJBQUE7QUFSTjtBQVdJO0VBQ0UsVUFBQTtBQVROO0FBYUU7RUFDSSxtQkFBQTtBQVhOO0FBY0U7RUFDSSwyQkFBQTtBQVpOO0FBZUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBYk47QUFpQlU7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7QUFmWjtBQWlCVTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZlo7QUF3QkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtFQXJCRjtFQXdCSTtJQUNFLE9BQUE7SUFDQSxRQUFBO0VBdEJOO0VBMEJFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtJQTBDQSwwQkFBQTtFQWpFSjtFQXlCSTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUF2Qk47RUEwQkk7SUFDRSxVQUFBO0VBeEJOO0VBMkJJO0lBQ0UscUNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLFNBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUF6Qk47RUEyQk07SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtFQXpCUjtFQThCSTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQTVCTjtFQStCSTtJQUNFLHdCQUFBO0VBN0JOO0VBK0JNO0lBQ0UseUJBQUE7RUE3QlI7QUFDRjtBQW1DQTtFQUVJO0lBQ0UsUUFBQTtJQUNBLFFBQUE7RUFsQ0o7RUFxQ0U7SUEyQkUsMEJBQUE7RUE3REo7RUFtQ0k7SUFDRSxxQ0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQWpDTjtFQW1DTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGdDQUFBO0VBakNSO0VBc0NJO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFDQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VBcENOO0VBdUNJO0lBQ0Usd0JBQUE7RUFyQ047RUF1Q0k7SUFDRSx5QkFBQTtFQXJDTjtFQXdDSTtJQUNFLHdCQUFBO0VBdENOO0VBd0NNO0lBQ0UseUJBQUE7RUF0Q1I7QUFDRiIsImZpbGUiOiJpbnRyb2R1Y2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgcGFkZGluZzogMTUlIDclO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudXAtdGl0bGUge1xyXG4gICAgbGVmdDogLTElO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvIHtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpY2FvIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMCUgMDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHA6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdfXyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGF0b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAyJSA1JTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhdG9zID4gYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhdG9zID4gYTpmaXJzdC1jaGlsZDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2MDQyZjM7XHJcbiAgfVxyXG5cclxuICAuY29udGF0b3MgPiBhOmxhc3QtY2hpbGQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAucmVkZXMtc29jaWFpcyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW46IDUlIDA7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZzpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICAudXAtdGl0bGUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAxNyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogd3JhcCBjb2x1bW47XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTUlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhleGFnb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDV2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjR2aCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBsZWZ0OiAzOCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDcmVhdGluZyBwc2V1ZG8tY2xhc3MgKi9cclxuICAgICAgLmhleGFnb246YmVmb3JlLCAuaGV4YWdvbjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDEwMC41JTtcclxuICAgICAgICB3aWR0aDogMTA2LjclO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0wLjF2aDtcclxuICAgICAgICBsZWZ0OiAtMC42dmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgIGJvcmRlcjogaW5oZXJpdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhleGFnb246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5jb250ZW50IHtcclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIGxlZnQ6IDMlO1xyXG4gICAgICB0b3A6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAuaGV4YWdvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNXZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXI6IDAuNHZoIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGxlZnQ6IDM4JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIENyZWF0aW5nIHBzZXVkby1jbGFzcyAqL1xyXG4gICAgICAuaGV4YWdvbjpiZWZvcmUsIC5oZXhhZ29uOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGhlaWdodDogMTAwLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDYuNyU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTAuMXZoO1xyXG4gICAgICAgIGxlZnQ6IC0wLjZ2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyOiBpbmhlcml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGV4YWdvbjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAuaGV4YWdvbjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhleGFnb246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Icone do Projeto ", project_r1.name, "");
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
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 22, vars: 9, consts: [[1, "content"], [1, "up-title"], [1, "title"], [1, "projects", "mobile"], ["target", "_blank", 1, "link", 3, "href"], ["alt", "seta para github", 1, "seta-redirect", 3, "src"], [1, "container"], [1, "voltar", 3, "click"], ["alt", "seta para retroceder", 3, "src"], [3, "src", "alt"], [1, "image-title"], [1, "descricao-image"], [1, "avancar", 3, "click"], ["alt", "seta para avan\u00E7ar", 3, "src"], [1, "projects", "desktop"], ["class", "container-desktop", 4, "ngFor", "ngForOf"], [1, "container-desktop"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 10, 6, "div", 15);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Icone do Projeto ", ctx.projectShow.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectShow.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectShow.description.substr(0, 50), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.CONSTANTES.ICONE_SETA_IMAGENS, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  background: var(--white-color);\n  display: block;\n  padding: 5%;\n  position: relative;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n  left: 1%;\n  top: 8%;\n  transform: rotate(-35deg);\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 10% 5% 0;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-flow: column wrap;\n  margin: 0 auto;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: var(--purple-color);\n  border-radius: 50%;\n  margin: 5% 25%;\n  padding: 5%;\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--yellow-color);\n  border-radius: 50%;\n  display: inline-flex;\n  height: 3vh;\n  justify-content: center;\n  opacity: 70%;\n  padding: 5%;\n  width: 25%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .voltar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  padding: 5% 0;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .avancar[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    display: block;\n    height: 100%;\n    visibility: visible;\n    margin-bottom: 20%;\n    padding: 2% 0;\n  }\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 1%;\n    top: 2%;\n  }\n  .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n  .content[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-flow: row wrap;\n    position: absolute;\n    visibility: visible;\n    width: 100%;\n    height: 80%;\n    padding: 0 5%;\n    align-items: center;\n    justify-content: center;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%] {\n    border-radius: 5% 2%;\n    display: inline-block;\n    margin-right: 5%;\n    overflow-x: hidden;\n    padding: 5% 0;\n    width: 15%;\n    align-items: center;\n    text-align: center;\n    transition: all 0.5s ease-in-out;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin: 0 70%;\n    width: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin: 15% 0 1rem;\n    width: 100%;\n    padding: 2%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 5%;\n    width: inherit;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    padding: 2% 0;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .descricao-image[_ngcontent-%COMP%] {\n    font-style: italic;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:hover {\n    width: 20%;\n    border: var(--yellow-color) 1px solid;\n    border-radius: 10px;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(n+5):nth-child(-n+9) {\n    display: none;\n    visibility: hidden;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(1) {\n    margin-top: 10%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 5%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(3) {\n    margin-top: 0;\n  }\n  .content[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container-desktop[_ngcontent-%COMP%]:nth-child(4) {\n    margin-top: -5%;\n    margin-right: 0;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .up-title[_ngcontent-%COMP%] {\n    left: 2%;\n    top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBS0U7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBS0k7RUFDRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFITjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUpOO0FBTU07RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUpSO0FBTVE7RUFDRSxXQUFBO0FBSlY7QUFRTTtFQUNFLGlCQUFBO0FBTlI7QUFRUTtFQUNFLHlCQUFBO0FBTlY7QUFVTTtFQUNFLGtCQUFBO0FBUlI7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVdRO0VBQ0UsYUFBQTtBQVRWO0FBV1U7RUFDRSxnQkFBQTtBQVRaO0FBY007RUFDRSxnQkFBQTtBQVpSO0FBa0JBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VBZkY7RUFpQkU7SUFDRSxRQUFBO0lBQ0EsT0FBQTtFQWZKO0VBa0JFO0lBQ0UsY0FBQTtFQWhCSjtFQW1CRTtJQUNFLGFBQUE7RUFqQko7RUFtQkk7SUFDRSxhQUFBO0VBakJOO0VBcUJFO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBbkJKO0VBc0JJO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtFQXBCTjtFQXVCTTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBckJSO0VBd0JNO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQXRCUjtFQXdCUTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQXRCVjtFQTBCVTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0VBeEJaO0VBMkJVO0lBQ0Usa0JBQUE7RUF6Qlo7RUErQkk7SUFDRSxVQUFBO0lBQ0EscUNBQUE7SUFDQSxtQkFBQTtFQTdCTjtFQWdDSTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQTlCTjtFQWlDSTtJQUNFLGVBQUE7RUEvQk47RUFrQ0k7SUFDRSxjQUFBO0VBaENOO0VBbUNJO0lBQ0UsYUFBQTtFQWpDTjtFQW9DSTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBbENOO0FBQ0Y7QUF1Q0E7RUFFSTtJQUNFLFFBQUE7SUFDQSxRQUFBO0VBdENKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC51cC10aXRsZSB7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIHRvcDogOCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMTAlIDUlIDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAuY29udGFpbmVyLWRlc2t0b3Age1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luOiA1JSAyNSU7XHJcbiAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHJcbiAgICAgIC52b2x0YXIsLmF2YW5jYXIge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAzdmg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogNzAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52b2x0YXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogNSUgMDtcclxuXHJcbiAgICAgICAgICAuaW1hZ2UtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YW5jYXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG5cclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIGxlZnQ6IDElO1xyXG4gICAgICB0b3A6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3Age1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlIDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nOiA1JSAwO1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcblxyXG4gICAgICAgIC5saW5rIHtcclxuICAgICAgICAgIG1hcmdpbjogMCA3MCU7XHJcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDE1JSAwIDFyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICAgICAgLmltYWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpY2FvLWltYWdlIHtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXItZGVza3RvcDpob3ZlciB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBib3JkZXI6IHZhcigtLXllbGxvdy1jb2xvcikgMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXItZGVza3RvcDpudGgtY2hpbGQobis1KTpudGgtY2hpbGQoLW4rOSkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3A6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXItZGVza3RvcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3A6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyLWRlc2t0b3A6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5jb250ZW50IHtcclxuICAgIC51cC10aXRsZSB7XHJcbiAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICB0b3A6IDEwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
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