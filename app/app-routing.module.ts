import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "orders/orders", pathMatch: "full" },
    { path: "orders", canActivate: [AuthGuard],loadChildren: "./components/orders/orders.module#OrdersModule" },    
    { path: "auth", loadChildren: "./components/auth/auth.module#AuthModule" },
    { path: "errors", loadChildren: "./components/errors/errors.module#ErrorsModule" },
    { path: "about",   loadChildren: "./components/about/about.module#AboutModule" },
    { path: "sellers", loadChildren: "./components/sellers/sellers.module#SellersModule" },
    { path: "profile", loadChildren: "./components/profile/profile.module#ProfileModule" },
    { path: "map", loadChildren: "./components/map/map.module#MapModule" },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule" },


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
