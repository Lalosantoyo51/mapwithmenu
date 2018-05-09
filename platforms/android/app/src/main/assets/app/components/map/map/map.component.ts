import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
import { MapView, Marker, Position, Polyline } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
import { Color } from "tns-core-modules/color/color";
import { MyHttpGetService } from "../../../get.services/get.services";
registerElement('MapView', () => MapView);

@Component({
    selector: "map",
    moduleId: module.id,
    templateUrl: "./map.component.html",
    styleUrls: ['./map.css'],
    providers: [MyHttpGetService]
   
   
  
})
export class MapComponent implements OnInit {
    public places;
    public setmarket;
    public customer;
    public lat;
    public log;
    public address;
    latitude =  21.8857199;
    longitude = -102.36134;
    zoom = 8;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;
    public startpointLongitude: number = 42.696552;
    public startpointLatitude: number = 23.32601;
    public gMap;

    lastCamera: String;
    constructor(private myService: MyHttpGetService){}

    //Map events
    onMapReady(event) {
        this.getplaces();
        console.log('Map Ready');
        console.log(this.lat)
        this.mapView = event.object;
        var marker = new Marker;
         this.gMap = event.gMap;
        this.gMap.setMyLocationEnabled(true);
       
    }
    addmarket(onCameraChanged,location){
this.getplaces
    
        
    }
 
 

    onCoordinateTapped(args) {
        //var marker = new Marker;
        //marker.position = Position.positionFromLatLng(args.position.latitude ,args.position.longitude);
        //marker.title = "Sydney";
        //marker.snippet = "Australia";
        //marker.userData = {index: 1};
        //this.mapView.addMarker(marker);
        //marker.draggable=true;
         
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
    getplaces(){
        this.myService.getData('map/seller')
        .subscribe((data) => {
            console.log("informacion")
            this.places = data['places'];
            this.setmarket = [];
            //console.log(JSON.stringify(this.places))
           
             for (let i = 0; i < this.places.length; i++) {
                console.log("cordenadas de los clientes")
                this.lat  =this.places[i]["latitude"];
                this.log = this.places[i]["longitude"]
                this.customer = this.places[i]["customer"]["names"];
                this.address = this.places[i]["address"];
                var marker = new Marker;
                marker.position = Position.positionFromLatLng(this.lat,this.log);
                marker.title = this.customer;
                marker.snippet = this.address;
                marker.userData = {index: 1};
                this.mapView.addMarker(marker);
                marker.draggable=true;
                console.log(JSON.stringify(this.lat))
                console.log(JSON.stringify(this.log))
                console.log(JSON.stringify(this.customer))


            }
        
        }, (error) => {
            this.onGetDataError(error);
        });
    }
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
}
