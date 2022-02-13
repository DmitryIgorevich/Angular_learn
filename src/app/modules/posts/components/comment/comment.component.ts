import {ActivatedRoute} from '@angular/router';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'app/modules/base';
import {PostsService} from 'modules/posts/services/posts.service';
import {IComment} from 'modules/posts/system/interfaces';

@Component({
    selector: '[app-comment]',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public comment: IComment;

    public isCommentPage: boolean;

    constructor(
        protected postsService: PostsService,
        protected route: ActivatedRoute,
    ) {
        super({
            class: 'app-comment',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        if (!this.comment) {
            this.comment = this.route.snapshot.data.CommentResolver;
            this.isCommentPage = true;
            this.addModificator('comment-page');
        }
    }
}
