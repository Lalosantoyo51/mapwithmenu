"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.GRANT_TYPE = 'password';
        this.CLIENT_ID = 2;
        this.CLIENT_SECRET = '6DpcZr8bd6BeDQHcrf1DHylWzKwZksH92WKSsKOz';
        this.SCOPE = '*';
        this.SERVER_URL = 'http://familiaburrera.tk/';
        this.API_URL = this.SERVER_URL + 'api/v1/';
        this.HTTP_AUTH_OPTIONS = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    /**
     * Register to a user.
     * @param form Form with all fields.
     * @returns Promise<any>
     */
    /**
     * Login to a user.
     * @param username User's email.
     * @param password Password.
     * @returns Promise<any>
     */
    AuthService.prototype.logIn = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var form, response$;
            return __generator(this, function (_a) {
                form = {
                    grant_type: this.GRANT_TYPE,
                    client_id: this.CLIENT_ID,
                    client_secret: this.CLIENT_SECRET,
                    username: username,
                    password: password,
                    scope: this.SCOPE,
                };
                response$ = this.http.post(this.SERVER_URL + "oauth/token", form, this.HTTP_AUTH_OPTIONS);
                response$.subscribe(function (token) {
                    _this.access_token = token.access_token;
                    _this.refresh_token = token.refresh_token;
                });
                return [2 /*return*/, response$.toPromise()];
            });
        });
    };
    /**
     * Close session and delete the tokens.
     */
    AuthService.prototype.logOut = function () {
        application_settings_1.remove('access_token');
        application_settings_1.remove('refresh_token');
    };
    /**
     * Determine if the user is login.
     */
    AuthService.prototype.isLogIn = function () {
        return this.access_token != null;
    };
    Object.defineProperty(AuthService.prototype, "access_token", {
        get: function () {
            return application_settings_1.getString('access_token');
        },
        set: function (token) {
            application_settings_1.setString('access_token', token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refresh_token", {
        get: function () {
            return application_settings_1.getString('refresh_token');
        },
        set: function (token) {
            application_settings_1.setString('refresh_token', token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "HTTP_OPTIONS", {
        get: function () {
            return {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.access_token
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.http.get(this.API_URL + "auth/user", this.HTTP_OPTIONS);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.reset = function (email) {
        return this.http.post(this.API_URL + "auth/reset", { email: email }, this.HTTP_AUTH_OPTIONS).toPromise();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQW9FO0FBQ3BFLDZDQUErRDtBQUsvRDtJQVlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWDVCLGVBQVUsR0FBWSxVQUFVLENBQUM7UUFDakMsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUN2QixrQkFBYSxHQUFZLDBDQUEwQyxDQUFDO1FBQ3BFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZUFBVSxHQUFZLDJCQUEyQixDQUFDO1FBQ25ELFlBQU8sR0FBWSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRztZQUN4QixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFBO0lBQ3NDLENBQUM7SUFDeEM7Ozs7T0FJRztJQUNIOzs7OztPQUtHO0lBQ1UsMkJBQUssR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxRQUFnQjs7Ozs7Z0JBQzdDLElBQUksR0FBRztvQkFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO29CQUNqQyxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQTtnQkFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBWTtvQkFDN0IsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFBO29CQUN0QyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUE7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNILHNCQUFPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQzs7O0tBQ2hDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBTSxHQUFiO1FBQ0ksNkJBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2Qiw2QkFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRDs7T0FFRztJQUNJLDZCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUNELHNCQUFJLHFDQUFZO2FBR2hCO1lBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUxELFVBQWlCLEtBQWM7WUFDM0IsZ0NBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxzQ0FBYTthQUdqQjtZQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7YUFMRCxVQUFrQixLQUFhO1lBQzNCLGdDQUFTLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBSUQsc0JBQUkscUNBQVk7YUFBaEI7WUFDSSxNQUFNLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztvQkFDckIsY0FBYyxFQUFHLGtCQUFrQjtvQkFDbkMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWTtpQkFDakQsQ0FBQzthQUNMLENBQUE7UUFDTCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sSUFBSSxDQUFDLE9BQU8sR0FBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBQ0QsMkJBQUssR0FBTCxVQUFNLEtBQWE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEgsQ0FBQztJQTlFUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBYWlCLGlCQUFVO09BWjNCLFdBQVcsQ0ErRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQS9FRCxJQStFQztBQS9FWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIHJlbW92ZSB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvdG9rZW4ubW9kZWxcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIEdSQU5UX1RZUEUgOiBzdHJpbmcgPSAncGFzc3dvcmQnO1xuICAgIHByaXZhdGUgQ0xJRU5UX0lEIDogbnVtYmVyID0gMjtcbiAgICBwcml2YXRlIENMSUVOVF9TRUNSRVQgOiBzdHJpbmcgPSAnNkRwY1pyOGJkNkJlRFFIY3JmMURIeWxXekt3WmtzSDkyV0tTc0tPeic7XG4gICAgcHJpdmF0ZSBTQ09QRTogc3RyaW5nID0gJyonO1xuICAgIHByaXZhdGUgU0VSVkVSX1VSTCA6IHN0cmluZyA9ICdodHRwOi8vZmFtaWxpYWJ1cnJlcmEudGsvJztcbiAgICBwdWJsaWMgQVBJX1VSTCA6IHN0cmluZyA9IHRoaXMuU0VSVkVSX1VSTCArICdhcGkvdjEvJztcbiAgICBwcml2YXRlIEhUVFBfQVVUSF9PUFRJT05TID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0byBhIHVzZXIuXG4gICAgICogQHBhcmFtIGZvcm0gRm9ybSB3aXRoIGFsbCBmaWVsZHMuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgLyoqXG4gICAgICogTG9naW4gdG8gYSB1c2VyLlxuICAgICAqIEBwYXJhbSB1c2VybmFtZSBVc2VyJ3MgZW1haWwuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBsb2dJbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xuICAgICAgICB2YXIgZm9ybSA9IHtcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IHRoaXMuR1JBTlRfVFlQRSxcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLkNMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICBzY29wZTogdGhpcy5TQ09QRSxcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UkID0gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLlNFUlZFUl9VUkwrIFwib2F1dGgvdG9rZW5cIiwgZm9ybSwgdGhpcy5IVFRQX0FVVEhfT1BUSU9OUyk7XG4gICAgICAgIHJlc3BvbnNlJC5zdWJzY3JpYmUoKHRva2VuOiBUb2tlbik9PntcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gdG9rZW4uYWNjZXNzX3Rva2VuXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSB0b2tlbi5yZWZyZXNoX3Rva2VuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UkLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSBzZXNzaW9uIGFuZCBkZWxldGUgdGhlIHRva2Vucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nT3V0KCk6IHZvaWQge1xuICAgICAgICByZW1vdmUoJ2FjY2Vzc190b2tlbicpO1xuICAgICAgICByZW1vdmUoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGlzIGxvZ2luLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0xvZ0luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NfdG9rZW4gIT0gbnVsbDtcbiAgICB9XG4gICAgc2V0IGFjY2Vzc190b2tlbih0b2tlbiA6IHN0cmluZykge1xuICAgICAgICBzZXRTdHJpbmcoJ2FjY2Vzc190b2tlbicsIHRva2VuKTtcbiAgICB9XG4gICAgZ2V0IGFjY2Vzc190b2tlbigpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZygnYWNjZXNzX3Rva2VuJyk7XG4gICAgfVxuICAgIHNldCByZWZyZXNoX3Rva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKCdyZWZyZXNoX3Rva2VuJywgdG9rZW4pO1xuICAgIH1cbiAgICBnZXQgcmVmcmVzaF90b2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZygncmVmcmVzaF90b2tlbicpO1xuICAgIH1cbiAgICBnZXQgSFRUUF9PUFRJT05TKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzX3Rva2VuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB1c2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyPih0aGlzLkFQSV9VUkwrIFwiYXV0aC91c2VyXCIsIHRoaXMuSFRUUF9PUFRJT05TKTtcbiAgICB9XG4gICAgcmVzZXQoZW1haWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLkFQSV9VUkwgKyBcImF1dGgvcmVzZXRcIiwgeyBlbWFpbDogZW1haWwgfSwgdGhpcy5IVFRQX0FVVEhfT1BUSU9OUykudG9Qcm9taXNlKCk7XG4gICAgfVxufSJdfQ==