import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Configurations } from '../../Common/Configurations';
import { LinkLogoComponent } from '../../TemplateLibrary/link-logo/link-logo.component';
import { DataService } from '../../Shared/data.service';

@Component({
  selector: 'app-personal-info-section',
  standalone: true,
  imports: [CommonModule, LinkLogoComponent, MatButtonModule, MatDialogModule],
  templateUrl: './personal-info-section.component.html',
  styleUrl: './personal-info-section.component.css',
})
export class PersonalInfoSectionComponent implements OnInit {
  profileImageSrc!: string;
  socialInfo!: any;
  isDarkTheme: boolean = true;
  techStack: any;
  otherThemeColor!: string[];

  constructor(
    public dialog: MatDialog,
    private readonly dataService: DataService
  ) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.dataService.emitIsDarkTheme(this.isDarkTheme);
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AboutMeDialogContent, {
      width: '75vw',
      height: '100vh',
      enterAnimationDuration,
      exitAnimationDuration,
      hasBackdrop: true,
      backdropClass: 'bdrop',
    });
  }

  ngOnInit(): void {
    this.getProfileImageSrc();
    this.getSocialInfo();
    this.getTechStack();
    this.getOtherThemeColor();
  }

  getProfileImageSrc() {
    this.profileImageSrc = Configurations.profileImageSrc;
  }

  getSocialInfo() {
    this.socialInfo = Configurations.socialInfo;
  }

  getTechStack() {
    this.techStack = Configurations.techStack;
  }

  getOtherThemeColor() {
    this.otherThemeColor = Configurations.otherThemeColor;
  }
}

@Component({
  selector: 'about-me-dialog-content',
  templateUrl: './about-me-dialog-content.html',
  styleUrl: './about-me-dialog-content.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    CommonModule,
  ],
})
export class AboutMeDialogContent implements OnInit {
  isDarkTheme: boolean = true;
  techStack: any;
  experienceInfo!: any;

  constructor(public dialogRef: MatDialogRef<AboutMeDialogContent>, private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.getTechStack();
    this.getExperienceInfo();
    this.dataService.isDarkTheme$.subscribe((e) => {
      this.isDarkTheme = e;
    })
  }

  getTechStack() {
    this.techStack = Configurations.techStack;
  }


  getExperienceInfo() {
    this.experienceInfo = Configurations.experienceInfo;
  }
}
