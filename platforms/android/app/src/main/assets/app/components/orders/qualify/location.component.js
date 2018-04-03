"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../../get.services/get.services");
var pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];
var LocationComponent = (function () {
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    function LocationComponent(router, myService) {
        this.router = router;
        this.myService = myService;
        this.number1 = "1";
        this.number2 = "0";
        this.result = 0;
        this.selectedIndex = null;
        this.hint = "Mis lugares";
        this.cssClass = "default";
    }
    LocationComponent.prototype.extractData2 = function () {
        var _this = this;
        this.myService.getData('products')
            .subscribe(function (data) {
            _this.Products = data['products'];
            _this.name = [];
            for (var i = 0; i < _this.Products.length; i++) {
                _this.name.push(_this.Products[i]['name']);
            }
        }, function (error) {
            _this.onGetDataError(error);
        });
    };
    LocationComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    LocationComponent.prototype.hola = function (name) {
        console.log(name[0]);
    };
    LocationComponent.prototype.suma = function (name, result) {
        console.log(name);
        //  this.result +=parseInt(this.number1) ;
        // console.log(this.number1)
    };
    LocationComponent.prototype.resta = function () {
        this.result -= parseInt(this.number1);
        console.log(this.result);
        if (this.result < 0) {
            this.result += parseInt(this.number1);
            console.log(this.result);
        }
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    LocationComponent.prototype.ngOnInit = function () {
        this.extractData2();
    };
    Object.defineProperty(LocationComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }
    LocationComponent.prototype.wizard1 = function () {
        this.router.navigate(['home']);
    };
    LocationComponent.prototype.wizard3 = function () {
        this.router.navigate(['wizard3']);
    };
    LocationComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], LocationComponent.prototype, "drawerComponent", void 0);
    LocationComponent = __decorate([
        core_1.Component({
            selector: "location",
            moduleId: module.id,
            templateUrl: "./location.component.html",
            styleUrls: ['./location.css'],
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, get_services_1.MyHttpGetService])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUtoRixzREFBK0Q7QUFDL0QsbUVBQXFFO0FBRXJFLElBQUksV0FBVyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVM7SUFDeEUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFRbkY7SUFvRkk7OztrRUFHOEQ7SUFJOUQsMkJBQW9CLE1BQXlCLEVBQVMsU0FBMkI7UUFBN0QsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQTFGMUUsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsU0FBSSxHQUFvQixhQUFhLENBQUM7UUFFdEMsYUFBUSxHQUFnQixTQUFTLENBQUM7SUFxRnpDLENBQUM7SUEzRUQsd0NBQVksR0FBWjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ1osS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUE7WUFHZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUU3QyxDQUFDO1FBR0wsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ08sMENBQWMsR0FBdEIsVUFBdUIsS0FBcUI7UUFDeEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUwsZ0NBQUksR0FBSixVQUFLLElBQUk7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXhCLENBQUM7SUFDRyxnQ0FBSSxHQUFKLFVBQUssSUFBSSxFQUFDLE1BQU07UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsQ0FBQTtRQUNaLDBDQUEwQztRQUN0Qyw0QkFBNEI7SUFFcEMsQ0FBQztJQUNELGlDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUU7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFFO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFFTCxDQUFDO0lBWUQ7O2tFQUU4RDtJQUM5RCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFRCxzQkFBSSxtREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBY0QsNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCxzREFBc0Q7SUFFdEQsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQXhDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjs4REFBQztJQXBFcEQsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQztTQUNoQyxDQUFDO3lDQTRGK0IseUJBQWdCLEVBQW9CLCtCQUFnQjtPQTNGeEUsaUJBQWlCLENBK0c3QjtJQUFELHdCQUFDO0NBQUEsQUEvR0QsSUErR0M7QUEvR1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBwcm9tcHQsIFByb21wdFJlc3VsdCwgaW5wdXRUeXBlIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge015SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZ2V0LnNlcnZpY2VzL2dldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5sZXQgcG9rZW1vbkxpc3QgPSBbXCJCdWxiYXNhdXJcIiwgXCJQYXJhc2VjdFwiLCBcIlZlbm9uYXRcIiwgXCJWZW5vbW90aFwiLCBcIkRpZ2xldHRcIixcbiAgICBcIkR1Z3RyaW9cIiwgXCJNZW93dGhcIiwgXCJQZXJzaWFuXCIsIFwiUHN5ZHVja1wiLCBcIkFyY2FuaW5lXCIsIFwiUG9saXdyYXRoXCIsIFwiTWFjaG9rZVwiXTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvY2F0aW9uXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24uY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBudW1iZXIxOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBwdWJsaWMgbnVtYmVyMjogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIHJlc3VsdDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSBudWxsO1xuICAgIHB1YmxpYyBoaW50ICAgICAgICAgICAgICAgICAgPSBcIk1pcyBsdWdhcmVzXCI7XG4gICAgcHVibGljIGl0ZW1zOiBWYWx1ZUxpc3Q8c3RyaW5nPjtcbiAgICBwdWJsaWMgY3NzQ2xhc3M6IHN0cmluZyAgICAgID0gXCJkZWZhdWx0XCI7XG5cblxuIFxuICAgIFxuICAgIHB1YmxpYyBuYW1lIDtcbiAgICBwdWJsaWMgUHJvZHVjdHM6IGFueVtdO1xuICAgIHB1YmxpYyBwcm9kdWN0c3M7XG4gICAgXG4gICAgXG4gICAgZXh0cmFjdERhdGEyKCkge1xuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKCdwcm9kdWN0cycpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IGRhdGFbJ3Byb2R1Y3RzJ107XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gW11cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZS5wdXNoKHRoaXMuUHJvZHVjdHNbaV1bJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25HZXREYXRhRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFFcnJvcjogXCIgKyBlcnIpO1xuICAgIH1cblxuaG9sYShuYW1lKXtcbiAgICBjb25zb2xlLmxvZyhuYW1lWzBdKVxuICAgXG59XG4gICAgc3VtYShuYW1lLHJlc3VsdCl7XG4gICAgICAgIFxuICBjb25zb2xlLmxvZyggbmFtZSlcbiAgICAgICAgLy8gIHRoaXMucmVzdWx0ICs9cGFyc2VJbnQodGhpcy5udW1iZXIxKSA7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm51bWJlcjEpXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgcmVzdGEoKXtcbiAgICAgICAgdGhpcy5yZXN1bHQgLT1wYXJzZUludCh0aGlzLm51bWJlcjEpIDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xuICAgICAgICBpZiAodGhpcy5yZXN1bHQ8MCl7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCArPXBhcnNlSW50KHRoaXMubnVtYmVyMSkgO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG5cbiAgICBcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHRyYWN0RGF0YTIoKTtcbiAgICBcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKSB7XG4gICBcbiAgICB9XG5cblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucyApIHsgfVxuICBcbiAgICB3aXphcmQxKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcbiAgICB9XG4gICAgd2l6YXJkMygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dpemFyZDMnXSk7XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cblxufSJdfQ==