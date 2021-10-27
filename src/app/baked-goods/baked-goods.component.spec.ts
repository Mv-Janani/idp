import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedGoodsComponent } from './baked-goods.component';

describe('BakedGoodsComponent', () => {
  let component: BakedGoodsComponent;
  let fixture: ComponentFixture<BakedGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakedGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
