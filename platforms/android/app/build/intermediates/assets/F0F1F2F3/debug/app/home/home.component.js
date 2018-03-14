"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.latitude = 21.8857199;
        this.longitude = -102.36134;
        this.zoom = 8;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.startpointLongitude = 42.696552;
        this.startpointLatitude = 23.32601;
        // >> enable-location-services
        nativescript_geolocation_1.enableLocationRequest(true);
        // << enable-location-services
    }
    HomeComponent.prototype.isLocationEnabled = function () {
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
    HomeComponent.prototype.getLocationOnce = function () {
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
    //Map events
    HomeComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker;
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(21.88709632015833, -102.25194454193115);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
        marker.draggable = true;
    };
    HomeComponent.prototype.hola = function () {
        this.getLocationOnce();
        this.isLocationEnabled();
    };
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        if (this.hola()) {
            var marker = new nativescript_google_maps_sdk_1.Marker;
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.position.latitude, args.position.longitude);
            marker.title = "Sydney";
            marker.snippet = "Australia";
            marker.userData = { index: 1 };
            this.mapView.addMarker(marker);
            marker.draggable = true;
            console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
        }
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        // console.log("Marker Event: '" + args.eventName
        //   + "' triggered on: " + args.marker.title
        //7 + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        //console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
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
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBQ3hFLDBFQUFzRTtBQUN0RSw2RUFBeUU7QUFDekUscUVBQW9IO0FBS3BILGtDQUFvQztBQUNwQyxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQU8xQztJQUNJO1FBb0NBLGFBQVEsR0FBSSxVQUFVLENBQUM7UUFDdkIsY0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLHdCQUFtQixHQUFXLFNBQVMsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBVyxRQUFRLENBQUM7UUEzQ3pDLDhCQUE4QjtRQUM5QixnREFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1Qiw4QkFBOEI7SUFDbEMsQ0FBQztJQUNNLHlDQUFpQixHQUF4QjtRQUNJLDhCQUE4QjtRQUM5QixvQ0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsaUJBQWlCO1lBQ3hDLElBQUksT0FBTyxHQUFHLHFDQUFxQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxHQUFHLGlDQUFpQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUMs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R0FBb0c7SUFDM0csQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixpSEFBaUg7SUFFckgsQ0FBQztJQVNEOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFFOUQsQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBdEJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBMUdwRCxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FpSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpJRCxJQWlJQztBQWpJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgTG9jYXRpb24sIGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBkaXN0YW5jZSwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG5cbi8vIDw8IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcbnJlZ2lzdGVyRWxlbWVudCgnTWFwVmlldycsICgpID0+IE1hcFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gPj4gZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlKTtcbiAgICAgICAgLy8gPDwgZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgfVxuICAgIHB1YmxpYyBpc0xvY2F0aW9uRW5hYmxlZCgpIHtcbiAgICAgICAgLy8gPj4gY2hlY2staXMtc2VydmljZS1lbmFibGVkXG4gICAgICAgIGlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiTG9jYXRpb24gc2VydmljZXMgYXJlIG5vdCBhdmFpbGFibGVcIjtcbiAgICAgICAgICAgIGlmIChpc0xvY2F0aW9uRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkxvY2F0aW9uIHNlcnZpY2VzIGFyZSBhdmFpbGFibGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiBlcnJvciByZWNlaXZlZDogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIDw8IGNoZWNrLWlzLXNlcnZpY2UtZW5hYmxlZFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25PbmNlKCkge1xuICAgICAgICAvLyA+PiBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgICAgICAgdGltZW91dDogNTAwMFxuICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIHJlY2VpdmVkOiBcIiArIGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0cG9pbnRMYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRwb2ludExvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgIH1cblxuICAgIFxuICAgIGxhdGl0dWRlID0gIDIxLjg4NTcxOTk7XG4gICAgbG9uZ2l0dWRlID0gLTEwMi4zNjEzNDtcbiAgICB6b29tID0gODtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuICAgIHB1YmxpYyBzdGFydHBvaW50TG9uZ2l0dWRlOiBudW1iZXIgPSA0Mi42OTY1NTI7XG4gICAgcHVibGljIHN0YXJ0cG9pbnRMYXRpdHVkZTogbnVtYmVyID0gMjMuMzI2MDE7XG5cbiAgICBsYXN0Q2FtZXJhOiBTdHJpbmc7XG5cbiAgICAvL01hcCBldmVudHNcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcblxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGEgbWFya2VyLi4uXCIpO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDIxLjg4NzA5NjMyMDE1ODMzLC0xMDIuMjUxOTQ0NTQxOTMxMTUpO1xuICAgICAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgbWFya2VyLmRyYWdnYWJsZT10cnVlO1xuICAgICAgICBcbiAgICAgIFxuICAgIH1cbiAgICBob2xhKCl7XG50aGlzLmdldExvY2F0aW9uT25jZSgpO1xudGhpcy5pc0xvY2F0aW9uRW5hYmxlZCgpO1xuXG4gICAgICBcbiAgICAgXG4gICAgICBcbiAgICB9XG5cbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgICAgICBpZih0aGlzLmhvbGEoKSl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgLGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgbWFya2VyLnRpdGxlID0gXCJTeWRuZXlcIjtcbiAgICAgICAgbWFya2VyLnNuaXBwZXQgPSBcIkF1c3RyYWxpYVwiO1xuICAgICAgICBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5kcmFnZ2FibGU9dHJ1ZTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxuICAgICAgICAgLy8gICArIFwiJyB0cmlnZ2VyZWQgb246IFwiICsgYXJncy5tYXJrZXIudGl0bGVcbiAgICAgICAgICAgLy83ICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG5cbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19