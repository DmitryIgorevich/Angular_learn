import {Attribute, Component, OnInit, TemplateRef} from '@angular/core';

@Component({
    selector: '[app-test-template]',
    templateUrl: './test-interpolation.component.html',
    styleUrls: ['./test-interpolation.component.scss'],
})
export class TestTemplatesComponent implements OnInit {
    public testText: string = '';
    public names: {name: string}[] = [
        {name: 'Name1'},
        {name: 'Name2'},
    ];
    public valueFromInput: string;
    public twoWayBindValue: any;
    public ref1Value: string;
    public ref2Value: string;
    public valueNgTemplate: {name: string} = {name: 'Value for ng template'};

    constructor(
        @Attribute('type') public className: string
    ) { }

    ngOnInit() {
        console.log(this.className);

    }

    public setValueFromInput(data: string): void {
        this.valueFromInput = data;
    }

    public onInputChange(data: string): void {
        this.twoWayBindValue = data;
    }

    public logNgTemplate(data: TemplateRef<any>): void {
        console.log(data);
    }
}
