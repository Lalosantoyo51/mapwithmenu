"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var todos_routing_module_1 = require("./todos-routing.module");
var map_component_1 = require("./map/map.component");
var shared_module_1 = require("../../shared/shared.module");
var imagemap_component_1 = require("./imagemap/imagemap.component");
var exchangemerchandise_component_1 = require("./exchangemerchandise/exchangemerchandise.component");
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
                exchangemerchandise_component_1.ExchangemerchandiseComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TodosModule);
    return TodosModule;
}());
exports.TodosModule = TodosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kb3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSwrREFBNEQ7QUFDNUQscURBQWlEO0FBQ2pELDREQUEwRDtBQUMxRCxvRUFBa0U7QUFDbEUscUdBQW1HO0FBZ0JuRztJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBZnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLHlDQUFrQjthQUNyQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLDREQUE0QjthQUMvQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVG9kb3NSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdG9kb3Mtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudH0gZnJvbSBcIi4vbWFwL21hcC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBJbWFnZW1hcENvbXBvbmVudCB9IGZyb20gXCIuL2ltYWdlbWFwL2ltYWdlbWFwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhjaGFuZ2VtZXJjaGFuZGlzZUNvbXBvbmVudCB9IGZyb20gXCIuL2V4Y2hhbmdlbWVyY2hhbmRpc2UvZXhjaGFuZ2VtZXJjaGFuZGlzZS5jb21wb25lbnRcIjtcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgVG9kb3NSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWFwQ29tcG9uZW50LFxuICAgICAgICBJbWFnZW1hcENvbXBvbmVudCxcbiAgICAgICAgRXhjaGFuZ2VtZXJjaGFuZGlzZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2Rvc01vZHVsZSB7IH1cbiJdfQ==