import { Baggage } from './../../modules/baggage.interface';
import { NgForm, NgModel } from '@angular/forms/src/directives';
import { Passenger } from '../../modules/passenger.interface/passenger.interface';


import { Component, Input } from '@angular/core';

@Component({
selector: 'passenger-form',
styleUrls:['passenger-form.component.scss'],
template: `<form #form ="ngForm" novalidate>
                {{detail | json}}
            <div>
            Passenger name:
            <input 
            type="text"
            name="id"
            [ngModel]="detail?.name">
            </div>

            <div>
            Passenger ID:
            <input 
            type="number"
            name="fullname"
            [ngModel]="detail?.id">
            </div>

            <div>
            <label>
            <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)"
            >
            </label>
            </div>

            <div *ngIf="form.value.checkedIn">
            Check In date:
            <input 
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate">
            </div>  

            <div>
            Laggage:
            <select
            name="baggage"
            [ngModel]="detail?.baggage">
            <option *ngFor = "let item of baggage"
            [value]="item.key"
            [selected]="item.key===detail?.baggage">
            {{item.value}}
           <!--we can use as well at ngValue instead of [value] and [seledted]--> 
            </option>
            </select>
            </div>


            {{form.value | json}}
        </form>`

})

export /**
 * 
 */
class PassengerFormComponent {
    @Input()
    detail:Passenger
    
    baggage:Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hand baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }]


toggleCheckedIn(checkedIn:boolean){
    if(checkedIn){
    this.detail.checkInDate = Date.now();
    }
}

}
