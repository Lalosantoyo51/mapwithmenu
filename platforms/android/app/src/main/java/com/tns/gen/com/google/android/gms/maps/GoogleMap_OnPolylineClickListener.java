package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnPolylineClickListener implements com.google.android.gms.maps.GoogleMap.OnPolylineClickListener {
	public GoogleMap_OnPolylineClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onPolylineClick(com.google.android.gms.maps.model.Polyline param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onPolylineClick", void.class, args);
	}

}
