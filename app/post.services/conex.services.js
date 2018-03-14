"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.SERVER_URL = 'http://192.168.0.107:8000/';
        this.API_URL = this.SERVER_URL + 'api/v1/';
        this.HTTP_AUTH_OPTIONS = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZXguc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25leC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBK0Q7QUFHL0Q7SUFVRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVI1QixlQUFVLEdBQVksNEJBQTRCLENBQUM7UUFDcEQsWUFBTyxHQUFZLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQy9DLHNCQUFpQixHQUFHO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUE7SUFFc0MsQ0FBQztJQVY3QixXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBV2UsaUJBQVU7T0FWekIsV0FBVyxDQVd2QjtJQUFELGtCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCByZW1vdmUgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xu4oCLXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIEhUVFBfT1BUSU9OUzogYW55O1xuICBwcml2YXRlIFNFUlZFUl9VUkwgOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMC4xMDc6ODAwMC8nO1xuICBwdWJsaWMgQVBJX1VSTCA6IHN0cmluZyA9IHRoaXMuU0VSVkVSX1VSTCArICdhcGkvdjEvJztcbiAgcHVibGljIEhUVFBfQVVUSF9PUFRJT05TID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG59XG7igIsiXX0=