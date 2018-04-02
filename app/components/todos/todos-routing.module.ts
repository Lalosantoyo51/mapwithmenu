import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MapComponent } from "./map/map.component";
import { ImagemapComponent } from "./imagemap/imagemap.component";
import { ExchangemerchandiseComponent } from "./exchangemerchandise/exchangemerchandise.component";
import { SelecsellerComponent } from "./selecseller/selecseller.component";



const routes: Routes = [


    {path:"", component: SelecsellerComponent}
    
    

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TodosRoutingModule { }
