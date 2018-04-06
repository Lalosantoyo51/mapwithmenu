import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
@Component({
    selector: "selectseller",
    moduleId: module.id,
    templateUrl: "./selectseller.component.html",
    styleUrls: ['./selectseller.css'],

   
   
  
})
export class SelectsellerComponent  {
    public selectedIndex: number = null;

    public items: ValueList<string>;
    public cssClass: string      = "default";

    public ngOnInit() {
        this.items = new ValueList<string>();
        for ( let loop = 0; loop < 200; loop++ ) {
            this.items.push({
                value:   `I${loop}`,
                display: `Item ${loop}`,
            });
        }
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
            args.newIndex)}"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public changeStyles() {
        this.cssClass = "changed-styles";
    }
    constructor(private router : RouterExtensions) {
   
    }
    previous(){
        this.router.navigate(['/sellers/selectproducts']);
         
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
   
   
}
