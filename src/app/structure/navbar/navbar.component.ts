import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {
  navItems: navItem[] = [
    { title: 'Home', link: 'home' },
    { title: 'About', link: '/about' },
    { title: 'playground', link: 'playground'},
    { title: 'Contact', link: '/contact' }
  ];

}

interface navItem {
  title: string;
  link: string;
}
