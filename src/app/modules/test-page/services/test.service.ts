import {Injectable} from '@angular/core';

@Injectable()
export class TestService {
    private _value: number = 1;

    constructor() {
        this.value = 10;
    }

    public set value(data: number) {
        setTimeout(() => {
            console.log('set value');
            this._value = data;
        }, 5000);
    }

    public get value(): number {
        return this._value;
    }
}
