import { Passenger } from '../passanger-dashboard/modules/passenger.interface/passenger.interface';
export class PassengerDashboardService{
    constructor(){}
    getPassengers(): Passenger []{
        return [{
      name: "Assaf",
      id: 1,
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Itamar', age: 2.5 }, { name: 'Mika', age: 0.8 }]
    },
    {
      name: "Adi",
      id: 2,
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Itamar', age: 2.5 }, { name: 'Mika', age: 0.8 }]

    },
    {
      name: "Itamar",
      id: 3,
      checkedIn: false,
      checkInDate: null,
      children: null
    },
    {
      name: "Mika",
      id: 4,
      checkedIn: true,
      checkInDate: 1490842000000,
      children: null


    }

  ];
    }

}