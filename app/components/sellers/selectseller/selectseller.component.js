"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var SelectsellerComponent = /** @class */ (function () {
    function SelectsellerComponent() {
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
    SelectsellerComponent = __decorate([
        core_1.Component({
            selector: "selectseller",
            moduleId: module.id,
            templateUrl: "./selectseller.component.html",
            styleUrls: ['./selectseller.css'],
        })
    ], SelectsellerComponent);
    return SelectsellerComponent;
}());
exports.SelectsellerComponent = SelectsellerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0c2VsbGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdHNlbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBd0U7QUFPeEUsaUVBQWtGO0FBV2xGO0lBVkE7UUFXVyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUc3QixhQUFRLEdBQWdCLFNBQVMsQ0FBQztJQThCN0MsQ0FBQztJQTVCVSx3Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFTLEVBQVUsQ0FBQztRQUNyQyxHQUFHLENBQUMsQ0FBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNaLEtBQUssRUFBSSxNQUFJLElBQU07Z0JBQ25CLE9BQU8sRUFBRSxVQUFRLElBQU07YUFDMUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFTSx3Q0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXlDLElBQUksQ0FBQyxRQUFRLFlBQU8sSUFBSSxDQUFDLFFBQVEseUJBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN4SCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx1Q0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSw0Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQztJQS9CUSxxQkFBcUI7UUFWakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBS3BDLENBQUM7T0FDVyxxQkFBcUIsQ0FrQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzZWxlY3RzZWxsZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0c2VsbGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0c2VsbGVyLmNzcyddLFxuXG4gICBcbiAgIFxuICBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0c2VsbGVyQ29tcG9uZW50ICB7XG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgaXRlbXM6IFZhbHVlTGlzdDxzdHJpbmc+O1xuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKCBsZXQgbG9vcCA9IDA7IGxvb3AgPCAyMDA7IGxvb3ArKyApIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICAgYEkke2xvb3B9YCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBgSXRlbSAke2xvb3B9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLml0ZW1zLmdldFZhbHVlKFxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25vcGVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VTdHlsZXMoKSB7XG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSBcImNoYW5nZWQtc3R5bGVzXCI7XG4gICAgfVxuICAgXG4gICBcbn1cbiJdfQ==