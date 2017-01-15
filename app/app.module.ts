import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassangerDashBoardModule } from './passanger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes:Routes = [
{path:'', component: HomeComponent, pathMatch:'full'},
  {path:'**', component: NotFoundComponent, pathMatch:'full'}

]

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports:[
    //angular Module
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash: true} ),

   //custom Module
    PassangerDashBoardModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}