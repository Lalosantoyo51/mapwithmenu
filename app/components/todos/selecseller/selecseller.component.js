"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var SelecsellerComponent = /** @class */ (function () {
    function SelecsellerComponent() {
        this.selectedIndex = null;
        this.hint = "My Hint";
        this.cssClass = "default";
    }
    SelecsellerComponent.prototype.ngOnInit = function () {
        this.items = new nativescript_drop_down_1.ValueList();
        for (var loop = 0; loop < 200; loop++) {
            this.items.push({
                value: "I" + loop,
                display: "Item " + loop,
            });
        }
    };
    SelecsellerComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex + ". New value is \"" + this.items.getValue(args.newIndex) + "\"");
    };
    SelecsellerComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    SelecsellerComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    SelecsellerComponent.prototype.changeStyles = function () {
        this.cssClass = "changed-styles";
    };
    SelecsellerComponent = __decorate([
        core_1.Component({
            selector: "selecseller",
            moduleId: module.id,
            templateUrl: "./selecseller.component.html",
            styleUrls: ['./sellecseller.css'],
        })
    ], SelecsellerComponent);
    return SelecsellerComponent;
}());
exports.SelecsellerComponent = SelecsellerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWNzZWxsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWNzZWxsZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQXdFO0FBT3hFLGlFQUFrRjtBQVdsRjtJQVZBO1FBV1csa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFbEMsYUFBUSxHQUFnQixTQUFTLENBQUM7SUE4QjdDLENBQUM7SUE1QlUsdUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBUyxFQUFVLENBQUM7UUFDckMsR0FBRyxDQUFDLENBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUcsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixLQUFLLEVBQUksTUFBSSxJQUFNO2dCQUNuQixPQUFPLEVBQUUsVUFBUSxJQUFNO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQVEsR0FBZixVQUFnQixJQUFtQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLENBQUMsUUFBUSxZQUFPLElBQUksQ0FBQyxRQUFRLHlCQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDeEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0scUNBQU0sR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sc0NBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO0lBQ3JDLENBQUM7SUEvQlEsb0JBQW9CO1FBVmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUtwQyxDQUFDO09BQ1csb0JBQW9CLENBa0NoQztJQUFELDJCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgTG9jYXRpb24sIGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBkaXN0YW5jZSwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuLy8gPDwgaW1wb3J0LWdlb2xvY2F0aW9uLXBsdWdpblxuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2VsZWNzZWxsZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWNzZWxsZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9zZWxsZWNzZWxsZXIuY3NzJ10sXG5cbiAgIFxuICAgXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3NlbGxlckNvbXBvbmVudCAge1xuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSBudWxsO1xuICAgIHB1YmxpYyBoaW50ICAgICAgICAgICAgICAgICAgPSBcIk15IEhpbnRcIjtcbiAgICBwdWJsaWMgaXRlbXM6IFZhbHVlTGlzdDxzdHJpbmc+O1xuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKCBsZXQgbG9vcCA9IDA7IGxvb3AgPCAyMDA7IGxvb3ArKyApIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICAgYEkke2xvb3B9YCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBgSXRlbSAke2xvb3B9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLml0ZW1zLmdldFZhbHVlKFxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25vcGVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VTdHlsZXMoKSB7XG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSBcImNoYW5nZWQtc3R5bGVzXCI7XG4gICAgfVxuICAgXG4gICBcbn1cbiJdfQ==