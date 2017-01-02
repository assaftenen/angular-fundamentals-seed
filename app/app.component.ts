import { NgIf } from '@angular/common/src/directives/ng_if';
import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

<div class="app">
  
  <input type="text" [value]="name"
  (input)="handleInput($event.target.value);"/>

      <div *ngIf ="name.length>2">
       Searching for...  {{name}}
      </div>

<template [ngIf] ="name.length>2">
       Searching for...  {{name}}
      </template>

</div>`
})

export class AppComponent {
  name: string = ''

  handleInput(value: string) {
    this.name = value;
    console.log(value);
  }
  handleClick(value: string) {
    console.log(value);
  }

}