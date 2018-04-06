"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var SelectsellerComponent = /** @class */ (function () {
    function SelectsellerComponent(router) {
        this.router = router;
        this.selectedIndex = null;
        this.cssClass = "default";
    }
    SelectsellerComponent.prototype.ngOnInit = function () {
        this.items = new nativescript_drop_down_1.ValueList();
        for (var loop = 0; loop < 200; loop++) {
            this.items.push({
                value: "I" + loop,
                display: "Item " + loop,
            });
        }
    };
    SelectsellerComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex + ". New value is \"" + this.items.getValue(args.newIndex) + "\"");
    };
    SelectsellerComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    SelectsellerComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    SelectsellerComponent.prototype.changeStyles = function () {
        this.cssClass = "changed-styles";
    };
    SelectsellerComponent.prototype.previous = function () {
        this.router.navigate(['/sellers/selectproducts']);
    };
    SelectsellerComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SelectsellerComponent.prototype, "drawerComponent", void 0);
    SelectsellerComponent = __decorate([
        core_1.Component({
            selector: "selectseller",
            moduleId: module.id,
            templateUrl: "./selectseller.component.html",
            styleUrls: ['./selectseller.css'],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SelectsellerComponent);
    return SelectsellerComponent;
}());
exports.SelectsellerComponent = SelectsellerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0c2VsbGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdHNlbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBTXhFLHNEQUErRDtBQUMvRCxpRUFBa0Y7QUFXbEY7SUFnQ0ksK0JBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBL0J0QyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUc3QixhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQThCekMsQ0FBQztJQTVCTSx3Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFTLEVBQVUsQ0FBQztRQUNyQyxHQUFHLENBQUMsQ0FBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNaLEtBQUssRUFBSSxNQUFJLElBQU07Z0JBQ25CLE9BQU8sRUFBRSxVQUFRLElBQU07YUFDMUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFTSx3Q0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXlDLElBQUksQ0FBQyxRQUFRLFlBQU8sSUFBSSxDQUFDLFFBQVEseUJBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN4SCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx1Q0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSw0Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQztJQUlELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUhvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2tFQUFDO0lBdkNwRCxxQkFBcUI7UUFWakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBS3BDLENBQUM7eUNBaUMrQix5QkFBZ0I7T0FoQ3BDLHFCQUFxQixDQTZDakM7SUFBRCw0QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbi8vIDw8IGltcG9ydC1nZW9sb2NhdGlvbi1wbHVnaW5cbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVmFsdWVMaXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNlbGVjdHNlbGxlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWxlY3RzZWxsZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9zZWxlY3RzZWxsZXIuY3NzJ10sXG5cbiAgIFxuICAgXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RzZWxsZXJDb21wb25lbnQgIHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBpdGVtczogVmFsdWVMaXN0PHN0cmluZz47XG4gICAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgICAgICA9IFwiZGVmYXVsdFwiO1xuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XG4gICAgICAgIGZvciAoIGxldCBsb29wID0gMDsgbG9vcCA8IDIwMDsgbG9vcCsrICkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogICBgSSR7bG9vcH1gLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGBJdGVtICR7bG9vcH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuaXRlbXMuZ2V0VmFsdWUoXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICBcbiAgICB9XG4gICAgcHJldmlvdXMoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VsbGVycy9zZWxlY3Rwcm9kdWN0cyddKTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgXG4gICBcbn1cbiJdfQ==