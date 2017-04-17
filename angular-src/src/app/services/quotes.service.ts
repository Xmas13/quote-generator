import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  constructor(
    private http: Http,
  ) { }

  // Uses the Http module to get a random quote from the outside api. It then maps it as JSON to be easily manipulated.
  getQuote() {
    return this.http.get('https://quotes.stormconsultancy.co.uk/random.json')
      .map(res => res.json());
  }

}
