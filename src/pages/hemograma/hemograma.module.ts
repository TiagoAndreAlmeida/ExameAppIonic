import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HemogramaPage } from './hemograma';

@NgModule({
  declarations: [
    HemogramaPage,
  ],
  imports: [
    IonicPageModule.forChild(HemogramaPage),
  ],
})
export class HemogramaPageModule {}
