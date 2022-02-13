import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IUser} from 'modules/posts/system/interfaces';

@Component({
    selector: '[app-user]',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public user: IUser;

    public isUserPage: boolean = false;

    constructor(
        protected route: ActivatedRoute,
    ) {
        super({
            class: 'app-user',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        if (!this.user) {
            this.user = this.route.snapshot.data.user;
            this.isUserPage = true;
            this.addModificator('user-page');
        }
    }
}
