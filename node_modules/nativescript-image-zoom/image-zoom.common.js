"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var ImageZoomBase = (function (_super) {
    __extends(ImageZoomBase, _super);
    function ImageZoomBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageZoomBase;
}(view_1.View));
exports.ImageZoomBase = ImageZoomBase;
exports.stretchProperty = new view_1.Property({
    name: 'stretch'
});
exports.zoomScaleProperty = new view_1.Property({
    name: 'zoomScale',
    defaultValue: 1
});
exports.minZoomScaleProperty = new view_1.Property({
    name: 'minZoom',
    defaultValue: 1
});
exports.maxZoomScaleProperty = new view_1.Property({
    name: 'maxZoom',
    defaultValue: 4
});
exports.srcProperty = new view_1.Property({
    name: 'src'
});
exports.srcProperty.register(ImageZoomBase);
exports.stretchProperty.register(ImageZoomBase);
exports.zoomScaleProperty.register(ImageZoomBase);
exports.minZoomScaleProperty.register(ImageZoomBase);
exports.maxZoomScaleProperty.register(ImageZoomBase);
//# sourceMappingURL=image-zoom.common.js.map