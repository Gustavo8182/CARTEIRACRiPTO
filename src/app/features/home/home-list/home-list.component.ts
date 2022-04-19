import { PeriodicElement } from './../model/cripto.model';
import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  criptos: Array<PeriodicElement> = this.homeService.getAll();
  filteredCriptos: Array<PeriodicElement> = this.criptos;


  cry:Array<string> = []
  teste:any;

  constructor( private homeService :HomeServiceService) {

     }

  findByName(event: any) {
    const value = event.target.value;

    if(!value) return this.filteredCriptos = this.criptos;

    const crtp = this.homeService.getByName(value);

   // if(crtp.length === 0) return this.filteredCriptos = this.criptos;
    console.log(crtp)
    return this.filteredCriptos = crtp;
  }

  ngOnInit(): void {

  }

}
