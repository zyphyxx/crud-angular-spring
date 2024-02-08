import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './componets/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent],

  template: `

    <h1>Curso de Angular</h1>
    <app-new-component />

`
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
