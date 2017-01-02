import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

<div class="app">
  <button (click)="handleClick(userName.value)">
        Get Value
  </button>
  <input type="text" #userName/>
      {{name}}
<div>`
})

export class AppComponent {
  name: string = 'Assaf'

  handleChange(value: string) {
    this.name = value;
    console.log(value);
  }
  handleClick(value: string) {
    console.log(value);
  }

}