import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';

@NgModule({
  imports: [CommonModule, PartnersRoutingModule],
  declarations: [PartnersComponent],
})
export class PartnersModule {}
