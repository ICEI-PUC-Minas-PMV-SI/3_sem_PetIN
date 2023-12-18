import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { AdvertisementsComponent } from './advertisements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormGroupModule } from 'src/app/components/form-group.module';

@NgModule({
  imports: [
    CommonModule,
    AdvertisementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormGroupModule,
  ],
  declarations: [AdvertisementsComponent],
})
export class AdvertisementsModule {}
