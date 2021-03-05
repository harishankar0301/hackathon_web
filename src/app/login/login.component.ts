import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  submitform(form) {
  
    console.log(form.value);
    this.http.post('http://localhost:3000/api/loginv', { email: form.value.emailId, password: form.value.password }).subscribe(res => {
      console.log(res);
      if (res['resp'] == "AUTHORIZED") {
        this.router.navigate([`/view`]);

      } else {
        alert("Not authorized");
      }
    })


  }
}
