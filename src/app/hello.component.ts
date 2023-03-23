import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloComponent  {
  @Input() name: string;
}
