import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherapiService {
  apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=e0018144c8470918ff8b8f4ff682caeb';
  constructor(private http: HttpClient){}
  getdata()
  {
    return this.http.get(`${this.apiURL}`);
  }
}
