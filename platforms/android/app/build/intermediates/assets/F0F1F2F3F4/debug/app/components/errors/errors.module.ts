import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ErrorsRoutingModule } from "./errors-routing.module";
import { OfflineComponent} from "./offline/offline.component";
import { GpsComponent } from "./gps/gps.component";
import {LocationComponent} from "./location/location.component"


@NgModule({
    imports: [
        NativeScriptCommonModule,
        ErrorsRoutingModule,
        SharedModule
    ],
    declarations: [
        OfflineComponent,
        GpsComponent,
        LocationComponent
    
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ErrorsModule { }