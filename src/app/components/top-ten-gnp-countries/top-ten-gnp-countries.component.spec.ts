import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenGnpCountriesComponent } from './top-ten-gnp-countries.component';

describe('TopTenGnpCountriesComponent', () => {
  let component: TopTenGnpCountriesComponent;
  let fixture: ComponentFixture<TopTenGnpCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTenGnpCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTenGnpCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
