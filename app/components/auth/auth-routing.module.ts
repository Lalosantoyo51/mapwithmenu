import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { RecoverComponent } from "./recover/recover.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "recover", component: RecoverComponent },
    { path: "changepassword", component:ChangepasswordComponent},   
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }