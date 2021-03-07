import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem('info'))){
      this.isLoggedIn = true;
    }
  }
  logout() {
    this.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigate([`/`]);

  }

}
