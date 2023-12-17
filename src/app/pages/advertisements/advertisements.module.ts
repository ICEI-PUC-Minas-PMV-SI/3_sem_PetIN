import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { AdvertisementsComponent } from './advertisements.component';

@NgModule({
  imports: [CommonModule, AdvertisementsRoutingModule],
  declarations: [AdvertisementsComponent],
})
export class AdvertisementsModule {}
