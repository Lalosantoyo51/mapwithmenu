import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ExchangemerchandiseComponent } from "./exchangemerchandise/exchangemerchandise.component";
import { ImagemapComponent } from "./imagemap/imagemap.component";
import { MapComponent } from "./map/map.component";
import { SelecsellerComponent } from "./selecseller/selecseller.component";

const routes: Routes = [
    { path: "exchange", component: ExchangemerchandiseComponent },
    { path: "imagemap", component: ImagemapComponent },
    { path: "map", component:MapComponent},   
    { path: "selecseller", component:SelecsellerComponent},  
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TodosRoutingModule { }
