import {
    AfterContentChecked,
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

@Component({
    selector: 'app-slot',
    templateUrl: './slot.component.html',
    styleUrls: ['./slot.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotComponent implements AfterContentInit, AfterContentChecked {
    public value: number = 0;

    constructor() { }

    public ngAfterContentInit(): void {
        console.log('ngAfterContentInit SlotComponent');
    }

    public ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked SlotComponent');
    }

    public plus(): void {
        this.value += 1;
    }

    public minus(): void {
        this.value -= 1;
    }
}
