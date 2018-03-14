"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
// >> import-geolocation-plugin
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
        this.distanceResult = "0";
        this.distance = 0;
        this.index = 0;
        this.startpointLongitude = 42.696552;
        this.startpointLatitude = 23.32601;
        this.endpointLongitude = 40.71448;
        this.endpointLatitude = -74.00598;
        // >> enable-location-services
        nativescript_geolocation_1.enableLocationRequest(true);
        // << enable-location-services
    }
    FeaturedComponent.prototype.isLocationEnabled = function () {
        // >> check-is-service-enabled
        nativescript_geolocation_1.isEnabled().then(function (isLocationEnabled) {
            var message = "Location services are not available";
            if (isLocationEnabled) {
                message = "Location services are available";
            }
            alert(message);
        }, function (e) {
            console.log("Location error received: " + (e.message || e));
        });
        // << check-is-service-enabled
    };
    FeaturedComponent.prototype.getDistance = function () {
        // >> get-distance
        var startLocation = new nativescript_geolocation_1.Location();
        startLocation.longitude = this.startpointLongitude;
        startLocation.latitude = this.startpointLatitude;
        var endLocation = new nativescript_geolocation_1.Location();
        endLocation.longitude = this.endpointLongitude;
        endLocation.latitude = this.endpointLatitude;
        this.distance = nativescript_geolocation_1.distance(startLocation, endLocation);
        // << get-distance
        console.log("distance - " + this.distance);
        this.distanceResult = (this.distance * 0.001).toFixed(3);
    };
    FeaturedComponent.prototype.getLocationOnce = function () {
        var _this = this;
        // >> get-current-location
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            timeout: 5000
        })
            .then(function (location) {
            console.log("Location received: " + location);
            _this.startpointLatitude = location.latitude;
            _this.startpointLongitude = location.longitude;
        }).catch(function (error) {
            console.log("Location error received: " + error);
            alert("Location error received: " + error);
        });
        // << get-current-location
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    FeaturedComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(FeaturedComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], FeaturedComponent.prototype, "drawerComponent", void 0);
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: "Featured",
            moduleId: module.id,
            templateUrl: "./featured.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsK0JBQStCO0FBQy9CLHFFQUFvSDtBQUdwSCxrQ0FBb0M7QUFPcEM7SUFVSTtRQVRPLG1CQUFjLEdBQVcsR0FBRyxDQUFDO1FBQzdCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQix3QkFBbUIsR0FBVyxTQUFTLENBQUM7UUFDeEMsdUJBQWtCLEdBQVcsUUFBUSxDQUFDO1FBQ3RDLHNCQUFpQixHQUFXLFFBQVEsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBVyxDQUFDLFFBQVEsQ0FBQztRQUd4Qyw4QkFBOEI7UUFDOUIsZ0RBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsOEJBQThCO0lBQ2xDLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEI7UUFDSSw4QkFBOEI7UUFDOUIsb0NBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLGlCQUFpQjtZQUN4QyxJQUFJLE9BQU8sR0FBRyxxQ0FBcUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxpQ0FBaUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsOEJBQThCO0lBQ2xDLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLGFBQWEsR0FBYSxJQUFJLG1DQUFRLEVBQUUsQ0FBQztRQUM3QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRCxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVqRCxJQUFJLFdBQVcsR0FBYSxJQUFJLG1DQUFRLEVBQUUsQ0FBQztRQUMzQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUMvQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLG1DQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELGtCQUFrQjtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUFBLGlCQWVDO1FBZEcsMEJBQTBCO1FBQzFCLDZDQUFrQixDQUFDO1lBQ2YsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtZQUM5QixPQUFPLEVBQUUsSUFBSTtTQUNmLENBQUM7YUFDRSxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNqRCxLQUFLLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDUCwwQkFBMEI7SUFDOUIsQ0FBQztJQVNEOztrRUFFOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFJLG1EQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBckJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzhEQUFDO0lBakVwRCxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBdUY3QjtJQUFELHdCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2RlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbi8vID4+IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbi8vIDw8IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmVhdHVyZWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGRpc3RhbmNlUmVzdWx0OiBzdHJpbmcgPSBcIjBcIjtcbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIHN0YXJ0cG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDQyLjY5NjU1MjtcbiAgICBwdWJsaWMgc3RhcnRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAyMy4zMjYwMTtcbiAgICBwdWJsaWMgZW5kcG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDQwLjcxNDQ4O1xuICAgIHB1YmxpYyBlbmRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAtNzQuMDA1OTg7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gPj4gZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlKTtcbiAgICAgICAgLy8gPDwgZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgfVxuXG4gICAgcHVibGljIGlzTG9jYXRpb25FbmFibGVkKCkge1xuICAgICAgICAvLyA+PiBjaGVjay1pcy1zZXJ2aWNlLWVuYWJsZWRcbiAgICAgICAgaXNFbmFibGVkKCkudGhlbihmdW5jdGlvbiAoaXNMb2NhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJMb2NhdGlvbiBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsYWJsZVwiO1xuICAgICAgICAgICAgaWYgKGlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTG9jYXRpb24gc2VydmljZXMgYXJlIGF2YWlsYWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgY2hlY2staXMtc2VydmljZS1lbmFibGVkXG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3RhbmNlKCkge1xuICAgICAgICAvLyA+PiBnZXQtZGlzdGFuY2VcbiAgICAgICAgbGV0IHN0YXJ0TG9jYXRpb246IExvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XG4gICAgICAgIHN0YXJ0TG9jYXRpb24ubG9uZ2l0dWRlID0gdGhpcy5zdGFydHBvaW50TG9uZ2l0dWRlO1xuICAgICAgICBzdGFydExvY2F0aW9uLmxhdGl0dWRlID0gdGhpcy5zdGFydHBvaW50TGF0aXR1ZGU7XG5cbiAgICAgICAgbGV0IGVuZExvY2F0aW9uOiBMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xuICAgICAgICBlbmRMb2NhdGlvbi5sb25naXR1ZGUgPSB0aGlzLmVuZHBvaW50TG9uZ2l0dWRlO1xuICAgICAgICBlbmRMb2NhdGlvbi5sYXRpdHVkZSA9IHRoaXMuZW5kcG9pbnRMYXRpdHVkZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlKHN0YXJ0TG9jYXRpb24sIGVuZExvY2F0aW9uKTtcbiAgICAgICAgLy8gPDwgZ2V0LWRpc3RhbmNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzdGFuY2UgLSBcIiArIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICB0aGlzLmRpc3RhbmNlUmVzdWx0ID0gKHRoaXMuZGlzdGFuY2UgKiAwLjAwMSkudG9GaXhlZCgzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25PbmNlKCkge1xuICAgICAgICAvLyA+PiBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgICAgICAgdGltZW91dDogNTAwMFxuICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIHJlY2VpdmVkOiBcIiArIGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0cG9pbnRMYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRwb2ludExvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==