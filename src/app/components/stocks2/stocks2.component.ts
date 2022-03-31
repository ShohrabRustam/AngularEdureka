import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stocks2',
  templateUrl: './stocks2.component.html',
  styleUrls: ['./stocks2.component.css']
})
export class Stocks2Component implements OnInit {
  public stock2Records:IStockDetails[];

  constructor() {
    this.stock2Records= [];
   }

  ngOnInit(): void {
  }

}
