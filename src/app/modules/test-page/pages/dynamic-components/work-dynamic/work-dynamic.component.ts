import {
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: '[app-work-dynamic]',
    templateUrl: './work-dynamic.component.html',
    styleUrls: ['./work-dynamic.component.scss'],
})
export class WorkDynamicComponent {
    @Input()
    public data: IWork;
}

export interface IWork {
    name: string
    salary: number
}
