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


