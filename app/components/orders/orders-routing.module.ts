import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { QualifyComponent } from "./qualify/qualify.component";
import { OrdersstreetComponent } from "./orderssteet/orders.component";
import { SellComponent } from "./sell/sell.component";
import { OrderComponent } from "./order/order.component";
import { OrdersbuildingComponent } from "./orderbuilding/orderbuilding.component";



const routes: Routes = [
    { path: "order", component: OrderComponent},
    { path: "qualify", component: QualifyComponent },
    { path: "ordersstreet", component: OrdersstreetComponent },
    { path: "sell", component: SellComponent },
    { path: "ordersbuilding", component:OrdersbuildingComponent}

    

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrdersRoutingModule { }
