import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueGovernmentFormsComponent } from './unique-government-forms.component';

describe('UniqueGovernmentFormsComponent', () => {
  let component: UniqueGovernmentFormsComponent;
  let fixture: ComponentFixture<UniqueGovernmentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniqueGovernmentFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniqueGovernmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
