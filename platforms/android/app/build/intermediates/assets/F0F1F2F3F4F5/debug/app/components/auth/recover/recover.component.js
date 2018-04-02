"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var RecoverComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function RecoverComponent(page, router) {
        this.page = page;
        this.router = router;
        this.page.actionBarHidden = true;
    }
    RecoverComponent.prototype.goToSignUp = function () {
        this.router.navigate(['singup'], { clearHistory: true });
    };
    RecoverComponent.prototype.goTohome = function () {
        this.router.navigate(['inicio'], { clearHistory: true });
    };
    RecoverComponent.prototype.repass = function () {
        this.router.navigate(['repass'], { clearHistory: true });
    };
    RecoverComponent.prototype.ngOnInit = function () {
    };
    RecoverComponent = __decorate([
        core_1.Component({
            selector: "ns-recover",
            moduleId: module.id,
            templateUrl: "./recover.component.html",
            styleUrls: ['./recover.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], RecoverComponent);
    return RecoverComponent;
}());
exports.RecoverComponent = RecoverComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBVS9CO0lBSUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUlqSCwwQkFBb0IsSUFBVSxFQUFTLE1BQXlCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUdELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBMUJRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDMUMsQ0FBQzt5Q0FVNEIsV0FBSSxFQUFrQix5QkFBZ0I7T0FUdkQsZ0JBQWdCLENBNEI1QjtJQUFELHVCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zwqB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcmVjb3ZlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWNvdmVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgIHN0eWxlVXJsczogWycuL3JlY292ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlY292ZXJDb21wb25lbnQge1xuICAgIFxuICAgIGNsZWFySGlzdG9yeTp0cnVlO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgXG4gICBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnPCoCkgeyBcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IFxuICAgIH1cblxuICAgIGdvVG9TaWduVXAoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzaW5ndXAnXSx7IGNsZWFySGlzdG9yeTp0cnVlfSk7XG4gICAgfVxuICAgIGdvVG9ob21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaW5pY2lvJ10seyBjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xuICAgIH1cbiAgICByZXBhc3MoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydyZXBhc3MnXSx7IGNsZWFySGlzdG9yeTp0cnVlfSk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICB9XG4gICBcbn0iXX0=