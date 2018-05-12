"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var get_services_1 = require("../../../get.services/get.services");
var exchange_service_1 = require("../../../services/conex/exchange.service");
var router_2 = require("@angular/router");
var SelectsellerComponent = /** @class */ (function () {
    function SelectsellerComponent(route, exchange, myService, router) {
        var _this = this;
        this.route = route;
        this.exchange = exchange;
        this.myService = myService;
        this.router = router;
        this.selectedIndex = null;
        this.seller_id = [];
        this.cssClass = "default";
        this.asuptm = 8;
        this.route.queryParams.subscribe(function (params) {
            _this.employee_origin_id = params["employee_origin_id"];
            _this.product_id = params['product_id'];
            _this.quantity = params['quantity'];
        });
    }
    SelectsellerComponent.prototype.ngOnInit = function () {
        this.getseller();
    };
    SelectsellerComponent.prototype.onchange = function (args) {
        //console.log(args.newIndex);
        //console.log(this.seller);
        console.log(this.seller[args.newIndex]);
        console.log(this.seller_id);
        if (this.seller)
            for (var i = 0; i <= args.newIndex; i++) {
                console.log(this.seller_id[i]);
                this.employee_receiver_id = this.seller_id[i];
            }
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
    SelectsellerComponent.prototype.getseller = function () {
        var _this = this;
        this.myService.getData('seller/transfer/1/employee')
            .subscribe(function (sellers) {
            _this.seller = [];
            for (var seller in sellers) {
                console.log(JSON.stringify(sellers[seller].name));
                _this.seller.push(sellers[seller].name + " " + sellers[seller].last_name);
                _this.seller_id.push(sellers[seller].user_id);
            }
        }, function (error) {
            _this.onGetDataError(error);
        });
    };
    SelectsellerComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    SelectsellerComponent.prototype.confirmar = function () {
        this.exchange.exchange({
            employee_origin_id: this.employee_origin_id,
            employee_receiver_id: this.employee_receiver_id,
            quantity: this.quantity,
            product_id: this.product_id
        }).subscribe(function (profile) {
            console.log(JSON.stringify(profile));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
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
            providers: [get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, exchange_service_1.ProductExchangeService, get_services_1.MyHttpGetService, router_1.RouterExtensions])
    ], SelectsellerComponent);
    return SelectsellerComponent;
}());
exports.SelectsellerComponent = SelectsellerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0c2VsbGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdHNlbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0Y7QUFDaEYsc0NBQXdFO0FBTXhFLHNEQUErRDtBQUUvRCxtRUFBc0U7QUFDdEUsNkVBQWtGO0FBQ2xGLDBDQUFpRDtBQVlqRDtJQTJDSSwrQkFBb0IsS0FBcUIsRUFBUyxRQUErQixFQUFTLFNBQTJCLEVBQVMsTUFBeUI7UUFBdkosaUJBT0M7UUFQbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUF4Q2hKLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBQyxFQUFFLENBQUM7UUFTYixhQUFRLEdBQWdCLFNBQVMsQ0FBQztRQUNsQyxXQUFNLEdBQUMsQ0FBQyxDQUFDO1FBOEJaLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQWxDTSx3Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSx3Q0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQy9DLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxR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QVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBR3pDLENBQUMsRUFBQyxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2QyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUF2Q29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7a0VBQUM7SUF2RHBELHFCQUFxQjtRQVhqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUMsK0JBQWdCLENBQUM7U0FLaEMsQ0FBQzt5Q0E0QzZCLHVCQUFjLEVBQWtCLHlDQUFzQixFQUFvQiwrQkFBZ0IsRUFBa0IseUJBQWdCO09BM0M5SSxxQkFBcUIsQ0FrR2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWxHWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2dldC5zZXJ2aWNlcy9nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IFByb2R1Y3RFeGNoYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvY29uZXgvZXhjaGFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzZWxlY3RzZWxsZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0c2VsbGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0c2VsbGVyLmNzcyddLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2VdXG5cbiAgIFxuICAgXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RzZWxsZXJDb21wb25lbnQgIHtcbiAgICBwdWJsaWMgc2VsbGVyQXJyYXk6YW55W107XG4gICAgcHVibGljIHNlbGxlcjpBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSBudWxsO1xuICAgIHB1YmxpYyBzZWxsZXJfaWQ9W107XG4gICAgcHVibGljIHNlbGxlcl9pZDI7XG4gICAgcHVibGljIGRhdGE6IGFueVtdO1xuICAgIHB1YmxpYyBudW1zZWxsZXI7XG4gICAgcHVibGljIGVtcGxveWVlX29yaWdpbl9pZDtcbiAgICBwdWJsaWMgZW1wbG95ZWVfcmVjZWl2ZXJfaWQ7XG4gICAgcHVibGljIHF1YW50aXR5O1xuICAgIHB1YmxpYyBwcm9kdWN0X2lkO1xuICAgIHB1YmxpYyBpdGVtczogVmFsdWVMaXN0PHN0cmluZz47XG4gICAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgICAgICA9IFwiZGVmYXVsdFwiO1xuICAgIHB1YmxpYyBhc3VwdG09ODtcblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRzZWxsZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNlbGxlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsbGVyW2FyZ3MubmV3SW5kZXhdKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxsZXJfaWQpXG4gICAgICAgIGlmKHRoaXMuc2VsbGVyKVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8PSBhcmdzLm5ld0luZGV4O2krKyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxsZXJfaWRbaV0pXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9yZWNlaXZlcl9pZD10aGlzLnNlbGxlcl9pZFtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVN0eWxlcygpIHtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwiY2hhbmdlZC1zdHlsZXNcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUscHJpdmF0ZSBleGNoYW5nZTpQcm9kdWN0RXhjaGFuZ2VTZXJ2aWNlLHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT57XG4gICAgICAgICAgICB0aGlzLmVtcGxveWVlX29yaWdpbl9pZCA9IHBhcmFtc1tcImVtcGxveWVlX29yaWdpbl9pZFwiXTtcbiAgICAgICAgICAgdGhpcy5wcm9kdWN0X2lkID0gcGFyYW1zWydwcm9kdWN0X2lkJ107XG4gICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSBwYXJhbXNbJ3F1YW50aXR5J107XG4gICAgICAgIH0pXG4gICBcbiAgICB9XG4gICAgcHJldmlvdXMoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2VsbGVycy9zZWxlY3Rwcm9kdWN0cyddKTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIGdldHNlbGxlcigpe1xuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKCdzZWxsZXIvdHJhbnNmZXIvMS9lbXBsb3llZScpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNlbGxlcnMpID0+IHtcbiAgICAgICAgdGhpcy5zZWxsZXI9W107XG4gICAgICAgICAgICAgZm9yIChsZXQgc2VsbGVyIGluIHNlbGxlcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzZWxsZXJzW3NlbGxlcl0ubmFtZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsbGVyLnB1c2goc2VsbGVyc1tzZWxsZXJdLm5hbWUgKyBcIiBcIisgc2VsbGVyc1tzZWxsZXJdLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxlcl9pZC5wdXNoKHNlbGxlcnNbc2VsbGVyXS51c2VyX2lkKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25HZXREYXRhRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFFcnJvcjogXCIgKyBlcnIpO1xuICAgIH1cbiAgICBjb25maXJtYXIoKXtcbiAgICAgIFxuICAgICAgICAgICAgdGhpcy5leGNoYW5nZS5leGNoYW5nZSh7XG4gICAgICAgICAgICAgICAgZW1wbG95ZWVfb3JpZ2luX2lkOnRoaXMuZW1wbG95ZWVfb3JpZ2luX2lkLFxuICAgICAgICAgICAgICAgIGVtcGxveWVlX3JlY2VpdmVyX2lkOnRoaXMuZW1wbG95ZWVfcmVjZWl2ZXJfaWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6dGhpcy5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOnRoaXMucHJvZHVjdF9pZFxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKChwcm9maWxlKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9LChlcnJvcik9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgXG4gICBcbn1cbiJdfQ==