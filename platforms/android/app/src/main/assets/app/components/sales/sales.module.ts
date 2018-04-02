import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SalesRoutingModule } from "./sales-routing.module";

import { SharedModule } from "../../shared/shared.module";

import { QualifyComponent } from "./qualify/qualify.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        SalesRoutingModule
    ],
    declarations: [

        QualifyComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SalesModule { }
