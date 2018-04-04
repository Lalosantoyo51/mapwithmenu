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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUFvRTtBQUNwRSw2Q0FBK0Q7QUFLL0Q7SUFZSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVg1QixlQUFVLEdBQVksVUFBVSxDQUFDO1FBQ2pDLGNBQVMsR0FBWSxDQUFDLENBQUM7UUFDdkIsa0JBQWEsR0FBWSwwQ0FBMEMsQ0FBQztRQUNwRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGVBQVUsR0FBWSwyQkFBMkIsQ0FBQztRQUNuRCxZQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUMsc0JBQWlCLEdBQUc7WUFDeEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFHLGtCQUFrQjthQUN0QyxDQUFDO1NBQ0wsQ0FBQTtJQUNzQyxDQUFDO0lBQ3hDOzs7O09BSUc7SUFDSDs7Ozs7T0FLRztJQUNVLDJCQUFLLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7O2dCQUM3QyxJQUFJLEdBQUc7b0JBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUE7Z0JBQ0csU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxVQUFVLEdBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVk7b0JBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFBO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxzQkFBTyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUM7OztLQUNoQztJQUNEOztPQUVHO0lBQ0ksNEJBQU0sR0FBYjtRQUNJLDZCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkIsNkJBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSw2QkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxzQkFBSSxxQ0FBWTthQUdoQjtZQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFMRCxVQUFpQixLQUFjO1lBQzNCLGdDQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBSUQsc0JBQUksc0NBQWE7YUFHakI7WUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBTEQsVUFBa0IsS0FBYTtZQUMzQixnQ0FBUyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHFDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDO2dCQUNILE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7b0JBQ3JCLGNBQWMsRUFBRyxrQkFBa0I7b0JBQ25DLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVk7aUJBQ2pELENBQUM7YUFDTCxDQUFBO1FBQ0wsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLElBQUksQ0FBQyxPQUFPLEdBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUNELDJCQUFLLEdBQUwsVUFBTSxLQUFhO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xILENBQUM7SUE5RVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQWFpQixpQkFBVTtPQVozQixXQUFXLENBK0V2QjtJQUFELGtCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCByZW1vdmUgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL3Rva2VuLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBHUkFOVF9UWVBFIDogc3RyaW5nID0gJ3Bhc3N3b3JkJztcbiAgICBwcml2YXRlIENMSUVOVF9JRCA6IG51bWJlciA9IDI7XG4gICAgcHJpdmF0ZSBDTElFTlRfU0VDUkVUIDogc3RyaW5nID0gJzZEcGNacjhiZDZCZURRSGNyZjFESHlsV3pLd1prc0g5MldLU3NLT3onO1xuICAgIHByaXZhdGUgU0NPUEU6IHN0cmluZyA9ICcqJztcbiAgICBwcml2YXRlIFNFUlZFUl9VUkwgOiBzdHJpbmcgPSAnaHR0cDovL2ZhbWlsaWFidXJyZXJhLnRrLyc7XG4gICAgcHVibGljIEFQSV9VUkwgOiBzdHJpbmcgPSB0aGlzLlNFUlZFUl9VUkwgKyAnYXBpL3YxLyc7XG4gICAgcHJpdmF0ZSBIVFRQX0FVVEhfT1BUSU9OUyA9IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgdG8gYSB1c2VyLlxuICAgICAqIEBwYXJhbSBmb3JtIEZvcm0gd2l0aCBhbGwgZmllbGRzLlxuICAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIExvZ2luIHRvIGEgdXNlci5cbiAgICAgKiBAcGFyYW0gdXNlcm5hbWUgVXNlcidzIGVtYWlsLlxuICAgICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9nSW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PntcbiAgICAgICAgdmFyIGZvcm0gPSB7XG4gICAgICAgICAgICBncmFudF90eXBlOiB0aGlzLkdSQU5UX1RZUEUsXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5DTElFTlRfU0VDUkVULFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuU0NPUEUsXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlJCA9IHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5TRVJWRVJfVVJMKyBcIm9hdXRoL3Rva2VuXCIsIGZvcm0sIHRoaXMuSFRUUF9BVVRIX09QVElPTlMpO1xuICAgICAgICByZXNwb25zZSQuc3Vic2NyaWJlKCh0b2tlbjogVG9rZW4pPT57XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHRva2VuLmFjY2Vzc190b2tlblxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdG9rZW4ucmVmcmVzaF90b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlJC50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2Ugc2Vzc2lvbiBhbmQgZGVsZXRlIHRoZSB0b2tlbnMuXG4gICAgICovXG4gICAgcHVibGljIGxvZ091dCgpOiB2b2lkIHtcbiAgICAgICAgcmVtb3ZlKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgICAgcmVtb3ZlKCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiB0aGUgdXNlciBpcyBsb2dpbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2dJbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzX3Rva2VuICE9IG51bGw7XG4gICAgfVxuICAgIHNldCBhY2Nlc3NfdG9rZW4odG9rZW4gOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKCdhY2Nlc3NfdG9rZW4nLCB0b2tlbik7XG4gICAgfVxuICAgIGdldCBhY2Nlc3NfdG9rZW4oKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoJ2FjY2Vzc190b2tlbicpO1xuICAgIH1cbiAgICBzZXQgcmVmcmVzaF90b2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHNldFN0cmluZygncmVmcmVzaF90b2tlbicsIHRva2VuKTtcbiAgICB9XG4gICAgZ2V0IHJlZnJlc2hfdG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICB9XG4gICAgZ2V0IEhUVFBfT1BUSU9OUygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc190b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4odGhpcy5BUElfVVJMKyBcImF1dGgvdXNlclwiLCB0aGlzLkhUVFBfT1BUSU9OUyk7XG4gICAgfVxuICAgIHJlc2V0KGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5BUElfVVJMICsgXCJhdXRoL3Jlc2V0XCIsIHsgZW1haWw6IGVtYWlsIH0sIHRoaXMuSFRUUF9BVVRIX09QVElPTlMpLnRvUHJvbWlzZSgpO1xuICAgIH1cbn0iXX0=