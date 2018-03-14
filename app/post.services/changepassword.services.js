"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var conex_services_1 = require("./conex.services");
var core_1 = require("@angular/core");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProfileService.prototype.create = function (form) {
        console.log(JSON.stringify(form));
        return this.http.post(this.URL, form, this.authService.HTTP_AUTH_OPTIONS);
    };
    Object.defineProperty(ProfileService.prototype, "URL", {
        get: function () {
            return this.authService.API_URL + 'passUser';
        },
        enumerable: true,
        configurable: true
    });
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, conex_services_1.AuthService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcGFzc3dvcmQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFuZ2VwYXNzd29yZC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErRDtBQUMvRCxtREFBK0M7QUFJL0Msc0NBQTJDO0FBRzNDO0lBQ0ksd0JBQW9CLElBQWdCLEVBQVUsV0FBd0I7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUUxRSwrQkFBTSxHQUFOLFVBQU8sSUFBZ0I7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFhLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0Qsc0JBQUksK0JBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFUUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBRWlCLGlCQUFVLEVBQXVCLDRCQUFXO09BRDdELGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2NvbmV4LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHt1c2VyQ2xpZW50fSBmcm9tIFwiLi4vbW9kZWxVc2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuICBcbiAgICBjcmVhdGUoZm9ybTogdXNlckNsaWVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvcm0pKVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8dXNlckNsaWVudD4odGhpcy5VUkwsIGZvcm0sIHRoaXMuYXV0aFNlcnZpY2UuSFRUUF9BVVRIX09QVElPTlMpO1xuICAgIH1cbiAgICBnZXQgVVJMKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5BUElfVVJMICsgJ3Bhc3NVc2VyJztcbiAgICB9XG59Il19