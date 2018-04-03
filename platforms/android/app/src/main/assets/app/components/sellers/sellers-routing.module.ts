import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SelectproductsComponent } from "./selectproducts/selectproducts.component";
import { SelectsellerComponent } from "./selectseller/selectseller.component";
import { EatComponent } from "./eat/eat.component";

const routes: Routes = [
    { path: "selectproducts", component: SelectproductsComponent },
    { path: "selectseller", component:SelectsellerComponent},  
    { path: "eat", component:EatComponent},  

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SellersRoutingModule { }
