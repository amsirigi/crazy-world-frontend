import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenPopulatedCitiesComponent } from './top-ten-populated-cities.component';

describe('TopTenPopulatedCitiesComponent', () => {
  let component: TopTenPopulatedCitiesComponent;
  let fixture: ComponentFixture<TopTenPopulatedCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTenPopulatedCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTenPopulatedCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
