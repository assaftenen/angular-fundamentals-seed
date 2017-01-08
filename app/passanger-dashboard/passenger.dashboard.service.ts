import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Passenger } from '../passanger-dashboard/modules/passenger.interface/passenger.interface';
import 'rxjs/add/operator/map'

const PASSENGER_API: string='/api/passengers';

@Injectable()
export class PassengerDashboardService{
    constructor(private http :Http){
       
    }
    getPassengers():Observable<Passenger []> {
        return this.http
        .get(PASSENGER_API)
        .map((res: Response)=>res.json())
    }

}