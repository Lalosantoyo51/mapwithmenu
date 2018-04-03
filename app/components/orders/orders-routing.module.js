"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var qualify_component_1 = require("./qualify/qualify.component");
var orders_component_1 = require("./orders/orders.component");
var sell_component_1 = require("./sell/sell.component");
var routes = [
    { path: "qualify", component: qualify_component_1.QualifyComponent },
    { path: "orders", component: orders_component_1.OrdersComponent },
    { path: "sell", component: sell_component_1.SellComponent },
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());
exports.OrdersRoutingModule = OrdersRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXJzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELHdEQUFzRDtBQUl0RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FJN0MsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUXVhbGlmeUNvbXBvbmVudCB9IGZyb20gXCIuL3F1YWxpZnkvcXVhbGlmeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL29yZGVycy9vcmRlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxsQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VsbC9zZWxsLmNvbXBvbmVudFwiO1xuXG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcInF1YWxpZnlcIiwgY29tcG9uZW50OiBRdWFsaWZ5Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm9yZGVyc1wiLCBjb21wb25lbnQ6IE9yZGVyc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWxsXCIsIGNvbXBvbmVudDogU2VsbENvbXBvbmVudCB9LFxuXG4gICAgXG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIl19