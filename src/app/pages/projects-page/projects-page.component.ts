import { Component } from '@angular/core';
import { ProjectsData, projectsPageSpec } from 'src/data/projects';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  data:projectsPageSpec = ProjectsData
}
