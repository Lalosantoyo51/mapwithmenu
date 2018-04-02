"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../../shared/shared.module");
var auth_routing_module_1 = require("../auth/auth-routing.module");
var login_component_1 = require("./login/login.component");
var forms_1 = require("nativescript-angular/forms");
var recover_component_1 = require("./recover/recover.component");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var changepassword_component_1 = require("./changepassword/changepassword.component");
nativescript_angular_1.registerElement(" PreviousNextView ", function () { return require(" nativescript-iqkeyboardmanager ").PreviousNextView; });
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                auth_routing_module_1.AuthRoutingModule,
                shared_module_1.SharedModule,
                forms_1.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
            ],
            declarations: [
                login_component_1.LoginComponent,
                recover_component_1.RecoverComponent,
                changepassword_component_1.ChangepasswordComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNERBQTBEO0FBQzFELG1FQUFnRTtBQUNoRSwyREFBeUQ7QUFDekQsb0RBQXFFO0FBQ3JFLGlFQUErRDtBQUMvRCw2REFBdUQ7QUFFdkQsZ0ZBQThFO0FBQzlFLHNGQUFvRjtBQUtwRixzQ0FBZSxDQUFHLG9CQUFvQixFQUFHLGNBQU8sT0FBQSxPQUFPLENBQUcsa0NBQWtDLENBQUUsQ0FBRyxnQkFBZ0IsRUFBakUsQ0FBaUUsQ0FBRSxDQUFBO0FBc0JuSDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBcEJ0QixlQUFRLENBQUM7WUFFTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2FBR3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLG9DQUFnQjtnQkFDaEIsa0RBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4uL2F1dGgvYXV0aC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWNvdmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVjb3Zlci9yZWNvdmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IENoYW5nZXBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJzsgXG5cblxuXG5yZWdpc3RlckVsZW1lbnQgKCBcIiBQcmV2aW91c05leHRWaWV3IFwiICwgKCApID0+IHJlcXVpcmUgKCBcIiBuYXRpdmVzY3JpcHQtaXFrZXlib2FyZG1hbmFnZXIgXCIgKSAuIFByZXZpb3VzTmV4dFZpZXcgKSAgXG5cbkBOZ01vZHVsZSh7XG4gICBcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQXV0aFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWNvdmVyQ29tcG9uZW50LFxuICAgICAgICBDaGFuZ2VwYXNzd29yZENvbXBvbmVudCxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7IH0iXX0=