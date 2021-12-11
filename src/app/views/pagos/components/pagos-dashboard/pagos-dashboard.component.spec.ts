import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosDashboardComponent } from './pagos-dashboard.component';

describe('PagosDashboardComponent', () => {
  let component: PagosDashboardComponent;
  let fixture: ComponentFixture<PagosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
