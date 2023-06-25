import { Time } from "@angular/common";

export interface Reservation {
    id: string;
    name: string;
    location: string;
    phone: string;
    email: string;
    date: Date;
    time: Time;
    numGuests: number;
  }
  