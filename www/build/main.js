webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoStuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_resMsg__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfoStuPage = /** @class */ (function () {
    function InfoStuPage(navCtrl, navParams, alertCtrl, ListstuProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ListstuProvider = ListstuProvider;
        this.stuValID = this.navParams.get('stuValID');
        this.stuValName = this.navParams.get('stuValName');
    }
    InfoStuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoStuPage');
    };
    InfoStuPage.prototype.upStu = function (stuID, stuName) {
        var _this = this;
        console.log("Update");
        console.log(this.val1);
        console.log(this.val2);
        var resMsg2 = new __WEBPACK_IMPORTED_MODULE_3__models_resMsg__["a" /* resMsg */]("", "");
        this.sub = this.ListstuProvider.updateStudentGet(this.stuValID, this.val2).subscribe(function (res) {
            resMsg2 = res;
            _this.ShowAlert(resMsg2.Status, resMsg2.Message);
        }, function (error) { return _this.errorMessage = error; });
    };
    InfoStuPage.prototype.ShowAlert = function (titlea, subtitleb) {
        var alert = this.alertCtrl.create({
            title: titlea,
            subTitle: subtitleb,
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    };
    InfoStuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-stu',template:/*ion-inline-start:"/Users/equinox/Desktop/Sidebar/src/pages/info-stu/info-stu.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Infomation</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n\n        <ion-item center >\n            <ion-label color=\'primary\' stacked >Student ID</ion-label>\n            <ion-label >{{stuValID}}</ion-label>\n        </ion-item>\n    \n        <ion-item center >\n            <ion-label color=\'primary\' floating>Student Name</ion-label>\n            <ion-input type="text" value={{stuValName}} [(ngModel)] = \'val2\' ></ion-input>\n        </ion-item>\n        \n        <button ion-button full round (click) =\'upStu();\'> Update</button>\n\n    </ion-content>\n    \n  '/*ion-inline-end:"/Users/equinox/Desktop/Sidebar/src/pages/info-stu/info-stu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__["a" /* ListstuProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__["a" /* ListstuProvider */]) === "function" && _d || Object])
    ], InfoStuPage);
    return InfoStuPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=info-stu.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_resMsg__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_stu_info_stu__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowltPage = /** @class */ (function () {
    //res: Response;
    function ShowltPage(navCtrl, navParams, ListstuProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ListstuProvider = ListstuProvider;
        this.alertCtrl = alertCtrl;
        this.getStudentFromDB();
    }
    ShowltPage_1 = ShowltPage;
    ShowltPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowltPage');
    };
    ShowltPage.prototype.viewProfile = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ShowltPage_1, {
            item: item
        });
    };
    ShowltPage.prototype.getStudentFromDB = function () {
        var _this = this;
        this.sub = this.ListstuProvider.myStudent().subscribe(function (res) { return _this.stuListDB = res; }, function (error) { return _this.errorMessage = error; });
    };
    ShowltPage.prototype.deleteRowStu = function (event, item) {
        var _this = this;
        console.log("Delete");
        console.log(item.studentID);
        var resMsg2 = new __WEBPACK_IMPORTED_MODULE_3__models_resMsg__["a" /* resMsg */]("", "");
        this.sub = this.ListstuProvider.deleteStudentGet(item.studentID).subscribe(function (res) {
            resMsg2 = res;
            _this.ShowAlert(resMsg2.Status, resMsg2.Message);
        }, function (error) { return _this.errorMessage = error; });
        var index = this.stuListDB.indexOf(item);
        if (index > -1) {
            this.stuListDB.splice(index, 1);
        }
    };
    ShowltPage.prototype.moreRowStu = function (id, name) {
        console.log("More");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_info_stu_info_stu__["a" /* InfoStuPage */], {
            stuValID: id,
            stuValName: name
        });
    };
    ShowltPage.prototype.ShowAlert = function (titlea, subtitleb) {
        var alert = this.alertCtrl.create({
            title: titlea,
            subTitle: subtitleb,
            buttons: ['OK']
        });
        alert.present();
    };
    ShowltPage.prototype.ionViewWillEnter = function () {
        this.getStudentFromDB();
        console.log("Enter eiei");
    };
    ShowltPage = ShowltPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showlt',template:/*ion-inline-start:"/Users/equinox/Desktop/Sidebar/src/pages/showlt/showlt.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>showlt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of stuListDB">\n      \n        <button ion-item  (click)=\'viewProfile(item.title,item.note)\'> \n          <div class="item-note" item-start>\n            {{item.studentID }}\n          </div>\n\n          <div class="item-note" item-end>\n            {{item.studentName}}\n          </div>\n        </button>\n\n        <ion-item-options side="right">\n            <button ion-button color="danger" (click) =\'deleteRowStu($event,item)\'>\n               <ion-icon name="trash"></ion-icon>\n                Delete\n            </button>\n            <button ion-button color="Default" (click) =\'moreRowStu(item.studentID,item.studentName)\'>\n                <ion-icon name="md-information-circle"></ion-icon>\n                More\n             </button>\n        </ion-item-options>\n\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/equinox/Desktop/Sidebar/src/pages/showlt/showlt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__["a" /* ListstuProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ShowltPage);
    return ShowltPage;
    var ShowltPage_1;
}());

//# sourceMappingURL=showlt.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info-stu/info-stu.module": [
		279,
		1
	],
	"../pages/showlt/showlt.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_resMsg__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, stuPro, alertCtrl) {
        this.navCtrl = navCtrl;
        this.stuPro = stuPro;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.insertDataToHttp = function () {
        var _this = this;
        var resMsg2 = new __WEBPACK_IMPORTED_MODULE_3__models_resMsg__["a" /* resMsg */]("", "");
        this.sub = this.stuPro.insertStudentGet(this.val1, this.val2).subscribe(function (res) {
            resMsg2 = res;
            _this.ShowAlert(resMsg2.Status, resMsg2.Message);
            console.log("Insert Success !!!");
        }, function (error) {
            _this.errorMessage = error;
            console.log("Can't Insert !!!");
        });
        console.log('Hello StudentDataProvider Provider00000');
    };
    HomePage.prototype.ShowAlert = function (titlea, subtitleb) {
        var alert = this.alertCtrl.create({
            title: titlea,
            subTitle: subtitleb,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/equinox/Desktop/Sidebar/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label floating>Student ID</ion-label>\n        <ion-input type="text" [(ngModel)] = \'val1\' ></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Student Name</ion-label>\n        <ion-input type="text" [(ngModel)] = \'val2\' ></ion-input>\n    </ion-item>\n\n    <button ion-button full round (click) =\'insertDataToHttp();\'> INSERT</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/equinox/Desktop/Sidebar/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_liststu_liststu__["a" /* ListstuProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.deleteRow = function (event, item) {
        console.log("Delete");
        //this.icons.pop();
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    ListPage.prototype.moreRow = function () {
        console.log("More");
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/equinox/Desktop/Sidebar/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n          <ion-item-sliding *ngFor="let item of items" >\n              <button ion-item (click)="itemTapped($event, item)" >\n                  <ion-icon [name]="item.icon" item-start></ion-icon>\n                    {{item.title}}\n                  <div class="item-note" item-end>\n                    {{item.note}}\n                  </div>\n              </button>\n\n    \n          <ion-item-options side="right">\n              <button ion-button color="danger" (click) =\'deleteRow($event,item)\'>\n                 <ion-icon name="trash"></ion-icon>\n                  Delete\n              </button>\n              <button ion-button color="Default" (click) =\'moreRow()\'>\n                  <ion-icon name="md-information-circle"></ion-icon>\n                  More\n               </button>\n          </ion-item-options>\n\n  </ion-item-sliding>\n\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/equinox/Desktop/Sidebar/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_showlt_showlt__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_info_stu_info_stu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_liststu_liststu__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_showlt_showlt__["a" /* ShowltPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_stu_info_stu__["a" /* InfoStuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info-stu/info-stu.module#InfoStuPageModule', name: 'InfoStuPage', segment: 'info-stu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showlt/showlt.module#ShowltPageModule', name: 'ShowltPage', segment: 'showlt', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_showlt_showlt__["a" /* ShowltPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_stu_info_stu__["a" /* InfoStuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_liststu_liststu__["a" /* ListstuProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_showlt_showlt__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Show', component: __WEBPACK_IMPORTED_MODULE_6__pages_showlt_showlt__["a" /* ShowltPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/equinox/Desktop/Sidebar/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/equinox/Desktop/Sidebar/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListstuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';






var ListstuProvider = /** @class */ (function () {
    function ListstuProvider(http) {
        this.http = http;
        console.log('Hello ListstuProvider Provider');
    }
    ListstuProvider.prototype.myStudent = function () {
        return this.http.get('https://bayes.000webhostapp.com/getStudent.php')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ListstuProvider.prototype.insertStudentGet = function (studentID, studentName) {
        return this.http.get('https://bayes.000webhostapp.com/insertStudent.php?studentID=' + studentID + '&studentName=' + studentName)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ListstuProvider.prototype.insertStudentPost = function (DatastudentID, DatastudentName) {
        var data = { 'studentID': DatastudentID, 'studentName': DatastudentName };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        return this.http.post("https://bayes.000webhostapp.com/insertStudentPOST.php", data, { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    }; /// SEND TYPE POST 
    ListstuProvider.prototype.deleteStudentGet = function (studentID) {
        return this.http.get("https://bayes.000webhostapp.com/deleteStudent.php?studentID=" + studentID)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ListstuProvider.prototype.updateStudentGet = function (studentID, studentName) {
        return this.http.get("https://bayes.000webhostapp.com/updateStudent.php?studentID=" + studentID + "&studentName=" + studentName)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ListstuProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().errorMessage || "เกิดข้อผิดพลาด Server ");
    };
    ListstuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ListstuProvider);
    return ListstuProvider;
}());

//# sourceMappingURL=liststu.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resMsg; });
var resMsg = /** @class */ (function () {
    function resMsg(Message, Status) {
        this.Message = Message;
        this.Status = Status;
    }
    return resMsg;
}());

//# sourceMappingURL=resMsg.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map