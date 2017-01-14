import { Passenger } from '../../modules/passenger.interface/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
selector: 'passenger-form',
styleUrls:['passenger-form.component.scss'],
template: `<form>
            <div>
            Form!
            {{detail | json}}
            </div>
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
