import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { QualifyComponent } from "./qualify/qualify.component";
import { OrdersComponent } from "./orders/orders.component";



const routes: Routes = [
    { path: "qualify", component: QualifyComponent },
    { path: "orders", component: OrdersComponent },

    

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrdersRoutingModule { }
