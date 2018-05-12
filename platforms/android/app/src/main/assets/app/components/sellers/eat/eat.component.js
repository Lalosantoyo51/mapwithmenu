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
        //tipo building id 3
        //public latitude ="21.876871" ;
        //public longitude ="-102.262451";
        //tipo street
        this.latitude = "21.922501";
        this.longitude = "-102.304532";
    }
    //tipo building con el id 1
    //public latitude ="21.913840";
    //public longitude ="-102.315723";
    EatComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.extractData2();
        console.log('productos de lugar tipo');
        //get products type street
        this.placestreet.locationstreet({
            latitude: this.latitude,
            longitude: this.longitude
        }).subscribe(function (profile) {
            console.log(JSON.stringify(profile));
            _this.Products = profile['products'];
            //console.log(JSON.stringify(data))
            _this.name = [];
            for (var i = 0; i < _this.Products.length; i++) {
                if (_this.Products[i]["type"] == 'Street') {
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
                else {
                    console.log("estas en tipo edificio te regresaremos pronto la mercancia");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVhdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBTXhFLHNEQUErRDtBQUMvRCxtRUFBc0U7QUFDdEUseUZBQTZFO0FBYTdFO0lBdUVJOzs7a0VBRzhEO0lBSTlELHNCQUFvQixXQUF1QixFQUFTLE1BQXlCLEVBQVMsU0FBMkI7UUFBN0YsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBN0UxRyxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQUUsRUFBRSxDQUFFO1FBVVYsZUFBVSxHQUFDLENBQUMsQ0FBQztRQUNiLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJakIsb0JBQW9CO1FBQ3BCLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsYUFBYTtRQUNOLGFBQVEsR0FBRSxXQUFXLENBQUM7UUFDdEIsY0FBUyxHQUFFLGFBQWEsQ0FBQztJQTBEaEMsQ0FBQztJQXpERCwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQywrQkFBUSxHQUFSO1FBQUEsaUJBdUNDO1FBdENHLHNCQUFzQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdEMsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzVCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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b3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbi8vIDw8IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2dldC5zZXJ2aWNlcy9nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IFBsYWNlc3RyZWV0IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2NvbmV4L2xvY2F0aW9uc3RyZWV0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZWF0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2VhdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2VhdC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlXVxuXG4gICBcbiAgIFxuICBcbn0pXG5leHBvcnQgY2xhc3MgRWF0Q29tcG9uZW50ICB7XG4gICAgcHVibGljIG51bWJlcjE6IHN0cmluZyA9IFwiMVwiO1xuICAgIHB1YmxpYyBudW1iZXIyOiBzdHJpbmcgPSBcIjBcIjtcbiAgICBwdWJsaWMgcmVzdWx0OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBuYW1lID1bXSA7XG4gICAgcHVibGljIFByb2R1Y3RzOiBhbnlbXTtcbiAgICBwdWJsaWMgcHJvZHVjdHNzO1xuICAgIHB1YmxpYyB0eXBlO1xuXG4gICAgcHVibGljIGZsb29yOnN0cmluZztcbiAgICBwdWJsaWMgZmlyc3RuYW1lOnN0cmluZztcbiAgICBwdWJsaWMgbGFzdG5hbWU6c3RyaW5nO1xuICAgIHB1YmxpYyBidWlsZDtcbiAgICBwdWJsaWMgbHVnYXJpZDtcbiAgICBwdWJsaWMgdmVuZGVkb3JpZD02O1xuICAgIHB1YmxpYyBjb3N0ID0gMzA7XG4gICAgcHVibGljIGJ1aWxkaWQ7XG4gICAgcHVibGljIG9maWNjZXNpZDtcbiAgICBwdWJsaWMgcHJvZHVjdHNfcGxhY2U7XG4gICAgLy90aXBvIGJ1aWxkaW5nIGlkIDNcbiAgICAvL3B1YmxpYyBsYXRpdHVkZSA9XCIyMS44NzY4NzFcIiA7XG4gICAgLy9wdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMjYyNDUxXCI7XG4gICAgLy90aXBvIHN0cmVldFxuICAgIHB1YmxpYyBsYXRpdHVkZSA9XCIyMS45MjI1MDFcIjtcbiAgICBwdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMzA0NTMyXCI7XG4gICAgLy90aXBvIGJ1aWxkaW5nIGNvbiBlbCBpZCAxXG4gICAgLy9wdWJsaWMgbGF0aXR1ZGUgPVwiMjEuOTEzODQwXCI7XG4gICAgLy9wdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMzE1NzIzXCI7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5leHRyYWN0RGF0YTIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RvcyBkZSBsdWdhciB0aXBvJylcbiAgICAgICAgLy9nZXQgcHJvZHVjdHMgdHlwZSBzdHJlZXRcbiAgICAgICAgdGhpcy5wbGFjZXN0cmVldC5sb2NhdGlvbnN0cmVldCh7XG4gICAgICAgICAgICBsYXRpdHVkZTp0aGlzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOnRoaXMubG9uZ2l0dWRlXG4gICAgICAgIH0pLnN1YnNjcmliZSgocHJvZmlsZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgICAgIHRoaXMuUHJvZHVjdHMgPSBwcm9maWxlWydwcm9kdWN0cyddO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLlByb2R1Y3RzW2ldW1widHlwZVwiXT09J1N0cmVldCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWUucHVzaCh0aGlzLlByb2R1Y3RzW2ldW1wicHJvZHVjdHNcIl1bJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5Qcm9kdWN0c1tpXVtcInByb2R1Y3RzX3BsYWNlXCJdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c19wbGFjZSA9ICB0aGlzLlByb2R1Y3RzW2ldW1wicHJvZHVjdHNfcGxhY2VcIl07XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8dGhpcy5wcm9kdWN0c19wbGFjZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0b1wiKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzX3BsYWNlW2ldW1wicHJvZHVjdFwiXVtcIm5hbWVcIl0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzp0aGlzLnByb2R1Y3RzX3BsYWNlW2ldW1wicHJvZHVjdFwiXVtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOnRoaXMucHJvZHVjdHNfcGxhY2VbaV1bXCJwcm9kdWN0XCJdW1wibmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYW50aWRhZCc6dGhpcy5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXN0YXMgZW4gdGlwbyBlZGlmaWNpbyB0ZSByZWdyZXNhcmVtb3MgcHJvbnRvIGxhIG1lcmNhbmNpYVwiKVxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICB9LChlcnJvcik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxvb3IsIHRoaXMuYnVpbGQpXG4gICAgXG5cbiAgICB9XG5cbiBcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhY2VzdHJlZXQ6UGxhY2VzdHJlZXQscHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKSB7XG4gICAgIFxuICAgICAgIFxuICAgICAgXG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnPCoCkgeyB9XG5cbiAgXG4gICBcbiAgICAgICAgICBcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgXG4gICBcbn1cbiJdfQ==