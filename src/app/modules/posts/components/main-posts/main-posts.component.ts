import {
    Component,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams
} from 'modules/base';

@Component({
    selector: '[app-main-posts]',
    templateUrl: './main-posts.component.html',
    styleUrls: ['./main-posts.component.scss'],
})
export class MainPostsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {

    constructor() {
        super({
            class: 'app-main-posts'
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
    }

}
