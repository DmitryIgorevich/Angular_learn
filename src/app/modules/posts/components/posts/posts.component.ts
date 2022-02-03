import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    OnInit
} from '@angular/core';

import {takeUntil} from 'rxjs/operators';

import {RequestService} from 'modules/base/services';
import {
    AbstractComponent,
    IAbstractComponentParams
} from 'modules/base';

@Component({
    selector: '[app-posts]',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    public posts: IPost[];

    constructor(
        protected requestService: RequestService,
        protected cdr: ChangeDetectorRef,
    ) {
        super({
            class: 'app-posts'
        });
    }

    public override ngOnInit() {
        super.ngOnInit();

        this.requestService.get<IPost[]>('posts')
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(data => {
                this.posts = data;
                this.cdr.markForCheck();
            });
    }
}

export interface IPost {
    body: string
    id: number
    title: string
    userId: string
}
