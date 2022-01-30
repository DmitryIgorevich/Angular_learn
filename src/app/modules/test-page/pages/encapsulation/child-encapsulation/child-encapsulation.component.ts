import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: '[app-child-encapsulation]',
    templateUrl: './child-encapsulation.component.html',
    styleUrls: ['./child-encapsulation.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class ChildEncapsulationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
