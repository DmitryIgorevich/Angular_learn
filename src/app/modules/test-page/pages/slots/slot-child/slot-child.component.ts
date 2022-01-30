import {
    AfterContentChecked,
    AfterContentInit,
    Component,
} from '@angular/core';

@Component({
    selector: '[app-slot-child]',
    templateUrl: './slot-child.component.html',
    styleUrls: ['./slot-child.component.scss'],
})
export class SlotChildComponent implements AfterContentInit, AfterContentChecked {

    constructor() { }

    public ngAfterContentInit(): void {
        console.log('ngAfterContentInit SlotChildComponent');
    }

    public ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked SlotChildComponent');
    }
}
