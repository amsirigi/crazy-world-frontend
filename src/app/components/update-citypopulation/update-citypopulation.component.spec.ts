import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCitypopulationComponent } from './update-citypopulation.component';

describe('UpdateCitypopulationComponent', () => {
  let component: UpdateCitypopulationComponent;
  let fixture: ComponentFixture<UpdateCitypopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCitypopulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCitypopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
