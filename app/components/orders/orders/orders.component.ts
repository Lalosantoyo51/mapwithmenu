import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Label } from "ui/label";
import * as utils from "utils/utils";
@Component({
    selector: "ns-order",
    moduleId: module.id,
    templateUrl: "./orders.component.html",
    styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    constructor(){}
    ngOnInit(): void {}
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
