"use strict";
(self["webpackChunkfourseefrontend"] = self["webpackChunkfourseefrontend"] || []).push([["main"],{

/***/ 9230:
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptorProviders": () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/token-storage.service */ 3590);



const TOKEN_HEADER_KEY = 'Authorization';
class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ 8172:
/*!**************************************************!*\
  !*** ./src/app/_services/api-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiServiceService": () => (/* binding */ ApiServiceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage.service */ 3590);





const AUTH_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class ApiServiceService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        console.log(this.tokenStorage.getToken());
    }
    loadCompany() {
        return this.http.post(AUTH_API + 'get/company', httpOptions);
    }
}
ApiServiceService.ɵfac = function ApiServiceService_Factory(t) { return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
ApiServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiServiceService, factory: ApiServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6660:
/*!*************************************************!*\
  !*** ./src/app/_services/auth-guard.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 3590);



class AuthGuardService {
    constructor(router, tokenStorage) {
        this.router = router;
        this.tokenStorage = tokenStorage;
    }
    canActivate(route, state) {
        if (!this.tokenStorage.getToken()) {
            alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigate(["login"]);
            return false;
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });


/***/ }),

/***/ 8368:
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const AUTH_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(email, password, iscms) {
        return this.http.post(AUTH_API + 'login', {
            email,
            password,
            iscms
        }, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3590:
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
    isLogin() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return true;
        }
        return false;
        ;
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_addnewcompany_addnewcompany_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addnewcompany/addnewcompany.component */ 4495);
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/companies/companies.component */ 494);
/* harmony import */ var _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/complaints/complaints.component */ 3575);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/payments/payments.component */ 7985);
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/requests/requests.component */ 7965);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var _components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/subscriptions/subscriptions.component */ 3322);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 1700);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth-guard.service */ 6660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);














const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'companies',
        component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__.CompaniesComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'subscriptions',
        component: _components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_7__.SubscriptionsComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'complaints',
        component: _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_2__.ComplaintsComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'payments',
        component: _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_4__.PaymentsComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'requests',
        component: _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_5__.RequestsComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'addcompany',
        component: _components_addnewcompany_addnewcompany_component__WEBPACK_IMPORTED_MODULE_0__.AddnewcompanyComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    },
    {
        path: 'settings',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent,
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/token-storage.service */ 3590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-http-loader */ 6298);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-nav/header-nav.component */ 1664);







function AppComponent_app_header_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header-nav");
} }
function AppComponent_app_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-sidebar");
} }
class AppComponent {
    constructor(_router, route, tokenStorage) {
        this._router = _router;
        this.route = route;
        this.tokenStorage = tokenStorage;
        this.title = 'fourseefrontend';
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ng-http-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_app_header_nav_1_Template, 1, 0, "app-header-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_app_sidebar_2_Template, 1, 0, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, ng_http_loader__WEBPACK_IMPORTED_MODULE_6__.NgHttpLoaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__.HeaderNavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 1700);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ 9230);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header-nav/header-nav.component */ 1664);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/auth-guard.service */ 6660);
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/companies/companies.component */ 494);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ag-grid-angular */ 4744);
/* harmony import */ var _components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/subscriptions/subscriptions.component */ 3322);
/* harmony import */ var _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/complaints/complaints.component */ 3575);
/* harmony import */ var _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/payments/payments.component */ 7985);
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/requests/requests.component */ 7965);
/* harmony import */ var _components_addnewcompany_addnewcompany_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/addnewcompany/addnewcompany.component */ 4495);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-http-loader */ 6298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.authInterceptorProviders, _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__.AuthGuardService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__.AgGridModule,
        ng_http_loader__WEBPACK_IMPORTED_MODULE_22__.NgHttpLoaderModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__.HeaderNavComponent,
        _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_9__.CompaniesComponent,
        _components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__.SubscriptionsComponent,
        _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_11__.ComplaintsComponent,
        _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_12__.PaymentsComponent,
        _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_13__.RequestsComponent,
        _components_addnewcompany_addnewcompany_component__WEBPACK_IMPORTED_MODULE_14__.AddnewcompanyComponent,
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__.SettingsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__.AgGridModule, ng_http_loader__WEBPACK_IMPORTED_MODULE_22__.NgHttpLoaderModule] }); })();


/***/ }),

/***/ 4495:
/*!*********************************************************************!*\
  !*** ./src/app/components/addnewcompany/addnewcompany.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddnewcompanyComponent": () => (/* binding */ AddnewcompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class AddnewcompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddnewcompanyComponent.ɵfac = function AddnewcompanyComponent_Factory(t) { return new (t || AddnewcompanyComponent)(); };
AddnewcompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddnewcompanyComponent, selectors: [["app-addnewcompany"]], decls: 84, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-auto"], [1, "text-uppercase", "btn", "btn-info"], [1, "col-12", "divider"], [1, "col-8", "custom-form"], [1, "col-12", "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-3", "col-md-12"], [1, "mb-3", "col-md-6"], [1, "col-md-6", "mb-4"], [1, "mr-4", "checkLabel"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox4", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label"], ["type", "password", 1, "form-control"], [1, "mb-3", "col-md-12", "d-flex"], ["type", "submit", 1, "btn", "btn-info", "mr-2", "btn-min-width", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-min-width"], [1, "col-4", "d-flex", "justify-content-end"], [1, "company-img"]], template: function AddnewcompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ADD NEW COMPANIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "form")(14, "div", 2)(15, "div", 11)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15)(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Registered On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14)(32, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Positon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "BRANCHES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16)(47, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Deactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14)(58, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15)(62, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "No of Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15)(66, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Company Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15)(70, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15)(74, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28)(78, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRuZXdjb21wYW55LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 494:
/*!*************************************************************!*\
  !*** ./src/app/components/companies/companies.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesComponent": () => (/* binding */ CompaniesComponent)
/* harmony export */ });
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ 4744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_services/api-service.service */ 8172);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class CompaniesComponent {
    constructor(_authservive) {
        this._authservive = _authservive;
        this.columnDefs = [
            { field: 'name', headerName: 'COMPANY NAME' },
            { field: 'createdAt', headerName: 'REGISTRATION ON' },
            { field: 'status', headerName: 'STATUS' },
            { field: 'email', headerName: 'EMAIL' },
            { field: 'phone', headerName: 'PHONE' },
            { headerName: 'Action', cellRenderer: this.createHyperLink.bind(this) },
        ];
    }
    ngOnInit() {
        this._authservive.loadCompany().subscribe(data => {
            this.rowData = data.data;
        }, err => {
            console.log(err.error.message);
        });
        // sets 10 rows per page (default is 100)
        this.paginationPageSize = 10;
    }
    createHyperLink(params) {
        if (!params.data) {
            return;
        }
        const spanElement = document.createElement('div');
        spanElement.innerHTML = `<a href="${this.homeUrl}" > <i class="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 29.056 18.78">
    <path id="eye" d="M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z" fill="#446bf5"/>
  </svg></i> </a> 
  <a href="${this.homeUrl}" >
  <i class="ml-2"><svg id="edit-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="15"  viewBox="0 0 20.09 20">
  <g id="Group_984" data-name="Group 984" transform="translate(0 0)">
    <path id="Path_1114" data-name="Path 1114" d="M112.143,7.035l.472-.464.119-.115.057-.057c.025-.025.066-.066.1-.1a1.636,1.636,0,0,0,.328-.578,1.45,1.45,0,0,0,.062-.373l0-.156a.309.309,0,0,0-.025-.119c-.045-.1-.107-.242-.18-.382a1.553,1.553,0,0,0-.23-.345.263.263,0,0,0-.062-.057.141.141,0,0,0-.045-.021.111.111,0,0,0-.074,0c-.041.025-.07.066-.074.168a6.639,6.639,0,0,0-.045.743v.086a.916.916,0,0,1-.176.345,1.368,1.368,0,0,1-.291.238q-.32.222-.64.468c-.431.324-.866.669-1.3,1.034-.874.726-1.756,1.526-2.617,2.355l-3.159,3.024-1.6,1.526-.394.382-.09.086a.041.041,0,0,1-.012,0l-.025,0-1.042.2c-.718.144-1.432.283-2.15.427l-.345.07c.139-.677.283-1.358.423-2.035l.213-1.079.053-.271.025-.135,0-.016V11.88c0-.016,0,.021,0,.012s.008-.033,0-.016,0,.012,0,.016.008-.021.008-.025h0l.012-.012.049-.049.094-.1c.521-.5,1.046-1.005,1.567-1.51,1.645-1.6,3.29-3.216,4.911-4.845q1.212-1.225,2.408-2.461l.3-.312c.049-.053.078-.082.094-.1h.012a2.745,2.745,0,0,1,.345.045.536.536,0,0,1,.111.029h0c-.008,0,.016.008-.012,0h0l.008,0,.025.008.049.021.1.041c.123.053.209.09.324.148a4.215,4.215,0,0,1,.619.386c.886.652,1.391,1.551,1.711,1.317.135-.107.176-.406.045-.837a3.284,3.284,0,0,0-1.022-1.481,5.2,5.2,0,0,0-.825-.574c-.074-.041-.156-.082-.23-.123s-.139-.066-.213-.1l-.049-.025-.041-.021L109.8,1.3c-.049-.021-.1-.037-.148-.053a2.77,2.77,0,0,0-.279-.07c-.086-.016-.172-.033-.25-.045L109,1.111l-.066-.008a1.006,1.006,0,0,0-.111-.008,1.248,1.248,0,0,0-.455.074,1.262,1.262,0,0,0-.361.205.949.949,0,0,0-.078.066l-.057.053-.082.078-.164.156-.328.312c-.87.833-1.735,1.678-2.585,2.531C103.351,5.948,102,7.33,100.652,8.725l-2.018,2.088-.131.135a1.511,1.511,0,0,0-.189.246,1.377,1.377,0,0,0-.127.283,2.379,2.379,0,0,0-.053.234l-.139.714-.283,1.424c-.115.418-.234.837-.349,1.259l-.086.316-.041.16-.021.078a1.42,1.42,0,0,0-.029.168,1.063,1.063,0,0,0,.246.788,1.012,1.012,0,0,0,.365.267,1.141,1.141,0,0,0,.414.09c.041,0,.082,0,.123,0l.066-.008.021,0,.057-.008.041-.008.16-.029L99,16.861l.644-.111,1.292-.234,1.292-.246.324-.062a1.651,1.651,0,0,0,.595-.25c.045-.033.09-.066.127-.1l.066-.057.037-.037.119-.115.234-.23c.624-.619,1.251-1.235,1.875-1.854q1.865-1.871,3.729-3.746L111.2,7.954Zm-3.335-4.558h0c-.012,0-.025,0-.029,0ZM98.157,15.544c-.021,0,0,0,.016,0h.008Z" transform="translate(-93.193 -1.094)" fill="#22215b"/>
    <path id="Path_1115" data-name="Path 1115" d="M16.447,90.759c-.2-.316-.369.094-.5.71a28.042,28.042,0,0,0-.468,3.315c-.053.591-.094,1.2-.123,1.809-.008.152-.012.308-.021.464l-.008.234v.021h0v.012l0,.057c0,.053-.008.041-.012.053a.538.538,0,0,1-.267.332.5.5,0,0,1-.263.053l-.566-.012-1.128-.025-2.26-.049c-1.506-.029-3.015-.053-4.521-.082s-3.019-.037-4.529-.037H1.748l-.07,0c0-.008.021,0,0,0a.472.472,0,0,1-.07-.025.332.332,0,0,1-.111-.1.283.283,0,0,1-.045-.144l-.008-.566c-.008-.755-.021-1.514-.037-2.273.016-.751.029-1.5.045-2.248.033-2.379.057-4.755.049-7.13l0-.849a.245.245,0,0,1,.082-.189.251.251,0,0,1,.09-.053l.053-.012h.168L2.781,84c1.186-.021,2.371-.049,3.553-.094C7.68,83.859,8.8,83.67,8.7,83.3c-.09-.34-1.046-.591-2.425-.628l-3.733-.1-.468-.008-.234,0c-.045,0-.07,0-.127,0s-.127,0-.189.012a1.742,1.742,0,0,0-1.251.775,1.547,1.547,0,0,0-.168.34,1.668,1.668,0,0,0-.094.4l0,.053v.029l0,.057v1.317c.008,2,.033,4,.062,6.006l.045,3,.025,1.5.012.751,0,.373v.094c0,.033,0,.053,0,.107a2.154,2.154,0,0,0,.033.279,1.625,1.625,0,0,0,.886,1.19,1.7,1.7,0,0,0,.533.156l.082.008.021,0H1.76l.041,0,.168.008.336.016.677.029q1.354.055,2.708.086,2.714.062,5.444.057c.911,0,1.822,0,2.728,0l.681,0h.267l.148-.008a2.028,2.028,0,0,0,.583-.148,1.892,1.892,0,0,0,.878-.792,1.933,1.933,0,0,0,.209-.562,1.363,1.363,0,0,0,.025-.181.436.436,0,0,0,0-.062v-.041l0-.082v-.127c0-1.821,0-3.639.021-5.452A2.331,2.331,0,0,0,16.447,90.759Z" transform="translate(0 -79.218)" fill="#22215b"/>
  </g>
</svg></i>
  </a>
  <a href="${this.homeUrl}" ><i class="ml-2"><svg id="delete-svgrepo-com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="12" viewBox="0 0 16.034 19.864">
                                <defs>
                                  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#f8646a"/>
                                    <stop offset="1" stop-color="#e5070f"/>
                                  </linearGradient>
                                </defs>
                                <g id="Group_983" data-name="Group 983" transform="translate(0)">
                                  <g id="Group_982" data-name="Group 982" transform="translate(0)">
                                    <path id="Path_1112" data-name="Path 1112" d="M42.065,9.747l.285-3.422h.5a.684.684,0,0,0,.684-.684V4.393A2.137,2.137,0,0,0,41.4,2.259H39.02V1.943A1.945,1.945,0,0,0,37.077,0H35.083A1.945,1.945,0,0,0,33.14,1.943v.316H30.761a2.137,2.137,0,0,0-2.134,2.134V5.641a.684.684,0,0,0,.684.684h.5l.929,11.151a2.619,2.619,0,0,0,2.595,2.388h5.492a2.619,2.619,0,0,0,2.59-2.34,4.068,4.068,0,0,0,.649-7.776Zm-7.558-7.8a.576.576,0,0,1,.575-.575h1.994a.576.576,0,0,1,.576.575v.316H34.507ZM29.994,4.957V4.393a.768.768,0,0,1,.767-.767H41.4a.768.768,0,0,1,.767.767v.564ZM38.826,18.5H33.334A1.244,1.244,0,0,1,32.1,17.362l-.92-11.037h9.8l-.262,3.148c-.041,0-.082,0-.123,0a4.068,4.068,0,0,0-.57,8.1A1.244,1.244,0,0,1,38.826,18.5Zm1.767-2.256a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,40.593,16.24Z" transform="translate(-28.627)" fill="url(#linear-gradient)"/>
                                    <path id="Path_1113" data-name="Path 1113" d="M183.226,177.15l.645-.645a.684.684,0,0,0-.967-.967l-.645.645-.645-.645a.684.684,0,1,0-.967.967l.645.645-.645.645a.684.684,0,0,0,.967.967l.645-.645.645.645a.684.684,0,0,0,.967-.967Z" transform="translate(-170.293 -163.611)" fill="url(#linear-gradient)"/>
                                  </g>
                                </g>
                              </svg>
                              </i></a>
                         
  `;
        spanElement.addEventListener('click', ($event) => {
            $event.preventDefault();
            // The below code is used to navigate from one page to another page in angular. you can change it          // according to your requirement.
            //this.router.navigate([this.homeUrl]);
        });
        return spanElement;
    }
    get homeUrl() {
        return 'home';
    }
    // Example load data from sever
    onGridReady(params) {
        this._authservive.loadCompany().subscribe(data => {
            //this.rowData = data.data
            console.log(this.rowData);
        }, err => {
            console.log(err.error.message);
        });
    }
    // Example of consuming Grid Event
    onCellClicked(e) {
        console.log('cellClicked', e);
    }
    // Example using Grid's API
    clearSelection() {
        this.agGrid.api.deselectAll();
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_0__.ApiServiceService)); };
CompaniesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], viewQuery: function CompaniesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 48, vars: 5, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-auto"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], [1, "btn", "btn-success", 3, "routerLink"], [1, "col-12", "divider"], [1, "col-12", "ag-grid-height"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", 3, "rowData", "pagination", "paginationPageSize", "columnDefs"], [1, "col-12", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", 1, "page-link", "active"], [1, "text-uppercase", "btn", "btn-info"], ["id", "export-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 25.992 29.085"], ["id", "Group_998", "data-name", "Group 998"], ["id", "Path_1116", "data-name", "Path 1116", "d", "M39.605,20.336a.729.729,0,0,0,.772-.095l11.468-9.5a.725.725,0,0,0,.261-.558.7.7,0,0,0-.267-.558L40.377.167A.726.726,0,0,0,39.19.731V5.7C26.042,6.174,26.1,16.145,26.119,20.977v.576a.718.718,0,0,0,.54.7.653.653,0,0,0,.184.024.74.74,0,0,0,.635-.368c3.882-6.838,7.075-7.17,11.711-7.188v4.956A.734.734,0,0,0,39.605,20.336Zm-12.02-1.347a15.237,15.237,0,0,1,1.5-6.743C30.91,8.862,34.453,7.189,39.92,7.135a.726.726,0,0,0,.718-.724V2.268l9.6,7.918-9.592,7.942V13.991a.738.738,0,0,0-.214-.516.727.727,0,0,0-.516-.214C34.827,13.267,31.319,13.569,27.586,18.988Z", "transform", "translate(-26.114 0)", "fill", "#fff"], ["id", "Path_1117", "data-name", "Path 1117", "d", "M51.9,253.654V240.239a.73.73,0,0,0-1.46,0v12.684H27.515v-2.469a.73.73,0,1,0-1.46,0v3.193a.73.73,0,0,0,.73.73H51.174A.728.728,0,0,0,51.9,253.654Z", "transform", "translate(-26.055 -225.293)", "fill", "#fff"]], template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Deactivated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "ADD NEW +");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ag-grid-angular", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17)(23, "div", 18)(24, "div", 19)(25, "ul", 20)(26, "li", 21)(27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 21)(30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 21)(33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 21)(36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 21)(39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 24)(42, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "svg", 25)(44, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 27)(46, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/addcompany");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowData", ctx.rowData)("pagination", true)("paginationPageSize", ctx.paginationPageSize)("columnDefs", ctx.columnDefs);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW5pZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3575:
/*!***************************************************************!*\
  !*** ./src/app/components/complaints/complaints.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsComponent": () => (/* binding */ ComplaintsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ComplaintsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComplaintsComponent.ɵfac = function ComplaintsComponent_Factory(t) { return new (t || ComplaintsComponent)(); };
ComplaintsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComplaintsComponent, selectors: [["app-complaints"]], decls: 311, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12", "mt-1"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-12", "divider"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "gradient", "text-white", "text-uppercase"], [1, "text-center"], [1, "actions", "text-right"], ["width", "400"], [1, "d-flex", "align-items-center", "justify-content-end", "text-right"], [1, "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 29.056 18.78"], ["id", "eye", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z", "fill", "#446bf5"], ["id", "edit-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "15", "viewBox", "0 0 20.09 20"], ["id", "Group_984", "data-name", "Group 984", "transform", "translate(0 0)"], ["id", "Path_1114", "data-name", "Path 1114", "d", "M112.143,7.035l.472-.464.119-.115.057-.057c.025-.025.066-.066.1-.1a1.636,1.636,0,0,0,.328-.578,1.45,1.45,0,0,0,.062-.373l0-.156a.309.309,0,0,0-.025-.119c-.045-.1-.107-.242-.18-.382a1.553,1.553,0,0,0-.23-.345.263.263,0,0,0-.062-.057.141.141,0,0,0-.045-.021.111.111,0,0,0-.074,0c-.041.025-.07.066-.074.168a6.639,6.639,0,0,0-.045.743v.086a.916.916,0,0,1-.176.345,1.368,1.368,0,0,1-.291.238q-.32.222-.64.468c-.431.324-.866.669-1.3,1.034-.874.726-1.756,1.526-2.617,2.355l-3.159,3.024-1.6,1.526-.394.382-.09.086a.041.041,0,0,1-.012,0l-.025,0-1.042.2c-.718.144-1.432.283-2.15.427l-.345.07c.139-.677.283-1.358.423-2.035l.213-1.079.053-.271.025-.135,0-.016V11.88c0-.016,0,.021,0,.012s.008-.033,0-.016,0,.012,0,.016.008-.021.008-.025h0l.012-.012.049-.049.094-.1c.521-.5,1.046-1.005,1.567-1.51,1.645-1.6,3.29-3.216,4.911-4.845q1.212-1.225,2.408-2.461l.3-.312c.049-.053.078-.082.094-.1h.012a2.745,2.745,0,0,1,.345.045.536.536,0,0,1,.111.029h0c-.008,0,.016.008-.012,0h0l.008,0,.025.008.049.021.1.041c.123.053.209.09.324.148a4.215,4.215,0,0,1,.619.386c.886.652,1.391,1.551,1.711,1.317.135-.107.176-.406.045-.837a3.284,3.284,0,0,0-1.022-1.481,5.2,5.2,0,0,0-.825-.574c-.074-.041-.156-.082-.23-.123s-.139-.066-.213-.1l-.049-.025-.041-.021L109.8,1.3c-.049-.021-.1-.037-.148-.053a2.77,2.77,0,0,0-.279-.07c-.086-.016-.172-.033-.25-.045L109,1.111l-.066-.008a1.006,1.006,0,0,0-.111-.008,1.248,1.248,0,0,0-.455.074,1.262,1.262,0,0,0-.361.205.949.949,0,0,0-.078.066l-.057.053-.082.078-.164.156-.328.312c-.87.833-1.735,1.678-2.585,2.531C103.351,5.948,102,7.33,100.652,8.725l-2.018,2.088-.131.135a1.511,1.511,0,0,0-.189.246,1.377,1.377,0,0,0-.127.283,2.379,2.379,0,0,0-.053.234l-.139.714-.283,1.424c-.115.418-.234.837-.349,1.259l-.086.316-.041.16-.021.078a1.42,1.42,0,0,0-.029.168,1.063,1.063,0,0,0,.246.788,1.012,1.012,0,0,0,.365.267,1.141,1.141,0,0,0,.414.09c.041,0,.082,0,.123,0l.066-.008.021,0,.057-.008.041-.008.16-.029L99,16.861l.644-.111,1.292-.234,1.292-.246.324-.062a1.651,1.651,0,0,0,.595-.25c.045-.033.09-.066.127-.1l.066-.057.037-.037.119-.115.234-.23c.624-.619,1.251-1.235,1.875-1.854q1.865-1.871,3.729-3.746L111.2,7.954Zm-3.335-4.558h0c-.012,0-.025,0-.029,0ZM98.157,15.544c-.021,0,0,0,.016,0h.008Z", "transform", "translate(-93.193 -1.094)", "fill", "#22215b"], ["id", "Path_1115", "data-name", "Path 1115", "d", "M16.447,90.759c-.2-.316-.369.094-.5.71a28.042,28.042,0,0,0-.468,3.315c-.053.591-.094,1.2-.123,1.809-.008.152-.012.308-.021.464l-.008.234v.021h0v.012l0,.057c0,.053-.008.041-.012.053a.538.538,0,0,1-.267.332.5.5,0,0,1-.263.053l-.566-.012-1.128-.025-2.26-.049c-1.506-.029-3.015-.053-4.521-.082s-3.019-.037-4.529-.037H1.748l-.07,0c0-.008.021,0,0,0a.472.472,0,0,1-.07-.025.332.332,0,0,1-.111-.1.283.283,0,0,1-.045-.144l-.008-.566c-.008-.755-.021-1.514-.037-2.273.016-.751.029-1.5.045-2.248.033-2.379.057-4.755.049-7.13l0-.849a.245.245,0,0,1,.082-.189.251.251,0,0,1,.09-.053l.053-.012h.168L2.781,84c1.186-.021,2.371-.049,3.553-.094C7.68,83.859,8.8,83.67,8.7,83.3c-.09-.34-1.046-.591-2.425-.628l-3.733-.1-.468-.008-.234,0c-.045,0-.07,0-.127,0s-.127,0-.189.012a1.742,1.742,0,0,0-1.251.775,1.547,1.547,0,0,0-.168.34,1.668,1.668,0,0,0-.094.4l0,.053v.029l0,.057v1.317c.008,2,.033,4,.062,6.006l.045,3,.025,1.5.012.751,0,.373v.094c0,.033,0,.053,0,.107a2.154,2.154,0,0,0,.033.279,1.625,1.625,0,0,0,.886,1.19,1.7,1.7,0,0,0,.533.156l.082.008.021,0H1.76l.041,0,.168.008.336.016.677.029q1.354.055,2.708.086,2.714.062,5.444.057c.911,0,1.822,0,2.728,0l.681,0h.267l.148-.008a2.028,2.028,0,0,0,.583-.148,1.892,1.892,0,0,0,.878-.792,1.933,1.933,0,0,0,.209-.562,1.363,1.363,0,0,0,.025-.181.436.436,0,0,0,0-.062v-.041l0-.082v-.127c0-1.821,0-3.639.021-5.452A2.331,2.331,0,0,0,16.447,90.759Z", "transform", "translate(0 -79.218)", "fill", "#22215b"], ["id", "delete-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "12", "viewBox", "0 0 16.034 19.864"], ["id", "linear-gradient", "x1", "0.5", "x2", "0.5", "y2", "1", "gradientUnits", "objectBoundingBox"], ["offset", "0", "stop-color", "#f8646a"], ["offset", "1", "stop-color", "#e5070f"], ["id", "Group_983", "data-name", "Group 983", "transform", "translate(0)"], ["id", "Group_982", "data-name", "Group 982", "transform", "translate(0)"], ["id", "Path_1112", "data-name", "Path 1112", "d", "M42.065,9.747l.285-3.422h.5a.684.684,0,0,0,.684-.684V4.393A2.137,2.137,0,0,0,41.4,2.259H39.02V1.943A1.945,1.945,0,0,0,37.077,0H35.083A1.945,1.945,0,0,0,33.14,1.943v.316H30.761a2.137,2.137,0,0,0-2.134,2.134V5.641a.684.684,0,0,0,.684.684h.5l.929,11.151a2.619,2.619,0,0,0,2.595,2.388h5.492a2.619,2.619,0,0,0,2.59-2.34,4.068,4.068,0,0,0,.649-7.776Zm-7.558-7.8a.576.576,0,0,1,.575-.575h1.994a.576.576,0,0,1,.576.575v.316H34.507ZM29.994,4.957V4.393a.768.768,0,0,1,.767-.767H41.4a.768.768,0,0,1,.767.767v.564ZM38.826,18.5H33.334A1.244,1.244,0,0,1,32.1,17.362l-.92-11.037h9.8l-.262,3.148c-.041,0-.082,0-.123,0a4.068,4.068,0,0,0-.57,8.1A1.244,1.244,0,0,1,38.826,18.5Zm1.767-2.256a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,40.593,16.24Z", "transform", "translate(-28.627)", "fill", "url(#linear-gradient)"], ["id", "Path_1113", "data-name", "Path 1113", "d", "M183.226,177.15l.645-.645a.684.684,0,0,0-.967-.967l-.645.645-.645-.645a.684.684,0,1,0-.967.967l.645.645-.645.645a.684.684,0,0,0,.967.967l.645-.645.645.645a.684.684,0,0,0,.967-.967Z", "transform", "translate(-170.293 -163.611)", "fill", "url(#linear-gradient)"], [1, "col-12", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", 1, "page-link", "active"], [1, "text-uppercase", "btn", "btn-info"], ["id", "export-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 25.992 29.085"], ["id", "Group_998", "data-name", "Group 998"], ["id", "Path_1116", "data-name", "Path 1116", "d", "M39.605,20.336a.729.729,0,0,0,.772-.095l11.468-9.5a.725.725,0,0,0,.261-.558.7.7,0,0,0-.267-.558L40.377.167A.726.726,0,0,0,39.19.731V5.7C26.042,6.174,26.1,16.145,26.119,20.977v.576a.718.718,0,0,0,.54.7.653.653,0,0,0,.184.024.74.74,0,0,0,.635-.368c3.882-6.838,7.075-7.17,11.711-7.188v4.956A.734.734,0,0,0,39.605,20.336Zm-12.02-1.347a15.237,15.237,0,0,1,1.5-6.743C30.91,8.862,34.453,7.189,39.92,7.135a.726.726,0,0,0,.718-.724V2.268l9.6,7.918-9.592,7.942V13.991a.738.738,0,0,0-.214-.516.727.727,0,0,0-.516-.214C34.827,13.267,31.319,13.569,27.586,18.988Z", "transform", "translate(-26.114 0)", "fill", "#fff"], ["id", "Path_1117", "data-name", "Path 1117", "d", "M51.9,253.654V240.239a.73.73,0,0,0-1.46,0v12.684H27.515v-2.469a.73.73,0,1,0-1.46,0v3.193a.73.73,0,0,0,.73.73H51.174A.728.728,0,0,0,51.9,253.654Z", "transform", "translate(-26.055 -225.293)", "fill", "#fff"]], template: function ComplaintsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Complaints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead", 10)(12, "tr")(13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody")(24, "tr")(25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td")(34, "div", 14)(35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 18)(40, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 20)(42, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 22)(45, "defs")(46, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "stop", 24)(48, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 26)(50, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 28)(52, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr")(54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td")(63, "div", 14)(64, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 18)(69, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 20)(71, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 22)(74, "defs")(75, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "stop", 24)(77, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 26)(79, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 28)(81, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr")(83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td")(92, "div", 14)(93, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "svg", 18)(98, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 20)(100, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 22)(103, "defs")(104, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "stop", 24)(106, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "g", 26)(108, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 28)(110, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr")(112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td")(121, "div", 14)(122, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 18)(127, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 20)(129, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "svg", 22)(132, "defs")(133, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "stop", 24)(135, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "g", 26)(137, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 28)(139, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr")(141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td")(150, "div", 14)(151, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "svg", 18)(156, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 20)(158, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "svg", 22)(161, "defs")(162, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "stop", 24)(164, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "g", 26)(166, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 28)(168, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr")(170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td")(179, "div", 14)(180, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 18)(185, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 20)(187, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "svg", 22)(190, "defs")(191, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "stop", 24)(193, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "g", 26)(195, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 28)(197, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr")(199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td")(208, "div", 14)(209, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "svg", 18)(214, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 20)(216, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "svg", 22)(219, "defs")(220, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "stop", 24)(222, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "g", 26)(224, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 28)(226, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr")(228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td")(237, "div", 14)(238, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "svg", 18)(243, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 20)(245, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "svg", 22)(248, "defs")(249, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "stop", 24)(251, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "g", 26)(253, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 28)(255, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr")(257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td")(266, "div", 14)(267, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "svg", 18)(272, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 20)(274, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "svg", 22)(277, "defs")(278, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "stop", 24)(280, "stop", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "g", 26)(282, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 28)(284, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 30)(286, "div", 31)(287, "div", 32)(288, "ul", 33)(289, "li", 34)(290, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 34)(293, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li", 34)(296, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li", 34)(299, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li", 34)(302, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "button", 37)(305, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "svg", 38)(307, "g", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "path", 40)(309, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGFpbnRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 169, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-md-3", "col-6"], [1, "perpal", "text-center", "box", "py-3", "widgets"], [1, "widgets-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "viewBox", "0 0 29.986 43.5"], ["id", "dollar-svgrepo-com", "transform", "translate(-75.337)"], ["id", "Path_9237", "data-name", "Path 9237", "d", "M187.138,67.6h-2.691a5.216,5.216,0,0,0,3.861,5.03v1.128H191V72.633a5.215,5.215,0,0,0,3.861-5.03,4.887,4.887,0,0,0-3.637-4.966L191,62.567V57.377A2.516,2.516,0,0,1,192.17,59.5h2.691A5.216,5.216,0,0,0,191,54.472V53.344h-2.691v1.128a5.215,5.215,0,0,0-3.861,5.03,4.887,4.887,0,0,0,3.637,4.966l.224.071v5.189A2.516,2.516,0,0,1,187.138,67.6Zm5.032,0A2.516,2.516,0,0,1,191,69.728V65.442A2.159,2.159,0,0,1,192.17,67.6Zm-5.032-8.1a2.516,2.516,0,0,1,1.171-2.125v4.286A2.158,2.158,0,0,1,187.138,59.5Z", "transform", "translate(-99.324 -48.56)", "fill", "#fff"], ["id", "Path_9238", "data-name", "Path 9238", "d", "M90.33,0A15.01,15.01,0,0,0,75.337,14.993V28.507a14.993,14.993,0,0,0,29.986,0V14.993A15.01,15.01,0,0,0,90.33,0Zm0,2.691a12.3,12.3,0,1,1-12.3,12.3A12.316,12.316,0,0,1,90.33,2.691Zm12.132,21.1a12.3,12.3,0,0,1-24.264,0,14.977,14.977,0,0,0,24.264,0ZM90.33,40.809A12.322,12.322,0,0,1,78.2,30.548a14.977,14.977,0,0,0,24.264,0A12.322,12.322,0,0,1,90.33,40.809Z", "fill", "#fff"], [1, "text-white", "py-3"], [1, "btn", "btn-secondary"], [1, "green", "text-center", "box", "py-3", "widgets"], [1, "weight-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "viewBox", "0 0 24.135 33.669"], ["id", "bank-terminal-svgrepo-com", "transform", "translate(-0.1)"], ["id", "Group_1285", "data-name", "Group 1285", "transform", "translate(0.1)", 1, "icons"], ["id", "Path_9232", "data-name", "Path 9232", "d", "M22.8,6.944H19.5V1.435A1.439,1.439,0,0,0,18.068,0H6.117A1.439,1.439,0,0,0,4.681,1.435V6.951H1.535A1.439,1.439,0,0,0,.1,8.386V32.233a1.439,1.439,0,0,0,1.435,1.435h21.2a1.548,1.548,0,0,0,1.5-1.435V8.379A1.444,1.444,0,0,0,22.8,6.944ZM7.545,2.8h9.162V14.753H7.545ZM21.364,30.859H2.964V9.808H4.681v5.034a1.432,1.432,0,0,0,.5,2.775H19a1.432,1.432,0,0,0,.5-2.775V9.808h1.861V30.859Z", "transform", "translate(-0.1)", "fill", "#fff"], ["id", "Path_9233", "data-name", "Path 9233", "d", "M86.148,287.7h-.213a1.435,1.435,0,0,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-78.703 -267.94)", "fill", "#fff"], ["id", "Path_9234", "data-name", "Path 9234", "d", "M222.748,287.7h-.213a1.435,1.435,0,1,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-205.921 -267.94)", "fill", "#fff"], ["id", "Path_9235", "data-name", "Path 9235", "d", "M86.148,359.7h-.213a1.435,1.435,0,0,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-78.703 -334.995)", "fill", "#fff"], ["id", "Path_9236", "data-name", "Path 9236", "d", "M222.748,359.7h-.213a1.435,1.435,0,1,0,0,2.871h.213a1.435,1.435,0,1,0,0-2.871Z", "transform", "translate(-205.921 -334.995)", "fill", "#fff"], [1, "btn", "btn-secondary", "green", "text-green"], [1, "pitch", "text-center", "box", "py-3", "widgets"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "viewBox", "0 0 35.981 35.98"], ["id", "Group_67", "data-name", "Group 67", "transform", "translate(-597.176 -294.989)"], ["id", "Path_82", "data-name", "Path 82", "d", "M669.99,309.567q0-4.644,0-9.288c0-3.036,1.758-4.789,4.788-4.79q6.181,0,12.361,0a4.337,4.337,0,0,1,4.669,4.694q0,6.249,0,12.5a4.33,4.33,0,0,1-4.61,4.623c-3.62.013-7.239-.006-10.859.019a1.959,1.959,0,0,0-1.05.346c-1.133.8-2.232,1.65-3.338,2.489-.414.314-.836.585-1.372.318s-.592-.759-.592-1.281Q669.993,314.382,669.99,309.567Zm2.054,7.95c.876-.657,1.617-1.181,2.321-1.751a2.33,2.33,0,0,1,1.57-.52c3.687.016,7.374.01,11.061.007,1.913,0,2.76-.844,2.76-2.735q0-6.145,0-12.29c0-1.825-.853-2.685-2.664-2.686q-6.077,0-12.154,0c-2.1,0-2.893.786-2.894,2.876q0,8.125,0,16.25Z", "transform", "translate(-59.154)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_83", "data-name", "Path 83", "d", "M600.8,395.655c-2.558-2.912-2.691-5.953-.377-8.186a5.446,5.446,0,0,1,7.479-.056,5.512,5.512,0,0,1-.333,8.237,6.8,6.8,0,0,1,2.737,3.376,11.987,11.987,0,0,1,.344,4.592.892.892,0,0,1-1,.83q-5.461.013-10.922,0a.909.909,0,0,1-1.013-.826c-.07-1.766-.222-3.55.611-5.222A7.055,7.055,0,0,1,600.8,395.655Zm-1.04,6.707h8.832c.226-2.013-.228-3.726-1.98-4.856a4.216,4.216,0,0,0-4.656-.117C600.074,398.483,599.549,400.244,599.759,402.362Zm7.774-10.992A3.349,3.349,0,0,0,604.216,388a3.363,3.363,0,1,0,3.318,3.368Z", "transform", "translate(0 -73.984)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_84", "data-name", "Path 84", "d", "M712.033,329.586c0-1.208.139-1.378,1.291-1.577a1.728,1.728,0,0,0,1.443-1.732,1.754,1.754,0,0,0-1.609-1.664,1.713,1.713,0,0,0-1.789,1.447c-.027.157-.037.318-.076.471a1.009,1.009,0,0,1-2-.224,3.758,3.758,0,0,1,7.488-.46,3.815,3.815,0,0,1-2.231,3.941.912.912,0,0,0-.466.473c-.175.61-.507.963-1.167.9-.572-.05-.865-.447-.885-1.168C712.03,329.859,712.033,329.722,712.033,329.586Z", "transform", "translate(-91.298 -22.128)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_85", "data-name", "Path 85", "d", "M724.386,377.906a.989.989,0,0,1,1.041-1.011,1.034,1.034,0,0,1,.989,1.015,1.021,1.021,0,0,1-1.06,1A.974.974,0,0,1,724.386,377.906Z", "transform", "translate(-103.641 -66.575)", "fill", "#fff", "stroke", "#fff"], [1, "btn", "btn-secondary", "text-pitch"], [1, "blue", "text-center", "box", "py-3", "widgets"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "viewBox", "0 0 35.604 35.603"], ["id", "ebb8a67d1fc7fb386655ef5de045512d", "transform", "translate(-9.987 -9.998)"], ["id", "Path_9239", "data-name", "Path 9239", "d", "M40.346,15.186h0a18.055,18.055,0,0,1,1.686,1.947A17.79,17.79,0,0,1,42.777,37.4a1.273,1.273,0,1,1-2.14-1.38,15.057,15.057,0,0,0,2.252-6.052,15.264,15.264,0,1,0-7.2,10.88,1.271,1.271,0,0,1,1.319,2.172,17.794,17.794,0,1,1,3.335-27.834Z", "transform", "translate(0 0)", "fill", "#fff"], ["id", "Path_9240", "data-name", "Path 9240", "d", "M273.9,293.157a1.119,1.119,0,1,0,0-1.583,1.118,1.118,0,0,0,0,1.583Zm4.1,0a1.119,1.119,0,1,0,0-1.583,1.118,1.118,0,0,0,0,1.583Zm3.772-2.223V293.8a2.574,2.574,0,0,1-2.782,2.294h-3.927l-4.47,2.98c-1.536,0,1.49-2.98.745-4.47v-3.671a2.574,2.574,0,0,1,2.782-2.294h4.87a2.574,2.574,0,0,1,2.782,2.294Zm-4.984,7.089a5.073,5.073,0,0,1,.745,3.241,3.211,3.211,0,0,1-1.574,2.374l-5.51,3.182a3.1,3.1,0,0,1-1.562.425,4.5,4.5,0,0,1-3.713-2.513l-5.249-9.08a5.078,5.078,0,0,1-.745-3.241,3.211,3.211,0,0,1,1.574-2.374l5.51-3.182c1.768-1.023,3.991-.143,5.279,2.088l-1.292.745c-.871-1.507-2.2-2.143-3.241-1.541l-5.51,3.182a1.726,1.726,0,0,0-.846,1.3,3.589,3.589,0,0,0,.56,2.277l5.245,9.08c.871,1.507,2.2,2.138,3.241,1.541l5.51-3.182a1.726,1.726,0,0,0,.846-1.3,3.583,3.583,0,0,0-.56-2.277l1.292-.745Zm-2.551,1.309c.206.358.227.728.051.834l-5.809,3.355c-.177.1-.488-.1-.695-.459s-.227-.728-.051-.833l5.809-3.355c.177-.1.488.105.695.459Zm-4.727-3.06c.206.358.286.695.177.758l-3.519,2.033c-.109.063-.362-.177-.568-.535s-.286-.695-.177-.758l3.519-2.033c.109-.059.362.181.568.535Zm-.493-5.136c.206.358.227.728.051.833l-5.809,3.355c-.177.1-.488-.1-.695-.459s-.227-.728-.051-.833l5.809-3.355c.177-.105.488.1.695.459Z", "transform", "translate(-241.652 -267.817)", "fill", "#fff"], [1, "btn", "btn-secondary", "text-blue"], [1, "col-12", "mt-5"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-3"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "gradient", "text-white", "text-uppercase"], [1, "text-center"], [1, "actions", "text-right"], [1, "d-flex", "align-items-center", "justify-content-end", "text-right"], [1, "mr-2"], ["xmlns", "http://www.w3.org/2000/svg ", "width", "29.056 ", "height", "18.78 ", "viewBox", "0 0 29.056 18.78 "], ["id", "eye ", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z\n                                ", "fill", "#446bf5 "], ["id", "eye ", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z\n                              ", "fill", "#446bf5 "], ["id", "eye ", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z\n                            ", "fill", "#446bf5 "], [1, "col-12", "text-center"], [1, "text-uppercase", "btn", "btn-success"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6)(7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8)(9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$250K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TOTAL EARNING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "div", 12)(16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 14)(18, "g", 15)(19, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17)(21, "path", 18)(22, "path", 19)(23, "path", 20)(24, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TOTAL COMPANIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3)(30, "div", 23)(31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 24)(33, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 26)(35, "path", 27)(36, "path", 28)(37, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "135");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "OPEN REQUESTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3)(43, "div", 31)(44, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 32)(46, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 34)(48, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "TOTAL COMPLAINTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2)(54, "div", 37)(55, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Recent payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39)(58, "table", 40)(59, "thead", 41)(60, "tr")(61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Vendor name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody")(70, "tr")(71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 44)(78, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr")(83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 44)(90, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr")(95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 44)(102, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr")(107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 44)(114, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr")(119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 44)(126, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr")(131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 44)(138, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr")(143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 44)(150, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr")(155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 44)(162, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "View Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 50)(167, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1664:
/*!***************************************************************!*\
  !*** ./src/app/components/header-nav/header-nav.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNavComponent": () => (/* binding */ HeaderNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_services/token-storage.service */ 3590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class HeaderNavComponent {
    constructor(tokenStorage, _router) {
        this.tokenStorage = tokenStorage;
        this._router = _router;
    }
    ngOnInit() {
    }
    logOut(event) {
        event.preventDefault();
        this.tokenStorage.signOut();
        this._router.navigate(['/login'])
            .then(() => {
            window.location.reload();
        });
    }
}
HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) { return new (t || HeaderNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HeaderNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderNavComponent, selectors: [["app-header-nav"]], decls: 21, vars: 0, consts: [[1, "main-header", "ml-admin"], [1, "user", "text-uppercase", "d-flex", "align-items-center"], [1, "profile-image", "mr-2"], ["src", "/assets/profile.jpg", "alt", "profile"], [1, "navbar-icons", "ml-auto"], ["href", "#"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 24.439 26"], ["id", "Group_53", "data-name", "Group 53", "transform", "translate(-1726.005 -43.169)"], ["id", "notifications", "d", "M734.059,1825.2v3.075c-3.656.544-6.489,4.044-6.489,8.276v4.137a6.159,6.159,0,0,1-2.528,5.484l-1.992,1.668h8.343a3.67,3.67,0,0,0,7.314,0h8.343l-1.993-1.668a6.16,6.16,0,0,1-2.527-5.484v-4.137c0-4.233-2.833-7.732-6.49-8.276V1825.2Zm.991,24.1a1.76,1.76,0,0,1-1.669-1.458h3.34A1.76,1.76,0,0,1,735.05,1849.3Zm5.5-12.747v4.137a7.908,7.908,0,0,0,1.57,5.25H727.981a7.907,7.907,0,0,0,1.57-5.25v-4.137c0-3.56,2.466-6.457,5.5-6.457S740.548,1832.995,740.548,1836.555Z", "transform", "translate(1003.394 -1782.035)", "fill", "#024293"], ["id", "Ellipse_10", "data-name", "Ellipse 10", "cx", "5", "cy", "5", "r", "5", "transform", "translate(1726.005 45)", "fill", "#024293"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 26 25.999"], ["id", "search", "d", "M469.555,1036.806a9.08,9.08,0,1,0-1.365-1.366l-9.879,9.879,1.366,1.365Zm5.689-14.189a7.135,7.135,0,1,1-7.134,7.134A7.143,7.143,0,0,1,475.243,1022.617Z", "transform", "translate(-458.31 -1020.686)", "fill", "#024293"], ["href", "#", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 23.154 23"], ["id", "profile", "d", "M0,22l.165-1.15c.64-4.427,5.3-7.766,10.834-7.766s10.194,3.339,10.835,7.766L22,22Zm2.477-2.014H19.523C18.444,17.131,15.012,15.1,11,15.1S3.557,17.131,2.477,19.986ZM4.83,6.109a6.17,6.17,0,0,1,12.34,0,6.17,6.17,0,0,1-12.34,0Zm2.034,0A4.136,4.136,0,1,0,11,2.014,4.12,4.12,0,0,0,6.864,6.109Z", "transform", "translate(0.577 0.5)", "fill", "#024293", "stroke", "rgba(0,0,0,0)", "stroke-width", "1"]], template: function HeaderNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Hi MR Shuresh L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "ul")(7, "li")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 6)(10, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 8)(12, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderNavComponent_Template_a_click_18_listener($event) { return ctx.logOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItbmF2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7985:
/*!***********************************************************!*\
  !*** ./src/app/components/payments/payments.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsComponent": () => (/* binding */ PaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PaymentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(); };
PaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 226, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12", "mt-1"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-12", "divider"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "gradient", "text-white", "text-uppercase"], [1, "text-center"], [1, "actions", "text-right"], [1, "d-flex", "align-items-center", "justify-content-end", "text-right"], [1, "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 29.056 18.78"], ["id", "eye", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z", "fill", "#446bf5"], ["id", "edit-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "15", "viewBox", "0 0 20.09 20"], ["id", "Group_984", "data-name", "Group 984", "transform", "translate(0 0)"], ["id", "Path_1114", "data-name", "Path 1114", "d", "M112.143,7.035l.472-.464.119-.115.057-.057c.025-.025.066-.066.1-.1a1.636,1.636,0,0,0,.328-.578,1.45,1.45,0,0,0,.062-.373l0-.156a.309.309,0,0,0-.025-.119c-.045-.1-.107-.242-.18-.382a1.553,1.553,0,0,0-.23-.345.263.263,0,0,0-.062-.057.141.141,0,0,0-.045-.021.111.111,0,0,0-.074,0c-.041.025-.07.066-.074.168a6.639,6.639,0,0,0-.045.743v.086a.916.916,0,0,1-.176.345,1.368,1.368,0,0,1-.291.238q-.32.222-.64.468c-.431.324-.866.669-1.3,1.034-.874.726-1.756,1.526-2.617,2.355l-3.159,3.024-1.6,1.526-.394.382-.09.086a.041.041,0,0,1-.012,0l-.025,0-1.042.2c-.718.144-1.432.283-2.15.427l-.345.07c.139-.677.283-1.358.423-2.035l.213-1.079.053-.271.025-.135,0-.016V11.88c0-.016,0,.021,0,.012s.008-.033,0-.016,0,.012,0,.016.008-.021.008-.025h0l.012-.012.049-.049.094-.1c.521-.5,1.046-1.005,1.567-1.51,1.645-1.6,3.29-3.216,4.911-4.845q1.212-1.225,2.408-2.461l.3-.312c.049-.053.078-.082.094-.1h.012a2.745,2.745,0,0,1,.345.045.536.536,0,0,1,.111.029h0c-.008,0,.016.008-.012,0h0l.008,0,.025.008.049.021.1.041c.123.053.209.09.324.148a4.215,4.215,0,0,1,.619.386c.886.652,1.391,1.551,1.711,1.317.135-.107.176-.406.045-.837a3.284,3.284,0,0,0-1.022-1.481,5.2,5.2,0,0,0-.825-.574c-.074-.041-.156-.082-.23-.123s-.139-.066-.213-.1l-.049-.025-.041-.021L109.8,1.3c-.049-.021-.1-.037-.148-.053a2.77,2.77,0,0,0-.279-.07c-.086-.016-.172-.033-.25-.045L109,1.111l-.066-.008a1.006,1.006,0,0,0-.111-.008,1.248,1.248,0,0,0-.455.074,1.262,1.262,0,0,0-.361.205.949.949,0,0,0-.078.066l-.057.053-.082.078-.164.156-.328.312c-.87.833-1.735,1.678-2.585,2.531C103.351,5.948,102,7.33,100.652,8.725l-2.018,2.088-.131.135a1.511,1.511,0,0,0-.189.246,1.377,1.377,0,0,0-.127.283,2.379,2.379,0,0,0-.053.234l-.139.714-.283,1.424c-.115.418-.234.837-.349,1.259l-.086.316-.041.16-.021.078a1.42,1.42,0,0,0-.029.168,1.063,1.063,0,0,0,.246.788,1.012,1.012,0,0,0,.365.267,1.141,1.141,0,0,0,.414.09c.041,0,.082,0,.123,0l.066-.008.021,0,.057-.008.041-.008.16-.029L99,16.861l.644-.111,1.292-.234,1.292-.246.324-.062a1.651,1.651,0,0,0,.595-.25c.045-.033.09-.066.127-.1l.066-.057.037-.037.119-.115.234-.23c.624-.619,1.251-1.235,1.875-1.854q1.865-1.871,3.729-3.746L111.2,7.954Zm-3.335-4.558h0c-.012,0-.025,0-.029,0ZM98.157,15.544c-.021,0,0,0,.016,0h.008Z", "transform", "translate(-93.193 -1.094)", "fill", "#22215b"], ["id", "Path_1115", "data-name", "Path 1115", "d", "M16.447,90.759c-.2-.316-.369.094-.5.71a28.042,28.042,0,0,0-.468,3.315c-.053.591-.094,1.2-.123,1.809-.008.152-.012.308-.021.464l-.008.234v.021h0v.012l0,.057c0,.053-.008.041-.012.053a.538.538,0,0,1-.267.332.5.5,0,0,1-.263.053l-.566-.012-1.128-.025-2.26-.049c-1.506-.029-3.015-.053-4.521-.082s-3.019-.037-4.529-.037H1.748l-.07,0c0-.008.021,0,0,0a.472.472,0,0,1-.07-.025.332.332,0,0,1-.111-.1.283.283,0,0,1-.045-.144l-.008-.566c-.008-.755-.021-1.514-.037-2.273.016-.751.029-1.5.045-2.248.033-2.379.057-4.755.049-7.13l0-.849a.245.245,0,0,1,.082-.189.251.251,0,0,1,.09-.053l.053-.012h.168L2.781,84c1.186-.021,2.371-.049,3.553-.094C7.68,83.859,8.8,83.67,8.7,83.3c-.09-.34-1.046-.591-2.425-.628l-3.733-.1-.468-.008-.234,0c-.045,0-.07,0-.127,0s-.127,0-.189.012a1.742,1.742,0,0,0-1.251.775,1.547,1.547,0,0,0-.168.34,1.668,1.668,0,0,0-.094.4l0,.053v.029l0,.057v1.317c.008,2,.033,4,.062,6.006l.045,3,.025,1.5.012.751,0,.373v.094c0,.033,0,.053,0,.107a2.154,2.154,0,0,0,.033.279,1.625,1.625,0,0,0,.886,1.19,1.7,1.7,0,0,0,.533.156l.082.008.021,0H1.76l.041,0,.168.008.336.016.677.029q1.354.055,2.708.086,2.714.062,5.444.057c.911,0,1.822,0,2.728,0l.681,0h.267l.148-.008a2.028,2.028,0,0,0,.583-.148,1.892,1.892,0,0,0,.878-.792,1.933,1.933,0,0,0,.209-.562,1.363,1.363,0,0,0,.025-.181.436.436,0,0,0,0-.062v-.041l0-.082v-.127c0-1.821,0-3.639.021-5.452A2.331,2.331,0,0,0,16.447,90.759Z", "transform", "translate(0 -79.218)", "fill", "#22215b"], [1, "col-12", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", 1, "page-link", "active"], [1, "text-uppercase", "btn", "btn-info"], ["id", "export-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 25.992 29.085"], ["id", "Group_998", "data-name", "Group 998"], ["id", "Path_1116", "data-name", "Path 1116", "d", "M39.605,20.336a.729.729,0,0,0,.772-.095l11.468-9.5a.725.725,0,0,0,.261-.558.7.7,0,0,0-.267-.558L40.377.167A.726.726,0,0,0,39.19.731V5.7C26.042,6.174,26.1,16.145,26.119,20.977v.576a.718.718,0,0,0,.54.7.653.653,0,0,0,.184.024.74.74,0,0,0,.635-.368c3.882-6.838,7.075-7.17,11.711-7.188v4.956A.734.734,0,0,0,39.605,20.336Zm-12.02-1.347a15.237,15.237,0,0,1,1.5-6.743C30.91,8.862,34.453,7.189,39.92,7.135a.726.726,0,0,0,.718-.724V2.268l9.6,7.918-9.592,7.942V13.991a.738.738,0,0,0-.214-.516.727.727,0,0,0-.516-.214C34.827,13.267,31.319,13.569,27.586,18.988Z", "transform", "translate(-26.114 0)", "fill", "#fff"], ["id", "Path_1117", "data-name", "Path 1117", "d", "M51.9,253.654V240.239a.73.73,0,0,0-1.46,0v12.684H27.515v-2.469a.73.73,0,1,0-1.46,0v3.193a.73.73,0,0,0,.73.73H51.174A.728.728,0,0,0,51.9,253.654Z", "transform", "translate(-26.055 -225.293)", "fill", "#fff"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead", 10)(12, "tr")(13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vendor name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td")(26, "div", 13)(27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 17)(32, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 19)(34, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr")(36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td")(41, "div", 13)(42, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 17)(47, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 19)(49, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr")(51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td")(56, "div", 13)(57, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 17)(62, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 19)(64, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr")(66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td")(71, "div", 13)(72, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 17)(77, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 19)(79, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr")(81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td")(86, "div", 13)(87, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 17)(92, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 19)(94, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr")(96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td")(101, "div", 13)(102, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "svg", 17)(107, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 19)(109, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr")(111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td")(116, "div", 13)(117, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 17)(122, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 19)(124, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr")(126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td")(131, "div", 13)(132, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "svg", 17)(137, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 19)(139, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr")(141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td")(146, "div", 13)(147, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 17)(152, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 19)(154, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr")(156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td")(161, "div", 13)(162, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 17)(167, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 19)(169, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr")(171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td")(176, "div", 13)(177, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "svg", 17)(182, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 19)(184, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr")(186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td")(191, "div", 13)(192, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "svg", 17)(197, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 19)(199, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 21)(201, "div", 22)(202, "div", 23)(203, "ul", 24)(204, "li", 25)(205, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li", 25)(208, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 25)(211, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li", 25)(214, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li", 25)(217, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 28)(220, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "svg", 29)(222, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 31)(224, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7965:
/*!***********************************************************!*\
  !*** ./src/app/components/requests/requests.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsComponent": () => (/* binding */ RequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class RequestsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(); };
RequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 344, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "iconInput"], ["type", "text", "placeholder", "Search", 1, "filterInput"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 26 25.999", 1, "search-icon"], ["id", "search", "d", "M469.555,1036.806a9.08,9.08,0,1,0-1.365-1.366l-9.879,9.879,1.366,1.365Zm5.689-14.189a7.135,7.135,0,1,1-7.134,7.134A7.143,7.143,0,0,1,475.243,1022.617Z", "transform", "translate(-458.31 -1020.686)", "fill", "#024293"], [1, "filterInput", "ml-2"], ["type", "text", "placeholder", "Start Date", 1, "calendar", "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "viewBox", "0 0 21.29 21.29"], ["id", "Vector_3_", "data-name", "Vector (3)", "d", "M15.967,2.129h4.258A1.064,1.064,0,0,1,21.29,3.193V20.225a1.064,1.064,0,0,1-1.064,1.064H1.064A1.064,1.064,0,0,1,0,20.225V3.193A1.064,1.064,0,0,1,1.064,2.129H5.322V0H7.451V2.129h6.387V0h2.129ZM13.838,4.258H7.451V6.387H5.322V4.258H2.129V8.516H19.161V4.258H15.967V6.387H13.838Zm5.322,6.387H2.129v8.516H19.161Z", "fill", "#024293"], ["type", "text", "placeholder", "End Date", 1, "calendar", "ml-2"], [1, "btn", "btn-success", "ml-2"], [1, "btn", "btn-danger", "ml-2"], [1, "col-12", "divider"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "gradient", "text-white", "text-uppercase"], [1, "text-center"], ["width", "400"], [1, "actions", "text-right"], ["_ngcontent-pkf-c53", "", 1, "user", "d-flex", "align-items-center"], ["_ngcontent-pkf-c53", "", 1, "profile-image", "mr-2"], ["_ngcontent-pkf-c53", "", "src", "/assets/profile.jpg", "alt", "profile"], [1, "d-flex", "align-items-center", "justify-content-end", "text-right"], [1, "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 29.056 18.78"], ["id", "eye", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z", "fill", "#446bf5"], ["id", "Layer_2", "xmlns", "http://www.w3.org/2000/svg", "width", "18", "viewBox", "0 0 24 24"], ["id", "Group_1038", "data-name", "Group 1038"], ["id", "Path_9207", "data-name", "Path 9207", "d", "M39.5,27.5a12,12,0,1,0,8.485,3.515A11.92,11.92,0,0,0,39.5,27.5Zm0,22.319A10.319,10.319,0,1,1,49.819,39.5,10.331,10.331,0,0,1,39.5,49.819Z", "transform", "translate(-27.5 -27.5)", "fill", "#77b805"], ["id", "check-mark-svgrepo-com", "transform", "translate(6.262 7.587)"], ["id", "Path_9244", "data-name", "Path 9244", "d", "M10.975,2.505a.476.476,0,0,0-.673,0L4.7,8.1,1.821,5.2a.474.474,0,0,0-.672,0L.139,6.209a.478.478,0,0,0,0,.673l4.226,4.254a.479.479,0,0,0,.673,0l6.946-6.947a.476.476,0,0,0,0-.676Z", "transform", "translate(0 -2.366)", "fill", "#77b805"], ["id", "close-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "18", "viewBox", "0 0 24 24"], ["id", "Path_9209", "data-name", "Path 9209", "d", "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22.286A10.286,10.286,0,1,1,22.286,12,10.3,10.3,0,0,1,12,22.286Z", "fill", "#f10005"], ["id", "Path_9210", "data-name", "Path 9210", "d", "M92.357,85a.857.857,0,0,0-1.212,0l-2.465,2.465L86.214,85A.857.857,0,0,0,85,86.214l2.465,2.465L85,91.144a.857.857,0,0,0,1.212,1.212l2.465-2.465,2.465,2.465a.857.857,0,0,0,1.212-1.212l-2.465-2.465,2.465-2.465A.857.857,0,0,0,92.357,85Z", "transform", "translate(-76.679 -76.679)", "fill", "#f10005"], [1, "col-12", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", 1, "page-link", "active"], [1, "text-uppercase", "btn", "btn-info"], ["id", "export-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 25.992 29.085"], ["id", "Group_998", "data-name", "Group 998"], ["id", "Path_1116", "data-name", "Path 1116", "d", "M39.605,20.336a.729.729,0,0,0,.772-.095l11.468-9.5a.725.725,0,0,0,.261-.558.7.7,0,0,0-.267-.558L40.377.167A.726.726,0,0,0,39.19.731V5.7C26.042,6.174,26.1,16.145,26.119,20.977v.576a.718.718,0,0,0,.54.7.653.653,0,0,0,.184.024.74.74,0,0,0,.635-.368c3.882-6.838,7.075-7.17,11.711-7.188v4.956A.734.734,0,0,0,39.605,20.336Zm-12.02-1.347a15.237,15.237,0,0,1,1.5-6.743C30.91,8.862,34.453,7.189,39.92,7.135a.726.726,0,0,0,.718-.724V2.268l9.6,7.918-9.592,7.942V13.991a.738.738,0,0,0-.214-.516.727.727,0,0,0-.516-.214C34.827,13.267,31.319,13.569,27.586,18.988Z", "transform", "translate(-26.114 0)", "fill", "#fff"], ["id", "Path_1117", "data-name", "Path 1117", "d", "M51.9,253.654V240.239a.73.73,0,0,0-1.46,0v12.684H27.515v-2.469a.73.73,0,1,0-1.46,0v3.193a.73.73,0,0,0,.73.73H51.174A.728.728,0,0,0,51.9,253.654Z", "transform", "translate(-26.055 -225.293)", "fill", "#fff"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11)(15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Running Late");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Apply Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Clear Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19)(41, "table", 20)(42, "thead", 21)(43, "tr")(44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody")(57, "tr")(58, "td")(59, "div", 25)(60, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td")(72, "div", 28)(73, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 32)(78, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 38)(85, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr")(87, "td")(88, "div", 25)(89, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td")(101, "div", 28)(102, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "svg", 32)(107, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 38)(114, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr")(116, "td")(117, "div", 25)(118, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td")(130, "div", 28)(131, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "svg", 32)(136, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 38)(143, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr")(145, "td")(146, "div", 25)(147, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td")(159, "div", 28)(160, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "svg", 32)(165, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 38)(172, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr")(174, "td")(175, "div", 25)(176, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td")(188, "div", 28)(189, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "svg", 32)(194, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 38)(201, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr")(203, "td")(204, "div", 25)(205, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td")(217, "div", 28)(218, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "svg", 32)(223, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "path", 38)(230, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tr")(232, "td")(233, "div", 25)(234, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td")(246, "div", 28)(247, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "svg", 32)(252, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 38)(259, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr")(261, "td")(262, "div", 25)(263, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td")(275, "div", 28)(276, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "svg", 32)(281, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 38)(288, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr")(290, "td")(291, "div", 25)(292, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Francesca Metts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Lorem ipsum dolor sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "07/05/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td")(304, "div", 28)(305, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "svg", 32)(310, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "path", 38)(317, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 40)(319, "div", 41)(320, "div", 42)(321, "ul", 43)(322, "li", 44)(323, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li", 44)(326, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li", 44)(329, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li", 44)(332, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li", 44)(335, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "button", 47)(338, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "svg", 48)(340, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "path", 50)(342, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6577:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 52, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-auto"], [1, "col-12", "divider"], [1, "col-12", "custom-form", "mt-3"], [1, "row", "flex-column-reverse", "flex-md-row"], [1, "col-md-8"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-3", "col-md-6"], [1, "col-md-12"], [1, "line"], [1, "mb-3", "col-lg-12", "d-flex", "align-items-center"], [1, "mr-3", "fw-bold", "theme-color"], ["type", "submit", 1, "btn", "btn-line", "mr-3", "btn-min-width", "d-flex", "justify-content-center"], ["src", "/assets/password1.png", "alt", "password"], ["type", "submit", 1, "text-uppercase", "btn", "btn-info", "btn-min-width", "text-uppercase"], [1, "col-md-4"], [1, "profileMedia", "mb-4"], [1, "profileImage"], ["src", "/assets/placeholder.png", "alt", "img", 1, "w-100"], [1, "btn", "btn-info", "w-100", "d-flex", "align-items-center", "justify-content-center", "mt-3"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EDIT PROFILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "form")(12, "div", 10)(13, "div", 11)(14, "div", 2)(15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15)(24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PHONE NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15)(32, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "GENDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18)(38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SECURITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20)(41, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "CHANGE PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SAVE CHANGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "change Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/token-storage.service */ 3590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class SidebarComponent {
    constructor(tokenStorage, _router) {
        this.tokenStorage = tokenStorage;
        this._router = _router;
    }
    ngOnInit() {
    }
    logOut(event) {
        event.preventDefault();
        this.tokenStorage.signOut();
        this._router.navigate(['/login'])
            .then(() => {
            window.location.reload();
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 77, vars: 7, consts: [[1, "main-sidebar", "gradient"], ["href", "javascript:;", 1, "brand-link"], ["src", "/assets/login.svg", "alt", "Logo", 1, "img-fluid"], [1, "text-uppercase"], ["href", "#", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "33.669", "viewBox", "0 0 24.135 33.669"], ["id", "bank-terminal-svgrepo-com", "transform", "translate(-0.1)"], ["id", "Group_1285", "data-name", "Group 1285", "transform", "translate(0.1)", 1, "icons"], ["id", "Path_9232", "data-name", "Path 9232", "d", "M22.8,6.944H19.5V1.435A1.439,1.439,0,0,0,18.068,0H6.117A1.439,1.439,0,0,0,4.681,1.435V6.951H1.535A1.439,1.439,0,0,0,.1,8.386V32.233a1.439,1.439,0,0,0,1.435,1.435h21.2a1.548,1.548,0,0,0,1.5-1.435V8.379A1.444,1.444,0,0,0,22.8,6.944ZM7.545,2.8h9.162V14.753H7.545ZM21.364,30.859H2.964V9.808H4.681v5.034a1.432,1.432,0,0,0,.5,2.775H19a1.432,1.432,0,0,0,.5-2.775V9.808h1.861V30.859Z", "transform", "translate(-0.1)", "fill", "#fff"], ["id", "Path_9233", "data-name", "Path 9233", "d", "M86.148,287.7h-.213a1.435,1.435,0,0,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-78.703 -267.94)", "fill", "#fff"], ["id", "Path_9234", "data-name", "Path 9234", "d", "M222.748,287.7h-.213a1.435,1.435,0,1,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-205.921 -267.94)", "fill", "#fff"], ["id", "Path_9235", "data-name", "Path 9235", "d", "M86.148,359.7h-.213a1.435,1.435,0,0,0,0,2.871h.213a1.435,1.435,0,0,0,0-2.871Z", "transform", "translate(-78.703 -334.995)", "fill", "#fff"], ["id", "Path_9236", "data-name", "Path 9236", "d", "M222.748,359.7h-.213a1.435,1.435,0,1,0,0,2.871h.213a1.435,1.435,0,1,0,0-2.871Z", "transform", "translate(-205.921 -334.995)", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 24.135 33.669"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "viewBox", "0 0 35.981 35.98"], ["id", "Group_67", "data-name", "Group 67", "transform", "translate(-597.176 -294.989)"], ["id", "Path_82", "data-name", "Path 82", "d", "M669.99,309.567q0-4.644,0-9.288c0-3.036,1.758-4.789,4.788-4.79q6.181,0,12.361,0a4.337,4.337,0,0,1,4.669,4.694q0,6.249,0,12.5a4.33,4.33,0,0,1-4.61,4.623c-3.62.013-7.239-.006-10.859.019a1.959,1.959,0,0,0-1.05.346c-1.133.8-2.232,1.65-3.338,2.489-.414.314-.836.585-1.372.318s-.592-.759-.592-1.281Q669.993,314.382,669.99,309.567Zm2.054,7.95c.876-.657,1.617-1.181,2.321-1.751a2.33,2.33,0,0,1,1.57-.52c3.687.016,7.374.01,11.061.007,1.913,0,2.76-.844,2.76-2.735q0-6.145,0-12.29c0-1.825-.853-2.685-2.664-2.686q-6.077,0-12.154,0c-2.1,0-2.893.786-2.894,2.876q0,8.125,0,16.25Z", "transform", "translate(-59.154)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_83", "data-name", "Path 83", "d", "M600.8,395.655c-2.558-2.912-2.691-5.953-.377-8.186a5.446,5.446,0,0,1,7.479-.056,5.512,5.512,0,0,1-.333,8.237,6.8,6.8,0,0,1,2.737,3.376,11.987,11.987,0,0,1,.344,4.592.892.892,0,0,1-1,.83q-5.461.013-10.922,0a.909.909,0,0,1-1.013-.826c-.07-1.766-.222-3.55.611-5.222A7.055,7.055,0,0,1,600.8,395.655Zm-1.04,6.707h8.832c.226-2.013-.228-3.726-1.98-4.856a4.216,4.216,0,0,0-4.656-.117C600.074,398.483,599.549,400.244,599.759,402.362Zm7.774-10.992A3.349,3.349,0,0,0,604.216,388a3.363,3.363,0,1,0,3.318,3.368Z", "transform", "translate(0 -73.984)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_84", "data-name", "Path 84", "d", "M712.033,329.586c0-1.208.139-1.378,1.291-1.577a1.728,1.728,0,0,0,1.443-1.732,1.754,1.754,0,0,0-1.609-1.664,1.713,1.713,0,0,0-1.789,1.447c-.027.157-.037.318-.076.471a1.009,1.009,0,0,1-2-.224,3.758,3.758,0,0,1,7.488-.46,3.815,3.815,0,0,1-2.231,3.941.912.912,0,0,0-.466.473c-.175.61-.507.963-1.167.9-.572-.05-.865-.447-.885-1.168C712.03,329.859,712.033,329.722,712.033,329.586Z", "transform", "translate(-91.298 -22.128)", "fill", "#fff", "stroke", "#fff", "stroke-width", "1"], ["id", "Path_85", "data-name", "Path 85", "d", "M724.386,377.906a.989.989,0,0,1,1.041-1.011,1.034,1.034,0,0,1,.989,1.015,1.021,1.021,0,0,1-1.06,1A.974.974,0,0,1,724.386,377.906Z", "transform", "translate(-103.641 -66.575)", "fill", "#fff", "stroke", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "viewBox", "0 0 29.986 43.5"], ["id", "dollar-svgrepo-com", "transform", "translate(-75.337)"], ["id", "Path_9237", "data-name", "Path 9237", "d", "M187.138,67.6h-2.691a5.216,5.216,0,0,0,3.861,5.03v1.128H191V72.633a5.215,5.215,0,0,0,3.861-5.03,4.887,4.887,0,0,0-3.637-4.966L191,62.567V57.377A2.516,2.516,0,0,1,192.17,59.5h2.691A5.216,5.216,0,0,0,191,54.472V53.344h-2.691v1.128a5.215,5.215,0,0,0-3.861,5.03,4.887,4.887,0,0,0,3.637,4.966l.224.071v5.189A2.516,2.516,0,0,1,187.138,67.6Zm5.032,0A2.516,2.516,0,0,1,191,69.728V65.442A2.159,2.159,0,0,1,192.17,67.6Zm-5.032-8.1a2.516,2.516,0,0,1,1.171-2.125v4.286A2.158,2.158,0,0,1,187.138,59.5Z", "transform", "translate(-99.324 -48.56)", "fill", "#fff"], ["id", "Path_9238", "data-name", "Path 9238", "d", "M90.33,0A15.01,15.01,0,0,0,75.337,14.993V28.507a14.993,14.993,0,0,0,29.986,0V14.993A15.01,15.01,0,0,0,90.33,0Zm0,2.691a12.3,12.3,0,1,1-12.3,12.3A12.316,12.316,0,0,1,90.33,2.691Zm12.132,21.1a12.3,12.3,0,0,1-24.264,0,14.977,14.977,0,0,0,24.264,0ZM90.33,40.809A12.322,12.322,0,0,1,78.2,30.548a14.977,14.977,0,0,0,24.264,0A12.322,12.322,0,0,1,90.33,40.809Z", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "27", "viewBox", "0 0 35.604 35.603"], ["id", "ebb8a67d1fc7fb386655ef5de045512d", "transform", "translate(-9.987 -9.998)"], ["id", "Path_9239", "data-name", "Path 9239", "d", "M40.346,15.186h0a18.055,18.055,0,0,1,1.686,1.947A17.79,17.79,0,0,1,42.777,37.4a1.273,1.273,0,1,1-2.14-1.38,15.057,15.057,0,0,0,2.252-6.052,15.264,15.264,0,1,0-7.2,10.88,1.271,1.271,0,0,1,1.319,2.172,17.794,17.794,0,1,1,3.335-27.834Z", "transform", "translate(0 0)", "fill", "#fff"], ["id", "Path_9240", "data-name", "Path 9240", "d", "M273.9,293.157a1.119,1.119,0,1,0,0-1.583,1.118,1.118,0,0,0,0,1.583Zm4.1,0a1.119,1.119,0,1,0,0-1.583,1.118,1.118,0,0,0,0,1.583Zm3.772-2.223V293.8a2.574,2.574,0,0,1-2.782,2.294h-3.927l-4.47,2.98c-1.536,0,1.49-2.98.745-4.47v-3.671a2.574,2.574,0,0,1,2.782-2.294h4.87a2.574,2.574,0,0,1,2.782,2.294Zm-4.984,7.089a5.073,5.073,0,0,1,.745,3.241,3.211,3.211,0,0,1-1.574,2.374l-5.51,3.182a3.1,3.1,0,0,1-1.562.425,4.5,4.5,0,0,1-3.713-2.513l-5.249-9.08a5.078,5.078,0,0,1-.745-3.241,3.211,3.211,0,0,1,1.574-2.374l5.51-3.182c1.768-1.023,3.991-.143,5.279,2.088l-1.292.745c-.871-1.507-2.2-2.143-3.241-1.541l-5.51,3.182a1.726,1.726,0,0,0-.846,1.3,3.589,3.589,0,0,0,.56,2.277l5.245,9.08c.871,1.507,2.2,2.138,3.241,1.541l5.51-3.182a1.726,1.726,0,0,0,.846-1.3,3.583,3.583,0,0,0-.56-2.277l1.292-.745Zm-2.551,1.309c.206.358.227.728.051.834l-5.809,3.355c-.177.1-.488-.1-.695-.459s-.227-.728-.051-.833l5.809-3.355c.177-.1.488.105.695.459Zm-4.727-3.06c.206.358.286.695.177.758l-3.519,2.033c-.109.063-.362-.177-.568-.535s-.286-.695-.177-.758l3.519-2.033c.109-.059.362.181.568.535Zm-.493-5.136c.206.358.227.728.051.833l-5.809,3.355c-.177.1-.488-.1-.695-.459s-.227-.728-.051-.833l5.809-3.355c.177-.105.488.1.695.459Z", "transform", "translate(-241.652 -267.817)", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "viewBox", "0 0 40.795 28.599"], ["id", "_-Product-Icons", "data-name", "\uD83D\uDD0D-Product-Icons", "transform", "translate(-2.011 -5.021)"], ["id", "ic_fluent_payment_24_regular", "transform", "translate(2.011 5.021)"], ["id", "_-Color", "data-name", "\uD83C\uDFA8-Color", "d", "M37.191,5.021A5.616,5.616,0,0,1,42.8,10.294l.01.342V28a5.616,5.616,0,0,1-5.274,5.605l-.342.01H7.627a5.616,5.616,0,0,1-5.605-5.274L2.011,28V10.636A5.616,5.616,0,0,1,7.285,5.031l.342-.01Zm2.551,12.2H5.072L5.074,28a2.553,2.553,0,0,0,2.292,2.539l.261.013H37.191a2.553,2.553,0,0,0,2.539-2.292L39.743,28Zm-4.564,7.158a1.532,1.532,0,0,1,.208,3.049l-.208.014H30.072a1.532,1.532,0,0,1-.208-3.049l.208-.014ZM37.191,8.084H7.627a2.553,2.553,0,0,0-2.539,2.292l-.013.261,0,3.52H39.741l0-3.52A2.553,2.553,0,0,0,37.452,8.1Z", "transform", "translate(-2.011 -5.021)", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "viewBox", "0 0 28 28.001"], ["id", "Vector_2_", "data-name", "Vector (2)", "d", "M3.7.39a5.555,5.555,0,0,1,7.1,7.1L28,24.7l-3.368,3.366L7.425,10.859a5.555,5.555,0,0,1-7.1-7.1l3.549,3.55A2.381,2.381,0,1,0,7.242,3.942L3.694.389ZM20.148,3.38,25.2.575l2.244,2.244-2.806,5.05L21.83,8.43,18.466,11.8,16.22,9.552l3.366-3.366ZM8.926,15.724l3.366,3.368L4.437,26.948a2.381,2.381,0,0,1-3.518-3.2l.154-.17,7.856-7.856Z", "transform", "translate(-0.004 -0.068)", "fill", "#fff"], ["href", "#", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "viewBox", "0 0 35.5 29.953"], ["id", "XMLID_6_", "transform", "translate(-0.001 -25)"], ["id", "XMLID_7_", "d", "M5.682,108.321H24.962a1.664,1.664,0,0,0,0-3.328H5.682l2.152-2.152a1.664,1.664,0,1,0-2.353-2.353L.489,105.48q-.058.058-.111.122c-.015.019-.028.038-.043.057s-.037.048-.054.074-.029.047-.043.071-.028.045-.04.069-.024.049-.036.074-.024.048-.034.073-.018.049-.027.074-.02.053-.028.08-.013.05-.019.075-.015.055-.02.083-.009.058-.013.087-.008.049-.011.074C0,106.547,0,106.6,0,106.654v0q0,.081.008.162c0,.025.007.049.011.073s.008.059.013.088.013.055.02.082.012.051.019.076.018.053.028.079.017.05.027.075.022.048.033.072.023.051.037.076.026.044.039.066.028.049.044.073.034.047.052.07.029.041.045.06c.033.04.068.079.105.116l0,.006,4.992,4.992a1.664,1.664,0,1,0,2.353-2.353Z", "transform", "translate(0 -66.68)", "fill", "#fff"], ["id", "XMLID_8_", "d", "M122.744,25H101.666A1.664,1.664,0,0,0,100,26.664V33.32a1.664,1.664,0,1,0,3.328,0V28.328h17.75v23.3H103.33V46.633a1.664,1.664,0,0,0-3.328,0v6.656a1.664,1.664,0,0,0,1.664,1.664h21.078a1.664,1.664,0,0,0,1.664-1.664V26.664A1.664,1.664,0,0,0,122.744,25Z", "transform", "translate(-88.907)", "fill", "#fff"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav")(4, "ul", 3)(5, "li")(6, "a", 4)(7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 5)(9, "g", 6)(10, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 8)(12, "path", 9)(13, "path", 10)(14, "path", 11)(15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 4)(19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 13)(21, "g", 6)(22, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 8)(24, "path", 9)(25, "path", 10)(26, "path", 11)(27, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 4)(31, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 14)(33, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 16)(35, "path", 17)(36, "path", 18)(37, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 4)(41, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 20)(43, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "path", 22)(45, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Subsciptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 4)(49, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "svg", 24)(51, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 26)(53, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Complaints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "a", 4)(57, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "svg", 28)(59, "g", 29)(60, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li")(64, "a", 4)(65, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li")(70, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_70_listener($event) { return ctx.logOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "svg", 35)(73, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 37)(75, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/subscriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/complaints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/settings");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3322:
/*!*********************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionsComponent": () => (/* binding */ SubscriptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SubscriptionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionsComponent.ɵfac = function SubscriptionsComponent_Factory(t) { return new (t || SubscriptionsComponent)(); };
SubscriptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionsComponent, selectors: [["app-subscriptions"]], decls: 366, vars: 0, consts: [[1, "main-content", "ml-admin"], [1, "card", "mt-4", "mb-4"], [1, "row"], [1, "col-12"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "d-flex", "align-items-center"], [1, "theme-color", "text-uppercase", "fw-bold", "fs-20", "mb-0", "align-items-center"], [1, "col-auto"], [1, "btn", "btn-success"], [1, "col-12", "divider"], [1, "col-12", "table-responsive"], [1, "table", "table-striped"], [1, "gradient", "text-white", "text-uppercase"], [1, "text-center"], ["width", "300"], ["width", "400"], [1, "actions", "text-right"], [1, "form-check", "d-flex", "ml-2"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], [1, "d-flex", "align-items-center", "justify-content-end", "text-right"], [1, "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "viewBox", "0 0 29.056 18.78"], ["id", "eye", "d", "M.5,11.028a2.939,2.939,0,0,1,0-3.277A17.037,17.037,0,0,1,14.528,0,16.6,16.6,0,0,1,25.794,4.551c.173.161.347.327.514.5a.915.915,0,0,1,.064,1.181.682.682,0,0,1-1.045.072c-.154-.155-.313-.308-.472-.455A15.964,15.964,0,0,0,20.614,3.01a10.046,10.046,0,0,1,2.217,6.379,10.044,10.044,0,0,1-2.236,6.4A16.62,16.62,0,0,0,27.389,10a1.092,1.092,0,0,0,0-1.218.912.912,0,0,1,.128-1.174.685.685,0,0,1,1.04.145,2.938,2.938,0,0,1,0,3.277A17.039,17.039,0,0,1,14.528,18.78,17.037,17.037,0,0,1,.5,11.028ZM7.7,9.389c0,4.251,3.056,7.71,6.815,7.715h.017c3.758-.005,6.815-3.464,6.815-7.715s-3.057-7.71-6.816-7.714h-.016C10.761,1.68,7.7,5.139,7.7,9.389ZM1.667,8.781a1.092,1.092,0,0,0,0,1.218,16.615,16.615,0,0,0,6.792,5.791,10.043,10.043,0,0,1-2.235-6.4,10.045,10.045,0,0,1,2.235-6.4A16.629,16.629,0,0,0,1.667,8.781Zm9.72.609a3.369,3.369,0,0,1,3.141-3.552A3.37,3.37,0,0,1,17.67,9.389a3.37,3.37,0,0,1-3.142,3.553A3.37,3.37,0,0,1,11.386,9.389Zm1.48,0a1.782,1.782,0,0,0,1.661,1.878,1.782,1.782,0,0,0,1.661-1.878,1.782,1.782,0,0,0-1.661-1.878A1.782,1.782,0,0,0,12.866,9.389Z", "fill", "#446bf5"], ["id", "edit-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "15", "viewBox", "0 0 20.09 20"], ["id", "Group_984", "data-name", "Group 984", "transform", "translate(0 0)"], ["id", "Path_1114", "data-name", "Path 1114", "d", "M112.143,7.035l.472-.464.119-.115.057-.057c.025-.025.066-.066.1-.1a1.636,1.636,0,0,0,.328-.578,1.45,1.45,0,0,0,.062-.373l0-.156a.309.309,0,0,0-.025-.119c-.045-.1-.107-.242-.18-.382a1.553,1.553,0,0,0-.23-.345.263.263,0,0,0-.062-.057.141.141,0,0,0-.045-.021.111.111,0,0,0-.074,0c-.041.025-.07.066-.074.168a6.639,6.639,0,0,0-.045.743v.086a.916.916,0,0,1-.176.345,1.368,1.368,0,0,1-.291.238q-.32.222-.64.468c-.431.324-.866.669-1.3,1.034-.874.726-1.756,1.526-2.617,2.355l-3.159,3.024-1.6,1.526-.394.382-.09.086a.041.041,0,0,1-.012,0l-.025,0-1.042.2c-.718.144-1.432.283-2.15.427l-.345.07c.139-.677.283-1.358.423-2.035l.213-1.079.053-.271.025-.135,0-.016V11.88c0-.016,0,.021,0,.012s.008-.033,0-.016,0,.012,0,.016.008-.021.008-.025h0l.012-.012.049-.049.094-.1c.521-.5,1.046-1.005,1.567-1.51,1.645-1.6,3.29-3.216,4.911-4.845q1.212-1.225,2.408-2.461l.3-.312c.049-.053.078-.082.094-.1h.012a2.745,2.745,0,0,1,.345.045.536.536,0,0,1,.111.029h0c-.008,0,.016.008-.012,0h0l.008,0,.025.008.049.021.1.041c.123.053.209.09.324.148a4.215,4.215,0,0,1,.619.386c.886.652,1.391,1.551,1.711,1.317.135-.107.176-.406.045-.837a3.284,3.284,0,0,0-1.022-1.481,5.2,5.2,0,0,0-.825-.574c-.074-.041-.156-.082-.23-.123s-.139-.066-.213-.1l-.049-.025-.041-.021L109.8,1.3c-.049-.021-.1-.037-.148-.053a2.77,2.77,0,0,0-.279-.07c-.086-.016-.172-.033-.25-.045L109,1.111l-.066-.008a1.006,1.006,0,0,0-.111-.008,1.248,1.248,0,0,0-.455.074,1.262,1.262,0,0,0-.361.205.949.949,0,0,0-.078.066l-.057.053-.082.078-.164.156-.328.312c-.87.833-1.735,1.678-2.585,2.531C103.351,5.948,102,7.33,100.652,8.725l-2.018,2.088-.131.135a1.511,1.511,0,0,0-.189.246,1.377,1.377,0,0,0-.127.283,2.379,2.379,0,0,0-.053.234l-.139.714-.283,1.424c-.115.418-.234.837-.349,1.259l-.086.316-.041.16-.021.078a1.42,1.42,0,0,0-.029.168,1.063,1.063,0,0,0,.246.788,1.012,1.012,0,0,0,.365.267,1.141,1.141,0,0,0,.414.09c.041,0,.082,0,.123,0l.066-.008.021,0,.057-.008.041-.008.16-.029L99,16.861l.644-.111,1.292-.234,1.292-.246.324-.062a1.651,1.651,0,0,0,.595-.25c.045-.033.09-.066.127-.1l.066-.057.037-.037.119-.115.234-.23c.624-.619,1.251-1.235,1.875-1.854q1.865-1.871,3.729-3.746L111.2,7.954Zm-3.335-4.558h0c-.012,0-.025,0-.029,0ZM98.157,15.544c-.021,0,0,0,.016,0h.008Z", "transform", "translate(-93.193 -1.094)", "fill", "#22215b"], ["id", "Path_1115", "data-name", "Path 1115", "d", "M16.447,90.759c-.2-.316-.369.094-.5.71a28.042,28.042,0,0,0-.468,3.315c-.053.591-.094,1.2-.123,1.809-.008.152-.012.308-.021.464l-.008.234v.021h0v.012l0,.057c0,.053-.008.041-.012.053a.538.538,0,0,1-.267.332.5.5,0,0,1-.263.053l-.566-.012-1.128-.025-2.26-.049c-1.506-.029-3.015-.053-4.521-.082s-3.019-.037-4.529-.037H1.748l-.07,0c0-.008.021,0,0,0a.472.472,0,0,1-.07-.025.332.332,0,0,1-.111-.1.283.283,0,0,1-.045-.144l-.008-.566c-.008-.755-.021-1.514-.037-2.273.016-.751.029-1.5.045-2.248.033-2.379.057-4.755.049-7.13l0-.849a.245.245,0,0,1,.082-.189.251.251,0,0,1,.09-.053l.053-.012h.168L2.781,84c1.186-.021,2.371-.049,3.553-.094C7.68,83.859,8.8,83.67,8.7,83.3c-.09-.34-1.046-.591-2.425-.628l-3.733-.1-.468-.008-.234,0c-.045,0-.07,0-.127,0s-.127,0-.189.012a1.742,1.742,0,0,0-1.251.775,1.547,1.547,0,0,0-.168.34,1.668,1.668,0,0,0-.094.4l0,.053v.029l0,.057v1.317c.008,2,.033,4,.062,6.006l.045,3,.025,1.5.012.751,0,.373v.094c0,.033,0,.053,0,.107a2.154,2.154,0,0,0,.033.279,1.625,1.625,0,0,0,.886,1.19,1.7,1.7,0,0,0,.533.156l.082.008.021,0H1.76l.041,0,.168.008.336.016.677.029q1.354.055,2.708.086,2.714.062,5.444.057c.911,0,1.822,0,2.728,0l.681,0h.267l.148-.008a2.028,2.028,0,0,0,.583-.148,1.892,1.892,0,0,0,.878-.792,1.933,1.933,0,0,0,.209-.562,1.363,1.363,0,0,0,.025-.181.436.436,0,0,0,0-.062v-.041l0-.082v-.127c0-1.821,0-3.639.021-5.452A2.331,2.331,0,0,0,16.447,90.759Z", "transform", "translate(0 -79.218)", "fill", "#22215b"], ["id", "delete-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "12", "viewBox", "0 0 16.034 19.864"], ["id", "linear-gradient", "x1", "0.5", "x2", "0.5", "y2", "1", "gradientUnits", "objectBoundingBox"], ["offset", "0", "stop-color", "#f8646a"], ["offset", "1", "stop-color", "#e5070f"], ["id", "Group_983", "data-name", "Group 983", "transform", "translate(0)"], ["id", "Group_982", "data-name", "Group 982", "transform", "translate(0)"], ["id", "Path_1112", "data-name", "Path 1112", "d", "M42.065,9.747l.285-3.422h.5a.684.684,0,0,0,.684-.684V4.393A2.137,2.137,0,0,0,41.4,2.259H39.02V1.943A1.945,1.945,0,0,0,37.077,0H35.083A1.945,1.945,0,0,0,33.14,1.943v.316H30.761a2.137,2.137,0,0,0-2.134,2.134V5.641a.684.684,0,0,0,.684.684h.5l.929,11.151a2.619,2.619,0,0,0,2.595,2.388h5.492a2.619,2.619,0,0,0,2.59-2.34,4.068,4.068,0,0,0,.649-7.776Zm-7.558-7.8a.576.576,0,0,1,.575-.575h1.994a.576.576,0,0,1,.576.575v.316H34.507ZM29.994,4.957V4.393a.768.768,0,0,1,.767-.767H41.4a.768.768,0,0,1,.767.767v.564ZM38.826,18.5H33.334A1.244,1.244,0,0,1,32.1,17.362l-.92-11.037h9.8l-.262,3.148c-.041,0-.082,0-.123,0a4.068,4.068,0,0,0-.57,8.1A1.244,1.244,0,0,1,38.826,18.5Zm1.767-2.256a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,40.593,16.24Z", "transform", "translate(-28.627)", "fill", "url(#linear-gradient)"], ["id", "Path_1113", "data-name", "Path 1113", "d", "M183.226,177.15l.645-.645a.684.684,0,0,0-.967-.967l-.645.645-.645-.645a.684.684,0,1,0-.967.967l.645.645-.645.645a.684.684,0,0,0,.967.967l.645-.645.645.645a.684.684,0,0,0,.967-.967Z", "transform", "translate(-170.293 -163.611)", "fill", "url(#linear-gradient)"], [1, "col-12", "d-flex", "justify-content-between", "mt-2", "align-items-center"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], ["href", "#", 1, "page-link", "active"]], template: function SubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SUBSCRIPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ADD NEW +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "table", 11)(14, "thead", 12)(15, "tr")(16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Plan name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody")(27, "tr")(28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td")(35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td")(48, "div", 24)(49, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 28)(54, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 30)(56, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 32)(59, "defs")(60, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "stop", 34)(62, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 36)(64, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 38)(66, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr")(68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td")(75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td")(88, "div", 24)(89, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 28)(94, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 30)(96, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 32)(99, "defs")(100, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "stop", 34)(102, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 36)(104, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 38)(106, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr")(108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td")(115, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td")(128, "div", 24)(129, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "svg", 28)(134, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 30)(136, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "svg", 32)(139, "defs")(140, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "stop", 34)(142, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "g", 36)(144, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 38)(146, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr")(148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td")(155, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td")(168, "div", 24)(169, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "svg", 28)(174, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 30)(176, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "svg", 32)(179, "defs")(180, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "stop", 34)(182, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "g", 36)(184, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 38)(186, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr")(188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td")(195, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td")(208, "div", 24)(209, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "svg", 28)(214, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 30)(216, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "svg", 32)(219, "defs")(220, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "stop", 34)(222, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "g", 36)(224, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 38)(226, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr")(228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td")(235, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td")(248, "div", 24)(249, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "svg", 28)(254, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 30)(256, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "svg", 32)(259, "defs")(260, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "stop", 34)(262, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "g", 36)(264, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 38)(266, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr")(268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td")(275, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td")(288, "div", 24)(289, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "svg", 28)(294, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 30)(296, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "svg", 32)(299, "defs")(300, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "stop", 34)(302, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "g", 36)(304, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "path", 38)(306, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr")(308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Lorem ipsum dolor sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td")(315, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Lorem ipsum dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td")(328, "div", 24)(329, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "svg", 28)(334, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "path", 30)(336, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "svg", 32)(339, "defs")(340, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "stop", 34)(342, "stop", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "g", 36)(344, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "path", 38)(346, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 40)(348, "div", 41)(349, "div", 42)(350, "ul", 43)(351, "li", 44)(352, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "li", 44)(355, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "li", 44)(358, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "li", 44)(361, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li", 44)(364, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1700:
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 19, vars: 0, consts: [[1, "container-fluid", "bg-primary", "full-div", "login"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "col-md-7", "col-11", "mx-auto", "max-w-login"], [1, "row"], [1, "col", "text-center"], ["src", "assets/login.svg", "alt", "logo", 1, "logo-login", "mb-3"], [1, "text-white"], [1, "text-white", "mb-4"], [1, "mb-3", "col-12"], ["type", "text", "placeholder", "Enter your email", 1, "form-control"], [1, "btn", "btn-primary", "col-12", "d-flex", "justify-content-between", "loginBtn"], ["src", "assets/right-arrow.svg", "alt", ""]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eit dolore magna aliqua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 2)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SEND INSTRUCTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".max-w-login[_ngcontent-%COMP%] {\r\n    max-width: 360px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo-login[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 15px\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-weight: 300;\r\n    font-size: 12px;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-right: -10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXgtdy1sb2dpbiB7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvLWxvZ2luIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmxvZ2luQnRuIGltZyB7XHJcbiAgICB3aWR0aDogMTVweFxyXG59XHJcblxyXG4ubG9naW5CdG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZvcmdvdCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bjpob3ZlciBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/auth.service */ 8368);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/token-storage.service */ 3590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_20_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_20_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function LoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r5.errorMessage, " ");
} }
class LoginComponent {
    constructor(authService, tokenStorage, _router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this._router = _router;
        this.form = {
            email: null,
            password: null
        };
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.router = '';
        this.roles = [];
        this.router = this._router.url;
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getUser().roles;
            this._router.navigate(["dashboard"]);
        }
    }
    onSubmit() {
        const { email, password } = this.form;
        this.authService.login(email, password, 'yes').subscribe(data => {
            this.tokenStorage.saveToken(data?.payload?.token);
            this.tokenStorage.saveUser(data?.payload?.userInfo);
            this.isLoginFailed = false;
            this.roles = this.tokenStorage.getUser().roles;
            this._router.navigate(['/dashboard'])
                .then(() => {
                console.log('reload');
                window.location.reload();
            });
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 6, consts: [[1, "container-fluid", "bg-primary", "full-div", "login"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "col-md-7", "col-11", "mx-auto", "max-w-login"], [1, "row"], [1, "col", "text-center"], ["src", "assets/login.svg", "alt", "logo", 1, "logo-login", "mb-3"], [1, "text-white"], [1, "text-white", "mb-4"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "mb-3", "col-12"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "mb-1", "col-12"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "mb-3", "col-12", "text-end"], ["href", "#", 1, "forgot", 3, "routerLink"], [1, "btn", "btn-primary", "col-12", "d-flex", "justify-content-between", "loginBtn"], ["src", "assets/right-arrow.svg", "alt", ""], [1, "form-group"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Hi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Welcome to 4SEE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eit dolore magna aliqua");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.form.valid && ctx.onSubmit()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.form.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.form.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r1 == null ? null : _r1.errors) && (_r0 == null ? null : _r0.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r3 == null ? null : _r3.errors) && (_r0 == null ? null : _r0.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/forgot-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.submitted && ctx.isLoginFailed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: [".max-w-login[_ngcontent-%COMP%] {\r\n    max-width: 360px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo-login[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 15px\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-weight: 300;\r\n    font-size: 12px;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-right: -10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4LXctbG9naW4ge1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nby1sb2dpbiB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ0biBpbWcge1xyXG4gICAgd2lkdGg6IDE1cHhcclxufVxyXG5cclxuLmxvZ2luQnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW5CdG46aG92ZXIgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://4see.uiplay.co.za:3000/api/v1/',
    //apiURL: 'http://localhost:6005/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map