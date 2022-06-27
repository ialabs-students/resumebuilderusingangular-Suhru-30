import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedResumeComponent } from './generated-resume.component';

describe('GeneratedResumeComponent', () => {
  let component: GeneratedResumeComponent;
  let fixture: ComponentFixture<GeneratedResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
