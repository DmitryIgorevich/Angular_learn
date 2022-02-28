import {Injectable} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {
    catchError,
    delay,
    map,
} from 'rxjs/operators';

export function lettersRequired(): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const isForbid = (/\wА-яЁ/).test(control.value);

        return of()
            .pipe(
                delay(2000),
                map(() => {
                    return isForbid ? {noLetters: true} : null;
                }),
            );
    };
}

@Injectable({providedIn: 'root'})
export class LettersRequired implements AsyncValidator {
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const isForbid = (/\w/).test(control.value);

        return of(1)
            .pipe(
                delay(2000),
                map(() => {
                    return isForbid ? {noLetters: true} : null;
                }),
                catchError(() => of(null)),
            );
    }
}
