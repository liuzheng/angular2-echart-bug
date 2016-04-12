/**
 * Created by liuzheng on 4/12/16.
 */

import {bootstrap}        from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';
import {Component}         from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import  'rxjs/Rx';
declare var jQuery:any;

import {DashboardComponent} from './dashboard';

@Component({
    template: '',
})
export class IndexComponent {
}

@Component({
    selector: 'angular2',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Index', component: IndexComponent, useAsDefault: true},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
])


export class AppComponent {
    constructor(private http:Http,
                private _router:Router) {
    }

    ngOnInit() {
        this._router.navigate(['Dashboard']);
    }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
