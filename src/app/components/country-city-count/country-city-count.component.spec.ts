import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCityCountComponent } from './country-city-count.component';

describe('CountryCityCountComponent', () => {
  let component: CountryCityCountComponent;
  let fixture: ComponentFixture<CountryCityCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryCityCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryCityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
