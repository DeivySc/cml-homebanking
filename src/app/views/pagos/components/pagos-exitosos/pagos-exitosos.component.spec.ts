import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosExitososComponent } from './pagos-exitosos.component';

describe('PagosExitososComponent', () => {
  let component: PagosExitososComponent;
  let fixture: ComponentFixture<PagosExitososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosExitososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosExitososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
