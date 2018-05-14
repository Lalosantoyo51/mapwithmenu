"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../../get.services/get.services");
var locationstreet_service_1 = require("../../../services/conex/locationstreet.service");
var userlocation_service_1 = require("../../../services/conex/userlocation.service");
var EatComponent = /** @class */ (function () {
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    function EatComponent(userlocation, placestreet, router, myService) {
        this.userlocation = userlocation;
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
        //public latitude ="21.922501";
        //public longitude ="-102.304532";
        //tipo building con el id 1
        this.latitude = "21.913840";
        this.longitude = "-102.315723";
    }
    EatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userlocation.Mypostion({
            latitude: this.latitude,
            longitude: this.longitude
        }).subscribe(function (profile) {
            //console.log(JSON.stringify(profile));
            _this.locations = profile["Zone"];
            _this.location = [];
            //console.log(JSON.stringify(this.locations));
            console.log(_this.locations.length);
            if (_this.locations.length == 0) {
                _this.router.navigate(['/errors/location']);
            }
            for (var i = 0; i < _this.locations.length; i++) {
                _this.location.push(_this.locations[i]['type']);
                if (_this.location == "Street") {
                    _this.typestreet();
                }
                else {
                    console.log("estas en tipo edificio");
                    _this.typebuilding();
                }
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    EatComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    EatComponent.prototype.postmyposition = function () {
    };
    EatComponent.prototype.typestreet = function () {
        var _this = this;
        console.log("estas en tipo calle");
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
    EatComponent.prototype.typebuilding = function () {
        var _this = this;
        this.myService.getData('seller/4/provisions')
            .subscribe(function (data) {
            //console.log(JSON.stringify(data))
            _this.getdata = data['provisions'];
            _this.name = [];
            for (var i = 0; i < _this.getdata.length; i++) {
                console.log(JSON.stringify(_this.getdata[i]['provisions_seller']));
                _this.provisions_seller = _this.getdata[i]['provisions_seller'];
                for (var i_2 = 0; i_2 < _this.provisions_seller.length; i_2++) {
                    console.log(JSON.stringify(_this.provisions_seller[i_2]['product']['name']));
                    _this.name.push({
                        'id': _this.provisions_seller[i_2]['product']['name'],
                        'name': _this.provisions_seller[i_2]['product']['name'],
                        'cantidad': _this.result
                    });
                }
            }
        });
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
        __metadata("design:paramtypes", [userlocation_service_1.UserLocationService, locationstreet_service_1.Placestreet, router_1.RouterExtensions, get_services_1.MyHttpGetService])
    ], EatComponent);
    return EatComponent;
}());
exports.EatComponent = EatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVhdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBTXhFLHNEQUErRDtBQUMvRCxtRUFBc0U7QUFDdEUseUZBQTZFO0FBQzdFLHFGQUFtRjtBQWFuRjtJQWtFSTs7O2tFQUc4RDtJQUk5RCxzQkFBb0IsWUFBZ0MsRUFBUyxXQUF1QixFQUFTLE1BQXlCLEVBQVMsU0FBMkI7UUFBdEksaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBeEVuSixZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQUUsRUFBRSxDQUFFO1FBWVYsZUFBVSxHQUFDLENBQUMsQ0FBQztRQUNiLFNBQUksR0FBRyxFQUFFLENBQUM7UUFNakIsb0JBQW9CO1FBQ3BCLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMsMkJBQTJCO1FBQ3BCLGFBQVEsR0FBRSxXQUFXLENBQUM7UUFDdEIsY0FBUyxHQUFFLGFBQWEsQ0FBQztJQThDaEMsQ0FBQztJQTdDRCwrQkFBUSxHQUFSO1FBQUEsaUJBOEJDO1FBN0JHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ3hCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDakIsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFD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REFBQztJQXZGcEQsWUFBWTtRQVh4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsK0JBQWdCLENBQUM7U0FLaEMsQ0FBQzt5Q0EwRW1DLDBDQUFtQixFQUFxQixvQ0FBVyxFQUFrQix5QkFBZ0IsRUFBb0IsK0JBQWdCO09BekVqSixZQUFZLENBMEp4QjtJQUFELG1CQUFDO0NBQUEsQUExSkQsSUEwSkM7QUExSlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9nZXQuc2VydmljZXMvZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBQbGFjZXN0cmVldCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb25leC9sb2NhdGlvbnN0cmVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2NvbmV4L3VzZXJsb2NhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImVhdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9lYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9lYXQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZV1cblxuICAgXG4gICBcbiAgXG59KVxuZXhwb3J0IGNsYXNzIEVhdENvbXBvbmVudCAge1xuICAgIHB1YmxpYyBudW1iZXIxOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBwdWJsaWMgbnVtYmVyMjogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIHJlc3VsdDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbmFtZSA9W10gO1xuICAgIHB1YmxpYyBQcm9kdWN0czogYW55W107XG4gICAgcHVibGljIHByb2R1Y3RzcztcbiAgICBwdWJsaWMgdHlwZTtcbiAgICBwdWJsaWMgbG9jYXRpb25zO1xuICAgIHB1YmxpYyBsb2NhdGlvbjtcblxuICAgIHB1YmxpYyBmbG9vcjpzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0bmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGxhc3RuYW1lOnN0cmluZztcbiAgICBwdWJsaWMgYnVpbGQ7XG4gICAgcHVibGljIGx1Z2FyaWQ7XG4gICAgcHVibGljIHZlbmRlZG9yaWQ9NjtcbiAgICBwdWJsaWMgY29zdCA9IDMwO1xuICAgIHB1YmxpYyBidWlsZGlkO1xuICAgIHB1YmxpYyBvZmljY2VzaWQ7XG4gICAgcHVibGljIHByb2R1Y3RzX3BsYWNlO1xuICAgIHB1YmxpYyBwcm92aXNpb25zX3NlbGxlcjtcbiAgICBwdWJsaWMgZ2V0ZGF0YTtcbiAgICAvL3RpcG8gYnVpbGRpbmcgaWQgM1xuICAgIC8vcHVibGljIGxhdGl0dWRlID1cIjIxLjg3Njg3MVwiIDtcbiAgICAvL3B1YmxpYyBsb25naXR1ZGUgPVwiLTEwMi4yNjI0NTFcIjtcbiAgICAvL3RpcG8gc3RyZWV0XG4gICAgLy9wdWJsaWMgbGF0aXR1ZGUgPVwiMjEuOTIyNTAxXCI7XG4gICAgLy9wdWJsaWMgbG9uZ2l0dWRlID1cIi0xMDIuMzA0NTMyXCI7XG4gICAgLy90aXBvIGJ1aWxkaW5nIGNvbiBlbCBpZCAxXG4gICAgcHVibGljIGxhdGl0dWRlID1cIjIxLjkxMzg0MFwiO1xuICAgIHB1YmxpYyBsb25naXR1ZGUgPVwiLTEwMi4zMTU3MjNcIjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VybG9jYXRpb24uTXlwb3N0aW9uKHtcbiAgICAgICAgICAgIGxhdGl0dWRlOnRoaXMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6dGhpcy5sb25naXR1ZGVcbiAgICAgICAgfSkuc3Vic2NyaWJlKChwcm9maWxlKT0+e1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHByb2ZpbGVbXCJab25lXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IFtdO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2F0aW9ucykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbnMubGVuZ3RoKVxuICAgICAgICAgICAgaWYodGhpcy5sb2NhdGlvbnMubGVuZ3RoID09MCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXJyb3JzL2xvY2F0aW9uJ10pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLnB1c2godGhpcy5sb2NhdGlvbnNbaV1bJ3R5cGUnXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYXRpb24gPT0gXCJTdHJlZXRcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXN0cmVldCgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXN0YXMgZW4gdGlwbyBlZGlmaWNpb1wiKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudHlwZWJ1aWxkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgfSwoZXJyb3IpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuIFxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VybG9jYXRpb246VXNlckxvY2F0aW9uU2VydmljZSxwcml2YXRlIHBsYWNlc3RyZWV0OlBsYWNlc3RyZWV0LHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSkge1xuICAgICBcbiAgICAgICBcbiAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zwqApIHsgfVxuXG4gIFxuICAgXG4gICAgICAgICAgXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBwb3N0bXlwb3NpdGlvbigpe1xuICAgXG4gICAgfVxuICAgIHR5cGVzdHJlZXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJlc3RhcyBlbiB0aXBvIGNhbGxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdG9zIGRlIGx1Z2FyIHRpcG8nKVxuICAgICAgICB0aGlzLnBsYWNlc3RyZWV0LmxvY2F0aW9uc3RyZWV0KHtcbiAgICAgICAgbGF0aXR1ZGU6dGhpcy5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOnRoaXMubG9uZ2l0dWRlXG4gICAgICAgIH0pLnN1YnNjcmliZSgocHJvZmlsZSk9PntcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgICB0aGlzLlByb2R1Y3RzID0gcHJvZmlsZVsncHJvZHVjdHMnXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgdGhpcy5uYW1lID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLlByb2R1Y3RzW2ldW1widHlwZVwiXT09J1N0cmVldCcpe1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWUucHVzaCh0aGlzLlByb2R1Y3RzW2ldW1wicHJvZHVjdHNcIl1bJ25hbWUnXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLlByb2R1Y3RzW2ldW1wicHJvZHVjdHNfcGxhY2VcIl0pKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNfcGxhY2UgPSAgdGhpcy5Qcm9kdWN0c1tpXVtcInByb2R1Y3RzX3BsYWNlXCJdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8dGhpcy5wcm9kdWN0c19wbGFjZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3RvXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0c19wbGFjZVtpXVtcInByb2R1Y3RcIl1bXCJuYW1lXCJdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOnRoaXMucHJvZHVjdHNfcGxhY2VbaV1bXCJwcm9kdWN0XCJdW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzp0aGlzLnByb2R1Y3RzX3BsYWNlW2ldW1wicHJvZHVjdFwiXVtcIm5hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICdjYW50aWRhZCc6dGhpcy5yZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlc3RhcyBlbiB0aXBvIGVkaWZpY2lvIHRlIHJlZ3Jlc2FyZW1vcyBwcm9udG8gbGEgbWVyY2FuY2lhXCIpXG4gICAgICAgIH0gXG5cbiAgICAgICAgfVxuXG4gICAgICAgIH0sKGVycm9yKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZsb29yLCB0aGlzLmJ1aWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB0eXBlYnVpbGRpbmcoKXtcbiAgICAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGEoJ3NlbGxlci80L3Byb3Zpc2lvbnMnKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0ZGF0YSA9ZGF0YVsncHJvdmlzaW9ucyddO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZT1bXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmdldGRhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRkYXRhW2ldWydwcm92aXNpb25zX3NlbGxlciddKSlcbiAgICAgICAgICAgICAgICAgICB0aGlzLnByb3Zpc2lvbnNfc2VsbGVyID10aGlzLmdldGRhdGFbaV1bJ3Byb3Zpc2lvbnNfc2VsbGVyJ107XG4gICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb3Zpc2lvbnNfc2VsbGVyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb3Zpc2lvbnNfc2VsbGVyW2ldWydwcm9kdWN0J11bJ25hbWUnXSkpXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6dGhpcy5wcm92aXNpb25zX3NlbGxlcltpXVsncHJvZHVjdCddWyduYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6dGhpcy5wcm92aXNpb25zX3NlbGxlcltpXVsncHJvZHVjdCddWyduYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FudGlkYWQnOnRoaXMucmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICBcbn1cbiJdfQ==