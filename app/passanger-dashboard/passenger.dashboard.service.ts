import { toPromise } from 'rxjs/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Passenger } from '../passanger-dashboard/modules/passenger.interface/passenger.interface';
import 'rxjs/add/operator/toPromise'

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {

    }
    getPassengers(): Promise<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .toPromise()
            .then((res: Response) => res.json())
    }

    updatePassenger(passenger: Passenger): Promise<Passenger> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        })
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .toPromise()
            .then((res: Response) => res.json())
    }

    removePassenger(passenger: Passenger): Promise<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`, passenger).toPromise()
            .then((res: Response) => res.json())
    }

}