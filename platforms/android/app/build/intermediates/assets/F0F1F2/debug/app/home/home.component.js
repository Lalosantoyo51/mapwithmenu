"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.latitude = 21.8857199;
        this.longitude = -102.36134;
        this.zoom = 8;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    //Map events
    HomeComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(21.88709632015833, -102.25194454193115);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
        marker.draggable = true;
    };
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
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
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBQ3hFLDBFQUFzRTtBQUN0RSw2RUFBeUU7QUFDekUsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFNMUM7SUFMQTtRQU1JLGFBQVEsR0FBSSxVQUFVLENBQUM7UUFDdkIsY0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBa0UvQixDQUFDO0lBN0RHLFlBQVk7SUFDWixrQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUduQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXJGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7SUFFMUIsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVM7Y0FDeEMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2NBQ3RDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVNEOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFFOUQsQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBdEJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBakRwRCxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO09BQ1csYUFBYSxDQXdFekI7SUFBRCxvQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGxhdGl0dWRlID0gIDIxLjg4NTcxOTk7XG4gICAgbG9uZ2l0dWRlID0gLTEwMi4zNjEzNDtcbiAgICB6b29tID0gODtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG4gICAgLy9NYXAgZXZlbnRzXG4gICAgb25NYXBSZWFkeShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XG5cbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBhIG1hcmtlci4uLlwiKTtcbiAgICAgICAgXG5cbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDIxLjg4NzA5NjMyMDE1ODMzLC0xMDIuMjUxOTQ0NTQxOTMxMTUpO1xuXG4gICAgICAgIG1hcmtlci50aXRsZSA9IFwiU3lkbmV5XCI7XG4gICAgICAgIG1hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcbiAgICAgICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiAxfTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgICAgICBtYXJrZXIuZHJhZ2dhYmxlPXRydWU7XG4gICAgICBcbiAgICB9XG5cbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxuICAgICAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19