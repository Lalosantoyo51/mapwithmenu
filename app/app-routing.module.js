"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var routes = [
    { path: "", redirectTo: "orders/orders", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSxrREFBZ0Q7QUFFaEQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUM1RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFDLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUMzRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFO0lBQzFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0RBQWdELEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFJLFlBQVksRUFBRSw2Q0FBNkMsRUFBRTtJQUNoRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7SUFDdEYsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSx1Q0FBdUMsRUFBRTtJQUN0RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFO0NBRzdFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2d1YXJkcy9hdXRoLmd1YXJkXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJvcmRlcnMvb3JkZXJzXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwib3JkZXJzXCIsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL29yZGVycy9vcmRlcnMubW9kdWxlI09yZGVyc01vZHVsZVwiIH0sICAgIFxuICAgIHsgcGF0aDogXCJhdXRoXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZHVsZSNBdXRoTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZXJyb3JzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5tb2R1bGUjRXJyb3JzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYWJvdXRcIiwgICBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0Lm1vZHVsZSNBYm91dE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNlbGxlcnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9zZWxsZXJzL3NlbGxlcnMubW9kdWxlI1NlbGxlcnNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJwcm9maWxlXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLm1vZHVsZSNQcm9maWxlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibWFwXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvbWFwL21hcC5tb2R1bGUjTWFwTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiY2hhdFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2NoYXQvY2hhdC5tb2R1bGUjQ2hhdE1vZHVsZVwiIH0sXG5cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==