import {Injectable} from '@angular/core';
import {SecondService} from 'app/modules/test-page/pages/di/second.service';

@Injectable({
    providedIn: 'platform',

    //переопределяем класс, при инжектировании MainService будет инжектировать SecondService
    useClass: SecondService,

    // переопределяем на обычное значение, может быть чем угодно
    // useValue: {
    //     log: () => console.log('Обычный обьект'),
    // },

    // можно вернуть из функции любое значение по условию например. Удобная функция для динамического определения зависимости
    // useFactory: () => {
    //     return {
    //         log: () => {
    //             console.log('useFactory обычный обьект');
    //         },
    //     };
    // },
    // useExisting: SecondService,
})
export class MainService {
    public text: string = 'MainService';

    constructor() {
        console.log('created', this);
    }

    public log(): void {
        console.log('MainService log');
    }
}
