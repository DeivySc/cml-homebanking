import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos-prestamos',
  templateUrl: './pagos-prestamos.component.html',
  styleUrls: ['./pagos-prestamos.component.scss']
})
export class PagosPrestamosComponent implements OnInit {

  prestamosPagar!: string;
  cuentaCargo!: string;

  prestamos = [
    {value: 1, title: 'Prendamás Clásico', moneda: 'dólares', cuenta: 102013201002201399},
    {value: 2, title: 'Prendamás Clásico', moneda: 'soles', cuenta: 1020132010022013582},
    {value: 3, title: 'Prendamás Clásico', moneda: 'dólares', cuenta: 102013201002201466},
  ];

  cuenta = [
    {value: 1, title: 'Cuenta Ahorros', moneda: 'dólares', monto: 150.25, cuenta: 102013201002201399},
    {value: 2, title: 'Cuenta Ahorros', moneda: 'soles', monto: 60, cuenta: 1020132010022013582},
    {value: 3, title: 'Cuenta Ahorros', moneda: 'dólares', monto: 100, cuenta: 102013201002201466},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
