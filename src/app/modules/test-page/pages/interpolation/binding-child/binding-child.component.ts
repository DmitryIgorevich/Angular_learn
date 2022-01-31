import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: '[app-binding-child]',
    templateUrl: './binding-child.component.html',
    styleUrls: ['./binding-child.component.scss'],
})
export class BindingChildComponent {
    @Input() public text: string;
    @Output() public textChange: EventEmitter<string> = new EventEmitter();

    constructor() { }

    public onChangeInput(event: Event): void {
        this.text = (event.target as HTMLInputElement).value;
        this.textChange.emit(this.text);
    }
}
