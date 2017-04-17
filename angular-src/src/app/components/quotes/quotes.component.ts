import { Component, OnInit } from '@angular/core';
import { Quote } from '../../classes/quote';
import { Tweet } from '../../classes/tweet';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  providers: [Quote, Tweet]
})
export class QuotesComponent implements OnInit {
  _unencodedTweet: string;
  _tweet: string;
  twitter_uri : string = "https://twitter.com/intent/tweet?text=";
  twishort_uri: string = "https://twishort.com/post?text="
  hashtag: string = " #programming_quotes";

  constructor(
    private quote: Quote,
    private quotesService: QuotesService,
    private tweet: Tweet
  ) { }

  ngOnInit() {
    this.showQuote();
  }

  showQuote() {
  this.quotesService.getQuote()
    .subscribe(data => {
        this.quote.quote = data.quote;
        this.quote.author = data.author;
    })
  }
  createTweet() {
        this.tweet.quote = this.quote.quote
        this.tweet.encodedQuote = encodeURIComponent(this.quote.quote);
        this.tweet.hashtag = this.hashtag;
        this.tweet.encodedHashtag = encodeURIComponent(this.tweet.hashtag);
        this.tweet.author = this.quote.author;
        this.tweet.uri = this.twitter_uri;
        this._unencodedTweet = this.quote.quote + ' - ' + this.quote.author + this.tweet.hashtag;
        if(this._unencodedTweet.length < 140) {
        this._tweet = this.twitter_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
      }
      else {
        this._tweet = this.twishort_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
      }
  }
}
