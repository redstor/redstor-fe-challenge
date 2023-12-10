import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  standalone: true,
  imports: [MatToolbarModule]
})
export class ShellComponent {

}
