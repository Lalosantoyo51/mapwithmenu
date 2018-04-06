import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "selectproducts",
    moduleId: module.id,
    templateUrl: "./selectproducts.component.html",
    styleUrls: ['./selectproducts.css'],

   
   
  
})
export class SelectproductsComponent  {
    constructor(private router : RouterExtensions) {
   
    }
    next(){
        this.router.navigate(['/sellers/selectseller']);
         
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
   
   
}
