webpackJsonp([1,5],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "land_back.4c723470797e95810353.png";

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BadgeComponent = (function () {
    function BadgeComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    return BadgeComponent;
}());
BadgeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-badge',
        template: __webpack_require__(666),
        styles: [__webpack_require__(600)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object])
], BadgeComponent);

var _a;
//# sourceMappingURL=badge.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/toPromise';

var UserService = (function () {
    function UserService(af, http, router) {
        var _this = this;
        this.af = af;
        this.http = http;
        this.router = router;
        this.isSignupProcess = false;
        // private authState: Subject<any> = new Subject();
        this.getUserURL = '/api/getVar';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.signed = false;
        this.firstSigned = false;
        this.af.auth.subscribe(function (auth) {
            console.log(auth);
            if (_this.isSignupProcess) {
                _this.model.firstname == undefined && (_this.model.firstname = '');
                _this.model.lastname == undefined && (_this.model.lastname = '');
                auth.auth.updateProfile({
                    displayName: (_this.model.firstname.trim() + ' ' + _this.model.lastname.trim()).trim(),
                    photoURL: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
                }).then(function () {
                    this.isSignupProcess = false;
                    // this.authState.next(auth);
                    // this.currentAuth = auth;
                }.bind(_this));
                _this.firstSigned = true;
            }
            else {
                // this.authState.next(auth);
                // this.currentAuth = auth;
                _this.firstSigned = false;
            }
        });
        this.af.auth.subscribe(function (auth) {
            // console.log(auth);
            if (auth != null) {
                _this.getUser(auth.auth.email).subscribe(function (user) {
                    if (user == null) {
                        this.createUser({
                            id: auth.uid,
                            email: auth.auth.email,
                            name: auth.auth.displayName,
                            picture: auth.auth.photoURL,
                        }).then(function () {
                            this.router.navigateByUrl('/home');
                        }.bind(this));
                    }
                    else {
                        if (router.url == "/login" || router.url == "/" || router.url == "/signup") {
                            this.router.navigateByUrl('/home');
                        }
                    }
                }.bind(_this));
                _this.signed = true;
            }
            else {
                _this.router.navigateByUrl('/');
                _this.signed = false;
            }
        });
    }
    // private currentAuth: any = null;
    // getAuthState(){
    //   return this.authState;
    // }
    UserService.prototype.isFirstSigned = function () {
        return this.firstSigned;
    };
    UserService.prototype.getAuth = function () {
        return this.af.auth;
    };
    UserService.prototype.emailLogin = function (model) {
        this.isSignupProcess = false;
        this.model = model;
        return this.af.auth.login({
            email: model.email,
            password: model.password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AuthMethods */].Password,
        });
    };
    UserService.prototype.gplusLogin = function () {
        this.isSignupProcess = false;
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AuthMethods */].Redirect,
        });
    };
    UserService.prototype.facebookLogin = function () {
        this.isSignupProcess = false;
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AuthMethods */].Redirect,
        });
    };
    UserService.prototype.emailSignup = function (model) {
        this.isSignupProcess = true;
        this.model = model;
        return this.af.auth.createUser({
            email: model.email,
            password: model.password,
        });
    };
    UserService.prototype.getUser = function (email) {
        var users;
        users = this.af.database.list('/users');
        return users.map(function (userList) {
            var foundUser = null;
            userList.forEach(function (value, index) {
                if (value.email == email) {
                    foundUser = value;
                }
            });
            return foundUser;
        });
    };
    // handleError(){
    //   console.log('http error!');
    // }
    UserService.prototype.createUser = function (user) {
        var initialProgress = {};
        initialProgress.next_action = {
            case: "-JkEYXe6hIrueGO5F25Y",
            program: "Cold and Flu"
        };
        initialProgress.programs = {};
        initialProgress.programs["Cold and Flu"] = {};
        initialProgress.programs["Cold and Flu"].casesCompleted = ["null"];
        initialProgress.programs["Cold and Flu"].isComplete = false;
        user.progress = initialProgress;
        user.company = "default";
        return this.af.database.object('/users/' + user.id).set(user);
    };
    UserService.prototype.signout = function () {
        this.router.navigateByUrl('/');
        return this.af.auth.logout();
    };
    UserService.prototype.isSigned = function () {
        // return this.currentAuth != null;
        return this.signed;
    };
    UserService.prototype.getEncryptedUid = function (uid) {
        //: Promise<any> {
        // console.log('http requesting...');
        var user = { id: uid };
        return this.http
            .post(this.getUserURL, JSON.stringify(user), { headers: this.headers })
            .map(function (res) {
            return res.json().id;
        });
        // .toPromise()
        // .then(res => res.json())
        // .catch(this.handleError);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 480;


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(519);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tour__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tour___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tour__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserService } from './user.service';
var AppComponent = (function () {
    function AppComponent(ts /*, private us: UserService*/) {
        this.ts = ts; /*, private us: UserService*/
        this.title = 'app works!';
        // if (us.isFirstSigned()) {
        this.ts.initialize([
            {
                anchorId: 'welcome',
                route: '/home',
                content: 'Welcome to Viven Health’s Cold and Flu program. This short walkthrough will help you navigate your program.',
                title: 'Welcome to Viven Health!',
            },
            {
                anchorId: 'homepage',
                route: '/home',
                content: "Here is your homepage. This is where you will see your progress, and what tasks you still have to complete.",
                placement: 'below',
                title: 'Home',
            },
            {
                anchorId: 'progress',
                route: '/home',
                content: "You can see how many cases have been completed, and what percentage of the program you have finished.",
                placement: 'left',
                title: 'Progress',
            },
            {
                anchorId: 'next_case',
                route: '/home',
                content: "Each time you login, the system will show you the next case to be completed.",
                placement: 'left',
                title: 'Next Case',
            },
            {
                anchorId: 'profile',
                route: '/home',
                content: "Click on \u201CYour Profile\u201D.",
                placement: 'below',
                title: 'Profile',
            },
            {
                anchorId: 'profile',
                route: '/profile',
                content: "Your Profile is highlighted.\n                    On the \u201CYour Profile\u201D page, you will see all of the badges you earned and others you can still earn.\n                  ",
                placement: 'below',
                title: 'Profile',
            },
            {
                anchorId: 'programs',
                route: '/profile',
                content: "Click on \u201CPrograms\u201D.",
                placement: 'below',
                title: 'Program',
            },
            {
                anchorId: 'programs',
                route: '/cases',
                content: "Programs link is highlighted.\n                    Here is your assigned program.\n                    This is where you will experience your cases and learn how to prevent yourself, and others, from getting sick.\n                  ",
                placement: 'below',
                title: 'Program',
            },
            {
                anchorId: 'first_case',
                route: '/cases',
                content: "Now let\u2019s try your first case.",
                placement: 'left',
                title: 'Your first case',
            },
            {
                anchorId: 'first_success',
                route: '/cases',
                content: "Great! You have completed your first case.\n                    You can now finish the rest of the program on your schedule.\n                    Keep an eye out for emails that bring you new cases, mini games, and fun quests that will help you stay healthy all year!\n                    ",
                placement: 'below',
                title: 'Congratulation!',
            }
        ]);
        this.ts.start();
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(665),
        styles: [__webpack_require__(599)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_tour__["TourService"] /*, private us: UserService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_tour__["TourService"] /*, private us: UserService*/) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_tour__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_tour___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_tour__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_firebase_config__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__content_content_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__landing_landing_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__programs_programs_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__support_support_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__faq_item_faq_item_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__cases_cases_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_login_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__signup_signup_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__badge_badge_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__badge_award_directive__ = __webpack_require__(504);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';







// import '../assets/js/impress.js';


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__programs_programs_component__["a" /* ProgramsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__support_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_25__faq_item_faq_item_component__["a" /* FaqItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__cases_cases_component__["a" /* CasesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_29__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_30__badge_badge_component__["a" /* BadgeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__badge_award_directive__["a" /* BadgeAwardDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"].forRoot([]),
            // ScrollViewModule,
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"].forRoot([
                {
                    path: '',
                    // component: LandingComponent,
                    component: __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */],
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */],
                }, {
                    path: 'support',
                    component: __WEBPACK_IMPORTED_MODULE_24__support_support_component__["a" /* SupportComponent */],
                },
                {
                    path: 'cases',
                    component: __WEBPACK_IMPORTED_MODULE_26__cases_cases_component__["a" /* CasesComponent */],
                },
                {
                    path: 'profile',
                    component: __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__["a" /* ProfileComponent */],
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
                },
                {
                    path: 'content',
                    component: __WEBPACK_IMPORTED_MODULE_19__content_content_component__["a" /* ContentComponent */],
                },
                {
                    path: 'signup',
                    component: __WEBPACK_IMPORTED_MODULE_29__signup_signup_component__["a" /* SignupComponent */],
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__["OnsenModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_tour__["TourNgBootstrapModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__["HotkeyModule"].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_10_ng2_tour__["TourService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_30__badge_badge_component__["a" /* BadgeComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badge_badge_component__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeAwardDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BadgeAwardDirective = (function () {
    function BadgeAwardDirective(ps, us, dialog) {
        this.ps = ps;
        this.us = us;
        this.dialog = dialog;
        this.uid = null;
        this.updateBadges = null;
        us.getAuth().subscribe(function (auth) {
            if (auth != null) {
                this.uid = auth.uid;
                this.getProfile();
            }
        }.bind(this));
        ps.getAllBadges().subscribe(function (list) {
            this.allBadges = list.map(function (value, index) { value.enabled = false; return value; });
            this.getProfile();
            // console.log(this.allBadges);
        }.bind(this));
    }
    BadgeAwardDirective.prototype.openDialog = function () {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__badge_badge_component__["a" /* BadgeComponent */]);
    };
    BadgeAwardDirective.prototype.enableBadge = function (list) {
        list.forEach(function (badge) {
            this.allBadges.forEach(function (obj) {
                if (obj.name == badge.name) {
                    obj.enabled = true;
                }
            });
        }.bind(this));
    };
    BadgeAwardDirective.prototype.getProfile = function () {
        // console.log(this.allBadges);
        if (this.uid != null && this.allBadges != undefined) {
            // this.percent = this.ps.getProgramProgressPercent(this.uid, 'Cold and Flu');
            this.badges = this.ps.getBadgeList(this.uid);
            this.badges.subscribe(function (list) {
                this.enableBadge(list);
            }.bind(this));
            this.ps.getUpdateBadgeList(this.uid).subscribe(function (obj) {
                obj.subscribe(function (obj1) {
                    if (this.updateBadges == null) {
                        this.updateBadges = obj1;
                        this.updateBadges.forEach(function (badge) {
                            var _this = this;
                            this.dialogRef = this.openDialog();
                            // let dialBadge;
                            // this.allBadges.forEach((obj) => { if(obj.name == badge.name) dialBadge = obj; });
                            // this.dialogRef.componentInstance.badge = dialBadge;
                            this.dialogRef.componentInstance.badge = badge;
                            this.dialogRef.afterClosed().subscribe(function (result) {
                                _this.ps.awardBadgeToUser(_this.uid, { name: badge.name });
                            });
                        }.bind(this));
                    }
                }.bind(this));
            }.bind(this));
        }
    };
    return BadgeAwardDirective;
}());
BadgeAwardDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appBadgeAward]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], BadgeAwardDirective);

var _a, _b, _c;
//# sourceMappingURL=badge-award.directive.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaseService = (function () {
    function CaseService(af) {
        this.af = af;
    }
    CaseService.prototype.getProgram = function (programName) {
        this.program = this.af.database.object('/sim/' + programName);
        return this.program.map(function (obj) {
            var caseList = [];
            Object.keys(obj).forEach(function (value, index) {
                if (value !== 'program') {
                    caseList.push({ id: value, obj: obj[value] });
                }
            });
            return { cases: caseList, sections: obj['program'] };
        });
    };
    return CaseService;
}());
CaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], CaseService);

var _a;
//# sourceMappingURL=case.service.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__case_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import '../../assets/js/impress';
// declare var impress: any;
var CasesComponent = (function () {
    function CasesComponent(case_service, us, router) {
        var _this = this;
        this.case_service = case_service;
        this.us = us;
        this.router = router;
        this.programName = "Cold and Flu";
        this.program = this.case_service.getProgram(this.programName);
        this.program.subscribe(function (obj) {
            this.cases = obj.cases;
            // console.log(obj.cases)
            this.sections = obj.sections.categories;
        }.bind(this));
        this.auth = us.getAuth();
        this.auth.subscribe(function (auth) {
            if (auth != null) {
                us.getEncryptedUid(auth.uid).subscribe(function (value) { return _this.encryptedUid = value; });
            }
        });
        // if(this.us.isSigned()){
        //   this.us.getEncryptedUid(this.us.getCurrentUser().uid).subscribe(value => this.encryptedUid = value);
        // }
        // this.us.getAuthState().subscribe(function(authState){
        //   if(authState != null) {
        //     this.us.getEncryptedUid(authState.uid).subscribe(value => this.encryptedUid = value);
        //   }
        // }.bind(this));
    }
    CasesComponent.prototype.ngOnInit = function () {
    };
    CasesComponent.prototype.ngAfterViewInit = function () {
        // impress().init();
    };
    CasesComponent.prototype.launchCase = function (programName, caseId, uId) {
        var extras = {
            queryParams: { p: programName, c: caseId, q: uId },
        };
        // console.log(extras);
        this.router.navigate(['/content'], extras);
    };
    return CasesComponent;
}());
CasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cases',
        template: __webpack_require__(667),
        styles: [__webpack_require__(601)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], CasesComponent);

var _a, _b, _c;
//# sourceMappingURL=cases.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = (function () {
    function ContentComponent(ar, sanitizer, location) {
        this.ar = ar;
        this.sanitizer = sanitizer;
        this.location = location;
        this.baseUrl = 'https://simulator-58888.firebaseapp.com/index.html';
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ar
            .queryParams
            .forEach(function (params) {
            var dangerousUrl = _this.baseUrl + "?p=" + params['p'] + "&c=" + params['c'] + "&q=" + params['q'];
            _this.caseUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
        });
        // Capture the fragment if available
        this.token = this.ar
            .fragment
            .map(function (fragment) { return fragment || 'None'; });
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(668),
        styles: [__webpack_require__(602)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], ContentComponent);

var _a, _b, _c;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
var FaqItemComponent = (function () {
    function FaqItemComponent() {
        this.expanded = false;
        this.id = '';
        this.id = guid();
    }
    FaqItemComponent.prototype.ngOnInit = function () {
    };
    FaqItemComponent.prototype.qClick = function () {
        this.expanded = !this.expanded;
    };
    return FaqItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FaqItemComponent.prototype, "q", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FaqItemComponent.prototype, "a", void 0);
FaqItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq-item',
        template: __webpack_require__(669),
        styles: [__webpack_require__(603)]
    }),
    __metadata("design:paramtypes", [])
], FaqItemComponent);

//# sourceMappingURL=faq-item.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(670),
        styles: [__webpack_require__(604)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TourService }  from 'ng2-tour';
var HeaderComponent = (function () {
    // constructor(private service: UserService, private tourService: TourService) {
    function HeaderComponent(us) {
        // console.log('constructor');
        this.us = us;
        // this.isSigned = this.service.isSigned();
        // if (service.getCurrentUser() != null) {
        //   this.userName = service.getCurrentUser().auth.displayName;
        //   this.photoURL = service.getCurrentUser().auth.photoURL;
        // }
        // this.auth = this.service.getAuthState();
        this.auth = this.us.getAuth();
        // this.auth.subscribe(function(auth){
        //   if(authState != null) {
        //     this.userName = authState.auth.displayName;
        //     this.photoURL = authState.auth.photoURL;
        //   }
        //   this.isSigned = (auth != null);
        //   // console.log(this.isSigned);
        // }.bind(this));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngDoCheck = function () {
    };
    HeaderComponent.prototype.signout = function () {
        this.us.signout();
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "tabIndex", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(671),
        styles: [__webpack_require__(605)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, ps, us) {
        this.router = router;
        this.ps = ps;
        this.us = us;
        this.percent = 0;
        this.uid = null;
        this.programName = "Cold and Flu";
        this.nextCase = null;
        us.getAuth().subscribe(function (auth) {
            var _this = this;
            if (auth != null) {
                this.uid = auth.uid;
                us.getEncryptedUid(this.uid).subscribe(function (value) { return _this.encryptedUid = value; });
                this.getProfile();
            }
        }.bind(this));
        // if(this.us.isSigned()){
        //   this.uid = this.us.getCurrentUser().uid;
        //   this.us.getEncryptedUid(this.uid).subscribe(value => this.encryptedUid = value);
        //   this.getProfile();
        // }
        // this.us.getAuthState().subscribe(function(authState){
        //   if(authState != null) {
        //     this.uid = authState.uid;
        //     this.us.getEncryptedUid(this.uid).subscribe(value => this.encryptedUid = value);
        //     this.getProfile();
        //   }
        // }.bind(this));
        // // this.percent = ps.getProgramProgressPercent(this.uid, "Cold and Flu");
    }
    HomeComponent.prototype.getProfile = function () {
        if (this.uid != null) {
            this.ps.getProgramProgressPercent(this.uid, this.programName).subscribe(function (value) {
                this.percent = value;
            }.bind(this));
            this.ps.getNextCase(this.uid, this.programName).subscribe(function (value) {
                this.nextCase = value;
            }.bind(this));
        }
    };
    HomeComponent.prototype.launchCase = function (programName, caseId, uId) {
        var extras = {
            queryParams: { p: programName, c: caseId, q: uId },
        };
        // console.log(extras);
        this.router.navigate(['/content'], extras);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(672),
        styles: [__webpack_require__(606)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(673),
        styles: [__webpack_require__(607)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(service) {
        this.service = service;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.service.emailLogin(this.model)
            .then(function () { this.error = null; }.bind(this))
            .catch(function (err) { this.error = err; }.bind(this));
    };
    LoginComponent.prototype.gplusLogin = function () {
        this.service.gplusLogin()
            .then(function () { this.error = null; }.bind(this))
            .catch(function (err) { this.error = err; }.bind(this));
    };
    LoginComponent.prototype.facebookLogin = function () {
        this.service.facebookLogin()
            .then(function () { this.error = null; }.bind(this))
            .catch(function (err) { this.error = err; }.bind(this));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(674),
        styles: [__webpack_require__(608)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MdDialog, MdDialogRef } from '@angular/material';
// import { BadgeComponent } from '../badge/badge.component';
var ProfileComponent = (function () {
    // dialogRef: MdDialogRef<BadgeComponent>;
    function ProfileComponent(ps, us /*, public dialog: MdDialog*/) {
        this.ps = ps;
        this.us = us; /*, public dialog: MdDialog*/
        this.uid = null;
        this.updateBadges = null;
        var _this = this;
        us.getAuth().subscribe(function (auth) {
            if (auth != null) {
                _this.uid = auth.uid;
                _this.userName = auth.auth.displayName;
                _this.photoURL = auth.auth.photoURL;
                _this.getProfile();
            }
        });
        // if(this.us.isSigned()){
        //   this.uid = this.us.getCurrentUser().uid;
        //   this.userName = this.us.getCurrentUser().auth.displayName;
        //   this.photoURL = this.us.getCurrentUser().auth.photoURL;
        //   this.getProfile();
        // }
        // this.us.getAuthState().subscribe(function(authState){
        //   if(authState != null) {
        //     this.uid = authState.uid;
        //     this.userName = authState.auth.displayName;
        //     this.photoURL = authState.auth.photoURL;
        //     this.getProfile();
        //   }
        // }.bind(this));
        ps.getAllBadges().subscribe(function (list) {
            _this.allBadges = list.map(function (value, index) { value.enabled = false; return value; });
            _this.getProfile();
            // console.log(this.allBadges);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    // openDialog() {
    //   return this.dialog.open(BadgeComponent);
    // }
    ProfileComponent.prototype.enableBadge = function (list) {
        list.forEach(function (badge) {
            this.allBadges.forEach(function (obj) {
                if (obj.name == badge.name) {
                    obj.enabled = true;
                }
            });
        }.bind(this));
    };
    ProfileComponent.prototype.getProfile = function () {
        // console.log(this.allBadges);
        if (this.uid != null && this.allBadges != undefined) {
            this.percent = this.ps.getProgramProgressPercent(this.uid, 'Cold and Flu');
            this.badges = this.ps.getBadgeList(this.uid);
            this.badges.subscribe(function (list) {
                this.enableBadge(list);
            }.bind(this));
            // this.ps.getUpdateBadgeList(this.uid).subscribe(function(obj){
            //   obj.subscribe(function(obj1){
            //     if (this.updateBadges == null) {
            //       this.updateBadges = obj1;
            //       this.updateBadges.forEach(function(badge){
            //         this.dialogRef = this.openDialog();
            //         // let dialBadge;
            //         // this.allBadges.forEach((obj) => { if(obj.name == badge.name) dialBadge = obj; });
            //         // this.dialogRef.componentInstance.badge = dialBadge;
            //         this.dialogRef.componentInstance.badge = badge;
            //         this.dialogRef.afterClosed().subscribe(result => {
            //           this.ps.awardBadgeToUser(this.uid, { name: badge.name });
            //         });
            //       }.bind(this));
            //     }
            //   }.bind(this));
            // }.bind(this));
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(675),
        styles: [__webpack_require__(609)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] /*, public dialog: MdDialog*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] /*, public dialog: MdDialog*/) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
// function contains(a, obj) {
//   // console.log(obj);
//     for (var i = 0; i < a.length; i++) {
//       // console.log(a[i]);
//         if (a[i].name === obj.name) {
//             return true;
//         }
//     }
//     return false;
// }
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramsComponent = (function () {
    function ProgramsComponent() {
    }
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    return ProgramsComponent;
}());
ProgramsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-programs',
        template: __webpack_require__(676),
        styles: [__webpack_require__(610)],
    }),
    __metadata("design:paramtypes", [])
], ProgramsComponent);

//# sourceMappingURL=programs.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(service) {
        this.service = service;
        this.model = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        this.service.emailSignup(this.model)
            .then(function () { this.error = null; }.bind(this))
            .catch(function (err) {
            this.error = err;
        }.bind(this));
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(677),
        styles: [__webpack_require__(611)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportService = (function () {
    // items: FirebaseListObservable<any[]>;
    function SupportService(af) {
        this.af = af;
    }
    SupportService.prototype.getFAQItems = function () {
        return this.af.database.list('/faq');
    };
    return SupportService;
}());
SupportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], SupportService);

var _a;
//# sourceMappingURL=support.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportComponent = (function () {
    function SupportComponent(service) {
        this.service = service;
        this.items = service.getFAQItems();
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent.prototype.canActivate = function () {
        return false;
    };
    return SupportComponent;
}());
SupportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-support',
        template: __webpack_require__(678),
        styles: [__webpack_require__(612)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */]) === "function" && _a || Object])
], SupportComponent);

var _a;
//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDZ_fkS8XTkcH4mFAB5bGwnyGRxY_qPxMo",
    authDomain: "viven-health-7f33c.firebaseapp.com",
    databaseURL: "https://viven-health-7f33c.firebaseio.com",
    storageBucket: "viven-health-7f33c.appspot.com",
    messagingSenderId: "129257487284"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\n    background-color: #c9cdd0;\n    min-height: calc(100vh - 100px);\n}\n\n.container-fluid .row {\n    padding-left: 12%;\n    padding-right: 12%;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.case-card {\n    /*width: 300px;\n    height: 250px;*/\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.sections .title {\n    padding: 10px 25px;\n    font-size: 22px;\n    color: #283345;\n    text-align: center\n    /*word-wrap: break-word;*/\n}\n\n.glyphicon {\n    font-size: 50px;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.sections {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding-left: 10%;\n    padding-right: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".case-action {\n    position: absolute;\n    right: 7%;\n    top: 7%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\n    border-bottom-color: #adb1b4;\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    padding-bottom: 10px;\n    margin-bottom: 20px;\n}\n\n.question {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 28px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 10px 10px 0px 10px;\n}\n\n.answer {\n    font-size: 16px;\n    line-height: 28px;\n    padding: 0px 10px 0px 10px;\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".app-footer {\n    background-color: #283345;\n    padding-left: 3%;\n    padding-right: 3%;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    max-height: 220px;\n}\n\n.app-footer>h2 {\n    font-size: 18px;\n    text-align: right;\n    margin-top: 120px;\n    color: white;\n}\n\n@media only screen and (max-width: 992px) {\n    .app-footer {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 85px;\n    }\n    .app-footer>h2 {\n        font-size: 16px;\n        margin: 0px;\n        padding: 0px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".app-header {\n    background-color: #283345;\n    padding-left: 6%;\n    padding-right: 6%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.app-header .logo {\n    height: 160px;\n}\n\nmd-toolbar {\n    background: #283345;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\nmd-toolbar .logo {\n    height: 50px;\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.app-header .left {\n    float: left;\n}\n\n.app-header .right {\n    float: right;\n    padding-top: 45px;\n}\n\n.modal {\n    text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n    .modal:before {\n        display: inline-block;\n        vertical-align: middle;\n        content: \" \";\n        height: 100%;\n    }\n}\n\n.modal-dialog {\n    display: inline-block;\n    text-align: left;\n    vertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\n    background-color: #c9cdd0;\n    min-height: calc(100vh - 100px);\n}\n\n.container-fluid .row {\n    padding-left: 12%;\n    padding-right: 12%;\n    padding-top: 12vh;\n    padding-bottom: 12vh;\n}\n\n.section {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.section .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #283345;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n}\n\n.section .title span {\n    font-size: 24px;\n    color: #ddd;\n}\n\n.panel {\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 6px 10px 12px 2px #8a8a8a;\n    padding: 0;\n}\n\n.welcome {\n    font-size: 28px;\n    line-height: 1.3em;\n}\n\n@media only screen and (max-width: 768px) {\n    .welcome {\n        font-size: 16px;\n    }\n    .section .title span {\n        font-size: 18px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".back {\n    position: relative;\n    width: 100%;\n    padding-top: 40%;\n    min-height: calc(100vh - 100px);\n    background: url(" + __webpack_require__(168) + ") center/cover no-repeat;\n}\n\n.back div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding-left: 10%;\n    padding-top: 8%;\n}\n\n.back .ourword span {\n    /*line-height: 85px;*/\n    color: rgb(40, 51, 69);\n}\n\n.back .employee {\n    font-size: 40px;\n}\n\n.back .tobe {\n    font-size: 50px;\n}\n\n.back .healthier {\n    font-size: 60px;\n    font-weight: bold;\n    color: #fd582a !important;\n}\n\n@media only screen and (max-width: 768px) {\n    .back {\n        height: calc(100vh - 85px);\n    }\n    .back .employee {\n        font-size: 20px;\n    }\n    .back .tobe {\n        font-size: 25px;\n    }\n    .back .healthier {\n        font-size: 30px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);", ""]);
exports.i(__webpack_require__(589), "");

// module
exports.push([module.i, ".body {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: auto;\n    height: auto;\n    background-image: url(" + __webpack_require__(168) + ");\n    background-size: cover;\n    background-position: center;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.container-fluid {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.grad {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: auto;\n    height: auto;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n    /* Chrome,Safari4+ */\n    opacity: 0.7;\n}\n\n.header {\n    position: absolute;\n    top: calc(50% - 35px);\n    left: calc(50% - 255px);\n    z-index: 2;\n}\n\n.header div {\n    float: left;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 35px;\n    font-weight: 200;\n}\n\n.header div span {\n    color: #5379fa !important;\n}\n\n.login {\n    max-width: 350px;\n    padding: 10px;\n}\n\n.login input[type=text] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=email] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=password] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=button] {\n    width: calc(100% + 10px);\n    height: 35px;\n    background: #fff;\n    border: 1px solid #fff;\n    cursor: pointer;\n    border-radius: 2px;\n    color: #a18d6c;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 6px;\n    margin-top: 20px;\n}\n\n.login input[type=button]:hover {\n    opacity: 0.8;\n}\n\n.login input[type=button]:active {\n    opacity: 0.6;\n}\n\n.login input[type=text]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=email]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=password]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=button]:focus {\n    outline: none;\n}\n\n::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n::-moz-input-placeholder {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.login button {\n    width: calc(100% + 10px);\n    margin-left: 0px;\n    margin-right: 0px;\n    border-radius: 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\n    background-color: #c9cdd0;\n    min-height: calc(100vh - 100px);\n}\n\n.container-fluid .row {\n    padding-left: 12%;\n    padding-right: 12%;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    min-height: 640px;\n}\n\n.header {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 40px;\n    background: #283345;\n    border-color: #283345;\n    color: white;\n    font-size: 18px;\n    padding-left: 3%;\n    padding-top: 7px;\n    z-index: 1;\n}\n\n.header::after {\n    position: absolute;\n    content: '';\n    top: 100%;\n    margin-left: -50px;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid #283345;\n}\n\n.contact-form {\n    border-width: 1px;\n    border-style: ridge;\n    border-color: gray;\n    background: #e6ebee;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    padding: 5% 10%;\n}\n\n.contact-form label {\n    font-size: 16px;\n    color: #adb0b2;\n}\n\n.contact-form button {\n    background: #fc582a;\n    color: #fcc5b6;\n    border-radius: 0px;\n}\n\n.h2 {\n    color: #283345;\n}\n\n.userInfo-tile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #283345;\n    width: 100%;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}\n\n.userInfo-tile .value {\n    color: #c9cdd0;\n    font-size: 36px;\n}\n\n.userInfo-tile .key {\n    color: #c9cdd0;\n    font-size: 10px;\n}\n\n.userInfo-general {\n    border-right: 3px solid #c4c8cb;\n}\n\n.userInfo-general>div {\n    margin-bottom: 20px;\n}\n\n.profile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.profile .info-panel {\n    height: 100%;\n}\n\n@media only screen and (max-width: 992px) {\n    .profile {\n        display: block;\n    }\n    .userInfo-general {\n        border-right: 0px solid #c4c8cb;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);", ""]);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);", ""]);

// module
exports.push([module.i, ".body {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: auto;\n    height: auto;\n    background-image: url(" + __webpack_require__(168) + ");\n    background-size: cover;\n    background-position: center;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.container-fluid {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.grad {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: auto;\n    height: auto;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n    /* Chrome,Safari4+ */\n    opacity: 0.7;\n}\n\n.header {\n    position: absolute;\n    top: calc(50% - 35px);\n    left: calc(50% - 255px);\n    z-index: 2;\n}\n\n.header div {\n    float: left;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 35px;\n    font-weight: 200;\n}\n\n.header div span {\n    color: #5379fa !important;\n}\n\n.login {\n    max-width: 350px;\n    padding: 10px;\n}\n\n.login input[type=text] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=email] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=password] {\n    width: 100%;\n    height: 30px;\n    background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 2px;\n    color: #fff;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.login input[type=button] {\n    width: calc(100% + 10px);\n    height: 35px;\n    background: #fff;\n    border: 1px solid #fff;\n    cursor: pointer;\n    border-radius: 2px;\n    color: #a18d6c;\n    font-family: 'Exo', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 6px;\n    margin-top: 20px;\n}\n\n.login input[type=button]:hover {\n    opacity: 0.8;\n}\n\n.login input[type=button]:active {\n    opacity: 0.6;\n}\n\n.login input[type=text]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=email]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=password]:focus {\n    outline: none;\n    border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login input[type=button]:focus {\n    outline: none;\n}\n\n::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n::-moz-input-placeholder {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.login button {\n    width: calc(100% + 10px);\n    margin-left: 0px;\n    margin-right: 0px;\n    border-radius: 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\n    background-color: #c9cdd0;\n    min-height: calc(100vh - 100px);\n}\n\n.container-fluid .row {\n    padding-left: 12%;\n    padding-right: 12%;\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n\n.contact-form {\n    border-width: 1px;\n    border-style: ridge;\n    border-color: gray;\n    background: #e6ebee;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    padding: 5% 10%;\n}\n\n.contact-form label {\n    font-size: 16px;\n    color: #adb0b2;\n}\n\n.contact-form button {\n    background: #fc582a;\n    color: #fcc5b6;\n    border-radius: 0px;\n}\n\ntextarea {\n    resize: none;\n    border: 1px solid #ccc;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 254,
	"./af.js": 254,
	"./ar": 261,
	"./ar-dz": 255,
	"./ar-dz.js": 255,
	"./ar-kw": 256,
	"./ar-kw.js": 256,
	"./ar-ly": 257,
	"./ar-ly.js": 257,
	"./ar-ma": 258,
	"./ar-ma.js": 258,
	"./ar-sa": 259,
	"./ar-sa.js": 259,
	"./ar-tn": 260,
	"./ar-tn.js": 260,
	"./ar.js": 261,
	"./az": 262,
	"./az.js": 262,
	"./be": 263,
	"./be.js": 263,
	"./bg": 264,
	"./bg.js": 264,
	"./bn": 265,
	"./bn.js": 265,
	"./bo": 266,
	"./bo.js": 266,
	"./br": 267,
	"./br.js": 267,
	"./bs": 268,
	"./bs.js": 268,
	"./ca": 269,
	"./ca.js": 269,
	"./cs": 270,
	"./cs.js": 270,
	"./cv": 271,
	"./cv.js": 271,
	"./cy": 272,
	"./cy.js": 272,
	"./da": 273,
	"./da.js": 273,
	"./de": 276,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de-ch": 275,
	"./de-ch.js": 275,
	"./de.js": 276,
	"./dv": 277,
	"./dv.js": 277,
	"./el": 278,
	"./el.js": 278,
	"./en-au": 279,
	"./en-au.js": 279,
	"./en-ca": 280,
	"./en-ca.js": 280,
	"./en-gb": 281,
	"./en-gb.js": 281,
	"./en-ie": 282,
	"./en-ie.js": 282,
	"./en-nz": 283,
	"./en-nz.js": 283,
	"./eo": 284,
	"./eo.js": 284,
	"./es": 286,
	"./es-do": 285,
	"./es-do.js": 285,
	"./es.js": 286,
	"./et": 287,
	"./et.js": 287,
	"./eu": 288,
	"./eu.js": 288,
	"./fa": 289,
	"./fa.js": 289,
	"./fi": 290,
	"./fi.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 294,
	"./fr-ca": 292,
	"./fr-ca.js": 292,
	"./fr-ch": 293,
	"./fr-ch.js": 293,
	"./fr.js": 294,
	"./fy": 295,
	"./fy.js": 295,
	"./gd": 296,
	"./gd.js": 296,
	"./gl": 297,
	"./gl.js": 297,
	"./gom-latn": 298,
	"./gom-latn.js": 298,
	"./he": 299,
	"./he.js": 299,
	"./hi": 300,
	"./hi.js": 300,
	"./hr": 301,
	"./hr.js": 301,
	"./hu": 302,
	"./hu.js": 302,
	"./hy-am": 303,
	"./hy-am.js": 303,
	"./id": 304,
	"./id.js": 304,
	"./is": 305,
	"./is.js": 305,
	"./it": 306,
	"./it.js": 306,
	"./ja": 307,
	"./ja.js": 307,
	"./jv": 308,
	"./jv.js": 308,
	"./ka": 309,
	"./ka.js": 309,
	"./kk": 310,
	"./kk.js": 310,
	"./km": 311,
	"./km.js": 311,
	"./kn": 312,
	"./kn.js": 312,
	"./ko": 313,
	"./ko.js": 313,
	"./ky": 314,
	"./ky.js": 314,
	"./lb": 315,
	"./lb.js": 315,
	"./lo": 316,
	"./lo.js": 316,
	"./lt": 317,
	"./lt.js": 317,
	"./lv": 318,
	"./lv.js": 318,
	"./me": 319,
	"./me.js": 319,
	"./mi": 320,
	"./mi.js": 320,
	"./mk": 321,
	"./mk.js": 321,
	"./ml": 322,
	"./ml.js": 322,
	"./mr": 323,
	"./mr.js": 323,
	"./ms": 325,
	"./ms-my": 324,
	"./ms-my.js": 324,
	"./ms.js": 325,
	"./my": 326,
	"./my.js": 326,
	"./nb": 327,
	"./nb.js": 327,
	"./ne": 328,
	"./ne.js": 328,
	"./nl": 330,
	"./nl-be": 329,
	"./nl-be.js": 329,
	"./nl.js": 330,
	"./nn": 331,
	"./nn.js": 331,
	"./pa-in": 332,
	"./pa-in.js": 332,
	"./pl": 333,
	"./pl.js": 333,
	"./pt": 335,
	"./pt-br": 334,
	"./pt-br.js": 334,
	"./pt.js": 335,
	"./ro": 336,
	"./ro.js": 336,
	"./ru": 337,
	"./ru.js": 337,
	"./sd": 338,
	"./sd.js": 338,
	"./se": 339,
	"./se.js": 339,
	"./si": 340,
	"./si.js": 340,
	"./sk": 341,
	"./sk.js": 341,
	"./sl": 342,
	"./sl.js": 342,
	"./sq": 343,
	"./sq.js": 343,
	"./sr": 345,
	"./sr-cyrl": 344,
	"./sr-cyrl.js": 344,
	"./sr.js": 345,
	"./ss": 346,
	"./ss.js": 346,
	"./sv": 347,
	"./sv.js": 347,
	"./sw": 348,
	"./sw.js": 348,
	"./ta": 349,
	"./ta.js": 349,
	"./te": 350,
	"./te.js": 350,
	"./tet": 351,
	"./tet.js": 351,
	"./th": 352,
	"./th.js": 352,
	"./tl-ph": 353,
	"./tl-ph.js": 353,
	"./tlh": 354,
	"./tlh.js": 354,
	"./tr": 355,
	"./tr.js": 355,
	"./tzl": 356,
	"./tzl.js": 356,
	"./tzm": 358,
	"./tzm-latn": 357,
	"./tzm-latn.js": 357,
	"./tzm.js": 358,
	"./uk": 359,
	"./uk.js": 359,
	"./ur": 360,
	"./ur.js": 360,
	"./uz": 362,
	"./uz-latn": 361,
	"./uz-latn.js": 361,
	"./uz.js": 362,
	"./vi": 363,
	"./vi.js": 363,
	"./x-pseudo": 364,
	"./x-pseudo.js": 364,
	"./yo": 365,
	"./yo.js": 365,
	"./zh-cn": 366,
	"./zh-cn.js": 366,
	"./zh-hk": 367,
	"./zh-hk.js": 367,
	"./zh-tw": 368,
	"./zh-tw.js": 368
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 631;


/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\n<tour-step-template></tour-step-template>"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 md-dialog-title> Congratulation! </h1>\n    <md-dialog-content style=\"display:flex; justify-content: center; align-items: center\">\n        <div style=\"text-align: center; width:20vw\">\n            <br>\n            <img src=\"assets/images/badges/{{badge.image}}\" style=\"width:150px\">\n            <br>\n            <br>\n            <br>\n            <!--<br>\n            <br>\n            <h4> You have been awarded\n                <{{badge.name}}> badge. </h4>-->\n        </div>\n    </md-dialog-content>\n    <md-dialog-actions style=\"display:flex; justify-content: center; align-items: center; margin:0px\">\n        <!--<button md-raised-button md-dialog-close style=\"width:50%\">Close</button>-->\n        <button md-button md-dialog-close style=\"width:50%; font-size:18px\">Close</button>\n    </md-dialog-actions>\n</div>"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"1\"> </app-header>\n\n<!--<div class=\"container-fluid\">\n    <div class=\"row\">\n\n        <div *ngFor=\"let section of sections; let i=index\" (swipeleft)=\"swipe(i,$event.\">\n            {{section}}\n            <div *ngFor=\"let case of cases\" class=\"col-xs-4\" [style.display]=\"case.obj.case.category==='c'+(i+1) ? 'block':'none'\">\n                <md-card class=\"case-card\">\n                    <img md-card-image src=\"assets/images/{{case.obj.case.thumb}}\">\n                    <md-card-content>\n                        <p>\n                            {{case.obj.case.title}}\n                        </p>\n                    </md-card-content>\n\n                </md-card>\n            </div>\n            <br>\n        </div>\n\n    </div>\n</div>-->\n\n<!--<button routerLink=\"/home\"> home </button>-->\n\n<!--<div id=\"impress\">-->\n<!--<div id=\"bored\" class=\"step slide\" data-x=\"-1000\" data-y=\"-1500\">-->\n<!--<div class=\"step slide\" data-x=\"-1000\" data-y=\"-1500\" data-z=\"-1000\" style=\"width:80vw; height:80vh\">\n        <q>Aren’t you just <b>bored</b> with all those slides-based presentations?</q>\n    </div>\n    <div class=\"step slide\" data-x=\"0\" data-y=\"-1500\" data-z=\"-2000\" style=\"width:80vw; height:80vh\">\n        <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>\n    </div>\n\n    <div class=\"step slide\" data-x=\"1000\" data-y=\"-1500\" data-z=\"-3000\" style=\"width:80vw; height:80vh\">\n        <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>\n    </div>-->\n<!--</div>-->\n\n<!--<div class=\"container-fluid\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">-->\n<div class=\"container-fluid\">\n    <div class=\"row animated fadeInUp\" *ngFor=\"let section of (program | async)?.sections.categories; let i=index\">\n\n        <!--<div class=\"col-xs-12 sections\" style=\"padding-bottom: 40px; padding-top: 40px\">-->\n        <div class=\"col-xs-12 sections\" style=\"background-color:#283345\">\n            <!--<span class=\"glyphicon glyphicon-chevron-left\"></span>-->\n            <span class=\"spacer\"></span>\n            <span class=\"title\" style=\"color: #ddd\"> {{ section }}</span>\n            <span class=\"spacer\"></span>\n            <!--<a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>-->\n        </div>\n\n        <div class=\"col-xs-12\" style=\"background:rgba(255,255,255,0.5); padding:10px 25px;\">\n            <ng-container *ngFor=\"let case of (program | async)?.cases; let j=index;\">\n                <div *ngIf=\"case.obj.case.category==='c' +(i+1)\" class=\"case-card col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n\n                    <ng-container *ngIf=\"i==0 && j==7\" tourAnchor=\"first_case\"></ng-container>\n                    <div style=\"width:100%; padding-top:90%\">\n                        <div style=\"position:absolute; width:100%; height:100%; left:0; top:0\">\n                            <md-card (click)=\"launchCase(programName, case.id, encryptedUid)\" style=\"margin-left:3%; margin-right:3%; height:100%\">\n                                <img md-card-image src=\"assets/images/{{case.obj.case.thumb}}\">\n                                <md-card-content>\n                                    <p>\n                                        {{case.obj.case.title}}\n                                    </p>\n                                </md-card-content>\n                            </md-card>\n                        </div>\n                    </div>\n\n                </div>\n            </ng-container>\n        </div>\n\n    </div>\n</div>\n\n<app-footer> </app-footer>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<iframe class=\"fullscreen e2e-iframe-trusted-src\" [src]=\"caseUrl\">\n</iframe>\n\n<div class=\"case-action\">\n    <a md-fab (click)=\"location.back()\">\n        <md-icon>exit_to_app</md-icon>\n    </a>\n</div>"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 question\" data-toggle=\"collapse\" attr.data-target=\"#{{id}}\" (click)=\"qClick()\">\n            {{q}}\n            <div class=\"spacer\"> </div>\n            <md-icon> {{expanded ? 'expand_less' : 'expand_more'}} </md-icon>\n        </div>\n        <div class=\"col-xs-12 answer collapse\" [attr.id]=\"id\">\n            <br> {{a}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var badges = [
    {
        name: "The Beginner",
        image: "01.png",
    },
    {
        name: "The Cleaner",
        image: "02.png",
    },
    {
        name: "Sanitizer Adept",
        image: "03.png",
    },
    {
        name: "The Health Seeker",
        image: "04.png",
    },
    {
        name: "Flu Fighter",
        image: "05.png",
    },
    {
        name: "Master Cleaner",
        image: "06.png",
    },
    {
        name: "Hand Hygiene Pro",
        image: "07.png",
    },
    {
        name: "Sanitizing Expert",
        image: "08.png",
    },
    {
        name: "The Alchemist",
        image: "09.png",
    },
    {
        name: "Flu Fighter Legend",
        image: "10.png",
    },
    {
        name: "Healthy and Whole",
        image: "11.png",
    },
    {
        name: "Hand Hygiene Expert",
        image: "12.png",
    },
    {
        name: "Sanitizer Legend",
        image: "13.png",
    },
    {
        name: "Flu Fighter Hero",
        image: "14.png",
    },
    {
        name: "Germ Free Specialist",
        image: "15.png",
    },
];
var ProfileService = (function () {
    function ProfileService(af) {
        this.af = af;
    }
    ProfileService.prototype.getAllBadges = function () {
        return this.af.database.list('badge');
    };
    ProfileService.prototype.getBadgeList = function (uid) {
        return this.af.database.list("users/" + uid + "/progress/badges");
    };
    ProfileService.prototype.getUpdateBadgeList = function (uid) {
        return this.getBadgeList(uid).map(function (badgeList) {
            return this.af.database.object("users/" + uid + "/progress/actions").map(function (actions) {
                var updateList = [];
                if (!contains(badgeList, badges[0]))
                    updateList.push(badges[0]);
                if (actions['Sanitizing Wipes'] != undefined && actions['Sanitizing Wipes'] > 0)
                    if (!contains(badgeList, badges[1]))
                        updateList.push(badges[1]);
                if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] > 0)
                    if (!contains(badgeList, badges[2]))
                        updateList.push(badges[2]);
                if (actions['Phone'] != undefined)
                    if (!contains(badgeList, badges[3]))
                        updateList.push(badges[3]);
                if (actions['Sanitizing Wipes'] != undefined && actions['Sanitizing Wipes'] >= 10)
                    if (!contains(badgeList, badges[5]))
                        updateList.push(badges[5]);
                if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 5)
                    if (!contains(badgeList, badges[6]))
                        updateList.push(badges[6]);
                if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 10)
                    if (!contains(badgeList, badges[7]))
                        updateList.push(badges[7]);
                if (actions['Medicine'] != undefined && actions['Medicine'] >= 10)
                    if (!contains(badgeList, badges[8]))
                        updateList.push(badges[8]);
                if (actions['Wash Hands'] != undefined && actions['Wash Hands'] >= 20)
                    if (!contains(badgeList, badges[10]))
                        updateList.push(badges[10]);
                if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 20)
                    if (actions['Wash Hands'] != undefined && actions['Wash Hands'] >= 20)
                        if (!contains(badgeList, badges[11]))
                            updateList.push(badges[11]);
                if (actions['Hand Sanitizer'] != undefined && actions['Hand Sanitizer'] >= 50)
                    if (!contains(badgeList, badges[12]))
                        updateList.push(badges[12]);
                return updateList;
            });
        }.bind(this));
    };
    ProfileService.prototype.getProgramProgressPercent = function (uid, programName) {
        // Timer Way
        // let casesCompleted  = 0;
        // let casesOfProgram = -1;
        // this.af.database.list(`users/${uid}/progress/programs/${programName}/casesCompleted`).subscribe(function(obj){
        //   casesCompleted = obj.length - 1;
        // });
        // this.af.database.list(`sim/${programName}`).subscribe(function(obj){
        //   casesOfProgram = obj.length - 1;
        // });
        // return Observable.create(subscriber => {
        //   setInterval(() => {
        //     let percent = casesCompleted / casesOfProgram * 100;
        //     if (percent < 0) percent = 0;
        //     if (percent > 100) percent = 100;
        //       subscriber.next(percent);
        //     }, 1000);
        // });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this.af.database.list("users/" + uid + "/progress/programs/" + programName + "/casesCompleted"), this.af.database.list("sim/" + programName), function (casesCompleted, casesOfProgram) {
            if (casesOfProgram.length != 1)
                return Math.round(100 * (casesCompleted.length - 1) / (casesOfProgram.length - 1));
            else
                return 0;
        });
    };
    ProfileService.prototype.getNextCase = function (uid, programName) {
        // let nextCase = null; // This is possible, but it is stored into combineLatest function context so it could be not null, previous value. so it returns incorrect result.
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this.af.database.list("users/" + uid + "/progress/programs/" + programName + "/casesCompleted"), this.af.database.list("sim/" + programName), function (casesCompleted, casesOfProgram) {
            var nextCase = null;
            // console.log(casesCompleted);
            // console.log(casesOfProgram);
            for (var i in casesOfProgram) {
                var flag = false;
                // console.log(flag);
                if (casesOfProgram[i].$key == "program")
                    continue;
                for (var j in casesCompleted) {
                    // console.log(`${casesOfProgram[i].$key} ${casesCompleted[j].$value}`)
                    if (casesOfProgram[i].$key == casesCompleted[j].$value) {
                        flag = true;
                        break;
                    }
                    ;
                }
                if (flag)
                    continue;
                else {
                    nextCase = casesOfProgram[i];
                    break;
                }
            }
            // console.log(nextCase);
            return (nextCase != null) ? nextCase : casesOfProgram[0];
        });
    };
    ProfileService.prototype.awardBadgeToUser = function (uid, badge) {
        this.af.database.list("users/" + uid + "/progress/badges").push(badge);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], ProfileService);

function contains(a, obj) {
    // console.log(obj);
    for (var i = 0; i < a.length; i++) {
        // console.log(a[i]);
        if (a[i].name === obj.name) {
            return true;
        }
    }
    return false;
}
var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 app-footer\">\n            <h2> © 2017 All rights reserved. Viven Health, Inc. </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<ng-container appBadgeAward></ng-container>\n\n<!--<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"isSigned\">-->\n<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"(auth | async) != null\">\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>menu</md-icon>\n    </button>\n\n    <md-menu #menu=\"mdMenu\">\n        <button md-menu-item routerLink=\"/home\">\n            <md-icon>home</md-icon>\n            <span>HOME</span>\n        </button>\n        <button md-menu-item routerLink=\"/cases\">\n            <md-icon>slideshow</md-icon>\n            <span>PROGRAMS</span>\n        </button>\n        <button md-menu-item routerLink=\"/profile\">\n            <md-icon>person</md-icon>\n            <span>PROFILE</span>\n        </button>\n        <button md-menu-item routerLink=\"/support\">\n            <md-icon>help_outline</md-icon>\n            <span>SUPPORT</span>\n        </button>\n        <hr>\n        <button md-menu-item (click)=\"signout()\">\n            <md-icon>lock_outline</md-icon>\n            <span>LOGOUT</span>\n        </button>\n    </md-menu>\n    &nbsp; &nbsp;\n    <img class=\"logo\" src=\"assets/images/logo.png\" />\n</md-toolbar>\n\n<!--<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"isSigned\">-->\n<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"(auth | async) != null\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 app-header\">\n            <div class=\"left\">\n                <div style=\"display:inline-block\">\n                    <img class=\"logo\" src=\"assets/images/logo.png\" />\n                </div>\n\n\n                <div style=\"display:inline-block; padding-left: 100px; \">\n                    <div class=\"ui secondary pointing menu\">\n                        <div tourAnchor=\"homepage\">\n                            <a class=\"item {{tabIndex == 0 && 'active'}}\" routerLink=\"/home\">\n                                HOME\n                            </a>\n                        </div>\n                        <div tourAnchor=\"programs\">\n                            <a class=\"item {{tabIndex == 1 && 'active'}}\" routerLink=\"/cases\">\n                            PROGRAMS\n                        </a>\n                        </div>\n                        <div tourAnchor=\"profile\">\n                            <a class=\"item {{tabIndex == 2 && 'active'}}\" routerLink=\"/profile\">\n                            YOUR PROFILE\n                        </a>\n                        </div>\n                        <a class=\"item {{tabIndex == 3 && 'active'}}\" routerLink=\"/support\">\n                            SUPPORT\n                        </a>\n                    </div>\n                </div>\n\n\n            </div>\n\n            <!--{{(auth | async) == null}}-->\n\n            <div class=\"right\">\n                <div style=\"display:flex; align-items: center; justify-content: center\">\n                    <!--<div style=\"color:rgb(212,214,215); margin-right: 16px\">{{(userName)}}</div>-->\n                    <div style=\"color:rgb(212,214,215); margin-right: 16px\">{{ (auth | async)?.auth.displayName }}</div>\n                    <div md-icon-button [mdMenuTriggerFor]=\"account\" [ngStyle]=\"{'width': '70px', 'height': '70px', 'background': 'url(' + (auth | async)?.auth.photoURL + ') center/cover no-repeat', 'border':'4px solid darkgray', 'border-radius': '5px'}\">\n                    </div>\n\n                    <div tourAnchor=\"login\">\n                        <md-menu #account=\"mdMenu\" y-axis=\"below\" x-axis=\"before\">\n                            <button md-menu-item (click)=\"signout()\">\n                            <md-icon>lock_outline</md-icon>\n                            <span>LOGOUT</span>\n                        </button>\n                        </md-menu>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<!--<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"!isSigned\">-->\n<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"(auth | async) == null\">\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>menu</md-icon>\n    </button>\n\n    <md-menu #menu=\"mdMenu\">\n        <button md-menu-item routerLink=\"/login\">\n            <md-icon>lock_open</md-icon>\n            <span>LOGIN</span>\n        </button>\n    </md-menu>\n    &nbsp; &nbsp;\n    <img class=\"logo\" src=\"assets/images/logo.png\" />\n</md-toolbar>\n\n<!--<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"!isSigned\">-->\n<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"(auth | async) == null\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 app-header\">\n            <div class=\"left\">\n                <div style=\"display:inline-block\">\n                    <img class=\"logo\" src=\"assets/images/logo.png\" />\n                </div>\n            </div>\n            <div class=\"right\" style=\"padding-top: 60px\">\n                <a class=\"ui orange button\" style=\"font-size:16px; height:40px\" routerLink=\"/login\">LOGIN</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"0\"> </app-header>\n\n<div class=\"container-fluid\">\n    <!--tourAnchor-->\n    <div tourAnchor=\"welcome\">\n        <div class=\"row\">\n\n            <!--<div tourAnchor=\"welcome\">\n            <div class=\"col-xs-12\" id=\"welcome\">\n                <div style=\"margin: 1em 0em; padding: 2.0em; border: 1em solid #fd582a\">\n                    <span class=\"welcome\"> Helping Employees become healthier is <span style=\"color: #fd582a\"> the single most powerful investment </span> a company can make </span>\n                </div>\n            </div>\n        </div>-->\n\n            <div class=\"col-xs-12 col-sm-6 animated fadeInLeft section\">\n                <!--<div style=\"width:70%; margin-left:15%; padding:0px\" class=\"row panel\">-->\n                <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 panel\">\n                    <div class=\"col-xs-12 title\">\n                        <span> PROGRESS </span>\n                    </div>\n\n                    <div tourAnchor=\"progress\">\n                        <div class=\"col-xs-12\" style=\"text-align: center;\">\n                            <div style=\"width:100%; padding-top:70%\">\n                                <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\n                                    <div style=\"display:flex; justify-content: center; align-items: center; height: 100%; width: 100%\">\n                                        <ons-progress-circular [value]=\"percent\" [secondaryValue]=\"100\" style=\"width:60%; height:90%\"></ons-progress-circular>\n                                    </div>\n                                </div>\n                                <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\n                                    <div style=\"display:flex; justify-content: center; align-items: center; height: 100%; width: 100%\">\n                                        <h4 style=\"font-size: 28px; color:#283345\">{{percent}}%</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-xs-12 col-sm-6 animated fadeInUp section\">\n                <!--<div style=\"width:70%; margin-left:15%; padding:0px\" class=\"row panel\">-->\n                <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 panel\">\n                    <div class=\"col-xs-12 title\">\n                        <span> NEXT CASE</span>\n                    </div>\n\n                    <div tourAnchor=\"next_case\">\n                        <div class=\"col-xs-12\" style=\"text-align: center;\">\n                            <div style=\"width:100%; padding-top:70%\">\n                                <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\n                                    <md-card *ngIf=\"nextCase!=null\" class=\"case-card col-xs-12\" (click)=\"launchCase(programName, nextCase?.$key, encryptedUid)\" style=\"width: 100%; height: 100%; padding:0\">\n                                        <img src=\"assets/images/{{nextCase?.case.thumb}}\" style=\"width: 100%; height: 100%\">\n                                        <!--<md-card-content>\n                                    <p>\n                                        {{nextCase?.case.title}}\n                                    </p>\n                                </md-card-content>-->\n                                    </md-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!--/tourAnchor-->\n</div>\n\n<app-footer> </app-footer>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"0\"> </app-header>\n\n<div class=\"back\">\n    <div class=\"ourword\">\n        <span class=\"employee\"> Helping Employees </span>\n        <br>\n        <span class=\"tobe\"> to be </span>\n        <span class=\"healthier\"> Healthier </span>\n    </div>\n</div>\n\n<app-footer> </app-footer>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n</div>\n<div class=\"grad\"></div>\n<div class=\"container-fluid\">\n    <div class=\"col-xs-11 login animated zoomIn\" style=\"text-align: center\">\n        <a routerLink=\"/\"><img src=\"assets/images/logo.png\" style=\"margin-top: -150px; width: 100%; max-width: 300px\" /></a>\n        <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"model.email\"><br>\n        <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"model.password\"><br>\n        <input type=\"button\" value=\"Login\" (click)=\"login()\">\n        <div style=\"color: white; padding: 15px\">\n            Don't have an account? &nbsp; <a style=\"color: #fd582a\" routerLink=\"/signup\">Get Started</a>\n        </div>\n        <button (click)=\"facebookLogin()\" type=\"button\" class=\"btn btn-fb\" style=\"background:rgb(59,89,152);font-size: 14px;\"><i class=\"fa fa-facebook left\" style=\"font-size: 14px;\"></i> Facebook</button>\n        <button (click)=\"gplusLogin()\" type=\"button\" class=\"btn btn-gplus\" style=\"background:rgb(221,75,57);font-size: 14px;\"><i class=\"fa fa-google-plus left\" style=\"font-size: 14px;\"></i> Google +</button>\n        <div *ngIf=\"error!=null\" style=\"color:blue\">\n            <br> {{error.message}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"2\"> </app-header>\n\n<div class=\"container-fluid\">\n    <div class=\"row profile\">\n        <div class=\"col-xs-12 col-md-6\" style=\"margin-top:20px; margin-bottom:20px\">\n            <div class=\"col-xs-12 contact-form info-panel\">\n                <div class=\"header\">General</div>\n                <div class=\"col-xs-12\" style=\"padding: 30px\">\n                    <span style=\"font-size: 28px\"> {{userName}} </span>\n                    <br>\n                    <!--<span style=\"color:#fd582a !important; font-size: 16px\"> Joined March 2017 </span>-->\n                </div>\n                <div class=\"col-xs-12\">\n                    <div style=\"width: 100%; padding-top: 70%;\">\n                        <div style=\"position: absolute; width: 100%; height: 100%; left:0; top: 0; bottom:0; right: 0;\">\n                            <div style=\"width: 100%; height: 100%; float:left\" [ngStyle]=\"{'background': 'url(' + photoURL + ') center/cover no-repeat'}\">\n                                <!--<div style=\"width: 75%; height: 100%; float:left\" [ngStyle]=\"{'background': 'url(' + photoURL + ') center/cover no-repeat'}\">-->\n                                <!--<img src=\"{{photoURL}}\" style=\"width: 100%; height: inherit;\">-->\n                            </div>\n                            <!--<div style=\"width: 25%; float:right; height: 100%\">\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%\">\n                                    <div>\n                                        <span class=\"value\">3</span>\n                                        <br>\n                                        <span class=\"key\">LEVEL</span>\n                                    </div>\n                                </div>\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%; border-top: 2px solid #c9cdd0\">\n                                    <div>\n                                        <span class=\"value\">12</span>\n                                        <br>\n                                        <span class=\"key\">BADGES</span>\n                                    </div>\n                                </div>\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%; border-top: 2px solid #c9cdd0\">\n                                    <div>\n                                        <span class=\"value\">0</span>\n                                        <br>\n                                        <span class=\"key\">REWARDS</span>\n                                    </div>\n                                </div>\n                            </div>-->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12\" style=\"margin-top:30px\">\n                    <span style=\"color:#283345; font-size: 20px;\">Progress:</span>\n                    <div class=\"progress\" style=\"margin-top:10px\">\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': (percent | async) + '%'}\" style=\"background-color: #283345\">\n                            <span>{{percent | async}}%</span>\n                        </div>\n                    </div>\n                </div>\n                <!--<div class=\"col-xs-12 vertical-center\">\n                    <img src=\"assets/images/lock.png \" width=\"45\" style=\"margin-right: 3%\">\n                    <span style=\"color:#283345; font-size: 24px\">Unlock your <b>FREE Guide</b></span>\n                </div>-->\n\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-6\" style=\"margin-top:20px; margin-bottom:20px\">\n            <div class=\"col-xs-12 contact-form info-panel\">\n                <div class=\"header\">Badges</div>\n                <br><br>\n                <div class=\"col-xs-3\" *ngFor=\"let badge of allBadges\" style=\"display: inline-block; text-align: center\">\n                    <div mdTooltip=\"{{badge.description}}\" mdTooltipPosition=\"below\" [ngStyle]=\"{'background': 'url(assets/images/badges/' + (badge.enabled ? badge.image_e:badge.image_d) + ') center/cover no-repeat'}\" style=\"width: 100%; padding-top:100%\">\n                    </div>\n                    <h6 style=\"height:40px\"> {{badge.name}} </h6>\n                </div>\n                <!--<img *ngFor=\"let badge of allBadges\" src=\"assets/images/badges/{{badge.enabled ? badge.image_e:badge.image_d}}\" style=\"width: 20%; height: 30%; padding:5%\">-->\n                <br><br>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer> </app-footer>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n</div>\n<div class=\"grad\"></div>\n<div class=\"container-fluid\">\n    <div class=\"col-xs-11 login animated fadeInDown\" style=\"text-align: center\">\n        <a routerLink=\"/\"><img src=\"assets/images/logo.png\" style=\"margin-top: -150px; width: 100%; max-width: 300px\" /></a>\n        <input type=\"text\" placeholder=\"first name\" name=\"firstname\" [(ngModel)]=\"model.firstname\"><br>\n        <input type=\"text\" placeholder=\"last name\" name=\"lastname\" [(ngModel)]=\"model.lastname\"><br>\n        <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"model.email\"><br>\n        <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"model.password\"><br>\n        <input type=\"button\" value=\"Signup\" (click)=\"signup()\">\n        <div style=\"color: white; padding: 15px\">\n            I already have an account. &nbsp; <a style=\"color: #fd582a\" routerLink=\"/login\">Cancel</a>\n        </div>\n        <div *ngIf=\"error!=null\" style=\"color:blue\">\n            {{error.message}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"3\"> </app-header>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-7\">\n            <div class=\"col-xs-12\" *ngFor=\"let faqItem of items | async\">\n                <app-faq-item [q]=\"faqItem.q\" [a]=\"faqItem.a\"> </app-faq-item>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-5\">\n            <div class=\"contact-form\">\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"subject\">Subject</label>\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Enter subject title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"message\">Message</label>\n                        <textarea class=\"form-control\" id=\"message\" rows=\"4\" cols=\"50\" placeholder=\"Enter message content\"> </textarea>\n                    </div>\n                    <div class=\"form-group\" style=\"text-align: right\">\n                        <button type=\"submit\" class=\"btn btn-default\">Send Message</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<app-footer> </app-footer>"

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(481);


/***/ })

},[964]);
//# sourceMappingURL=main.bundle.js.map