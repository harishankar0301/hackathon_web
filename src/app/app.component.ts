import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
    
  }
  test = "";
  title = 'hackathon-acm';
  ngOnInit() {
    this.http.get('http://localhost:3000/test').subscribe(res => {
      console.log(res);
      this.test = res['resp'];
    })
  }
  
  
}
