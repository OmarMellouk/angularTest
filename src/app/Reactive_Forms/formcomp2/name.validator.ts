import { AbstractControl, ValidatorFn } from '@angular/forms';

/* export function validateName(control: AbstractControl){
    if(control.value.match(/[0-9]/g)){
      return { invalideName: true };
    }
    return null;
  }
 */
export function validateName(nameRegex: RegExp): ValidatorFn{
    return (control: AbstractControl):{[key: string]:boolean} | null =>{
        if(control.value.match(nameRegex)){
          return { invalideName: true };
        }
        return null;
      }
}