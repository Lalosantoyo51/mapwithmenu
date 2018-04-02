import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OfflineComponent} from "./offline/offline.component";
import { GpsComponent } from "./gps/gps.component";
import { LocationComponent } from "./location/location.component";


const routes: Routes = [

    { path: "offline", component: OfflineComponent },
    { path: "gps", component: GpsComponent },
    { path: "location", component: LocationComponent }, 
 
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ErrorsRoutingModule { }
