import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";

import {ProfileService} from ".././post.services/changepassword.services"

// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
registerElement('MapView', () => MapView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['map.css'],
    providers:[ProfileService]
   
  
})
export class HomeComponent implements OnInit {
   
    latitude =  21.8857199;
    longitude = -102.36134;
    zoom = 8;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;
    public startpointLongitude: number = 42.696552;
    public startpointLatitude: number = 23.32601;

    lastCamera: String;

    //Map events
    onMapReady(event) {
        console.log('Map Ready');

        this.mapView = event.object;

        console.log("Setting a marker...");
        var marker = new Marker;
        marker.position = Position.positionFromLatLng(21.88709632015833,-102.25194454193115);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
        marker.draggable=true;
        
      
    }
    hola(onCameraChanged){
        var marker = new Marker;
        marker.position = Position.positionFromLatLng(onCameraChanged.latitude,onCameraChanged.longitude);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
        marker.draggable=true;
       
  


    }
 

    onCoordinateTapped(args) {
        //var marker = new Marker;
        //marker.position = Position.positionFromLatLng(args.position.latitude ,args.position.longitude);
        //marker.title = "Sydney";
        //marker.snippet = "Australia";
        //marker.userData = {index: 1};
        //this.mapView.addMarker(marker);
        //marker.draggable=true;

   
       console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);   
        
        
    }

    onMarkerEvent(args) {
       // console.log("Marker Event: '" + args.eventName
         //   + "' triggered on: " + args.marker.title
           //7 + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        //console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);

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
