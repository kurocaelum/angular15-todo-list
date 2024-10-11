/*
Projeto referencia no git
https://github.com/troquatte/curso-angular-to-do-list?tab=readme-ov-file
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app-todo';
}
