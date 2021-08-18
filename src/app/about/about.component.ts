import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">About Us!</h1>
        </div>
		
      </div>
    </section>
    <section class="section">
	  <div class="container">
	    We are Team Rocket and our mission is to build this simple web app using AngularJS, integrated with Open Weather map API.
	  </div>
	</section>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
