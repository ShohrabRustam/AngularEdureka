import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public title:string;
  public count: number;
  public isVisible: boolean;
  public user: any;
  public message: string;
  public test:string | null;
  public url :string;


  constructor() {
    this.title = '';
    this.count = 0;
    this.user = {};
    this.isVisible = false;
    this.message = '';
    this.test= null;
    this.url= '';
   }

   public changeTitle():void{
      this.title= "change the title";
   }

   public increseCount():void{

   }

  public ngOnInit(): void {
    this.title = "Stock Details";
    this.test ='123';
    this.user = {
      name: "max",
      age: 32,
      address:{
        city:"bakerstreet",
        pincode:123123
      }
    }
    // user.name  dot notation
    // user['name'] [] notation
    this.url = "https://google.com";
  }

  //method for print the method in html page
  public getStockInfo():string{
    return 'ABC stock';
  }

}
