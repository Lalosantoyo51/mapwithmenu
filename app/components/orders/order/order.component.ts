import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import {MyHttpGetService }from "../../../get.services/get.services";
import { User } from "../../../models/user.model";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ns-order",
    moduleId: module.id,
    templateUrl: "./order.component.html",
    styleUrls: ['./order.component.css'],
    providers:[MyHttpGetService]
})
export class OrderComponent implements OnInit {
    //tipo building id 3
    //public latitude ="21.876871" ;
    //public longitude ="-102.262451";
    //tipo street
    //public latitude ="21.922501";
    //public longitude ="-102.304532";
    //tipo building con el id 1
    public latitude ="21.913840";
    public longitude ="-102.315723";
    public location;
    public locations;
    public place_id:number;
    user;
    public isItemVisible: boolean = true;
    public nsorder: boolean;
    public nsmessage:boolean;
    public name ;
    public Products: any[];
    public purchases :any[];
    public productss;
    public ordenes;
    public detail_purchases;
    public orders;
    public date;
    
    constructor(private route : RouterExtensions,private myService: MyHttpGetService,private router:Router) { 
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
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
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
    buy(){
        if(this.location =="Building"){
            let navigationextras: NavigationExtras={
                queryParams: {
                    "place_id":this.place_id,
                } 
            }
            console.log(this.place_id)
            this.router.navigate (["order/building"],navigationextras);
        }else if(this.location =="Street"){
            this.router.navigate (["order/productstreet"]);
           
        }
        

    }
}