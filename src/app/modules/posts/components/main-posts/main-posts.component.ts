import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';

@Component({
    selector: '[app-main-posts]',
    templateUrl: './main-posts.component.html',
    styleUrls: ['./main-posts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPostsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit, ITest {

    constructor() {
        super({
            class: 'app-main-posts',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
    }

    public test(): string {
        return '';
    }
}

interface ITest {
    test: () => void
}
