import { FormGroup, ValidatorFn } from '@angular/forms';

export function validatePassword(
    control1: string,
    control2: string
    ):ValidatorFn{
        return (formGroup: FormGroup): {[key: string]
        :boolean} | null => {
            const password = formGroup.controls[control1];
            const cpassword = formGroup.controls[control2];
            if(
                password.dirty &&
                cpassword.dirty &&
                password.value !== cpassword.value
            ){
                cpassword.setErrors({wrongPassword: true});
            }
            return null;
        };
    }