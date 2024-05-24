import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCustComponent } from './recent-cust.component';

describe('RecentCustComponent', () => {
  let component: RecentCustComponent;
  let fixture: ComponentFixture<RecentCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentCustComponent]
    });
    fixture = TestBed.createComponent(RecentCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
