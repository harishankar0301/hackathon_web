import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor() { 
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem('info'))){
      this.isLoggedIn = true;
    }
  }

}
