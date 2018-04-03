import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../../shared/shared.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular";
import { AppRoutingModule } from "../../app-routing.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import * as application from 'tns-core-modules/application'; 
import { SelectproductsComponent} from "./selectproducts/selectproducts.component";
import { SelectsellerComponent } from "./selectseller/selectseller.component";
import { SellersRoutingModule } from "./sellers-routing.module";
import { EatComponent } from "./eat/eat.component";



registerElement ( " PreviousNextView " , ( ) => require ( " nativescript-iqkeyboardmanager " ) . PreviousNextView )  

@NgModule({
   
    imports: [
        NativeScriptCommonModule,
        SellersRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        
        
    ],
    declarations: [
       SelectproductsComponent,
       SelectsellerComponent,
       EatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SellersModule { }