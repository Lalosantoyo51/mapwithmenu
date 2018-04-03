"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var selectproducts_component_1 = require("./selectproducts/selectproducts.component");
var selectseller_component_1 = require("./selectseller/selectseller.component");
var eat_component_1 = require("./eat/eat.component");
var routes = [
    { path: "selectproducts", component: selectproducts_component_1.SelectproductsComponent },
    { path: "selectseller", component: selectseller_component_1.SelectsellerComponent },
    { path: "eat", component: eat_component_1.EatComponent },
];
var SellersRoutingModule = /** @class */ (function () {
    function SellersRoutingModule() {
    }
    SellersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SellersRoutingModule);
    return SellersRoutingModule;
}());
exports.SellersRoutingModule = SellersRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVycy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGxlcnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBQ3ZFLHNGQUFvRjtBQUNwRixnRkFBOEU7QUFDOUUscURBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtJQUM5RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFDLDhDQUFxQixFQUFDO0lBQ3hELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsNEJBQVksRUFBQztDQUV6QyxDQUFDO0FBTUY7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQUpoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWxlY3Rwcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3NlbGVjdHByb2R1Y3RzL3NlbGVjdHByb2R1Y3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0c2VsbGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VsZWN0c2VsbGVyL3NlbGVjdHNlbGxlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVhdENvbXBvbmVudCB9IGZyb20gXCIuL2VhdC9lYXQuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJzZWxlY3Rwcm9kdWN0c1wiLCBjb21wb25lbnQ6IFNlbGVjdHByb2R1Y3RzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInNlbGVjdHNlbGxlclwiLCBjb21wb25lbnQ6U2VsZWN0c2VsbGVyQ29tcG9uZW50fSwgIFxuICAgIHsgcGF0aDogXCJlYXRcIiwgY29tcG9uZW50OkVhdENvbXBvbmVudH0sICBcblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGxlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIl19