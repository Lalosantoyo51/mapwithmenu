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
    selector: "selecseller",
    moduleId: module.id,
    templateUrl: "./selecseller.component.html",
    styleUrls: ['./sellecseller.css'],

   
   
  
})
export class SelecsellerComponent  {
    public selectedIndex: number = null;
    public hint                  = "My Hint";
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
   
   
}