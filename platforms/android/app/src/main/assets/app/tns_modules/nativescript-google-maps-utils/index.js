"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("tns-core-modules/utils/utils");
var LatLng = com.google.android.gms.maps.model.LatLng;
var PolylineOptions = com.google.android.gms.maps.model.PolylineOptions;
var LatLngBounds = com.google.android.gms.maps.model.LatLngBounds;
var CameraUpdateFactory = com.google.android.gms.maps.CameraUpdateFactory;
var ClusterItem = com.google.maps.android.clustering.ClusterItem;
var ClusterManager = com.google.maps.android.clustering.ClusterManager;
var DefaultClusterRenderer = com.google.maps.android.clustering.view.DefaultClusterRenderer;
var HeatmapTileProvider = com.google.maps.android.heatmaps.HeatmapTileProvider;
var TileOverlayOptions = com.google.android.gms.maps.model.TileOverlayOptions;
var debugNull = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
function debugDefault() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args = args.map(function (value) {
        if (typeof value === 'object' && value) {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
                value = value.toString();
            }
        }
        return value;
    });
    args.unshift('nativescript-socket.io');
    console.log.apply(console, args);
}
var debug = debugNull;
function enableDebug(debugFn) {
    if (debugFn === void 0) { debugFn = debugDefault; }
    debug = debugFn;
}
exports.enableDebug = enableDebug;
function disableDebug() {
    debug = debugNull;
}
exports.disableDebug = disableDebug;
var CustomClusterItem = java.lang.Object.extend({
    interfaces: [ClusterItem],
    marker: null,
    init: function () { },
    getMarker: function () {
        return this.marker;
    },
    getPosition: function () {
        return this.marker.position.android;
    },
    getTitle: function () {
        return this.marker.title;
    },
    getSnippet: function () {
        return this.marker.snippet;
    },
});
var CustomClusterManager = ClusterManager.extend({
    mapView: null,
    onMarkerClick: function (gmsMarker) {
        this.super.onMarkerClick(gmsMarker);
        var marker = this.mapView.findMarker(function (marker) {
            if (marker.android.getId) {
                return marker.android.getId() === gmsMarker.getId();
            }
            return marker.title === gmsMarker.getTitle() && marker.snippet === gmsMarker.getSnippet() && marker.position.android.equals(gmsMarker.getPosition());
        });
        marker && this.mapView.notifyMarkerTapped(marker);
        return false;
    },
    onInfoWindowClick: function (gmsMarker) {
        this.super.onInfoWindowClick(gmsMarker);
        var marker = this.mapView.findMarker(function (marker) {
            if (marker.android.getId) {
                return marker.android.getId() === gmsMarker.getId();
            }
            return marker.title === gmsMarker.getTitle() && marker.snippet === gmsMarker.getSnippet() && marker.position.android.equals(gmsMarker.getPosition());
        });
        marker && this.mapView.notifyMarkerInfoWindowTapped(marker);
        return false;
    },
});
function setupMarkerCluster(mapView, markers, options) {
    debug('setupMarkerCluster');
    var clusterManager = new CustomClusterManager(utils.ad.getApplicationContext(), mapView.gMap);
    clusterManager.mapView = mapView;
    if (mapView.gMap.setOnCameraIdleListener) {
        mapView.gMap.setOnCameraIdleListener(clusterManager);
    }
    else if (mapView.gMap.setOnCameraChangeListener) {
        mapView.gMap.setOnCameraChangeListener(clusterManager);
    }
    mapView.gMap.setOnMarkerClickListener(clusterManager);
    mapView.gMap.setOnInfoWindowClickListener(clusterManager);
    markers.forEach(function (marker) {
        var markerItem = new CustomClusterItem();
        markerItem.marker = marker;
        clusterManager.addItem(markerItem);
        mapView._markers.push(marker);
    });
    clusterManager.cluster();
}
exports.setupMarkerCluster = setupMarkerCluster;
function setupHeatmap(mapView, positions, config) {
    if (config === void 0) { config = null; }
    debug('setupHeatmap');
    var list = new java.util.ArrayList();
    positions.forEach(function (position) {
        list.add(position.android);
    });
    if (config) {
        config.overlay.clearTileCache();
        config.provider.setData(list);
    }
    else {
        config = {};
        config.provider = new HeatmapTileProvider.Builder()
            .data(list)
            .build();
        config.overlay = mapView.gMap.addTileOverlay(new TileOverlayOptions().tileProvider(config.provider));
    }
    return config;
}
exports.setupHeatmap = setupHeatmap;
//# sourceMappingURL=index.js.map