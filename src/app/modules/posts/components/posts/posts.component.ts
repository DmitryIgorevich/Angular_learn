import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams
} from 'modules/base';
import {IPost} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Component({
    selector: '[app-posts]',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public posts: IPost[];

    constructor(
        protected postsService: PostsService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-posts'
        });
    }

    public override ngOnInit() {
        super.ngOnInit();

        this.postsService.getPosts()
            .toPromise()
            .then(data => {
                this.posts = data;
                this.cdr.markForCheck();
            });
    }
}
