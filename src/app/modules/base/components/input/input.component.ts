import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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

    @Input()
    public updateControl$: Subject<void>;

    constructor(
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-input',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.updateControl$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.cdr.markForCheck();
            });
    }

    public get error(): string {
        const errors = this.control.errors;

        if (errors) {
            return 'ошибка';
        }

        return '';
    }
}
