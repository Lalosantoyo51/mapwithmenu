import { Component, Input, OnInit } from "@angular/core";
import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { getBoolean,setBoolean} from "application-settings";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { RouterExtensions } from "nativescript-angular/router";
import {MyHttpGetService }from "../../get.services/get.services";
import { Label } from "ui/label";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"],
    providers: [MyHttpGetService]

})
export class MyDrawerComponent extends Observable {
    public orders:any[];
    public floor:Array<string>
    public isItemVisible: boolean;
    public myplaces:boolean;
    public getdata: any[];
    public info: Array<string>;
    @Input() mostrar:boolean;
    @Input() selectedPage: string;

    user;

    constructor( private router : RouterExtensions, private authService:AuthService,private myService: MyHttpGetService ) { 
        super();
    }

    async ngOnInit() {
        this.user = await this.authService.user.toPromise();
      //get data user
        this.getuser();
    }
    

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
    async getuser(){
        
        //console.log(JSON.stringify(this.user.phone));
        this.myService.getData('seller/'+this.user.id)
        .subscribe((data) => {
            //console.log(JSON.stringify( this.getdata = data["usuario"]))
            this.getdata = data['usuario'];
            this.info = [];
         
           
            // Esto es exactamente lo mismo que
            for (let i = 0; i < this.getdata.length; i++) {
                //console.log(JSON.stringify(this.getdata[i]['names']));
                this.info.push(this.getdata[i]['name']+ " "+ this.getdata[i]["last_name"]);
            }
            
        },(error) => {
        }); 
    }
        
    async logOut(){
        this.authService.logOut();
        this.router.navigate(['/auth/login'],{ clearHistory:true});
    }
}
