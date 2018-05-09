import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import {MyHttpGetService }from "../../../get.services/get.services";
import { User } from "../../../models/user.model";
import { RouterExtensions } from "nativescript-angular";
import { UserLocationService } from "../../../services/conex/userlocation.service";

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
    public nsordersbuilding: boolean;
    public nsordersstreet:boolean;
    public name ;
    public Products: any[];
    public purchases :any[];
    public productss;
    public ordenes;
    public detail_purchases;
    public orders;
    public date;
    
    constructor(private route : RouterExtensions,private myService: MyHttpGetService,private router:Router, private userlocation:UserLocationService) { 
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
        //post latitude and longitude
        this.userlocation.Mypostion({
            latitude:this.latitude,
            longitude:this.longitude
        }).subscribe((profile)=>{
            //console.log(JSON.stringify(profile));
            this.locations = profile["Zone"];
            this.location = [];
           
            //console.log(JSON.stringify(this.locations));
            console.log(this.locations.length)

            for (let i = 0; i < this.locations.length; i++) {
                this.location.push(this.locations[i]['type']);
                this.place_id=this.locations[i]['id'];
                console.log("funciona el type")
                console.log(JSON.stringify(this.locations[i]['type']))
                console.log(" funciona el id")
                console.log(JSON.stringify(this.locations[i]['id']))
                if(this.location =='Building'){
                    this.nsordersbuilding = true
                    this.nsordersstreet = false
                }else if(this.location =='Street'){
                    this.nsordersstreet = true;
                    this.nsordersbuilding = false
                }
            }   
        },(error)=>{
            console.log(JSON.stringify(error));
            
        });
       

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