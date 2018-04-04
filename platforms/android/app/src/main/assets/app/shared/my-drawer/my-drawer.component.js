"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = /** @class */ (function (_super) {
    __extends(MyDrawerComponent, _super);
    function MyDrawerComponent(router, authService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.authService = authService;
        return _this;
    }
    MyDrawerComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.user.toPromise()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyDrawerComponent.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.authService.logOut();
                this.router.navigate(['/auth/login'], { clearHistory: true });
                return [2 /*return*/];
            });
        });
    };
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyDrawerComponent.prototype, "mostrar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, auth_service_1.AuthService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}(observable_1.Observable));
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsOENBQXdEO0FBSXhELDREQUEwRDtBQUMxRCxzREFBK0Q7QUFFL0Q7Ozs4REFHOEQ7QUFPOUQ7SUFBdUMscUNBQVU7SUFNN0MsMkJBQXFCLE1BQXlCLEVBQVUsV0FBdUI7UUFBL0UsWUFDSSxpQkFBTyxTQUNWO1FBRm9CLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsaUJBQVcsR0FBWCxXQUFXLENBQVk7O0lBRS9FLENBQUM7SUFFSyxvQ0FBUSxHQUFkOzs7Ozs7d0JBQ0ksS0FBQSxJQUFJLENBQUE7d0JBQVEscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFuRCxHQUFLLElBQUksR0FBRyxTQUF1QyxDQUFDOzs7OztLQUN2RDtJQUVLLGtDQUFNLEdBQVo7OztnQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Ozs7S0FDOUQ7SUFDRCwwQ0FBYyxHQUFkLFVBQWUsU0FBaUI7UUFDNUIsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFuQlE7UUFBUixZQUFLLEVBQUU7O3NEQUFpQjtJQUNoQjtRQUFSLFlBQUssRUFBRTs7MkRBQXNCO0lBRnJCLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FPZ0MseUJBQWdCLEVBQXNCLDBCQUFXO09BTnRFLGlCQUFpQixDQXFCN0I7SUFBRCx3QkFBQztDQUFBLEFBckJELENBQXVDLHVCQUFVLEdBcUJoRDtBQXJCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IGdldEJvb2xlYW4sc2V0Qm9vbGVhbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBpbiB5b3VyIGFwcCBkcmF3ZXIgaW4gdGhlIE15RHJhd2VyIGNvbXBvbmVudCBjbGFzcy5cbiogQWRkIG5ldyBkYXRhIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGluIHRoZSBkcmF3ZXIgaGVyZSBpbiB0aGUgZm9ybSBvZiBwcm9wZXJ0aWVzLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWRyYXdlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXIuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBASW5wdXQoKSBtb3N0cmFyOmJvb2xlYW47XG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XG5cbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSApIHsgXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudXNlci50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgbG9nT3V0KCl7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSx7IGNsZWFySGlzdG9yeTp0cnVlfSk7XG4gICAgfVxuICAgIGlzUGFnZVNlbGVjdGVkKHBhZ2VUaXRsZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwYWdlVGl0bGUgPT09IHRoaXMuc2VsZWN0ZWRQYWdlO1xuICAgIH1cbn1cbiJdfQ==