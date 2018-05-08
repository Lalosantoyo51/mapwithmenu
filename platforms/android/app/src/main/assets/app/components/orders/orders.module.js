"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var orders_routing_module_1 = require("./orders-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var qualify_component_1 = require("./qualify/qualify.component");
var orders_component_1 = require("./orderssteet/orders.component");
var sell_component_1 = require("./sell/sell.component");
var order_component_1 = require("./order/order.component");
var orderbuilding_component_1 = require("./orderbuilding/orderbuilding.component");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                orders_routing_module_1.OrdersRoutingModule
            ],
            declarations: [
                order_component_1.OrderComponent,
                qualify_component_1.QualifyComponent,
                orders_component_1.OrdersstreetComponent,
                orderbuilding_component_1.OrdersbuildingComponent,
                sell_component_1.SellComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGlFQUE4RDtBQUU5RCw0REFBMEQ7QUFFMUQsaUVBQStEO0FBQy9ELG1FQUFzRTtBQUN0RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELG1GQUFrRjtBQW9CbEY7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFqQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLDJDQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxvQ0FBZ0I7Z0JBQ2hCLHdDQUFxQjtnQkFDckIsaURBQXVCO2dCQUN2Qiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE9yZGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9vcmRlcnMtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7IFF1YWxpZnlDb21wb25lbnQgfSBmcm9tIFwiLi9xdWFsaWZ5L3F1YWxpZnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlcnNzdHJlZXRDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlcnNzdGVldC9vcmRlcnMuY29tcG9uZW50XCJcbmltcG9ydCB7IFNlbGxDb21wb25lbnQgfSBmcm9tIFwiLi9zZWxsL3NlbGwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyL29yZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJzYnVpbGRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlcmJ1aWxkaW5nL29yZGVyYnVpbGRpbmcuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBPcmRlcnNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgT3JkZXJDb21wb25lbnQsXG4gICAgICAgIFF1YWxpZnlDb21wb25lbnQsXG4gICAgICAgIE9yZGVyc3N0cmVldENvbXBvbmVudCxcbiAgICAgICAgT3JkZXJzYnVpbGRpbmdDb21wb25lbnQsXG4gICAgICAgIFNlbGxDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHsgfVxuIl19