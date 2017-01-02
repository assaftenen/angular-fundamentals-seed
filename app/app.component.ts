import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
selector: 'app-root',
styleUrls:['app.component.scss'],
template: `

<div class="app">
<button>
Change Name
</button>
<input 
type="text"
[ngModel]="name"
(ngModelChange)="handleChange($event)"/>

<input 
type="text"
[(ngModel)]="name"/>

{{name}}
<div>`
})

export class AppComponent{
name:string = 'Assaf'

handleChange(value: string) {
this.name = value;
  console.log(value);
}

}