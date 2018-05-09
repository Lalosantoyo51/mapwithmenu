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
var canceled_orders_component_1 = require("./canceled_orders/canceled_orders.component");
var nativescript_angular_1 = require("nativescript-angular");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                orders_routing_module_1.OrdersRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
            ],
            declarations: [
                canceled_orders_component_1.Canceled_orders,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGlFQUE4RDtBQUU5RCw0REFBMEQ7QUFFMUQsaUVBQStEO0FBQy9ELG1FQUFzRTtBQUN0RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELG1GQUFrRjtBQUNsRix5RkFBOEU7QUFDOUUsNkRBQStEO0FBc0IvRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQW5CeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1osMkNBQW1CO2dCQUNuQiw4Q0FBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMkNBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQix3Q0FBcUI7Z0JBQ3JCLGlEQUF1QjtnQkFDdkIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBPcmRlcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vb3JkZXJzLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBRdWFsaWZ5Q29tcG9uZW50IH0gZnJvbSBcIi4vcXVhbGlmeS9xdWFsaWZ5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJzc3RyZWV0Q29tcG9uZW50IH0gZnJvbSBcIi4vb3JkZXJzc3RlZXQvb3JkZXJzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTZWxsQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VsbC9zZWxsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlci9vcmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyc2J1aWxkaW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vb3JkZXJidWlsZGluZy9vcmRlcmJ1aWxkaW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FuY2VsZWRfb3JkZXJzIH0gZnJvbSBcIi4vY2FuY2VsZWRfb3JkZXJzL2NhbmNlbGVkX29yZGVycy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBPcmRlcnNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDYW5jZWxlZF9vcmRlcnMsXG4gICAgICAgIE9yZGVyQ29tcG9uZW50LFxuICAgICAgICBRdWFsaWZ5Q29tcG9uZW50LFxuICAgICAgICBPcmRlcnNzdHJlZXRDb21wb25lbnQsXG4gICAgICAgIE9yZGVyc2J1aWxkaW5nQ29tcG9uZW50LFxuICAgICAgICBTZWxsQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyc01vZHVsZSB7IH1cbiJdfQ==