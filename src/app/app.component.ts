import { Component } from '@angular/core';
import { copyFileSync } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})

export class AppComponent {
  title = 'Registeration Form';
  displayName = ''
  displayAddress = ''
  displayContact = ''
  displayEmail = ''

  getValue(name: string, address: string, contact: string, email: string) {
    this.displayName = name;
    this.displayContact = contact;
    this.displayAddress = address;
    this.displayEmail = email;

  }
}
