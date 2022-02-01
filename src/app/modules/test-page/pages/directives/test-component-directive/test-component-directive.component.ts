import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-test-component-directive]',
    templateUrl: './test-component-directive.component.html',
    styleUrls: ['./test-component-directive.component.scss'],
})
export class TestComponentDirectiveComponent implements OnInit {
    public styles: Partial<CSSStyleDeclaration> = {
        color: 'red',
        backgroundColor: 'yellow',
        transition: '0.5s all ease',
        padding: '15px',
    };

    constructor() { }

    public ngOnInit(): void {
    }

}
