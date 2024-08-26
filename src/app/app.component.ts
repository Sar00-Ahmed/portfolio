import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./structure/navbar/navbar.component";
import { ProjectCardComponent } from "./playground/project-card/project-card.component";
import { ProjectCard } from './app.component.models';
import { HeroSectionComponent } from "./playground/hero-section/hero-section.component";
import { FooterComponent } from "./structure/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProjectCardComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
