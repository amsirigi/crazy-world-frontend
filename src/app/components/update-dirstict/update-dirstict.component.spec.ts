import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDirstictComponent } from './update-dirstict.component';

describe('UpdateDirstictComponent', () => {
  let component: UpdateDirstictComponent;
  let fixture: ComponentFixture<UpdateDirstictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDirstictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDirstictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
