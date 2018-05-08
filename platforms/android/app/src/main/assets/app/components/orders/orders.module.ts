import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { OrdersRoutingModule } from "./orders-routing.module";

import { SharedModule } from "../../shared/shared.module";

import { QualifyComponent } from "./qualify/qualify.component";
import { OrdersstreetComponent } from "./orderssteet/orders.component"
import { SellComponent } from "./sell/sell.component";
import { OrderComponent } from "./order/order.component";
import { OrdersbuildingComponent } from "./orderbuilding/orderbuilding.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        OrdersRoutingModule
    ],
    declarations: [
        OrderComponent,
        QualifyComponent,
        OrdersstreetComponent,
        OrdersbuildingComponent,
        SellComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrdersModule { }
