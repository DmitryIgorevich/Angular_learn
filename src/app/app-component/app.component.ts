import {Component} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'app/modules/base';

@Component({
    selector: '[app-root]',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends AbstractComponent<IAbstractComponentParams> {
    constructor() {
        super({
            class: 'app-root',
        });
    }
}
