import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';

import { QuotesService } from './services/quotes.service';

import { Quote } from './classes/quote';
import { Tweet } from './classes/tweet';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [QuotesService, Quote, Tweet],
  bootstrap: [AppComponent]
})
export class AppModule { }
