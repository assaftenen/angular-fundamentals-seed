import { PassengerDetailComponent } from './../passenger-detail/passenger-detail.component';
import { type } from 'os';
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
            Yes
            </label>
            </div>



           
            <div *ngIf="form.value.checkedIn">
            Check In date:
            <input 
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate">
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
    constructor() {
        
    }

toggleCheckedIn(checkedIn:boolean){
    if(checkedIn){
    this.detail.checkInDate = Date.now();
    }
}

}
