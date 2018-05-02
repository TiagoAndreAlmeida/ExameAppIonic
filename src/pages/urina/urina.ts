import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-urina',
  templateUrl: 'urina.html',
})
export class UrinaPage {

  items = [
    {
      id: 'coloracao',
      name: 'Coloração'
    },
    {
      id: 'bilirrubina',
      name: 'Bilirrubina'
    },
    {
      id: 'acido-urico',
      name: 'Ácido úrico'
    },
    {
      id: 'amilase',
      name: 'Amilase'
    },
    {
      id: 'ph',
      name: 'PH'
    },
    {
      id: 'densidade',
      name: 'Densidade'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item){
    this.navCtrl.push(DetailsPage, {id:item.id});
  }

}
