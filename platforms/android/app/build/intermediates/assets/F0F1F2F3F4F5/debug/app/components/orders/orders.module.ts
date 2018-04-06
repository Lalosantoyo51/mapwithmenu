import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { OrdersRoutingModule } from "./orders-routing.module";

import { SharedModule } from "../../shared/shared.module";

import { QualifyComponent } from "./qualify/qualify.component";
import { OrdersComponent } from "./orders/orders.component";
import { SellComponent } from "./sell/sell.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        OrdersRoutingModule
    ],
    declarations: [

        QualifyComponent,
        OrdersComponent,
        SellComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrdersModule { }
