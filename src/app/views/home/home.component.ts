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

  constructor() { }

  ngOnInit(): void {
  }

}
