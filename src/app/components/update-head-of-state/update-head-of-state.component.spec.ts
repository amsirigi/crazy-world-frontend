import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeadOfStateComponent } from './update-head-of-state.component';

describe('UpdateHeadOfStateComponent', () => {
  let component: UpdateHeadOfStateComponent;
  let fixture: ComponentFixture<UpdateHeadOfStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateHeadOfStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateHeadOfStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
