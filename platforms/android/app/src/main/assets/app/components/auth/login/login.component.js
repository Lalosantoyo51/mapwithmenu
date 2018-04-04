"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var auth_service_1 = require("../../../services/auth.service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_feedback_1 = require("nativescript-feedback");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, authService) {
        this.page = page;
        this.router = router;
        this.authService = authService;
        this.page.actionBarHidden = true;
        this.indicator = new nativescript_loading_indicator_1.LoadingIndicator();
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goToSignUp = function () {
        this.router.navigate(['singup'], { clearHistory: true });
    };
    LoginComponent.prototype.goTohome = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username == '' || this.password == '')) return [3 /*break*/, 1];
                        this.feedback.warning({
                            message: "Llena todos los campos"
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        this.indicator.show({
                            message: "Cargando..."
                        });
                        return [4 /*yield*/, this.authService.logIn(this.username, this.password).catch(function () {
                                _this.indicator.hide();
                                _this.feedback.warning({
                                    message: "Las credenciales no coinciden"
                                });
                            }).then(function () {
                                _this.indicator.hide();
                            })];
                    case 2:
                        _a.sent();
                        if (this.authService.isLogIn())
                            this.router.navigate(['/'], { clearHistory: true });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-log",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.scss'],
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFDL0IsK0RBQTBEO0FBQzFELGlGQUFrRTtBQUNsRSwrREFBaUY7QUFTakY7SUFPSSx3QkFBcUIsSUFBVSxFQUFVLE1BQXlCLEVBQVUsV0FBdUI7UUFBOUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUssaUNBQVEsR0FBZDs7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUEsRUFBMUMsd0JBQTBDO3dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDbEIsT0FBTyxFQUFFLHdCQUF3Qjt5QkFDcEMsQ0FBQyxDQUFDOzs7d0JBR0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLE9BQU8sRUFBRSxhQUFhO3lCQUN6QixDQUFDLENBQUM7d0JBRUgscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dDQUM3RCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDbEIsT0FBTyxFQUFFLCtCQUErQjtpQ0FDM0MsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDSixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUMxQixDQUFDLENBQUMsRUFBQTs7d0JBUEYsU0FPRSxDQUFDO3dCQUdILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRzVEO0lBOUNRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBRXhDLENBQUM7eUNBUTZCLFdBQUksRUFBbUIseUJBQWdCLEVBQXNCLDBCQUFXO09BUDFGLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIlxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IEZlZWRiYWNrLCBGZWVkYmFja1R5cGUsIEZlZWRiYWNrUG9zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ10sXG4gICBcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIHByaXZhdGUgaW5kaWNhdG9yOiBMb2FkaW5nSW5kaWNhdG9yO1xuICAgIHByaXZhdGUgZmVlZGJhY2s6IEZlZWRiYWNrO1xuXG4gICAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSApIHsgXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmluZGljYXRvciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIGdvVG9TaWduVXAoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzaW5ndXAnXSx7IGNsZWFySGlzdG9yeTp0cnVlfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ29Ub2hvbWUoKXtcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUgPT0gJycgfHwgdGhpcy5wYXNzd29yZCA9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxsZW5hIHRvZG9zIGxvcyBjYW1wb3NcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLnNob3coe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2FyZ2FuZG8uLi5cIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nSW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYXMgY3JlZGVuY2lhbGVzIG5vIGNvaW5jaWRlblwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYodGhpcy5hdXRoU2VydmljZS5pc0xvZ0luKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10seyBjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xuXG4gICAgICAgIH1cbiAgICB9XG59Il19