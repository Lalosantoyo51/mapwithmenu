"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
var changepassword_services_1 = require(".././post.services/changepassword.services");
var dialogs_1 = require("ui/dialogs");
var ChangepassComponent = /** @class */ (function () {
    function ChangepassComponent(router, profileService) {
        this.router = router;
        this.profileService = profileService;
        this.phone = "";
        this.password = "";
        this.newpassword = "";
        this.selectedIndex = 1;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ChangepassComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(ChangepassComponent.prototype, "sideDrawerTransition", {
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
    ChangepassComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ChangepassComponent.prototype.createProfile = function () {
        console.log(this.profileService.URL);
        this.profileService.create({
            phone: this.phone,
            password: this.password,
            newpassword: this.newpassword
        }).subscribe(function (profile) {
            dialogs_1.alert(JSON.stringify(profile)).then(function () {
                console.log("Race chosen!");
            });
            console.log(JSON.stringify(profile));
        }, function (error) {
            // << alert-dialog-code
            console.log(JSON.stringify(error));
            // >> alert-dialog-code
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ChangepassComponent.prototype, "drawerComponent", void 0);
    ChangepassComponent = __decorate([
        core_1.Component({
            selector: "Changepass",
            moduleId: module.id,
            templateUrl: "./changepass.component.html",
            styleUrls: ['./changepass.component.css'],
            providers: [changepassword_services_1.ProfileService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, changepassword_services_1.ProfileService])
    ], ChangepassComponent);
    return ChangepassComponent;
}());
exports.ChangepassComponent = ChangepassComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFuZ2VwYXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBR2hGLHNEQUErRDtBQUMvRCxzRkFBeUU7QUFHekUsc0NBQW1DO0FBU25DO0lBUUksNkJBQW9CLE1BQXlCLEVBQVUsY0FBK0I7UUFBbEUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFQdEYsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUVsQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBS2xCLENBQUM7SUFTRDs7a0VBRThEO0lBQzlELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxzQkFBSSxxREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELDJDQUFhLEdBQWI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDM0IsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2hCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7U0FFM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDakIsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsVUFBQyxLQUFLO1lBR0osdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLHVCQUF1QjtRQUcvQixDQUFDLENBQUMsQ0FBQztJQUlQLENBQUM7SUFoRG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7Z0VBQUM7SUFmcEQsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxTQUFTLEVBQUMsQ0FBQyx3Q0FBYyxDQUFDO1NBQzdCLENBQUM7eUNBUytCLHlCQUFnQixFQUEyQix3Q0FBYztPQVI3RSxtQkFBbUIsQ0FnRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi9wb3N0LnNlcnZpY2VzL2NoYW5nZXBhc3N3b3JkLnNlcnZpY2VzXCJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2hhbmdlcGFzc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGFuZ2VwYXNzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlcGFzcy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltQcm9maWxlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbmdlcGFzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGhvbmU6c3RyaW5nID0gXCJcIjtcbiAgIFxuICAgIHBhc3N3b3JkOnN0cmluZz1cIlwiO1xuICAgIG5ld3Bhc3N3b3JkOnN0cmluZz1cIlwiO1xuICAgIHNlbGVjdGVkSW5kZXggPSAxO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcHJvZmlsZVNlcnZpY2UgOiBQcm9maWxlU2VydmljZSkge1xuICAgICAgIFxuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBjcmVhdGVQcm9maWxlKCkgOiB2b2lkIHtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlU2VydmljZS5VUkwpXG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuY3JlYXRlKHtcbiAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcbiAgICAgICAgcGFzc3dvcmQ6dGhpcy5wYXNzd29yZCxcbiAgICAgICAgbmV3cGFzc3dvcmQ6dGhpcy5uZXdwYXNzd29yZFxuICAgICAgXG4gICAgICAgIH0pLnN1YnNjcmliZSgocHJvZmlsZSk9PntcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJhY2UgY2hvc2VuIVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XG4gICAgICAgIH0sKGVycm9yKT0+e1xuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgICAgLy8gPDwgYWxlcnQtZGlhbG9nLWNvZGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgLy8gPj4gYWxlcnQtZGlhbG9nLWNvZGVcbiBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgXG4gICAgfVxufSJdfQ==