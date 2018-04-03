"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "sellers/eat", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "Changepass", loadChildren: "./changepass/changepass.module#ChangepassModule" },
    { path: "auth", loadChildren: "./components/auth/auth.module#AuthModule" },
    { path: "errors", loadChildren: "./components/errors/errors.module#ErrorsModule" },
    { path: "orders", loadChildren: "./components/orders/orders.module#OrdersModule" },
    { path: "about", loadChildren: "./components/about/about.module#AboutModule" },
    { path: "sellers", loadChildren: "./components/sellers/sellers.module#SellersModule" },
    { path: "profile", loadChildren: "./components/profile/profile.module#ProfileModule" },
    { path: "map", loadChildren: "./components/map/map.module#MapModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDL0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlEQUFpRCxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsNkNBQTZDLEVBQUU7SUFDOUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxtREFBbUQsRUFBRTtJQUN0RixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsdUNBQXVDLEVBQUU7Q0FTekUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwic2VsbGVycy9lYXRcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9icm93c2UvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlI1NldHRpbmdzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiQ2hhbmdlcGFzc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jaGFuZ2VwYXNzL2NoYW5nZXBhc3MubW9kdWxlI0NoYW5nZXBhc3NNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJhdXRoXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZHVsZSNBdXRoTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZXJyb3JzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5tb2R1bGUjRXJyb3JzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwib3JkZXJzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5tb2R1bGUjT3JkZXJzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYWJvdXRcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9hYm91dC9hYm91dC5tb2R1bGUjQWJvdXRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZWxsZXJzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvc2VsbGVycy9zZWxsZXJzLm1vZHVsZSNTZWxsZXJzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwicHJvZmlsZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUjUHJvZmlsZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL21hcC9tYXAubW9kdWxlI01hcE1vZHVsZVwiIH0sXG5cblxuXG5cblxuXG5cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==