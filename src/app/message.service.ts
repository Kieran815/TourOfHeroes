// create injectable service (manages state)
import { Injectable } from '@angular/core';

// select where to inject service (`root` makes service available anywhere)
@Injectable({
  providedIn: 'root'
})

// create service class
export class MessageService {

  // array of all messages
  messages: string[] = [];

  // add `message` to `messages` array
  add(message: string) {
    this.messages.push(message);
  }

  // clears `messages` array
  clear() {
    this.messages = [];
  }

}

// injected into `HeroService`
