import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSpokenLanguagesComponent } from './max-spoken-languages.component';

describe('MaxSpokenLanguagesComponent', () => {
  let component: MaxSpokenLanguagesComponent;
  let fixture: ComponentFixture<MaxSpokenLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxSpokenLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxSpokenLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
