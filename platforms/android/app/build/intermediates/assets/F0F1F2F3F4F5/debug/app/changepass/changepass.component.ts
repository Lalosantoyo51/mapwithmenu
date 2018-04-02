import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { EventData } from "data/observable";
import { Label } from "ui/label";
import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";
import { Observable } from "rxjs/Observable";
import { alert } from "ui/dialogs";

@Component({
    selector: "Changepass",
    moduleId: module.id,
    templateUrl: "./changepass.component.html",
    styleUrls: ['./changepass.component.css'],

})
export class ChangepassComponent implements OnInit {
    phone:string = "";
   
    password:string="";
    newpassword:string="";
    selectedIndex = 1;


    constructor(private router : RouterExtensions, ) {
       
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
    createProfile() : void {
       

        
       
          
    }
}