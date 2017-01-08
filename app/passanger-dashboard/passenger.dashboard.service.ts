import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Passenger } from '../passanger-dashboard/modules/passenger.interface/passenger.interface';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {

    }
    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((res: Response) => res.json())
            .catch((error:any)=> Observable.throw (error.json()))
            }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        })
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .map((res: Response) => res.json())
            .catch((error:any)=> Observable.throw (error.json()));
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`, passenger)
            .map((res: Response) => res.json())
            .catch((error:any)=> Observable.throw (error.json()));
    }

}