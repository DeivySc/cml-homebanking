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
  prestamosPagar: any = '';
  cuentaCargo: any = '';

  prestamos = [
    {value: 1, title: 'Prendamás Clásico', moneda: 'Dólares', cuenta: 102013201002201399},
    {value: 2, title: 'Prendamás Clásico', moneda: 'Soles', cuenta: 1020132010022013582},
    {value: 3, title: 'Mes Caja Pyme', moneda: 'Soles', cuenta: 102013201002201399},
    {value: 4, title: 'Mes Caja Pyme', moneda: 'Dólares', cuenta: 102013201002201399},
    {value: 3, title: 'Crédito planilla cash', moneda: 'Soles', cuenta: 102013201002201399},
    {value: 4, title: 'Crédito de consumo personal', moneda: 'Dólares', cuenta: 1020132010022013582},
    {value: 3, title: 'Préstamo hipotecario', moneda: 'Soles', cuenta: 102013201002201399},
    {value: 4, title: 'Préstamo hipotecario', moneda: 'Dólares', cuenta: 102013201002201399}
  ];

  cuenta = [
    {value: 1, title: 'Cuenta Ahorros', moneda: 'Dólares', monto: 150.25, cuenta: 102013201002201399},
    {value: 2, title: 'Cuenta Ahorros', moneda: 'Soles', monto: 60, cuenta: 1020132010022013582},
    {value: 3, title: 'Cuenta Ahorros', moneda: 'Soles', monto: 523.21, cuenta: 10201232100169937},
    {value: 4, title: 'Cuenta Ahorros', moneda: 'Dólares', monto: 500.00, cuenta: 102013201002201422},
  ];

  preload = false;
  pagomin = '1';
  tokenNumber = '';
  cuota = '2';
  importe = '3';


  selectOrigin = new FormControl('', [Validators.required]);
  selectDestiny = new FormControl('', [Validators.required, PagosPrestamosValidators.selectCargo]);
  token = new FormControl('', [Validators.required, PagosPrestamosValidators.validartoken, Validators.minLength(4)]);

  constructor(private _formBuilder: FormBuilder) { }



  getErrorMessageSelectOrigin(){
    if (this.selectOrigin.hasError('required')){
      return 'El préstamo es requerido.';
    }
    return null;
  }

  getErrorMessageSelectDestiny(){
    if (this.selectDestiny.hasError('required')){
      return 'El cargo es requerido.';
    }else {
      if (this.selectDestiny.hasError('selectCargo')){
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
      selectDestiny: this.selectDestiny,
      token: this.token,
    })
  }

}
