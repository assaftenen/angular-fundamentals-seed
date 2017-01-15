import { HomeComponent } from './home.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
<div class="app">

<a routerLink="/">
  Home
</a>
<a routerLink="/oops">
  404
</a>
  <router-outlet></router-outlet>
</div>`
})


export class AppComponent {
 

}



