import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cuentas = [
    {title: 'Cuenta - ahorros', moneda: 'soles',saldo: 36.40},
    {title: 'Cuenta a plazo fijo', moneda: 'dolares', saldo: 105.96},
    {title: 'CTS', moneda: 'soles', saldo: 26.40},
    {title: 'Cuenta - ahorros', moneda: 'dolares',saldo: 100.40},
    {title: 'CTS', moneda: 'dolares', saldo: 306.40},
    {title: 'Cuenta a plazo fijo', moneda: 'soles', saldo: 16.40},
  ]

  prestamos = [
    {title: 'Consumo prendamás  clásico', pagomin: 342.20, fechap: '', capital: 36.40},
    {title: 'Consumo prendamás  clásico', pagomin: 432.20, fechap: '', capital: 46.40},
    {title: 'Consumo prendamás  clásico', pagomin: 242.20, fechap: '', capital: 96.40},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
