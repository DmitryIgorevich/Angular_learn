import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

import {IHero} from 'modules/test-page/pages/data-passing/data-pass-parent/data-pass-parent.component';
import {ServiceNotProvidedInModuleService} from 'modules/test-page/pages/data-passing/services/service-not-provided-in-module.service';
import {ServiceFromChildService} from 'modules/test-page/pages/data-passing/services/service-from-child.service';

@Component({
    selector: '[app-data-pass-child]',
    templateUrl: './data-pass-child.component.html',
    styleUrls: ['./data-pass-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ServiceNotProvidedInModuleService,
        ServiceFromChildService,
    ],
})
export class DataPassChildComponent implements OnInit {
    @Input()
    public hero: IHero;

    @Input()
    public set text(data: string) {
        console.log('setter');
        this._text = data;
    }
    public get text(): string {
        console.log('getter');
        return this._text;
    }

    @Output()
    public counterChanged: EventEmitter<IHero> = new EventEmitter();

    @Output()
    public inputChanged: EventEmitter<string> = new EventEmitter();

    private _text: string;

    constructor(
        protected serviceNotProvidedInModuleService: ServiceNotProvidedInModuleService,
        protected serviceFromChildService: ServiceFromChildService
    ) { }

    public ngOnInit(): void {
    }

    public counterChange(up: boolean = false): void {
        if (up) {
            this.serviceNotProvidedInModuleService.test += 1;
        } else {
            this.serviceNotProvidedInModuleService.test -= 1;
        }

        console.log(DataPassChildComponent.name, this.serviceNotProvidedInModuleService.test);
    }

    public counterChangeserviceFromChildService(up: boolean = false): void {
        if (up) {
            this.serviceFromChildService.number += 1;
        } else {
            this.serviceFromChildService.number -= 1;
        }

        console.log(DataPassChildComponent.name, this.serviceFromChildService.number);
    }

    public changeCounterUp(): void {
        this.counterChanged.emit(this.hero);
    }

    public log(): void {
        console.log(DataPassChildComponent.name);
    }
}
