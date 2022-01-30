import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';

@Component({
    selector: '[app-detection-parent]',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetectionParentComponent implements AfterViewInit, AfterViewChecked {
    public simpleValueForChild: number = 0;
    public difficultValueForChild: IDifficultValue = {
        name: 'First name',
        age: 22,
    };
    public localValue: number = 0;

    constructor(
        protected cdr: ChangeDetectorRef
    ) { }

    public ngAfterViewInit(): void {
        console.log('ngAfterViewInit DetectionParentComponent');
    }

    public ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked DetectionParentComponent');
    }

    public changeLocalValue(): void {
        setTimeout(() => {
            console.log('changeLocalValue timer end');
            this.localValue = 100;
        }, 2000);
    }

    public changeCounter(up: boolean = false): void {
        if (up) {
            this.simpleValueForChild += 1;
            return;
        }

        this.simpleValueForChild -= 1;
    }

    public changeCounterByTimer(): void {
        setTimeout(() => {
            this.simpleValueForChild = 10;
        }, 1000);
    }

    public changeCounterByPromise(): void {
        new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        }).then(() => {
            this.simpleValueForChild = 20;
        });
    }

    public changeDifficultOnNew(): void {
        this.difficultValueForChild = {
            name: 'New name',
            age: 50,
        };
    }

    public changeDifficultOnOld(): void {
        this.difficultValueForChild = {
            name: 'Old name',
            age: 22,
        };

    }

    public modifyDifficult(): void {
        this.difficultValueForChild.name = 'Setted new value';
        this.difficultValueForChild.age = 100;
    }

    public modifyDifficultMarkForCheck(): void {
        this.difficultValueForChild.name = 'Setted new value markForCheck';
        this.difficultValueForChild.age = 100000;
        this.cdr.detectChanges();
    }
}

export interface IDifficultValue {
    name: string
    age: number
}
