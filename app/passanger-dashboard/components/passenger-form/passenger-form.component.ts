import { PassengerDetailComponent } from './../passenger-detail/passenger-detail.component';
import { format } from 'url';
import { format } from 'util';
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
            [ngModel]="detail?.id">
            </div>

            <div>
            Passenger ID:
            <input 
            type="number"
            name="fullname"
            [ngModel]="detail?.name">
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
}
