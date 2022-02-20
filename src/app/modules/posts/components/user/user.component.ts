import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';

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

    protected isPostsVisible: boolean = false;

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
    ) {
        super({
            class: 'app-user',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.initPostsVisibility();
        this.getUser();
    }

    public togglePosts(event: Event): void {
        event.preventDefault();

        this.router.navigate(
            [this.isPostsVisible ? ('../' + this.user.id) : 'posts'],
            {relativeTo: this.route},
        );
        this.isPostsVisible = !this.isPostsVisible;
    }

    protected getUser(): void {
        if (this.user) {
            return;
        }

        this.user = this.route.snapshot.data.UserResolver;
        this.isUserPage = true;
        this.addModificator('user-page');
    }

    protected initPostsVisibility(): void {
        if (this.router.url.match(this.route.snapshot.params.id + '/posts')) {
            this.isPostsVisible = true;
        }
    }
}
