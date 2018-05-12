"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../get.services/get.services");
var userlocation_service_1 = require("../../services/conex/userlocation.service");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = /** @class */ (function (_super) {
    __extends(MyDrawerComponent, _super);
    function MyDrawerComponent(userlocation, router, authService, myService) {
        var _this = _super.call(this) || this;
        _this.userlocation = userlocation;
        _this.router = router;
        _this.authService = authService;
        _this.myService = myService;
        //tipo building id 3
        //public latitude ="21.876871" ;
        //public longitude ="-102.262451";
        //tipo street
        //public latitude ="21.922501";
        //public longitude ="-102.304532";
        //tipo building con el id 1
        _this.latitude = "21.913840";
        _this.longitude = "-102.315723";
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
                        this.postservice();
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
    MyDrawerComponent.prototype.postservice = function () {
        var _this = this;
        this.userlocation.Mypostion({
            latitude: this.latitude,
            longitude: this.longitude
        }).subscribe(function (profile) {
            //console.log(JSON.stringify(profile));
            _this.locations = profile["Zone"];
            _this.location = [];
            //console.log(JSON.stringify(this.locations));
            console.log(_this.locations.length);
            if (_this.locations.length == 0) {
                _this.router.navigate(['/errors/location']);
            }
            for (var i = 0; i < _this.locations.length; i++) {
                _this.location.push(_this.locations[i]['type']);
                if (_this.location == "Street") {
                    console.log("estas en tipo calle");
                    _this.type_places = false;
                }
                else {
                    console.log("estas en tipo edificio");
                    _this.type_places = true;
                }
            }
        }, function (error) {
            console.log(JSON.stringify(error));
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
        __metadata("design:paramtypes", [userlocation_service_1.UserLocationService, router_1.RouterExtensions, auth_service_1.AuthService, get_services_1.MyHttpGetService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}(observable_1.Observable));
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsOENBQXdEO0FBSXhELDREQUEwRDtBQUMxRCxzREFBK0Q7QUFDL0QsZ0VBQWlFO0FBRWpFLGtGQUFnRjtBQUVoRjs7OzhEQUc4RDtBQVM5RDtJQUF1QyxxQ0FBVTtJQXVCN0MsMkJBQW9CLFlBQWdDLEVBQVUsTUFBeUIsRUFBVSxXQUF1QixFQUFTLFNBQTJCO1FBQTVKLFlBQ0ksaUJBQU8sU0FDVjtRQUZtQixrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUF0QjVKLG9CQUFvQjtRQUNwQixnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0Isa0NBQWtDO1FBQ2xDLDJCQUEyQjtRQUNwQixjQUFRLEdBQUUsV0FBVyxDQUFDO1FBQ3RCLGVBQVMsR0FBRSxhQUFhLENBQUM7O0lBZ0JoQyxDQUFDO0lBRUssb0NBQVEsR0FBZDs7Ozs7O3dCQUNJLEtBQUEsSUFBSSxDQUFBO3dCQUFRLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBbkQsR0FBSyxJQUFJLEdBQUcsU0FBdUMsQ0FBQzt3QkFDdEQsZUFBZTt3QkFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBOzs7OztLQUNyQjtJQUdELDBDQUFjLEdBQWQsVUFBZSxTQUFpQjtRQUM1QixNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUNLLG1DQUFPLEdBQWI7Ozs7Z0JBRUksK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7cUJBQzdDLFNBQVMsQ0FBQyxVQUFDLElBQUk7b0JBQ1osOERBQThEO29CQUM5RCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0JBR2YsbUNBQW1DO29CQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLHdEQUF3RDt3QkFDeEQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRSxHQUFHLEdBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxDQUFDO2dCQUVMLENBQUMsRUFBQyxVQUFDLEtBQUs7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDTjtJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDeEIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3RCLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUztTQUMzQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNqQix1Q0FBdUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsOENBQThDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNsQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtZQUM5QyxDQUFDO1lBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFBQSxJQUFJLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixDQUFDO1lBQ0wsQ0FBQztRQUdMLENBQUMsRUFBQyxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSyxrQ0FBTSxHQUFaOzs7Z0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDOzs7O0tBQzlEO0lBMUVRO1FBQVIsWUFBSyxFQUFFOztzREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7OzJEQUFzQjtJQW5CckIsaUJBQWlCO1FBUjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxTQUFTLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQztTQUVoQyxDQUFDO3lDQXdCbUMsMENBQW1CLEVBQW1CLHlCQUFnQixFQUFzQiwwQkFBVyxFQUFvQiwrQkFBZ0I7T0F2Qm5KLGlCQUFpQixDQTZGN0I7SUFBRCx3QkFBQztDQUFBLEFBN0ZELENBQXVDLHVCQUFVLEdBNkZoRDtBQTdGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IGdldEJvb2xlYW4sc2V0Qm9vbGVhbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge015SHR0cEdldFNlcnZpY2UgfWZyb20gXCIuLi8uLi9nZXQuc2VydmljZXMvZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgVXNlckxvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25leC91c2VybG9jYXRpb24uc2VydmljZVwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgaW4geW91ciBhcHAgZHJhd2VyIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXG4qIEFkZCBuZXcgZGF0YSBvYmplY3RzIHRoYXQgeW91IHdhbnQgdG8gZGlzcGxheSBpbiB0aGUgZHJhd2VyIGhlcmUgaW4gdGhlIGZvcm0gb2YgcHJvcGVydGllcy5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJNeURyYXdlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbXktZHJhd2VyLmNvbXBvbmVudC5zY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2VdXG5cbn0pXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICAvL3RpcG8gYnVpbGRpbmcgaWQgM1xuICAgIC8vcHVibGljIGxhdGl0dWRlID1cIjIxLjg3Njg3MVwiIDtcbiAgICAvL3B1YmxpYyBsb25naXR1ZGUgPVwiLTEwMi4yNjI0NTFcIjtcbiAgICAvL3RpcG8gc3RyZWV0XG4gICAgLy9wdWJsaWMgbGF0aXR1ZGUgPVwiMjEuOTIyNTAxXCI7XG4gICAgLy9wdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMzA0NTMyXCI7XG4gICAgLy90aXBvIGJ1aWxkaW5nIGNvbiBlbCBpZCAxXG4gICAgcHVibGljIGxhdGl0dWRlID1cIjIxLjkxMzg0MFwiO1xuICAgIHB1YmxpYyBsb25naXR1ZGUgPVwiLTEwMi4zMTU3MjNcIjtcbiAgICBwdWJsaWMgbG9jYXRpb247XG4gICAgcHVibGljIGxvY2F0aW9ucztcbiAgICBwdWJsaWMgb3JkZXJzOmFueVtdO1xuICAgIHB1YmxpYyBmbG9vcjpBcnJheTxzdHJpbmc+XG4gICAgcHVibGljIHR5cGVfcGxhY2VzOiBib29sZWFuO1xuICAgIHB1YmxpYyBteXBsYWNlczpib29sZWFuO1xuICAgIHB1YmxpYyBnZXRkYXRhOiBhbnlbXTtcbiAgICBwdWJsaWMgaW5mbzogQXJyYXk8c3RyaW5nPjtcbiAgICBASW5wdXQoKSBtb3N0cmFyOmJvb2xlYW47XG4gICAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XG5cbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VybG9jYXRpb246VXNlckxvY2F0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlICkgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS51c2VyLnRvUHJvbWlzZSgpO1xuICAgICAgLy9nZXQgZGF0YSB1c2VyXG4gICAgICAgIHRoaXMuZ2V0dXNlcigpO1xuICAgICAgICB0aGlzLnBvc3RzZXJ2aWNlKClcbiAgICB9XG4gICAgXG5cbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0dXNlcigpe1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIucGhvbmUpKTtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgnc2VsbGVyLycrdGhpcy51c2VyLmlkKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldGRhdGEgPSBkYXRhW1widXN1YXJpb1wiXSkpXG4gICAgICAgICAgICB0aGlzLmdldGRhdGEgPSBkYXRhWyd1c3VhcmlvJ107XG4gICAgICAgICAgICB0aGlzLmluZm8gPSBbXTtcbiAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEVzdG8gZXMgZXhhY3RhbWVudGUgbG8gbWlzbW8gcXVlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0ZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRkYXRhW2ldWyduYW1lcyddKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvLnB1c2godGhpcy5nZXRkYXRhW2ldWyduYW1lJ10rIFwiIFwiKyB0aGlzLmdldGRhdGFbaV1bXCJsYXN0X25hbWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sKGVycm9yKSA9PiB7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgICAgIFxuICAgIHBvc3RzZXJ2aWNlKCl7XG4gICAgICAgIHRoaXMudXNlcmxvY2F0aW9uLk15cG9zdGlvbih7XG4gICAgICAgICAgICBsYXRpdHVkZTp0aGlzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOnRoaXMubG9uZ2l0dWRlXG4gICAgICAgIH0pLnN1YnNjcmliZSgocHJvZmlsZSk9PntcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBwcm9maWxlW1wiWm9uZVwiXTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBbXTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhdGlvbnMpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb25zLmxlbmd0aClcbiAgICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25zLmxlbmd0aCA9PTApe1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Vycm9ycy9sb2NhdGlvbiddKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5wdXNoKHRoaXMubG9jYXRpb25zW2ldWyd0eXBlJ10pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2F0aW9uID09IFwiU3RyZWV0XCIpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVzdGFzIGVuIHRpcG8gY2FsbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZV9wbGFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXN0YXMgZW4gdGlwbyBlZGlmaWNpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlX3BsYWNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgfSwoZXJyb3IpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBsb2dPdXQoKXtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddLHsgY2xlYXJIaXN0b3J5OnRydWV9KTtcbiAgICB9XG59XG4iXX0=