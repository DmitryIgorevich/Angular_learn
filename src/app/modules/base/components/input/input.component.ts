import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base/system/abstract.component';

@Component({
    selector: '[app-input]',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public control: FormControl;

    @Input()
    public placeholder: string = 'placeholder';

    @Input()
    public type: string;

    @Input()
    public name: string;

    constructor() {
        super({
            class: 'app-input',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
    }

    public get error(): string {
        const errors = this.control.errors;
        console.log('getter');

        if (errors) {
            return 'ошибка';
        }

        return '';
    }
}
