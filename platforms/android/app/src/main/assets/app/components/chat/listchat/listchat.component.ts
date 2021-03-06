import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular";
import { Router,NavigationExtras, Route} from "@angular/router";
@Component({
    selector: "listchat",
    moduleId: module.id,
    templateUrl: "./listchat.component.html",
    styleUrls: ['./listchat.component.css']

})
export class ListchatComponent implements OnInit {
    public user:string= "lalo";
    public user2:string= "liz";
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
    gomessage(){
        let navigationextras: NavigationExtras={
            queryParams: {
                "user": this.user,
            
            }
        }
 
        this.router.navigate(['/chat/chat'],navigationextras);
    }
    gomessage2(){
        let navigationextras: NavigationExtras={
            queryParams: {
             
                "user2": this.user2
            }
        }
 
        this.router.navigate(['/chat/chat'],navigationextras);
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    constructor(private router : Router) {

       

    }
   
    
}