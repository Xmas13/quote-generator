import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  constructor(
    private http: Http,
  ) { }

  getQuote() {
    return this.http.get('http://quotes.stormconsultancy.co.uk/random.json')
      .map(res => res.json());
  }

}
