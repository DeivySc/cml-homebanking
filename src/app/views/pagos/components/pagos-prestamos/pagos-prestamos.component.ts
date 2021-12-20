import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PagosPrestamosValidators} from "../../../../shared/clases/pagos.prestamos.validators";

@Component({
  selector: 'app-pagos-prestamos',
  templateUrl: './pagos-prestamos.component.html',
  styleUrls: ['./pagos-prestamos.component.scss']
})
export class PagosPrestamosComponent implements OnInit {

  pagosPrestamos!: FormGroup;

  prestamosPagar = '';
  cuentaCargo = '';

  prestamos = [
    {value: 1, title: 'Prendamás Clásico', moneda: 'dólares', cuenta: 102013201002201399},
    {value: 2, title: 'Prendamás Clásico', moneda: 'soles', cuenta: 1020132010022013582},
    {value: 3, title: 'Prendamás Clásico', moneda: 'dólares', cuenta: 102013201002201466},
  ];

  cuenta = [
    {value: 1, title: 'Cuenta Ahorros', moneda: 'dólares', monto: 150.25, cuenta: 102013201002201399},
    {value: 2, title: 'Cuenta Ahorros', moneda: 'soles', monto: 60, cuenta: 1020132010022013582},
    {value: 3, title: 'Cuenta Ahorros', moneda: 'dólares', monto: 100, cuenta: 102013201002201466},
    {value: 4, title: 'Cuenta Ahorros', moneda: 'soles', monto: 0, cuenta: 102013201002201422},
  ];

  preload = false;
  pagomin = '1';
  tokenNumber = ''

  selectOrigin = new FormControl('', [Validators.required]);
  selectDestiniti = new FormControl('', [Validators.required, PagosPrestamosValidators.selectCargo]);
  token = new FormControl('', [Validators.required, PagosPrestamosValidators.validartoken, Validators.minLength(4)]);

  constructor(private _formBuilder: FormBuilder) { }



  getErrorMessageSelectOrigin(){
    if (this.selectOrigin.hasError('required')){
      return 'El préstamo es requerido.';
    }
    return null;
  }

  getErrorMessageSelectDestiniti(){
    if (this.selectDestiniti.hasError('required')){
      return 'El cargo es requerido.';
    }else {
      if (this.selectDestiniti.hasError('selectCargo')){
        return 'La cuenta de cargo seleccionada no tiene saldo suficiente para realizar el pago del préstamo';
      }
    }
    return;
  }

  getErrorMessageToken(){
    if (this.token.hasError('required')) {
      return 'Este campo es requerido.';
    }else{
      if (this.token.hasError('validartoken')){
        return  'Ingresa el Token Digital correcto';
      }
    }
    return null;
  }

  imprimit(){
    console.log(this.prestamosPagar);
    console.log(this.cuentaCargo);
  }

  ngOnInit() {
    this.pagosPrestamos = this._formBuilder.group({
      selectOrigin: this.selectOrigin,
      selectDestiniti: this.selectDestiniti,
      token: this.token,
    })
  }

}
