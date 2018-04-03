import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../../shared/shared.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular";
import { AppRoutingModule } from "../../app-routing.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import * as application from 'tns-core-modules/application'; 
import { ExchangemerchandiseComponent } from "./exchangemerchandise/exchangemerchandise.component";
import { ImagemapComponent } from "./imagemap/imagemap.component";
import { MapComponent } from "./map/map.component";
import { SelecsellerComponent } from "./selecseller/selecseller.component";
import { TodosRoutingModule } from "./todos-routing.module";



registerElement ( " PreviousNextView " , ( ) => require ( " nativescript-iqkeyboardmanager " ) . PreviousNextView )  

@NgModule({
   
    imports: [
        NativeScriptCommonModule,
        TodosRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        
        
    ],
    declarations: [
       ExchangemerchandiseComponent,
       ImagemapComponent,
       MapComponent,
       SelecsellerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TodosModule { }