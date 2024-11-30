import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../Common/Project';
import { CommonModule } from '@angular/common';
import { LinkLogoComponent } from '../link-logo/link-logo.component';
import { DataService } from '../../Shared/data.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LinkLogoComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  isDarkTheme: boolean = true;
  @Input() project!: Project;

  constructor(private readonly dataService: DataService){}

  ngOnInit(): void {
    this.dataService.isDarkTheme$.subscribe((e)=>{
      this.isDarkTheme = e;
    })
  }

}
