package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnPolygonClickListener implements com.google.android.gms.maps.GoogleMap.OnPolygonClickListener {
	public GoogleMap_OnPolygonClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onPolygonClick(com.google.android.gms.maps.model.Polygon param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onPolygonClick", void.class, args);
	}

}
