import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
FormsModule

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}