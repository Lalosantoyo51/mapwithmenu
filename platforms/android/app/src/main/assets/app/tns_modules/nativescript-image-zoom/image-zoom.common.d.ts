import { Property, View } from 'tns-core-modules/ui/core/view';
import { Stretch } from 'tns-core-modules/ui/image/image';
export declare class ImageZoomBase extends View {
    src: string;
    zoomScale: number;
    minZoom: number;
    maxZoom: number;
    stretch: string;
}
export declare const stretchProperty: Property<ImageZoomBase, Stretch>;
export declare const zoomScaleProperty: Property<ImageZoomBase, number>;
export declare const minZoomScaleProperty: Property<ImageZoomBase, number>;
export declare const maxZoomScaleProperty: Property<ImageZoomBase, number>;
export declare const srcProperty: Property<ImageZoomBase, string>;
