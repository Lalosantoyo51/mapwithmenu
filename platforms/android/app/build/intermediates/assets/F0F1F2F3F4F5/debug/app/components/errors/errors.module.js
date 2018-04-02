"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var errors_routing_module_1 = require("./errors-routing.module");
var offline_component_1 = require("./offline/offline.component");
var gps_component_1 = require("./gps/gps.component");
var location_component_1 = require("./location/location.component");
var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                errors_routing_module_1.ErrorsRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                offline_component_1.OfflineComponent,
                gps_component_1.GpsComponent,
                location_component_1.LocationComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());
exports.ErrorsModule = ErrorsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDREQUEwRDtBQUMxRCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBQzlELHFEQUFtRDtBQUNuRCxvRUFBK0Q7QUFtQi9EO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBaEJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwyQ0FBbUI7Z0JBQ25CLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWixzQ0FBaUI7YUFFcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEVycm9yc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9lcnJvcnMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE9mZmxpbmVDb21wb25lbnR9IGZyb20gXCIuL29mZmxpbmUvb2ZmbGluZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdwc0NvbXBvbmVudCB9IGZyb20gXCIuL2dwcy9ncHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnRcIlxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEVycm9yc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE9mZmxpbmVDb21wb25lbnQsXG4gICAgICAgIEdwc0NvbXBvbmVudCxcbiAgICAgICAgTG9jYXRpb25Db21wb25lbnRcbiAgICBcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JzTW9kdWxlIHsgfSJdfQ==