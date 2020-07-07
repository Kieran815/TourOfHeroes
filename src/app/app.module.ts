import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import `NgModel` via `@angular/forms`
import { FormsModule } from '@angular/forms';
//import `HeroesComponent`
import { HeroesComponent } from './heroes/heroes.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// app will make requests to and receive responses from the HttpClient without knowing that the In-memory Web API is intercepting those requests
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // HttpClient is tool for communication with remote servers
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses. Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
