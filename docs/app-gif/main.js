"use strict";
(self["webpackChunkapp_gif"] = self["webpackChunkapp_gif"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _gifs_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifs/pages/home/home.component */ 2229);
/* harmony import */ var _shared_componets_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/componets/sidebar/sidebar.component */ 8755);



class AppComponent {
  constructor() {
    this.title = 'app-gif';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "d-flex"], [1, "flex-fill"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "shared-sidebar")(2, "gifs-home-page", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_gifs_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _shared_componets_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifs/gifs.module */ 3005);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__.GifsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__.GifsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 9136:
/*!******************************************************************!*\
  !*** ./src/app/gifs/components/card-list/card-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardListComponent": () => (/* binding */ CardListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _card_gifs_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/gifs-card.component */ 5725);



function CardListComponent_gifs_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gifs-card", 2);
  }
  if (rf & 2) {
    const gif_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gif", gif_r1);
  }
}
class CardListComponent {
  constructor() {
    this.gifs = [];
  }
}
CardListComponent.ɵfac = function CardListComponent_Factory(t) {
  return new (t || CardListComponent)();
};
CardListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CardListComponent,
  selectors: [["gifs-card-list"]],
  inputs: {
    gifs: "gifs"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "row"], ["class", "col-md-3 col-sm-6", 3, "gif", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6", 3, "gif"]],
  template: function CardListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardListComponent_gifs_card_1_Template, 1, 1, "gifs-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gifs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _card_gifs_card_component__WEBPACK_IMPORTED_MODULE_0__.GifsCardComponent],
  encapsulation: 2
});

/***/ }),

/***/ 5725:
/*!*************************************************************!*\
  !*** ./src/app/gifs/components/card/gifs-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifsCardComponent": () => (/* binding */ GifsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_componets_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/componets/lazy-image/lazy-image.component */ 7648);


class GifsCardComponent {
  ngOnInit() {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
GifsCardComponent.ɵfac = function GifsCardComponent_Factory(t) {
  return new (t || GifsCardComponent)();
};
GifsCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GifsCardComponent,
  selectors: [["gifs-card"]],
  inputs: {
    gif: "gif"
  },
  decls: 5,
  vars: 3,
  consts: [[1, "bg-dark", "text-center", "card", "mb-2", "text-center"], [1, "text-white", 3, "url", "alt"], [1, "card-body", "text-white"], [1, "card-text"]],
  template: function GifsCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "shared-lazy-image", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", ctx.gif.images.downsized_medium.url)("alt", ctx.gif.title || "No name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gif.title || "No title", " ");
    }
  },
  dependencies: [_shared_componets_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyImageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7143:
/*!********************************************************************!*\
  !*** ./src/app/gifs/components/search-box/search-box.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBoxComponent": () => (/* binding */ SearchBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/gif.service */ 1113);


const _c0 = ["txtTagInput"];
class SearchBoxComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTags(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) {
  return new (t || SearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gif_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
};
SearchBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchBoxComponent,
  selectors: [["gifs-search-box"]],
  viewQuery: function SearchBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
    }
  },
  decls: 4,
  vars: 0,
  consts: [["type", "text", "placeholder", "Buscar gifs..", 1, "form-control", 3, "keyup.enter"], ["txtTagInput", ""]],
  template: function SearchBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buscar: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function SearchBoxComponent_Template_input_keyup_enter_2_listener() {
        return ctx.searchTag();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3005:
/*!*************************************!*\
  !*** ./src/app/gifs/gifs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifsModule": () => (/* binding */ GifsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 2229);
/* harmony import */ var _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card-list/card-list.component */ 9136);
/* harmony import */ var _components_card_gifs_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/gifs-card.component */ 5725);
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-box/search-box.component */ 7143);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class GifsModule {}
GifsModule.ɵfac = function GifsModule_Factory(t) {
  return new (t || GifsModule)();
};
GifsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: GifsModule
});
GifsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GifsModule, {
    declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__.SearchBoxComponent, _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_1__.CardListComponent, _components_card_gifs_card_component__WEBPACK_IMPORTED_MODULE_2__.GifsCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent]
  });
})();

/***/ }),

/***/ 2229:
/*!***************************************************!*\
  !*** ./src/app/gifs/pages/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/gif.service */ 1113);
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ 7143);
/* harmony import */ var _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-list/card-list.component */ 9136);




class HomePageComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  get gifs() {
    return this.gifsService.gifList;
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_gif_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["gifs-home-page"]],
  decls: 5,
  vars: 1,
  consts: [[1, "row", "p-3"], [1, "col-12"], [1, "col-12", "pt-2"], [3, "gifs"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "gifs-search-box");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "gifs-card-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gifs", ctx.gifs);
    }
  },
  dependencies: [_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__.SearchBoxComponent, _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_2__.CardListComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1113:
/*!**********************************************!*\
  !*** ./src/app/gifs/services/gif.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifsService": () => (/* binding */ GifsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class GifsService {
  // 'search?api_key=2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr&q=valorant&limit=10'
  constructor(http) {
    this.http = http;
    this.gifList = [];
    this._tagsHistory = [];
    this.apiKey = '2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr';
    this.serviceUrl = 'http://api.giphy.com/v1/gifs/';
    this.LoadLocalStorage();
  }
  get tagsHistory() {
    return [...this._tagsHistory];
  }
  organizeHistory(tag) {
    tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }
  saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  LoadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history'));
    if (this._tagsHistory.length === 0) return;
    this.searchTags(this._tagsHistory[0]);
  }
  searchTags(tag) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('api_key', this.apiKey).set('q', tag).set('limit', '10');
    // `http://api.giphy.com/v1/gifs/search?api_key=2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr&q=${tag}&limit=10`
    this.http.get(`${this.serviceUrl}search`, {
      params
    }).subscribe(res => {
      this.gifList = res.data;
      console.log({
        gif: this.gifList
      });
    });
  }
}
GifsService.ɵfac = function GifsService_Factory(t) {
  return new (t || GifsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
GifsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GifsService,
  factory: GifsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7648:
/*!*********************************************************************!*\
  !*** ./src/app/shared/componets/lazy-image/lazy-image.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyImageComponent": () => (/* binding */ LazyImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function LazyImageComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
  }
}
const _c0 = function (a0) {
  return {
    display: a0
  };
};
class LazyImageComponent {
  constructor() {
    this.alt = '';
    this.hasLoader = false;
  }
  ngOnInit() {
    if (!this.url) throw new Error('URL property is required');
  }
  onLoad() {
    setTimeout(() => {
      this.hasLoader = true;
    }, 990);
  }
}
LazyImageComponent.ɵfac = function LazyImageComponent_Factory(t) {
  return new (t || LazyImageComponent)();
};
LazyImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LazyImageComponent,
  selectors: [["shared-lazy-image"]],
  inputs: {
    url: "url",
    alt: "alt"
  },
  decls: 3,
  vars: 6,
  consts: [[1, "d-flex", "justify-content-center"], [1, "card-img-top", "animate__animated", "animate__fadeIn", 3, "src", "alt", "ngStyle", "load"], ["src", "assets/loader.svg", "height", "35", "width", "35", "class", "mt-3", "alt", "", 4, "ngIf"], ["src", "assets/loader.svg", "height", "35", "width", "35", "alt", "", 1, "mt-3"]],
  template: function LazyImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LazyImageComponent_Template_img_load_1_listener() {
        return ctx.onLoad();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LazyImageComponent_img_2_Template, 1, 0, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.hasLoader ? "" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2
});

/***/ }),

/***/ 8755:
/*!***************************************************************!*\
  !*** ./src/app/shared/componets/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_gifs_services_gif_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/gifs/services/gif.service */ 1113);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function SidebarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.searchTag(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, tag_r1), " ");
  }
}
class SidebarComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  get tags() {
    return this.gifsService.tagsHistory;
  }
  searchTag(tag) {
    this.gifsService.searchTags(tag);
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_gifs_services_gif_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["shared-sidebar"]],
  decls: 6,
  vars: 1,
  consts: [["id", "sidebar", 1, "bg-dark", "border-right", "p-3"], [1, "text-white"], [1, "list-group", "list-reset"], ["class", "list-group-item list-group-item-action ", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GifsApp");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidebarComponent_button_5_Template, 3, 3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
  styles: ["#sidebar[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    width: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmV0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _componets_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componets/sidebar/sidebar.component */ 8755);
/* harmony import */ var _componets_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componets/lazy-image/lazy-image.component */ 7648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_componets_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _componets_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyImageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_componets_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _componets_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyImageComponent]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map