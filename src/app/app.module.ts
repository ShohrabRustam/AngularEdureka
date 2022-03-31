import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { UserComponent } from './components/user/user.component';
import { Stocks2Component } from './components/stocks2/stocks2.component';
import { Stocks3Component } from './components/stocks3/stocks3.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Stocks1Component } from './components/stocks1/stocks1.component';

@NgModule({
  declarations:
  [
    AppComponent,
    StocksComponent,
    UserComponent,
    Stocks2Component,
    Stocks3Component,
    ParentComponent,
    ChildComponent,
    Stocks1Component
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

