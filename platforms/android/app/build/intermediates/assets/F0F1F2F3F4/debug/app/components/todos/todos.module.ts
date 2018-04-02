import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TodosRoutingModule } from "./todos-routing.module";
import { MapComponent} from "./map/map.component"
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        TodosRoutingModule
    ],
    declarations: [
        MapComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TodosModule { }
