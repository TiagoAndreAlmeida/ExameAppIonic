import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello ApiProvider Provider');
  }

  getExams(id: String){
    //console.log("https://exame-back.herokuapp.com/"+id);
    return new Promise(resolve => {
      this.http.get("https://exame-back.herokuapp.com/"+id)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
}
