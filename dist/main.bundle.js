webpackJsonp([1,5],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "land_back.4c723470797e95810353.png";

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(97);
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
        template: __webpack_require__(660),
        styles: [__webpack_require__(599)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], BadgeComponent);

var _a;
//# sourceMappingURL=badge.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(424);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
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
        this.authState = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.getUserURL = '/api/getVar';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.currentAuth = null;
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
                    this.authState.next(auth);
                    this.currentAuth = auth;
                }.bind(_this));
            }
            else {
                _this.authState.next(auth);
                _this.currentAuth = auth;
            }
        });
        this.getAuthState().subscribe(function (auth) {
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
            }
            else {
                _this.router.navigateByUrl('/');
            }
        });
    }
    UserService.prototype.getAuthState = function () {
        return this.authState;
    };
    UserService.prototype.emailLogin = function (model) {
        this.isSignupProcess = false;
        this.model = model;
        return this.af.auth.login({
            email: model.email,
            password: model.password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Password,
        });
    };
    UserService.prototype.gplusLogin = function () {
        this.isSignupProcess = false;
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Redirect,
        });
    };
    UserService.prototype.facebookLogin = function () {
        this.isSignupProcess = false;
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Redirect,
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
    UserService.prototype.handleError = function () {
        console.log('http error!');
    };
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
    UserService.prototype.isLoggedin = function () {
        return this.currentAuth != null;
    };
    UserService.prototype.getEncryptedUid = function (uid) {
        //: Promise<any> {
        console.log('http requesting...');
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
    UserService.prototype.getCurrentUser = function () {
        return this.currentAuth;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(518);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tour__ = __webpack_require__(422);
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


var AppComponent = (function () {
    function AppComponent(tourService) {
        this.tourService = tourService;
        this.title = 'app works!';
        this.tourService.initialize([
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
                content: "Your Profile is highlighted.\n                  On the \u201CYour Profile\u201D page, you will see all of the badges you earned and others you can still earn.\n                 ",
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
                content: "Programs link is highlighted.\n                  Here is your assigned program.\n                  This is where you will experience your cases and learn how to prevent yourself, and others, from getting sick.\n                ",
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
                content: "Great! You have completed your first case.\n                  You can now finish the rest of the program on your schedule.\n                  Keep an eye out for emails that bring you new cases, mini games, and fun quests that will help you stay healthy all year!\n                  ",
                placement: 'below',
                title: 'Congratulation!',
            }
        ]);
        this.tourService.start();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(659),
        styles: [__webpack_require__(598)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_tour__["TourService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_tour__["TourService"]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_tour__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_tour___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_tour__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_scroll_into_view_if_needed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__content_content_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__programs_programs_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__support_support_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__faq_item_faq_item_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__environments_firebase_config__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cases_cases_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__signup_signup_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__badge_badge_component__ = __webpack_require__(213);
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
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__programs_programs_component__["a" /* ProgramsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__support_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_22__faq_item_faq_item_component__["a" /* FaqItemComponent */],
            __WEBPACK_IMPORTED_MODULE_24__cases_cases_component__["a" /* CasesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_27__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_29__badge_badge_component__["a" /* BadgeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__environments_firebase_config__["a" /* firebaseConfig */]),
            // ScrollViewModule,
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"].forRoot([{
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
                }, {
                    path: 'support',
                    component: __WEBPACK_IMPORTED_MODULE_21__support_support_component__["a" /* SupportComponent */],
                },
                {
                    path: 'cases',
                    component: __WEBPACK_IMPORTED_MODULE_24__cases_cases_component__["a" /* CasesComponent */],
                },
                {
                    path: 'profile',
                    component: __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__["a" /* ProfileComponent */],
                },
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__["a" /* LandingComponent */],
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
                },
                {
                    path: 'content',
                    component: __WEBPACK_IMPORTED_MODULE_16__content_content_component__["a" /* ContentComponent */],
                },
                {
                    path: 'signup',
                    component: __WEBPACK_IMPORTED_MODULE_27__signup_signup_component__["a" /* SignupComponent */],
                }]),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__["OnsenModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_tour__["TourNgBootstrapModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_hotkeys__["HotkeyModule"].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_28__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10_ng2_tour__["TourService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_29__badge_badge_component__["a" /* BadgeComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_9_angular2_onsenui__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 504:
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], CaseService);

var _a;
//# sourceMappingURL=case.service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__case_service__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
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
    function CasesComponent(case_service, user_service, router) {
        var _this = this;
        this.case_service = case_service;
        this.user_service = user_service;
        this.router = router;
        this.programName = "Cold and Flu";
        this.program = this.case_service.getProgram(this.programName);
        this.program.subscribe(function (obj) {
            this.cases = obj.cases;
            // console.log(obj.cases)
            this.sections = obj.sections.categories;
        }.bind(this));
        if (this.user_service.isLoggedin()) {
            this.user_service.getEncryptedUid(this.user_service.getCurrentUser().uid).subscribe(function (value) { return _this.encryptedUid = value; });
        }
        this.user_service.getAuthState().subscribe(function (authState) {
            var _this = this;
            if (authState != null) {
                this.user_service.getEncryptedUid(authState.uid).subscribe(function (value) { return _this.encryptedUid = value; });
            }
        }.bind(this));
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
        console.log(extras);
        this.router.navigate(['/content'], extras);
    };
    return CasesComponent;
}());
CasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cases',
        template: __webpack_require__(661),
        styles: [__webpack_require__(600)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__case_service__["a" /* CaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], CasesComponent);

var _a, _b, _c;
//# sourceMappingURL=cases.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
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
        template: __webpack_require__(662),
        styles: [__webpack_require__(601)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], ContentComponent);

var _a, _b, _c;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 507:
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
        template: __webpack_require__(663),
        styles: [__webpack_require__(602)]
    }),
    __metadata("design:paramtypes", [])
], FaqItemComponent);

//# sourceMappingURL=faq-item.component.js.map

/***/ }),

/***/ 508:
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
        template: __webpack_require__(664),
        styles: [__webpack_require__(603)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(39);
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
    function HeaderComponent(service) {
        // console.log('constructor');
        this.service = service;
        this.isLoggedin = this.service.isLoggedin();
        if (service.getCurrentUser() != null) {
            this.userName = service.getCurrentUser().auth.displayName;
            this.photoURL = service.getCurrentUser().auth.photoURL;
        }
        this.auth = this.service.getAuthState();
        this.auth.subscribe(function (authState) {
            if (authState != null) {
                this.userName = authState.auth.displayName;
                this.photoURL = authState.auth.photoURL;
            }
            if (authState == null) {
                this.isLoggedin = false;
            }
            else {
                this.isLoggedin = true;
            }
            // console.log(this.isLoggedin);
        }.bind(this));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngDoCheck = function () {
    };
    HeaderComponent.prototype.signout = function () {
        this.service.signout();
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
        template: __webpack_require__(665),
        styles: [__webpack_require__(604)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
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
        var _this = this;
        this.router = router;
        this.ps = ps;
        this.us = us;
        this.percent = 0;
        this.uid = null;
        this.programName = "Cold and Flu";
        this.nextCase = null;
        if (this.us.isLoggedin()) {
            this.uid = this.us.getCurrentUser().uid;
            this.us.getEncryptedUid(this.uid).subscribe(function (value) { return _this.encryptedUid = value; });
            this.getProfile();
        }
        this.us.getAuthState().subscribe(function (authState) {
            var _this = this;
            if (authState != null) {
                this.uid = authState.uid;
                this.us.getEncryptedUid(this.uid).subscribe(function (value) { return _this.encryptedUid = value; });
                this.getProfile();
            }
        }.bind(this));
        // this.percent = ps.getProgramProgressPercent(this.uid, "Cold and Flu");
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
        console.log(extras);
        this.router.navigate(['/content'], extras);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(666),
        styles: [__webpack_require__(605)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 511:
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
        template: __webpack_require__(667),
        styles: [__webpack_require__(606)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(39);
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
        template: __webpack_require__(668),
        styles: [__webpack_require__(607)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badge_badge_component__ = __webpack_require__(213);
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





var ProfileComponent = (function () {
    function ProfileComponent(service, user_service, dialog) {
        this.service = service;
        this.user_service = user_service;
        this.dialog = dialog;
        this.updateBadges = null;
        this.uid = null;
        if (this.user_service.isLoggedin()) {
            this.uid = this.user_service.getCurrentUser().uid;
            this.userName = this.user_service.getCurrentUser().auth.displayName;
            this.photoURL = this.user_service.getCurrentUser().auth.photoURL;
            this.getProfile();
        }
        this.user_service.getAuthState().subscribe(function (authState) {
            if (authState != null) {
                this.uid = authState.uid;
                this.userName = authState.auth.displayName;
                this.photoURL = authState.auth.photoURL;
                this.getProfile();
            }
        }.bind(this));
        this.service.getAllBadges().subscribe(function (list) {
            this.allBadges = list.map(function (value, index) { value.enabled = false; return value; });
            this.getProfile();
            // console.log(this.allBadges);
        }.bind(this));
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.openDialog = function () {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__badge_badge_component__["a" /* BadgeComponent */]);
    };
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
            this.percent = this.service.getProgramProgressPercent(this.uid, 'Cold and Flu');
            this.badges = this.service.getBadgeList(this.uid);
            this.badges.subscribe(function (list) {
                this.enableBadge(list);
            }.bind(this));
            this.service.getUpdateBadgeList(this.uid).subscribe(function (obj) {
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
                                _this.service.awardBadgeToUser(_this.uid, { name: badge.name });
                            });
                        }.bind(this));
                    }
                }.bind(this));
            }.bind(this));
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(669),
        styles: [__webpack_require__(608)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _c || Object])
], ProfileComponent);

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
var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 514:
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
        template: __webpack_require__(670),
        styles: [__webpack_require__(609)],
    }),
    __metadata("design:paramtypes", [])
], ProgramsComponent);

//# sourceMappingURL=programs.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(39);
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
        template: __webpack_require__(671),
        styles: [__webpack_require__(610)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 516:
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], SupportService);

var _a;
//# sourceMappingURL=support.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support_service__ = __webpack_require__(516);
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
        template: __webpack_require__(672),
        styles: [__webpack_require__(611)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__support_service__["a" /* SupportService */]) === "function" && _a || Object])
], SupportComponent);

var _a;
//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ 518:
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

/***/ 519:
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

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
exports.push([module.i, ".container-fluid {\r\n    background-color: #c9cdd0;\r\n    min-height: calc(100vh - 100px);\r\n}\r\n\r\n.container-fluid .row {\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.case-card {\r\n    /*width: 300px;\r\n    height: 250px;*/\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.sections .title {\r\n    padding: 10px 25px;\r\n    font-size: 22px;\r\n    color: #283345;\r\n    text-align: center\r\n    /*word-wrap: break-word;*/\r\n}\r\n\r\n.glyphicon {\r\n    font-size: 50px;\r\n    color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.sections {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".case-action {\r\n    position: absolute;\r\n    right: 7%;\r\n    top: 7%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    border-bottom-color: #adb1b4;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.question {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    line-height: 28px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 10px 10px 0px 10px;\r\n}\r\n\r\n.answer {\r\n    font-size: 16px;\r\n    line-height: 28px;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".app-footer {\r\n    background-color: #283345;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    max-height: 220px;\r\n}\r\n\r\n.app-footer>h2 {\r\n    font-size: 18px;\r\n    text-align: right;\r\n    margin-top: 120px;\r\n    color: white;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .app-footer {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        height: 85px;\r\n    }\r\n    .app-footer>h2 {\r\n        font-size: 16px;\r\n        margin: 0px;\r\n        padding: 0px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".app-header {\r\n    background-color: #283345;\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.app-header .logo {\r\n    height: 160px;\r\n}\r\n\r\nmd-toolbar {\r\n    background: #283345;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nmd-toolbar .logo {\r\n    height: 50px;\r\n}\r\n\r\n.spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.app-header .left {\r\n    float: left;\r\n}\r\n\r\n.app-header .right {\r\n    float: right;\r\n    padding-top: 45px;\r\n}\r\n\r\n.modal {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .modal:before {\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        content: \" \";\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n.modal-dialog {\r\n    display: inline-block;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    background-color: #c9cdd0;\r\n    min-height: calc(100vh - 100px);\r\n}\r\n\r\n.container-fluid .row {\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n    padding-top: 12vh;\r\n    padding-bottom: 12vh;\r\n}\r\n\r\n.section {\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.section .title {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background-color: #283345;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n}\r\n\r\n.section .title span {\r\n    font-size: 24px;\r\n    color: #ddd;\r\n}\r\n\r\n.panel {\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    box-shadow: 6px 10px 12px 2px #8a8a8a;\r\n    padding: 0;\r\n}\r\n\r\n.welcome {\r\n    font-size: 28px;\r\n    line-height: 1.3em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .welcome {\r\n        font-size: 16px;\r\n    }\r\n    .section .title span {\r\n        font-size: 18px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".back {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 40%;\r\n    min-height: calc(100vh - 100px);\r\n    background: url(" + __webpack_require__(167) + ") center/cover no-repeat;\r\n}\r\n\r\n.back div {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    padding-left: 10%;\r\n    padding-top: 8%;\r\n}\r\n\r\n.back .ourword span {\r\n    /*line-height: 85px;*/\r\n    color: rgb(40, 51, 69);\r\n}\r\n\r\n.back .employee {\r\n    font-size: 40px;\r\n}\r\n\r\n.back .tobe {\r\n    font-size: 50px;\r\n}\r\n\r\n.back .healthier {\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n    color: #fd582a !important;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .back {\r\n        height: calc(100vh - 85px);\r\n    }\r\n    .back .employee {\r\n        font-size: 20px;\r\n    }\r\n    .back .tobe {\r\n        font-size: 25px;\r\n    }\r\n    .back .healthier {\r\n        font-size: 30px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);", ""]);
exports.i(__webpack_require__(588), "");

// module
exports.push([module.i, ".body {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    background-image: url(" + __webpack_require__(167) + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    filter: blur(5px);\r\n    -webkit-filter: blur(5px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.container-fluid {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.grad {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\r\n    /* Chrome,Safari4+ */\r\n    opacity: 0.7;\r\n}\r\n\r\n.header {\r\n    position: absolute;\r\n    top: calc(50% - 35px);\r\n    left: calc(50% - 255px);\r\n    z-index: 2;\r\n}\r\n\r\n.header div {\r\n    float: left;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 35px;\r\n    font-weight: 200;\r\n}\r\n\r\n.header div span {\r\n    color: #5379fa !important;\r\n}\r\n\r\n.login {\r\n    max-width: 350px;\r\n    padding: 10px;\r\n}\r\n\r\n.login input[type=text] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=email] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=password] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=button] {\r\n    width: calc(100% + 10px);\r\n    height: 35px;\r\n    background: #fff;\r\n    border: 1px solid #fff;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    color: #a18d6c;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 6px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.login input[type=button]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.login input[type=button]:active {\r\n    opacity: 0.6;\r\n}\r\n\r\n.login input[type=text]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=email]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=password]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=button]:focus {\r\n    outline: none;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n::-moz-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.login button {\r\n    width: calc(100% + 10px);\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    border-radius: 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    background-color: #c9cdd0;\r\n    min-height: calc(100vh - 100px);\r\n}\r\n\r\n.container-fluid .row {\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    min-height: 640px;\r\n}\r\n\r\n.header {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #283345;\r\n    border-color: #283345;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding-left: 3%;\r\n    padding-top: 7px;\r\n    z-index: 1;\r\n}\r\n\r\n.header::after {\r\n    position: absolute;\r\n    content: '';\r\n    top: 100%;\r\n    margin-left: -50px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 10px solid transparent;\r\n    border-right: 10px solid transparent;\r\n    border-top: 10px solid #283345;\r\n}\r\n\r\n.contact-form {\r\n    border-width: 1px;\r\n    border-style: ridge;\r\n    border-color: gray;\r\n    background: #e6ebee;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n    padding: 5% 10%;\r\n}\r\n\r\n.contact-form label {\r\n    font-size: 16px;\r\n    color: #adb0b2;\r\n}\r\n\r\n.contact-form button {\r\n    background: #fc582a;\r\n    color: #fcc5b6;\r\n    border-radius: 0px;\r\n}\r\n\r\n.h2 {\r\n    color: #283345;\r\n}\r\n\r\n.userInfo-tile {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background: #283345;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.userInfo-tile .value {\r\n    color: #c9cdd0;\r\n    font-size: 36px;\r\n}\r\n\r\n.userInfo-tile .key {\r\n    color: #c9cdd0;\r\n    font-size: 10px;\r\n}\r\n\r\n.userInfo-general {\r\n    border-right: 3px solid #c4c8cb;\r\n}\r\n\r\n.userInfo-general>div {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.profile {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.profile .info-panel {\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .profile {\r\n        display: block;\r\n    }\r\n    .userInfo-general {\r\n        border-right: 0px solid #c4c8cb;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);", ""]);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);", ""]);

// module
exports.push([module.i, ".body {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    background-image: url(" + __webpack_require__(167) + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    filter: blur(5px);\r\n    -webkit-filter: blur(5px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.container-fluid {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.grad {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\r\n    /* Chrome,Safari4+ */\r\n    opacity: 0.7;\r\n}\r\n\r\n.header {\r\n    position: absolute;\r\n    top: calc(50% - 35px);\r\n    left: calc(50% - 255px);\r\n    z-index: 2;\r\n}\r\n\r\n.header div {\r\n    float: left;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 35px;\r\n    font-weight: 200;\r\n}\r\n\r\n.header div span {\r\n    color: #5379fa !important;\r\n}\r\n\r\n.login {\r\n    max-width: 350px;\r\n    padding: 10px;\r\n}\r\n\r\n.login input[type=text] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=email] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=password] {\r\n    width: 100%;\r\n    height: 30px;\r\n    background: transparent;\r\n    border: 1px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login input[type=button] {\r\n    width: calc(100% + 10px);\r\n    height: 35px;\r\n    background: #fff;\r\n    border: 1px solid #fff;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    color: #a18d6c;\r\n    font-family: 'Exo', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 6px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.login input[type=button]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.login input[type=button]:active {\r\n    opacity: 0.6;\r\n}\r\n\r\n.login input[type=text]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=email]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=password]:focus {\r\n    outline: none;\r\n    border: 1px solid rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login input[type=button]:focus {\r\n    outline: none;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n::-moz-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.login button {\r\n    width: calc(100% + 10px);\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    border-radius: 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    background-color: #c9cdd0;\r\n    min-height: calc(100vh - 100px);\r\n}\r\n\r\n.container-fluid .row {\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.contact-form {\r\n    border-width: 1px;\r\n    border-style: ridge;\r\n    border-color: gray;\r\n    background: #e6ebee;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n    padding: 5% 10%;\r\n}\r\n\r\n.contact-form label {\r\n    font-size: 16px;\r\n    color: #adb0b2;\r\n}\r\n\r\n.contact-form button {\r\n    background: #fc582a;\r\n    color: #fcc5b6;\r\n    border-radius: 0px;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n    border: 1px solid #ccc;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 253,
	"./af.js": 253,
	"./ar": 260,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 260,
	"./az": 261,
	"./az.js": 261,
	"./be": 262,
	"./be.js": 262,
	"./bg": 263,
	"./bg.js": 263,
	"./bn": 264,
	"./bn.js": 264,
	"./bo": 265,
	"./bo.js": 265,
	"./br": 266,
	"./br.js": 266,
	"./bs": 267,
	"./bs.js": 267,
	"./ca": 268,
	"./ca.js": 268,
	"./cs": 269,
	"./cs.js": 269,
	"./cv": 270,
	"./cv.js": 270,
	"./cy": 271,
	"./cy.js": 271,
	"./da": 272,
	"./da.js": 272,
	"./de": 275,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 275,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-au": 278,
	"./en-au.js": 278,
	"./en-ca": 279,
	"./en-ca.js": 279,
	"./en-gb": 280,
	"./en-gb.js": 280,
	"./en-ie": 281,
	"./en-ie.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 285,
	"./es-do": 284,
	"./es-do.js": 284,
	"./es.js": 285,
	"./et": 286,
	"./et.js": 286,
	"./eu": 287,
	"./eu.js": 287,
	"./fa": 288,
	"./fa.js": 288,
	"./fi": 289,
	"./fi.js": 289,
	"./fo": 290,
	"./fo.js": 290,
	"./fr": 293,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 293,
	"./fy": 294,
	"./fy.js": 294,
	"./gd": 295,
	"./gd.js": 295,
	"./gl": 296,
	"./gl.js": 296,
	"./gom-latn": 297,
	"./gom-latn.js": 297,
	"./he": 298,
	"./he.js": 298,
	"./hi": 299,
	"./hi.js": 299,
	"./hr": 300,
	"./hr.js": 300,
	"./hu": 301,
	"./hu.js": 301,
	"./hy-am": 302,
	"./hy-am.js": 302,
	"./id": 303,
	"./id.js": 303,
	"./is": 304,
	"./is.js": 304,
	"./it": 305,
	"./it.js": 305,
	"./ja": 306,
	"./ja.js": 306,
	"./jv": 307,
	"./jv.js": 307,
	"./ka": 308,
	"./ka.js": 308,
	"./kk": 309,
	"./kk.js": 309,
	"./km": 310,
	"./km.js": 310,
	"./kn": 311,
	"./kn.js": 311,
	"./ko": 312,
	"./ko.js": 312,
	"./ky": 313,
	"./ky.js": 313,
	"./lb": 314,
	"./lb.js": 314,
	"./lo": 315,
	"./lo.js": 315,
	"./lt": 316,
	"./lt.js": 316,
	"./lv": 317,
	"./lv.js": 317,
	"./me": 318,
	"./me.js": 318,
	"./mi": 319,
	"./mi.js": 319,
	"./mk": 320,
	"./mk.js": 320,
	"./ml": 321,
	"./ml.js": 321,
	"./mr": 322,
	"./mr.js": 322,
	"./ms": 324,
	"./ms-my": 323,
	"./ms-my.js": 323,
	"./ms.js": 324,
	"./my": 325,
	"./my.js": 325,
	"./nb": 326,
	"./nb.js": 326,
	"./ne": 327,
	"./ne.js": 327,
	"./nl": 329,
	"./nl-be": 328,
	"./nl-be.js": 328,
	"./nl.js": 329,
	"./nn": 330,
	"./nn.js": 330,
	"./pa-in": 331,
	"./pa-in.js": 331,
	"./pl": 332,
	"./pl.js": 332,
	"./pt": 334,
	"./pt-br": 333,
	"./pt-br.js": 333,
	"./pt.js": 334,
	"./ro": 335,
	"./ro.js": 335,
	"./ru": 336,
	"./ru.js": 336,
	"./sd": 337,
	"./sd.js": 337,
	"./se": 338,
	"./se.js": 338,
	"./si": 339,
	"./si.js": 339,
	"./sk": 340,
	"./sk.js": 340,
	"./sl": 341,
	"./sl.js": 341,
	"./sq": 342,
	"./sq.js": 342,
	"./sr": 344,
	"./sr-cyrl": 343,
	"./sr-cyrl.js": 343,
	"./sr.js": 344,
	"./ss": 345,
	"./ss.js": 345,
	"./sv": 346,
	"./sv.js": 346,
	"./sw": 347,
	"./sw.js": 347,
	"./ta": 348,
	"./ta.js": 348,
	"./te": 349,
	"./te.js": 349,
	"./tet": 350,
	"./tet.js": 350,
	"./th": 351,
	"./th.js": 351,
	"./tl-ph": 352,
	"./tl-ph.js": 352,
	"./tlh": 353,
	"./tlh.js": 353,
	"./tr": 354,
	"./tr.js": 354,
	"./tzl": 355,
	"./tzl.js": 355,
	"./tzm": 357,
	"./tzm-latn": 356,
	"./tzm-latn.js": 356,
	"./tzm.js": 357,
	"./uk": 358,
	"./uk.js": 358,
	"./ur": 359,
	"./ur.js": 359,
	"./uz": 361,
	"./uz-latn": 360,
	"./uz-latn.js": 360,
	"./uz.js": 361,
	"./vi": 362,
	"./vi.js": 362,
	"./x-pseudo": 363,
	"./x-pseudo.js": 363,
	"./yo": 364,
	"./yo.js": 364,
	"./zh-cn": 365,
	"./zh-cn.js": 365,
	"./zh-hk": 366,
	"./zh-hk.js": 366,
	"./zh-tw": 367,
	"./zh-tw.js": 367
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
webpackContext.id = 626;


/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\r\n<tour-step-template></tour-step-template>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 md-dialog-title> Congratulation!</h1>\r\n    <md-dialog-content style=\"display:flex; justify-content: center; align-items: center\">\r\n        <div style=\"text-align: center\">\r\n            <img src=\"assets/images/badges/{{badge.image}}\" style=\"width:150px\">\r\n            <br>\r\n            <br>\r\n            <h4> You have been awarded\r\n                <{{badge.name}}> badge. </h4>\r\n        </div>\r\n    </md-dialog-content>\r\n</div>"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"1\"> </app-header>\r\n\r\n<!--<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n        <div *ngFor=\"let section of sections; let i=index\" (swipeleft)=\"swipe(i,$event.\">\r\n            {{section}}\r\n            <div *ngFor=\"let case of cases\" class=\"col-xs-4\" [style.display]=\"case.obj.case.category==='c'+(i+1) ? 'block':'none'\">\r\n                <md-card class=\"case-card\">\r\n                    <img md-card-image src=\"assets/images/{{case.obj.case.thumb}}\">\r\n                    <md-card-content>\r\n                        <p>\r\n                            {{case.obj.case.title}}\r\n                        </p>\r\n                    </md-card-content>\r\n\r\n                </md-card>\r\n            </div>\r\n            <br>\r\n        </div>\r\n\r\n    </div>\r\n</div>-->\r\n\r\n<!--<button routerLink=\"/home\"> home </button>-->\r\n\r\n<!--<div id=\"impress\">-->\r\n<!--<div id=\"bored\" class=\"step slide\" data-x=\"-1000\" data-y=\"-1500\">-->\r\n<!--<div class=\"step slide\" data-x=\"-1000\" data-y=\"-1500\" data-z=\"-1000\" style=\"width:80vw; height:80vh\">\r\n        <q>Aren’t you just <b>bored</b> with all those slides-based presentations?</q>\r\n    </div>\r\n    <div class=\"step slide\" data-x=\"0\" data-y=\"-1500\" data-z=\"-2000\" style=\"width:80vw; height:80vh\">\r\n        <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>\r\n    </div>\r\n\r\n    <div class=\"step slide\" data-x=\"1000\" data-y=\"-1500\" data-z=\"-3000\" style=\"width:80vw; height:80vh\">\r\n        <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>\r\n    </div>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"container-fluid\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">-->\r\n<div class=\"container-fluid\">\r\n    <div class=\"row animated fadeInUp\" *ngFor=\"let section of (program | async)?.sections.categories; let i=index\">\r\n\r\n        <!--<div class=\"col-xs-12 sections\" style=\"padding-bottom: 40px; padding-top: 40px\">-->\r\n        <div class=\"col-xs-12 sections\" style=\"background-color:#283345\">\r\n            <!--<span class=\"glyphicon glyphicon-chevron-left\"></span>-->\r\n            <span class=\"spacer\"></span>\r\n            <span class=\"title\" style=\"color: #ddd\"> {{ section }}</span>\r\n            <span class=\"spacer\"></span>\r\n            <!--<a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>-->\r\n        </div>\r\n\r\n        <div class=\"col-xs-12\" style=\"background:rgba(255,255,255,0.5); padding:10px 25px;\">\r\n            <ng-container *ngFor=\"let case of (program | async)?.cases; let j=index;\">\r\n                <div *ngIf=\"case.obj.case.category==='c' +(i+1)\" class=\"case-card col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n\r\n                    <ng-container *ngIf=\"i==0 && j==7\" tourAnchor=\"first_case\"></ng-container>\r\n                    <div style=\"width:100%; padding-top:90%\">\r\n                        <div style=\"position:absolute; width:100%; height:100%; left:0; top:0\">\r\n                            <md-card (click)=\"launchCase(programName, case.id, encryptedUid)\" style=\"margin-left:3%; margin-right:3%; height:100%\">\r\n                                <img md-card-image src=\"assets/images/{{case.obj.case.thumb}}\">\r\n                                <md-card-content>\r\n                                    <p>\r\n                                        {{case.obj.case.title}}\r\n                                    </p>\r\n                                </md-card-content>\r\n                            </md-card>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-footer> </app-footer>"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<iframe class=\"fullscreen e2e-iframe-trusted-src\" [src]=\"caseUrl\">\r\n</iframe>\r\n\r\n<div class=\"case-action\">\r\n    <a md-fab (click)=\"location.back()\">\r\n        <md-icon>exit_to_app</md-icon>\r\n    </a>\r\n</div>"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 question\" data-toggle=\"collapse\" attr.data-target=\"#{{id}}\" (click)=\"qClick()\">\r\n            {{q}}\r\n            <div class=\"spacer\"> </div>\r\n            <md-icon> {{expanded ? 'expand_less' : 'expand_more'}} </md-icon>\r\n        </div>\r\n        <div class=\"col-xs-12 answer collapse\" [attr.id]=\"id\">\r\n            <br> {{a}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 app-footer\">\r\n            <h2> © 2017 All rights reserved. Viven Health, Inc. </h2>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"isLoggedin\">\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n\r\n    <md-menu #menu=\"mdMenu\">\r\n        <button md-menu-item routerLink=\"/home\">\r\n            <md-icon>home</md-icon>\r\n            <span>HOME</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/cases\">\r\n            <md-icon>slideshow</md-icon>\r\n            <span>PROGRAMS</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/profile\">\r\n            <md-icon>person</md-icon>\r\n            <span>PROFILE</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/support\">\r\n            <md-icon>help_outline</md-icon>\r\n            <span>SUPPORT</span>\r\n        </button>\r\n        <hr>\r\n        <button md-menu-item (click)=\"signout()\">\r\n            <md-icon>lock_outline</md-icon>\r\n            <span>LOGOUT</span>\r\n        </button>\r\n    </md-menu>\r\n    &nbsp; &nbsp;\r\n    <img class=\"logo\" src=\"assets/images/logo.png\" />\r\n</md-toolbar>\r\n\r\n<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"isLoggedin\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 app-header\">\r\n            <div class=\"left\">\r\n                <div style=\"display:inline-block\">\r\n                    <img class=\"logo\" src=\"assets/images/logo.png\" />\r\n                </div>\r\n\r\n\r\n                <div style=\"display:inline-block; padding-left: 100px; \">\r\n                    <div class=\"ui secondary pointing menu\">\r\n                        <div tourAnchor=\"homepage\">\r\n                            <a class=\"item {{tabIndex == 0 && 'active'}}\" routerLink=\"/home\">\r\n                                HOME\r\n                            </a>\r\n                        </div>\r\n                        <div tourAnchor=\"programs\">\r\n                            <a class=\"item {{tabIndex == 1 && 'active'}}\" routerLink=\"/cases\">\r\n                            PROGRAMS\r\n                        </a>\r\n                        </div>\r\n                        <div tourAnchor=\"profile\">\r\n                            <a class=\"item {{tabIndex == 2 && 'active'}}\" routerLink=\"/profile\">\r\n                            YOUR PROFILE\r\n                        </a>\r\n                        </div>\r\n                        <a class=\"item {{tabIndex == 3 && 'active'}}\" routerLink=\"/support\">\r\n                            SUPPORT\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"right\">\r\n                <div style=\"display:flex; align-items: center; justify-content: center\">\r\n                    <div style=\"color:rgb(212,214,215); margin-right: 16px\">{{userName}}</div>\r\n                    <div md-icon-button [mdMenuTriggerFor]=\"account\" [ngStyle]=\"{'width': '70px', 'height': '70px', 'background': 'url(' + photoURL + ') center/cover no-repeat', 'border':'4px solid darkgray', 'border-radius': '5px'}\">\r\n                    </div>\r\n\r\n                    <div tourAnchor=\"login\">\r\n                        <md-menu #account=\"mdMenu\" y-axis=\"below\" x-axis=\"before\">\r\n                            <button md-menu-item (click)=\"signout()\">\r\n                            <md-icon>lock_outline</md-icon>\r\n                            <span>LOGOUT</span>\r\n                        </button>\r\n                        </md-menu>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<md-toolbar color='primary' style=\"display:flex\" class=\"visible-sm visible-xs\" *ngIf=\"!isLoggedin\">\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n\r\n    <md-menu #menu=\"mdMenu\">\r\n        <button md-menu-item routerLink=\"/login\">\r\n            <md-icon>lock_open</md-icon>\r\n            <span>LOGIN</span>\r\n        </button>\r\n    </md-menu>\r\n    &nbsp; &nbsp;\r\n    <img class=\"logo\" src=\"assets/images/logo.png\" />\r\n</md-toolbar>\r\n\r\n<div class=\"container-fluid visible-lg visible-md\" *ngIf=\"!isLoggedin\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 app-header\">\r\n            <div class=\"left\">\r\n                <div style=\"display:inline-block\">\r\n                    <img class=\"logo\" src=\"assets/images/logo.png\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"right\" style=\"padding-top: 60px\">\r\n                <a class=\"ui orange button\" style=\"font-size:16px; height:40px\" routerLink=\"/login\">LOGIN</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"0\"> </app-header>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n        <div tourAnchor=\"welcome\">\r\n            <div class=\"col-xs-12\" id=\"welcome\">\r\n                <div style=\"margin: 1em 0em; padding: 2.0em; border: 1em solid #fd582a\">\r\n                    <span class=\"welcome\"> Helping Employees become healthier is <span style=\"color: #fd582a\"> the single most powerful investment </span> a company can make </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-6 animated fadeInLeft section\">\r\n            <!--<div style=\"width:70%; margin-left:15%; padding:0px\" class=\"row panel\">-->\r\n            <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 panel\">\r\n                <div class=\"col-xs-12 title\">\r\n                    <span> PROGRESS </span>\r\n                </div>\r\n\r\n                <div tourAnchor=\"progress\">\r\n                    <div class=\"col-xs-12\" style=\"text-align: center;\">\r\n                        <div style=\"width:100%; padding-top:70%\">\r\n                            <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\r\n                                <div style=\"display:flex; justify-content: center; align-items: center; height: 100%; width: 100%\">\r\n                                    <ons-progress-circular [value]=\"percent\" style=\"width:60%; height:90%\"></ons-progress-circular>\r\n                                </div>\r\n                            </div>\r\n                            <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\r\n                                <div style=\"display:flex; justify-content: center; align-items: center; height: 100%; width: 100%\">\r\n                                    <h4 style=\"font-size: 28px; color:#283345\">{{percent}}%</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 animated fadeInUp section\">\r\n            <!--<div style=\"width:70%; margin-left:15%; padding:0px\" class=\"row panel\">-->\r\n            <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 panel\">\r\n                <div class=\"col-xs-12 title\">\r\n                    <span> NEXT CASE</span>\r\n                </div>\r\n\r\n                <div tourAnchor=\"next_case\">\r\n                    <div class=\"col-xs-12\" style=\"text-align: center;\">\r\n                        <div style=\"width:100%; padding-top:70%\">\r\n                            <div style=\"position:absolute; left:0; top:0; bottom:0; right:0\">\r\n                                <md-card *ngIf=\"nextCase!=null\" class=\"case-card col-xs-12\" (click)=\"launchCase(programName, nextCase?.$key, encryptedUid)\" style=\"width: 100%; height: 100%; padding:0\">\r\n                                    <img src=\"assets/images/{{nextCase?.case.thumb}}\" style=\"width: 100%; height: 100%\">\r\n                                    <!--<md-card-content>\r\n                                    <p>\r\n                                        {{nextCase?.case.title}}\r\n                                    </p>\r\n                                </md-card-content>-->\r\n                                </md-card>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-footer> </app-footer>"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"0\"> </app-header>\r\n\r\n<div class=\"back\">\r\n    <div class=\"ourword\">\r\n        <span class=\"employee\"> Helping Employees </span>\r\n        <br>\r\n        <span class=\"tobe\"> to be </span>\r\n        <span class=\"healthier\"> Healthier </span>\r\n    </div>\r\n</div>\r\n\r\n<app-footer> </app-footer>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n</div>\r\n<div class=\"grad\"></div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-xs-11 login animated zoomIn\" style=\"text-align: center\">\r\n        <a routerLink=\"/\"><img src=\"assets/images/logo.png\" style=\"margin-top: -150px; width: 100%; max-width: 300px\" /></a>\r\n        <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"model.email\"><br>\r\n        <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"model.password\"><br>\r\n        <input type=\"button\" value=\"Login\" (click)=\"login()\">\r\n        <div style=\"color: white; padding: 15px\">\r\n            Don't have an account? &nbsp; <a style=\"color: #fd582a\" routerLink=\"/signup\">Get Started</a>\r\n        </div>\r\n        <button (click)=\"facebookLogin()\" type=\"button\" class=\"btn btn-fb\" style=\"background:rgb(59,89,152);font-size: 14px;\"><i class=\"fa fa-facebook left\" style=\"font-size: 14px;\"></i> Facebook</button>\r\n        <button (click)=\"gplusLogin()\" type=\"button\" class=\"btn btn-gplus\" style=\"background:rgb(221,75,57);font-size: 14px;\"><i class=\"fa fa-google-plus left\" style=\"font-size: 14px;\"></i> Google +</button>\r\n        <div *ngIf=\"error!=null\" style=\"color:blue\">\r\n            <br> {{error.message}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"2\"> </app-header>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row profile\">\r\n        <div class=\"col-xs-12 col-md-6\" style=\"margin-top:20px; margin-bottom:20px\">\r\n            <div class=\"col-xs-12 contact-form info-panel\">\r\n                <div class=\"header\">General</div>\r\n                <div class=\"col-xs-12\" style=\"padding: 30px\">\r\n                    <span style=\"font-size: 28px\"> {{userName}} </span>\r\n                    <br>\r\n                    <!--<span style=\"color:#fd582a !important; font-size: 16px\"> Joined March 2017 </span>-->\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                    <div style=\"width: 100%; padding-top: 70%;\">\r\n                        <div style=\"position: absolute; width: 100%; height: 100%; left:0; top: 0; bottom:0; right: 0;\">\r\n                            <div style=\"width: 100%; height: 100%; float:left\" [ngStyle]=\"{'background': 'url(' + photoURL + ') center/cover no-repeat'}\">\r\n                                <!--<div style=\"width: 75%; height: 100%; float:left\" [ngStyle]=\"{'background': 'url(' + photoURL + ') center/cover no-repeat'}\">-->\r\n                                <!--<img src=\"{{photoURL}}\" style=\"width: 100%; height: inherit;\">-->\r\n                            </div>\r\n                            <!--<div style=\"width: 25%; float:right; height: 100%\">\r\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%\">\r\n                                    <div>\r\n                                        <span class=\"value\">3</span>\r\n                                        <br>\r\n                                        <span class=\"key\">LEVEL</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%; border-top: 2px solid #c9cdd0\">\r\n                                    <div>\r\n                                        <span class=\"value\">12</span>\r\n                                        <br>\r\n                                        <span class=\"key\">BADGES</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"userInfo-tile\" style=\"height: 33.3%; border-top: 2px solid #c9cdd0\">\r\n                                    <div>\r\n                                        <span class=\"value\">0</span>\r\n                                        <br>\r\n                                        <span class=\"key\">REWARDS</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12\" style=\"margin-top:30px\">\r\n                    <span style=\"color:#283345; font-size: 20px;\">Progress:</span>\r\n                    <div class=\"progress\" style=\"margin-top:10px\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': (percent | async) + '%'}\" style=\"background-color: #283345\">\r\n                            <span>{{percent | async}}%</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"col-xs-12 vertical-center\">\r\n                    <img src=\"assets/images/lock.png \" width=\"45\" style=\"margin-right: 3%\">\r\n                    <span style=\"color:#283345; font-size: 24px\">Unlock your <b>FREE Guide</b></span>\r\n                </div>-->\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\" style=\"margin-top:20px; margin-bottom:20px\">\r\n            <div class=\"col-xs-12 contact-form info-panel\">\r\n                <div class=\"header\">Badges</div>\r\n                <br><br>\r\n                <div class=\"col-xs-3\" *ngFor=\"let badge of allBadges\" style=\"display: inline-block; text-align: center\">\r\n                    <div mdTooltip=\"{{badge.description}}\" mdTooltipPosition=\"below\" [ngStyle]=\"{'background': 'url(assets/images/badges/' + (badge.enabled ? badge.image_e:badge.image_d) + ') center/cover no-repeat'}\" style=\"width: 100%; padding-top:100%\">\r\n                    </div>\r\n                    <h6 style=\"height:40px\"> {{badge.name}} </h6>\r\n                </div>\r\n                <!--<img *ngFor=\"let badge of allBadges\" src=\"assets/images/badges/{{badge.enabled ? badge.image_e:badge.image_d}}\" style=\"width: 20%; height: 30%; padding:5%\">-->\r\n                <br><br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-footer> </app-footer>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n</div>\r\n<div class=\"grad\"></div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-xs-11 login animated fadeInDown\" style=\"text-align: center\">\r\n        <a routerLink=\"/\"><img src=\"assets/images/logo.png\" style=\"margin-top: -150px; width: 100%; max-width: 300px\" /></a>\r\n        <input type=\"text\" placeholder=\"first name\" name=\"firstname\" [(ngModel)]=\"model.firstname\"><br>\r\n        <input type=\"text\" placeholder=\"last name\" name=\"lastname\" [(ngModel)]=\"model.lastname\"><br>\r\n        <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"model.email\"><br>\r\n        <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"model.password\"><br>\r\n        <input type=\"button\" value=\"Signup\" (click)=\"signup()\">\r\n        <div style=\"color: white; padding: 15px\">\r\n            I already have an account. &nbsp; <a style=\"color: #fd582a\" routerLink=\"/login\">Cancel</a>\r\n        </div>\r\n        <div *ngIf=\"error!=null\" style=\"color:blue\">\r\n            {{error.message}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<app-header tabIndex=\"3\"> </app-header>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12 col-md-7\">\r\n            <div class=\"col-xs-12\" *ngFor=\"let faqItem of items | async\">\r\n                <app-faq-item [q]=\"faqItem.q\" [a]=\"faqItem.a\"> </app-faq-item>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-5\">\r\n            <div class=\"contact-form\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"subject\">Subject</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Enter subject title\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"message\">Message</label>\r\n                        <textarea class=\"form-control\" id=\"message\" rows=\"4\" cols=\"50\" placeholder=\"Enter message content\"> </textarea>\r\n                    </div>\r\n                    <div class=\"form-group\" style=\"text-align: right\">\r\n                        <button type=\"submit\" class=\"btn btn-default\">Send Message</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<app-footer> </app-footer>"

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(481);


/***/ })

},[957]);
//# sourceMappingURL=main.bundle.js.map