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
var angular_1 = require("nativescript-drop-down/angular");
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
                angular_1.DropDownModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxsZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNERBQTBEO0FBQzFELG9EQUFxRTtBQUNyRSw2REFBdUQ7QUFFdkQsZ0ZBQThFO0FBRTlFLHNGQUFtRjtBQUNuRixnRkFBOEU7QUFDOUUsbUVBQWdFO0FBQ2hFLHFEQUFtRDtBQUNuRCwwREFBZ0U7QUFJaEUsc0NBQWUsQ0FBRyxvQkFBb0IsRUFBRyxjQUFPLE9BQUEsT0FBTyxDQUFHLGtDQUFrQyxDQUFFLENBQUcsZ0JBQWdCLEVBQWpFLENBQWlFLENBQUUsQ0FBQTtBQXVCbkg7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFyQnpCLGVBQVEsQ0FBQztZQUVOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIsNEJBQVk7Z0JBQ1osK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLHdCQUFjO2FBR2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLGtEQUF1QjtnQkFDdkIsOENBQXFCO2dCQUNyQiw0QkFBWTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nOyBcbmltcG9ydCB7IFNlbGVjdHByb2R1Y3RzQ29tcG9uZW50fSBmcm9tIFwiLi9zZWxlY3Rwcm9kdWN0cy9zZWxlY3Rwcm9kdWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdHNlbGxlckNvbXBvbmVudCB9IGZyb20gXCIuL3NlbGVjdHNlbGxlci9zZWxlY3RzZWxsZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxsZXJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlbGxlcnMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEVhdENvbXBvbmVudCB9IGZyb20gXCIuL2VhdC9lYXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcblxuXG5cbnJlZ2lzdGVyRWxlbWVudCAoIFwiIFByZXZpb3VzTmV4dFZpZXcgXCIgLCAoICkgPT4gcmVxdWlyZSAoIFwiIG5hdGl2ZXNjcmlwdC1pcWtleWJvYXJkbWFuYWdlciBcIiApIC4gUHJldmlvdXNOZXh0VmlldyApICBcblxuQE5nTW9kdWxlKHtcbiAgIFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTZWxsZXJzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgU2VsZWN0cHJvZHVjdHNDb21wb25lbnQsXG4gICAgICAgU2VsZWN0c2VsbGVyQ29tcG9uZW50LFxuICAgICAgIEVhdENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxsZXJzTW9kdWxlIHsgfSJdfQ==