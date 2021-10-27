import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndServeComponent } from './food-and-serve.component';

describe('FoodAndServeComponent', () => {
  let component: FoodAndServeComponent;
  let fixture: ComponentFixture<FoodAndServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAndServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
