import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title" *ngIf="data">
           Current Temperature in Toronto, Ontario
           is {{data.main.temp}} <span>&#8451;</span>
        </h1>
      </div>
    </div>
    </section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/image/weather.jpg') !important;
    background-size: cover;
    background-position: center center;
}

  `]
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private wapi: WeatherapiService) { }

  ngOnInit(): void {
    this.wapi.getdata()
    .subscribe(data => {console.log(data)
    this.data=data});
  };

}
