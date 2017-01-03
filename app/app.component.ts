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
        {{ i+1 }}:{{ passanger.name }}
        <p>{{ passanger | json }}</p>
        <div>
        checked in date: {{ passanger.checkInDate? (passanger.checkInDate | date: 'yMMMMd' | uppercase) : "No" }}
        </div>
        <div>
        Children: {{passanger.children?.length || 0}}
        </div>
      </li>
    </ul>
</div>`
})


export class AppComponent {
  pasangers: Pasanger[] = [
    {
      name: "Assaf",
      id: 1,
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Itamar', age: 2.5 }, { name: 'Mika', age: 0.8 }]
    },
    {
      name: "Adi",
      id: 2,
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Itamar', age: 2.5 }, { name: 'Mika', age: 0.8 }]

    },
    {
      name: "Itamar",
      id: 3,
      checkedIn: false,
      checkInDate: null,
      children: null
    },
    {
      name: "Mika",
      id: 4,
      checkedIn: true,
      checkInDate: 1490842000000,
      children: null


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

interface Pasanger  {
  name: string;
  id: number;
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}


interface Child{
  name: string,
  age: number
}

