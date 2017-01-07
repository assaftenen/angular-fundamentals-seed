import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//containers
import { PassengerDashboardComponent } from '../passanger-dashboard/containers/passenger-dashboard/passenger-dashboard.component'
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
//services
import { PassengerDashboardService } from './passenger.dashboard.service';


@NgModule({

declarations:[
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent

],
imports:[
CommonModule,
HttpModule

],
exports: [PassengerDashboardComponent],
providers:[
    PassengerDashboardService
]

})

export class PassangerDashBoardModule{

}