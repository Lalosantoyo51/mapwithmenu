import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RecoverComponent } from "./recover/recover.component";
import { registerElement } from "nativescript-angular";
import { AppRoutingModule } from "../../app-routing.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import * as application from 'tns-core-modules/application'; 



registerElement ( " PreviousNextView " , ( ) => require ( " nativescript-iqkeyboardmanager " ) . PreviousNextView )  

@NgModule({
   
    imports: [
        NativeScriptCommonModule,
        AuthRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        
        
    ],
    declarations: [
        LoginComponent,
        RecoverComponent,
        ChangepasswordComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }