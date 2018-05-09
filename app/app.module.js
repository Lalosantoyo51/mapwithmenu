"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("./services/auth.service");
var angular_1 = require("nativescript-drop-down/angular");
var auth_guard_1 = require("./guards/auth.guard");
var nativescript_angular_1 = require("nativescript-angular");
var conex_service_1 = require("./services/conex/conex.service");
var userlocation_service_1 = require("./services/conex/userlocation.service");
var locationstreet_service_1 = require("./services/conex/locationstreet.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_1.DropDownModule,
                nativescript_angular_1.NativeScriptFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                locationstreet_service_1.Placestreet,
                userlocation_service_1.UserLocationService,
                conex_service_1.AuthService2,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard,
                {
                    provide: core_1.NgModuleFactoryLoader,
                    useClass: router_1.NSModuleFactoryLoader
                }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHNEQUFvRTtBQUNwRSx3REFBc0Q7QUFDdEQsMERBQWdFO0FBQ2hFLGtEQUFnRDtBQUNoRCw2REFBK0Q7QUFDL0QsZ0VBQThEO0FBQzlELDhFQUEwRTtBQUMxRSxrRkFBc0U7QUFnQ3RFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEvQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwwQ0FBNEI7Z0JBQzVCLHdCQUFjO2dCQUNkLDhDQUF1QjthQUUxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLG9DQUFXO2dCQUNYLDBDQUFtQjtnQkFDbkIsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsc0JBQVM7Z0JBQ1Q7b0JBQ0ksT0FBTyxFQUFFLDRCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLDhCQUFxQjtpQkFDbEM7YUFFSjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vZ3VhcmRzL2F1dGguZ3VhcmRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZTIgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25leC9jb25leC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyTG9jYXRpb25TZXJ2aWNlfWZyb20gXCIuL3NlcnZpY2VzL2NvbmV4L3VzZXJsb2NhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQbGFjZXN0cmVldCB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbmV4L2xvY2F0aW9uc3RyZWV0LnNlcnZpY2VcIjtcbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQbGFjZXN0cmVldCxcbiAgICAgICAgVXNlckxvY2F0aW9uU2VydmljZSxcbiAgICAgICAgQXV0aFNlcnZpY2UyLFxuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICB7IFxuICAgICAgICAgICAgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBcbiAgICAgICAgICAgIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXIgXG4gICAgICAgIH1cbiAgIFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=