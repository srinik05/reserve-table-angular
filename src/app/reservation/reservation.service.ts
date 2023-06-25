import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) {}

  saveReservation(reservation: Reservation): Observable<Reservation> {
    console.log(reservation);
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }
}
