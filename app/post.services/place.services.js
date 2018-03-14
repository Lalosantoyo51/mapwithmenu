"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var conex_services_1 = require("./conex.services");
var core_1 = require("@angular/core");
var Placeservice = (function () {
    function Placeservice(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    Placeservice.prototype.get = function () {
        return this.http.get(this.URL, this.authService.HTTP_AUTH_OPTIONS);
    };
    Placeservice.prototype.create = function (form) {
        console.log(JSON.stringify(form));
        return this.http.post(this.URL, form, this.authService.HTTP_AUTH_OPTIONS);
    };
    Object.defineProperty(Placeservice.prototype, "URL", {
        get: function () {
            return this.authService.API_URL + 'zoneout';
        },
        enumerable: true,
        configurable: true
    });
    Placeservice = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, conex_services_1.AuthService])
    ], Placeservice);
    return Placeservice;
}());
exports.Placeservice = Placeservice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Uuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErRDtBQUMvRCxtREFBK0M7QUFHL0Msc0NBQTJDO0FBSTNDO0lBQ0ksc0JBQW9CLElBQWdCLEVBQVUsV0FBd0I7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUUxRSwwQkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTlFLENBQUM7SUFDRCw2QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNELHNCQUFJLDZCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBYlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVSxFQUF1Qiw0QkFBVztPQUQ3RCxZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9jb25leC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cGxhY2V9IGZyb20gXCIuLi9tb2RlcGxhY2UvcGxhY2UubW9kZWxcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxhY2VzZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8cGxhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8cGxhY2U+KHRoaXMuVVJMLCB0aGlzLmF1dGhTZXJ2aWNlLkhUVFBfQVVUSF9PUFRJT05TKTtcblxuICAgIH1cbiAgICBjcmVhdGUoZm9ybTpwbGFjZSApe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmb3JtKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHBsYWNlPih0aGlzLlVSTCwgZm9ybSwgdGhpcy5hdXRoU2VydmljZS5IVFRQX0FVVEhfT1BUSU9OUyk7XG4gICAgfVxuICAgIGdldCBVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLkFQSV9VUkwgKyAnem9uZW91dCc7XG4gICAgfVxufSJdfQ==