import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurpaiementComponent } from './vendeurpaiement.component';

describe('VendeurpaiementComponent', () => {
  let component: VendeurpaiementComponent;
  let fixture: ComponentFixture<VendeurpaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendeurpaiementComponent]
    });
    fixture = TestBed.createComponent(VendeurpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
