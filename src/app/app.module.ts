import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CryptoPriceService } from './shared/services/cryptoPrice.service';
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule

  ],
  providers: [
    CryptoPriceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
