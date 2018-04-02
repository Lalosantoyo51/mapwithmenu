import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { QualifyComponent } from "./qualify/qualify.component";



const routes: Routes = [
    { path: "qualify", component: QualifyComponent },
    

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SalesRoutingModule { }
