import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PeriodicElement } from '../../home/model/cripto.model';
import { WalletService } from '../wallet.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-walletForm',
  templateUrl: './walletForm.component.html',
  styleUrls: ['./walletForm.component.scss']
})
export class WalletFormComponent implements OnInit {

  cripto:PeriodicElement = this.waletService.getDefaultUser();

  constructor(
    private waletService:WalletService,
    private router:Router
    ) { }

  criptoForm = new FormGroup({
    position: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    weight: new FormControl('',[Validators.required]),
    symbol: new FormControl('',[Validators.required])

  });

  onSubmit() {
    const formValue = this.criptoForm.value;
    this.cripto.position = formValue.name;
    this.cripto.name = formValue.email;
    this.cripto.weight = formValue.password;
    this.cripto.symbol = formValue.password;
    this.waletService.addCripto(this.cripto);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/wallet');
  }

  ngOnInit() {
  }

}
