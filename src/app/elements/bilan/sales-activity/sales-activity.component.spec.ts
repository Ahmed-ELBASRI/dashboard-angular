import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesActivityComponent } from './sales-activity.component';

describe('SalesActivityComponent', () => {
  let component: SalesActivityComponent;
  let fixture: ComponentFixture<SalesActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesActivityComponent]
    });
    fixture = TestBed.createComponent(SalesActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
