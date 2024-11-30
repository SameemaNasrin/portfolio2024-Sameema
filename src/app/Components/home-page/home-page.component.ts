import { Component, OnInit } from '@angular/core';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { PersonalInfoSectionComponent } from '../personal-info-section/personal-info-section.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Shared/data.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProjectSectionComponent, PersonalInfoSectionComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  isDarkTheme: boolean = true;

  constructor(private readonly dataService: DataService){}

  ngOnInit(): void {
    this.dataService.isDarkTheme$.subscribe((e)=>{
      this.isDarkTheme = e;
    })
  }



}
