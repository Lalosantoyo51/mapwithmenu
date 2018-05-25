import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { TextView } from "ui/text-view";
import { Value } from "tns-core-modules/debugger/css-agent";
import { Observable } from "tns-core-modules/data/observable/observable";
import { registerElement } from "nativescript-angular";
import { setTimeout } from "timer";
import { ScrollEventData } from "ui/scroll-view";
import { ActivatedRoute, Router } from "@angular/router";
import { MyHttpGetService } from "../../../get.services/get.services";
import { CancelOrdenService } from "../../../services/conex/cancel.service";
import { JsonpInterceptor } from "@angular/common/http";
import { AuthService } from "../../../services/auth.service";
import {User} from "../../../models/user.model"
let page;

@Component({
    selector: "canceled_orders",
    moduleId: module.id,
    templateUrl: "./canceled_orders.component.html",
    styleUrls: ['./canceled_orders.component.css'],
    providers: [MyHttpGetService]
    
})
export class Canceled_orders implements OnInit {
    user
    public order_id;
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    constructor(private authService:AuthService,private cancel:CancelOrdenService,private route: ActivatedRoute,private myServive:MyHttpGetService,private router:Router){
        this.route.queryParams.subscribe(params=>{
            this.order_id=params['order_id']
        })
    }
   
    async ngOnInit() {
        this.user = await this.authService.user.toPromise();
    }
    public editState = true;
    public tvtext = "";
    public buttonText = "Disable editting of TextView";

    disableTextView() {
        if (this.editState) {
            this.editState = false;
            this.buttonText = "Enable editting of TextView";
        } else {
            this.editState = true;
            this.buttonText = "Disable editting of TextView";
        }
    }

    submit(args) {
        let textview: TextView = <TextView>args.object;
    
    }
    public status = "not scrolling";
    public onScroll(args: ScrollEventData) {
        this.status = "scrolling";

        setTimeout(() => {
            this.status = "not scrolling";
        }, 300);

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    Confirmar(){
        this.postcomment();
    }
    deleteorder(){
        this.myServive.deletedata('user/'+this.user.id+'/order/'+this.order_id+'/destroy')
        .subscribe((data)=>{
            console.log(JSON.stringify(data))
            
        })
    }
    postcomment(){
        this.cancel.cancel_orden({
            id:this.order_id,
            comment:this.tvtext,
        }).subscribe((data)=>{
            console.log(JSON.stringify(data))
            if(data == null){
                console.log('se registro ')
                this.deleteorder();
                this.router.navigate(['orders/order'])
            }
        },(error)=>{
            console.log(JSON.stringify(error));
            
        });   

    }

}