"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("../../../services/auth.service");
var get_services_1 = require("../../../get.services/get.services");
var router_2 = require("@angular/router");
var SelectproductsComponent = /** @class */ (function () {
    function SelectproductsComponent(route, myService, router, authService) {
        this.route = route;
        this.myService = myService;
        this.router = router;
        this.authService = authService;
        this.quantity = 3;
        this.product_id = 2;
    }
    SelectproductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.user.toPromise()];
                    case 1:
                        _a.user = _b.sent();
                        console.log('id del vendedor' + this.user.id);
                        this.myService.getData('seller/' + this.user.id + '/provisions')
                            .subscribe(function (data) {
                            _this.getdata = data['provisions'];
                            _this.product = [];
                            for (var i = 0; i < _this.getdata.length; i++) {
                                console.log(_this.getdata[i]['name']);
                                _this.provisions_seller = data['provisions'][i]['provisions_seller'];
                                for (var i_1 = 0; i_1 < _this.provisions_seller.length; i_1++) {
                                    console.log(_this.provisions_seller[i_1]['product']["name"]);
                                    _this.product.push({
                                        'name': _this.provisions_seller[i_1]['product']["name"]
                                    });
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectproductsComponent.prototype.next = function () {
        var navigationextras = {
            queryParams: {
                'employee_origin_id': this.user.id,
                'quantity': this.quantity,
                'product_id': this.product_id
            }
        };
        this.route.navigate(['/sellers/selectseller'], navigationextras);
    };
    SelectproductsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SelectproductsComponent.prototype, "drawerComponent", void 0);
    SelectproductsComponent = __decorate([
        core_1.Component({
            selector: "selectproducts",
            moduleId: module.id,
            templateUrl: "./selectproducts.component.html",
            styleUrls: ['./selectproducts.css'],
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [router_2.Router, get_services_1.MyHttpGetService, router_1.RouterExtensions, auth_service_1.AuthService])
    ], SelectproductsComponent);
    return SelectproductsComponent;
}());
exports.SelectproductsComponent = SelectproductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0cHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0cHJvZHVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0VBQWdGO0FBQ2hGLHNDQUF3RTtBQU14RSxzREFBK0Q7QUFDL0QsK0RBQTZEO0FBRTdELG1FQUFzRTtBQUN0RSwwQ0FBMkQ7QUFZM0Q7SUE0QkksaUNBQW9CLEtBQVksRUFBUyxTQUEyQixFQUFTLE1BQXlCLEVBQVUsV0FBdUI7UUFBbkgsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXhCaEksYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUsR0FBRSxDQUFDLENBQUM7SUF5QnJCLENBQUM7SUF2QkssMENBQVEsR0FBZDs7Ozs7Ozt3QkFDSSxLQUFBLElBQUksQ0FBQTt3QkFBUSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQW5ELEdBQUssSUFBSSxHQUFHLFNBQXVDLENBQUM7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLGFBQWEsQ0FBQzs2QkFDM0QsU0FBUyxDQUFFLFVBQUMsSUFBSTs0QkFDYixLQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDakMsS0FBSSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7NEJBQ2hCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQ0FDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0NBQ3BDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtnQ0FDbEUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxFQUFFLENBQUM7b0NBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0NBQzFELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dDQUNkLE1BQU0sRUFBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO3FDQUN0RCxDQUFDLENBQUE7Z0NBQ04sQ0FBQzs0QkFFTCxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFBOzs7OztLQUNMO0lBSUQsc0NBQUksR0FBSjtRQUNJLElBQUksZ0JBQWdCLEdBQWtCO1lBQ2xDLFdBQVcsRUFBQztnQkFDUixvQkFBb0IsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLFVBQVUsRUFBQyxJQUFJLENBQUMsUUFBUTtnQkFDeEIsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVO2FBQy9CO1NBQ0osQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxtREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBSG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7b0VBQUM7SUF6Q3BELHVCQUF1QjtRQVhuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxTQUFTLEVBQUMsQ0FBQywrQkFBZ0IsQ0FBQztTQUsvQixDQUFDO3lDQTZCNEIsZUFBTSxFQUFvQiwrQkFBZ0IsRUFBa0IseUJBQWdCLEVBQXNCLDBCQUFXO09BNUI5SCx1QkFBdUIsQ0ErQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2dldC5zZXJ2aWNlcy9nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNlbGVjdHByb2R1Y3RzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlbGVjdHByb2R1Y3RzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0cHJvZHVjdHMuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltNeUh0dHBHZXRTZXJ2aWNlXVxuXG4gICBcbiAgIFxuICBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0cHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBnZXRkYXRhO1xuICAgIHB1YmxpYyBwcm92aXNpb25zX3NlbGxlcjtcbiAgICBwdWJsaWMgcHJvZHVjdDtcbiAgICBwdWJsaWMgcXVhbnRpdHkgPSAzO1xuICAgIHB1YmxpYyBwcm9kdWN0X2lkID0yO1xuICAgIHVzZXI7XG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudXNlci50b1Byb21pc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIGRlbCB2ZW5kZWRvcicrdGhpcy51c2VyLmlkKVxuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKCdzZWxsZXIvJyt0aGlzLnVzZXIuaWQrJy9wcm92aXNpb25zJylcbiAgICAgICAgLnN1YnNjcmliZSAoKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLmdldGRhdGEgPWRhdGFbJ3Byb3Zpc2lvbnMnXTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdD1bXTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZ2V0ZGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldGRhdGFbaV1bJ25hbWUnXSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3Zpc2lvbnNfc2VsbGVyPSBkYXRhWydwcm92aXNpb25zJ11baV1bJ3Byb3Zpc2lvbnNfc2VsbGVyJ11cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvdmlzaW9uc19zZWxsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3Zpc2lvbnNfc2VsbGVyW2ldWydwcm9kdWN0J11bXCJuYW1lXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOnRoaXMucHJvdmlzaW9uc19zZWxsZXJbaV1bJ3Byb2R1Y3QnXVtcIm5hbWVcIl1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6Um91dGVyLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSkge1xuICAgXG4gICAgfVxuICAgIG5leHQoKXtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25leHRyYXM6TmF2aWdhdGlvbkV4dHJhcz17XG4gICAgICAgICAgICBxdWVyeVBhcmFtczp7XG4gICAgICAgICAgICAgICAgJ2VtcGxveWVlX29yaWdpbl9pZCc6dGhpcy51c2VyLmlkLFxuICAgICAgICAgICAgICAgICdxdWFudGl0eSc6dGhpcy5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICAncHJvZHVjdF9pZCc6dGhpcy5wcm9kdWN0X2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbJy9zZWxsZXJzL3NlbGVjdHNlbGxlciddLG5hdmlnYXRpb25leHRyYXMpOyBcbiAgICB9XG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgIFxuICAgXG59XG4iXX0=