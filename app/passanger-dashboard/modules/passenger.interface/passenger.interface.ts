export interface Passenger  {
  name: string;
  id: number;
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}


export interface Child{
  name: string,
  age: number
}