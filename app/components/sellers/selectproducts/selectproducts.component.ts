import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../models/user.model";
import { MyHttpGetService } from "../../../get.services/get.services";
import { Router, NavigationExtras } from "@angular/router";
@Component({
    selector: "selectproducts",
    moduleId: module.id,
    templateUrl: "./selectproducts.component.html",
    styleUrls: ['./selectproducts.css'],
    providers:[MyHttpGetService]

   
   
  
})
export class SelectproductsComponent implements OnInit {
    public getdata;
    public provisions_seller;
    public product;
    public quantity = 3;
    public product_id =2;
    user;
    async ngOnInit() {
        this.user = await this.authService.user.toPromise();
        console.log('id del vendedor'+this.user.id)
        this.myService.getData('seller/'+this.user.id+'/provisions')
        .subscribe ((data)=>{
            this.getdata =data['provisions'];
            this.product=[];
            for(let i=0; i<this.getdata.length;i++){
                console.log(this.getdata[i]['name'])
                this.provisions_seller= data['provisions'][i]['provisions_seller']
                for (let i = 0; i < this.provisions_seller.length; i++) {
                  
                    console.log(this.provisions_seller[i]['product']["name"]);
                    this.product.push({
                        'name':this.provisions_seller[i]['product']["name"]
                    })
                }
                
            }
        })
    }
    constructor(private route:Router,private myService: MyHttpGetService,private router : RouterExtensions, private authService:AuthService) {
   
    }
    next(){
        let navigationextras:NavigationExtras={
            queryParams:{
                'employee_origin_id':this.user.id,
                'quantity':this.quantity,
                'product_id':this.product_id
            }
        }
        this.route.navigate(['/sellers/selectseller'],navigationextras); 
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
   
   
}
