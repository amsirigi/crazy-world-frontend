import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueLanguagesComponent } from './unique-languages.component';

describe('UniqueLanguagesComponent', () => {
  let component: UniqueLanguagesComponent;
  let fixture: ComponentFixture<UniqueLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniqueLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniqueLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
