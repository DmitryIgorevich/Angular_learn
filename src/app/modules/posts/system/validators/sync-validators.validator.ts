import {
    AbstractControl,
    ValidatorFn,
} from '@angular/forms';

export function forbiddenSubstring(regExpression: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
        const isForbid = regExpression.test(control.value);
        return isForbid ? {forbidden: 'Запрещено это слово'} : null;
    };
}
