import { Component,  Input, ViewEncapsulation } from '@angular/core';
import { ProjectCard } from '../../app.component.models';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  encapsulation: ViewEncapsulation.None // Add this line

})
export class ProjectCardComponent {

  @Input({required: true}) project: ProjectCard = {} as ProjectCard;
  @Input({required: true}) index: number = 1;
}

