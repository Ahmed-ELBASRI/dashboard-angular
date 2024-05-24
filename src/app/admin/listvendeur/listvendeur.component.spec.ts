import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvendeurComponent } from './listvendeur.component';

describe('ListvendeurComponent', () => {
  let component: ListvendeurComponent;
  let fixture: ComponentFixture<ListvendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListvendeurComponent]
    });
    fixture = TestBed.createComponent(ListvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
