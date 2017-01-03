import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassangerDashBoardModule } from './passanger-dashboard/passanger-dashboard.module';

import { AppComponent } from './app.component';
FormsModule

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    //angular Module
    BrowserModule,
    CommonModule,
    FormsModule,

   //custom Module
    PassangerDashBoardModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}