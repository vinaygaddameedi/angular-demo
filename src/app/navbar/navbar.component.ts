import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuActive = false;

  constructor() { }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  ngOnInit(): void {
  }

}
