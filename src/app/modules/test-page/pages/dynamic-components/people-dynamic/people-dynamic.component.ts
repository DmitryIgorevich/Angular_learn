import {
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: '[app-people-dynamic]',
    templateUrl: './people-dynamic.component.html',
    styleUrls: ['./people-dynamic.component.scss'],
})
export class PeopleDynamicComponent {
    @Input()
    public data: IPeople;
}

export interface IPeople {
    name: string
    age: number
    sex: 'male' | 'female'
}
