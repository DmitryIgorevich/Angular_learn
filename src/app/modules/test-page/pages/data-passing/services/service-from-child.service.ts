import {Injectable} from '@angular/core';

@Injectable()
export class ServiceFromChildService {
    private _number: number = 0;

    constructor() { }

    public get number(): number {
        return this._number;
    }

    public set number(data: number) {
        this._number = data;
    }
}
