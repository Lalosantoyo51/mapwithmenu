"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var auth_services_1 = require("../../../services/auth.services");
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
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, auth_services_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFDL0IsaUVBQTJEO0FBQzNELGlGQUFrRTtBQUNsRSwrREFBaUY7QUFTakY7SUFPSSx3QkFBcUIsSUFBVSxFQUFVLE1BQXlCLEVBQVUsV0FBdUI7UUFBOUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUssaUNBQVEsR0FBZDs7Ozs7OzZCQUNRLENBQUEsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUEsRUFBMUMsd0JBQTBDO3dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDbEIsT0FBTyxFQUFFLHdCQUF3Qjt5QkFDcEMsQ0FBQyxDQUFDOzs7d0JBR0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLE9BQU8sRUFBRSxhQUFhO3lCQUN6QixDQUFDLENBQUM7d0JBRUgscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dDQUM3RCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQ0FDbEIsT0FBTyxFQUFFLCtCQUErQjtpQ0FDM0MsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDSixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUMxQixDQUFDLENBQUMsRUFBQTs7d0JBUEYsU0FPRSxDQUFDO3dCQUdILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRzVEO0lBOUNRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBRXhDLENBQUM7eUNBUTZCLFdBQUksRUFBbUIseUJBQWdCLEVBQXNCLDJCQUFXO09BUDFGLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzXCJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBGZWVkYmFjaywgRmVlZGJhY2tUeXBlLCBGZWVkYmFja1Bvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2dcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxuICAgXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGluZGljYXRvcjogTG9hZGluZ0luZGljYXRvcjtcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBGZWVkYmFjaztcblxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UgKSB7IFxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBnb1RvU2lnblVwKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2luZ3VwJ10seyBjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdvVG9ob21lKCl7XG4gICAgICAgIGlmICh0aGlzLnVzZXJuYW1lID09ICcnIHx8IHRoaXMucGFzc3dvcmQgPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sud2FybmluZyh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMbGVuYSB0b2RvcyBsb3MgY2FtcG9zXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5zaG93KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNhcmdhbmRvLi4uXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ0luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sud2FybmluZyh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGFzIGNyZWRlbmNpYWxlcyBubyBjb2luY2lkZW5cIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dJbigpKVxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLHsgY2xlYXJIaXN0b3J5OnRydWV9KTtcblxuICAgICAgICB9XG4gICAgfVxufSJdfQ==