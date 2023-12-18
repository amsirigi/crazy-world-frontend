import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictByCodeComponent } from './district-by-code.component';

describe('DistrictByCodeComponent', () => {
  let component: DistrictByCodeComponent;
  let fixture: ComponentFixture<DistrictByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictByCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
