import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialLanguagesComponent } from './official-languages.component';

describe('OfficialLanguagesComponent', () => {
  let component: OfficialLanguagesComponent;
  let fixture: ComponentFixture<OfficialLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficialLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficialLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
