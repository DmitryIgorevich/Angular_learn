import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SecondService {
    public text: string = 'SecondService';

    constructor() {
        console.log('created', this);
    }

    public log(): void {
        console.log('SecondService log');
    }
}
