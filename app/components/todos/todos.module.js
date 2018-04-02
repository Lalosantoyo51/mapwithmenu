"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var todos_routing_module_1 = require("./todos-routing.module");
var map_component_1 = require("./map/map.component");
var shared_module_1 = require("../../shared/shared.module");
var imagemap_component_1 = require("./imagemap/imagemap.component");
var exchangemerchandise_component_1 = require("./exchangemerchandise/exchangemerchandise.component");
var selecseller_component_1 = require("./selecseller/selecseller.component");
var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                todos_routing_module_1.TodosRoutingModule
            ],
            declarations: [
                map_component_1.MapComponent,
                imagemap_component_1.ImagemapComponent,
                exchangemerchandise_component_1.ExchangemerchandiseComponent,
                selecseller_component_1.SelecsellerComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TodosModule);
    return TodosModule;
}());
exports.TodosModule = TodosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kb3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSwrREFBNEQ7QUFDNUQscURBQWlEO0FBQ2pELDREQUEwRDtBQUMxRCxvRUFBa0U7QUFDbEUscUdBQW1HO0FBQ25HLDZFQUEyRTtBQWlCM0U7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWhCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1oseUNBQWtCO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHNDQUFpQjtnQkFDakIsNERBQTRCO2dCQUM1Qiw0Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFRvZG9zUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RvZG9zLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBNYXBDb21wb25lbnR9IGZyb20gXCIuL21hcC9tYXAuY29tcG9uZW50XCJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgSW1hZ2VtYXBDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZW1hcC9pbWFnZW1hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV4Y2hhbmdlbWVyY2hhbmRpc2VDb21wb25lbnQgfSBmcm9tIFwiLi9leGNoYW5nZW1lcmNoYW5kaXNlL2V4Y2hhbmdlbWVyY2hhbmRpc2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3NlbGxlckNvbXBvbmVudCB9IGZyb20gXCIuL3NlbGVjc2VsbGVyL3NlbGVjc2VsbGVyLmNvbXBvbmVudFwiO1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBUb2Rvc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNYXBDb21wb25lbnQsXG4gICAgICAgIEltYWdlbWFwQ29tcG9uZW50LFxuICAgICAgICBFeGNoYW5nZW1lcmNoYW5kaXNlQ29tcG9uZW50LFxuICAgICAgICBTZWxlY3NlbGxlckNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2Rvc01vZHVsZSB7IH1cbiJdfQ==