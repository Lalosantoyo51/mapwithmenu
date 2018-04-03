import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular/router";
import * as Connectivity from "tns-core-modules/connectivity";
import { User } from "../../models/user.model";


@Component({
    selector: "profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html",
   styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    user;
    
    public name2:Array<string>;
    public usuarios:any [];
    public name:Array<string>;

    
    constructor(private router : RouterExtensions ) {

     }
    
 
    
   

  
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
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
   async ngOnInit() {
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
    goToLog(){
        this.router.navigate(['log']);
    }
    goToPass(){
        this.router.navigate(['/auth/changepassword']);
    }
}
