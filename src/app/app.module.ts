import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [HelloComponent]
})
export class AppModule { 
  constructor(injector:Injector) {
    const hello = createCustomElement(HelloComponent, { injector }) 
    customElements.define('h-c', hello)
  }

  ngDoBootStrap() {

  }
}
