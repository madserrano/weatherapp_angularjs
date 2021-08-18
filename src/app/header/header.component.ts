import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class ="navbar is-dark">
        <!--- logo --->
        <div class="navbar-brand">
            <a class="navbar-item" routerLink="/">
                <!--- logo goes here --->
                <img src="/assets/image/Team_Rocket_Logo.jpg">
            </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" routerLink="/">Home</a>
            <a class="navbar-item" routerLink="/contact">Contact Us</a>
            <a class="navbar-item" routerLink="/about">About Us</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" >{{ dateObj | date:'YYYY-MM-dd HH:mm:ss' }}</a>
          </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  dateObj =  new Date(); 
  constructor(){
    setInterval(() => {
      this.dateObj = new Date()
    }, 1000)
  }

  ngOnInit(): void {
  }

}
