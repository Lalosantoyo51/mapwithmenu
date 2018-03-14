import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NSModuleFactoryLoader } from "nativescript-angular/router";
import {AuthService} from "./post.services/conex.services";
import {ProfileService} from "./post.services/changepassword.services";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
       
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ProfileService,
        AuthService,
   
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
