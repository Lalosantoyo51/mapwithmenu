package com.tns.gen.android.widget;

public class RatingBar_OnRatingBarChangeListener implements android.widget.RatingBar.OnRatingBarChangeListener {
	public RatingBar_OnRatingBarChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onRatingChanged(android.widget.RatingBar param_0, float param_1, boolean param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onRatingChanged", void.class, args);
	}

}
