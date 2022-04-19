import { WalletPageComponent } from './features/Wallet/WalletPage/WalletPage.component';
import { LoginFormComponent } from './features/login/loginForm/loginForm.component';
import { LoginPageComponent } from './features/login/loginPage/loginPage.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:LoginFormComponent},
  {path:'wallet', component:WalletPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
