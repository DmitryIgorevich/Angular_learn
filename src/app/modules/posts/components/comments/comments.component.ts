import {ActivatedRoute} from '@angular/router';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IComment} from 'modules/posts/system/interfaces';

@Component({
    selector: '[app-comments]',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public comments: IComment[];

    constructor(
        protected route: ActivatedRoute,
    ) {
        super({
            class: 'app-comments',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.comments = this.route.snapshot.data.CommentsResolver;
    }
}
