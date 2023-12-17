import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFactsComponent } from './world-facts.component';

describe('WorldFactsComponent', () => {
  let component: WorldFactsComponent;
  let fixture: ComponentFixture<WorldFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorldFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
