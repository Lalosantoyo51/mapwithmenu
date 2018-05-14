import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Component, ElementRef, ViewChild,OnInit } from "@angular/core";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";
import { Accuracy } from "ui/enums";
import { RouterExtensions } from "nativescript-angular/router";
import { MyHttpGetService } from "../../../get.services/get.services";
import { Placestreet } from "../../../services/conex/locationstreet.service";
import { UserLocationService } from "../../../services/conex/userlocation.service";

@Component({
    selector: "eat",
    moduleId: module.id,
    templateUrl: "./eat.component.html",
    styleUrls: ['./eat.css'],
    providers: [MyHttpGetService]

   
   
  
})
export class EatComponent  {
    public number1: string = "1";
    public number2: string = "0";
    public result: number = 0;
    public name =[] ;
    public Products: any[];
    public productss;
    public type;
    public locations;
    public location;

    public floor:string;
    public firstname:string;
    public lastname:string;
    public build;
    public lugarid;
    public vendedorid=6;
    public cost = 30;
    public buildid;
    public oficcesid;
    public products_place;
    public provisions_seller;
    public getdata;
    //tipo building id 3
    //public latitude ="21.876871" ;
    //public longitude ="-102.262451";
    //tipo street
    //public latitude ="21.922501";
    //public longitude ="-102.304532";
    //tipo building con el id 1
    public latitude ="21.913840";
    public longitude ="-102.315723";
    ngOnInit(): void {
        this.userlocation.Mypostion({
            latitude:this.latitude,
            longitude:this.longitude
        }).subscribe((profile)=>{
            //console.log(JSON.stringify(profile));
            this.locations = profile["Zone"];
            this.location = [];
            //console.log(JSON.stringify(this.locations));
            console.log(this.locations.length)
            if(this.locations.length ==0){
                this.router.navigate(['/errors/location'])
            }

            for (let i = 0; i < this.locations.length; i++) {
                this.location.push(this.locations[i]['type']);
                if (this.location == "Street"){
                    this.typestreet();
           
                }else {
                    console.log("estas en tipo edificio");
                  this.typebuilding();
                }
            }  
            
    
        },(error)=>{
            console.log(JSON.stringify(error));
            
        });
    }

 

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/


  
    constructor(private userlocation:UserLocationService,private placestreet:Placestreet,private router : RouterExtensions,private myService: MyHttpGetService) {
     
       
      
    }


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }

  
   
          
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    postmyposition(){
   
    }
    typestreet(){
        console.log("estas en tipo calle");
        console.log('productos de lugar tipo')
        this.placestreet.locationstreet({
        latitude:this.latitude,
        longitude:this.longitude
        }).subscribe((profile)=>{
        console.log(JSON.stringify(profile));
        this.Products = profile['products'];
        //console.log(JSON.stringify(data))
        this.name = []
        for (let i = 0; i < this.Products.length; i++) {
            if(this.Products[i]["type"]=='Street'){
                    // this.name.push(this.Products[i]["products"]['name']);
            console.log(JSON.stringify(this.Products[i]["products_place"]));
            this.products_place =  this.Products[i]["products_place"];
            for(let i =0;i<this.products_place.length;i++){
                console.log("producto")
                console.log(JSON.stringify(this.products_place[i]["product"]["name"]));
                this.name.push({
                    'id':this.products_place[i]["product"]["id"],
                    'name':this.products_place[i]["product"]["name"],
                    'cantidad':this.result
                });
            }            
        }else {
            console.log("estas en tipo edificio te regresaremos pronto la mercancia")
        } 

        }

        },(error)=>{
        console.log(JSON.stringify(error));

        });
        console.log(this.floor, this.build)
            }
        typebuilding(){
            this.myService.getData('seller/4/provisions')
            .subscribe((data)=>{
                //console.log(JSON.stringify(data))
                this.getdata =data['provisions'];
                this.name=[];
                for(let i=0; i<this.getdata.length;i++){
                   console.log(JSON.stringify(this.getdata[i]['provisions_seller']))
                   this.provisions_seller =this.getdata[i]['provisions_seller'];
                   for(let i=0;i<this.provisions_seller.length;i++){
                       console.log(JSON.stringify(this.provisions_seller[i]['product']['name']))
                       this.name.push({
                           'id':this.provisions_seller[i]['product']['name'],
                           'name':this.provisions_seller[i]['product']['name'],
                           'cantidad':this.result
                       })
                   }
                }

            })

        }
   
}
