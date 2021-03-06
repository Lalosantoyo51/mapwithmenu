import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ChatComponent } from "./chat/chat.component";
import { ListchatComponent } from "./listchat/listchat.component";

const routes: Routes = [
    { path: "chat", component: ChatComponent },
    { path: "listchat", component: ListchatComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChatRoutingModule { }
