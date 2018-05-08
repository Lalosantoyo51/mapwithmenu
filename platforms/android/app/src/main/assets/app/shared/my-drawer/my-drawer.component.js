"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../get.services/get.services");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = /** @class */ (function (_super) {
    __extends(MyDrawerComponent, _super);
    function MyDrawerComponent(router, authService, myService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.authService = authService;
        _this.myService = myService;
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
                        //get data user
                        this.getuser();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    MyDrawerComponent.prototype.getuser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //console.log(JSON.stringify(this.user.phone));
                this.myService.getData('seller/' + this.user.id)
                    .subscribe(function (data) {
                    //console.log(JSON.stringify( this.getdata = data["usuario"]))
                    _this.getdata = data['usuario'];
                    _this.info = [];
                    // Esto es exactamente lo mismo que
                    for (var i = 0; i < _this.getdata.length; i++) {
                        //console.log(JSON.stringify(this.getdata[i]['names']));
                        _this.info.push(_this.getdata[i]['name'] + " " + _this.getdata[i]["last_name"]);
                    }
                }, function (error) {
                });
                return [2 /*return*/];
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
            styleUrls: ["./my-drawer.component.scss"],
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, auth_service_1.AuthService, get_services_1.MyHttpGetService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}(observable_1.Observable));
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsOENBQXdEO0FBSXhELDREQUEwRDtBQUMxRCxzREFBK0Q7QUFDL0QsZ0VBQWlFO0FBR2pFOzs7OERBRzhEO0FBUzlEO0lBQXVDLHFDQUFVO0lBWTdDLDJCQUFxQixNQUF5QixFQUFVLFdBQXVCLEVBQVMsU0FBMkI7UUFBbkgsWUFDSSxpQkFBTyxTQUNWO1FBRm9CLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsaUJBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFbkgsQ0FBQztJQUVLLG9DQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxLQUFBLElBQUksQ0FBQTt3QkFBUSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQW5ELEdBQUssSUFBSSxHQUFHLFNBQXVDLENBQUM7d0JBQ3RELGVBQWU7d0JBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7OztLQUNsQjtJQUdELDBDQUFjLEdBQWQsVUFBZSxTQUFpQjtRQUM1QixNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUNLLG1DQUFPLEdBQWI7Ozs7Z0JBRUksK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7cUJBQzdDLFNBQVMsQ0FBQyxVQUFDLElBQUk7b0JBQ1osOERBQThEO29CQUM5RCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0JBR2YsbUNBQW1DO29CQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLHdEQUF3RDt3QkFDeEQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRSxHQUFHLEdBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxDQUFDO2dCQUVMLENBQUMsRUFBQyxVQUFDLEtBQUs7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDTjtJQUVLLGtDQUFNLEdBQVo7OztnQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Ozs7S0FDOUQ7SUExQ1E7UUFBUixZQUFLLEVBQUU7O3NEQUFpQjtJQUNoQjtRQUFSLFlBQUssRUFBRTs7MkRBQXNCO0lBUnJCLGlCQUFpQjtRQVI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMsK0JBQWdCLENBQUM7U0FFaEMsQ0FBQzt5Q0FhZ0MseUJBQWdCLEVBQXNCLDBCQUFXLEVBQW9CLCtCQUFnQjtPQVoxRyxpQkFBaUIsQ0FrRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxERCxDQUF1Qyx1QkFBVSxHQWtEaEQ7QUFsRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBnZXRCb29sZWFuLHNldEJvb2xlYW59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNeUh0dHBHZXRTZXJ2aWNlIH1mcm9tIFwiLi4vLi4vZ2V0LnNlcnZpY2VzL2dldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogS2VlcCBkYXRhIHRoYXQgaXMgZGlzcGxheWVkIGluIHlvdXIgYXBwIGRyYXdlciBpbiB0aGUgTXlEcmF3ZXIgY29tcG9uZW50IGNsYXNzLlxuKiBBZGQgbmV3IGRhdGEgb2JqZWN0cyB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIGRyYXdlciBoZXJlIGluIHRoZSBmb3JtIG9mIHByb3BlcnRpZXMuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZHJhd2VyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci5jb21wb25lbnQuc2Nzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlXVxuXG59KVxuZXhwb3J0IGNsYXNzIE15RHJhd2VyQ29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHVibGljIG9yZGVyczphbnlbXTtcbiAgICBwdWJsaWMgZmxvb3I6QXJyYXk8c3RyaW5nPlxuICAgIHB1YmxpYyBpc0l0ZW1WaXNpYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBteXBsYWNlczpib29sZWFuO1xuICAgIHB1YmxpYyBnZXRkYXRhOiBhbnlbXTtcbiAgICBwdWJsaWMgaW5mbzogQXJyYXk8c3RyaW5nPjtcbiAgICBASW5wdXQoKSBtb3N0cmFyOmJvb2xlYW47XG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XG5cbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSApIHsgXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudXNlci50b1Byb21pc2UoKTtcbiAgICAgIC8vZ2V0IGRhdGEgdXNlclxuICAgICAgICB0aGlzLmdldHVzZXIoKTtcbiAgICB9XG4gICAgXG5cbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0dXNlcigpe1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIucGhvbmUpKTtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgnc2VsbGVyLycrdGhpcy51c2VyLmlkKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldGRhdGEgPSBkYXRhW1widXN1YXJpb1wiXSkpXG4gICAgICAgICAgICB0aGlzLmdldGRhdGEgPSBkYXRhWyd1c3VhcmlvJ107XG4gICAgICAgICAgICB0aGlzLmluZm8gPSBbXTtcbiAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEVzdG8gZXMgZXhhY3RhbWVudGUgbG8gbWlzbW8gcXVlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0ZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRkYXRhW2ldWyduYW1lcyddKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvLnB1c2godGhpcy5nZXRkYXRhW2ldWyduYW1lJ10rIFwiIFwiKyB0aGlzLmdldGRhdGFbaV1bXCJsYXN0X25hbWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sKGVycm9yKSA9PiB7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgICAgIFxuICAgIGFzeW5jIGxvZ091dCgpe1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10seyBjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xuICAgIH1cbn1cbiJdfQ==