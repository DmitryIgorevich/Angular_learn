import {Component} from '@angular/core';

import {
    WorkDynamicComponent,
    IWork,
} from 'modules/test-page/pages/dynamic-components/work-dynamic/work-dynamic.component';

@Component({
    selector: '[app-parent-dynamic]',
    templateUrl: './parent-dynamic.component.html',
    styleUrls: ['./parent-dynamic.component.scss'],
})
export class ParentDynamicComponent {
    public components: any[] = [
        {
            component: WorkDynamicComponent,
            data: <IWork>{
                name: 'Программист',
                salary: 20000,
            },
        },
        {
            component: WorkDynamicComponent,
            data: <IWork>{
                name: 'ПМ',
                salary: 10,
            },
        },
    ];
}
