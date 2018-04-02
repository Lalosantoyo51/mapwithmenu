"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var Connectivity = require("tns-core-modules/connectivity");
var GpsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function GpsComponent(router, page, zone) {
        this.router = router;
        this.page = page;
        this.zone = zone;
        this.page.actionBarHidden = true;
        this.connectionType = "Unknown";
    }
    GpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
                _this.connectionType = _this.connectionToString(connectionType);
            });
        });
    };
    GpsComponent.prototype.connectionToString = function (connectionType) {
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
    GpsComponent = __decorate([
        core_1.Component({
            selector: "ns-gps",
            moduleId: module.id,
            templateUrl: "./gps.component.html",
            styleUrls: ['./gps.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, core_1.NgZone])
    ], GpsComponent);
    return GpsComponent;
}());
exports.GpsComponent = GpsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3BzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQiw0REFBOEQ7QUFROUQ7SUFHSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBRWpILHNCQUFvQixNQUF5QixFQUFTLElBQVUsRUFBVSxJQUFZO1FBQWxFLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFHRCwrQkFBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBQSxjQUFjO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNWLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ00seUNBQWtCLEdBQXpCLFVBQTBCLGNBQXNCO1FBQzVDLE1BQU0sQ0FBQSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUM1QixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDaEMsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU07Z0JBQ25DLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztZQUNwQztnQkFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBakNRLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBTytCLHlCQUFnQixFQUFlLFdBQUksRUFBZ0IsYUFBTTtPQU43RSxZQUFZLENBa0N4QjtJQUFELG1CQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnPCoH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgQ29ubmVjdGl2aXR5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ncHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ3BzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ3BzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcHNDb21wb25lbnQgICBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBwdWJsaWMgY29ubmVjdGlvblR5cGU6IHN0cmluZztcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHBhZ2U6IFBhZ2XCoCxwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyBcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIlVua25vd25cIjtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gdGhpcy5jb25uZWN0aW9uVG9TdHJpbmcoQ29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkpO1xuICAgICAgICBDb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKGNvbm5lY3Rpb25UeXBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSB0aGlzLmNvbm5lY3Rpb25Ub1N0cmluZyhjb25uZWN0aW9uVHlwZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuICAgIHB1YmxpYyBjb25uZWN0aW9uVG9TdHJpbmcoY29ubmVjdGlvblR5cGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaChjb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBDb25uZWN0aW9uIVwiO1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25uZWN0ZWQgdG8gV2lGaSFcIjtcbiAgICAgICAgICAgIGNhc2UgQ29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25uZWN0ZWQgdG8gQ2VsbHVsYXIhXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVua25vd25cIjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=