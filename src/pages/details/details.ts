import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  params;
  exams:any;
  load;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public api: ApiProvider, private loadingController: LoadingController) {
    this.params = this.navParams.get('id');
    this.load = this.loadingController.create({ content: "Buscando dados..."});
    this.load.present();
  }

  ionViewWillEnter(){
    this.getExams();
  }

  getExams(){
    this.api.getExams(this.params).then(data => {
      this.exams = data;
      this.load.dismiss();
      //console.log(this.exams);
    });
  }

}
