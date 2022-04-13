import { WalletService } from './../wallet.service';
import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../home/model/cripto.model';

@Component({
  selector: 'app-WalletPage',
  templateUrl: './WalletPage.component.html',
  styleUrls: ['./WalletPage.component.scss']
})
export class WalletPageComponent implements OnInit {

  criptos: Array<PeriodicElement> = this.walletService.getAll();

  filteredCriptos: Array<PeriodicElement> = this.criptos;
  addcripto : boolean = false;


  constructor( private walletService:WalletService) { }


  findByName(event: any) {
    const value = event.target.value;

    if(!value) return this.filteredCriptos = this.criptos;

    const crtp = this.walletService.getByName(value);

   // if(crtp.length === 0) return this.filteredCriptos = this.criptos;
    console.log(crtp)
    return this.filteredCriptos = crtp;
  }
  addCripto(){
    this.addcripto = true;
    }

  ngOnInit() {
  }

}
