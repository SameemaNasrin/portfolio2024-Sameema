import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../TemplateLibrary/project-card/project-card.component';
import { Configurations } from '../../Common/Configurations';
import { Project } from '../../Common/Project';
import { DataService } from '../../Shared/data.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    MatTabsModule,
  ],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css',
})
export class ProjectSectionComponent implements OnInit {
  isDarkTheme: boolean = true;
  projects!: Project[];
  selectedTabIndex = 0;

  setTabIndex(index: number) {
    this.selectedTabIndex = index;
  }
  
  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isDarkTheme$.subscribe((e) => {
      this.isDarkTheme = e;
    });

    this.getProjects();
  }

  getProjects() {
    this.projects = Configurations.projects;
  }
}
