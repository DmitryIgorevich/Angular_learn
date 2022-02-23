import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IUser} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Component({
    selector: '[app-users]',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public users: IUser[];

    constructor(
        protected postsService: PostsService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-users',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.postsService.getUsers()
            .toPromise()
            .then(data => {
                this.users = data;
                this.cdr.markForCheck();
            });
    }

}
