import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TodosRoutingModule } from "./todos-routing.module";
import { MapComponent} from "./map/map.component"
import { SharedModule } from "../../shared/shared.module";
import { ImagemapComponent } from "./imagemap/imagemap.component";
import { ExchangemerchandiseComponent } from "./exchangemerchandise/exchangemerchandise.component";
import { SelecsellerComponent } from "./selecseller/selecseller.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        TodosRoutingModule
    ],
    declarations: [
        MapComponent,
        ImagemapComponent,
        ExchangemerchandiseComponent,
        SelecsellerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TodosModule { }
