import { NgIf } from '@angular/common/src/directives/ng_if';
import { NgModel } from '@angular/forms/src/directives';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
<div class="app">
  <passenger-dashboard></passenger-dashboard>
</div>`
})


export class AppComponent {
 

}



