import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {ActivatedRoute} from "@angular/router"
import { Label } from "ui/label";
@Component({
    selector: "chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html",
    styleUrls: ['./chat.component.css']

})
export class ChatComponent implements OnInit {
    public messages;
    public message: string;
    public user:string;
    public user2:string;
    public result:string;
    constructor( private route: ActivatedRoute) { 
     
        if(this.result){
            this.route.queryParams.subscribe(params =>{
                this.result= params["user"];
            })
        }else{
            this.route.queryParams.subscribe(params =>{
                this.result=params["user2"];
            })
        }

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
    chat(){
        console.log(this.message)
    }
    
}
