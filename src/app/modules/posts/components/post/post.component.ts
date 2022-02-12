import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IPost} from 'modules/posts/system/interfaces';

@Component({
    selector: '[app-post]',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public post: IPost;

    public isPostPage: boolean = false;

    constructor(
        protected route: ActivatedRoute,
    ) {
        super({
            class: 'app-post'
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        if (!this.post && this.route.routeConfig?.path === 'post/:id') {
            this.post = this.route.snapshot.data.post;
            this.isPostPage = true;
            this.addModificator('post-page');
        }
    }
}
