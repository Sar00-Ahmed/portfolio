import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  title: string = ' "Within this series of paintings lies a forgotten tapestry—a woven memory of childhood. I delved into the depths, unearthing treasures not of mere images but of feelings. The colors, once vibrant as laughter, now carry the weight of years. Imagination becomes my brush, and with each stroke, I pull those buried emotions to the surface. For what is art if not a bridge to our innermost selves?"';
}
