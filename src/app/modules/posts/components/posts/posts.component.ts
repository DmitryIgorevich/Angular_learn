import {ActivatedRoute} from '@angular/router';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';

import {delay} from 'rxjs/operators';

import {
    AbstractComponent,
    IAbstractComponentParams,
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
        protected route: ActivatedRoute,
        protected postsService: PostsService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-posts',
        });
    }

    public override ngOnInit() {
        super.ngOnInit();

        this.getPosts();
    }

    protected getPosts(): void {
        if (this.route.parent?.snapshot.data.UserResolver) {
            this.postsService.getUserPosts(this.route.parent.snapshot.data.UserResolver.id)
                .pipe(delay(500))
                .toPromise()
                .then(data => {
                    this.posts = data;
                    this.cdr.markForCheck();
                });

            return;
        }

        this.postsService.getPosts()
            .toPromise()
            .then(data => {
                this.posts = data;
                this.cdr.markForCheck();
            });
    }
}
