import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HemogramaPage } from '../hemograma/hemograma';
import { UrinaPage } from '../urina/urina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page){
    switch(page){
      case "hemograma":
      this.navCtrl.push(HemogramaPage);
      break;

      case "urina":
      this.navCtrl.push(UrinaPage);
      break;
    }
  }

}
