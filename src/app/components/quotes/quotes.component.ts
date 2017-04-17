import { Component, OnInit } from '@angular/core';
import { Quote } from '../../classes/quote';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  providers: [Quote]
})
export class QuotesComponent implements OnInit {

  constructor(
    private quote: Quote,
    private quotesService : QuotesService
  ) { }

  ngOnInit() {
    this.showQuote();
  }

  showQuote() {
  this.quotesService.getQuote()
    .subscribe(data => {
        console.log(data);
        this.quote.quote = data.quote;
        this.quote.author = data.author;
    })
  }
}
