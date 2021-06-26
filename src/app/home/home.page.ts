/*

https://capacitorjs.com/docs/apis/geolocation
npm install @capacitor/geolocation
ionic cap sync

android->app->src->main->AndroidManifest.xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />

*/

import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  async localizar() {
    let coordinates = await Geolocation.getCurrentPosition();
    alert('Current position:\n' + coordinates.coords.latitude+" \n "+coordinates.coords.longitude) ;
  };
}


