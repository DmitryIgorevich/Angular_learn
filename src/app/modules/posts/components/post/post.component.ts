import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import {
    AbstractComponent,
    IAbstractComponentParams,
} from 'modules/base';
import {IPost} from 'modules/posts/components/posts/posts.component';

@Component({
    selector: '[app-post]',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent extends AbstractComponent<IAbstractComponentParams> implements OnInit {
    @Input()
    public post: IPost;

    constructor() {
        super({
            class: 'app-post'
        });
    }

    public override ngOnInit(): void {
        super.ngOnInit();
    }

}
