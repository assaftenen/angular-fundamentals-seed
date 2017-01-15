import { ActivatedRoute, Params, Router } from '@angular/router';
import { Passenger } from '../../modules/passenger.interface/passenger.interface';
import { PassengerDashboardService } from '../../passenger.dashboard.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap'



@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `<div>
            <button (click)="goBack()">&lsaquo; Go back</button>
            <passenger-form
            [detail]="passenger"
            (update)="onUpdatePassenger($event)">
            </passenger-form>
            </div>`

})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService) {

    }
    ngOnInit() {
        this.route.params
        .switchMap((data:Passenger)=>this.passengerService.getPassenger(data.id))
        .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event) {
        this.passengerService
        .updatePassenger(event)
        .subscribe((data: Passenger)=>this.passenger = data)

    }
    goBack(){
       this.router.navigate(['/passengers']) 
    }
}