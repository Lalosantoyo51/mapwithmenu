"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "orders/orders", pathMatch: "full" },
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
    { path: "todos", loadChildren: "./components/todos/todos.module#TodosModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDL0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlEQUFpRCxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsNkNBQTZDLEVBQUU7SUFDOUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSw2Q0FBNkMsRUFBRTtJQUM5RSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsdUNBQXVDLEVBQUU7Q0FTekUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwib3JkZXJzL29yZGVyc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGxvYWRDaGlsZHJlbjogXCIuL2Jyb3dzZS9icm93c2UubW9kdWxlI0Jyb3dzZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJDaGFuZ2VwYXNzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NoYW5nZXBhc3MvY2hhbmdlcGFzcy5tb2R1bGUjQ2hhbmdlcGFzc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImF1dGhcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJlcnJvcnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9lcnJvcnMvZXJyb3JzLm1vZHVsZSNFcnJvcnNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJvcmRlcnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLm1vZHVsZSNPcmRlcnNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJhYm91dFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0Lm1vZHVsZSNBYm91dE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInRvZG9zXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MubW9kdWxlI1RvZG9zTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwicHJvZmlsZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUjUHJvZmlsZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL21hcC9tYXAubW9kdWxlI01hcE1vZHVsZVwiIH0sXG5cblxuXG5cblxuXG5cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==