import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    private LOGO = require("../../assets/CFox_logo.jpg");
    private current_link: string;
    private link_1: string;
    private link_2: string;

  constructor(private router: Router) { 

  }

  ngOnInit() {
    if (this.router.url == '/Projects') {
      this.current_link = 'Projects';
      this.link_1 = 'Contact';
      this.link_2 = 'About';
    }
    else if (this.router.url == '/About') {
      this.current_link = 'About';
      this.link_1 = 'Contact';
      this.link_2 = 'Projects';
    }
    else {
      this.current_link = 'Contact';
      this.link_1 = 'About';
      this.link_2 = 'Projects';
    }
  }

  onSelect(routeValue: string){
    this.router.navigate(['/'+routeValue])
  }
}
