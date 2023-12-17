import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnofficialLanguagesComponent } from './unofficial-languages.component';

describe('UnofficialLanguagesComponent', () => {
  let component: UnofficialLanguagesComponent;
  let fixture: ComponentFixture<UnofficialLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnofficialLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnofficialLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
