import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
// >> import-geolocation-plugin
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {
    public distanceResult: string = "0";
    public distance: number = 0;
    public index: number = 0;

    public startpointLongitude: number = 42.696552;
    public startpointLatitude: number = 23.32601;
    public endpointLongitude: number = 40.71448;
    public endpointLatitude: number = -74.00598;

    constructor() {
        // >> enable-location-services
        enableLocationRequest(true);
        // << enable-location-services
    }

    public isLocationEnabled() {
        // >> check-is-service-enabled
        isEnabled().then(function (isLocationEnabled) {
            let message = "Location services are not available";
            if (isLocationEnabled) {
                message = "Location services are available";
            }
            alert(message);
        }, function (e) {
            console.log("Location error received: " + (e.message || e));
        });
        // << check-is-service-enabled
    }

    public getDistance() {
        // >> get-distance
        let startLocation: Location = new Location();
        startLocation.longitude = this.startpointLongitude;
        startLocation.latitude = this.startpointLatitude;

        let endLocation: Location = new Location();
        endLocation.longitude = this.endpointLongitude;
        endLocation.latitude = this.endpointLatitude;
        this.distance = distance(startLocation, endLocation);
        // << get-distance
        console.log("distance - " + this.distance);
        this.distanceResult = (this.distance * 0.001).toFixed(3);
    }

    public getLocationOnce() {
        // >> get-current-location
        getCurrentLocation({
            desiredAccuracy: Accuracy.high,
            timeout: 5000
         })
            .then(location => {
                console.log("Location received: " + location);
                this.startpointLatitude = location.latitude;
                this.startpointLongitude = location.longitude;
            }).catch(error => {
                console.log("Location error received: " + error);
                alert("Location error received: " + error);
            });
        // << get-current-location
    }
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
