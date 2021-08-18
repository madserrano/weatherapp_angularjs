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
    <section class="section">
    <div>
      <h3 class="title">Group Members:</h3>
    </div>
    <div class="content">
      <ul>
        <li class="subtitle">Ajay Dahiya <a href="mailto:C0783939@mylambton.ca" class="icon">📧</a></li>
        <li class="subtitle">Akshita Khatri <a href="mailto:C0785493@mylambton.ca"class="icon">📧</a></li>
        <li class="subtitle">Angelica Serrano <a href="mailto:C0785370@mylambton.ca"class="icon">📧</a></li>
        <li class="subtitle">Jonatas Aguiar <a href="mailto:C0790419@mylambton.ca"class="icon">📧</a></li>
        <li class="subtitle">Kuldeep Singh <a href="mailto:C0790301@mylambton.ca"class="icon">📧</a></li>
      </ul>
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
