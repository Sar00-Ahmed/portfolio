import { Component } from '@angular/core';
import { NavbarComponent } from "../../structure/navbar/navbar.component";
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProjectCard } from '../../app.component.models';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [NavbarComponent, ProjectCardComponent, HeroSectionComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  projects:ProjectCard[] = [
    {
    title: "Cotton Candy",
    description: `What if <span class="highlight">cotton candies</span> and <span class="highlight">clouds</span> were kin? Their <span class="highlight">softness</span>, spun from the same celestial thread, whispers of sugar-spun dreams. The clouds, billowing and weightless, cradle the <span class="highlight">sun’s warmth.</span> And oh, the cotton candies—fluffy confections—hold the laughter of children, their <span class="highlight">sticky fingers</span> reaching for the sky. Perhaps, just perhaps, they share a giggle, a wink.`,
    link: "https://www.behance.net/gallery/195773207/2024-Illustration-Highlights/modules/1108238161",
    image: "assets/images/clouds2.jpg",
    },
    {
      title: "Toy Box",
      description: `In the stillness of a room, but it is not still for this little child. Shadows pulse with hidden hues, and every corner holds a secret. There, on the bed, a heart—painted by invisible hands—beats in rhythm with Mother’s love. A ball rests, half-forgotten, waiting for gravity to play its game. And oh, everything—The wardrobe that won me many hide and seeks, the bin swings mysteriously, and Mother’s shawl transforms into a hero’s cape at night. —is a potential toy, a universe waiting to unfold.`,
      link: "https://www.artstation.com/artwork/3oZz9",
      image: "assets/images/lost_memories.jpg",
    },

    {
      title: "Star Factory",
      description: `In the quiet of their slumber, they dream of an enchanted garden where moonflowers bloom. A castle stands sentinel, its turrets kissed by moonlight, and secret passages winding through ancient stones. Mysterious light flicker—a dance of fireflies or perhaps forgotten fairies—igniting cat-like curiosity.  A star factory hums, weaving constellations from moon dust threads. `,
      link: "https://www.artstation.com/artwork/3oZz9",
      image: "assets/images/starFactory.jpg",
    },

    {
      title: "Starfall",
      description: `Indeed, the inner workings of a star factory remains a cosmic mystery.
Picture this: within its celestial walls, moon dust filters through crystalline waterfalls, casting iridescent reflections on its waterfalls—a liquid luminescence. Not mere hydrogen and oxygen, but something ethereal. Starlight infinitely reflecting within its droplets each etching the memory of constellations in its timeless stream. The water’s purity transcends earthly comprehension. It glows—softly, like forgotten wishes. And when a star ignites with a blue glow, its light spills into the cosmic void, painting galaxies.
So yes, wonder. Wonder about the star factory—a forge where dreams become luminous reality. `,
      link: "https://www.artstation.com/artwork/3oZz9",
      image: "assets/images/starfall.jpg",
    },

    {
      title: "Lost Memories",
      description: `Upon waking, the child clings to the fading wisps of that celestial dream. The star factory—their secret passage to infinity—lingers like moon dust on their fingertips.

But reality tugs, heavy as a black hole. What secrets did the factory hold? Could they have risen with the stars after their creation? Or perhaps, forever sat in that enchanted forest, watching them twinkle from afar. Alas, the adventure dissolved into void, leaving only the ache of uncharted realms. `,
      link: "https://www.artstation.com/artwork/3oZz9",
      image: "assets/images/lost_memories_blues_darker.jpg",
    },

    {
      title: "A Rainy Day",
      description: "Beyond the glass, raindrops tap-dance on the windowpane. The world outside wears a watery veil, and the child’s heart flutters with longing. Each droplet holds a secret—a promise of adventure. Oh, how the child longs to dash outside, twirl in the rain, and become one with the silver drops! But alas, Mother’s worry wraps around like a cozy shawl, whispering of chills and sniffles.",
      link: "https://www.artstation.com/artwork/3oZz9",
      image: "assets/images/windowflower.jpg",
    }
  ]
}
