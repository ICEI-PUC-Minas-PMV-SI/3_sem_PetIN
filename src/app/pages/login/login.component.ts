import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginHTTPRequestBody } from 'src/app/types/LoginDTO';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  public onSubmit(event: Event): void {
    event.preventDefault();
    const body = this.buildPayload();
    if (!this.validateBody(body)) {
      return;
    }
    this.authService.login(body).subscribe({
      next: ({ status, data, error }) => {
        if (status >= 200 && status < 300) {
          this.toastr.success('Bem-vindo!', 'Sucesso');
          this.router.navigateByUrl('/anuncios').then(() => {
            window.location.reload();
          });
        } else {
          throw error;
        }
      },
      error: (err) => {
        this.toastr.error('Email ou senha inválidos', 'Erro');
      },
    });
  }

  private buildPayload() {
    return {
      email: this.form.get('email')?.value ?? '',
      password: this.form.get('password')?.value ?? '',
    };
  }

  private validateBody(body: LoginHTTPRequestBody): boolean {
    if (!body.email) {
      this.toastr.error('E-mail não preencido!', 'Erro');
      return false;
    } else if (!body.email.match('(.+)@(.+){2,}.(.+){2,}')) {
      this.toastr.error('E-mail inválido!', 'Erro');
      return false;
    } else if (!body.password) {
      this.toastr.error('Senha não preencida!', 'Erro');
      return false;
    }
    return true;
  }
}
