import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewChild,
} from '@angular/core';

import {ServiceNotProvidedInModuleService} from 'modules/test-page/pages/data-passing/services/service-not-provided-in-module.service';
import {DataPassChildComponent} from 'modules/test-page/pages/data-passing/data-pass-child/data-pass-child.component';
import {ServiceFromChildService} from 'modules/test-page/pages/data-passing/services/service-from-child.service';

@Component({
    selector: '[app-data-pass-parent]',
    templateUrl: './data-pass-parent.component.html',
    styleUrls: ['./data-pass-parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ServiceNotProvidedInModuleService,
    ],
})
export class DataPassParentComponent implements OnInit {
    public heroes: IHero[] = [
        {
            age: 10,
            name: 'first',
            masterName: 'first master',
            counter: 0,
        },
        {
            age: 20,
            name: 'second',
            masterName: 'second master',
            counter: 0,
        },
    ];
    public commonText: string = 'Общий текст';

    @ViewChild(DataPassChildComponent)
    public childComponent: DataPassChildComponent;

    @ViewChild('child')
    protected childReference: DataPassChildComponent;

    @ViewChild(ServiceFromChildService)
    protected serviceFromChildService: ServiceFromChildService;

    constructor(
        protected serviceNotProvidedInModuleService: ServiceNotProvidedInModuleService
    ) {}

    public ngOnInit(): void {
        console.log(this);
    }

    public logChildComponent(): void {
        console.log(this.childComponent);
    }

    public logChildComponentRef(): void {
        console.log(this.childReference);
    }

    public changeCounterserviceFromChildService(up: boolean = false): void {
        if (up) {
            this.serviceFromChildService.number += 1;
        } else {
            this.serviceFromChildService.number -= 1;
        }

        console.log(DataPassParentComponent.name, this.serviceFromChildService.number);
    }

    public changeCounter(up: boolean = false): void {
        if (up) {
            this.serviceNotProvidedInModuleService.test += 1;
        } else {
            this.serviceNotProvidedInModuleService.test -= 1;
        }

        console.log(DataPassParentComponent.name, this.serviceNotProvidedInModuleService.test);
    }

    public counterDown(): void {
        this.heroes = this.heroes.map(item => {
            return Object.assign({}, item, {counter: --item.counter});
        });
    }

    public counterChangedHandler(data: IHero): void {
        this.heroes = this.heroes.map(item => {
            if (item === data) {
                return Object.assign({}, item, {counter: ++item.counter});
            }

            return item;
        });
    }

    public inputChangedHandler(data: string): void {
        console.log(data);
    }
}

export interface IHero {
    name: string
    masterName: string
    age: number
    counter: number
}
