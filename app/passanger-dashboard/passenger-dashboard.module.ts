import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


//containers
import { PassengerDashboardComponent } from '../passanger-dashboard/containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
//services
import { PassengerDashboardService } from './passenger.dashboard.service';

const routes:Routes=[
    {path:'passenger',
     component:PassengerDashboardComponent}
    
]
@NgModule({

declarations:[
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent

],
imports:[
CommonModule,
HttpModule,
FormsModule,
RouterModule.forChild(routes)


],

providers:[
    PassengerDashboardService
]

})

export class PassangerDashBoardModule{

}