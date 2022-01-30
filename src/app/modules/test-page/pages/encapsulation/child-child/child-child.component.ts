import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: '[app-child-child]',
    templateUrl: './child-child.component.html',
    styleUrls: ['./child-child.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class ChildChildComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
