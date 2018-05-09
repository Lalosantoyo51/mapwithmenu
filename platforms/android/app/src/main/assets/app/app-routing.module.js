"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var routes = [
    { path: "", redirectTo: "orders/order", pathMatch: "full" },
    { path: "orders", canActivate: [auth_guard_1.AuthGuard], loadChildren: "./components/orders/orders.module#OrdersModule" },
    { path: "auth", loadChildren: "./components/auth/auth.module#AuthModule" },
    { path: "errors", loadChildren: "./components/errors/errors.module#ErrorsModule" },
    { path: "about", loadChildren: "./components/about/about.module#AboutModule" },
    { path: "sellers", loadChildren: "./components/sellers/sellers.module#SellersModule" },
    { path: "profile", loadChildren: "./components/profile/profile.module#ProfileModule" },
    { path: "map", loadChildren: "./components/map/map.module#MapModule" },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSxrREFBZ0Q7QUFFaEQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFDLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUMxRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFO0lBQzFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0RBQWdELEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFJLFlBQVksRUFBRSw2Q0FBNkMsRUFBRTtJQUNoRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7SUFDdEYsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSx1Q0FBdUMsRUFBRTtJQUN0RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFO0NBQzdFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2d1YXJkcy9hdXRoLmd1YXJkXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJvcmRlcnMvb3JkZXJcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJvcmRlcnNcIixjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLm1vZHVsZSNPcmRlcnNNb2R1bGVcIiB9LCAgICBcbiAgICB7IHBhdGg6IFwiYXV0aFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2F1dGgvYXV0aC5tb2R1bGUjQXV0aE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImVycm9yc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2Vycm9ycy9lcnJvcnMubW9kdWxlI0Vycm9yc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImFib3V0XCIsICAgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9hYm91dC9hYm91dC5tb2R1bGUjQWJvdXRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZWxsZXJzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvc2VsbGVycy9zZWxsZXJzLm1vZHVsZSNTZWxsZXJzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwicHJvZmlsZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUjUHJvZmlsZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL21hcC9tYXAubW9kdWxlI01hcE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImNoYXRcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9jaGF0L2NoYXQubW9kdWxlI0NoYXRNb2R1bGVcIiB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==