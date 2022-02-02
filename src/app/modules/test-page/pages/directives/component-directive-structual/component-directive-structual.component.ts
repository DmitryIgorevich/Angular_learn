import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: '[app-component-directive-structual]',
    templateUrl: './component-directive-structual.component.html',
    styleUrls: ['./component-directive-structual.component.scss'],
})
export class ComponentDirectiveStructualComponent implements OnInit {
    public test: boolean = false;

    constructor() {}

    public ngOnInit(): void {
    }

    public toggleTest(): void {
        this.test = !this.test;
    }
}
