import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MapRoutingModule } from "./map-routing.module";

import { SharedModule } from "../../shared/shared.module";
import { MapComponent } from "./map/map.component";
import { ImagemapComponent } from "./imagemap/imagemap.component";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        MapRoutingModule
    ],
    declarations: [
        MapComponent,
        ImagemapComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule { }
