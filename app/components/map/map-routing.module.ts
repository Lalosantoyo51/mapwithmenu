import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MapComponent } from "./map/map.component";
import { ImagemapComponent } from "./imagemap/imagemap.component";



const routes: Routes = [
    { path: "map", component: MapComponent },
    { path: "imagemap", component: ImagemapComponent },
    

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapRoutingModule { }
