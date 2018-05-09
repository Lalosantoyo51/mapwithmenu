import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { TextView } from "ui/text-view";
import { Value } from "tns-core-modules/debugger/css-agent";
import { Observable } from "tns-core-modules/data/observable/observable";
import { registerElement } from "nativescript-angular";
import { setTimeout } from "timer";
import { ScrollEventData } from "ui/scroll-view";
let page;

@Component({
    selector: "canceled_orders",
    moduleId: module.id,
    templateUrl: "./canceled_orders.component.html",
    styleUrls: ['./canceled_orders.component.css'],
    
})
export class Canceled_orders implements OnInit {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
   
    ngOnInit(): void {
    }
    public editState = true;
    public tvtext = "";
    public buttonText = "Disable editting of TextView";

    disableTextView() {
        if (this.editState) {
            this.editState = false;
            this.buttonText = "Enable editting of TextView";
        } else {
            this.editState = true;
            this.buttonText = "Disable editting of TextView";
        }
    }

    submit(args) {
        let textview: TextView = <TextView>args.object;
    
    }
    public status = "not scrolling";
    public onScroll(args: ScrollEventData) {
        this.status = "scrolling";

        setTimeout(() => {
            this.status = "not scrolling";
        }, 300);

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    Confirmar(){
        console.log(this.tvtext)
    }

}