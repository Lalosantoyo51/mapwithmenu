"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var exchangemerchandise_component_1 = require("./exchangemerchandise/exchangemerchandise.component");
var imagemap_component_1 = require("./imagemap/imagemap.component");
var map_component_1 = require("./map/map.component");
var selecseller_component_1 = require("./selecseller/selecseller.component");
var todos_routing_module_1 = require("./todos-routing.module");
nativescript_angular_1.registerElement(" PreviousNextView ", function () { return require(" nativescript-iqkeyboardmanager ").PreviousNextView; });
var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                todos_routing_module_1.TodosRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
            ],
            declarations: [
                exchangemerchandise_component_1.ExchangemerchandiseComponent,
                imagemap_component_1.ImagemapComponent,
                map_component_1.MapComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kb3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw0REFBMEQ7QUFDMUQsb0RBQXFFO0FBQ3JFLDZEQUF1RDtBQUV2RCxnRkFBOEU7QUFFOUUscUdBQW1HO0FBQ25HLG9FQUFrRTtBQUNsRSxxREFBbUQ7QUFDbkQsNkVBQTJFO0FBQzNFLCtEQUE0RDtBQUk1RCxzQ0FBZSxDQUFHLG9CQUFvQixFQUFHLGNBQU8sT0FBQSxPQUFPLENBQUcsa0NBQWtDLENBQUUsQ0FBRyxnQkFBZ0IsRUFBakUsQ0FBaUUsQ0FBRSxDQUFBO0FBdUJuSDtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBckJ2QixlQUFRLENBQUM7WUFFTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLDRCQUFZO2dCQUNaLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2FBR3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLDREQUE0QjtnQkFDNUIsc0NBQWlCO2dCQUNqQiw0QkFBWTtnQkFDWiw0Q0FBb0I7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuLi8uLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJzsgXG5pbXBvcnQgeyBFeGNoYW5nZW1lcmNoYW5kaXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vZXhjaGFuZ2VtZXJjaGFuZGlzZS9leGNoYW5nZW1lcmNoYW5kaXNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VtYXBDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZW1hcC9pbWFnZW1hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL21hcC9tYXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3NlbGxlckNvbXBvbmVudCB9IGZyb20gXCIuL3NlbGVjc2VsbGVyL3NlbGVjc2VsbGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9kb3NSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdG9kb3Mtcm91dGluZy5tb2R1bGVcIjtcblxuXG5cbnJlZ2lzdGVyRWxlbWVudCAoIFwiIFByZXZpb3VzTmV4dFZpZXcgXCIgLCAoICkgPT4gcmVxdWlyZSAoIFwiIG5hdGl2ZXNjcmlwdC1pcWtleWJvYXJkbWFuYWdlciBcIiApIC4gUHJldmlvdXNOZXh0VmlldyApICBcblxuQE5nTW9kdWxlKHtcbiAgIFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBUb2Rvc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgRXhjaGFuZ2VtZXJjaGFuZGlzZUNvbXBvbmVudCxcbiAgICAgICBJbWFnZW1hcENvbXBvbmVudCxcbiAgICAgICBNYXBDb21wb25lbnQsXG4gICAgICAgU2VsZWNzZWxsZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9kb3NNb2R1bGUgeyB9Il19