import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user:any;
  public isUserEditable:boolean;

  constructor() {
    this.user = {};
    this.isUserEditable = false;
  }

  public ngOnInit(): void {

    this.user = {
      name: "max",
      age: 32,
      address:{
        city:"bakerstreet",
        pincode:123123
      }
    }
  }

  public editUser():void{
    this.isUserEditable = true;
  }

  public updateUser():void{
    this.isUserEditable = false;
  }


}
