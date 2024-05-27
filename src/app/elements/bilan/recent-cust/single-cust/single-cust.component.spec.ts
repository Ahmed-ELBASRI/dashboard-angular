import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCustComponent } from './single-cust.component';

describe('SingleCustComponent', () => {
  let component: SingleCustComponent;
  let fixture: ComponentFixture<SingleCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCustComponent]
    });
    fixture = TestBed.createComponent(SingleCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
