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

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
