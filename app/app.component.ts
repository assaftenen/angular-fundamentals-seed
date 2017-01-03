import { NgIf } from '@angular/common/src/directives/ng_if';
import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
<div class="app">
  <h3>AirLine Pasanger</h3>
    <ul>
      <li *ngFor="let passanger of pasangers;let i =index" >
        {{i+1}} {{passanger.name}}
      </li>
    </ul>
</div>`
})

export class AppComponent {
  pasangers: Pasanger[] = [
    {
      name: "Assaf",
      id: 1,
      someProparty: true
    },
    {
      name: "Adi",
      id: 2,
      someProparty: true
    },
    {
      name: "Itamar",
      id: 3,
      someProparty: true
    }

  ]

  handleInput(value: string) {
   // this.name = value;
    console.log(value);
  }
  handleClick(value: string) {
    console.log(value);
  }

}

interface Pasanger {
name: string;
id: number;
someProparty : boolean
}