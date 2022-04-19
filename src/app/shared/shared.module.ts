import { CryptoPriceService } from './services/cryptoPrice.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe,
    CurrencyPipe
   ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule,
    HttpClientModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    CryptoPriceService
  ]
})
export class SharedModule { }
