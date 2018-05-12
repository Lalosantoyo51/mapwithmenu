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
import { MyHttpGetService } from "../../../get.services/get.services";
import { ProductExchangeService } from "../../../services/conex/exchange.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: "selectseller",
    moduleId: module.id,
    templateUrl: "./selectseller.component.html",
    styleUrls: ['./selectseller.css'],
    providers: [MyHttpGetService]

   
   
  
})
export class SelectsellerComponent  {
    public sellerArray:any[];
    public seller:Array<string>;
    public selectedIndex: number = null;
    public seller_id=[];
    public seller_id2;
    public data: any[];
    public numseller;
    public employee_origin_id;
    public employee_receiver_id;
    public quantity;
    public product_id;
    public items: ValueList<string>;
    public cssClass: string      = "default";
    public asuptm=8;

    public ngOnInit() {
        this.getseller();
    }

    public onchange(args: SelectedIndexChangedEventData) {
        //console.log(args.newIndex);
        //console.log(this.seller);
        console.log(this.seller[args.newIndex]);
        console.log(this.seller_id)
        if(this.seller)
            for(let i=0; i<= args.newIndex;i++){
                console.log(this.seller_id[i])
                this.employee_receiver_id=this.seller_id[i];
        }
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
    constructor(private route: ActivatedRoute,private exchange:ProductExchangeService,private myService: MyHttpGetService,private router : RouterExtensions) {
        this.route.queryParams.subscribe(params =>{
            this.employee_origin_id = params["employee_origin_id"];
           this.product_id = params['product_id'];
           this.quantity = params['quantity'];
        })
   
    }
    previous(){
        this.router.navigate(['/sellers/selectproducts']);
         
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    getseller(){
        this.myService.getData('seller/transfer/1/employee')
        .subscribe((sellers) => {
        this.seller=[];
             for (let seller in sellers) {
                console.log(JSON.stringify(sellers[seller].name));
                this.seller.push(sellers[seller].name + " "+ sellers[seller].last_name)
                this.seller_id.push(sellers[seller].user_id)
                
            } 
        }, (error) => {
            this.onGetDataError(error);
        });
    }
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
    confirmar(){
      
            this.exchange.exchange({
                employee_origin_id:this.employee_origin_id,
                employee_receiver_id:this.employee_receiver_id,
                quantity:this.quantity,
                product_id:this.product_id
            }).subscribe((profile)=>{
                console.log(JSON.stringify(profile));
              
    
            },(error)=>{
                console.log(JSON.stringify(error));
                
            });
        
    }

   
   
}
