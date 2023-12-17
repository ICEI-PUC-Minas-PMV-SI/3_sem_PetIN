import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [FormGroupComponent],
})
export class FormGroupModule {}
