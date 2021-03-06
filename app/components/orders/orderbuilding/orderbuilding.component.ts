import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Label } from "ui/label";
import * as utils from "utils/utils";
import { MyHttpGetService } from "../../../get.services/get.services";
import { Router, NavigationExtras } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
@Component({
    selector: "ns-ordersbuilding",
    moduleId: module.id,
    templateUrl: "./orderbuilding.component.html",
    styleUrls: ['./orderbuilding.component.css'],
    providers:[MyHttpGetService]
})
export class OrdersbuildingComponent implements OnInit {
    public btn:boolean;
    public info_ordenes:boolean;
    public empty:boolean;
    public name ;
    public Products: any[];
    public purchases :any[];
    public productss;
    public ordenes;
    public detail_purchases;
    public orders;
    public building;
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    constructor(private myService: MyHttpGetService,private router : RouterExtensions){}
    ngOnInit(): void {
       this.getdata();
   
    }
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    getdata(){
        this.myService.getData('seller/4/orders')
        .subscribe((data) => {
            this.purchases =data['order'] ;
             if(this.purchases.length ==0){
                 this.empty=true 
                 this.btn =false
                 this.info_ordenes=false
             }
            //console.log(JSON.stringify(data['purchases']))
           /*  console.log(this.purchases[0]["id"]);
            console.log(JSON.stringify(this.purchases[0]["detail_purchases"]))
            console.log(JSON.stringify(this.purchases[0]["detail_purchases"][0]["product"]["name"]))
            console.log(JSON.stringify(this.purchases[0]["detail_purchases"][1]["product"]["name"]))
            console.log(JSON.stringify(this.purchases[1]["detail_purchases"][0]["product"]["name"]))      */
            this.name = []
            this.ordenes=[]
            console.log("sdadsa")
            console.log(this.purchases.length);
                for (let i = 0; i < this.purchases.length; i++) {
                    this.btn=true;
                    this.orders = this.purchases[i]["id"]
                    console.log("orden")
                   console.log(JSON.stringify(this.purchases[i]["id"]));
                   console.log(JSON.stringify(this.purchases[i]["building"]["name"]));
                   console.log(JSON.stringify(this.purchases[i]["office"]["name"]));
                   console.log(JSON.stringify(this.purchases[i]["customer"]["names"]));
                   console.log(JSON.stringify(this.purchases[i]["payment_type"]));
                   
                   //this.ordenes.push(this.orders); 
                   this.detail_purchases =data["order"][i]["detail_purchases"]; 
                   let products=[];
                   for (let i = 0; i < this.detail_purchases.length; i++) {
                    console.log("detalles del compra")
                    console.log(JSON.stringify("id de la compra"+ this.detail_purchases[i]["purchase_id"]))
                    console.log(JSON.stringify(this.detail_purchases[i]["quantity"] +" "+this.detail_purchases[i]["product"]["name"]));
                    products.push({
                        'name': this.detail_purchases[i]["product"]["name"],
                        'quantity': this.detail_purchases[i]["quantity"],
                        'purchase_id':'id de la compra'+ this.detail_purchases[i]["purchase_id"]
                        
                        }); 
                }
                    this.ordenes.push({ 
                        'customer':"Pedido para: "+this.purchases[i]["customer"]["names"],
                        'created_at':this.purchases[i]["created_at"],
                        'id': this.purchases[i]["id"],
                        'products': products,
                        'building': this.purchases[i]["building"]["name"],
                        'office':this.purchases[i]["office"]["name"],
                        'payment_type':this.purchases[i]["payment_type"],
                        
                    });
                } 
                    //console.log("Ordenes: " +JSON.stringify(this.ordenes) )
            }, (error) => {
                this.onGetDataError(error);
            });

    }
    update(){
        this.getdata();
        this.router.navigate(['/orders/canceled_orders'])

    }
    canceled_orders(ordenes){
        console.log(ordenes);
        let navigationextras: NavigationExtras={
            queryParams: {
                "order_id":ordenes
            }
        } 
        this.router.navigate(['/orders/canceled_orders'],navigationextras);
    }
    deliveries(ordenes){
        console.log(ordenes)
        
            this.myService.deletedata('order/'+ordenes+'/deliveries')
            .subscribe((deletedata) => {
               console.log(JSON.stringify(deletedata))
               },(error) => {
               this.onGetDataError(error);
           });

           
           setTimeout(() => {
            this.router.navigate (["orders/qualify"]);
            this.getdata();
        }, 63);
        
    }
}
