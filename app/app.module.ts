import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { AuthService } from "./services/auth.service";
import { DropDownModule } from "nativescript-drop-down/angular";
import { AuthGuard } from "./guards/auth.guard";
import { NativeScriptFormsModule } from "nativescript-angular";
import { AuthService2 } from "./services/conex/conex.service";
import { UserLocationService}from "./services/conex/userlocation.service";
import { Placestreet } from "./services/conex/locationstreet.service";
import { ProductExchangeService } from "./services/conex/exchange.service";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        DropDownModule,
        NativeScriptFormsModule,
       
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ProductExchangeService,
        Placestreet,
        UserLocationService,
        AuthService2,
        AuthService,
        AuthGuard,
        { 
            provide: NgModuleFactoryLoader, 
            useClass: NSModuleFactoryLoader 
        }
   
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
