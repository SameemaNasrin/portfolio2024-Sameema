import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLogoComponent } from './link-logo.component';

describe('LinkLogoComponent', () => {
  let component: LinkLogoComponent;
  let fixture: ComponentFixture<LinkLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
