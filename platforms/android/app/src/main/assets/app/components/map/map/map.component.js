"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var get_services_1 = require("../../../get.services/get.services");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = /** @class */ (function () {
    function MapComponent(myService) {
        this.myService = myService;
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
        this.getplaces();
        console.log('Map Ready');
        console.log(this.lat);
        this.mapView = event.object;
        var marker = new nativescript_google_maps_sdk_1.Marker;
        this.gMap = event.gMap;
        this.gMap.setMyLocationEnabled(true);
    };
    MapComponent.prototype.addmarket = function (onCameraChanged, location) {
        this.getplaces;
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
    MapComponent.prototype.getplaces = function () {
        var _this = this;
        this.myService.getData('map/seller')
            .subscribe(function (data) {
            console.log("informacion");
            _this.places = data['places'];
            _this.setmarket = [];
            //console.log(JSON.stringify(this.places))
            for (var i = 0; i < _this.places.length; i++) {
                console.log("cordenadas de los clientes");
                _this.lat = _this.places[i]["latitude"];
                _this.log = _this.places[i]["longitude"];
                _this.customer = _this.places[i]["customer"]["names"];
                _this.address = _this.places[i]["address"];
                var marker = new nativescript_google_maps_sdk_1.Marker;
                marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.lat, _this.log);
                marker.title = _this.customer;
                marker.snippet = _this.address;
                marker.userData = { index: 1 };
                _this.mapView.addMarker(marker);
                marker.draggable = true;
                console.log(JSON.stringify(_this.lat));
                console.log(JSON.stringify(_this.log));
                console.log(JSON.stringify(_this.customer));
            }
        }, function (error) {
            _this.onGetDataError(error);
        });
    };
    MapComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
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
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [get_services_1.MyHttpGetService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLHNDQUF3RTtBQUN4RSwwRUFBc0U7QUFDdEUsNkVBQW1GO0FBT25GLG1FQUFzRTtBQUN0RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQVkxQztJQW1CSSxzQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFaL0MsYUFBUSxHQUFJLFVBQVUsQ0FBQztRQUN2QixjQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFcEIsd0JBQW1CLEdBQVcsU0FBUyxDQUFDO1FBQ3hDLHVCQUFrQixHQUFXLFFBQVEsQ0FBQztJQUlJLENBQUM7SUFFbEQsWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLElBQUkscUNBQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENB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LElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUc5QyxDQUFDO1FBRUwsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ08scUNBQWMsR0FBdEIsVUFBdUIsS0FBcUI7UUFDeEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBNURvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3lEQUFDO0lBbEVwRCxZQUFZO1FBVnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQztTQUloQyxDQUFDO3lDQW9CaUMsK0JBQWdCO09BbkJ0QyxZQUFZLENBK0h4QjtJQUFELG1CQUFDO0NBQUEsQUEvSEQsSUErSEM7QUEvSFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24sIFBvbHlsaW5lIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9nZXQuc2VydmljZXMvZ2V0LnNlcnZpY2VzXCI7XG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibWFwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21hcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL21hcC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlXVxuICAgXG4gICBcbiAgXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHBsYWNlcztcbiAgICBwdWJsaWMgc2V0bWFya2V0O1xuICAgIHB1YmxpYyBjdXN0b21lcjtcbiAgICBwdWJsaWMgbGF0O1xuICAgIHB1YmxpYyBsb2c7XG4gICAgcHVibGljIGFkZHJlc3M7XG4gICAgbGF0aXR1ZGUgPSAgMjEuODg1NzE5OTtcbiAgICBsb25naXR1ZGUgPSAtMTAyLjM2MTM0O1xuICAgIHpvb20gPSA4O1xuICAgIGJlYXJpbmcgPSAwO1xuICAgIHRpbHQgPSAwO1xuICAgIHBhZGRpbmcgPSBbNDAsIDQwLCA0MCwgNDBdO1xuICAgIG1hcFZpZXc6IE1hcFZpZXc7XG4gICAgcHVibGljIHN0YXJ0cG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDQyLjY5NjU1MjtcbiAgICBwdWJsaWMgc3RhcnRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAyMy4zMjYwMTtcbiAgICBwdWJsaWMgZ01hcDtcblxuICAgIGxhc3RDYW1lcmE6IFN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSl7fVxuXG4gICAgLy9NYXAgZXZlbnRzXG4gICAgb25NYXBSZWFkeShldmVudCkge1xuICAgICAgICB0aGlzLmdldHBsYWNlcygpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF0KVxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyO1xuICAgICAgICAgdGhpcy5nTWFwID0gZXZlbnQuZ01hcDtcbiAgICAgICAgdGhpcy5nTWFwLnNldE15TG9jYXRpb25FbmFibGVkKHRydWUpO1xuICAgICAgIFxuICAgIH1cbiAgICBhZGRtYXJrZXQob25DYW1lcmFDaGFuZ2VkLGxvY2F0aW9uKXtcbnRoaXMuZ2V0cGxhY2VzXG4gICAgXG4gICAgICAgIFxuICAgIH1cbiBcbiBcblxuICAgIG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XG4gICAgICAgIC8vdmFyIG1hcmtlciA9IG5ldyBNYXJrZXI7XG4gICAgICAgIC8vbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgLGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgLy9tYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICAvL21hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcbiAgICAgICAgLy9tYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgICAgICAvL3RoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgLy9tYXJrZXIuZHJhZ2dhYmxlPXRydWU7XG4gICAgICAgICBcbiAgICB9XG5cbiAgICBvbk1hcmtlckV2ZW50KGFyZ3MpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgIC8vICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgICAgIC8vNyArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XG4gICAgfVxuXG4gICAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xuXG4gICAgfVxuICAgIFxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBnZXRwbGFjZXMoKXtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgnbWFwL3NlbGxlcicpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5mb3JtYWNpb25cIilcbiAgICAgICAgICAgIHRoaXMucGxhY2VzID0gZGF0YVsncGxhY2VzJ107XG4gICAgICAgICAgICB0aGlzLnNldG1hcmtldCA9IFtdO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYWNlcykpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcmRlbmFkYXMgZGUgbG9zIGNsaWVudGVzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXQgID10aGlzLnBsYWNlc1tpXVtcImxhdGl0dWRlXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nID0gdGhpcy5wbGFjZXNbaV1bXCJsb25naXR1ZGVcIl1cbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyID0gdGhpcy5wbGFjZXNbaV1bXCJjdXN0b21lclwiXVtcIm5hbWVzXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMucGxhY2VzW2ldW1wiYWRkcmVzc1wiXTtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcjtcbiAgICAgICAgICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5sYXQsdGhpcy5sb2cpO1xuICAgICAgICAgICAgICAgIG1hcmtlci50aXRsZSA9IHRoaXMuY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgbWFya2VyLnNuaXBwZXQgPSB0aGlzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgbWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiAxfTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgICAgICAgICAgbWFya2VyLmRyYWdnYWJsZT10cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubGF0KSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZykpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lcikpXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25HZXREYXRhRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFFcnJvcjogXCIgKyBlcnIpO1xuICAgIH1cbn1cbiJdfQ==