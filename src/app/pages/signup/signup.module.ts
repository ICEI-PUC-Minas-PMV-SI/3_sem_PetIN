import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormGroupModule } from 'src/app/components/form-group.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormGroupModule,
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
