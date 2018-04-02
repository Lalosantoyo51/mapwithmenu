"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var utils = require("utils/utils");
var utilityModule = require("utils//utils");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = {};
}
exports.pageLoaded = pageLoaded;
exports.launch = function () {
    utilityModule.openUrl("http://familiaburrera.tk");
};
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.oneway = "One way bound label";
        this.twoway = "L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat.";
        this.counter = 0;
    }
    AboutComponent.prototype.opens = function () {
        utilityModule.openUrl("http://familiaburrera.tk");
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    AboutComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(AboutComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    AboutComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    AboutComponent.prototype.changeLabelText = function () {
        this.twoway += " L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat. ";
        this.counter += 1;
    };
    AboutComponent.prototype.onTextChanged = function (args) {
        var label = args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    };
    AboutComponent.prototype.open = function () {
        utils.openUrl("https://stackoverflow.com/questions/45549814/how-to-open-playstore-app-url-on-button-click-in-angular2-nativescript");
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AboutComponent.prototype, "drawerComponent", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about",
            moduleId: module.id,
            templateUrl: "./about.component.html",
            styleUrls: ['./about.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFHaEYsbUNBQXFDO0FBQ3JDLElBQUksYUFBYSxHQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxvQkFBb0IsSUFBSTtJQUVwQixJQUFJLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUMsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFDRCxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNoQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsYUFBYSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQTtBQVNEO0lBb0NJO1FBSk8sV0FBTSxHQUFHLHFCQUFxQixDQUFDO1FBQy9CLFdBQU0sR0FBRyxzVEFBc1QsQ0FBQztRQUluVSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBckNELDhCQUFLLEdBQUw7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFHdEQsQ0FBQztJQVNEOztrRUFFOEQ7SUFDOUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFJLGdEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCwwQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBU0Qsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksd1RBQXdULENBQUM7UUFDeFUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFlO1FBQ3pCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDO0lBQ3pJLENBQUM7SUF6Q29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MkRBQUM7SUFWcEQsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FFdkMsQ0FBQzs7T0FDVyxjQUFjLENBb0QxQjtJQUFELHFCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxudmFyIHV0aWxpdHlNb2R1bGUgPXJlcXVpcmUoXCJ1dGlscy8vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncyl7XHJcblxyXG4gICAgdmFyIHBhZ2UgPWFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dD17fTtcclxufVxyXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xyXG5leHBvcnRzLmxhdW5jaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwOi8vZmFtaWxpYWJ1cnJlcmEudGtcIik7XHJcbn0gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFib3V0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hYm91dC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgb3BlbnMoKXtcclxuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwOi8vZmFtaWxpYWJ1cnJlcmEudGtcIik7XHJcblxyXG5cclxuICAgIH1cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxyXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcclxuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25ld2F5ID0gXCJPbmUgd2F5IGJvdW5kIGxhYmVsXCI7XHJcbiAgICBwdWJsaWMgdHdvd2F5ID0gXCJMIG8gciBlIG0gICBpIHAgcyB1IG0gICBkIG8gbCBvIHIgICBzIGkgdCAgIGEgbSBlIHQgLCBjb25zZWN0ZXR1ciAgIGFkaXBpc2NpbmcgICBlbGl0LCAgIHNlZCAgIGRvIGVpdXNtb2QgIHRlbXBvciAgaW5jaWRpZHVudCAgdXQgIGxhYm9yZSBldCAgZG9sb3JlICBtYWduYSAgYWxpcXVhLiAgVXQgIGVuaW0gIGFkIG0gaSBuIGkgbSAgIHYgZSBuIGkgYSBtICwgICBxIHUgaSBzICAgbiBvIHMgdCByIHUgZCBleGVyY2l0YXRpb24gICB1bGxhbWNvICAgbGFib3JpcyAgIG5pc2kgICB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiO1xyXG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxhYmVsVGV4dCgpIHtcclxuICAgICAgICB0aGlzLnR3b3dheSArPSBcIiBMIG8gciBlIG0gICBpIHAgcyB1IG0gICBkIG8gbCBvIHIgICBzIGkgdCAgIGEgbSBlIHQgLCBjb25zZWN0ZXR1ciAgIGFkaXBpc2NpbmcgICBlbGl0LCAgIHNlZCAgIGRvIGVpdXNtb2QgIHRlbXBvciAgaW5jaWRpZHVudCAgdXQgIGxhYm9yZSBldCAgZG9sb3JlICBtYWduYSAgYWxpcXVhLiAgVXQgIGVuaW0gIGFkIG0gaSBuIGkgbSAgIHYgZSBuIGkgYSBtICwgICBxIHUgaSBzICAgbiBvIHMgdCByIHUgZCBleGVyY2l0YXRpb24gICB1bGxhbWNvICAgbGFib3JpcyAgIG5pc2kgICB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcIjtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvblRleHRDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBsYWJlbCA9IDxMYWJlbD5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVGV4dENoYW5nZWQgZm9yIFwiICsgdGhpcy5jb3VudGVyICsgXCIgdGltZXMgZm9yIGVsZW1lbnQgXCIgKyBsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBvcGVuKCl7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1NTQ5ODE0L2hvdy10by1vcGVuLXBsYXlzdG9yZS1hcHAtdXJsLW9uLWJ1dHRvbi1jbGljay1pbi1hbmd1bGFyMi1uYXRpdmVzY3JpcHRcIik7XHJcbiAgICB9XHJcbn1cclxuIl19