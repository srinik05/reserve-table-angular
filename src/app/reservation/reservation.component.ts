import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from './reservation.model';
import { ReservationService } from './reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  showUserDetails: boolean = false;
  isReservationValid: boolean = false;
  reservationConfirmed: boolean = false;

 constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      noOfGuests: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      name : new FormControl(this.reservationForm.value.name),
      location : new FormControl(this.reservationForm.value.location),
      phone : new FormControl(this.reservationForm.value.phone),
      email : new FormControl(this.reservationForm.value.email),
      date : new FormControl(this.reservationForm.value.date),
      time : new FormControl(this.reservationForm.value.time),
      noOfGuests : new FormControl(this.reservationForm.value.noOfGuests)
    });
  }

  get name() {
    return this.reservationForm.get('name')!;
  }

  get location() {
    return this.reservationForm.get('location')!;
  }
  get phone() {
    return this.reservationForm.get('phone')!;
  }
  get email() {
    return this.reservationForm.get('email')!;
  }
  get date() {
    return this.reservationForm.get('date')!;
  }
  get time() {
    return this.reservationForm.get('time')!;
  }

  get noOfGuests(){
    return this.reservationForm.get('noOfGuests')!;
  }

 

  changeGuestCount(value: number) {
    const numGuestsControl = this.reservationForm.get('noOfGuests');
    if (numGuestsControl) {
      const currentGuests = numGuestsControl.value as number;
      const newGuests = currentGuests + value;
      numGuestsControl.setValue(newGuests);
    }
    this.validateReservation();
  }

  validateReservation() {
    this.isReservationValid = this.reservationForm.valid;
    
  }

  makeReservation() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      console.log(reservation)
      console.log(this.reservationForm.value)
      this.reservationService.saveReservation(this.reservationForm.value)
    .subscribe(
      () => {
        this.reservationConfirmed = true;

      },
      (error) => {
        console.error('Error saving reservation:', error);
      }
    );
  }
}
goBack() {
  this.reservationConfirmed = false;
  this.showUserDetails = false;
  window.location.reload(); 

}


}