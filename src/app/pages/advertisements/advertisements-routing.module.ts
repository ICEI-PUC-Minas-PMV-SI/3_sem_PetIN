import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementsComponent } from './advertisements.component';


const routes: Routes = [
  {
    path: '',
    component: AdvertisementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementsRoutingModule { }
