"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var map_routing_module_1 = require("./map-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var map_component_1 = require("./map/map.component");
var imagemap_component_1 = require("./imagemap/imagemap.component");
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                map_routing_module_1.MapRoutingModule
            ],
            declarations: [
                map_component_1.MapComponent,
                imagemap_component_1.ImagemapComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], MapModule);
    return MapModule;
}());
exports.MapModule = MapModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDJEQUF3RDtBQUV4RCw0REFBMEQ7QUFDMUQscURBQW1EO0FBQ25ELG9FQUFrRTtBQW1CbEU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWZyQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw0QkFBWTtnQkFDWixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osc0NBQWlCO2FBRXBCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbWFwLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFwL21hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlbWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2VtYXAvaW1hZ2VtYXAuY29tcG9uZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE1hcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNYXBDb21wb25lbnQsXG4gICAgICAgIEltYWdlbWFwQ29tcG9uZW50XG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFwTW9kdWxlIHsgfVxuIl19