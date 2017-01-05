import {  Component, OnInit } from '@angular/core';
import { Passenger  } from '../../modules/passenger.interface/passenger.interface'

@Component({
 selector: 'passenger-dashboard',
 styleUrls:['passenger-dashboard.component.scss'],
 template:`
 <div>
    <passenger-count
      [items]="passengers">
    </passenger-count>
    <passenger-detail
      *ngFor= "let passenger of passengers;"
            [detail]="passenger"
            (remove) = "handleRemove($event);"
            (edit) = "handleEdit($event);">
      </passenger-detail>
 <div>`   
})

export class PassengerDashboardComponent implements OnInit{
passengers: Passenger[];
ngOnInit(){
   this.passengers = [{
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

handleRemove(event: Passenger){
this.passengers = this.passengers.filter((passenger:Passenger )=>passenger.id !== event.id)}


handleEdit(event:Passenger){
this.passengers= this.passengers.map((passenger: Passenger)=>{
  if(passenger.id===event.id){
    passenger = Object.assign({}, passenger, event);
  }
  return passenger;
});
console.log(this.passengers);
}
  
}