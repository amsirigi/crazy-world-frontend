import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSpokenLanguageByCodeComponent } from './max-spoken-language-by-code.component';

describe('MaxSpokenLanguageByCodeComponent', () => {
  let component: MaxSpokenLanguageByCodeComponent;
  let fixture: ComponentFixture<MaxSpokenLanguageByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxSpokenLanguageByCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxSpokenLanguageByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
