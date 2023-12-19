import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAvgPopulationComponent } from './district-avg-population.component';

describe('DistrictAvgPopulationComponent', () => {
  let component: DistrictAvgPopulationComponent;
  let fixture: ComponentFixture<DistrictAvgPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictAvgPopulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictAvgPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
