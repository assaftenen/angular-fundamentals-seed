import {  Component } from '@angular/core';
import { Passenger  } from '../../modules/passenger.interface/passenger.interface'

@Component({
 selector: 'passenger-dashboard',
 styleUrls:['passenger-dashboard.component.scss'],
 template:`
 <div>
 <h3>AirLine Pasanger</h3>
    <ul>
      <li *ngFor="let passanger of pasangers;let i =index" >
      <span class="status"
      [class.checked-in]="passanger.checkedIn"></span>
        {{ i+1 }}:{{ passanger.name }}
       
        <div>
        checked in date: {{ passanger.checkInDate? (passanger.checkInDate | date: 'yMMMMd' | uppercase) : "No" }}
        </div>
        <div>
        Children: {{passanger.children?.length || 0}}
        </div>
      </li>
    </ul>
 
 <div>`   
})

export class PassengerDashboardComponent{
pasangers: Passenger[] = [
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

}