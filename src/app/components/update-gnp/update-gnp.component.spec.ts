import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGnpComponent } from './update-gnp.component';

describe('UpdateGnpComponent', () => {
  let component: UpdateGnpComponent;
  let fixture: ComponentFixture<UpdateGnpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGnpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
