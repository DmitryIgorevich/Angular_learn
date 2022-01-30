import {Injectable} from '@angular/core';

@Injectable()
export class ServiceNotProvidedInModuleService {
    private _test: number = 0;

    constructor() { }

    public get test(): number {
        return this._test;
    }

    public set test(data: number) {
        this._test = data;
    }
}
