import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Home';

  home() {
    this.title = 'Home';
  }

  form() {
    this.title = 'Form';
  }

  clients() {
    this.title = 'Clients';
  }
}
