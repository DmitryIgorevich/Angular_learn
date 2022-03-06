import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MockService {
    private _value: string = 'init';

    public get value(): string {
        return this._value;
    }

    public set value(data: string) {
        this._value = data;
    }
}
