"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var orders_routing_module_1 = require("./orders-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var qualify_component_1 = require("./qualify/qualify.component");
var orders_component_1 = require("./orders/orders.component");
var sell_component_1 = require("./sell/sell.component");
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
                qualify_component_1.QualifyComponent,
                orders_component_1.OrdersComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGlFQUE4RDtBQUU5RCw0REFBMEQ7QUFFMUQsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFtQnREO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBaEJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw0QkFBWTtnQkFDWiwyQ0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBRVYsb0NBQWdCO2dCQUNoQixrQ0FBZTtnQkFDZiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE9yZGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9vcmRlcnMtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7IFF1YWxpZnlDb21wb25lbnQgfSBmcm9tIFwiLi9xdWFsaWZ5L3F1YWxpZnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsbENvbXBvbmVudCB9IGZyb20gXCIuL3NlbGwvc2VsbC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE9yZGVyc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuXG4gICAgICAgIFF1YWxpZnlDb21wb25lbnQsXG4gICAgICAgIE9yZGVyc0NvbXBvbmVudCxcbiAgICAgICAgU2VsbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUgeyB9XG4iXX0=