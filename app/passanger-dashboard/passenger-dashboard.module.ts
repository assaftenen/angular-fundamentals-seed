import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//containers
import { PassengerDashboardComponent } from '../passanger-dashboard/containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'

//services
import { PassengerDashboardService } from './passenger.dashboard.service';


@NgModule({

declarations:[
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent

],
imports:[
CommonModule,
HttpModule

],
exports: [
    PassengerViewerComponent
    ],
providers:[
    PassengerDashboardService
]

})

export class PassangerDashBoardModule{

}