import { Component, Input, OnInit } from "@angular/core";
import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { getBoolean,setBoolean} from "application-settings";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"]
})
export class MyDrawerComponent extends Observable {
    @Input() mostrar:boolean;
    @Input() selectedPage: string;

    user;

    constructor( private router : RouterExtensions, private authService:AuthService ) { 
        super();
    }

    async ngOnInit() {
        this.user = await this.authService.user.toPromise();
    }
    
    async logOut(){
        this.authService.logOut();
        this.router.navigate(['/auth/login'],{ clearHistory:true});
    }
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
