import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestLifeExpectancyComponent } from './highest-life-expectancy.component';

describe('HighestLifeExpectancyComponent', () => {
  let component: HighestLifeExpectancyComponent;
  let fixture: ComponentFixture<HighestLifeExpectancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestLifeExpectancyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestLifeExpectancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
