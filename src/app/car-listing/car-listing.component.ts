import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.css']
})
export class CarListingComponent implements OnInit {
  constructor(private http: HttpClient) { }

  carlist = [];
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/list').subscribe(res => {
      console.log(res);

      this.carlist = res['resp'];

    })

  }

  booking(){
    let modal = document.getElementById('bookingButton');
    modal.click();
  }


}
