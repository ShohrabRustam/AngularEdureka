import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stocks1',
  templateUrl: './stocks2.component.html',
  styleUrls: ['./stocks2.component.css']
})
export class Stocks1Component implements OnInit {
  public stock1Records:IStockDetails[]
  constructor() {
     this.stock1Records = [];
   }

  public ngOnInit(): void {
    this.stock1Records = [{
      id: 1,
      stockName: "BioScrip, Inc.",
      stockMarketCap: 306.09,
      stockMSector: "Health Care",
      releaseDate: "01/06/2021",
      symbol: "BIOS",
      buyPrice:100
    }, {
      id: 2,
      stockName: "RiceBran Technologies",
      stockMarketCap: 9.62,
      stockMSector: "Consumer Non-Durables",
      releaseDate: "11/05/2021",
      symbol: "RIBT",
      buyPrice:200
    }, {
      id: 3,
      stockName: "John Hancock Investors Trust",
      stockMarketCap: 152.46,
      stockMSector: "Health Care",
      releaseDate: "12/05/2021",
      symbol: "JHI",
      buyPrice:300
    }, {
      id: 4,
      stockName: "Yatra Online, Inc.",
      stockMarketCap: 398.74,
      stockMSector: "Consumer Services",
      releaseDate: "10/03/2021",
      symbol: "YTRA",
      buyPrice:400
    }, {
      id: 5,
      stockName: "Restaurant Brands International Inc.",
      stockMarketCap: 14.34,
      stockMSector: "Consumer Services",
      releaseDate: "06/07/2021",
      symbol: "QSR",
      buyPrice:500
    }]
  }

}
