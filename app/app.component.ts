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
      <span class="status"
      [class.checked-in]="passanger.checkedIn"></span>
        {{i+1}}:{{passanger.name}}
      </li>
    </ul>

      <h3>AirLine Pasanger</h3>
    <ul>
      <li *ngFor="let passanger of pasangers;let i =index" >
      <span class="status"
        [ngClass]="{'checked-in': passanger.checkedIn,
                  'checked-out': !passanger.checkedIn}">
      </span>
        {{i+1}}:{{passanger.name}}
      </li>
    </ul>
</div>`
})

export class AppComponent {
  pasangers: Pasanger[] = [
    {
      name: "Assaf",
      id: 1,
      checkedIn: true
    },
    {
      name: "Adi",
      id: 2,
      checkedIn: false
    },
    {
      name: "Itamar",
      id: 3,
      checkedIn: false
    },
    {
      name: "Mika",
      id: 4,
      checkedIn: true
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
  checkedIn: boolean
}