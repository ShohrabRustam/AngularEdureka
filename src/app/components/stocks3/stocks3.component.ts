import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stocks3',
  templateUrl: './stocks3.component.html',
  styleUrls: ['./stocks3.component.css']
})
export class Stocks3Component implements OnInit {
  public stock3Records:IStockDetails[];

  constructor() {
    this.stock3Records=[];
  }

  ngOnInit(): void {

  }

}
