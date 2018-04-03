"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var orders_routing_module_1 = require("./orders-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var qualify_component_1 = require("./qualify/qualify.component");
var orders_component_1 = require("./orders/orders.component");
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
                orders_component_1.OrdersComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGlFQUE4RDtBQUU5RCw0REFBMEQ7QUFFMUQsaUVBQStEO0FBQy9ELDhEQUE0RDtBQWtCNUQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFmeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1osMkNBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUVWLG9DQUFnQjtnQkFDaEIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBPcmRlcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vb3JkZXJzLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBRdWFsaWZ5Q29tcG9uZW50IH0gZnJvbSBcIi4vcXVhbGlmeS9xdWFsaWZ5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vb3JkZXJzL29yZGVycy5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE9yZGVyc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuXG4gICAgICAgIFF1YWxpZnlDb21wb25lbnQsXG4gICAgICAgIE9yZGVyc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUgeyB9XG4iXX0=