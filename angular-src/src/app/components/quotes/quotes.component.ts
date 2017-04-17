import { Component, OnInit } from '@angular/core';
import { Quote } from '../../classes/quote';
import { Tweet } from '../../classes/tweet';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  _unencodedTweet: string; // This is used to get the length of the entire data stream to determine if the createTweet() function needs to use twitter or twishort.
  _tweet: string; // Final composed tweet
  twitter_uri : string = "https://twitter.com/intent/tweet?text="; // URI for Twitter API we are using
  twishort_uri: string = "https://twishort.com/post?text=" // URI for twishort API
  hashtag: string = " #programming_quotes"; // hashtag that gets appended to each tweet

  constructor(
    private quotesService: QuotesService, // Imports the custom service we created
    private quote: Quote, // Imports Quote Class
    private tweet: Tweet // Imports Tweet Class
  ) { }

  ngOnInit() {
    this.showQuote(); // Runs show quote each time the page loads (important to get an initial quote when loading the page)
  }

  // ShowQuote is used to subscribe to the promise to get the quote and author and set these to global variables in the component
  showQuote() {
  this.quotesService.getQuote()
    .subscribe(data => {
        this.quote.quote = data.quote;
        this.quote.author = data.author;
    })
  }

  // Create Tweet handles the logic of putting the get request together to auto populate the tweet with the quote, author and hashtag
  createTweet() {
        this.tweet.quote = this.quote.quote
        this.tweet.encodedQuote = encodeURIComponent(this.quote.quote); // encodes the quote so you don't have unexpected results from special characters in the request
        this.tweet.hashtag = this.hashtag;
        this.tweet.encodedHashtag = encodeURIComponent(this.tweet.hashtag);
        this.tweet.author = this.quote.author;
        this.tweet.uri = this.twitter_uri;
        this._unencodedTweet = this.quote.quote + ' - ' + this.quote.author + this.tweet.hashtag;
        if(this._unencodedTweet.length < 140) { // Only post to twitter if character limit is not exceeded
        this._tweet = this.twitter_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
      }
      else {
        this._tweet = this.twishort_uri + this.tweet.encodedQuote + ' - ' + this.tweet.author + this.tweet.encodedHashtag;
      }
  }
}
