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
        this.CLIENT_SECRET = 'MA6yVslhlIbOB6is1thBk5GkxtUWXwicYLLu95C8';
        this.SCOPE = '*';
        this.SERVER_URL = 'http://192.168.0.113:8000/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUFvRTtBQUNwRSw2Q0FBK0Q7QUFLL0Q7SUFZSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVg1QixlQUFVLEdBQVksVUFBVSxDQUFDO1FBQ2pDLGNBQVMsR0FBWSxDQUFDLENBQUM7UUFDdkIsa0JBQWEsR0FBWSwwQ0FBMEMsQ0FBQztRQUNwRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGVBQVUsR0FBWSw0QkFBNEIsQ0FBQztRQUNwRCxZQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUMsc0JBQWlCLEdBQUc7WUFDeEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFHLGtCQUFrQjthQUN0QyxDQUFDO1NBQ0wsQ0FBQTtJQUNzQyxDQUFDO0lBQ3hDOzs7O09BSUc7SUFDSDs7Ozs7T0FLRztJQUNVLDJCQUFLLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7O2dCQUM3QyxJQUFJLEdBQUc7b0JBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUE7Z0JBQ0csU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxVQUFVLEdBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVk7b0JBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFBO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxzQkFBTyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUM7OztLQUNoQztJQUNEOztPQUVHO0lBQ0ksNEJBQU0sR0FBYjtRQUNJLDZCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkIsNkJBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSw2QkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxzQkFBSSxxQ0FBWTthQUdoQjtZQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7YUFMRCxVQUFpQixLQUFjO1lBQzNCLGdDQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBSUQsc0JBQUksc0NBQWE7YUFHakI7WUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBTEQsVUFBa0IsS0FBYTtZQUMzQixnQ0FBUyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHFDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDO2dCQUNILE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7b0JBQ3JCLGNBQWMsRUFBRyxrQkFBa0I7b0JBQ25DLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVk7aUJBQ2pELENBQUM7YUFDTCxDQUFBO1FBQ0wsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLElBQUksQ0FBQyxPQUFPLEdBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUNELDJCQUFLLEdBQUwsVUFBTSxLQUFhO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xILENBQUM7SUE5RVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQWFpQixpQkFBVTtPQVozQixXQUFXLENBK0V2QjtJQUFELGtCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCByZW1vdmUgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL3Rva2VuLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBHUkFOVF9UWVBFIDogc3RyaW5nID0gJ3Bhc3N3b3JkJztcbiAgICBwcml2YXRlIENMSUVOVF9JRCA6IG51bWJlciA9IDI7XG4gICAgcHJpdmF0ZSBDTElFTlRfU0VDUkVUIDogc3RyaW5nID0gJ01BNnlWc2xobEliT0I2aXMxdGhCazVHa3h0VVdYd2ljWUxMdTk1QzgnO1xuICAgIHByaXZhdGUgU0NPUEU6IHN0cmluZyA9ICcqJztcbiAgICBwcml2YXRlIFNFUlZFUl9VUkwgOiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguMC4xMTM6ODAwMC8nO1xuICAgIHB1YmxpYyBBUElfVVJMIDogc3RyaW5nID0gdGhpcy5TRVJWRVJfVVJMICsgJ2FwaS92MS8nO1xuICAgIHByaXZhdGUgSFRUUF9BVVRIX09QVElPTlMgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHRvIGEgdXNlci5cbiAgICAgKiBAcGFyYW0gZm9ybSBGb3JtIHdpdGggYWxsIGZpZWxkcy5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBMb2dpbiB0byBhIHVzZXIuXG4gICAgICogQHBhcmFtIHVzZXJuYW1lIFVzZXIncyBlbWFpbC5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvZ0luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT57XG4gICAgICAgIHZhciBmb3JtID0ge1xuICAgICAgICAgICAgZ3JhbnRfdHlwZTogdGhpcy5HUkFOVF9UWVBFLFxuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLkNMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLlNDT1BFLFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZSQgPSB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuU0VSVkVSX1VSTCsgXCJvYXV0aC90b2tlblwiLCBmb3JtLCB0aGlzLkhUVFBfQVVUSF9PUFRJT05TKTtcbiAgICAgICAgcmVzcG9uc2UkLnN1YnNjcmliZSgodG9rZW46IFRva2VuKT0+e1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB0b2tlbi5hY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHRva2VuLnJlZnJlc2hfdG9rZW5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZSQudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHNlc3Npb24gYW5kIGRlbGV0ZSB0aGUgdG9rZW5zLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dPdXQoKTogdm9pZCB7XG4gICAgICAgIHJlbW92ZSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgIHJlbW92ZSgncmVmcmVzaF90b2tlbicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXIgaXMgbG9naW4uXG4gICAgICovXG4gICAgcHVibGljIGlzTG9nSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc190b2tlbiAhPSBudWxsO1xuICAgIH1cbiAgICBzZXQgYWNjZXNzX3Rva2VuKHRva2VuIDogc3RyaW5nKSB7XG4gICAgICAgIHNldFN0cmluZygnYWNjZXNzX3Rva2VuJywgdG9rZW4pO1xuICAgIH1cbiAgICBnZXQgYWNjZXNzX3Rva2VuKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICB9XG4gICAgc2V0IHJlZnJlc2hfdG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICBzZXRTdHJpbmcoJ3JlZnJlc2hfdG9rZW4nLCB0b2tlbik7XG4gICAgfVxuICAgIGdldCByZWZyZXNoX3Rva2VuKCkge1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKCdyZWZyZXNoX3Rva2VuJyk7XG4gICAgfVxuICAgIGdldCBIVFRQX09QVElPTlMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KHRoaXMuQVBJX1VSTCsgXCJhdXRoL3VzZXJcIiwgdGhpcy5IVFRQX09QVElPTlMpO1xuICAgIH1cbiAgICByZXNldChlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuQVBJX1VSTCArIFwiYXV0aC9yZXNldFwiLCB7IGVtYWlsOiBlbWFpbCB9LCB0aGlzLkhUVFBfQVVUSF9PUFRJT05TKS50b1Byb21pc2UoKTtcbiAgICB9XG59Il19