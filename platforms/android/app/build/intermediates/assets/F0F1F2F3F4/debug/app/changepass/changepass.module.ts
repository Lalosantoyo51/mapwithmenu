import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { ChangepassRoutingModule } from "./changepass-routing.module";
import { ChangepassComponent } from "./changepass.component";;
import { NativeScriptFormsModule } from "nativescript-angular/forms";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChangepassRoutingModule,
        
        SharedModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ChangepassComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChangepassModule { }