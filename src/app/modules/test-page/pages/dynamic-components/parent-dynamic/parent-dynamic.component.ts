import {
    Component,
    Type,
} from '@angular/core';

import {
    WorkDynamicComponent,
    IWork,
} from 'modules/test-page/pages/dynamic-components/work-dynamic/work-dynamic.component';
import {
    PeopleDynamicComponent,
    IPeople,
} from 'modules/test-page/pages/dynamic-components/people-dynamic/people-dynamic.component';

@Component({
    selector: '[app-parent-dynamic]',
    templateUrl: './parent-dynamic.component.html',
    styleUrls: ['./parent-dynamic.component.scss'],
})
export class ParentDynamicComponent {
    public components: TComponents = [
        {
            component: WorkDynamicComponent,
            data: {
                name: 'Программист',
                salary: 20000,
            },
        },
        {
            component: WorkDynamicComponent,
            data: {
                name: 'ПМ',
                salary: 10,
            },
        },
        {
            component: PeopleDynamicComponent,
            data: {
                name: 'Dima',
                age: 23,
                sex: 'male',
            },
        },
        {
            component: PeopleDynamicComponent,
            data: {
                name: 'Marya',
                age: 24,
                sex: 'female',
            },
        },
    ];
}

interface IComponents<C, T> {
    component: C
    data: T
}

export type TComponents = IComponents<
    Type<WorkDynamicComponent | PeopleDynamicComponent>,
    IWork | IPeople
>[]
