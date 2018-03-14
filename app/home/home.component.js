"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var changepassword_services_1 = require(".././post.services/changepassword.services");
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
    }
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
    HomeComponent.prototype.hola = function (onCameraChanged) {
        var marker = new nativescript_google_maps_sdk_1.Marker;
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(onCameraChanged.latitude, onCameraChanged.longitude);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
        marker.draggable = true;
    };
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        //var marker = new Marker;
        //marker.position = Position.positionFromLatLng(args.position.latitude ,args.position.longitude);
        //marker.title = "Sydney";
        //marker.snippet = "Australia";
        //marker.userData = {index: 1};
        //this.mapView.addMarker(marker);
        //marker.draggable=true;
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
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
            templateUrl: "./home.component.html",
            styleUrls: ['map.css'],
            providers: [changepassword_services_1.ProfileService]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBQ3hFLDBFQUFzRTtBQUN0RSw2RUFBeUU7QUFHekUsc0ZBQXlFO0FBTXpFLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBVzFDO0lBVEE7UUFXSSxhQUFRLEdBQUksVUFBVSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwQix3QkFBbUIsR0FBVyxTQUFTLENBQUM7UUFDeEMsdUJBQWtCLEdBQVcsUUFBUSxDQUFDO0lBeUZqRCxDQUFDO0lBckZHLFlBQVk7SUFDWixrQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDO0lBRzFCLENBQUM7SUFDRCw0QkFBSSxHQUFKLFVBQUssZUFBZTtRQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7SUFLMUIsQ0FBQztJQUdELDBDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLDBCQUEwQjtRQUMxQixpR0FBaUc7UUFDakcsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUd6QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUdoSCxDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZixpREFBaUQ7UUFDL0MsNkNBQTZDO1FBQzNDLG9HQUFvRztJQUMzRyxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLGlIQUFpSDtJQUVySCxDQUFDO0lBVUQ7O2tFQUU4RDtJQUM5RCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUU5RCxDQUFDO0lBRUQsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUF0Qm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUE1RXBELGFBQWE7UUFUekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN0QixTQUFTLEVBQUMsQ0FBQyx3Q0FBYyxDQUFDO1NBRzdCLENBQUM7T0FDVyxhQUFhLENBbUd6QjtJQUFELG9CQUFDO0NBQUEsQUFuR0QsSUFtR0M7QUFuR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4uLy4vcG9zdC5zZXJ2aWNlcy9jaGFuZ2VwYXNzd29yZC5zZXJ2aWNlc1wiXG5cbi8vIDw8IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ21hcC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W1Byb2ZpbGVTZXJ2aWNlXVxuICAgXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIFxuICAgIGxhdGl0dWRlID0gIDIxLjg4NTcxOTk7XG4gICAgbG9uZ2l0dWRlID0gLTEwMi4zNjEzNDtcbiAgICB6b29tID0gODtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuICAgIHB1YmxpYyBzdGFydHBvaW50TG9uZ2l0dWRlOiBudW1iZXIgPSA0Mi42OTY1NTI7XG4gICAgcHVibGljIHN0YXJ0cG9pbnRMYXRpdHVkZTogbnVtYmVyID0gMjMuMzI2MDE7XG5cbiAgICBsYXN0Q2FtZXJhOiBTdHJpbmc7XG5cbiAgICAvL01hcCBldmVudHNcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcblxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGEgbWFya2VyLi4uXCIpO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDIxLjg4NzA5NjMyMDE1ODMzLC0xMDIuMjUxOTQ0NTQxOTMxMTUpO1xuICAgICAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgbWFya2VyLmRyYWdnYWJsZT10cnVlO1xuICAgICAgICBcbiAgICAgIFxuICAgIH1cbiAgICBob2xhKG9uQ2FtZXJhQ2hhbmdlZCl7XG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcob25DYW1lcmFDaGFuZ2VkLmxhdGl0dWRlLG9uQ2FtZXJhQ2hhbmdlZC5sb25naXR1ZGUpO1xuICAgICAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgbWFya2VyLmRyYWdnYWJsZT10cnVlO1xuICAgICAgIFxuICBcblxuXG4gICAgfVxuIFxuXG4gICAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcbiAgICAgICAgLy92YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgLy9tYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoYXJncy5wb3NpdGlvbi5sYXRpdHVkZSAsYXJncy5wb3NpdGlvbi5sb25naXR1ZGUpO1xuICAgICAgICAvL21hcmtlci50aXRsZSA9IFwiU3lkbmV5XCI7XG4gICAgICAgIC8vbWFya2VyLnNuaXBwZXQgPSBcIkF1c3RyYWxpYVwiO1xuICAgICAgICAvL21hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIC8vdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgICAgICAvL21hcmtlci5kcmFnZ2FibGU9dHJ1ZTtcblxuICAgXG4gICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlIFRhcHBlZCwgTGF0OiBcIiArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTsgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxuICAgICAgICAgLy8gICArIFwiJyB0cmlnZ2VyZWQgb246IFwiICsgYXJncy5tYXJrZXIudGl0bGVcbiAgICAgICAgICAgLy83ICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG5cbiAgICB9XG4gICAgXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19