import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: '[app-parent-encapsulation]',
    templateUrl: './parent-encapsulation.component.html',
    styleUrls: ['./parent-encapsulation.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class ParentEncapsulationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
