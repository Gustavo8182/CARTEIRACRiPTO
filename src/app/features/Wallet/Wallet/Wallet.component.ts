import { WalletService } from './../wallet.service';
import { Component, OnInit, Input } from '@angular/core';
import { PeriodicElement } from '../../home/model/cripto.model';

@Component({
  selector: 'app-Wallet',
  templateUrl: './Wallet.component.html',
  styleUrls: ['./Wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input()
  ele?:PeriodicElement;

  constructor() { }

  ngOnInit() {
  }
}
