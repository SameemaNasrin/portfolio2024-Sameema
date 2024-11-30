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
  skillsLogosSrc1!: string[];
  skillsLogosSrc2!: string[];
  isDarkTheme: boolean = true;
  socialInfo: any;
  otherThemeColor!: string[];

  constructor(public dialog: MatDialog, private readonly dataService: DataService) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.dataService.emitIsDarkTheme(this.isDarkTheme)
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
    this.getSkillsLogosSrc1();
    this.getSkillsLogosSrc2();
    this.getSocialInfo();
    this.getOtherThemeColor();
  }

  getProfileImageSrc() {
    this.profileImageSrc = Configurations.profileImageSrc;
  }

  getSkillsLogosSrc1() {
    this.skillsLogosSrc1 = Configurations.skillsLogosSrc1;
  }
  
  getSkillsLogosSrc2() {
    this.skillsLogosSrc2 = Configurations.skillsLogosSrc1;
  }

  getSocialInfo() {
    this.socialInfo = Configurations.socialInfo;
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
  skillsLogosSrc!: string[];
  experienceInfo!: any;

  constructor(public dialogRef: MatDialogRef<AboutMeDialogContent>) {}

  ngOnInit(): void {
    this.getSkillsLogosSrc();
    this.getSkillsLogosSrc();
    this.getExperienceInfo();
  }

  getSkillsLogosSrc() {
    this.skillsLogosSrc = Configurations.skillsLogosSrc;
  }

  getExperienceInfo() {
    this.experienceInfo = Configurations.experienceInfo;
  }
}
