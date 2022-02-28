import {ActivatedRoute} from '@angular/router';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';

import {Subject} from 'rxjs';

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
    public form: FormGroup;
    public updateControl$: Subject<void> = new Subject();

    constructor(
        protected postsService: PostsService,
        protected route: ActivatedRoute,
        protected fb: FormBuilder,
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

        this.initForm();
    }

    public onSubmit(): void {
        console.log(this.form);
    }

    protected initForm(): void {
        this.form = this.fb.group({
            name: ['', {validators: [Validators.required]}],
            body: ['', {validators: [Validators.required]}],
        });
    }
}
