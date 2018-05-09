"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../../get.services/get.services");
var locationstreet_service_1 = require("../../../services/conex/locationstreet.service");
var EatComponent = /** @class */ (function () {
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    function EatComponent(placestreet, router, myService) {
        this.placestreet = placestreet;
        this.router = router;
        this.myService = myService;
        this.number1 = "1";
        this.number2 = "0";
        this.result = 0;
        this.name = [];
        this.vendedorid = 6;
        this.cost = 30;
        this.latitude = "21.922501";
        this.longitude = "-102.304532";
    }
    EatComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.extractData2();
        console.log('productos de lugar tipo');
        this.placestreet.locationstreet({
            latitude: this.latitude,
            longitude: this.longitude
        }).subscribe(function (profile) {
            console.log(JSON.stringify(profile));
            _this.Products = profile['products'];
            //console.log(JSON.stringify(data))
            _this.name = [];
            for (var i = 0; i < _this.Products.length; i++) {
                // this.name.push(this.Products[i]["products"]['name']);
                console.log(JSON.stringify(_this.Products[i]["products_place"]));
                _this.products_place = _this.Products[i]["products_place"];
                for (var i_1 = 0; i_1 < _this.products_place.length; i_1++) {
                    console.log("producto");
                    console.log(JSON.stringify(_this.products_place[i_1]["product"]["name"]));
                    _this.name.push({
                        'id': _this.products_place[i_1]["product"]["id"],
                        'name': _this.products_place[i_1]["product"]["name"],
                        'cantidad': _this.result
                    });
                }
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        console.log(this.floor, this.build);
    };
    EatComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], EatComponent.prototype, "drawerComponent", void 0);
    EatComponent = __decorate([
        core_1.Component({
            selector: "eat",
            moduleId: module.id,
            templateUrl: "./eat.component.html",
            styleUrls: ['./eat.css'],
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [locationstreet_service_1.Placestreet, router_1.RouterExtensions, get_services_1.MyHttpGetService])
    ], EatComponent);
    return EatComponent;
}());
exports.EatComponent = EatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVhdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBTXhFLHNEQUErRDtBQUMvRCxtRUFBc0U7QUFDdEUseUZBQTZFO0FBYTdFO0lBeURJOzs7a0VBRzhEO0lBSTlELHNCQUFvQixXQUF1QixFQUFTLE1BQXlCLEVBQVMsU0FBMkI7UUFBN0YsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBL0QxRyxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQUUsRUFBRSxDQUFFO1FBVVYsZUFBVSxHQUFDLENBQUMsQ0FBQztRQUNiLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJVixhQUFRLEdBQUUsV0FBVyxDQUFDO1FBQ3RCLGNBQVMsR0FBRSxhQUFhLENBQUM7SUFnRGhDLENBQUM7SUEvQ0QsK0JBQVEsR0FBUjtRQUFBLGlCQWdDQztRQS9CRyxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzVCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsbUNBQW1DO1lBQ25DLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3Qyx3REFBd0Q7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsY0FBYyxHQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDMUQsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFDLEdBQUUsQ0FBQyxFQUFDLEdBQUMsR0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQyxHQUFDLEVBQUUsRUFBQyxDQUFDO29CQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNYLElBQUksRUFBQyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDNUMsTUFBTSxFQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNoRCxVQUFVLEVBQUMsS0FBSSxDQUFDLE1BQU07cUJBQ3pCLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsRUFBQyxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFHdkMsQ0FBQztJQTBCRCx3Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBSG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7eURBQUM7SUE5RXBELFlBQVk7UUFYeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLCtCQUFnQixDQUFDO1NBS2hDLENBQUM7eUNBaUVrQyxvQ0FBVyxFQUFrQix5QkFBZ0IsRUFBb0IsK0JBQWdCO09BaEV4RyxZQUFZLENBb0Z4QjtJQUFELG1CQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9nZXQuc2VydmljZXMvZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBQbGFjZXN0cmVldCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb25leC9sb2NhdGlvbnN0cmVldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImVhdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9lYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9lYXQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZV1cblxuICAgXG4gICBcbiAgXG59KVxuZXhwb3J0IGNsYXNzIEVhdENvbXBvbmVudCAge1xuICAgIHB1YmxpYyBudW1iZXIxOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBwdWJsaWMgbnVtYmVyMjogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIHJlc3VsdDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbmFtZSA9W10gO1xuICAgIHB1YmxpYyBQcm9kdWN0czogYW55W107XG4gICAgcHVibGljIHByb2R1Y3RzcztcbiAgICBwdWJsaWMgdHlwZTtcblxuICAgIHB1YmxpYyBmbG9vcjpzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0bmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGxhc3RuYW1lOnN0cmluZztcbiAgICBwdWJsaWMgYnVpbGQ7XG4gICAgcHVibGljIGx1Z2FyaWQ7XG4gICAgcHVibGljIHZlbmRlZG9yaWQ9NjtcbiAgICBwdWJsaWMgY29zdCA9IDMwO1xuICAgIHB1YmxpYyBidWlsZGlkO1xuICAgIHB1YmxpYyBvZmljY2VzaWQ7XG4gICAgcHVibGljIHByb2R1Y3RzX3BsYWNlO1xuICAgIHB1YmxpYyBsYXRpdHVkZSA9XCIyMS45MjI1MDFcIjtcbiAgICBwdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMzA0NTMyXCI7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5leHRyYWN0RGF0YTIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RvcyBkZSBsdWdhciB0aXBvJylcbiAgICAgICAgdGhpcy5wbGFjZXN0cmVldC5sb2NhdGlvbnN0cmVldCh7XG4gICAgICAgICAgICBsYXRpdHVkZTp0aGlzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOnRoaXMubG9uZ2l0dWRlXG4gICAgICAgIH0pLnN1YnNjcmliZSgocHJvZmlsZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgICAgIHRoaXMuUHJvZHVjdHMgPSBwcm9maWxlWydwcm9kdWN0cyddO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIC8vIHRoaXMubmFtZS5wdXNoKHRoaXMuUHJvZHVjdHNbaV1bXCJwcm9kdWN0c1wiXVsnbmFtZSddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLlByb2R1Y3RzW2ldW1wicHJvZHVjdHNfcGxhY2VcIl0pKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzX3BsYWNlID0gIHRoaXMuUHJvZHVjdHNbaV1bXCJwcm9kdWN0c19wbGFjZVwiXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPTA7aTx0aGlzLnByb2R1Y3RzX3BsYWNlLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3RvXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHNfcGxhY2VbaV1bXCJwcm9kdWN0XCJdW1wibmFtZVwiXSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOnRoaXMucHJvZHVjdHNfcGxhY2VbaV1bXCJwcm9kdWN0XCJdW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6dGhpcy5wcm9kdWN0c19wbGFjZVtpXVtcInByb2R1Y3RcIl1bXCJuYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhbnRpZGFkJzp0aGlzLnJlc3VsdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9LChlcnJvcik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxvb3IsIHRoaXMuYnVpbGQpXG4gICAgXG5cbiAgICB9XG5cbiBcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhY2VzdHJlZXQ6UGxhY2VzdHJlZXQscHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKSB7XG4gICAgIFxuICAgICAgIFxuICAgICAgXG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnPCoCkgeyB9XG5cbiAgXG4gICBcbiAgICAgICAgICBcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgXG4gICBcbn1cbiJdfQ==