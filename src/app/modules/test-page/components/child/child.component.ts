import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewContainerRef,
} from '@angular/core';

import {IDifficultValue} from 'modules/test-page/components/parent/parent.component';

@Component({
    selector: '[app-detection-child]',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildDetectionComponent implements OnChanges, OnInit, DoCheck {
    @Input() public simpleValueFromParent: number;
    @Input() public difficultValueFromParent: IDifficultValue;

    public localSimpleValue: number = 0;
    public localDifficultValue: IWork = {
        name: 'Programmer',
        salary: 5000,
        test: {
            value: 'Initial',
        },
    };
    public valueFromService: number;

    constructor(
        protected cdr: ChangeDetectorRef,
        protected view: ViewContainerRef
    ) {
        //* Включить, чтобы посмотреть, как работает в сочетании с detectChanges
        // this.cdr.detach();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }

    public ngOnInit(): void {
        console.log('init');
    }

    public ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    public get localValueGetter(): number {
        console.log('localValueGetter');
        return 1;
    }

    public changeLocalValue(up: boolean = false): void {
        if (up) {
            this.localSimpleValue += 1;
            return;
        }

        this.localSimpleValue -= 1;
    }

    public changeCounterWithCheckNoChanges(): void {
        this.cdr.checkNoChanges();
        this.localSimpleValue = -500;
    }

    public changeLocalValuePromise(): void {
        new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        }).then(() => {
            this.localSimpleValue = 20;
        });
    }

    public changeLocalValuePromiseMarkForCheck(): void {
        new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        }).then(() => {
            this.localSimpleValue = -100;
            this.cdr.markForCheck();
        });
    }

    public changeLocalValueTimer(): void {
        setTimeout(() => {
            this.localSimpleValue = 10;
        }, 1000);
    }

    public setNewDifficult(): void {
        this.localDifficultValue = {
            name: 'Driver',
            salary: 1000,
            test: {
                value: 'New',
            },
        };
    }

    public setOldDifficult(): void {
        this.localDifficultValue = {
            name: 'Programmer',
            salary: 5000,
            test: {
                value: 'Initial',
            },
        };
    }

    public setModifiedDifficult(): void {
        this.localDifficultValue.name = 'Worker';
        this.localDifficultValue.salary = 1000000000;
        this.localDifficultValue.test.value = 'Modified';
    }

    public runDetectChanges(): void {
        this.cdr.detectChanges();
    }
}

interface IWork {
    name: string
    salary: number
    test: {
        value: string
    }
}
