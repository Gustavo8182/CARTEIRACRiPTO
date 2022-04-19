import { WalletFormComponent } from './Wallet/walletForm/walletForm.component';
import { WalletService } from './Wallet/wallet.service';
import { WalletPageComponent } from './Wallet/WalletPage/WalletPage.component';
import { WalletComponent } from './Wallet/Wallet/Wallet.component';
import { UserServiceService } from './login/userService.service';
import { LoginRegisterComponent } from './login/loginRegister/loginRegister.component';
import { LoginPageComponent } from './login/loginPage/loginPage.component';
import { LoginFormComponent } from './login/loginForm/loginForm.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeTableComponent } from './home/home-table/home-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeListComponent,
    HomeTableComponent,
    LoginComponent,
    LoginFormComponent,
    LoginPageComponent,
    LoginRegisterComponent,
    WalletComponent,
    WalletPageComponent,
    WalletFormComponent



  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule


  ],
  exports:[
    HomePageComponent,
    WalletPageComponent
  ],
  providers:[
    UserServiceService,
    WalletService

  ]
})
export class FeaturesModule { }
