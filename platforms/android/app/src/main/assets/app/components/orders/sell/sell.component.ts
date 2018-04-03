import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Label } from "ui/label";
import * as utils from "utils/utils";
@Component({
    selector: "ns-sell",
    moduleId: module.id,
    templateUrl: "./sell.component.html",
    styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
    constructor(){}
    ngOnInit(): void {}
}
