"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var Connectivity = require("tns-core-modules/connectivity");
var LocationComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function LocationComponent(router, page, zone) {
        this.router = router;
        this.page = page;
        this.zone = zone;
        this.page.actionBarHidden = true;
        this.connectionType = "Unknown";
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
                _this.connectionType = _this.connectionToString(connectionType);
            });
        });
    };
    LocationComponent.prototype.connectionToString = function (connectionType) {
        switch (connectionType) {
            case Connectivity.connectionType.none:
                return "No Connection!";
            case Connectivity.connectionType.wifi:
                this.router.navigate(['home']);
                return "Connected to WiFi!";
            case Connectivity.connectionType.mobile:
                return "Connected to Cellular!";
            default:
                return "Unknown";
        }
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: "ns-location",
            moduleId: module.id,
            templateUrl: "./location.component.html",
            styleUrls: ['./location.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, core_1.NgZone])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IsNERBQThEO0FBUTlEO0lBR0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUVqSCwyQkFBb0IsTUFBeUIsRUFBUyxJQUFVLEVBQVUsSUFBWTtRQUFsRSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBR0Qsb0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNoRixZQUFZLENBQUMsZUFBZSxDQUFDLFVBQUEsY0FBYztZQUN2QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDVixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUNNLDhDQUFrQixHQUF6QixVQUEwQixjQUFzQjtRQUM1QyxNQUFNLENBQUEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDNUIsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQ2hDLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNO2dCQUNuQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7WUFDcEM7Z0JBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQWpDUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBTytCLHlCQUFnQixFQUFlLFdBQUksRUFBZ0IsYUFBTTtPQU43RSxpQkFBaUIsQ0FrQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnPCoH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgQ29ubmVjdGl2aXR5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2NhdGlvblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkNvbXBvbmVudCAgIGltcGxlbWVudHMgT25Jbml0e1xuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcGFnZTogUGFnZcKgLHByaXZhdGUgem9uZTogTmdab25lKSB7IFxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiVW5rbm93blwiO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSB0aGlzLmNvbm5lY3Rpb25Ub1N0cmluZyhDb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSk7XG4gICAgICAgIENvbm5lY3Rpdml0eS5zdGFydE1vbml0b3JpbmcoY29ubmVjdGlvblR5cGUgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IHRoaXMuY29ubmVjdGlvblRvU3RyaW5nKGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB9XG4gICAgcHVibGljIGNvbm5lY3Rpb25Ub1N0cmluZyhjb25uZWN0aW9uVHlwZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoKGNvbm5lY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIENvbm5lY3Rpb24hXCI7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbm5lY3RlZCB0byBXaUZpIVwiO1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbm5lY3RlZCB0byBDZWxsdWxhciFcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93blwiO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==