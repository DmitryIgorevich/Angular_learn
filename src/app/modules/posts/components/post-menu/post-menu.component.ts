import {
    Component,
    OnInit
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams
} from 'modules/base';

@Component({
    selector: '[app-post-menu]',
    templateUrl: './post-menu.component.html',
    styleUrls: ['./post-menu.component.scss']
})
export class PostMenuComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {

    constructor() {
        super({
            class: 'app-post-menu'
        });
    }

    public override ngOnInit() {
        super.ngOnInit();
    }

}
