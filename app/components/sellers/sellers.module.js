"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var selectproducts_component_1 = require("./selectproducts/selectproducts.component");
var selectseller_component_1 = require("./selectseller/selectseller.component");
var sellers_routing_module_1 = require("./sellers-routing.module");
var eat_component_1 = require("./eat/eat.component");
nativescript_angular_1.registerElement(" PreviousNextView ", function () { return require(" nativescript-iqkeyboardmanager ").PreviousNextView; });
var SellersModule = /** @class */ (function () {
    function SellersModule() {
    }
    SellersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                sellers_routing_module_1.SellersRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
            ],
            declarations: [
                selectproducts_component_1.SelectproductsComponent,
                selectseller_component_1.SelectsellerComponent,
                eat_component_1.EatComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SellersModule);
    return SellersModule;
}());
exports.SellersModule = SellersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxsZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNERBQTBEO0FBQzFELG9EQUFxRTtBQUNyRSw2REFBdUQ7QUFFdkQsZ0ZBQThFO0FBRTlFLHNGQUFtRjtBQUNuRixnRkFBOEU7QUFDOUUsbUVBQWdFO0FBQ2hFLHFEQUFtRDtBQUluRCxzQ0FBZSxDQUFHLG9CQUFvQixFQUFHLGNBQU8sT0FBQSxPQUFPLENBQUcsa0NBQWtDLENBQUUsQ0FBRyxnQkFBZ0IsRUFBakUsQ0FBaUUsQ0FBRSxDQUFBO0FBc0JuSDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXBCekIsZUFBUSxDQUFDO1lBRU4sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQiw0QkFBWTtnQkFDWiwrQkFBdUI7Z0JBQ3ZCLHdDQUFrQjthQUdyQjtZQUNELFlBQVksRUFBRTtnQkFDWCxrREFBdUI7Z0JBQ3ZCLDhDQUFxQjtnQkFDckIsNEJBQVk7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuLi8uLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJzsgXG5pbXBvcnQgeyBTZWxlY3Rwcm9kdWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vc2VsZWN0cHJvZHVjdHMvc2VsZWN0cHJvZHVjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RzZWxsZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zZWxlY3RzZWxsZXIvc2VsZWN0c2VsbGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsbGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZWxsZXJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBFYXRDb21wb25lbnQgfSBmcm9tIFwiLi9lYXQvZWF0LmNvbXBvbmVudFwiO1xuXG5cblxucmVnaXN0ZXJFbGVtZW50ICggXCIgUHJldmlvdXNOZXh0VmlldyBcIiAsICggKSA9PiByZXF1aXJlICggXCIgbmF0aXZlc2NyaXB0LWlxa2V5Ym9hcmRtYW5hZ2VyIFwiICkgLiBQcmV2aW91c05leHRWaWV3ICkgIFxuXG5ATmdNb2R1bGUoe1xuICAgXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNlbGxlcnNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFxuICAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgIFNlbGVjdHByb2R1Y3RzQ29tcG9uZW50LFxuICAgICAgIFNlbGVjdHNlbGxlckNvbXBvbmVudCxcbiAgICAgICBFYXRDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsbGVyc01vZHVsZSB7IH0iXX0=