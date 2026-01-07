import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'companies', component: CompaniesPageComponent },
    ],
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [{ path: '', component: LoginPageComponent }],
  },
];
