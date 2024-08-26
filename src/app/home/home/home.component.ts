import { Component } from '@angular/core';
import { NavbarComponent } from '../../structure/navbar/navbar.component';
import { HomeHeroComponent } from "../home-hero/home-hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
