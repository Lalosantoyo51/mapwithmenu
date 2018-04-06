"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_1 = require("tns-core-modules/ui/image");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var IMAGE_URL = "http://cursos.uaa.mx/images/mapa1.jpg";
var ImagemapComponent = /** @class */ (function () {
    function ImagemapComponent() {
    }
    ImagemapComponent.prototype.onStackLoaded = function (args) {
        var stack = args.object;
        this.newImage = new image_1.Image();
        this.newImage.src = IMAGE_URL;
        this.newImage.stretch = "none";
        this.newImage.style.margin = "15";
        stack.addChild(this.newImage);
    };
    ImagemapComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ImagemapComponent.prototype, "drawerComponent", void 0);
    ImagemapComponent = __decorate([
        core_1.Component({
            selector: "imagemap",
            moduleId: module.id,
            templateUrl: "./imagemap.component.html",
            styleUrls: ['./imagemap.css'],
        })
    ], ImagemapComponent);
    return ImagemapComponent;
}());
exports.ImagemapComponent = ImagemapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2VtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELG1EQUFrRDtBQUlsRCxrRUFBZ0Y7QUFFaEYsSUFBTSxTQUFTLEdBQUcsdUNBQXVDLENBQUM7QUFVMUQ7SUFBQTtJQWdCQSxDQUFDO0lBWEQseUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBZHdCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7OERBQUM7SUFEcEQsaUJBQWlCO1FBVDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUloQyxDQUFDO09BQ1csaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUJhc2U2NCwgZnJvbUZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5jb25zdCBJTUFHRV9VUkwgPSBcImh0dHA6Ly9jdXJzb3MudWFhLm14L2ltYWdlcy9tYXBhMS5qcGdcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImltYWdlbWFwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ltYWdlbWFwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2VtYXAuY3NzJ10sXG4gICBcbiAgIFxuICBcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VtYXBDb21wb25lbnQgIHtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHB1YmxpYyBuZXdJbWFnZTogSW1hZ2U7XG5cbm9uU3RhY2tMb2FkZWQoYXJncykge1xuICAgIGxldCBzdGFjayA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLm5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5uZXdJbWFnZS5zcmMgPSBJTUFHRV9VUkw7XG4gICAgdGhpcy5uZXdJbWFnZS5zdHJldGNoID0gXCJub25lXCI7XG4gICAgdGhpcy5uZXdJbWFnZS5zdHlsZS5tYXJnaW4gPSBcIjE1XCI7XG4gICAgc3RhY2suYWRkQ2hpbGQodGhpcy5uZXdJbWFnZSk7XG59XG5vbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn1cbn1cbiJdfQ==