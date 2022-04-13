import { PeriodicElement } from './../model/cripto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {

  @Input()
  ele?:PeriodicElement;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [this.ele];

  constructor() { }

  ngOnInit(): void {

  }

}
