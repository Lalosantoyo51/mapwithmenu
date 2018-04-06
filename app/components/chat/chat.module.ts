import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../../shared/shared.module";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat/chat.component";
import { ListchatComponent } from "./listchat/listchat.component";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChatRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],
    declarations: [
        ChatComponent,
        ListchatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChatModule { }
