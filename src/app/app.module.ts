import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { BasketComponent } from './basket/basket.component';

import { FormsModule } from '@angular/forms';
import { CheckBoxComponent } from './check-box/check-box.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    BasketComponent,
    CheckBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
