import { Passenger } from '../../modules/passenger.interface/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector:'passenger-count',
    template:`
<div>
<h3>AirLine Pasanger</h3>
</div>
<div>
Total checkedIn : {{checkedInCount()}}/{{ items?.length }}
</div>

    `
})

export class PassengerCountComponent{
@Input()
items: Passenger[];

checkedInCount(): number{
  
if (!this.items) return;
return this.items.filter((item:Passenger)=>item.checkedIn).length
}

}



