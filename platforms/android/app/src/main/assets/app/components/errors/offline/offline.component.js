"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var Connectivity = require("tns-core-modules/connectivity");
var OfflineComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function OfflineComponent(router, page, zone) {
        this.router = router;
        this.page = page;
        this.zone = zone;
        this.page.actionBarHidden = true;
        this.connectionType = "Unknown";
    }
    OfflineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
                _this.connectionType = _this.connectionToString(connectionType);
            });
        });
    };
    OfflineComponent.prototype.connectionToString = function (connectionType) {
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
    OfflineComponent = __decorate([
        core_1.Component({
            selector: "ns-offline",
            moduleId: module.id,
            templateUrl: "./offline.component.html",
            styleUrls: ['./offline.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, core_1.NgZone])
    ], OfflineComponent);
    return OfflineComponent;
}());
exports.OfflineComponent = OfflineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvZmZsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLDREQUE4RDtBQVE5RDtJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFFakgsMEJBQW9CLE1BQXlCLEVBQVMsSUFBVSxFQUFVLElBQVk7UUFBbEUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUdELG1DQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDaEYsWUFBWSxDQUFDLGVBQWUsQ0FBQyxVQUFBLGNBQWM7WUFDdkMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDTSw2Q0FBa0IsR0FBekIsVUFBMEIsY0FBc0I7UUFDNUMsTUFBTSxDQUFBLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtnQkFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQzVCLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTTtnQkFDbkMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDO2dCQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFqQ1EsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQU8rQix5QkFBZ0IsRUFBZSxXQUFJLEVBQWdCLGFBQU07T0FON0UsZ0JBQWdCLENBa0M1QjtJQUFELHVCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zwqB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIENvbm5lY3Rpdml0eSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtb2ZmbGluZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9vZmZsaW5lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vb2ZmbGluZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT2ZmbGluZUNvbXBvbmVudCAgIGltcGxlbWVudHMgT25Jbml0e1xuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcGFnZTogUGFnZcKgLHByaXZhdGUgem9uZTogTmdab25lKSB7IFxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiVW5rbm93blwiO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSB0aGlzLmNvbm5lY3Rpb25Ub1N0cmluZyhDb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSk7XG4gICAgICAgIENvbm5lY3Rpdml0eS5zdGFydE1vbml0b3JpbmcoY29ubmVjdGlvblR5cGUgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IHRoaXMuY29ubmVjdGlvblRvU3RyaW5nKGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB9XG4gICAgcHVibGljIGNvbm5lY3Rpb25Ub1N0cmluZyhjb25uZWN0aW9uVHlwZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoKGNvbm5lY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIENvbm5lY3Rpb24hXCI7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbm5lY3RlZCB0byBXaUZpIVwiO1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbm5lY3RlZCB0byBDZWxsdWxhciFcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93blwiO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==