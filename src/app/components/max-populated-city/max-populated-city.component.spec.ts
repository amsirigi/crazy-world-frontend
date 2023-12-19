import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPopulatedCityComponent } from './max-populated-city.component';

describe('MaxPopulatedCityComponent', () => {
  let component: MaxPopulatedCityComponent;
  let fixture: ComponentFixture<MaxPopulatedCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaxPopulatedCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxPopulatedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
