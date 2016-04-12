/**
 * Created by liuzheng on 4/12/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
require('rxjs/Rx');
var dashboard_1 = require('./dashboard');
var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent = __decorate([
        core_1.Component({
            template: ''
        })
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
var AppComponent = (function () {
    function AppComponent(http, _router) {
        this.http = http;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['Dashboard']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular2',
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Index', component: IndexComponent, useAsDefault: true },
            { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent },
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=index.js.map