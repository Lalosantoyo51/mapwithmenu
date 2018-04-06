"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("@angular/router");
var ListchatComponent = /** @class */ (function () {
    function ListchatComponent(router) {
        this.router = router;
        this.user = "lalo";
        this.user2 = "liz";
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ListchatComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(ListchatComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    ListchatComponent.prototype.gomessage = function () {
        var navigationextras = {
            queryParams: {
                "user": this.user,
            }
        };
        this.router.navigate(['/chat/chat'], navigationextras);
    };
    ListchatComponent.prototype.gomessage2 = function () {
        var navigationextras = {
            queryParams: {
                "user2": this.user2
            }
        };
        this.router.navigate(['/chat/chat'], navigationextras);
    };
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    ListchatComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ListchatComponent.prototype, "drawerComponent", void 0);
    ListchatComponent = __decorate([
        core_1.Component({
            selector: "listchat",
            moduleId: module.id,
            templateUrl: "./listchat.component.html",
            styleUrls: ['./listchat.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ListchatComponent);
    return ListchatComponent;
}());
exports.ListchatComponent = ListchatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGNoYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGNoYXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFFaEYsMENBQWdFO0FBUWhFO0lBaURJLDJCQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQWhENUIsU0FBSSxHQUFTLE1BQU0sQ0FBQztRQUNwQixVQUFLLEdBQVMsS0FBSyxDQUFDO0lBbUQzQixDQUFDO0lBMUNEOztrRUFFOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFJLG1EQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFDRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBbUI7WUFDbkMsV0FBVyxFQUFFO2dCQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTthQUVwQjtTQUNKLENBQUE7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELHNDQUFVLEdBQVY7UUFDSSxJQUFJLGdCQUFnQixHQUFtQjtZQUNuQyxXQUFXLEVBQUU7Z0JBRVQsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3RCO1NBQ0osQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztrRUFHOEQ7SUFDOUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQXpDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjs4REFBQztJQVBwRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBRTFDLENBQUM7eUNBa0QrQixlQUFNO09BakQxQixpQkFBaUIsQ0F3RDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyLE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0Y2hhdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Y2hhdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xpc3RjaGF0LmNvbXBvbmVudC5jc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIExpc3RjaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgdXNlcjpzdHJpbmc9IFwibGFsb1wiO1xuICAgIHB1YmxpYyB1c2VyMjpzdHJpbmc9IFwibGl6XCI7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIGdvbWVzc2FnZSgpe1xuICAgICAgICBsZXQgbmF2aWdhdGlvbmV4dHJhczogTmF2aWdhdGlvbkV4dHJhcz17XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIFwidXNlclwiOiB0aGlzLnVzZXIsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuIFxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGF0L2NoYXQnXSxuYXZpZ2F0aW9uZXh0cmFzKTtcbiAgICB9XG4gICAgZ29tZXNzYWdlMigpe1xuICAgICAgICBsZXQgbmF2aWdhdGlvbmV4dHJhczogTmF2aWdhdGlvbkV4dHJhcz17XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFwidXNlcjJcIjogdGhpcy51c2VyMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYXQvY2hhdCddLG5hdmlnYXRpb25leHRyYXMpO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7XG5cbiAgICAgICBcblxuICAgIH1cbiAgIFxuICAgIFxufSJdfQ==