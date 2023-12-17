import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionLanguagesComponent } from './region-languages.component';

describe('RegionLanguagesComponent', () => {
  let component: RegionLanguagesComponent;
  let fixture: ComponentFixture<RegionLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
