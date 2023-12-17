import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulatedcountriesComponent } from './populatedcountries.component';

describe('PopulatedcountriesComponent', () => {
  let component: PopulatedcountriesComponent;
  let fixture: ComponentFixture<PopulatedcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulatedcountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulatedcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
