import {
    Component,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base/system/abstract.component';

@Component({
    selector: '[app-mock]',
    templateUrl: './mock.component.html',
    styleUrls: ['./mock.component.scss'],
})
export class MockComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {

    constructor() {
        super({
            class: 'app-mock',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
    }

    public get test(): string {
        console.log('MOCK getter');
        return 'MOCK';
    }
}
