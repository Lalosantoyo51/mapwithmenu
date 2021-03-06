"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_zoom_common_1 = require("./image-zoom.common");
var fs = require("tns-core-modules/file-system");
var utils = require("tns-core-modules/utils/utils");
var imageSource = require("tns-core-modules/image-source");
var ImageZoom = (function (_super) {
    __extends(ImageZoom, _super);
    function ImageZoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageZoom.prototype.createNativeView = function () {
        return new com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView(this._context);
    };
    ImageZoom.prototype.initNativeView = function () {
        if (this.nativeView) {
            this.nativeView.setMinScale(this.minZoom);
            this.nativeView.setMaxScale(this.maxZoom);
        }
    };
    ImageZoom.prototype[image_zoom_common_1.minZoomScaleProperty.setNative] = function (scale) {
        if (this.nativeView) {
            this.nativeView.setMinScale(scale);
        }
    };
    ImageZoom.prototype[image_zoom_common_1.maxZoomScaleProperty.setNative] = function (scale) {
        if (this.nativeView) {
            this.nativeView.setMaxScale(scale);
        }
    };
    ImageZoom.prototype[image_zoom_common_1.srcProperty.setNative] = function (src) {
        var _this = this;
        if (!src)
            return;
        var source;
        if (src.startsWith('~/')) {
            var uri = fs.path.join(fs.knownFolders.currentApp().path, src.replace('~/', ''));
            source = com.davemorrissey.labs.subscaleview.ImageSource.uri(uri);
        }
        else if (src.startsWith('res://')) {
            var name_1 = src.replace('res://', '');
            var identifier = utils.ad
                .getApplication()
                .getResources()
                .getIdentifier(name_1, 'drawable', utils.ad.getApplication().getPackageName());
            source = com.davemorrissey.labs.subscaleview.ImageSource.resource(identifier);
        }
        else if (src.startsWith('http')) {
            imageSource.fromUrl(src).then(function (data) {
                source = com.davemorrissey.labs.subscaleview.ImageSource.bitmap(data.android);
                _this.nativeView.setImage(source);
            });
        }
        else {
            source = com.davemorrissey.labs.subscaleview.ImageSource.uri(src);
        }
        if (this.nativeView && source) {
            this.nativeView.setImage(source);
        }
    };
    return ImageZoom;
}(image_zoom_common_1.ImageZoomBase));
exports.ImageZoom = ImageZoom;
//# sourceMappingURL=image-zoom.js.map