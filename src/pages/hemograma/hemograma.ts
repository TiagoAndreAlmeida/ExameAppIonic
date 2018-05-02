import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-hemograma',
  templateUrl: 'hemograma.html',
})
export class HemogramaPage {

  items = [
    {
      id: 'hemoglobina',
      name: 'Hemoglobina'
    },
    {
      id: 'rdw',
      name: 'RDW'
    },
    {
      id: 'vcm',
      name: 'VCM'
    },
    {
      id: 'hmc',
      name: 'HMC'
    },
    {
      id: 'plaquetas',
      name: 'Plaquetas'
    },
    {
      id: 'leucocitos',
      name: 'Leucócitos Totais'
    },
    {
      id: 'basofilos',
      name: 'Basófilos'
    },
    {
      id: 'eosinofilos',
      name: 'Eosinófilos'
    },
    {
      id: 'neutrofilos',
      name: 'Neutrófilos'
    },
    {
      id: 'linfocitos',
      name: 'Linfócitos'
    },
    {
      id: 'monocitos',
      name: 'Monócitos'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item){
    this.navCtrl.push(DetailsPage, {id:item.id});
  }

}
