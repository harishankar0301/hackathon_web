import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  submitform(form) {

    console.log(form.value);
    this.http.post('http://localhost:3000/api/reset', { email: form.value.emailId }).subscribe(res => {
      alert("Mail sent!!");
    })


  }
}
