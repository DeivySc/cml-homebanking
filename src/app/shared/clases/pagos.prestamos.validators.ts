import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

export class PagosPrestamosValidators {

  static validartoken(control: FormControl): ValidationErrors | null {
    let token = '1234'
    if (control.value === token){
      return null;
    }else {
      return {validartoken: true};
    }
  }

  static selectCargo(control: FormControl): ValidationErrors | null {
    let number = 0
    if (control.value !== number) {
      return null;
    }else{
      return {selectCargo: true};
    }
  }

  static validatorCarga(fc: AbstractControl) {
    const value = fc.value as number;
    const isInvalid = 0 !== value;
    return isInvalid ? {validatorCarga: true} : null;
  }
}
