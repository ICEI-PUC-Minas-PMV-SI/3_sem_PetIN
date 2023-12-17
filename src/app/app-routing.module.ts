import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home', // trocar depois
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'parceiros',
    loadChildren: () =>
      import('./pages/partners/partners.module').then((m) => m.PartnersModule),
  },
  {
    path: 'anuncios',
    loadChildren: () =>
      import('./pages/advertisements/advertisements.module').then(
        (m) => m.AdvertisementsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
