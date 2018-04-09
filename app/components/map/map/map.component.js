"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = /** @class */ (function () {
    function MapComponent() {
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
    MapComponent.prototype.onMapReady = function (event) {
        this.mapView = event.object;
        var marker = new nativescript_google_maps_sdk_1.Marker;
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(21.88709632015833, -102.25194454193115);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
        marker.draggable = true;
        var gMap = event.gMap;
        gMap.setMyLocationEnabled(true);
        console.log(gMap.setMyLocationEnabled);
    };
    MapComponent.prototype.addmarket = function (onCameraChanged, location) {
        var marker = new nativescript_google_maps_sdk_1.Marker;
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(onCameraChanged.latitude, onCameraChanged.longitude);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
        marker.draggable = true;
        console.log(location.latitude);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        //var marker = new Marker;
        //marker.position = Position.positionFromLatLng(args.position.latitude ,args.position.longitude);
        //marker.title = "Sydney";
        //marker.snippet = "Australia";
        //marker.userData = {index: 1};
        //this.mapView.addMarker(marker);
        //marker.draggable=true;
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        // console.log("Marker Event: '" + args.eventName
        //   + "' triggered on: " + args.marker.title
        //7 + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        //console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    MapComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(MapComponent.prototype, "sideDrawerTransition", {
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
    MapComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], MapComponent.prototype, "drawerComponent", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.component.html",
            styleUrls: ['./map.css'],
        })
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLHNDQUF3RTtBQUN4RSwwRUFBc0U7QUFDdEUsNkVBQW1GO0FBT25GLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBVzFDO0lBVEE7UUFVSSxhQUFRLEdBQUksVUFBVSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwQix3QkFBbUIsR0FBVyxTQUFTLENBQUM7UUFDeEMsdUJBQWtCLEdBQVcsUUFBUSxDQUFDO0lBd0ZqRCxDQUFDO0lBcEZHLFlBQVk7SUFDWixpQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFRMUMsQ0FBQztJQUNELGdDQUFTLEdBQVQsVUFBVSxlQUFlLEVBQUMsUUFBUTtRQUM5QixJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLENBQUM7UUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFbEMsQ0FBQztJQUlELHlDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLDBCQUEwQjtRQUMxQixpR0FBaUc7UUFDakcsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLHdCQUF3QjtJQUU1QixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZixpREFBaUQ7UUFDL0MsNkNBQTZDO1FBQzNDLG9HQUFvRztJQUMzRyxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLGlIQUFpSDtJQUVySCxDQUFDO0lBVUQ7O2tFQUU4RDtJQUM5RCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUU5RCxDQUFDO0lBRUQsc0JBQUksOENBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELHdDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUF0Qm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7eURBQUM7SUExRXBELFlBQVk7UUFUeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1NBSTNCLENBQUM7T0FDVyxZQUFZLENBaUd4QjtJQUFELG1CQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24sIFBvbHlsaW5lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1hcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYXAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9tYXAuY3NzJ10sXG4gICBcbiAgIFxuICBcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsYXRpdHVkZSA9ICAyMS44ODU3MTk5O1xuICAgIGxvbmdpdHVkZSA9IC0xMDIuMzYxMzQ7XG4gICAgem9vbSA9IDg7XG4gICAgYmVhcmluZyA9IDA7XG4gICAgdGlsdCA9IDA7XG4gICAgcGFkZGluZyA9IFs0MCwgNDAsIDQwLCA0MF07XG4gICAgbWFwVmlldzogTWFwVmlldztcbiAgICBwdWJsaWMgc3RhcnRwb2ludExvbmdpdHVkZTogbnVtYmVyID0gNDIuNjk2NTUyO1xuICAgIHB1YmxpYyBzdGFydHBvaW50TGF0aXR1ZGU6IG51bWJlciA9IDIzLjMyNjAxO1xuXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG4gICAgLy9NYXAgZXZlbnRzXG4gICAgb25NYXBSZWFkeShldmVudCkge1xuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoMjEuODg3MDk2MzIwMTU4MzMsLTEwMi4yNTE5NDQ1NDE5MzExNSk7XG4gICAgICAgIG1hcmtlci50aXRsZSA9IFwiU3lkbmV5XCI7XG4gICAgICAgIG1hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcbiAgICAgICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiAxfTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgICAgICBtYXJrZXIuZHJhZ2dhYmxlPXRydWU7XG4gICAgICAgIHZhciBnTWFwID0gZXZlbnQuZ01hcDtcbiAgICAgICAgZ01hcC5zZXRNeUxvY2F0aW9uRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZ01hcC5zZXRNeUxvY2F0aW9uRW5hYmxlZClcbiAgICAgICAgXG4gICAgICAgXG5cblxuICBcbiAgICBcbiAgXG4gICAgfVxuICAgIGFkZG1hcmtldChvbkNhbWVyYUNoYW5nZWQsbG9jYXRpb24pe1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKG9uQ2FtZXJhQ2hhbmdlZC5sYXRpdHVkZSxvbkNhbWVyYUNoYW5nZWQubG9uZ2l0dWRlKTtcbiAgICAgICAgbWFya2VyLnRpdGxlID0gXCJTeWRuZXlcIjtcbiAgICAgICAgbWFya2VyLnNuaXBwZXQgPSBcIkF1c3RyYWxpYVwiO1xuICAgICAgICBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5kcmFnZ2FibGU9dHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24ubGF0aXR1ZGUpXG4gICAgICAgIFxuICAgIH1cbiBcbiBcblxuICAgIG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XG4gICAgICAgIC8vdmFyIG1hcmtlciA9IG5ldyBNYXJrZXI7XG4gICAgICAgIC8vbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgLGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgLy9tYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICAvL21hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcbiAgICAgICAgLy9tYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgICAgICAvL3RoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgLy9tYXJrZXIuZHJhZ2dhYmxlPXRydWU7XG4gICAgICAgICBcbiAgICB9XG5cbiAgICBvbk1hcmtlckV2ZW50KGFyZ3MpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgIC8vICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgICAgIC8vNyArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XG4gICAgfVxuXG4gICAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xuXG4gICAgfVxuICAgIFxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==