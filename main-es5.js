function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/Utils/Constantes.ts":
  /*!*********************************!*\
    !*** ./src/Utils/Constantes.ts ***!
    \*********************************/

  /*! exports provided: Constantes */

  /***/
  function srcUtilsConstantesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constantes", function () {
      return Constantes;
    });
    /* harmony import */


    var src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/enviroment.dev */
    "./src/environments/enviroment.dev.ts");

    var Constantes = function Constantes() {
      _classCallCheck(this, Constantes);
    };

    Constantes.iconFacebook = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaFacebook;
    Constantes.iconInstagram = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaInstagram;
    Constantes.iconTwitter = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaTwitter;
    Constantes.iconGithub = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaGithub;
    Constantes.iconLinkedin = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconSocialMediaLinkedin;
    Constantes.linkFacebook = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaFacebook;
    Constantes.linkInstagram = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaInstagram;
    Constantes.linkTwitter = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaTwitter;
    Constantes.linkGithub = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaGithub;
    Constantes.linkLinkedin = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkSocialMediaLinkedin;
    Constantes.myPersonalImage = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkMyPersonalImage;
    Constantes.backgroundImageHead = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].backgroundImageHead;
    Constantes.backgroundImageContact = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].backgroundimageContact;
    Constantes.iconInfo = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconInfo;
    Constantes.iconPortfolio = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconPortfolio;
    Constantes.iconContact = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconContact;
    Constantes.iconNotFoundPage = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconPageNotFound;
    Constantes.iconInBuilding = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].iconInBuildning;
    Constantes.linkRepRemadeWebSites = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkRepRemadeRandomsWebSites;
    Constantes.linkRepAirCnC = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkRepAirCnc;
    Constantes.linkRepWazeDev = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkRepWazeDev;
    Constantes.linkRepTwitterData = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkRepTwitterDataC19;
    Constantes.linkRepMaiaraMartins = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].linkRepMaiaraMartins;
    Constantes.linkPageCotuca = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].cotucaUrl;
    Constantes.linkPageCiandt = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].ciandtUrl;
    Constantes.apiGithubRepository = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].apiGithubRepository;
    Constantes.apiGithubOwner = src_environments_enviroment_dev__WEBPACK_IMPORTED_MODULE_0__["environment"].apiGithubOwner;
    /***/
  },

  /***/
  "./src/app/about/about-section/about-section.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/about/about-section/about-section.component.ts ***!
    \****************************************************************/

  /*! exports provided: AboutSectionComponent */

  /***/
  function srcAppAboutAboutSectionAboutSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutSectionComponent", function () {
      return AboutSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");
    /* harmony import */


    var _personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../personal-data-list/personal-data-list.component */
    "./src/app/about/personal-data-list/personal-data-list.component.ts");
    /* harmony import */


    var _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../list-hobbies/list-hobbies.component */
    "./src/app/about/list-hobbies/list-hobbies.component.ts");

    var AboutSectionComponent = /*#__PURE__*/function () {
      function AboutSectionComponent() {
        _classCallCheck(this, AboutSectionComponent);
      }

      _createClass(AboutSectionComponent, [{
        key: "getIconInfo",
        value: function getIconInfo() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconInfo;
        }
      }, {
        key: "getLinkPageCotuca",
        value: function getLinkPageCotuca() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkPageCotuca;
        }
      }, {
        key: "getLinkPageCiandt",
        value: function getLinkPageCiandt() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkPageCiandt;
        }
      }]);

      return AboutSectionComponent;
    }();

    AboutSectionComponent.ɵfac = function AboutSectionComponent_Factory(t) {
      return new (t || AboutSectionComponent)();
    };

    AboutSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutSectionComponent,
      selectors: [["about-section"]],
      decls: 28,
      vars: 3,
      consts: [[1, "container-fluid", "w3-container", "w3-center", "w3-animate-bottom"], [1, "title"], ["alt", "icon image info", 3, "src"], [1, "font-size1-5rem"], [1, "text"], [1, "font-green"], ["target", "_blank", 1, "font-white", 3, "href"], [1, "personal-data"], [1, "lists"], [1, "title", "font-size1-5rem"], [1, "buttom"]],
      template: function AboutSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello! I'm Lucas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " IT Student and monitor at the Technical High School of Campinas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "@cotuca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " and Software Engineer Intern at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "@ciandt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". I have a little experiencia with angular 8 and Spring boot. I like sou much what a do but in parallel I have studying about develop mobile native but don't have experience professional yet but is a thing who I want learn more Android and IOS native. I have a lucky to had greate professionals close to me in my job and this make easily the things to me. So thanks every one. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Personal Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "personal-data-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "list-hobbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Download CV ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getIconInfo(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getLinkPageCotuca(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getLinkPageCiandt(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_2__["PersonalDataListComponent"], _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__["ListHobbiesComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  justify-content: center;\r\n  background-color: #1e2326;\r\n  overflow: hidden;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  align-self: center;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  padding: 3%;\r\n}\r\n\r\n.personal-data[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n}\r\n\r\n.lists[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.lists[_ngcontent-%COMP%]   app-list-hobbies[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.lists[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.lists[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n  width: 50vw;\r\n}\r\n\r\n.buttom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  border: solid #fff;\r\n  background: #1e2326;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .lists[_ngcontent-%COMP%] {\r\n      flex-flow: row wrap;\r\n      padding-left: 0;\r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 15%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .lists[_ngcontent-%COMP%] {\r\n    flex-flow: column nowrap;\r\n    padding-left: 0;\r\n    align-items: center;\r\n    display: contents;\r\n  }\r\n\r\n  .lists[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 15%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtc2VjdGlvbi9hYm91dC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtNQUNJLG1CQUFtQjtNQUNuQixlQUFlO0VBQ25COztFQUVBO01BQ0ksVUFBVTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtNQUNJLFVBQVU7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQtc2VjdGlvbi9hYm91dC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjMyNjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSBpbWcge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kYXRhIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLmxpc3RzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuXHJcbi5saXN0cyBhcHAtbGlzdC1ob2JiaWVzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmxpc3RzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5saXN0cyBzZWN0aW9uIHtcclxuICB3aWR0aDogNTB2dztcclxufVxyXG5cclxuLmJ1dHRvbSBidXR0b257XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZCAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMxZTIzMjY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmxpc3RzIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxpc3RzIHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcblxyXG4gIC5saXN0cyBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about-section',
          templateUrl: './about-section.component.html',
          styleUrls: ['./about-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.module.ts":
  /*!***************************************!*\
    !*** ./src/app/about/about.module.ts ***!
    \***************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _about_section_about_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-section/about-section.component */
    "./src/app/about/about-section/about-section.component.ts");
    /* harmony import */


    var _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-hobbies/list-hobbies.component */
    "./src/app/about/list-hobbies/list-hobbies.component.ts");
    /* harmony import */


    var _personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./personal-data-list/personal-data-list.component */
    "./src/app/about/personal-data-list/personal-data-list.component.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutSectionComponent"], _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__["ListHobbiesComponent"], _personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_4__["PersonalDataListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutSectionComponent"], _list_hobbies_list_hobbies_component__WEBPACK_IMPORTED_MODULE_3__["ListHobbiesComponent"], _personal_data_list_personal_data_list_component__WEBPACK_IMPORTED_MODULE_4__["PersonalDataListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_2__["AboutSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/list-hobbies/list-hobbies.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/about/list-hobbies/list-hobbies.component.ts ***!
    \**************************************************************/

  /*! exports provided: ListHobbiesComponent */

  /***/
  function srcAppAboutListHobbiesListHobbiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListHobbiesComponent", function () {
      return ListHobbiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListHobbiesComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r1.urlImageCard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("id", card_r1.nameCard)("alt", card_r1.nameCard);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, card_r1.nameCard), " ");
      }
    }

    var ListHobbiesComponent = function ListHobbiesComponent() {
      _classCallCheck(this, ListHobbiesComponent);

      this.listaCards = [{
        nameCard: 'games',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/controler-game.svg'
      }, {
        nameCard: 'headphone',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/headphone.svg'
      }, {
        nameCard: 'plane',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/plane.svg'
      }, {
        nameCard: 'cinematic',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/cinametic.svg'
      }, {
        nameCard: 'coffe',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/coffe.svg'
      }, {
        nameCard: 'money',
        urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/money.svg'
      }];
    };

    ListHobbiesComponent.ɵfac = function ListHobbiesComponent_Factory(t) {
      return new (t || ListHobbiesComponent)();
    };

    ListHobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListHobbiesComponent,
      selectors: [["list-hobbies"]],
      decls: 4,
      vars: 1,
      consts: [[1, "interest"], [1, "all-cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [3, "src", "id", "alt"]],
      template: function ListHobbiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListHobbiesComponent_li_3_Template, 5, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaCards);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: [".interest[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.all-cards[_ngcontent-%COMP%] {\r\n  justify-content: start;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n  padding-right: 0%;\r\n  grid-template-columns: repeat(3, 20%);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #252a2e;\r\n  border-radius: 10%;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  width: 80%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  transition: all 0.5s ease;\r\n  text-transform: uppercase;\r\n  font-weight: 100;\r\n  box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  align-self: center;\r\n  padding: 2%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  background-color: #1CB698;\r\n}\r\n\r\n@media only screen and (min-width: 425px) {\r\n  li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    padding: 2%;\r\n    width: 15%;\r\n  }\r\n}\r\n\r\n@media (min-width: 425px) and (max-width: 768px) {\r\n  li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    padding: 2%;\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  ul[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 22%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvbGlzdC1ob2JiaWVzL2xpc3QtaG9iYmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2xpc3QtaG9iYmllcy9saXN0LWhvYmJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcmVzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWxsLWNhcmRzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG51bCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMCUpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmEyZTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbn1cclxuXHJcbmxpIGltZyB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCNjk4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgbGkgaW1nIHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgbGkgaW1nIHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgdWwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgbGkgaW1nIHtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListHobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'list-hobbies',
          templateUrl: './list-hobbies.component.html',
          styleUrls: ['./list-hobbies.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/personal-data-list/personal-data-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/about/personal-data-list/personal-data-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PersonalDataListComponent */

  /***/
  function srcAppAboutPersonalDataListPersonalDataListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalDataListComponent", function () {
      return PersonalDataListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PersonalDataListComponent = function PersonalDataListComponent() {
      _classCallCheck(this, PersonalDataListComponent);
    };

    PersonalDataListComponent.ɵfac = function PersonalDataListComponent_Factory(t) {
      return new (t || PersonalDataListComponent)();
    };

    PersonalDataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonalDataListComponent,
      selectors: [["personal-data-list"]],
      decls: 24,
      vars: 0,
      consts: [[1, "data-colums"], [1, "font-green"], ["href", "https://luccastraumer.github.io", "target", "_blank", "rel", "noopener noreferrer", 1, ""], [1, "bg-green", "contant"]],
      template: function PersonalDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 1999-04-01 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " lucassj.dev@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "https://luccastraumer.github.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Campinas - S\xE3o Paulo, BR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Job Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DEVELOPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".data-colums[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: 0.6fr 0.2fr;\r\n  padding: 2%;\r\n  justify-content: center;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: flex-start;\r\n  width: auto;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  padding-right: 5%;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .data-colums[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      text-align: start;\r\n      grid-template-columns: 0.2fr 0.2fr;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvcGVyc29uYWwtZGF0YS1saXN0L3BlcnNvbmFsLWRhdGEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUdBO0VBQ0U7TUFDSSxpQkFBaUI7TUFDakIsa0NBQWtDO0VBQ3RDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9wZXJzb25hbC1kYXRhLWxpc3QvcGVyc29uYWwtZGF0YS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1jb2x1bXMgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDAuMmZyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxudWwgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxubGkgc3Ryb25nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxudWwgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbnVsIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRhdGEtY29sdW1zIHVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMC4yZnI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalDataListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'personal-data-list',
          templateUrl: './personal-data-list.component.html',
          styleUrls: ['./personal-data-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _not_found_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found/not-found-page/not-found-page.component */
    "./src/app/not-found/not-found-page/not-found-page.component.ts");
    /* harmony import */


    var _view_page_show_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-page/show/show.component */
    "./src/app/view-page/show/show.component.ts");

    var routes = [{
      path: 'home',
      component: _view_page_show_show_component__WEBPACK_IMPORTED_MODULE_3__["ShowComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _not_found_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]
    }, {
      path: 'navbarNavAltMarkup',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true,
        anchorScrolling: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true,
            anchorScrolling: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'webpage';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.module */
    "./src/app/header/header.module.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.module */
    "./src/app/about/about.module.ts");
    /* harmony import */


    var _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./resume/resume.module */
    "./src/app/resume/resume.module.ts");
    /* harmony import */


    var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./portfolio/portfolio.module */
    "./src/app/portfolio/portfolio.module.ts");
    /* harmony import */


    var _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./contact/contact.module */
    "./src/app/contact/contact.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.module */
    "./src/app/footer/footer.module.ts");
    /* harmony import */


    var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./not-found/not-found.module */
    "./src/app/not-found/not-found.module.ts");
    /* harmony import */


    var _building_building_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./building/building.module */
    "./src/app/building/building.module.ts");
    /* harmony import */


    var _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./view-page/view-page.module */
    "./src/app/view-page/view-page.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_9__["AboutModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_11__["PortfolioModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"], _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__["NotFoundModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_15__["BuildingModule"], _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_16__["ViewPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_9__["AboutModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_11__["PortfolioModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"], _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__["NotFoundModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_15__["BuildingModule"], _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_16__["ViewPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_9__["AboutModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_11__["PortfolioModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_12__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"], _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__["NotFoundModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_15__["BuildingModule"], _view_page_view_page_module__WEBPACK_IMPORTED_MODULE_16__["ViewPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/building/building-page/building-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/building/building-page/building-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BuildingPageComponent */

  /***/
  function srcAppBuildingBuildingPageBuildingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingPageComponent", function () {
      return BuildingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Utils/Constantes */
    "./src/Utils/Constantes.ts");

    var BuildingPageComponent = /*#__PURE__*/function () {
      function BuildingPageComponent() {
        _classCallCheck(this, BuildingPageComponent);
      }

      _createClass(BuildingPageComponent, [{
        key: "getIconInBuilding",
        value: function getIconInBuilding() {
          return _Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconInBuilding;
        }
      }]);

      return BuildingPageComponent;
    }();

    BuildingPageComponent.ɵfac = function BuildingPageComponent_Factory(t) {
      return new (t || BuildingPageComponent)();
    };

    BuildingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuildingPageComponent,
      selectors: [["app-building-page"]],
      decls: 5,
      vars: 1,
      consts: [[1, "build", "container-fluid"], [1, "container"], ["alt", "IN BUILDING", "srcset", "", 3, "src"], [1, "font-size2rem"]],
      template: function BuildingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "401 IN BUILDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getIconInBuilding(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".build[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n}\r\n\r\n.build[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRpbmcvYnVpbGRpbmctcGFnZS9idWlsZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9idWlsZGluZy9idWlsZGluZy1wYWdlL2J1aWxkaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWlsZCAuY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5idWlsZCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-building-page',
          templateUrl: './building-page.component.html',
          styleUrls: ['./building-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/building/building.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/building/building.module.ts ***!
    \*********************************************/

  /*! exports provided: BuildingModule */

  /***/
  function srcAppBuildingBuildingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingModule", function () {
      return BuildingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./building-page/building-page.component */
    "./src/app/building/building-page/building-page.component.ts");

    var BuildingModule = function BuildingModule() {
      _classCallCheck(this, BuildingModule);
    };

    BuildingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BuildingModule
    });
    BuildingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BuildingModule_Factory(t) {
        return new (t || BuildingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BuildingModule, {
        declarations: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_building_page_building_page_component__WEBPACK_IMPORTED_MODULE_2__["BuildingPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact-section/contact-section.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/contact/contact-section/contact-section.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ContactSectionComponent */

  /***/
  function srcAppContactContactSectionContactSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactSectionComponent", function () {
      return ContactSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");
    /* harmony import */


    var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../input-data/input-data.component */
    "./src/app/contact/input-data/input-data.component.ts");
    /* harmony import */


    var _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../maps/maps.component */
    "./src/app/contact/maps/maps.component.ts");

    var ContactSectionComponent = /*#__PURE__*/function () {
      function ContactSectionComponent() {
        _classCallCheck(this, ContactSectionComponent);
      }

      _createClass(ContactSectionComponent, [{
        key: "getBackgroundImage",
        value: function getBackgroundImage() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].backgroundImageContact;
        }
      }, {
        key: "getIconContact",
        value: function getIconContact() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconContact;
        }
      }]);

      return ContactSectionComponent;
    }();

    ContactSectionComponent.ɵfac = function ContactSectionComponent_Factory(t) {
      return new (t || ContactSectionComponent)();
    };

    ContactSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactSectionComponent,
      selectors: [["contact-section"]],
      decls: 15,
      vars: 2,
      consts: [[1, "container-fluid", "bg-color-grey"], [1, "back-image", "w3-animate-left"], ["alt", "", "srcset", "", 1, "bg-image", 3, "src"], [1, "overview"], [1, "head-contact", "w3-animate-top"], ["alt", "icon contact", "srcset", "", 1, "icon", 3, "src"], [1, "title"], [1, "contacting"], [1, "input"], [1, "maps", "w3-animate-right"], ["href", "https://www.vecteezy.com/free-png/earth", "hidden", ""]],
      template: function ContactSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input-data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Earth PNGs by Vecteezy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getBackgroundImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getIconContact(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_2__["InputDataComponent"], _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 90vh;\r\n  overflow: hidden;\r\n  margin-top: 2%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.overview[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.back-image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 0;\r\n  padding: 2%;\r\n  width: 100%;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.head-contact[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  padding-top: 2%;\r\n}\r\n\r\n.head-contact[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  width: 8rem;\r\n}\r\n\r\n.contacting[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 2%;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.contacting[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.contacting[_ngcontent-%COMP%]   .maps[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  opacity: 70%;\r\n}\r\n\r\n.contacting[_ngcontent-%COMP%]   .maps[_ngcontent-%COMP%]:hover {\r\n  width: 50%;\r\n  opacity: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .contacting[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      width: 100%;\r\n  }\r\n\r\n  .contacting[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .contacting[_ngcontent-%COMP%]   .maps[_ngcontent-%COMP%]  {\r\n      width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n      width: 150vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LXNlY3Rpb24vY29udGFjdC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtNQUNJLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFdBQVc7RUFDZjs7RUFFQTtNQUNJLFdBQVc7RUFDZjtBQUNGOztBQUVBO0VBQ0U7TUFDSSxZQUFZO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3Qtc2VjdGlvbi9jb250YWN0LXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLm92ZXJ2aWV3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmJhY2staW1hZ2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4uaGVhZC1jb250YWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uaGVhZC1jb250YWN0IC5pY29uIHtcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuLmNvbnRhY3Rpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0aW5nIC5pbnB1dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhY3RpbmcgLm1hcHMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG59XHJcblxyXG4uY29udGFjdGluZyAubWFwczpob3ZlciB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhY3Rpbmcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0aW5nIC5pbnB1dCwuY29udGFjdGluZyAubWFwcyAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgd2lkdGg6IDE1MHZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'contact-section',
          templateUrl: './contact-section.component.html',
          styleUrls: ['./contact-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-section/contact-section.component */
    "./src/app/contact/contact-section/contact-section.component.ts");
    /* harmony import */


    var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./input-data/input-data.component */
    "./src/app/contact/input-data/input-data.component.ts");
    /* harmony import */


    var _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./maps/maps.component */
    "./src/app/contact/maps/maps.component.ts");

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
    ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactModule_Factory(t) {
        return new (t || ContactModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, {
        declarations: [_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_3__["ContactSectionComponent"], _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_4__["InputDataComponent"], _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"]],
        exports: [_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_3__["ContactSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_3__["ContactSectionComponent"], _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_4__["InputDataComponent"], _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"]],
          exports: [_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_3__["ContactSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/input-data/input-data.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/contact/input-data/input-data.component.ts ***!
    \************************************************************/

  /*! exports provided: InputDataComponent */

  /***/
  function srcAppContactInputDataInputDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputDataComponent", function () {
      return InputDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InputDataComponent = /*#__PURE__*/function () {
      function InputDataComponent() {
        _classCallCheck(this, InputDataComponent);
      }

      _createClass(InputDataComponent, [{
        key: "alertUser",
        value: function alertUser() {
          alert('This form is not working for now. My email: lucassj.dev@gmail.com');
        }
      }]);

      return InputDataComponent;
    }();

    InputDataComponent.ɵfac = function InputDataComponent_Factory(t) {
      return new (t || InputDataComponent)();
    };

    InputDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputDataComponent,
      selectors: [["input-data"]],
      decls: 9,
      vars: 0,
      consts: [[1, "input-data", "w3-animate-left"], ["type", "text", "placeholder", "Your Name", 1, "bg-color-grey"], ["type", "number", "name", "phoneNumber", "id", "", "placeholder", "Phone Number", 1, "bg-color-grey"], ["type", "email", "name", "email", "id", "", "placeholder", "Email Address", 1, "bg-color-grey"], ["type", "text", "placeholder", "Subject", 1, "bg-color-grey"], ["name", "", "id", "", "cols", "30", "rows", "5", "placeholder", "Message", 1, "bg-color-grey"], [1, "btn"], ["href", "#", 1, "button", "button01", "w3-animate-bottom", 3, "click"]],
      template: function InputDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputDataComponent_Template_a_click_7_listener() {
            return ctx.alertUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".input-data[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.input-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-data[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  padding: 2%;\r\n  margin: 2%;\r\n  border-radius: 50px;\r\n  border: none;\r\n  box-shadow:\r\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n  0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.input-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  height: 4rem;\r\n}\r\n\r\n.input-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .input-data[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-weight: lighter;\r\n  padding: 5%;\r\n}\r\n\r\n.input-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .input-data[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-weight: lighter;\r\n  padding: 5%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: .8em 4em;\r\n  border: 2px solid #fff;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: .3s;\r\n  width: 50%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  content: '';\r\n  background: #1CB698;\r\n  transition: transform .3s;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\r\n\r\n.button01[_ngcontent-%COMP%]::before {\r\n  transform-origin: right top;\r\n  transform: scale(0, 1);\r\n}\r\n\r\n.button01[_ngcontent-%COMP%]:hover::before {\r\n  transform-origin: left top;\r\n  transform: scale(1, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9pbnB1dC1kYXRhL2lucHV0LWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1o7Ozs7OztrQ0FNZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBTEE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2lucHV0LWRhdGEvaW5wdXQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1kYXRhIGlucHV0LCAuaW5wdXQtZGF0YSB0ZXh0YXJlYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OlxyXG4gIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXHJcbiAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcclxuICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxyXG4gIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcclxuICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmlucHV0LWRhdGEgaW5wdXQge1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG5cclxuLmlucHV0LWRhdGEgaW5wdXQ6OnBsYWNlaG9sZGVyLC5pbnB1dC1kYXRhIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAuOGVtIDRlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYnV0dG9uOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogIzFDQjY5ODtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ1dHRvbjAxOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xyXG59XHJcblxyXG4uYnV0dG9uMDE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'input-data',
          templateUrl: './input-data.component.html',
          styleUrls: ['./input-data.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/maps/maps.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contact/maps/maps.component.ts ***!
    \************************************************/

  /*! exports provided: MapsComponent */

  /***/
  function srcAppContactMapsMapsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsComponent", function () {
      return MapsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var MapsComponent = /*#__PURE__*/function () {
      function MapsComponent() {
        _classCallCheck(this, MapsComponent);

        this.title = 'AGM Project';
        this.latitude = -22.8925058;
        this.longitude = -47.0281151;
      }

      _createClass(MapsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChoseLocation",
        value: function onChoseLocation(event) {
          this.latitude = event.coords.lat;
          this.longitude = event.coords.lng;
        }
      }]);

      return MapsComponent;
    }();

    MapsComponent.ɵfac = function MapsComponent_Factory(t) {
      return new (t || MapsComponent)();
    };

    MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapsComponent,
      selectors: [["app-maps"]],
      inputs: {
        latitude: "latitude",
        longitude: "longitude"
      },
      decls: 2,
      vars: 4,
      consts: [[3, "latitude", "longitude", "mapClick"], [3, "latitude", "longitude"]],
      template: function MapsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapsComponent_Template_agm_map_mapClick_0_listener($event) {
            return ctx.onChoseLocation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "agm-marker", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude);
        }
      },
      directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9tYXBzL21hcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L21hcHMvbWFwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-maps',
          templateUrl: './maps.component.html',
          styleUrls: ['./maps.component.css']
        }]
      }], function () {
        return [];
      }, {
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer-section/footer-section.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/footer/footer-section/footer-section.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FooterSectionComponent */

  /***/
  function srcAppFooterFooterSectionFooterSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterSectionComponent", function () {
      return FooterSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _social_medias_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../social-medias/social-medias-section/social-medias-section.component */
    "./src/app/social-medias/social-medias-section/social-medias-section.component.ts");

    var FooterSectionComponent = /*#__PURE__*/function () {
      function FooterSectionComponent(viewportScroller) {
        _classCallCheck(this, FooterSectionComponent);

        this.viewportScroller = viewportScroller;
      }

      _createClass(FooterSectionComponent, [{
        key: "onClickScroll",
        value: function onClickScroll(elementId) {
          console.log(this.viewportScroller.scrollToAnchor(elementId));
          this.viewportScroller.scrollToAnchor(elementId);
        }
      }, {
        key: "getYear",
        value: function getYear() {
          return new Date().getFullYear();
        }
      }]);

      return FooterSectionComponent;
    }();

    FooterSectionComponent.ɵfac = function FooterSectionComponent_Factory(t) {
      return new (t || FooterSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]));
    };

    FooterSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterSectionComponent,
      selectors: [["footer-section"]],
      decls: 13,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "btn-page-up", "bg-green"], [1, "nav-item", "nav-link", "active", 3, "click"], [1, "sr-only"], [1, "w3-animate-top"], [1, "text"], [1, "letter-spacing0-5", "w3-animate-bottom"], [1, "font-green"]],
      template: function FooterSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterSectionComponent_Template_a_click_2_listener() {
            return ctx.onClickScroll("head");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "social-medias-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lucas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". All rights reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 Copyright ", ctx.getYear(), " ");
        }
      },
      directives: [_social_medias_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediasSectionComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   social-medias-section[_ngcontent-%COMP%] {\r\n  padding-top: 2%;\r\n  width: 20rem;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  padding-top: 1%;\r\n}\r\n\r\n.btn-page-up[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-page-up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding-top: 25%;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n      padding-left: 45%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci1zZWN0aW9uL2Zvb3Rlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtNQUNJLGlCQUFpQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci1zZWN0aW9uL2Zvb3Rlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgc29jaWFsLW1lZGlhcy1zZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIC50ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5idG4tcGFnZS11cCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1wYWdlLXVwIGEge1xyXG4gIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ1JTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'footer-section',
          templateUrl: './footer-section.component.html',
          styleUrls: ['./footer-section.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/footer/footer.module.ts ***!
    \*****************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer-section/footer-section.component */
    "./src/app/footer/footer-section/footer-section.component.ts");
    /* harmony import */


    var _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../social-medias/social-medias.module */
    "./src/app/social-medias/social-medias.module.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FooterModule
    });
    FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FooterModule_Factory(t) {
        return new (t || FooterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediasModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, {
        declarations: [_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_2__["FooterSectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediasModule"]],
        exports: [_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_2__["FooterSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_2__["FooterSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_3__["SocialMediasModule"]],
          exports: [_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_2__["FooterSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/header/header.module.ts ***!
    \*****************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header/header.component.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/header/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(viewportScroller) {
        _classCallCheck(this, HeaderComponent);

        this.viewportScroller = viewportScroller;
        this.isCollapsed = true;
      }

      _createClass(HeaderComponent, [{
        key: "onClickScroll",
        value: function onClickScroll(elementId) {
          this.viewportScroller.scrollToAnchor(elementId);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["header"]],
      decls: 20,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "w3-animate-left"], [1, "navbar-brand", "text-uppercase", "font-weight-bold", "letter-spacing3", 3, "click"], ["type", "button", "data-toggle", "collapse", "href", "#navbarNavAltMarkup", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "bg-green", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "w3-animate-right", 3, "ngbCollapse"], [1, "navbar-nav", "font-fam-Works", "letter-spacing0-5", "text-uppercase"], [1, "nav-item", "nav-link", "active", 3, "click"], [1, "sr-only"], [1, "nav-item", "nav-link", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
            return ctx.onClickScroll("home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
            return ctx.onClickScroll("head");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
            return ctx.onClickScroll("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
            return ctx.onClickScroll("resume");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
            return ctx.onClickScroll("portfolio");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            return ctx.onClickScroll("contact");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  color: #1CB698;\r\n  font-size: 30px;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: all 1s step-start;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #1CB698;\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]:active, .navbar-collapse[_ngcontent-%COMP%]:active {\r\n  transition: cubic-bezier();\r\n}\r\n\r\n@media only screen and (min-width: 574px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      padding-left: 10%;\r\n      padding-right: 10%;\r\n      margin: 0%;\r\n  }\r\n\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n      padding-left: 5%;\r\n  }\r\n\r\n\r\n  .navbar-collapse[_ngcontent-%COMP%] {\r\n      text-align: end;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5UkFBeVI7QUFDM1I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7TUFDSSxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixVQUFVO0VBQ2Q7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7OztFQUdBO01BQ0ksZUFBZTtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjMUNCNjk4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmElMjgyNTUsIDI1NSwgMjU1LCAwLjUlMjknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiBhIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgc3RlcC1zdGFydDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxQ0I2OTg7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjphY3RpdmUsIC5uYXZiYXItY29sbGFwc2U6YWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzRweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found-page/not-found-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/not-found/not-found-page/not-found-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppNotFoundNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");

    var NotFoundPageComponent = /*#__PURE__*/function () {
      function NotFoundPageComponent() {
        _classCallCheck(this, NotFoundPageComponent);
      }

      _createClass(NotFoundPageComponent, [{
        key: "imgNotFound",
        value: function imgNotFound() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconNotFoundPage;
        }
      }]);

      return NotFoundPageComponent;
    }();

    NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
      return new (t || NotFoundPageComponent)();
    };

    NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundPageComponent,
      selectors: [["app-not-found-page"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container-fluid", "font-fam-Righteous"], [1, "img"], ["alt", "", "srcset", "", 3, "src"], [1, "text"]],
      template: function NotFoundPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Page Not Found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgNotFound(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  border-radius: 30%;\r\n  transition: 0.3s;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]:hover {\r\n  background-color: #252a2e;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30rem;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  font-size: 7rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover {\r\n  color: #1CB698;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      width: 15rem;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      font-size: 2.5rem;\r\n      transition: 0.3s;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7TUFDSSxzQkFBc0I7TUFDdEIsdUJBQXVCO0VBQzNCOztFQUVBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTtNQUNJLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAuaW1nIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAuaW1nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYTJlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIC5pbWcgaW1nIHtcclxuICB3aWR0aDogMzByZW07XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogN3JlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIC50ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogIzFDQjY5ODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIC5pbWcgaW1ne1xyXG4gICAgICB3aWR0aDogMTVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found-page',
          templateUrl: './not-found-page.component.html',
          styleUrls: ['./not-found-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/not-found/not-found.module.ts ***!
    \***********************************************/

  /*! exports provided: NotFoundModule */

  /***/
  function srcAppNotFoundNotFoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundModule", function () {
      return NotFoundModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found-page/not-found-page.component */
    "./src/app/not-found/not-found-page/not-found-page.component.ts");

    var NotFoundModule = function NotFoundModule() {
      _classCallCheck(this, NotFoundModule);
    };

    NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotFoundModule
    });
    NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotFoundModule_Factory(t) {
        return new (t || NotFoundModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, {
        declarations: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/api-github.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/portfolio/api-github.service.ts ***!
    \*************************************************/

  /*! exports provided: ApiGithubService */

  /***/
  function srcAppPortfolioApiGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiGithubService", function () {
      return ApiGithubService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _Utils_Constantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Utils/Constantes */
    "./src/Utils/Constantes.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiGithubService = /*#__PURE__*/function () {
      function ApiGithubService(http) {
        _classCallCheck(this, ApiGithubService);

        this.http = http;
        this.apiGithubRepositories = _Utils_Constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].apiGithubRepository;
      }

      _createClass(ApiGithubService, [{
        key: "getRepository",
        value: function getRepository(listaRep) {
          return this.makeRequestRepository();
        }
      }, {
        key: "makeRequestRepository",
        value: function makeRequestRepository() {
          return this.http.get(this.apiGithubRepositories).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
          } else {
            // Erro ocorreu no lado do servidor
            errorMessage = "C\xF3digo do erro: ".concat(error.status, ", ") + "menssagem: ".concat(error.message);
          }

          alert(errorMessage);
          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return ApiGithubService;
    }();

    ApiGithubService.ɵfac = function ApiGithubService_Factory(t) {
      return new (t || ApiGithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ApiGithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiGithubService,
      factory: ApiGithubService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/list-card/list-card.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/portfolio/list-card/list-card.component.ts ***!
    \************************************************************/

  /*! exports provided: ListCardComponent */

  /***/
  function srcAppPortfolioListCardListCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListCardComponent", function () {
      return ListCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api-github.service */
    "./src/app/portfolio/api-github.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListCardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var repository_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", repository_r1.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", repository_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, repository_r1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repository_r1.description);
      }
    }

    var ListCardComponent = /*#__PURE__*/function () {
      function ListCardComponent(service) {
        _classCallCheck(this, ListCardComponent);

        this.service = service;
        this.listRep = ['AirCnC', 'WazeDev', 'mmartins', 'remade_random_websites', 'twitter_data_covid-19', 'campact_huffman'];
        this.repositories = [];
        this.loadData();
      }

      _createClass(ListCardComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.dataApi = this.service.getRepository(this.listRep);
          var objObservable = this.dataApi.subscribe(function (data) {
            data.map(function (repository) {
              if (_this.listRep.indexOf(repository.name) >= 0) {
                repository.image = _this.getImageRepository(repository.name);

                _this.repositories.push(repository);
              }
            });
          }).unsubscribe;
        }
      }, {
        key: "getImageRepository",
        value: function getImageRepository(nameRep) {
          var urlImage;

          switch (nameRep) {
            case 'AirCnC':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg';
              break;

            case 'WazeDev':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/WazeDev/master/psReadme/Web/createDevGif.gif';
              break;

            case 'mmartins':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/mmartins/master/imgs/desktop-feed.jpg';
              break;

            case 'remade_random_websites':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK';
              break;

            case 'twitter_data_covid-19':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png';
              break;

            case 'campact_huffman':
              urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/campact_huffman/main/1000px-Huffman_tree.svg.png';
              break;
          }

          return urlImage;
        }
      }]);

      return ListCardComponent;
    }();

    ListCardComponent.ɵfac = function ListCardComponent_Factory(t) {
      return new (t || ListCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_github_service__WEBPACK_IMPORTED_MODULE_1__["ApiGithubService"]));
    };

    ListCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListCardComponent,
      selectors: [["list-card"]],
      decls: 2,
      vars: 1,
      consts: [[1, "projetcs"], ["class", "image", 4, "ngFor", "ngForOf"], [1, "image"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["alt", "", "srcset", "", 1, "card-img-top", "w3-animate-bottom", 3, "src"], [1, "img__description"], [1, "font-size1-5rem", "w3-animate-top"], [1, "w3-animate-bottom"]],
      template: function ListCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListCardComponent_div_1_Template, 10, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      styles: [".projetcs[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 0fr 0fr 0fr;\r\n  -moz-column-gap: 2%;\r\n       column-gap: 2%;\r\n  row-gap: 2%;\r\n  justify-content: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  justify-content: center;\r\n  height: auto;\r\n  border-radius: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 22rem;\r\n  height: 20rem;\r\n  border-radius: 10%;\r\n}\r\n\r\n.img__description[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(28, 182, 152, 0.60);\r\n  color: #fff;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  margin-bottom: 4%;\r\n  border-radius: 10%;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  \r\n  transition: opacity .2s, visibility .2s;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]:hover   .img__description[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.img__description[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\nmargin: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  -webkit-animation: right_to_left 3s ease;\r\n          animation: right_to_left 3s ease;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  -webkit-animation: left_to_right 3s ease;\r\n          animation: left_to_right 3s ease;\r\n}\r\n\r\n@-webkit-keyframes right_to_left {\r\n  from {\r\n    margin-left: 100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@keyframes right_to_left {\r\n  from {\r\n    margin-left: 100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes left_to_right {\r\n  from {\r\n    margin-left: -100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@keyframes left_to_right {\r\n  from {\r\n    margin-left: -100%;\r\n  }\r\n  to {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .projetcs[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    flex-direction: column;\r\n\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    padding: 2%;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 13rem;\r\n    height: 12rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]:hover   .img__description[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .projetcs[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .img__description[_ngcontent-%COMP%] {\r\n    right: 3%;\r\n    left: 3%;\r\n    bottom: 1.4%;\r\n    top: 2%;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 28rem;\r\n    height: 27rem;\r\n  }\r\n}\r\n\r\n@media (mix-width:1024px) and (max-width: 768px) {\r\n  .img__description[_ngcontent-%COMP%] {\r\n    right: 13.1%;\r\n    left: 13.1%;\r\n    bottom: 1%;\r\n    top: 2.6%;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n    height: 20rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .img__description[_ngcontent-%COMP%] {\r\n    right: 13.1%;\r\n    left: 13.1%;\r\n    bottom: 1%;\r\n    top: 2.6%;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n    height: 20rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .img__description[_ngcontent-%COMP%] {\r\n    right: 16.3%;\r\n    left: 16.3%;\r\n    bottom: 2%;\r\n    top: 2%;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20rem;\r\n    height: 18rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2xpc3QtY2FyZC9saXN0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQWM7T0FBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHFDQUFxQztFQUNyQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjs7RUFFeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLE9BQU87RUFDVDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLE9BQU87RUFDVDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9saXN0LWNhcmQvbGlzdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamV0Y3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwZnIgMGZyIDBmcjtcclxuICBjb2x1bW4tZ2FwOiAyJTtcclxuICByb3ctZ2FwOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAyMnJlbTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMTgyLCAxNTIsIDAuNjApO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC8qIHRyYW5zaXRpb24gZWZmZWN0LiBub3QgbmVjZXNzYXJ5ICovXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMsIHZpc2liaWxpdHkgLjJzO1xyXG59XHJcblxyXG4uaW1hZ2U6aG92ZXIgLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltZ19fZGVzY3JpcHRpb24gbGFiZWwge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMSxcclxubGFiZWwge1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYW5pbWF0aW9uOiByaWdodF90b19sZWZ0IDNzIGVhc2U7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbmltYXRpb246IGxlZnRfdG9fcmlnaHQgM3MgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByaWdodF90b19sZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGVmdF90b19yaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAucHJvamV0Y3Mge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTNyZW07XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlOmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5wcm9qZXRjcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuaW1nX19kZXNjcmlwdGlvbiB7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICBsZWZ0OiAzJTtcclxuICAgIGJvdHRvbTogMS40JTtcclxuICAgIHRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAyOHJlbTtcclxuICAgIGhlaWdodDogMjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1peC13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHJpZ2h0OiAxMy4xJTtcclxuICAgIGxlZnQ6IDEzLjElO1xyXG4gICAgYm90dG9tOiAxJTtcclxuICAgIHRvcDogMi42JTtcclxuICB9XHJcblxyXG4gIC5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gICAgcmlnaHQ6IDEzLjElO1xyXG4gICAgbGVmdDogMTMuMSU7XHJcbiAgICBib3R0b206IDElO1xyXG4gICAgdG9wOiAyLjYlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHJpZ2h0OiAxNi4zJTtcclxuICAgIGxlZnQ6IDE2LjMlO1xyXG4gICAgYm90dG9tOiAyJTtcclxuICAgIHRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGhlaWdodDogMThyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'list-card',
          templateUrl: './list-card.component.html',
          styleUrls: ['./list-card.component.css']
        }]
      }], function () {
        return [{
          type: _api_github_service__WEBPACK_IMPORTED_MODULE_1__["ApiGithubService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio-section/portfolio-section.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/portfolio/portfolio-section/portfolio-section.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PortfolioSectionComponent */

  /***/
  function srcAppPortfolioPortfolioSectionPortfolioSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioSectionComponent", function () {
      return PortfolioSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");
    /* harmony import */


    var _list_card_list_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../list-card/list-card.component */
    "./src/app/portfolio/list-card/list-card.component.ts");

    var PortfolioSectionComponent = /*#__PURE__*/function () {
      function PortfolioSectionComponent() {
        _classCallCheck(this, PortfolioSectionComponent);
      }

      _createClass(PortfolioSectionComponent, [{
        key: "getIconPort",
        value: function getIconPort() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconPortfolio;
        }
      }]);

      return PortfolioSectionComponent;
    }();

    PortfolioSectionComponent.ɵfac = function PortfolioSectionComponent_Factory(t) {
      return new (t || PortfolioSectionComponent)();
    };

    PortfolioSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioSectionComponent,
      selectors: [["portfolio-section"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "top-data", "w3-animate-bottom"], ["alt", "", "srcset", "", 3, "src"], [1, "font-size2rem"], [1, "list"]],
      template: function PortfolioSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recent Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "list-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getIconPort(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_list_card_list_card_component__WEBPACK_IMPORTED_MODULE_2__["ListCardComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  background-color: #1e2326;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.top-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1zZWN0aW9uL3BvcnRmb2xpby1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8tc2VjdGlvbi9wb3J0Zm9saW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjMyNjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCAudG9wLWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtZGF0YSBpbWcge1xyXG4gIHdpZHRoOiA4cmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'portfolio-section',
          templateUrl: './portfolio-section.component.html',
          styleUrls: ['./portfolio-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/portfolio/portfolio.module.ts ***!
    \***********************************************/

  /*! exports provided: PortfolioModule */

  /***/
  function srcAppPortfolioPortfolioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
      return PortfolioModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portfolio-section/portfolio-section.component */
    "./src/app/portfolio/portfolio-section/portfolio-section.component.ts");
    /* harmony import */


    var _list_card_list_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-card/list-card.component */
    "./src/app/portfolio/list-card/list-card.component.ts");

    var PortfolioModule = function PortfolioModule() {
      _classCallCheck(this, PortfolioModule);
    };

    PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortfolioModule
    });
    PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortfolioModule_Factory(t) {
        return new (t || PortfolioModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, {
        declarations: [_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioSectionComponent"], _list_card_list_card_component__WEBPACK_IMPORTED_MODULE_3__["ListCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioSectionComponent"], _list_card_list_card_component__WEBPACK_IMPORTED_MODULE_3__["ListCardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/card/card.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profile/card/card.component.ts ***!
    \************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppProfileCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_medias_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../social-medias/social-medias-section/social-medias-section.component */
    "./src/app/social-medias/social-medias-section/social-medias-section.component.ts");

    var CardComponent = function CardComponent() {
      _classCallCheck(this, CardComponent);
    };

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["card"]],
      decls: 7,
      vars: 0,
      consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lucas Jesus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Software Engineer Fullstack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "social-medias-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_social_medias_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediasSectionComponent"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n  background-color: #252A2E;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5%;\r\n  width: 25rem;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding-top: 75%;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-size: 3.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.card-subtitle[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  font-family: sans-serif, 'Courier New', Courier, monospace;\r\n  font-style: initial;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   social-medias-section[_ngcontent-%COMP%] {\r\n  padding-bottom: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwwREFBMEQ7RUFDMUQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyQTJFO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICB3aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA3NSU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uY2FyZC1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG59XHJcblxyXG4uY2FyZCBzb2NpYWwtbWVkaWFzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-section/profile-section.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/profile/profile-section/profile-section.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileSectionComponent */

  /***/
  function srcAppProfileProfileSectionProfileSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSectionComponent", function () {
      return ProfileSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");
    /* harmony import */


    var _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rounded-image/rounded-image.component */
    "./src/app/profile/rounded-image/rounded-image.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/profile/card/card.component.ts");

    var ProfileSectionComponent = /*#__PURE__*/function () {
      function ProfileSectionComponent() {
        _classCallCheck(this, ProfileSectionComponent);
      }

      _createClass(ProfileSectionComponent, [{
        key: "backgroundImage",
        value: function backgroundImage() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].backgroundImageHead;
        }
      }]);

      return ProfileSectionComponent;
    }();

    ProfileSectionComponent.ɵfac = function ProfileSectionComponent_Factory(t) {
      return new (t || ProfileSectionComponent)();
    };

    ProfileSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileSectionComponent,
      selectors: [["profile"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "content"], [1, "img-opacity", 2, "opacity", "20%", 3, "src"], [1, "image"], [1, "container-card"]],
      template: function ProfileSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rounded-image", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.backgroundImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_2__["RoundedImageComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: -2;\r\n  width: 100%;\r\n  height: 80%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n  padding-top: 2%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .container-card[_ngcontent-%COMP%]  {\r\n  justify-content: center;\r\n  position: relative;\r\n  z-index: 0;\r\n  padding-top: 30%;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .container-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 150%;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%]   app-apresentacao-image-data[_ngcontent-%COMP%] {\r\n      margin-top: 5%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 375px) and (max-width: 425px) {\r\n  .container-fluid[_ngcontent-%COMP%]   app-apresentacao-image-data[_ngcontent-%COMP%] {\r\n      margin-left: 20%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXNlY3Rpb24vcHJvZmlsZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0ksY0FBYztFQUNsQjs7QUFFRjs7QUFFQTtFQUNFO01BQ0ksZ0JBQWdCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtc2VjdGlvbi9wcm9maWxlLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAtMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250ZW50IC5pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGFpbmVyLWNhcmQgIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBwYWRkaW5nLXRvcDogMzAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCBpbWcge1xyXG4gICAgICB3aWR0aDogMTUwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQgYXBwLWFwcmVzZW50YWNhby1pbWFnZS1kYXRhIHtcclxuICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIGFwcC1hcHJlc2VudGFjYW8taW1hZ2UtZGF0YSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'profile',
          templateUrl: './profile-section.component.html',
          styleUrls: ['./profile-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-section/profile-section.component */
    "./src/app/profile/profile-section/profile-section.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/profile/card/card.component.ts");
    /* harmony import */


    var _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rounded-image/rounded-image.component */
    "./src/app/profile/rounded-image/rounded-image.component.ts");
    /* harmony import */


    var _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../social-medias/social-medias.module */
    "./src/app/social-medias/social-medias.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_5__["SocialMediasModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSectionComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_4__["RoundedImageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_5__["SocialMediasModule"]],
        exports: [_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSectionComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_4__["RoundedImageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSectionComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_4__["RoundedImageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _social_medias_social_medias_module__WEBPACK_IMPORTED_MODULE_5__["SocialMediasModule"]],
          exports: [_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSectionComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _rounded_image_rounded_image_component__WEBPACK_IMPORTED_MODULE_4__["RoundedImageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/rounded-image/rounded-image.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/profile/rounded-image/rounded-image.component.ts ***!
    \******************************************************************/

  /*! exports provided: RoundedImageComponent */

  /***/
  function srcAppProfileRoundedImageRoundedImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundedImageComponent", function () {
      return RoundedImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");

    var RoundedImageComponent = /*#__PURE__*/function () {
      function RoundedImageComponent() {
        _classCallCheck(this, RoundedImageComponent);
      }

      _createClass(RoundedImageComponent, [{
        key: "personalImage",
        value: function personalImage() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].myPersonalImage;
        }
      }]);

      return RoundedImageComponent;
    }();

    RoundedImageComponent.ɵfac = function RoundedImageComponent_Factory(t) {
      return new (t || RoundedImageComponent)();
    };

    RoundedImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoundedImageComponent,
      selectors: [["rounded-image"]],
      decls: 2,
      vars: 1,
      consts: [[1, "persona-image", "container-fluid"], ["alt", "my-profile-image", 1, "rounded-circle", "img-fluid", 3, "src"]],
      template: function RoundedImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.personalImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  width: 30rem;\r\n  margin-left: 1%;\r\n}\r\n\r\n.persona-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  border: 12px solid #1CB698;\r\n  max-width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9yb3VuZGVkLWltYWdlL3JvdW5kZWQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3JvdW5kZWQtaW1hZ2Uvcm91bmRlZC1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuLnBlcnNvbmEtaW1hZ2UgaW1ne1xyXG4gIGJvcmRlcjogMTJweCBzb2xpZCAjMUNCNjk4O1xyXG4gIG1heC13aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundedImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rounded-image',
          templateUrl: './rounded-image.component.html',
          styleUrls: ['./rounded-image.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume-section/resume-section.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/resume/resume-section/resume-section.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ResumeSectionComponent */

  /***/
  function srcAppResumeResumeSectionResumeSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeSectionComponent", function () {
      return ResumeSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../timeline/timeline.component */
    "./src/app/resume/timeline/timeline.component.ts");

    var ResumeSectionComponent = function ResumeSectionComponent() {
      _classCallCheck(this, ResumeSectionComponent);
    };

    ResumeSectionComponent.ɵfac = function ResumeSectionComponent_Factory(t) {
      return new (t || ResumeSectionComponent)();
    };

    ResumeSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeSectionComponent,
      selectors: [["resume-section"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container-fluid", "w3-container", "w3-center", "w3-animate-top"], [1, "text"], [1, "font-size2rem"]],
      template: function ResumeSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  background-color: #252a2e;\r\n  margin: 5% 0 0 0;\r\n  overflow: hidden;\r\n  padding-top: 2%;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   app-timeline[_ngcontent-%COMP%] {\r\n  padding: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS1zZWN0aW9uL3Jlc3VtZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS1zZWN0aW9uL3Jlc3VtZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyYTJlO1xyXG4gIG1hcmdpbjogNSUgMCAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgYXBwLXRpbWVsaW5lIHtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'resume-section',
          templateUrl: './resume-section.component.html',
          styleUrls: ['./resume-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/resume/resume.module.ts ***!
    \*****************************************/

  /*! exports provided: ResumeModule */

  /***/
  function srcAppResumeResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeModule", function () {
      return ResumeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume-section/resume-section.component */
    "./src/app/resume/resume-section/resume-section.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/resume/timeline/timeline.component.ts");

    var ResumeModule = function ResumeModule() {
      _classCallCheck(this, ResumeModule);
    };

    ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumeModule
    });
    ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumeModule_Factory(t) {
        return new (t || ResumeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, {
        declarations: [_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_2__["ResumeSectionComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_2__["ResumeSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_2__["ResumeSectionComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_2__["ResumeSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/timeline/timeline.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/resume/timeline/timeline.component.ts ***!
    \*******************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppResumeTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TimelineComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", section_r1.year % 2 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", section_r1.year % 2 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", section_r1.year % 2 !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", section_r1.year % 2 !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.description);
      }
    }

    var TimelineComponent = function TimelineComponent() {
      _classCallCheck(this, TimelineComponent);

      this.timelineHistory = [{
        year: 2018,
        title: 'Start of a Dream',
        description: "In 2018 a had 19y and I worker in Shopping popular for of High class of my city. My job was security and I don't liked but I needed. The click to change my life was decision to make a prove to a Technical School of a best University in my city, to my surprise, I passed and here begini everthing."
      }, {
        year: 2019,
        title: 'Learning and Achievements',
        description: 'In 2019 I made a hard decision in my life, get out of a job or bet in my dream, my father had all suport to I can follow my dream and continue studing. He just studing fundamental school, with this i make two promisse to him first I will his one of the best studants and second I will get a job in a year.(I made)'
      }, {
        year: 2020,
        title: 'Fruit of the conquests',
        description: 'In 2020 I started internship on CI&T a big company,where  a learn a lot things and still learn, so comprir the second promisse and became a monitor on my course. Monitor are the student with betteres note and know explaing the content show in the course, so the first promisse was completed'
      }];
    };

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["timeline"]],
      decls: 1,
      vars: 1,
      consts: [["class", "timeline", 4, "ngFor", "ngForOf"], [1, "timeline"], [1, "timeline__item", "timeline__item--year", 3, "hidden"], [1, "timeline__item", 3, "hidden"], [1, "timeline__title"], [1, "timeline__blurb"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimelineComponent_div_0_Template, 15, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineHistory);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  padding: 1rem;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n.timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 1rem;\r\n  margin: 0 auto;\r\n  max-width: 1300px;\r\n}\r\n.timeline[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 100%;\r\n  border: 1px solid #1cb698;\r\n  right: 40px;\r\n  top: 0;\r\n}\r\n.timeline[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n@media screen and (min-width: 700px) {\r\n  .timeline[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n }\r\n  .timeline[_ngcontent-%COMP%]:before {\r\n    left: calc(50% - 1px);\r\n    right: auto;\r\n }\r\n}\r\n.timeline__item[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  border: 2px solid #1cb698;\r\n  -o-border-image: linear-gradient(to right, skyblue 0%, #1cb698 100%);\r\n     border-image: linear-gradient(to right, skyblue 0%, #1cb698 100%);\r\n  border-image-slice: 1;\r\n  position: relative;\r\n  margin: 1rem 3rem 1rem 1rem;\r\n  clear: both;\r\n}\r\n.timeline__item[_ngcontent-%COMP%]:after, .timeline__item[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n}\r\n.timeline__item[_ngcontent-%COMP%]:before {\r\n  right: -10px;\r\n  top: calc(50% - 5px);\r\n  border-style: solid;\r\n  border-color: #1cb698 #1cb698 transparent transparent;\r\n  border-width: 10px;\r\n  transform: rotate(45deg);\r\n}\r\n@media screen and (min-width: 700px) {\r\n  .timeline__item[_ngcontent-%COMP%] {\r\n    width: 44%;\r\n    margin: 1rem;\r\n }\r\n  .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n) {\r\n    float: right;\r\n    margin: 1rem;\r\n    -o-border-image: linear-gradient(to right, #1cb698 0%, skyblue 100%);\r\n       border-image: linear-gradient(to right, #1cb698 0%, skyblue 100%);\r\n    border-image-slice: 1;\r\n }\r\n  .timeline__item[_ngcontent-%COMP%]:nth-of-type(2n):before {\r\n    right: auto;\r\n    left: -10px;\r\n    border-color: transparent transparent #1cb698 #1cb698;\r\n }\r\n}\r\n.timeline__item--year[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  max-width: 150px;\r\n  margin: 0 48px 0 auto;\r\n  font-size: 1.8rem;\r\n  line-height: 1;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  padding: 0.5rem 1rem 1rem;\r\n}\r\n.timeline__item--year[_ngcontent-%COMP%]:before {\r\n  display: none;\r\n}\r\n@media screen and (min-width: 700px) {\r\n  .timeline__item--year[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n }\r\n  .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n) {\r\n    float: none;\r\n    margin: 0 auto;\r\n    -o-border-image: none;\r\n       border-image: none;\r\n }\r\n  .timeline__item--year[_ngcontent-%COMP%]:nth-of-type(2n):before {\r\n    display: none;\r\n }\r\n}\r\n.timeline__title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 1.5em;\r\n}\r\n.timeline__blurb[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n  font-size: 1rem;\r\n  margin: 0.5rem 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxNQUFNO0FBQ1I7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGFBQWE7Q0FDaEI7RUFDQztJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0NBQ2Q7QUFDRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixvRUFBaUU7S0FBakUsaUVBQWlFO0VBQ2pFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7Q0FDZjtFQUNDO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixvRUFBaUU7T0FBakUsaUVBQWlFO0lBQ2pFLHFCQUFxQjtDQUN4QjtFQUNDO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxxREFBcUQ7Q0FDeEQ7QUFDRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBa0I7S0FBbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2pCO0VBQ0M7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7RUFDQztJQUNFLGFBQWE7Q0FDaEI7QUFDRDtBQUNBO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbn1cclxuLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMWNiNjk4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIHRvcDogMDtcclxufVxyXG4udGltZWxpbmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAudGltZWxpbmUge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuIH1cclxuICAudGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMXB4KTtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gfVxyXG59XHJcbi50aW1lbGluZV9faXRlbSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMWNiNjk4O1xyXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBza3libHVlIDAlLCAjMWNiNjk4IDEwMCUpO1xyXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxcmVtIDNyZW0gMXJlbSAxcmVtO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi50aW1lbGluZV9faXRlbTphZnRlciwgLnRpbWVsaW5lX19pdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi50aW1lbGluZV9faXRlbTpiZWZvcmUge1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzFjYjY5OCAjMWNiNjk4IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAudGltZWxpbmVfX2l0ZW0ge1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuIH1cclxuICAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoMm4pIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWNiNjk4IDAlLCBza3libHVlIDEwMCUpO1xyXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG4gfVxyXG4gIC50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZSgybik6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxY2I2OTggIzFjYjY5ODtcclxuIH1cclxufVxyXG4udGltZWxpbmVfX2l0ZW0tLXllYXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA0OHB4IDAgYXV0bztcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBib3JkZXItaW1hZ2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMXJlbTtcclxufVxyXG4udGltZWxpbmVfX2l0ZW0tLXllYXI6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLnRpbWVsaW5lX19pdGVtLS15ZWFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gfVxyXG4gIC50aW1lbGluZV9faXRlbS0teWVhcjpudGgtb2YtdHlwZSgybikge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1pbWFnZTogbm9uZTtcclxuIH1cclxuICAudGltZWxpbmVfX2l0ZW0tLXllYXI6bnRoLW9mLXR5cGUoMm4pOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG59XHJcbi50aW1lbGluZV9fdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLnRpbWVsaW5lX19ibHVyYiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMCAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/social-medias/social-medias-section/social-medias-section.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/social-medias/social-medias-section/social-medias-section.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SocialMediasSectionComponent */

  /***/
  function srcAppSocialMediasSocialMediasSectionSocialMediasSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediasSectionComponent", function () {
      return SocialMediasSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/Utils/Constantes */
    "./src/Utils/Constantes.ts");

    var SocialMediasSectionComponent = /*#__PURE__*/function () {
      function SocialMediasSectionComponent() {
        _classCallCheck(this, SocialMediasSectionComponent);
      }

      _createClass(SocialMediasSectionComponent, [{
        key: "iconFacebook",
        value: function iconFacebook() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconFacebook;
        }
      }, {
        key: "iconInstagram",
        value: function iconInstagram() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconInstagram;
        }
      }, {
        key: "iconTwitter",
        value: function iconTwitter() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconTwitter;
        }
      }, {
        key: "iconLinkedin",
        value: function iconLinkedin() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconLinkedin;
        }
      }, {
        key: "iconGithub",
        value: function iconGithub() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].iconGithub;
        }
      }, {
        key: "linkFacebook",
        value: function linkFacebook() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkFacebook;
        }
      }, {
        key: "linkInstagram",
        value: function linkInstagram() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkInstagram;
        }
      }, {
        key: "linkTwitter",
        value: function linkTwitter() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkTwitter;
        }
      }, {
        key: "linkLinkedin",
        value: function linkLinkedin() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkLinkedin;
        }
      }, {
        key: "linkGithub",
        value: function linkGithub() {
          return src_Utils_Constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].linkGithub;
        }
      }]);

      return SocialMediasSectionComponent;
    }();

    SocialMediasSectionComponent.ɵfac = function SocialMediasSectionComponent_Factory(t) {
      return new (t || SocialMediasSectionComponent)();
    };

    SocialMediasSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediasSectionComponent,
      selectors: [["social-medias-section"]],
      decls: 11,
      vars: 10,
      consts: [["target", "_blank", 1, "card-link", 3, "href"], ["alt", "icone Facebook", 3, "src"], ["alt", "icone Instagram", 3, "src"], ["alt", "icone Twitter", 3, "src"], ["alt", "icone Linkedin", 3, "src"], ["alt", "icone Github", 3, "src"]],
      template: function SocialMediasSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkFacebook(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconFacebook(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkInstagram(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconInstagram(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkTwitter(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconTwitter(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkLinkedin(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconLinkedin(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkGithub(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconGithub(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding-right: 0%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  background-color: #1CB698;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLW1lZGlhcy9zb2NpYWwtbWVkaWFzLXNlY3Rpb24vc29jaWFsLW1lZGlhcy1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1tZWRpYXMvc29jaWFsLW1lZGlhcy1zZWN0aW9uL3NvY2lhbC1tZWRpYXMtc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuc2VjdGlvbiBhIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gaW1nIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5zZWN0aW9uIGltZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDQjY5ODtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediasSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'social-medias-section',
          templateUrl: './social-medias-section.component.html',
          styleUrls: ['./social-medias-section.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/social-medias/social-medias.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/social-medias/social-medias.module.ts ***!
    \*******************************************************/

  /*! exports provided: SocialMediasModule */

  /***/
  function srcAppSocialMediasSocialMediasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediasModule", function () {
      return SocialMediasModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./social-medias-section/social-medias-section.component */
    "./src/app/social-medias/social-medias-section/social-medias-section.component.ts");

    var SocialMediasModule = function SocialMediasModule() {
      _classCallCheck(this, SocialMediasModule);
    };

    SocialMediasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SocialMediasModule
    });
    SocialMediasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SocialMediasModule_Factory(t) {
        return new (t || SocialMediasModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialMediasModule, {
        declarations: [_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediasSectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediasSectionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediasSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_social_medias_section_social_medias_section_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediasSectionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/view-page/show/show.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/view-page/show/show.component.ts ***!
    \**************************************************/

  /*! exports provided: ShowComponent */

  /***/
  function srcAppViewPageShowShowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowComponent", function () {
      return ShowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../header/header/header.component */
    "./src/app/header/header/header.component.ts");
    /* harmony import */


    var _profile_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../profile/profile-section/profile-section.component */
    "./src/app/profile/profile-section/profile-section.component.ts");
    /* harmony import */


    var _about_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../about/about-section/about-section.component */
    "./src/app/about/about-section/about-section.component.ts");
    /* harmony import */


    var _resume_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../resume/resume-section/resume-section.component */
    "./src/app/resume/resume-section/resume-section.component.ts");
    /* harmony import */


    var _portfolio_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../portfolio/portfolio-section/portfolio-section.component */
    "./src/app/portfolio/portfolio-section/portfolio-section.component.ts");
    /* harmony import */


    var _contact_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../contact/contact-section/contact-section.component */
    "./src/app/contact/contact-section/contact-section.component.ts");
    /* harmony import */


    var _footer_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../footer/footer-section/footer-section.component */
    "./src/app/footer/footer-section/footer-section.component.ts");

    var ShowComponent = function ShowComponent() {
      _classCallCheck(this, ShowComponent);
    };

    ShowComponent.ɵfac = function ShowComponent_Factory(t) {
      return new (t || ShowComponent)();
    };

    ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowComponent,
      selectors: [["app-show"]],
      decls: 21,
      vars: 0,
      consts: [[1, "container-fluid", "font-fam-Righteous"], [1, "header"], ["id", "head", 1, "row"], [1, "content"], ["id", "home", 1, "row"], ["id", "about", 1, "row"], ["id", "resume", 1, "row"], ["id", "portfolio", 1, "row"], ["id", "contact", 1, "row"], ["id", "footer", 1, "row"], [1, "insp"], ["href", "https://goprotemplate.com/work/01_product/index.html?i=85201&pr_code=ZKah0do96eX7576bAWsVLFG03zBiHf", "target", "_blank", "rel", "noopener noreferrer"], [1, "bg-green", "contant"]],
      template: function ShowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "profile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "about-section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "resume-section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "portfolio-section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "contact-section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "footer-section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "My Inspiration to this web site: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Jack Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _profile_profile_section_profile_section_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSectionComponent"], _about_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__["AboutSectionComponent"], _resume_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_4__["ResumeSectionComponent"], _portfolio_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioSectionComponent"], _contact_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_6__["ContactSectionComponent"], _footer_footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_7__["FooterSectionComponent"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  grid-area: auto;\r\n  justify-content: center;\r\n}\r\n\r\n.insp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYWdlL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcGFnZS9zaG93L3Nob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBncmlkLWFyZWE6IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnNwIGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show',
          templateUrl: './show.component.html',
          styleUrls: ['./show.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/view-page/view-page-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/view-page/view-page-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ViewPageRoutingModule */

  /***/
  function srcAppViewPageViewPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function () {
      return ViewPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: './view-page.module.ts'
    }];

    var ViewPageRoutingModule = function ViewPageRoutingModule() {
      _classCallCheck(this, ViewPageRoutingModule);
    };

    ViewPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ViewPageRoutingModule
    });
    ViewPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ViewPageRoutingModule_Factory(t) {
        return new (t || ViewPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/view-page/view-page.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/view-page/view-page.module.ts ***!
    \***********************************************/

  /*! exports provided: ViewPageModule */

  /***/
  function srcAppViewPageViewPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPageModule", function () {
      return ViewPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./show/show.component */
    "./src/app/view-page/show/show.component.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/about/about.module.ts");
    /* harmony import */


    var _building_building_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../building/building.module */
    "./src/app/building/building.module.ts");
    /* harmony import */


    var _contact_contact_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../contact/contact.module */
    "./src/app/contact/contact.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/footer/footer.module.ts");
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../header/header.module */
    "./src/app/header/header.module.ts");
    /* harmony import */


    var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../portfolio/portfolio.module */
    "./src/app/portfolio/portfolio.module.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../resume/resume.module */
    "./src/app/resume/resume.module.ts");
    /* harmony import */


    var _view_page_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./view-page-routing.module */
    "./src/app/view-page/view-page-routing.module.ts");

    var ViewPageModule = function ViewPageModule() {
      _classCallCheck(this, ViewPageModule);
    };

    ViewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ViewPageModule
    });
    ViewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ViewPageModule_Factory(t) {
        return new (t || ViewPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_page_routing_module__WEBPACK_IMPORTED_MODULE_11__["ViewPageRoutingModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_4__["BuildingModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_5__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewPageModule, {
        declarations: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_page_routing_module__WEBPACK_IMPORTED_MODULE_11__["ViewPageRoutingModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_4__["BuildingModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_5__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"]],
        exports: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_page_routing_module__WEBPACK_IMPORTED_MODULE_11__["ViewPageRoutingModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfileModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"], _building_building_module__WEBPACK_IMPORTED_MODULE_4__["BuildingModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_5__["ContactModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"], _resume_resume_module__WEBPACK_IMPORTED_MODULE_10__["ResumeModule"]],
          exports: [_show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/enviroment.dev.ts":
  /*!********************************************!*\
    !*** ./src/environments/enviroment.dev.ts ***!
    \********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnviromentDevTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      apiGithubRepository: 'https://api.github.com/users/luccastraumer/repos?page=1&per_page=100',
      apiGithubOwner: 'https://api.github.com/users/luccastraumer',

      /** ICONS SOCIAL MEDIAS */
      iconSocialMediaFacebook: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/facebook.png',
      iconSocialMediaTwitter: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/twitter.png',
      iconSocialMediaInstagram: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/instagram.png',
      iconSocialMediaGithub: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/github.png',
      iconSocialMediaLinkedin: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/linkedin.png',
      iconInBuildning: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/db094b2aa68a6d98df6338cac2caf93ccaaa80e2/webpage/src/assets/in-building.svg',

      /** LINKS SOCIAL MEDIAS */
      linkSocialMediaFacebook: 'https://www.facebook.com/LuccasTraumer',
      linkSocialMediaTwitter: 'https://twitter.com/LuccasTraumer',
      linkSocialMediaInstagram: 'https://www.instagram.com/luccastraumer/',
      linkSocialMediaGithub: 'https://github.com/LuccasTraumer',
      linkSocialMediaLinkedin: 'https://www.linkedin.com/in/luccastraumer/',

      /** LINKS IMAGES */
      linkMyPersonalImage: 'https://avatars3.githubusercontent.com/u/16438051?s=400&u=fa0224315b18ada8435edf9ee06f2022f726bb6f&v=4',
      backgroundImageHead: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/main/webpage/src/assets/developer-working-on-his-project.jpg',
      backgroundimageContact: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/dev/webpage/src/assets/contact_bg.png',
      iconInfo: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/2a1c89fad1e8a4710cb38c81fce09747de9bc986/webpage/src/assets/info.svg',
      iconPortfolio: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b2e1bd71be97e847ef9fbb1ff3a927a678d1ef64/webpage/src/assets/icons/portfolio.svg',
      iconContact: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/7da0a0e6816fcffc3e0a9db8932b8b3606b505cb/webpage/src/assets/icons/email-2537244.svg',
      iconPageNotFound: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/0072b70ae0eada2bbf1c63a90a475c379d819f1b/webpage/src/assets/icons/not-found.svg',

      /*LINKS REPOSITORYS */
      linkRepRemadeRandomsWebSites: 'https://github.com/LuccasTraumer/remade_random_websites',
      linkRepAirCnc: 'https://github.com/LuccasTraumer/AirCnC',
      linkRepTwitterDataC19: 'https://github.com/LuccasTraumer/twitter_data_covid-19',
      linkRepWazeDev: 'https://github.com/LuccasTraumer/WazeDev',
      linkRepMaiaraMartins: 'https://github.com/LuccasTraumer/mmartins',

      /*EXTERNAL LINKS */
      cotucaUrl: 'https://cotuca.unicamp.br/',
      ciandtUrl: 'https://br.ciandt.com/'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lucas\Documents\Github\Angular\luccastraumer.github.io\webpage\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map