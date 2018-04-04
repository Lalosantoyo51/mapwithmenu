import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageSource, fromBase64, fromFile } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

const IMAGE_URL = "http://cursos.uaa.mx/images/mapa1.jpg";
@Component({
    selector: "imagemap",
    moduleId: module.id,
    templateUrl: "./imagemap.component.html",
    styleUrls: ['./imagemap.css'],
   
   
  
})
export class ImagemapComponent  {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    public newImage: Image;

onStackLoaded(args) {
    let stack = <StackLayout>args.object;
    this.newImage = new Image();
    this.newImage.src = IMAGE_URL;
    this.newImage.stretch = "none";
    this.newImage.style.margin = "15";
    stack.addChild(this.newImage);
}
onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
}
}
