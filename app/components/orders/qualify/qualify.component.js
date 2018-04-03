"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_angular_1 = require("nativescript-angular");
var timer_1 = require("timer");
var page;
nativescript_angular_1.registerElement('StarRating', function () { return require('nativescript-star-ratings').StarRating; });
var QualifyComponent = /** @class */ (function () {
    function QualifyComponent() {
        this.editState = true;
        this.tvtext = "";
        this.buttonText = "Disable editting of TextView";
        this.status = "not scrolling";
    }
    QualifyComponent.prototype.ngOnInit = function () {
    };
    QualifyComponent.prototype.disableTextView = function () {
        if (this.editState) {
            this.editState = false;
            this.buttonText = "Enable editting of TextView";
        }
        else {
            this.editState = true;
            this.buttonText = "Disable editting of TextView";
        }
    };
    QualifyComponent.prototype.submit = function (args) {
        var textview = args.object;
    };
    QualifyComponent.prototype.onScroll = function (args) {
        var _this = this;
        this.status = "scrolling";
        timer_1.setTimeout(function () {
            _this.status = "not scrolling";
        }, 300);
        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    };
    QualifyComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], QualifyComponent.prototype, "drawerComponent", void 0);
    QualifyComponent = __decorate([
        core_1.Component({
            selector: "qualify",
            moduleId: module.id,
            templateUrl: "./qualify.component.html",
            styleUrls: ['./qualify.css'],
        })
    ], QualifyComponent);
    return QualifyComponent;
}());
exports.QualifyComponent = QualifyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWFsaWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUU3RCxrRUFBZ0Y7QUFPaEYsNkRBQXVEO0FBQ3ZELCtCQUFtQztBQUVuQyxJQUFJLElBQUksQ0FBQztBQUNULHNDQUFlLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxVQUFVLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQVFyRjtJQVBBO1FBWVcsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osZUFBVSxHQUFHLDhCQUE4QixDQUFDO1FBZ0I1QyxXQUFNLEdBQUcsZUFBZSxDQUFDO0lBZXBDLENBQUM7SUFuQ0csbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFLRCwwQ0FBZSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyw2QkFBNkIsQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLDhCQUE4QixDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLElBQUk7UUFDUCxJQUFJLFFBQVEsR0FBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVuRCxDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFxQjtRQUFyQyxpQkFTQztRQVJHLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBRTFCLGtCQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBbkNvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzZEQUFDO0lBRHBELGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBRS9CLENBQUM7T0FDVyxnQkFBZ0IsQ0FzQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IHByb21wdCwgUHJvbXB0UmVzdWx0LCBpbnB1dFR5cGUgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RlYnVnZ2VyL2Nzcy1hZ2VudFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xubGV0IHBhZ2U7XG5yZWdpc3RlckVsZW1lbnQoJ1N0YXJSYXRpbmcnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtc3Rhci1yYXRpbmdzJykuU3RhclJhdGluZyk7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJxdWFsaWZ5XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3F1YWxpZnkuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9xdWFsaWZ5LmNzcyddLFxuICAgIFxufSlcbmV4cG9ydCBjbGFzcyBRdWFsaWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbiAgICBwdWJsaWMgZWRpdFN0YXRlID0gdHJ1ZTtcbiAgICBwdWJsaWMgdHZ0ZXh0ID0gXCJcIjtcbiAgICBwdWJsaWMgYnV0dG9uVGV4dCA9IFwiRGlzYWJsZSBlZGl0dGluZyBvZiBUZXh0Vmlld1wiO1xuXG4gICAgZGlzYWJsZVRleHRWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkVuYWJsZSBlZGl0dGluZyBvZiBUZXh0Vmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lZGl0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJEaXNhYmxlIGVkaXR0aW5nIG9mIFRleHRWaWV3XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXQoYXJncykge1xuICAgICAgICBsZXQgdGV4dHZpZXc6IFRleHRWaWV3ID0gPFRleHRWaWV3PmFyZ3Mub2JqZWN0O1xuICAgIFxuICAgIH1cbiAgICBwdWJsaWMgc3RhdHVzID0gXCJub3Qgc2Nyb2xsaW5nXCI7XG4gICAgcHVibGljIG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFwic2Nyb2xsaW5nXCI7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwibm90IHNjcm9sbGluZ1wiO1xuICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsWDogXCIgKyBhcmdzLnNjcm9sbFgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9sbFk6IFwiICsgYXJncy5zY3JvbGxZKTtcbiAgICB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxufSJdfQ==