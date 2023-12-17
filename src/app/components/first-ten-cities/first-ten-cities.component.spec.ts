import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTenCitiesComponent } from './first-ten-cities.component';

describe('FirstTenCitiesComponent', () => {
  let component: FirstTenCitiesComponent;
  let fixture: ComponentFixture<FirstTenCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstTenCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstTenCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
