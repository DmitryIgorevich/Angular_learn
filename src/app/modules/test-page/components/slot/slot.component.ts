import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-slot',
    templateUrl: './slot.component.html',
    styleUrls: ['./slot.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotComponent implements OnInit {
    public value: number = 0;

    constructor() { }

    public ngOnInit(): void {
    }

    public plus(): void {
        this.value += 1;
    }

    public minus(): void {
        this.value -= 1;
    }
}
