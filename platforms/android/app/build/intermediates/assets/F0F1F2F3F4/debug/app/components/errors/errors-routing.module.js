"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var offline_component_1 = require("./offline/offline.component");
var gps_component_1 = require("./gps/gps.component");
var location_component_1 = require("./location/location.component");
var routes = [
    { path: "offline", component: offline_component_1.OfflineComponent },
    { path: "gps", component: gps_component_1.GpsComponent },
    { path: "location", component: location_component_1.LocationComponent },
];
var ErrorsRoutingModule = /** @class */ (function () {
    function ErrorsRoutingModule() {
    }
    ErrorsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ErrorsRoutingModule);
    return ErrorsRoutingModule;
}());
exports.ErrorsRoutingModule = ErrorsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3JzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxpRUFBOEQ7QUFDOUQscURBQW1EO0FBQ25ELG9FQUFrRTtBQUdsRSxJQUFNLE1BQU0sR0FBVztJQUVuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtJQUN4QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0NBRXJELENBQUM7QUFNRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBSi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgT2ZmbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vb2ZmbGluZS9vZmZsaW5lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3BzQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3BzL2dwcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cbiAgICB7IHBhdGg6IFwib2ZmbGluZVwiLCBjb21wb25lbnQ6IE9mZmxpbmVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZ3BzXCIsIGNvbXBvbmVudDogR3BzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvY2F0aW9uXCIsIGNvbXBvbmVudDogTG9jYXRpb25Db21wb25lbnQgfSwgXG4gXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JzUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==