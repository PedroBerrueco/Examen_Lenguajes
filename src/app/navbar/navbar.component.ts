import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  llamaGoogle(valor: string): void{
    window.open('https://www.google.com/search?q=' + valor);
  }
}
