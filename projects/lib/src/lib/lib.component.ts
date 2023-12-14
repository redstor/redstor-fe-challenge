import { Component } from '@angular/core';

@Component({
  selector: 'external-lib',
  standalone: true,
  imports: [],
  template: `
    <p>lib works!</p>
  `,
  styles: ``
})
export class LibComponent {}
