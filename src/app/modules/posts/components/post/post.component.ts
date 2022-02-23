import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {takeUntil} from 'rxjs/operators';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IPost} from 'modules/posts/system/interfaces';
import {PostsService} from 'modules/posts/services/posts.service';

@Component({
    selector: '[app-post]',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public post: IPost;

    public isPostPage: boolean = false;
    public isFormVisible: boolean = false;
    public titleControl: FormControl;
    public bodyControl: FormControl;
    public form: FormGroup;

    constructor(
        protected route: ActivatedRoute,
        protected postsService: PostsService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-post',
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.initForm();

        if (!this.post) {
            this.post = this.route.snapshot.data.PostResolver;
            this.isPostPage = true;
            this.addModificator('post-page');
        }
    }

    public toggleForm(): void {
        this.isFormVisible = !this.isFormVisible;
    }

    public onSubmit(): void {
        this.cdr.detectChanges();
        if (this.form.invalid) {
            return;
        }

        this.form.disable();
        this.postsService.updatePost(this.post.id, this.form.value)
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                this.post = data;
                this.form.enable();
                this.form.reset();
                this.cdr.markForCheck();
            });
    }

    protected initForm(): void {
        this.titleControl = new FormControl('', {
            validators: [
                Validators.required,
            ],
        });
        this.bodyControl = new FormControl('', {
            validators: [
                Validators.required,
            ],
        });

        this.form = new FormGroup({
            title: this.titleControl,
            body: this.bodyControl,
        });
    }
}
