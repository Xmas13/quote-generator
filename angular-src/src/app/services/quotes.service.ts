import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuotesService {

  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) { }

  // Uses the Http module to get a random quote from the outside api. It then maps it as JSON to be easily manipulated.
  getQuote() {
    return this.jsonp.request('http://quotes.stormconsultancy.co.uk/random.json?callback=JSONP_CALLBACK')
      .map(res => {
        return res.json();
      });
  }

}
